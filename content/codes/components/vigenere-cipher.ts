// import {CustomElementView, ElementView, observe, register, SVGView} from '@mathigon/boost';
import {delay, wait} from '@mathigon/core';
import {$, CustomElementView, ElementView, observe, register, SVGView} from '@mathigon/boost';
import template from './vigenere-cipher.pug';

@register('x-vigenere-cipher', {template})
export class VigenereCipher extends CustomElementView {
  private $svg!: ElementView;
  private $keyMarker!: ElementView;
  private $inputMarker!: ElementView;
  //   private input!: string;
  //   private direction!: string;
  //   private targetLeftShift!: number;
  //   private timeout!: any;

  //   state = observe({
  //     output: '',
  //     currentShift: 0,
  //     lastShift: 0
  //   });
  state = observe({
    output: '',
    curKey: '',
    curInput: ''

  });

  ready() {
    this.$svg = $('svg') as SVGView;
    this.$keyMarker = $('.key-marker') as SVGView;
    this.$inputMarker = $('.input-marker') as SVGView;

    delay(() => {
      this.setKeyMarkerPosition(0);
      this.setInputMarkerPosition(15);
    }, 500);
  }

  setShift() {
    // const lettersPerRadian = 26 / (Math.PI * 2);
    // const letterVal = Math.abs(lettersPerRadian * angle);
    // this.state.currentShift = Math.trunc(letterVal + 0.5) % 26;
  }

  setKeyMarkerPosition(n) {
    this.$keyMarker.animate({transform: `translateY(${n * 20}px)`}, 750);
  }

  setInputMarkerPosition(n) {
    this.$inputMarker.animate({transform: `translateX(${n * 20}px)`}, 750);
  }

  connectMarkers() {
    // calculate output letter
    // animate a line from the marker squares to the target letter square
    // draw-animate target letter square
  }

  encode() {
    // this.state.output = caesarCipher(this.input, this.state.currentShift);
  }

  decode() {
    // this.state.output = caesarCipher(this.input, 26 - this.state.currentShift);
  }

  updateModel() {
    // this.model.output = this.state.output;
  }

  run() {
    // this.direction === 'decode' ? this.decode() : this.encode();
    // this.updateModel();
  }
}


