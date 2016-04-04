// =============================================================================
// Mathigon | Divisibility and Primes Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $N } from 'elements';
import { total, sortByFn } from 'arrays';
import { animate } from 'animate';
import thread from 'thread';
import { numberFormat } from 'arithmetic';
import { isPrime, lcm, goldbach, generatePrime } from 'number-theory';


// -----------------------------------------------------------------------------
// Biographies

export const bio = {
    eratosthenes: {
        name: "Eratosthenes of Cyrene",
        birth: "around 300 BCE",
        img: "/resources/bio/eratosthenes.jpg",
        bio: ""
    },
    euclid: {
        name: "Euclid of Alexandria",
        birth: "around 300 BCE",
        img: "/resources/bio/euclid.jpg",
        bio: ""
    },
    goldbach: {
        name: "Christian Goldbach",
        birth: "around 300 BCE",
        img: "/resources/bio/euclid.jpg",
        bio: ""
    },
    euler: {
        name: "Leonhard Euler",
        birth: "around 300 BCE",
        img: "/resources/bio/euclid.jpg",
        bio: ""
    }
};


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
    let buttons = section.$el.findAll('.btn');
    let $grid = section.$el.find('.number-grid');

    section.goals.push('btn2', 'btn3');

    section.on('score-btn2', function() {
        buttons[0].exit('pop');
        numberGrid($grid, 1000, 'yellow', i => (i % 2 === 0));
    });

    section.on('score-btn3', function() {
        buttons[1].exit('pop');
        numberGrid($grid, 1000, 'blue', i => (i % 3 === 0));
    });

    section.on('score-blank-0', function() {
        $grid.children().forEach($el => { $el.removeClass('yellow blue'); });
        numberGrid($grid, 1000, 'green', i => (i % 6 === 0));
    });

    buttons[0].on('click', function() { section.score('btn2'); });
    buttons[1].on('click', function() { section.score('btn3'); });
};

fns.eratosthenes = function(section) {

    let $grid = section.$el.find('.number-grid');

    section.slides.on('next', function(x) {
        switch(x) {
            case 1:
                section.$el.find('.number-cell').addClass('off'); break;
            case 2:
                numberGrid($grid, 1000, 'red', i => (i % 2 === 0));
                numberGrid($grid, 1000, 'off',  i => (i > 2 && i % 2 === 0)); break;
            case 3:
                numberGrid($grid, 1000, 'blue', i => (i % 3 === 0));
                numberGrid($grid, 1000, 'off',  i => (i > 3 && i % 3 === 0)); break;
            case 4:
                numberGrid($grid, 1000, 'green', i => (i % 5 === 0));
                numberGrid($grid, 1000, 'off',  i => (i > 5 && i % 5 === 0)); break;
        }
    });

    section.on('score-blank-0', function() {
        numberGrid($grid, 1000, 'yellow', i => (i % 7 === 0));
        numberGrid($grid, 1000, 'off',  i => (i > 7 && i % 7 === 0));
    });

};



fns.primeTest = function(section) {
    let $input = section.$el.find('input');

    $input.on('blur', function() {
        let v = +$input.value;

        thread(isPrime, v).then(function({ data, time }) {
            section.model.set('result', data ? 'is prime' : 'is not prime');
            section.model.set('time', Math.round(time));
        });
    });
};



fns.primeGenerator = function(section) {

    section.$el.find('button').on('click', function() {
        let d = +section.model.d;

        thread(generatePrime, d, 10000).then(function({ data, time }) {
            section.model.set('result', numberFormat(data));
            section.model.set('time', Math.round(time));
        });
    });
};


fns.ulam = function(section) {
    let $cells = section.$el.findAll('.number-cell');
    sortByFn($cells, function($c) { return +$c.text; });

    $cells.forEach($c => { $c.css('visibility', 'hidden'); });

    section.on('load', function() {
        $cells.forEach(($c, i) => {
            setTimeout(function() { $c.enter('pop'); }, i * 80);
        });
    });

    section.subsections[0].on('show', function() {
        let delay = 1;
        $cells.forEach($c => {
            if (!isPrime(+$c.text)) return;
            setTimeout(function() { $c.addClass('red'); }, delay * 80);
            delay += 1;
        });
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


fns.cicadas = function(section) {
    section.addGoals('bound-low', 'bound-high');

    section.model.set('isPrime', isPrime);
    section.model.set('lcm', lcm);

    let $highlight = section.$el.find('rect');
    let $rects = section.$el.findAll('rect').slice(1);
    $rects.forEach($r => { $r.hide(); });

    section.model.change(function() {
        let n = section.model.n;
        $rects[n-4].show();
        $highlight.attr('x', (n-4) * 26);

        if (n == 4) section.score('bound-low');
        if (n == 20) section.score('bound-high');
    });

    section.onScore('bound-low bound-high', function() {
        $rects.forEach($r => { $r.show(); });
    });
};


fns.goldbach = function(section) {
    let $input = section.$el.find('input');

    $input.on('blur', function() {
        let v = +$input.value;

        // hard: 12345678902468024
        thread(goldbach, v, 5000).then(function({ data, time }) {
            section.model.set('n', v);
            section.model.set('sum', data);
            section.model.set('time', Math.round(time));
        });
    });
};

fns.riemann = function(section) {

    let dx = 680/1000;
    let dy = 280/170;

    let y = 280;
    let points = [{ x: 0, y }];

    for (let i = 1; i <= 1000; ++i) {
        if (isPrime(i)) {
            points.push({ x: (i-1) * dx, y });
            y -= dy;
            points.push({ x: (i-1) * dx, y });
        }
    }

    let $pi = section.$el.find('.pi');
    $pi.points = points;

    let $smallPrimes = section.$el.find('.small-primes');
    [3, 5, 7, 11, 13, 17, 19, 23, 29].forEach(function(p, i) {
        $N('line', { x1: (p-1) * dx, y1: 280, x2: (p-1) * dx,
            y2: 280 - dy * (i+1) }, $smallPrimes);
    });

    let $numbers = section.$el.find('.numbers');
    for (let i = 2; i < 30; ++i) {
        $N('text', { html: i, x: (i-1) * dx * 34, y: 298, 'class': isPrime(i) ? 'prime' : '' }, $numbers);

    }

    let fn = [];
    for (let i = 3; i <= 1000; ++i) {
        fn.push({ x: (i-1) * dx, y: 280 - dy * i / Math.log(i) });
    }

    let $log = section.$el.find('.log');
    $log.points = fn;

    let $svg = section.$el.find('svg');
    $svg.on('click', function() { $svg.toggleClass('zoom'); });


};




export const sections = fns;
