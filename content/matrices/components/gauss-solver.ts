

import {$N, CustomElementView, ElementView, Observable, observe, register, slide} from '@mathigon/boost';
import {tabulate2D} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {clamp} from '@mathigon/fermat';
import {Expression} from '@mathigon/hilbert';
import {Step} from '../../shared/types';


import template from './gauss-solver.pug';

// TODO: function (px) to calculate "20+40*inRow1", and add output to the model
type Model = {
  input: number[][], output: number[][], op: string, size: number,
  inRow1: number, inRow2: number, outRow1: number, outRow2: number,
  factorString: string, factor: number
};

@register('x-gauss-solver', {template})
export class GaussSolver extends CustomElementView {
  model!: Observable<Model>;
  size!: number; // Number of Matrix rows
  $inputCells!: ElementView[][]; // Array of all cells in the left matrix.
  $outputCells!: ElementView[][]; // Array of all cells in the right matrix.
  $step!: Step;
  inputStack!: number[][][];
  $matrices!: ElementView[];

  ready() {
    // TODO: instead of decimals, display fractions (now? or later?)
    // TODO: use "parseInput" instead of Expression.parse
    // TODO: use "collision detection" to prevent same row from being highlighted
    const input = Expression.parse(this.attr('matrix'))
        .evaluate({'[': (...args: number[]) => [...args] as any}) as unknown as number[][];

    // size is num rows
    this.size = input.length;
    this.bindModel(observe({input, output: this.copyMatrix(input), size: this.size, inRow1: 0, inRow2: 1, outRow1: 0, outRow2: 1, factor: 1, factorString: '1'}));

    // Set up the input and output matrices
    this.$matrices = this.$$('.matrix') as ElementView[];
    for (const $m of this.$matrices) $m.css('grid-template-columns', `repeat(${this.size + 1}, 36px)`);

    this.$inputCells = tabulate2D((i, j) =>
      $N('div', {text: input[i][j]}, this.$matrices[0]), this.size, this.size + 1
    );
    this.$outputCells = tabulate2D(() => $N('div', {text: 0}, this.$matrices[1]), this.size, this.size + 1);

    this.inputStack = [this.copyMatrix(input)]; // pushes copy of input onto stack

    const $circles = this.$$('.connections-left circle');
    const inRows = ['inRow1', 'inRow2'] as ('inRow1'|'inRow2')[];
    const outRows = ['outRow1', 'outRow2'] as ('outRow1'|'outRow2')[];

    /**
     * When a circle is moved, update the values of "inRow1" and "inRow2"
     */
    for (const [i, key] of inRows.entries()) { // inRow1
      slide($circles[i], {
        move: (p: Point) => {
          const row = clamp(Math.round((p.y - 20) / 40), 0, this.size - 1);
          // Check that this row is not equal to the other input
          // (I removed this feature because it makes it difficult w/ 2x2 matrix to choose which one you want to multiply)
          /* if (this.model.op === 'multiply' || this.model[inRows[i === 0 ? 1 : 0]] !== row)*/
          // TODO: here is where row collision detection would be
          this.model[key] = row;
          console.log(`Slide: ${i}, key=${key}, row=${row}`);
        }
      });
    }

    /**
     * Watch for change and update display of output cells
     */
    this.model.watch((state) => {
      console.log('update state');
      // FIXME: @philipp -- without this below log statement, the model won't update when inRow2 is changed during add/swap (blue arrow)
      for (const [i, row] of this.$outputCells.entries()) {
        for (const [j, _val] of row.entries()) {
          this.handleOperation(state, i, j);
          // FIXME: @philipp is there an alternative to this? With binding?
          _val.text = '' + this.model.output[i][j];
        }
      }
    });

    /**
     * Watch for FACTOR change
     * (can coexist with other watch function)
     */
    this.model.watch((state) => {
      let _parseable = true;
      let expr;
      let value;
      try {
        // TODO: this is where the parseInput should go
        expr = Expression.parse(state.factorString);
        value = expr.evaluate() as number;
        this.model.factor = value;
      } catch (e) {
        _parseable = false;
        this.model.factor = 1;
      }
    });

    // APPLY + UNDO buttons
    const $applyBtn = this.$('.apply');
    $applyBtn?.on('click', this.actionApply.bind(this));
    const $undoBtn = this.$('.undo');
    $undoBtn?.on('click', this.actionUndo.bind(this));
  }

  private copyMatrix(matrix: number[][]) {
    return matrix.map(row => [...row]);
  }

  private handleOperation(state: Model, i: number, j: number) {
    // state.inRow2 is accessed here because "multiply" is switched on the first call,
    // and the model only registers what is needed on the first call
    const _inRow2 = state.inRow2;
    switch (state.op) {
      case 'multiply':
        this.handleMultiply(state, i, j);
        break;
      case 'add':
        this.handleAdd(state, i, j);
        break;
      case 'swap':
        this.model.outRow1 = _inRow2;
        this.model.outRow2 = state.inRow1;
        this.handleSwap(state, i, j);
        break;
    }
  }

  private handleMultiply(state: Model, i: number, j: number) {
    if (state.factor && i === state.inRow1) {
      const m = this.model.input[state.inRow1][j];
      this.model.output[i][j] = state.factor * m;
    } else {
      this.model.output[i][j] = this.model.input[i][j];
    }
    this.model.outRow1 = this.model.inRow1;
  }

  private handleAdd(state: Model, i: number, j: number) {
    this.model.output[i][j] = this.model.input[i][j];
    if (state.factor && i === state.outRow1) {
      const c1 = this.model.input[state.inRow1][j];
      const c2 = this.model.input[state.inRow2][j];
      const write = c1 + state.factor * c2;
      this.model.output[i][j] = write;

    } else {
      this.model.output[i][j] = this.model.input[i][j];
    }
    this.model.outRow1 = this.model.inRow1;
  }

  private handleSwap(state: Model, i: number, j: number) {
    // FIXME: swap 2 (on update model)
    this.model.output[i][j] = this.model.input[i][j];
    if (i === state.inRow1) {
      this.model.output[i][j] = this.model.input[state.inRow2][j];
    } else if (i === state.inRow2) {
      this.model.output[i][j] = this.model.input[state.inRow1][j];
    }
  }

  /**
   * Apply the Action button
   */
  private actionApply() {
    // swapping input and output
    for (const [i, row] of this.$inputCells.entries()) {
      for (const [j, val] of row.entries()) {
        // move output to input, and update
        this.model.input[i][j] = this.model.output[i][j];
        val.text = '' + this.model.input[i][j];

        // apply operation to get output values, and update
        this.handleOperation(this.model, i, j);
        this.$outputCells[i][j].text = '' + this.model.output[i][j];
      }
    }

    // TODO: here is where the animation goes
    // TODO: fade out all elements except for the output matrix
    // TODO: also do this with other boxes
    // TODO: slide the output matrix to the left, to replace input matrix
    // TODO: Input box reverts to default (Multiply by 1)
    this.$matrices[0].exit('fade');
    this.inputStack.push(this.copyMatrix(this.model.input));

    if (this.checkForSolvedIdentity()) {
      this.$step.addHint('correct');
    }
  }

  // TODO: replace this with a "Reset" Button
  /**
   * Apply the Undo button
   */
  private actionUndo() {
    if (this.inputStack.length === 1) return;
    this.inputStack.pop();

    this.model.input = this.copyMatrix(this.inputStack[this.inputStack.length - 1]);
    for (const [i, row] of this.$inputCells.entries()) {
      for (const [j, val] of row.entries()) {
        val.text = '' + this.model.input[i][j];

        // apply operation to get output values, and update
        this.handleOperation(this.model, i, j);
        this.$outputCells[i][j].text = '' + this.model.output[i][j];
      }
    }
  }

  /**
   * Check if the cells in the input matrix equal the identity.
   */
  checkForSolvedIdentity(): boolean {
    const numRows = this.$inputCells.length;

    for (let i = 0; i < numRows; i++) {
      const values = this.$inputCells[i];
      // i is also the expectedOneIndex

      // check all values
      for (let j = 0; j < numRows; j++) {
        if (j === i) {
          if (values[j].text != '1') {
            // diagonal should be 1
            return false;
          }
        } else if (values[j].text != '0') {
          // non-diag should be 0
          return false;
        }
      }
    }
    return true;
  }

  bindStep($step: Step) {
    this.$step = $step;
  }
}
