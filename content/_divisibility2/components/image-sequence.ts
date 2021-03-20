// =============================================================================
// Image Sequence Component
// (c) Mathigon
// =============================================================================


import {CustomElementView, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/euclid';
import {mod} from '@mathigon/fermat';


@register('x-image-sequence')
export class ImageSequence extends CustomElementView {
  private rows!: number;
  private cols!: number;
  private size!: number[];
  private i = 0;

  ready() {
    this.size = this.attr('size').split(',').map(x => +x);
    [this.cols, this.rows] = this.attr('tiles').split(',').map(x => +x);
    const count = this.rows * this.cols;

    this.css({
      'background-image': this.attr('image'),
      'background-size': `${this.cols * this.size[0]}px ${this.rows * this.size[1]}px`,
      width: `${this.size[0]}px`,
      height: `${this.size[1]}px`
    });

    const dx = 1 / this.size[0] * count / 10;
    let start = 0;

    slide(this, {
      start: () => {
        start = this.i;
      },
      move: (p: Point, q: Point) => {
        this.setImage(mod(Math.round(start + (q.x - p.x) * dx), count));
      },
      end: () => {
        // run animation
      }
    });
  }

  setImage(i: number) {
    if (this.i === i) return;
    this.i = i;
    const x = (i % this.cols) * this.size[0];
    const y = Math.floor(i / this.cols) * this.size[1];
    this.css('background-position', `-${x}px -${y}px`);
  }
}
