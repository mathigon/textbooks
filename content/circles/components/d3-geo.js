/* global d3, topojson */
import { script } from '@mathigon/boost';

export function loadD3() {
  const load1 = script('/resources/shared/vendor/d3.v4.min.js');
  const load2 = script('/resources/shared/vendor/d3-geo-projection.v2.min.js');
  const load3 = script('/resources/shared/vendor/topojson.v1.min.js');

  return Promise.all([load1, load2, load3])
      .then(() => fetch('/resources/circles-and-pi/images/world-110m.json'))
      .then(text => text.json())
      .then(world => ({d3, topojson, world}));
}
