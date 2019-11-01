// =============================================================================
// Statistics
// (c) Mathigon
// =============================================================================


import {clamp, last, square, total} from '@mathigon/core';
import {random, roundTo} from '@mathigon/fermat';
import {rotateDisk} from '../shared/components/disk';


export function roulette($step) {
  const $wheels = $step.$$('.wheel');
  const $ball = $step.$('.ball');
  const $target = $step.$('circle');
  let ballSpeed, ballAngle, ballOffset;

  rotateDisk($target, {
    $disk: $wheels[0],
    start() {
      $ball.hide();
      $step.score('rotate');
    },
    momentumStart(speed) {
      $ball.show();
      ballSpeed = -0.8 * speed;
      ballAngle = 0;
      ballOffset = null;
    },
    draw(angle, isMomentum, dt) {
      for (let $w of $wheels) $w.setTransform(null, angle);
      if (!isMomentum) return;

      ballSpeed *= 0.985;
      if (Math.abs(ballSpeed) > 0.00032) {
        ballAngle = (ballAngle + dt * ballSpeed) % (2 * Math.PI);
      } else {
        if (!ballOffset) ballOffset = roundTo(ballAngle - angle, 2 * Math.PI/ 37);
        ballAngle = angle + ballOffset;
      }

      const ballRadius = Math.min(116 + 87500 * Math.abs(ballSpeed), 165);
      const x = ballRadius * Math.sin(ballAngle);
      const y = -ballRadius * Math.cos(ballAngle);
      $ball.translate(x, y);
    }
  });
}

export function randomSequence($section) {

  function generatePossibilities(len) {
    if (len <= 1) return [['R', 'B']];
    let prev = generatePossibilities(len - 1);
    prev.push(last(prev).map(x => x + 'R').concat(last(prev).map(x => x + 'B')));
    return prev;
  }

  function findCount(str, substr) {
    let count = 0;
    for (let i=0; i<=str.length - substr.length; ++i) {
      count += str.slice(i).startsWith(substr);
    }
    return count;
  }

  function compute(str) {
    let max = clamp(Math.floor(str.length / 2), 1, 8);
    let poss = generatePossibilities(max);
    let result = 1;

    for (let i = 2; i <= max; ++i) {
      let values = poss[i - 1];
      let count = values.length;

      let observed = values.map(v => findCount(str, v));
      let sum = total(observed);

      let chi = total(observed.map(o => square(o - sum / count) / sum * count));
      let deg = count - 1;

      result = Math.min(result, random.chiCDF(chi, deg));
    }

    return clamp(result, 0, 1);
  }

  let $score = $section.$('.score');
  $section.$('input').change(str => {
    if (str.length > 7) $section.score('random');
    $score.text = Math.round(compute(str.toUpperCase()) * 100);
  });
}
