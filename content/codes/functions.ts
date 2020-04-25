// =============================================================================
// Codes and Ciphers
// (c) Mathigon
// =============================================================================


import {$N, ElementView, slide} from '@mathigon/boost';
import {Step} from '../shared/types';

import {beep, Beep} from './components/beep'
import {CodeBox} from './components/code-box'
import {MORSE_CODE} from './components/utilities'

import './components/code-box'
import './components/enigma'
import './components/morse'


// -----------------------------------------------------------------------------
// Introduction

export function telegraph($step: Step) {
  const $telegraph = $step.$('.telegraph')!;
  let sound: Beep;

  slide($telegraph, {
    start: () => {
      $telegraph.addClass('pressed');
      sound = beep();
    },
    end: () => {
      $telegraph.removeClass('pressed');
      if (sound) sound.stop();
    },
  });
}

export function morseEncoding($step: Step) {
  const $codeBox = $step.$('x-code-box') as CodeBox;

  $codeBox.encode((char: string, $el: ElementView) => {
    for (const x of MORSE_CODE[char.toLowerCase()].split('')) {
      $N('span', {class: x === '•' ? 'dash' : 'dot'}, $el);
    }
  });
}
