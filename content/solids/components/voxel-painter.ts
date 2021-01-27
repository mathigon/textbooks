// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {Obj} from '@mathigon/core';
import {animate, canvasPointerPosition, CustomElementView, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/euclid';

import {create3D, Graphics3D, loadTHREE} from '../../shared/components/webgl';
import {BLUE, GREEN, ORANGE, PURPLE, RED, YELLOW} from '../../shared/constants';
import {clamp} from '@mathigon/fermat';

const TAU = Math.PI * 2;

function snapToNearestValidCubeCenterPosition(p: THREE.Vector3) {
  p.floor().addScalar(0.5);
}

@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {

  private newVoxel!: (voxelGeo: THREE.BoxGeometry,
    voxelMaterial: THREE.Material,
    outlineGeometry: THREE.Geometry,
    outlineMaterial: THREE.LineBasicMaterial,
    voxels: THREE.Mesh<THREE.Geometry>[],
    objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[],
    scene: Graphics3D,
  ) => any;

  private voxels: THREE.Mesh<THREE.Geometry>[] = [];
  private voxelGeo!: THREE.BoxGeometry;
  private voxelMaterial!: THREE.MeshLambertMaterial;
  private sidesMaterial?: THREE.MeshLambertMaterial;
  private outlineGeometry!: THREE.Geometry;
  private outlineMaterial!: THREE.LineBasicMaterial;
  private objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];
  private scene!: Graphics3D | undefined;

  private asyncPointerNdc!: THREE.Vector3;
  private oldPointerNdc!: THREE.Vector3;
  private pointerNdc!: THREE.Vector3;
  private pointerRaycaster!: THREE.Raycaster;
  private mouseControlMode: 'rotating' | 'placing' | 'erasing' | '' = '';

  private explodeOnGrab!: boolean;
  private rotateOnly!: boolean;

  private pointToExplodeFrom!: THREE.Vector3;
  private initialPositions!: THREE.Vector3[];

  private placingStart!: THREE.Vector3;
  private placingEnd!: THREE.Vector3;
  private placingHelpers: THREE.Mesh[] = [];
  private placementVisualizer!: THREE.Mesh;

  private v1!: THREE.Vector3;

  private playingFieldMin!: THREE.Vector3;
  private playingFieldMax!: THREE.Vector3;

  private lastVoxelIntersectedByEraser?: THREE.Mesh<THREE.Geometry>;

  async ready() {
    await loadTHREE();

    class Voxel extends THREE.Mesh<THREE.BoxGeometry> {
      constructor(
          voxelGeo: THREE.BoxGeometry,
          voxelMaterial: THREE.Material,
          outlineGeometry: THREE.Geometry,
          outlineMaterial: THREE.LineBasicMaterial,
          voxels: THREE.Mesh<THREE.Geometry>[],
          objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[],
          scene: Graphics3D,
      ) {
        super(voxelGeo.clone(), voxelMaterial);
        this.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));
        voxels.push(this);
        objectsOnWhichVoxelsCanBePlaced.push(this);
        scene.add(this);
      }
    }

    // TODO (Discussion)
    // This is kinda nasty but the alternative is to import Mesh from THREE
    // which results in the bundler pulling the associated code in, which in
    // turn results in the console spitting out a bunch of errors
    this.newVoxel = (
        voxelGeo: THREE.BoxGeometry,
        voxelMaterial: THREE.Material,
        outlineGeometry: THREE.Geometry,
        outlineMaterial: THREE.LineBasicMaterial,
        voxels: THREE.Mesh<THREE.Geometry>[],
        objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[],
        scene: Graphics3D,
    ) => {
      return new Voxel(
          voxelGeo,
          voxelMaterial,
          outlineGeometry,
          outlineMaterial,
          voxels,
          objectsOnWhichVoxelsCanBePlaced,
          scene
      );
    };

    const width = (+this.attr('width')) || 400;
    const height = (+this.attr('height')) || width;
    this.css({width: width + 'px', height: height + 'px'});

    const color = this.attr('color');

    this.v1 = new THREE.Vector3();
    this.explodeOnGrab = this.hasAttr('explodeOnGrab');
    this.rotateOnly = this.hasAttr('rotateOnly') || this.explodeOnGrab;

    const defaultGridDimension = 20;
    let gridDimension = (+this.attr('playingFieldSize')) || defaultGridDimension;
    if (gridDimension % 2 !== 0) {
      gridDimension = 2 * Math.ceil(gridDimension / 2);
    }

    this.playingFieldMin = new THREE.Vector3().setScalar(-gridDimension / 2.0 + 0.1);
    this.playingFieldMax = new THREE.Vector3().setScalar(gridDimension / 2.0 - 0.1);

    let customCamera: THREE.Camera|undefined = undefined;
    if (this.hasAttr('orthographic')) {
      const cameraW = 27.0 * gridDimension / defaultGridDimension;
      const cameraH = cameraW * height / width;
      customCamera = new THREE.OrthographicCamera(-cameraW, cameraW, cameraH, -cameraH, 1, 1000);
    }

    this.scene = await create3D(this, 45, 2 * width, 2 * height, customCamera);
    const camera = this.scene.camera;
    camera.rotation.order = 'YXZ';

    camera.rotation.y = TAU / 8;
    camera.rotation.x = -TAU / 8;
    if (this.hasAttr('startingYRotation')) camera.rotation.y = +this.attr('startingYRotation') / 360 * TAU;
    if (this.hasAttr('startingXRotation')) camera.rotation.x = +this.attr('startingXRotation') / 360 * TAU;

    camera.position.x = 45.0; // the "distance"
    camera.position.setLength(camera.position.length() * gridDimension / defaultGridDimension);
    const $canvas = this.scene.$canvas;

    const objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];
    const voxels = this.voxels;

    const ambientLight = new THREE.AmbientLight(0x606060);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    camera.updateMatrixWorld();
    camera.worldToLocal(directionalLight.position);
    camera.add(directionalLight);

    this.voxelGeo = new THREE.BoxGeometry(1, 1, 1);

    this.voxelMaterial = new THREE.MeshLambertMaterial({color});

    const faceColours = [RED, BLUE, GREEN, YELLOW, ORANGE, PURPLE];
    const faceColorDirections = [
      new THREE.Vector3(1.0, 0.0, 0.0),
      new THREE.Vector3(-1.0, 0.0, 0.0),
      new THREE.Vector3(0.0, 1.0, 0.0),
      new THREE.Vector3(0.0, -1.0, 0.0),
      new THREE.Vector3(0.0, 0.0, 1.0),
      new THREE.Vector3(0.0, 0.0, -1.0)];
    if (this.hasAttr('color-sides')) {
      this.sidesMaterial = new THREE.MeshLambertMaterial();
      for (let i = 0; i < 6; ++i) {
        const c = new THREE.Color(faceColours[i]);
        this.voxelGeo.faces[i * 2].color = this.voxelGeo.faces[i * 2 + 1].color = c;
      }
      this.sidesMaterial.vertexColors = true;
      this.sidesMaterial.color.setRGB(1, 1, 1);
    }

    this.outlineGeometry = new THREE.Geometry();
    // TODO: Setting linewidth > 1.0 does nothing for many GPUs, so we need an alternative
    this.outlineMaterial = new THREE.LineBasicMaterial();
    const cubeEdges = [0, 1, 2, 3, 5, 4, 7, 6, 0, 2, 1, 3, 5, 7, 4, 6, 0, 5, 1, 4, 2, 7, 3, 6];
    for (let i = 0; i < cubeEdges.length; i++) {
      this.outlineGeometry.vertices[i] = this.voxelGeo.vertices[cubeEdges[i]].clone();
    }

    const placementMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, opacity: 0.4, transparent: true});
    this.placementVisualizer = new THREE.Mesh(this.voxelGeo, placementMaterial);
    this.scene.add(this.placementVisualizer);
    this.placementVisualizer.add(new THREE.LineSegments(this.outlineGeometry, this.outlineMaterial));

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
        this.v1.copy(p);
        this.v1.sub(cylinderCenter);
        return this.v1.x * this.v1.x + this.v1.z * this.v1.z < cylinderRadius * cylinderRadius && Math.abs(this.v1.y) < cylinderHeight / 2;
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
                const voxel = new Voxel(
                    this.voxelGeo,
                    this.sidesMaterial ?? this.voxelMaterial,
                    this.outlineGeometry,
                    this.outlineMaterial,
                    this.voxels,
                    this.objectsOnWhichVoxelsCanBePlaced,
                    this.scene
                );
                voxel.position.copy(p);
              }
            }
          }
        }
      }

      const coords = shape.split(',');
      for (let i = 0, il = Math.floor(coords.length / 3); i < il; ++i) {
        this.addVoxelInternal(
            parseFloat(coords[i * 3]),
            parseFloat(coords[i * 3 + 1]),
            parseFloat(coords[i * 3 + 2])
        );
      }

      if (this.explodeOnGrab) {
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

    this.pointerRaycaster = new THREE.Raycaster();

    this.placingStart = new THREE.Vector3();
    this.placingEnd = new THREE.Vector3();
    const floorIntersectionPlaneGeometry = new THREE.PlaneBufferGeometry(gridDimension, gridDimension);
    floorIntersectionPlaneGeometry.rotateX(-Math.PI / 2);
    const floorIntersectionPlane = new THREE.Mesh(floorIntersectionPlaneGeometry, new THREE.MeshBasicMaterial({visible: false}));
    const grid = new THREE.GridHelper(gridDimension, gridDimension);
    this.scene.add(floorIntersectionPlane);
    floorIntersectionPlane.add(grid);
    if (this.hasAttr('hideGrid')) {
      grid.visible = false;
    }
    objectsOnWhichVoxelsCanBePlaced.push(floorIntersectionPlane);
    floorIntersectionPlane.position.y -= gridDimension / 2.0;

    for (let i = 0; i < 3; i++) {
      const placingHelper = new THREE.Mesh(new THREE.PlaneBufferGeometry(999, 999), new THREE.MeshBasicMaterial({side: THREE.DoubleSide,
        // transparent:true,
        // opacity:.5,
        visible: false
      }));
      this.placingHelpers.push(placingHelper);
      this.scene.add(placingHelper);
    }
    this.placingHelpers[0].geometry.rotateX(TAU / 4);
    this.placingHelpers[1].geometry.rotateY(TAU / 4);

    this.asyncPointerNdc = new THREE.Vector3();
    this.pointerNdc = new THREE.Vector3();
    this.oldPointerNdc = new THREE.Vector3();

    $canvas.on('pointermove', (event: PointerEvent)=> {
      event.preventDefault();
      const p = canvasPointerPosition(event, $canvas);
      this.respondToPointerMovement(p);
    });

    this.pointToExplodeFrom = new THREE.Vector3();
    this.initialPositions = Array(voxels.length);
    for (let i = 0, il = voxels.length; i < il; ++i) {
      this.pointToExplodeFrom.add(voxels[i].position);
      this.initialPositions[i] = voxels[i].position.clone();
    }
    this.pointToExplodeFrom.multiplyScalar(1.0 / voxels.length);

    if (!this.hasAttr('noInteraction')) {
      slide($canvas, {

        down: () => {
          this.mouseControlMode = 'rotating';

          const intersection = this.pointerRaycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced)[0];
          if (!this.rotateOnly && intersection !== undefined) {
            this.setFromVoxelIntersection(this.v1, intersection);
            if (this.pointInPlayingField(this.v1)) {
              this.mouseControlMode = 'placing';
              this.placingStart.copy(this.v1);
              this.placingEnd.copy(this.placingStart);

              // corner of cube that is away from camera
              this.getCameraDirectionSnappedToGrid(this.v1);
              this.v1.add(this.placingStart);
              for (let i = 0; i < 3; i++) {
                this.placingHelpers[i].position.copy(this.v1);
                this.placingHelpers[i].updateMatrixWorld();
              }
            }
          }
        },

        move: this.respondToPointerMovement,

        up: () => {
          if (this.mouseControlMode === 'placing') {
            this.mouseControlMode = '';

            let iComponent = 0;
            if (this.placingStart.x === this.placingEnd.x) iComponent = 1;
            if (this.placingStart.y === this.placingEnd.y) iComponent = 2;
            if (this.placingStart.z === this.placingEnd.z) iComponent = 0;
            const jComponent = (iComponent + 1) % 3;
            const kComponent = (jComponent + 1) % 3;
            const k = this.placingStart.getComponent(kComponent);

            const iStart = Math.min(this.placingStart.getComponent(iComponent), this.placingEnd.getComponent(iComponent));
            const iLimit = Math.max(this.placingStart.getComponent(iComponent), this.placingEnd.getComponent(iComponent));
            const jStart = Math.min(this.placingStart.getComponent(jComponent), this.placingEnd.getComponent(jComponent));
            const jLimit = Math.max(this.placingStart.getComponent(jComponent), this.placingEnd.getComponent(jComponent));

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
                  new Voxel(
                      this.voxelGeo,
                      this.sidesMaterial ?? this.voxelMaterial,
                      this.outlineGeometry,
                      this.outlineMaterial,
                      this.voxels,
                      this.objectsOnWhichVoxelsCanBePlaced,
                      this.scene!
                  ).position.copy(potentialNewPosition);
                }
              }
            }
          }

          if (this.mouseControlMode === 'rotating') {
            this.mouseControlMode = '';

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
                if (this.explodeOnGrab) {
                  this.setVoxelPositionsFromExplodedness(0.0);
                }

                this.updateApplet();
                cancel();
              } else {
                if (this.explodeOnGrab) {
                  this.setVoxelPositionsFromExplodedness(0.8);
                }

                this.updateApplet();
              }
            });
          }

          this.updateApplet();
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

    this.updateApplet();
  }

  private setFromVoxelIntersection(target: THREE.Vector3, intersection: THREE.Intersection) {
    target.copy(intersection!.face!.normal).multiplyScalar(0.1);
    target.add(intersection.point);
    snapToNearestValidCubeCenterPosition(target);
  }

  /**
   * best done with a point already on grid
   */
  private pointInPlayingField(p: THREE.Vector3) {
    return this.playingFieldMin.x < p.x && p.x < this.playingFieldMax.x &&
              this.playingFieldMin.y < p.y && p.y < this.playingFieldMax.y &&
              this.playingFieldMin.z < p.z && p.z < this.playingFieldMax.z;
  }

  private updateApplet() {
    if (this.scene != undefined) {
      this.oldPointerNdc.copy(this.pointerNdc);
      this.pointerNdc.copy(this.asyncPointerNdc);
      const camera = this.scene.camera;
      this.pointerRaycaster.setFromCamera(this.pointerNdc, camera);

      // camera
      {
        if (this.mouseControlMode === 'rotating') {
          camera.rotation.y -= (this.pointerNdc.x - this.oldPointerNdc.x);
          camera.rotation.x += (this.pointerNdc.y - this.oldPointerNdc.y);
          camera.rotation.x = clamp(camera.rotation.x, -TAU / 4, TAU / 4);

          if (this.explodeOnGrab) {
            this.setVoxelPositionsFromExplodedness(0.8);
          }
        }

        const currentDistFromCamera = camera.position.length();
        camera.updateMatrixWorld();
        this.v1.set(0, 0, -currentDistFromCamera);
        camera.localToWorld(this.v1);
        camera.position.sub(this.v1);
      }

      if (this.mouseControlMode === 'placing') {
        const snapSpaceCameraRotationY = (camera.rotation.y - TAU / 8.0) / (TAU / 4.0);
        const distanceFromDiagonalViewpoint = Math.abs(snapSpaceCameraRotationY - Math.round(snapSpaceCameraRotationY));
        const distanceFromTopOrBottomViewpoint = TAU / 4.0 - Math.abs(camera.rotation.x);
        const placingHelpersArrayToUse = distanceFromDiagonalViewpoint < 0.1 && distanceFromTopOrBottomViewpoint > 0.1 ? this.placingHelpers : [this.placingHelpers[0]];

        const intersection = this.pointerRaycaster.intersectObjects(placingHelpersArrayToUse)[0];
        if (intersection !== undefined) {
          this.getCameraDirectionSnappedToGrid(this.placingEnd);
          this.placingEnd.negate().setLength(0.1);
          this.placingEnd.add(intersection.point);
          this.placingEnd.clamp(this.playingFieldMin, this.playingFieldMax);
          snapToNearestValidCubeCenterPosition(this.placingEnd);

          this.placementVisualizer.position.addVectors(this.placingEnd, this.placingStart).multiplyScalar(0.5);
          this.placementVisualizer.scale.x = 1 + 2 * Math.abs(this.placementVisualizer.position.x - this.placingEnd.x);
          this.placementVisualizer.scale.y = 1 + 2 * Math.abs(this.placementVisualizer.position.y - this.placingEnd.y);
          this.placementVisualizer.scale.z = 1 + 2 * Math.abs(this.placementVisualizer.position.z - this.placingEnd.z);
        }
      } else {
        this.placementVisualizer.scale.setScalar(0.0000001);
        if (!this.rotateOnly && this.mouseControlMode === '') {
          const intersections = this.pointerRaycaster.intersectObjects(this.objectsOnWhichVoxelsCanBePlaced);
          if (intersections.length !== 0) {
            this.setFromVoxelIntersection(this.placementVisualizer.position, intersections[0]);
            if (this.pointInPlayingField(this.placementVisualizer.position)) {
              this.placementVisualizer.scale.setScalar(1);
            }
          }
        }
      }

      if (this.mouseControlMode === 'erasing') {
        let voxelIntersectedByEraser: THREE.Mesh<THREE.Geometry>|undefined = undefined;
        const intersections = this.pointerRaycaster.intersectObjects(this.voxels);
        if (intersections.length > 0) voxelIntersectedByEraser = intersections[0].object as THREE.Mesh<THREE.Geometry>;

        if (this.lastVoxelIntersectedByEraser && this.voxels.indexOf(this.lastVoxelIntersectedByEraser) !== -1 && this.lastVoxelIntersectedByEraser !== voxelIntersectedByEraser) {
          this.scene.remove(this.lastVoxelIntersectedByEraser);
          this.objectsOnWhichVoxelsCanBePlaced.splice(this.objectsOnWhichVoxelsCanBePlaced.indexOf(this.lastVoxelIntersectedByEraser), 1);
          this.voxels.splice(this.voxels.indexOf(this.lastVoxelIntersectedByEraser), 1);
        }
        this.lastVoxelIntersectedByEraser = voxelIntersectedByEraser;
      }

      this.scene.draw();
    }
  }

  private respondToPointerMovement(p: Point) {
    if (this.scene != undefined) {
      this.scene.camera.updateMatrixWorld();
      const $canvas = this.scene.$canvas;
      this.asyncPointerNdc.set((p.x / $canvas.canvasWidth) * 2 - 1,
          -(p.y / $canvas.canvasHeight) * 2 + 1, 0);
      this.updateApplet();
    }
  }

  private getCameraDirectionSnappedToGrid(target: THREE.Vector3) {
    if (this.scene != undefined) {
      target.set(0, 0, -1).applyQuaternion(this.scene.camera.quaternion);
      target.x = target.x > 0 ? 0.5 : -0.5;
      target.y = target.y > 0 ? 0.5 : -0.5;
      target.z = target.z > 0 ? 0.5 : -0.5;
    }
  }

  private setVoxelPositionsFromExplodedness(explodedness: number) {
    for (let i = 0, il = this.voxels.length; i < il; ++i) {
      this.voxels[i].position.copy(this.initialPositions[i]).sub(this.pointToExplodeFrom).multiplyScalar(1.0 + explodedness).add(this.pointToExplodeFrom);
    }
  }

  private addVoxelBase(
      x: number,
      y: number,
      z: number,
      voxelMaterial: THREE.Material
  ) {
    const voxel = this.newVoxel(
        this.voxelGeo,
        voxelMaterial,
        this.outlineGeometry,
        this.outlineMaterial,
        this.voxels,
        this.objectsOnWhichVoxelsCanBePlaced,
        this.scene!
    );
    /*
      We swap Y and Z so that coords specified to the component are displayed
      as if X and Y are 'towards' the camera in the positive direction, and
      +Z is 'up':

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

  private addVoxelInternal(x: number, y: number, z: number) {
    this.addVoxelBase(x, y, z, this.sidesMaterial ?? this.voxelMaterial);
  }

  /**
   * IMPORTANT: Do not use until ready() is done!
   */
  private addVoxel(x: number, y: number, z: number, color?: string | number | THREE.Color) {
    const voxelMat =
      color != undefined ?
        new THREE.MeshLambertMaterial({color}) :
        (this.sidesMaterial ?? this.voxelMaterial);
    this.addVoxelBase(x, y, z, voxelMat);
  }

  /**
   * IMPORTANT: Do not use until ready() is done!
   */
  addVoxels(positions: Array<[number, number, number]>, color?: string | number | THREE.Color) {
    for (const position of positions) {
      this.addVoxel(...position, color);
    }
    this.updateApplet();
  }

  clearVoxels() {
    if (this.scene != undefined) {
      for (const voxel of this.voxels) {
        this.scene.remove(voxel);
      }
      this.voxels = [];
      this.updateApplet();
    }
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
