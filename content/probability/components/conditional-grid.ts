// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================

// could add the "filled/unfilled" thing


import {$, $N, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {Step} from '../shared/types';

const TAU = Math.PI * 2;

@register('x-conditional-grid')
export class Conditional extends CustomElementView {
  async ready() {
    const $grid = this.$('.people');
    const $buttons = this.$('.buttons');

    // sorry, forgot how to get these properly!
    const self = this;
    function getAttribute(name) {
      for (let i = 0; i < self.attributes.length; ++i) {
        if (self.attributes[i].nodeName === name) {
          return self.attributes[i].nodeValue;
        }
      }
    }

    const onlyOneColumn = getAttribute('only-one-column') === 'true';
    const adornmentColors = ['blue', 'red', 'purple', 'green'];
    const $birds = [];
    const personSpacing = 24;
    const firstColumnOfPeopleX = personSpacing;
    const lastColumnOfPeopleX = 11 * personSpacing + firstColumnOfPeopleX;
    const topColumnOfPeopleY = personSpacing * 1.5;

    function queryBit(i, j) {
      return (i & 1 << j) >> j;
    }
    function logBits(bits) {
      console.log(queryBit(bits, 3), queryBit(bits, 2), queryBit(bits, 1), queryBit(bits, 0));
    }
    const adornmentNumeratorFunctions = [
      () => 2,
      () => 3,
      (adornmentBits) => conditionalizer(1, 12, 4, adornmentBits), // purple(2) depends on red(1)
      // () => 4,
      (adornmentBits) => conditionalizer(0, 0, 12, adornmentBits) // green(3) depends on blue(0)
    ];
    function conditionalizer(bitToCheck, numeratorIfBitTrue, numeratorIfBitFalse, adornmentBits) {
      if (adornmentBits !== undefined && adornmentBits !== null) {
        // console.log(adornmentBits)
        return queryBit(adornmentBits, bitToCheck) ? numeratorIfBitTrue : numeratorIfBitFalse;
      } else {
        const otherNumerator = adornmentNumeratorFunctions[bitToCheck]();
        return (otherNumerator * numeratorIfBitTrue + (12 - otherNumerator) * numeratorIfBitFalse) / 12;
      }
    }

    const buttons = [];
    this.buttons = buttons;
    const buttonWidth = 30;
    const buttonHeight = 25;
    for (let j = 0; j < (onlyOneColumn ? 1 : 2); j++) {
      for (let i = 0; i < 4; i++) {
        const button = $N('rect', {
          x: -buttonWidth / 2.0, y: -buttonHeight / 2.0, rx: 0,
          width: buttonWidth, height: buttonHeight,
          class: adornmentColors[i]
        }, this);
        buttons.push(button);

        button.setTransform({x: lastColumnOfPeopleX + 60 + (j ? 1 : -1) * (buttonWidth / 2.0 + 2), y: 40 + i * (4 + buttonHeight)});
        $buttons.append(button);
        button.i = i;
        button.j = j;
        button.clickedAtSomePoint = false;
        button.on('click', () => {
          if (button.j === 0) {
            rearrange(button.i, indexOnTop);
          } else {
            rearrange(indexOnLeft, button.i);
          }

          button.clickedAtSomePoint = true;
        });
      }
    }

    for (let i = 0; i < 12; ++i) {
      for (let j = 0; j < 12; ++j) {
        const width = 10;
        const height = 2 * width;
        const $person = $N('rect', {
          width: width, height: height,
          x: -width / 2, y: -height / 2, rx: 0,
          class: 'grey', target: ['grey', 'large'].join(' ')
        }, this);

        $birds.push($person);
        $grid.append($person);
        $person.randomNumber = Math.random();
        $person.$adornments = [null, null, null, null];
      }
    }

    const adornmentHeight = 5;

    let birdIndex = 0;
    // go through every combination, allocate the amount that are needed
    for (let adornmentBits = 0; adornmentBits < 16; adornmentBits++) {
      let numWithThisCombination = 144;

      for (let j = 0; j < 4; ++j) {
        if (queryBit(adornmentBits, j)) {
          numWithThisCombination *= adornmentNumeratorFunctions[j](adornmentBits);
        } else {
          numWithThisCombination *= (12 - adornmentNumeratorFunctions[j](adornmentBits));
        }
        numWithThisCombination /= 12;
      }

      {
        // let combinationProb = numWithThisCombination / 144
        // if (numWithThisCombination !== Math.round(numWithThisCombination))
        //   console.error("non integer combination: ")
        // totalProbability += combinationProb
        // logBits(adornmentBits);
        // console.log(numWithThisCombination)
      }

      const limit = birdIndex + numWithThisCombination;
      for (birdIndex; birdIndex < limit; ++birdIndex) {
        if ($birds[birdIndex] === undefined) {
          console.log(adornmentBits, birdIndex, numWithThisCombination);
        }
        for (let j = 0; j < 4; j++) {
          if (queryBit(adornmentBits, j)) {
            const adornmentWidth = 18;
            const $adornment = $N('rect', {
              width: adornmentWidth, height: adornmentHeight,
              x: -adornmentWidth / 2.0, y: -adornmentHeight / 2.0, rx: 0,
              class: adornmentColors[j]
            }, this);
            $grid.append($adornment);
            $birds[birdIndex].$adornments[j] = $adornment;
          }
        }
      }
    }

    function repositionPerson($person, gridX, gridY) {
      const absoluteX = firstColumnOfPeopleX + gridX * personSpacing;
      const absoluteY = topColumnOfPeopleY + gridY * personSpacing;
      $person.setTransform({x: absoluteX, y: absoluteY});

      $person.$adornments.forEach(($adornment, i) => {
        if ($adornment !== null) {
          $adornment.setTransform({x: absoluteX, y: absoluteY + adornmentHeight * (i - 1.5)});
        }
      });
    }

    $birds.sort((a, b) => {
      return a.randomNumber - b.randomNumber;
    });
    for (let i = 0; i < 12; ++i) {
      for (let j = 0; j < 12; ++j) {
        repositionPerson($birds[i * 12 + j], i, j);
      }
    }

    let indexOnLeft = -1;
    let indexOnTop = -1;
    function getQuadrant(p) {
      if (indexOnLeft === -1 || p.$adornments[indexOnLeft]) { // if there's no left/right, it goes on the "left"
        if (indexOnTop === -1 || p.$adornments[indexOnTop]) {
          return 'tl';
        } // if there's no top/bottom, it goes on the "top"
        else {
          return 'bl';
        }
      } else { // the right exists and we are there
        if (indexOnTop === -1 || p.$adornments[indexOnTop]) {
          return 'tr';
        } else {
          return 'br';
        }
      }
    }

    function rearrange(newIndexOnLeft, newIndexOnTop) {
      indexOnLeft = newIndexOnLeft;
      indexOnTop = newIndexOnTop;

      const leftWidth = newIndexOnLeft === -1 ? 12 : adornmentNumeratorFunctions[newIndexOnLeft]();
      const rightWidth = 12 - leftWidth;

      let numInTopLeft = 0;
      let numInTopRight = 0;
      $birds.forEach(p => {
        const quadrant = getQuadrant(p);
        if (quadrant === 'tl') {
          ++numInTopLeft;
        }
        if (quadrant === 'tr') {
          ++numInTopRight;
        }
      });

      // console.log(newIndexOnLeft,newIndexOnTop)
      // console.log(numInTopLeft,numInTopRight)

      if ((leftWidth !== 0 && numInTopLeft % leftWidth !== 0) || (rightWidth !== 0 && numInTopRight % rightWidth !== 0)) {
        console.error('indivisible:');
        if (numInTopLeft % leftWidth !== 0) {
          console.error('    Trying to divide ', numInTopLeft, 'by', leftWidth);
        }
        if (numInTopRight % rightWidth !== 0) {
          console.error('    Trying to divide ', numInTopRight, 'by', rightWidth);
        }
      }
      const topLeftHeight = numInTopLeft / leftWidth;
      const topRightHeight = numInTopRight / rightWidth;

      let topLeftNumSoFar = 0;
      let topRightNumSoFar = 0;
      let bottomLeftNumSoFar = 0;
      let bottomRightNumSoFar = 0;

      $birds.forEach((p) => {
        let quadrantNumSoFar = -1;
        let columnWidth = -1;
        let horizontalAddition = 0;
        let verticalAddition = 0;

        const quadrant = getQuadrant(p);
        if (quadrant === 'tl') {
          quadrantNumSoFar = topLeftNumSoFar;
          columnWidth = leftWidth;
          ++topLeftNumSoFar;
        } else if (quadrant === 'tr') {
          quadrantNumSoFar = topRightNumSoFar;
          horizontalAddition = leftWidth;
          columnWidth = rightWidth;
          ++topRightNumSoFar;
        } else if (quadrant === 'bl') {
          quadrantNumSoFar = bottomLeftNumSoFar;
          verticalAddition = topLeftHeight;
          columnWidth = leftWidth;
          ++bottomLeftNumSoFar;
        } else if (quadrant === 'br') {
          quadrantNumSoFar = bottomRightNumSoFar;
          horizontalAddition = leftWidth;
          verticalAddition = topRightHeight;
          columnWidth = rightWidth;
          ++bottomRightNumSoFar;
        }

        const horizontalPosition = horizontalAddition + quadrantNumSoFar % columnWidth;
        const verticalPosition = verticalAddition + (quadrantNumSoFar - quadrantNumSoFar % columnWidth) / columnWidth;
        repositionPerson(p, horizontalPosition, verticalPosition);
      });
    }
  }
}
