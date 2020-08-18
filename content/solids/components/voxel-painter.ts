// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================


/// <reference types="three"/>
import {$N, animate, canvasPointerPosition, CustomElementView, Draggable, loadScript, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/fermat';
import {Obj} from '@mathigon/core';
import {create3D} from '../../shared/components/webgl';
import {BLUE, GREEN, ORANGE, PURPLE, RED, YELLOW} from '../../shared/constants';
import {clamp} from '@mathigon/fermat';

const TAU = Math.PI * 2;

@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {
  voxels: THREE.Object3D[] = [];

  async ready() {
    await loadScript('/resources/shared/vendor/three-91.min.js');

    const width = (+this.attr('width')) || 400;
    const height = (+this.attr('height')) || width;
    this.css({width: width + 'px', height: height + 'px'});

    const v1 = new THREE.Vector3();
    const rotateOnly = this.hasAttr('rotateOnly');

    const defaultGridDimension = 20;
    let gridDimension = this.attr('playingFieldSize') ? this.attr('playingFieldSize') : defaultGridDimension;
    if (gridDimension % 2 !== 0) {
      gridDimension = 2 * Math.ceil(gridDimension / 2);
    }
    const playingFieldMin = new THREE.Vector3().setScalar(-gridDimension / 2.0 + 0.1);
    const playingFieldMax = new THREE.Vector3().setScalar(gridDimension / 2.0 - 0.1);
    function pointInPlayingField(p) {// best done with a point already on grid
      const ret = playingFieldMin.x < p.x && p.x < playingFieldMax.x &&
                playingFieldMin.y < p.y && p.y < playingFieldMax.y &&
                playingFieldMin.z < p.z && p.z < playingFieldMax.z;
      return ret;
    }

    let customCamera: THREE.Camera|undefined = undefined;
    if (this.hasAttr('orthographic')) {
      const cameraW = 27.0 * gridDimension / defaultGridDimension;
      const cameraH = cameraW * height / width;
      customCamera = new THREE.OrthographicCamera(-cameraW, cameraW, cameraH, -cameraH, 1, 1000);
    }

    const scene = await create3D(this, 45, 2 * width, 2 * height, customCamera);
    const camera = scene.camera;
    camera.rotation.order = 'YXZ';
    camera.rotation.y = TAU / 8;
    camera.rotation.x = -TAU / 8;
    camera.position.x = 45.0; // the "distance"
    camera.position.setLength(camera.position.length() * gridDimension / defaultGridDimension);
    const $canvas = scene.$canvas;

    const objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];
    const voxels = this.voxels

    if (this.hasAttr('showSaveButton')) {
      const $button = $N('button', {class: 'btn', text: 'Save'}, this);
      this.append($button);

      $button.on('click', () => {
        let outputString = '"';
        for (let i = 0; i < voxels.length; i++) {
          for (let j = 0; j < 3; j++) {
            outputString += voxels[i].position.getComponent(j) + ',';
          }
        }
        outputString += '"';
        prompt('In order to load the current voxels in, copy the below, then paste it next to shape= ', outputString);
      });
    }

    {
      const ambientLight = new THREE.AmbientLight(0x606060);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 0.75, 0.5).normalize();
      camera.updateMatrixWorld();
      camera.worldToLocal(directionalLight.position);
      camera.add(directionalLight);
    }

    const voxelGeo = new THREE.BoxGeometry(1, 1, 1);
    const voxelMaterial = new THREE.MeshLambertMaterial({color: 0xfeb74c});

    if (this.hasAttr('color-sides')) {
      const faceColours = [RED, BLUE, GREEN, YELLOW, ORANGE, PURPLE];
      for (let i = 0; i < 6; ++i) {
        const c = new THREE.Color(faceColours[i]);
        voxelGeo.faces[i * 2].color = voxelGeo.faces[i * 2 + 1].color = c;
      }
      voxelMaterial.vertexColors = true;
      voxelMaterial.color.setRGB(1, 1, 1);
    }

    const outlineGeometry = new THREE.Geometry();
    const outlineMaterial = new THREE.LineBasicMaterial();
    const cubeEdges = [0, 1, 2, 3, 5, 4, 7, 6, 0, 2, 1, 3, 5, 7, 4, 6, 0, 5, 1, 4, 2, 7, 3, 6];
    for (let i = 0; i < cubeEdges.length; i++) {
      outlineGeometry.vertices[i] = voxelGeo.vertices[cubeEdges[i]].clone();
    }

    const placementMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, opacity: 0.4, transparent: true});
    const placementVisualizer = new THREE.Mesh(voxelGeo, placementMaterial);
    scene.add(placementVisualizer);
    placementVisualizer.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));

    class Voxel extends THREE.Mesh {
      constructor() {
        super(voxelGeo, voxelMaterial);
        this.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));
        voxels.push(this);
        objectsOnWhichVoxelsCanBePlaced.push(this);
        scene.add(this);
      }
    }

    const $eraser = this.$('.eraser');
    if ($eraser !== undefined) {
      const positionMovedTo = new Point();
      const drag = new Draggable($eraser, this);
      drag.on('move', (posn: Point) => {
        positionMovedTo.x = posn.x;
        positionMovedTo.y = posn.y;
        mouseControlMode = 'erasing';

        const p = canvasPointerPosition(event, $canvas);
        respondToPointerMovement(p);
      });
      drag.on('end', () => {
        mouseControlMode = '';

        $eraser.translate(-positionMovedTo.x, -positionMovedTo.y);

        // let numSecondsToGoBack = .7
        // animate((millisecondsSinceStart, timeDifference, cancel) => {
        //   let lerpAmount = 1. - millisecondsSinceStart/1000. / numSecondsToGoBack
        //   if (lerpAmount <= 0.) lerpAmount = 0.
        //   console.log(lerpAmount)
        //   $eraser.translate(-positionMovedTo.x * (1.-lerpAmount), -positionMovedTo.y * (1.-lerpAmount))

        //   updateApplet();

        //   if (lerpAmount === 0.)
        //     cancel();
        // });
      });
    }

    // const eraser = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), new THREE.MeshBasicMaterial({transparent: true}));
    // let eraserDefaultPosition: THREE.Vector3;
    // {
    //   eraser.scale.setScalar(0.2);
    //   camera.add(eraser);

    //   // eraser picture is from https://www.kissclipart.com/ which is public domain
    //   const loader = new THREE.TextureLoader();
    //   loader.load('/resources/solids/eraser.png',
    //       function(texture) {
    //         eraser.material.map = texture;
    //         eraser.material.needsUpdate = true;
    //         updateApplet();
    //       },
    //       undefined,
    //       function(err) {
    //         console.error(err);
    //       }
    //   );

    //   eraserDefaultPosition = new THREE.Vector3();
    //   eraserDefaultPosition.z = -2;
    //   eraserDefaultPosition.x = -0.7;
    //   eraserDefaultPosition.y = -0.7;

    //   if (this.attr('cameraStyle') === 'orthographic') {
    //     eraserDefaultPosition.x = -30 * 0.4;
    //     eraserDefaultPosition.y = eraserDefaultPosition.x * height / width;

    //     eraser.scale.setScalar(5);
    //   }

    //   eraser.position.copy(eraserDefaultPosition);
    // }

    {
      const isInShapeFunctions: Obj<(p: THREE.Vector3) => boolean> = {};

      const sphereRadius = 5;
      const sphereCenter = new THREE.Vector3(0, sphereRadius, 0);
      isInShapeFunctions.sphere = (p) => p.distanceTo(sphereCenter) < sphereRadius;

      const cuboidDimensions = new THREE.Vector3(4, 3, 5);
      const cuboidCenter = new THREE.Vector3(0, cuboidDimensions.y / 2 + 1, 0);
      isInShapeFunctions.cuboid = (p) => {
        return Math.abs(p.x - cuboidCenter.x) < cuboidDimensions.x / 2 &&
          Math.abs(p.y - cuboidCenter.y) < cuboidDimensions.y / 2 &&
          Math.abs(p.z - cuboidCenter.z) < cuboidDimensions.z / 2;
      };

      const cylinderRadius = 6;
      const cylinderHeight = 4;
      const cylinderCenter = new THREE.Vector3(0, cylinderHeight / 2 + 1, 0);
      isInShapeFunctions.cylinder = (p) => {
        v1.copy(p);
        v1.sub(cylinderCenter);
        return v1.x * v1.x + v1.z * v1.z < cylinderRadius * cylinderRadius && Math.abs(v1.y) < cylinderHeight / 2;
      };

      const shape = this.attr('shape');

      if (isInShapeFunctions[shape] !== undefined) {
        const isInShapeFunction = isInShapeFunctions[shape];
        const p = new THREE.Vector3();
        for (let i = -10; i < 10; i++) {
          for (let j = -10; j < 10; j++) {
            for (let k = -10; k < 10; k++) {
              p.set(i, j, k).addScalar(0.5);
              if (isInShapeFunction(p)) {
                const voxel = new Voxel();
                voxel.position.copy(p);
              }
            }
          }
        }
      }

      const coords = shape.split(',');
      for (let i = 0, il = Math.floor(coords.length / 3); i < il; ++i) {
        const voxel = new Voxel();
        voxel.position.set(
            parseFloat(coords[i * 3]),
            parseFloat(coords[i * 3 + 1]),
            parseFloat(coords[i * 3 + 2]));
        snapToNearestValidCubeCenterPosition(voxel.position);
      }
    }

    const pointerRaycaster = new THREE.Raycaster();

    let mouseControlMode: 'rotating' | 'placing' | 'erasing' | '' = '';

    const placingStart = new THREE.Vector3();
    const placingEnd = new THREE.Vector3();
    const floorIntersectionPlaneGeometry = new THREE.PlaneBufferGeometry(gridDimension, gridDimension);
    floorIntersectionPlaneGeometry.rotateX(-Math.PI / 2);
    const floorIntersectionPlane = new THREE.Mesh(floorIntersectionPlaneGeometry, new THREE.MeshBasicMaterial({visible: false}));
    const grid = new THREE.GridHelper(gridDimension, gridDimension);
    scene.add(floorIntersectionPlane);
    floorIntersectionPlane.add(grid);
    if (this.hasAttr('hideGrid')) {
      grid.visible = false;
    }
    objectsOnWhichVoxelsCanBePlaced.push(floorIntersectionPlane);
    floorIntersectionPlane.position.y -= gridDimension / 2.0;
    const placingHelpers: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const placingHelper = new THREE.Mesh(new THREE.PlaneBufferGeometry(999, 999), new THREE.MeshBasicMaterial({side: THREE.DoubleSide,
        // transparent:true,
        // opacity:.5,
        visible: false
      }));
      placingHelpers.push(placingHelper);
      scene.add(placingHelper);
    }
    placingHelpers[0].geometry.rotateX(TAU / 4);
    placingHelpers[1].geometry.rotateY(TAU / 4);
    // placingHelpers[0].material.color.setRGB(1.,0.,0.)
    // placingHelpers[1].material.color.setRGB(1.,1.,0.)
    // placingHelpers[2].material.color.setRGB(1.,0.,1.)

    function snapToNearestValidCubeCenterPosition(p: THREE.Vector3) {
      p.floor().addScalar(0.5);
    }

    function setFromVoxelIntersection(target: THREE.Vector3, intersection: THREE.Intersection) {
      target.copy(intersection!.face!.normal).multiplyScalar(0.1);
      target.add(intersection.point);
      snapToNearestValidCubeCenterPosition(target);
    }

    function getCameraDirectionSnappedToGrid(target: THREE.Vector3) {
      target.set(0, 0, -1).applyQuaternion(camera.quaternion);
      target.x = target.x > 0 ? 0.5 : -0.5;
      target.y = target.y > 0 ? 0.5 : -0.5;
      target.z = target.z > 0 ? 0.5 : -0.5;
    }

    const asyncPointerNdc = new THREE.Vector3();
    const pointerNdc = new THREE.Vector3();
    const oldPointerNdc = new THREE.Vector3();

    function respondToPointerMovement(p) {
      camera.updateMatrixWorld();
      asyncPointerNdc.set((p.x / $canvas.canvasWidth) * 2 - 1,
          -(p.y / $canvas.canvasHeight) * 2 + 1, 0);
      updateApplet();
    }
    $canvas.on('pointermove', (event: PointerEvent)=> {
      event.preventDefault();
      const p = canvasPointerPosition(event, $canvas);
      respondToPointerMovement(p);
    });

    slide($canvas, {

      down: () => {
        mouseControlMode = 'rotating';

        const intersection = pointerRaycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced)[0];
        if (!rotateOnly && intersection !== undefined) {
          setFromVoxelIntersection(v1, intersection);
          if (pointInPlayingField(v1)) {
            mouseControlMode = 'placing';
            placingStart.copy(v1);
            placingEnd.copy(placingStart);

            // corner of cube that is away from camera
            getCameraDirectionSnappedToGrid(v1);
            v1.add(placingStart);
            for (let i = 0; i < 3; i++) {
              placingHelpers[i].position.copy(v1);
              placingHelpers[i].updateMatrixWorld();
            }
          }
        }
      },

      move: respondToPointerMovement,

      up: () => {
        if (mouseControlMode === 'placing') {
          mouseControlMode = '';

          let iComponent = 0;
          if (placingStart.x === placingEnd.x) iComponent = 1;
          if (placingStart.y === placingEnd.y) iComponent = 2;
          if (placingStart.z === placingEnd.z) iComponent = 0;
          const jComponent = (iComponent + 1) % 3;
          const kComponent = (jComponent + 1) % 3;
          const k = placingStart.getComponent(kComponent);

          const iStart = Math.min(placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent));
          const iLimit = Math.max(placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent));
          const jStart = Math.min(placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent));
          const jLimit = Math.max(placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent));

          const potentialNewPosition = new THREE.Vector3();
          for (let i = iStart; i <= iLimit; i += 1) {
            for (let j = jStart; j <= jLimit; j += 1) {
              potentialNewPosition.setComponent(kComponent, k);
              potentialNewPosition.setComponent(iComponent, i);
              potentialNewPosition.setComponent(jComponent, j);
              snapToNearestValidCubeCenterPosition(potentialNewPosition);
              let alreadyOccupied = false;
              voxels.forEach((voxel) => {
                if (voxel.position.equals(potentialNewPosition)) alreadyOccupied = true;
              });
              if (!alreadyOccupied) {
                new Voxel().position.copy(potentialNewPosition);
              }
            }
          }
        }

        if (mouseControlMode === 'rotating') {
          mouseControlMode = '';

          animate((timeSinceStart, timeDifference, cancel) => {
            // snapspace is where the angles we want are integers
            const snapSpaceAngleX = camera.rotation.x / (TAU / 16);
            const destination = Math.round(snapSpaceAngleX);
            // destination = clamp(destination, -1, 1)
            const stepX = getStepTowardDestination(snapSpaceAngleX, destination);
            const newSnapSpaceAngleX = snapSpaceAngleX + stepX;
            camera.rotation.x = newSnapSpaceAngleX * (TAU / 16);

            const snapSpaceAngleY = camera.rotation.y / (TAU / 8);
            const stepY = getStepTowardDestination(snapSpaceAngleY, Math.round(snapSpaceAngleY));
            const newSnapSpaceAngleY = snapSpaceAngleY + stepY;
            camera.rotation.y = newSnapSpaceAngleY * (TAU / 8);

            updateApplet();

            if (stepX == 0 && stepY == 0) {
              cancel();
            }
          });
        }

        updateApplet();
      }
    });

    function getStepTowardDestination(currentValue: number, destination: number) {
      const distanceFromDestination = destination - currentValue;
      const sign = distanceFromDestination == 0 ? 0 : distanceFromDestination / Math.abs(distanceFromDestination);
      let speed = 0.01;
      if (speed > Math.abs(distanceFromDestination)) {
        speed = Math.abs(distanceFromDestination);
      }
      return sign * speed;
    }

    let lastVoxelIntersectedByEraser: THREE.Object3D|undefined = undefined;

    function updateApplet() {
      oldPointerNdc.copy(pointerNdc);
      pointerNdc.copy(asyncPointerNdc);
      pointerRaycaster.setFromCamera(pointerNdc, camera);

      // camera
      {
        if (mouseControlMode === 'rotating') {
          camera.rotation.y -= (pointerNdc.x - oldPointerNdc.x);
          camera.rotation.x += (pointerNdc.y - oldPointerNdc.y);
          camera.rotation.x = clamp(camera.rotation.x, -TAU / 4, TAU / 4);
        }

        const currentDistFromCamera = camera.position.length();
        camera.updateMatrixWorld();
        v1.set(0, 0, -currentDistFromCamera);
        camera.localToWorld(v1);
        camera.position.sub(v1);
      }

      if (mouseControlMode === 'placing') {
        const snapSpaceCameraRotationY = (camera.rotation.y - TAU / 8.0) / (TAU / 4.0);
        const distanceFromDiagonalViewpoint = Math.abs(snapSpaceCameraRotationY - Math.round(snapSpaceCameraRotationY));
        const distanceFromTopOrBottomViewpoint = TAU / 4.0 - Math.abs(camera.rotation.x);
        const placingHelpersArrayToUse = distanceFromDiagonalViewpoint < 0.1 && distanceFromTopOrBottomViewpoint > 0.1 ? placingHelpers : [placingHelpers[0]];

        const intersection = pointerRaycaster.intersectObjects(placingHelpersArrayToUse)[0];
        if (intersection !== undefined) {
          getCameraDirectionSnappedToGrid(placingEnd);
          placingEnd.negate().setLength(0.1);
          placingEnd.add(intersection.point);
          placingEnd.clamp(playingFieldMin, playingFieldMax);
          snapToNearestValidCubeCenterPosition(placingEnd);

          placementVisualizer.position.addVectors(placingEnd, placingStart).multiplyScalar(0.5);
          placementVisualizer.scale.x = 1 + 2 * Math.abs(placementVisualizer.position.x - placingEnd.x);
          placementVisualizer.scale.y = 1 + 2 * Math.abs(placementVisualizer.position.y - placingEnd.y);
          placementVisualizer.scale.z = 1 + 2 * Math.abs(placementVisualizer.position.z - placingEnd.z);
        }
      } else {
        placementVisualizer.scale.setScalar(0.0000001);
        if (!rotateOnly && mouseControlMode === '') {
          const intersections = pointerRaycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced);
          if (intersections.length !== 0) {
            setFromVoxelIntersection(placementVisualizer.position, intersections[0]);
            if (pointInPlayingField(placementVisualizer.position)) {
              placementVisualizer.scale.setScalar(1);
            }
          }
        }
      }

      if (mouseControlMode === 'erasing') {
        let voxelIntersectedByEraser: THREE.Object3D|undefined = undefined;
        const intersections = pointerRaycaster.intersectObjects(voxels);
        if (intersections.length > 0) voxelIntersectedByEraser = intersections[0].object;

        if (lastVoxelIntersectedByEraser && voxels.indexOf(lastVoxelIntersectedByEraser) !== -1 && lastVoxelIntersectedByEraser !== voxelIntersectedByEraser) {
          scene.remove(lastVoxelIntersectedByEraser);
          objectsOnWhichVoxelsCanBePlaced.splice(objectsOnWhichVoxelsCanBePlaced.indexOf(lastVoxelIntersectedByEraser), 1);
          voxels.splice(voxels.indexOf(lastVoxelIntersectedByEraser), 1);
        }
        lastVoxelIntersectedByEraser = voxelIntersectedByEraser;
      }

      scene.draw();
    }

    updateApplet();
  }

  getSurfaceArea() {
    let sa = 0;
    for (let i = 0, il = this.voxels.length; i < il; ++i) {
      sa += 6;
      for (let j = 0; j < il; ++j) {
        if (i !== j && this.voxels[i].position.distanceToSquared(this.voxels[j].position) < 1.1) {
          sa -= 1;
        }
      }
    }
    return sa;
  }

  getVolume() {
    return this.voxels.length;
  }
}
