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

const BAR_START_INDICES: number[] = [];

@register('x-barcode')
export class Barcode extends CustomElementView {
  private $svg!: SVGParentView;

  private errorDigit = 0;

  private targets!: boolean;

  ready() {
    this.initDrawLines();

    this.targets = (this.attr('targets') === ''); // off

    this.$svg = $N('svg', {viewBox: `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}, this) as SVGParentView;
    const value = this.attr('value');
    this.computeParityDigit(value);
    this.draw(value);
    this.writeNumbers(value);

    this.onAttr('value', d => {
      this.computeParityDigit(d);
      this.draw(d);
      this.writeNumbers(d);
    });
  }

  // FIXME: when new barcode generated, hover/target stops working
  generateNewCode() {
    let newValue = '';
    for (let i = 0; i < 11; i++) {
      const digit = Math.floor(Math.random() * 10);
      newValue = newValue.concat('' + digit);
    }

    this.computeParityDigit(newValue);
    this.draw(newValue);
    this.writeNumbers(newValue);
  }

  private initDrawLines() {
    const widths = [];
    widths.push(0);
    widths.push(GUARDS['outside'].length);
    for (let i = 1; i <= 6; i++) widths.push(DIGITS[0].length);
    widths.push(GUARDS['middle'].length);
    for (let i = 7; i <= 12; i++) widths.push(DIGITS[0].length);

    let widthSum = 0;
    widths.forEach(w => {
      widthSum += w;
      BAR_START_INDICES.push(widthSum);
    });
  }

  private draw(value: string) {
    this.$svg.removeChildren();

    this.drawRect(0, GUARDS['outside'], ['outside'], true);

    // Place is one-indexed
    this.drawRect(1, DIGITS[value[0]], [
      'left',
      `d0`,
      `l${value[0]}`,
      'odds'
    ], true);

    for (let i = 1; i <= 5; ++i) {
      this.drawRect(1 + i, DIGITS[value[i]], [
        'left',
        `d${i}`,
        `l${value[i]}`,
        (i + 1) % 2 === 0 ? 'evens' : 'odds'
      ], false);
    }

    this.drawRect(7, GUARDS['middle'], ['middle'], true);

    for (let i = 6; i <= 10; ++i) {
      this.drawRect(2 + i, DIGITS[value[i]], [
        'right',
        `d${i}`,
        `r${value[i]}`,
        (i + 1) % 2 === 0 ? 'evens' : 'odds'
      ], false, true);
    }

    this.drawRect(13, DIGITS[this.errorDigit], [
      'right', `d11`, `r${this.errorDigit}`
    ], true, true);

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
    const $group = $N('g', {
      class: names.join(' '),
      target: this.targets ? names.join(' ') : undefined
    }, this.$svg);

    const height = long ? HEIGHT_LONG : HEIGHT_SHORT;

    let color;
    for (let i = 0; i < sequence.length; ++i) {
      if (sequence[i] === (!invert ? '0' : '1')) {
        color = 'white';
      } else {
        color = 'black';
      }
      $N('rect', {class: color, width: BAR_WIDTH, height,
        x: OUTER_BUFFER + (BAR_START_INDICES[drawLineIndex] + i) * BAR_WIDTH, y: OUTER_BUFFER}, $group);
    }
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
    const LEFT = {
      START: 70,
      END: 170
    };
    const RIGHT = {
      START: 230,
      END: 330
    };
    const y = 200 + OUTER_BUFFER;

    let x;
    if (place === 0) {
      x = MIN + TEXT_PADDING;
    } else if (place === 11) {
      x = MAX + TEXT_PADDING;
    } else if (place >= 1 && place <= 5) {
      x = LEFT.START + (LEFT.END - LEFT.START) * (place - 1) / (5 - 1);
    } else if (place >= 6 && place <= 10) {
      x = RIGHT.START + (RIGHT.END - RIGHT.START) * (place - 6) / (10 - 6);
    }

    const side = place < 6 ? 'l' : 'r';

    const evenOdd = place === 11 ? '' : (place + 1) % 2 === 0 ? 'evens' : 'odds';
    $N('text', {
      x, y,
      'font-size': 24,
      text: value,
      class: `d${place}` + (this.targets ? ' step-target' : ''),
      'data-to': this.targets ? `d${place}` : undefined,
      target: this.targets ? `d${place} ${side}${value} ${evenOdd}` : undefined
    }, $group);
  }

  // TODO: could move this to a separate utility file
  private computeParityDigit(value: string) {

    // if 12th bit is included we don't need to compute
    if (value.length === 12) {
      this.errorDigit = parseInt(value.charAt(11));
      return;
    }

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
    if (this.errorDigit === 10) this.errorDigit = 0;
  }
}
