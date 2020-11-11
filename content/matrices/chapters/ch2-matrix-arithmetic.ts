// =============================================================================
// Matrices
// Chapter 2: Matrix arithmetic
// (c) Mathigon
// =============================================================================

import {Geopad, Step} from '../../shared/types';
import {ElementView} from '@mathigon/boost';
import {Matrix} from '@mathigon/fermat';

import {animateTransformationOnGeo} from './utils/utils-geo';

/**
 * Parse a string into array of two numbers.
 *
 * @param str Should match [number, number]
 */
function parseNumberArray(str: string): number[]|undefined {
  const regex = /\[(-?\d+(?:\.?\d+)?),(-?\d+(?:\.?\d+)?)\]/; // could simplify by not allowing float
  const result = regex.exec(str)!;
  return result.slice(1, 3).map(n => Number.parseFloat(n)); // pick 1 and 2
}

export function transformsCalculator($step: Step) {
  const $cubes = $step.$$('.cube') as ElementView[]; // they're squares, actually

  // g[0] x g[1] = g[2]
  const $geopads = $step.$('.display')?.$$('x-geopad') as Geopad[];

  // buttons
  const $calc = $step.$('.calc') as ElementView;
  const $clear = $step.$('.clear') as ElementView;

  let a: number[][] | undefined = undefined;
  let b: number[][] | undefined = undefined;
  let c: number[][] | undefined = undefined;
  const I = Matrix.identity(2);

  /**
   * Currently only used to draw Identity Matrix, but worth keeping.
   *
   * @param geo Geopad to draw on.
   * @param matrix transformation to draw.
   * @param name name of matrix (gets mapped to i${name} and j${name})
   */
  function drawUnitVectorsToGeo(geo: Geopad, matrix: number[][], name: string) {
    geo.drawPoint('point(0,0)',
        {name: 'origin', interactive: false, classes: 'hidden'});
    geo.drawPoint(`point(${matrix[0][0]},${matrix[0][1]})`,
        {name: `i${name}`, interactive: false, classes: 'hidden'});
    geo.drawPoint(`point(${matrix[1][0]},${matrix[1][1]})`,
        {name: `j${name}`, interactive: false, classes: 'hidden'});
    geo.drawPath(`segment(origin,i${name})`, {classes: 'red'});
    geo.drawPath(`segment(origin,j${name})`, {classes: 'green'});
  }

  const WAIT = 200;
  const ANIMATE = 500;

  for (const [_i, $c] of $cubes.entries()) {
    $c.on('click', () => {

      if (a === undefined) {
        a = [];
        a.push(parseNumberArray($c.attr('i'))!);
        a.push(parseNumberArray($c.attr('j'))!);
        drawUnitVectorsToGeo($geopads[0], I, 'a'); // initialize as Identity
        // then animate to transformation
        setTimeout(() => animateTransformationOnGeo($geopads[0], 'ia', 'ja', a!, ANIMATE), WAIT);

      } else if (b === undefined) {
        b = [];
        b.push(parseNumberArray($c.attr('i'))!);
        b.push(parseNumberArray($c.attr('j'))!);
        drawUnitVectorsToGeo($geopads[1], I, 'b'); // initialize as Identity
        // then animate to transformation
        setTimeout(() => animateTransformationOnGeo($geopads[1], 'ib', 'jb', b!, ANIMATE), WAIT);
      }
    });
  }

  $clear.on('click', () => {
    a = undefined;
    b = undefined;
    $geopads[0].$svg.$('.paths')!.removeChildren();
    $geopads[0].$svg.$('.points')!.removeChildren();
    $geopads[1].$svg.$('.paths')!.removeChildren();
    $geopads[1].$svg.$('.points')!.removeChildren();
    $geopads[2].$svg.$('.paths')!.removeChildren();
    $geopads[2].$svg.$('.points')!.removeChildren();
  });

  $calc.on('click', () => {

    if (a !== undefined && b !== undefined) {
      drawUnitVectorsToGeo($geopads[2], I, 'c');

      c = Matrix.product(a, b);

      // show it animating from I to A to C.
      setTimeout(() => {
        animateTransformationOnGeo($geopads[2], 'ic', 'jc', a!, ANIMATE);
        setTimeout(() => animateTransformationOnGeo($geopads[2], 'ic', 'jc', c!, ANIMATE), ANIMATE);
      }, WAIT);
    }
  });
}
