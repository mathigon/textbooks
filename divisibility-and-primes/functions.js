// =============================================================================
// Mathigon | Divisibility and Primes Functions
// (c) 2016 Mathigon
// =============================================================================


import Evented from 'evented';
import { clamp } from 'utilities';
import { letterFrequency, caesarCipher } from 'cryptography';
import { $I, $$, $C, $N } from 'elements';


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

        var alphabeth = ('abcdefghijklmnopqrstuvwxyz').split('');
        var letters = { plain: [], cipher: [] };
        var letterObj = {};

        alphabeth.each(function(l, i) {
            letterObj[l] = { cols: [] };
            if (options.chartCols)  letterObj[l].cols.push(options.chartCols[i]);
            if (options.plainCols)  letterObj[l].cols.push(options.plainCols[i]);
            if (options.cipherCols) letterObj[l].cols.push(options.cipherCols[i]);
            if (options.realBars)   options.realBars[i].css('height', letterFrequency(l)*750 + '%');
        });

        function update($container, current, other, bars) {
            return function(text) {
                var caret = $container.isTextarea ? $container.cursor : 0;

                $container.html('');
                letters[current] = [];

                text.split('').each(function(l) {
                    if (l === '\xA0') {
                        $container.$el.appendChild(document.createTextNode('\xA0'));
                    } else {
                        letters[current].push($N('span', { html: l, class: 'cipher-letter' }, $container));
                    }
                });

                letters[current].each(function(l, i) {
                    var letter = l.text().toLowerCase();

                    l.on('mouseenter', function() {
                        l.addClass('hover');
                        letters[other][i].addClass('hover');
                        letterObj[letter].cols.each(function(x) { x.addClass('hover'); });
                    });

                    l.on('mouseleave', function() {
                        l.removeClass('hover');
                        letters[other][i].removeClass('hover');
                        letterObj[letter].cols.each(function(x) { x.removeClass('hover'); });
                    });
                });

                if ($container.isTextarea) $container.cursor = caret;

                if (bars) {
                    var freq = cipherLetterFreq(text);
                    alphabeth.each(function(l, i) {
                        bars[i].css('height', freq[i]/text.length*750 + '%');
                    });
                }
            };
        }

        this.listen('plain',  update($plain,  'plain', 'cipher', options.plainBars));
        this.listen('cipher', update($cipher, 'cipher', 'plain', options.realBars));  // TODO
    }
}


// -----------------------------------------------------------------------------
// Functions

const fns = {};

fns.C_CAESAR = function(section) {

    let $plain = $C('plain-text', section.$el);
    let $cipher = $C('cipher-text', section.$el);

    var codeBox = new CodeBox($plain, $cipher, {
        chartCols:  section.$el.findAll('.freq-table-chart  .freq-col'),
        plainCols:  section.$el.findAll('.freq-table-plain  .freq-col'),
        cipherCols: section.$el.findAll('.freq-table-cipher .freq-col'),
        plainBars:  section.$el.findAll('.letter-bar.plain'),
        realBars:   section.$el.findAll('.letter-bar.real')
    });

    var shift = 0;
    var text = '';

    $plain.on('input', function() {
        text = $plain.$el.textContent;
        codeBox.set('plain', text);
        codeBox.set('cipher', caesarCipher(text, shift, 26));
    });

    $I('letter-slider').on('move', function(x) {
        shift = clamp(Math.round(-x/26) % 26, 0, 25);
        codeBox.set('cipher', caesarCipher(text, shift, 26));
    });

};

export const sections = fns;
