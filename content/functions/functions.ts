// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import './components/relation';
import {Step} from '../shared/types';


export function fnSketch($step: Step) {
  $step.$('.btn.clear')!.on('click', () => {
    ($step.$('x-coordinate-sketch') as any).clear();
  });
}
