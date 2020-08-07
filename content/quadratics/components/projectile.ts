// =============================================================================
// Projectile Component
// (c) Mathigon
// =============================================================================


import {Line, Point} from '@mathigon/fermat';
import {$N, animate, CustomElementView, register, slide, SVGView} from '@mathigon/boost';


@register('x-projectile')
export class Projectile extends CustomElementView {

  ready() {

    const $svg = $N('svg', {width: 740, height: 480}, this);

    const center = new Point(50, 400);
    const ball = new Point(50, 400);

    const $slingshot = $N('circle', {r: 5}, $svg) as SVGView;
    const $ball = $N('circle', {r: 10, fill: 'red'}, $svg) as SVGView;
    const $line = $N('line', {stroke: 'red'}, $svg) as SVGView;

    $slingshot.setCenter(center);
    $ball.setCenter(ball);

    slide($ball, {
      move(posn) {
        $ball.setCenter(posn);
        $line.setLine(posn, center);

      },
      end(posn) {
        const speed = Point.distance(posn, center) * 10;
        const angle = new Line(posn, center).angle;

        const ux = speed * Math.cos(angle);
        const uy = speed * Math.sin(angle);

        animate((t) => {
          t = t * 3;
          const x = posn.x + ux * t;
          const y = posn.y + uy * t + t * t * 600 / 2;
          $ball.setCenter({x, y});
        }, 3000);
      }
    });
  }
}
