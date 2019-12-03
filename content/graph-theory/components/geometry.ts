// =============================================================================
// Mathigon.org | Graph Geometry Functions
// (c) Mathigon
// =============================================================================


import {list, repeat} from '@mathigon/core';
import {permutations} from '@mathigon/fermat';


export function travellingSalesman(dist: number[][]) {
  const n = dist.length;
  const cities = list(n);

  let minLength = Infinity;
  let minPath = undefined;

  loop1:
      for (let path of permutations(cities)) {
        let length = 0;
        for (let i = 0; i < n - 1; ++i) {
          length += dist[path[i]][path[i + 1]];
          if (length > minLength) continue loop1;
        }
        if (length < minLength) {
          minLength = length;
          minPath = path;
        }
      }

  return {path: minPath, length: minLength};
}

const COLOURS = [1, 2, 3, 4];

function canColour(adjMatrix: number[][], colours: number[], index: number,
                   colour: number) {
  for (let i = 0; i < index; ++i) {
    if (adjMatrix[i][index] && colours[i] === colour) return false;
  }
  return true;
}

function colourMe(adjMatrix: number[][], colours: number[], index: number) {
  for (let c of COLOURS) {
    if (canColour(adjMatrix, colours, index, c)) {
      colours[index] = c;
      if (colourMe(adjMatrix, colours, index + 1)) return true;
    }
  }
  return false;
}

export function graphColouring(adjMatrix: number[][]) {
  let colours = repeat(0, adjMatrix.length);
  let result = colourMe(adjMatrix, colours, 0);
  return result ? colours : undefined;
}
