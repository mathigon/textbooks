// =============================================================================
// Prime Disk Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, register} from '@mathigon/boost';
import {Point, Polygon, primeFactorisation} from '@mathigon/fermat';
import {BLUE, GREEN, PURPLE, RED, YELLOW} from '../../shared/constants';


// Set dir = 0 for anti-clockwise rotations
export function drawArc(a: Point, b: Point, c: Point, dir = 1) {
  const orient = b.x * (c.y - a.y) + a.x * (b.y - c.y) + c.x * (a.y - b.y);
  const sweep = (orient > 0) ? dir : (1 - dir);
  const size = Point.distance(b, a);
  return [a.x, a.y + 'A' + size, size, 0, sweep, dir, c.x, c.y].join(',');
}

const COLOURS: Record<number, string> = {2: YELLOW, 3: GREEN, 5: BLUE, 7: PURPLE};
const RING = `M40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0Zm0,60A20,20,0,1,1,60,40,20.1,20.1,0,0,1,40,60Z`;


@register('x-prime-disk', {attributes: ['n']})
export class PrimeDisk extends CustomElementView {

  ready() {
    const size = +this.attr('size') || 80;
    const $svg = $N('svg', {width: size, height: size, viewBox: '0 0 80 80'}, this);

    const n = +this.attr('n');
    const factors = primeFactorisation(n);
    // TODO Correct sorting of factors
    const count = factors.length;

    $N('text', {text: n, x: 40, y: 48}, $svg);

    if (count === 1) {
      const fill = COLOURS[factors[0]] || RED;
      $N('path', {d: RING, fill}, $svg);
      return;
    }

    const center = new Point(40, 40);
    const outside = Polygon.regular(count, 40).shift(40).points;
    const inside = Polygon.regular(count, 20).shift(40).points;

    for (let i = 0; i < count; ++i) {
      const j = (i + 1) % count;
      const fill = COLOURS[factors[i]] || RED;
      const d = `M${drawArc(outside[i], center, outside[j])}L${drawArc(inside[j], center, inside[i], 0)}Z`;
      $N('path', {d, fill}, $svg);
    }
  }
}
