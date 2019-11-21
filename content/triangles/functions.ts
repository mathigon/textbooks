// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================


import {delay, isOneOf} from '@mathigon/core';
import {round, isInteger, Point, Circle, isLineLike} from '@mathigon/fermat';
import {hover} from '@mathigon/boost';
import {GeoMovablePoint, Geopad, GeoPath, GeoPoint, Slider, Step} from '../shared/types';


// -----------------------------------------------------------------------------
// Triangle Properties

function waitToDraw($step: Step, $geopad: Geopad, shapes: string[],
                    classes: string[], targets: string[]) {
  $geopad.waitForPaths(shapes, {
    onCorrect(path, i) {
      $step.addHint('correct');
      path.$el.addClass(classes[i]);
      path.$el.setAttr('target', targets[i]);
      $step.score('s' + i);
    },
    onIncorrect() {
      $step.addHint('incorrect');
    },
    onHint(path, i) {
      $step.addHint('draw-hint', {force: true});
      path.$el.addClass(classes[i]);
      path.$el.setAttr('target', targets[i]);
      $step.score('s' + i);
    }
  });
  $geopad.on('add:point', (e: GeoPoint) => e.remove(0));
}

export function medians($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.setActiveTool('line');

  waitToDraw($step, $geopad,
      ['segment(a,bc)', 'segment(b,ac)', 'segment(c,ab)'],
      ['red', 'blue', 'green'],
      ['ratio', '', '']);

  $step.onScore('s0 s1 s2', () => {
    $geopad.setActiveTool('move');
    $geopad.on('moveEnd', () => $step.score('move'));
  });
}

export function centerOfMass($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.on('moveEnd', () => $step.score('move'));
}

export function circumcircle($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.onScore('blank-0', () => {
    $geopad.setActiveTool('perpBisector');
    $geopad.showGesture('a', 'c');
  });

  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));
  $step.onScore('blank-2', () => $geopad.animateConstruction('circumcircle'));

  waitToDraw($step, $geopad,
      ['line(a,b).perpendicularBisector', 'line(a,c).perpendicularBisector',
        'line(b,c).perpendicularBisector'],
      ['red', 'blue', 'green'],
      ['b-red', 'b-blue', 'b-green']);
}

export function incircle($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $geopad.setActiveTool('angleBisector');
  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));
  $step.onScore('blank-1', () => $geopad.animateConstruction('incircle'));

  waitToDraw($step, $geopad,
      ['xa.bisector', 'xb.bisector', 'xc.bisector'],
      ['red', 'blue', 'green'],
      ['b-red', 'b-blue', 'b-green']);
}

export function altitudes1($step: Step) {
  const $alt = $step.$$('.altitude');
  $alt[0].enter('draw', 1000, 1000);
  $alt[1].enter('draw', 1000, 1500);
  $alt[2].enter('draw', 1000, 2000);
  $step.$('circle.yellow')!.enter('pop', 400, 2500);
}

export function midsegments($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $geopad.setActiveTool('line');
  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));

  waitToDraw($step, $geopad,
      ['segment(p,q)', 'segment(p,r)', 'segment(q,r)'],
      ['red', 'red', 'red'], ['', '', '']);
}


// -----------------------------------------------------------------------------
// Triangle Congruence and Construction

export async function sssConstruction($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const model = $geopad.model;

  const getLength = (x: number) => round(x / 36, 1);
  const intersects = () => model.intersections(circles[0].val, circles[1].val);
  model.set('getLength', getLength);

  $geopad.on('add:path', () => $geopad.setActiveTool('move'));
  $geopad.showGesture('point(50,200)', 'point(250,200)');
  $geopad.setActiveTool('line');

  $geopad.on('begin:path', (path: GeoPath) => {
    if (isLineLike(path.val!)) {
      path.setLabel(`\${getLength(${path.name}.length)||''}`);
    } else {
      path.setLabel(`\${getLength(${path.name}.r)||''}`, undefined,
          `${path.name}.c.shift(0,-${path.name}.r/2)`);
    }
  });

  const base = await $geopad.waitForPath(
      path => (isLineLike(path.val!) && path.val!.length === 6));

  $step.score('draw-base');
  base.$el.addClass('green');

  for (let p of base.points) {
    (p as GeoMovablePoint).lock();
    p.$el.setAttr('target', 'base');
  }

  if (base.points[0].val!.x > base.points[1].val!.x) base.points.reverse();

  await $step.onScore('next-0');

  $geopad.animatePoint(base.points[0].name, model.point(42, 220));
  $geopad.animatePoint(base.points[1].name, model.point(258, 220));
  $geopad.setActiveTool('circle');

  const circle1 = await $geopad.waitForPath(
      path => (getLength((path.val as Circle).r) === 4 &&
               isOneOf(path.points[0], ...base.points)));

  $step.score('draw-c1');
  circle1.$el.addClass('green light thin');
  circle1.points[1].remove(0);
  $geopad.setActiveTool('circle');

  const circle2 = await $geopad.waitForPath(path =>
      (round((path.val as Circle).r / 36, 1) === 5 && path.points[0] ===
       base.points.filter(p => p !== circle1.points[0])[0]));

  $step.score('draw-c2');
  circle2.$el.addClass('green light thin');
  circle2.points[1].remove(0);

  await $step.onScore('blank-0');

  const circles = [circle1, circle2];
  if (circle1.points[0] === base.points[1]) circles.reverse();

  $geopad.drawPoint(() => intersects()[0], {target: 'top', name: 'c'});
  $geopad.drawPath(`segment(${base.points[0].name},c)`,
      {name: 'side1', classes: 'green'});
  await $geopad.animateConstruction('side1', 1000);

  $geopad.drawPath(`segment(c,${base.points[1].name})`,
      {name: 'side2', classes: 'green'});
  await $geopad.animateConstruction('side2', 1000);

  await $step.onScore('blank-1');

  circle1.x = () => model.circle(model[circle1.points[0].name], 4 * 36);
  circle2.x = () => model.circle(model[circle2.points[0].name], 5 * 36);

  $geopad.animatePoint(base.points[0].name, model.point(42, 150));
  $geopad.animatePoint(base.points[1].name, model.point(258, 150));

  $geopad.drawPoint(() => intersects()[1], {target: 'bottom', name: 'd'});

  await $step.onScore('blank-2');

  $geopad.drawPath(`polyline(${base.points[0].name},d,${base.points[1].name})`,
      {animated: 1000, classes: 'green'});
}


// -----------------------------------------------------------------------------
// Pythagoras

export function pythagorasProof($step: Step) {
  const $labels = $step.$$('.label');
  const model = $step.model;

  function updateLabels() {
    $labels[0].setClass('visible',
        $step.scores.has('blank-0') && model.x < 0.1);
    $labels[1].setClass('visible',
        $step.scores.has('blank-1') && model.x > 0.9);
    $labels[2].setClass('visible',
        $step.scores.has('blank-1') && model.x > 0.9);
  }

  model.set('x', 0);
  const $slider = $step.$('.proof-1 x-slider') as Slider;
  $slider.on('move', n => {
    model.set('x', n / 100);
    updateLabels();
  });

  $step.onScore('blank-0', () => {
    updateLabels();
    delay(() => $slider.play(), 1000);
  });

  $step.onScore('blank-1', updateLabels);

  const $targets = $step.$$('.hover-target');
  hover($targets[0], {enter: () => $slider.set(0)});
  hover($targets[1], {enter: () => $slider.set(100)});

  // -----

  model.set('B1', model.point(40, 100));
  model.set('X1', model.point(170, 100));
  model.set('C1', model.point(170, 20));
  model.set('A2', model.point(220, 100));
  model.set('X2', model.point(170, 100));
  model.set('C2', model.point(170, 20));

  let $geopad = $step.$('.similar-triangle') as Geopad;
  $step.onScore('next-0', () => {
    $geopad.animatePoint('B1', model.point(10, 210), 1000);
    $geopad.animatePoint('X1', model.point(120, 142), 1000);
    $geopad.animatePoint('C1', model.point(162, 210), 1000);
    $geopad.animatePoint('A2', model.point(250, 170), 1000);
    $geopad.animatePoint('X2', model.point(224, 128), 1000);
    $geopad.animatePoint('C2', model.point(156, 170), 1000);
  });

}

export function pythagoreanTriplesGrid($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const found = new Set();

  const sqrtDistance = (p: Point) => round(
      Math.sqrt(p.x ** 2 + (17 - p.y) ** 2), 3);
  $step.model.set('sqrtDistance', sqrtDistance);

  $step.model.watch(m => {
    let p = m.a;
    let d = sqrtDistance(p);

    const valid = p.x > 0 && p.y < 17 && isInteger(d);
    $geopad.setClass('triple', valid);
    if (!valid) return;

    if (found.has(p.x + '-' + p.y)) return;

    $step.score('p' + found.size);
    found.add(p.x + '-' + p.y);

    $geopad.drawPoint(() => p, {classes: 'green'});
    if (isOneOf(found.size, 1, 6, 12)) $step.addHint('correct');
  });
}


// -----------------------------------------------------------------------------
// Trigonometry

export function mountains($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.onScore('blank-0', () => {
    $geopad.elements.get('angle-a')!.setLabel('151°');
    $geopad.model.update();
  });

  $step.onScore('blank-1', () => {
    $geopad.elements.get('angle-b')!.setLabel('β = 6°');
    $geopad.model.update();
  });

  $step.onScore('blank-3 blank-4', () => {
    $geopad.elements.get('side-d')!.setLabel('d = 23km');
    $geopad.model.update();
  });
}

export function applications2($step: Step) {
  $step.$('x-video')!.on('end', () => $step.score('video'));
}
