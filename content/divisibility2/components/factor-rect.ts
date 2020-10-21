// =============================================================================
// Factor Rectangle Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {tabulate} from '@mathigon/core';
import {clamp} from '@mathigon/fermat';

const SIZE = 25;
const HANDLE = `M0,0h${SIZE}a${SIZE},${SIZE} 0 0 1 ${SIZE},${SIZE}a${SIZE},${SIZE} 0 0 1 0,${SIZE}h0z`;


@register('x-factor-rect')
export class FactorRect extends CustomElementView {
  private $rects!: ElementView[];
  private $handle!: ElementView;
  private size!: number;
  private columns!: number;

  ready() {
    const [x, y] = this.attr('size').split(':').map(x => +x);
    const fill = this.attr('color');
    const attributes = {width: SIZE, height: SIZE, fill};

    const $svg = $N('svg', {}, this);

    this.size = x * y;
    this.$rects = tabulate(() => $N('rect', attributes, $svg), this.size);

    $svg.setAttr('width', (this.size + 1) * SIZE);
    $svg.setAttr('height', (y + 1) * SIZE);

    this.$handle = $N('path', {x: HANDLE}, $svg);
    slide(this.$handle, {
      move: (posn) => this.setWidth(Math.round(posn.x / SIZE) - 0.5)
    });

    this.setWidth(x);
  }

  setWidth(columns: number) {
    columns = clamp(columns, 1, this.size);
    if (columns === this.columns) return;
    this.columns = columns;

    for (const [i, $r] of this.$rects.entries()) {
      $r.setAttr('x', SIZE / 2 + (i % columns) * SIZE);
      $r.setAttr('y', SIZE / 2 + Math.floor(i / columns) * SIZE);
    }

    this.$handle.setTransform({x: (columns + 1) * SIZE, y: SIZE});
  }
}
