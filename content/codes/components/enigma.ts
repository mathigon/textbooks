// =============================================================================
// Enigma Component
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {CustomElementView, ElementView, register} from '@mathigon/boost';


@register('x-enigma', {templateId: '#enigma'})
export class Enigma extends CustomElementView {
  private $lights: Obj<ElementView> = {};

  ready() {
    for (const $l of this.$$('.lightboard .key')) {
      this.$lights[$l.text] = $l;
    }

    for (const $k of this.$$('.keyboard .key')) {
      const char = $k.text;
      $k.on('pointerdown', () => this.showLight(this.encode(char)));
    }
  }

  showLight(char: string) {
    const $light = this.$lights[char];
    $light.addClass('glowing');
    setTimeout(() => $light.removeClass('glowing'), 400);
  }

  encode(char: string) {
    // TODO Implement...
    return char;
  }
}
