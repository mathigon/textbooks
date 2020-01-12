// =============================================================================
// Testing File
// (?) (?) (?)
// =============================================================================

// nothing to see here, folks
import {Obj, Color} from '@mathigon/core';
import {SVGView, animate, InputView, AnimationResponse} from '@mathigon/boost';
import {Step} from '../shared/types';
import { Point } from '@mathigon/fermat';

/**
 * A modification of *race* from divisibility.
 * @param $section 
 */
export function raaace($section: Step) {

    const $svg = $section.$('svg');
    console.log($svg);

    const $button = $section.$('.lap-button')!;
    const $buttonText = $button.$('text')!;
    // select runners
    const $runners = $section.$$('circle') as SVGView[];
    console.log($runners);

    const $paths = $section.$$('.runner-path') as SVGView[];
    console.log($paths);

    // map gives us an array of children instead of the parent
    const $lapTimes = $section.$$('.lap-times').map($l => $l.children);
    console.log($lapTimes);

    let speed = [4, 6, 3];
    let duration = 12;
    let running = false;

    $button.on('click', () => {
        // pretty typical play-checking
        if (running) return;
        running = true;
        // progress to next section
        $section.score('$raaace');
        // remove all the things
        $lapTimes.forEach($r => {$r.forEach($l => { $l.exit('pop', 200); }); });

        // the good part!
        animate(function (p) {
            // for each runner...
            for (let i of [0, 1, 2]) {
                let timeElapsed = p * duration;
                let offset = timeElapsed % speed[i] / speed[i];
                let point = $paths[i].getPointAt(offset);
                $runners[i].setCenter(point);
                $runners[i].setAttr('r', 12 * (1 + point.y / 234));
            }
            $buttonText.text = Math.floor(p * duration * 10) + ' s'; // display time
        }, duration * 1000).promise.then(() => {
            setTimeout(() => {
                running = false;
                $buttonText.text = 'START';
            }, 1000);

        });

        for (let i of [0, 1]) {
            for (let x = 0; x < duration / speed[i]; ++x) {
                setTimeout(function() {
                    $lapTimes[i][x].enter('pop', 200);
                }, speed[i] * (x + 1) * 1000);
            }
        }

    })


}

const RED = '#cd0e66';
const BLUE = '#0f82f2';
const GREEN = '#22ab24';
const YELLOW = '#fd8c00';
const ORANGE = '#ea3620';

/**
 * A modification of *bridges3* from graph-theory
 */
const LOG_UNIT2 = false;
export function unit2($section: Step) {
    // BINPATTERN: mimic selector for binpatterns (NEXT MAJOR STEP)
    let g = GREEN, r = RED, b = BLUE, o = ORANGE;
    let colours: Obj<(string|Color)[]> = {
        val: Color.rainbow(8), // generates gradient
        eo: [g, r, g, r, g, r, g], // even/odd/even/odd/even/odd
        prime: [g, g, r, g, r, g, r], // 2, 3, 4, 5, 6, 7, 8  (yes.... see [y-2] below)
        size: [b, b, o, o, o, o, o] // seems kinda arbitrary
    };

    // our svg selector!!!
    let $circles = $section.$$('circle');
    if (LOG_UNIT2) console.log("got " + $circles.length + " circles!");

    function colour(x: string) {
        if (LOG_UNIT2) console.log("changed colour selector");
        $circles.forEach($c => {
            let y = +$c.attr('data-value');
            $c.css('fill', '' + colours[x][y-2]); // arrays in colours start at 2
        });
        if (x === 'eo') $section.score('dropdown'); // selecting eo advances to next
    }

    ($section.$('select') as InputView).change(colour); // not sure what this is
    colour('val'); // set the default starting value


    /// experimental...
    let $polygons = $section.$$('polygon') as SVGView[];
    for (let i of [0, 1, 2, 3]) {
        if (LOG_UNIT2) {
            console.log(`p${i}`);
            console.log($polygons[i].getPointAt(0));
            console.log($polygons[i].getPointAt(0.25));
            console.log($polygons[i].getPointAt(0.5));
            console.log($polygons[i].getPointAt(0.75));
            console.log($polygons[i].getPointAt(1));
    
            console.log($polygons[i].strokeLength);
        } 
    }
}

/**
 * Trace a circle around the zig-zaggy track of a kri8it painting
 */
export function kri8it($section: Step) {
    // select all the [lines, paths, polylines] | *path from kri8it
    
    const $lines = $section.$$('path, line, polyline') as SVGView[];
    const $runner = $section.$('#runner') as SVGView;

    // KRI8: figure out data structure for traversing between connected paths
    const velocityInverse = 3;
    const durations = $lines.map(l => l.strokeLength * velocityInverse);

    let a = (i: number): AnimationResponse => {
        return animate(function(p) {
            let point = $lines[i].getPointAt(p);
            let translated = point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
            $runner.setCenter(translated);
        }, durations[i]);
    }

    // make it recursive instead of hard-coding
    let recurse = (i: number, N: number) => {
        console.log(`i = ${i}; N = ${N}`);
        if (i >= N) return;
        a(i).promise.then(() => {
            recurse(++i, N);
        });
    }

    recurse(0, $lines.length);
}