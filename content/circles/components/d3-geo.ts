// =============================================================================
// D3 Loading Utility
// (c) Mathigon
// =============================================================================


/// <reference types="d3"/>
import {loadScript} from '@mathigon/boost';


export async function loadD3() {
  const load1 = loadScript('/content/shared/vendor/d3.v4.min.js');
  const load2 = loadScript('/content/shared/vendor/d3-geo-projection.v2.min.js');
  const load3 = loadScript('/content/shared/vendor/topojson.v1.min.js');

  await Promise.all([load1, load2, load3]);
  const text = await fetch('/content/circles/images/world-110m.json');
  const world = await text.json() as any;
  return {d3: d3, topojson: topojson, world};
}
