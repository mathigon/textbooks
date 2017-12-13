// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================



import { Point, Arc } from '@mathigon/fermat';


function semicircle(a, b, arc) {
  const c = Point.average(a, b);
  return arc(c, Point.difference(a, c), Point.difference(b, c));
}

export function thales(section) {
  section.addGoals('p1', 'p2', 'p3');
  const $geopad = section.$el.$('x-geopad');

  // $geopad.setTool('point');
  let a = null, b = null, c = null;

  $geopad.on('addPoint', function(point) {
    if (!a) {
      a = point.name;
      section.score('p1');

    } else if (!b) {
      b = point.name;
      $geopad._el.addPath(m => m.segment(m[a], m[b]), {animate: 1000});
      $geopad._el.addPath(m => semicircle(m[a], m[b], m.arc), {animate: 2000, target: 'circumf'});
      $geopad._el.drawCompass(semicircle($geopad._el.model[a], $geopad._el.model[b], $geopad._el.model.arc), 2000);
      section.score('p2');

    } else if (!c) {
      c = point.name;
      point.force(m => m.circle(m.line(m[a], m[b]).midpoint, m.line(m[a], m[b]).length/2).project(m[c]));
      $geopad._el.addPath(m => m.triangle(m[a], m[c], m[b]), {animate: 2000, target: 'triangle', classes: 'red'});
      $geopad._el.addPath(m => m.angle(m[a], m[c], m[b]), {animate: 500, target: 'angle', classes: 'thin red'});
      section.score('p3');
    }
  });
}
