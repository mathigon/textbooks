// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {Point, Polygon} from '@mathigon/fermat';
import {$N, CanvasView, CustomElementView, register} from '@mathigon/boost';
import {Trail} from '../../chaos/components/simulation';
import {Geopad} from '../../shared/types';


@register('x-ellipse')
export class Ellipse extends CustomElementView {

  ready() {
    const $geopad = this.$('x-geopad') as Geopad;
    const $canvas = $N('canvas', {width: 1200, height: 800}) as CanvasView;
    $canvas.css({position: 'absolute', width: '100%', height: '100%'});
    $geopad.prepend($canvas);
    const trail = new Trail('path', 'ccc', 4, 400);

    const stringLength = 8;

    // Draw the pen point.
    const pen = $geopad.drawPoint(new Point(0, 3),
        {interactive: true, name: 'c', classes: 'red'});

    // Draw a new path that connects the foci and pencil position.
    $geopad.drawPath((s: any) => {
      // TODO >>> Calculate true string position <<<
      return new Polygon(s.a, s.b, s.c);
    }, {classes: 'blue'});

    // Restrict the position of the pen to within the ellipse.
    $geopad.model.watch((s: any) => {
      const p = pen.value!;
      const d = Point.distance(p, s.a) + Point.distance(p, s.b);

      if (d > stringLength) {
        const c = Point.distance(s.a, s.b) / 2;  // Half distance between foci.
        const a = stringLength / 2;  // Parameter a of ellipse.
        const b = Math.sqrt(a ** 2 - c ** 2);  // Parameter b of ellipse.
        const th = p.angle(Point.average(s.a, s.b));  // Angle of pen.
        pen.setValue(new Point(a * Math.cos(th), b * Math.sin(th)));
      }
    });

    // Draw a pencil trail whenever model.c changes.
    $geopad.model.watch((s: any) => {
      $canvas.clear();
      trail.push($geopad.toViewportCoords(s.c));
      trail.draw($canvas);
    });
  }
}
