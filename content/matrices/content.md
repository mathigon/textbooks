# Matrices

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