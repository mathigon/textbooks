// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { colours, faceMaterial, edgeMaterial, drawShape } from './webgl';
import { PolyhedronData } from './polyhedron-data';
import { $N, CustomElement, registerElement } from '@mathigon/boost';


function getPolyhedron(data) {
  const polyhedron = new THREE.Object3D();
  const vertices = data.vertex.map(v => new THREE.Vector3(v[0], v[1], v[2]));

  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let f of data.face) {
    for (let i = 1; i < f.length - 1; i++) {
      const face = new THREE.Face3(f[0], f[i], f[i+1]);
      face.color = colours[f.length];
      faceGeometry.faces.push(face);
    }
  }
  faceGeometry.computeFaceNormals();
  faceGeometry.computeVertexNormals();

  const faces = new THREE.Mesh(faceGeometry, faceMaterial);
  polyhedron.add(faces);

  for (let e of data.edge) {
    const edgeGeometry = new THREE.Geometry();
    edgeGeometry.vertices = [vertices[e[0]], vertices[e[1]]];
    const edge = new THREE.Line(edgeGeometry, edgeMaterial);
    polyhedron.add(edge);
  }

  return polyhedron;
}

// -----------------------------------------------------------------------------

export class Polyhedron extends CustomElement {

  ready() {
    if (!window.THREE) return;

    const shape = this.attr('shape');
    const data = PolyhedronData[shape];
    if (!data) return console.error('Unknown polyhedron:', shape);

    const size = +this.attr('size');
    this.css({width: size + 'px', height: size + 'px'});

    const $canvas = $N('canvas', {width: 2*size, height: 2*size}, this);

    setTimeout(() => {
      const polyhedron = getPolyhedron(data);
      const {camera} = drawShape($canvas, polyhedron, size, true);
      camera.position.z = (shape === 'Octahedron') ? 5 : (shape === 'Tetrahedron') ? 6 : 4;
    });
  }
}

registerElement('x-polyhedron', Polyhedron);
