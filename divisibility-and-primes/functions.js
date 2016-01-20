// =============================================================================
// Mathigon | Divisibility and Primes Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$ } from 'elements';
import { total } from 'arrays';


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

fns.divisibility2 = function(section) {
    numberGrid(section.$el.find('.number-grid'), 1000, 'blue', i => (i % 2 === 0));
};

fns.divisibility5 = function(section) {
    numberGrid(section.$el.find('.number-grid'), 1000, 'green', i => (i % 5 === 0));
};

fns.divisibility31 = function(section) {
    section.model.load({ digitSum });
};

fns.divisibility32 = function(section) {
    numberGrid(section.$el.find('.number-grid'), 1000, 'red', i => (i % 3 === 0));
};

fns.divisibility6 = function(section) {

    let buttons = section.$el.findAll('.btn');

    buttons[0].on('click', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'yellow', i => (i % 2 === 0));
    });

    buttons[1].on('click', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'blue', i => (i % 3 === 0));
    });

    section.blanks[0].on('valid', function() {
        numberGrid(section.$el.find('.number-grid'), 1000, 'green', i => (i % 6 === 0));
    });

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



export const sections = fns;
