// =============================================================================
// Rotating Disk Component
// (c) Mathigon
// =============================================================================


import {clamp} from '@mathigon/fermat';
import {Angle, Point} from '@mathigon/euclid';
import {animate, AnimationResponse, ElementView, slide, SVGView} from '@mathigon/boost';


interface Options {
  draw: (angle: number, isMomentum: boolean, dt: number) => void;
  resistance?: number;
  maxSpeed?: number;
  start?: () => void;
  momentumStart?: (speed: number) => void;
  end?: () => void;
  final?: (angle: number) => void;
}

function findCenter($el: ElementView) {
  // The slide() events measures positions w.r.t. the viewport for HTML
  // elements, but w.r.t. the SVG canvas for SVG element.
  if ($el.type === 'svg') {
    const parent = ($el as SVGView).$ownerSVG;
    return new Point(parent.svgWidth / 2, parent.svgHeight / 2);
  } else {
    return $el.boxCenter;
  }
}

export function rotateDisk($el: ElementView, options: Options) {
  let center: Point;
  let history: ([number, number])[];
  let animation: AnimationResponse;
  let startAngle: number;
  let angle = 0;
  const maxSpeed = options.maxSpeed || 0.005;

  function spin(speed: number) {
    if (options.momentumStart) options.momentumStart(speed);
    animation = animate((t, dt) => {
      speed *= (options.resistance || 0.995);
      angle = (angle + dt * speed) % (2 * Math.PI);
      options.draw(angle, true, dt);
      if (animation && Math.abs(speed) < 0.0001) {
        animation.cancel();
        if (options.final) options.final(angle);
      }
    });
  }

  slide($el, {
    down() {
      if (animation) animation.cancel();
      center = findCenter($el);
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
