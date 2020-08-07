// =============================================================================
// Matrices
// (c) Mathigon
// =============================================================================

import { Step } from "../shared/types";
import { ElementView } from "@mathigon/boost";

/**
 *
 * @param A 2x2 matrix
 * @param v 2x1 vector
 */
function applyTransform(A: number[][], v: number[]): number[] {

    return [
        A[0][0]*v[0] + A[0][1]*v[1],
        A[1][0]*v[0] + A[1][1]*v[1]
    ]
}

/**
 * Okay looks like I have a general idea of how this should work, but I need to work out some details.
 * How???
 * @param $step
 */
export function translations($step: Step) {
  
    const $polygons = $step.$('svg')?.$$('polygon') as ElementView[];
    const origin = {x: -40, y: -30}; // center polygon on "origin" (top left)
    const center = {x : 110, y: 110};
    const cascade = {x: origin.x + center.x, y: origin.y + center.y};
  
    $polygons[0].setTransform(cascade);
    $polygons[1].setTransform(cascade);
    
    $step.model.watch((state: any) => {
      console.log(state.a);
  
      const scale = {x: cascade.x * state.a, y: cascade.y * 1};
      $polygons[1].setTransform(cascade, 0, state.a);
    });
  }
  
  /**
   * Rotate (how??)
   * @param $step
   */
  export function rotations($step: Step) {
  
    const $polygons = $step.$('svg')?.$$('polygon') as ElementView[];
    const center = {x: 50, y: 50}
    console.log($polygons[1]);
  
    $step.model.watch((state: any) => {
      console.log(state.angle);
      // yeah, so this isn't doing what I want!
      $polygons[1].setTransform(center, Math.PI * state.angle / 360);
    });
  }
  
  /**
   * Very cool.
   * NEXT: center on theorigin and make it reflect about
   * NEXT: make the origin thicker
   * 
   * @param $step
   */
  export function scale($step: Step) {
  
    $step.model.polygonScale = (xscale: number, yscale: number) => {
      console.log(xscale, yscale);
  
      // here's where we have to do that p5js strategy where we push and pop translates to display it
      // (1) center polygon along the origin (0,0)
      // (2) apply transformation shown in matrix
      // (3) move it to center (110, 110)

      const points = [[30,10], [10,70], [70,70], [50,10]];

      // let's try some d3 style formatting
      const pointString = points.map(p => [p[0]-40, p[1]-40])         // (1) center shape along origin (0,0)
                                .map(p => applyTransform([            // (2) apply transformation from matrix
                                    [xscale, 0],
                                    [0, yscale]
                                ], p))
                                .map(p => [p[0]+110, [p[1]+110]])     // (3) move to center of SVG
                                .map(point => point.join(','))        // commas between xy coords
                                .join(' ')                            // spaces between coord pairs

      const poly = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
      return poly;
    }
  }
  
  /**
   * Also very cool.
   * 
   * @param $step 
   */
  export function skew($step: Step) {
  
    // here's where we have to do that p5js strategy where we push and pop translates to display it
    // (1) center polygon along the origin (0,0)
    // (2) apply transformation shown in matrix
    // (3) move it to center (110, 110)

    $step.model.polygonSkew = (xskew: number, yskew: number) => {
      console.log(xskew, yskew);
  
      const points = [[30,10], [10,70], [70,70], [50,10]];

      // let's try some d3 style formatting
      const pointString = points.map(p => [p[0]-40, p[1]-40])         // (1) center shape along origin (0,0)
                                .map(p => applyTransform([
                                    [1, - xskew],  // why is this negative?
                                    [-yskew, 1]   // is this the right direction?
                                ], p)) // (2) apply transformation from matrix
                                .map(p => [p[0]+110, [p[1]+110]])     // (3) move to center of SVG
                                .map(point => point.join(','))        // commas between xy coords
                                .join(' ')                            // spaces between coord pairs

      const poly = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
      return poly;
    }
  
    console.log('inside of skew');
    console.log('here is the model')
    console.log($step.model);
  }
  
  // NEXT: figure out why the heck this ain't workin'
  export function rotate($step: Step) {
  
    $step.model.polygonRotate = (angle: number) => {
      console.log('rotate', angle);
  
      const rads = Math.PI * angle / 360;
      const cos = Math.cos(rads);
      const sin = Math.sin(rads);
  
      const points = [[30,10], [10,70], [70,70], [50,10]];

      // let's try some d3 style formatting
      const pointString = points.map(p => [p[0]-40, p[1]-40])         // (1) center shape along origin (0,0)
                                .map(p => applyTransform([ // apply transformation from matrix
                                    [cos, -sin], // why is this negative?
                                    [sin, cos] // is this the right direction?
                                ], p))
                                .map(p => [p[0]+110, [p[1]+110]])     // (3) move to center of SVG
                                .map(point => point.join(','))        // commas between xy coords
                                .join(' ')                            // spaces between coord pairs

      /*const transformedPoints = points.map(p =>
        [cos * p[0] - sin * p[1],
        sin * p[0] + cos * p[1]]
      );
      const pointString = transformedPoints.map(point => + point[0] + "," + point[1]).join(' ');*/
      const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
      return poly0;
    }
  
    console.log('inside of rotate');
    console.log('here is the model')
    console.log($step.model);
  
  }
