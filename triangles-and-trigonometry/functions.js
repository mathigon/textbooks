// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';

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

  const targets = $step.$$('.item').map($el => {
    return $el.$$('.number').map($el => ({$el, val: +$el.text[0]}));
  });

  $step.model.watch(s => {
    const a = Math.round(Point.distance(s.a, s.b) / 50);
    const b = Math.round(Point.distance(s.b, s.c) / 50);
    const c = Math.round(Point.distance(s.a, s.c) / 50);
    const active = [a,b,c].sort();

    targets.forEach((t, i) => {
      let correctCount = 0;
      for (let x=0; x<3; ++x) {
        const isCorrect = t[x].val === active[x];
        t[x].$el.setClass('correct', isCorrect);
        correctCount += isCorrect;
      }
      if (correctCount === 3) $step.score('s' + i);
    });
  });

}





export function pythagorasProof($section) {

  $section.model.set('x', 0);
  const $slider = $section.$('.proof-1 x-slider');
  $slider.on('move', n => $section.model.set('x', n/100));

  window.m = $section.model;

}
