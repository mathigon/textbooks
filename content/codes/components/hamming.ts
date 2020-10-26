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

    private element: ElementView;

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

        const color = parity ? this.RED : this.GREEN;

        const x = this.getIndexLocation(places[0]);
        const y = 200;

        const rectDefault = {
            stroke: color,
            'stroke-width': 3,
            fill: "#FAFFFB",
            width: WIDTH,
            height: HEIGHT,
            rx: RX,
            x, y: y-HEIGHT
        }

        // only display data digits at first
        this.element = $N('rect', rectDefault, $parent);
        if (parity) this.element.hide();
    }

    show() {
        this.element.show()
    }

    hide() {
        this.element.hide()
    }

    makeRoom() {
        const xTranslate = this.getIndexLocation(this.places[1] - this.places[0]) - BUFFER; // sub
        this.element.animate({transform: ['none', `translate(${xTranslate}px, 0px)`]});
    }

    // back to data digit
    squeezeRoom() {
        // go from place[1] to place[0]
        const xTranslate = this.getIndexLocation(this.places[1] - this.places[0]) - BUFFER;
        this.element.animate({transform: [`translate(${xTranslate}px, 0px)`, 'none']});
    }

    bold() {
        this.element.removeClass('dim')
        this.element.addClass('bold')
    }

    dim() {
        this.element.removeClass('bold')
        this.element.addClass('dim')
    }

    /**
     * 1 --> 1, 3, 5, 7...
     * 2 --> 2, 3, 6, 7...
     * 4 --> 4, 5, 6, 7...
     * @param parity 1, 2, 4, 8... etc
     */
    getParityMatch(parity: number): boolean {
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
        this.digits.forEach(hd => hd.getParityMatch(group) ? hd.bold() : hd.dim())
    }

    parity(digit: number, value: number) {
        console.log(`parity(${digit}, ${value})`);
    }

    showAll() {
        this.digits.forEach(hd => hd.bold())
    }
}
