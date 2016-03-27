// =============================================================================
// Mathigon | Divisibility and Primes Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$ } from 'elements';
import { total } from 'arrays';
import { animate } from 'animate';


// -----------------------------------------------------------------------------
// Biographies

export const bio = { };


// -----------------------------------------------------------------------------
// Glossary

export const gloss = {
    factor: {
        title: "Factor",
        text: "<p>A number A is a factor (or divisor) of a number B, if you can divide B by A without remainder.</p>"
    },
    multiple: {
        title: "Multiple",
        text: "<p>A number A is a multiple (or divisor) of a number B, if you can divide A by B without remainder.</p>"
    }
};


// -----------------------------------------------------------------------------
// Hints

export const hints = { };


// -----------------------------------------------------------------------------
// Shared Utilities and Classes

function numberGrid($grid, delay, className, filter) {
    $grid.children().forEach(function($i) {
        if (!filter(+$i.text)) return;
        setTimeout(function() { $i.addClass(className); }, delay);
        delay += 80;
    });
}

function digitSum(n) {
    return total(n.toString().split('').map(x => +x));
}


// -----------------------------------------------------------------------------
// Functions

const fns = {};

fns.divisibility1 = function(section, chapter) {
    chapter.addGloss('factor', 'multiple');
};

fns.divisibility2 = function(section) {
    section.on('load', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'blue', i => (i % 2 === 0));
    });
};

fns.divisibility5 = function(section) {
    section.on('load', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'green', i => (i % 5 === 0));
    });
};

fns.divisibility31 = function(section) {
    section.on('load', function() {
        section.model.load({ digitSum });
    });
};

fns.divisibility32 = function(section) {
    section.on('load', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'red', i => (i % 3 === 0));
    });
};

fns.divisibility6 = function(section) {

    section.goals.push('btn2', 'btn3');

    section.on('score-btn2', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'yellow', i => (i % 2 === 0));
    });

    section.on('score-btn3', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'blue', i => (i % 3 === 0));
    });

    section.on('score-blank-0', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'green', i => (i % 6 === 0));
    });

    let buttons = section.$el.findAll('.btn');
    buttons[0].on('click', function() { section.score('btn2'); });
    buttons[1].on('click', function() { section.score('btn3'); });
};

fns.eratosthenes = function(section) {

    section.slides.on('next', function(x) {

    });

};





function isPrime(n) {
    if (isNaN(n) || n%1 || n<2) return false;
    if (n % 2 === 0) return (n == 2);
    if (n % 3 === 0) return (n == 3);
    var m=Math.sqrt(n);
    for (var i=5;i<=m;i+=6) {
        if (n%i === 0)     return false;
        if (n%(i+2) === 0) return false;
    }
    return true;
}



fns.primeTest = function(section) {
    let $input = section.$el.find('input')

    $input.on('blur', function() {

        let v = +$input.value;

        section.model.set('isPrime', isPrime(v));



    });
};



fns.race = function(section) {

    let $runners = section.$el.findAll('circle');
    let $paths = section.$el.findAll('.runner-path');
    let pathLengths = $paths.map(p => p._el.getTotalLength());
    let $lapTimes = section.$el.findAll('.lap-times').map($l => $l.children());

    let speed = [6, 4];
    let duration = 12;

    section.$el.find('svg').on('click', function() {
        // $play.exit('pop', 200);
        $lapTimes.forEach($g => { $g.forEach($l => { $l.exit('pop', 200); }); });

        for (let i of [0, 1]) {
            animate(function(p) {
                let offset = ((p * duration) % speed[i]) / speed[i];
                let point = $paths[i]._el.getPointAtLength(pathLengths[i] * offset);
                $runners[i].attr('cx', point.x);
                $runners[i].attr('cy', point.y);
            }, duration * 1000);
            for (let x = 0; x < duration/speed[i]; ++x) {
                setTimeout(function() {
                    $lapTimes[i][x].enter('pop', 200);
                }, speed[i] * (x+1) * 1000);
            }
        }

        /* setTimeout(function() {
            $play.enter('pop', 200);
        }, duration); */
    });

};



export const sections = fns;
