// =============================================================================
// Draw Graph Component
// (c) Mathigon
// =============================================================================

import {$N, CustomElementView, ElementView, register, SVGView, slide} from '@mathigon/boost';
import { last } from '@mathigon/core';
import { Point } from '@mathigon/euclid';
import {clamp, lerp} from '@mathigon/fermat';
import { CoordinateSystem, Step } from '../types';

// TODO: Import d3 helpers for curvy paths
// import { path as d3path, line as d3line, curveMonotoneX } from 'd3';

type PlotPoint = {
    point: Point,
    position: Point,
    $el: SVGView,
}

type HintPoint = {
    x: number,
    hint: string,
    relevanceThresholdDistance?: number,
}

function unlerp(a: number, b: number, t: number) {
    return (t-a)/(b-a);
}

@register('x-draw-graph')
export class DrawGraph extends CustomElementView {
    private $graph!: CoordinateSystem;

    private points: PlotPoint[] = [];
    private hintPoints: HintPoint[] = [];
    private scored: boolean = false;

    private $step?: Step;
    private scoreThreshold: number = 0;

    private solutionFunction!: (x: number) => number;
    private $solutionPlot!: ElementView;

    private $submitButton!: ElementView;

    private $scoreContainer!: ElementView;
    private $scores!: ElementView[];

    private $judgeText!: ElementView;

    ready() {
        // Set up judge text
        this.$judgeText = this.$('.judge-text')!;
        const refreshJudgeText = () => {
            if (this.points.length < 2)
                this.$judgeText.text = 'Add points to your graph.';
            else if (!this.scored)
                this.$judgeText.text = 'Judges are ready!';
        }
        refreshJudgeText();

        // Set up score card container
        this.$scores = [];
        this.$scoreContainer = this.$('.scores')!;
        this.hideScoreCards();

        // Create score cards
        for (let i = 0; i < 3; i++) {
            const $score = $N('div', {style: `transition: ${0.2*(i+1)}s;`}, this.$scoreContainer);
            $N('div', {}, $score);
            this.$scores.push($score);
        }
        
        // Set up submit button
        this.$submitButton = this.$('button')!;
        this.$submitButton.on('click', this.submit.bind(this));
        this.refreshSubmitButton();

        // Set up graph
        this.$graph = this.$('x-coordinate-system') as CoordinateSystem;
        
        const $svg = this.$graph.$svg;
        const $overlay = $svg.$('.overlay');
        const $plotPath = $N('path', {class: 'plot-path'}, $overlay);
        const $plotPoints = $N('g', {class: 'plot-points'}, $overlay);

        const originPosition = this.$graph.toViewportCoords(new Point(0, 0));

        let $dragPoint: SVGView | null = null;

        const redrawPath = () => {
            this.points.sort((a, b) => a.point.x-b.point.x);

            last(this.$graph.$svg.$('.plot')!.children)?.remove();

            this.$graph.drawLinePlot(this.points.map(p => p.point));

            // TODO: Curvy paths
//            const plotPath = d3line().curve(curveMonotoneX);
//            $plotPath.setAttr('d', plotPath(this.points.map(p => [p.position.x, p.position.y])));  
        }

        let engagingPoint = false;
        let placingPoint: PlotPoint | null = null;

        const graphModified = () => {
            this.scored = false;
            this.hideSolution();
            this.hideScoreCards();
            this.refreshSubmitButton();
            refreshJudgeText();
            redrawPath();
        }

        slide($svg, {
            down: (p) => {
                if (engagingPoint) {
                    return;
                }

                const clickPosition = this.bindViewportPoint(p);
                const clickPoint = this.$graph.toPlotCoords(clickPosition);

                const $point = $N('circle', {transform: `translate(${clickPosition.x}, ${clickPosition.y})`, r: 6, class: 'plot-point'}, $plotPoints) as SVGView;
                
                const plotPoint = {
                    point: clickPoint,
                    position: clickPosition,
                    $el: $point,
                }
                placingPoint = plotPoint;

                this.points.push(plotPoint);

                slide($point, {
                    down: () => { engagingPoint = true; },
                    move: (p) => {
                        p = this.bindViewportPoint(p);
                        
                        plotPoint.point = this.$graph.toPlotCoords(p);
                        plotPoint.position = p;

                        $point.setAttr('transform', `translate(${p.x}, ${p.y})`);
                        
                        graphModified();
                    },
                    up: () => { engagingPoint = false; },
                    click: () => {
                        const i = this.points.indexOf(plotPoint);
                        this.points.splice(i, 1);
                        $point.remove();
                        
                        graphModified();
                    }
                });

                graphModified();
            },
            move: (p) => {
                if (placingPoint) {
                    p = this.bindViewportPoint(p);

                    placingPoint.point = this.$graph.toPlotCoords(p);
                    placingPoint.position = p;

                    placingPoint.$el.setAttr('transform', `translate(${p.x}, ${p.y})`);

                    redrawPath();
                }
            },
            up: (p) => {
                placingPoint = null;
            }
        });
    }

    bindStep($step: Step, scoreThreshold=0.95) {
      this.$step = $step;
      // Requires a solid "A" to pass by default
      this.scoreThreshold = scoreThreshold;
    }

    setHintPoints(hintPoints: HintPoint[]) {
        this.hintPoints = hintPoints;
    }

    setSolutionFunction(solutionFunction: (x: number) => number) {
        this.solutionFunction = solutionFunction;
        this.$graph.setFunctions(solutionFunction);

        const $plots = this.$graph.$svg.$('.plot')!;
        const $plot = $plots.children[0];
        
        const $dummyPlots = $N('g', {class: 'plot'}, this.$graph.$overlay);
        $dummyPlots.append($plot);
        $plot.addClass('blue');
        $plot.setAttr('show', false);
        $plot.addClass('solution');
        this.$solutionPlot = $plot;
    }

    hideSolution() {
        this.$solutionPlot.setAttr('show', false);
    }

    showSolution() {
        this.$solutionPlot.setAttr('show', true);
    }

    hideScoreCards() {
        this.$scoreContainer.setAttr('show', false);
    }

    showScoreCards() {
        this.$scoreContainer.setAttr('show', true);
    }

    refreshSubmitButton() {
        if (this.points.length < 2 || this.scored)
            this.$submitButton.setAttr('disabled', true);
        else
            this.$submitButton.removeAttr('disabled');
    }

    // Constrain a point within plot bounds
    bindPlotPoint(point: Point) {
        const bounds = this.$graph.plotBounds;

        const x = clamp(point.x, bounds.xMin, bounds.xMax);
        const y = clamp(point.y, bounds.yMin, bounds.yMax);

        return new Point(x, y);
    }

    // Constrain a point within viewport bounds
    bindViewportPoint(point: Point) {
        const bounds = this.$graph.viewportBounds;

        const x = clamp(point.x, bounds.xMin, bounds.xMax);
        const y = clamp(point.y, bounds.yMin, bounds.yMax);

        return new Point(x, y);
    }

    // Sample user graph in plot space
    sampleUserGraph(x: number) {
        if (this.points.length == 0)
            return 0;

        // Grab points from beginning and end of user plot
        const firstPlotPoint = this.points[0];
        const lastPlotPoint = this.points[this.points.length-1];

        // Create virtual "leading and trailing" points at beginning and end of graph
        let leadingPoint = this.bindPlotPoint(new Point(Number.NEGATIVE_INFINITY, firstPlotPoint.point.y));
        let trailingPoint = this.bindPlotPoint(new Point(Number.POSITIVE_INFINITY, lastPlotPoint.point.y));

        // Ensure leading/trailing points lie outside min/max possible input x values (prevents errors when plot points lie on viewport bounds)
        leadingPoint = new Point(leadingPoint.x-1, leadingPoint.y);
        trailingPoint = new Point(trailingPoint.x+1, trailingPoint.y);

        // Start off by feeding the leading point into the point pair
        let pointA: Point;
        let pointB: Point = leadingPoint;
        
        let pointsFound = false;

        // Loop over each consecutive pair of points to find A/B pair that bounds x
        for (let i = 0; i < this.points.length; i++) {
            // Shift to next point pair
            pointA = pointB;
            pointB = this.points[i].point;

            // If x is now less than point B, x is between A and B (so we can stop)
            if (x <= pointB.x) {
                pointsFound = true;
                break;
            }
        }

        // If above loop did not establish point pair, x must be between last point and trailing point
        if (!pointsFound) {
            pointA = lastPlotPoint.point;
            pointB = trailingPoint;
        }

        // Unlerp x from within A/B
        const p = unlerp(pointA!.x, pointB.x, x);

        // Lerp between A/B to get y value
        return lerp(pointA!.y, pointB.y, p);
    }

    computeError() {
        const height = this.$graph.viewportBounds.yMax;
        const width = this.$graph.viewportBounds.xMax;

        // Accumulate difference between user and solution functions, measured in pixels
        // (basically we are integrating here)
        let errorArea = 0;
        for (let i = 0; i < width; i++) {
            const x = this.$graph.toPlotCoords(new Point(i, 0)).x;

            const userY = this.sampleUserGraph(x);
            const solutionY = this.solutionFunction(x);

            const userPoint = new Point(x, userY);
            const solutionPoint = new Point(x, solutionY);

            const userPosition = this.$graph.toViewportCoords(userPoint);
            const solutionPosition = this.$graph.toViewportCoords(solutionPoint);

            const error = Math.abs(userPosition.y-solutionPosition.y);
            errorArea += error;
        }

        // Total viewport area in pixels
        const totalArea = width*height;

        // Return fraction of error area compared to total viewport area
        return errorArea/totalArea;
    }

    // Estimates closest point on the user graph to a given point
    computeClosestUserGraphPoint(point: Point) {
        const width = this.$graph.viewportBounds.xMax;

        let minimumDistance = Number.POSITIVE_INFINITY;
        let userGraphPosition: Point = new Point();

        for (let i = 0; i < width; i++) {
            const x = this.$graph.toPlotCoords(new Point(i, 0)).x;

            const y = this.sampleUserGraph(x);
            const p = new Point(x, y);

            const v = p.subtract(point);
            const d = v.length;

            if (d < minimumDistance) {
                minimumDistance = d;
                userGraphPosition = p;
            }
        }

        return userGraphPosition;
    }

    selectRelevantHint() {
        if (this.hintPoints.length == 0)
            return null;

        const hints = this.hintPoints.map((hintPoint) => {
            const point = new Point(hintPoint.x, this.solutionFunction(hintPoint.x));
            const userGraphPoint = this.computeClosestUserGraphPoint(point);

            const position = this.$graph.toViewportCoords(point);
            const userGraphPosition = this.$graph.toViewportCoords(userGraphPoint);

            const vector = userGraphPoint.subtract(point);
            const distance = vector.length;

            const viewportVector = userGraphPosition.subtract(position);
            const viewportDistance = viewportVector.length;
            
            return {
                hint: hintPoint.hint,
                relevanceThresholdDistance: hintPoint.relevanceThresholdDistance || 10,
                point,
                userGraphPoint,
                position,
                userGraphPosition,
                vector,
                distance,
                viewportVector,
                viewportDistance
            }
        });

        // Sort hints in descending order of pixel distance from user graph
        hints.sort((a, b) => b.viewportDistance - a.viewportDistance);

        // Remove any hints that are below their "relevance threshold distance"
        const relevantHints = hints.filter((hint) => hint.relevanceThresholdDistance < hint.viewportDistance);

        console.log('Sorted relevant hints:', relevantHints);

        if (relevantHints.length == 0)
            return null;

        return relevantHints[0].hint;
    }

    submit() {
        this.scored = true;

        this.$judgeText.text = 'Judges say:';

        const error = this.computeError();
        const score = Math.pow(1-error, 4);
        console.log('Drawn Graph Score:', score);


        if (this.$step) {
            this.$step.score('submit');

            const hint = this.selectRelevantHint();

            if (this.scoreThreshold < score) {
                this.$solutionPlot.setAttr('show', true);

                this.$step.addHint('correct');
                this.$step.score('submitCorrect');
            }
            else if (hint) {
                this.$step.addHint(hint);
            }
            else {
                this.$solutionPlot.setAttr('show', true);

                this.$step.addHint('incorrect');
            }
        }

        for (const $score of this.$scores) {
            const cardScore = Math.round(score*100-Math.random()*10)/10;
            $score.$('div')!.text = cardScore.toString();
        }

        this.refreshSubmitButton();
        this.showScoreCards();
    }
}
