// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, register} from '@mathigon/boost';
import {Obj} from '@mathigon/core';
import {create3D} from '../../shared/components/webgl/webgl';
import {FoldingData, FoldingDataItem} from './folding-data';


const colours: Obj<number> = {
  3: 0xfd8c00,  // yellow
  4: 0x0f82f2,  // blue
  5: 0x22ab24,  // green
  6: 0xcd0e66,  // red
  8: 0x6d3bbf,  // violet
  10: 0x009ea6  // teal
};

function drawFace(face: number[], vertices: THREE.Vector3[]) {
  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let i = 1; i < face.length - 1; i++) {
    const faceObj = new THREE.Face3(face[0], face[i], face[i + 1]);
    faceObj.color = new THREE.Color(colours[face.length]);
    faceGeometry.faces.push(faceObj);
  }
  faceGeometry.computeFaceNormals();
  faceGeometry.computeVertexNormals();
  return faceGeometry;
}

function getFolding(data: FoldingDataItem) {
  const vertices = data.vertices.map(v => new THREE.Vector3(...v));
  const hinges = data.hinges;

  function buildTree(f: number, side = 0, angle = Math.PI, parent?: THREE.Object3D) {
    const node = new THREE.Object3D();
    node.name = '' + f;

    const face = data.net[f];
    const faceGeometry = drawFace(face, vertices);

    const faceMaterial = new THREE.MeshPhongMaterial({
      vertexColors: THREE.FaceColors as any,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      specular: 0x222222,
      flatShading: true
    });

    node.add(new THREE.Mesh(faceGeometry, faceMaterial));

    const s1 = face[side];
    const s2 = face[(side + 1) % face.length];
    node.userData = {
      offset: vertices[s1],
      axis: new THREE.Vector3().subVectors(vertices[s2], vertices[s1]).clone().normalize(),
      amount: angle
    };

    const parentName = (parent === undefined) ? -1 : parent.name;
    for (let n = 0; n < hinges.length; n++) {
      const hinge = hinges[n];
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

function updateHinges(polyhedron: THREE.Object3D, p: number) {
  polyhedron.traverse((obj) => {
    const u = obj.userData;
    if (u.offset) return;

    const t1 = new THREE.Matrix4().makeTranslation(-u.offset.x, -u.offset.y, -u.offset.z);
    const r = new THREE.Matrix4().makeRotationAxis(u.axis, p * (Math.PI - u.amount));
    const t2 = new THREE.Matrix4().makeTranslation(u.offset.x, u.offset.y, u.offset.z);

    obj.matrix = new THREE.Matrix4().multiplyMatrices(t2, r).multiply(t1);
    obj.matrixAutoUpdate = false;
    obj.matrixWorldNeedsUpdate = true;
  });
}

// -----------------------------------------------------------------------------

@register('x-folding')
export class Folding extends CustomElementView {

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
      updateHinges(polyhedron, p / 100);

      const a = 0.5 * (p / 100) * Math.PI / 2;
      const r = 25 - p / 100 * 15;
      scene.camera.position.set(0, r * Math.sin(a), r * Math.cos(a));
      scene.camera.lookAt(0, 0, 0);
    });
  }
}
