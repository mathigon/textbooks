// =============================================================================
// Relation Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView} from '@mathigon/boost';
import {Point} from '@mathigon/euclid';
import template from './function-machine.pug';

@register('x-function-machine', {template})
export class FunctionMachine extends CustomElementView {
  private $inputs!: ElementView[];
  private $operations!: ElementView[];
  private $outputs!: ElementView[];

  private lastWidth = 0;
  private inputTargets: Point[] = [];
  private outputTargets: Point[] = [];
  private matches: Match[] = [];
  private connections: Connection[] = [];

  ready() {
    const $svg = this.$('svg.connections') as SVGParentView;
    this.$inputs = this.$$('.input .item');
    this.$operations = this.$$('.operation .item');
    this.$outputs = this.$$('.output .item');

    this.resize();

    let activeInput = -1;

    for (const [i, $el] of this.$inputs.entries()) {

    }
  }

  resize() {
  }
}
