// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';


function semicircle(a, b, arc) {
  const c = Point.average(a, b);
  return arc(c, Point.difference(a, c), Point.difference(b, c));
}

export function thales(section) {
  const $geopad = section.$('x-geopad');

  $geopad.setActiveTool('point');
  let a = null, b = null, c = null;

  $geopad.on('addPoint', function(point) {
    if (!a) {
      a = point.name;
      section.score('p1');

    } else if (!b) {
      b = point.name;
      $geopad.addPath(m => m.segment(m[a], m[b]), {animate: 1000});
      $geopad.addPath(m => semicircle(m[a], m[b], m.arc), {animate: 2000, target: 'circumf'});
      $geopad.drawCompass(semicircle($geopad.model[a], $geopad.model[b], $geopad.model.arc), 2000);
      section.score('p2');

    } else if (!c) {
      c = point.name;
      point.project(m => m.circle(m.line(m[a], m[b]).midpoint, m.line(m[a], m[b]).length/2));
      $geopad.addPath(m => m.triangle(m[a], m[c], m[b]), {animate: 2000, target: 'triangle', classes: 'red'});
      $geopad.addPath(m => m.angle(m[a], m[c], m[b]), {animate: 500, target: 'angle', classes: 'thin red'});
      section.score('p3');
      $geopad.setActiveTool('move');
    }
  });
}
