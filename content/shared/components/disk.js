// =============================================================================
// Rotating Disk Component
// (c) Mathigon
// =============================================================================



import {applyDefaults, clamp} from '@mathigon/core';
import {Angle} from '@mathigon/fermat';
import {slide, animate} from '@mathigon/boost';


const defaultOptions = {
  resistance: 0.995,
  maxSpeed: 0.01
};

export function rotateDisk($el, options) {
  options = applyDefaults(options, defaultOptions);
  let center, history, animation, startAngle;
  let angle = 0;

  function spin(speed) {
    if ('momentumStart' in options) options.momentumStart(speed);
    animation = animate((t, dt) => {
      speed *= options.resistance;
      angle = (angle + dt * speed) % (2 * Math.PI);
      options.draw(angle, true, dt);
      if (animation && Math.abs(speed) < 0.0001) animation.cancel();
    });
  }

  slide($el, {
    start() {
      if (animation) animation.cancel();
      center = (options.$disk || $el).boxCenter;
      startAngle = angle;
      history = [[angle, Date.now()]];
      if ('start' in options) options.start();
    },
    move(posn, start) {
      angle = startAngle - (new Angle(posn, center, start)).rad;
      options.draw(angle, false, null);
      history.push([angle, Date.now()]);
      if (history.length > 4) history.shift();
    },
    end() {
      if (history.length < 4) return;
      const speed = (history[2][0] - history[0][0]) / (history[2][1] - history[0][1]);
      spin(clamp(speed, -options.maxSpeed, options.maxSpeed));
      if ('end' in options) options.end();
    }
  });
}
