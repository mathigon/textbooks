import {$html, animate, Browser, ElementView, slide, SVGParentView} from '@mathigon/boost';
import {applyDefaults, EventTarget} from '@mathigon/core';
import {Bounds, Point} from '@mathigon/euclid';

interface DraggableOptions {
  $parent?: ElementView;
  /** Whether it is draggable along the x-axis. */
  moveX?: boolean;
  /** Whether it is draggable along the y-axis. */
  moveY?: boolean;
  /** Interval for snapping (in px) */
  snap?: number;
  /** Whether to use CSS transforms rather than `left` and `right`. */
  useTransform?: boolean;
  /** Margin within the `$parent` element. */
  margin?: number;
  /** Custom rounding function. */
  round?: ((p: Point) => Point);
  /** Override `$parent` width. */
  width?: number;
  /** Override `$parent` height. */
  height?: number;
  /** Whether to reset position when dropped outside of a target */
  resetOnMiss?: boolean;
  /** Elements that the Draggable instance can be dropped onto */
  $targets?: ElementView[];
}

/**
 * A draggable and droppable HTML element.
 * @emits Draggable#start - when the user starts dragging this element.
 * @emits Draggable#drag {elemPos: Point, pointerPos: Point} - while the user is dragging this element.
 * @emits Draggable#click - when the user clicks on this element.
 * @emits Draggable#end - after the user stops dragging this element.
 * @emits Draggable#move {newPos: Point} - When the position of this element changes.
 * @emits Draggable#enter-target {$el: ElementView} - Fires when the pointer has entered the bounds of a 'target' element while dragging
 * @emits Draggable#exit-target {$el: ElementView} - Fires when the pointer has exited the bounds of a 'target' element while dragging
 * @emits Draggable#dropped-target {$el: ElementView, index: number} - Fires when the user releases the pointer while over a 'target' element
 * @emits Draggable#dropped-non-target - Fires when the user releases the pointer while not over a 'target' element
 */
export class Draggable extends EventTarget {
  protected options: DraggableOptions;
  protected areaBounds?: Bounds;
  protected over?: ElementView;
  protected startPos = new Point(0, 0);
  protected targets: {$el: ElementView, index: number}[] | undefined;
  position = new Point(0, 0);
  disabled = false;
  width = 0;
  height = 0;

  constructor(readonly $el: ElementView, options: DraggableOptions = {}) {
    super();

    this.options = applyDefaults(options, {moveX: true, moveY: true});
    this.targets = this.options.$targets?.map(($targetEl, index) => ({$el: $targetEl, index}));
    if (options.$parent) this.setDimensions(options.$parent);

    slide($el, {
      start: () => {
        if (this.disabled) return;
        this.startPos = this.position;
        /**
         * Fires when the user starts dragging this element.
         *
         * @event Draggable#start
         */
        this.trigger('start');
        $html.addClass('grabbing');
      },
      move: (posn, start) => {
        if (this.disabled) return;
        this.setPosition(this.startPos.x + posn.x - start.x,
            this.startPos.y + posn.y - start.y);
        /**
         * Fires while the user is dragging this element.
         *
         * @event Draggable#drag
         * @type {elemPos: Point, pointerPos: Point} positionData - The positions of the Draggable and the pointer
         */
        this.trigger('drag', {elemPos: this.position, pointerPos: posn});

        let overTarget = false;
        const prevTarget = this.over;
        if (this.targets) {
          for (const target of this.targets) {
            if (target.$el.boundsRect.contains(posn)) {
              overTarget = true;
              if (prevTarget !== target.$el) {
                /**
                 * Fires when the pointer has entered the bounds of a 'target' element while dragging
                 *
                 * @event Draggable#enter-target
                 * @type {$el: ElementView} - The element whose bounds the pointer has entered
                 */
                this.trigger('enter-target', {$el: target.$el});
                this.over = target.$el;
              }
              break;
            }
          }

          if (!overTarget) this.over = undefined;
          const currentTarget = this.over;
          /**
           * Fires when the pointer has exited the bounds of a 'target' element while dragging
           *
           * @event Draggable#exit-target
           * @type {$el: ElementView} - The element whose bounds the pointer has exited
           */
          if (prevTarget && prevTarget !== currentTarget) this.trigger('exit-target', {$el: prevTarget});
        }
      },
      end: (last, start) => {
        if (this.disabled) return;
        /**
         * Fires when the user clicks on this element.
         *
         * @event Draggable#click
         */
        if (last.equals(start)) this.trigger('click');
        /**
         * Fires after the user stops dragging this element.
         *
         * @event Draggable#end
         */
        else this.trigger('end');

        $html.removeClass('grabbing');

        let droppedOn: ElementView | undefined;

        if (this.targets) {
          for (const target of this.targets) {
            if (target.$el.boundsRect.contains(last)) {
              /**
               * Fires when the user releases the pointer while over a 'target' element
               *
               * @event Draggable#dropped-target
               * @type {$el: ElementView} - The element the pointer was released over
               */
              this.trigger('dropped-target', {$el: target});
              droppedOn = target.$el;
              break;
            }
          }
        }

        if (droppedOn === undefined) {
          /**
           * Fires when the user releases the pointer while not over a 'target' element
           *
           * @event Draggable#dropped-non-target
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
      if (options.$parent) this.setDimensions(options.$parent);
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
    this.areaBounds =
      new Bounds(
          topLeft.x, bottomRight.x,
          topLeft.y, bottomRight.y
      );
  }

  /** Sets the position of the element. */
  setPosition(x: number, y: number) {
    const m = this.options.margin ?? 0;

    let p = new Point(this.options.moveX ? x : 0, this.options.moveY ? y : 0);

    if (this.areaBounds) p = p.clamp(this.areaBounds, m);

    p = p.round(this.options.snap ?? 1);

    if (this.options.round) p = this.options.round(p);

    if (p.equals(this.position)) return;
    this.position = p;

    if (this.options.useTransform) {
      this.$el.translate(p.x, p.y);
    } else {
      if (this.options.moveX) this.$el.css('left', p.x + 'px');
      if (this.options.moveY) this.$el.css('top', p.y + 'px');
    }

    /**
     * Fires when the position of this element changes.
     *
     * @event Draggable#move
     * @type {newPos: Point} - The position of this element
     */
    this.trigger('move', {newPos: p});
  }

  resetPosition() {
    const droppedPosition = this.position;
    this.$el.css({'pointer-events': 'none'});
    animate((p: number) => {
      const currentPos = Point.interpolate(droppedPosition, this.startPos, p);
      this.setPosition(currentPos.x, currentPos.y);
    }, 800)
        .promise.then(() => this.$el.css({'pointer-events': 'initial'}));
  }

  removeTarget($target: ElementView) {
    this.targets = this.targets?.filter(t => t.$el != $target);
  }
}
