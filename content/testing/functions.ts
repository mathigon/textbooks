// =============================================================================
// Testing File
// (?) (?) (?)
// =============================================================================

// nothing to see here, folks
import {Obj, Color} from '@mathigon/core';
import {SVGView, animate, InputView} from '@mathigon/boost';
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
    console.log($section);
    console.log($section.$('svg'));

    // select all the [lines, paths, polylines] | *path from kri8it
    // KRI8: join all paths, lines, polylines into one (how? Arrays.join? or something?)
    const $lines = $section.$$('path') as SVGView[];
    console.log(`found ${$lines.length} lines`);
    console.log($lines);
    const $runner = $section.$('#runner') as SVGView;
    console.log($runner);

    // KRI8: figure out data structure for traversing from path to path
    // must know which end of the path we're at
    // could use vertices?
    const randPaths = [3, 4, 5]; // three "random" paths

    const velocity = 3;
    const durations = randPaths.map(i => $lines[i].strokeLength * velocity);
    const totalDuration = durations.reduce((d, acc) => d + acc);
    // DONE: make an animation that is dependent on the length of the *path

    // KRI8: make it recursive instead of hard-coding
    animate(function (p) {
        let timeElapsed = p * durations[0];
        let point = $lines[randPaths[0]].getPointAt(p);
        // KRI8: why is it not centered on the line?
        point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
        $runner.setCenter(point);
    }, durations[0]).promise.then(() => {
        console.log("DONE 1");

        animate(function(p) {
            let timeElapsed = p * durations[1];
            let point = $lines[randPaths[1]].getPointAt(p);
            point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
            $runner.setCenter(point);
        }, durations[1]).promise.then(() => {
            console.log("DONE 2");

            animate(function(p) {
                let timeElapsed = p * durations[2];
                let point = $lines[randPaths[2]].getPointAt(p);
                point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
                $runner.setCenter(point);
            }, durations[2]).promise.then(() => {
                console.log("DONE 3");
            });

        });

    });
}