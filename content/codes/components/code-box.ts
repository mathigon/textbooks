// ============================================================================
// Code Box Components
// (c) Mathigon
// ============================================================================


import {$N, CustomElementView, ElementView, hover, register} from '@mathigon/boost';


type EncodeFn = (s: string, $el: ElementView) => void;


function getCaretOffset($el: ElementView) {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return -1;

  const range = selection.getRangeAt(0);
  const tmpRange = new Range();
  tmpRange.setStartBefore($el._el);
  tmpRange.setEnd(range.startContainer, range.startOffset);
  return tmpRange.toString().length;
}

function setCaretOffset($el: ElementView, offset: number) {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return -1;

  const range = selection.getRangeAt(0);
  range.setStart($el._el, offset);
  range.setEnd($el._el, offset);
}


@register('x-code-box')
export class CodeBox extends CustomElementView {
  private encodeFn?: EncodeFn;
  // private decodeFn?: EncodeFn;

  private $input!: ElementView;
  private $output!: ElementView;

  private plainText = '';
  private $inputChars: ElementView[] = [];
  private $outputChars: ElementView[] = [];

  ready() {
    this.$input = this.$('.input')!;
    this.$output = this.$('.output')!;

    let changes = 0;

    this.setPlainText(this.$input.text.trim());
    this.$input.on('change keyup input paste', () => {
      this.setPlainText(this.$input.text.trim());
      changes += 1;
      this.trigger('type', {text: this.plainText, changes});
    });
  }

  setPlainText(str: string, force = false) {
    if (!force && str === this.plainText) return;
    this.plainText = str;

    const caret = getCaretOffset(this.$input);
    this.$input.removeChildren();
    this.$output.removeChildren();

    let i = 0;
    for (const char of str.split('')) {
      if (!char.match(/[a-zA-Z0-9]/)) {
        this.$input._el.appendChild(document.createTextNode(char));
        // this.$output._el.appendChild(document.createTextNode(char));
      } else {
        if (this.$inputChars.length <= i) this.createSpan();
        this.$input.append(this.$inputChars[i]);
        this.$output.append(this.$outputChars[i]);
        if (force || this.$inputChars[i].text !== char) {
          this.$inputChars[i].text = char;
          this.$outputChars[i].removeChildren();
          if (this.encodeFn) this.encodeFn(char, this.$outputChars[i]);
        }
        i += 1;
      }
    }

    if (caret > 0) setCaretOffset(this.$input, caret);
  }

  encode(fn: EncodeFn) {
    this.encodeFn = fn;
    this.setPlainText(this.plainText, true);
  }

  private createSpan() {
    const $spanA = $N('span', {class: 'letter'}, this.$input);
    const $spanB = $N('span', {class: 'letter'}, this.$output);

    this.$inputChars.push($spanA);
    this.$outputChars.push($spanB);

    hover($spanA, {
      enter: () => $spanB.addClass('hover'),
      exit: () => $spanB.removeClass('hover')
    });

    hover($spanB, {
      enter: () => $spanA.addClass('hover'),
      exit: () => $spanA.removeClass('hover')
    });
  }
}
