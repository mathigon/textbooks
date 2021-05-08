// =============================================================================
// Solved Component
// (c) Mathigon
// =============================================================================


import {loop} from '@mathigon/core';
import {AnimationResponse, CustomElementView, ElementView, enter, exit, register, replaceSvgImports, ResolvedAnimation} from '@mathigon/boost';
import {Step} from '@mathigon/studio';
import template from './solved.pug';


const colors = loop(['red', 'orange', 'lime', 'green', 'teal', 'blue', 'purple']);
const images = loop(['badge', 'homework', 'laurels', 'lightbulb', 'owl', 'scroll', 'trophy']);


@register('x-solved', {template})
export class Solved extends CustomElementView {
  private visible = false;
  private $svg!: ElementView;
  private $text!: ElementView;

  ready() {
    this.$svg = this.$('x-icon.sketch')!;
    this.$text = this.$('.message')!;
    this.$('.close')!.on('click', () => this.exit());
  }

  enter(): AnimationResponse {
    if (this.visible) return ResolvedAnimation;
    this.visible = true;

    const $step = this.parents('x-step')[0] as Step|undefined;
    const hint = $step?.addHint('correct')?.text || 'Well done!';

    this.setAttr('class', 'gradient-' + colors());
    this.$text.text = hint.replace(/<.*?>/g, '');
    this.$svg.setAttr('name', images());
    replaceSvgImports();

    return enter(this, 'pop', 300, 600);
  }

  exit(): AnimationResponse {
    if (!this.visible) return ResolvedAnimation;
    this.visible = false;
    return exit(this, 'pop', 300);
  }
}
