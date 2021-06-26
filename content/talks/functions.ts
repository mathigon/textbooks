// =============================================================================
// Talks and Workshops
// (c) Mathigon
// =============================================================================


import {nearlyEquals} from '@mathigon/fermat';
import {Circle, intersections, Point, Polygon} from '@mathigon/euclid';
import {$html, $N, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Step} from '@mathigon/studio';
import '../shared/components/solved/solved';


// MoMath Workshop
export {bridges, utilities, planarity, maps1, salesman4} from '../graph-theory/functions';

// ISTE Talk
export {julia2, mandelPaint, fractalBuilder, mandelZoom} from '../fractals/functions';
export {bridges as bridgesV2, utilities as utilitiesV2, maps1 as mapsV2} from '../graph-theory/functions';
export {threeBodies} from '../chaos/functions';

// -----------------------------------------------------------------------------

class Disk {
  posn: Point;

  constructor($svg: SVGParentView, allDisks: Disk[], outer: Circle,
      label: number, readonly r: number, initial: Point) {

    const $c = $N('circle', {class: 'inner', r}, $svg) as SVGView;
    const $t = $N('text', {text: label}, $svg) as SVGView;

    let startPosn = this.posn = initial;
    $c.setCenter(this.posn);
    $t.setCenter(this.posn.shift(0, 3.4));

    slide($c, {
      down: () => {
        $svg.append($c);  // Bring to front.
        $svg.append($t);
        $html.addClass('grabbing');
        startPosn = this.posn;
      },
      move: (p: Point, start: Point) => {
        this.posn = startPosn.add(p).subtract(start);

        const snapCircles: Circle[] = [];

        // Snap to outer circle
        if (nearlyEquals(Point.distance(this.posn, outer.c), outer.r - r, 2)) {
          snapCircles.push(new Circle(outer.c, outer.r - r));
        }

        // Snap to inner circles
        for (const c of allDisks) {
          if (c === this) continue;
          if (nearlyEquals(Point.distance(this.posn, c.posn), this.r + c.r, 2)) {
            snapCircles.push(new Circle(c.posn, c.r + r));
          }
        }

        if (snapCircles.length === 1) {
          this.posn = snapCircles[0].project(this.posn);
        } else if (snapCircles.length > 1) {
          for (const p of intersections(snapCircles[0], snapCircles[1])) {
            if (Point.distance(p, this.posn) < 3) this.posn = p;
          }
        }

        $c.setCenter(this.posn);
        $t.setCenter(this.posn.shift(0, 3.4));
      },
      end: () => $html.removeClass('grabbing')
    });
  }
}

export function circles($step: Step) {
  const data = [
    [18, 6.004], [23, 4.698], [27, 4.002], [35, 3.088], [47, 2.299],
    [62, 1.743], [63, 1.715], [78, 1.385], [83, 1.302], [107, 1.01],
    [110, 0.982], [123, 0.879], [135, 0.8], [135, 0.8], [146, 0.74],
    [147, 0.735]
  ];

  const initial = Polygon.regular(data.length + 1, 130).shift(160, 160);

  const outerCircle = new Circle(new Point(160, 160), 108.07);

  const $svg = $step.$('svg.circles') as SVGParentView;
  const circles: Disk[] = [];
  for (const [i, [label, radius]] of data.entries()) {
    circles.push(new Disk($svg, circles, outerCircle, label, radius * 10,
        initial.points[i]));
  }
}
