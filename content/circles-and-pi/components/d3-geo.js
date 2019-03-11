/* global d3, topojson */
import { script } from '@mathigon/boost';

const WORLD = '/resources/circles-and-pi/images/world-110m.json';

export async function loadD3() {
  const load1 = script('https://d3js.org/d3.v4.min.js');
  const load2 = script('https://d3js.org/d3-geo-projection.v2.min.js');
  const load3 = script('https://d3js.org/topojson.v1.min.js');

  await Promise.all([load1, load2, load3]);

  return new Promise((resolve, reject) => {
    d3.json(WORLD, (error, world) => {
      if (error) return reject();
      resolve({d3, topojson, world});
    });
  });
}
