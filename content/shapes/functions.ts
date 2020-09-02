// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {Polygon} from '@mathigon/fermat';
import {CanvasView} from '@mathigon/boost';
import {Step} from '../shared/types';


export function voronoi($step: Step) {
  const $canvas = $step.$('canvas.voronoi') as CanvasView;

  $step.model.watch(() => {
    $canvas.clear();
    const poly = new Polygon($step.model.a, $step.model.b, $step.model.c);
    $canvas.draw(poly, {fill: '#c00'});
  });
}
