// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {Point} from '@mathigon/fermat';
import {CustomElementView, register, $N, slide, SVGBaseView, SVGParentView} from '@mathigon/boost';
import Band from './band';

const width = 500,
  height = 400,
  bandLength = 301;


@register('x-ellipse-drawing')
export class EllipseDrawing extends CustomElementView {

  private pins = [
    new Point(width * 0.3, height / 2),
    new Point(width * 0.7, height / 2),
  ];

  private band = new Band(bandLength);

  private $pins: Array<{
    $pin: SVGBaseView<SVGCircleElement>,
    $shadowStick: SVGBaseView<SVGPathElement>,
    $shadowBall: SVGBaseView<SVGCircleElement>
  }> = [];

  ready() {
    // Generate the SVG elements (except $trail, which generates on-click):
    const $svg = $N('svg', { width, height }, this) as SVGParentView;
    let $trail: SVGBaseView<SVGPathElement>;
    this.$pins = this.pins.map((pin, i) => ({
      $shadowStick: $N('path', { class: 'shadow' }, $svg) as SVGBaseView<SVGPathElement>,
      $shadowBall: $N('circle', { class: 'shadow', r: 5 }, $svg) as SVGBaseView<SVGCircleElement>,
      // Don't append this one just yet as it needs to be above the band.
      $pin: $N('circle', { class: `pin pin-${i}`, r: 5 }) as SVGBaseView<SVGCircleElement>
    }));
    this.band.$path = $N('path', { class: 'band' }, $svg) as SVGBaseView<SVGPathElement>;
    this.band.initialise(this.pins);
    for (const { $pin } of this.$pins)
      $svg._el.append($pin._el);
    this.updatePinPositions();
    const $pen = $N('circle', { 
      class: 'pen',
      // Hide pen initially by positioning it offscreen
      cx: -1000,
      cy: -1000,
      r: 3
    }, $svg) as SVGBaseView<SVGCircleElement>;

    let draggingPin: number | null = null;

    slide($svg, {
      start: (p) => {
        for (let i = 0; i < this.pins.length; ++i)
          if (Point.distance(p, this.pins[i]) < 10) {
            draggingPin = i;
            this.band.$path!.hide();
            $svg.addClass('dragging-pin');
            $svg.addClass(`dragging-pin-${draggingPin}`);
            return;
          }
        
        // Create a new trail every time a drag starts...
        for (const $oldTrail of this.$$('.trail')) {
          const { style } = $oldTrail._el;
          const opacity = style.opacity ? parseFloat(style.opacity) : 1;
          if (opacity > 0)
            style.opacity = (opacity - 0.2).toFixed(1);
          else
            $oldTrail._el.remove();
        }
        $trail = $N('path', { class: 'trail' }) as SVGBaseView<SVGPathElement>;
        $svg._el.insertBefore($trail._el, this.band.$path!._el);
      },

      end: () => {
        // Hide the pen when the drag ends
        $pen.setCenter({
          x: -1000,
          y: -1000
        });
        if (draggingPin !== null) {
          this.band.initialise(this.pins);
          this.band.$path!.show();
          $svg.removeClass('dragging-pin');
          $svg.removeClass(`dragging-pin-${draggingPin}`);
          draggingPin = null;
        }
      },

      move: (p) => {

        // Handle pin-dragging first, because that's easy
        if (draggingPin !== null) {
          let x = (draggingPin === 0) ? width - p.x : p.x;
          if (x < 275) x = 275;
          if (x > 400) x = 400;
          this.pins[draggingPin] = new Point((draggingPin === 0) ? width - x : x, height / 2);
          this.updatePinPositions();
          return;
        }

        p = this.band.closestAllowedPoint(p);

        // Draw the pen and its trail.
        $pen.setCenter(p);
        if ($trail)
          $trail.points = [ ...$trail.points, p ];

        this.band.pullTo(p);
      }
    });
  }

  // Draws the pins to the screen
  updatePinPositions() {
    for (let i = 0; i < this.pins.length; ++i) {
      const pin = this.pins[i],
        shadow = pin.add({ x: 10, y: 10 }),
        { $pin, $shadowStick, $shadowBall } = this.$pins[i];
      $pin.setCenter(pin);
      $shadowStick.points = [ pin, shadow ];
      $shadowBall.setCenter(shadow);
    }
  }
}
