// =============================================================================
// Codes and Ciphers
// (c) Mathigon
// =============================================================================


import {delay, wait} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {$N, ElementView, InputView, loadScript, slide, SVGView} from '@mathigon/boost';
import {Select, Slider, Slideshow, Step} from '@mathigon/studio';

import {beep, Beep} from './components/beep';
import {CodeBox} from './components/code-box';
import {MORSE_CODE} from './components/utilities';
import {HammingCode} from './components/hamming';
import {Barcode} from './components/barcode';

import './components/code-box';
import './components/barcode';
import './components/enigma';
import './components/enigma-rotors';
import './components/morse';
import './components/hamming';


// -----------------------------------------------------------------------------
// Introduction

export function intro($step: Step) {
  let hasSeenHint = false;
  loadScript('https://w.soundcloud.com/player/api.js').then(() => {
    // Trigger and event when students press 'play' in the iframe.
    // eslint-disable-next-line new-cap
    const widget = (window as any).SC.Widget($step.$('iframe')!._el);
    widget.bind('play', () => {
      if (!hasSeenHint) setTimeout(() => $step.addHint('song'), 5000);
      setTimeout(() => $step.score('play'), 7000);
      hasSeenHint = true;
    });
  });
}

export function flashlight($step: Step) {
  const $window = $step.$('.window')!;
  slide($window, {
    down: () => {
      $window.addClass('pressed');
      $step.score('flashlight');
    },
    up: () => $window.removeClass('pressed')
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

export function radio($step: Step) {
  const audio = new Audio('/content/codes/images/better-days-audio.mp3');
  audio.preload = 'true';
  const $btn = $step.$('.radio-play')!;

  $btn.on('click', () => audio.paused ? audio.play() : audio.pause());
  audio.addEventListener('play', () => $btn.addClass('playing'));
  audio.addEventListener('pause', () => $btn.removeClass('playing'));

  audio.addEventListener('ended', () => {
    $step.score('play');
    audio.currentTime = 0;
  });
}


// -----------------------------------------------------------------------------
// Binary Numbers

/**
 * Animating a transistor
 */
export function transistor($section: Step) {

  const $pathOn = $section.$('#path_on') as SVGView;
  const $pathOff = $section.$('#path_off') as SVGView;
  const $electrons = $section.$$('#electron') as SVGView[];
  const $switch = $section.$('.transist')!;
  let switchOn = false;

  let electronPositions: number[];
  const UPDATE_PERIOD = 100;

  // SATELLITE: mimic here
  function move() {
    if (!switchOn) return;
    electronPositions = electronPositions.map(p => {
      let pp = p + 0.02;
      if (pp >= 1) pp = (pp - 1);
      return pp;
    });

    $electrons.forEach((e, i) => {
      const xy = $pathOn.getPointAt(electronPositions[i]);
      const xyShift = new Point(xy.x - 12, xy.y - 12);
      e.setTransform(xyShift);
    });

    setTimeout(move, UPDATE_PERIOD);
  }

  function turnOn() {
    // show all
    $electrons.forEach((e) => e.show());
    const totalLength = $pathOn.strokeLength;
    const gap = totalLength / $electrons.length; // gap between electrons
    // need way to scale this from linear to non-linear and back
    electronPositions = $electrons.map((e, i) => (i * gap) / totalLength); // each electron has a position

    setTimeout(move, UPDATE_PERIOD);
  }

  function turnOff() {
    // NEXT: e[0:3] move to pathOff.pointAt(0.2, 0.4, 0.6, 0.8);
    // hide them
    $electrons.forEach((e, i) => {
      if (i > 3) {
        e.hide();
      } else {
        const xy = $pathOff.getPointAt([0.11, 0.37, 0.63, 0.89][i]); // one of four points
        const xyShift = new Point(xy.x - 12, xy.y - 12);
        e.setTransform(xyShift);
      }
    });
  }

  $switch.on('click', () => {
    $section.score('switch');
    switchOn = !switchOn;
    if (switchOn) turnOn();
    else turnOff();
  });
}

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
  // [b1, b2, b4, b8, b16, b32]
  // [ 0,  1,  2,  3,   4,   5]
  const count = $rounds.length;

  function move(x: number) {
    const direction = x - lastStep;
    lastStep = x;

    for (let i = 0; i < x; i++) {
      $rounds[i].show();
    }
    for (let i = x + 1; i < count; i++) {
      $rounds[i].hide();
    }

    if (direction < 0 && x == 0) {
      $rounds[0].hide();
    }

    if (x == 0) return;
    if (direction > 0) {
      const $lines = $rounds[x - 1].$$('line');
      $lines.forEach((l, i) => {
        if (i % 2 == 0) {
          l.animate({
            transform: [
              `translate(-50px, 0px) scale(0.0, 1.0)`,
              `translate(0px, 0px) scale(1.0, 1.0)`
            ]}, 400, 100);
        }
      });
    }
  }

  $slider.on('move', move);
  move(-1);
}


/**
 * Slideshow for animating decimal to binary.
 * HAMMING: mimic this
 */
export function dec2bin($section: Step) {
  const $slideshow = $section.$('x-slideshow') as Slideshow;

  // the remainder block
  const $blockN = $section.$('#blockN') as SVGView;

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
  const DURATION1 = 400;
  const DURATION2 = 400;

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

    function getClawStart(index: number) {
      return basex + BLOCK_X_POSITIONS[index];
    }

    function getClawEnd(index: number) {
      return basex + BLOCK_X_POSITIONS[index] + digits[index] * 10;
    }
    // left to right
    if (startDigit < endDigit) {
      const startX = startDigit < 0 ? BLOCK_X_START :
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
      const endX = endDigit < 0 ? BLOCK_X_START :
                 Nbinary[endDigit] ? getClawEnd(endDigit) :
                 getClawStart(endDigit);
      $blockN.animate({
        transform: [
          `translate(${getClawStart(startDigit)}px, ${BLOCK_Y}px)`,
          `translate(${endX}px, ${BLOCK_Y}px)`]
      },
      DURATION2, DURATION1);
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
    const newN = N - placeValue;
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
      const textBuffer = newN >= 10 ? 14 : 7;
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
      const textBuffer = newN >= 10 ? 14 : 7; // make room for two-digit or one
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

        // 8
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
  const $fingers = $section.$$('.bin-finger');
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
  const delay = 300;

  $section.onScore('blank-0', () => $fingers.forEach(
      $f => $f.enter('slide', 500, i++ * delay)
  ));
}

export function finger32($section: Step) {
  const $fingers = $section.$$('.bin-finger');
  $fingers.forEach($f => $f.hide());

  const $decCaptions = $section.$$('.dec');
  const $binCaptions = $section.$$('.bin');
  let showingBin = false;

  $binCaptions.forEach($f => $f.hide());

  let i = 0;
  const delay = 200;
  $section.onScore('blank-0', () => $fingers.forEach(
      $f => $f.enter('slide', 500, i++ * delay)
  ));

  const $select = $section.$('x-select') as Select;
  $select.on('change', ($el: ElementView) => {
    console.log($el.data.name);
    (showingBin ? $binCaptions : $decCaptions).forEach($f => $f.hide());
    (showingBin ? $decCaptions : $binCaptions).forEach($f => $f.show());

    showingBin = !showingBin;
  });
}

// BINPATTERN: how to re-render with a drop down? (see Graph Theory?)
export function binaryTable($section: Step) {
  function fx(digit: number) {
    return (i: string) => {
      const s = '' + i;
      return s[digit] === '0';
    };
  }

  function fy(digit: number) {
    return (i: string) => {
      const s = '' + i;
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
  const buttons = $step.$$('.btn');
  buttons[0].on('click', () => {
    $step.score('advance');
  });
}

export function resolution($step: Step) {
  const $codeBox = $step.$('x-code-box') as CodeBox;

  $codeBox.encode((char: string, $el: ElementView) => {
    for (const x of MORSE_CODE[char.toLowerCase()].split('')) {
      $N('span', {class: x === '•' ? 'dash' : 'dot'}, $el);
    }
  });
}

export function satellite($step: Step) {
  const $trajectory = $step?.$('.bitstream') as SVGView;

  const $svg = $step.$('svg');

  const $bitstream = $N('g', {class: 'text'}, $svg);

  const NUM_BITS = 12;
  const FONT_SIZE = 30;
  // based on [start, end] points of satellite transmitter, receiver
  const START = $trajectory.getPointAt(1);
  const END = $trajectory.getPointAt(0);
  const ANGLE = Math.atan2(END.y - START.y, END.x - START.x);

  // Initialize bitstream
  const dataStream: ElementView[] = [];
  for (let i = 0; i < NUM_BITS; i++) {
    const $g = $N('g', {}, $bitstream);
    $N('text', {text: Math.floor(Math.random() * 2), 'font-size': FONT_SIZE, fill: '#FAFFFB'}, $g);
    const $errorFlash = $N('rect', {fill: '#CC0E66', x: -2, y: -26, width: 20, height: 30, rx: 6, ry: 6, 'fill-opacity': 0.5}, $g);
    $errorFlash.hide();
    dataStream.push($g);
    dataStream[i].hide();
  }

  let time = 0;
  const SPEED = 0.0010;
  const ERROR_CHANCE = 0.2;
  const FLASH_TIME = 150;

  let isMoving = false;

  let numErrors = 0;

  function moveRecurse() {
    time += SPEED;
    dataStream.forEach((p, i) => {
      const progress = i / dataStream.length + time;

      // Check for when bit reaches the end (1s digit goes from N to N+1)
      if (Math.floor(progress) > Math.floor(progress - SPEED)) {
        p.$('text')!.textStr = Math.floor(Math.random() * 2);
        p.$('rect')!.hide();
      }

      // Check when bit crosses the center (tenths digit goes from 4 to 5)
      if (Math.floor((progress * 10) % 10) === 5 && Math.floor((progress - SPEED) * 10 % 10) === 4) {

        if (Math.random() < ERROR_CHANCE) {

          // let user advance after 2 errors
          numErrors++;
          if (numErrors == 2) {
            $step.score('transmit');
          }
          // console.log(`ERROR in bit ${i}`);
          const prevVal = p.$('text')!.text;

          // flashing effecT
          p.$('rect')!.enter('fade', FLASH_TIME, 0);
          setTimeout(() => p.$('text')!.textStr = prevVal === '1' ? 0 : 1, FLASH_TIME);
          p.$('rect')!.exit('fade', FLASH_TIME, FLASH_TIME);
        }
      }
      const xy = $trajectory.getPointAt((progress * 1000) % 1000 / 1000); // decimal
      // set transform dependent on the bits
      p.setTransform(new Point(xy.x, xy.y), ANGLE);
    });

    if (isMoving) {
      setTimeout(() => {
        moveRecurse();
      }, 10);
    }
  }

  // SATELLITE: WAIT for new svg from designer
  function moveBits() {

    isMoving = true;
    moveRecurse();
    // There should be a timeout
    dataStream?.forEach(p => {
      p.show();
    });
  }

  function stopBits() {
    isMoving = false;
    dataStream.forEach(p => {
      p.hide();
    });
  }

  const $satellites = $step.$('.satellites')!;

  // from Telegraph code. Should replace w/ code to enable 1s and 0s.
  slide($satellites, {
    down: () => {
      moveBits();
      // $satellites.addClass('pressed');
    },
    up: () => {
      stopBits();
      // $satellites.removeClass('pressed');
    }
  });
}

export function hammingEncode($step: Step) {
  const $hamming = $step.$('x-hamming') as HammingCode;

  // updates the model based on the value
  $hamming.updateModel($step.model);

  // Map Blank pairs to the parity bits they represent
  const BLANK_MAP: {[key: string]: number} = {
    'blank-0 blank-1': 1,
    'blank-2 blank-3': 2,
    'blank-4 blank-5': 4,
    'blank-6 blank-7': 8
  };
  Object.keys(BLANK_MAP).forEach(k => {
    $step.onScore(k, () => {
      $hamming.showParity(BLANK_MAP[k]);
    });
  });

  // Slide functions.
  const slideNext = [
    // "Let's say..."
    () => $hamming.noop(),

    // "First we must shift..."
    () => $hamming.makeRoomForParities(),
    // "The parity bits will go into..."
    () => $hamming.noop(),

    // "We must figure out..."
    () => $hamming.noop(),

    // "Let's start with the first parity group..."
    () => $hamming.highlight(1),
    () => $hamming.noop(),

    () => $hamming.highlight(2),
    () => $hamming.noop(),

    () => $hamming.highlight(4),
    () => $hamming.noop(),

    () => $hamming.highlight(8),
    () => $hamming.noop(),

    () => $hamming.showAll()
  ];

  const slideBack = [
    () => $hamming.hideParityBits(),

    () => $hamming.noop(),
    () => $hamming.showAll(),

    () => $hamming.noop(), // $hamming.hideParity(1),
    () => $hamming.highlight(1),

    () => $hamming.noop(), // $hamming.hideParity(2),
    () => $hamming.highlight(2),

    () => $hamming.noop(), // $hamming.hideParity(4),
    () => $hamming.highlight(4),

    () => $hamming.noop(), // $hamming.hideParity(8),
    () => $hamming.highlight(8),

    () => $hamming.noop()
  ];

  const $slideshow = $step.$('x-slideshow') as Slideshow;
  $slideshow.on('next', (x: number) => {
    if (x >= 0 && x < slideNext.length) {
      slideNext[x]();
    }
  });

  $slideshow.on('back', (x: number) => {
    if (x >= 0 && x < slideBack.length) {
      slideBack[x]();
    }
  });
}

export function hammingDecode($step: Step) {
  const $hamming = $step.$('x-hamming') as HammingCode;

  // parity group 1
  $step.onScore('blank-1 blank-2', () => {
    $hamming.markSingleBitError(1);
  });

  // parity group 4
  $step.onScore('blank-5 blank-6', () => {
    $hamming.markSingleBitError(4);
  });

  $step.onScore('blank-9', () => {
    $hamming.unmarkSingleBitError(1);
    $hamming.unmarkSingleBitError(4);
    $hamming.markSingleBitError(5);
  });

  $step.onScore('blank-10', () => {
    $hamming.correctDataBit(5);
    $hamming.unmarkSingleBitError(5);
  });

  const slideNext = [
    // "What if..."
    () => $hamming.noop(),

    // "First let's check parity group 1..."
    () => {
      $hamming.highlight(1);
    },

    // "Now let's check parity group 2..."
    () => {
      $hamming.highlight(2);
    },

    // "Now let's check parity group 4..."
    () => {
      $hamming.highlight(4);
    },

    // "Now let's check..."
    () => $hamming.highlight(8),

    // "We identified there is something wrong..."
    () => {
      $hamming.showAll();
    },

    // "Now can remove..."
    () => {
      $hamming.hideParityBits();
    }
  ];

  const slideBack = [
    // "What if..."
    () => {
      $hamming.showAll();
      // $hamming.unmarkSingleBitError(1);
    },
    // "First let's check parity group 1..."
    () => {
      $hamming.highlight(1);
    },
    // "Now let's check parity group 2..."
    () => {
      $hamming.highlight(2);
      // $hamming.unmarkSingleBitError(4);
    },
    // "Now let's check parity group 4..."
    () => {
      $hamming.highlight(4);
    },
    // "Now let's check parity group 8..."
    () => {
      $hamming.highlight(8);
    },
    // "We identified..."
    () => {
      $hamming.makeRoomForParities();
    },
    // "Now we can remove..."
    () => {
      $hamming.noop();
    }
  ];

  const $slideshow = $step.$('x-slideshow') as Slideshow;
  $slideshow.on('next', (x: number) => {
    if (x >= 0 && x < slideNext.length) {
      slideNext[x]();
    }
  });

  $slideshow.on('back', (x: number) => {
    if (x >= 0 && x < slideBack.length) {
      slideBack[x]();
    }
  });
}

export function barcodeDrawing($step: Step) {

  const transforms = [
    'scale(4) translate(50%, 0)',
    `scale(4) translate(${50 - 50 * 1 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 2 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 3 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 4 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 5 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 6 / 7}%, 0)`,
    'scale(4) translate(0%, 0)',
    `scale(4) translate(${50 - 50 * 8 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 9 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 10 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 11 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 12 / 7}%, 0)`,
    `scale(4) translate(${50 - 50 * 13 / 7}%, 0)`,
    'scale(4) translate(-50%, 0)'
  ];
  const $svg = $step.$('svg');
  $step.$$('.zoom').forEach((button, i) => {
    button.on('click', () => $svg?.css('transform', transforms[i]));
  });

  const $barcode = $step.$('x-barcode') as Barcode;
  $step.$('.generate')?.on('click', () => {
    $barcode.generateNewCode();
  });
}
