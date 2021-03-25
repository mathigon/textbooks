// =============================================================================
// Draw Graph Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView, Draggable, animate, ease, hover} from '@mathigon/boost';
import { Point } from '@mathigon/euclid';
import {lerp} from '@mathigon/fermat';
import { shuffle } from '@mathigon/fermat/src/random';
import { CoordinateSystem, Step } from '../types';


@register('x-draw-graph')
export class DrawGraph extends CustomElementView {
    private $graph!: CoordinateSystem;

    ready() {
    }

    bindStep($step: Step) {
      this.$step = $step;
    }
}
