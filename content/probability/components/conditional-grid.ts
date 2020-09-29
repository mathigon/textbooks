// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================

//could add the "filled/unfilled" thing


import { $, $N, ElementView, CustomElementView, register, slide } from '@mathigon/boost';
import { Step } from '../shared/types';

const TAU = Math.PI * 2;

@register('x-conditional-grid')
export class Conditional extends CustomElementView {
  async ready() {
    const $label = this.$('.slider text')!;
    const $grid = this.$('.people');

    const width = (+this.attr('width')) || 400;
    const height = (+this.attr('height')) || width;
    this.css({ width: width + 'px', height: height + 'px' });
    console.log(width,height)

    return

    // $label.text = specifiedProbabilityValue;
    // $label.text = "<i>hey Capital 0.4</i>"

    if (0) {
      const $testText = document.getElementById('boogle');
      console.log($testText);
      let frameCount = 0;
      function loop() {
        ++frameCount;
        $testText.setTransform({ x: frameCount, y: frameCount });
        setTimeout(loop, 20);
      }
      loop();
    }

    const onlyOneColumn = this.attr('only-one-column') === 'true';
    const adornmentColors = ['blue', 'red', 'purple', 'green'];
    const $people = [];
    const personSpacing = 24;
    const firstColumnOfPeopleX = personSpacing;
    const lastColumnOfPeopleX = 11 * personSpacing + firstColumnOfPeopleX;
    const topColumnOfPeopleY = personSpacing * 1.5;

    // slider
    {
      const verticalPosition = topColumnOfPeopleY - personSpacing;

      const railWidth = 12 * personSpacing;
      const railHeight = 10;
      const railX = firstColumnOfPeopleX - personSpacing / 2.0;
      const $rail = $N('rect', {
        x: railX, y: verticalPosition - railHeight / 2.0, rx: 0,
        width: railWidth, height: railHeight
      }, this);
      this.append($rail);

      // wasn't getting sane values from svg!
      const handleWidth = 10.0;
      const handleHeight = railHeight * 2.5;
      const $handle = $N('rect', {
        x: railX - handleWidth / 2.0, y: verticalPosition, rx: 0,
        width: handleWidth, height: handleHeight,
        class: 'red'
      }, this);
      this.append($handle);


      let specifiedProbabilityValue = 0.0;
      const handleX = railWidth * specifiedProbabilityValue;
      $handle.setTransform({ x: handleX, y: verticalPosition - handleHeight });

      // wanna hit the horizontal thing too
      slide(this, {
        move: (p, start, last) => {
          specifiedProbabilityValue = (p.x - railX) / railWidth;
          if (specifiedProbabilityValue < 0.0) {
            specifiedProbabilityValue = 0.0;
          }
          if (specifiedProbabilityValue > 1.0) {
            specifiedProbabilityValue = 1.0;
          }

          $label.text = specifiedProbabilityValue;
          // $label.text = "<i>hey Capital 0.4</i>"
          $handle.setTransform({ x: railWidth * specifiedProbabilityValue, y: verticalPosition - handleHeight });

          if (specifiedProbabilityValue > 0.9) {
            console.log('scored!');
          }
        }
      });
    }

    function queryBit(i, j) {
      return (i & 1 << j) >> j;
    }
    function logBits(bits) {
      console.log(queryBit(bits, 3), queryBit(bits, 2), queryBit(bits, 1), queryBit(bits, 0));
    }
    const adornmentNumeratorFunctions = [
      () => 2,
      () => 3,
      (adornmentBits) => conditionalizer(12, 4, 1, adornmentBits),
      () => 4
      // (adornmentBits) => conditionalizer(2, 3, 0, adornmentBits),
    ];
    function conditionalizer(numeratorGivenBit, numeratorGivenNotBit, bit, adornmentBits) {
      if (adornmentBits !== undefined && adornmentBits !== null) {
        return queryBit(adornmentBits, bit) ? numeratorGivenBit : numeratorGivenNotBit;
      } else {
        const otherNumerator = adornmentNumeratorFunctions[bit]();
        return (otherNumerator * numeratorGivenBit + (12 - otherNumerator) * numeratorGivenNotBit) / 12;
      }
    }

    const buttons = [];
    const buttonWidth = 20;
    const buttonHeight = 30;
    for (let j = 0; j < (onlyOneColumn ? 1 : 2); j++) {
      for (let i = 0; i < 4; i++) {
        const button = $N('rect', {
          x: -buttonWidth / 2.0, y: -buttonHeight / 2.0, rx: 0,
          width: buttonWidth, height: buttonHeight,
          class: adornmentColors[i]
        }, this);
        buttons.push(button);

        button.setTransform({ x: lastColumnOfPeopleX + 60 + (j ? 1 : -1) * (buttonWidth / 2.0 + 2), y: 40 + i * (4 + buttonHeight) });
        this.append(button);
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
          let numClicked = 0;
          buttons.forEach((b) => {
            if (b.clickedAtSomePoint) ++numClicked;
          });
          if (numClicked >= 3)
            console.log('scored: press-all-buttons')
        });
      }
    }

    // const test = $N('text', {
    //   html: "hello", 
    //   x: -buttonWidth / 2.0, y: -buttonHeight / 2.0, rx: 0,
    //   class: 'white'
    // }, this);
    // test.setTransform({ x: lastColumnOfPeopleX + 60 + (j ? 1 : -1) * (buttonWidth / 2.0 + 2), y: 40 + i * (4 + buttonHeight) });
    // this.append(test);

    for (let i = 0; i < 12; ++i) {
      for (let j = 0; j < 12; ++j) {
        const width = 10;
        const height = 2 * width
        const $person = $N('rect', {
          width: width, height: height,
          x: -width / 2, y: -height / 2, rx: 0,
          class: 'grey', target: ['grey', 'large'].join(' ')
        }, this);

        $people.push($person);
        $grid.append($person);
        $person.randomNumber = Math.random();
        $person.$adornments = [null, null, null, null];
      }
    }

    const adornmentHeight = 5

    let pIndex = 0;
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

      const limit = pIndex + numWithThisCombination;
      for (pIndex; pIndex < limit; ++pIndex) {
        for (let j = 0; j < 4; j++) {
          if (queryBit(adornmentBits, j)) {
            const adornmentWidth = 18
            const $adornment = $N('rect', {
              width: adornmentWidth, height: adornmentHeight,
              x: -adornmentWidth / 2., y: -adornmentHeight / 2., rx: 0,
              class: adornmentColors[j]
            }, this);
            $grid.append($adornment);
            $people[pIndex].$adornments[j] = $adornment;
          }
        }
      }
    }

    function repositionPerson($person, gridX, gridY) {
      const absoluteX = firstColumnOfPeopleX + gridX * personSpacing;
      const absoluteY = topColumnOfPeopleY + gridY * personSpacing;
      $person.setTransform({ x: absoluteX, y: absoluteY });

      $person.$adornments.forEach(($adornment, i) => {
        if ($adornment !== null) {
          $adornment.setTransform({ x: absoluteX, y: absoluteY + adornmentHeight * (i - 1.5) });
        }
      });
    }

    $people.sort((a, b) => {
      return a.randomNumber - b.randomNumber;
    });
    for (let i = 0; i < 12; ++i) {
      for (let j = 0; j < 12; ++j) {
        repositionPerson($people[i * 12 + j], i, j);
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
      $people.forEach(p => {
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

      $people.forEach((p) => {
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