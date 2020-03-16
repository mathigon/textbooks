// =============================================================================
// Menger Sponge Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/solid';


const positions: [number, number, number][] = [];
for (const i of [-1, 0, 1]) {
  for (const j of [-1, 0, 1]) {
    for (const k of [-1, 0, 1]) {
      if ((i || j) && (i || k) && (j || k)) {
        positions.push([i, j, k]);
      }
    }
  }
}

function step(child: THREE.Object3D) {
  child.scale.set(1/3, 1/3, 1/3);
  const obj = new THREE.Object3D();

  for (const p of positions) {
    const part = child.clone();
    part.position.set(p[0]/3, p[1]/3, p[2]/3);
    obj.add(part);
  }

  return obj;
}



@register('x-menger-sponge', {attributes: ['steps']})
export class MengerSponge extends Solid {

  created() {
    const layers = +this.attr('steps');
    if (layers > 1) this.setAttr('rotate', '1');

    this.addMesh(() => {
      const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial(
          {specular: 0x222222, color: 0x0f82f2, flatShading: true});

      let cube: THREE.Object3D = new THREE.Mesh(geometry, material);
      cube.receiveShadow = true;
      for (let i = 0; i < 3; ++i) cube = step(cube);

      cube.scale.set(2.2, 2.2, 2.2);
      return [cube];
    });

  }
}
