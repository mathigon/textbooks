// =============================================================================
// Prime Disk Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, register} from '@mathigon/boost';
import {primeFactorisation} from '@mathigon/fermat';
import {Point, Polygon} from '@mathigon/euclid';
import {BLUE, GREEN, PURPLE, RED, YELLOW} from '../../shared/constants';

const ORIGIN = new Point(0, 0);
const COLOURS: Record<number, string> = {2: YELLOW, 3: GREEN, 5: BLUE, 7: PURPLE};
const RING = 'M0-xAx,x,0,0,0-x,0,x,x,0,0,0,0,x,x,x,0,0,0,x,0,x,x,0,0,0,0-xZM0,yAz,z,0,0,1-y,0,z,z,0,0,1,0-y,z,z,0,0,1,y,0,z,z,0,0,1,0,yZ';


// Set dir = 0 for anti-clockwise rotations
function drawArc(a: Point, b: Point, c: Point, dir = 1) {
  const orient = b.x * (c.y - a.y) + a.x * (b.y - c.y) + c.x * (a.y - b.y);
  const sweep = (orient > 0) ? dir : (1 - dir);
  const size = Point.distance(b, a);
  return [a.x, a.y + 'A' + size, size, 0, sweep, dir, c.x, c.y].join(',');
}

export function drawPie(number: number, center: Point, radius: number) {
  // TODO Correct sorting of factors
  const factors = primeFactorisation(number);
  const count = factors.length;

  const $el = $N('g', {class: 'pie'});
  $el.setTransform(center);

  $N('text', {text: number, x: 0, y: 0.2 * radius, 'font-size': `${radius * 0.63}px`}, $el);

  if (count === 1) {
    const fill = COLOURS[factors[0]] || RED;
    const d = RING.replace(/x/g, '' + radius).replace(/y/g, '' + radius / 2)
        .replace(/z/g, '' + (radius / 2 + 0.1));
    $N('path', {d, fill}, $el);
    return $el;
  }

  const outside = Polygon.regular(count, radius).points;
  const inside = Polygon.regular(count, radius / 2).points;

  for (let i = 0; i < count; ++i) {
    const j = (i + 1) % count;
    const fill = COLOURS[factors[i]] || RED;
    const d = `M${drawArc(outside[i], ORIGIN, outside[j])}L${drawArc(inside[j], ORIGIN, inside[i], 0)}Z`;
    $N('path', {d, fill}, $el);
  }

  return $el;
}


@register('x-prime-disk')
export class PrimeDisk extends CustomElementView {

  ready() {
    const radius = +this.attr('r') || 40;
    const number = +this.attr('n');
    const $svg = $N('svg', {width: 2 * radius, height: 2 * radius}, this);
    $svg.append(drawPie(number, new Point(radius, radius), radius));
  }
}
