// =============================================================================
// Scale Box Component
// (c) Mathigon
// =============================================================================


import {Browser, CustomElementView, register} from '@mathigon/boost';


@register('x-scale-box', {template: '<div><slot></slot></div>'})
export class ScaleBox extends CustomElementView {

  ready() {
    const $wrap = this.children[0];
    const width = +this.attr('width') || 760;
    $wrap.css('width', width + 'px');
    const height = $wrap.height;

    Browser.onResize(() => {
      const scale = this.width / width;
      this.css('height', height * scale + 'px');
      $wrap.css('transform', `scale(${scale})`);
    });
  }
}
