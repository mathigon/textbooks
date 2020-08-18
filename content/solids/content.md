# 3D Solids

## Introduction

> section: introduction
> sectionStatus: dev

{.todo} COMING SOON

---

## Nets and Surface Area

> section: surface-area
> sectionStatus: dev

{.todo} COMING SOON

---
> id: voxel-builder
> goal: problem

Voxel painter demo:

    figure
      x-voxel-painter(width=600 height=400 color-sides shape="3.5,4.5,2.5,-0.5,0.5,-0.5,-5.5,0.5,-3.5,-5.5,1.5,-3.5,-4.5,0.5,-3.5,-4.5,1.5,-3.5,-3.5,0.5,-3.5,-3.5,1.5,-3.5,-2.5,0.5,-3.5,-2.5,1.5,-3.5,-1.5,0.5,-3.5,-1.5,1.5,-3.5,-0.5,0.5,-3.5,-0.5,1.5,-3.5,0.5,0.5,-3.5,0.5,1.5,-3.5,1.5,0.5,-3.5,1.5,1.5,-3.5,2.5,0.5,-3.5,2.5,1.5,-3.5",playingFieldSize="20",showSaveButton)
        .eraser()
        x-icon-btn(icon="check-white")

    figure
      x-voxel-painter(width=600 height=400 color-sides,shape="-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,1.5,-0.5,-0.5,-0.5,0.5,-0.5,",playingFieldSize="4",hideGrid,rotateOnly)

    figure
      x-voxel-painter(width=600 height=400 color-sides,shape="-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,",playingFieldSize="4",hideGrid,rotateOnly)

    figure
      x-voxel-painter(width=600 height=400 color-sides shape="-1.5,-1.5,-1.5,-0.5,-1.5,-1.5,0.5,-1.5,-1.5,1.5,-1.5,-1.5,-1.5,-1.5,-0.5,-0.5,-1.5,-0.5,0.5,-1.5,-0.5,1.5,-1.5,-0.5,-1.5,-1.5,0.5,-0.5,-1.5,0.5,0.5,-1.5,0.5,1.5,-1.5,0.5,-1.5,-1.5,1.5,-0.5,-1.5,1.5,0.5,-1.5,1.5,1.5,-1.5,1.5,-1.5,-0.5,-1.5,-0.5,-0.5,-1.5,0.5,-0.5,-1.5,1.5,-0.5,-1.5,-1.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,1.5,-0.5,-0.5,-1.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,1.5,-0.5,0.5,-1.5,-0.5,1.5,-0.5,-0.5,1.5,0.5,-0.5,1.5,1.5,-0.5,1.5,-1.5,0.5,-1.5,-0.5,0.5,-1.5,0.5,0.5,-1.5,1.5,0.5,-1.5,-1.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,1.5,0.5,-0.5,-1.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,1.5,0.5,0.5,-1.5,0.5,1.5,-0.5,0.5,1.5,0.5,0.5,1.5,1.5,0.5,1.5,-1.5,1.5,-1.5,-0.5,1.5,-1.5,0.5,1.5,-1.5,1.5,1.5,-1.5,-1.5,1.5,-0.5,-0.5,1.5,-0.5,0.5,1.5,-0.5,1.5,1.5,-0.5,-1.5,1.5,0.5,-0.5,1.5,0.5,0.5,1.5,0.5,1.5,1.5,0.5,-1.5,1.5,1.5,-0.5,1.5,1.5,0.5,1.5,1.5,1.5,1.5,1.5,",playingFieldSize="6",hideGrid,rotateOnly)

---
> id: voxel-builder-question
> goal: problem

Try to make a shape with a surface area of 10 and a volume of 2

    figure
      x-voxel-painter(width=600 height=400 color-sides,playingFieldSize="4",)
        .eraser()
        x-icon-btn(surfaceArea=10,volume=2,icon="check-white")

---

## Prisms and Pyramids

> section: prism-pyramid
> sectionStatus: dev

{.todo} COMING SOON

---

## Cylinders and Cones

> section: cylinder-cone
> sectionStatus: dev

{.todo} COMING SOON

---

## Spheres

> section: spheres
> sectionStatus: dev

{.todo} COMING SOON
