// =============================================================================
// Factor Circles Component
// (c) Mathigon
// =============================================================================


import {$N, Browser, CustomElementView, ElementView, register, SVGParentView, SVGView} from '@mathigon/boost';
import {Color, join, tabulate} from '@mathigon/core';
import {ORIGIN, Point, TWO_PI} from '@mathigon/euclid';


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


@register('x-factor-circles')
export class FactorCircles extends CustomElementView {
  private size!: number;
  private $svg!: SVGParentView;
  private $label!: ElementView;
  private $points: SVGView[] = [];

  ready() {
    this.size = +this.attr('size') || 400;
    this.$svg = $N('svg', {width: this.size, height: this.size}, this) as SVGParentView;
    this.$label = $N('text', {x: 6, y: 30}, this.$svg);
    this.onAttr('n', n => this.drawPoints(+n));
  }

  drawPoints(n: number) {
    this.$label.text = '' + n;

    const c = this.size / 2;
    const factors = primeFactors(n);
    const points = getPoints(factors, 0.9 * c);
    const r = points.length > 1 ? 0.4 * Point.distance(points[0], points[1]) : 0.6 * c;
    const colours = Color.rainbow(points.length > 1 ? points.length : 2).reverse();

    // Create any missing circles
    for (let i = this.$points.length; i < points.length; ++i) {
      this.$points.push($N('circle', {r: 100, style: 'opacity:0'}, this.$svg) as SVGView);
    }

    // Update all circles
    for (const [i, p] of points.entries()) {
      this.$points[i].setTransform({x: c - p.x, y: c - p.y}, undefined, r / 100);
      this.$points[i].setAttr('fill', colours[i]);
    }

    // Hide or show circles
    Browser.redraw();
    for (let i = 0; i < this.$points.length; ++i) {
      this.$points[i].css('opacity', i < points.length ? 1 : 0);
    }
  }
}
