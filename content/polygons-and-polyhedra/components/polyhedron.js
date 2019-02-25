// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================



import {registerElement} from '@mathigon/boost';
import {Solid} from '../../shared/components/solid';
import {PolyhedronData} from './polyhedron-data';


const colours = {
  3: 0xff941f,  // yellow
  4: 0x1f7aff,  // blue
  5: 0x31b304,  // green
  6: 0xb30469,  // red
  8: 0x693fb4,  // violet
  10: 0x289782  // teal
};

const scales = {
  StellatedDodecahedron: 2,
  Octahedron: 1.3,
  Tetrahedron: 1.1
};


export class Polyhedron extends Solid {

  created() {
    const shape = this.attr('shape');
    const data = PolyhedronData[shape];
    if (!data) return console.error('Unknown polyhedron:', shape);

    const scale = scales[shape] || 1.65;
    this.setAttr('rotate', '1');

    this.addMesh((scene, THREE) => {
      const polyhedron = new THREE.Object3D();
      const vertices = data.vertex.map(v =>
          new THREE.Vector3(v[0], v[1], v[2]).multiplyScalar(scale));

      const faceGeometry = new THREE.Geometry();
      faceGeometry.vertices = vertices;
      for (let f of data.face) {
        for (let i = 1; i < f.length - 1; i++) {
          const face = new THREE.Face3(f[0], f[i], f[i+1]);
          face.color = new THREE.Color(colours[f.length]);
          faceGeometry.faces.push(face);
        }
      }
      faceGeometry.computeFaceNormals();
      faceGeometry.computeVertexNormals();
      const faceMaterial = new THREE.MeshPhongMaterial({
        vertexColors: THREE.FaceColors,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        specular: 0x222222,
        flatShading: true
      });
      polyhedron.add(new THREE.Mesh(faceGeometry, faceMaterial));

      for (let e of data.edge) {
        const edgeGeometry = new THREE.Geometry();
        edgeGeometry.vertices = [vertices[e[0]], vertices[e[1]]];
        const edgeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
        const edge = new THREE.Line(edgeGeometry, edgeMaterial);
        polyhedron.add(edge);
      }

      return [polyhedron];
    });
  }
}

registerElement('x-polyhedron', Polyhedron);
