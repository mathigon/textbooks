// =============================================================================
// Anibutton Component
// (c) Mathigon
// =============================================================================


import {$N, animate, CustomElementView, ease, ElementView, register, SVGParentView} from '@mathigon/boost';
import {Burst} from '../../shared/components/burst';


@register('x-anibutton')
export class Anibutton extends CustomElementView {
  $text!: ElementView;
  burst!: Burst;


  ready() {
    const $svg = $N('svg', {width: 160, height: 160}, this) as SVGParentView;
    this.$text = $N('span', {}, this);
    this.burst = new Burst($svg, 20);
    this.onAttr('text', text => this.$text.text = text);
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
