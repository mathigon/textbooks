// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================



import { square, isInteger, delay, isOneOf } from '@mathigon/core';
import { Point, round } from '@mathigon/fermat';

// -----------------------------------------------------------------------------

function waitToDraw($step, $geopad, shapes, classes, targets) {
  $geopad.on('add:path', e => {
    for (let i=0; i<3; ++i) {
      if ($geopad.eval(shapes[i]).equals(e.val)) {
        e.$el.addClass(classes[i]);
        $step.score('s' + i);
        $step.addHint('correct');
        e.$el.setAttr('target', targets[i]);
        return;
      }
    }
    e.remove();
    $step.addHint('incorrect');
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

  $step.onScore('blank-0', () => $geopad.setActiveTool('perpBisector'));
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
  $step.onScore('blank-0', () => $geopad.animateConstruction('incircle'));

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

export function triangleInequality($step) {
  function round(a, b) { return Math.round(Point.distance(a, b) / 25) / 2; }
  $step.model.set('roundD', round);

  const $items = $step.$$('.item');
  const targets = $items.map($el => $el.$$('.t-num').map($el => ({$el, val: +$el.text})));

  $step.delayedHint(() => $step.addHint('inequality-impossible'), 15000);

  $step.model.watch(s => {
    const active = [round(s.a, s.b), round(s.b, s.c), round(s.a, s.c)].sort();
    targets.forEach((t, i) => {
      let correctCount = 0;
      for (let x=0; x<3; ++x) {
        const isCorrect = t[x].val === active[x];
        t[x].$el.setClass('correct', isCorrect);
        correctCount += isCorrect;
      }
      if (correctCount === 3) {
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
}

// -----------------------------------------------------------------------------

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

  $step.onScore('blank-0', () => { updateLabels(); delay(() => $slider.play(), 2000); });
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
