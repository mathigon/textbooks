// =============================================================================
// Exploding Dots
// (c) Mathigon
// =============================================================================


import { Rectangle, Point, random } from '@mathigon/fermat';
import { $N, Colour } from '@mathigon/boost';
import './components/dot-machine';


export function race($step) {
  const posn = [0, 54, 76, 85, 88, 90];
  const $img = $step.$$('img');
  const $g = $step.$$('g');

  $step.$slides.on('next back', (x) => {
    $img[0].css('left', posn[x] + '%');
    $img[1].css('left', posn[x+1] + '%');
  });

  $step.onScore('blank-0', () => $g[0].enter('fade'));
  $step.onScore('blank-1', () => $g[1].enter('fade'));
  $step.onScore('slide-2', () => $g[2].enter('fade'));
  $step.onScore('slide-3', () => $g[3].enter('fade'));
}

export function dots($step) {
  const $machine = $step.$('x-dot-machine');
  const $btn = $step.$('button');

  let dStep = 0;
  $machine.on('add', ({i, stop}) => {
    if (i !== xStep + 1) {
      stop();
      $step.addHint('This is not the correct cell…', {className: 'incorrect'});
      return;
    }

    dStep = xStep + 1;
    $step.score('d' + dStep);
  });

  let xStep = 0;
  $btn.on('click', async function() {
    if (dStep <= xStep) {
      $step.addHint('Remember to add the dot/anti-dot pairs before exploding.',
          {className: 'incorrect'});
      return;
    }

    await $machine.cells[dStep].explode(10);
    await $machine.cells[dStep - 1].annihilate();
    xStep = dStep;
    $step.score('x' + xStep);
  });
}


function factors(n) {
  const start = Math.floor(Math.sqrt(n));
  for (let x = start; x >= 1; --x) {
    if (n % x === 0) {
      return [x, n/x];
    }
  }
}


export function square($step) {
  const $svg = $step.$('svg');
  const width = 320;

  $step.model.watch((state) => {
    $svg.removeChildren();
     const f = factors(state.x);
     const colours = random.shuffle(Colour.rainbow(2*state.x));
     let c = 0;

     for (let i=0; i<f[0]; ++i) {
       for (let j=0; j<f[1]; ++j) {
         const origin = new Point(i * width / f[0], j * width / f[1]);
         const r = new Rectangle(origin, width / f[0], width / f[1]).polygon.points;

         $N('polygon', {points: `${r[0].x} ${r[0].y},${r[1].x} ${r[1].y},${r[3].x} ${r[3].y}`, fill: colours[c]}, $svg);
         $N('polygon', {points: `${r[1].x} ${r[1].y},${r[2].x} ${r[2].y},${r[3].x} ${r[3].y}`, fill: colours[c + 1]}, $svg);
         c += 2;
       }
     }
  });


}
