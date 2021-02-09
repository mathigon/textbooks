

import {$N, CustomElementView, ElementView, Observable, observe, register, slide} from '@mathigon/boost';
import {tabulate2D} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {clamp} from '@mathigon/fermat';
import {Expression} from '@mathigon/hilbert';
import {Step} from '../../shared/types';


import template from './gauss-solver.pug';

type Model = {
  input: number[][], output: number[][], op: string,
  inRow1: number, inRow2: number, outRow1: number, outRow2: number,
  factorString: string, factor: number};

@register('x-gauss-solver', {template})
export class GaussSolver extends CustomElementView {
  model!: Observable<Model>;
  size!: number; // Number of Matrix rows
  $inputCells!: ElementView[][]; // Array of all cells in the left matrix.
  $outputCells!: ElementView[][]; // Array of all cells in the right matrix.
  $step!: Step;

  ready() {
    const input = Expression.parse(this.attr('matrix'))
        .evaluate({'[': (...args: number[]) => [...args] as any}) as unknown as number[][];

    this.bindModel(observe({input, output: input, inRow1: 0, inRow2: 1, outRow1: 0, outRow2: 1, factor: 1, factorString: '1'}));
    this.size = input.length;

    // Set up the input and output matrices
    const $matrices = this.$$('.matrix');
    for (const $m of $matrices) $m.css('grid-template-columns', `repeat(${this.size + 1}, 36px)`);

    this.$inputCells = tabulate2D((i, j) =>
      $N('div', {text: input[i][j]}, $matrices[0]), this.size, this.size + 1
    );
    this.$outputCells = tabulate2D(() => $N('div', {text: 0}, $matrices[1]), this.size, this.size + 1);

    const $circles = this.$$('.connections-left circle');
    const inRows = ['inRow1', 'inRow2'] as ('inRow1'|'inRow2')[];

    for (const [i, key] of inRows.entries()) {
      slide($circles[i], {
        move: (p: Point) => {
          // Check that his row is not equal to the other input
          const row = clamp(Math.round((p.y - 20) / 40), 0, this.size - 1);
          if (this.model.op === 'multiply' || this.model[inRows[i === 0 ? 1 : 0]] !== row) this.model[key] = row;
        }
      });
    }

    const $arrows = this.$$('.connections-right polygon');
    const outRows = ['outRow1', 'outRow2'] as ('outRow1'|'outRow2')[];

    for (const [i, key] of outRows.entries()) {
      slide($arrows[i], {
        move: (p: Point) => {
          // Check that this row not equal to the other output
          const row = clamp(Math.round((p.y - 20) / 40), 0, this.size - 1);
          this.model[key] = row;
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
      for (const [i, row] of this.$outputCells.entries()) {
        for (const [j, val] of row.entries()) {

          switch (state.op) {
            case 'multiply':
              // "Multiply a row by a non-zero factor"
              if (state.factor && i === state.outRow1) {
                const m = Expression.parse(this.$inputCells[state.inRow1][j].text).evaluate();
                val.text = '' + (state.factor * m);
              } else {
                val.text = this.$inputCells[i][j].text;
              }
              break;
            case 'add':
              // "Add a multiple of one row to another"
              val.text = this.$inputCells[i][j].text;
              if (state.factor && i === state.outRow1) {
                const c1 = Expression.parse(this.$inputCells[state.inRow1][j].text).evaluate();
                const c2 = Expression.parse(this.$inputCells[state.inRow2][j].text).evaluate();
                val.text = '' + (c1 + state.factor * c2);
              } else {
                val.text = this.$inputCells[i][j].text;
              }
              break;
            case 'swap':
              // "Swap two rows"
              if (i === state.outRow1) {
                val.text = this.$inputCells[state.inRow1][j].text;
              } else if (i === state.outRow2) {
                val.text = this.$inputCells[state.inRow2][j].text;
              } else {
                val.text = this.$inputCells[i][j].text;
              }
              break;
          }
        }
      }
    });

    // Button to Apply Row Operation
    const $applyBtn = this.$('.apply');
    $applyBtn?.on('click', () => {
      // swapping input and output
      for (const [i, row] of this.$inputCells.entries()) {
        for (const [j, val] of row.entries()) {
          val.text = this.$outputCells[i][j].text;
        }
      }

      if (this.checkForSolvedIdentity()) {
        console.log('Success!');
        this.$step.tools.confetti();
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
