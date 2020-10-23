// =============================================================================
// Factor Rectangle Component
// (c) Mathigon
// =============================================================================


import {$html, $N, CustomElementView, ElementView, register, slide, SVGParentView} from '@mathigon/boost';
import {tabulate} from '@mathigon/core';
import {clamp} from '@mathigon/fermat';

const SIZE = 25;
const HANDLE = `M${SIZE / 2},0H0V${SIZE}H${SIZE / 2}A${SIZE / 2},${SIZE / 2},0,0,0,${SIZE / 2},0Z`;


@register('x-factor-rect')
export class FactorRect extends CustomElementView {
  private $svg!: SVGParentView;
  private $rects!: ElementView[];
  private $handle!: ElementView;
  private size!: number;
  private columns!: number;

  ready() {
    const [x, y] = this.attr('size').split(':').map(x => +x);
    this.size = x * y;
    this.$svg = $N('svg', {}, this) as SVGParentView;

    const attributes = {width: SIZE, height: SIZE};
    this.$rects = tabulate(() => $N('rect', attributes, this.$svg), this.size);

    this.$svg.setAttr('width', (this.size + 2) * SIZE);
    this.$svg.setAttr('height', (y + 1) * SIZE);

    this.$handle = $N('path', {d: HANDLE, class: 'handle'}, this.$svg);
    slide(this.$handle, {
      start: () => $html.addClass('grabbing'),
      move: (posn) => this.setWidth(Math.round(posn.x / SIZE - 0.5)),
      end: () => $html.removeClass('grabbing')
    });

    this.setWidth(x);
  }

  setWidth(columns: number) {
    columns = clamp(columns, 1, this.size);
    if (columns === this.columns) return;
    this.columns = columns;

    const rows = Math.ceil(this.size / columns);
    const max = Math.floor(this.size / columns) * columns;

    for (const [i, $r] of this.$rects.entries()) {
      $r.setAttr('x', SIZE / 2 + (i % columns) * SIZE);
      $r.setAttr('y', SIZE / 2 + Math.floor(i / columns) * SIZE);
      $r.setClass('wrong', i >= max);
    }

    this.$svg.setAttr('height', (rows + 1) * SIZE);
    this.$handle.setTransform({x: (columns + 0.5) * SIZE, y: SIZE / 2});
  }
}
