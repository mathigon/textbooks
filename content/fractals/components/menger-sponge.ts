// =============================================================================
// Menger Sponge Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/webgl/solid';


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
  child.scale.set(1 / 3, 1 / 3, 1 / 3);
  const obj = new THREE.Object3D();

  for (const p of positions) {
    const part = child.clone();
    part.position.set(p[0] / 3, p[1] / 3, p[2] / 3);
    obj.add(part);
  }

  return obj;
}


@register('x-menger-sponge')
export class MengerSponge extends Solid {

  created() {
    this.setAttr('rotate', '1');
    let cubes: THREE.Object3D[] = [];

    this.addMesh(() => {
      const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
      const material = new THREE.MeshLambertMaterial(
          {color: 0xfd8c00, flatShading: true});

      cubes = [0, 1, 2, 3].map((steps: number) => {
        let cube: THREE.Object3D = new THREE.Mesh(geometry, material);
        for (let i = 0; i < steps; ++i) cube = step(cube);
        cube.scale.set(2.2, 2.2, 2.2);
        cube.visible = false;
        return cube;
      });

      cubes[+this.attr('steps')].visible = true;
      return cubes;
    });

    this.onAttr('steps', (steps) => {
      for (const c of cubes) c.visible = false;
      if (cubes[+steps]) cubes[+steps].visible = true;
      if (this.scene) this.scene.draw();
    });
  }
}
