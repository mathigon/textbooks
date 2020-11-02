// ============================================================================
// Barcode Components
// (c) Mathigon
// ============================================================================


import {Obj} from '@mathigon/core';
import {$N, CustomElementView, ElementView, register, SVGParentView} from '@mathigon/boost';


const DIGITS: Obj<string> = {
  0: '0001101', 1: '0011001', 2: '0010011', 3: '0111101', 4: '0100011',
  5: '0110001', 6: '0101111', 7: '0111011', 8: '0110111', 9: '0001011'
};


@register('x-barcode', {attributes: ['value']})
export class Barcode extends CustomElementView {
  private $svg!: SVGParentView;
  private left = 0;

  private errorDigit = 0;

  ready() {
    console.log('barcode.ready');
    this.$svg = $N('svg', {viewBox: '0 0 400 200'}, this) as SVGParentView;
    const value = this.attr('value');
    this.computeParityDigit(value);
    this.draw(value);
    this.writeNumbers(value);

    this.on('attr:value', (e) => {
      this.computeParityDigit(e.newAttr);
      this.draw(e.newAttr);
      this.writeNumbers(e.newAttr);
    }); // I suspect this looks for changes in the "value" attribute.
  }

  private draw(value: string) {
    this.$svg.removeChildren();
    this.left = 0;

    this.drawRect('101', ['outside'], true);
    this.drawRect(DIGITS[value[0]], ['left', `d0`, `v${value[0]}`], true);
    for (let i = 1; i <= 5; ++i) this.drawRect(DIGITS[value[i]], ['left', `d${i}`, `v${value[i]}`], false);
    this.drawRect('01010', ['middle'], true);
    for (let i = 6; i <= 10; ++i) this.drawRect(DIGITS[value[i]], ['right', `d${i}`, `v${value[i]}`], false, true);
    // this is the error check digit
    this.drawRect(DIGITS[this.errorDigit], ['right', `d11`], true, true);
    this.drawRect('101', ['outside'], true);
  }

  /**
   * Draw a section of a barcode. Corresponds to a guard or a digit.
   *
   * @param sequence the sequence of digits, as a string of 0s and 1s
   * @param names the class names
   * @param long whether to draw long bars
   * @param invert black/white vs white/black
   */
  private drawRect(sequence: string, names: string[], long = false, invert = false) {
    const $group = $N('g', {class: names.join(' '), target: names.join(' ')}, this.$svg);
    const height = long ? 200 : 180;

    for (let i = 0; i < sequence.length; ++i) {
      if (sequence[i] === (!invert ? '0' : '1')) {
        $N('rect', {class: 'white', width: 4, height, x: (this.left + i) * 4}, $group);
      } else {
        $N('rect', {class: 'black', width: 4, height, x: (this.left + i) * 4}, $group);
      }
    }
    this.left += sequence.length;
  }

  private writeNumbers(value: string) {
    const $group = $N('g', {class: 'text'}, this.$svg);

    for (let i = 0; i < value.length; i++) {
      this.writeNumber(i, value[i], $group);
    }
    this.writeNumber(11, '' + this.errorDigit, $group);

  }

  private writeNumber(place: number, value: string, $group: ElementView) {
    // 0 and 11 go on outsides... 0: MIN - OFFSET, 11: MAX + OFFSET
    // 1,2,3,4,5 fit into left side.... between [D1.END + OFFSET, CENTER.BEGIN - OFFSET]
    // 6,7,8,9,10 fit into right side... between [CENTER.END + OFFSET, D10.BEGIN - OFFSET]
    $N('text', {text: value}, $group);
  }

  // TODO: could move this to a separate utility file
  private computeParityDigit(value: string) {
    // TODO do this here.
    let odds = 0; let evens = 0;
    // 1-indexed. Only check first 11.
    for (let i = 1; i < 12; i++) {
      const digitVal = parseInt(value.charAt(i - 1));
      if (i % 2 == 0) evens += digitVal;
      else odds += digitVal;
    }
    const sum = 3 * odds + evens;

    this.errorDigit = 10 - sum % 10;
  }
}
