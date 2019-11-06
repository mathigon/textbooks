// =============================================================================
// Statistics
// (c) Mathigon
// =============================================================================


import { roundTo } from '@mathigon/fermat';
import { rotateDisk } from '../shared/components/disk';

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
