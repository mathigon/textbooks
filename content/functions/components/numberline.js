// =============================================================================
// Numberline Component
// (c) Mathigon
// =============================================================================



import { round, nearlyEquals } from '@mathigon/fermat';
import { CustomElement, registerElement, Draggable, $N } from '@mathigon/boost';

const MIN = -10;
const MAX = 10;
const F = (x => 2 * x - 5);


function makeTickmarks(min, max, major, minor, generate) {
  for (let i = min; i <= max; i += minor) {
    i = round(i, 3);
    generate(i, nearlyEquals(i % major, 0));
  }
}


export class Numberline extends CustomElement {

  ready() {
    const $top = this.$('.top');
    const $bottom = this.$('.bottom');
    const $connection = this.$('.connections path');
    const $slider = $top.$('.slider');
    const $output = $bottom.$('.slider');

    const width = this.width;

    makeTickmarks(MIN, MAX, 1, 0.2, (x, isMajor) => {
      const px = (x - MIN) / (MAX - MIN) * width;

      $N('div', {class: 'tick' + (isMajor ? ' major' : ''), style: `left: ${px}px`}, $top);
      $N('div', {class: 'tick' + (isMajor ? ' major' : ''), style: `left: ${px}px`}, $bottom);

      if (isMajor) {
        $N('div', {class: 'label', style: `left: ${px}px`, html: x}, $top);
        $N('div', {class: 'label', style: `left: ${px}px`, html: x}, $bottom);
      }
    });

    const slider = new Draggable($slider, $top, 'x');
    slider.on('drag', update);
    update();

    function update() {
      const px = slider.position.x;
      const x = round(MIN + (px / width) * (MAX - MIN), 1);

      const y = round(F(x), 1);
      const py = (y - MIN) / (MAX - MIN) * width;

      $slider.text = x;
      $output.text = y;
      $output.css('left', py + 'px');
      $output.css('display', (y < MIN || y > MAX) ? 'none' : 'block');
      $connection.setAttr('d', `M ${px} 0 C ${px} 40, ${py} 20, ${py} 60`);
    }

  }
}

registerElement('x-numberline', Numberline, {templateId: '#numberline'});
