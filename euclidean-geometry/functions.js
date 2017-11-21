// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';


export function thales(section) {
  const $geopad = section.$el.$('x-geopad');
  const model = $geopad._el.model;

  model.set('semicircle', function(a, b) {
    const c = Point.average(a, b);
    return model.arc(c, Point.difference(a, c), Point.difference(b, c));
  });
}
