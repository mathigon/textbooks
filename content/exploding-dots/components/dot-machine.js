// =============================================================================
// Dot Machine Component
// (c) Mathigon
// =============================================================================



import { CustomElement, registerElement, $N, pointerPosition } from '@mathigon/boost';

// -----------------------------------------------------------------------------

class Cell {

  constructor($dotMachine, initial=0) {
    this.$el = $N('div', {class: 'dot-cell'}, $dotMachine.$wrap);
    this.$dots = [];
    this.count = initial;

    this.$el.on('click', e => this.addDot(pointerPosition(e)));
    // TODO add initial dots
  }

  addDot(posn=null, options={}) {
    this.count += 1;
    // TODO if (!posn) posn = ...

    const $dot = $N('div', {class: 'dot'}, this.$el);
    this.$dots.push($dot);

    $dot.translate(posn.x, posn.y);
    $dot.enter('pop');
    // TODO explosion
  }

  explode() {

  }

}

// -----------------------------------------------------------------------------

export class DotMachine extends CustomElement {

  ready() {
    const cellCount = (this.attr('cells') || '1.0').split('.');
    const wholeCount = +cellCount[0] || 1;
    const decimalCount = +cellCount[1] || 0;

    this.$wrap = $N('div', {class: 'dot-wrap'}, this);
    this.cells = [];

    for (let i=0; i<wholeCount; ++i) this.cells.push(new Cell(this));
    if (decimalCount) $N('div', {class: 'dot-decimal'}, this.$wrap);
    for (let i=0; i<decimalCount; ++i) this.cells.push(new Cell(this));

  }
}

registerElement('x-dot-machine', DotMachine);
