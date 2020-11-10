
import {Geopad, Step} from '../../shared/types';
import {Point} from '@mathigon/euclid';

/**
 * Animates a Linear Transformation on a GeoPad
 *
 * @param geo Geopad
 * @param iv name of i-unit-vector
 * @param jv name of j-unit-vector
 * @param m transformation matrix. m[0] is new i-vector and m[1] is new j-vector
 */
function animateTransformationOnGeo(geo: Geopad, iv: string, jv:string, m: number[][], time: number) {
  geo.animatePoint(iv, new Point(m[0][0], m[0][1]), time);
  geo.animatePoint(jv, new Point(m[1][0], m[1][1]), time);
}

/**
 * Show determinant as area.
 */
export function determinants($step:Step) {
  $step.model.watch((state: any) => {
    const i = state.ipoint;
    const j = state.jpoint;
    $step.model.determinant = i.x * j.y - i.y * j.x;
  });

  const $geopad = $step.$('x-geopad') as Geopad;

  // buttons
  const buttons = $step.$$('.button');

  // paths
  const _fabric = $step.$$('.fabric');

  const ANIMATE = 1000;

  // identity
  buttons[0].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 0], [0, 1]], ANIMATE);
  });

  // shear
  buttons[1].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 0], [1, 1]], ANIMATE);
  });

  // scale
  buttons[2].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[2, 0], [0, 2]], ANIMATE);
  });

  // rotate 90
  buttons[3].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[0, 1], [-1, 0]], ANIMATE);
  });

  // determinant = 0
  buttons[4].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 1], [-1, -1]], ANIMATE);
  });
}
