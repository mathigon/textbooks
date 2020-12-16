// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================


/// <reference types="three"/>
import {Obj} from '@mathigon/core';
import {animate, canvasPointerPosition, CustomElementView, loadScript, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/euclid';
import {Vector3} from 'three';

import {create3D} from '../../shared/components/webgl';
import {BLUE, GREEN, ORANGE, PURPLE, RED, YELLOW} from '../../shared/constants';
import {clamp} from '@mathigon/fermat';

const TAU = Math.PI * 2;


@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {
  voxels: THREE.Mesh<THREE.Geometry>[] = [];

  async ready() {
    await loadScript('/resources/shared/vendor/three-91.min.js');

    const width = (+this.attr('width')) || 400;
    const height = (+this.attr('height')) || width;
    this.css({width: width + 'px', height: height + 'px'});

    const defaultColor = this.attr('color') || 0xfeb74c;

    const v1 = new THREE.Vector3();
    const explodeOnGrab = this.hasAttr('explodeOnGrab');
    const rotateOnly = this.hasAttr('rotateOnly') || explodeOnGrab;

    const defaultGridDimension = 20;
    let gridDimension = (+this.attr('playingFieldSize')) || defaultGridDimension;
    if (gridDimension % 2 !== 0) {
      gridDimension = 2 * Math.ceil(gridDimension / 2);
    }

    const playingFieldMin = new THREE.Vector3().setScalar(-gridDimension / 2.0 + 0.1);
    const playingFieldMax = new THREE.Vector3().setScalar(gridDimension / 2.0 - 0.1);

    function pointInPlayingField(p: Vector3) {// best done with a point already on grid
      return playingFieldMin.x < p.x && p.x < playingFieldMax.x &&
                playingFieldMin.y < p.y && p.y < playingFieldMax.y &&
                playingFieldMin.z < p.z && p.z < playingFieldMax.z;
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
    if (this.hasAttr('startingYRotation')) camera.rotation.y = +this.attr('startingYRotation') / 360 * TAU;
    if (this.hasAttr('startingXRotation')) camera.rotation.x = +this.attr('startingXRotation') / 360 * TAU;

    camera.position.x = 45.0; // the "distance"
    camera.position.setLength(camera.position.length() * gridDimension / defaultGridDimension);
    const $canvas = scene.$canvas;

    const objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];
    const voxels = this.voxels;

    const ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    camera.updateMatrixWorld();
    camera.worldToLocal(directionalLight.position);
    camera.add(directionalLight);

    const voxelGeo = new THREE.BoxGeometry(1, 1, 1);
    const voxelMaterial = new THREE.MeshLambertMaterial({color: defaultColor});

    const faceColours = [RED, BLUE, GREEN, YELLOW, ORANGE, PURPLE];
    const faceColorDirections = [
      new THREE.Vector3(1.0, 0.0, 0.0),
      new THREE.Vector3(-1.0, 0.0, 0.0),
      new THREE.Vector3(0.0, 1.0, 0.0),
      new THREE.Vector3(0.0, -1.0, 0.0),
      new THREE.Vector3(0.0, 0.0, 1.0),
      new THREE.Vector3(0.0, 0.0, -1.0)];
    if (this.hasAttr('color-sides')) {
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

    class Voxel extends THREE.Mesh<THREE.BoxGeometry> {
      constructor() {
        super(voxelGeo.clone(), voxelMaterial);
        this.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));
        voxels.push(this);
        objectsOnWhichVoxelsCanBePlaced.push(this);
        scene.add(this);
      }
    }

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
        const [x, y, z] = [
          parseFloat(coords[i * 3]),
          parseFloat(coords[i * 3 + 1]),
          parseFloat(coords[i * 3 + 2])
        ];
        /*
          We swap Y and Z so that coords specified to the component are displayed as if
          X and Y are 'towards' the camera in the positive direction, and +Z is 'up':

                                        |
                                        |  +Z
                                        |
                                        |
                                        |
                                        |
                                        |
                                        |
                                        |
                                      /--\
                                    /--    --\
                                  /-          -\
                              /--              --\
                            /--                    --\
                          /-                          -\
                      /--                              --\   +X
                    /--   +Y                               --\
                  /-                                          -\
              /--                                              --\

        */
        voxel.position.set(x, z, y);
        snapToNearestValidCubeCenterPosition(voxel.position);
      }

      if (explodeOnGrab) {
        const p = new THREE.Vector3();
        for (let i = 0, il = this.voxels.length; i < il; ++i) {
          for (let k = 0; k < 6; k++) {
            let nothingInThisDirection = true;
            p.copy(this.voxels[i].position).add(faceColorDirections[k]);
            for (let j = 0; j < il; ++j) {
              if (this.voxels[j].position.distanceToSquared(p) < 0.01) {
                nothingInThisDirection = false;
              }
            }
            if (!nothingInThisDirection) {
              this.voxels[i].geometry.faces[k * 2 + 0].color.setRGB(0.4, 0.4, 0.4);
              this.voxels[i].geometry.faces[k * 2 + 1].color.setRGB(0.4, 0.4, 0.4);
            }
          }
        }
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

    function respondToPointerMovement(p: Point) {
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

    const pointToExplodeFrom = new THREE.Vector3();
    const initialPositions = Array(voxels.length);
    for (let i = 0, il = voxels.length; i < il; ++i) {
      pointToExplodeFrom.add(voxels[i].position);
      initialPositions[i] = voxels[i].position.clone();
    }
    pointToExplodeFrom.multiplyScalar(1.0 / voxels.length);
    function setVoxelPositionsFromExplodedness(explodedness: number) {
      for (let i = 0, il = voxels.length; i < il; ++i) {
        voxels[i].position.copy(initialPositions[i]).sub(pointToExplodeFrom).multiplyScalar(1.0 + explodedness).add(pointToExplodeFrom);
      }
    }

    if (!this.hasAttr('noInteraction')) {
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

              if (stepX == 0 && stepY == 0) {
                if (explodeOnGrab) {
                  setVoxelPositionsFromExplodedness(0.0);
                }

                updateApplet();
                cancel();
              } else {
                if (explodeOnGrab) {
                  setVoxelPositionsFromExplodedness(0.8);
                }

                updateApplet();
              }
            });
          }

          updateApplet();
        }
      });
    }

    function getStepTowardDestination(currentValue: number, destination: number) {
      const distanceFromDestination = destination - currentValue;
      const sign = distanceFromDestination == 0 ? 0 : distanceFromDestination / Math.abs(distanceFromDestination);
      let speed = 0.01;
      if (speed > Math.abs(distanceFromDestination)) {
        speed = Math.abs(distanceFromDestination);
      }
      return sign * speed;
    }

    let lastVoxelIntersectedByEraser: THREE.Mesh<THREE.Geometry>|undefined = undefined;

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

          if (explodeOnGrab) {
            setVoxelPositionsFromExplodedness(0.8);
          }
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
        let voxelIntersectedByEraser: THREE.Mesh<THREE.Geometry>|undefined = undefined;
        const intersections = pointerRaycaster.intersectObjects(voxels);
        if (intersections.length > 0) voxelIntersectedByEraser = intersections[0].object as THREE.Mesh<THREE.Geometry>;

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
    let surface = 6 * this.voxels.length;
    // Subtract hidden adjacent faces
    for (const v of this.voxels) {
      surface -= this.voxels.filter(w => w !== v && w.position.distanceToSquared(v.position) < 1.1).length;
    }
    return surface;
  }

  getVolume() {
    return this.voxels.length;
  }
}
