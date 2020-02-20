// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {CanvasView} from '@mathigon/boost';
import {Point, Polyline} from '@mathigon/fermat';
import {Geopad, Slider, Step} from '../shared/types';


// -----------------------------------------------------------------------------
// Introduction

const options = {stroke: '#000', strokeWidth: 2};

/** Returns the image of x, if a-b is mapped onto b-c. */
function transform(a: Point, b: Point, c: Point, x: Point) {
  const angle = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(b.y - a.y, b.x - a.x);
  const scale = Point.distance(c, b) / Point.distance(b, a);

  const x1 = x.subtract(b).scale(scale).rotate(angle);
  return c.add(x1);
}

function drawIteration($canvas: CanvasView, a: Point, b: Point, c1: Point, c2: Point, i: number) {
  const d1 = transform(a, b, c1, c1);
  const d2 = transform(a, b, c1, c2);
  const d3 = transform(a, b, c2, c1);
  const d4 = transform(a, b, c2, c2);

  $canvas.draw(new Polyline(d1, c1, d2), options);
  $canvas.draw(new Polyline(d3, c2, d4), options);

  if (i > 0) {
    drawIteration($canvas, b, c1, d1, d2, i - 1);
    drawIteration($canvas, b, c2, d3, d4, i - 1);
  }
}

export function fern($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.watch(({steps, a, b, c1, c2}) => {
    $canvas.clear();
    drawIteration($canvas, a, b, c1, c2, steps);

    // const m2 = matrix(a, b, c2);
    // $canvas.draw(new Polyline(c1.transform(m2), c2, c2.transform(m2)));
  });
}


// -----------------------------------------------------------------------------
// Mandelbrot Set

export function mandelZoom($step: Step) {
  const $images = $step.$$('.mandel-frame img');
  const $slider = $step.$('x-slider') as Slider;
  const speed = 2 * ($images.length - 1) / $slider.steps;

  $step.model.pow = (s: number) => Math.round(2 ** (s/100 * 19));

  $step.model.watch(state => {
    for (const [i, $img] of $images.entries()) {
      const scale = state.scale * speed - 2 * i;
      const isVisible = scale > -3 && scale < 2;
      $img.toggle(isVisible);
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`)
    }
  });
}



/* $('#fracPascalButoon').click( function(){
  $('#fracPascal2').css('opacity','1');
  $('#fracPascalButoon').fadeOut(1000);
  setTimeout( function(){
    $('#fracPascalDesc').fadeIn(1000);
  }, 1010);
});

// ========================================

$('.fracAutoRule').click( function(){
  $(this).toggleClass('on');
  fracAuto();
});

var fracAutoTableString="";

for( var i=0; i<15; i++) {
  fracAutoTableString += "<tr id='fracTableRow"+i+"'>";
  for( var j=0; j<23; j++) {
    fracAutoTableString += "<td id='fracTableCell"+j+"'></td>";
  };
  fracAutoTableString += "</tr>";
};

$('#fracAutoTable').html(fracAutoTableString);
$('#fracTableRow0 #fracTableCell11').addClass('on');

function fracAuto() {

  for( var i=1; i<15; i++) {
    for( var j=0; j<23; j++) {

      var temp = ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j-1)).hasClass('on')?"1":"0") +
                 ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j  )).hasClass('on')?"1":"0") +
                 ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j+1)).hasClass('on')?"1":"0");

      if( temp == "000" ) { var colour = $('#fracRule1').hasClass('on')?1:0 }
      else if( temp == "001" ) { var colour = $('#fracRule2').hasClass('on')?1:0 }
      else if( temp == "010" ) { var colour = $('#fracRule3').hasClass('on')?1:0 }
      else if( temp == "011" ) { var colour = $('#fracRule4').hasClass('on')?1:0 }
      else if( temp == "100" ) { var colour = $('#fracRule5').hasClass('on')?1:0 }
      else if( temp == "101" ) { var colour = $('#fracRule6').hasClass('on')?1:0 }
      else if( temp == "110" ) { var colour = $('#fracRule7').hasClass('on')?1:0 }
      else if( temp == "111" ) { var colour = $('#fracRule8').hasClass('on')?1:0 }
      else { var colour = 0 };

      if( colour ) { $('#fracTableRow'+i+' #fracTableCell'+j).addClass('on') } else { $('#fracTableRow'+i+' #fracTableCell'+j).removeClass('on') };

    };
  };
};

// ========================================

function inMandel(x,y) {

  var x1 = 10*x + 15;
  var x2 = 10*y + 10;

  var array = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
  ];

  return array[[x2]][[x1]]
};

// MandelComp = Compile[
//    {{c, _Complex}},
//    Module[{num = 1},
//     FixedPoint[(num++; #^2 + c) &, 0, 999,
//      SameTest -> (Re[#]^2 + Im[#]^2 >= 4 &)];
//     num],
//    CompilationTarget -> "C"
//    ];
// Table[If[MandelComp[x/10 + y I/10] == 1000, 1, 0], {y, -10,
//   10}, {x, -15, 11}]

function mandelComplex(b,x,y) {

  var x1 = Math.round(x*100) / 100;
  var y1 = Math.round(y*100) / 100;

  if (!y1) {
    if(x1 < 0){
      return '&#8211;'+String(-x1);
    } else {
      return String(x1);
    }
  } else if(!x1) {
    if(y1 < 0){
      return '&#8211;'+String(-y1)+'<em>i</em>';
    } else {
      return String(y1)+'<em>i</em>';
    }
  } else if ( y1 < 0){
    return (b?'(':'')+(x1<0?('&#8211;'+String(-x1)):String(x1))+' &#8211; '+(-y1)+'<em>i</em>'+(b?')':'');
  } else {
    return  (b?'(':'')+(x1<0?('&#8211;'+String(-x1)):String(x1))+' + '+y1+'<em>i</em>'+(b?')':'');
  };
};


$( "#mandelTarget" ).draggable({
  containment: "#mandelMove",
  scroll: false,
  drag: function() {
    var x = Math.round((          ($('#mandelTarget').position().left)/$('#mandelMove').width()  * 2.915 - 1.648 )*10)/10;
    var y = Math.round((  1.113 - ($('#mandelTarget').position().top )/$('#mandelMove').height() * 2.203         )*10)/10;

    $('#mandelCalculation .red'   ).html(mandelComplex( 0, x, y ));
    $('#mandelCalculation #green1').html(mandelComplex( 0, x, y ));
    $('#mandelCalculation #green2').html(mandelComplex( 1, x, y ));
    $('#mandelCalculation #cyan1' ).html(mandelComplex( 0, ( x*x - y*y + x ), ( y*(1+2*x) ) ));
    $('#mandelCalculation #cyan2' ).html(mandelComplex( 1, ( x*x - y*y + x ), ( y*(1+2*x) ) ));
    $('#mandelCalculation #blue1' ).html(mandelComplex( 0, ( x*(1+x*(1+2*x+x*x)) + y*y*(y*y-(1+6*x*(1+x))) ), ( y*(1+2*x*(1+3*x+2*x*x) - 2*y*y*(1+2*x)) ) ));
    $('#mandelCalculation #blue2' ).html(mandelComplex( 1, ( x*(1+x*(1+2*x+x*x)) + y*y*(y*y-(1+6*x*(1+x))) ), ( y*(1+2*x*(1+3*x+2*x*x) - 2*y*y*(1+2*x)) ) ));
    $('#fracTargetFinal'          ).html(mandelComplex( 0, ( x*(1+x)*(1+x*x*(1+x)*(2+x)*(1+x*x))-(1+2*x*(3+x*(15+x*(30+x*(45+14*x*(3+x))))))*y*y+y*y*y*y*(5*(1+2*x*(3+x*(9+7*x*(2+x))))-2*(3+14*x*(1+x))*y*y+y*y*y*y) ), ( y*(1+2*x*(1+x*(1+2*x+x*x))*(1+2*x*(1+x)*(1+2*x))-2*y*y*(1+2*x*(5+x*(15+x*(30+7*x*(5+2*x))))-y*y*(3+2*x*(9+7*x*(3+2*x)))+2*y*y*y*y*(1+2*x))) ) ));

    if( inMandel(x,y) ) {
      $('#MandelIn').css('display','none');
      $('#MandelNo').css('display','block');
    } else {
      $('#MandelIn').css('display','block');
      $('#MandelNo').css('display','none');
    }

  }
}); */
