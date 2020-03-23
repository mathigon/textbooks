// =============================================================================
// Menger Sponge Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/solid';


const positions = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];

function step(child: THREE.Object3D) {
  child.scale.set(1/2, 1/2, 1/2);
  const obj = new THREE.Object3D();
  obj.castShadow = true;
  obj.receiveShadow = false;

  for (const p of positions) {
    const part = child.clone();
    part.position.set(p[0] / 4, p[1] / 4, p[2] / 4);
    obj.add(part);
  }

  return obj;
}


@register('x-sierpinski-tetrahedra')
export class SierpinskiTetrahedra extends Solid {

  created() {
    this.setAttr('rotate', '1');
    const steps = +this.attr('steps') || 0;

    this.addMesh(() => {
      const geometry = new THREE.TetrahedronBufferGeometry(1);
      const material = new THREE.MeshPhongMaterial(
          {specular: 0x222222, color: 0xfd8c00, flatShading: true, shadowSide: THREE.DoubleSide});

      let tetrahedron: THREE.Object3D = new THREE.Mesh(geometry, material);
      tetrahedron.castShadow = true;
      tetrahedron.receiveShadow = false;

      for (let i = 0; i < steps; ++i) tetrahedron = step(tetrahedron);

      tetrahedron.scale.set(2.2, 2.2, 2.2);
      return [tetrahedron];
    });

  }
}
