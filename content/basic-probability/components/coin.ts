// =============================================================================
// Coin Flip Component
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {animate, register} from '@mathigon/boost';
import {Solid} from '../../shared/components/solid';


@register('x-coin-flip')
export class CoinFlip extends Solid {
  private coin!: THREE.Mesh;
  private isFlipping = false;

  created() {
    this.setAttr('static', true);
    // this.on('click', () => this.flip());

    this.addMesh(() => {
      const geo = new THREE.CylinderGeometry(0.9, 0.9, 0.1, 32, 1);
      this.coin = new THREE.Mesh(geo, Solid.solidMaterial(0xfd8c00));

      // TODO Add icon or texture for H/T of coin

      this.coin.translateY(-1);
      this.coin.rotateX(0.25 * Math.PI);
      return [this.coin];
    });
  }

  async flip() {
    if (this.isFlipping) return;
    this.isFlipping = true;

    // TODO Randomly calculate the outcome of the flipping animation.

    await animate((p: number) => {
      const height = p * (1 - p) * 4;
      this.coin.position.y = -1 + 2 * height;
      this.coin.position.z = -1 * height;
      this.coin.rotation.x = ((0.25 + p * 10) % 2) * Math.PI;
      this.coin.rotation.z = 0.3 * Math.sin(p * 6 * Math.PI);  // wobble
      this.scene.draw();
    }, 2000);

    this.isFlipping = false;
  }
}
