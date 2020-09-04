// =============================================================================
// Prime Disk Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, register, SVGParentView} from '@mathigon/boost';
import {Color, flatten} from '@mathigon/core';
import {Point, Polygon, primeFactorisation} from '@mathigon/fermat';
import {RED} from '../../shared/constants';


function getPoints(center: Point, factors: number[], radius: number, angle: number): Point[] {
  // TODO Better sizing for powers of 2
  const polygon = Polygon.regular(factors[0], radius).rotate(angle).translate(center);
  if (factors.length === 1) return polygon.points;

  const newRadius = polygon.edges[0].length / 4;
  const newFactors = factors.slice(1);
  return flatten(polygon.points.map(p => {
    let angle = p.angle(center);
    if (factors[0] === 2) angle += Math.PI / 2;
    return getPoints(p, newFactors, newRadius, angle);
  }));
}

@register('x-factor-diagram', {attributes: ['n']})
export class FactorDiagram extends CustomElementView {
  private center!: Point;
  private $svg!: SVGParentView;

  ready() {
    const size = +this.attr('size') || 400;
    this.$svg = $N('svg', {width: size, height: size}, this) as SVGParentView;
    this.center = new Point(size / 2, size / 2);

    this.drawPoints(+this.attr('n'));
    this.on('attr:n', e => this.drawPoints(+e.newVal));
  }

  drawPoints(n: number) {
    // TODO Reuse existing children, add transitions
    this.$svg.removeChildren();

    if (n <= 1) {
      return $N('circle', {cx: this.center.x, cy: this.center.y, r: 100,
        fill: RED}, this.$svg);
    }

    const factors = primeFactorisation(n).reverse();
    const points = getPoints(this.center, factors, 100, 0);
    const r = Point.distance(points[0], points[1]) * 0.4;
    const colours = Color.rainbow(points.length);

    // const maxR = Math.max(...points.map(p => Point.distance(this.center, p)));
    // points = points.map(p => p.scale(180 / maxR, 180 / maxR, this.center));

    for (const [i, p] of points.entries()) {
      $N('circle', {cx: p.x, cy: p.y, r, fill: colours[i]}, this.$svg);
    }
  }
}
