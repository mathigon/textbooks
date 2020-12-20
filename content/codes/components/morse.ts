// ============================================================================
// Morse Code Components
// (c) Mathigon
// ============================================================================


import {$N, CustomElementView, register} from '@mathigon/boost';
import {beep} from './beep';
import {MORSE_CODE} from './utilities';


@register('x-morse')
export class Morse extends CustomElementView {
  value: number[] = [];

  ready() {
    this.setAttr('tabindex', '0');
    this.on('click', () => this.play());
    this.onAttr('char', char => this.redraw(char));
  }

  redraw(char: string) {
    this.removeChildren();
    const morse = MORSE_CODE[char.toLowerCase()] || '';
    this.value = morse.split('').map(s => s === '•' ? 0 : 1);
    for (const i of this.value) $N('span', {class: i ? 'dash' : 'dot'}, this);
  }

  play() {
    let delay = 0;
    for (const v of this.value) {
      const length = v ? 500 : 200;
      setTimeout(() => beep(length), delay);
      delay += length + 100;
    }
  }
}
