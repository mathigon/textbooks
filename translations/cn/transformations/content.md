#变换与对称

## 介绍

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

数学家“发明”了许多几何概念，例如[直线](gloss:line)或[多边形](gloss:polygon) 。另一方面，对称性在我们周围无处不在。几乎所有的植物，动物，甚至我们人类都是对称的。

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

随着时间的流逝，我们在艺术，建筑，技术和设计中都模仿了自然的对称性。对称的形状和图案看起来比不对称的形状和图案_更漂亮_ 。

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

但是对称比简单_看起来_更重要。它是我们宇宙的基础，甚至可以解释物理学的最基本定律。

_{button.next-step}继续_

---
> id: transformations
> goals: t1 t2 t3

虽然对称性是一个非常直观的概念，但是用数学方法描述对称性要比您想象的要困难。首先，我们必须学习[__变换__](gloss:transformation) ，这是将一个几何图形转换为另一个几何图形的方法。这里有一些例子：

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
> id: transformations-1

转换的结果称为[__图像__](gloss:transformation-image) 。我们经常表示形状的图像`A`如`A'` ，发音为“ A prime”。有许多不同类型的转换，我们将在本课程中更详细地探讨这些转换。

---

## 刚性转换

> id: rigid
> section: rigid
> translated: auto

[__刚性变换__](gloss:rigid-transformation)是一种特殊的变换，它不会更改图形的大小或形状。我们可以想象它是由木材或金属之类的固体材料制成的：我们可以移动，旋转或翻转它，但不能拉伸，弯曲或使其变形。

这五个转换中哪些是固定的？

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

事实证明，只有三种不同类型的刚性转换：

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center}仅_移动_形状的变换称为[__平移__](gloss:translation) 。

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center}将形状_翻转_的变换称为[__反射__](gloss:reflection) 。

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} _旋转_形状的变换称为[__旋转__](gloss:rotation) 。

:::

---
> id: rigid-2

我们还可以结合多种类型的转换来创建更复杂的转换-例如，平移后再旋转。

但首先，让我们更详细地研究每种类型的转换。

---
> id: translations

### 翻译

[__平移__](gloss:translation)是指将图形的每个点沿相同方向移动相同距离的变换。

在坐标平面中，我们可以指定形状沿_x_轴和_y_轴移动的距离。例如，通过（3，5）进行的变换将形状沿_x_轴移动3，并沿_y_轴移动5。

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption}通过翻译[[[[（5，1）]]]]

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption}通过翻译[[[[（-4，2）]]]]

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption}翻译成（ [[4]] ， [[-2]] ）

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

现在轮到您了–如图所示平移以下形状：

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption}翻译成（3，1） _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption}翻译（–4，–2） _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption}翻译为（5，–1） _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### 感言

[__反射__](gloss:reflection)是一种在直线上“翻转”或“镜像”形状的变换。这条线称为__反射线__ 。

在以下每个示例中绘制反射线：

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,1),point(1,2),point(2,3),point(8,2))" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)" name="from0")
      path(hidden name="line0" x="line(point(-1,4),point(11,4))")
      path(x="from0.reflect(line0)" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,1),point(1,5),point(3,5),point(2,3),point(4,1))" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)" name="from1")
      path(hidden name="line1" x="line(point(9,-1),point(-1,9))")
      path(x="from1.reflect(line1)" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/rorschach.jpg" width=220 height=180 alt="Rorschach Test")
      svg
        path(hidden name="line2" x="line(point(5,-1),point(5,9))")

:::

---
> id: reflections-1
> goals: r0 r1 r2

现在轮到您了–绘制以下每种形状的反射：

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,2),point(3,1),point(4,3),point(4,5),point(2,6),point(1,4))" name="from0" style="fill: rgba(105,63,180,0.4)")
      path.red(x="line(point(5,0), point(5,1))" name="line0")
      path.finished(hidden x="from0.reflect(line0)" name="to0" style="fill: rgba(105,63,180,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,6),point(6,4),point(8,6),point(5,7))" name="from1" style="fill: rgba(80,83,205,0.4)")
      path.red(x="line(point(-1,4), point(11,4))" name="line1")
      path.finished(hidden x="from1.reflect(line1)" name="to1" style="fill: rgba(80,83,205,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,3),point(3,3),point(3,5),point(5,5),point(5,6),point(2,6))" name="from2" style="fill: rgba(56,102,230,0.4)")
      path.red(x="line(point(2,1), point(3,2))" name="line2")
      path.finished(hidden x="from2.reflect(line2)" name="to2" style="fill: rgba(56,102,230,0.4)")

:::

---
> id: reflections-2

请注意，如果点位于反射线上，则[[它不会移动|旋转|]]被反射时[[翻转]] ： _{span.reveal(when="blank-0")}它的图像与原始图像相同。_

---
> id: reflections-3

在以上所有示例中，反射线都是水平，垂直或成45°角的，这使得绘制反射线变得容易。如果不是这种情况，则需要更多的工作：

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="l1" cx="180" cy="30" target="refl")
      circle.move.pulsate(name="l2" cx="120" cy="270" target="refl")
      path(name="refl" x="line(l1,l2)" target="refl")

      circle.reveal(name="a" x="point(60,50)" when="next-0" animation="pop" target="circ")
      circle(name="b" x="point(120,100)" hidden)
      circle(name="c" x="point(110,170)" hidden)
      circle(name="d" x="point(65,200)" hidden)
      circle(name="e" x="point(30,120)" hidden)

      circle.reveal(name="p" x="refl.project(a)" when="next-0" animation="pop" delay=1500)
      path.reveal.fill.light(x="angle(a,p,l1)" size=16 when="next-0" delay=1500)

      circle.reveal(name="a1" x="a.reflect(refl)" when="next-1" animation="pop" target="circ")
      circle(name="b1" x="b.reflect(refl)" hidden)
      circle(name="c1" x="c.reflect(refl)" hidden)
      circle(name="d1" x="d.reflect(refl)" hidden)
      circle(name="e1" x="e.reflect(refl)" hidden)

      path.fill.blue(x="polygon(a,b,c,d,e)")
      path.fill.reveal.blue1(x="polygon(a1,b1,c1,d1,e1)" when="next-3")

      path.reveal(x="line(a,a1)" when="next-0" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(b,b1)" when="next-2" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(c,c1)" when="next-2" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(d,d1)" when="next-2" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(e,e1)" when="next-2" animation="draw" delay=700)

      circle.transparent(name="ax" x="refl.project(a)" target="circ")
      path.transparent(x="segment(a,ax)" target="d1 circ")
      path.transparent(x="segment(a1,ax)" target="d2 circ")
      path.transparent(x="circle(ax,distance(a,ax))" target="circ")

::: column.grow

{.r}为了在[反射线上反射](target:refl)此形状，我们必须分别反射每个[顶点](gloss:polygon-vertex) ，然后再次连接它们。 _{button.next-step}继续_

{.r.reveal(when="next-0")}让我们选择一个顶点，并通过垂直于反射线的该顶点绘制线。 _{button.next-step}继续_

{.r.reveal(when="next-1")}现在，我们可以测量从顶点到反射线的[距离](target:d1) ，并作出对对方的[距离相等](target:d2)的点。 _{span.lgrey} （我们可以使用标尺或[指南针](target:circ)来执行此操作。）_ _{button.next-step}继续_

{.r.reveal(when="next-2")}我们可以对形状的所有其他顶点执行相同的操作。 _{button.next-step}继续_

{.r.reveal(when="next-3")}现在，我们只需要以正确的顺序连接反射的顶点，就可以找到反射！

:::

---
> id: rotations
> goals: r0 r1 r2

### 轮换

[__旋转__](gloss:rotation)是一种将形状围绕固定点“旋转”一定角度的变换。该点称为[__旋转中心__](gloss:center-of-rotation) 。旋转可以是顺时针或逆时针。

尝试围绕红色旋转中心旋转以下形状：

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption}顺时针旋转90°。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption}旋转180°。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption}逆时针旋转90°。

:::

---
> id: rotations-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="rot" cx="150" cy="250" target="rot angle compass protractor")

      circle.reveal(name="a" x="point(270,190)" when="next-0" animation="pop" target="compass")
      circle(name="b" x="point(280,110)" hidden)
      circle(name="c" x="point(210,80)" hidden)
      circle(name="d" x="point(190,170)" hidden)
      circle(name="e" x="point(220,200)" hidden)

      circle.reveal(name="a1" x="a.rotate(-ang/18*pi,rot)" when="next-2" animation="pop" target="a1 compass")
      circle(name="b1" x="b.rotate(-ang/18*pi,rot)" hidden)
      circle(name="c1" x="c.rotate(-ang/18*pi,rot)" hidden)
      circle(name="d1" x="d.rotate(-ang/18*pi,rot)" hidden)
      circle(name="e1" x="e.rotate(-ang/18*pi,rot)" hidden)

      path.fill.green(x="polygon(a,b,c,d,e)")
      path.fill.reveal.green1(x="polygon(a1,b1,c1,d1,e1)" when="next-4")

      path.transparent.light.fill(x="arc(rot,a.rotate(pi,rot),pi)" target="protractor")
      path.reveal.light.fill(x="angle(a1,rot,a)" when="next-1" target="angle protractor")

      path.reveal(x="segment(a,rot)" when="next-0" animation="draw" delay=500 target="angle compass protractor")
      path.reveal.thin.light(x="segment(rot,b)" when="next-3" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(rot,c)" when="next-3" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(rot,d)" when="next-3" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(rot,e)" when="next-3" animation="draw" delay=700)

      path.reveal(x="ray(rot,a1)" when="next-1" animation="draw" delay=500 target="angle l2")
      path.reveal.thin.light(x="segment(rot,b1)" when="next-3" animation="draw" delay=800)
      path.reveal.thin.light(x="segment(rot,c1)" when="next-3" animation="draw" delay=900 )
      path.reveal.thin.light(x="segment(rot,d1)" when="next-3" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(rot,e1)" when="next-3" animation="draw" delay=1100)

      path.transparent(x="segment(rot,a1)" target="compass protractor")
      path.transparent(x="circle(rot,distance(rot,a))" target="compass")

::: column.grow

绘制不完全为90°或180°的旋转更加困难。让我们尝试旋转此形状${10*ang}{ang|6|-18,18,1}°围绕[旋转中心](target:rot) 。

{.r}像反射一样，我们必须分别旋转形状中的每个点。 _{button.next-step}继续_

{.r.reveal(when="next-0")}我们首先选择一个顶点并在旋转中心画一条线。 _{button.next-step}继续_

{.r.reveal(when="next-1")}使用[量角器](target:protractor) ，我们可以测量[角度${ang*10}°](target:angle)围绕旋转中心。让我们以该角度绘制[第二条线](target:l2) 。 _{button.next-step}继续_

{.r.reveal(when="next-2")}使用[指南针](target:compass)或尺子，我们可以发现在这条线将距旋转中心为原点的距离相等的[点](target:a1) 。 _{button.next-step}继续_

{.r.reveal(when="next-3")}现在，我们必须对形状的所有其他顶点重复这些步骤。 _{button.next-step}继续_

{.reveal(when="next-4")}最后，像以前一样，我们可以连接各个顶点以获得原始形状的旋转图像。

:::

---
> id: composition-1

变换是数学许多部分的重要概念，而不仅仅是几何。例如，您可以通过移动或旋转[_函数_](gloss:function) [图](gloss:function-graph)来变换[_函数_](gloss:function) 。您还可以使用变换来确定两个形状是否[一致](gloss:congruent) 。

---

## 一致

> section: congruence
> sectionStatus: dev

TODO

---

## 对称

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__对称性__](gloss:symmetry)无处不在，这是一个直观的概念：对象的不同部分在某种程度上看起来_是相同的_ 。但是使用变换，我们可以对对称_真正的_含义给出更精确的数学定义：

{.definition}如果对象看起来相同，则即使它是经过_对称_变换的对象，也是_对称的_ 。

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center}我们可以反映出这只蝴蝶，之后看起来也一样。我们说它具有__反射对称性__ 。

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center}我们可以旋转这朵花，然后看起来一样。我们说它具有__旋转对称性__ 。

:::

---
> id: reflectional-symmetry

### 反射对称

如果形状在[__反射__](gloss:reflectional-symmetry)后看起来相同，则具有[__反射对称性__](gloss:reflectional-symmetry) 。反射线称为[__对称轴__](gloss:axis-of-symmetry) ，它将形状分成两个[[全等|等于|类似的]]一半。一些图形还可以具有多个对称轴。

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

在这六个图像和形状中绘制所有对称轴：

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/lake.jpg" width=220 height=180 alt="Lake")
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/beijing.jpg" width=220 height=180 alt="Forbidden City in Beijing")
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/blue-butterfly.jpg" width=220 height=180 alt="Butterfly")
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption}此形状有[[2]]个对称轴。

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption}正方形具有[[4]]个对称轴。

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption}此形状有[[2]]个对称轴。

:::

---
> id: alphabet

字母表中的许多字母具有反射对称性。选择所有可做的事情：

    x-picker.letters
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---
> id: reflectional-symmetry-2
> goals: r0 r1 r2

这里还有一些形状。完成它们，使它们具有反射对称性：

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(8,5),point(9,3),point(9,2),point(8,1),point(6,1),point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" style="fill: rgba(179,4,105,0.4)")
      path(x="polyline(point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" name="from0")
      path.red(x="line(point(5,-1),point(5,9))" name="line0")
      path(hidden x="from0.reflect(line0)" name="to0")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(1,5),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4),point(5,8),point(4,7),point(6,5))" style="fill: rgba(154,24,130,0.4)")
      path(x="polyline(point(1,4),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4))" name="from1")
      path.red(x="line(point(-1,4),point(11,4))" name="line1")
      path(hidden x="from1.reflect(line1)" name="to1")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(2,1),point(8,1),point(9,2),point(9,6),point(8,7),point(2,7),point(1,6),point(1,2))" style="fill: rgba(130,43,155,0.4)")
      path(x="polyline(point(5,1),point(8,1),point(9,2),point(9,4))")
      path.red(x="line(point(5,-1),point(5,9))")
      path.red(x="line(point(-1,4),point(11,4))")
      path(hidden x="polyline(point(5,1),point(2,1),point(1,2),point(1,6),point(2,7),point(8,7),point(9,6),point(9,4))" name="to2")

:::

---
> id: palindromes
> goals: p0 p1 p2

形状，字母和图像可以具有反射对称性，但是整数，单词和句子也可以具有反射对称性！

例如，“ 25352”和“ ANNA”从后到前都读相同。这样的数字或单词称为[__回文记__](gloss:palindrome) 。您还能想到其他回文吗？

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

如果我们忽略空格和标点符号，则下面的短句也具有反射对称性。你能提出自己的建议吗？

{.text-center}永远不要奇数或偶数。
一罐金枪鱼的[[坚果]] 。
哟，香蕉[[男孩]] ！

{.reveal(when="blank-0 blank-1")}但是回文报不仅好玩，而且实际上具有实际意义。几年前，科学家发现我们[DNA的一部分](gloss:dna)是回文的。这使它们对突变或损坏更具弹性-因为每件都有第二个备份副本。

---
> id: rotational-symmetry

### 旋转对称

::: column.grow

如果形状在[__旋转__](gloss:rotational-symmetry)后看起来相同（小于360°），则具有[__旋转对称性__](gloss:rotational-symmetry) 。 [旋转中心](gloss:center-of-rotation)通常只是形状的中间。

[__对称顺序__](gloss:order-of-symmetry)是形状看起来相同的不同方向的数量。您也可以将其视为_可以旋转形状的次数_ ，然后再回到起点。例如，此雪花的阶数为[[6]] 。

{.reveal(when="blank-0")}每次旋转的角度是`"360°"/"order"` 。在雪花中，这是`"360°"/6 = input(60)°` 。

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

找到以下每种形状的顺序和旋转角度：

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption}阶数[[4]] ，角度[[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption}阶数[[2]] ，角度[[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption}阶数[[8]] ，角度[[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

现在完成以下形状，使其具有旋转对称性：

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption}订单4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption}订单2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption}订单4

:::

---

## 对称组和墙纸

> id: groups
> section: symmetry-groups
> translated: auto

有些形状具有多个对称性-让我们以一个简单的例子来看一下[正方形](gloss:square) 。

::: column(width=400 parent="padded-thin")

    .cubes
      img.cube.reveal(src="images/cube-0.svg" width=80 height=80 when="blank-1 blank-2 blank-3" delay=1000 animation="pop")
      img.cube.reveal(src="images/cube-1.svg" width=80 height=80 when="blank-1" animation="pop")
      img.cube.reveal(src="images/cube-2.svg" width=80 height=80 when="blank-2" animation="pop")
      img.cube.reveal(src="images/cube-3.svg" width=80 height=80 when="blank-3" animation="pop")
      img.cube.reveal(src="images/cube-4.svg" width=80 height=80 when="blank-0" animation="pop")
      img.cube.reveal(src="images/cube-5.svg" width=80 height=80 when="blank-0" delay=200 animation="pop")
      img.cube.reveal(src="images/cube-6.svg" width=80 height=80 when="blank-0" delay=400 animation="pop")
      img.cube.reveal(src="images/cube-7.svg" width=80 height=80 when="blank-0" delay=600 animation="pop")

::: column.grow(width=200)

上面已经显示了一个正方形具有[[4]]个反射轴。

{.reveal(when="blank-0")}它还具有[[90]]°， [[180]]°和[[270]]°的旋转对称性。

{.reveal(when="blank-1 blank-2 blank-3")}最后，我们可以将“什么都不做”考虑为另一种特殊的对称性-因为结果（显然）与以前相同。有时称为__身份__ 。

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)}总共，我们发现了[[8个]]不同的“正方形的对称性”。

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

现在，我们实际上可以开始对这些对称性进行一些算术运算。例如，我们可以_添加_两个对称以获得新的对称：

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

只要添加一个正方形的两个对称，就可以得到一个新的对称。这是一个“对称计算器”，您可以自己尝试：

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button(tabindex=0) + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

花一些时间玩对称计算器，然后尝试找到任何模式。你能完成这些观察吗？

*增加两个旋转将始终产生[[一个旋转|反思]] （或身份）。 *添加两个反射将始终[[旋转|反思]] （或身份）。 *以相反的顺序添加相同的两个对称[[有时会产生不同的结果|总是给与众不同|总是给出相同的]]结果。 *添加身份[[不会做任何事情|返回反射|返回相反]] 。

---
> id: group-axioms

您可能已经意识到添加__{.orange}对称__实际上与添加非常相似__{.green}整数__ ：

    ol.proof

      li.r
        | Adding two #[strong.orange symmetries]/#[strong.green integers] always gives another #[strong.orange symmetry]/#[strong.green integer]:
        .text-center.axiom
          img.cube(src="images/cube-2.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-6.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-4.svg" width=32 height=32)
        .text-center.axiom
          mn 12
          mo +
          mn 7
          mo =
          mn 19
        .next-step Continue

      li.r.reveal(when="next-0")
        span.md Adding #[strong.orange symmetries]/#[strong.green integers] is [associative](gloss:associative):
        .text-center.axiom
          mfenced
            img.cube(src="images/cube-1.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-4.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          mfenced
            img.cube(src="images/cube-4.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-3.svg" width=32 height=32)
        .text-center.axiom
          mfenced #[mn 4]#[mo +]#[mn 2]
          mo +
          mn 5
          mo =
          mn 4
          mo +
          mfenced #[mn 2]#[mo +]#[mn 5]
        .next-step Continue

      li.r.reveal(when="next-1")
        | Every #[strong.orange symmetry]/#[strong.green integer] has an #[strong inverse], another #[strong.orange symmetry]/#[strong.green integer] which, when added, gives the identity:
        .text-center.axiom
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-0.svg" width=32 height=32)
        .text-center.axiom
          mn 4
          mo +
          mn –4
          mo(value="=") =
          mn 0
        .next-step Continue

---
> id: groups-1

在数学中，具有这些属性的任何集合都称为[__group__](gloss:group) 。一些团体（例如__{.orange}__正方形的__对称性__ ）只有有限数量的元素。其他人（例如__{.green}整数__ ）是无限的。

在此示例中，我们从正方形的八个对称开始。实际上，每个几何形状都有自己的__对称组__ 。它们都有不同的元素，但是它们始终满足上述三个规则。

组在数学中无处不在。元素可以是数字或对称性，也可以是多项式，置换，矩阵，函数…… _任何_符合这三个规则的东西。 _小组理论_的关键思想是，我们对单个元素不感兴趣，而对_它们之间如何相互作用_不感兴趣。

::: column.grow

例如，不同分子的对称基团可以帮助科学家预测和解释相应材料的特性。

小组还可以用来分析棋盘游戏的制胜策略，药物中的病毒行为，音乐中的不同谐调以及许多其他概念……

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} CCl <sub>4</sub>分子（左）和腺病毒（右）的特性由它们的对称性决定。

:::

---

### 墙纸组

> id: wallpaper-groups

在[前面的部分中，](/course/transformations/symmetry)我们看到了与两种不同的变换相对应的两种不同的对称性：旋转和反射。但是，第三种刚性转换也具有对称性： [[翻译|旋转|翻转]] 。

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__平移对称性__](gloss:translational-symmetry)不适用于花朵或蝴蝶等孤立的对象，但适用于延伸到各个方向的规则模式：

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption}六角形蜂窝

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption}陶瓷墙地砖

:::

---
> id: footsteps

除了反射，旋转和平移对称性之外，还有第四种类型： [__滑行反射__](gloss:glide-reflection) 。这是反射和沿与反射轴相同的方向平移的组合。

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

图案可以具有不止一种类型的对称性。就像正方形一样，我们可以找到模式的[对称组](gloss:symmetry-group) ，其中包含所有不同的对称性。

这些小组并没有告诉您有关图案的_外观_ （例如颜色和形状）的更多信息，而只是告诉您如何_重复_图案。多个不同的模式可以具有相同的对称组-只要以相同的方式排列和重复该模式即可。

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption}这两种模式具有相同的对称性，即使它们看起来非常不同。但是对称性与颜色或表面形状无关。

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption}这两种模式也具有相同的对称性-即使它们看起来更类似于左侧的对应模式，而不是彼此相似。

:::

---
> id: wallpaper-groups-3
> goals: gallery

事实证明，尽管存在无限多种可能的模式，但它们都只有17个不同的对称组之一。这些称为__墙纸组__ 。每个墙纸组均由平移，旋转，反射和滑动反射的组合定义。您可以在这些示例中看到[旋转中心](gloss:center-of-rotation)和[反射轴](gloss:axis-of-symmetry)吗？

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Group 1 – P1</strong>
Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Group 2 – P2</strong>
Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Group 3 – P3</strong>
Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Group 4 – P4</strong>
Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Group 5 – P6</strong>
Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Group 6 – PM</strong>
Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Group 7 – PMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Group 8 – P4M</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Group 9 – P6M</strong>
Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Group 10 – P3M1</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Group 11 – P31M</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Group 12 – P4G</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Group 13 – CMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Group 14 – PMG</strong>
Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Group 15 – PG</strong>
Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Group 16 – CM</strong>
Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Group 17 – PGG</strong>
Perpendicular glide reflections, rotations of order 2, translations

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

不幸的是，没有简单的理由说明为什么有_17_个这样的小组，要证明这一点需要更高级的数学。相反，您可以尝试为17个壁纸组的每一个绘制自己的重复图案：


    figure: x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

墙纸组都是关于平面二维图案的。我们可以对三维图案进行类似的处理：这些称为晶体学群，其中有219个！

除了平移，反射，旋转和滑行反射之外，这些组还包括__滑行平面__和__螺旋轴之__类的对称性（拧开瓶子时请考虑一下运动）。

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption}氮化硼的分子排列在具有三维对称基团的该晶格中。

:::

---

## 物理对称

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

到目前为止，我们所看到的所有对称在某种意义上都是_视觉_上的：可见的形状，图像或图案。实际上，对称可以是一个更广泛的概念： _对变化的免疫力_ 。

例如，如果您喜欢苹果汁和喜欢橙汁一样多，那么在交换苹果和橙子的转换下，您的偏好是“对称”。

1915年，德国数学家[艾米·诺瑟（Emmy Noether）](bio:noether)观察到， [自然法则也有](gloss:laws-of-nature)相似之处。

::: column.grow

例如，我们的经验告诉我们，宇宙中的物理定律都是相同的。无论您是在伦敦，纽约还是在火星上进行实验都没关系-物理定律应始终相同。在某种程度上，它们具有[[平移对称性|反射对称性]] 。

{.reveal(when="blank-0")}同样，我们在面对北方，南方或东方或西方时进行实验也没关系：自然定律具有[[旋转对称性|滑行反射对称性]] 。

{.reveal(when="blank-1")}最后，我们今天，明天还是一年内进行实验都没有关系。自然规律是“时间对称的”。

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

这些“对称性”一开始看起来似乎毫无意义，但实际上它们可以告诉我们有关宇宙的很多信息。艾米•诺瑟（Emmy Noether）设法证明每个对称性都对应于一个_守恒_的特定物理量。

例如，时间对称性意味着__能量__必须在我们的宇宙中守恒：您可以将能量从一种类型转换为另一种类型（例如从光转换为电），但永远不能产生或破坏能量。宇宙中的总能量将始终保持恒定。

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

事实证明，仅通过了解对称性，物理学家就可以得出控制我们宇宙的大多数自然法则，而无需进行实验或观察。

对称甚至可以预测基本粒子的存在。一个例子就是著名的__希格斯玻色子__ ：它是在1960年代由理论物理学家预测的，但直到2012年才在现实世界中观察到。

:::

---

## 膨胀

> id: dilations
> section: dilations
> translated: auto

到目前为止，我们只是研究了[[刚性|全等|视觉]]转换。 _{span.reveal(when="blank-0")}现在让我们考虑一个不是这样的问题： [__膨胀__](gloss:dilation)会通过增大或减小形状来改变形状的大小。_

---
> id: dilations-1

::: column.grow

所有膨胀都有[__中心__](target:center)和[__比例因子__](->.scale-target) 。中心是膨胀的参考点，比例因子告诉我们图形拉伸或收缩的程度。

如果[比例因子](gloss:scale-factor)在0和1之间，则图像[[较小|]]比原来[[大]] 。如果比例因子大于1，则图像[[较大|]]比原来的[[小]] 。

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="C" cx=40 cy=35 target="center")

      circle(hidden name="a" x="point(140,55)")
      circle(hidden name="b" x="point(160,115)")
      circle(hidden name="c" x="point(60,130)")

      circle(hidden name="a1" x="a.subtract(C).scale(s).add(C)")
      circle(hidden name="b1" x="b.subtract(C).scale(s).add(C)")
      circle(hidden name="c1" x="c.subtract(C).scale(s).add(C)")

      path.fill.green(x="polygon(a,b,c)" label="A" label-class="white")
      path.fill.blue(x="polygon(a1,b1,c1)" label="A’" label-class="white")

      path.light.thin(x="segment(C,s<1?a:a1)")
      path.light.thin(x="segment(C,s<1?b:b1)")
      path.light.thin(x="segment(C,s<1?c:c1)")

{.text-center.scale-target}比例因子： ${s}{s|2|0,3,0.1}

:::

{.todo}即将推出–有关膨胀的更多信息

---

## 相似

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
