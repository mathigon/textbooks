// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import {Step} from '@mathigon/studio';
import '../shared/components/relation/relation';


export function fnSketch($step: Step) {
  $step.$('.btn.clear')!.on('click', () => {
    ($step.$('x-coordinate-sketch') as any).clear();
  });
}
