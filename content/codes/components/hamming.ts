// ============================================================================
// Hamming Code Component
// (c) Mathigon
// ============================================================================

import {$N, CustomElementView, ElementView, register, SVGParentView} from '@mathigon/boost';

const WIDTH = 20; const BUFFER = 5;
const HEIGHT = 40; const RX = 6;
const YVAL = 20;

/**
 * The outline of a digit. Could be used to demonstrate groups.
 */
class _DigitOutline {

  private fullIndex: number;
  private yIndex: number;

  private g: ElementView;
  private rect: ElementView;

  /**
   * Constructor
   * @param $parent the SVGParentView
   * @param fullIndex index of the digit when fully encoded
   * @param yIndex y-position index
   */
  constructor($parent: SVGParentView, fullIndex: number, yIndex: number) {

    this.fullIndex = fullIndex;
    this.yIndex = yIndex;

    const gAttr = {
      fullIndex
    };

    const rectOutline = {
      stroke: 'gray',
      'stroke-width': 2,
      fill: 'none',
      width: WIDTH,
      height: HEIGHT,
      rx: RX
    };

    this.g = $N('g', gAttr, $parent);
    this.rect = $N('rect', rectOutline, this.g);
  }

  moveToPosition() {
    this.g.animate({transform: [
      'none',
      `translate(${this.getIndexLocation(this.fullIndex)}px, ${this.getYIndexLocation(this.yIndex)}px)`
    ]});
  }

  private getYIndexLocation(yIndex: number) {
    return YVAL + yIndex * (HEIGHT + BUFFER);
  }
  /**
     * Returns location to draw the digit at index
     * @param index
     */
  private getIndexLocation(index: number) {
    return BUFFER + index * (WIDTH + BUFFER);
  }
}

class HammingDigit {

  RED = '#CC0E66';
  GREEN = '#22AC24';

  public parity: boolean;
  public fullIndex: number;
  private dataIndex: number;
  public value: number;

  private g: ElementView;
  private rect: ElementView;
  private text: ElementView;

  private errorDiv: ElementView | undefined;
  private errors = 0;

  /**
     *
     * @param $parent SVG parent
     * @param parity is this a parity bit or a data bit?
     * @param fullIndex index in the fully encoded bit string
     * @param dataIndex index as a data bit
     * @param value digit value
     */
  constructor($parent: SVGParentView, parity: boolean, fullIndex: number, dataIndex: number, value: number) {

    this.parity = parity;
    this.fullIndex = fullIndex;
    this.dataIndex = dataIndex;
    this.value = value;

    const color = parity ? this.RED : this.GREEN;

    // for target attribute
    const targets = [1, 2, 4, 8]
        .filter(p => this.isParityMatch(p))
        .map(p => `pg${p}`)
        .join(' ');

    const gAttr = {
      target: parity ? `parity p${fullIndex} pg${fullIndex}` : 'data ' + targets,
      fullIndex,
      dataIndex,
      mask: 'url(#hole)'
    };
    const rectDefault = {
      stroke: color,
      'stroke-width': 0,
      fill: color,
      width: WIDTH,
      height: HEIGHT,
      rx: RX
    };

    const textAttr = {
      x: WIDTH / 4, y: 5 * HEIGHT / 8,
      width: WIDTH,
      height: HEIGHT,
      'font-size': 20,
      'font-weight': 'normal',
      fill: '#FFFFFF',
      text: value > -1 ? value : '_'
    };

    this.g = $N('g', gAttr, $parent);
    this.rect = $N('rect', rectDefault, this.g);
    this.text = $N('text', textAttr, this.g);

    this.g.addClass('bold');
  }

  show() {
    this.g.show();
  }

  hide() {
    this.g.hide();
  }

  snapToDataPosition() {
    this.g.animate({transform: [
      'none',
      `translate(${this.getIndexLocation(this.parity ? this.fullIndex : this.dataIndex)}px, ${YVAL}px)`
    ]}, 0);
  }

  snapToFullPosition() {
    this.g.animate({transform: [
      'none',
      `translate(${this.getIndexLocation(this.fullIndex)}px, ${YVAL}px)`
    ]}, 0);
  }

  /**
     * Make room for parity bits
     */
  makeRoom() {
    this.slideBetweenIndices(this.dataIndex, this.fullIndex);
  }

  /**
     * Strip out the parity bits
     */
  squeezeRoom() {
    this.slideBetweenIndices(this.fullIndex, this.dataIndex);
  }

  /**
     * Slide Digit between two indices
     *
     * @param begin index to start animation at
     * @param end index to end animation at
     */
  private slideBetweenIndices(begin: number, end: number) {
    this.g.animate({transform: [
      `translate(${this.getIndexLocation(begin)}px, ${YVAL}px)`,
      `translate(${this.getIndexLocation(end)}px, ${YVAL}px)`
    ]});
  }

  bold() {
    this.g.removeClass('dim');
    this.g.addClass('bold');
  }

  dim() {
    this.g.removeClass('bold');
    this.g.addClass('dim');
  }

  updateValue(value: number) {
    this.text.text = value > -1 ? value.toString() : '_';
  }

  /**
     * 1 --> 1, 3, 5, 7...
     * 2 --> 2, 3, 6, 7...
     * 4 --> 4, 5, 6, 7...
     * @param parity 1, 2, 4, 8... etc
     */
  isParityMatch(parity: number): boolean {
    const d = this.fullIndex;

    // e.g.  7,4 ==> 7 % 8 = 7; 7 >= 4;
    return d % (parity * 2) >= parity;
  }

  /**
     * Returns location to draw the digit at index
     * @param index
     */
  private getIndexLocation(index: number) {
    return BUFFER + index * (WIDTH + BUFFER);
  }

  /**
     * When decoding, we can use this to mark errors.
     */
  markError() {
    if (this.errors === 0) {
      const errorAttr = {
        x: 0, y: 0,
        width: WIDTH,
        height: HEIGHT,
        'font-size': 10,
        'font-weight': 'normal',
        fill: this.RED,
        text: 'x'
      };
      this.errorDiv = $N('text', errorAttr, this.g);
    } else {
        this.errorDiv!.text = this.errorDiv!.text + 'x';
    }
    this.errors++;
  }

  unmarkError() {
    if (this.errors === 0) return;
      this.errorDiv!.text = this.errorDiv!.text.substring(0, --this.errors);
  }

  hideErrorMarks() {
    if (this.errorDiv) this.errorDiv.hide();
  }

  reverseBit() {
    this.text.text = `${[1, 0][parseInt(this.text.text)]}`;
  }
}

@register('x-hamming')
export class HammingCode extends CustomElementView {

  private $svg!: SVGParentView;
  private digits: HammingDigit[] = [];
  private value!: string;
  private direction!: string; // 'encode' or 'decode'

  ready() {
    // initialize SVG parent view
    this.$svg = $N('svg', {viewBox: `0 0 400 ${HEIGHT * 2}`}, this) as SVGParentView;
    this.value = this.attr('value');

    /* const defs = $N('defs', {}, this.$svg);
      const mask = $N('mask', {id: 'hole'}, defs);
      const maskRect = $N('rect', {width: WIDTH/2, height: HEIGHT/2, rx: RX, fill: 'black'}, mask);
      // const maskCircle = $N('circle', {r: '50', cx: '100', cy: '100', fill: 'black'}, mask);

      mask.animate({transform:
        ['none', 'translate(400px, 0px)']
      }, 2000);
      */

    this.direction = this.attr('direction');
    if (!['encode', 'decode'].includes(this.direction)) {
      throw Error('x-hamming must have a direction of "encode" or "decode"');
    }

    switch (this.direction) {
      case 'encode':
        this.initializeEncoding();
        break;

      case 'decode':
        this.initializeDecoding();
        break;
    }

  }

  /**
     * Initialize a Hamming Code for Encoding.
     */
  private initializeEncoding() {
    // Iterate through each place until you've gone through all data digits.
    let dataDigits = 1; let index = 1;
    while (dataDigits <= this.value.length) {
      if ([0, 1, 2, 3, 4, 5].map(n => Math.pow(2, n)).includes(index)) {
        // new parity bit
        const p = new HammingDigit(this.$svg, true, index, -1, -1);
        this.digits.push(p);
        p.snapToFullPosition();
        p.hide();
      } else {
        // new data bit
        const val = parseInt(this.value.charAt(dataDigits - 1)); // 0-index string, 1-index bits
        const d = new HammingDigit(this.$svg, false, index, dataDigits, val);
        this.digits.push(d);
        d.snapToDataPosition();
        dataDigits++;
      }
      index++;
    }
  }

  private initializeDecoding() {

    let index = 1; let dataDigits = 1;
    while (index <= this.value.length) {
      const val = parseInt(this.value.charAt(index - 1)); // 0-index string, 1-index bits
      if ([0, 1, 2, 3, 4, 5].map(n => Math.pow(2, n)).includes(index)) {
        // new parity bit
        const p = new HammingDigit(this.$svg, true, index, -1, val);
        this.digits.push(p);
        p.snapToFullPosition();
      } else {
        const d = new HammingDigit(this.$svg, false, index, dataDigits, val);
        this.digits.push(d);
        d.snapToFullPosition();
        dataDigits++;
      }
      index++;
    }
  }

  noop() {
    // do nothing
  }

  /**
     * Slide data bits to make room for parity bits
     */
  makeRoomForParities() {
    // data bits move over
    this.digits.filter(hd => !hd.parity).forEach(hd => hd.makeRoom());
    // parity bits show
    setTimeout(() => this.digits.filter(hd => hd.parity).forEach(hd => hd.show()), 400);
  }

  hideParityBits() {
    this.digits.filter(hd => hd.parity).forEach(hd => hd.hide());
    this.digits.filter(hd => !hd.parity).forEach(hd => hd.squeezeRoom());
  }

  /**
     * Highlight the digits in the parity group digit
     * @param group parity digit
     */
  highlight(group: number) {
    this.digits.forEach(hd => hd.isParityMatch(group) ? hd.bold() : hd.dim());
  }

  showParity(digit: number) {
    const value = this.getParityValue(digit);
    this.digits[digit - 1].updateValue(value);
  }

  hideParity(digit: number) {
    this.digits[digit - 1].updateValue(-1);
  }

  showAll() {
    this.digits.forEach(hd => hd.bold());
  }

  /**
     * Mark only the parity bit which has an error
     * @param group parity group 1,2,4,8
     */
  markSingleBitError(group: number) {
    this.digits
        .filter(hd => hd.fullIndex === group)
        .forEach(hd => hd.markError());
  }

  unmarkSingleBitError(group: number) {
    this.digits
        .filter(hd => hd.fullIndex === group)
        .forEach(hd => hd.unmarkError());
  }

  /**
     * Mark each digit with an error.
     * @param group the parity group
     */
  markGroupError(group: number) {
    this.digits
        .filter(hd => hd.isParityMatch(group))
        .forEach(hd => hd.markError());
  }

  unmarkGroupError(group: number) {
    this.digits
        .filter(hd => hd.isParityMatch(group))
        .forEach(hd => hd.unmarkError());
  }

  /**
     * Show DigitOutlines for a group
     * @param group parity group 1,2,4,8
     * @param yIndex position in the y-direction
     */
  _showGroupFilter(group: number, yIndex: number) {
    this.digits
        .filter(hd => hd.isParityMatch(group))
        .forEach(hd => {
          const g = new _DigitOutline(this.$svg, hd.fullIndex, yIndex);
          g.moveToPosition();
        });
  }

  correctDataBit(index: number) {
    this.digits[index - 1].reverseBit();
  }

  /**
     * Sum the values of all data digits in a parity group.
     * @param group 1, 2, 4, 8
     */
  private getParityValue(group: number) {
    const parity = this.digits
        .filter(hd => !hd.parity)
        .filter(hd => hd.isParityMatch(group))
        .map(hd => hd.value)
        .reduce((acc, val) => acc + val);

    return parity % 2;
  }

  /**
     * Update model
     * @param model model to update
     */
  updateModel(model: any) {
    this.digits
        .filter(hd => hd.parity)
        .map(hd => [hd.fullIndex, this.getParityValue(hd.fullIndex)])
        .forEach(hd => {
          const bit = hd[1] % 2;
          model[`parity${hd[0]}right`] = bit === 0 ? 'even' : 'odd';
          model[`parity${hd[0]}wrong`] = bit === 0 ? 'odd' : 'even';
          model[`pb${hd[0]}r`] = bit === 0 ? 0 : 1;
          model[`pb${hd[0]}w`] = bit === 0 ? 1 : 0;
        });
  }
}
