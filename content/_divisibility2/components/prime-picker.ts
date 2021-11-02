// =============================================================================
// Prime Picker Component
// (c) Mathigon
// =============================================================================


import {animate, CustomElementView, ElementView, register} from '@mathigon/boost';
import {Bounds, Point} from '@mathigon/euclid';
import {isPrime} from '@mathigon/fermat';


function collision(p1: Point, p2: Point, v1: Point, v2: Point) {
  const norm = p2.subtract(p1).unitVector;
  const speed = Point.dot(norm, v1.subtract(v2));
  if (speed < 0) return [v1, v2];
  return [v1.subtract(norm.scale(speed)), v2.add(norm.scale(speed))];
}


const RADIUS = 32;

class Bubble {
  p: Point;
  v: Point;
  isPrime: boolean;

  constructor(readonly $el: ElementView, bounds: Bounds) {
    this.p = Point.random(bounds);
    this.v = new Point(0, 0.4).rotate(Math.random() * 2 * Math.PI);
    this.isPrime = isPrime(+$el.text);
  }
}


@register('x-prime-picker')
export class PrimePicker extends CustomElementView {

  ready() {
    const bounds = new Bounds(RADIUS, this.width - RADIUS, RADIUS, this.height - RADIUS);
    const bubbles = this.$$('.bubble').map($b => new Bubble($b, bounds));

    const animation = animate(() => {
      for (let i = 0; i < bubbles.length; ++i) {
        const b = bubbles[i];
        if (!bounds.containsX(b.p)) b.v = b.v.scale(-1, 1);
        if (!bounds.containsY(b.p)) b.v = b.v.scale(1, -1);
        for (let j = i + 1; j < bubbles.length; ++j) {
          const c = bubbles[j];
          if (Point.distance(b.p, c.p) < 2 * RADIUS) {
            [b.v, c.v] = collision(b.p, c.p, b.v, c.v);
          }
        }
      }
      for (const b of bubbles) {
        b.p = b.p.add(b.v);
        b.$el.setTransform(b.p);
      }
    });

    const target = bubbles.filter(b => b.isPrime).length;
    let found = 0;

    for (const b of bubbles) {
      b.$el.setAttr('tabindex', 0);
      b.$el.on('click', () => {
        if (b.isPrime) {
          found += 1;
          b.$el.addClass('green');
          if (found >= target) {
            animation.cancel();
            // TODO
          }
        } else {
          b.$el.addClass('red');
        }
      });
    }
  }
}

