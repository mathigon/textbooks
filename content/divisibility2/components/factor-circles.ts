// =============================================================================
// Factor Circles Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register, SVGParentView} from '@mathigon/boost';
import {Color, join, tabulate} from '@mathigon/core';
import {ORIGIN, Point} from '@mathigon/euclid';
import {TWO_PI} from '@mathigon/euclid/src/utilities';
import {RED} from '../../shared/constants';


function regular(n: number, radius: number) {
  const da = TWO_PI / n;
  return tabulate((i) =>
    new Point(radius * Math.sin(da * i), radius * Math.cos(da * i)), n);
}

function primeFactors(n: number): number[] {
  if (n <= 1) return [];
  if (n % 4 === 0) return [4, ...primeFactors(n / 4)];  // hack
  if (n % 2 === 0) return [2, ...primeFactors(n / 2)];

  const max = Math.sqrt(n);
  for (let i = 3; i <= max; i += 2) {
    if (n % i === 0) return [i, ...primeFactors(n / i)];
  }
  return [n];
}

function getPoints(factors: number[], size: number): Point[] {
  if (factors.length <= 0) return [ORIGIN];

  const n = factors.pop()!;
  const radius = (n * size) / (n + 2);
  const angle = n === 2 ? Math.PI / 2 : n === 4 ? Math.PI / 4 : 0;
  const dy = n % 2 === 0 ? 0 : (radius / 2) * (1 - Math.cos(Math.PI / n));

  const polygon = regular(n, radius).map(p => p.rotate(angle).shift(0, -dy));
  const dotRadius = (2 * size) / (n + 2);
  const children = getPoints(factors, dotRadius);

  return join(...polygon.map(p => children.map(c => c.add(p))));
}


@register('x-factor-circles', {attributes: ['n']})
export class FactorCircles extends CustomElementView {
  private size!: number;
  private $svg!: SVGParentView;
  private $label!: ElementView;

  ready() {
    this.size = +this.attr('size') || 400;
    this.$svg = $N('svg', {width: this.size, height: this.size}, this) as SVGParentView;
    this.$label = $N('text', {x: 10, y: 20}, this);

    this.drawPoints(+this.attr('n'));
    this.on('attr:n', e => this.drawPoints(+e.newVal));
  }

  drawPoints(n: number) {
    // TODO Reuse existing children, add transitions
    this.$svg.removeChildren();
    this.$label.text = '' + n;

    const c = this.size / 2;
    if (n <= 1) return $N('circle', {cx: c, cy: c, r: 100, fill: RED}, this.$svg);

    const factors = primeFactors(n);
    const points = getPoints(factors, 0.9 * c);
    const r = 0.4 * Point.distance(points[0], points[1]);
    const colours = Color.rainbow(points.length).reverse();

    for (const [i, p] of points.entries()) {
      $N('circle', {cx: c - p.x, cy: c - p.y, r, fill: colours[i]}, this.$svg);
    }
  }
}
