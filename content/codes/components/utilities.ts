// ============================================================================
// Code Utilities
// (c) Mathigon
// ============================================================================


import {Obj, repeat} from '@mathigon/core';


export const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
export const UPPER_CASE = LOWER_CASE.toUpperCase();

export const ENGLISH_FREQUENCY: Obj<number> = {
  a: 0.08167, b: 0.01492, c: 0.02782, d: 0.04253, e: 0.12702, f: 0.02228,
  g: 0.02015, h: 0.06094, i: 0.06966, j: 0.00154, k: 0.00772, l: 0.04024,
  m: 0.02406, n: 0.06749, o: 0.07507, p: 0.01929, q: 0.00095, r: 0.05987,
  s: 0.06327, t: 0.09056, u: 0.02758, v: 0.00978, w: 0.02360, x: 0.00150,
  y: 0.01974, z: 0.00074
};

export const MORSE_CODE: Obj<string> = {
  a: '•−', b: '−•••', c: '−•−•', d: '−••', e: '•', f: '••−•', g: '−−•',
  h: '••••', i: '••', j: '•−−−', k: '−•−', l: '•−••', m: '−−', n: '−•',
  o: '−−−', p: '•−−•', q: '−−•−', r: '•−•', s: '•••', t: '−', u: '••−',
  v: '•••−', w: '•−−', x: '−••−', y: '−•−−', z: '−−••',
  1: '•−−−−', 2: '••−−−', 3: '•••−−', 4: '••••−', 5: '•••••',
  6: '−••••', 7: '−−•••', 8: '−−−••', 9: '−−−−•', 0: '−−−−−'
};


/**
 * Enciphers a string by shifting every letter by a certain offset through the
 * alphabet.
 */
export function caesarCipher(msg: string, shift = 0) {
  let cipher = '';

  for (const l of msg) {
    if (l >= 'a' && l <= 'z') {
      cipher += LOWER_CASE[(LOWER_CASE.indexOf(l) + shift) % 26];
    } else if (l >= 'A' && l <= 'Z') {
      cipher += UPPER_CASE[(UPPER_CASE.indexOf(l) + shift) % 26];
    } else {
      cipher += l;
    }
  }

  return cipher;
}


/** Enciphers a string using a Vigenere cipher with a give key. */
export function vigenereCipher(msg: string, key: string) {
  let cipher = '';
  let count = 0;
  const keyLength = key.length;
  key = key.toLowerCase();

  for (const l of msg) {
    // The shift changes after every iteration, based on the key word
    const shift = LOWER_CASE.indexOf(key[count % keyLength]);

    if (l >= 'a' && l <= 'z') {
      cipher += LOWER_CASE[(LOWER_CASE.indexOf(l) + shift) % 26];
      count++;
    } else if (l >= 'A' && l <= 'Z') {
      cipher += UPPER_CASE[(UPPER_CASE.indexOf(l) + shift) % 26];
      count++;
    } else {
      cipher += l;
    }
  }

  return cipher;
}


/** Returns the relative frequency of a given letter in the English language. */
export function letterFrequency(letter: string) {
  return ENGLISH_FREQUENCY[letter.toLowerCase()] || 0;
}


/** Counts how often every letter occurs in a given cipher. */
export function cipherLetterFreq(cipher: string) {
  const msg = cipher.toLowerCase();
  const freq = repeat(0, 26);

  for (const l of msg) {
    if (l >= 'a' && l <= 'z') freq[LOWER_CASE.indexOf(l)] += 1;
  }

  return freq;
}
