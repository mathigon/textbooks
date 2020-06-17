// =============================================================================
// Talks and Workshops
// (c) Mathigon
// =============================================================================


import {Circle, intersections, nearlyEquals, Point} from '@mathigon/fermat';
import {$html, $N, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Step} from '../shared/types';


// MoMath Workshop
export {bridges, utilities, planarity, maps1, salesman4} from '../graph-theory/functions';

// MathsConf Talk
export {julia2, mandelPaint, fractalBuilder, mandelZoom} from '../fractals/functions';
export {bridges as bridgesV2, utilities as utilitiesV2, maps1 as mapsV2} from '../graph-theory/functions';
export {threeBodies} from '../chaos/functions';

// -----------------------------------------------------------------------------

function snapToCircle(posn: Point, c: Disk, radius: number) {
  const snap = new Circle(c.posn, c.r + radius);
  return snap.project(posn);
}

function snapToCircles(posn: Point, c1: Disk, c2: Disk, radius: number) {
  const snap1 = new Circle(c1.posn, c1.r + radius);
  const snap2 = new Circle(c2.posn, c2.r + radius);
  for (const p of intersections(snap1, snap2)) {
    if (Point.distance(p, posn) < 3) return p
  }
}

function isClose(c1: Disk, c2: Disk) {
  if (c1 === c2) return false;
  return nearlyEquals(Point.distance(c1.posn, c2.posn), c1.r + c2.r, 2);
}

class Disk {
  posn = new Point(0, 0);

  constructor(private readonly $svg: SVGParentView,
              private readonly allCircles: Disk[],
              label: number, readonly r: number) {

    const $c = $N('circle', {class: 'inner', r}, $svg) as SVGView;
    const $t = $N('text', {text: label}, $svg) as SVGView;

    let startPosn = this.posn;

    slide($c, {
      down: () => {
        $svg.append($c);  // Bring to front.
        $svg.append($t);
        $html.addClass('grabbing');
        startPosn = this.posn;
      },
      move: (p: Point, start: Point) => {
        this.posn = startPosn.add(p).subtract(start);

        // TODO snap to outer circle
        const snapCircles = allCircles.filter(c => isClose(this, c));

        if (snapCircles.length === 1) {
          this.posn = snapToCircle(this.posn, snapCircles[0], r);
        } else if (snapCircles.length > 1) {
          this.posn = snapToCircles(this.posn, snapCircles[0], snapCircles[1], r) || this.posn;
        }

        $c.setCenter(this.posn);
        $t.setCenter(this.posn.shift(0, 4));
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

  const $svg = $step.$('svg.circles') as SVGParentView;
  const circles: Disk[] = [];
  for (const [label, radius] of data) {
    circles.push(new Disk($svg, circles, label, radius * 10));
  }
}
