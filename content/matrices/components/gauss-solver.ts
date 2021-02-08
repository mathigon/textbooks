// =============================================================================
// Gauss Matrix Solver Component
// (c) Mathigon
// =============================================================================


import {tabulate2D} from '@mathigon/core';
import {clamp} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {Expression} from '@mathigon/hilbert';
import {$N, CustomElementView, ElementView, Observable, observe, register, slide} from '@mathigon/boost';
import template from './gauss-solver.pug';


type Model = {input: number[][], output: number[][], op: string, inRow1: number, inRow2: number, factor: number};


@register('x-gauss-solver', {template})
export class GaussSolver extends CustomElementView {
  model!: Observable<Model>;
  size!: number;  // Number of Matrix rows
  $inputCells!: ElementView[][];  // Array of all cells in the left matrix;
  $outputCells!: ElementView[][];  // Array of all cells in the left matrix;

  ready() {
    // TODO(@plegner) Better expression-to-array conversion
    const input = Expression.parse(this.attr('matrix'))
        .evaluate({'[': (...args: number[]) => [...args] as any}) as unknown as number[][];

    this.bindModel(observe({input, output: input, inRow1: 0, inRow2: 1, factor: 1}));
    this.size = input.length;

    // Set up the input and output matrices
    const $matrices = this.$$('.matrix');
    for (const $m of $matrices) $m.css('grid-template-columns', `repeat(${this.size + 1}, 36px)`);

    this.$inputCells = tabulate2D((i, j) =>
      $N('div', {text: input[j][i]}, $matrices[0]), this.size + 1, this.size);
    this.$inputCells = tabulate2D(() =>
      $N('div', {text: 0}, $matrices[1]), this.size + 1, this.size);

    const $circles = this.$$('.connections circle');
    const rows = ['inRow1', 'inRow2'] as ('inRow1'|'inRow2')[];
    for (const [i, key] of rows.entries()) {
      slide($circles[i], {
        move: (p: Point) => {
          // Check that this row is not equal to the other input
          const row = clamp(Math.round((p.y - 20) / 40), 0, this.size - 1);
          if (this.model.op === 'multiply' || this.model[rows[1 - i]] !== row) this.model[key] = row;
        }
      });
    }

    this.model.watch((state) => {
      console.log('Operation changed:', state.op);
    });

    this.model.watch((state) => {
      console.log('Factor changed:', state.factor);
    });
  }
}
