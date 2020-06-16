// =============================================================================
// Relation Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, hover, register, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Point} from '@mathigon/fermat';


@register('x-relation', {templateId: '#relation'})
export class Relation extends CustomElementView {
  private $inputs!: ElementView[];
  private $outputs!: ElementView[];

  private lastWidth = 0;
  private inputTargets: Point[] = [];
  private outputTargets: Point[] = [];

  ready() {
    const $svg = this.$('svg.connections') as SVGParentView;
    this.$inputs = this.$$('.domain .item');
    this.$outputs = this.$$('.range .item');

    this.resize();

    let $currentLine: SVGView|undefined = undefined;
    let activeTarget = -1;

    for (const [i, $el] of this.$inputs.entries()) {
      slide($el, {
        start: () => $currentLine = $N('line', {}, $svg) as SVGView,
        move: (p: Point) => {
          $currentLine!.setLine(this.inputTargets[i], this.outputTargets[activeTarget] || p);
        },
        end: () => {
          if (activeTarget >= 0) {
            this.$outputs[activeTarget].removeClass('active');
          } else {
            $currentLine!.exit('draw', 300, 0, true);
          }
          activeTarget = -1;
          $currentLine = undefined;
        },
        $box: $svg
      });
    }

    for (const [i, $el] of this.$outputs.entries()) {
      hover($el, {
        enter: () => {
          if (!$currentLine || i === activeTarget) return;
          activeTarget = i;
          $el.addClass('active');
        },
        exit: () => {
          if (!$currentLine) return;
          activeTarget = -1;
          $el.removeClass('active');
        }
      });
    }
  }

  resize() {
    const box = this.bounds;

    if (box.width === this.lastWidth) return;
    this.lastWidth = box.width;

    this.inputTargets = this.$inputs.map($i => {
      const inputBox = $i.bounds;
      return new Point(inputBox.left + inputBox.width - box.left,
          inputBox.top + inputBox.height / 2 - box.top);
    });

    this.outputTargets = this.$outputs.map($o => {
      const outputBox = $o.bounds;
      return new Point(outputBox.left - box.left,
          outputBox.top + outputBox.height / 2 - box.top);
    });

    // TODO Update existing connections
  }
}
