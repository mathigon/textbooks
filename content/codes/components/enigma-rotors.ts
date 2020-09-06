// =============================================================================
// Enigma Rotors Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {lerp, SimplePoint} from '@mathigon/fermat';
import {$N, animate, CustomElementView, ElementView, register, SVGView} from '@mathigon/boost';
import {Machine} from './enigma';
import {UPPER_CASE} from './utilities';


const LETTER_COUNT = UPPER_CASE.length;
const LAYERS_X = [80, 180, 280, 380];
const LAYER_WIDTH = 70;
const GAP_WIDTH = 30;

function setAttr($el: ElementView, name: string, value: number, animated: boolean) {
  const current = +$el.attr(name);
  if (value === current) return;
  if (!animated) return $el.setAttr(name, value);
  animate((p: number) => $el.setAttr(name, lerp(current, value, p)), 300);
}


@register('x-enigma-rotors')
export class EnigmaRotors extends CustomElementView {
  machine = new Machine();
  private yOffsets!: number[];
  private $lines: ElementView[][] = [[], [], [], []];
  private $keys!: SVGView[];
  private $overlay!: ElementView;
  private isAnimating = false;

  ready() {
    this.$keys = this.$$('.keyboard circle') as SVGView[];
    for (const $k of this.$keys) $k.on('click', () => this.runAnimation($k.data.key!));

    this.yOffsets = this.$keys.map($k => $k.center.y);
    const $connections = this.$('.connections')!;
    this.$overlay = this.$('.overlay')!;

    // Draw all connections except reflector
    for (let i = 0; i < LETTER_COUNT; ++i) {
      const x = this.$keys[i].center.x;
      const y = this.yOffsets[i];
      $N('line', {x1: x, y1: y, x2: LAYERS_X[0], y2: y}, $connections);
      for (const [l, x] of LAYERS_X.entries()) {
        this.$lines[l].push($N('line', {x1: x, y1: y, x2: x + LAYER_WIDTH, y2: y}, $connections));
        $N('line', {x1: x + LAYER_WIDTH, y1: y, x2: x + LAYER_WIDTH + GAP_WIDTH, y2: y}, $connections);
      }
    }
    this.updateRotorPaths(false);

    // Draw reflector connections
    for (let i = 0; i < LETTER_COUNT; ++i) {
      const encoded = UPPER_CASE.indexOf(this.machine.reflector.reflect(UPPER_CASE[i]));
      if (encoded < i) continue;  // Already drawn
      const $path = $N('path', {}, $connections) as SVGView;
      $path.points = this.drawReflectorPath(i, encoded);
    }
  }

  private drawReflectorPath(start: number, end: number) {
    // TODO Use rounded corners?
    const y1 = this.yOffsets[start];
    const y2 = this.yOffsets[end];
    const x1 = 480;
    const x2 = 480 + 40 * Math.random();  // TODO Calculate width
    return [{x: x1, y: y1}, {x: x2, y: y1}, {x: x2, y: y2}, {x: x1, y: y2}];
  }

  private updateRotorPaths(animated = true) {
    for (let i = 0; i < LETTER_COUNT; ++i) {
      const letter = UPPER_CASE[i];

      // Plug board paths
      const encoded = UPPER_CASE.indexOf(this.machine.plugboard.encode(letter));
      setAttr(this.$lines[0][i], 'y2', this.yOffsets[encoded], animated);

      // Three rotors
      for (const r of [0, 1, 2]) {
        const offset = this.machine.rotors[r].offset;
        const encoded = UPPER_CASE.indexOf(this.machine.rotors[r].encodeForward(letter));
        setAttr(this.$lines[r + 1][i], 'y1', this.yOffsets[(offset + i) % LETTER_COUNT], animated);
        setAttr(this.$lines[r + 1][i], 'y2', this.yOffsets[(offset + encoded) % LETTER_COUNT], animated);
      }
    }
  }

  async runAnimation(letter: string) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.$overlay.removeChildren();
    for (const $k of this.$keys) $k.removeClass('in out');

    const encodePath = this.machine.encode(letter);
    const indices = encodePath.map(c => UPPER_CASE.indexOf(c));

    const $startKey = this.$keys[indices[0]];
    const $endKey = this.$keys[last(indices)];

    // TODO There are some pugs in this path calculation.
    // TODO Add colour gradient along path
    const animatedPath: SimplePoint[] = [$startKey.center];
    for (const i of [0, 1, 2, 3]) {
      animatedPath.push({x: LAYERS_X[i], y: this.yOffsets[indices[i]]});
      animatedPath.push({x: LAYERS_X[i] + LAYER_WIDTH, y: this.yOffsets[indices[i + 1]]});
    }
    animatedPath.push(...this.drawReflectorPath(indices[4], indices[5]));
    for (const i of [3, 2, 1]) {
      animatedPath.push({x: LAYERS_X[i] + LAYER_WIDTH, y: this.yOffsets[indices[8 - i]]});
      animatedPath.push({x: LAYERS_X[i], y: this.yOffsets[indices[9 - i]]});
    }
    animatedPath.push($endKey.center);

    const $path = $N('path', {}, this.$overlay) as SVGView;
    $path.points = animatedPath;

    $startKey.addClass('in');
    this.updateRotorPaths();
    await $path.enter('draw', 4000, 300).promise;
    $endKey.addClass('out');

    this.isAnimating = false;
  }
}
