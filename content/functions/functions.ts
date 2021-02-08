// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import '../shared/components/relation';
import {Point} from '@mathigon/euclid';
import {Geopad, GeoPoint, Step} from '../shared/types';


export function fnSketch($step: Step) {
  $step.$('.btn.clear')!.on('click', () => {
    ($step.$('x-coordinate-sketch') as any).clear();
  });
}

export function coordinatePlots($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('point');

  const targets = [new Point(-5, 3), new Point(-2, -1), new Point(4, -3)];

  $geopad.on('add:point moveEnd', (e) => {
    const point = (e.point || e.path) as GeoPoint;  // Messy, sorry!
    const index = targets.findIndex(p => point.value?.equals(p));

    if (index < 0) {
      $step.addHint('incorrect');
      point.$el.addClass('red');
    } else {
      $step.score('p' + index);
      $step.addHint('correct');
      point.lock();
      point.$el.addClass('green');
    }
  });

  $step.onScore('p0 p1 p2', () => {
    $geopad.switchTool('move');
    // TODO Maybe delete any stray incorrect points?
  });
}
