// =============================================================================
// Angles and Polygons
// (c) Mathigon
// =============================================================================


import {Point} from '@mathigon/euclid';
import {Step} from '@mathigon/studio';
import {Geopad} from '../shared/types';


function round(a: Point, b: Point) {
  return Math.round(Point.distance(a, b) / 25) / 2;
}

export function triangleInequality($step: Step) {
  $step.model.roundD = round;

  const $items = $step.$$('.item');
  const targets = $items.map(
      $el => $el.$$('.t-num').map($el => ({$el, val: +$el.text})));

  $step.one('score', () => {
    $step.delayedHint(() => $step.addHint('inequality-impossible'), 20000);
  });

  $step.model.watch((s: any) => {
    const active = [round(s.a, s.b), round(s.b, s.c), round(s.a, s.c)].sort();
    targets.forEach((t, i) => {
      let correctCount = 0;
      for (let x = 0; x < 3; ++x) {
        const isCorrect = t[x].val === active[x];
        t[x].$el.setClass('correct', isCorrect);
        if (isCorrect) correctCount += 1;
      }
      if (correctCount === 3 && !$step.scores.has('s' + i)) {
        $step.addHint('correct');
        $step.score('s' + i);
        $items[i].addClass('correct');
      }
    });
  });
}

export function triangleInequality3($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.model.hover = (a: number, b: number, c: number, d: number, i: number) => {
    $geopad.animatePoint('b', new Point(a, b), 1200);
    $geopad.animatePoint('c', new Point(c, d), 1200);
    $step.score('target-' + i);
  };

  const $rubber = $step.$('.orange')!;
  $geopad.model.watch(state => {
    $rubber.css('stroke-width', 450 / Point.distance(state.b, state.c) + 'px');
  });
}
