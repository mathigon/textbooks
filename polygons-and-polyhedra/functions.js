// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================


import { clamp, tabulate } from '@mathigon/core';
import { toWord, Segment, Point, Angle } from '@mathigon/fermat';
import { Browser, slide } from '@mathigon/boost';

import './components/tessellation';
import './components/polyhedron';
import './components/folding';
import './components/anibutton';


export function angles($step) {
  const totals = [360, 540];
  const $buttons = $step.$$('x-anibutton');
  let overlap = [false, false];

  $buttons.forEach(($b, i) => {
    $step.model.watch(() => $b.setAttr('text', '???'));
    $b.on('click', () => {
      if (overlap[i]) return $step.addHint('no-overlap', {force: true});
      $b.play();
      $b.setAttr('text', totals[i] + '°');
      $step.score('angle-' + i);
    });
  });

  $step.model.watch(s => {
    const a1 = new Angle(s.b,s.a,s.d).deg;
    const a2 = new Angle(s.c,s.b,s.a).deg;
    const a3 = new Angle(s.d,s.c,s.b).deg;
    const a4 = new Angle(s.a,s.d,s.c).deg;
    overlap[0] = a1 + a2 + a3 + a4 > 361;

    const b1 = new Angle(s.f,s.e,s.i).deg;
    const b2 = new Angle(s.g,s.f,s.e).deg;
    const b3 = new Angle(s.h,s.g,s.f).deg;
    const b4 = new Angle(s.i,s.h,s.g).deg;
    const b5 = new Angle(s.e,s.i,s.h).deg;
    overlap[1] = b1 + b2 + b3 + b4 + b5 >= 541;

    if (overlap[0] || overlap[1]) $step.addHint('no-overlap');
  });

  $buttons[0].one('click', () => $step.addHint('angles-repeat'));
}

export function regularArea($step) {
  const model = $step.model;
  model.assign({ toWord });

  model.set('regular', function(c, r, n) {
    const points = tabulate(i => {
      const a = Math.PI * (2*i/n + 1/2 - 1/n);
      return model.point(c.x + r * Math.cos(a), c.y + r * Math.sin(a));
    }, n);
    return model.polygon(...points);
  });

}

// -----------------------------------------------------------------------------

function checkPathMatches(p, options) {
  for (let i = 0; i < options.length; ++i) {
    if (p.val.equals(options[i])) return i;
  }
  p.remove();
  return -1;
}

export function midsegments($step) {
  const $geopad = $step.$('x-geopad');
  $geopad.setActiveTool('point');

  let points = [];
  let orientation = null;

  $geopad.on('add:point', function(p) {
    if (points.length === 4) return p.remove();
    points.push(p);
    if (points.length === 4) $step.score('points');
  });

  $geopad.on('add:path', function(p) {
    const match = checkPathMatches(p, [
      new Segment(points[0].val, points[2].val),
      new Segment(points[1].val, points[3].val)
    ]);

    if (match >= 0) {
      orientation = match + 1;
      p.$el.setAttr('target', 'parallel');
      $step.score('diagonal');
    } else {
      $step.addHint('not-a-diagonal');
    }
  });

  $step.onScore('points', () => {
    if (points.length < 4) points = [
      $geopad.drawMovablePoint(new Point(50, 40)),
      $geopad.drawMovablePoint(new Point(70, 250)),
      $geopad.drawMovablePoint(new Point(220, 240)),
      $geopad.drawMovablePoint(new Point(260, 90))
    ];

    $geopad.setActiveTool('move');

    const [a,b,c,d] = points.map(p => p.val);
    if (Segment.intersect({p1: a, p2: b}, {p1: c, p2: d})) {
      points = [points[0], points[2], points[1], points[3]];
    } else if (Segment.intersect({p1: a, p2: d}, {p1: b, p2: c})) {
      points = [points[0], points[1], points[3], points[2]];
    }

    const pointStr = points.map(p => p.name).join(',');
    $geopad.drawPath(`polygon(${pointStr})`, {name: 'quad', animate: 1000});
  });


  $step.onScore('blank-0', () => {
    for (let i=0; i<4; ++i)
      $geopad.drawPoint(`quad.edges[${i}].midpoint`, {name: `m${i}`, classes: 'red'});

    $geopad.drawPath(`polygon(m0,m1,m2,m3)`, {classes: 'red', name: 'p0', animate: 1000});
  });

  $step.onScore('blank-1', () => {
    $geopad.setActiveTool('line');
    $geopad.showGesture(points[0].name, points[2].name);
  });

  $step.onScore('diagonal', () => {
    const [a,b,c,d] = points.map(p => p.name);
    $geopad.setActiveTool('move');

    if (!orientation) { /* TODO add diagonal */ }
    const o = orientation === 1;

    $geopad.drawPath(`segment(m0,m1)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m2,m3)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m1,m2)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m0,m3)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});

    $geopad.drawPath(`segment(${o?b:a},${o?d:c})`, {classes: 'transparent', target: 'other'});
    $geopad.drawPath(`polygon(${b},${o?c:d},${a})`, {classes: 'fill green transparent', target: 'triangle'});
    $geopad.drawPath(`polygon(${c},${d},${o?a:b})`, {classes: 'fill yellow transparent', target: 'triangle'});
  });
}

export function parallelogramsProof($step) {
  const $geo1 = $step.$$('x-geopad')[0];
  const model = $step.model;

  model.set('o', false);
  $geo1.on('add:point', p => p.remove());

  setTimeout(() => {
    if (!$step.scores.has('diagonal')) {
      $geo1.showGesture('a', 'c');
      $geo1.setActiveTool('line');
    }
  }, 1000);

  $geo1.on('add:path', function(p) {
    const match = checkPathMatches(p, [
      new Segment(model.b, model.d),
      new Segment(model.a, model.c)
    ]);

    if (match >= 0) {
      p.$el.setAttr('target', 'diagonal');
      if (match === 1) model.set('o', true);
      $step.score('diagonal');
      $geo1.setActiveTool('move');
    } else {
      $step.addHint('not-a-diagonal-1');
    }
  });
}

export function kites1($step) {
  $step.$$('.next-btn').forEach(($n, i) => {
    $n.one('click', () => $step.score('next-' + i));
    $step.onScore('next-' + i, () => $n.exit('pop'));
    $step.on('complete', () => $step.score('next-' + i));
  });
}

// -----------------------------------------------------------------------------

export function tessellationDrawing($step) {
  let polygons = 0;

  $step.$('x-tessellation').on('add-shape', function() {
    polygons += 1;
    if (polygons >= 3) $step.score('shapes0');
    if (polygons >= 5) $step.score('shapes1');
  });
}

export function escher($step) {
  const $img = $step.$('.metamorph img');
  let translate = 0;
  let max = 3000;

  slide($img, {
    move(p, start, last) {
      translate += last.x - p.x;
      translate = clamp(translate, 0, max);
      $img.transform = `translateX(-${translate}px)`;
    }
  });

  Browser.resize(({width}) => { max = 3000 - Math.min(760, width - 60); });
}

export function penrose($step) {
  let $g = $step.$$('svg g');

  $g[1].setAttr('opacity', 0);
  $g[2].setAttr('opacity', 0);

  $step.$('x-slider').on('move', (n) => {
    $g[0].setAttr('opacity', n < 50 ? 1-n/77 : 0.35);
    $g[1].setAttr('opacity', n < 50 ? n/50 : 1.5-n/100);
    $g[2].setAttr('opacity', n < 50 ? 0 : n/50-1);
    if (n >= 90) $step.score('slide');
  });
}

// -----------------------------------------------------------------------------

export function polyhedra($step) {
  $step.addHint('move-polyhedra');
}

export function platonicOverview($step) {
  $step.addHint('use-euler');
}

export function platonicDual($step) {
  $step.$$('x-img-sequence').forEach(($img, i) => {
    $img.on('last', () => $step.score('slide-' + i));
  });
}
