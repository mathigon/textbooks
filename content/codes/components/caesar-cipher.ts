// import {chunk, last} from '@mathigon/core';
import {CustomElementView, ElementView, register} from '@mathigon/boost';
// import {$N, CustomElementView, ElementView, observe, register, slide, SVGParentView, SVGView} from '@mathigon/boost';
// import {caesarCipher} from './utilities';
import {rotateDisk} from '../../shared/components/disk';
// import {RED} from '../shared/constants';
import template from './caesar-cipher.pug';

@register('x-caesar-cipher', {template})
export class CaesarCipher extends CustomElementView {

  private $wheel!: ElementView;

  ready() {
    this.$wheel = this.$('#caesar-outer-circle')!;
    // const w = this.$wheel;

    // rotateDisk(this.$wheel, {
    //   resistance: 0.5,
    //   draw(angle: number) {
    //     w.setTransform(undefined, angle);
    //   }
    // });
  }
}


