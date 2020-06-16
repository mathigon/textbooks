// =============================================================================
// Dragging Component
// (c) Mathigon
// =============================================================================


import {Browser, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/fermat';


class FlowGrid {
  private width = 0;

  constructor(private readonly $parent: ElementView, private margin: number) {
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

    this.$parent.animate({height: `${yOffset}px`}, 400)
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

@register('x-dragging')
export class Dragging extends CustomElementView {

  ready() {
    const flow = new FlowGrid(this.$('.inputs')!, 10);

    const $inputs = this.$$('.input');
    const $buckets = this.$$('.bucket');

    for (const $i of $inputs) {
      slide($i, {
        start: () => $i.css('z-index', 1),
        move: (p: Point, start: Point) => {
          $i.setTransform(p.subtract(start));
          // TODO Highlight active bucket
        },
        end: async () => {
          await $i.animate({transform: 'none'}, 400);
          $i.css('z-index', 0);
          // TODO Check bucket or animate back
        }
      });
    }

    // TODO Implement this!
  }

  restore() {
    // TODO
  }
}
