// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {BinarySwipe} from '../shared/components/binary-swipe';
import {Step} from '../shared/types';
import '../shared/components/binary-swipe';  // import component


export function sortPolygons($step: Step) {
  const $sort = $step.$('x-binary-swipe') as BinarySwipe;

  $sort.on('correct', () => $step.addHint('correct'));
  $sort.on('incorrect', ({hint}) => $step.addHint(hint, {class: 'incorrect'}));
}
