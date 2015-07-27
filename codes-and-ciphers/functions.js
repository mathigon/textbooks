// ================================================================================================
// MATHIGON ACTIVE
// CODES AND CIPHER
// ================================================================================================


/* jshint curly: false */
/* global window, $, $C, $T, $N, $$N, $$, d3 */

window.MA = window.MA || {};
window.MA.bfn = window.MA.bfn || {};


// ================================================================================================
// BIOGRAPHIES AND GLOSSARY

MA.bio = {
    euler: {
        name: "Leonhard Euler",
        birth: "1707",
        death: "1783",
        img: "resources/bio/euler.jpg",
        bio: "<p>Leonhard Euler is one the greatest mathematicians of all times. His work spans all areas of mathematics, and wrote 80 volumes of research.</p><p>Euler was born in Switzerland and studied in Basel, but lived most of his life in Berlin, Prussia, and St. Petersburg, Russia.</p><p>Euler invented most of the modern mathematical terminology and notation, and made important discoveries in calculus, analysis, graph theory, physics, astronomy, and many other topics.</p>"
    }
};

// ------------------------------------------------------------------------------------------------

MA.gloss = {
    complete: {
        title: "Complete Graph",
        text: "<p>In complete graphs, every vertex is connected to every other vertex. A complete graph with <em>n</em> vertices has <span class='frac white'><span><em>n</em> &times; (<em>n</em> &#8211; 1)</span><span>2</span></span> edges.</p>"
    }
};



// ================================================================================================
// HINTS

MA.hints = {
};


// ================================================================================================


M.$.prototype.getCaret = function() {
    if (!window.getSelection) return 0;

    var sel = window.getSelection();

    if (sel.rangeCount > 0) {
        var range = sel.getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(this.$el);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        return preCaretRange.toString().length;
    }
}

M.$.prototype.setCaret = function(offset) {
    var $el = this.$el;

    var parents = [this.$el]
    var node = $el.childNodes[0];

    while (node) {
        // Elements like <span> have further children
        if (node.childNodes.length) {
            parents.push(node);
            node = node.childNodes[0]

        // Text Node
        } else if (offset > node.length) {
            offset -= node.length;
            node = node.nextSibling || parents.pop().nextSibling

        // Final Text Node
        } else {
            var range = document.createRange();
            range.setStart(node, offset);
            range.collapse(true);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            return;
        }
    }
}


// ================================================================================================
// SECTION FUNCTIONS

var CodeBox = M.Class.extend({
    init: function($plain, $cipher, options) {

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
            if (options.realBars)   options.realBars[i].css('height', M.letterFreqency(l)*750 + '%');
        });

        function update($container, current, other, bars) {
            return function(text) {
                var caret = $container.isTextarea ? $container.getCaret() : 0;    

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

                if ($container.isTextarea) $container.setCaret(caret);

                if (bars) {
                    var freq = M.cipherLetterFreq(text);
                    alphabeth.each(function(l, i) {
                        bars[i].css('height', freq[i]/text.length*750 + '%')
                    });
                }
            }
        };

        this.listen('plain',  update($plain,  'plain', 'cipher', options.plainBars));
        this.listen('cipher', update($cipher, 'cipher', 'plain', options.cipherBars));
    }
})




// ================================================================================================
// SECTION FUNCTIONS

MA.bfn.CC_caesar = function(section, chapter) {

    $plain = $C('plain-text', section.$el);
    $cipher = $C('cipher-text', section.$el);

    var codeBox = new CodeBox($plain, $cipher, {
        chartCols:  $$('.freq-table-chart  .freq-col', section.$el),
        plainCols:  $$('.freq-table-plain  .freq-col', section.$el),
        cipherCols: $$('.freq-table-cipher .freq-col', section.$el),
        plainBars:  $$('.letter-bar.plain', section.$el),
        realBars:   $$('.letter-bar.real', section.$el),
    });

    var slider = new M.Gallery($I('letter-slider', section.$el));

    var shift = 0;
    var text = ''

    $plain.on('input', function() {
        text = $plain.$el.textContent;
        codeBox.set('plain', text);
        codeBox.set('cipher', M.caesarCypher(text, shift, 26));
    });

    slider.on('move', function(x) {
        shift = M.bound(Math.round(-x/26) % 26, 0, 25)
        codeBox.set('cipher', M.caesarCypher(text, shift, 26));
    });

};
