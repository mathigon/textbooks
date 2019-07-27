// =============================================================================
// Projectile Component
// (c) Mathigon
// =============================================================================


import {Point, Line} from '@mathigon/fermat';
import {CustomElement, registerElement, $N, slide, animate} from '@mathigon/boost';

export class Projectile extends CustomElement {

  ready() {

    const $svg = $N('svg', {width: 740, height: 480}, this);

    const center = new Point(50, 400);
    const ball = new Point(50, 400);

    const $slingshot = $N('circle', {r: 5}, $svg);
    const $ball = $N('circle', {r: 10, fill: 'red'}, $svg);
    const $line = $N('line', {stroke: 'red'}, $svg);

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
    })
  }




}

registerElement('x-projectile', Projectile);
