// =============================================================================
// Enigma Component
// (c) Mathigon
// =============================================================================


// TODO Nicer graphics and styles
// TODO Sound effects for clicking buttons/plugs
// TODO Share messages with friends


import {chunk, last} from '@mathigon/core';
import {$N, CustomElementView, ElementView, observe, register, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {mod} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {UPPER_CASE} from './utilities';
import template from './enigma.pug';


const LETTER_COUNT = UPPER_CASE.length;

const ROTORS = [
  {map: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', notch: 'Q'}, // rotor I
  {map: 'AJDKSIRUXBLHWTMCQGZNPYFVOE', notch: 'E'}, // rotor II
  {map: 'BDFHJLCPRTXVZNYEIWGAKMUSQO', notch: 'V'}, // rotor III
  {map: 'ESOVPZJAYQUIRHXLNFTGKDCMWB', notch: 'J'}, // rotor IV
  {map: 'VZBRGITYUPSDNHLXAWMJQOFECK', notch: 'Z'} // rotor V
];

interface Plug {
  $el: SVGView;
  key: string;
  center: Point;
  $cable?: SVGView;
}


// -----------------------------------------------------------------------------
// Enigma Logic

class Plugboard {
  count = 0;
  connections: Record<string, string> = {};

  connect(letter1: string, letter2: string) {
    if (letter1 === letter2 || this.count == 10) return;
    this.count++;
    this.connections[letter1] = letter2;
    this.connections[letter2] = letter1;
  }

  disconnect(letter1: string) {
    const conn = this.connections[letter1];
    if (!conn) return;
    delete this.connections[conn];
    delete this.connections[letter1];
    this.count--;
  }

  encode(ch: string): string {
    const conn = this.connections[ch];
    return conn ? conn : ch;
  }
}

class Reflector {
  public connections: Record<string, string> = {};

  constructor(reflections = 'YRUHQSLDPXNGOKMIEBFZCWVJAT') {
    for (let i = 0; i < LETTER_COUNT; i++) {
      this.connections[UPPER_CASE[i]] = reflections[i];
    }
  }

  reflect(letter: string) {
    return this.connections[letter];
  }
}

class Rotor {
  stepsToTurnover = 26;  // Countdown until we need to turn the adjacent rotor
  offset = 0;
  forward: Record<string, string> = {};
  reverse: Record<string, string> = {};

  constructor(wiringMap: string, public notch: string, initialPosition: string,
      ringSetting: string) {

    // build up the forward and reverse substitution maps
    for (let i = 0; i < LETTER_COUNT; i++) {
      this.forward[UPPER_CASE[i]] = wiringMap[i];
      this.reverse[wiringMap[i]] = UPPER_CASE[i];
    }

    // TODO inelegant to just repeatedly step...
    this.stepsToTurnover = UPPER_CASE.indexOf(notch) + 1;
    const initialSteps = UPPER_CASE.indexOf(initialPosition);
    for (let i = 0; i < initialSteps; i++) this.step();

    for (let i = 0; i < 26 - UPPER_CASE.indexOf(ringSetting); i++) {
      this.updateWires();
      this.offset = ++this.offset % LETTER_COUNT;
    }
  }

  encodeForward(letter: string) {
    const encodedIndex = UPPER_CASE.indexOf(this.forward[letter]);
    const offsetIndex = mod(encodedIndex - this.offset, LETTER_COUNT);
    return UPPER_CASE[offsetIndex];
  }

  encodeReverse(letter: string) {
    const letterIndex = UPPER_CASE.indexOf(letter);
    const offsetIndex = (letterIndex + this.offset) % LETTER_COUNT;
    return this.reverse[UPPER_CASE[offsetIndex]];
  }

  step() {
    this.updateWires();
    this.offset = (this.offset + 1) % LETTER_COUNT;

    this.stepsToTurnover -= 1;
    if (this.stepsToTurnover === 0) {
      this.stepsToTurnover = 26;
      return true;
    }
    return false;
  }

  private updateWires() {
    const advancedmap: Record<string, string> = {};
    for (let i = 0; i < LETTER_COUNT; i++) {
      const letter = UPPER_CASE[i];
      const nextLetter = UPPER_CASE[(i + 1) % LETTER_COUNT];
      advancedmap[letter] = this.forward[nextLetter];
      this.reverse[advancedmap[letter]] = letter;
    }
    this.forward = advancedmap;
  }

  rotate(up: boolean) {
    if (up) {
      this.step();
    } else {
      for (let i = 0; i < 25; ++i) this.step();
    }
  }
}

export class Machine {
  public rotors: Rotor[] = [];
  public reflector: Reflector;
  public plugboard: Plugboard;
  public usePlugboard = true;

  constructor(rotorChoice = [2, 1, 0], rotorPositions = ['A', 'A', 'A']) {
    // i == 0 is the right most rotor, and is first to encode and fastest moving
    for (let i = 0; i < rotorChoice.length; ++i) {
      this.rotors.push(new Rotor(ROTORS[rotorChoice[i]].map,
          ROTORS[rotorChoice[i]].notch, rotorPositions[i], 'A'));
    }

    this.reflector = new Reflector();
    this.plugboard = new Plugboard();
  }

  encodeLetters(UPPER_CASE:string) {
    return [...UPPER_CASE].map(l => this.encode(l)).join('');
  }

  encode(letter: string) {
    // Handle the double stepping anomaly: The middle rotor will advance on the
    // next step of the first rotor a second time in a row, if the middle rotor
    // is in its own turnover position.
    if (this.rotors[0].stepsToTurnover === 26 && this.rotors[1].stepsToTurnover === 1) {
      if (this.rotors[1].step()) this.rotors[2].step();
    }

    // Update rotor position after keypress
    // Completed rotations will step the next rotor
    if (this.rotors[0].step() && this.rotors[1].step()) {
      this.rotors[2].step();
    }

    const path = [letter.toUpperCase()];
    path.push(this.plugboard.encode(last(path)));
    for (const r of this.rotors) path.push(r.encodeForward(last(path)));
    path.push(this.reflector.reflect(last(path)));
    for (const r of this.rotors.slice(0).reverse()) path.push(r.encodeReverse(last(path)));
    path.push(this.plugboard.encode(last(path)));

    return path;
  }

  get rotorPositions() {
    return this.rotors.map(r => UPPER_CASE[r.offset]);
  }
}


// -----------------------------------------------------------------------------
// Component

@register('x-enigma', {template})
export class Enigma extends CustomElementView {
  private machine = new Machine();

  ready() {
    const state = observe({
      input: '',
      output: '',
      chunk: (s: string) => chunk(s.split(''), 5).map(c => c.join('')).join(' – '),
      rotorPosn: this.machine.rotorPositions,
      rotate: (i: number, up = false) => {
        this.machine.rotors[i].rotate(up);
        state.rotorPosn = this.machine.rotorPositions;
      },
      reset: () => {
        state.input = state.output = '';
        // TODO Maybe reset rotor positions?
      }
    });

    this.bindModel(state);

    // Setup keyboard and lights -----------------------------------------------

    const $lights: Record<string, ElementView> = {};
    for (const $l of this.$$('.lightboard .key')) $lights[$l.text] = $l;
    let $activeLight: ElementView;

    for (const $key of this.$$('.keyboard .key')) {
      const char = $key.text;
      slide($key, {
        down: () => {
          const encoded = last(this.machine.encode(char));
          $activeLight?.removeClass('glowing');
          $lights[encoded].addClass('glowing');
          $activeLight = $lights[encoded];
          state.input += char;
          state.output += encoded;
          state.rotorPosn = this.machine.rotorPositions;
        },
        up: () => {
          setTimeout(() => $activeLight?.removeClass('glowing'), 250);
        }
      });
    }

    // Setup plugboard ---------------------------------------------------------

    const $plugboard = this.$('.plugboard svg') as SVGParentView;
    const $cables = $plugboard.$('.cables')!;

    const plugs: Plug[] = $plugboard.$$('.plug').map($plug => ({
      $el: $plug as SVGView,
      key: $plug.data.key!,
      center: ($plug as SVGView).center
    }));
    let startPlug: Plug|undefined;

    slide($plugboard, {
      start: (posn: Point) => {
        const plug = plugs.find(p => Point.distance(p.center, posn) < 25);
        if (!plug) return;
        if (plug.$cable) {
          // Reconnect an existing cable
          const letter = this.machine.plugboard.encode(plug.key);
          plug.$cable = undefined;
          plug.$el.removeClass('active');
          startPlug = plugs.find(p => p.key === letter);
          this.machine.plugboard.disconnect(plug.key);
        } else {
          // Connect a new cable
          if (this.machine.plugboard.count >= 10) return;
          plug.$cable = $N('path', {}, $cables) as SVGView;
          plug.$el.addClass('active');
          startPlug = plug;
        }
      },
      move: (posn: Point) => {
        if (!startPlug) return;
        drawCable(startPlug.$cable!, startPlug.center, posn);
        // TODO Maybe snap to closest plug and show hover events?
      },
      end: (posn: Point) => {
        if (!startPlug) return;
        const endPlug = plugs.find(p => Point.distance(p.center, posn) < 25);
        if (endPlug && !endPlug.$cable && endPlug !== startPlug) {
          // Make a new connection
          drawCable(startPlug.$cable!, startPlug.center, endPlug.center);
          this.machine.plugboard.connect(startPlug.key, endPlug.key);
          endPlug.$cable = startPlug.$cable;
          endPlug.$el.addClass('active');
        } else {
          // Delete this cable
          startPlug.$cable!.remove();
          startPlug.$cable = undefined;
          startPlug.$el.removeClass('active');
        }
        startPlug = undefined;
      }
    });
  }
}

function drawCable($path: SVGView, start: Point, end: Point) {
  const diff = start.subtract(end);
  const dr = diff.length * 1.5;
  if (start.x > end.x) [start, end] = [end, start];
  $path.setAttr('d', `M${end.x},${end.y}A${dr},${1.3 * dr} 0 0 1 ${start.x},${start.y}`);
}
