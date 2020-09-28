// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {Circle, Line, mod, Point, Polygon} from '@mathigon/fermat';
import {$N, CanvasView, CustomElementView, register} from '@mathigon/boost';
import {Trail} from '../../chaos/components/simulation';
import {Geopad} from '../../shared/types';


class Rope {
  readonly points: Point[];
  readonly segmentLength: number;
  private hasChanged = false;

  constructor(length: number, points: number) {
    const radius = length / 2 / Math.PI;
    this.points = Polygon.regular(points, radius).points;
    this.segmentLength = Point.distance(this.points[0], this.points[1]);
  }

  get path() {
    return new Polygon(...this.points);
  }

  // Move rope points outside certain pegs.
  private applyPegs(pegs: Circle[], threshold: number) {
    for (const peg of pegs) {
      for (const [i, p] of this.points.entries()) {
        if (Point.distance(p, peg.c) <= peg.r + threshold) {
          this.points[i] = peg.project(p);
          this.hasChanged = true;
        }
      }
    }
  }

  private applyTension(threshold: number) {
    for (const [i, p] of this.points.entries()) {
      const before = this.points[mod(i - 1, this.points.length)];
      const after = this.points[(i + 1) % this.points.length];

      const d1 = Point.distance(p, before);
      const d2 = Point.distance(p, after);

      if (Math.abs(d1 - d2) > threshold) {
        this.points[i] = Point.interpolate(before, after);
      }
    }
  }

  update(pegs: Circle[], threshold: number) {
    this.hasChanged = false;
    let iterations = 0;

    do {
      this.applyPegs(pegs, threshold);
      this.applyTension(threshold / 100);
      iterations += 1;
    } while (this.hasChanged && iterations < 20);
  }
}


@register('x-ellipse')
export class Ellipse extends CustomElementView {

  ready() {
    const $geopad = this.$('x-geopad') as Geopad;
    const $canvas = $N('canvas', {width: 1200, height: 800}) as CanvasView;
    $canvas.css({position: 'absolute', width: '100%', height: '100%'});
    $geopad.prepend($canvas);
    const trail = new Trail('path', 'ccc', 4, 400);

    const stringLength = 8;
    const rope = new Rope(13, 250);
    const threshold = 0.01;

    const pen = $geopad.drawPoint(new Point(0, 0), {interactive: true, name: 'c', classes: 'red'});
    const path = $geopad.drawPath('', {classes: 'blue'});

    // Restrict the position of the pen to within the ellipse.
    $geopad.model.watch((s: any) => {
      const p = pen.value!;
      const d = Point.distance(p, s.a) + Point.distance(p, s.b);

      if (d > stringLength + threshold) {
        const c = Point.distance(s.a, s.b) / 2;  // Half distance between foci.
        const a = stringLength / 2;  // Parameter a of ellipse.
        const b = Math.sqrt(a ** 2 - c ** 2);  // Parameter b of ellipse.
        const th = p.angle(Point.average(s.a, s.b));  // Angle of pen.
        const k = a * b / Math.sqrt((b * Math.cos(th)) ** 2 + (a * Math.sin(th)) ** 2);
        pen.setValue(new Point(k * Math.cos(th), k * Math.sin(th)));
      }
    });

    // Draw a new path that connects the foci and pencil position.
    let lastC = pen.value!;
    $geopad.model.watch((s: any) => {
      const l = new Line(lastC, pen.value!);
      const n = l.length * 50;
      for (let i = 0; i < n; ++i) {
        rope.update([s.a, s.b, l.at(i / n)].map(p => new Circle(p, 0.25)), threshold);
      }
      lastC = pen.value!;
      path.setValue(rope.path);
    });

    // Draw a pencil trail whenever model.c changes.
    $geopad.model.watch((s: any) => {
      $canvas.clear();
      trail.push($geopad.toViewportCoords(s.c));
      trail.draw($canvas);
    });
  }
}
