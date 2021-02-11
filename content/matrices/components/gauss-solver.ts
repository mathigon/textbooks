

import {$N, CustomElementView, ElementView, Observable, observe, register, slide} from '@mathigon/boost';
import {tabulate2D} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {clamp} from '@mathigon/fermat';
import {Expression} from '@mathigon/hilbert';
import {Step} from '../../shared/types';


import template from './gauss-solver.pug';

type Model = {
  input: number[][], output: number[][], op: string, size: number,
  inRow1: number, inRow2: number, outRow1: number, outRow2: number,
  factorString: string, factor: number};

@register('x-gauss-solver', {template})
export class GaussSolver extends CustomElementView {
  model!: Observable<Model>;
  size!: number; // Number of Matrix rows
  $inputCells!: ElementView[][]; // Array of all cells in the left matrix.
  $outputCells!: ElementView[][]; // Array of all cells in the right matrix.
  $step!: Step;
  inputStack!: number[][][];

  ready() {
    const input = Expression.parse(this.attr('matrix'))
        .evaluate({'[': (...args: number[]) => [...args] as any}) as unknown as number[][];

    this.size = input.length;
    this.bindModel(observe({input, output: this.copyMatrix(input), size: this.size, inRow1: 0, inRow2: 1, outRow1: 0, outRow2: 1, factor: 1, factorString: '1'}));

    // Set up the input and output matrices
    const $matrices = this.$$('.matrix');
    for (const $m of $matrices) $m.css('grid-template-columns', `repeat(${this.size + 1}, 36px)`);

    this.$inputCells = tabulate2D((i, j) =>
      $N('div', {text: input[i][j]}, $matrices[0]), this.size, this.size + 1
    );
    this.$outputCells = tabulate2D(() => $N('div', {text: 0}, $matrices[1]), this.size, this.size + 1);

    this.inputStack = [this.copyMatrix(input)]; // pushes copy of input onto stack

    const $circles = this.$$('.connections-left circle');
    const inRows = ['inRow1', 'inRow2'] as ('inRow1'|'inRow2')[];
    const outRows = ['outRow1', 'outRow2'] as ('outRow1'|'outRow2')[];

    for (const [i, key] of inRows.entries()) {
      slide($circles[i], {
        move: (p: Point) => {
          // Check that this row is not equal to the other input
          // ^ I removed this feature because it makes it difficult w/ 2x2 matrix to choose which one you want to multiply
          const row = clamp(Math.round((p.y - 20) / 40), 0, this.size - 1);
          /* if (this.model.op === 'multiply' || this.model[inRows[i === 0 ? 1 : 0]] !== row)*/
          this.model[key] = row;
          if (this.model.op === 'swap') {
            this.model[outRows[i === 0 ? 1 : 0]] = row; // swap crosses 0 and 1
          } else {
            this.model[outRows[i]] = row; // also update outRow
          }
        }
      });
    }

    // Watch for change and update display of output cells
    this.model.watch((state) => {

      console.log(`State: {
          op: ${state.op},
          factor: ${state.factor}, factorString: ${state.factorString},
          inRow1: ${state.inRow1}, inRow2: ${state.inRow2},
          outRow1: ${state.outRow1}, outRow2: ${state.outRow2}
        }`);
      console.log(`Input:`);
      console.log(state.input);
      console.log(`Output:`);
      console.log(state.output);
      for (const [i, row] of this.$outputCells.entries()) {
        for (const [j, _val] of row.entries()) {

          this.handleOperation(state, i, j);

          // FIXME: @philipp is there an alternative to this? With binding?
          _val.text = '' + this.model.output[i][j];
        }
      }
    });

    // Button to Apply Row Operation
    const $applyBtn = this.$('.apply');
    $applyBtn?.on('click', () => {
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
      this.inputStack.push(this.copyMatrix(this.model.input));
      console.log(`PUSH: inputStack has ${this.inputStack.length} elements`);
      console.log(this.inputStack);

      if (this.checkForSolvedIdentity()) {
        this.$step.addHint('correct');
      }
    });

    const $undoBtn = this.$('.undo');
    $undoBtn?.on('click', () => {
      if (this.inputStack.length === 1) return;
      this.inputStack.pop();
      console.log(`POP: inputStack has ${this.inputStack.length} elements`);
      console.log(this.inputStack);

      this.model.input = this.copyMatrix(this.inputStack[this.inputStack.length - 1]);
      for (const [i, row] of this.$inputCells.entries()) {
        for (const [j, val] of row.entries()) {
          val.text = '' + this.model.input[i][j];

          // apply operation to get output values, and update
          this.handleOperation(this.model, i, j);
          this.$outputCells[i][j].text = '' + this.model.output[i][j];
        }
      }
    });

    // watch for factor change
    this.model.watch((state) => {
      let _parseable = true;
      let expr;
      let value;
      try {
        // FIXME: @philipp this might throw an error, Not sure how else to handle it.
        expr = Expression.parse(state.factorString);
        value = expr.evaluate() as number;
        this.model.factor = value;
      } catch (e) {
        _parseable = false;
        this.model.factor = 1;
      }
    });
  }

  private copyMatrix(matrix: number[][]) {
    return matrix.map(row => [...row]);
  }

  private handleOperation(state: Model, i: number, j: number) {
    switch (state.op) {
      case 'multiply':
        this.handleMultiply(state, i, j);
        break;
      case 'add':
        this.handleAdd(state, i, j);
        break;
      case 'swap':
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
    if (i === state.outRow1) {
      this.model.output[i][j] = this.model.input[state.inRow2][j];
    } else if (i === state.outRow2) {
      this.model.output[i][j] = this.model.input[state.inRow1][j];
    } else {
      this.model.output[i][j] = this.model.input[i][j];
    }
  }

  checkForSolvedIdentity(): boolean {
    console.log('Checking for solved identity');
    const numRows = this.$inputCells.length;

    for (let i = 0; i < numRows; i++) {
      const values = this.$inputCells[i];
      // i is also the expectedOneIndex

      // check all values
      for (let j = 0; j < numRows; j++) {
        // console.log(`Checking row=${i}; col=${j}; value=${values[j]}`);
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
