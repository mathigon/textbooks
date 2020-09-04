// =============================================================================
// Enigma Component
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {$, $$, CustomElementView, ElementView, register} from '@mathigon/boost';
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

  private $rotorupcontrols: ElementView[] = [];
  private $rotorsettings: ElementView[] = [];
  private $rotordncontrols: ElementView[] = [];

  private $ciphertext!: ElementView;
  private $cipherpath!: ElementView;

  private rotorChoices = [2, 1, 0];
  private initialPositions = ['A', 'A', 'A'];

  // eslint-disable-next-line no-invalid-this
  private machine:Machine = new Machine(this.rotorChoices, this.initialPositions);
  public svgview:any;

  ready() {
    this.$$('.rotorup').forEach((r, i) => {
      r.on('pointerdown', () => this.rotate(i, true));
      this.$rotorupcontrols.push(r);
    });

    for (const $r of this.$$('.rotorsetting')) {
      this.$rotorsettings.push($r);
    }

    this.$$('.rotordn').forEach((r, i) => {
      r.on('pointerdown', () => this.rotate(i, false));
      this.$rotordncontrols.push(r);
    });

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
    this.svgview.drawPath(null);

    new PlugboardView('enigmaview', this.machine, this.svgview);
    this.$ciphertext = this.$('.ciphertext pre') as ElementView;
    this.$cipherpath = this.$('.cipherpath pre') as ElementView;
    this.$('.clearciphertext')!.on('click', () => {
      this.$ciphertext.html = '&nbsp;';
      this.$cipherpath.html = '&nbsp;';
    });

    $('.toggleplugboard')!.on('click', () => this.toggleplugboard());
  }

  toggleplugboard() {
    const isUsingPlugboard = this.machine.isUsingPlugboard();
    $('.plugboard')!.toggle(!isUsingPlugboard);
    this.machine.setUsePlugboard(!isUsingPlugboard);
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
    for (let i = 0; i < 3; ++i) {
      // the 3 rotors are indexed right to left on the machine
      this.$rotorsettings[i]!.text = positions[2 - i];
    }
  }

  rotate(i:number, up:boolean) {
    // the 3 rotors are indexed right to left on the machine
    this.machine.rotate(2 - i, up);
    this.showRotorPositions();
    this.svgview.drawPath(null);
  }

  updateDisplay(encodingpath:string[]) {
    if (!encodingpath) {
      return;
    }
    const encodedletter = getLast(encodingpath);
    this.showRotorPositions();
    this.$cipherpath.html = encodingpath.join('&#x27f6;');
    let curtext = this.$ciphertext.html;
    const l = curtext.replace(/[\s+\\n]/g, '').length;
    if (l && l % 50 == 0) {
      curtext += '\n';
    } else if (l && l % 5 == 0) {
      curtext += ' ';
    }
    curtext += encodedletter;
    this.$ciphertext.html = curtext;
  }
}

class PlugboardView {
  private readonly enigmaview:HTMLElement;
  private readonly machine:Machine;
  private readonly svgview:any;

  private dragging = false;
  private mouseStart:number[] | null = null;
  private startPlug:ElementView | undefined = undefined;
  private join = false;
  private path:ElementView | undefined = undefined;
  private cablecount = 0;
  private curcable = 0;
  private cables: { [letter: string]: number} = {};
  private freecables = Array(10).fill(true);
  private cablepaths:ElementView[];
  private $plugs: Obj<ElementView> = {};

  constructor(enigmaviewid:string, machine:Machine, svgview:any) {
    this.enigmaview = document.getElementById(enigmaviewid) as HTMLElement;
    this.machine = machine;
    this.svgview = svgview;
    this.cablepaths = $$('.plugtarget>path');
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

    for (const $p of $$('.plugboard .plug')) {
      this.$plugs[$p.text] = $p;
    }

    this.setupListeners();
  }

  setupListeners() {
    const plugboard = this.machine.plugboard;
    $$('.plug').forEach(p => {
      p.on('pointerdown', () => {
        const letter = p.text;
        const check = plugboard.encode(letter);
        if (plugboard.encode(letter) === letter) {
          if (this.cablecount == 10) {
            return;
          }
          this.dragging = true;
          this.mouseStart = this.getPlugCoordinates(p);
          p.addClass('plugOn');
          this.startPlug = p;
          this.curcable = this.freecables.findIndex(e => e); // next free cable index
          this.join = false;
        } else {
          p.removeClass('plugOn');
          this.startPlug = this.$plugs[check];
          plugboard.disconnect(letter);
          this.curcable = this.cables[letter];
          this.cablepaths[this.curcable]!.html = '';
          this.freecables[this.curcable] = true;
          delete this.cables[letter];
          this.cablecount--;
          this.svgview.drawMachine();
          this.dragging = true;
          this.mouseStart = this.getPlugCoordinates(this.startPlug as ElementView);
          this.join = false;
        }
        return false;
      });
      p.on('pointerup', () => {
        if (!this.startPlug) {
          return;
        }
        const letter = p.text;
        if (letter === this.startPlug.text) {
          this.startPlug.removeClass('plugOn');
          this.startPlug = undefined;
        } else if (plugboard.encode(letter) === letter) {
          this.setCableEndPt(this.getPlugCoordinates(p));
          p.addClass('plugOn');
          plugboard.connect(this.startPlug.text, letter);
          this.cables[this.startPlug.text] = this.curcable;
          this.cables[letter] = this.curcable;
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
        this.startPlug.removeClass('plugOn');
        if (this.path) {
          this.path.removeAttr('d');
        }
        this.cablecount--;
      }
      this.startPlug = undefined;
    });

    $('.plugboard')!.on('pointermove', e => {
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
    this.path = this.cablepaths[this.curcable];
    const dx = this.mouseStart[0] - endpt[0];
    const dy = this.mouseStart[1] - endpt[1];
    const dr = 6 * Math.sqrt(dx * dx + dy * dy) / 4;
    const start = endpt[0] > this.mouseStart[0] ? this.mouseStart : endpt;
    const end = endpt[0] > this.mouseStart[0] ? endpt : this.mouseStart;
    this.path.setAttr('d', 'M' + end[0] + ',' + end[1] + 'A' + dr.toFixed(2) + ',' + (1.3 * dr).toFixed(2) +
      ' 0 0,1 ' + start[0] + ',' + start[1]);
  }

  private getClickCoordinates(e:MouseEvent, element:EventTarget) {
    const rect = (element as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return [x, y];
  }

  private getPlugCoordinates(plug:ElementView) {
    return [
      plug.bounds.left - plug.parent!.bounds.left + plug.width / 2 + 2,
      plug.bounds.top - plug.parent!.bounds.top + plug.height / 2 + 2
    ];
  }
}
