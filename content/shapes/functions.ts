// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {AB} from '../shared/components/ab';
import {Step} from '../shared/types';
import '../shared/components/ab';  // import component


export function sortPolygons($step: Step) {
  const $sort = $step.$('x-ab') as AB;

  $sort.on('correct', () => $step.addHint('correct'));
  $sort.on('incorrect', ({hint}) => $step.addHint(hint, {class: 'incorrect'}));
}
