// =============================================================================
// Dot Machine Component
// (c) Mathigon
// =============================================================================


import {defer, EventTarget, last} from '@mathigon/core';
import {numberFormat} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {$N, AudioPlayer, CustomElementView, ElementView, pointerPosition, register} from '@mathigon/boost';


const enterAudio = new AudioPlayer('/audio/appear.mp3');
const explodeAudio = new AudioPlayer('/audio/whoosh.mp3');
const annihilateAudio = new AudioPlayer('/audio/disappear.mp3');

// -----------------------------------------------------------------------------

class Cell extends EventTarget {
  $el: ElementView;
  $dots: ElementView[] = [];
  $value: ElementView;

  value: number;
  dotCols = 1;
  dotRows = 1;


  constructor(private readonly $dotMachine: DotMachine, initial = 0,
      index = 0) {
    super();
    this.value = initial;

    this.$el = $N('div', {class: 'dot-cell'}, $dotMachine.$wrap);
    this.$value = $N('div', {class: 'cell-value', html: initial}, this.$el);

    const order = numberFormat(index > 0 ? Math.pow($dotMachine.base, index) :
                               1 / Math.pow($dotMachine.base, -index));  // Prevent rounding errors
    $N('div', {class: 'cell-order', html: order}, this.$el);

    if (initial) {
      this.rearrange(initial);
      for (let i = 0; i < initial; ++i) this.addDot(undefined, {count: false});
    }
  }

  get $fullDots() {
    return this.$dots.filter($d => !$d.data.anti);
  }

  get $antiDots() {
    return this.$dots.filter($d => $d.data.anti);
  }

  getDotPosition(i: number) {
    const s = this.$dotMachine.spacing;
    const x = 60 - this.dotCols * s / 2 + (i % this.dotCols) * s;
    const y = 60 - this.dotRows * s / 2 + Math.floor(i / this.dotCols) * s;
    return new Point(x, y);
  }

  rearrange(useN?: number) {
    const n = this.$dots.length;
    this.dotCols = Math.ceil(Math.sqrt(useN || n));
    this.dotRows = Math.ceil((useN || n) / this.dotCols);

    this.$dots = [...this.$fullDots, ...this.$antiDots];

    for (let i = 0; i < n; ++i) {
      const p = this.getDotPosition(i);
      this.$dots[i].animate({transform: `translate(${p.x}px,${p.y}px)`}, 300,
          i * 20);
    }
  }

  addDot(posn?: Point,
      {className = '', dx = 0, audio = false, count = true} = {}) {
    if (!posn) posn = this.getDotPosition(this.$dots.length);
    if (audio) enterAudio.play();

    const $dot = $N('div', {class: 'dot ' + className}, this.$el);
    this.$dots.push($dot);

    $dot.animate({
      transform: [`translate(${posn.x}px, ${posn.y}px) scale(0.1)`,
        `translate(${posn.x + dx}px, ${posn.y}px)`]
    }, 400, 0, 'bounce-in');

    if (count) {
      this.value += 1;
      this.$value.textStr = this.value;
    }

    setTimeout(() => this.rearrange(), 400);
    return $dot;
  }

  addDotAntidot(posn: Point) {
    this.addDot(posn, {dx: -10, audio: true, count: false});
    const $antiDot = this.addDot(posn,
        {className: 'anti', dx: 10, count: false});
    $antiDot.data.anti = 'true';
  }

  explode(recursive = false): Promise<void> {
    const n = this.$dotMachine.base;
    if (this.$fullDots.length < n) return Promise.resolve();

    const $remove = this.$dots.slice(0, n);
    this.$dots = this.$dots.slice(n);

    for (const $r of $remove) $r.addClass('glowing');

    const nextIndex = this.$dotMachine.cells.indexOf(this) - 1;
    const next = this.$dotMachine.cells[nextIndex];

    const target = next ? next.getDotPosition(next.$dots.length) : undefined;
    const transform = next ? target!.add(next.$el.topLeftPosition)
        .subtract(this.$el.topLeftPosition) : new Point(-54, 50);

    for (const $r of $remove) {
      $r.animate({transform: `translate(${transform.x}px,${transform.y}px) scale(2)`}, 400, 400)
          .promise.then(() => $r.remove());
    }

    setTimeout(() => explodeAudio.play(), 100);
    setTimeout(() => this.rearrange(), 400);

    setTimeout(() => {
      if (next) next.addDot(target);
      this.value -= n;
      this.$value.textStr = this.value;
    }, 800);

    const deferred = defer();
    setTimeout(() => {
      const cell = (this.$fullDots.length < n) ? next : this;
      if (!recursive || !cell) return deferred.resolve();
      cell.explode(recursive).then(() => deferred.resolve());
    }, 1200);
    return deferred.promise;
  }

  annihilate() {
    const $fullDots = this.$fullDots;
    const $antiDots = this.$antiDots;

    const n = Math.min($fullDots.length, $antiDots.length);
    if (!n) return;

    for (let i = 0; i < n; ++i) {
      setTimeout(() => {
        $fullDots[i].addClass('warning');
        $fullDots[i].animate({transform: `translate(50px, 50px) scale(2)`}, 400, 400)
            .promise.then(() => $fullDots[i].exit('pop'));
        $antiDots[i].addClass('warning');
        $antiDots[i].animate({transform: `translate(50px, 50px) scale(2)`}, 400, 400)
            .promise.then(() => $antiDots[i].exit('pop'));
      }, i * 600);
      setTimeout(() => annihilateAudio.play(), i * 600 + 500);
    }
  }

}

// -----------------------------------------------------------------------------

@register('x-dot-machine')
export class DotMachine extends CustomElementView {
  $wrap!: ElementView;
  base!: number;
  spacing!: number;
  cells: Cell[] = [];

  ready() {
    const cellString = (this.attr('cells') || '000');
    const cells = cellString.replace('…', '').split('.');

    this.base = (+this.attr('type') || 10);
    this.spacing = this.hasClass('tiny') ? 14 : 20;

    this.$wrap = $N('div', {class: 'dot-wrap'}, this);
    if (cellString[0] === '…') $N('div', {class: 'dot-ellipses'}, this.$wrap);

    for (let i = 0; i < cells[0].length; ++i) {
      this.cells.push(new Cell(this, +cells[0][i], cells[0].length - 1 - i));
    }

    if (cells[1]) {
      $N('div', {class: 'dot-decimal'}, this.$wrap);
      for (let i = 0; i < cells[1].length; ++i) {
        this.cells.push(new Cell(this, +cells[1][i], -1 - i));
      }
    }

    if (cellString[cellString.length - 1] === '…') {
      $N('div', {class: 'dot-ellipses'}, this.$wrap);
    }

    this.cells.forEach((cell, i) => {
      cell.$el.on('click', (e) => {
        const point = pointerPosition(e).subtract(cell.$el.topLeftPosition);
        this.trigger('add', {i, point, cell});
      });
    });
  }

  explode() {
    return last(this.cells).explode(true);
  }
}
