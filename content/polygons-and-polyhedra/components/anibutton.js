// =============================================================================
// Anibutton Component
// (c) Mathigon
// =============================================================================



import { tabulate } from '@mathigon/core';
import { $N, CustomElement, registerElement, animate, ease } from '@mathigon/boost';


export class Anibutton extends CustomElement {

  ready() {
    this.$svg = $N('svg', {width: 160, height: 160}, this);
    this.$text = $N('span', {html: this.attr('text')}, this);

    this.on('attr:text', e => this.$text.text = e.newVal);
    this.animating = false;
  }

  play() {
    if (this.animating) return;
    this.animating = true;

    const time = 1000;
    const burst = 20;

    const $ring = $N('circle', {cx: 80, cy: 80, opacity: 0.6}, this.$svg);
    const $lines = tabulate(() => $N('line', {'stroke-width': 2}, this.$svg), burst);

    animate(p => {
      const q = ease('sine-out', p);
      $ring.setAttr('r', 50 * q);
      $ring.css('stroke-width', 20 * (1 - q));

      const r = ease('exp-out', p);
      const r1 = 15 + 65 * r;
      const r2 = 45 + 35 * r;
      for (let i=0; i<burst; ++i) {
        const c = Math.cos(Math.PI * 2 * i / burst);
        const s = Math.sin(Math.PI * 2 * i / burst);
        $lines[i].setLine({x: 80+c*r1, y: 80+s*r1}, {x: 80+c*r2, y: 80+s*r2});
      }

      const s = p < 0.3 ? 0 : ease('elastic-out', 1.43 * p - 0.43);
      this.$text.transform = `scale(${s})`;
    }, time).then(() => {
      this.$svg.removeChildren();
      this.animating = false;
    })
  }
}

registerElement('x-anibutton', Anibutton, {attributes: ['text']});
