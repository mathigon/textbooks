#多边形和多面体

## 多边形

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

[__多边形__](gloss:polygon)是只有直边的封闭的平面形状。多边形可以具有任意数量的边和角，但是边不能弯曲。以下哪个形状是多边形？

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

    x-gesture(target="#item1")

---
> id: polygons-1

根据多边形的边数，我们给多边形取不同的名称：

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong 三角形]#[br]3条边
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong 四边形]#[br]4条边
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong 五角形]#[br]5条边
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong 六角形]#[br]6条边
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong 七角形]#[br]7条边s
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong 八角形]#[br]8条边

---
> id: angles-0

### 多边形中的角

每个具有 _n_ 个边的多边形也具有 _n_ 个[内角](gloss:internal-angle) 。我们已经知道三角形中的内角总和始终为[[180]]°，但是其它多边形呢？

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ + _{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ + _{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ = _{x-anibutton(text="???")}_

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ + _{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ + _{span.circled.yellow}${a2[3]}°_ + _{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ = _{x-anibutton(text="???")}_

:::

---
> id: angles-1

看起来四边形的内角总和始终为[[360]]°–正好是三角形内角和的[[两倍|三倍|一半]] 。 _{span.reveal(when="blank-0 blank-1")}这不是巧合：每个四边形都可以分成两个三角形。_

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")}较大的多边形也一样。我们可以将一个五边形分成[[3]]个三角形，因此其内角总和为`3 × 180° =` [[540]]°。 _{span.reveal(when="blank-2 blank-3")}我们可以将六角形分割为[[4]]个三角形，因此其内角总和为`4 × 180° =` [[720]]°。_

---
> id: internal-angle-sum

具有 ${x}{x|7|3,15,1} 条边的多边形的内角总和为 180°× ${x-2} = ${(x-2)*180}°。通常，具有 _n_ 条边的多边形可以分为[[n – 2 | n – 1 | n]]个三角形。因此，

{.text-center.reveal(when="blank-0")} _n_ 边形的内角和 `= (n - 2) × 180°` 。

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### 凸多边形和凹多边形

::: column.grow

我们说多边形如果具有“向内部凹”的部分，则是[ __凹多边形__ ](gloss:concave) 。你可以想象这部分已经[“凹陷”](target:cave) 。 _非_ 凹多边形称为 [ __凸多边形__ ](gloss:convex) 。

你可以通过两种方法轻松识别凹多边形：它们有[至少一个内角](target:angle)大于180° 。它们还有[至少一个对角线](target:diagonal) 位于多边形 _外部_ 。

另一方面，在凸多边形中，所有内角均小于[[180]]°，所有对角线均位于多边形[[内部|之外]] 。

::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")

:::

---
> id: concave-1

以下哪个多边形是凹的？

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### 正多边形

我们说一个多边形是[ __正的__ ](gloss:regular-polygon)如果它的所有边都具有相同的长度，并且所有角度都具有相同的大小。这些形状中的哪些是正多边形？

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

正多边形的尺寸可以有很多不同-但是具有相同边数的所有正多边形都是[[相似|全等|有相同的面积]] ！

---
> id: regular-2

我们已经知道多边形的所有[内角](gloss:internal-angle)和。对于常规多边形，所有内角和都具有[[相同的大小|交替的角度]] ，因此我们可以算出单个内角的大小：

{.text-center.reveal(when="blank-0")} `"角度" = blank("所有角度之和","角的个数")/
blank("角的个数","所有角度之和")`
_{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x`._

{.reveal(when="blank-1 blank-2" delay=1000)} 如果 `n=3` 我们得到一个等边三角形的内角
 – 我们已知它必为[[60]]°. _{span.reveal(when="blank-3")} 如果一个正多边形具有 ${x}{x|6|3,12,1}
条边, 那么每个内角大小是 180° – `"360°"/var("x")` = ${round(180-360/x)}°._

---
> id: regular-area

### 正多边形的面积

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)

      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow

在这里，你可以看到一个具有 ${n}{n|5|4,12,1} 条边的[正多边形](gloss:regular-polygon)。每条边的长度都是[{.green} 1m](target:base) 。让我们尝试计算它的面积！

首先，我们可以将多边形分割成${toWord(n)}个[[等腰三角形|等边三角形|直角三角形]] 。

{.reveal(when="blank-0")}我们已经知道这些三角形的[[底边|高度|面积]]，但我们也需要知道其[[高度|直角边|中线]]才能够计算其面积。 _{span.reveal(when="blank-2")}在常规多边形中，此高度有时称为[{.yellow} 边心距](target:apothem) 。_

{.reveal(when="blank-1 blank-2" delay=1000)}可以注意到，存在由边心距和等腰三角形底边的一半形成的[直角三角形](target:right-triangle) 。这意味着我们可以使用三角函数！

{.reveal(when="blank-1 blank-2" delay=2000)} 等腰三角形的该 [{.blue} 底角](target:base-angle)
(我们称它为α) 是多边形[{.red} 内角](target:int-angle)大小的[[一半|一样|两倍]]:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")}要找到边心距，我们可以利用[[正切|正弦|余弦]]函数的定义：

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)}现在， [等腰三角形](target:isosceles-triangle)的面积是

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)}多边形由${toWord(n)}个这样的等腰三角形组成，所有这些等腰三角形都具有相同的面积。因此，多边形的总面积为

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## 四边形

> section: quadrilaterals
> id: quadrilaterals

在[先前的课程中](/course/triangles)我们研究了三角形的许多不同属性。现在让我们看一下四边形。

_正四边形_ 称为[[正方形|长方形|等边四边形]] 。它所有边都有相同的长度，并且所有角度都相等。

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} __正方形__ 是四边形，具有[四个相等的边](target:side)和[四个相等的角度](target:angle) 。

:::

---
> id: quadrilaterals-1

对于稍微“不太正”的四边形，我们有两个选择。如果我们只是希望 _角度_ 相等，我们将得到一个[ __矩形__ ](gloss:rectangle) 。如果我们只是希望 _边长_ 相等，就会得到[ __菱形__ ](gloss:rhombus) 。

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} __矩形__ 是具有[四个相等角度](target:angle)的四边形。

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} __菱形__ 是具有[四个相等边](target:side)的四边形。

:::

---
> id: quadrilaterals-2

还有其它一些四边形，它们的正规性更差，但仍然具有某些重要的特性：

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption}如果两对 _对边_ [平行](gloss:parallel) ，我们将得到一个 __平行四边形__ 。

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption}如果两对 _相邻_ 边的长度相同，则得到 __风筝形__ 。

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption}如果至少一对对边平行，我们将得到一个 __梯形__ 。

:::

---
> id: quadrilaterals-venn

诸多四边形可以按这些分类方式归入其中多个种类。我们可以将不同四边形的类型层次结构可视化为[维恩图](gloss:venn-diagram) ：

    figure: include svg/venn.svg

例如，每个矩形也是[[平行四边形|菱形|正方形]]，同时每个[[菱形|梯形|平行四边形]]也是风筝形。 一个菱形[[有时是|总是|绝不是]]个正方形，而且一个矩形[[总是|有时是|绝不是]]梯形。

{.reveal(when="blank-0 blank-1 blank-2 blank-3")}为了避免歧义，我们通常只使用最具体的类型。

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

现在，在左侧灰色框中的任意位置选择四个点, _{span.reveal(when="points")}将它们全部连接成一个四边形。_

{.reveal(when="points" delay=1000)}让我们找到这个边的中点。如果我们连接中点，我们将得到[[另一个四边形|一个三角形|一个矩形]] 。

{.reveal(when="blank-0")}尝试移动外部四边形的顶点，并观察较小的顶点发生了什么。看起来是不是对于 _任何_ 四边形，总是得到一个[[平行四边形|梯形|矩形]] ！

{.reveal(when="blank-1")}但是为什么会这样呢？为什么 _任何_ 四边形的结果总是平行四边形？为了帮助我们进行解释，我们需要绘制原始四边形的一条[对角线](gloss:polygon-diagonal)。

{.reveal(when="diagonal")}对角线将四边形分成[两个三角形](target:triangle) 。现在你可以看到内部四边形的[两个边](target:midsegment)实际上是这些三角形的[[中位线|中位数|垂直平分线]] 。

{.reveal(when="blank-2")}在[上一课程中](/course/triangles/properties)我们显示了三角形的[中位线](gloss:triangle-midsegment)始终与其底线平行。在这种情况下，这意味着这[两个边](target:parallel)都平行于对角线-因此它们也必定彼此[[平行|一样长|互相垂直]] 。

{.reveal(when="blank-3" delay=2000)}我们可以对四边形的[第二个对角线](target:other)做完全相同的操作，以表明两对相对的边是平行的。这就是我们证明内四边形为[平行四边形](gloss:parallelogram)所需的全部。 _{span.qed}_

:::

---
> id: parallelograms

### 平行四边形

事实证明，平行四边形具有许多其他有趣的特性，除了相对的边是平行的之外。以下六个陈述中哪些个是正确的？

::: column.grow

    x-picker.list
      .item.md 对边[相等](gloss:congruent).
      .item(data-error="parall-error-1") 内角总是小于 90°.
      .item.md(data-error="parall-error-2") 对角线[二等分](gloss:angle-bisector)内角。
      .item 对角相等。
      .item(data-error="parall-error-3") 两个对角线等长。
      .item(data-error="parall-error-4") 两边等长。
      .item 两条对角线交点互相等分。

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")

      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

当然，仅“观察”这些属性是不够的。为了确保它们 _始终_ 正确，我们需要 _证明_ 它们：

::: tab

#### 对边和对角 _{span.check(when="diagonal blank-0 blank-1")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")

      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")

      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow

{.task}让我们尝试证明平行四边形中的相对边和角度总是相等的。

首先绘制平行四边形的对角线之一。

{.reveal(when="diagonal")}对角线与平行四边形的边形成四个新角。两个[红色角](target:red-angle)和两个[蓝色角](target:blue-angle)是[交替的角](gloss:alternate-angles) ，因此它们必须[[相等|相邻|互补]] 。

{.reveal(when="blank-0")}现在，如果我们查看由对角线创建的[两个三角形](target:triangles) ，我们将看到它们具有两个全等角和[一个全等边](target:diagonal) 。由[[ASA|AAS|AA]]全等条件，两个三角形都必定全等。

{.reveal(when="blank-1")}这意味着三角形的其它对应部分也必定是相等的：特别是，两组[对边分别](target:sides)是相等，而两组[对角分别](target:angles)是相等的。 _{span.qed}_

:::

{.reveal(when="blank-1")}事实证明，反之亦然：如果四边形中的两组相对的边（或角度）相等，则四边形必定是平行四边形。

::: tab

#### 对角线 _{span.check(when="diagonal blank-2 blank-3")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")

      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")

      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")

      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")

      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow

{.task}现在证明平行四边形中的两个对角线互相一分为二。

让我们考虑一下对角线生成的两个黄色三角形：

* 我们刚刚证明[两个绿色边](target:side1)是相等的，因为它们是平行四边形的相对边。
* [两个红色角](target:anglesR)和[两个蓝色角](target:anglesB)是相等的，因为它们是[[交替的角|对角|直角]] 。

{.reveal(when="blank-2")}由[[ASA|SSS|AAS]]条件，两个黄色三角形也必定全等。

{.reveal(when="blank-3")}现在我们可以使用全等三角形的对应部分也相等这一事实来得出结论： [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM)和[`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) 。换句话说，两个对角线在它们的中点相交。 _{span.qed}_

:::

{.reveal(when="blank-3")}像以前一样，相反情况也成立：如果四边形的两个对角线互相一分为二，则四边形为平行四边形。

:::

---
> id: kites

### 风筝形

::: column.grow

上面我们显示了平行四边形的两对[[对边|邻边]]分别相等。在风筝形中，两组 _相邻_ 边是相等的。

_风筝_ 这个名字显然来自其形状：看起来就像你可以在空中放飞的风筝。但是，到目前为止，在所有特殊的四边形中，风筝形是唯一一个也可以[凹陷](gloss:concave)的：它的形状可以像飞镖或箭头：

::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} 凸形风筝

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} 看起来像箭头的凹风筝形

:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")

      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")

      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")

      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")

      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow

你可能已经注意到，所有风筝形都是[[对称的|相似的]] 。 _{span.reveal(when="blank-0")} [对称轴](gloss:axis-of-symmetry)是[[对角线之一|侧边之一|中位线]] 。_

{.reveal.r(when="blank-1")}对角线将风筝形分成[两个全等的三角形](target:triangle1) 。我们知道，它们在[SSS](gloss:triangle-sss)条件下是全等的：两个三角形都有[三个相等的边](target:sss) （红色，绿色和蓝色）。
[继续](btn:next)

{.reveal.r(when="next-0")}因此，使用[CPOCT](gloss:cpoct) ，我们知道[相应的角度](target:angles)也必定是相等的。
[继续](btn:next)

{.reveal.r(when="next-1")}这意味着一些推论，例如[{.red} 对角线](target:d1)是两端的[两个角](target:vAngle)的[[平分线|垂线|中位线]]。
[继续](btn:next)

{.reveal.r(when="next-2")}我们可以走得更远：如果我们画另一个对角线，我们将得到[另外两个较小的三角形](target:triangle2) 。因为[SAS](gloss:triangle-sss)条件，它们也必定是全等的：它们具有相同的[两边及其夹角](target:sas) 。
[继续](btn:next)

{.reveal(when="next-3")}这意味着[{.yellow} 角α](target:alpha)也必定与[{.yellow} 角β](target:beta)相等。由于它们相邻，因此α和β[互为补角](gloss:supplementary-angles)，两者都是[[90]]°。

{.reveal(when="blank-3")}换句话说，风筝形的对角线总是互相[[垂直|平行]] 。

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### 四边形面积

在上一课程中计算三角形的面积时，我们使用了将其转换为[[矩形|方形|五边形]]的技巧。事实证明，我们也可以对某些四边形执行此操作：

::: tab

#### 平行四边形_{span.check(when="draw-1 blank-1")}_

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.red.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow

尝试在左侧绘制一个面积与平行四边形相同的矩形。

{.reveal(when="draw-1")}你能看出左侧[缺少的三角形](target:triangle-1)[[精确的等于|小于|大于]]右侧[{.green}重叠的三角形](target:triangle-2)么？ _{span.reveal(when="blank-1")}因此，平行四边形的面积为_

{.text-center.reveal(when="blank-1")} 面积 = __{.i.m-green}底边__ × __{.i.m-yellow}高度__

{.reveal(when="blank-1" delay=1000)} _测量平行四边形的高度时要小心：它通常与两边的边长不同。_

:::

::: tab

#### 梯形_{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

回想一下梯形是具有一对[平行边](target:bases)的四边形。这些平行的边称为梯形的 __底部__ 。

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow

像之前一样，尝试绘制一个具有与此梯形相同面积的矩形。 _{span.reveal(when="draw-2")}你能看到左侧与右侧中[缺失和多出的三角形](target:triangles-3)是如何抵消的吗？_

{.reveal(when="draw-2" delay=2000)}梯形的[{.green} 高度](target:t-height)是其[{.blue} 平行边](target:bases)之间的[[距离|均值|长度]] 。

{.reveal.r(when="blank-2")})梯形的[{.yellow} 宽度](target:t-width)是其不平行的两边[[中点|端点]]之间的距离 。 _{span.reveal(when="blank-3")}这称为梯形的 __中位线__ 。_
_{button.next-step.reveal(when="blank-3")}继续_

{.reveal(when="next-0")}像[三角形](gloss:triangle-midsegment)一样，梯形的中位线[[平行于|垂直于|长度等于]]其两个底边 。中位线的长度是两个底边长度的平均值： `(a+c)/2` 。

{.reveal(when="blank-4")}如果将所有这些结合起来，我们将得到一个具有平行边[_a_](target:base-2)和[_c_](target:base-1)以及高度[_h_](target:t-height)的梯形面积的方程：

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### 风筝形 _{span.check(when="blank-5")}_

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")

      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")

      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")

      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow

在此风筝形中， [两个对角线](target:diag3)成为围绕风筝形的大[矩形](target:rect4)的宽度和高度。

这个矩形的面积[[两倍于|等于|三倍于]]风筝形的面积。 _{span.reveal(when="blank-5")}你能看出组成风筝形的[四个三角形](target:inside)中的每个[三角形](target:inside)与外面[间隙中的四个三角形](target:outside)如何相同吗？_

{.reveal(when="blank-5")}这意味着风筝形的面积可以用对角线[{.green} `d_1`](target:d31)和[{.yellow} `d_2`](target:d32)来表示:

{.text-center.reveal(when="blank-5")} `"面积" = 1/2 pill(d_1,"green","d31") × pill(d_2,"yellow","d32")`。

:::

::: tab

#### 菱形_{span.check(when="blank-6 blank-7")}_

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")

      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")

      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")

      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow

[菱形](gloss:rhombus)是具有四个全等边的四边形。你可能还记得，每个菱形都是个[[平行四边形|长方形|方形]]，而且还是个[[风筝形|六边形|凹多边形]] 。

{.reveal(when="blank-6 blank-7")}这意味着要找到菱形的面积，我们可以将其方程式用平行四边形的面积公式表示，也可以用风筝形的面积公式表示：

{.text-center.reveal(when="blank-6 blank-7")} _面积_ =
[{.i.blue}底边](target:base) × [{.i.red}高](target:height) = `1/2`
[{.i.green}d1](target:d41) × [{.i.yellow}d2](target:d42).

{.reveal(when="blank-6 blank-7" delay=1000)} _在不同的情况下，可能会提供给你菱形的不同部分信息(边长，高度，对角线长度），你应该选择最方便的方程式来计算面积。_

:::

:::



---

## 镶嵌

> section: tessellations
> id: tessellations

[多边形](gloss:polygon)在自然界中无处不在。如果要平铺较大的区域，它们特别有用，因为可以将多边形组合在一起而没有任何间隙或重叠。像这样的模式称为[__镶嵌__](gloss:tessellation) 。

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[六角形|三角形|方形]]的蜂窝

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} 锡纳奶蛇的皮

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption}叶子的细胞结构

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption}北爱尔兰巨人之路的玄武岩柱

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption}菠萝皮

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption}乌龟的壳

:::

---
> id: tessellations-1

从古罗马到现在，人类已经在艺术，建筑和技术中复制了许多自然形态。这里有一些例子：

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[长方形|方形|六角形]]路面图案

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption}英格兰伊甸园项目的温室

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption}阿罕布拉的马赛克

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} 伦敦大英博物馆的[[三角形|六角形|矩形]]屋顶

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption}悉尼蜂窝镶嵌馆

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _爬行动物平面规则划分的研究_
:::

    // TODO Carbon Nanotube
    // application: https://en.wikipedia.org/wiki/Carbon_nanotube
    // https://en.wikipedia.org/wiki/File:Types_of_Carbon_Nanotubes.png
    // https://commons.wikimedia.org/wiki/File:FlyingThroughNanotube.png

---
> id: tessellation-drawing
> goals: shapes0 shapes1

在这里，你可以使用正多边形创建自己的镶嵌。只需将新形状从侧边栏拖动到画布上即可。哪些形状的镶嵌效果好？有没有完全不能镶嵌的形状？尝试创建有趣的模式！

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row x-icon-btn(icon="download" title="下载图片")
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 别的学生创建的镶嵌图案例子
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### 来自正多边形的镶嵌

你可能已经注意到一些[正多边形](gloss:regular-polygon)(例如[[正方形|正五边形]])非常容易镶嵌，而另外一些（例如[[五边形|三角形|六角形]])似乎根本没有法镶嵌。

---
> id: tessellation-regular-1

这与其[内角](gloss:internal-angle)的大小有关，这是我们之前学过的计算。在镶嵌中的每个[顶点处](gloss:polygon-vertex) ，多个不同多边形的内角相交。我们需要所有这些角度加起来达到[[360]]°，否则将存在间隙或重叠。

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption}三角形[[可镶嵌|不可镶嵌]] _{span.reveal(when="blank-0")}因为 6 × 60° = 360°_

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} 方形[[可镶嵌|不可镶嵌]] _{span.reveal(when="blank-1")}因为 4×  90° = 360°_

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption}五角形[[可镶嵌|不可镶嵌]] _{span.reveal(when="blank-2")}因为108°的倍数加起来不会等于360°。_

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption}六边形[[可镶嵌|不可镶嵌]] _{span.reveal(when="blank-3")}因为 3 × 120° = 360°_

:::

---
> id: tessellation-regular-3

你可以类似地检查其它，就像五边形那样，具有7个或更多边的常规多边形不可镶嵌。这意味着能够镶嵌的正多边形只有是等边三角形，正方形和正六边形！

当然，你可以将不同种类的正多边形组合在一起进行镶嵌，前提是它们的内角之和正好为360°：

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption 正方形和等边三角形#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption 正方形和等边三角形#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption 正六边形和等边三角形#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption 正六边形和等边三角形#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption 正六边形，正方形和等边三角形#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption 正八边形和正方形#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption 正十二等边和等边三角形#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption 正十二边形，正六边形和正方形#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### 非正多边形的镶嵌

我们也可以尝试使用[非正多边形](gloss:irregular-polygon)制作镶嵌，只要小心旋转和排列它们即可。

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow

事实证明，你不仅可以镶嵌等边三角形，还可以镶嵌 _任何三角形_ ！尝试移动此图中的[顶点](target:vertex) 。

三角形内角和的总为[[180]]°。如果我们在镶嵌图案的顶点中每个角使用[[两次|一次|三次]]，我们得到360°：

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")

:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)

::: column.grow

更令人惊讶的是， _任何四边形_ 也可以嵌套！它们的内角和总为[[360]]°，如果我们在镶嵌图案的顶点中每个角使用[[一次|两次|三次]]，我们得到360°。

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")

:::

---
> id: tessellation-pentagons

五边形点棘手。我们已经看到 _正_ 五边形[[不能镶嵌|能镶嵌]] ，非正五边形呢？

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

这是五边形镶嵌的三个不同示例。它们不是 _正_ 五边形 ，但它们是完全有效的5边形。

到目前为止，数学家仅发现了15种带有（凸）五边形的镶嵌图案-最近的是在2015年发现的。

---
> id: pentagons
> goals: shapes

两年之后的2017年, _米夏埃尔·拉奥_ 发表了一份证明：除了已经找到的15个，没有其它的可能性了。你能用它们来做镶嵌吗？

    figure: .tessellation
      x-polypad
      .menu
        .add(data-shape="-13.9 -70.5,40.5 -70.5,40.5 24.4,13.1 70.5,-40.5 -23.5")
        .add(data-shape="-46 47.3,-1.4 47.3,46 0,-1.4 -47.3,-45.5 3")
        .add(data-shape="-28 -43.1,9.3 -43.1,59.2 43.1,-40.5 43.1,-59.2 10.8")
        .add(data-shape="-53.6 -40.2,-28.7 2.9,14.8 40.2,53.6 9,46 -40.2")
        .add(data-shape="11.5 40.5,54.6 21,19 -40.5,-52 -40.4,-54.6 -4.4")
        .add(data-shape="43.3 28.5,-4.3 43.2,-54.3 -42.9,45.3 -43.2,54.3 -20")
        .add(data-shape="-49.1 23.1,-5.4 35.5,73.4 -35.5,-32.7 -35.5,-73.4 -15.4")
        .add(data-shape="-57 -33,37.3 -33.3,57 13.7,10 33.3,-37.2 14")
        .add(data-shape="29.8 50.4,-31.5 8.2,-53.2 -50,8.9 -50.4,53.2 -7")
        .add(data-shape="-37.5 -2.8,-16.5 63.5,17.2 3,37.5 -63.3,-31.6 -63.5")
        .add(data-shape="43.4 -43.4,-43.4 -43.1,-43.4 43.4,0 43.4,43.4 0")
        .add(data-shape="-30.8 0,10.3 71.1,30.8 35.6,30.8 -71.1,10.3 -71.1")
        .add(data-shape="-36.9 -23.4,-9.9 -70.3,36.8 -43,36.9 70.2,17.4 70.3")
        .add(data-shape="-74.9 36.4,40 36.4,75.1 12.1,4.8 -36.4,-75.1 -6.3")
        .add(data-shape="-37.5 24.9,-12.4 -68,37.4 -68,37.5 -18.3,-12.4 68")
      .btn-row
        x-icon-btn(icon="flip" title="Flip selection")
        x-icon-btn(icon="download" title="下载图片")
      svg.overlay: g.tiles.active

---
> id: escher

### 艺术镶嵌

许多艺术家，建筑师和设计师在他们的作品中使用镶嵌图案，其中最著名的是荷兰艺术家[M·C·埃舍尔](bio:escher)。他的作品包含奇怪的，变异的生物，图案和风景：

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “天空和水 I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “蜥蜴” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “蜥蜴, 鱼, 蝙蝠” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “蝴蝶” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “两条鱼” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “贝壳和海星” (1941)

这些艺术品通常看起来既有趣又轻松，但其基本的数学原理与以前相同：角度，旋转，平移和多边形。如果数学不正确，则镶嵌将无法生效！

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption 蜕变 II” M·C·埃舍尔 (1940)

---
> id: penrose

### 彭罗斯瓷砖

到目前为止，我们看到的所有镶嵌图都有一个共同点：它们是 __周期性的__ 。这意味着它们由规则模式组成，该模式会一次又一次地重复。它们可以在所有方向上永远持续下去，并且到处看起来都一样。

在1970年代，英国数学家和物理学家[罗杰·彭罗斯](bio:penrose)发现了 _非周期性的_ 镶嵌结构-它们仍然在各个方向上无限地延续，但看上去 _决不会_ 完全相同。这些称为 __彭罗斯瓷砖__ ，并且你只需要几种不同的多边形即可创建一个：

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption 移动滑块以显示此镶嵌的基础结构。注意你如何拥有不同尺度的相同图案：黄色的小正五边形、蓝色的星星、橙色的菱形和绿色的“船”,以它们原来的尺寸，#[strong.blue 稍大的尺寸] 以及 #[strong.red 更大的尺寸]出现在其中。这种#[em 自相似性]可以用来证明这种彭罗斯瓷砖是非周期性的。

---
> id: penrose-1

彭罗斯（Penrose）纯粹是出于娱乐目的而探索镶嵌，但事实证明，某些真实材料（如铝）的内部结构遵循类似的模式。该图案甚至被用在厕纸上，因为制造商注意到可以将非周期性的图案卷起而没有凸起。

---

## 多面体

> section: polyhedra
> id: polyhedra

到目前为止，我们仅研究了在平面二维世界中使用多边形可以做什么。 [__多面体__](gloss:polyhedron)是由多边形组成的三维对象。这里有些例子：

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

多面体不能包含曲面-例如，球体和圆柱体不是多面体。

组成多面体的多边形称为其[ __面__ ](gloss:polyhedron-face) 。连接两个面的线称为[ __边缘__ ](gloss:polyhedron-edge) ，而边缘相交的角称为[ __顶点__ ](gloss:polyhedron-vertex) 。

---
> id: euler

多面体有许多不同的形状和大小-从仅带有几个面的简单立方体或金字塔，到上面有60个三角形面的复杂物体（如上面的星星）。但是事实证明， _所有_ 多面体都有一个共同的重要特性：

::: .theorem

__欧拉多面体公式__
在每个多面体中，面的数量(_F_)加上顶点的数量(_V_)比边缘的数量(_E_)多2。换一种说法，

{.text-center} `F + V = E + 2`

:::

例如，如果多面体具有12个面和18个顶点，我们知道它必定具有[[28]]条边。

---
> id: euler-1

这个方程由著名的瑞士数学家[伦纳德·欧拉](bio:euler)发现。对于任何多面体，只要不包含任何孔，都成立。

如果你像上面那样尝试其它多面体，你会发现欧拉公式始终有效。在[以后的课程中](/course/graph-theory/planar-graphs)你将学习如何在数学上进行实际证明。

---

## 网格和横截面

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## 棱镜和金字塔

> section: prisms-pyramids
> sectionStatus: dev

TODO

---

## 缩放形状和实体

> section: scaling
> sectionStatus: dev

TODO

---

## 柏拉图多面体

> section: platonic
> id: platonic

在本课程开始时，我们将[正多边形](gloss:regular-polygon)定义为特别“对称”的多边形，其中所有边和角度都相同。我们可以为多面体做类似的事情。

在 _正多面体_ 中，所有[面](gloss:polyhedron-face)都是相同种类的正多边形，并且在每个[顶点](gloss:polyhedron-vertex)处都遇到相同数量的面。具有这两种特性的多面体被称为[__柏拉图多面体__](gloss:platonic-solid) ，以希腊哲学家[柏拉图](bio:plato)命名。

那么柏拉图多面体是什么样子？其中有多少种？要制作三维形状，我们需要在每个顶点至少有[[3]]个面相交。让我们从最小的规则多边形开始：等边三角形：

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

如果我们创建一个多面体，每个顶点有三个[等边三角形](gloss:equilateral-triangle)相交，形状在左侧。它被称为 __四面体__ ，有[[4]]个面。 _{.reveal(when="blank-0")} （”Tetra”在希腊语中表示“四”）。_

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

如果四个等边三角形在每个顶点相遇，我们将获得不同的柏拉图实体。它被称为 __八面体__ ，有[[8]]个面。 _{.reveal(when="blank-0")} （”Octa”在希腊语中表示“八”。就像“Octagon”表示8边形，“Octahedron”表示8面体。）_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

如果每个顶点有[[5]]个三角形相遇，我们得到 __二十面体__ 。它有[[20]]个面。 _{.reveal(when="blank-1")} （“Icosa”在希腊语中的意思是“二十”。）_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

如果在每个顶点处有[[6]]个三角形相遇，则会发生不同的情况：我们只是得到[[一个镶嵌图案|一个四边形|另一个二十面体]] ， _{span.reveal(when="blank-1")}而不是三维多面体。_

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

每个顶点上七个或更多的三角形也不会产生新的多面体：顶点周围没有足够的空间来容纳那么多三角形。

:::

这意味着我们已经找到了由三角形组成的[[3]]个柏拉图固体。让我们继续下一个常规多边形：正方形。

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

如果[[3]]个正方形在每个顶点相交，我们得到 __立方体__ 。就像骰子一样，它有[[6]]个面。 _{span.reveal(when="blank-1")}立方体有时也称为 _六面体_ ，在希腊语“hexa”表示“六”。_

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

如果每个顶点有[[4]]个正方形相遇，我们将得到[[另一个镶嵌|四面体|另一个立方体]] 。 _{span.reveal(when="blank-1")}而且像以前一样，五个或更多正方形也将不起作用。_

:::

---
> id: platonic-dodecahedron

接下来，让我们尝试正五边形：

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

如果在每个顶点有[[3]]个五边形相遇，我们得到 __十二面体__ 。它有[[12]]个面。 _{.reveal(when="blank-1")} （“Dodeca”在希腊语中意为“十二”。）_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

像以前一样，四个或更多个五边形[[无效|有可能]]因为没有足够的空间。

:::

---
> id: platonic-hexagons

下一个要尝试的规则多边形是六边形：

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

如果每个顶点都有三个六边形，我们会立即得到[[镶嵌|多面体|六面体]] 。 _{span.reveal(when="blank-0")}由于没有超过三个六边形的空间，因此似乎没有由六边形组成的柏拉图多面体。_

:::

---
> id: platonic-final

具有六个以上边的所有正多边形也会发生同样的情况。它们不会镶嵌，我们当然也不会得到任何三维多边形。

这意味着只有[[5]]种柏拉图固体！让我们一起看看所有这些：

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__四面体__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]]个面_
_{span.dual} [[4]]个顶点_
_{span.dual} [[6]]条边_

::: column.grow.text-center(width=120)

__立方体__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]]个面_
_{span.dual(target="dual1")} [[8]]个顶点_
_{span.dual} [[12]]条边_

::: column.grow.text-center(width=120)

__八面体__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]]个面_
_{span.dual(target="dual1")} [[6]]个顶点_
_{span.dual} [[12]]条边_

::: column.grow.text-center(width=120)

__十二面体__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]]个面_
_{span.dual(target="dual2")} 20个顶点_
_{span.dual} 30条边_

::: column.grow.text-center(width=120)

__二十面体__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]]个面_
_{span.dual(target="dual2")} 12个顶点_

_{span.dual} 30条边_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")}注意在[立方体和八面体](target:dual1)间变化时面和顶点的数量是如何[[交换|维持不变]]的，以及[十二和二十面体](target:dual2)的边是如何[[保持相同|变成不同]]的。这些成对的柏拉图多面体称为[__双重多面体__](gloss:polyhedron-dual) 。

---
> id: platonic-dual

我们可以通过用顶点“替换”每个面，以及用面“替换”每个顶点来将一个多面体变成其对偶的。这些动画展示了是怎么转化的：

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

正四面体本身是双重的。由于它具有相同数量的面和顶点，因此交换它们不会改变任何东西。

---
> id: platonic-elements

[柏拉图](bio:plato)认为，宇宙中的所有物质都由四个元素组成：空气，土，水和火。他认为每个元素都对应一种柏拉图多面体，而第五种元素则代表整个宇宙。今天，我们知道有100多种不同的元素由球形原子组成，而不是多面体。

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption 图片来自约翰内斯·开普勒的《和谐世界》(1619)

---

### 阿基米德多面体

> id: archimedean

柏拉图多面体是特别重要的多面体，但还有无数其他的。

例如， [__阿基米德多面体__](gloss:archimedean-solid)仍然必须由[正多边形组成](gloss:regular-polygon) ，但是你可以使用多种不同的类型。它们以另一位希腊数学家[锡拉丘兹的阿基米德](bio:archimedes)命名，其中13种：

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __截四面体__
8个面，12个顶点，18个边

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __立方八面体__
14个面，12个顶点，24个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __截断的立方体__
14个面，24个顶点，36个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __截断的八面体__
14个面，24个顶点，36个边

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __菱形八面体__
26个面，24个顶点，48个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __截头的八面体__
26个面，48个顶点，72个边

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __扭棱立方体__
38个面，24个顶点，60个边

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __三十二面体__
32个面，30个顶点，60个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __截断的十二面体__
32个面，60个顶点，90个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __截断的二十面体__
32个面，60个顶点，90个边

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __小斜方截半二十面体__
62个面，60个顶点，120个边

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __大斜方截半二十面体__
62个面，120个顶点，180个边

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __扭棱十二面体__
92个面，60个顶点，150个边

:::

---
> id: polyhedra-applications

### 应用领域

柏拉图认为所有元素都由柏拉图多面体组成是错误的。但是普通的多面体具有许多特殊性质，使它们出现在自然界的其它地方–我们可以在科学和工程学中复制这些性质。

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

许多 __病毒__ ， __细菌__ 和其它小 __生物__ 的形状都像[二十面体](gloss:icosahedron) 。例如，病毒必须将其遗传物质封闭在许多相同蛋白质单元的外壳内。二十面体是执行此操作的最有效方法，因为它由一些规则元素组成，但形状几乎像球形。

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption 巴基球分子

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption 蒙特利尔生物圈

::: column.grow

许多 __分子__ 形状像规则的多面体。最著名的例子是`C_60`由60个碳原子排列成[截二十面体](gloss:truncated-icosahedron)的形状组成。

它是在1985年科学家研究星际尘埃时发现的。他们以建筑师[巴基敏斯特·富勒](bio:fuller)的名字命名为“巴基球”（或巴基敏斯特富勒烯），该建筑师以建造相似外观的建筑而闻名。

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption 八面体萤石

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption 黄铁矿立方体

::: column.grow

大多数 __晶体__ 的原子排列成规则的网格，该网格由[四面体](gloss:tetrahedron)或[八面体](gloss:octahedron)组成。当它们破裂或破碎时，你可以更大范围地看到这些形状。

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption 八角形空间框架

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption 巴黎卢浮宫博物馆

::: column.grow

四面体和八面体非常坚固且稳定，这使它们在 __建筑中__ 非常有用。 _空间框架_ 可以支撑大型屋顶和重型桥梁的多边形结构。

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption 足球

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption 用于角色扮演游戏的多面体骰子

::: column.grow

柏拉图多面体也可以用来制造 __骰子__ 。由于它们的对称性，每一侧面都有着陆的[可能性](gloss:probability) ，因此骰子很公平。

[截断的二十面体](gloss:truncated-icosahedron)可能是世界上最著名的多面体：它是足球的形状。

:::
