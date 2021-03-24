// =============================================================================
// Factor Rectangle Component
// (c) Mathigon
// =============================================================================


import {$html, $N, CustomElementView, ElementView, register, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {tabulate} from '@mathigon/core';
import {Point, Rectangle} from '@mathigon/euclid';
import {clamp} from '@mathigon/fermat';

const SIZE = 25;
const HANDLE = `M${SIZE / 2},0H0V${SIZE}H${SIZE / 2}A${SIZE / 2},${SIZE / 2},0,0,0,${SIZE / 2},0Z`;


@register('x-factor-rect')
export class FactorRect extends CustomElementView {
  private $svg!: SVGParentView;
  private $rects!: ElementView[];
  private $correct!: SVGView;
  private $labels!: SVGView[];
  private $handle?: ElementView;

  private isStatic!: boolean;
  private size!: number;
  private columns!: number;

  ready() {
    const [x, y] = this.attr('size').split(':').map(x => +x);
    this.size = x * y;
    this.$svg = $N('svg', {}, this) as SVGParentView;

    const attributes = {width: SIZE, height: SIZE};
    this.$correct = $N('rect', {class: 'correct'}, this.$svg) as SVGView;
    this.$rects = tabulate(() => $N('rect', attributes, this.$svg), this.size);
    this.$labels = tabulate((i) => $N('text', {'text-anchor': ['middle', 'end'][i]}, this.$svg) as SVGView, 2);

    this.isStatic = this.hasAttr('static');
    this.$svg.setAttr('width', (this.isStatic ? x + 1.5 : this.size + 2.5) * SIZE);

    if (!this.isStatic) {
      this.$handle = $N('path', {d: HANDLE, class: 'handle'}, this.$svg);
      slide(this.$handle, {
        start: () => $html.addClass('grabbing'),
        move: (posn) => this.setWidth(Math.round(posn.x / SIZE - 1)),
        end: () => $html.removeClass('grabbing'), accessible: true
      });
    }

    this.setWidth(x);
  }

  setWidth(columns: number) {
    columns = clamp(columns, 1, this.size);
    if (columns === this.columns) return;
    this.columns = columns;

    const rows = Math.ceil(this.size / columns);
    const max = Math.floor(this.size / columns) * columns;

    for (const [i, $r] of this.$rects.entries()) {
      $r.setTransform({x: (i % columns + 1) * SIZE, y: Math.floor(1 + i / columns) * SIZE});
      $r.setClass('wrong', i >= max);
    }

    this.$labels[0].text = '' + columns;
    this.$labels[0].setCenter({x: (1 + columns / 2) * SIZE, y: 20});

    this.$labels[1].text = '' + rows;
    this.$labels[1].setCenter({x: 20, y: (1 + rows / 2) * SIZE + 5});

    this.$correct.toggle(max === this.size);
    this.$correct.setRect(new Rectangle(new Point(SIZE, SIZE), columns * SIZE, rows * SIZE));

    const width = this.isStatic ? columns + 1.5 : this.size + 2.5;
    this.$svg.setAttr('viewBox', `0 0 ${width * SIZE} ${(rows + 1.5) * SIZE}`);
    this.$svg.setAttr('height', (rows + 1.5) * SIZE);

    this.$handle?.setTransform({x: (columns + 1) * SIZE, y: SIZE});
  }
}
