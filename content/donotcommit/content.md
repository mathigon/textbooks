# Testing

## Unit 1
> section: unit-1
> sectionStatus: dev

Pointycare

    figure: x-geopad.simulation.r(width=480 height=480)
      canvas(width=960 height=960)
      svg
        circle.large.move.red(name="a")
        circle.large.move.blue(name="b")
        circle.large.move.green(name="c")        
        path.thin(x="segment(a, a.translate(va))" arrows="end")
        path.thin(x="segment(b, b.translate(vb))" arrows="end")
        path.thin(x="segment(c, c.translate(vc))" arrows="end")
      x-play-toggle
      x-icon-btn.restore(icon="restore")

---

## Binary Stuff
> section: binary
> id: trash

Displaying binary representation of ${a}{a|13|0,32,1}


    .xTable.var(:html="xTable(a)")

---

## Transformations
> section: transformations
> id: trans
> goals: t1 t2 t3

Here are some shapes doing transformations into other shapes. Which of them are linear transformations?

::: column.r(width=200 parent="padded-thin")

    .animation
      include svg/transform-1.svg
      x-play-btn

::: column.r(width=200)

    .animation
      include svg/transform-2.svg
      x-play-btn

::: column.r(width=200)

    .animation
      include svg/transform-3.svg
      x-play-btn

:::

---

### Rigid Transformations
> id: rigid-1
> goals: r1 r2 r3

It turns out that there are just three different types of rigid transformations:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn
  
{.text-center} A transformation that simply _moves_ a shape is called a [__translation__](gloss:translation).

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} A transformation that _flips_ a shape over is called a [__reflection__](gloss:reflection).

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} A transformation that _spins_ a shape is called a [__rotation__](gloss:rotation).

:::

---

## Symmetry
> id: symmetry
> section: symmetry

Symmetrical faces are perceived as more attractive.

---

## Translations
> id: translations
> section: translations

Now it's your turn - translate this:

    svg(width=220 height=220)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=220 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill:#289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Adjust this matrix to perform a transformation.

And mimic the layout of Nicky Case's matrix.

Oh and this thing ${a} is a slider for ${a}{a|0|-2.0,2.0,0.1}

---
> id: rotations

Now let's rotate this:

    svg(width=220 height=220)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Adjust this matrix to make it rotate.

Adjust the angle ${angle} with this slider for ${angle}{angle|0|-359,360,5}

---

## Matrix Rotate
> section: matrix-rotate
> id: rotate

#### Rotate
This one works.

    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=i x2=i y1=0 y2=210 stroke="#e6e6e6" stroke-width=2)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      g.var.rotate(:html="polygonRotate(angle)")

Table check.

Rotate: adjust this ${angle}{angle|0|-340,340,20} degrees

<table>
<tr><td>cos(${angle})</td><td>-sin(${angle})</td></tr>
<tr><td>sin(${angle})</td><td>cos(${angle})</td></tr>
</table>

Table check.

---

## Matrix Scale
> section: matrix-scale
> id: scale

#### Scale
This one won't work.

    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=i x2=i y1=0 y2=210 stroke="#e6e6e6" stroke-width=2)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      g.var.scale(:html="polygonScale(xscale, yscale)")

Table check.

<table>
<tr><td>${xscale}{xscale|1.0|-2.0,2.0,0.1}</td><td>0</td></tr>
<tr><td>0</td><td>${yscale}{yscale|1.0|-2.0,2.0,0.1}</td></tr>
</table>

Table check.

---

## Skew
> id: skew

#### Skew 
Why is this not working?


    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=i x2=i y1=0 y2=210 stroke="#e6e6e6" stroke-width=2)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      g.var.skew(:html="polygonSkew(xskew, yskew)")


Or this?

<table>
<tr><td>1</td><td>${xskew}{xskew|0.0|-2.0,2.0,0.1}</td></tr>
<tr><td>${yskew}{yskew|0.0|-2.0,2.0,0.1}</td><td>1</td></tr>
</table>

Putting text here.