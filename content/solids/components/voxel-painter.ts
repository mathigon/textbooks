// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================

/// <reference types="three"/>

import {$, canvasPointerPosition, CanvasView, CustomElementView, loadScript, register} from '@mathigon/boost';

import { clamp, Vector } from '@mathigon/fermat';

@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {

  async ready() {

    await loadScript('/resources/shared/vendor/three-91.min.js');
    await loadScript('/resources/shared/threejsVariables.js');

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0xffffff);
    scene.background = new THREE.Color(0xf0f0f0);
    renderer.setSize(400, 400);

    const updateFunctions: (() => void)[] = [];
    const clickables: THREE.Object3D[] = [];

    const $canvas = $(renderer.domElement) as CanvasView;
    this.append($canvas);

    {
      const ambientLight = new THREE.AmbientLight(0x606060);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 0.75, 0.5).normalize();
      scene.add(directionalLight);
    }

    /**
     * TODO
      delete... object you pick up? Could delete everything at once
      non-interactive mode where students can rotate but not draw
      Colors
      Extender? Buttons are fine but fuck modes
      Just put your finger down to make a voxel and drag and it pulls out a plane in one of the three facing toward ya

      Different colors for cubes, maybe even different colors for different sizes
      Import and export array of filled cubes

      Try orthographic
     */

    let rendererSize = renderer.getSize()
    const camera = new THREE.PerspectiveCamera(45, rendererSize.width / rendererSize.height, 1., 10000.);
    camera.position.set(10.,0.,0.);
    camera.position.setLength(10.)
    camera.rotation.order = "YXZ"
    camera.rotation.y = TAU/8.
    camera.rotation.x =-TAU / 8.
    scene.add(camera)

    const voxelGeo = new THREE.BoxBufferGeometry(1, 1, 1);
    const voxelMaterial = new THREE.MeshLambertMaterial({color: 0xfeb74c});    
    const placementVisualizer = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshBasicMaterial(
      { color: 0xff0000, opacity: 0.5, transparent: true }));
    scene.add(placementVisualizer);

    let voxels = []
    function Voxel() {
      const voxel = new THREE.Mesh(voxelGeo, voxelMaterial);
      voxels.push(voxel)
      scene.add(voxel);
      clickables.push(voxel);
      return voxel
    }

    {
      const isInShapeFunctions = {}

      const sphereRadius = 5
      const sphereCenter = new THREE.Vector3(0, sphereRadius, 0)
      isInShapeFunctions.sphere = (p) => p.distanceTo(sphereCenter) < sphereRadius

      const cuboidDimensions = new THREE.Vector3(4, 3, 5)
      const cuboidCenter = new THREE.Vector3(0., cuboidDimensions.y / 2. + 1., 0.)
      isInShapeFunctions.cuboid = (p) => {
        return Math.abs(p.x - cuboidCenter.x) < cuboidDimensions.x / 2. &&
          Math.abs(p.y - cuboidCenter.y) < cuboidDimensions.y / 2. &&
          Math.abs(p.z - cuboidCenter.z) < cuboidDimensions.z / 2.
      }

      const cylinderRadius = 6
      const cylinderHeight = 4
      const cylinderCenter = new THREE.Vector3(0.,cylinderHeight/2. + 1.,0.)
      isInShapeFunctions.cylinder = (p) =>
      {
        v1.copy(p)
        v1.sub(cylinderCenter)
        return v1.x * v1.x + v1.z * v1.z < cylinderRadius*cylinderRadius && Math.abs(v1.y) < cylinderHeight / 2.
      }

      const isInShape = isInShapeFunctions[this.attr('shape')]
      if(isInShape !== undefined)
      {
        const p = new THREE.Vector3()
        for (let i = -10; i < 10; i++)
          for (let j = -10; j < 10; j++)
            for (let k = -10; k < 10; k++) {
              p.set(i, j, k).addScalar(.5)
              if (isInShape(p)) {
                let voxel = Voxel()
                voxel.position.copy(p)
              }
            }
      }
    }

    var raycaster = new THREE.Raycaster();
    var asyncRay = new THREE.Ray()
    var currentRay = new THREE.Ray()
    var oldRay = new THREE.Ray()

    let grabbedBackground:boolean = false

    let placing:boolean = false
    const placingStart = new THREE.Vector3()
    const placingEnd = new THREE.Vector3()
    {
      const gridDimension = 20
      scene.add(new THREE.GridHelper(gridDimension,gridDimension));
      
      const floorIntersectionPlaneGeometry = new THREE.PlaneBufferGeometry(gridDimension, gridDimension);
      floorIntersectionPlaneGeometry.rotateX(-Math.PI / 2);
      const floorIntersectionPlane = new THREE.Mesh(floorIntersectionPlaneGeometry, new THREE.MeshBasicMaterial({ visible: false }));
      scene.add(floorIntersectionPlane);
      clickables.push(floorIntersectionPlane);

      var placingHelpers = Array()
      for(let i = 0; i < 3; i++)
      {
        const placingHelper = new THREE.Mesh(new THREE.PlaneBufferGeometry(gridDimension, gridDimension), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible:false }))
        placingHelpers.push(placingHelper)
        scene.add(placingHelper)
      }
      placingHelpers[0].geometry.rotateX(-TAU / 4.) //shouldn't need negative, check both directions angles
      placingHelpers[1].geometry.rotateY( TAU / 4.)
      placingHelpers[2].geometry.rotateZ( TAU / 4.)
    }

    function snapToNearestValidCubeCenterPosition(p) { p.floor().addScalar(.5) }

    function setPositionFromIntersection(p,intersection)
    {
      p.copy(intersection!.face!.normal).multiplyScalar(.1)
      p.add(intersection.point)
      snapToNearestValidCubeCenterPosition(p)
    }

    $canvas.on('pointermove', (event: PointerEvent) => {
      event.preventDefault();
      
      const p = canvasPointerPosition(event, $canvas);
      camera.updateMatrixWorld()
      v1.set((p.x / $canvas.width ) * 2. - 1.,
            -(p.y / $canvas.height) * 2. + 1.);
      raycaster.setFromCamera(v1, camera);

      asyncRay.copy(raycaster.ray)
    });

    $canvas.on('pointerdown', (event: PointerEvent) => {
      event.preventDefault();
      
      raycaster.ray.copy(currentRay)
      const intersection = raycaster.intersectObjects(clickables)[0]
      if (intersection !== undefined)
      {
        grabbedBackground = false
        placing = true
        setPositionFromIntersection(placingStart, intersection)
        for (let i = 0; i < 3; i++)
          placingHelpers[i].position.copy(placingStart)
      }
      else
      {
        placing = false
        grabbedBackground = true
      }
    });

    $canvas.on('pointerup', (event: PointerEvent) => {
      event.preventDefault();

      if(placing)
      {
        raycaster.ray.copy(currentRay)
        const intersection = raycaster.intersectObjects(placingHelpers)[0];
        setPositionFromIntersection(placingEnd, intersection)

        let iComponent = 0
        if (placingStart.x === placingEnd.x) iComponent = 1
        if (placingStart.y === placingEnd.y) iComponent = 2
        if (placingStart.z === placingEnd.z) iComponent = 0
        let jComponent = (iComponent + 1) % 3
        let kComponent = (jComponent + 1) % 3

        let iStart = Math.min( placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent) )
        let iLimit = Math.max( placingStart.getComponent(iComponent), placingEnd.getComponent(iComponent) )
        let jStart = Math.min( placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent) )
        let jLimit = Math.max( placingStart.getComponent(jComponent), placingEnd.getComponent(jComponent) )

        let potentialNewPosition = new THREE.Vector3()
        for ( let i = iStart; i <= iLimit; i+= 1.)
          for ( let j = jStart; j <= jLimit; j += 1.)
          {
            let k = placingStart.getComponent(kComponent)
            potentialNewPosition.setComponent(kComponent, k)
            potentialNewPosition.setComponent(iComponent, i)
            potentialNewPosition.setComponent(jComponent, j)
            snapToNearestValidCubeCenterPosition(potentialNewPosition)
            let alreadyOccupied = false
            voxels.forEach((voxel)=>{
              if(voxel.position.equals(potentialNewPosition)) alreadyOccupied = true
            })
            if(!alreadyOccupied)
              Voxel().position.copy(potentialNewPosition)
          }
      }
      
      grabbedBackground = false
      placing = false
      placementVisualizer.scale.setScalar(1.)
    });

    function getCameraSpaceDirectionInAxisPlane(worldSpaceDirection, axisPlane, target)
    {
      target.copy(worldSpaceDirection)
      camera.worldToLocal(target)
      target[axisPlane] = 0.
      target.normalize()
    }

    updateFunctions.push(()=>
    {
      if(grabbedBackground)
      {
        getCameraSpaceDirectionInAxisPlane(currentRay.direction, "y", v1)
        getCameraSpaceDirectionInAxisPlane(    oldRay.direction, "y", v2)
        let horizontalDelta = v1.angleTo(v2) * (v1.x < v2.x ? 1. : -1.)

        getCameraSpaceDirectionInAxisPlane(currentRay.direction, "x", v1)
        getCameraSpaceDirectionInAxisPlane(    oldRay.direction, "x", v2)
        let verticalDelta =   v1.angleTo(v2) * (v1.y > v2.y ? 1. : -1.)

        // log(horizontalDelta,verticalDelta)
        
        // if(Math.abs(verticalDelta) > Math.abs(horizontalDelta) )
          camera.rotation.x += verticalDelta * 35
        // else
          camera.rotation.y += horizontalDelta * 35
      }

      camera.rotation.x = clamp(camera.rotation.x, -TAU / 4., TAU / 4.)
      let currentDistFromCamera = camera.position.length()
      camera.updateMatrixWorld()
      v1.set(0., 0., -currentDistFromCamera)
      camera.localToWorld(v1)
      camera.position.sub(v1)

      if(!grabbedBackground)
      {
        if (!placing && !grabbedBackground) {
          //there's where you started out and where you are now

          const intersections = raycaster.intersectObjects(clickables);
          if (intersections.length > 0) {
            setPositionFromIntersection(placementVisualizer.position, intersections[0])
            placementVisualizer.scale.setScalar(1.)
          }
        }
        else {
          const intersection = raycaster.intersectObjects(placingHelpers)[0];
          setPositionFromIntersection(placingEnd, intersection)

          placementVisualizer.scale.copy(placingEnd).sub(placingStart).addScalar(1.)
          placementVisualizer.position.addVectors(placingEnd, placingStart).multiplyScalar(.5)
        }
      }
    })

    function loop() {
      let clockDelta = clock.getDelta()
      frameDelta = clockDelta < .1 ? clockDelta : .1 //clamped because debugger pauses create weirdness

      oldRay.copy(currentRay)
      currentRay.copy(asyncRay)

      for (var i = 0; i < updateFunctions.length; i++)
        updateFunctions[i]();

      frameCount++;

      requestAnimationFrame(loop);
      renderer.render(scene, camera);
    }
    loop()
  }
}