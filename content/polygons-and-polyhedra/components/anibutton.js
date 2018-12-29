// =============================================================================
// Anibutton Component
// (c) Mathigon
// =============================================================================



import { $N, CustomElement, registerElement, animate, ease } from '@mathigon/boost';
import { Burst } from '../../shared/components/burst';


export class Anibutton extends CustomElement {

  ready() {
    const $svg = $N('svg', {width: 160, height: 160}, this);
    this.$text = $N('span', {html: this.attr('text')}, this);
    this.burst = new Burst($svg, 20);

    this.on('attr:text', e => this.$text.text = e.newVal);
    this.animating = false;
  }

  play() {
    if (this.burst.animating) return;

    animate(p => {
      const s = p < 0.3 ? 0 : ease('elastic-out', 1.43 * p - 0.43);
      this.$text.transform = `scale(${s})`;
    }, 1000);

    this.burst.play(1000, [80, 80], [0, 80]);
  }
}

registerElement('x-anibutton', Anibutton, {attributes: ['text']});
