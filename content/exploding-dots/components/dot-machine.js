// =============================================================================
// Dot Machine Component
// (c) Mathigon
// =============================================================================



import { Evented, defer, last } from '@mathigon/core';
import { Point, numberFormat } from '@mathigon/fermat';
import { CustomElement, registerElement, $N, pointerPosition } from '@mathigon/boost';
import { Audio } from '../../shared/components/audio'

const enterAudio = new Audio('/resources/exploding-dots/audio/enter.m4a');
const explodeAudio = new Audio('/resources/exploding-dots/audio/explode.m4a');
const annihilateAudio = new Audio('/resources/exploding-dots/audio/annihilate.m4a');

// -----------------------------------------------------------------------------

class Cell extends Evented {

  constructor($dotMachine, initial=0, index=0) {
    super();

    this.$dotMachine = $dotMachine;
    this.$el = $N('div', {class: 'dot-cell'}, $dotMachine.$wrap);
    this.$dots = [];

    this.dotCols = 1;
    this.dotRows = 1;

    this.value = initial;
    this.$value = $N('div', {class: 'cell-value', html: initial}, this.$el);

    const order = numberFormat(Math.pow($dotMachine.type, index));
    $N('div', {class: 'cell-order', html: order}, this.$el);

    if (initial) {
      this.rearrange(initial);
      for (let i = 0; i < initial; ++i) this.addDot(null, {count: false});
    }
  }

  get $fullDots() { return this.$dots.filter($d => !$d.data.anti); }
  get $antiDots() { return this.$dots.filter($d => $d.data.anti); }

  getDotPosition(i) {
    const s = this.$dotMachine.spacing;
    const x = 60 - this.dotCols * s/2 + (i % this.dotCols) * s;
    const y = 60 - this.dotRows * s/2 + Math.floor(i / this.dotCols) * s;
    return new Point(x, y);
  }

  rearrange(useN=null) {
    const n = this.$dots.length;
    this.dotCols = Math.ceil(Math.sqrt(useN || n));
    this.dotRows = Math.ceil((useN || n) / this.dotCols);

    this.$dots = [...this.$fullDots, ...this.$antiDots];

    for (let i = 0; i < n; ++i) {
      const p = this.getDotPosition(i);
      this.$dots[i].animate({transform: `translate(${p.x}px,${p.y}px)`}, 300, i * 20);
    }
  }

  addDot(posn=null, {className='', dx=0, audio=false, count=true}={}) {
    if (!posn) posn = this.getDotPosition(this.$dots.length);
    if (audio) enterAudio.play();

    const $dot = $N('div', {class: 'dot ' + className}, this.$el);
    this.$dots.push($dot);

    $dot.animate({transform: [`translate(${posn.x}px, ${posn.y}px) scale(0.1)`,
        `translate(${posn.x + dx}px, ${posn.y}px)`]}, 400, 0, 'bounce-in');

    if (count) {
      this.value += 1;
      this.$value.text = this.value;
    }

    setTimeout(() => this.rearrange(), 400);
    return $dot;
  }

  addDotAntidot(posn) {
    this.addDot(posn, {dx: -10, audio: true, count: false});
    const $antiDot = this.addDot(posn, {className: 'anti', dx: 10, count: false});
    $antiDot.data.anti = true;
  }

  explode(recursive=false) {
    const n = this.$dotMachine.type;
    if (this.$fullDots.length < n) return Promise.resolve();

    const $remove = this.$dots.slice(0, n);
    this.$dots = this.$dots.slice(n);

    for (let $r of $remove) $r.addClass('glowing');

    const nextIndex = this.$dotMachine.cells.indexOf(this) - 1;
    const next = this.$dotMachine.cells[nextIndex];

    const target = next ? next.getDotPosition(next.$dots.length) : null;
    const transform = next ? target.add(next.$el.topLeftPosition)
        .subtract(this.$el.topLeftPosition) : new Point(-54, 50);

    for (let $r of $remove) {
      $r.animate({transform: `translate(${transform.x}px,${transform.y}px) scale(2)`}, 400, 400)
          .then(() => $r.remove());
    }

    setTimeout(() => explodeAudio.play(), 100);
    setTimeout(() => this.rearrange(), 400);

    setTimeout(() => {
      if (next) next.addDot(target);
      this.value -= n;
      this.$value.text = this.value;
    }, 800);

    const deferred = defer();
    setTimeout(() => {
      const cell = (this.$fullDots.length < n) ? next : this;
      if (!recursive || !cell) return deferred.resolve();
      cell.explode(n, recursive).then(() => deferred.resolve());
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
            .then(() => $fullDots[i].exit('pop'));
        $antiDots[i].addClass('warning');
        $antiDots[i].animate({transform: `translate(50px, 50px) scale(2)`}, 400, 400)
            .then(() => $antiDots[i].exit('pop'));
      }, i * 600);
      setTimeout(() => annihilateAudio.play(), i * 600 + 500);
    }
  }

}

// -----------------------------------------------------------------------------

export class DotMachine extends CustomElement {

  ready() {
    const cellString = (this.attr('cells') || '000');
    const cells = cellString.replace('…', '').split('.');

    this.type = (+this.attr('type') || 10);
    this.spacing = this.hasClass('tiny') ? 14 : 20;

    this.$wrap = $N('div', {class: 'dot-wrap'}, this);
    this.cells = [];

    if (cellString[0] === '…') $N('div', {class: 'dot-ellipses'}, this.$wrap);

    for (let i=0; i<cells[0].length; ++i) {
      this.cells.push(new Cell(this, +cells[0][i], cells[0].length - 1 - i));
    }

    if (cells[1]) {
      $N('div', {class: 'dot-decimal'}, this.$wrap);
      for (let i=0; i<cells[1].length; ++i) {
        this.cells.push(new Cell(this, +cells[1][i], -1 - i));
      }
    }

    if (last(cellString) === '…') $N('div', {class: 'dot-ellipses'}, this.$wrap);

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

registerElement('x-dot-machine', DotMachine);
