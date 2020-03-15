// =============================================================================
// ComplexTransform Component
// (c) Mathigon
// =============================================================================

import {CanvasView, CustomElementView, register, slide} from '@mathigon/boost';
import {Complex, Random} from '@mathigon/fermat';
import {Select} from '../../shared/types';

import {clearCanvas, drawCircle, drawGraph, drawLine} from './canvasFunctions';

function complexPlane(context:CanvasRenderingContext2D, width: number, height: number, operation: string,z1: any ) {
    clearCanvas(context);
    drawGraph(context,width,height); //Cartesian Plane
  
    let complexSquare:any; //Output of selected arithmetic operation
    let colorOfOperation: any; // The color to signify the operation
  
    if(operation == "Z^2"){
      complexSquare  = Complex.product(z1,z1);
      colorOfOperation = "#71eeb8";
    }else{
      console.log("Invalid Argument : Complex Arithemtic Operations");
    }
  
    drawLine(context,0,0,(z1.re*100),(z1.im*100),5,"black"); // Line from 0 -> z1
    drawLine(context,0,0,(Math.round(complexSquare.re)*100),(Math.round(complexSquare.im)*100),5,"black"); // Line from 0 -> output of Calculation
    drawLine(context,(z1.re*100),(z1.im*100),(Math.round(complexSquare.re)*100),(Math.round(complexSquare.im)*100),5,colorOfOperation); // Line from z1 -> output of Calculation
  
    //Drawing Circles over the lines
    drawCircle(context, z1.re ,z1.im);
    drawCircle(context, complexSquare.re,complexSquare.im,colorOfOperation,20); // Smaller size to know if the result is the same as z1 or z2
  }

// -------------------------------------------------------------------------
// Component

@register('x-complex-transform', {templateId: '#complex-transform'})
export class Complextransform extends CustomElementView {

  ready() {
    const $transforms = this.$('x-select.tabs') as Select;
    const $canvas = this.$('canvas') as CanvasView;
    const context = $canvas.ctx;

    const width  = 2000;
    const height = 2000;

    context.translate((width/2), (height/2));// Change the origin of the canvas to its center from the top left corner

    const complexNumber  = new Complex(Random.integer(-5, 5), Random.integer(-5, 5)); // z1

    let activeArithmeticOperation = "Z^2"; //Possible operations - Z^2

    complexPlane(context, width, height, activeArithmeticOperation,complexNumber);//Initial Plane with the randomly generated complex number

    //Change the active arithmetic operation to the selected tab
    $transforms.on('change', $active => {
      activeArithmeticOperation =  $active.data.value;;
      complexPlane(context, width, height, activeArithmeticOperation,complexNumber);
    });

    slide($canvas, {
      start: p =>{
        complexPlane(context, width, height, activeArithmeticOperation,new Complex(Math.round((p.x-1000) /100),Math.round((p.y-1000) /100)));
      }, "move": p =>{
        complexPlane(context, width, height, activeArithmeticOperation,new Complex(Math.round((p.x-1000) /100),Math.round((p.y-1000) /100)));
      }, "justInside": true //Limit movement to within the canvas
    });
  }
}


// -------------------------------------------------------------------------