// =============================================================================
// Triangles and Trigonometry
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';


export function triangleInequality($section) {

  const items = $section.$$('.item').map($el => {
    const n = $el.$$('.number').map($el => ({$el, value: +$el.text[0]}));
    return {$el, n};
  });

  $section.model.watch(s => {
    const a = Math.round(Point.distance(s.a, s.b) / 50);
    const b = Math.round(Point.distance(s.b, s.c) / 50);
    const c = Math.round(Point.distance(s.a, s.c) / 50);

    for (let i of items) {
      for (let n of i.n) {
        n.$el.setClass('isRed', n.value === a);
        n.$el.setClass('isBlue', n.value === b);
        n.$el.setClass('isYellow', n.value === c);
      }
    }
  });

}





export function pythagorasProof($section) {

  $section.model.set('x', 0);
  const $slider = $section.$('.proof-1 x-slider');
  $slider.on('move', n => $section.model.set('x', n/100));

  window.m = $section.model;

}
