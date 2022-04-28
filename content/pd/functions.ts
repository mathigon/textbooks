// =============================================================================
// Non-Euclidean Geometry
// (c) Mathigon
// =============================================================================


import {Step} from '@mathigon/studio';

import '../shared/components/buckets/buckets';


export function quadrilaterals($step: Step) {
  $step.model.watch((m: any) => {
    if (m.type === 'square') $step.score('tabs');
  });
}

export function q1($step: Step) {
  $step.model.watch((m: any) => {
    if (m.type === 'q2') $step.score('tabs');
  });
}

export function q2($step: Step) {
  $step.model.watch((m: any) => {
    if (m.type === 'q4') $step.score('tabs');
  });
}

export function buckets($step: Step) {
  $step.$('x-buckets')!.on('correct', () => $step.score('buckets'));
}
