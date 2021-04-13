// =============================================================================
// Dragging Component
// (c) Mathigon
// =============================================================================


import {animate, Browser, CustomElementView, ElementView, register} from '@mathigon/boost';
import {repeat} from '@mathigon/core';
import {Draggable} from '@mathigon/studio';


class FlowGrid {
  private width = 0;

  constructor(private readonly $parent: ElementView, private margin: number,
              private minHeight = 0) {
    Browser.onResize(() => {
      if (this.width !== $parent.width) this.reflow();
    });
  }

  reflow() {
    const $children = this.$parent.children;
    this.width = this.$parent.width;

    let yOffset = 0;
    let $rowEls: ElementView[] = [];
    let rowWidths: number[] = [];
    let rowHeight = 0;
    let rowWidth = 0;

    for (const $c of $children) {
      const box = $c.bounds;

      // Add this element to current row
      if (rowWidth + box.width + this.margin <= this.width) {
        $rowEls.push($c);
        rowWidths.push(box.width);
        rowHeight = Math.max(rowHeight, box.height);
        rowWidth += box.width + this.margin;
        continue;
      }

      // Layout one row of elements
      this.positionRow($rowEls, rowWidths, rowWidth, yOffset);
      yOffset += this.margin + rowHeight;

      // Start a new Row
      $rowEls = [$c];
      rowWidths = [box.width];
      rowHeight = box.height;
      rowWidth = box.width;
    }

    // Layout last row
    if ($rowEls.length) {
      this.positionRow($rowEls, rowWidths, rowWidth, yOffset);
      yOffset += this.margin + rowHeight;
    }

    const height = Math.max(this.minHeight, yOffset);
    this.$parent.animate({height: `${height}px`}, 200);
  }

  private positionRow($rowEls: ElementView[], rowWidths: number[],
      rowWidth: number, yOffset: number) {
    let xOffset = (this.width - rowWidth) / 2;
    for (const [i, $e] of $rowEls.entries()) {
      $e.css('left', `${xOffset}px`);
      $e.css('top', `${yOffset}px`);
      xOffset += rowWidths[i] + this.margin;
    }
  }
}

// -----------------------------------------------------------------------------

@register('x-buckets')
export class Buckets extends CustomElementView {
  // draggable answer elements
  private cards!: Draggable[];
  // current locations (bucket indices) of cards
  private position!: number[];
  // correct destinations (bucket indices) for answer elements
  private solutions!: number[];

  ready() {
    // Initial container element ('pool') for answer elements
    const $input = this.$('.inputs')!;
    // Destination elements for answers
    const $buckets = this.$$('.bucket');

    // Layout handler for answers pool
    const inputFlow = new FlowGrid($input, 10);
    // Layout handlers for destination elements
    const bucketFlows = $buckets.map($b => new FlowGrid($b, 10, 150));

    const $cards = this.$$('.input') as ElementView[];

    this.solutions = $cards.map($el => +$el.attr('bucket'));
    this.position = repeat(-1, $cards.length);

    this.cards = $cards.map(($card, cardIndex) => {
      $card.removeAttr('bucket');
      const card = new Draggable($card, {$targets: $buckets, useTransform: true, resetOnMiss: true, withinBounds: false});

      card.on('start', () => $card.addClass('active'));
      card.on('enter-target', ({$target}: {$target: ElementView}) => $target.addClass('active'));
      card.on('exit-target', ({$target}: {$target: ElementView}) => $target.removeClass('active'));
      card.on('end', ({$target}: {$target?: ElementView}) => {
        $card.removeClass('active');

        if ($target) {
          const relativeToBucket = card.$el.boundsRect.p.subtract($target.boundsRect.p);
          $target.removeClass('active');
          $target.append(card.$el);
          card.setPosition(relativeToBucket.x, relativeToBucket.y);

          animate((p) => {
            const invP = 1 - p;
            card.setPosition(relativeToBucket.x * invP, relativeToBucket.y * invP);
          }, 200);

          const targetIndex = $buckets.indexOf($target);

          if (this.position[cardIndex] < 0) inputFlow.reflow();
          else bucketFlows[this.position[cardIndex]].reflow();
          bucketFlows[targetIndex].reflow();

          this.position[cardIndex] = targetIndex;
          this.check();
        }
      });

      return card;
    });

    // TODO Implement this!
  }

  restore() {
    // TODO Implement
  }

  check() {
    if (this.position.some(p => p < 0)) return;
    let errors = 0;

    for (const [i, p] of this.position.entries()) {
      const correct = (p === this.solutions[i]);
      this.cards[i].$el.setClass('error', !correct);
      if (!correct) errors += 1;
    }

    if (errors) {
      this.trigger('error');
    } else {
      this.trigger('correct');
    }
  }
}
