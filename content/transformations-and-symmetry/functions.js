// =============================================================================
// Transformations and Symmetry
// (c) Mathigon
// =============================================================================


import { isPalindrome, words, flatten } from '@mathigon/core';
import { Point } from '@mathigon/fermat';
import { Draggable, $N } from '@mathigon/boost';
import './components/wallpaper';

// -----------------------------------------------------------------------------

function play($step, $el, duration, score, callback) {
  const $play = $el.$('x-play-btn');
  $play.on('play', () => {
    callback();
    setTimeout(() => {
      $step.score(score);
      $play.reset();
    }, duration);
  });
}

function expandSegment($geopad, [e1, e2], line) {
  let swap = Point.distance(e1.val, line.p1) > Point.distance(e2.val, line.p1);
  $geopad.animatePoint(swap ? e2.name : e1.name, line.p1);
  $geopad.animatePoint(swap ? e1.name : e2.name, line.p2);
}

function drawShape($step, $geopad, goal, shape, expand=false) {
  // `shape` should be names of a polygon, segment or line.
  const lines = flatten(words(shape).map(s => $geopad.model[s].edges || $geopad.model[s]));

  $geopad.setActiveTool('line');

  $geopad.waitForPaths(lines, {
    onCorrect(path, i) {
      if (expand) expandSegment($geopad, path.points, lines[i]);
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

export function transformations($step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');

  play($step, $animations[0], 1000, 't1', () => {
    $images[0].animate({transform: ['none', 'translate(95px,45px) rotate(18deg) scale(1.2)']}, 1000);
  });

  play($step, $animations[1], 1000, 't2', () => {
    $images[1].animate({transform: ['none', 'translate(80px,100px) scale(0.9,1.3) rotate(-30deg)']}, 1000);
  });

  play($step, $animations[2], 1000, 't3', () => {
    $images[2].animate({transform: ['translate(-20px,40px) rotate(-30deg)', 'rotate(30deg) translate(135px,0) scale(0.8)'], rx: ['50px', 0], ry: ['50px', 0]}, 1000);
  });
}

export function rigid1($step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');
  const $lines = $step.$$('line');
  const $arrow = $step.$('.arrow-head');

  play($step, $animations[0], 1000, 't1', () => {
    $arrow.hide();
    $images[0].animate({transform: ['none', 'translate(90px,-40px)']}, 1000, 0, 'linear');
    $lines[0].enter('draw', 1000);
    $arrow.enter('fade', 400, 900);
  });

  play($step, $animations[1], 2000, 't2', () => {
    $images[1].transform = 'none';
    $lines[1].enter('draw', 1000);
    $images[1].animate({transform: 'rotate(54deg) translate(230px,-118px) scaleX(-1)'}, 1000, 1000);
  });

  play($step, $animations[2], 2000, 't3', () => {
    $images[2].transform = 'none';
    for (let i=2; i<6; ++i) $lines[i].enter('draw', 500);
    $images[2].animate({transform: 'rotate(84deg)', }, 1000, 1000);
  });
}

export function translations1($step) {
  const initial = [{x: 40, y: 40}, {x: 120, y: 0}, {x: 20, y: 20}];
  const correct = [{x: 100, y: 20}, {x: 40, y: 40}, {x: 120, y: 40}];

  $step.$$('svg').forEach(($s, i) => {
    const $polygons = $s.$$('polygon');
    $polygons[0].transform = `translate(${initial[i].x}px, ${initial[i].y}px)`;

    const drag = new Draggable($polygons[1], $s, {useTransform: true, snap: 20});
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

export function reflections($step) {
  const $geopads = $step.$$('x-geopad');

  drawShape($step, $geopads[0], 'r0', 'line0', true);
  drawShape($step, $geopads[1], 'r1', 'line1', true);
  drawShape($step, $geopads[2], 'r2', 'line2', true);
}

export function symmetry($step) {
  const $symmetries = $step.$$('.symmetry');
  const $images = $step.$$('img:nth-child(2)');

  play($step, $symmetries[0], 1500, 'play-0', () => {
    $images[0].animate({transform: ['none', 'scaleX(-1)']}, 1500);
  });

  play($step, $symmetries[1], 1500, 'play-1', () => {
    $images[1].animate({transform: ['none', 'rotate(60deg)']}, 1500);
  });
}

export function reflectionalSymmetry1($step) {
  const $geopads = $step.$$('x-geopad');

  drawShape($step, $geopads[0], 'r0', 'line0', true);
  drawShape($step, $geopads[1], 'r1', 'line1', true);
  drawShape($step, $geopads[2], 'r2', 'line2', true);
  drawShape($step, $geopads[3], 'r3', 'line3a line3b', true);
  drawShape($step, $geopads[4], 'r4', 'line4a line4b line4c line4d', true);
  drawShape($step, $geopads[5], 'r5', 'line5a line5b', true);
}

function drawThreeShapes($step) {
  const $geopads = $step.$$('x-geopad');

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
export const rotationalSymmetry2 = reflectionalSymmetry2;

export function palindromes($step) {
  const $inputs = $step.$$('input');

  for (let i=0; i<3; ++i) {
    $inputs[i].onKeyDown('enter', () => $inputs[i].blur());
    $inputs[i].on('blur', () => {
      let str = '' + $inputs[i].value;
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

export function addSymmetries($step) {
  $step.$$('.sym-sum').forEach(($s, i) => {
    $s.one('click', () => {
      $step.score('sum-' + i);
      $s.removeClass('pending');
    });
  });
}

function add(a, b) {
  if (a < 4 && b < 4) return (a + b) % 4;  // rotation + rotation
  if (a >= 4 && b >= 4) return (a - b + 4) % 4;  // reflection + reflection
  if (a > b) return 4 + ((a - b) % 4);  // reflection + rotation
  return 4 + ((a + b) % 4);  // rotation + reflection
}

function makeSquare(i, x, $parent, delay=0) {
  let $el = $N('img', {
    src: `/resources/transformations-and-symmetry/images/cube-${i}.svg`,
    style: `left: ${8 + x*70}px;`
  }, $parent);
  $el.enter('pop', 200, delay);
  return $el;
}

export function calculator($step) {
  const $buttons = $step.$$('.button');
  const $display = $step.$('.display');
  const $clear = $display.$('.clear');

  let a = null, b = null, answer = null;
  let $results = [];
  let locked = false;
  let count = 0;

  $buttons.forEach(($b, i) => {
    $b.on('click', () => {
      count += 1;
      if (count === 3) $step.score('calculate');

      if (a === null) {
        a = i;
        $results.push(makeSquare(i, 0, $display));
        $clear.enter('pop');

      } else if (b === null) {
        b = i;
        answer = add(a, b);
        $results.push(makeSquare(b, 1, $display));
        $results.push(makeSquare(answer, 2, $display, 200));

      } else if (!locked) {
        locked = true;
        setTimeout(() => locked = false, 800);

        a = answer;
        b = i;
        answer = add(a, b);

        $results.shift().exit('pop', 200);
        $results.shift().exit('pop', 200);
        $results[0].animate({left: '8px'}, 400);

        $results.push(makeSquare(b, 1, $display, 400));
        $results.push(makeSquare(answer, 2, $display, 600));
      }

    });
  });

  $clear.on('click', () => {
    for (let $r of $results) $r.exit('pop', 200);
    $results = [];
    a = b = answer = null;
    $clear.exit('pop');
  });
}

export function symmetryArithmetic($step) {
  $step.onScore('blank-2', () => $step.addHint('not-commutative'));
}

// -----------------------------------------------------------------------------

export function wallpaperGroups1($step) {
  const $symmetries = $step.$$('.symmetry');
  const $images = $step.$$('img:nth-child(2)');

  play($step, $symmetries[0], 1500, 'play-0', () => {
    $images[0].animate({transform: ['none', 'translate(56px,-34px)']}, 1500);
  });

  play($step, $symmetries[1], 1500, 'play-1', () => {
    $images[1].animate({transform: ['none', 'translateX(55px)']}, 1500);
  });
}

export function footsteps($step) {
  const $img = $step.$('img:nth-child(2)');
  $step.$('x-slider').on('move', (n) => {
    $img.css('transform', `translateX(${n/2}px) scaleY(${1-n/50})`);
  });
}

export function drawing($step) {
  const $wallpaper = $step.$('x-wallpaper');
  let switched = false;

  $wallpaper.on('draw', () => {
    setTimeout(() => $step.score('draw-' + (switched ? 2 : 1)), 500);
  });

  $wallpaper.on('switch', () => {
    switched = true;
    setTimeout(() => $step.score('switch'), 500);
  });
}

export function planets($step) {
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
