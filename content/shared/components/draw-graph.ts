// =============================================================================
// Draw Graph Component
// (c) Mathigon
// =============================================================================

import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView, Draggable, animate, ease, hover, svgPointerPosn, slide} from '@mathigon/boost';
import { last } from '@mathigon/core';
import { Point } from '@mathigon/euclid';
import {clamp, lerp} from '@mathigon/fermat';
import { shuffle } from '@mathigon/fermat/src/random';
import { CoordinateSystem, Step } from '../types';

// TODO: Import d3 helpers for curvy paths
// import { path as d3path, line as d3line, curveMonotoneX } from 'd3';

type PlotPoint = {
    point: Point,
    position: Point,
    $el: SVGView,
}

@register('x-draw-graph')
export class DrawGraph extends CustomElementView {
    private $graph!: CoordinateSystem;
    private $step?: Step;
    private yFunction?: (x: number) => number;

    private points: PlotPoint[] = [];

    ready() {
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

        const bindPlotPoint = (point: Point) => {
            const bounds = this.$graph.plotBounds;

            const x = clamp(point.x, bounds.xMin, bounds.xMax);
            const y = clamp(point.y, bounds.yMin, bounds.yMax);

            return new Point(x, y);
        }

        const bindViewportPoint = (point: Point) => {
            const bounds = this.$graph.viewportBounds;

            const x = clamp(point.x, bounds.xMin, bounds.xMax);
            const y = clamp(point.y, bounds.yMin, bounds.yMax);

            return new Point(x, y);
        }

        let placingPoint: PlotPoint | null = null;

        slide($svg, {
            down: (p) => {
                if (engagingPoint) {
                    return;
                }

                const clickPosition = bindViewportPoint(p);
                const clickPoint = this.$graph.toPlotCoords(clickPosition);

                const $point = $N('circle', {transform: `translate(${clickPosition.x}, ${clickPosition.y})`, r: 6, class: 'plot-point'}, $plotPoints) as SVGView;
                
                const plotPoint = {
                    point: clickPoint,
                    position: clickPosition,
                    $el: $point,
                }
                placingPoint = plotPoint;

                this.points.push(plotPoint);
                
                $point.on('click', () => {
                });
                

                slide($point, {
                    down: () => { engagingPoint = true; },
                    move: (p) => {
                        p = bindViewportPoint(p);
                        
                        plotPoint.point = this.$graph.toPlotCoords(p);
                        plotPoint.position = p;

                        $point.setAttr('transform', `translate(${p.x}, ${p.y})`);
    
                        redrawPath();
                    },
                    up: () => { engagingPoint = false; },
                    click: () => {
                        const i = this.points.indexOf(plotPoint);
                        this.points.splice(i, 1);
                        $point.remove();
    
                        redrawPath();
                    }
                })

                redrawPath();
            },
            move: (p) => {
                if (placingPoint) {
                    p = bindViewportPoint(p);

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

    bindStep($step: Step) {
      this.$step = $step;
    }

    setFunction(yFunction: (x: number) => number) {
        this.yFunction = yFunction;
        this.$graph.setFunctions(yFunction);

        const $plots = this.$graph.$svg.$('.plot')!;
        const $plot = $plots.children[0];
        
        const $dummyPlots = $N('g', {class: 'plot'}, this.$graph.$overlay);
        $dummyPlots.append($plot);
        $plot.addClass('blue');
    }
}
