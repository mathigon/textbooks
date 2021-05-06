// =============================================================================
// Pong Component
// (c) Mathigon
// =============================================================================

import { Step } from '@mathigon/studio';
import {$N, CustomElementView, register, SVGView, ElementView, slide} from '@mathigon/boost';
import { Point } from '@mathigon/euclid';
import { CoordinateSystem } from '../../../shared/types';
import { clamp } from '@mathigon/fermat';

@register('x-pong')
export class Pong extends CustomElementView {
    private $graph!: CoordinateSystem;
    private $step?: Step;
    private $paddle!: ElementView;

    ready() {
        const $graph = this.$('x-coordinate-system') as CoordinateSystem;
        this.$graph = $graph;

        const paddleOriginPoint = new Point($graph.plotBounds.xMax, ($graph.plotBounds.yMax+$graph.plotBounds.yMin)/2);
        const paddleOriginPosition = $graph.toViewportCoords(paddleOriginPoint);

        const paddlePixelSize = $graph.viewportBounds.dy;
        const paddlePixelRadius = paddlePixelSize/2;

        const paddleMinPoint = new Point($graph.plotBounds.xMax, $graph.plotBounds.yMin);
        const paddleMinPosition = $graph.toViewportCoords(paddleMinPoint);

        const paddleMaxPoint = new Point($graph.plotBounds.xMax, $graph.plotBounds.yMax);
        const paddleMaxPosition = $graph.toViewportCoords(paddleMaxPoint);

        const $paddle = $N('g', {class: 'paddle', transform: `translate(${paddleOriginPosition.x},${paddleOriginPosition.y})`}, $graph.$overlay);
        this.$paddle = $paddle;

        const paddleLine = $N('line', {x1: 0, x2: 0, y1: -paddlePixelRadius, y2: paddlePixelRadius}, $paddle);

        // const wall = $N('line')

        slide($graph, {
            down: () => {},
            move: (position) => {
                const y = clamp(position.y, paddleMinPosition.y+paddlePixelRadius, paddleMaxPosition.y-paddlePixelRadius);
                $paddle.setAttr('transform', `translate(${paddleOriginPosition.x},${y})`);
            },
            up: () => {},
            click: () => {},
        });
    }

    bindStep($step: Step) {
        this.$step = $step;
    }
}