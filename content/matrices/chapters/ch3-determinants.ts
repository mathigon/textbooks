// =============================================================================
// Matrices
// Chapter 3: Determinants
// (c) Mathigon
// =============================================================================

import {Geopad, Step} from '../../shared/types';

import {animateTransformationOnGeo} from './utils/utils-geo';

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
