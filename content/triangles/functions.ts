// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================


import {delay, isOneOf} from '@mathigon/core';
import {isInteger, round} from '@mathigon/fermat';
import {Circle, intersections, isCircle, isLineLike, Point, Segment} from '@mathigon/euclid';
import {Slider, Step} from '@mathigon/studio';
import {Geopad, GeoPath, Path} from '../shared/types';


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
}

export function medians($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');

  waitToDraw($step, $geopad,
      ['segment(a,bc)', 'segment(b,ac)', 'segment(c,ab)'],
      ['red', 'blue', 'green'],
      ['ratio', '', '']);

  $step.onScore('s0 s1 s2', () => {
    $geopad.switchTool('move');
    $geopad.on('moveEnd', () => $step.score('move'));
  });
}

export function circumcircle($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.onScore('blank-0', () => {
    $geopad.switchTool('perpBisector');
    $geopad.showGesture('a', 'c');
  });

  $step.onScore('s0 s1 s2', () => $geopad.switchTool('move'));
  $step.onScore('blank-2', () => $geopad.animateConstruction('circumcircle'));

  waitToDraw($step, $geopad,
      ['line(a,b).perpendicularBisector', 'line(a,c).perpendicularBisector',
        'line(b,c).perpendicularBisector'],
      ['red', 'blue', 'green'],
      ['b-red', 'b-blue', 'b-green']);
}

export function incircle($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $geopad.switchTool('angleBisector');
  $step.onScore('s0 s1 s2', () => $geopad.switchTool('move'));
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

  $geopad.switchTool('line');
  $step.onScore('s0 s1 s2', () => $geopad.switchTool('move'));

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
  model.getLength = getLength;

  $geopad.showGesture('point(50,200)', 'point(250,200)');
  $geopad.switchTool('line');

  const base = await $geopad.waitForPath<Segment>((p: Path) => isLineLike(p) && getLength(p.length) === 6, {
    onBegin: (p: GeoPath) => p.setLabel(`\${getLength(${p.name}.length)||''}`),
    onIncorrect: () => $step.addHint('incorrect')
  });

  $step.score('draw-base');
  base.$el.addClass('green');

  const [b1, b2] = base.components;
  for (const p of base.components) {
    p.lock();
    p.$el.setAttr('target', 'base');
  }

  $geopad.switchTool('move');
  await $step.onScore('next-0');

  $geopad.animatePoint(base.components[0].name, new Point(42, 220));
  $geopad.animatePoint(base.components[1].name, new Point(258, 220));
  $geopad.switchTool('circle');

  const circle1 = await $geopad.waitForPath<Circle>(path => isCircle(path) && getLength(path.r) === 4 && isOneOf(path.c, b1.value, b2.value), {
    onBegin: (p: GeoPath) => p.setLabel(`\${getLength(${p.name}.r)||''}`, undefined, `${p.name}.c.shift(0,-${p.name}.r/2)`),
    onIncorrect: () => $step.addHint('incorrect')
  });

  $step.score('draw-c1');
  circle1.$el.addClass('green light thin');
  circle1.components[1].$el.setAttr('hidden', 'hidden');

  const circle2 = await $geopad.waitForPath<Circle>(path => isCircle(path) && getLength(path.r) === 5 && isOneOf(path.c, b1.value, b2.value) && path.c !== circle1.value!.c, {
    onBegin: (p: GeoPath) => p.setLabel(`\${getLength(${p.name}.r)||''}`, undefined, `${p.name}.c.shift(0,-${p.name}.r/2)`),
    onIncorrect: () => $step.addHint('incorrect')
  });

  $step.score('draw-c2');
  circle2.$el.addClass('green light thin');
  circle2.components[1].$el.setAttr('hidden', 'hidden');

  $geopad.switchTool('move');
  await $step.onScore('blank-0');

  const i = (circle1.components[0] === base.components[1]) ? 1 : 0;

  $geopad.drawPoint(() => intersections(circle1.value!, circle2.value!)[i],
      {target: 'top', name: 'c', interactive: false});

  $geopad.drawPath(`segment(${base.components[0].name},c)`,
      {name: 'side1', classes: 'green'});

  await $geopad.animateConstruction('side1', 1000);

  $geopad.drawPath(`segment(c,${base.components[1].name})`,
      {name: 'side2', classes: 'green'});
  await $geopad.animateConstruction('side2', 1000);

  await $step.onScore('blank-1');

  circle1.setValue(() => new Circle(model[circle1.components[0].name], 4 * 36));
  circle2.setValue(() => new Circle(model[circle2.components[0].name], 5 * 36));

  $geopad.animatePoint(base.components[0].name, new Point(42, 150));
  $geopad.animatePoint(base.components[1].name, new Point(258, 150));

  $geopad.drawPoint(() => intersections(circle1.value!, circle2.value!)[1 - i],
      {target: 'bottom', name: 'd', interactive: false});

  await $step.onScore('blank-2');

  $geopad.drawPath(`polyline(${base.components[0].name},d,${base.components[1].name})`,
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

  model.x = 0;
  const $slider = $step.$('.proof-1 x-slider') as Slider;
  $slider.on('move', n => {
    model.x = n / 100;
    updateLabels();
  });

  $step.onScore('blank-0', () => {
    updateLabels();
    delay(() => $slider.play(), 1000);
  });

  $step.onScore('blank-1', updateLabels);
  $step.model.set = (n: number) => $slider.moveTo(n);

  // -----

  const $geopad = $step.$('.similar-triangle') as Geopad;
  $step.onScore('next-0', () => {
    $geopad.animatePoint('B1', new Point(10, 210), 1000);
    $geopad.animatePoint('X1', new Point(120, 142), 1000);
    $geopad.animatePoint('C1', new Point(162, 210), 1000);
    $geopad.animatePoint('A2', new Point(250, 170), 1000);
    $geopad.animatePoint('X2', new Point(224, 128), 1000);
    $geopad.animatePoint('C2', new Point(156, 170), 1000);
  });

}

export function pythagoreanTriplesGrid($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const found = new Set();

  $step.model.watch((m: any) => {
    const p = m.a;

    const valid = p.x > 0 && p.y > 0 && isInteger(p.length);
    $geopad.setClass('triple', valid);
    if (!valid) return;

    if (found.has(p.x + '-' + p.y)) return;

    $step.score('p' + found.size);
    found.add(p.x + '-' + p.y);

    $geopad.drawPoint(() => p, {classes: 'green', interactive: false});
    if (isOneOf(found.size, 1, 6, 12)) $step.addHint('correct');
  });
}


// -----------------------------------------------------------------------------
// Trigonometry

export function mountains($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.onScore('blank-0', () => {
    $geopad.shapes.get('angle-a')!.setLabel('151°');
    $geopad.model.update();
  });

  $step.onScore('blank-1', () => {
    $geopad.shapes.get('angle-b')!.setLabel('β = 6°');
    $geopad.model.update();
  });

  $step.onScore('blank-3 blank-4', () => {
    $geopad.shapes.get('side-d')!.setLabel('d = 23km');
    $geopad.model.update();
  });
}

export function applications2($step: Step) {
  $step.$('x-video')!.on('end', () => $step.score('video'));
}
