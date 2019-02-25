// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import {$N, CustomElement, registerElement} from '@mathigon/boost';
import {create3D} from '../../shared/components/webgl';
import {FoldingData} from './folding-data';


const colours = {
  3: 0xff941f,  // yellow
  4: 0x1f7aff,  // blue
  5: 0x31b304,  // green
  6: 0xb30469,  // red
  8: 0x693fb4,  // violet
  10: 0x289782  // teal
};

function drawFace(face, vertices) {
  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let i = 1; i < face.length - 1; i++) {
    const faceObj = new THREE.Face3(face[0], face[i], face[i+1]);
    faceObj.color = new THREE.Color(colours[face.length]);
    faceGeometry.faces.push(faceObj);
  }
  faceGeometry.computeFaceNormals();
  faceGeometry.computeVertexNormals();
  return faceGeometry;
}

function getFolding(data) {
  const vertices = data.vertices.map(v => new THREE.Vector3(v[0], v[1], v[2]));
  const hinges = data.hinges;

  function buildTree(f, side=0, angle=Math.PI, parent) {
    const node = new THREE.Object3D();
    node.name = f;

    const face = data.net[f];
    const faceGeometry = drawFace(face, vertices);

    const faceMaterial = new THREE.MeshPhongMaterial({
      vertexColors: THREE.FaceColors,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      specular: 0x222222,
      flatShading: true
    });

    node.add(new THREE.Mesh(faceGeometry, faceMaterial));

    let s1 = face[side];
    let s2 = face[(side + 1) % face.length];
    node.userData = {
      offset: vertices[s1],
      axis: new THREE.Vector3().subVectors(vertices[s2], vertices[s1]).clone().normalize(),
      amount: angle
    };

    let parentName = (parent === undefined) ? -1 : parent.name;
    for (let n = 0; n < hinges.length; n++) {
      let hinge = hinges[n];
      if (hinge[0] === f && hinge[2] !== parentName) {
        buildTree(hinge[2], hinge[3], hinge[4], node);
      } else if (hinge[2] === f && hinge[0] !== parentName) {
        buildTree(hinge[0], hinge[1], hinge[4], node);
      }
    }

    if (parent) parent.add(node);
    return node;
  }

  return buildTree(hinges[0][0]);
}

function updateHinges(polyhedron, p) {
  polyhedron.traverse(function(obj) {
    let u = obj.userData;
    if (!u.hasOwnProperty('offset')) return;

    let t1 = new THREE.Matrix4().makeTranslation(-u.offset.x, -u.offset.y, -u.offset.z);
    let r = new THREE.Matrix4().makeRotationAxis(u.axis, p * (Math.PI - u.amount));
    let t2 = new THREE.Matrix4().makeTranslation(u.offset.x, u.offset.y, u.offset.z);

    obj.matrix = new THREE.Matrix4().multiplyMatrices(t2, r).multiply(t1);
    obj.matrixAutoUpdate = false;
    obj.matrixWorldNeedsUpdate = true;
  });
}

// -----------------------------------------------------------------------------

export class Folding extends CustomElement {

  async ready() {
    const size = +this.attr('size');
    const shape = this.attr('shape');

    this.css({width: size + 'px'});

    const data = FoldingData[shape];
    if (!data) return console.error('Unknown folding:', shape);

    const scene = await create3D(this, 35, 2 * size);
    scene.camera.position.set(0, 0, 25);
    scene.camera.up = new THREE.Vector3(0, -1, 0);
    scene.camera.lookAt(0, 0, 0);

    const polyhedron = getFolding(data);
    scene.add(polyhedron);

    const $slider = $N('x-slider', {steps: 100}, this);
    $slider.on('move', p => {
      updateHinges(polyhedron, p/100);

      const a = 0.5 * (p/100) * Math.PI / 2;
      const r = 25 - p/100 * 15;
      scene.camera.position.set(0, r * Math.sin(a), r * Math.cos(a));
      scene.camera.lookAt(0,0,0);
    });
  }
}

registerElement('x-folding', Folding);
