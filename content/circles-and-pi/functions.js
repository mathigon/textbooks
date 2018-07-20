// =============================================================================
// Circles and Pi
// (c) Mathigon
// =============================================================================



import {  } from '@mathigon/fermat';


export function digits($step) {

  const $digits = $step.$('.digits');

  fetch('/resources/circles-and-pi/images/pi-100k.txt')
      .then(response => response.text())
      .then(data => $digits.text = data + '…');

}
