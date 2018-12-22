// =============================================================================
// Pi Scroll Component
// (c) Mathigon
// =============================================================================


import {clamp, tabulate} from '@mathigon/core';
import {CustomElement, registerElement, $N, Browser} from '@mathigon/boost';


const ROW_HEIGHT = 30;
const NUM_ELS = 100;  // Number of reusable row elements.
const VISIBLE_ELS = 10;  // Number of rows that are visible on one screen.
const INITIAL = '141592653589793238462643383279502884197169399375105';

export class PiScroll extends CustomElement {

  ready() {
    this.$wrap = $N('div', {class: 'pi-wrap'}, this);
    this.$rows = tabulate(() => $N('div', {class: 'pi-row'}, this.$wrap), NUM_ELS);
    this.$highlight = $N('div', {class: 'pi-highlight'}, this.$wrap);
    this.$rows[0].text = INITIAL;

    this.string = '';
    this.numColumns = 0;
    this.numRows = 0;
    this.firstEl = 0;
    this.letterWidth = this.$rows[0].width / INITIAL.length;

    Browser.resize(() => {
      this.numColumns = Math.floor(this.innerWidth / this.letterWidth);
      console.log('resize', this.numColumns);
      this.setUp(this.string);
    });

    // const onScrollThrottled = throttle(onScroll, 500);
    this.on('scroll', (e) => this.onScroll(e.top));
  }

  updateRow(i) {
    const $row = this.$rows[i % NUM_ELS];
    $row.translateY(i * ROW_HEIGHT);
    $row.text = this.string.substr(i * this.numColumns, this.numColumns);
  }

  setUp(data) {
    this.string = data;
    this.numRows = Math.ceil(data.length / this.numColumns);

    this.$wrap.css('height', this.numRows * 30 + 'px');
    for (let i = 0; i < NUM_ELS; ++i) this.updateRow(this.firstEl + i);
  }

  onScroll(top) {
    if (!this.string) return;

    const rowTop = top / ROW_HEIGHT - (NUM_ELS - VISIBLE_ELS) / 2;
    const newFirstEl = clamp(Math.floor(rowTop), 0, this.numRows - NUM_ELS);

    const [start, end] = (newFirstEl < this.firstEl) ? [newFirstEl, this.firstEl]
        : [this.firstEl + NUM_ELS, newFirstEl + NUM_ELS];

    for (let i = start; i < end; ++i) this.updateRow(i);
    this.firstEl = newFirstEl;
  }

  findString(str) {
    if (!str) {
      this.$highlight.hide();
      return 0;
    }

    const index = this.string.indexOf(str);

    if (index < 0) {
      this.$highlight.hide();
      return -1;
    }

    this.$highlight.show();

    const top = Math.floor(index / this.numColumns) * ROW_HEIGHT;
    this.$highlight.css({
      top: top + 'px',
      left: (index % this.numColumns) * this.letterWidth + 'px',
      width: this.letterWidth * str.length + 'px'
    });

    this.scrollTo(top - 50);
    return index;
  }

}

registerElement('x-pi-scroll', PiScroll);
