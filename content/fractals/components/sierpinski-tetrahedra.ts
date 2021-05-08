// =============================================================================
// Sierpinski Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/webgl/solid';


@register('x-sierpinski-tetrahedra')
export class SierpinskiTetrahedra extends Solid {
  positions = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];
  color = 0x0f82f2;
  shift = 0;
  size = 2.3;

  created() {
    const steps = +this.attr('steps') || 0;

    this.addMesh(() => {
      const geometry = this.initial();
      const material = new THREE.MeshLambertMaterial(
          {color: this.color, flatShading: true});

      let object: THREE.Object3D = new THREE.Mesh(geometry, material);
      for (let i = 0; i < steps; ++i) object = this.step(object);

      object.scale.set(this.size, this.size, this.size);
      object.position.set(0, this.shift, 0);
      return [object];
    });
  }

  initial(): THREE.BufferGeometry {
    return new THREE.TetrahedronBufferGeometry(1);
  }

  step(child: THREE.Object3D) {
    child.scale.set(1 / 2, 1 / 2, 1 / 2);
    const obj = new THREE.Object3D();

    for (const p of this.positions) {
      const part = child.clone();
      part.position.set(p[0] / 4, p[1] / 4, p[2] / 4);
      obj.add(part);
    }

    return obj;
  }
}

const SQRT = Math.sqrt(2);

@register('x-sierpinski-pyramid')
export class SierpinskiPyramid extends SierpinskiTetrahedra {
  positions = [[0, 1, 0], [0, -1, SQRT], [SQRT, -1, 0], [0, -1, -SQRT],
    [-SQRT, -1, 0]];
  color = 0x22ab24;
  shift = 0.5;
  size = 2.6;

  initial() {
    return new THREE.ConeBufferGeometry(1 / SQRT, 1, 4);
  }
}
