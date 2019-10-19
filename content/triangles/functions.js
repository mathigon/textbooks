// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================



import { square, isInteger, delay, isOneOf, isString } from '@mathigon/core';
import { Point, round } from '@mathigon/fermat';


// -----------------------------------------------------------------------------
// Triangle Properties

function waitToDraw($step, $geopad, shapes, classes, targets) {
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
  $geopad.on('add:point', e => e.remove(0));
}

export function medians($step) {
  const $geopad = $step.$('x-geopad');
  $geopad.setActiveTool('line');

  waitToDraw($step, $geopad,
    ['segment(a,bc)', 'segment(b,ac)', 'segment(c,ab)'],
    ['red', 'blue', 'green'],
    ['ratio', '', '']);

  $step.onScore('s0 s1 s2', () => {
    $geopad.setActiveTool('move');
    $geopad.on('moveEnd', () => $step.score('move'), true);
  });
}

export function centerOfMass($step) {
  $step.$('x-geopad').on('moveEnd', () => $step.score('move'));
}

export function circumcircle($step) {
  const $geopad = $step.$('x-geopad');

  $step.onScore('blank-0', () => {
    $geopad.setActiveTool('perpBisector');
    $geopad.showGesture('a', 'c');
  });

  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));
  $step.onScore('blank-2', () => $geopad.animateConstruction('circumcircle'));

  waitToDraw($step, $geopad,
    ['line(a,b).perpBisector', 'line(a,c).perpBisector', 'line(b,c).perpBisector'],
    ['red', 'blue', 'green'],
    ['b-red', 'b-blue', 'b-green']);
}

export function incircle($step) {
  const $geopad = $step.$('x-geopad');

  $geopad.setActiveTool('angleBisector');
  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));
  $step.onScore('blank-1', () => $geopad.animateConstruction('incircle'));

  waitToDraw($step, $geopad,
    ['xa.bisector', 'xb.bisector', 'xc.bisector'],
    ['red', 'blue', 'green'],
    ['b-red', 'b-blue', 'b-green']);
}

export function altitudes1($step) {
  const $alt = $step.$$('.altitude');
  $alt[0].enter('draw', 1000, 1000);
  $alt[1].enter('draw', 1000, 1500);
  $alt[2].enter('draw', 1000, 2000);
  $step.$('circle.yellow').enter('pop', 400, 2500);
}

export function midsegments($step) {
  const $geopad = $step.$('x-geopad');

  $geopad.setActiveTool('line');
  $step.onScore('s0 s1 s2', () => $geopad.setActiveTool('move'));

  waitToDraw($step, $geopad,
    ['segment(p,q)', 'segment(p,r)', 'segment(q,r)'],
    ['red', 'red', 'red'], ['', '', '']);
}


// -----------------------------------------------------------------------------
// Triangle Inequality

export function triangleInequality($step) {
  function round(a, b) { return Math.round(Point.distance(a, b) / 25) / 2; }
  $step.model.set('roundD', round);

  const $items = $step.$$('.item');
  const targets = $items.map($el => $el.$$('.t-num').map($el => ({$el, val: +$el.text})));

  $step.one('score', () => {
    $step.delayedHint(() => $step.addHint('inequality-impossible'), 20000);
  });

  $step.model.watch(s => {
    const active = [round(s.a, s.b), round(s.b, s.c), round(s.a, s.c)].sort();
    targets.forEach((t, i) => {
      let correctCount = 0;
      for (let x=0; x<3; ++x) {
        const isCorrect = t[x].val === active[x];
        t[x].$el.setClass('correct', isCorrect);
        correctCount += isCorrect;
      }
      if (correctCount === 3 && !$step.scores.has('s' + i)) {
        $step.addHint('correct');
        $step.score('s' + i);
        $items[i].addClass('correct');
      }
    });
  });
}

export function triangleInequality3($step) {
  const $targets = $step.$$('.hover-target');
  const $geopad =$step.$('x-geopad');

  $targets[0].on('hover', {
    enter() {
      $geopad.animatePoint('a', $geopad.model.point(90, 110), 1200);
      $geopad.animatePoint('b', $geopad.model.point(165, 105), 1200);
      $geopad.animatePoint('c', $geopad.model.point(210, 110), 1200);
      $step.score('target-0');
    }
  });

  $targets[1].on('hover', {
    enter() {
      $geopad.animatePoint('b', $geopad.model.point(50, 105), 1200);
      $geopad.animatePoint('a', $geopad.model.point(130, 110), 1200);
      $geopad.animatePoint('c', $geopad.model.point(250, 105), 1200);
      $step.score('target-1');
    }
  });

  const $rubber = $step.$('.rubber');
  $geopad.model.watch(state => {
    $rubber.css('stroke-width', 350/Point.distance(state.b, state.c) + 'px');
  })
}


// -----------------------------------------------------------------------------
// Triangle Congruence and Construction
// TODO Refactor these functions (use async?)

function waterfall($step, functions) {
  function handle(i, arg) {
    const fn = functions[i];
    if (!fn) return;
    if (isString(fn)) return $step.onScore(fn, () => handle(i + 1));
    if (fn.then) return fn.then(x => handle(i + 1, x));
    Promise.resolve(fn(arg)).then(x => handle(i + 1, x));
  }
  handle(0);
}

export function sssConstruction($step) {
  const $geopad = $step.$('x-geopad');
  const model = $geopad.model;

  let base, circle1, circle2, circles;

  const getLength = (x) => round(x/36, 1);
  const intersects = () => model.intersections(circles[0].val, circles[1].val);
  model.set('getLength', getLength);

  $geopad.on('add:path', () => $geopad.setActiveTool('move'));
  $geopad.showGesture('point(50,200)', 'point(250,200)');
  $geopad.setActiveTool('line');

  $geopad.on('begin:path', path => {
    if (path.val instanceof model.segment().constructor) {
      path.setLabel(`\${getLength(${path.name}.length)||''}`);
    } else {
      path.setLabel(`\${getLength(${path.name}.r)||''}`, null,
        `${path.name}.c.shift(0,-${path.name}.r/2)`);
    }
  });

  waterfall($step, [
    $geopad.waitForPath(path => getLength(path.val.length) === 6),
    (path) => {
      base = path;
      $step.score('draw-base');
      base.$el.addClass('green');
      for (let p of base.points) { p.lock(); p.$el.setAttr('target', 'base'); }
      if (base.points[0].val.x > base.points[1].val.x) base.points.reverse();
    },
    'next-0',
    () => {
      $geopad.animatePoint(base.points[0].name, model.point(42, 220));
      $geopad.animatePoint(base.points[1].name, model.point(258, 220));
      $geopad.setActiveTool('circle');
    },
    $geopad.waitForPath(path => (getLength(path.val.r) === 4 &&
        isOneOf(path.points[0], ...base.points))),
    (path) => {
      circle1 = path;
      $step.score('draw-c1');
      circle1.$el.addClass('green light thin');
      circle1.points[1].remove(0);
      $geopad.setActiveTool('circle');
    },
    $geopad.waitForPath(path => (round(path.val.r/36, 1) === 5 &&
        path.points[0] === base.points.filter(p => p !== circle1.points[0])[0])),
    (path) => {
      circle2 = path;
      $step.score('draw-c2');
      circle2.$el.addClass('green light thin');
      circle2.points[1].remove(0);
    },
    'blank-0',
    () => {
    circles = [circle1, circle2];
      if (circle1.points[0] === base.points[1]) circles.reverse();
      $geopad.drawPoint(() => intersects()[0], {target: 'top', name: 'c'});
      $geopad.drawPath(`segment(${base.points[0].name},c)`, {name: 'side1', classes: 'green'});
      return $geopad.animateConstruction('side1', 1000);
    },
    () => {
      $geopad.drawPath(`segment(c,${base.points[1].name})`, {name: 'side2', classes: 'green'});
      return $geopad.animateConstruction('side2', 1000);
    },
    'blank-1',
    () => {
      circle1.x = () => model.circle(model[circle1.points[0].name], 4 * 36);
      circle2.x = () => model.circle(model[circle2.points[0].name], 5 * 36);

      $geopad.animatePoint(base.points[0].name, model.point(42, 150));
      $geopad.animatePoint(base.points[1].name, model.point(258, 150));

      $geopad.drawPoint(() => intersects()[1], {target: 'bottom', name: 'd'});
    },
    'blank-2',
    () => {
      $geopad.drawPath(`polyline(${base.points[0].name},d,${base.points[1].name})`,
          {animate: 1000, classes: 'green'});
    }
  ]);
}


// -----------------------------------------------------------------------------
// Pythagoras

export function pythagorasProof($step) {
  const $labels = $step.$$('.label');
  const model = $step.model;

  function updateLabels() {
    $labels[0].setClass('visible', $step.scores.has('blank-0') && model.x < 0.1);
    $labels[1].setClass('visible', $step.scores.has('blank-1') && model.x > 0.9);
    $labels[2].setClass('visible', $step.scores.has('blank-1') && model.x > 0.9);
  }

  model.set('x', 0);
  const $slider = $step.$('.proof-1 x-slider');
  $slider.on('move', n => {
    model.set('x', n/100);
    updateLabels();
  });

  $step.onScore('blank-0', () => { updateLabels(); delay(() => $slider.play(), 1000); });
  $step.onScore('blank-1', updateLabels);

  const $targets = $step.$$('.hover-target');
  $targets[0].on('hover', {enter: () => $slider.set(0)});
  $targets[1].on('hover', {enter: () => $slider.set(100)});

  // -----

  model.set('B1', model.point(40, 100));
  model.set('X1', model.point(170,100));
  model.set('C1', model.point(170,20));
  model.set('A2', model.point(220,100));
  model.set('X2', model.point(170,100));
  model.set('C2', model.point(170,20));

  let $geopad = $step.$('.similar-triangle');
  $step.onScore('next-0', () => {
    $geopad.animatePoint('B1', model.point(10, 210), 1000);
    $geopad.animatePoint('X1', model.point(120, 142), 1000);
    $geopad.animatePoint('C1', model.point(162, 210), 1000);
    $geopad.animatePoint('A2', model.point(250, 170), 1000);
    $geopad.animatePoint('X2', model.point(224, 128), 1000);
    $geopad.animatePoint('C2', model.point(156, 170), 1000);
  });

}

export function pythagoreanTriplesGrid($step) {
  const $geopad = $step.$('x-geopad');
  const found = new Set();

  const sqrtDistance = p => round(Math.sqrt(square(p.x) + square(17 - p.y)), 3);
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

export function mountains($step) {
  const $geopad = $step.$('x-geopad');

  $step.onScore('blank-0', () => { $geopad.elements.get('angle-a').setLabel('151°'); $geopad.model.update(); });
  $step.onScore('blank-1', () => { $geopad.elements.get('angle-b').setLabel('β = 6°'); $geopad.model.update(); });
  $step.onScore('blank-3 blank-4', () => { $geopad.elements.get('side-d').setLabel('d = 23km'); $geopad.model.update(); });
}

export function applications2($step) {
  $step.$('x-video').on('end', () => $step.score('video'));
}
