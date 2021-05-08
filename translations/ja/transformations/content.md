#変換と対称性

## 前書き

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

[線](gloss:line)や[多角形](gloss:polygon)などの多くの幾何学的概念は、数学者によって「発明」されました。一方、対称性は私たちの周りのいたるところにあります。ほとんどすべての植物、動物、そして私たち人間でさえ対称です。

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

時間の経過とともに、私たちは芸術、建築、テクノロジー、デザインにおける自然の対称性を模倣してきました。対称的な形状とパターンは、非対称的なものよりも_美しく_見えるだけです。

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

しかし、対称性は単に_美しく見える_ことよりもはるかに重要です。それは私たちの宇宙のまさに基礎にあり、物理学の最も基本的な法則を説明することさえできます。

_{button.next-step}継続する_

---
> id: transformations
> goals: t1 t2 t3

対称性は非常に直感的な概念ですが、数学的にそれを記述することは、あなたが考えるよりも難しいです。最初に、1つの幾何学的図形を別の図形に変換する方法である[__変換__](gloss:transformation)について学習する必要があります。以下にいくつかの例を示します。

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

変換の結果は[__画像__](gloss:transformation-image)と呼ばれ[__ます__](gloss:transformation-image) 。私たちはしばしば形のイメージを表します`A`なので`A'` 、「Aプライム」と発音します。変換にはさまざまなタイプがあり、このコース全体で詳しく説明します。

---

## 剛体変換

> id: rigid
> section: rigid
> translated: auto

[__リジッド変換__](gloss:rigid-transformation)は、Figureのサイズや形状を変更しない特殊な変換です。木や金属などの固い素材でできていると想像できます。移動、回転、裏返すことはできますが、伸ばしたり、曲げたり、その他の方法で変形することはできません。

これら5つの変換のどれが固定的ですか？

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

剛体変換には3つの異なるタイプしかないことがわかります。

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center}形状を単純に_移動_する変換は、 [__平行__](gloss:translation) _移動_と呼ば[__れ__](gloss:translation)ます。

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center}形状上_反転_変換は、 [__反射__](gloss:reflection)と呼ばれます。

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center}形状を_回転さ_せる変換は、 [__回転__](gloss:rotation)と呼ばれます。

:::

---
> id: rigid-2

複数のタイプの変換を組み合わせて、より複雑な変換を作成することもできます。たとえば、平行移動とそれに続く回転などです。

しかし、最初に、これらの各タイプの変換をより詳細に見てみましょう。

---
> id: translations

### 翻訳

[__平行__](gloss:translation)移動は、図のすべての点を同じ方向に同じ距離だけ移動する変換です。

座標平面では、 _x_軸と_y_軸に沿って図形を移動する距離によって移動を指定できます。たとえば、（3、5）による変換では、 _x_軸に沿って3だけ、 _y_軸に沿って5だけ図形が移動します。

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} [[[[（5,1）]]]]が翻訳

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} [[[[（-4、2）]]]]が翻訳

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption}翻訳（（ [[4]] 、 [[-2]] ）

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

次はあなたの番です。次の図形を図のように翻訳します。

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} （3、1）で翻訳_{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} （–4、–2）による翻訳_{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} （5、–1）による翻訳_{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### 反射

[__反射__](gloss:reflection)は、線を横切って形状を「反転」または「 [__鏡映__](gloss:reflection) 」する変換です。この線は__反射__線と呼ばれます。

これらの例のそれぞれに反射線を引きます。

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

次はあなたの番です–これらの各形状の反射を描きます。

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

点が反射線上にある場合、 [[移動しないことに]]注意してください[[|回転する|]]反射すると[[反転し]]ます： _{span.reveal(when="blank-0")}そのイメージはオリジナルと同じポイントです。_

---
> id: reflections-3

上記のすべての例で、反射線は水平、垂直、または45°の角度でした。これにより、反射を簡単に描くことができました。そうでない場合、構築にはもう少し作業が必要です。

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

{.r}この形状を[反射線](target:refl)全体に反映するには、すべての[頂点を](gloss:polygon-vertex)個別に反射してから、それらを再度接続する必要があります。 _{button.next-step}継続する_

{.r.reveal(when="next-0")}頂点の1つを選択して、この頂点から反射線に垂直な線を引きましょう。 _{button.next-step}継続する_

{.r.reveal(when="next-1")}これで、頂点から反射のラインまでの[距離](target:d1)を測定し、反対側で[同じ距離](target:d2)を持つポイントを作成できます。 _{span.lgrey} （定規または[コンパス](target:circ)を使用してこれを行うことができます。）_ _{button.next-step}継続する_

{.r.reveal(when="next-2")}形状の他のすべての頂点についても同じことができます。 _{button.next-step}継続する_

{.r.reveal(when="next-3")}反射した頂点を正しい順序で接続するだけで、反射が見つかりました。

:::

---
> id: rotations
> goals: r0 r1 r2

### 回転

[__回転__](gloss:rotation)は、固定点を中心に特定の角度で形状を「回転」させる変換です。その点[__を回転中心__](gloss:center-of-rotation)といいます。回転は時計回りでも反時計回りでもかまいません。

下の図形を赤い回転の中心を中心に回転してみてください。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption}時計回りに90°回転します。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} 180°回転します。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption}反時計回りに90°回転します。

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

正確に90度または180度ではない回転を描くのはより困難です。この形を回転させてみましょう${10*ang}{ang|6|-18,18,1}° [回転](target:rot)の[中心の周り](target:rot) 。

{.r}反射の場合と同様に、シェイプ内のすべてのポイントを個別に回転させる必要があります。 _{button.next-step}継続する_

{.r.reveal(when="next-0")}まず、頂点の1つを選択し、回転の中心に線を引きます。 _{button.next-step}継続する_

{.r.reveal(when="next-1")} [分度器](target:protractor)を使用して、 [角度を](target:angle)測定できます[${ang*10}°](target:angle)回転の中心の周り。その角度で[2本目の線](target:l2)を引いてみましょう。 _{button.next-step}継続する_

{.r.reveal(when="next-2")} [コンパス](target:compass)または定規を使用して、回転の中心から元の点と同じ距離にあるこの線上の[点](target:a1)を見つけることができます。 _{button.next-step}継続する_

{.r.reveal(when="next-3")}次に、形状の他のすべての頂点に対してこれらの手順を繰り返す必要があります。 _{button.next-step}継続する_

{.reveal(when="next-4")}最後に、以前と同様に、個々の頂点を接続して、元の形状の回転した画像を取得できます。

:::

---
> id: composition-1

変換は、ジオメトリだけでなく、数学の多くの部分で重要な概念です。たとえば、 [グラフを](gloss:function-graph)シフトまたは回転することで[_関数_](gloss:function)を変換でき[ます](gloss:function-graph) 。変換を使用して、2つの形状が[一致して](gloss:congruent)いるかどうかを判別することもできます。

---

## 合同

> section: congruence
> sectionStatus: dev

TODO

---

## 対称

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__対称性__](gloss:symmetry)は私たちの周りのいたるところにあり、直観的な概念：オブジェクトのさまざまな部分が_同じ_ように見える。しかし、変換を使用すると、対称性が_実際_に何を意味するかについて、より正確で数学的な定義を与えることができます。

{.definition}特定の変換を適用した後でも、オブジェクトが同じに見える場合、オブジェクトは_対称的_です。

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center}この蝶を反射できますが、その後は同じように見えます。それは__反射対称性を__持っていると言います。

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center}この花を回転させると、同じように見えます。 __回転対称性__があると言えます。

:::

---
> id: reflectional-symmetry

### 反射対称

形状は、 [__反射__](gloss:reflectional-symmetry)後も同じように見える場合、 [__対称性__](gloss:reflectional-symmetry)があります。反射[__線は対称軸__](gloss:axis-of-symmetry)と呼ばれ、形状を2つの[[合同な]]ものに分割します[[|等しい|同様の]]半分。一部の図は、複数の対称軸を持つこともできます。

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

次の6つの画像と形状にすべての対称軸を描画します。

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

{.caption}この形状には[[2]]つの対称軸があります。

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption}正方形には[[4]]つの対称軸があります。

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption}この形状には[[2]]つの対称軸があります。

:::

---
> id: alphabet

アルファベットの多くの文字は反射対称性を持っています。実行するものをすべて選択します。

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

ここにいくつかの形状があります。それらを完成させ、反射対称性を持たせます。

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

形、文字、画像は対称的な対称性を持つことができますが、数字、単語、文章全体にも対称性があります。

たとえば、「25352」と「ANNA」はどちらも後ろから前へと同じように読みます。このような数字や単語は[__回文__](gloss:palindrome)と呼ばれます。他の回文を思いつきますか？

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

スペースと句読点を無視すると、以下の短い文も反射対称になります。自分で思いつくことができますか？

{.text-center}奇数でも偶数でもありません。
マグロの瓶の[[ナット]] 。
ヨ、バナナの[[男の子]] ！

{.reveal(when="blank-0 blank-1")}しかし、パリンドロームは楽しいだけでなく、実際に重要な意味を持っています。数年前、科学者たちは私たちの[DNAの](gloss:dna)一部が回文構造であることを発見しました。これにより、すべての部分の2番目のバックアップコピーが存在するため、変異や損傷に対する耐性が高まります。

---
> id: rotational-symmetry

### 回転対称

::: column.grow

[__回転__](gloss:rotational-symmetry)後（360°未満）に同じように見える場合、形状は[__回転対称__](gloss:rotational-symmetry)です。 [回転](gloss:center-of-rotation)の[中心](gloss:center-of-rotation)は通常、形状のちょうど中央です。

[__対称__](gloss:order-of-symmetry)の[__次数は__](gloss:order-of-symmetry) 、形状が同じに見える異なる方向の数です。最初に戻る前に_、図形を回転できる回数_と考えることもできます。たとえば、このスノーフレークの次数は[[6]]です。

{.reveal(when="blank-0")}各回転の角度は`"360°"/"order"` 。スノーフレークでは、これは`"360°"/6 = input(60)°` 。

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

これらの形状のそれぞれについて、次数と回転角度を見つけます。

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption}次数[[4]] 、角度[[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption}次数[[2]] 、角度[[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption}次数[[8]] 、角度[[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

これらの形状を完成させ、回転対称性を持たせます。

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption}注文4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption}注文2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption}注文4

:::

---

## 対称グループと壁紙

> id: groups
> section: symmetry-groups
> translated: auto

一部の形状には複数の対称性があります。簡単な例として[正方形](gloss:square)を見てみましょう。

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

上記で、正方形には[[4]]つの反射軸があることをすでに示しました。

{.reveal(when="blank-0")}また、 [[90]]°、 [[180]]°、 [[270]]°の回転対称性があります。

{.reveal(when="blank-1 blank-2 blank-3")}そして最後に、「何もしない」を別の特別な種類の対称性と考えることができます。結果は（明らかに）以前と同じだからです。これは、 __アイデンティティ__と呼ばれることもあります。

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)}合計で、 [[8つの]]異なる「正方形の対称性」が見つかりました。

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

これで、これらの対称性を使って実際にいくつかの演算を開始できます。たとえば、2つの対称を_追加_して新しい対称を取得できます。

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

正方形の対称性を2つ追加すると、新しい対称性が得られます。これは、自分で試すことができる「対称計算機」です。

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

対称計算機をいじって、パターンを見つけてみてください。これらの観察を完了することができますか？

*常に[[回転を]]与える2つの回転を追加します[[|反射]] （またはアイデンティティ）。 * 2つの反射を追加すると、常に[[回転が行われます|反射]] （またはアイデンティティ）。 *同じ2つの対称性を逆の順序で追加すると[[、異なる|いつも違う|常に同じ]]結果になります。 * IDを追加[[しても何も]]起こり[[ません|反射を返します|反対を返します]] 。

---
> id: group-axioms

あなたはすでにそれを追加していることに気付いたかもしれません__{.orange}対称性__は実際には追加に非常に似ています__{.green}整数__ ：

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

数学では、これらのプロパティを持つすべてのコレクションは[__グループ__](gloss:group)と呼ばれます。一部のグループ（ __{.orange}__正方形の__対称性__ ）には有限数の要素しかありません。その他（のような__{.green}整数__ ）は無限です。

この例では、正方形の8つの対称性から始めました。実際、すべての幾何学的形状には独自の__対称グループがあり__ます。それらはすべて異なる要素を持っていますが、常に上記の3つのルールを満たしています。

グループは数学のいたるところに現れます。要素は、数値または対称性ですが、多項式、順列、行列、関数など、3つのルールに従う_ものも使用_できます。 _群論_の鍵となる考え方は、個々の要素には興味がないということです。 _それらが互いにどのように相互作用するかという点_にのみ興味があります。

::: column.grow

たとえば、異なる分子の対称グループは、科学者が対応する材料の特性を予測および説明するのに役立ちます。

グループは、ボードゲームでの勝利戦略、医学におけるウイルスの挙動、音楽におけるさまざまな調和、および他の多くの概念の分析にも使用できます…

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} CCl <sub>4</sub>分子（左）とアデノウイルス（右）の特性は、それらの対称性によって決まります。

:::

---

### 壁紙グループ

> id: wallpaper-groups

[前のセクションで](/course/transformations/symmetry)は、回転と反射という2つの異なる変換に対応する2種類の対称性について説明しました。しかし、また、剛体変換の三種類の対称性があります： [[翻訳|スピン|反転し]]ます。

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__並進対称性__](gloss:translational-symmetry)は、花や蝶などの孤立したオブジェクトでは機能しませんが、あらゆる方向に広がる規則的なパターンでは機能します。

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption}六角形のホーニッコム

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption}セラミック壁タイル

:::

---
> id: footsteps

反射、回転、並進の対称性に加えて、第4の種類、 [__グライド反射もあり__](gloss:glide-reflection)ます。これは、反射軸と同じ方向の反射と平行移動の組み合わせです。

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

パターンは、複数のタイプの対称性を持つことができます。そして、正方形の場合と同様に、パターンの[対称グループ](gloss:symmetry-group)を見つけることができます。これには、そのすべての異なる対称性が含まれています。

これらのグループは、パターン_が_どのように表示されるか（色や形など）についてはあまり説明せず、 _繰り返される_方法についてのみ説明します。同じように配置され、繰り返される限り、複数の異なるパターンが同じ対称性グループを持つことができます。

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption}これらの2つのパターンは非常に異なって見えますが、同じ対称性を持っています。しかし、対称性は色や表面的な形ではありません。

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption}これらの2つのパターンは、対称性が同じです。ただし、左側の対応するパターンに似ていますが、互いに似ています。

:::

---
> id: wallpaper-groups-3
> goals: gallery

可能なパターンは無限にありますが、それらはすべて17の異なる対称グループの1つを持っていることがわかります。これらは__壁紙グループ__と呼ばれ__ます__ 。すべての壁紙グループは、平行移動、回転、反射、グライド反射の組み合わせによって定義されます。これらの例[で回転](gloss:center-of-rotation)の[中心](gloss:center-of-rotation) [と反射](gloss:axis-of-symmetry)の[軸](gloss:axis-of-symmetry)を確認できますか？

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

残念ながら、これらのグループが_17個_ある単純な理由はなく、それを証明するにはより高度な数学が必要です。代わりに、17の壁紙グループのそれぞれに独自の繰り返しパターンを描画してみることができます。


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

壁紙グループはすべて、フラットな2次元パターンについてのものでした。 3次元パターンについても同様のことができます。これらは結晶学的グループと呼ばれ、219あります。

平行移動、反射、回転、グライド反射に加えて、これらのグループには__グライド平面__や__ねじ軸__などの対称性が含まれます（ボトルのねじを外すときの動きについて考えてください）。

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption}窒化ホウ素は、分子がこの結晶格子に配置されており、3次元の対称グループを持っています。

:::

---

## 物理学における対称性

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

これまでのところ、私たちが調べたすべての対称性は、ある意味で_視覚的_でした：目に見える形、画像、またはパターン。実際、対称性はより広い概念である可能性があります： _変化に対する耐性_

たとえば、リンゴジュースがオレンジジュースと同じくらい好きな場合、リンゴとオレンジを入れ替える変換では、好みは「対称」です。

1915年、ドイツの数学者[Emmy Noether](bio:noether)は、同様の[ことが自然](gloss:laws-of-nature)の[法則に](gloss:laws-of-nature)も当てはまることを認めました。

::: column.grow

たとえば、私たちの経験から、物理学の法則は宇宙のどこでも同じであることがわかります。ロンドン、ニューヨーク、または火星で実験を行うかどうかは関係ありません。物理法則は常に同じである必要があります。ある意味で、それらは[[並進対称性]]を持っています[[|反射対称性]] 。

{.reveal(when="blank-0")}同様に、北向き、南向き、東向き、または西向きで実験を行うかどうかは重要ではありません。自然の法則は[[回転対称]]性を持っています[[|グライド反射対称]] 。

{.reveal(when="blank-1")}最後に、今日、明日、または1年以内に実験を行うかどうかは関係ありません。自然の法則は「時間対称」です。

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

これらの「対称性」は、最初はまったく意味がなさそうに見えるかもしれませんが、実際には私たちの宇宙について多くを語ることができます。エミーヌーザーは、あらゆる対称性が_保存され_ている特定の物理量に対応していることを証明することができました。

たとえば、時間対称性は、 __エネルギーを__宇宙で保存する必要があることを意味します。エネルギーをあるタイプから別のタイプに変換できます（たとえば、光から電気）が、エネルギーを作成または破壊することはできません。宇宙のエネルギーの総量は常に一定です。

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

対称性について知るだけで、物理学者は私たちの宇宙を支配する自然の法則のほとんどを導き出すことができることがわかります。実験や観察をする必要はありません。

対称性は、基本粒子の存在を予測することもできます。 1つの例は有名な__ヒッグスボソン__です。これは1960年代に理論物理学者によって予測されましたが、現実の世界では2012年まで観測されませんでした。

:::

---

## 膨張

> id: dilations
> section: dilations
> translated: auto

これまでのところ、私たちは[[剛体を]]見てきました[[|合同|視覚]]変換。 _{span.reveal(when="blank-0")}次に、そうではないものについて考えてみましょう。 [__膨張__](gloss:dilation)は、シェイプのサイズを大きくまたは小さくすることによって変更します。_

---
> id: dilations-1

::: column.grow

すべての膨張には、 [__中心__](target:center)と[__スケール係数があり__](->.scale-target)ます。中心は膨張の基準点であり、スケールファクターは、図がどれだけ伸縮するかを示します。

[倍率](gloss:scale-factor)が0〜1の場合、画像は[[小さくなります|]]オリジナル[[より]]も[[大きい]] 。倍率が1より大きい場合、画像は[[大きくなります|]]オリジナル[[より]]も[[小さい]] 。

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

{.text-center.scale-target}倍率： ${s}{s|2|0,3,0.1}

:::

{.todo}近日–拡張の詳細

---

## 類似点

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
