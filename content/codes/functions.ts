// =============================================================================
// Codes and Ciphers
// (c) Mathigon
// =============================================================================


import {EventTarget, delay} from '@mathigon/core';
// import {clamp, letterFrequency, caesarCipher, cipherLetterFreq} from '@mathigon/fermat';
// import {$, $N} from '@mathigon/boost';
import {Step} from '../shared/types';
import {ElementView, InputView} from '@mathigon/boost';

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

// -----------------------------------------------------------------------------
// Utilities and CLasses

class CodeBox extends EventTarget {
  /* constructor($plain: any, $cipher: any, options: any) {
    super();

    $plain.isTextarea = $plain.is('[contenteditable]');
    $cipher.isTextarea =  $cipher.is('[contenteditable]');

    let alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
    let letters = { plain: [], cipher: [] };
    let letterObj = {};

    alphabet.forEach(function(l, i) {
      letterObj[l] = { cols: [] };
      if (options.chartCols)  letterObj[l].cols.push(options.chartCols[i]);
      if (options.plainCols)  letterObj[l].cols.push(options.plainCols[i]);
      if (options.cipherCols) letterObj[l].cols.push(options.cipherCols[i]);
      if (options.realBars)   options.realBars[i].css('height', letterFrequency(l)*750 + '%');
    });

    function update($container, current, other, bars) {
      return function(text) {
        // let caret = $container.isTextarea ? getCursor($container) : 0;

        $container.html = '';
        letters[current] = [];

        text.split('').forEach(function(l) {
          if (l === '\xA0') {
            $container.$el.appendChild(document.createTextNode('\xA0'));
          } else {
            letters[current].push($N('span', { html: l, class: 'cipher-letter' }, $container));
          }
        });

        letters[current].forEach(function(l, i) {
          let letter = l.text.toLowerCase();

          l.on('mouseenter', function() {
            l.addClass('hover');
            letters[other][i].addClass('hover');
            letterObj[letter].cols.forEach(function(x) { x.addClass('hover'); });
          });

          l.on('mouseleave', function() {
            l.removeClass('hover');
            letters[other][i].removeClass('hover');
            letterObj[letter].cols.forEach(function(x) { x.removeClass('hover'); });
          });
        });

        // if ($container.isTextarea) $container.cursor = caret;

        if (bars) {
          let freq = cipherLetterFreq(text);
          alphabet.forEach(function(l, i) {
            bars[i].css('height', freq[i]/text.length*750 + '%');
          });
        }
      };
    }

    this.on('plain',  update($plain,  'plain', 'cipher', options.plainBars));
    this.on('cipher', update($cipher, 'cipher', 'plain', options.realBars));
  } */
}


// -----------------------------------------------------------------------------
// Section Functions

export function caesar_cipher() {
  /* let $plain = $step.$('.plain-text')!;
  let $cipher = $step.$('.cipher-text')!;

  let codeBox = new CodeBox($plain, $cipher, {
    chartCols:  $step.$$('.freq-table-chart  .freq-col'),
    plainCols:  $step.$$('.freq-table-plain  .freq-col'),
    cipherCols: $step.$$('.freq-table-cipher .freq-col'),
    plainBars:  $step.$$('.letter-bar.plain'),
    realBars:   $step.$$('.letter-bar.real')
  });

  let shift = 0;
  let text = '';

  $plain.on('input', function() {
    text = $plain.text;
    codeBox.trigger('plain', text);
    codeBox.trigger('cipher', caesarCipher(text, shift));
  });

  $('#letter-slider')!.on('move', function(x) {
    shift = clamp(Math.round(-x/26) % 26, 0, 25);
    codeBox.trigger('cipher', caesarCipher(text, shift));
  }); */
}
