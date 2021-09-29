import {CustomElementView, ElementView, observe, register, SVGView} from '@mathigon/boost';
import {rotateDisk} from '../../shared/components/disk';
import {caesarCipher} from './utilities';
import template from './caesar-cipher.pug';

@register('x-caesar-cipher', {template})
export class CaesarCipher extends CustomElementView {
  private $wheel!: ElementView;
  private input!: string;
  private direction!: string;
  private targetLeftShift!: number;
  model!: any;
  onMatch?: () => void;

  state = observe({
    output: '',
    currentShift: 0
  });

  ready() {
    this.$wheel = this.$('#caesar-inner-circle')! as SVGView;
    this.direction = this.attr('direction');
    if (this.direction && !['encode', 'decode'].includes(this.direction)) {
      throw Error('x-caesar-cipher must have a direction of "encode" or "decode"');
    }
    this.targetLeftShift = Number(this.attr('target-left-shift'));
    this.input = this.attr('input');

    rotateDisk(this.$wheel, {
      resistance: 0.5,
      draw: (angle, isMomentum) => {
        this.$wheel.setTransform(undefined, angle);

        if (this.input && !isMomentum) {
          this.setShift(angle);
          this.run();
          if (this.state.currentShift === this.targetLeftShift && this.onMatch) {
            this.onMatch();
          }
        }
      }
    });
  }

  setShift(angle: number) {
    const lettersPerRadian = 26 / (Math.PI * 2);
    const letterVal = Math.abs(lettersPerRadian * angle);
    this.state.currentShift = Math.trunc(letterVal + 0.5) % 26;
  }

  encode() {
    this.state.output = caesarCipher(this.input, this.state.currentShift);
  }

  decode() {
    this.state.output = caesarCipher(this.input, 26 - this.state.currentShift);
  }

  updateModel() {
    this.model.output = this.state.output;
  }

  run() {
    this.direction === 'decode' ? this.decode() : this.encode();
    this.updateModel();
  }
}


