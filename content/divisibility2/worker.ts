// =============================================================================
// Divisibility and Primes Background Worker
// (c) Mathigon
// =============================================================================


import {generatePrime, goldbach, isPrime} from '@mathigon/fermat';


declare global {
  function postMessage(message: any): void;
}

onmessage = (e: MessageEvent) => {
  const [fnName, arg] = e.data;
  let response;

  if (fnName === 'isPrime') {
    response = isPrime(arg);
  } else if (fnName === 'getPrime') {
    response = generatePrime(arg);
  } else if (fnName === 'goldbach') {
    response = goldbach(arg);
  }

  return postMessage(response);
};
