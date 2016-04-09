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
import { isOneOf } from 'utilities';


// -----------------------------------------------------------------------------
// Biographies

export const bio = {
    eratosthenes: {
        name: "Eratosthenes of Cyrene",
        birth: "c. 276 BC",
        death: "c. 195 BC",
        img: "/resources/bio/eratosthenes.jpg",
        bio: "<p>Eratosthenes was a Greek mathematician, geographer, astronomer and poet. He first calculated the circumference of the Earth and the distance from Earth to the sun, and he drew some of the first world maps. He also discovered the Sieve of Eratosthenes, an efficient way to determine which numbers are prime.</p>"
    },
    euclid: {
        name: "Euclid of Alexandria",
        birth: "around 300 BCE",
        img: "/resources/bio/euclid.jpg",
        bio: "<p>Euclid was a Greek mathematician and is often called the <em>father of geometry</em>. He published a book <em>Elements</em> that first introduced Euclidean geometry and contained many important proofs in geometry and number theory. It was the main textbook for teaching mathematics until the 19th century. Very little else is known about his life.</p>"
    },
    goldbach: {
        name: "Christian Goldbach",
        birth: "1690",
        death: "1764",
        img: "/resources/bio/goldbach.jpg",
        bio: "<p>Christian Goldbach was a Prussian mathematician and contemporary of Euler, Leibniz and Bernoulli. He was tutor of Russian Tsar Peter II, and is remembered for his “Goldbach Conjecture“.</p>"
    },
    euler: {
        name: "Leonhard Euler",
        birth: "1707",
        death: "1783",
        img: "/resources/bio/euler.jpg",
        bio: "<p>Leonhard Euler is one the greatest mathematicians of all times. His work spans all areas of mathematics, and he wrote 80 volumes of research.</p><p>Euler was born in Switzerland and studied in Basel, but lived most of his life in Berlin, Prussia, and St. Petersburg, Russia.</p><p>Euler invented most of the modern mathematical terminology and notation, and made important discoveries in calculus, analysis, graph theory, physics, astronomy, and many other topics.</p>"
    },
    ulam: {
        name: "Stanisław Ulam",
        birth: "1909",
        death: "1984",
        img: "/resources/bio/ulam.jpg",
        bio: "<p>Stanislaw Ulam was a Polish-American mathematician. He played an important part in the American <em>Manhatten Project</em> that developed the first nuclear weapons. He also worked on rocket propulsion using nuclear pulses, and developed the <em>Monte Carlo method</em> – and important concept in statistics.</p>"
    },
    gauss: {
        name: "Carl Friedrich Gauss",
        birth: "1777",
        death: "1855",
        img: "/resources/bio/gauss.jpg",
        bio: "<p>Carl Friedrich Gauss is arguably the greatest mathematician of all times. He made groundbreaking discoveries in just about ever field of mathematics, from algebra and number theory to statistics, calculus, geometry, geology and astronomy.</p><p>According to legend, he corrected a mistake in his father‘s accounting at the age of 3, and found a way to easily add up all integers from 1 to 100 at the age of 8. He made his first important discoveries while still a teenager, and later tutored many other famous mathematicians as Professor.</p>"
    },
    riemann: {
        name: "Bernhard Riemann",
        birth: "1826",
        death: "1866",
        img: "/resources/bio/riemann.jpg",
        bio: "<p>Bernhard Riemann was a German mathematician working in the fields of analysis and number theory. He came up with the first rigorous definition of integration, studied differential geometry which laid the foundation for general relativity, and made groundbreaking discoveries regarding the distribution of prime numbers.</p>"
    }
};


// -----------------------------------------------------------------------------
// Glossary

export const gloss = {
    factor: {
        title: "Factor",
        text: "<p>A number <em>a</em> is a factor (or divisor) of a number <em>b</em>, if you can divide <em>b</em> by <em>a</em> without remainder.</p>"
    },
    divisor: {
        title: "Divisor",
        text: "<p>Divisor is just another name for <em>factor</em>.</p>"
    },
    multiple: {
        title: "Multiple",
        text: "<p>A number <em>a</em> is a multiple of a number <em>b</em>, if <em>b</em> is a factor of <em>a</em>.</p>"
    },
    prime: {
        title: "Prime Number",
        text: "<p>A prime number is an integer that has no divisors other than 1 and itself.</p>"
    },
    primefactor: {
        title: "Prime Factor",
        text: "<p>A prime factor of a number is simply a factor which is prime.</p>"
    },
    factorisation: {
        title: "Prime Factorisation",
        text: "<p>The prime factorisation of a number is a way to write it as a product of prime numbers.</p>"
    },
    fta: {
        title: "Fundamental Theorem of Arithemtic",
        text: "<p>The FTA says that every integer has a unique prime factorisation.</p>"
    },
    proof: {
        title: "Proof",
        text: "<p>A proof is a logical argument that shows beyond any doubt that a certain statement is true or false.</p>"
    },
    lcm: {
        title: "Lowest Common Multiple",
        text: "<p>The lcm of two numbers <em>a</em> and <em>b</em> is the smallest integer that is a multiple of both <em>a</em> and <em>b</em>.</p>"
    },
    gcd: {
        title: "Greatest Common Divisor",
        text: "<p>The gcd of two numbers <em>a</em> and <em>b</em> is the largest integer that is a divisor of both <em>a</em> and <em>b</em>.</p>"
    },
    cryptography: {
        title: "Cryptography",
        text: "<p>Cryptography is an area of mathematics that‘s about enciphering and deciphering secret messages.</p>"
    },
    twins: {
        title: "Twin Primes",
        text: "<p>Twin primes are pairs of prime numbers like 17 and 19 which are just 2 apart.</p>"
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
    chapter.addGloss('factor', 'multiple', 'divisor');
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

fns.primes = function(section, chapter) {
    chapter.addGloss('prime');
};

fns.primefactor = function(section, chapter) {
    chapter.addGloss('primefactor', 'factorisation', 'fta');
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

fns.eulerproof = function(section, chapter) {
    chapter.addGloss('proof');
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

fns.race = function(section, chapter) {
    chapter.addGloss('lcm');

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

fns.gcd = function(section, chapter) {
    chapter.addGloss('gcd');
    let $tiles = section.$el.find('.tiles');

    section.model.change(function() {
        let n = section.model.x;
        section.model.set('result', isOneOf(n, 1, 2, 3, 6) ? 'It works!' : 'That doesn‘t seem to fit…');

        $tiles.clear();

        for (let x=0; x<30; x+=n) {
            for (let y=0; y<18; y+=n) {
                $N('rect', { x: 40 + 10 * x, y: 40 + 10 * y, width: 10 * n, height: 10 * n,
                    stroke: '#736357', 'stroke-width': 2, fill: 'url(#tile)'}, $tiles);
            }
        }
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

fns.rsa = function(section, chapter) {
    chapter.addGloss('cryptography');
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

fns.twins = function(section, chapter) {
    chapter.addGloss('twins');
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
