import { Step } from "../shared/types";
import { ElementView } from "@mathigon/boost";

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
  
    console.log('inside of scale');
    console.log('here is the model')
    console.log($step.model);
  
    $step.model.polygonScale = (xscale: number, yscale: number) => {
      console.log(xscale, yscale);
  
      const points = [[30,10], [10,70], [70,70], [50,10]];
      const transformedPoints = points.map(p => [p[0]*xscale, p[1]*yscale]);
      const pointString = transformedPoints.map(point => + point[0] + "," + point[1]).join(' ');
      const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
      return poly0;
    }
  }
  
  /**
   * Also very cool.
   * 
   * @param $step 
   */
  export function skew($step: Step) {
  
    $step.model.polygonSkew = (xskew: number, yskew: number) => {
      console.log(xskew, yskew);
  
      const points = [[30,10], [10,70], [70,70], [50,10]];
      const transformedPoints = points.map(p => [p[0]*1 + p[1]*xskew, p[1]*1 + p[0]*yskew]);
      const pointString = transformedPoints.map(point => + point[0] + "," + point[1]).join(' ');
      const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
  
      return poly0;
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
      const transformedPoints = points.map(p => 
        [cos * p[0] - sin * p[1], 
        sin * p[0] + cos * p[1]]
      );
      const pointString = transformedPoints.map(point => + point[0] + "," + point[1]).join(' ');
      const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;
  
      return poly0;
    }
  
    console.log('inside of rotate');
    console.log('here is the model')
    console.log($step.model);
  
  }
  