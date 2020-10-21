// ============================================================================
// Hamming Code Component
// (c) Mathigon
// ============================================================================

import { register, CustomElementView, $N, SVGParentView, ElementView } from "@mathigon/boost";

const WIDTH = 20, BUFFER = 5;
const HEIGHT = 40, RX = 6;

@register('x-hamming', {attributes: ['value']})
export class HammingCode extends CustomElementView {

    private $svg!: SVGParentView;
    private digits: ElementView[] = [];

    ready() {
        this.$svg = $N('svg', {viewBox: '0 0 400 200'}, this) as SVGParentView;
        this.draw(this.attr('value'));
    }

    /**
     * Slide over data bits to make room for parity bits
     * FIXME: if you keep doing this, it adds more and more. It should just start over, not move existing parity bits.
     */
    makeRoomForParities() {
        for (let i=0; i < this.$svg.children.length; i++) {
            console.log(i);
            const xTranslate = this.getIndexLocation(this.digitTranslate(i)) - 5; // sub
            console.log(xTranslate);
            this.$svg.children[i].animate({transform: ['none', `translate(${xTranslate}px, 0px)`]},
            400, 0);
        }

        // draws parity bits in each 2^n place
        [0, 1, 2, 3].map(n => Math.pow(2, n)).forEach(p => this.drawDigit(p-1, -1));
    }

    /**
     * Returns how many bits over a data bit should be moved to make room for the parity bits.
     * @param startIndex 
     */
    private digitTranslate(startIndex: number) {

        if (startIndex == 0) {
            return 2;
        } else if (startIndex <= 3) {
            return 3;
        } else {
            // we're maxing out at...?
            return 4;
        }
    }

    /**
     * Returns location to draw the digit at index
     * @param index 
     */
    private getIndexLocation(index: number) {
        return BUFFER + index*(WIDTH+BUFFER);
    }
    
    /**
     * 
     * @param value the full digit value
     */
    private draw(value: string) {
        console.log('drawing hamming code', value);

        this.$svg.removeChildren();

        for (let i=0; i < value.length; i++) {
            // this.digits.push();
            this.drawDigit(i, parseInt(value.charAt(i)))
        }
    }

    
    /**
     * 
     * NEXT: draw numerals
     * NEXT: group them together, could possibly put in HTML so it's easier to style.
     * @param index 0-indexed digit place
     * @param value 1 or 0, or -1 for a placeholder
     */
    private drawDigit(index: number, value: number) {
        // <rect id="Rectangle-Copy" stroke="#22AC24" stroke-width="3" fill="#FAFFFB" fill-rule="nonzero" x="1.5" y="1.5" width="59" height="87" rx="25"></rect>
        

        const x = this.getIndexLocation(index);
        const y = 200;

        const color = value > -1 ? "#22AC24" : "#CC0E66";
        const rectDefault = {
            stroke: color,
            'stroke-width': 3,
            fill: "#FAFFFB",
            width: WIDTH,
            height: HEIGHT,
            rx: RX,
            x, y: y-HEIGHT
        }

        $N('rect', rectDefault, this.$svg);
        // const digit = $N('text', {text: value, x, y, 'font-size': 40}, this.$svg);
        
    }
}