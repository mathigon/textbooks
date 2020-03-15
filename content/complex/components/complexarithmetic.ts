// =============================================================================
// ComplexArithmetic Component
// (c) Mathigon
// =============================================================================

import { CanvasView, CustomElementView, register, slide } from '@mathigon/boost';
import { Complex,Random } from '@mathigon/fermat';
import { Select } from '../../shared/types';

import {drawCircle,drawLine,drawGraph,clearCanvas} from './canvasFunctions';

// -------------------------------------------------------------------------
// Component

@register('x-complex-arithmetic', {templateId: '#complex-arithmetic'})
export class Complexarithmetic extends CustomElementView {

  ready() {
    const $arithmeticOperations = this.$('x-select.tabs') as Select;
    const $canvas = this.$('canvas') as CanvasView;
    const context = $canvas.ctx;

    //Size of the canvas
    const width  = 2000;
    const height = 2000;

    context.translate((width/2), (height/2));// Change the origin of the canvas to its center from the top left corner

    let complexNumberOne  = new Complex(Random.integer(-5, 5), Random.integer(-5, 5)); // z1
    let complexNumberTwo  = new Complex(Random.integer(-5, 5), Random.integer(-5, 5)); // z2

    //Flags that signify if a complex number can be dragged
    let draggable = {
      z1 : false,
      z2 : false
    };

    let activeArithmeticOperation = "Sum"; //Possible operations - Sum, Difference, Product, Quotient

    complexPlane(context,width,height,complexNumberOne,complexNumberTwo,activeArithmeticOperation);//Initial Plane with the randomly generated complex numbers that are added

    //Change the active arithmetic operation to the selected tab
    $arithmeticOperations.on('change', $active => {
      activeArithmeticOperation = $active.data.value;
      complexPlane(context,width,height,complexNumberOne,complexNumberTwo,activeArithmeticOperation);
    });

    slide($canvas, {

      //Identify first click coordinates to check if and which complex number has been selected and flag selected number as draggable
        start: p => {
           let initialComplexNumber = new Complex(Math.round((p.x-1000) /100),Math.round((p.y-1000) /100)); //get the complex number present in the first click's coordinates
          if(initialComplexNumber.re===complexNumberOne.re && initialComplexNumber.im===complexNumberOne.im) {
            draggable.z1= true;
          }else if(initialComplexNumber.re===complexNumberTwo.re && initialComplexNumber.im===complexNumberTwo.im) {
            draggable.z2= true;
          }else{
            console.log("Please move an existing complex number");
          }
        },

      // Drag the Complex number selected by the user's initial click location
        "move": p =>{
          let selectedComplexNumber = new Complex(Math.round((p.x-1000) /100),Math.round((p.y-1000) /100));// The points are subtracted by 1000 to match the origin offset of the canvas
           if(draggable.z1) {
             complexNumberOne = selectedComplexNumber;
           }else if(draggable.z2) {
             complexNumberTwo = selectedComplexNumber;
           }
          complexPlane(context, width, height, complexNumberOne, complexNumberTwo, activeArithmeticOperation);
        },

      // De-flag Complex number once moved
         end: () => {
          draggable.z2= false;
         draggable.z1= false;
         },

      "justInside": true //Limit movement to within the canvas
    });
  }
}


function complexPlane(context:CanvasRenderingContext2D, width: number, height:number,z1: any, z2:any, operation :string ) {
  clearCanvas(context,height,width);
  drawGraph(context,width,height); //Cartesian Plane

  let complexArithmetic:any; //Output of selected arithmetic operation
  let colorOfOperation: any; // The color to signify the operation

  if(operation == "Sum"){
    complexArithmetic = Complex.sum(z1,z2);
    colorOfOperation = "blue";
  }else if(operation == "Quotient"){
    complexArithmetic   = Complex.quotient(z1,z2);
    colorOfOperation = "red";
  }else if(operation == "Product"){
    complexArithmetic  = Complex.product(z1,z2);
    colorOfOperation = "green";
  }else if(operation == "Difference"){
    complexArithmetic = Complex.difference(z1,z2);
    colorOfOperation = "teal"
  }else{
    console.log("Invalid Argument : Complex Arithemtic Operations");
  }

  drawLine(context,0,0,(z1.re*100),(z1.im*100),5,"black"); // Line from 0 -> z1
  drawLine(context,0,0,(z2.re*100),(z2.im*100),5,"black"); // Line from 0 -> z2
  //drawLine(context,0,0,(Math.round(complexArithmetic.re)*100),(Math.round(complexArithmetic.im)*100),5); // Line from 0 -> output of Calculation
  drawLine(context,(z1.re*100),(z1.im*100),(Math.round(complexArithmetic.re)*100),(Math.round(complexArithmetic.im)*100),5,colorOfOperation); // Line from z1 -> output of Calculation
  drawLine(context,(z2.re*100),(z2.im*100),(Math.round(complexArithmetic.re)*100),(Math.round(complexArithmetic.im)*100),5,colorOfOperation); // Line from z2 -> output of Calculation

  //Drawing Circles over the lines
  drawCircle(context, z1.re ,z1.im,"black",30,width);
  drawCircle(context, z2.re ,z2.im,"black",30,width);
  drawCircle(context, complexArithmetic.re,complexArithmetic.im,colorOfOperation,20); // Smaller size to know if the result is the same as z1 or z2
}

// -------------------------------------------------------------------------