// =============================================================================
// Transformations and Symmetry
// (c) Mathigon
// =============================================================================


import {flatten, isPalindrome, words} from '@mathigon/core';
import {Line, Point} from '@mathigon/euclid';
import {$N, Draggable, ElementView, InputView} from '@mathigon/boost';
import {PlayBtn, Slider, Step} from '@mathigon/studio';

import {Geopad, GeoPoint} from '../shared/types';
import {Wallpaper} from './components/wallpaper';
import './components/wallpaper';


function play($step: Step, $el: ElementView, duration: number, score: string,
    callback: () => void) {
  const $play = $el.$('x-play-btn') as PlayBtn;
  $play.on('play', () => {
    callback();
    setTimeout(() => $step.score(score), duration);
    setTimeout(() => $play.reset(), duration + 2000);
  });
}

function expandSegment($geopad: Geopad, [e1, e2]: GeoPoint[], line: Line) {
  const swap = Point.distance(e1.value!, line.p1) > Point.distance(e2.value!, line.p1);
  $geopad.animatePoint(swap ? e2.name : e1.name, line.p1);
  $geopad.animatePoint(swap ? e1.name : e2.name, line.p2);
}

function drawShape($step: Step, $geopad: Geopad, goal: string, shape: string,
    expand = false) {
  // `shape` should be names of a polygon, segment or line.
  const lines = flatten(
      words(shape).map(s => $geopad.model[s].edges || $geopad.model[s]));

  $geopad.switchTool('line');

  $geopad.waitForPaths(lines, {
    onCorrect(path, i) {
      if (expand) expandSegment($geopad, path.components, lines[i]);
    },
    onIncorrect() {
      $step.addHint('incorrect', {force: true});
    },
    onHint() {
      $step.addHint('draw-hint', {force: true});
    },
    onComplete(afterError) {
      if (!afterError) $step.addHint('correct');
      $step.score(goal);
      $geopad.css({'pointer-events': 'none', cursor: 'default'});
    }
  });
}

// -----------------------------------------------------------------------------

export function transformations($step: Step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');

  play($step, $animations[0], 1000, 't1', () => {
    $images[0].animate(
        {transform: ['none', 'translate(95px,45px) rotate(18deg) scale(1.2)']},
        1000);
  });

  play($step, $animations[1], 1000, 't2', () => {
    $images[1].animate({
      transform: ['none', 'translate(80px,100px) scale(0.9,1.3) rotate(-30deg)']
    }, 1000);
  });

  play($step, $animations[2], 1000, 't3', () => {
    $images[2].animate({
      transform: ['translate(-20px,40px) rotate(-30deg)',
        'rotate(30deg) translate(135px,0) scale(0.8)'], rx: ['50px', 0],
      ry: ['50px', 0]
    }, 1000);
  });
}

export function rigid1($step: Step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');
  const $lines = $step.$$('line');
  const $arrow = $step.$('.arrow-head')!;

  play($step, $animations[0], 1000, 't1', () => {
    $arrow.hide();
    $images[0].animate({transform: ['none', 'translate(90px,-40px)']}, 1000, 0,
        'linear');
    $lines[0].enter('draw', 1000);
    $arrow.enter('fade', 400, 900);
  });

  play($step, $animations[1], 2000, 't2', () => {
    $images[1].css('transform', 'none');
    $lines[1].enter('draw', 1000);
    $images[1].animate(
        {transform: 'rotate(54deg) translate(230px,-118px) scaleX(-1)'}, 1000,
        1000);
  });

  play($step, $animations[2], 2000, 't3', () => {
    $images[2].css('transform', 'none');
    for (let i = 2; i < 7; ++i) $lines[i].enter('draw', 500);
    $images[2].animate({transform: 'rotate(84deg)'}, 1000, 1000);
  });
}

export function translations1($step: Step) {
  const initial = [{x: 40, y: 40}, {x: 120, y: 0}, {x: 20, y: 20}];
  const correct = [{x: 100, y: 20}, {x: 40, y: 40}, {x: 120, y: 40}];

  $step.$$('svg').forEach(($s, i) => {
    const $polygons = $s.$$('polygon');
    $polygons[0].setTransform(initial[i]);

    const drag = new Draggable($polygons[1], {$parent: $s, useTransform: true, snap: 20});
    drag.setPosition(initial[i].x, initial[i].y);
    drag.on('end', () => {
      if (drag.position.equals(correct[i])) {
        drag.disabled = true;
        $step.score('drag-' + i);
        $step.addHint('correct');
        $polygons[1].css('cursor', 'default');
      }
    });
  });
}

export function reflections($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  drawShape($step, $geopads[0], 'r0', 'line0', true);
  drawShape($step, $geopads[1], 'r1', 'line1', true);
  drawShape($step, $geopads[2], 'r2', 'line2', true);
}

export function symmetry($step: Step) {
  const $symmetries = $step.$$('.symmetry');
  const $images = $step.$$('img:nth-child(2)');

  play($step, $symmetries[0], 1500, 'play-0', () => {
    $images[0].animate({transform: ['none', 'scaleX(-1)']}, 1500);
  });

  play($step, $symmetries[1], 1500, 'play-1', () => {
    $images[1].animate({transform: ['none', 'rotate(60deg)']}, 1500);
  });
}

export function reflectionalSymmetry1($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  drawShape($step, $geopads[0], 'r0', 'line0', true);
  drawShape($step, $geopads[1], 'r1', 'line1', true);
  drawShape($step, $geopads[2], 'r2', 'line2', true);
  drawShape($step, $geopads[3], 'r3', 'line3a line3b', true);
  drawShape($step, $geopads[4], 'r4', 'line4a line4b line4c line4d', true);
  drawShape($step, $geopads[5], 'r5', 'line5a line5b', true);
}

function drawThreeShapes($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  drawShape($step, $geopads[0], 'r0', 'to0');
  drawShape($step, $geopads[1], 'r1', 'to1');
  drawShape($step, $geopads[2], 'r2', 'to2');

  const finished = $step.$$('.finished');
  $step.onScore('r0', () => finished[0].enter('fade', 600));
  $step.onScore('r1', () => finished[1].enter('fade', 600));
  $step.onScore('r2', () => finished[2].enter('fade', 600));
}

export const reflections1 = drawThreeShapes;
export const rotations = drawThreeShapes;
export const reflectionalSymmetry2 = drawThreeShapes;
export const rotationalSymmetry2 = drawThreeShapes;

export function palindromes($step: Step) {
  const $inputs = $step.$$('input') as InputView[];

  for (let i = 0; i < 3; ++i) {
    $inputs[i].onKey('Enter', () => $inputs[i].blur());
    $inputs[i].on('blur', () => {
      const str = '' + $inputs[i].value;
      if (!str.length) {
        // Do nothing
      } else if (str.length < 3) {
        $step.addHint('short-palindrome');
      } else if (isPalindrome(str)) {
        $step.addHint('correct');
        $step.score('p' + i);
        $inputs[i].addClass('correct');
      } else {
        $step.addHint('incorrect');
      }
    });
  }
}

// -----------------------------------------------------------------------------

export function groups($step: Step) {
  $step.groupBlanks(1, 2, 3);
}

export function addSymmetries($step: Step) {
  $step.$$('.sym-sum').forEach(($s, i) => {
    $s.one('click', () => {
      $step.score('sum-' + i);
      $s.removeClass('pending');
    });
  });
}

function add(a: number, b: number) {
  if (a < 4 && b < 4) return (a + b) % 4;  // rotation + rotation
  if (a >= 4 && b >= 4) return (a - b + 4) % 4;  // reflection + reflection
  if (a > b) return 4 + ((a - b) % 4);  // reflection + rotation
  return 4 + ((a + b) % 4);  // rotation + reflection
}

function makeSquare(i: number, x: number, $parent: ElementView, delay = 0) {
  const $el = $N('img', {
    src: `/content/transformations/images/cube-${i}.svg`,
    style: `left: ${8 + x * 70}px;`
  }, $parent);
  $el.enter('pop', 200, delay);
  return $el;
}

export function calculator($step: Step) {
  const $buttons = $step.$$('.button')!;
  const $display = $step.$('.display')!;
  const $clear = $display.$('.clear')!;

  let a: number|undefined = undefined;
  let b: number|undefined = undefined;
  let answer: number|undefined = undefined;

  let $results: ElementView[] = [];
  let locked = false;
  let count = 0;

  for (const [i, $b] of $buttons.entries()) {
    $b.on('click', () => {
      count += 1;
      if (count === 3) $step.score('calculate');

      if (a === undefined) {
        a = i;
        $results.push(makeSquare(i, 0, $display));
        $clear.enter('pop');

      } else if (b === undefined) {
        b = i;
        answer = add(a, b);
        $results.push(makeSquare(b, 1, $display));
        $results.push(makeSquare(answer, 2, $display, 200));

      } else if (!locked) {
        locked = true;
        setTimeout(() => locked = false, 800);

        a = answer;
        b = i;
        answer = add(a!, b);

        $results.shift()!.exit('pop', 200);
        $results.shift()!.exit('pop', 200);
        $results[0].animate({left: '8px'}, 400);

        $results.push(makeSquare(b, 1, $display, 400));
        $results.push(makeSquare(answer, 2, $display, 600));
      }
    });
  }

  $clear.on('click', () => {
    for (const $r of $results) $r.exit('pop', 200);
    $results = [];
    a = b = answer = undefined;
    $clear.exit('pop');
  });
}

export function symmetryArithmetic($step: Step) {
  $step.onScore('blank-2', () => $step.addHint('not-commutative'));
}

// -----------------------------------------------------------------------------

export function wallpaperGroups1($step: Step) {
  const $symmetries = $step.$$('.symmetry');
  const $images = $step.$$('img:nth-child(2)');

  play($step, $symmetries[0], 1500, 'play-0', () => {
    $images[0].animate({transform: ['none', 'translate(56px,-34px)']}, 1500);
  });

  play($step, $symmetries[1], 1500, 'play-1', () => {
    $images[1].animate({transform: ['none', 'translateX(55px)']}, 1500);
  });
}

export function footsteps($step: Step) {
  const $img = $step.$('img:nth-child(2)')!;
  const $slider = $step.$('x-slider') as Slider;
  $slider.on('move', (n) => {
    $img.css('transform', `translateX(${n / 2}px) scaleY(${1 - n / 50})`);
  });
}

export function wallpaperGroups3($step: Step) {
  const $gallery = $step.$('x-gallery')!;
  $gallery.on('slide-end', () => $step.score('gallery'));
}

export function drawing($step: Step) {
  const $wallpaper = $step.$('x-wallpaper') as Wallpaper;
  let switched = false;

  $wallpaper.on('draw', () => {
    setTimeout(() => $step.score('draw-' + (switched ? 2 : 1)), 500);
  });

  $wallpaper.on('switch', () => {
    switched = true;
    setTimeout(() => $step.score('switch'), 500);
    // TODO Maybe scroll the galary above to the correct position?
  });
}

export function planets($step: Step) {
  const $rockets = $step.$$('.rocket');
  const $clocks = $step.$$('.clock');

  $step.onScore('blank-0', () => {
    $rockets[0].animate({transform: 'rotate(20deg)'});
    $rockets[1].animate({transform: 'rotate(-20deg)'});
  });

  $step.onScore('blank-1', () => {
    $clocks[0].enter('pop');
    $clocks[1].enter('pop');
  });
}
