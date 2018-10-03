// =============================================================================
// Dot Machine Component
// (c) Mathigon
// =============================================================================



import { Evented, defer } from '@mathigon/core';
import { Point } from '@mathigon/fermat';
import { CustomElement, registerElement, $N, pointerPosition } from '@mathigon/boost';
import { Audio } from '../../shared/components/audio'

const enterAudio = new Audio('/resources/exploding-dots/audio/enter.m4a');
const explodeAudio = new Audio('/resources/exploding-dots/audio/explode.m4a');
const annihilateAudio = new Audio('/resources/exploding-dots/audio/annihilate.m4a');

// -----------------------------------------------------------------------------

class Cell extends Evented {

  constructor($dotMachine, initial=0) {
    super();

    this.$dotMachine = $dotMachine;
    this.$el = $N('div', {class: 'dot-cell'}, $dotMachine.$wrap);
    this.$dots = [];

    this.dotCols = 1;
    this.dotRows = 1;

    this.$el.on('click', e => {
      let stopped = false;
      this.trigger('add', {stop: () => stopped = true });
      if (stopped) return;
      this.addDotAntidot(pointerPosition(e).subtract(this.$el.topLeftPosition));
      enterAudio.play();
    });

    if (initial) {
      this.rearrange(initial);
      for (let i = 0; i < initial; ++i) this.addDot();
    }
  }

  get $fullDots() { return this.$dots.filter($d => !$d.data.anti); }
  get $antiDots() { return this.$dots.filter($d => $d.data.anti); }

  getDotPosition(i) {
    const x = 60 - this.dotCols * 10 + (i % this.dotCols) * 20;
    const y = 60 - this.dotRows * 10 + Math.floor(i / this.dotCols) * 20;
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


  addDot(posn=null, {className='', dx=0}={}) {
    if (!posn) posn = this.getDotPosition(this.$dots.length);

    const $dot = $N('div', {class: 'dot ' + className}, this.$el);
    this.$dots.push($dot);

    $dot.animate({transform: [`translate(${posn.x}px, ${posn.y}px) scale(0.1)`,
        `translate(${posn.x + dx}px, ${posn.y}px)`]}, 400, 0, 'bounce-in');

    setTimeout(() => this.rearrange(), 400);
    return $dot;
  }

  addDotAntidot(posn) {
    this.addDot(posn, {dx: -10});
    const $antiDot = this.addDot(posn, {className: 'anti', dx: 10});
    $antiDot.data.anti = true;
  }

  explode(n, recursive=false) {
    if (this.$fullDots.length < n) return;

    const $remove = this.$dots.slice(0, n);
    this.$dots = this.$dots.slice(n);

    for (let $r of $remove) $r.addClass('glowing');

    const nextIndex = this.$dotMachine.cells.indexOf(this) - 1;
    const next = this.$dotMachine.cells[nextIndex];
    if (!next) return;

    const target = next.getDotPosition(next.$dots.length);
    const transform = target.add(next.$el.topLeftPosition)
        .subtract(this.$el.topLeftPosition);

    for (let $r of $remove) {
      $r.animate({transform: `translate(${transform.x}px,${transform.y}px) scale(2)`}, 400, 400)
          .then(() => $r.remove());
    }

    setTimeout(() => explodeAudio.play(), 100);
    setTimeout(() => this.rearrange(), 400);
    setTimeout(() => next.addDot(target), 800);

    const deferred = defer();
    setTimeout(() => {
      if (recursive) {
        const cell = (this.$fullDots.length < n) ? next : this;
        cell.explode(n, recursive);
      }
      deferred.resolve();
    }, 1800);
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
    const cells = (this.attr('cells') || '000').split('.');

    this.$wrap = $N('div', {class: 'dot-wrap'}, this);
    this.cells = [];

    for (let c of cells[0]) this.cells.push(new Cell(this, +c));
    if (cells[1]) {
      $N('div', {class: 'dot-decimal'}, this.$wrap);
      for (let c of cells[1]) this.cells.push(new Cell(this, +c));
    }

    $N('div', {class: 'dot-ellipses'}, this.$wrap);

    for (let i = 0; i < this.cells.length; ++i) {
      this.cells[i].on('add', (e) => {
        this.trigger('add', {i, stop: e.stop});
      });
    }
  }
}

registerElement('x-dot-machine', DotMachine);
