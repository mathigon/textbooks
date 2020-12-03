import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView} from '@mathigon/boost';
import template from './gaussian.pug';

// for setting
const FRAME_WIDTH = 600;
const FRAME_HEIGHT = 200;

@register('x-gaussian', {template, attributes: ['dimension', 'matrix']})
export class Gaussian extends CustomElementView {

  private originalValues: number[][];
  private $frame!: SVGParentView;
  private $matrices!: SVGParentView[];

  private $leftMatrix!: SVGView;
  private $row1!: SVGView;
  private $row2!: SVGView;

  private $row3?: SVGView;

  private numVars!: number;
  private numRows!: number;
  private vars!: string[];

  private A!: number[][];
  private c!: number[];
  private rows!: number[][];

  private $rows!: SVGView[];

  ready() {
    console.log('This is the Gaussian');
    // this.originalValues = this.attr('matrix');
    // this.originalValues = [[-1, 1, 4], [-2, 1, 2]];

    this.$frame = $N('svg', {viewBox: `0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`}, this) as SVGParentView;
    // this.$matrices = [];

    this.parseMatrix();
    this.$('.matrix')?.hide();

    this.displayRows();
  }

  parseMatrix() {
    const matrices = this.$('.matrix')?.$$('x-math') as ElementView[];
    if (matrices.length != 3) throw new Error('Three matrices expected');

    const stripParens = (str: string) => str.replace(/\(|\)|\s/g, '');
    const replaceMinus = (str: string) => str.replace(/−/g, '-');

    // Matrix 1: A
    const numbers1 = matrices[0].$('desc')?.text.split(',')
        .map(stripParens)
        .map(replaceMinus) // different minus sign?
        .map(str => parseInt(str)) as number[];

    // Matrix 2: var names
    const vars2 = matrices[1].$('desc')?.text.split(',')
        .map(stripParens) as string[];
    this.numVars = vars2.length;
    this.vars = vars2.map(v => v);

    // Matrix 3: solution
    const numbers3 = matrices[2].$('desc')?.text.split(',')
        .map(stripParens)
        .map(replaceMinus) // different minus sign?
        .map(str => parseInt(str)) as number[];

    this.A = [];
    this.rows = [];
    this.c = numbers3;
    this.numRows = this.c?.length;
    for (let r = 0; r < this.numRows!; r++) {
      const Arow = numbers1.slice(r * this.numVars!, r * this.numVars! + this.numVars!);
      this.A.push(Arow);
      this.rows.push(Arow.concat(this.c[r]));
    }

    console.log(this.A);
    console.log(this.c);
    console.log(this.rows);
  }

  displayRow($row: SVGView, rowNumber: number) {

    const allTextAttr = {
      class: 'row-text',
      'dominant-baseline': 'central',
      fill: 'white'
    };

    const y = 14 + rowNumber * 50;
    const fillAttr = {
      class: 'row-fill', x: 13, y, width: this.numVars === 2 ? 160 : 240, height: 37, rx: 4
    };

    const divX = this.numVars === 2 ? 129 : 175;
    const dividerAttr = {
      x1: divX, x2: divX, stroke: 'white', 'stroke-width': '2', 'stroke-dasharray': '2 2'
    };

    const _rowFill = $N('rect', Object.assign({y}, fillAttr), $row) as SVGView;
    const textAttr = Object.assign({y: y + 37 / 2}, allTextAttr);
    const _divider = $N('line', Object.assign({y1: y, y2: y + 37}, dividerAttr), $row);


    const _text1 = $N('text', Object.assign({x: 20, text: this.rows[rowNumber][0]}, textAttr), $row) as SVGView;
    const _text2 = $N('text', Object.assign({x: 74, text: this.rows[rowNumber][1]}, textAttr), $row) as SVGView;

    if (this.numVars === 2) {
      const _text3 = $N('text', Object.assign({x: 134, text: this.rows[rowNumber][2]}, textAttr), $row) as SVGView;
    } else if (this.numVars === 3) {
      const _text3 = $N('text', Object.assign({x: (74 + 74 - 20), text: this.rows[rowNumber][2]}, textAttr), $row) as SVGView;
      const _text4 = $N('text', Object.assign({x: (74 + 74 - 20 + 134 - 74), text: this.rows[rowNumber][3]}, textAttr), $row) as SVGView;
    }

  }

  displayRows() {
    this.$rows = [];
    this.$leftMatrix = $N('g', {x: 30, y: 25}, this.$frame) as SVGView;

    // FIXME: size should be dependent on numbers of rows (numRows) and columns (numVars)
    const matrixHeight = this.numRows * 37 + (this.numRows + 1) * 13;
    const fillAttr = {
      class: 'matrix', x: 0, y: 0, width: 186, height: matrixHeight, rx: 0
    };

    const _fill = $N('rect', fillAttr, this.$leftMatrix) as SVGView;

    const rowAttr = {class: 'row-container', x: 13};
    for (let row = 0; row < this.numRows; row++) {
      const y = 14 + row * 50;
      const $row = $N('g', Object.assign({y}, rowAttr), this.$leftMatrix) as SVGView;
      this.displayRow($row, row);
      this.$rows.push($row);
    }
  }
}
