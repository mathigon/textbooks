// =============================================================================
// Pi Scroll Component
// (c) Mathigon
// =============================================================================


import {tabulate} from '@mathigon/core';
import {clamp} from '@mathigon/fermat';
import {$N, Browser, CustomElementView, ElementView, register} from '@mathigon/boost';


const ROW_HEIGHT = 30;
const NUM_ELS = 100;  // Number of reusable row elements.
const VISIBLE_ELS = 10;  // Number of rows that are visible on one screen.
const INITIAL = '141592653589793238462643383279502884197169399375105';


@register('x-pi-scroll')
export class PiScroll extends CustomElementView {
  private string = '';
  private numColumns = 0;
  private numRows = 0;
  private firstEl = 0;
  private letterWidth!: number;

  private $wrap!: ElementView;
  private $rows!: ElementView[];
  private $highlight1!: ElementView;
  private $highlight2!: ElementView;

  ready() {
    this.$wrap = $N('div', {class: 'pi-wrap'}, this);
    this.$rows = tabulate(() => $N('div', {class: 'pi-row'}, this.$wrap), NUM_ELS);
    this.$highlight1 = $N('div', {class: 'pi-highlight'}, this.$wrap);
    this.$highlight2 = $N('div', {class: 'pi-highlight'}, this.$wrap);
    this.$rows[0].text = INITIAL;

    this.letterWidth = this.$rows[0].width / INITIAL.length;

    Browser.onResize(() => {
      this.numColumns = Math.floor(this.innerWidth / this.letterWidth);
      this.setUp(this.string);
    });

    // const onScrollThrottled = throttle(onScroll, 500);
    this.on('scroll', (e) => this.onScroll(e.top));
  }

  updateRow(i: number) {
    const $row = this.$rows[i % NUM_ELS];
    $row.translate(0, i * ROW_HEIGHT);
    $row.text = this.string.substr(i * this.numColumns, this.numColumns);
  }

  setUp(data: string) {
    this.string = data;
    this.numRows = Math.ceil(data.length / this.numColumns);

    this.$wrap.css('height', this.numRows * 30 + 'px');
    for (let i = 0; i < NUM_ELS; ++i) this.updateRow(this.firstEl + i);
  }

  onScroll(top: number) {
    if (!this.string) return;

    const rowTop = top / ROW_HEIGHT - (NUM_ELS - VISIBLE_ELS) / 2;
    const newFirstEl = clamp(Math.floor(rowTop), 0, this.numRows - NUM_ELS);

    const [start, end] = (newFirstEl < this.firstEl) ? [newFirstEl, this.firstEl] :
        [this.firstEl + NUM_ELS, newFirstEl + NUM_ELS];

    for (let i = start; i < end; ++i) this.updateRow(i);
    this.firstEl = newFirstEl;
  }

  findString(str?: string) {
    if (!str) {
      this.$highlight1.hide();
      this.$highlight2.hide();
      return 0;
    }

    const index = this.string.indexOf(str);

    if (index < 0) {
      this.$highlight1.hide();
      this.$highlight2.hide();
      return -1;
    }

    this.$highlight1.show();

    const top = Math.floor(index / this.numColumns);
    const left = index % this.numColumns;

    this.$highlight1.css({
      top: top * ROW_HEIGHT + 'px',
      left: left * this.letterWidth + 'px',
      width: this.letterWidth * Math.min(str.length, this.numColumns - left) + 'px'
    });

    if (left + str.length > this.numColumns) {
      this.$highlight2.show();
      this.$highlight2.css({
        top: (top + 1) * ROW_HEIGHT + 'px',
        width: this.letterWidth * (left + str.length - this.numColumns) + 'px'
      });
    } else {
      this.$highlight2.hide();
    }

    this.scrollTo(top * ROW_HEIGHT - 50);
    return index;
  }
}
