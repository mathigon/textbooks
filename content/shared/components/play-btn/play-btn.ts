// =============================================================================
// Mathigon | Play Button Component
// (c) Mathigon
// =============================================================================


import {CustomElementView, ElementView, register} from '@mathigon/boost';
import template from './play-btn.pug';


@register('x-play-btn', {template})
export class PlayBtn extends CustomElementView {
  private visible = true;

  ready() {
    this.on('click', () => {
      this.play();
      setTimeout(() => this.trigger('play'), 400);
    });
  }

  play() {
    if (!this.visible) return;
    this.visible = false;
    this.exit('pop', 400);
  }

  reset() {
    if (this.visible) return;
    this.visible = true;
    setTimeout(() => this.enter('pop'), 400);
  }
}


@register('x-play-toggle', {template: '<button class="icon-btn"><x-icon name="play"></x-icon></button>'})
export class PlayToggle extends CustomElementView {
  private playing = false;
  private $icon!: ElementView;

  ready() {
    this.$icon = this.$('x-icon')!;
    this.$('button')!.on('click', () => this.toggle());
  }

  toggle() {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.playing) return;
    this.playing = true;
    this.$icon.setAttr('name', 'pause');
    this.trigger('play');
  }

  pause() {
    if (!this.playing) return;
    this.playing = false;
    this.$icon.setAttr('name', 'play');
    this.trigger('pause');
  }
}
