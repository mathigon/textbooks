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

const GUARDS: Obj<string> = {
  outside: '101',
  middle: '01010'
};


const OUTER_BUFFER = 20;
const TEXT_PADDING = 5;

const HEIGHT_LONG = 200;
const HEIGHT_SHORT = 180;

const BAR_WIDTH = 4;

const SVG_WIDTH = 2 * OUTER_BUFFER + BAR_WIDTH * (2 * GUARDS['outside'].length + GUARDS['middle'].length + 12 * DIGITS[0].length);
const SVG_HEIGHT = 2 * OUTER_BUFFER + HEIGHT_LONG;

let BAR_START_INDICES = [];

@register('x-barcode', {attributes: ['value']})
export class Barcode extends CustomElementView {
  private $svg!: SVGParentView;

  // BARCODE: start with a buffer on either size.
  private left = 0;

  private errorDigit = 0;

  ready() {
    this.initDrawLines();

    this.$svg = $N('svg', {viewBox: `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}, this) as SVGParentView;
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

  private initDrawLines() {
    BAR_START_INDICES.push(0);
    BAR_START_INDICES.push(GUARDS['outside'].length);
    for (let i = 1; i <= 6; i++) BAR_START_INDICES.push(DIGITS[0].length);
    BAR_START_INDICES.push(GUARDS['outside'].length);
    for (let i = 7; i <= 12; i++) BAR_START_INDICES.push(DIGITS[0].length);
  }

  private draw(value: string) {
    this.$svg.removeChildren();
    this.left = 0;

    this.drawRect(0, GUARDS['outside'], ['outside'], true);
    this.drawRect(1, DIGITS[value[0]], ['left', `d0`, `v${value[0]}`], true);
    for (let i = 1; i <= 5; ++i) this.drawRect(1 + i, DIGITS[value[i]], ['left', `d${i}`, `v${value[i]}`], false);
    this.drawRect(7, GUARDS['middle'], ['middle'], true);
    for (let i = 6; i <= 10; ++i) this.drawRect(2 + i, DIGITS[value[i]], ['right', `d${i}`, `v${value[i]}`], false, true);
    this.drawRect(13, DIGITS[this.errorDigit], ['right', `d11`], true, true);
    this.drawRect(14, GUARDS['outside'], ['outside'], true);
  }

  /**
   * Draw a section of a barcode. Corresponds to a guard or a digit.
   *
   * @param drawLineIndex the "index". It's like the place, but includes the guards.
   * @param sequence the sequence of digits, as a string of 0s and 1s
   * @param names the class names
   * @param long whether to draw long bars
   * @param invert black/white vs white/black
   */
  private drawRect(drawLineIndex: number, sequence: string, names: string[], long = false, invert = false) {
    const $group = $N('g', {class: names.join(' '), target: names.join(' ')}, this.$svg);
    const height = long ? HEIGHT_LONG : HEIGHT_SHORT;

    for (let i = 0; i < sequence.length; ++i) {
      if (sequence[i] === (!invert ? '0' : '1')) {
        $N('rect', {class: 'white', width: BAR_WIDTH, height, x: (this.left + i) * 4}, $group);
      } else {
        $N('rect', {class: 'black', width: BAR_WIDTH, height, x: (this.left + i) * 4}, $group);
      }
    }
    // BARCODE: this should be calculated ahead of time instead of iterativelys
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

    const MIN = 0;
    const MAX = 400;
    const OFFSET = 5;
    const LEFT = {
      START: 50,
      END: 190
    };
    const RIGHT = {
      START: 210,
      END: 350
    };

    let x;
    let y;
    if (place === 0) {
      x = MIN - OFFSET;
      y = 200;
    } else if (place === 11) {
      x = MAX + OFFSET;
      y = 200;
    } else if (place >= 1 && place <= 5) {
      x = LEFT.START + (LEFT.END - LEFT.START) * (place - 1) / (5 - 1);
      y = 200;
    } else if (place >= 6 && place <= 10) {
      x = RIGHT.START + (RIGHT.END - RIGHT.START) * (place - 6) / (10 - 6);
      y = 200;
    }

    $N('text', {text: value, class: `d${place}`, x, y, 'font-size': 20}, $group);
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
