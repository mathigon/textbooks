// =============================================================================
// Angles and Polygons
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';


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
