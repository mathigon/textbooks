// =============================================================================
// Enigma Rotors Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {lerp} from '@mathigon/fermat';
import {SimplePoint} from '@mathigon/euclid';
import {$N, animate, CustomElementView, ElementView, register, SVGView} from '@mathigon/boost';
import {Machine} from './enigma';
import {UPPER_CASE} from './utilities';
import template from './enigma-rotors.pug';


const LETTER_COUNT = UPPER_CASE.length;
const LAYERS_X = [80, 180, 280, 380];
const LAYER_WIDTH = 70;
const GAP_WIDTH = 30;
const REFLECTOR_X = last(LAYERS_X) + LAYER_WIDTH + GAP_WIDTH;

function setAttr($el: ElementView, name: string, value: number, animated: boolean) {
  const current = +$el.attr(name);
  if (value === current) return;
  if (!animated) return $el.setAttr(name, value);
  animate((p: number) => $el.setAttr(name, lerp(current, value, p)), 300);
}


@register('x-enigma-rotors', {template})
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
    const i = Math.min(start, end);
    const y1 = this.yOffsets[start];
    const y2 = this.yOffsets[end];
    const x1 = REFLECTOR_X;
    const x2 = REFLECTOR_X + 8 + Math.min(i, LETTER_COUNT - i) * 3;
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
        const $line = this.$lines[r + 1][(i + offset) % LETTER_COUNT];
        setAttr($line, 'y1', this.yOffsets[i], animated);
        setAttr($line, 'y2', this.yOffsets[encoded], animated);
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

    const points1: SimplePoint[] = [$startKey.center];
    for (const i of [0, 1, 2, 3]) {
      points1.push({x: LAYERS_X[i], y: this.yOffsets[indices[i]]});
      points1.push({x: LAYERS_X[i] + LAYER_WIDTH, y: this.yOffsets[indices[i + 1]]});
    }
    points1.push({x: REFLECTOR_X, y: this.yOffsets[indices[4]]});
    const points2 = this.drawReflectorPath(indices[4], indices[5]);
    const points3: SimplePoint[] = [$endKey.center];
    for (const i of [1, 2, 3]) {
      points3.unshift({x: LAYERS_X[i], y: this.yOffsets[indices[9 - i]]});
      points3.unshift({x: LAYERS_X[i] + LAYER_WIDTH, y: this.yOffsets[indices[8 - i]]});
    }
    points3.unshift({x: REFLECTOR_X, y: this.yOffsets[indices[5]]});

    $startKey.addClass('in');
    this.updateRotorPaths();

    const $path1 = $N('path', {stroke: 'url(#grad-in)'}, this.$overlay) as SVGView;
    $path1.points = points1;
    await $path1.enter('draw', $path1.strokeLength * 4, 300).promise;

    const $path2 = $N('path', {stroke: '#cd0e66'}, this.$overlay) as SVGView;
    $path2.points = points2;
    await $path2.enter('draw', $path2.strokeLength * 4).promise;

    const $path3 = $N('path', {stroke: 'url(#grad-out)'}, this.$overlay) as SVGView;
    $path3.points = points3;
    await $path3.enter('draw', $path3.strokeLength * 4).promise;

    $endKey.addClass('out');
    this.isAnimating = false;
  }
}
