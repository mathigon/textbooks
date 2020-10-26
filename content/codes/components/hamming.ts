// ============================================================================
// Hamming Code Component
// (c) Mathigon
// ============================================================================

import { register, CustomElementView, $N, SVGParentView, ElementView } from "@mathigon/boost";

const WIDTH = 20, BUFFER = 5;
const HEIGHT = 40, RX = 6;

class HammingDigit {

    RED = "#CC0E66";
    GREEN = "#22AC24";

    public parity: boolean;
    private places: number[];
    public value: number;

    private g: ElementView;
    private rect: ElementView;
    private text: ElementView;

    /**
     *
     * @param $parent SVG parent
     * @param parity is this a parity bit or a data bit?
     * @param places two indices: first is data bit index, second is with parity bits included
     * @param value digit value
     */
    constructor($parent: SVGParentView, parity: boolean, places: number[], value: number) {

        this.parity = parity;
        this.places = places;
        this.value = value;

        const color = parity ? this.RED : this.GREEN;

        const x = this.getIndexLocation(places[0]);
        const y = 200;

        const gAttr = {
            x, y: y-HEIGHT
        }
        const rectDefault = {
            stroke: color,
            'stroke-width': 3,
            fill: color,
            width: WIDTH,
            height: HEIGHT,
            rx: RX,
        }

        const textAttr = {
            x: WIDTH/4, y: 5*HEIGHT/8,
            width: WIDTH,
            height: HEIGHT,
            'font-size': 20,
            'font-weight': 'normal',
            fill: '#FFFFFF',
            text: value > -1 ? value: '_'
        }

        this.g = $N('g', gAttr, $parent);
        this.g.animate({transform: [
            'none',
            `translate(${this.getIndexLocation(this.places[0])}px, 0px)`,
        ]}, 0);

        this.rect = $N('rect', rectDefault, this.g);
        this.text = $N('text', textAttr, this.g);

        // only display data digits at first
        if (parity) this.g.hide();
    }

    show() {
        this.g.show()
    }

    hide() {
        this.g.hide()
    }

    makeRoom() {
        this.g.animate({transform: [
            `translate(${this.getIndexLocation(this.places[0])}px, 0px)`,
            `translate(${this.getIndexLocation(this.places[1])}px, 0px)`]});
    }

    // back to data digit
    squeezeRoom() {
        this.g.animate({transform: [
            `translate(${this.getIndexLocation(this.places[1])}px, 0px)`,
            `translate(${this.getIndexLocation(this.places[0])}px, 0px)`]});
    }

    bold() {
        this.g.removeClass('dim')
        this.g.addClass('bold')
        // HAMMING: would be nice to bold/dim with a keyframe
    }

    dim() {
        this.g.removeClass('bold')
        this.g.addClass('dim')
    }

    updateValue(value: number) {
        this.text.text = value > -1 ? value.toString() : '_'
    }

    /**
     * 1 --> 1, 3, 5, 7...
     * 2 --> 2, 3, 6, 7...
     * 4 --> 4, 5, 6, 7...
     * @param parity 1, 2, 4, 8... etc
     */
    isParityMatch(parity: number): boolean {
        const d = this.places[1];

        // e.g.  7,4 ==> 7 % 8 = 7; 7 >= 4;
        return d % (parity * 2) >= parity;
    }

    /**
     * Returns location to draw the digit at index
     * @param index 
     */
    private getIndexLocation(index: number) {
        return BUFFER + index*(WIDTH+BUFFER);
    }
}

@register('x-hamming', {attributes: ['value']})
export class HammingCode extends CustomElementView {

    private $svg!: SVGParentView;
    private digits: HammingDigit[] = [];

    ready() {
        // initialize SVG parent view
        this.$svg = $N('svg', {viewBox: '0 0 400 200'}, this) as SVGParentView;
        this.$svg.removeChildren();

        const value = this.attr('value');

        // Iterate through each place until you've gone through all data digits.
        let dataDigits = 0, index = 1;
        while (dataDigits < value.length) {
            if ([0, 1, 2, 3, 4, 5].map(n => Math.pow(2, n)).includes(index)) {
                // new parity bit
                this.digits.push(new HammingDigit(this.$svg, true, [index, index], -1))
            } else {
                // new data bit
                const val = parseInt(value.charAt(dataDigits));
                this.digits.push(new HammingDigit(this.$svg, false, [dataDigits, index], val))
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
        this.digits.filter(hd => hd.parity).forEach(hd => hd.show())
    }

    hideParityBits() {
        this.digits.filter(hd => hd.parity).forEach(hd => hd.hide())
        this.digits.filter(hd => !hd.parity).forEach(hd => hd.squeezeRoom());
    }

    /**
     * Highlight the digits in the parity group digit
     * @param group parity digit
     */
    highlight(group: number) {
        this.digits.forEach(hd => hd.isParityMatch(group) ? hd.bold() : hd.dim())
    }

    showParity(digit: number) {
        const value = this.getParityValue(digit);
        this.digits[digit - 1].updateValue(value);
    }

    hideParity(digit: number) {
        this.digits[digit - 1].updateValue(-1);
    }

    showAll() {
        this.digits.forEach(hd => hd.bold())
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
}
