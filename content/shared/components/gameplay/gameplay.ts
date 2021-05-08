// =============================================================================
// Gameplay Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register} from '@mathigon/boost';
import {Step, StepComponent} from '@mathigon/studio';
import template from './gameplay.pug';

type SlideGenerator = (el: ElementView, success: () => void, error: () => void) => void;


@register('x-gameplay', {template})
export class Gameplay extends CustomElementView implements StepComponent {
  private $dots!: ElementView;
  private $currentSlide?: ElementView;
  private slideTemplate!: string;
  private history: boolean[] = [];
  private target!: number[];
  private slideGenerator?: SlideGenerator;
  completed = false;

  ready() {
    const $template = this.$('.slide-template')!;
    this.slideTemplate = $template.html;
    $template.remove();

    this.target = (this.attr('target') || '6/8').split('/').map(x => +x);

    this.$dots = this.$('.dots')!;
    this.$dots.css('margin-left', -8 * this.target[1] + 'px');
    for (let i = 0; i < this.target[1]; ++i) $N('div', {class: 'dot'}, this.$dots);
  }

  setup($step: Step) {
    // TODO load history from db
    this.one('score', () => $step.score('gameplay'));
  }

  setSlideGenerator(g: SlideGenerator) {
    this.slideGenerator = g;
    this.makeSlide(true);
  }

  private score(correct = false) {
    this.$currentSlide?.addClass('done');
    this.$dots.children[this.history.length].addClass(correct ? 'green' : 'red');
    this.history.push(correct);

    if (!this.completed && this.history.filter(t => t).length >= this.target[0]) {
      this.completed = true;
      this.$('x-solved')!.enter();
      this.trigger('score');
    } else {
      setTimeout(() => this.makeSlide(), 1000);
    }
  }

  private makeSlide(initial = false) {
    if (!this.slideGenerator) return;

    if (this.history.length >= this.target[1]) {
      this.history.shift();

      this.$dots.animate({transform: ['none', 'translateX(-16px)']}, 300)
          .promise.then(() => this.$dots.css('transform', 'none'));

      const firstDot = this.$dots.children[0];
      firstDot.exit('fade', 300).promise.then(() => firstDot.remove());

      const newDot = $N('div', {class: 'dot'}, this.$dots);
      newDot.enter('fade', 300);
    }

    if (this.$currentSlide) {
      const $previous = this.$currentSlide;
      $previous.animate({transform: ['none', 'translateX(-100%)']}, 400)
          .promise.then(() => $previous.remove());
    }

    const $slide = $N('div', {class: 'slide', html: this.slideTemplate}, this);
    if (!initial) $slide.animate({transform: ['translateX(100%)', 'none']}, 400);

    this.$currentSlide = $slide;
    this.slideGenerator($slide, () => this.score(true), () => this.score());
  }
}
