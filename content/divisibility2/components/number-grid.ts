// =============================================================================
// Number Grid Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register} from '@mathigon/boost';
import {tabulate, wait} from '@mathigon/core';

type ColourFn = (i: number) => string|void;


@register('x-number-grid')
export class NumberGrid extends CustomElementView {
  private $cells!: ElementView[];
  private cancel?: () => void;

  ready() {
    const rows = +this.attr('rows') || 10;
    this.$cells = tabulate((i) => $N('div', {text: i + 1}, this), 10 * rows);
  }

  onClick(callback: ColourFn) {
    this.addClass('interactive');
    for (const [i, $c] of this.$cells.entries()) {
      $c.setAttr('tabindex', '0');
      $c.on('click', () => callback(i + 1));
    }
  }

  async highlight(callback: (i: number) => string, time = 0) {
    let cancel = false;
    this.cancel = () => cancel = true;

    const dt = time / 150;
    for (const [i, $c] of this.$cells.entries()) {
      if (cancel) return;
      const className = callback(i + 1);
      if (className) {
        $c.setAttr('class', className);
        if (time) await wait(time - i * dt);
      }
    }
  }

  clear() {
    if (this.cancel) this.cancel();
    for (const $c of this.$cells) $c.setAttr('class', '');
  }
}
