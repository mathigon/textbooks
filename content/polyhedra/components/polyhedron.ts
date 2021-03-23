// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Obj} from '@mathigon/core';
import {Solid} from '../../shared/components/webgl/solid';
import {PolyhedronData} from './polyhedron-data';


const colours: Obj<number> = {
  3: 0xfd8c00,  // yellow
  4: 0x0f82f2,  // blue
  5: 0x22ab24,  // green
  6: 0xcd0e66,  // red
  8: 0x6d3bbf,  // violet
  10: 0x009ea6  // teal
};

const scales: Obj<number> = {
  StellatedDodecahedron: 2,
  Octahedron: 1.3,
  Tetrahedron: 1.1
};

@register('x-polyhedron')
export class Polyhedron extends Solid {

  created() {
    const shape = this.attr('shape');
    const data = PolyhedronData[shape];
    if (!data) return console.error('Unknown polyhedron:', shape);

    const scale = scales[shape] || 1.65;
    if (!this.hasAttr('rotate')) this.setAttr('rotate', '1');

    this.addMesh(() => {
      const polyhedron = new THREE.Object3D();
      const vertices = data.vertex.map(v =>
        new THREE.Vector3(v[0], v[1], v[2]).multiplyScalar(scale));

      const faceGeometry = new THREE.Geometry();
      faceGeometry.vertices = vertices;
      for (const f of data.face) {
        for (let i = 1; i < f.length - 1; i++) {
          const face = new THREE.Face3(f[0], f[i], f[i + 1]);
          face.color = new THREE.Color(colours[f.length]);
          faceGeometry.faces.push(face);
        }
      }
      faceGeometry.computeFaceNormals();
      faceGeometry.computeVertexNormals();
      const faceMaterial = new THREE.MeshPhongMaterial({
        vertexColors: THREE.FaceColors as any,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        specular: 0x222222,
        flatShading: true
      });
      polyhedron.add(new THREE.Mesh(faceGeometry, faceMaterial));

      for (const e of data.edge) {
        const edgeGeometry = new THREE.Geometry();
        edgeGeometry.vertices = [vertices[e[0]], vertices[e[1]]];
        const edgeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
        const edge = new THREE.Line(edgeGeometry, edgeMaterial);
        polyhedron.add(edge);
      }

      return [polyhedron];
    });
  }

  getVertexCoords(index: number) {
    const obj = this.object.children[0];
    const mesh = obj.children.find(obj3D => obj3D.type == 'Mesh') as THREE.Mesh;
    return (mesh.geometry as THREE.Geometry).vertices[index];
  }
}
