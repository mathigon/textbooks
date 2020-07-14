// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================


import {$, canvasPointerPosition, CanvasView, CustomElementView, loadScript, register} from '@mathigon/boost';


@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {

  async ready() {

    await loadScript('/resources/shared/vendor/three-91.min.js');

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0xffffff);
    renderer.setSize(760, 400);

    const $canvas = $(renderer.domElement) as CanvasView;
    this.append($canvas);

    const objects: THREE.Object3D[] = [];

    // TODO Listen to shift key and decide whether we're deleting
    let isShiftDown = false;

    const camera = new THREE.PerspectiveCamera(45, 1520 / 800, 1, 10000);
    camera.position.set(500, 800, 1300);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // roll-over helpers
    const rollOverGeo = new THREE.BoxBufferGeometry(50, 50, 50);
    const rollOverMaterial = new THREE.MeshBasicMaterial(
        {color: 0xff0000, opacity: 0.5, transparent: true});
    const rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
    scene.add(rollOverMesh);

    // cubes
    const cubeGeo = new THREE.BoxBufferGeometry(50, 50, 50);
    const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xfeb74c});

    // grid
    const gridHelper = new THREE.GridHelper(1000, 20);
    scene.add(gridHelper);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const geometry = new THREE.PlaneBufferGeometry(1000, 1000);
    geometry.rotateX(-Math.PI / 2);

    const plane = new THREE.Mesh(geometry,
        new THREE.MeshBasicMaterial({visible: false}));
    scene.add(plane);

    objects.push(plane);

    // lights

    const ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    scene.add(directionalLight);

    function render() {
      renderer.render(scene, camera);
    }

    render();


    $canvas.on('pointermove', (event: PointerEvent) => {
      const p = canvasPointerPosition(event, $canvas);
      event.preventDefault();

      mouse.set((p.x / $canvas.width) * 2 - 1,
          -(p.y / $canvas.height) * 2 + 1);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(objects);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        rollOverMesh.position.copy(intersect.point)
            .add(intersect!.face!.normal);
        rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50)
            .addScalar(25);
      }

      render();

    });

    $canvas.on('pointerdown', (event: PointerEvent) => {
      event.preventDefault();
      const p = canvasPointerPosition(event, $canvas);

      mouse.set((p.x / $canvas.width) * 2 - 1, -(p.y / $canvas.height) * 2 + 1);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(objects);

      if (intersects.length > 0) {

        const intersect = intersects[0];

        // delete cube
        if (isShiftDown) {
          if (intersect.object !== plane) {
            scene.remove(intersect.object);
            objects.splice(objects.indexOf(intersect!.object!), 1);
          }

          // create cube
        } else {
          const voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
          voxel.position.copy(intersect.point).add(intersect.face!.normal);
          voxel.position.divideScalar(50).floor().multiplyScalar(50)
              .addScalar(25);
          scene.add(voxel);
          objects.push(voxel);
        }
        render();
      }
    });

  }
}
