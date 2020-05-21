// =============================================================================
// Introduction to Probability
// (c) Mathigon
// =============================================================================


import {Sector, Point} from '@mathigon/fermat';
import {SVGView, $N} from '@mathigon/boost';
import {rotateDisk} from '../shared/components/disk';
import {Step} from '../shared/types';


export function intro($step: Step) {

  const $svg = $step.$('.spinner') as SVGView
  const $spinner = $step.$('.spinner rect') as SVGView

  const s1 = new Sector(new Point(150, 150), new Point(250, 150), 1);

  $N('path', {class: 'sector-1', path: s1}, $svg)

  rotateDisk($spinner, {
    start() {
      $step.score('spin');
    },
    draw(angle) {
      $spinner.setTransform(undefined, angle);
    },
    final(angle: number) {
      console.log('done');
    },
    resistance: 0.99
  });

}
