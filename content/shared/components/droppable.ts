import {$html, Browser, ElementView, slide, SVGParentView} from '@mathigon/boost';
import {applyDefaults, EventTarget} from '@mathigon/core';
import {Bounds, Point} from '@mathigon/euclid';

type HoverData =
  {tag: 'Target', $el: ElementView} |
  {tag: 'NonTarget'};


interface DraggableOptions {
  moveX?: boolean;  // Whether it is draggable along the x-axis.
  moveY?: boolean;  // Whether it is draggable along the y-axis.
  snap?: number;  // Interval for snapping (in px)
  useTransform?: boolean;  //  Whether to use CSS transforms rather than `left` and `right`.
  margin?: number;  // Margin within the `$parent` element.
  round?: ((p: Point) => Point);  // Custom rounding function.
  width?: number;  //  Override `$parent` width.
  height?: number;  // Override `$parent` height.
  resetOnMiss?: boolean;
  $targets?: ElementView[];
}

/**
 * A draggable and droppable HTML element.
 * @emits {void} Draggable#start when the user starts dragging this element.
 * @emits {[Point, Point]} ($el position, pointer position) Draggable#drag while the user is dragging this element.
 * @emits {void} Draggable#click when the user clicks on the this element.
 * @emits {void} Draggable#end after the user stops dragging this element.
 * @emits {Point} Draggable#move When the position of this element changes.
 * @emits Draggable#enter-target {ElementView} $target - Fires when the pointer has entered the bounds of a 'target' element while dragging
 * @emits Draggable#exit-target {ElementView} $target - Fires when the pointer has exited the bounds of a 'target' element while dragging
 * @emits Draggable#dropped-target {ElementView} $target - Fires when the user releases the pointer while over a 'target' element
 * @emits Draggable#dropped-non-target - Fires when the user releases the pointer while not over a 'target' element
 */
export class Draggable extends EventTarget {
  protected options: DraggableOptions;
  protected areaBounds = {topLeft: new Point(0, 0), bottomRight: new Point(0, 0)};
  protected over: HoverData;
  protected startPos = new Point(0, 0);
  position = new Point(0, 0);
  disabled = false;
  width = 0;
  height = 0;

  constructor(readonly $el: ElementView, $parent: ElementView,
      options: DraggableOptions = {}) {
    super();

    this.over = {tag: 'NonTarget'};

    this.options = applyDefaults(options, {moveX: true, moveY: true});
    this.setDimensions($parent);

    slide($el, {
      start: () => {
        if (this.disabled) return;
        this.startPos = this.position;
        this.trigger('start');
        $html.addClass('grabbing');
      },
      move: (posn, start) => {
        if (this.disabled) return;
        this.setPosition(
            this.startPos.x + posn.x - start.x,
            this.startPos.y + posn.y - start.y
        );
        this.trigger('drag', {elemPos: this.position, pointerPos: posn}); // pass obj instead of tuple

        let overTarget = false;
        const prevTarget = this.over.tag == 'NonTarget' ? undefined : this.over.$el;
        if (this.options.$targets != undefined) {
          for (const $target of this.options.$targets) {
            if ($target.boundsRect.contains(posn)) {
              overTarget = true;
              if (prevTarget != $target) {
                /**
                 * Fires when the pointer has entered the bounds of a 'target' element while dragging
                 *
                 * @event Draggable#enter-target
                 * @type {ElementView} $target - The element whose bounds the pointer has entered
                 */
                this.trigger('enter-target', $target);
                this.over = {tag: 'Target', $el: $target};
              }
              break;
            }
          }

          if (!overTarget) this.over = {tag: 'NonTarget'};
          const currentTarget = this.over.tag == 'NonTarget' ? undefined : this.over.$el;
          /**
           * Fires when the pointer has exited the bounds of a 'target' element while dragging
           *
           * @event Draggable#exit-target
           * @type {ElementView} $target - The element whose bounds the pointer has exited
           */
          if (prevTarget != undefined && prevTarget != currentTarget) this.trigger('exit-target', prevTarget);
        }
      },
      end: (last, start) => {
        if (this.disabled) return;
        this.trigger(last.equals(start) ? 'click' : 'end');
        $html.removeClass('grabbing');

        let droppedOn: ElementView | undefined;

        if (this.options.$targets != undefined) {
          for (const $target of this.options.$targets) {
            if ($target.boundsRect.contains(last)) {
              /**
               * Fires when the user releases the pointer while over a 'target' element
               *
               * @event Draggable#dropped-target
               * @type {ElementView} $target - The element the pointer was released over
               */
              this.trigger('dropped-target', $target);
              droppedOn = $target;
              break;
            }
          }
        }

        if (droppedOn == undefined) {
          /**
           * Fires when the user releases the pointer while not over a 'target' element
           *
           * @event Draggable#dropped-target
           */
          this.trigger('dropped-non-target');
          if (this.options.resetOnMiss === true) this.resetPosition();
        }
      },
      accessible: true
    });

    Browser.onResize(() => {
      const oldWidth = this.width;
      const oldHeight = this.height;
      this.setDimensions($parent);
      this.setPosition(this.position.x * this.width / oldWidth || 0,
          this.position.y * this.height / oldHeight || 0);
    });
  }

  private setDimensions($parent: ElementView) {
    if ($parent.type === 'svg') {
      this.width = this.options.width || ($parent as SVGParentView).svgWidth;
      this.height = this.options.height || ($parent as SVGParentView).svgHeight;
    } else {
      this.width = this.options.width || $parent.width;
      this.height = this.options.height || $parent.height;
    }
    const topLeft = new Point($parent.bounds.x - this.$el.bounds.x, $parent.bounds.y - this.$el.bounds.y);
    const bottomRight = new Point(topLeft.x + this.width, topLeft.y + this.height);
    this.areaBounds = {
      topLeft,
      bottomRight
    };
  }

  /** Sets the position of the element. */
  setPosition(x: number, y: number) {
    const m = this.options.margin || 0;

    let p = new Point(this.options.moveX ? x : 0, this.options.moveY ? y : 0)
        .clamp(
            new Bounds(
                this.areaBounds.topLeft.x,
                this.areaBounds.bottomRight.x,
                this.areaBounds.topLeft.y,
                this.areaBounds.bottomRight.y
            ),
            m
        )
        .round(this.options.snap || 1);

    if (this.options.round) p = this.options.round(p);

    if (p.equals(this.position)) return;
    this.position = p;

    if (this.options.useTransform) {
      this.$el.translate(p.x, p.y);
    } else {
      if (this.options.moveX) this.$el.css('left', p.x + 'px');
      if (this.options.moveY) this.$el.css('top', p.y + 'px');
    }

    this.trigger('move', p);
  }

  resetPosition() {
    this.setPosition(this.startPos.x, this.startPos.y);
  }
}
