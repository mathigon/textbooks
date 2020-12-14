// =============================================================================
// Fractal Drawing Utilities
// (c) Mathigon
// =============================================================================


import {Point, Polygon} from '@mathigon/euclid';


export function drawSierpinski([a, b, c]: Point[], i: number): string {
  if (i <= 0) return '';

  const ab = Point.average(a, b);
  const ac = Point.average(a, c);
  const bc = Point.average(b, c);

  const t1 = drawSierpinski([a, ab, ac], i - 1);
  const t2 = drawSierpinski([b, ab, bc], i - 1);
  const t3 = drawSierpinski([c, ac, bc], i - 1);

  return `M${ab.x},${ab.y}L${ac.x},${ac.y}L${bc.x},${bc.y}Z ${t1}${t2}${t3}`;
}

export function drawCarpet([a, b, c, d]: Point[], i: number): string {
  if (i <= 0) return '';

  const rect = new Polygon(a, b, c, d).scale(1 / 3);
  const width = rect.edges[0].length;

  let path = 'M' + rect.points.map(p => `${p.x},${p.y}`).join('L') + 'Z ';

  for (let i = -1; i <= 1; ++i) {
    for (let j = -1; j <= 1; ++j) {
      if (!i && !j) continue;
      path += drawCarpet(rect.shift(i * width, j * width).points, i - 1);
    }
  }

  return path;
}

export function drawKoch(last: Polygon, i: number): Polygon {
  if (i <= 0) return last;

  const points: Point[] = [];
  for (const e of last.edges) {
    const a = Point.interpolate(e.p1, e.p2, 1 / 3);
    const c = Point.interpolate(e.p1, e.p2, 2 / 3);
    const b = c.rotate(-Math.PI / 3, a);
    points.push(e.p1, a, b, c);
  }

  return drawKoch(new Polygon(...points), i - 1);
}
