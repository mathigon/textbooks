// =============================================================================
// Codes and Ciphers
// (c) Mathigon
// =============================================================================


import {$N, ElementView, slide, InputView} from '@mathigon/boost';
import {Step} from '../shared/types';

import {beep, Beep} from './components/beep'
import {CodeBox} from './components/code-box'
import {MORSE_CODE} from './components/utilities'

import {EventTarget, delay} from '@mathigon/core';
// import {clamp, letterFrequency, caesarCipher, cipherLetterFreq} from '@mathigon/fermat';
// import {$, $N} from '@mathigon/boost';

/**
 * 
 * @param $grid the grid to put them into
 * @param time delay until the start of the animation, in ms
 * @param className the class name to match CSS selector, e.g. blue or green
 * @param filter the function to decide what matches
 */
function numberGrid($grid: ElementView, time: number, className: string,
                    filter: (i: string) => boolean) {
  for (const $i of $grid.children) {
    if (!filter($i.text)) continue;
    delay(() => $i.addClass(className), time);
    time += 80;
  }
}

export function finger5($section: Step) {
  const $fingers = $section.$$('.fingy');
  $fingers.forEach($f => $f.hide());

  // fade: opacity [0, 100]
  // pop: size [0, 100] (from center, with some bounce)
  // draw: doesn't work with this??
  // draw-reverse:
  // slide: they slide in from the bottom
  // slide-down: they slide in from the top
  // reveal: like fade, but elements below slide down
  // reveal-left/right: each element slides in from the left/right
  let i = 0;
  let delay = 1000;
  $section.$('.appear')?.on('click', () => $fingers.forEach(
    $f => $f.enter('slide', 500, i++ * delay)
  )); 
  // I love how this looks

}

export function finger32($section: Step) {
  const $fingers = $section.$$('.fingy');
  $fingers.forEach($f => $f.hide());

  let i = 0; 
  let delay = 500;
  $section.$('.appear')?.on('click', () => $fingers.forEach(
    $f => $f.enter('slide', 500, i++ * delay)
  ));
}

// BINPATTERN: how to re-render with a drop down? (see Graph Theory?)
export function binaryTable($section: Step) {
  function f2 (i: string){ console.log(i); return i[4] === '0'; }
  function f4 (i: number){ return i % 4 === 0; }
  function f8 (i: number){ return i % 8 === 0; }
  function f16 (i: number){ return i % 16 === 0; }

  function fx (digit: number) {
    return (i: string) => { 
      var s = '' + i; 
      return s[digit] === '0';
    }
  }

  function fy (digit: number) { 
    return (i: string) => {
      var s = '' + i; 
      return s[digit] === '1';
    }  
  }
  
  function colour(x: string) {
    $section.$('.number-grid')?.children.forEach(c => {
      c.removeClass('purple-yellow');
      c.removeClass('green-yellow');
    });
    $section.$('.number-grid')?.removeClass('green-yellow');
    numberGrid($section.$('.number-grid')!, 0, 'purple-yellow', fx(+x));
    numberGrid($section.$('.number-grid')!, 0, 'green-yellow', fy(+x));  
  }

  ($section.$('select') as InputView).change(colour);
  colour('4'); // default -- color last digit
}

export function binarySimulation($step: Step) {

  console.log($step);
  // NEXT NEXT NEXT let's get some code in here... make it display a random number


  const buttons = $step.$$('.btn');
  buttons[0].on('click', () => {
    $step.score('advance');
  });
}

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
