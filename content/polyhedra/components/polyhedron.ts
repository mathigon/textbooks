// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {register} from '@mathigon/boost';
import {Obj} from '@mathigon/core';
import {Solid} from '../../shared/components/solid';
import {PolyhedronData} from './polyhedron-data';

type Part = 'vertex' | 'edge' | 'face';

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

  getComponentPosn(partKind: Part, [meshIndex, partIndex]: [number, number]) {
    const obj = this.object.children[meshIndex];
    const mesh = obj.children.filter(obj3D => obj3D.type == 'Mesh')[0] as THREE.Mesh;
    let geo!: THREE.Geometry;
    if (mesh.geometry.type == 'Geometry') geo = mesh.geometry as THREE.Geometry;
    else if (mesh.geometry.type == 'BufferGeometry') {
      geo = new THREE.Geometry();
      geo.fromBufferGeometry(mesh.geometry as THREE.BufferGeometry);
    }
    let posn: [number, number, number];
    switch (partKind) {
      case 'vertex':
        posn = [
          geo.vertices[partIndex].x,
          geo.vertices[partIndex].y,
          geo.vertices[partIndex].z
        ];
        break;
      case 'edge':
        posn = handleEdge(geo, partIndex);
        break;
      case 'face':
        posn = handleFace(geo, partIndex);
        break;
    }
    return posn;
  }

  addComponentLabel(text: string, partKind: Part, [meshIndex, partIndex]: [number, number], color = 0x666666, margin = '') {
    const posn = this.getComponentPosn(partKind, [meshIndex, partIndex]);
    this.addLabel(text, posn, color, margin);
    /*
    this.onRotate = () => {
      updatePosition(this.getComponentPosn(partKind, [meshIndex, partIndex]));
    };
    */
  }
}

function handleEdge(geo: THREE.Geometry, partIndex: number): [number, number, number] {
  const edges: [number, number][] = [];
  // TODO: Optimize
  for (const face of geo.faces) {
    const e1: [number, number] = [face.a, face.b];
    const e2:[number, number] = [face.a, face.c];
    const e3:[number, number] = [face.b, face.c];
    edges.push(e1, e2, e3);
  }
  const [a, b] = edges[partIndex];
  const edge = new THREE.Line3(geo.vertices[a], geo.vertices[b]);
  const mid = new THREE.Vector3();
  edge.getCenter(mid);
  return [mid.x, mid.y, mid.z];
}

function handleFace(geo: THREE.Geometry, partIndex: number): [number, number, number] {
  const {a, b, c} = geo.faces[partIndex];
  const face = new THREE.Triangle(geo.vertices[a], geo.vertices[b], geo.vertices[c]);
  const mid = new THREE.Vector3();
  face.getMidpoint(mid);
  return [mid.x, mid.y, mid.z];
}
