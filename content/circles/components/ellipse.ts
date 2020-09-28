// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {mod} from '@mathigon/fermat';
import {Circle, Ellipse, Line, Point, Polygon} from '@mathigon/euclid';
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

      // TODO Avoid the rope "shrinking" when not neccessary
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
    } while (this.hasChanged && iterations < 30);
  }
}


@register('x-ellipse')
export class EllipseDrawing extends CustomElementView {

  ready() {
    const $geopad = this.$('x-geopad') as Geopad;
    const $canvas = $N('canvas', {width: 1200, height: 800}) as CanvasView;
    $canvas.css({position: 'absolute', width: '100%', height: '100%'});
    $geopad.prepend($canvas);

    const stringLength = 8;
    const threshold = 0.01;

    const pen = $geopad.drawPoint(new Point(0, 0), {interactive: true, name: 'c', classes: 'red'});
    const path = $geopad.drawPath('', {classes: 'blue'});

    // Restrict the position of the pen to within the ellipse.
    $geopad.model.watch((s: any) => {
      const p = pen.value!;
      const d = Point.distance(p, s.a) + Point.distance(p, s.b);
      const ellipse = Ellipse.fromFoci(s.a, s.b, stringLength);
      if (d > stringLength + threshold) pen.setValue(ellipse.project(p));
    });

    // Draw a new path that connects the foci and pencil position.
    let lastC = pen.value!;
    const rope = new Rope(13, 250);
    $geopad.model.watch((s: any) => {
      const ca = new Circle(s.a, 0.25);
      const cb = new Circle(s.b, 0.25);
      const l = new Line(lastC, pen.value!);
      // if (l.length < threshold) return;
      const n = l.length * 50;
      for (let i = 0; i < n; ++i) {
        rope.update([ca, cb, new Circle(l.at(i / n), 0.25)], threshold);
      }
      lastC = pen.value!;
      path.setValue(rope.path);
    });

    // Draw a pencil trail whenever model.c changes.
    const trail = new Trail('path', 'ccc', 4, 400);
    $geopad.model.watch((s: any) => {
      $canvas.clear();
      trail.push($geopad.toViewportCoords(s.c));
      trail.draw($canvas);
    });
  }
}
