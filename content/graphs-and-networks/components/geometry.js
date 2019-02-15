// =============================================================================
// Mathigon.org | Graph Geometry Functions
// (c) Mathigon
// =============================================================================



import { list, tabulate } from '@mathigon/core';
import { permutations } from '@mathigon/fermat';

export function travellingSalesman(dist) {
  const n = dist.length;
  const cities = list(n);

  let minLength = Infinity;
  let minPath = null;

  loop1:
  for (let path of permutations(cities)) {
    let length = 0;
    for (let i = 0; i < n - 1; ++i) {
      length += dist[path[i]][path[i+1]];
      if (length > minLength) continue loop1;
    }
    if (length < minLength) {
      minLength = length;
      minPath = path;
    }
  }

  return { path: minPath, length: minLength };
}

const COLOURS = [1,2,3,4];

function canColour(adjMatrix, colours, index, colour) {
  for (let i=0; i<index; ++i) {
    if (adjMatrix[i][index] && colours[i][index] === colour) return false;
  }
  return true;
}

function colourMe(adjMatrix, colours, index) {
  for (let c of COLOURS) {
    if (canColour(adjMatrix, colours, index, c)) {
      colours[index] = c;
      if (colourMe(adjMatrix, colours, index + 1)) return true;
    }
  }
  return false;
}

export function graphColouring(adjMatrix) {
  let colours = tabulate(0, adjMatrix.length);
  let result = colourMe(adjMatrix, colours, 0);
  return result ? colours : undefined;
}
