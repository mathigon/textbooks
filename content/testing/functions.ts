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

// hardcoded data... could it be simpler?
const vertices: Obj<string[]> = {
    "x": ["LineA", "Line0", "Line10", "Line16", "Line19", "Line22", "Line28", "Line30",
"Line34", "Line41", "Line42", "Line44", "Line52", "Line55"],
    "v0": ["LineA", "Line8", "Line15"],
    "v1": ["Line8", "LineB", "Line2"],
    "v2": ["Line0", "Line2", "Line1"],
    "v3": ["Line10", "Line15", "Line27"],
    "v4": ["Line27", "Line28", "Line9"],
    "v5": ["Line26", "Line9", "Line30"],
    "v6": ["LineB", "Line17", "Line24"],
    "v7": ["Line1", "Line19", "Line3"],
    "v8": ["Line3", "Line20", "Line21"],
    "v9": ["Line21", "Line18", "Line23"],
    "v10": ["Line23", "Line38", "Line4"],
    "v11": ["Line38", "Line39", "Line43"],
    "v12": ["Line39", "Line40", "Line22"],
    "v13": ["Line40", "Line41", "Line42"],
    "v14": ["Line16", "Line17", "Line18"],
    "v15": ["Line24", "Line25", "Line36"],
    "v16": ["Line31", "Line32", "Line35"],
    "v17": ["Line32", "Line33", "Line34"],
    "v18": ["Line33", "Line50", "Line51"],
    "v19": ["Line51", "Line52", "Line55"],
    "v20": ["Line49", "Line50", "Line53"],
    "v21": ["Line12", "Line35", "Line47"],
    "v22": ["Line12", "Line36", "Line37"],
    "v23": ["Line37", "Line46", "Line4"],
    "v24": ["Line47", "Line48", "Line49"],
    "v25": ["Line45", "Line48", "Line46"],
    "v26": ["Line43", "Line44", "Line45"],
    "v27": ["Line25", "Line26", "Line31"]
};
const edges: Obj<string[]> = {
    "LineA": ["x" ,"v0"],
    "LineB": ["v1", "v6"],
    "Line0": ["x", "v2"],
    "Line1": ["v2", "v7"],
    "Line2": ["v2", "v1"],
    "Line3": ["v7", "v8"],
    "Line4": ["v10", "v23"],

    "Line8": ["v0", "v1"],
    "Line9": ["v4", "v5"],
    "Line10": ["v3", "x"],

    "Line12": ["v22", "v21"],

    "Line15": ["v0", "v3"],
    "Line16": ["x", "v14"],
    "Line17": ["v14", "v6"],
    "Line18": ["v14", "v9"],
    "Line19": ["x", "v7"],
    "Line20": ["x" ,"v8"],
    "Line21": ["v8", "v9"],
    "Line22": ["x", "v12"],
    "Line23": ["v9", "v10"],
    "Line24": ["v6", "v15"],
    "Line25": ["v15", "v27"],
    "Line26": ["v27", "v5"],
    "Line27": ["v3", "v4"],
    "Line28": ["v4", "x"],

    "Line30": ["v5", "x"],
    "Line31": ["v27", "v16"],
    "Line32": ["v16", "v17"],
    "Line33": ["v18", "v17"],
    "Line34": ["v17", "x"],
    "Line35": ["v16", "v21"],
    "Line36": ["v15", "v22"],
    "Line37": ["v22", "v23"],
    "Line38": ["v10", "v11"],
    "Line39": ["v12", "v11"],
    "Line40": ["v12", "v13"],
    "Line41": ["x", "v13"],
    "Line42": ["v13", "x"],
    "Line43": ["v11", "v26"],
    "Line44": ["v26", "x"],
    "Line45": ["v26", "v25"],
    "Line46": ["v23", "v25"],
    "Line47": ["v21", "v24"],
    "Line48": ["v25", "v24"],
    "Line49": ["v24", "v20"],
    "Line50": ["v20", "v18"],
    "Line51": ["v18", "v19"],
    "Line52": ["x", "v19"],
    "Line53": ["v20", "x"],

    "Line55": ["v19", "x"],
};
/**
 * Trace a circle around the zig-zaggy track of a kri8it painting
 */
export function kri8it($section: Step) {
    // select all the [lines, paths, polylines] | *path from kri8it
    
    const $lines = $section.$$('path, line, polyline') as SVGView[];
    const $runner = $section.$('#runner') as SVGView;

    // for figuring out which is which (might be easier to just do this in Sketch)
    $lines.forEach(l => l.on('click', () => console.log(l.id)));

    const velocityInverse = 3;
    const durations = $lines.map(l => l.strokeLength * velocityInverse);

    let a2 = (edgeKey: string, reverse: boolean): AnimationResponse => {
        let edge = $lines.find(l => l.id === edgeKey)!;
        console.log("Found edge:")
        console.log(edge);

        return animate(function(p) {
            // consider which direction to send the runner
            let point = edge.getPointAt(reverse ? 1-p : p);
            let translated = point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
            $runner.setCenter(translated);
            
        }, edge.strokeLength * 3);
    }

    
    let recurse2 = (v: string, e = "") => {
        let choices = vertices[v].filter(ee => ee != e);
        let choiceEdge = choices[Math.floor(Math.random() * choices.length)];
        let edgeDirections = edges[choiceEdge];
        console.log(choices);
        console.log(choiceEdge);
        a2(choiceEdge, edgeDirections.indexOf(v) === 1).promise.then(() => {
            let nextVertices = edges[choiceEdge];
            let next = nextVertices.find(vx => vx !== v);
            if (next && next !== "x")
                recurse2(next, choiceEdge);

        });

    }
    // start from the edge
    recurse2("x");

    return;
    let a = (i: number): AnimationResponse => {
        return animate(function(p) {
            let point = $lines[i].getPointAt(p);
            let translated = point.translate(new Point(14.620133, 14)); // shift by the "translate" property of the root
            $runner.setCenter(translated);
        }, durations[i]);
    }

    // make it recursive instead of hard-coding
    let recurse = (i: number, N: number) => {
        // console.log(`i = ${i}; N = ${N}`);
        if (i >= N) return;
        a(i).promise.then(() => {
            recurse(++i, N);
        });
    }

    recurse(0, $lines.length);
}