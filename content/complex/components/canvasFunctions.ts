function drawLine(context: CanvasRenderingContext2D, lineStartX: number, lineStartY: number, lineEndX: number, lineEndY: number, lineThickness=2, lineColour="grey" ) {
    context.save();
    context.strokeStyle = lineColour;
    context.lineWidth = lineThickness;
    context.beginPath();
    context.moveTo(lineStartX, lineStartY);
    context.lineTo(lineEndX, lineEndY);
    context.stroke();
    context.restore();
}

function drawGraph(context: CanvasRenderingContext2D, width: number, height: number) {
    context.fillStyle = 'black';
    context.font = '45px Monospace';

    // Vertical lines
    for (let x = -width; x < width; x += 100) {//splitting each quadrant into 10 values
        if(x===0){
            drawLine(context,x,-height,x,height,10,"black");
            context.fillStyle = "rgba(255, 255, 255, 0)";// Label for 0 in the Y axis is transparent
        }else{
            context.fillStyle = "black";
            drawLine(context,x,-height,x,height);
        }
        context.fillText(String(x/100), x, 50)// Labels for the graph
    }

    // Horizontal lines
    for (let y = -height; y < height; y += 100) {
        if(y===0){
            drawLine(context,-width,y,width,y,10,"black");
            context.fillText(String(-y/100), 10, y+50);
        }else{
            drawLine(context,-width,y,width,y);
            context.fillText(String(-y/100), 10, y+5);
        }
    }
}



function drawCircle(context: CanvasRenderingContext2D , re: number, im: number, color = "black",size = 30, width=2000) {
    function drawLabel(context: CanvasRenderingContext2D, x: number, y: number, coords: any) {

        function labelBackground(context: CanvasRenderingContext2D,x: number,y: number,rectHeight: number,rectWidth: number){
            const thickness = 9;
            context.save();
            context.lineJoin = "round";
            context.strokeStyle ="black";
            context.lineWidth = thickness;
            context.strokeRect(x+(thickness/2), y+(thickness/2), rectWidth-thickness, rectHeight-thickness);
            context.fillStyle = 'white';
            context.fillRect(x+(thickness/2), y+(thickness/2), rectWidth-thickness, rectHeight-thickness);
            context.restore();
        }

        //first and last horizontal coordinates of the plane
        const xStart = -(width/2);
        const xEnd   = (width/2);


        let dynamicLabelContent:string; // to offset the inverse of the Y axis in the canvas
        if(y>0) {
            dynamicLabelContent = "-" + String(y) ; // is y is negative
        } else {
            dynamicLabelContent = "+" + String(-y) ; // is y is positive
        }

        let backgroundWidth: number; // Label background is larger is x is negative
        if(x<0){
            backgroundWidth = 190;
        } else {
            backgroundWidth = 160;
        }

        let xOffset:any;
        let xOffsetLabel:any;
        if(coords.x >=xStart && coords.x <= xStart/2 || coords.x >0 && coords.x <= xEnd/2 ){//labels are placed to the right of the circle
            xOffset = coords.x+60;
            xOffsetLabel = xOffset-20;
        } else if(coords.x >= xStart/2 && coords.x <= 0 || coords.x >=xEnd/2 && coords.x <= xEnd){ //labels are placed to the left of the circle
            xOffset = coords.x-20-backgroundWidth;
            xOffsetLabel = xOffset-20;
        }

        context.save();
        labelBackground(context,xOffsetLabel,coords.y-35,65,backgroundWidth);
        context.fillStyle = 'black';
        context.fillText( String(x) + dynamicLabelContent + "i", xOffset, coords.y+10);
        context.restore();
    }

    function drawDragLabel(context: CanvasRenderingContext2D, point: any, arrowLength = 12){

        function drawArrow(context: CanvasRenderingContext2D, fromx: number, fromy: number, tox: number, toy: number, headlen: number, arrowAngle = 4) {
            let dx = tox - fromx;
            let dy = toy - fromy;
            let angle = Math.atan2(dy, dx);
            context.save();
            context.strokeStyle = "white";
            context.lineWidth = 3.5;
            context.beginPath();
            context.moveTo(fromx, fromy);
            context.lineTo(tox, toy);
            context.lineTo(tox - headlen * Math.cos(angle - Math.PI / arrowAngle), toy - headlen * Math.sin(angle - Math.PI / arrowAngle));
            context.moveTo(tox, toy);
            context.lineTo(tox - headlen * Math.cos(angle + Math.PI / arrowAngle), toy - headlen * Math.sin(angle + Math.PI / arrowAngle));
            context.stroke();
            context.restore();
        }

        // Drawing 4 arrow heads spanning 23 pixels from the center of the circle pointing in all 4 movable directions
        context.save();
        drawArrow(context,point.x,point.y,point.x,point.y+23,arrowLength);
        drawArrow(context,point.x,point.y,point.x,point.y-23,arrowLength);
        drawArrow(context,point.x,point.y,point.x+23,point.y,arrowLength);
        drawArrow(context,point.x,point.y,point.x-23,point.y,arrowLength);
        context.restore();
    }

    const coordinates = {//mapping the actual complex numbers to the pixels on the canvas
        x:Math.round(re)*100,
        y:Math.round(im)*100
    };
    context.save();
    context.beginPath();
    context.arc(coordinates.x, coordinates.y, size, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();

    if(color==="black"){ //overlays arrows heads over z1 and z2 which are always black in color
        drawDragLabel(context,coordinates);
    }

    drawLabel(context,Math.round(re),Math.round(im),coordinates);
    context.restore();
}

function clearCanvas(context: CanvasRenderingContext2D,height=2000,width=2000) {
    context.save();

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, width, height);

    context.restore();
}

export {
    drawGraph,
    drawLine,
    drawCircle,
    clearCanvas
};