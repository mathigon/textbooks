// =============================================================================
// Anibutton Component
// (c) Mathigon
// =============================================================================


import {$N, animate, CustomElementView, ease, ElementView, register, SVGParentView} from '@mathigon/boost';
import {Burst} from '../../shared/components/burst';


@register('x-anibutton', {attributes: ['text']})
export class Anibutton extends CustomElementView {
  $text!: ElementView;
  burst!: Burst;


  ready() {
    const $svg = $N('svg', {width: 160, height: 160}, this) as SVGParentView;
    this.$text = $N('span', {html: this.attr('text')}, this);
    this.burst = new Burst($svg, 20);

    this.on('attr:text', e => this.$text.text = e.newVal);
  }

  play() {
    if (this.burst.isAnimating) return;

    animate(p => {
      const s = p < 0.3 ? 0 : ease('elastic-out', 1.43 * p - 0.43);
      this.$text.css('transform', `scale(${s})`);
    }, 1000);

    this.burst.play(1000, [80, 80], [0, 80]);
  }
}
