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

    ready() {
    }
}