// =============================================================================
// Exponential Functions
// (c) Mathigon
// =============================================================================


import './components/atom';
import {Step} from '../shared/types';


export function carbon5($step: Step) {
  $step.onScore('blank-0', () => $step.$('.c1')!.addClass('on'));
  $step.onScore('blank-1', () => $step.$('.c2')!.addClass('on'));
  $step.onScore('blank-2', () => $step.$('.c3')!.addClass('on'));
  $step.onScore('blank-3', () => $step.$('.c4')!.addClass('on'));
}
