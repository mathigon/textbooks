/*
 *  SVG interactive Enigma view including encoding path animation
 */

import {Machine} from './enigma';

interface EnigmaPathSVG 
{
	drawMachine: (encodingpath: any) => void;
	drawPath: (encodingpath: string[], animate: boolean) => void;
}

interface SVGAnimateMotionElement extends SVGAnimationElement 
{
	beginElement(): SVGAnimateMotionElement;
}

// TODO switch for include/exclude the plugboard

/*
	On a keypress drawPath will be called and the encoded path returned via the callback
*/
export function createEnigmaPathSVG(svgid: string, machine: Machine, keypresscallback:(k:string[]) => void) : any
{
	const xmlns = "http://www.w3.org/2000/svg";

	// TODO remove duplication across path and machine source
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	function charToIndex(ch:string)	
	{
		const charA = 'A'.charCodeAt(0);
		return ch.charCodeAt(0) - charA;
	}
	
	// Some simple utility methods
	function getYPos(n:string, off:number)
	{
		var pos = (charToIndex(n) + off + 1) % letters.length;
		return pos ? pos : letters.length;
	}
	
	function addText(layer:SVGGElement, text:string, x:number, y:number, cls:string)
	{
	  layer.innerHTML += '<text text-anchor="middle" alignment-baseline="middle" x="' + 
		  x + '" y="' + y + '" class="' + cls + '">' + text + '</text>';		
	}
		
	function makept(x:number, y:number) { return {x, y}; }
	
	function move(x:number, y:number) { return 'M' + x + ',' + y + ' '; }
	function line(x:number, y:number) { return 'L' + x + ',' + y + ' '; }
	function arc(r:number, x:number, y:number) { return 'A' + r + ',' + r + ' 0 0 1 ' + x + ',' + y + ' '; }
	
	function path(p:string, width:number, stroke:string, fill:string, id?:string, dasharray?:number[], dashoffset?:number)
	{
	  return '<path ' + (id ? ' id="' + id + '"' : '') +
		  ' d=\"' + p + '" stroke-width=' + width + ' stroke="' + stroke + 
		  (dasharray ? '" stroke-dasharray="' + dasharray.join(" ") : '') + 
		  (dashoffset ? '" stroke-dashoffset="' + dashoffset : '') + 
		  '" fill="' + fill + '"></path>';
	}
	
	function pathpts(points:any[], close:boolean = false)
	{
	  return 'M' + points.map(p => p.x + ',' + p.y).join('L') + (close ? 'Z' : '');
	}
	
	function addRoundRect(layer:SVGGElement, x:number, y:number, width:number, height:number, r_l:number, r_r:number, 
		stroke:string, fill:string)
	{
		var path = '<path d="';
		path += move(x + r_l, y);
		path += line(x + width - r_r, y);
		path += arc(r_r, x + width, y + r_r);
		path += line(x + width, y + height - r_r);
		path += arc(r_r, x + width - r_r, y + height);
		path += line(x + r_l, y + height);
		path += arc(r_l, x, y + height - r_l);
		path += line(x, y + r_l);
		path += arc(r_l, x + r_l, y);
		path += '" stroke-width="1" stroke="' + stroke + '" fill="url(#' + fill + ')" />';
		layer.innerHTML += path;
	}

	const svgdoc:Document = document.getElementById(svgid) as unknown as Document;

	const incolour = "rgb(205, 14, 102)";
	const outcolour = "rgb(34, 171, 36)";
	const refcolour = "rgb(15, 130, 242)";
	
	const refl_top_col = "rgb(245, 226, 204)";
	const refl_bot_col = "rgb(178, 160, 143)";
	
	const rotor_top_col = "rgb(210, 205, 199)";
	const rotor_bot_col = "rgb(161, 157, 153)";
	
	const plug_top_col = "rgb(204, 226, 245)";
	const plug_bot_col = "rgb(143, 160, 178)";
	
	const label_outer_col = "rgb(160, 160, 160)";
	const label_inner_col = "rgb(240, 240, 240)";

	const defs = svgdoc.getElementById(svgid + "_defs") as HTMLElement;
	const styles = svgdoc.getElementById(svgid + "_styles") as HTMLElement;
	const groups = svgdoc.getElementsByTagName("g");
	const content = groups[0];
	const encpath = groups[1];
	const animpath = groups[2];

	defs.innerHTML += makeLinearGradient("grad_refl", [0, 0, 0, 1], 
		[{offset:0, col:refl_top_col},
		{offset:1, col:refl_bot_col}]);

	defs.innerHTML += makeLinearGradient("grad_rotor", [0, 0, 0, 1],
		[{offset:0, col:rotor_top_col},
		{offset:1, col:rotor_bot_col}]);

	defs.innerHTML += makeLinearGradient("grad_rotor_label", [0, 0, 0, 1], 
		[{offset:0, col:label_outer_col},
		{offset:0.33, col:label_inner_col},
		{offset:0.67, col:label_outer_col}]);

	defs.innerHTML += makeLinearGradient("grad_plug", [0, 0, 0, 1], 
		[{offset:0, col:plug_top_col},
		{offset:1, col:plug_bot_col}]);
			
	// setup the text styles

	styles.innerHTML += 
		".heading { font: normal 14px sans-serif; fill:black;}" +
		".normal { font: normal 12px sans-serif; fill:black; }" +
		".inletter { font: normal 12px sans-serif; fill:" + incolour + "; }" +
		".outletter { font: normal 12px sans-serif; fill:" + outcolour + "; }" +
		".keyletter { font: normal 12px sans-serif; fill:#D0D0D0; }" +
		".inkey { font: normal 12px sans-serif; fill:" + incolour + "; }" +
		".outkey { font: normal 12px sans-serif; fill:" + outcolour + "; }";

	const animationspeed = 200;

	let me:any = { animate:true };
	
	function makeLinearGradient(id:string, coords:number[], stops:any[])
	{
		let result:string = "<linearGradient id='" + id + "' ";
		result += "x1='" + coords[0] + "' y1='" + coords[1] + "' x2='" + coords[2] + "' y2='" + coords[3] + "'>";
		stops.forEach(s => {
			result += "<stop offset='" + s.offset + "' style='stop-color:" + s.col + ";' />";
		});
		result += "</linearGradient>";
		return result;
	}
		
	function drawBasicShape(width:number, dy:number, x:number, y:number, heading:string, fill:string, onesided:boolean)
	{
		const r_l = 8;
		const r_r = onesided ? 0 : 8;
		const height = dy * 27;
	
		addText(content, heading, x + width / 2, y - 7, "heading");
		addRoundRect(content, x, y, width, height, r_l, r_r, "black", fill);
	}
	
	function drawInternalWire(layer:SVGGElement, width:number, gap:number, x:number, iny:number, outy:number, step?:number)
	{
		const pts = [];
		
		pts.push(makept(x + width + gap / 2, iny));
		if (step)
		{
			pts.push(makept(x + width - step, iny));
			pts.push(makept(x + width - step, outy));
			pts.push(makept(x + width + gap / 2, outy));
		}
		else
		{
			pts.push(makept(x + width, iny));
			pts.push(makept(x, outy));
			pts.push(makept(x - gap / 2, outy));
		}
		
		layer.innerHTML += path(pathpts(pts), 0.5, "#888", "none");
	}

	function pressKey(e:MouseEvent)
	{
		const encodingpath = machine.encode((e.target as SVGElement).getAttribute("letter") as string);
		keypresscallback(encodingpath)
		me.drawPath(encodingpath, me.animate);
	}

	function makekey(x:number, y:number, letter:string, keyfill:string)
	{
		const key = '<circle letter="' + letter + '" class="keycircle" cx=' + x + " cy=" + y + " r=" + 9 + " fill='" + keyfill + "' />";
		const text = '<text letter="' + letter + '" text-anchor="middle" alignment-baseline="middle" x="' + 
			x + '" y="' + y + '" class="keyletter">' + letter + '</text>';		
		return key + text;
	}

	function drawKeyboard(x:number, y:number, dy:number, gap:number)
	{
		let i = 0;
		
		while (i < letters.length)
		{
			y += dy;
			content.innerHTML += makekey(x, y, letters[i++], "4c4c4c");
			y += dy;
			var l = move(x - 10, y) + line(x + 20, y);
			content.innerHTML += path(l, 0.5, "#888", "none");
			content.innerHTML += makekey(x + 20, y, letters[i++], "4c4c4c");
		}
		content.querySelectorAll<SVGElement>(".keyletter, .keycircle").forEach(
			e => e.addEventListener("click", pressKey));
	}
	
	function highlightKeys(layer:SVGGElement, x:number, y:number, dy:number, gap:number, key:string, lamp:string)
	{
		const keyy = getYPos(key, 0);
		const lampy = getYPos(lamp, 0);
		layer.innerHTML += makekey(x + (keyy % 2 ? 0 : 20), y + keyy * dy, key, incolour);
		layer.innerHTML += makekey(x + (lampy % 2 ? 0 : 20), y + lampy * dy, lamp, outcolour);
	}

	function drawArrow(layer:SVGGElement, x:number, y:number, forward:boolean)
	{
		const colour = forward ? incolour : outcolour;
	
		let a;
		if (forward)
		{
			a = move(x - 10, y) + line(x, y + 7) + line(x, y - 7) + 'Z';
		}
		else
		{
			a = move(x, y) + line(x - 10, y + 7) + line(x - 10, y - 7) + 'Z';
		}
		layer.innerHTML += path(a, 2, colour, colour);
	}

	function drawRotor(width: number, gap: number, x: number, y: number, dy: number, heading: string, 
		in1: string | null, out1: string | null, in2: string | null, out2: string | null, offset1: number, offset2: number, 
		notch: string | null, connections: { [x: string]: string; }, showrotation: boolean, fill: string)
	{
		const height = dy * 27;
		let iny;
		let outy;
	
		drawBasicShape(width, dy, x, y, heading, fill, false);
	
		if (notch)
		{
			const notchy = y + charToIndex(notch) * dy;
			const l = move(x, notchy + dy) + line(x - gap, y + offset2 * dy + dy);
			content.innerHTML += path(l, 1, "orange", "none");
		}  
	
		if (connections)
		{
			for (let i = 0; i < letters.length; ++i)
			{
				const letter = letters[i];
				let offsetLetter;
				if (connections[letter])
				{
					var encodedIndex = connections[letter] ? connections[letter].charCodeAt(0) - 'A'.charCodeAt(0) : 0;
					var offsetIndex = (letters.length + encodedIndex - offset1) % letters.length;
					offsetLetter = letters[offsetIndex];
				}
				else
				{
					offsetLetter = letter;
				}
				iny = getYPos(letter, 0);
				outy = getYPos(offsetLetter, 0);
				drawInternalWire(content, width, gap, x, y + iny * dy, y + outy * dy);
			}
		}
		
		if (showrotation)
		{
			const pts = [];
		
			const size = 16;
			const labelx = x + width / 2 - size / 2;
			const offsety = y + offset1 * dy + dy;
			const labely = offsety - size / 2;
			
			pts.push(makept(labelx, labely));
			pts.push(makept(labelx + size, labely));
			pts.push(makept(labelx + size, labely + size));
			pts.push(makept(labelx, labely + size));
			content.innerHTML += path(pathpts(pts, true), 1, "black", "url(#grad_rotor_label)");

			addText(content, letters[offset1], x + width / 2, offsety, "normal");
		}
	}

	function drawPlugboard(width: number, gap: number, x: number, y: number, dy: number, 
		in1: string | null, out1: string | null, in2: string | null, out2: string | null, 
		connections: { [x: string]: string; })
	{
		drawRotor(width, gap, x, y, dy, "Plugboard", in1, out1, in2, out2, 0, 0, null,
			connections, false, "grad_plug");
	}

	function drawReflector(width: number, gap: number, x: number, y: number, dy: number, connections: { [key: string]: string; })
	{
		let iny, outy;
		const height = dy * 27;
		const savedsteps:{ [key: string]: number; } = {};
	
		drawBasicShape(width, dy, x, y, "Reflector", "grad_refl", false);

		if (connections)
		{
			const nextsteps: number[] = [];
			let maxstep = 5;
			for (var i = 0; i < letters.length; ++i)
			{
				const letter = String.fromCharCode('A'.charCodeAt(0) + (letters.length + i) % letters.length);
				const endletter = connections[letter];
				if (endletter < letter)	// already drawn
				{
					nextsteps.push(Number(savedsteps[letter]));
					nextsteps.sort((a,b) => a > b ? 1 : -1);
				}
				else
				{
					let step:number;
					if (nextsteps.length)
						step = nextsteps.shift() as number;
					else
						step = maxstep + 3;
					iny = getYPos(letter, 0);
					outy = getYPos(endletter, 0);
					drawInternalWire(content, width, gap, x, y + iny * dy, y + outy * dy, step);
					savedsteps[letter] = step;
					savedsteps[endletter] = step;
					if (maxstep < step)
						maxstep = step;
				}
			}
		}
		
		return savedsteps;
	}

	let savedsteps: { [key: string]: number } = {};

	me.setAnimate = function(onoff:boolean)
	{
		me.animate = onoff;
	}

	me.drawMachine = function()
	{
		encpath.innerHTML = "";
		content.innerHTML = "";
		animpath.innerHTML = "";

		var width = 60;
		var gap = 50;
		var dy = 12;
		var y = 20;
		var x = 10;
	
		savedsteps = drawReflector(40, gap, x, y, dy, machine.getReflector().getConnections());
		
		x += gap + 40;
	
		var headings = ["Slow rotor", "Medium rotor", "Fast rotor"];
		for (var i = 2; i >= 0; --i)	
		{
			drawRotor(width, gap, x, y, dy, headings[2 - i], null, null, null, null,
				machine.getRotor(i).getOffset(), i != 2 ? machine.getRotor(i + 1).getOffset() : 0, 
				i != 2 ? machine.getRotor(i).getNotch() : null, machine.getRotor(i).getForwardConnections(), 
				true, "grad_rotor");
			x += gap + width;
		}
	
		drawPlugboard(width, gap, x, y, dy, null, null, null, null, machine.getPlugboard().getConnections());				
	
		x += gap / 2 + width + 8;
		drawKeyboard(x, y, dy, gap);
	}
	
	me.drawPath = function(encodingpath: string[], anim: boolean)
	{			
		me.drawMachine();
		if (!encodingpath)
			return;
		if (anim === undefined)
			anim = me.animate;

		const width = 60;
		const gap = 50;
		const dy = 12;
		const y = 20;
		const x = 50;
		
		// path components
		const rotorsin = [];
		const refin:any = {pts:[], colour:incolour, forward:true};
		const refint:any = {pts:[], colour:refcolour};
		const rotorsout = [];
		const tolamp:any = {pts:[], colour:outcolour, forward:false};
		
		let x1, y1;
		let k;
		let g;
		
		for (k = -1; k < 3; ++k)
		{
			let rotorin:any = {pts:[], colour:incolour, forward:true};
			x1 = x + (3 - k) * (width + gap);
			y1 = getYPos(encodingpath[1 + k], 0);
			if (k >= 0)
			{
				rotorin.label = {letter: encodingpath[1 + k], pt:makept(x1 + 8, y + y1 * dy - 6), cls:"inletter"};
				rotorin.arrow = makept(x1 + gap / 2, y + y1 * dy);
			}
			g = k == -1 ? y1 % 2 ? 24 : 44 : gap;
			rotorin.pts.push(makept(x1 + g, y + y1 * dy));
			rotorin.pts.push(makept(x1, y + y1 * dy));
			y1 = getYPos(encodingpath[2 + k], 0);
			rotorin.pts.push(makept(x1 - width, y + y1 * dy));
			rotorsin.push(rotorin);
		}
		
		// reflector input path
		x1 = x;
		y1 = getYPos(encodingpath[4], 0);
		refin.label = {letter: encodingpath[4], pt:makept(x1 + 8, y + y1 * dy - 6), cls:"inletter"};
		refin.pts.push(makept(x1 + gap, y + y1 * dy));
		refin.arrow = makept(x1 + gap / 2, y + y1 * dy);
		refin.pts.push(makept(x1, y + y1 * dy));
		
		// reflector internal path
		x1 = x;
		y1 = y + getYPos(encodingpath[4], 0) * dy;
		const step = savedsteps[encodingpath[5]];		
		refint.pts.push(makept(x, y1));
		refint.pts.push(makept(x - step, y1));
		y1 = y + getYPos(encodingpath[5], 0) * dy;
		refint.pts.push(makept(x - step, y1));
		refint.pts.push(makept(x, y1));
		
		for (k = 0; k < 4; ++k)
		{
			let rotorout:any = {pts:[], colour:outcolour, forward:false};
			x1 = x + k * (width + gap);
			y1 = getYPos(encodingpath[5 + k], 0);
			rotorout.arrow = makept(x1 + gap / 2, y + y1 * dy);
			rotorout.label = {letter: encodingpath[5 + k], pt:makept(x1 + 8, y + y1 * dy - 6), cls:"outletter"};
			rotorout.pts.push(makept(x1, y + y1 * dy));
			rotorout.pts.push(makept(x1 + gap, y + y1 * dy));
			y1 = getYPos(encodingpath[6 + k], 0);
			rotorout.pts.push(makept(x1 + width + gap, y + y1 * dy));
			rotorsout.push(rotorout);
		}
		
		// path to lamp
		x1 = x + 4 * (width + gap);
		y1 = getYPos(encodingpath[9], 0);
		tolamp.pts.push(makept(x1, y + y1 * dy));
		g = y1 % 2 ? 33 : 53;
		tolamp.pts.push(makept(x1 + g, y + y1 * dy));
		
		const stack = [
			...rotorsin, refin, refint, ...rotorsout, tolamp
		];
		
		if (anim)
		{
			animatePath(x, y, dy, gap, width, encodingpath, stack, animpath);
		}
		else
		{	
			showPath(x, y, dy, gap, width, encodingpath, stack, encpath);
		}
	}

	function showPath(x: number, y: number, dy: number, gap: number, width: number, encodingpath: string[], 
		stack: any[], layer: SVGGElement)
	{
		const showSegment = function(seg: { pts: any[]; colour: string; arrow: { x: number; y: number; }; 
			forward: boolean; label: { letter: string; pt: { x: number; y: number; }; cls: string; }; })
		{
			layer.innerHTML += path(pathpts(seg.pts), 2, seg.colour, "none");
			if (seg.arrow)
				drawArrow(layer, seg.arrow.x, seg.arrow.y, seg.forward);
			if (seg.label)
				addText(layer, seg.label.letter, seg.label.pt.x, seg.label.pt.y, seg.label.cls);
		}	
	
		layer.innerHTML = '';
		while (stack.length)
		{
			showSegment(stack.pop());
		}
	
		x += 4 * (width + gap) + gap / 2 + 8;
		highlightKeys(layer, x, y, dy, gap, encodingpath[0], encodingpath[9]);
	}

	function animatePath(x: number, y: number, dy: number, gap: number, width: number, encodingpath: string[], 
		stack: any[], layer: SVGGElement)
	{
		const key = encodingpath[0];
		const inkeyelement = makekey(0, 0, key, incolour);
		
		let anim = '';
		
		layer.innerHTML += '';
		anim += "<g id='inkeyanim'><g id='animkey'>" + inkeyelement + '</g>';
		var i = 0;
		while (i < stack.length)
		{
			const s = stack[i];
			const pathid = "p" + i;
			layer.innerHTML += path(pathpts(s.pts), 2, s.colour, "none", pathid);
			const lastpath = svgdoc.getElementById(pathid) as unknown as SVGPathElement;
			const pathlength:number = lastpath.getTotalLength();
			lastpath.setAttribute("stroke-dasharray", pathlength.toString());
			lastpath.setAttribute("stroke-dashoffset", pathlength.toString());
			var duration = Math.round(1000 * pathlength / animationspeed) + "ms";
			var p = 'path="M' + s.pts.map((pt: { x: string; y: string; }) => pt.x + "," + pt.y).join("L") + '"';
			var begin = i ? "a" + (i - 1) + ".end" : "indefinite";
			anim += '<animateMotion id="a' + i + '" begin="' + begin + '" ' + p + 
				' dur="' + duration + '" repeatCount="1" fill="freeze" />';

	    var pathanim = document.createElementNS(xmlns, "animate");
			pathanim.setAttributeNS(null, 'attributeName', "stroke-dashoffset");
			pathanim.setAttributeNS(null, 'begin', i ? begin : "a0.begin");
			pathanim.setAttributeNS(null, 'from', pathlength.toString());
			pathanim.setAttributeNS(null, 'to', "0");
			pathanim.setAttributeNS(null, 'dur', duration);
			pathanim.setAttributeNS(null, 'fill', "freeze");
			pathanim.setAttributeNS(null, 'repeatCount', "1");
			lastpath.appendChild(pathanim);
			
			i++;
		}
		anim += '<animateMotion id="a' + i + '" begin="a' + (i - 1) + '.end" dur="3s" repeatCount="1" fill="freeze" />';
		anim += '<set attributeName="visibility" to="hidden" begin="a' + i + '.end" />'
		anim += '</g>';
		
		layer.innerHTML += anim;
		svgdoc.querySelectorAll("animateMotion").forEach(am => am.addEventListener("beginEvent", 
			am => {
				var thekey = svgdoc.getElementById('animkey') as HTMLElement;
				var keycircle = thekey.querySelector('circle') as SVGCircleElement;
				var thetext = thekey.querySelector('text') as SVGTextElement;
				var target = am.currentTarget as HTMLElement;
				var index = Number(target.id.substr(1));
				if (index <= encodingpath.length)
					thetext.innerHTML = encodingpath[index > 4 ? index - 1 : index];
				switch (target.id)
				{
					case "a5":
						keycircle.setAttribute("fill", refcolour);
						break;
					case "a6":
						keycircle.setAttribute("fill", outcolour);
						break;
					case "a11":
						setTimeout(() => {
								layer.innerHTML = '';
								showPath(x, y, dy, gap, width, encodingpath, stack, encpath)
							}, 1000);
						break;
				}
			}));
		(svgdoc.getElementById("a0") as unknown as SVGAnimateMotionElement).beginElement();
	}
	
	return me;
}