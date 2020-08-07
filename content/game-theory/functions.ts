// =============================================================================
// Game Theory
// (c) Mathigon
// =============================================================================


import {tabulate, total} from '@mathigon/core';


function toBinary(x: number) {
  return x.toString(2).split('').reverse().map(x => +x);
}

function toDecimal(binary: number[]) {
  let sum = 0;
  for (let i = 0; i < binary.length; ++i) {
    if (binary[i]) sum += 2 ** i;
  }
  return sum;
}

function binaryDigitalSum(summands: number[]) {

  const binary = summands.map(s => toBinary(s));
  const length = Math.max(...binary.map(b => b.length));

  const sum = tabulate(i => total(binary.map(s => s[i] || 0)) % 2, length);
  return toDecimal(sum);
}

function _nimStep(piles: number[]) {
  for (let i = 0; i < piles.length; ++i) {
    const temp = piles.slice(0);
    for (let j = 0; j < piles[i]; ++j) {
      temp[i] = j;
      if (!binaryDigitalSum(temp)) return [i, piles[i] - j];
    }
  }

  // This is a P position, remove one item from the first non-empty pile.
  return [piles.findIndex(x => x), 1];
}
