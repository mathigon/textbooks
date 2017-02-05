// =============================================================================
// Mathigon.org | Codes and Ciphers
// (c) 2017 Mathigon
// =============================================================================


import Evented from 'evented';
import { clamp } from 'utilities';
import { letterFrequency, caesarCipher } from 'cryptography';
import { $, $$, $N } from 'elements';


// -----------------------------------------------------------------------------
// Biographies

export const bio = { };


// -----------------------------------------------------------------------------
// Glossary

export const gloss = { };


// -----------------------------------------------------------------------------
// Hints

export const hints = { };


// -----------------------------------------------------------------------------
// Utilities and CLasses

class CodeBox extends Evented {
  constructor($plain, $cipher, options) {
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
        let caret = $container.isTextarea ? $container.cursor : 0;

        $container.html('');
        letters[current] = [];

        text.split('').forEach(function(l) {
          if (l === '\xA0') {
            $container.$el.appendChild(document.createTextNode('\xA0'));
          } else {
            letters[current].push($N('span', { html: l, class: 'cipher-letter' }, $container));
          }
        });

        letters[current].forEach(function(l, i) {
          let letter = l.text().toLowerCase();

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

        if ($container.isTextarea) $container.cursor = caret;

        if (bars) {
          let freq = cipherLetterFreq(text);
          alphabet.forEach(function(l, i) {
            bars[i].css('height', freq[i]/text.length*750 + '%');
          });
        }
      };
    }

    this.on('plain',  update($plain,  'plain', 'cipher', options.plainBars));
    this.on('cipher', update($cipher, 'cipher', 'plain', options.realBars));  // TODO
  }
}


// -----------------------------------------------------------------------------
// Functions

const fns = {};

fns.caesar_cipher = function(section) {

  let $plain = $('.plain-text', section.$el);
  let $cipher = $('.cipher-text', section.$el);

  let codeBox = new CodeBox($plain, $cipher, {
    chartCols:  section.$el.findAll('.freq-table-chart  .freq-col'),
    plainCols:  section.$el.findAll('.freq-table-plain  .freq-col'),
    cipherCols: section.$el.findAll('.freq-table-cipher .freq-col'),
    plainBars:  section.$el.findAll('.letter-bar.plain'),
    realBars:   section.$el.findAll('.letter-bar.real')
  });

  let shift = 0;
  let text = '';

  $plain.on('input', function() {
    text = $plain.text;
    codeBox.set('plain', text);
    codeBox.set('cipher', caesarCipher(text, shift, 26));
  });

  $('#letter-slider').on('move', function(x) {
    shift = clamp(Math.round(-x/26) % 26, 0, 25);
    codeBox.set('cipher', caesarCipher(text, shift, 26));
  });

};

export const sections = fns;
