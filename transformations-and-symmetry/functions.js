// =============================================================================
// Transformations and Symmetry
// (c) Mathigon
// =============================================================================


import './components/wallpaper';
import { Draggable, $N } from '@mathigon/boost';

export function transformations($step) {
  const $play = $step.$$('.play-btn');
  const $image = $step.$$('.image');

  $play[0].on('click', () => {
    $play[0].exit('pop');
    $image[0].animate({transform: ['none', 'translate(95px,45px) rotate(18deg) scale(1.2)']}, 1000, 500);
    setTimeout(() => $step.score('t1'), 1500);
    setTimeout(() => $play[0].enter('pop'), 2000);
  });

  $play[1].on('click', () => {
    $play[1].exit('pop');
    $image[1].animate({transform: ['none', 'translate(80px,100px) scale(0.9,1.3) rotate(-30deg)']}, 1000, 500);
    setTimeout(() => $step.score('t2'), 1500);
    setTimeout(() => $play[1].enter('pop'), 2000);
  });

  $play[2].on('click', () => {
    $play[2].exit('pop');
    $image[2].animate({transform: ['translate(-20px,40px) rotate(-30deg)', 'rotate(30deg) translate(135px,0) scale(0.8)'], rx: ['50px', 0], ry: ['50px', 0]}, 1000, 500);
    setTimeout(() => $step.score('t3'), 1500);
    setTimeout(() => $play[2].enter('pop'), 2000);
  });
}

export function rigid1($step) {
  const $play = $step.$$('.play-btn');
  const $image = $step.$$('.image');
  const $lines = $step.$$('line');

  $play[0].on('click', () => {
    $play[0].exit('pop');
    $image[0].animate({transform: ['none', 'translate(90px,-40px)']}, 1000, 500);
    $lines[0].enter('draw', 1000, 500);
    setTimeout(() => $step.score('t1'), 1500);
    setTimeout(() => $play[0].enter('pop'), 2000);
  });

  $play[1].on('click', () => {
    $play[1].exit('pop');
    $lines[0].enter('draw', 1000, 500);
    $image[1].animate({transform: ['none', 'rotate(54deg) translate(230px,-118px) scaleX(-1)']}, 1000, 1500);
    setTimeout(() => $step.score('t2'), 2500);
    setTimeout(() => $play[1].enter('pop'), 3000);
  });

  $play[2].on('click', () => {
    $play[2].exit('pop');
    for (let i=2; i<6; ++i) $lines[i].enter('draw', 500, 500);
    $image[2].animate({transform: 'translate(-202px,-71px) rotate(-84deg)', }, 1000, 1000);
    setTimeout(() => $step.score('t3'), 2000);
    setTimeout(() => $play[2].enter('pop'), 2500);
  });
}

export function translations1($step) {
  const $svgs = $step.$$('x-geopad svg');
  const $paths = $step.$$('path.fill');

  let d1 = new Draggable($paths[0], $svgs[0], '', 10, true, 20);
  d1.on('move', e => console.log(e));
  console.log(d1);
}

export function symmetry($step) {
  const $play = $step.$$('.play-btn');
  const $images = $step.$$('img:nth-child(2)');

  $play[0].on('click', () => {
    $play[0].exit('pop');
    $images[0].animate({transform: ['none', 'scaleX(-1)']}, 2000, 500);
    setTimeout(() => {
      $play[0].enter('pop');
      $step.score('play-0')
    }, 2500);
  });

  $play[1].on('click', () => {
    $play[1].exit('pop');
    $images[1].animate({transform: ['none', 'rotate(60deg)']}, 2000, 500);
    setTimeout(() => {
      $play[1].enter('pop');
      $step.score('play-1')
    }, 2500);
  });
}

// -----------------------------------------------------------------------------

function addSymmetry(a, b) {
  if (a < 4 && b < 4) return (a + b) % 4;  // rotation + rotation
  if (a >= 4 && b >= 4) return (a - b + 4) % 4;  // reflection + reflection
  if (a > b) return 4 + ((a - b) % 4);  // reflection + rotation
  return 4 + ((a + b) % 4);  // rotation + reflection
}

function makeSquare(i, x, $parent) {
  let $el = $N('img', {
    src: `/resources/transformations-and-symmetry/images/cube-${i}.svg`,
    style: `transform: translateX(${x}px)`
  }, $parent);
  // $el.enter('pop');
  return $el;
}

export function calculator($step) {
  const $buttons = $step.$$('.button');
  const $display = $step.$('.display');

  let a = null, b = null, answer = null;
  const $results = [];

  $buttons.forEach(($b, i) => {
    $b.on('click', () => {

      if (a === null) {
        a = i;
        $results.push(makeSquare(i, 0, $display));

      } else if (b === null) {
        b = i;
        answer = addSymmetry(a, b);
        $results.push(makeSquare(b, 60, $display));
        $results.push(makeSquare(answer, 120, $display));

      } else {
        a = answer;
        b = i;
        answer = addSymmetry(a, b);

        $results.shift().remove();
        $results.shift().remove();
        $results[0].animate({transform: 'translateX(0)'});

        setTimeout(() => {
          $results.push(makeSquare(b, 60, $display));
          $results.push(makeSquare(answer, 120, $display));
        }, 400);
      }

    });
  });


  // TODO clear button
}

// -----------------------------------------------------------------------------

export function wallpaperGroups($step) {
  const $play = $step.$$('.play-btn');
  const $images = $step.$$('img:nth-child(2)');

  $play[0].on('click', () => {
    $play[0].exit('pop');
    $images[0].animate({transform: ['none', 'translate(56px,-34px)']}, 2000, 500);
    setTimeout(() => {
      $play[0].enter('pop');
      $step.score('play-0')
    }, 2500);
  });

  $play[1].on('click', () => {
    $play[1].exit('pop');
    $images[1].animate({transform: ['none', 'translateX(55px)']}, 2000, 500);
    setTimeout(() => {
      $play[1].enter('pop');
      $step.score('play-1')
    }, 2500);
  });

}

export function footsteps($step) {
  const $img = $step.$('img:nth-child(2)');
  $step.$('x-slider').on('move', (n) => {
    $img.css('transform', `translateX(${n/2}px) scaleY(${1-n/50})`);
    if (n >= 90) $step.score('slider');
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

// -----------------------------------------------------------------------------

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
