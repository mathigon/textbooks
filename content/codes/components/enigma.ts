// =============================================================================
// Enigma Component
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {CustomElementView, ElementView, register} from '@mathigon/boost';
import {createEnigmaPathSVG} from './enigma-path-svg';

const DEBUG = false;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const rotorset = [
//      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // letters (for reference)
  {map: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', notch: 'Q'}, // rotor I   - notch at Q
  {map: 'AJDKSIRUXBLHWTMCQGZNPYFVOE', notch: 'E'}, // rotor II  - notch at E
  {map: 'BDFHJLCPRTXVZNYEIWGAKMUSQO', notch: 'V'}, // rotor III - notch at V
  {map: 'ESOVPZJAYQUIRHXLNFTGKDCMWB', notch: 'J'}, // rotor IV  - notch at J
  {map: 'VZBRGITYUPSDNHLXAWMJQOFECK', notch: 'Z'} // rotor      - notch at Z
//      "YRUHQSLDPXNGOKMIEBFZCWVJAT"  // reflector (for reference)
];

function charToIndex(ch:string) {
  const charA = 'A'.charCodeAt(0);
  return ch.charCodeAt(0) - charA;
}

function getLast(a:string[]):string {
  return a.length ? a[a.length - 1] : '';
}

interface Substitution {
  [key: string]: string
}

class Plugboard {
  private count = 0;
  public connections:Substitution = {};

  connect(letter1:string, letter2:string) {
    if (letter1 === letter2) {
      return;
    } else if (this.count == 10) {
      return;
    }
    this.count++;
    this.connections[letter1] = letter2;
    this.connections[letter2] = letter1;
  }

  disconnect(letter1:string) {
    const conn = this.connections[letter1];
    if (!conn) {
      return;
    }
    this.count--;
    delete this.connections[conn];
    delete this.connections[letter1];
  }

  encode(ch:string):string {
    const conn = this.connections[ch];
    return conn ? conn : ch;
  }

  toString():string {
    const str = [...letters].map(l => this.connections[l] ? this.connections[l] : l).join('');
    return 'Plugboard\n\tABCDEFGHIJKLMNOPQRSTUVWXYZ\n\t' + str;
  }
}

class Reflector {
  public connections:Substitution = {};

  constructor(reflections:string) {
    for (let i = 0; i < letters.length; i++) {
      this.connections[letters[i]] = reflections[i];
    }
  }

  reflect(letter:string):string {
    const index = charToIndex(this.connections[letter]);
    return letters[index];
  }

  toString():string {
    const str = [...letters].map(l => this.connections[l]).join('');
    return 'Reflector\n\tABCDEFGHIJKLMNOPQRSTUVWXYZ\n\t' + str;
  }
}

class Rotor {
  private readonly index:number;
  // countdown steps until we need to turnover the adjacent rotor
  stepsToTurnover = 26;
  public offset = 0;
  public notch:string;
  private initialPosition:string;
  private ringSetting:string;
  public forward:Substitution = {};
  public reverse:Substitution = {};

  constructor(index:number, wiringMap:string, notch:string, initialPosition:string, ringSetting:string) {
    this.index = index;

    // build up the forward and reverse substitution maps
    for (let i = 0; i < letters.length; i++) {
      this.forward[letters[i]] = wiringMap[i];
      this.reverse[wiringMap[i]] = letters[i];
    }

    this.initialPosition = initialPosition;
    this.ringSetting = ringSetting;
    this.notch = notch;
    this.stepsToTurnover = charToIndex(notch) + 1;
    // TODO inelegant to just repeatedly step...
    for (let i = 0; i < charToIndex(initialPosition); i++) {
      this.step();
    }
    for (let i = 0; i < 26 - charToIndex(ringSetting); i++) {
      this.updateWires();
      this.offset = ++this.offset % letters.length;
    }
  }

  encodeForward(letter:string):string {
    const encodedIndex = charToIndex(this.forward[letter]);
    const offsetIndex = (letters.length + encodedIndex - this.offset) % letters.length;
    return letters[offsetIndex];
  }

  encodeReverse(letter:string):string {
    const letterIndex = charToIndex(letter);
    const offsetIndex = (letterIndex + this.offset) % letters.length;
    return this.reverse[letters[offsetIndex]];
  }

  step():boolean {
    this.updateWires();
    this.offset = ++this.offset % letters.length;
    if (DEBUG) {
      console.log(this.toString());
    }
    if (--this.stepsToTurnover == 0) {
      this.stepsToTurnover = 26;
      return true;
    }
    return false;
  }

  private updateWires() {
    const advancedmap:Substitution = {};
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const nextletter = letters[(i + 1) % letters.length];
      advancedmap[letter] = this.forward[nextletter];
      this.reverse[advancedmap[letter]] = letter;
    }
    this.forward = advancedmap;
  }

  toString():string {
    const fwd = [...letters].map(l => this.forward[l]).join('');
    const rev = [...letters].map(l => this.reverse[l]).join('');
    return 'Rotor' + this.index + ' position: ' + letters[this.offset] +
        '\n\tABCDEFGHIJKLMNOPQRSTUVWXYZ\n\t' + fwd + '\n\t' + rev;
  }
}

export class Machine {
  public rotors:Rotor[] = [];
  public reflector:Reflector;
  public plugboard:Plugboard;
  private skipPlugboard = false;

  constructor(rotorChoice:number[], rotorPositions:string[]) {
    // i == 0 is the right most rotor, and is first to encode and fastest moving
    for (let i = 0; i < rotorChoice.length; ++i) {
      this.rotors.push(new Rotor(i + 1, rotorset[rotorChoice[i]].map, rotorset[rotorChoice[i]].notch, rotorPositions[i], 'A'));
    }

    this.reflector = new Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
    this.plugboard = new Plugboard();

    if (DEBUG) {
      console.log('Initial state');
      console.log(this.toString());
    }
  }

  setUsePlugboard(usePlugboard:boolean) {
    this.skipPlugboard = !usePlugboard;
  }

  isUsingPlugboard() {
    return !this.skipPlugboard;
  }

  encodeLetters(letters:string) {
    return [...letters].map(l => this.encode(l)).join('');
  }

  encode(letter:string):string[] {
    /*
    Handle the double stepping anomaly:
    The middle rotor will advance on the next step of the first rotor a second time in a row,
    if the middle rotor is in its own turnover position.
    */
    if (this.rotors[0].stepsToTurnover == 26 && this.rotors[1].stepsToTurnover == 1) {
      if (this.rotors[1].step()) {
        this.rotors[2].step();
      }
    }

    // Update rotor position after keypress
    // Completed rotations will step the next rotor
    if (this.rotors[0].step()) {
      if (this.rotors[1].step()) {
        this.rotors[2].step();
      }
    }

    if (DEBUG) {
      console.log('letter: ' + letter);
    }

    let encoding:string[] = [letter.toUpperCase()];
    if (this.skipPlugboard) {
      // copy the entry key so the rotors have something to work with
      encoding.push(getLast(encoding));
    } else {
      encoding.push(this.plugboard.encode(getLast(encoding)));
    }
    encoding = this.rotors.reduce((acc, r) => [...acc, r.encodeForward(getLast(acc))], encoding);
    encoding.push(this.reflector.reflect(getLast(encoding)));
    encoding = this.rotors.reduceRight((acc, r) => [...acc, r.encodeReverse(getLast(acc))], encoding);
    if (this.skipPlugboard) {
      encoding.push(getLast(encoding));
    } else {
      encoding.push(this.plugboard.encode(getLast(encoding)));
    }

    if (DEBUG) {
      console.log('Encoding path was: ' + encoding.join('->'));
    }

    return encoding;
  }

  toString() {
    let str = this.plugboard.toString();
    str += '\n' + this.rotors.map(r => r.toString()).join('\n');
    str += '\n' + this.reflector.toString();
    return str;
  }

  rotorPositions() {
    return this.rotors.map(r => letters[r.offset]);
  }

  rotate(index:number, up:boolean) {
    if (up) {
      this.rotors[index].step();
    } else {
      for (let i = 0; i < 25; ++i) {
        this.rotors[index].step();
      }
    }
  }
}

// function testEnigma()
// {
//   DEBUG = true;
//   let test = "HELLOWORLDTHISISKENHELLOWORLDTHISISKEN";
//   let encoding = new Machine(rotorChoices, initialPositions).encodeLetters(test);
//   console.log(encoding);
//   let decoding = new Machine(rotorChoices, initialPositions).encodeLetters(encoding);
//   console.log(decoding);
//   console.log(test === decoding ? "Matches" : "Doesn't match");
// }

@register('x-enigma', {templateId: '#enigma'})
export class Enigma extends CustomElementView {
  private $lights: Obj<ElementView> = {};

  private rotorChoices = [2, 1, 0];
  private initialPositions = ['A', 'A', 'A'];

  // eslint-disable-next-line no-invalid-this
  private machine:Machine = new Machine(this.rotorChoices, this.initialPositions);
  public svgview:any;

  ready() {
    for (const $l of this.$$('.lightboard .key')) {
      this.$lights[$l.text] = $l;
    }

    for (const $k of this.$$('.keyboard .key')) {
      const char = $k.text;
      $k.on('pointerdown', () => {
        const encodepath:string[] = this.encode(char);
        this.showLight(getLast(encodepath));
        this.updateDisplay(encodepath);
        this.svgview.drawPath(encodepath, false);
      });
      $k.on('pointerup', () => {
        this.hideLight();
      });
    }

    // callback in case we want to mess with the other things in the gui when the svg keyboard is clicked
    const keypresscallback = (encodepath:string[]) => {
      this.svgview.drawPath(encodepath, true);
      this.updateDisplay(encodepath);
    };

    this.svgview = createEnigmaPathSVG('enigma_svg', this.machine, keypresscallback);
    this.connectRotorControls();
    this.svgview.drawPath(null);

    new PlugboardView('enigmaview', this.machine, this.svgview);
    document.getElementById('clearciphertext')!.addEventListener('click', () => {
      document.getElementById('ciphertext')!.innerHTML = '&nbsp;';
      document.getElementById('cipherpath')!.innerHTML = '&nbsp;';
    });

    document.getElementById('toggleplugboard')!.addEventListener('click', () => this.toggleplugboard());
  }

  toggleplugboard() {
    const usePlugboard = document.getElementById('plugboard')!.hidden;
    document.getElementById('plugboard')!.hidden = !usePlugboard;
    this.machine.setUsePlugboard(usePlugboard);
    this.svgview.drawPath(null);
  }

  showLight(char: string) {
    const $light = this.$lights[char];
    $light.addClass('glowing');
  }

  hideLight() {
    setTimeout(() => this.$$('.glowing').forEach(l => l.removeClass('glowing')), 250); // ensure a minimum time lit
  }

  encode(char: string) {
    return this.machine.encode(char);
  }

  showRotorPositions() {
    const positions = this.machine.rotorPositions();
    document.getElementById('rotor3setting')!.innerHTML = positions[2];
    document.getElementById('rotor2setting')!.innerHTML = positions[1];
    document.getElementById('rotor1setting')!.innerHTML = positions[0];
  }

  rotate(i:number, up:boolean) {
    this.machine.rotate(i, up);
    this.showRotorPositions();
    this.svgview.drawPath(null);
  }

  connectRotorControls() {
    document.getElementById('rotor1up')!.addEventListener('pointerdown', () => this.rotate(0, true));
    document.getElementById('rotor2up')!.addEventListener('pointerdown', () => this.rotate(1, true));
    document.getElementById('rotor3up')!.addEventListener('pointerdown', () => this.rotate(2, true));
    document.getElementById('rotor1dn')!.addEventListener('pointerdown', () => this.rotate(0, false));
    document.getElementById('rotor2dn')!.addEventListener('pointerdown', () => this.rotate(1, false));
    document.getElementById('rotor3dn')!.addEventListener('pointerdown', () => this.rotate(2, false));
    this.showRotorPositions();
  }

  updateDisplay(encodingpath:string[]) {
    if (!encodingpath) {
      return;
    }
    const encodedletter = getLast(encodingpath);
    this.showRotorPositions();
    document.getElementById('cipherpath')!.innerHTML = encodingpath.join('&#x27f6;');
    const cipherTextEl = document.getElementById('ciphertext') as HTMLElement;
    let curtext = cipherTextEl.innerHTML;
    const l = curtext.replace(/[\s+\\n]/g, '').length;
    if (l && l % 50 == 0) {
      curtext += '\n';
    } else if (l && l % 5 == 0) {
      curtext += ' ';
    }
    curtext += encodedletter;
    cipherTextEl.innerHTML = curtext;
  }
}

class PlugboardView {
  private readonly plugboard = document.getElementById('plugboard');
  private readonly enigmaview:HTMLElement;
  private readonly machine:Machine;
  private readonly svgview:any;

  private dragging = false;
  private mouseStart:number[] | null = null;
  private startPlug:HTMLElement | null = null;
  private join = false;
  private path:SVGPathElement | null = null;
  private cablecount = 0;
  private curcable = 0;
  private cables: { [letter: string]: number} = {};
  private freecables = Array(10).fill(true);

  constructor(enigmaviewid:string, machine:Machine, svgview:any) {
    this.enigmaview = document.getElementById(enigmaviewid) as HTMLElement;
    this.machine = machine;
    this.svgview = svgview;
    // avoid the I-beam cursor bug when dragging cables
    this.enigmaview.onmouseover = () => {
      document.onselectstart = function() {
        return false;
      };
    };
    this.enigmaview.onmouseout = () => {
      document.onselectstart = function() {
        return true;
      };
    };

    this.setupListeners();
  }

  setupListeners() {
    const plugboard = this.machine.plugboard;
    document.querySelectorAll<HTMLElement>('.plug').forEach(p => {
      p.addEventListener('pointerdown', () => {
        const letter = p.innerText;
        const check = plugboard.encode(letter);
        if (plugboard.encode(letter) === letter) {
          if (this.cablecount == 10) {
            return;
          }
          this.dragging = true;
          this.mouseStart = this.getPlugCoordinates(p);
          p.classList.add('plugOn');
          this.startPlug = p;
          this.curcable = this.freecables.findIndex(e => e); // next free cable index
          this.join = false;
        } else {
          p.classList.remove('plugOn');
          this.startPlug = document.getElementById('plug' + check);
          plugboard.disconnect(p.innerHTML);
          this.curcable = this.cables[p.innerHTML];
          document.getElementById('path' + this.curcable)!.innerHTML = '';
          this.freecables[this.curcable] = true;
          delete this.cables[p.innerHTML];
          this.cablecount--;
          this.svgview.drawMachine();
          this.dragging = true;
          this.mouseStart = this.getPlugCoordinates(this.startPlug as EventTarget);
          this.join = false;
        }
        return false;
      });
      p.addEventListener('pointerup', () => {
        if (!this.startPlug) {
          return;
        }
        const letter = p.innerText;
        if (letter === this.startPlug.innerHTML) {
          this.startPlug.classList.remove('plugOn');
          this.startPlug = null;
        } else if (plugboard.encode(letter) === letter) {
          this.setCableEndPt(this.getPlugCoordinates(p));
          p.classList.add('plugOn');
          plugboard.connect(this.startPlug.innerHTML, p.innerHTML);
          this.cables[this.startPlug.innerHTML] = this.curcable;
          this.cables[p.innerHTML] = this.curcable;
          this.freecables[this.curcable] = false;
          this.cablecount++;
          this.svgview.drawMachine();
          this.join = true;
        }
      });
    });

    // document.getElementById("plugboard").addEventListener('mouseup', function(e)
    document.addEventListener('pointerup', () => {
      this.dragging = false;
      if (this.startPlug && !this.join) {
        this.startPlug.classList.remove('plugOn');
        if (this.path) {
          this.path!.removeAttribute('d');
        }
        this.cablecount--;
      }
      this.startPlug = null;
    });

    document.getElementById('plugboard')!.addEventListener('pointermove', e => {
      if (this.dragging) {
        const mouseEnd = this.getClickCoordinates(e, e.currentTarget as EventTarget);
        this.setCableEndPt(mouseEnd);
      }
    });
  }

  private setCableEndPt(endpt:number[]) {
    if (!this.mouseStart) {
      return;
    }
    this.path = document!.getElementById('path' + this.curcable) as unknown as SVGPathElement;
    const dx = this.mouseStart[0] - endpt[0];
    const dy = this.mouseStart[1] - endpt[1];
    const dr = 6 * Math.sqrt(dx * dx + dy * dy) / 4;
    const start = endpt[0] > this.mouseStart[0] ? this.mouseStart : endpt;
    const end = endpt[0] > this.mouseStart[0] ? endpt : this.mouseStart;
    this.path.setAttribute('d', 'M' + end[0] + ',' + end[1] + 'A' + dr.toFixed(2) + ',' + (1.3 * dr).toFixed(2) +
      ' 0 0,1 ' + start[0] + ',' + start[1]);
  }

  private getClickCoordinates(e:MouseEvent, element:EventTarget) {
    const rect = (element as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return [x, y];
  }

  private getPlugCoordinates(plug:EventTarget) {
    const plugElement = plug as HTMLElement;
    const rect = plugElement.getBoundingClientRect();
    const parentrect = plugElement.parentElement!.getBoundingClientRect();
    return [
      rect.x - parentrect.x + plugElement.clientWidth / 2 + 2,
      rect.y - parentrect.y + plugElement.clientHeight / 2 + 2
    ];
  }
}
