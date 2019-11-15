// =============================================================================
// Rotating Disk Component
// (c) Mathigon
// =============================================================================


import {Angle, clamp, Point} from '@mathigon/fermat';
import {slide, animate, ElementView, AnimationResponse} from '@mathigon/boost';


interface Options {
  draw: (angle: number, isMomentum: boolean, dt: number) => void;
  resistance?: number;
  maxSpeed?: number;
  $disk?: ElementView;  // If different from $el
  start?: () => void;
  momentumStart?: (speed: number) => void;
  end?: () => void;
}

export function rotateDisk($el: ElementView, options: Options) {
  let center: Point;
  let history: ([number, number])[];
  let animation: AnimationResponse;
  let startAngle: number;
  let angle = 0;
  const maxSpeed = options.maxSpeed || 0.01;

  function spin(speed: number) {
    if (options.momentumStart) options.momentumStart(speed);
    animation = animate((t, dt) => {
      speed *= (options.resistance || 0.995);
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
      if (options.start) options.start();
    },
    move(posn, start) {
      angle = startAngle - (new Angle(posn, center, start)).rad;
      options.draw(angle, false, 0);
      history.push([angle, Date.now()]);
      if (history.length > 4) history.shift();
    },
    end() {
      if (history.length < 4) return;
      const speed = (history[2][0] - history[0][0]) /
                    (history[2][1] - history[0][1]);
      spin(clamp(speed, -maxSpeed, maxSpeed));
      if (options.end) options.end();
    }
  });
}
