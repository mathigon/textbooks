// =============================================================================
// Polygon Utilities
// (c) Mathigon
// =============================================================================


import {Point} from '@mathigon/euclid';
import {list} from '@mathigon/core';


const SQRT32 = Math.sqrt(3) / 2;

export function triangleOffset(i: number, n: number) {
  return SQRT32 * (i - n * 2 / 3);
}

export function trianglePoints(n: number) {
  const results: Point[] = [];

  for (let i = 0; i <= n; ++i) {
    const x = -i / 2;
    const y = triangleOffset(i, n);
    for (let j = 0; j <= i; ++j) {
      results.push(new Point(x + j, y));
    }
  }

  return results;
}

// -----------------------------------------------------------------------------

function polygonVertex(n: number, i: number, m: number) {
  const x = m / 2 * Math.sin(2 * Math.PI * i / n);
  const y = m / 2 * (1 - Math.cos(2 * Math.PI * i / n));
  return {x, y, m};
}

// Generates the center dots for the kth n-gon number.
export function polygonPoints(n: number, k: number) {
  const dots = [{x: 0, y: 0, m: 0}];

  for (let m = 1; m < k; ++m) {  // Loop over each iteration.

    // Generate the vertices of the polygon (except the first).
    const vertices = list(1, n - 1).map(i => polygonVertex(n, i, m));
    dots.push(...vertices);

    // Generate the in-between points along each edge.
    for (let a = 0; a < n - 2; ++a) {
      for (let x = 1; x < m; ++x) {
        const p = Point.interpolate(vertices[a], vertices[a + 1], x / m);
        dots.push({x: p.x, y: p.y, m});
      }
    }
  }

  return dots;
}
