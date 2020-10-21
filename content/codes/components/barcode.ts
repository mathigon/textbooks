// ============================================================================
// Barcode Components
// (c) Mathigon
// ============================================================================


import {Obj} from '@mathigon/core';
import {$N, CustomElementView, register, SVGParentView} from '@mathigon/boost';


const DIGITS: Obj<string> = {
  0: '0001101', 1: '0011001', 2: '0010011', 3: '0111101', 4: '0100011',
  5: '0110001', 6: '0101111', 7: '0111011', 8: '0110111', 9: '0001011'
};


@register('x-barcode', {attributes: ['value']})
export class Barcode extends CustomElementView {
  private $svg!: SVGParentView;
  private left = 0;

  ready() {
    this.$svg = $N('svg', {viewBox: '0 0 400 200'}, this) as SVGParentView;
    this.draw(this.attr('value'));
    this.on('attr:value', (e) => this.draw(e.newAttr));
  }

  private draw(value: string) {
    this.$svg.removeChildren();
    this.left = 0;

    this.drawRect('101', 'start', true);
    this.drawRect(DIGITS[value[0]], 'left', true);
    for (let i = 1; i <= 5; ++i) this.drawRect(DIGITS[value[i]], 'left', false);
    this.drawRect('01010', 'middle', true);
    for (let i = 6; i <= 10; ++i) this.drawRect(DIGITS[value[i]], 'right', false, true);
    this.drawRect(DIGITS[value[11]], 'right', true, true);
    this.drawRect('101', 'end', true);
  }

  private drawRect(sequence: string, name: string, long = false, invert = false) {
    const $group = $N('g', {class: 'bar-' + name}, this.$svg);
    const height = long ? 200 : 180;

    for (let i = 0; i < sequence.length; ++i) {
      if (sequence[i] === (invert ? '0' : '1')) continue;  // Skip white bar
      $N('rect', {width: 4, height, x: (this.left + i) * 4}, $group);
    }
    this.left += sequence.length;
  }
}
