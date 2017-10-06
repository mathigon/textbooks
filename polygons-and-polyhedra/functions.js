// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================



import { Point, angle, numberFormat, roundTo } from '@mathigon/fermat';
import { $, $N, Draggable } from '@mathigon/boost';
import { setPicker } from './set-picker';


// -----------------------------------------------------------------------------
// Shared Utilities and Classes

function normalise(v) {
  let l = Math.sqrt(v.x * v.x + v.y * v.y);
  return { x: v.x/l, y: v.y/l };
}

function pointAtX(a, b, x) {
  let slope = (b.y - a.y) / (b.x - a.x);
  let y = a.y + (x - a.x) * slope;
  return { x, y };
}

function svgAngle(a, b, c, size, full=false) {
  let ab = normalise({ x: b.x - a.x, y: b.y - a.y });
  let ac = normalise({ x: c.x - a.x, y: c.y - a.y });

  let orient = a.x * (c.y - b.y) + b.x * (a.y - c.y) + c.x * (b.y - a.y);

  b = { x: a.x + ab.x * size, y: a.y + ab.y * size };
  c = { x: a.x + ac.x * size, y: a.y + ac.y * size };

  let arcSweep = (full && orient > 0) ? 1 : 0;
  let largeArc = (full || orient < 0) ? 1 : 0;
  return ['M'+a.x,a.y+'L'+b.x,b.y+'A'+size,size,0,arcSweep,largeArc,c.x,c.y+'Z'].join(',');
}

function svgCorrespondingAngle(a, b, c, size, s) {
  return svgAngle(s, { x: b.x+s.x-a.x, y: b.y+s.y-a.y }, { x: c.x+s.x-a.x, y: c.y+s.y-a.y }, size);
}

function svgPolygon(...points) {
  return points.map(p => p.x + ',' + p.y).join(' ');
}

function svgOppositeAngle(a, b, c, size) {
  return svgAngle(a, { x: 2*a.x-c.x, y: 2*a.y-c.y }, { x: 2*a.x-b.x, y: 2*a.y-b.y }, size);
}

function svgLine(a, b) {
  let p = pointAtX(a, b, -10);
  let q = pointAtX(a, b, 800);
  if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(q.x) || !isFinite(q.y)) return '';
  return 'M' + p.x + ',' + p.y + 'L' + q.x + ',' + q.y;
}

function svgLineThrough(a, b, c) {
  return svgLine(c, { x: c.x + b.x - a.x, y: c.y + b.y - a.y });
}

function deg(a, b, c) {
  let x = angle(a, b, c) * 180 / Math.PI;
  return Math.round(Math.min(x, 360 - x));
}


// -----------------------------------------------------------------------------
// Section Functions

export function polygon1(section, chapter) {
  chapter.addGloss('polygon');
  setPicker(section.$el.find('.set-picker'), section, chapter.Tutor);
}

export function polygon2(section, chapter) {
  chapter.addGloss('regpoly', 'equilateral', 'square', 'edge', 'vertex');
  setPicker(section.$el.find('.set-picker'), section, chapter.Tutor);
}

export function triangles(section, chapter) {
  chapter.addGloss('intangle');
  section.model.load({ angle, svgAngle, svgLine, svgPolygon, deg, x: 'max' });

  let initial = [{ x: 160, y: 70 }, { x: 500, y: 180 }, { x: 110, y: 320 }];
  let $geopad = section.$el.find('.geopad');

  section.$el.findAll('.geo-vertex').forEach(function($v, i) {
    let drag = new Draggable($v, $geopad);
    drag.on('move', e => { section.model.set('abc'[i], e); });
    drag.position = initial[i];
  });

  let $select = section.$el.find('select');
  $select.on('change', function() { section.model.set('x', $select.value); });

  section.model.load({ selected: function(a, b, c) {
    return {
      max: function() { return Math.max(deg(a,b,c), deg(b,c,a), deg(c,a,b)); },
      min: function() { return Math.min(deg(a,b,c), deg(b,c,a), deg(c,a,b)); },
      prod: function() { return numberFormat(deg(a,b,c) * deg(b,c,a) * deg(c,a,b)); },
      sum: function() { return 180; }
    }[section.model.x]();
  }});
}

export function triangleProof(section) {
  section.model.load({ angle, svgAngle, svgLine, svgLineThrough, svgCorrespondingAngle,
    svgOppositeAngle, svgPolygon, deg });

  let initial = [{ x: 100, y: 80 }, { x: 250, y: 300 }, { x: 50, y: 300 }];
  let $geopad = section.$el.find('.geopad');

  section.$el.findAll('.geo-vertex').forEach(function($v, i) {
    let drag = new Draggable($v, $geopad);
    drag.on('move', e => { section.model.set('abc'[i], e); });
    drag.position = initial[i];
  });

  section.subsections[0].on('show', function() { section.$el.find('.parallel').enter('draw', 400, 400); });
  section.subsections[1].on('show', function() { section.$el.findAll('.corresponding').forEach(a => { a.enter('fade', 400, 400); }); });
  section.subsections[2].on('show', function() { section.$el.find('.opposite').enter('fade', 400, 400); });
}

export function quadrilateral(section, chapter) {
  function deg(a, b, c) { return Math.round(angle(a, b, c) * 180 / Math.PI); }
  section.model.load({ angle, svgAngle, svgLine, svgPolygon, deg, x: 'max' });

  let initial = [{ x: 170, y: 40 }, { x: 480, y: 140 }, { x: 540, y: 320 }, { x: 120, y: 270 }];
  let $geopad = section.$el.find('.geopad');

  section.$el.findAll('.geo-vertex').forEach(function($v, i) {
    let drag = new Draggable($v, $geopad);
    drag.on('move', e => { section.model.set('abcd'[i], e); });
    drag.position = initial[i];
  });

  let $select = section.$el.find('select');
  $select.on('change', function() { section.model.set('x', $select.value); });
  let hasWarned = false;

  let functions = {
    max: function (a,b,c,d) { return Math.max(deg(c,b,a), deg(d,c,b), deg(a,d,c), deg(b,a,d)); },
    min: function (a,b,c,d) { return Math.min(deg(c,b,a), deg(d,c,b), deg(a,d,c), deg(b,a,d)); },
    prod: function (a,b,c,d) { return numberFormat(deg(c,b,a) * deg(d,c,b) * deg(a,d,c) * deg(b,a,d)); },
    sum: function (a,b,c,d) { return roundTo(deg(c,b,a) + deg(d,c,b) + deg(a,d,c) + deg(b,a,d), 10); }
  };

  section.model.load({ selected: function(a,b,c,d) {
    let sum = functions.sum(a,b,c,d);
    if (!hasWarned && sum > 360) {
      chapter.addHint('Make sure that the lines don’t overlap – otherwise weird stuff happens…');
      hasWarned = true;
    }
    return (section.model.x == 'sum') ? sum : functions[section.model.x](a,b,c,d);
  }});
}

export function classifyquadriateral(section, chapter) {
  let $lines = section.$el.findAll('line');
  $lines.forEach($l => { $l.attr('stroke', '#b30469'); });

  section.onScore('subsection-0', function() { $lines[1].attr('stroke', '#ff941f'); $lines[3].attr('stroke', '#ff941f'); });
  section.onScore('subsection-1', function() { $lines[1].attr('stroke', '#b30469'); $lines[2].attr('stroke', '#ff941f'); });
  section.onScore('subsection-2', function() { $lines[2].exit('draw'); $lines[3].exit('draw'); });
}

export function polygonsangle(section) {
  section.model.load({
    fn1: function(x) { return x < 3 ? '<em>x</em>' : x; },
    fn2: function(x) { return x < 3 ? '(<em>x</em> – 2)' : x-2 + ' = ' + 180 * (x-2); }
  });

  section.onScore('blank-0', function() { section.$el.find('.pentagon').enter('pop', 400); });
  section.onScore('blank-2', function() { section.$el.find('.hexagon').enter('pop', 400);
    section.$el.find('.heptagon').enter('pop', 400, 800);});
}

export function parallelograms(section) {
  section.model.load({ svgPolygon, between: Point.interpolate });
  let initial = [{ x: 170, y: 40 }, { x: 480, y: 140 }, { x: 540, y: 320 }, { x: 120, y: 270 }];

  section.$el.findAll('.geo-vertex').forEach(function($v, i) {
    let drag = new Draggable($v, section.$el.find('.geopad'));
    drag.on('move', e => {
      section.model.set('abcd'[i], e);
    });
    drag.position = initial[i];

    setTimeout(function() { drag.one('move', e => {
      setTimeout(function () { section.subsections[0].show(); }, 2000);
    }); }, 10);
  });
}

export function drawing(section) {
  const shapes = {
    3: '0,-34.6 30,17.3 -30,17.3',
    4: '-30,-30 30,-30 30,30 -30,30',
    5: '-30,-30 30,-30 30,30 -30,30',
    6: '0,-60 52,-30 52,30 0,60 -52,30 -52,-30'
  };

  let $box = $('svg', section.$el);
  let coords = [{ x: 150, y: 110, p: 3 }, { x: 360, y: 240, p: 4 }, { x: 520, y: 170, p: 5 },
    { x: 420, y: 400, p: 4 }, { x: 120, y: 340, p: 6 }, { x: 330, y: 60, p: 6 }];

  coords.forEach(function(c) {
    let angle = 0;

    let $g = $N('g', {}, $box);
    let $city = $N('polygon', { 'points': shapes[c.p], 'class': 'tessellation-shape' }, $g);
    $city.css('fill', ['#1f7aff', '#31b304', '#ff941f', '#b30469'][c.p - 3]);

    let drag = new Draggable($g, $box, 'xy', 0, true);
    drag.position = c;

    $city.on('click', function() { angle += 30; $city.transform = `rotate(${angle}deg)`; });
  });
}

export function penrose(section) {
  let $slider = section.$el.find('x-slider');
  let $g = section.$el.findAll('svg g');

  $g[1].attr('opacity', 0);
  $g[2].attr('opacity', 0);

  $slider.on('move', function(n) {
    $g[0].attr('opacity', n < 50 ? 1-n/77 : 0.35);
    $g[1].attr('opacity', n < 50 ? n/50 : 1.5-n/100);
    $g[2].attr('opacity', n < 50 ? 0 : n/50-1);
  });
}
