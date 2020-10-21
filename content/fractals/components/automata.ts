// =============================================================================
// Cellular Automata
// (c) Mathigon
// =============================================================================


import {tabulate2D} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {$N, CustomElementView, ElementView, Observable, observe, pointerOver, register, SVGParentView} from '@mathigon/boost';


const RULES = ['000', '001', '010', '100', '011', '101', '110', '111'];
const MARGIN = 5;
const CELL_SIZE = 12;
const HIGHLIGHT = 'M-15,-15l0,17l12,0l0,12l17,0l0,-12l11,0l0,-17Z';


interface State {
  '000'?: boolean;
  '001'?: boolean;
  '010'?: boolean;
  '100'?: boolean;
  '011'?: boolean;
  '101'?: boolean;
  '110'?: boolean;
  '111'?: boolean;
  active: number;
}

function rect(x: number, y: number, $parent: ElementView, classes = '') {
  return $N('rect', {
    width: CELL_SIZE, height: CELL_SIZE,
    x: MARGIN + x * CELL_SIZE, y: MARGIN + y * CELL_SIZE,
    class: classes
  }, $parent);
}

@register('x-automaton')
export class CellularAutomaton extends CustomElementView {
  state!: Observable;

  ready() {
    const rows = +this.attr('size') || 10;
    const cols = rows * 2 - 1;

    this.state = observe<State>({active: -1});
    for (const r of RULES) this.state[r] = false;

    // Generate Rule Buttons ---------------------------------------------------

    const $rulesWrap = $N('div', {class: 'cellular-rules'}, this);
    const ruleWidth = 2 * MARGIN + 3 * CELL_SIZE;
    const ruleHeight = 2 * MARGIN + 2 * CELL_SIZE;

    for (const [i, rule] of RULES.entries()) {
      const $svg = $N('svg', {width: ruleWidth, height: ruleHeight,
        tabindex: 0}, $rulesWrap);
      for (const k of [0, 1, 2]) rect(k, 0, $svg, rule[k] === '1' ? 'fill' : '');
      const $highlight = $N('path', {d: HIGHLIGHT, class: 'highlight'}, $svg);
      $highlight.translate(MARGIN + CELL_SIZE, MARGIN + CELL_SIZE);
      const $value = rect(1, 1, $svg, 'red');
      this.state.watch(() => $value.setClass('fill', this.state[rule]));
      this.state.watch(() => $svg.setClass('focus', this.state.active === i));
      $svg.on('click', () => this.state[rule] = !this.state[rule]);
    }

    // Generate Grid -----------------------------------------------------------

    const width = 2 * MARGIN + cols * CELL_SIZE;
    const height = 2 * MARGIN + rows * CELL_SIZE;

    const $grid = $N('svg', {class: 'cellular-grid', width, height,
      viewBox: `0 0 ${width} ${height}`}, this) as SVGParentView;

    const $cells = tabulate2D((i, j) => rect(j, i, $grid), rows, cols);
    const cells = tabulate2D(() => false, rows, cols);
    const rules = tabulate2D(() => 0, rows, cols);

    cells[0][rows - 1] = true;  // One black cell in the first row.
    $cells[0][rows - 1].addClass('fill');

    const type = (i: number, j: number) =>
        (j < 0 || j >= cols) ? '0' : cells[i][j] ? '1' : '0';

    this.state.watch(() => {
      const choice = RULES.map(r => this.state[r] ? '1' : '0').join('');
      this.trigger('rule-change', choice);

      for (let i = 1; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
          const rule = type(i - 1, j - 1) + type(i - 1, j) + type(i - 1, j + 1);
          cells[i][j] = this.state[rule];
          $cells[i][j].setClass('fill', cells[i][j]);
          rules[i][j] = RULES.indexOf(rule);
        }
      }
    });

    // Hover Highlight ---------------------------------------------------------

    const $highlight = $N('path', {d: HIGHLIGHT, class: 'highlight'}, $grid);
    let highlightPosition = new Point(0, 0);

    pointerOver($grid, {
      enter: () => $highlight.show(),
      move: (p: Point) => {
        p = p.shift(-MARGIN, -MARGIN).scale(1 / CELL_SIZE).floor();
        if (p.equals(highlightPosition)) return;  // Point hasn't changed.

        const show = p.x > 0 && p.y > 0 && p.x < cols - 1 && p.y < rows;
        highlightPosition = p;
        $highlight.toggle(show);
        $highlight.setTransform(p.scale(CELL_SIZE).shift(MARGIN, MARGIN));
        this.state.active = show ? rules[p.y][p.x] : -1;
      },
      exit: () => {
        $highlight.hide();
        this.state.active = -1;
      }
    });
  }

  setRule(str: string) {
    for (const [i, s] of str.split('').entries()) {
      this.state[RULES[i]] = (s === '1');
    }
  }
}
