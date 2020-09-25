// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {Point} from '@mathigon/fermat';
import {BinarySwipe} from '../shared/components/binary-swipe';
import {Polypad, Step} from '../shared/types';
import '../shared/components/binary-swipe';  // import component


export function sortPolygons($step: Step) {
  const $sort = $step.$('x-binary-swipe') as BinarySwipe;

  $sort.on('correct', ({comment}) => {
    const hintContents = comment ?? 'correct';
    $step.addHint(hintContents, {class: 'correct'});
  });
  $sort.on('incorrect', ({hint}) => $step.addHint(hint, {class: 'incorrect'}));
  $sort.on('complete', () => {
    console.log('Time for next step');
  });
}

export function tangram($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  $polypad.$svg.setAttr('viewBox', '0 0 420 420');
  $polypad.canDelete = $polypad.canCopy = false;

  const tiles = [[2, 4, -90], [4, 2, 0], [6, 4, 0], [3, 7, 0], [7, 2, -90],
    [4, 5, 0], [6, 6, 90]];  // initial [x, y, rot]

  for (const [i, t] of tiles.entries()) {
    const tile = $polypad.newTile('tangram', `${i}`);
    tile.setPosition(new Point(110 + t[0] * 25, 110 + t[1] * 25));
    tile.setRotation(t[2]);
  }

  // TODO Allow students to select different silhouettes

  $polypad.on('move-selection rotate-selection', () => {
    // TODO Check if a shape has been completed
  });
}
