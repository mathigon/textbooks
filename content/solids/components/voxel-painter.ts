// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================

/// <reference types="three"/>

import {$, canvasPointerPosition, CanvasView, CustomElementView, ElementView, loadScript, register} from '@mathigon/boost';

import {clamp} from '@mathigon/fermat';

@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {

  async ready() {

    /**
     * TODO
      convert to using built in mathigon mouse stuff
        especially for save button
        Talk about how to deal with unclicking mouse when not on canvas
      Try orthographic
      More color variation with sides?

      Pull from master
      Create pull request
     */

    await loadScript('/resources/shared/vendor/three-91.min.js');

    const TAU = Math.PI * 2;

    const clock = new THREE.Clock(true);
    let frameCount = 0;
    let frameDelta = 1. / 60.;

    const v1 = new THREE.Vector3();
    const v2 = new THREE.Vector3();

    const log = console.log;
    const scene = new THREE.Scene();

    let rotateOnly = this.attr('rotateOnly');
    if (rotateOnly === undefined) {
      rotateOnly = false;
    }

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0xffffff);
    scene.background = new THREE.Color(0xf0f0f0);
    renderer.setSize(400, 400);

    const updateFunctions: (() => void)[] = [];
    const objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];

    const $canvas = $(renderer.domElement) as CanvasView;
    this.append($canvas);

    // Save button, TODO not appearingS
    if (this.attr('showSaveButton') === 'true') {
      const $button = $(document.createElement('BUTTON')) as ElementView;
      log($button);
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
      scene.add(directionalLight);
    }

    const rendererSize = renderer.getSize();
    const camera = new THREE.PerspectiveCamera(45, rendererSize.width / rendererSize.height, 1., 10000.);
    // const cameraW = 30.;
    // const cameraH = cameraW * rendererSize.height /rendererSize.width;
    // const camera = new THREE.OrthographicCamera(-cameraW / 2., cameraW / 2., cameraH / 2., -cameraH / 2., 1., 10000.);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = TAU/8.;
    camera.rotation.x =-TAU / 8.;
    camera.position.x = 40.;
    scene.add(camera);

    const voxelGeo = new THREE.BoxGeometry(1, 1, 1);
    const voxelMaterial = new THREE.MeshLambertMaterial({color: 0xfeb74c});
    if ( this.attr('colorSides') === 'true') {
      voxelGeo.faces[0].color = new THREE.Color(1., .5, .5);
      voxelGeo.faces[2].color = new THREE.Color(0., 1., 0.);
      voxelGeo.faces[4].color = new THREE.Color(1., 1., 0.);
      voxelGeo.faces[6].color = new THREE.Color(1., 0., 1.);
      voxelGeo.faces[8].color = new THREE.Color(0., 1., 1.);
      voxelGeo.faces[10].color = new THREE.Color(1., 1., 1.);
      for (let i = 0; i < 6; ++i) {
        voxelGeo.faces[i * 2 + 1].color = voxelGeo.faces[i * 2 + 0].color;
      }

      voxelMaterial.vertexColors = THREE.FaceColors;
      voxelMaterial.color.setRGB(1., 1., 1.);
    }

    const outlineGeometry = new THREE.Geometry();
    const outlineMaterial = new THREE.LineBasicMaterial();
    const cubeEdges = [0, 1, 2, 3, 5, 4, 7, 6, 0, 2, 1, 3, 5, 7, 4, 6, 0, 5, 1, 4, 2, 7, 3, 6];
    for (let i = 0; i < cubeEdges.length; i++) {
      outlineGeometry.vertices[i] = voxelGeo.vertices[cubeEdges[i]].clone();
    }

    const placementVisualizer = new THREE.Mesh(voxelGeo, new THREE.MeshBasicMaterial(
        {color: 0xff0000, opacity: 0.4, transparent: true}));
    scene.add(placementVisualizer);
    placementVisualizer.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));

    const voxels = [];
    class Voxel extends THREE.Mesh {
      constructor() {
        super(voxelGeo, voxelMaterial);
        this.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));
        voxels.push(this);
        objectsOnWhichVoxelsCanBePlaced.push(this);
        scene.add(this);
      }
    }
    // function Voxel()
    // {
    //   let voxel = new THREE.Mesh(voxelGeo, voxelMaterial)
    //   voxel.add(new THREE.LineSegments(outlineGeometry, outlineMaterial));
    //   voxels.push(voxel);
    //   objectsOnWhichVoxelsCanBePlaced.push(voxel);
    //   scene.add(voxel);
    //   return voxel
    // }

    const eraser = new THREE.Mesh(new THREE.PlaneBufferGeometry(.2, .2), new THREE.MeshBasicMaterial({transparent: true}));
    {
      camera.add(eraser);

      // eraser picture is from https://www.kissclipart.com/ which is public domain
      const loader = new THREE.TextureLoader();
      loader.load('/resources/solids/eraser.png',
          function(texture) {
            eraser.material.map = texture;
            eraser.material.needsUpdate = true;
          },
          undefined,
          function(err) {
            console.error(err);
          }
      );

      eraser.defaultPosition = new THREE.Vector3();
      eraser.defaultPosition.z = -camera.near * 2.;
      // TODO check where the corner is and put it near that
      eraser.defaultPosition.x = -.7;
      eraser.defaultPosition.y = -.7;

      eraser.position.copy(eraser.defaultPosition);
    }

    {
      const isInShapeFunctions = {};

      const sphereRadius = 5;
      const sphereCenter = new THREE.Vector3(0, sphereRadius, 0);
      isInShapeFunctions.sphere = (p) => p.distanceTo(sphereCenter) < sphereRadius;

      const cuboidDimensions = new THREE.Vector3(4, 3, 5);
      const cuboidCenter = new THREE.Vector3(0., cuboidDimensions.y / 2. + 1., 0.);
      isInShapeFunctions.cuboid = (p) => {
        return Math.abs(p.x - cuboidCenter.x) < cuboidDimensions.x / 2. &&
          Math.abs(p.y - cuboidCenter.y) < cuboidDimensions.y / 2. &&
          Math.abs(p.z - cuboidCenter.z) < cuboidDimensions.z / 2.;
      };

      const cylinderRadius = 6;
      const cylinderHeight = 4;
      const cylinderCenter = new THREE.Vector3(0., cylinderHeight/2. + 1., 0.);
      isInShapeFunctions.cylinder = (p) => {
        v1.copy(p);
        v1.sub(cylinderCenter);
        return v1.x * v1.x + v1.z * v1.z < cylinderRadius*cylinderRadius && Math.abs(v1.y) < cylinderHeight / 2.;
      };

      const shape = this.attr('shape');

      if (isInShapeFunctions[shape] !== undefined) {
        const isInShapeFunction = isInShapeFunctions[shape];
        const p = new THREE.Vector3();
        for (let i = -10; i < 10; i++) {
          for (let j = -10; j < 10; j++) {
            for (let k = -10; k < 10; k++) {
              p.set(i, j, k).addScalar(.5);
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
            parseFloat(coords[i * 3 + 0]),
            parseFloat(coords[i * 3 + 1]),
            parseFloat(coords[i * 3 + 2]));
        snapToNearestValidCubeCenterPosition(voxel.position);
      }
    }

    const raycaster = new THREE.Raycaster();
    const oldRay = new THREE.Ray();

    // can be rotating, placing, erasing, null
    let mouseControlMode = '';

    const placingStart = new THREE.Vector3();
    const placingEnd = new THREE.Vector3();
    const gridDimension = 20;
    const floorIntersectionPlaneGeometry = new THREE.PlaneBufferGeometry(gridDimension, gridDimension);
    const floorIntersectionPlane = new THREE.Mesh(floorIntersectionPlaneGeometry, new THREE.MeshBasicMaterial({visible: false}));
    const placingHelpers = [];
    {
      scene.add(new THREE.GridHelper(gridDimension, gridDimension));

      floorIntersectionPlaneGeometry.rotateX(-Math.PI / 2);
      scene.add(floorIntersectionPlane);
      objectsOnWhichVoxelsCanBePlaced.push(floorIntersectionPlane);

      for (let i = 0; i < 3; i++) {
        const placingHelper = new THREE.Mesh(new THREE.PlaneBufferGeometry(999., 999.), new THREE.MeshBasicMaterial({side: THREE.DoubleSide,
          // transparent:true,
          // opacity:.5,
          visible: false
        }));
        placingHelpers.push(placingHelper);
        scene.add(placingHelper);
      }
      placingHelpers[0].geometry.rotateX(-TAU / 4.); // shouldn't need negative, check both directions angles
      placingHelpers[1].geometry.rotateY( TAU / 4.);
      placingHelpers[2].geometry.rotateZ( TAU / 4.);
    }

    function snapToNearestValidCubeCenterPosition(p) {
      p.floor().addScalar(.5);
    }

    function setPositionFromVoxelIntersection(p, intersection) {
      p.copy(intersection!.face!.normal).multiplyScalar(.1);
      p.add(intersection.point);
      snapToNearestValidCubeCenterPosition(p);
    }

    const asyncRaycaster = new THREE.Raycaster();
    $canvas.on('pointermove', (event: PointerEvent) => {
      event.preventDefault();

      const p = canvasPointerPosition(event, $canvas);
      camera.updateMatrixWorld();
      v1.set((p.x / $canvas.width ) * 2. - 1.,
          -(p.y / $canvas.height) * 2. + 1.);
      asyncRaycaster.setFromCamera(v1, camera);
    });

    $canvas.on('pointerdown', (event: PointerEvent) => {
      event.preventDefault();

      const eraserIntersected = raycaster.intersectObject(eraser)[0] !== undefined;
      if (eraserIntersected) {
        mouseControlMode = 'erasing';
      } else {
        const intersection = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced)[0];
        if (intersection !== undefined && !rotateOnly) {
          mouseControlMode = 'placing';
          setPositionFromVoxelIntersection(placingStart, intersection);
          placingEnd.copy(placingStart);

          // corner of cube that is away from camera
          camera.localToWorld(v1.set(-1., 0., 0.));
          v1.sub(camera.position).setLength(.5).add(placingStart);
          snapToNearestValidCubeCenterPosition(v1);
          for (let i = 0; i < 3; i++) {
            placingHelpers[i].position.copy(v1);
            placingHelpers[i].updateMatrixWorld();
          }
        } else mouseControlMode = 'rotating';
      }
    });

    $canvas.on('pointerup', (event: PointerEvent) => {
      event.preventDefault();

      if (mouseControlMode === 'placing') {
        let iComponent = 0;
        if (placingStart.x === placingEnd.x) iComponent = 1;
        if (placingStart.y === placingEnd.y) iComponent = 2;
        if (placingStart.z === placingEnd.z) iComponent = 0;
        const jComponent = (iComponent + 1) % 3;
        const kComponent = (jComponent + 1) % 3;

        const iStart = Math.min( placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent) );
        const iLimit = Math.max( placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent) );
        const jStart = Math.min( placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent) );
        const jLimit = Math.max( placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent) );

        // log(placingStart,placingEnd, iStart,iLimit,jStart,jLimit)
        const potentialNewPosition = new THREE.Vector3();
        for ( let i = iStart; i <= iLimit; i+= 1.) {
          for ( let j = jStart; j <= jLimit; j += 1.) {
            const k = placingStart.getComponent(kComponent);
            potentialNewPosition.setComponent(kComponent, k);
            potentialNewPosition.setComponent(iComponent, i);
            potentialNewPosition.setComponent(jComponent, j);
            snapToNearestValidCubeCenterPosition(potentialNewPosition);
            let alreadyOccupied = false;
            voxels.forEach((voxel)=>{
              if (voxel.position.equals(potentialNewPosition)) alreadyOccupied = true;
            });
            if (!alreadyOccupied) {
              new Voxel().position.copy(potentialNewPosition);
            }
          }
        }
      }

      mouseControlMode = '';
      placementVisualizer.scale.setScalar(1.);
    });

    function getCameraSpaceDirectionInAxisPlane(worldSpaceDirection, axisPlane, target) {
      target.copy(worldSpaceDirection);
      camera.worldToLocal(target);
      target[axisPlane] = 0.;
      target.normalize();
    }

    function getStepTowardDestination(currentValue, destination) {
      const distanceFromDestination = destination - currentValue;
      const sign = distanceFromDestination == 0. ? 0. : distanceFromDestination / Math.abs(distanceFromDestination);
      let speed = .01;
      if (speed > Math.abs(distanceFromDestination)) {
        speed = Math.abs(distanceFromDestination);
      }
      return sign * speed;
    }

    updateFunctions.push(()=> {
      // camera
      {
        if (mouseControlMode === 'rotating') {
          getCameraSpaceDirectionInAxisPlane(raycaster.ray.direction, 'y', v1);
          getCameraSpaceDirectionInAxisPlane(oldRay.direction, 'y', v2);
          const horizontalDelta = v1.angleTo(v2) * (v1.x < v2.x ? 1. : -1.);

          getCameraSpaceDirectionInAxisPlane(raycaster.ray.direction, 'x', v1);
          getCameraSpaceDirectionInAxisPlane(oldRay.direction, 'x', v2);
          const verticalDelta = v1.angleTo(v2) * (v1.y > v2.y ? 1. : -1.);

          camera.rotation.y += horizontalDelta * 40.;
          camera.rotation.x += verticalDelta * 35;
          camera.rotation.x = clamp(camera.rotation.x, -TAU / 4., TAU / 4.);
        } else {
          const desiredXAngle = -TAU / 14.;
          camera.rotation.x = camera.rotation.x + getStepTowardDestination(camera.rotation.x, desiredXAngle);

          // snapspace is where the angles we want are integers
          const snapSpaceAngleY = camera.rotation.y / (TAU / 8.);
          const newSnapSpaceAngleY = snapSpaceAngleY + getStepTowardDestination(snapSpaceAngleY, Math.round(snapSpaceAngleY));
          camera.rotation.y = newSnapSpaceAngleY * (TAU / 8.);
        }

        const currentDistFromCamera = camera.position.length();
        camera.updateMatrixWorld();
        v1.set(0., 0., -currentDistFromCamera);
        camera.localToWorld(v1);
        camera.position.sub(v1);
      }

      if (mouseControlMode === 'placing') {
        const intersection = raycaster.intersectObjects(placingHelpers)[0];
        snapToNearestValidCubeCenterPosition(placingEnd);
        if (intersection !== undefined ) {
          placingEnd.copy(intersection.point);
          snapToNearestValidCubeCenterPosition(placingEnd);

          placementVisualizer.position.addVectors(placingEnd, placingStart).multiplyScalar(.5);
          placementVisualizer.scale.x = 1. + 2. * Math.abs(placementVisualizer.position.x - placingEnd.x);
          placementVisualizer.scale.y = 1. + 2. * Math.abs(placementVisualizer.position.y - placingEnd.y);
          placementVisualizer.scale.z = 1. + 2. * Math.abs(placementVisualizer.position.z - placingEnd.z);
        }
      } else {
        if (mouseControlMode === 'rotating' || mouseControlMode === 'erasing' || rotateOnly) {
          placementVisualizer.scale.setScalar(.0000001);
        } else {
          const intersections = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced);
          if (intersections.length > 0) {
            setPositionFromVoxelIntersection(placementVisualizer.position, intersections[0]);
            placementVisualizer.scale.setScalar(1.);
          } else {
            placementVisualizer.scale.setScalar(.0000001);
          }
        }
      }

      if (mouseControlMode === 'erasing') {
        raycaster.ray.at(eraser.position.length(), eraser.position);
        camera.updateMatrixWorld();
        camera.worldToLocal(eraser.position);

        const intersections = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced);
        if (intersections.length > 0 ) {
          for (let i = 0, il = intersections.length; i < il; ++i) {
            if (intersections[i].object !== floorIntersectionPlane) {
              const voxel = intersections[i].object;
              scene.remove(voxel);
              objectsOnWhichVoxelsCanBePlaced.splice(objectsOnWhichVoxelsCanBePlaced.indexOf(voxel), 1);
              voxels.splice(voxels.indexOf(voxel), 1);
            }
          }
        }
      } else {
        eraser.position.lerp(eraser.defaultPosition, .1);
      }
    });

    function loop() {
      const clockDelta = clock.getDelta();
      frameDelta = clockDelta < .1 ? clockDelta : .1; // clamped because debugger pauses create weirdness

      oldRay.copy(raycaster.ray);
      raycaster.ray.copy(asyncRaycaster.ray);

      for (let i = 0; i < updateFunctions.length; i++) {
        updateFunctions[i]();
      }

      ++frameCount;

      requestAnimationFrame(loop);
      renderer.render(scene, camera);
    }
    loop();
  }
}
