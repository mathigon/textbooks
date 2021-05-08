// =============================================================================
// Introduction to Probability
// (c) Mathigon
// =============================================================================


import {wait} from '@mathigon/core';
import {Step} from '@mathigon/studio';
import {CoordinateSystem} from '../shared/types';
import {CoinFlip} from './components/coin';

import '../shared/components/buckets/buckets';
import './components/coin';


// -----------------------------------------------------------------------------
// Introduction

export function buckets($step: Step) {
  const $buckets = $step.$('x-buckets')!;
  $buckets.on('correct', () => $step.score('buckets'));
}

export function simulation($step: Step) {
  const $coordinateSystem = $step.$('x-coordinate-system') as CoordinateSystem;
  const $coin = $step.$('x-coin-flip') as CoinFlip;

  $step.model.numberOfFlips = 0;
  $step.model.numberOfHeads = 0;
  let points: number[] = [];

  $step.model.flip = async (n = 1) => {
    $step.score('flip');
    $coin.flip();
    for (let i = 0; i < n; ++i) {
      $step.model.numberOfFlips += 1;
      $step.model.numberOfHeads += Math.random() < 0.5 ? 1 : 0;
      points.push($step.model.numberOfHeads / $step.model.numberOfFlips);
      $coordinateSystem.setPoints(points);
      await wait(10);
    }
  };

  $step.model.reset = () => {
    points = [];
    $step.model.numberOfFlips = 0;
    $step.model.numberOfHeads = 0;
    $step.model.flip();
  };
}
