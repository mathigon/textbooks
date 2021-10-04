// import {CustomElementView, ElementView, observe, register, SVGView} from '@mathigon/boost';
import {CustomElementView, ElementView, register} from '@mathigon/boost';
import template from './vigenere-cipher.pug';

@register('x-vigenere-cipher', {template})
export class VigenereCipher extends CustomElementView {
  private $svg!: ElementView;
  //   private input!: string;
  //   private direction!: string;
  //   private targetLeftShift!: number;
  //   private timeout!: any;

  //   state = observe({
  //     output: '',
  //     currentShift: 0,
  //     lastShift: 0
  //   });

  ready() {
    const a = 'foo';
  }

  setShift() {
    // const lettersPerRadian = 26 / (Math.PI * 2);
    // const letterVal = Math.abs(lettersPerRadian * angle);
    // this.state.currentShift = Math.trunc(letterVal + 0.5) % 26;
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


