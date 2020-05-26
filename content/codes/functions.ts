// =============================================================================
// Codes and Ciphers
// (c) Mathigon
// =============================================================================


import {delay, wait} from '@mathigon/core';
import {$N, ElementView, slide, InputView, SVGView, loadScript} from '@mathigon/boost';
import {Step, Slider, Slideshow} from '../shared/types';

import {beep, Beep} from './components/beep';
import {CodeBox} from './components/code-box';
import {MORSE_CODE} from './components/utilities';

import './components/code-box';
import './components/enigma';
import './components/morse';


// -----------------------------------------------------------------------------
// Introduction

export function intro($step: Step) {
  loadScript('https://w.soundcloud.com/player/api.js').then(() => {
    // Trigger and event when students press 'play' in the iframe.
    const widget = (window as any).SC.Widget($step.$('iframe')!._el);
    widget.bind('play', () => {
      setTimeout(() => $step.addHint('song'), 1000);
      setTimeout(() => $step.score('play'), 2000);
    });
  });
}

export function telegraph($step: Step) {
  const $telegraph = $step.$('.telegraph')!;
  let sound: Beep;

  slide($telegraph, {
    down: () => {
      $telegraph.addClass('pressed');
      sound = beep();
      $step.score('press');
    },
    up: () => {
      $telegraph.removeClass('pressed');
      if (sound) sound.stop();
    }
  });
}

export function morseEncoding($step: Step) {
  const $codeBox = $step.$('x-code-box') as CodeBox;

  $codeBox.encode((char: string, $el: ElementView) => {
    for (const x of MORSE_CODE[char.toLowerCase()].split('')) {
      $N('span', {class: x === '•' ? 'dot' : 'dash'}, $el);
    }
  });

  $codeBox.on('type', () => $step.score('type'));
}

export function morseApplications($step: Step) {
  const code = 'hollywood'.split('').map(c => MORSE_CODE[c]).join('').split('');
  const $light = $step.$('.capitol-light')!;

  async function flash() {
    for (const c of code) {
      $light.show();
      await wait(c === '•' ? 200 : 500);
      $light.hide();
      await wait(100);
    }
    flash();
  }
  flash();

  $step.$('x-video')!.on('play', () => $step.score('play'));
}


// -----------------------------------------------------------------------------
// Binary Numbers

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

/**
 * A representation of adding another finger to count on. on/off
 * Multiplies by two with each number.
 *
 * DIGITZ: don't animate the first guy showing up (off-by-one)
 * DIGITZ: better commenting
 * DIGITZ: surrounding exposition (see GDocs)
 *
 * @param $step
 */
export function bracket($step: Step) {

  let lastStep = 0;

  const $slider = $step.$('x-slider.bracket') as Slider;
  const $rounds = $step.$$('g');
  const count = $rounds.length;

  function move(x: number) {
    let direction = x - lastStep;
    lastStep = x;

    for (let i = 0; i < x; i++) {
      $rounds[count - 1 - i].show();
    }
    for (let i = x + 1; i < count; i++) {
      $rounds[count - 1 - i].hide();
    }

    if (x == 0) return;
    if (direction > 0) {
      let $lines = $rounds[count - x].$$('line');
      $lines.forEach((l, i) => {
        if (i % 2 == 0) {
          l.animate({
            transform: [
              `translate(-50px, 0px) scale(0.0, 1.0)`,
              `translate(0px, 0px) scale(1.0, 1.0)`
            ]
          }, 400, 100);
        }
      });
    } else {

    }
  }

  $slider.on('move', move);
  move(lastStep);
}


/**
 * Slideshow for animating decimal to binary.
 */
export function dec2bin($section: Step) {
  const $slideshow = $section.$('x-slideshow') as Slideshow;

  // the remainder block
  let $blockN = $section.$('#blockN') as SVGView;

  // elements for each digit
  const digits = [16, 8, 4, 2, 1];
  const $digitBlocks = digits.map(d => $section.$(`#block${d}`) as SVGView);
  const $digitClaws = digits.map(d => $section.$(`#thingy${d}`) as SVGView);
  const $digitText = digits.map(d => $section.$(`#digit${d}`) as SVGView);
  $digitBlocks.forEach(b => b.hide());
  $digitText.forEach(t => t.hide());

  // spacing constants
  const CLAW_START_Y = 40;
  const CLAW_END_Y = 130;
  const ARM_Y_SCALE = CLAW_END_Y / CLAW_START_Y;
  const BLOCK_Y = 234;
  const BLOCK_Y_HIGH = 146;
  const BLOCK_X_START = 166;
  const basex = 473;
  const BLOCK_X_POSITIONS = [0, 227, 374, 445, 496]; // translate.x vals

  // timing constants
  const DURATION1 = 400,
      DURATION2 = 400;

  // values for N=25
  const Nvals = [25, 9, 1, 1, 1];
  const Nbinary = [true, true, false, false, true];

  /**
   * Animate lowering of the claw
   * @param digitIndex the index of the claw
   * @param grabbed if true, lower the block with it
   */
  function lowerClaw(digitIndex: number, grabbed: boolean) {
    const $claw = $digitClaws[digitIndex];

    const $grab = $claw.$('path') as SVGView;
    $grab.animate({
          transform: ['none', `translate(0px, ${CLAW_END_Y - CLAW_START_Y}px)`]
        }
        , DURATION1, grabbed ? 0 : DURATION2);

    const $arm: SVGView = $claw.$('rect') as SVGView;
    $arm.animate({transform: ['none', `scale(1.0, ${ARM_Y_SCALE})`]},
        DURATION1, grabbed ? 0 : DURATION2);

    // when going in reverse with an already grabbed slice, we must lower it
    if (grabbed) {
      $digitBlocks[digitIndex].animate({
        transform: [
          `translate(${BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y_HIGH}px)`,
          `translate(${BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y}px)`
        ]
      }, DURATION1);
    }
  }

  /**
   * Animate raising of the claw
   * @param digitIndex the index of the claw
   * @param grabbed if true, raise the block with it
   */
  function raiseClaw(digitIndex: number, grabbed: boolean) {
    const $claw = $digitClaws[digitIndex];

    const $grab = $claw.$('path') as SVGView;
    $grab.animate(
        {transform: [`translate(0px, ${CLAW_END_Y - CLAW_START_Y}px)`, 'none']},
        DURATION1);

    const $arm: SVGView = $claw.$('rect') as SVGView;
    $arm.animate({transform: [`scale(1.0, ${ARM_Y_SCALE})`, 'none']},
        DURATION1);

    if (grabbed) {
      $digitBlocks[digitIndex].show();
      $digitBlocks[digitIndex].animate({
        transform: [
          `translate(${BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y}px)`,
          `translate(${BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y_HIGH}px)`
        ]
      }, DURATION1);
    }
  }

  /**
   * Move a block between two digits.
   * @param startDigit the index of the starting digit
   * @param endDigit the index of the ending digit
   */
  function moveBlockBetweenDigits(startDigit: number, endDigit: number) {
    // left to right
    if (startDigit < endDigit) {
      let startX = startDigit < 0 ? BLOCK_X_START :
                   Nbinary[startDigit] ? getClawEnd(startDigit) :
                   getClawStart(startDigit);
      $blockN.animate({
            transform: [
              `translate(${startX}px, ${BLOCK_Y}px)`,
              `translate(${getClawStart(endDigit)}px, ${BLOCK_Y}px)`]
          },
          DURATION1);
    } else {
      // right to left
      let endX = endDigit < 0 ? BLOCK_X_START :
                 Nbinary[endDigit] ? getClawEnd(endDigit) :
                 getClawStart(endDigit);
      $blockN.animate({
            transform: [
              `translate(${getClawStart(startDigit)}px, ${BLOCK_Y}px)`,
              `translate(${endX}px, ${BLOCK_Y}px)`]
          },
          DURATION2, DURATION1);
    }

    function getClawStart(index: number) {
      return basex + BLOCK_X_POSITIONS[index];
    }

    function getClawEnd(index: number) {
      return basex + BLOCK_X_POSITIONS[index] + digits[index] * 10;
    }
  }

  /**
   * Split $blockN into two blocks.
   * @param digitIndex index of the digit
   * @param N the current size of $blockN
   */
  function splitBlock(digitIndex: number, N: number) {
    $digitBlocks[digitIndex].show();

    const placeValue = digits[digitIndex];
    let newN = N - placeValue;
    // change width
    $blockN.$('rect')?.setAttr('width', newN * 10);
    // translate, move to end of claw.
    // technically it's not moving
    $blockN.animate({
      transform: [
        `translate(${basex + BLOCK_X_POSITIONS[digitIndex] +
                     digits[digitIndex] * 10}px, ${BLOCK_Y}px)`,
        `translate(${basex + BLOCK_X_POSITIONS[digitIndex] +
                     digits[digitIndex] * 10}px, ${BLOCK_Y}px)`]
    }, DURATION1);

    // change text
    if (newN == 0) {
      $blockN.hide();
      return;
    } else {
      let textBuffer = newN >= 10 ? 14 : 7;
      $blockN.$('tspan')!.setAttr('x', (newN * 10) / 2 - textBuffer); // text positioning
      $blockN.$('tspan')!.textStr = newN;
    }
  }

  /**
   * Merge blocks $blockN and the digit block
   * @param digitIndex index of the digit
   * @param N the current size of $blockN
   */
  function mergeBlocks(digitIndex: number, N: number) {
    // Example... lower 8 back onto 17
    // $block8 disappears ($digitBlocks[digitIndex].hide(); )
    // $blockN goes back to its current size + 8
    const newN = digits[digitIndex] + N;

    setTimeout(() => {
      $digitBlocks[digitIndex].hide();
      $blockN.show();
      $blockN.$('rect')?.setAttr('width', newN * 10);
      $blockN.animate({
            transform: [
              `translate(${basex + BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y}px)`,
              `translate(${basex + BLOCK_X_POSITIONS[digitIndex]}px, ${BLOCK_Y}px)`]
          },
          DURATION1, DURATION2);
      // $blockN moves back to the beginning of the thing
      let textBuffer = newN >= 10 ? 14 : 7; // make room for two-digit or one
      $blockN.$('tspan')!.setAttr('x', (newN * 10) / 2 - textBuffer); // text positioning
      $blockN.$('tspan')!.textStr = newN;
    }, DURATION1 + DURATION2);
  }

  $slideshow.on('next', (x: number) => {
    // BUTTER: these could be abstracted by checking even/odd and using single index
    switch (x) {
        // 16
      case 1:
        lowerClaw(0, false);
        moveBlockBetweenDigits(-1, 0);
        break;
      case 2:
        raiseClaw(0, Nbinary[0]);
        if (Nbinary[0]) splitBlock(0, Nvals[0]);
        setTimeout(() => $digitText[0].show(), DURATION1);
        break;

        //8
      case 3:
        lowerClaw(1, false);
        moveBlockBetweenDigits(0, 1);
        break;

      case 4:
        if (Nbinary[1]) splitBlock(1, Nvals[1]);
        raiseClaw(1, Nbinary[1]);
        setTimeout(() => $digitText[1].show(), DURATION1);
        break;

        // 4
      case 5:
        lowerClaw(2, false);
        moveBlockBetweenDigits(1, 2);
        break;
      case 6:
        if (Nbinary[2]) splitBlock(2, Nvals[2]);
        raiseClaw(2, Nbinary[2]);
        setTimeout(() => $digitText[2].show(), DURATION1);
        break;

        // 2
      case 7:
        lowerClaw(3, false);
        moveBlockBetweenDigits(2, 3);
        break;
      case 8:
        if (Nbinary[3]) splitBlock(3, Nvals[3]);
        raiseClaw(3, Nbinary[3]);
        setTimeout(() => $digitText[3].show(), DURATION1);
        break;

        // 1
      case 9:
        lowerClaw(4, false);
        moveBlockBetweenDigits(3, 4);
        break;
      case 10:
        raiseClaw(4, Nbinary[4]);
        if (Nbinary[4]) splitBlock(4, Nvals[4]);
        setTimeout(() => $digitText[4].show(), DURATION1);
        break;
    }

  });

  // BUTTER: these could be abstracted by checking even/odd and using single index
  $slideshow.on('back', (x: number) => {
    switch (x) {
      case 0:
        raiseClaw(0, false);
        moveBlockBetweenDigits(0, -1); // when moving in reverse, logic is different
        break;

      case 1:
        lowerClaw(0, true);
        mergeBlocks(0, 9);
        $digitText[0].hide();
        break;

      case 2:
        raiseClaw(1, false);
        moveBlockBetweenDigits(1, 0);
        break;

      case 3:
        lowerClaw(1, true);
        mergeBlocks(1, 1);
        $digitText[1].hide();
        break;

      case 4:
        raiseClaw(2, false);
        moveBlockBetweenDigits(2, 1);
        break;

      case 5:
        lowerClaw(2, false);
        // mergeBlocks(1, 1);
        $digitText[2].hide();
        break;

      case 6:
        raiseClaw(3, false);
        moveBlockBetweenDigits(3, 2);
        break;

      case 7:
        lowerClaw(3, false);
        // mergeBlocks(1, 1);
        $digitText[3].hide();
        break;

      case 8:
        raiseClaw(4, false);
        moveBlockBetweenDigits(4, 3);
        break;

      case 9:
        lowerClaw(4, true);
        mergeBlocks(4, 0);
        $digitText[4].hide();
        break;
    }
  });
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
  function f2(i: string) {
    console.log(i);
    return i[4] === '0';
  }

  function f4(i: number) { return i % 4 === 0; }

  function f8(i: number) { return i % 8 === 0; }

  function f16(i: number) { return i % 16 === 0; }

  function fx(digit: number) {
    return (i: string) => {
      var s = '' + i;
      return s[digit] === '0';
    };
  }

  function fy(digit: number) {
    return (i: string) => {
      var s = '' + i;
      return s[digit] === '1';
    };
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


