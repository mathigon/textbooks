// =============================================================================
// Voxel Painter Component
// (c) Mathigon
// =============================================================================

/// <reference types="three"/>

import {$, canvasPointerPosition, CanvasView, CustomElementView, loadScript, register, ElementView} from '@mathigon/boost';

import { clamp, Vector } from '@mathigon/fermat';

@register('x-voxel-painter')
export class VoxelPainter extends CustomElementView {

  async ready() {

    /**
     * TODO
      convert to using built in mathigon mouse stuff
        especially for save button
        Talk about how to deal with unclicking mouse when not on canvas
      eraser texture
      Want to click once and have just one thing appear
      Try orthographic
      More color variation with sides?

      Pull from master
      Create pull request
     */

    await loadScript('/resources/shared/vendor/three-91.min.js');
    
    const TAU = Math.PI * 2;
    const HS3 = Math.sqrt(3) / 2;
    const zUnit = new THREE.Vector3(0, 0, 1);
    const yUnit = new THREE.Vector3(0, 1, 0);
    const xUnit = new THREE.Vector3(1, 0, 0);

    const zeroVector = new THREE.Vector3(0., 0., 0.);
    const zeroMatrix = new THREE.Matrix4().set(0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);

    const clock = new THREE.Clock(true);
    var frameCount = 0
    var frameDelta = 1. / 60.

    const v1 = new THREE.Vector3();
    const v2 = new THREE.Vector3();
    const v3 = new THREE.Vector3();
    const m1 = new THREE.Matrix4();
    const q1 = new THREE.Quaternion();
    const pl = new THREE.Plane();

    const log = console.log;
    const scene = new THREE.Scene();

    let rotateOnly = this.attr('rotateOnly')
    if (rotateOnly === undefined)
      rotateOnly = false

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0xffffff);
    scene.background = new THREE.Color(0xf0f0f0);
    renderer.setSize(400, 400);

    const updateFunctions: (() => void)[] = [];
    const objectsOnWhichVoxelsCanBePlaced: THREE.Object3D[] = [];

    const $canvas = $(renderer.domElement) as CanvasView;
    this.append($canvas);

    //Save button, TODO not appearingS
    if (this.attr('showSaveButton') === "true")
    {
      let $button = $(document.createElement("BUTTON")) as ElementView
      log($button)
      this.append($button)

      $button.on('click', () => {
        let outputString = '"'
        for (let i = 0; i < voxels.length; i++)
          for (let j = 0; j < 3; j++)
            outputString += voxels[i].position.getComponent(j) + ","
        outputString += '"'
        prompt('In order to load the current voxels in, copy the below, then paste it next to shape= ', outputString)
      })
    }

    {
      const ambientLight = new THREE.AmbientLight(0x606060);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 0.75, 0.5).normalize();
      scene.add(directionalLight);
    }

    let rendererSize = renderer.getSize()
    // const camera = new THREE.PerspectiveCamera(45, rendererSize.width / rendererSize.height, 1., 10000.);
    const cameraW = 30.
    const cameraH = cameraW * rendererSize.height /rendererSize.width
    const camera = new THREE.OrthographicCamera(-cameraW / 2., cameraW / 2., cameraH / 2., -cameraH / 2., 1., 10000.)
    camera.rotation.order = "YXZ"
    camera.rotation.y = TAU/8.
    camera.rotation.x =-TAU / 8.
    scene.add(camera)

    const voxelGeo = new THREE.BoxGeometry(1, 1, 1);
    const voxelMaterial = new THREE.MeshLambertMaterial({color: 0xfeb74c});
    if ( this.attr('colorSides') === "true")
    {
      voxelGeo.faces[ 0].color = new THREE.Color(1.,.5,.5)
      voxelGeo.faces[ 2].color = new THREE.Color(0.,1.,0.)
      voxelGeo.faces[ 4].color = new THREE.Color(1.,1.,0.)
      voxelGeo.faces[ 6].color = new THREE.Color(1.,0.,1.)
      voxelGeo.faces[ 8].color = new THREE.Color(0.,1.,1.)
      voxelGeo.faces[10].color = new THREE.Color(1., 1., 1.)
      for(let i = 0; i < 6; ++i)
        voxelGeo.faces[i * 2 + 1].color = voxelGeo.faces[i * 2 + 0].color

      voxelMaterial.vertexColors = THREE.FaceColors
      voxelMaterial.color.setRGB(1.,1.,1.)
    }
      
    let outlineGeometry = new THREE.Geometry()
    let outlineMaterial = new THREE.LineBasicMaterial()
    let cubeEdges = [0,1,2,3,5,4,7,6, 0,2,1,3,5,7,4,6, 0,5,1,4,2,7,3,6]
    for (let i = 0; i < cubeEdges.length; i++)
      outlineGeometry.vertices[i] = voxelGeo.vertices[cubeEdges[i]].clone()

    const placementVisualizer = new THREE.Mesh(voxelGeo, new THREE.MeshBasicMaterial(
      { color: 0xff0000, opacity: 0.4, transparent: true }));
    scene.add(placementVisualizer);
    placementVisualizer.add(new THREE.LineSegments(outlineGeometry, outlineMaterial))

    let voxels = []
    function Voxel() {
      const voxel = new THREE.Mesh(voxelGeo, voxelMaterial);
      voxel.add(new THREE.LineSegments(outlineGeometry, outlineMaterial))
      voxels.push(voxel)
      objectsOnWhichVoxelsCanBePlaced.push(voxel);
      scene.add(voxel);
      return voxel
    }

    {
      var eraser = new THREE.Mesh(new THREE.PlaneBufferGeometry(.1,.1),new THREE.MeshBasicMaterial({transparent:true,color:0xFF0000}))
      camera.add(eraser)

      // eraser picture is from https://www.kissclipart.com/ which is public domain
      // let loader = new THREE.TextureLoader()
      // loader.load("eraser.png", 
      //   function (texture) { eraser.material.map = texture; log("hey"); eraser.material.needsUpdate = true },
      //   undefined,
      //   function (err) { console.error(err); }
      // )

      var defaultEraserPosition = new THREE.Vector3()
      defaultEraserPosition.z = -camera.near * 2.
      //TODO check where the corner is and put it near that
      defaultEraserPosition.x = -.7
      defaultEraserPosition.y = -.7

      eraser.position.copy(defaultEraserPosition)
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

      const shape = this.attr('shape')

      if (isInShapeFunctions[shape] !== undefined)
      {
        const isInShapeFunction = isInShapeFunctions[shape]
        const p = new THREE.Vector3()
        for (let i = -10; i < 10; i++)
          for (let j = -10; j < 10; j++)
            for (let k = -10; k < 10; k++)
            {
              p.set(i, j, k).addScalar(.5)
              if (isInShapeFunction(p)) {
                let voxel = Voxel()
                voxel.position.copy(p)
              }
            }
      }

      const coords = shape.split(",")
      for (let i = 0, il = Math.floor(coords.length / 3); i < il; ++i)
      {
        const voxel = Voxel()
        voxel.position.set(
          parseFloat(coords[i * 3 + 0]),
          parseFloat(coords[i * 3 + 1]),
          parseFloat(coords[i * 3 + 2]))
        snapToNearestValidCubeCenterPosition(voxel.position)
      }
    }

    var raycaster = new THREE.Raycaster();
    var oldRay = new THREE.Ray()

    //can be rotating, placing, erasing, null
    let mouseControlMode = ""

    const placingStart = new THREE.Vector3()
    const placingEnd = new THREE.Vector3()
    {
      const gridDimension = 20
      scene.add(new THREE.GridHelper(gridDimension,gridDimension));
      
      var floorIntersectionPlaneGeometry = new THREE.PlaneBufferGeometry(gridDimension, gridDimension);
      floorIntersectionPlaneGeometry.rotateX(-Math.PI / 2);
      var floorIntersectionPlane = new THREE.Mesh(floorIntersectionPlaneGeometry, new THREE.MeshBasicMaterial({ visible: false }));
      scene.add(floorIntersectionPlane);
      objectsOnWhichVoxelsCanBePlaced.push(floorIntersectionPlane);

      var placingHelpers = Array()
      for(let i = 0; i < 3; i++)
      {
        const placingHelper = new THREE.Mesh(new THREE.PlaneBufferGeometry(999., 999.), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, 
          // transparent:true,
          // opacity:.5,
          visible:false 
        }))
        placingHelpers.push(placingHelper)
        scene.add(placingHelper)
      }
      placingHelpers[0].geometry.rotateX(-TAU / 4.) //shouldn't need negative, check both directions angles
      placingHelpers[1].geometry.rotateY( TAU / 4.)
      placingHelpers[2].geometry.rotateZ( TAU / 4.)
    }

    function snapToNearestValidCubeCenterPosition(p) { p.floor().addScalar(.5) }

    function setPositionFromVoxelIntersection(p,intersection)
    {
      p.copy(intersection!.face!.normal).multiplyScalar(.1)
      p.add(intersection.point)
      snapToNearestValidCubeCenterPosition(p)
    }

    let asyncRaycaster = new THREE.Raycaster()
    $canvas.on('pointermove', (event: PointerEvent) => {
      event.preventDefault();
      
      const p = canvasPointerPosition(event, $canvas);
      camera.updateMatrixWorld()
      v1.set((p.x / $canvas.width ) * 2. - 1.,
            -(p.y / $canvas.height) * 2. + 1.);
      asyncRaycaster.setFromCamera(v1, camera);
    });

    $canvas.on('pointerdown', (event: PointerEvent) => {
      event.preventDefault();
      
      let eraserIntersected = raycaster.intersectObject(eraser)[0] !== undefined
      if (eraserIntersected)
        mouseControlMode = "erasing"
      else {
        const intersection = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced)[0]
        if (intersection !== undefined && !rotateOnly) {
          mouseControlMode = "placing"
          setPositionFromVoxelIntersection(placingStart, intersection)
          placingEnd.copy(placingStart)
          for (let i = 0; i < 3; i++)
            placingHelpers[i].position.copy(placingStart)
        }
        else mouseControlMode = "rotating"
      }
    });

    $canvas.on('pointerup', (event: PointerEvent) => {
      event.preventDefault();

      if (mouseControlMode === "placing")
      {
        const intersection = raycaster.intersectObjects(placingHelpers)[0];
        placingEnd.copy(intersection.point)
        snapToNearestValidCubeCenterPosition(placingEnd)

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

        // log(placingStart,placingEnd, iStart,iLimit,jStart,jLimit)
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
      
      mouseControlMode = ""
      placementVisualizer.scale.setScalar(1.)
    });

    function getCameraSpaceDirectionInAxisPlane(worldSpaceDirection, axisPlane, target)
    {
      target.copy(worldSpaceDirection)
      camera.worldToLocal(target)
      target[axisPlane] = 0.
      target.normalize()
    }

    function getStepTowardDestination(currentValue,destination)
    {
      let distanceFromDestination = destination - currentValue
      let sign = distanceFromDestination == 0. ? 0. : distanceFromDestination / Math.abs(distanceFromDestination)
      let speed = .01
      if(speed > Math.abs(distanceFromDestination))
        speed = Math.abs(distanceFromDestination)
      return sign * speed
    }

    updateFunctions.push(()=>
    {
      //camera
      {
        if (mouseControlMode === "rotating") {
          getCameraSpaceDirectionInAxisPlane(raycaster.ray.direction, "y", v1)
          getCameraSpaceDirectionInAxisPlane(oldRay.direction, "y", v2)
          let horizontalDelta = v1.angleTo(v2) * (v1.x < v2.x ? 1. : -1.)

          getCameraSpaceDirectionInAxisPlane(raycaster.ray.direction, "x", v1)
          getCameraSpaceDirectionInAxisPlane(oldRay.direction, "x", v2)
          let verticalDelta = v1.angleTo(v2) * (v1.y > v2.y ? 1. : -1.)

          camera.rotation.y += horizontalDelta * 40.
          camera.rotation.x += verticalDelta * 35
          camera.rotation.x = clamp(camera.rotation.x, -TAU / 4., TAU / 4.)
        }
        else {
          let desiredXAngle = -TAU / 14.
          camera.rotation.x = camera.rotation.x + getStepTowardDestination(camera.rotation.x,desiredXAngle)

          //snapspace is where the angles we want are integers
          let snapSpaceAngleY = camera.rotation.y / (TAU / 8.)
          let newSnapSpaceAngleY = snapSpaceAngleY + getStepTowardDestination(snapSpaceAngleY, Math.round(snapSpaceAngleY))
          camera.rotation.y = newSnapSpaceAngleY * (TAU / 8.)
        }
        
        let currentDistFromCamera = camera.position.length()
        camera.updateMatrixWorld()
        v1.set(0., 0., -currentDistFromCamera)
        camera.localToWorld(v1)
        camera.position.sub(v1)
      }

      if (mouseControlMode === "placing")
      {
        const intersection = raycaster.intersectObjects(placingHelpers)[0];
        if (intersection !== undefined) {
          placingEnd.copy(intersection.point)
          snapToNearestValidCubeCenterPosition(placingEnd)

          placementVisualizer.position.addVectors(placingEnd, placingStart).multiplyScalar(.5)
          placementVisualizer.scale.x = 1. + 2. * Math.abs(placementVisualizer.position.x - placingEnd.x)
          placementVisualizer.scale.y = 1. + 2. * Math.abs(placementVisualizer.position.y - placingEnd.y)
          placementVisualizer.scale.z = 1. + 2. * Math.abs(placementVisualizer.position.z - placingEnd.z)
        }
      }
      else
      {
        if (mouseControlMode === "rotating" || rotateOnly)
          placementVisualizer.scale.setScalar(.0000001)
        else {
          const intersections = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced);
          if (intersections.length > 0) {
            setPositionFromVoxelIntersection(placementVisualizer.position, intersections[0])
            placementVisualizer.scale.setScalar(1.)
          }
          else
            placementVisualizer.scale.setScalar(.0000001)
        }
      }

      if (mouseControlMode === "erasing")
      {
        raycaster.ray.at(eraser.position.length(), eraser.position)
        camera.updateMatrixWorld()
        camera.worldToLocal(eraser.position)

        const intersections = raycaster.intersectObjects(objectsOnWhichVoxelsCanBePlaced);
        if (intersections.length > 0 ) {
          for(let i = 0, il = intersections.length; i < il; ++i)
          {
            if (intersections[i].object !== floorIntersectionPlane)
            {
              let voxel = intersections[i].object
              scene.remove(voxel)
              objectsOnWhichVoxelsCanBePlaced.splice(objectsOnWhichVoxelsCanBePlaced.indexOf(voxel), 1)
              voxels.splice(voxels.indexOf(voxel), 1)
            }
          }
          setPositionFromVoxelIntersection(placementVisualizer.position, intersections[0])
          placementVisualizer.scale.setScalar(1.)
        }
      }
      else
        eraser.position.lerp(defaultEraserPosition,.1)
    })

    function loop() {
      let clockDelta = clock.getDelta()
      frameDelta = clockDelta < .1 ? clockDelta : .1 //clamped because debugger pauses create weirdness

      oldRay.copy(raycaster.ray)
      raycaster.ray.copy(asyncRaycaster.ray)

      for (var i = 0; i < updateFunctions.length; i++)
        updateFunctions[i]();

      frameCount++;

      requestAnimationFrame(loop);
      renderer.render(scene, camera);
    }
    loop()
  }
}