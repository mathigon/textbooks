#ポリゴンと多面体

## ポリゴン

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

[__ポリゴン__](gloss:polygon)とは、閉じた平らな形状で、辺がまっすぐなだけです。ポリゴンは任意の数の辺と角度を持つことができますが、辺を湾曲させることはできません。以下の形状のどれがポリゴンですか？

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

ポリゴンの側面の数に応じて、ポリゴンに異なる名前を付けます。

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangle]#[br]3 sides
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilateral]#[br]4 sides
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 sides
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 sides
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 sides
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octagon]#[br]8 sides

---
> id: angles-0

### ポリゴンの角度

_n個_の辺を持つすべてのポリゴンも_、n個_ [内角を](gloss:internal-angle)持っています。三角形の内角の合計が常に[[180]]°であることはすでにわかっていますが、他のポリゴンについてはどうでしょうか。

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

四辺形の内角の合計は常に[[360]]°–正確に[[2倍のようです|三回|]]三角形の角度の合計の[[半分]] 。 _{span.reveal(when="blank-0 blank-1")}これは偶然ではありません。すべての四辺形を2つの三角形に分割できます。_

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")}大きなポリゴンでも同じことが言えます。五角形を[[3つの]]三角形に分割できるため、その内角の合計は`3 × 180° =` [[540]]°。 _{span.reveal(when="blank-2 blank-3")}六角形を[[4つの]]三角形に分割できるため、その内角の合計は`4 × 180° =` [[720]]°。_

---
> id: internal-angle-sum

ポリゴン${x}{x|7|3,15,1}側面の内角の合計は180°× ${x-2} = ${(x-2)*180}°。より一般的には、 _n_辺を持つポリゴンは[[n – 2に]]分割できます。 [[| n – 1 | n個の]]三角形。したがって、

{.text-center.reveal(when="blank-0")} _n_角形の内角の合計`= (n - 2) × 180°` 。

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### 凸型ポリゴンと凹型ポリゴン

::: column.grow

「内側を指す」セクションがある場合、多角形は[__凹形__](gloss:concave)であると言います。この部分が[「陥没」し](target:cave)ていると想像できます。凹型で_ない_ポリゴンは、 [__凸型__](gloss:convex)と呼ばれます。

凹型ポリゴンを簡単に識別する方法は2つあります。それらには[、180°より大きい内角が](target:angle)少なくとも1つあります。また[、ポリゴンの_外側に_ある](target:diagonal)少なくとも1つの[対角線があります](target:diagonal) 。

一方、凸多角形では、すべての内角が[[180]]°未満で、すべての対角線が[[内側にあります。 |]]ポリゴンの[[外側]] 。

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

これらのポリゴンのどれが凹型ですか？

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### 通常のポリゴン

すべての辺の長さが同じで、すべての角度が同じサイズの場合、ポリゴンは[__正則__](gloss:regular-polygon)であると言います。これらの形状のどれが正多角形ですか？

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

通常のポリゴンにはさまざまなサイズがありますが、同じ数の辺を持つすべての通常のポリゴン[[は類似しています|合同です|同じエリアがあり]]ます！

---
> id: regular-2

ポリゴンのすべての[内角の](gloss:internal-angle)合計はすでにわかっています。通常のポリゴンの場合、これらの角度はすべて[[同じサイズです|は別の角度な]]ので、単一の内角のサイズを[[計算]]できます。

{.text-center.reveal(when="blank-0")}角度= <mfrac><mrow>[[すべての角度の合計|角度の数]]</mrow><mrow>[[角度の数|すべての角度の合計]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` 。_

{.reveal(when="blank-1 blank-2" delay=1000)}もし`n=3`正三角形の内角のサイズを取得します。これは[[60]]°でなければならないことはすでにわかっています。 _{span.reveal(when="blank-3")}正多角形で${x}{x|6|3,12,1}側面、すべての内角は180°-_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°。_

---
> id: regular-area

### 正多角形の面積

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

ここであなたは[正多角形](gloss:regular-polygon)を見ることができます${n}{n|5|4,12,1}側面。すべての辺に長さがあります[{.pill.green} 1分](target:base)その面積を計算してみましょう！

まず、ポリゴンを${toWord(n)}合同、 [[二等辺|等辺|直角]]三角形。

{.reveal(when="blank-0")}私たちはすでに[[ベースを]]知ってい[[ます|高さ|]]これらの三角形の[[面積]]ですが、 [[高さ]]も必要です[[|足|]]その面積を計算できるようにするための[[中央値]] 。 _{span.reveal(when="blank-2")}通常のポリゴンでは、この高さは、 [{.pill.yellow} apothem](target:apothem) 。_

{.reveal(when="blank-1 blank-2" delay=1000)}アポセムと二等辺三角形の底辺の半分によって形成された[直角三角形](target:right-triangle)があることに注意してください。これは、三角法を使用できることを意味します！

{.reveal(when="blank-1 blank-2" delay=2000)}の[{.pill.blue}](target:base-angle)二等辺三角形（これらをαと呼びます）の[底角](target:base-angle)は[[、 |同じ|]]ポリゴンの[内角](target:int-angle)の[[2倍の]]サイズ：

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")}アポテムを見つけるには、 [[接線]]の定義を使用できます。 [[|正弦|コサイン]] ：

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)}今、 [二等辺三角形](target:isosceles-triangle)の面積は

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)}ポリゴンは${toWord(n)}これらの二等辺三角形のうち、すべて同じ面積です。したがって、ポリゴンの総面積は

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## 四辺形

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

[前のコースで](/course/triangles)は、三角形のさまざまな特性を調査しました。それでは、四辺形を見てみましょう。

_通常の四辺形_は[[正方形]]と呼ばれます[[|矩形|正四辺形]] 。辺はすべて同じ長さで、角度はすべて同じです。

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

{.caption} __正方形__は、 [4つの等しい辺](target:side)と[4つの等しい角度を](target:angle)持つ四角形です。

:::

---
> id: quadrilaterals-1

わずかに「あまり規則的でない」四辺形の場合、2つのオプションがあります。 _角度_を等しくしたいだけの場合は、 [__長方形になり__](gloss:rectangle)ます。 _辺_を等しくしたいだけの場合は、 [__ひし形になり__](gloss:rhombus)ます。

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

{.caption} __長方形__は、 [4つの等しい角度を](target:angle)持つ四角形です。

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

{.caption} __菱形__は、 [4つの等しい辺を](target:side)持つ四辺形です。

:::

---
> id: quadrilaterals-2

他にもいくつかの四辺形がありますが、これらはさらに規則的ではありませんが、特定の重要な特性があります。

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

{.caption} _反対_側の両方のペアが[平行](gloss:parallel)であるならば、我々は__平行四辺形を__取得__し__ます。

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

{.caption} 2組の_隣接する_辺の長さが同じである場合、 __カイト__を取得します。

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

{.caption}少なくとも1対の反対側が平行である場合、 __台形になり__ます。

:::

---
> id: quadrilaterals-venn

四辺形は、これらのカテゴリの複数に分類できます。さまざまなタイプの四辺形の階層を[ベン図](gloss:venn-diagram)として視覚化できます。

    figure: include svg/venn.svg

たとえば、すべての長方形も[[平行四辺形です|ひし形|正方形]] 、そしてすべての[[菱形|台形|平行四辺形]]も凧です。ひし形は[[時々 |常に|決して]]正方形と長方形は[[常に|時々 |]]台形[[は決してありません]] 。

{.reveal(when="blank-0 blank-1 blank-2 blank-3")}あいまいさを避けるために、通常は最も具体的なタイプのみを使用します。

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

次に、左側の灰色のボックスの任意の場所で4つの点を選択します。 _{span.reveal(when="points")}それらすべてを接続して四辺形を形成できます。_

{.reveal(when="points" delay=1000)} 4つの辺それぞれの中点を見つけましょう。中点を接続すると、 [[別の四辺形が]]得られます[[|三角形|長方形]] 。

{.reveal(when="blank-0")}外側の四辺形の頂点を移動して、小さい方の四辺形がどうなるかを観察してください。それはただ_の_四角形ではないように見えますが、常に[[平行四辺形|台形|長方形]] ！

{.reveal(when="blank-1")}しかし、なぜそうなのでしょうか？なぜ、 _どの_四辺形のための結果は常に平行四辺形になってしまうでしょうか？説明を助けるために、元の四辺形の[対角線](gloss:polygon-diagonal)の1つを描く必要があります。

{.reveal(when="diagonal")}対角線は四辺形を[2つの三角形に](target:triangle)分割します。そして今、あなたは内側の四辺形の[2つの側面](target:midsegment)が実際には[[中央セグメントである]]ことを見ることができます[[|中央値|]]これらの三角形の[[垂直二等分線]] 。

{.reveal(when="blank-2")} [前のコース](/course/triangles/properties)では、三角形の[中央のセグメント](gloss:triangle-midsegment)が常にその底面に平行であることを示しました。この場合、これは[これらの両方の辺](target:parallel)が対角線に平行であることを意味します–したがって、それらも[[互いに平行で]]なければなりません[[|同じ長さ|互いに垂直]]です。

{.reveal(when="blank-3" delay=2000)}四辺形の[2番目の対角線](target:other)とまったく同じようにして、反対側の両方のペアが平行であることを示すことができます。そして、これは、内側の四辺形が[平行四辺形で](gloss:parallelogram)あることを証明するために必要なすべてです。 _{span.qed}_

:::

---
> id: parallelograms

### 平行四辺形

平行四辺形には、反対側が平行である以外に、他にも多くの興味深い特性があることがわかります。次の6つの説明のうち、正しいものはどれですか。

::: column.grow

    x-picker.list
      .item.md The opposite sides are [congruent](gloss:congruent).
      .item(data-error="parall-error-1") The internal angles are always less than 90°.
      .item.md(data-error="parall-error-2") The diagonals [bisect](gloss:angle-bisector) the internal angles.
      .item The opposite angles are congruent.
      .item(data-error="parall-error-3") Both diagonals are congruent.
      .item(data-error="parall-error-4") Adjacent sides have the same length
      .item The two diagonals bisect each other in the middle.

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

もちろん、これらの特性を単に「観察」するだけでは十分ではありません。それらが_常に_真であることを確認するには、それらを_証明_する必要があります。

::: tab

#### 反対側と角度_{span.check(when="diagonal blank-0 blank-1")}_

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

{.task}平行四辺形の反対側と角度が常に合同であることを証明してみましょう。

平行四辺形の対角線の1つを描くことから始めます。

{.reveal(when="diagonal")}対角線は、平行四辺形の側面と4つの新しい角度を作成します。 2つの[赤の角度](target:red-angle)と2つの[青の角度](target:blue-angle)は[交互の角度な](gloss:alternate-angles)ので、それぞれ[[合同である]]必要があります[[|隣接|補足]] 。

{.reveal(when="blank-0")}ここで、対角線によって作成された[2つの三角形](target:triangles)を見ると、それらには2つの合同な角度と[1つの合同な辺](target:diagonal)があることがわかります。 [[ASA]]によって[[| AAS | AA]]合同条件。両方の三角形が合同でなければなりません。

{.reveal(when="blank-1")}これは、三角形の他の対応する部分も合同でなければならないことを意味します。特に、 [反対側の](target:sides)両方の[ペア](target:sides)は合同であり[、反対側の角度の](target:angles)両方の[ペア](target:angles)は合同です。 _{span.qed}_

:::

{.reveal(when="blank-1")}逆も真であることがわかります。四辺形の反対側（または角度）の両方のペアが合同である場合、四辺形は平行四辺形でなければなりません。

::: tab

#### 対角線_{span.check(when="diagonal blank-2 blank-3")}_

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

{.task}次に、平行四辺形の2つの対角線が互いに二等分していることを証明します。

対角線によって生成された2つの黄色の三角形について考えてみましょう。

* [緑](target:side1)の[2つの辺](target:side1)は平行四辺形の反対側であるため、合同であることを証明しました。 * [2つの赤の角度](target:anglesR)と[2つの青の角度](target:anglesB)は[[交互の角度]]であるため合同です[[|反対の角度|直角]] 。

{.reveal(when="blank-2")} [[ASA]]によって[[| SSS |]]したがって、 [[AAS]]条件では、両方の黄色の三角形も一致している必要があります。

{.reveal(when="blank-3")}これで、合同な三角形の対応する部分も合同であるという事実を使用して、 [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM)そして[`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) 。言い換えれば、2つの対角線はそれらの中点で交差します。 _{span.qed}_

:::

{.reveal(when="blank-3")}以前と同様に、反対も当てはまります。四辺形の2つの対角線が互いに二等分している場合、四辺形は平行四辺形です。

:::

---
> id: kites

### 凧

::: column.grow

上で[[反対の]] 2つのペアが[[|]]平行四辺形の[[隣接する]]辺は合同です。カイトでは、2組の_隣接する_側面が合同です。

_凧_の名前はその形に由来します。空を飛ぶことができる凧のように見えます。ただし、これまでに見たすべての特別な四辺形の中で、カイトだけが[凹面に](gloss:concave)なることもできます。ダーツまたは矢印のような形状の場合：

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

{.caption}凸凧

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

{.caption}矢のような凹んだ凧

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

すべての凧が[[対称的である]]ことに気づいたかもしれません[[|似てい]]ます。 _{span.reveal(when="blank-0")} [対称軸は](gloss:axis-of-symmetry) [[対角線の1つです|片側|中間セグメント]]_

{.reveal.r(when="blank-1")}対角線はカイトを[2つの合同な三角形に](target:triangle1)分割します。これらは[SSS](gloss:triangle-sss)条件から合同であることがわかります。両方の三角形には[3つの合同な辺](target:sss) （赤、緑、青）があります。 _{button.next-step}継続する_

{.reveal.r(when="next-0")}したがって、 [CPOCT](gloss:cpoct)を使用[する](target:angles)と、 [対応する角度](target:angles)も合同でなければならないことがわかります。 _{button.next-step}継続する_

{.reveal.r(when="next-1")}これは、たとえば、 [対角線](target:d1)が[[二等分]]であることを意味します[[|垂直|]]両端の[2つの角度の](target:vAngle) [[中央値]] 。 _{button.next-step}継続する_

{.reveal.r(when="next-2")}さらに進むことができます。 [もう1つ](target:triangle2)の対角線を描くと、さらに[2つの小さな三角形ができ](target:triangle2)ます。 [SAS](gloss:triangle-sss)条件のため、これらも一致する必要があります[。2つの側面](target:sas)が同じで[、角度が含まれてい](target:sas)ます。 _{button.next-step}継続する_

{.reveal(when="next-3")}これは、 [角度α](target:alpha)も[角度β](target:beta)と同じでなければならないことを意味します。それらは隣接しているため、αとβの両方の[補足角度](gloss:supplementary-angles)は[[90]]°でなければなりません。

{.reveal(when="blank-3")}つまり、凧の対角線は常に[[垂直です|パラレル]] 。

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### 四辺形の面積

前のコースで三角形の面積を計算するときに、それを[[長方形に]]変換するトリックを使用しました[[|平方|五角形]] 。一部の四辺形についてもそれが可能であることがわかります。

::: tab

#### 平行四辺形_{span.check(when="draw-1 blank-1")}_

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

左側で、平行四辺形と同じ面積の長方形を描こうとします。

{.reveal(when="draw-1")}左側の[欠けている三角形](target:triangle-1)が[[完全に同じである]]ことがわかりますか[[|より小さい|]]右の[オーバーラップする三角形](target:triangle-2) [[よりも大きいですか]] ？ _{span.reveal(when="blank-1")}したがって、平行四辺形の面積は_

{.text-center.reveal(when="blank-1")}面積= __{.i.m-green}ベース__ × __{.i.m-yellow}高さ__

{.reveal(when="blank-1" delay=1000)} _平行四辺形の高さを測定するときは注意してください。通常、これは2つの側面の1つと同じではありません。_

:::

::: tab

#### 台形_{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

台形は、1対の[平行な辺を](target:bases)持つ四辺形であることを思い出してください。これらの平行な側面は、台形の__底面__と呼ばれます。

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

前と同じように、この台形と同じ面積の長方形を描こうとします。 _{span.reveal(when="draw-2")}左側と右側の[不足している三角形と追加された三角形が](target:triangles-3)どのように相殺されるかを確認できますか？_

{.reveal(when="draw-2" delay=2000)}の[{.pill.green}](target:t-height)この矩形の[高さ](target:t-height) [[との間の距離]]であります[[|の平均|]]台形の[平行な辺の](target:bases) [[長さ]] 。

{.reveal.r(when="blank-2")}の[{.pill.yellow}](target:t-width)長方形の[幅](target:t-width)は[[中点]]間の距離です[[|]]台形の平行でない2つの辺の[[端点]] 。 _{span.reveal(when="blank-3")}これは台形の__中節__と呼ばれます。_ _{button.next-step.reveal(when="blank-3")}継続する_

{.reveal(when="next-0")} [三角形](gloss:triangle-midsegment)と同じように、台形のmidsegmentは[[平行です|に垂直|]]その2つのベース[[と同じ長さ]] 。中間セグメントの長さは、ベースの長さの平均です。 `(a+c)/2` 。

{.reveal(when="blank-4")}これをすべて組み合わせると、平行な辺[_a_](target:base-2)と[_c_](target:base-1) 、高さ[_hの_](target:t-height)台形の面積の方程式が得られます。

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### 凧_{span.check(when="blank-5")}_

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

このカイトでは、 [2つの対角線](target:diag3)がカイトを囲む大きな[長方形の](target:rect4)幅と高さを形成します。

この長方形の面積は[[2倍です|と同じ|]]カイトの[[3倍]]の面積。 _{span.reveal(when="blank-5")}カイトを構成する[4つの三角形の](target:inside)それぞれが、その外側の[4つのギャップ](target:outside)と同じであることがわかりますか？_

{.reveal(when="blank-5")}これは、対角線を持つカイトの領域が[{.i.pill.green} d1](target:d31)および[{.i.pill.yellow} d2](target:d32)は

{.text-center.reveal(when="blank-5")} _面積_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) 。

:::

::: tab

#### ひし形_{span.check(when="blank-6 blank-7")}_

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

[菱形](gloss:rhombus)は、4つの合同な辺を持つ四辺形です。すべてのひし形は[[平行四辺形]]であることを覚えているかもしれません[[|矩形|スクエア]] –そして[[カイト|六角形|凹面多角形]] 。

{.reveal(when="blank-6 blank-7")}これは、ひし形の領域を見つけるために、平行四辺形の領域の式、または凧の領域の式のいずれかを使用できることを意味します。

{.text-center.reveal(when="blank-6 blank-7")} _面積_ = [{.i.pill.blue}ベース](target:base) × [{.i.pill.red}高さ](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) 。

{.reveal(when="blank-6 blank-7" delay=1000)} _異なるコンテキストでは、菱形の異なる部分（辺、高さ、対角線）が与えられる可能性があり、より便利な方の方程式を選択する必要があります。_

:::
:::

---

## テッセレーション

> section: tessellations
> id: tessellations
> translated: auto

[ポリゴン](gloss:polygon)は自然界のいたるところに現れます。大きな領域を並べて表示する場合は、ギャップやオーバーラップなしでポリゴンを組み合わせることができるため、特に便利です。このようなパターンは[__テッセレーション__](gloss:tessellation)と呼ばれます。

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[六角|三角|二次]]ハニカム

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption}シナロアンミルクスネークスキン

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption}葉の細胞構造

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption}北アイルランドのジャイアンツコーズウェイの玄武岩柱

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption}パイナップルの皮

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption}亀の甲羅

:::

---
> id: tessellations-1

人間は、古代ローマから現在まで、芸術、建築、技術におけるこれらの自然なパターンの多くをコピーしました。以下にいくつかの例を示します。

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[長方形|二次|六角形の]]舗装パターン

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption}イギリスのエデンプロジェクトの温室

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption}アルハンブラのモザイク

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[三角|六角|]]ロンドンの大英博物館の[[長方形の]]屋根

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption}シドニーのセルラーテセレーションパビリオン

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _爬虫類による平面の規則的な分割の研究_ 、MCエッシャー

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

ここでは、通常のポリゴンを使用して独自のテッセレーションを作成できます。サイドバーからキャンバスに新しいシェイプをドラッグするだけです。テッセレーションが適切な形状はどれですか？テッセレーションしない形状はありますか？面白いパターンを作ってみてください！

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn Clear
        button.btn Download
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### 通常のポリゴンからのテッセレーション

いくつかの[通常のポリゴン](gloss:regular-polygon) （ [[正方形の]]ような） [[|五角形]] ）は非常に簡単にテッセレーションしますが、他のもの（ [[五角形など） |三角形|六角形]] ）テッセレーションはまったくないようです。

---
> id: tessellation-regular-1

これは、前に計算することを学んだ[内角の](gloss:internal-angle)サイズに関係しています。テッセレーションのすべての[頂点](gloss:polygon-vertex)で、複数の異なるポリゴンの内角が交わります。これらの角度すべてを合計して[[360]]°にする必要があります。そうしないと、ギャップまたはオーバーラップが発生します。

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption}三角形[[分割|テッセレーションしないでください]] _{span.reveal(when="blank-0")} 6×60°= 360°だからです。_

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption}正方形[[テッセレーション|テッセレーションしないでください]] _{span.reveal(when="blank-1")} 4×90°= 360°だからです。_

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption}ペンタゴン[[はテッセレーションしません|テッセレーション]] _{span.reveal(when="blank-2")} 108°の倍数では360°にならないからです。_

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption}六角形[[テッセレーション|テッセレーションしないでください]] _{span.reveal(when="blank-3")} 3×120°= 360°だからです。_

:::

---
> id: tessellation-regular-3

同様に、五角形のように、7辺以上の正多角形がテッセレーションされないことを確認できます。つまり、テッセレーションする通常のポリゴンは、三角形、正方形、六角形のみです。

もちろん、さまざまな種類の通常のポリゴンをテッセレーションに組み合わせることができます。ただし、それらの内角が最大360度になる場合は、次のようになります。

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagons, squares and triangles#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octagons and squares#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) and triangles#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, hexagons and squares#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### 不規則なポリゴンからのテッセレーション

[不規則なポリゴン](gloss:irregular-polygon)からテッセレーションを作成することもでき[ます。ポリゴンの](gloss:irregular-polygon)回転と配置に注意する必要があります。

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

正三角形だけでなく、 _任意の三角形を_テッセレーションできることがわかります！この図の[頂点](target:vertex)を移動してみてください。

三角形の内角の合計は[[180]]°です。各角度を[[2回]]使用すると[[|かつて|]]テッセレーションのすべての頂点で[[3回]] 、360°を取得します。

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

さらに驚くべきことに_、四辺形_もテッセレーションされます！それらの内角の合計は[[360]]°なので、各角度を[[1回]]使用すると[[|二度|]]テッセレーションのすべての頂点で[[3回]] 、360度取得します。

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

ペンタゴンは少しトリッキーです。 _通常の_五角形[[がテッセレーションしない]]ことはすでに見ました[[|テッセレートしますが]] 、通常でないものはどうですか？

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

五角形のテセレーションの3つの異なる例を次に示します。それらは_規則的_ではありませんが、完全に有効な5辺のポリゴンです。

これまでのところ、数学者が見つけたのは（凸）五角形の15種類のテッセレーションだけです。その最新のものは2015年に発見されました。他に何かあるのか、またはこれらの15だけが存在するのかは誰にもわかりません…

---
> id: escher

### アートのテッセレーション

テッセレーションは、多くのアーティスト、建築家、デザイナー、最も有名なオランダのアーティスト[MCエッシャーの](bio:escher)ためのツールとインスピレーションの両方です。エッシャーの作品には、奇妙で変化する生き物、パターン、風景が含まれています。

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

これらのアートワークは、多くの場合面白くて楽なように見えますが、基本的な数学的原理は以前と同じです：角度、回転、平行移動、ポリゴン。数学が正しくなければ、テッセレーションは機能しません！

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### ペンローズタイル

これまでに見たすべてのテッセレーションには、1つの共通点があります。それは__周期的__です。つまり、繰り返し繰り返される規則的なパターンで構成されています。彼らはすべての方向に永遠に続くことができ、どこでも同じように見えます。

1970年代には、英国の数学者や物理学者[ロジャー・ペンローズは、](bio:penrose) _非周期的な_テッセレーションを発見した-彼らはまだ、すべての方向に無限に続けますが、まったく同じに見える_こと_はありません。これらは__ペンローズタイル__と呼ばれ、作成するのに必要なポリゴンの種類は数種類のみです。

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

ペンローズは面白さを純粋に楽しみのために探っていましたが、実際の材料（アルミニウムなど）の内部構造も同様のパターンに従っていることがわかりました。このパターンはトイレットペーパーにも使用されました。これは、非周期的なパターンを膨らませることなく丸めることができることにメーカーが気付いたためです。

---

## 多面体

> section: polyhedra
> id: polyhedra
> translated: auto

これまでは、フラットな2次元の世界でポリゴンを使って何ができるかを見てきました。 [__多面体__](gloss:polyhedron)は、ポリゴンで構成される3次元オブジェクトです。ここではいくつかの例を示します。

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

多面体に曲面を含めることはできません。たとえば、球や円柱は多面体ではありません。

多面体を構成するポリゴンは、その[__面__](gloss:polyhedron-face)と呼ばれます。二つの面が接続されている線は[__エッジ__](gloss:polyhedron-edge)と呼ばれ、そしてエッジが出会う角部を[__頂点__](gloss:polyhedron-vertex)と呼ばれます。

---
> id: euler

多面体には、さまざまな形やサイズがあります。面が数個しかない単純な立方体やピラミッドから、60個の三角形の面を持つ上の星のような複雑なオブジェクトまで、さまざまです。ただし、 _すべての_多面体には、共通の重要な特性が1つあること_が_わかります。

::: .theorem

__オイラーの多面体式__
すべての多面体で、面の数（ _F_ ）と頂点の数（ _V_ ）の合計は、エッジの数（ _E_ ）の2倍です。言い換えると、

{.text-center}`F + V = E + 2`

:::

たとえば、多面体に12個の面と18個の頂点がある場合、 [[28個の]]エッジが必要であることがわかります。

---
> id: euler-1

この方程式は、有名なスイスの数学者[レナードオイラー](bio:euler)によって発見されました。それが穴を含まない限り、それはどんな多面体にも当てはまります。

上記のように別の多面体を試してみると、オイラーの公式が常に機能することがわかります。 [後のコース](/course/graph-theory/planar-graphs)では、実際にそれを数学的に証明する方法を学びます。

---

## ネットと断面

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## プリズムとピラミッド

> section: prisms-pyramids
> sectionStatus: dev

TODO

---

## シェイプとソリッドのスケーリング

> section: scaling
> sectionStatus: dev

TODO

---

## プラトンの固体

> section: platonic
> id: platonic
> translated: auto

このコースの最初に、すべての辺と角度が同じである[通常のポリゴン](gloss:regular-polygon)を特に「対称的な」ポリゴンとして定義しました。多面体についても同様のことができます。

_通常の多面体では、_すべての[面](gloss:polyhedron-face)はすべて同じ種類の通常のポリゴンであり、同じ数の面がすべての[頂点で](gloss:polyhedron-vertex)交わります。これら2つの特性を持つ多面体は、ギリシャの哲学者[プラトンに](bio:plato)ちなんで名付けられた[__プラトニック立体__](gloss:platonic-solid)と呼ばれます。

それでは、プラトンの固体はどのように見え、それらの数はいくつですか？ 3次元形状を作成するには、すべての頂点で交わる面が少なくとも[[3つ]]必要です。最小の正多角形、つまり正三角形から体系的に始めましょう。

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

3つの[正三角形が](gloss:equilateral-triangle)すべての頂点で交わる多面体を作成すると、左側の形状になります。 __四面体__と呼ばれ、 [[4つの]]面があります。 _{.reveal(when="blank-0")} （「テトラ」はギリシャ語で「4」を意味します）。_

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

4つの正三角形がすべての頂点で交わると、異なるプラトニックソリッドが得られます。 __八面体__と呼ばれ、 [[8つの]]面があります。 _{.reveal(when="blank-0")} （「オクタ」はギリシャ語で「8」を意味します。「オクタゴン」が8面の形状を意味するように、「八面体」は8面のソリッドを意味します。）_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

[[5つの]]三角形がすべての頂点に満たしている場合は、私たちは__二十面体を__取得__し__ます。それは[[20の]]顔を持っています。 _{.reveal(when="blank-1")} （「イコサ」はギリシャ語で「20」を意味します。）_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

[[6つの]]三角形がすべての頂点で交わると、別のことが起こります。 [[テッセレーションを]]取得[[する]]だけです[[|四辺形|別の正二十面体]] 、 _{span.reveal(when="blank-1")}三次元多面体の代わりに。_

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

また、すべての頂点に7つ以上の三角形が存在しても、新しい多面体は生成されません。頂点の周囲に十分なスペースがないため、その数の三角形に適合しません。

:::

これは、三角形で構成される[[3つの]]プラトニックソリッドが見つかったことを意味します。次の正多角形である正方形に移りましょう。

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

[[3つの]]正方形がすべての頂点で交わると、 __立方体になり__ます。サイコロのように、 [[6つの]]面があります。 _{span.reveal(when="blank-1")}この立方体は、ギリシャ語で「六」を意味する「ヘキサ」にちなんで、「 _六面体_ 」とも呼ばれます。_

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

[[4つの]]正方形がすべての頂点で交わると、 [[別のテッセレーションが]]得られます[[|四面体|別のキューブ]] 。 _{span.reveal(when="blank-1")}以前と同様に、5つ以上の正方形も機能しません。_

:::

---
> id: platonic-dodecahedron

次に、通常の五角形を試してみましょう。

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

[[3つの]]五角形がすべての頂点で交わると、12 __面体になり__ます。それは[[12の]]顔を持っています。 _{.reveal(when="blank-1")} （「ドデカ」はギリシャ語で「12」を意味します。）_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

以前と同様に、4つ以上の五角形[[は機能しません|]]十分なスペースがないため[[可能]]です。

:::

---
> id: platonic-hexagons

次に試す正多角形は六角形です。

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

3つの六角形がすべての頂点で交わると、すぐに[[テッセレーションが]]得られます[[|多面体|六面体]] 。 _{span.reveal(when="blank-0")} 3つ以上のスペースがないため、六角形で構成されるプラトニックソリッドはないようです。_

:::

---
> id: platonic-final

同じことが、6辺を超えるすべての通常のポリゴンにも起こります。それらはテッセレーションせず、3次元のポリゴンも得られません。

つまり、プラトニックソリッドは[[5つ]]しかありません。それらすべてを一緒に見てみましょう：

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__四面体__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]]面_
_{span.dual} [[4]]頂点_
_{span.dual} [[6]]エッジ_

::: column.grow.text-center(width=120)

__キューブ__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]]面_
_{span.dual(target="dual1")} [[8]]頂点_
_{span.dual} [[12]]エッジ_

::: column.grow.text-center(width=120)

__八面体__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]]面_
_{span.dual(target="dual1")} [[6]]頂点_
_{span.dual} [[12]]エッジ_

::: column.grow.text-center(width=120)

__正十二面体__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]]面_
_{span.dual(target="dual2")} 20頂点_
_{span.dual} 30エッジ_

::: column.grow.text-center(width=120)

__正二十面体__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]]面_
_{span.dual(target="dual2")} 12頂点_
_{span.dual} 30エッジ_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")}面と頂点の数が[[入れ替わって]]いることに注意してください[[|]] [立方体および八面体](target:dual1) 、ならびに[面体及び二十面体](target:dual2)のための[[同じ]]エッジの数は[[同じまま]]ながら[[|違い]]ます。これらのプラトニックソリッドのペアは[__デュアルソリッド__](gloss:polyhedron-dual)と呼ばれます。

---
> id: platonic-dual

すべての面を頂点で、すべての頂点を面で「置き換える」ことにより、多面体をその双対に変えることができます。これらのアニメーションは、次の方法を示しています。

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

四面体はそれ自体と二重です。同じ数の面と頂点があるので、それらを交換しても何も変わりません。

---
> id: platonic-elements

[プラトン](bio:plato)は、宇宙のすべての問題は、空気、地球、水、火の4つの要素で構成されると信じていました。彼はすべての要素がプラトンの固体の1つに対応し、5番目の要素は全体として宇宙を表すと考えました。今日、多面体ではなく、球形の原子で構成される100以上の異なる要素があることを知っています。

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### アルキメデスの固体

> id: archimedean

プラトンの立体は特に重要な多面体ですが、他にも無数にあります。

たとえば、 [__アルキメデスの立体__](gloss:archimedean-solid)は依然として[正多角形](gloss:regular-polygon)で構成する必要がありますが、複数の異なるタイプを使用できます。彼らは別のギリシャの数学者、 [シラキュースのアルキメデスに](bio:archimedes)ちなんで名付けられ、それらの13があります：

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __切頂四面体__
8面、12頂点、18エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __立方八面体__
14面、12頂点、24エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __切り詰められたキューブ__
14面、24頂点、36エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __切頭八面体__
14面、24頂点、36エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __菱形立方八面体__
26面、24頂点、48エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __切り捨てられた立方八面体__
26面、48頂点、72エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __スナブキューブ__
38面、24頂点、60エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __正十二面体__
32面、30頂点、60エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __切頭十二面体__
32面、60頂点、90エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __切頂二十面体__
32面、60頂点、90エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __菱形二十面体__
62面、60頂点、120エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __切頂正二十面体__
62面、120頂点、180エッジ

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __十二面体__
92面、60頂点、150エッジ

:::

---
> id: polyhedra-applications

### 用途

プラトンは、すべての要素がプラトンの固体で構成されていると信じていたのは間違いでした。しかし、通常の多面体には、自然のどこかに現れるような多くの特別な特性があり、これらの特性を科学や工学にコピーすることができます。

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

多くの__ウイルス__ 、 __細菌__ 、その他の小さな__生物__は、 [二十面体の](gloss:icosahedron)ような形をしています。たとえば、ウイルスは遺伝物質を多くの同一のタンパク質ユニットの殻の中に閉じ込めなければなりません。正二十面体は、いくつかの通常の要素で構成されていますが、ほぼ球のような形をしているため、これを行うには最も効率的な方法です。

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

多くの__分子__は通常の多面体のような形をしています。最も有名な例は`C_60`これは、60の炭素原子が[切り捨てられた20面体の](gloss:truncated-icosahedron)形で配置されたものです。

それは科学者が星間塵を研究したときに1985年に発見されました。彼らは、似たような建物の建設で有名な建築家[バックミンスターフラー](bio:fuller)にちなんで、「バッキーボール」（またはバックミンスターフラーレン）と名付けました。

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

ほとんどの__結晶__は、 [四面体](gloss:tetrahedron) 、 [立方体](gloss:cube) 、 [八面体](gloss:octahedron)からなる規則的なグリッドに原子が配置されています。彼らが割れたり粉々になったりすると、これらの形状をより大きなスケールで見ることができます。

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

四面体と八面体は非常に剛性が高く安定しているため、 __建設__に非常に役立ちます。 _スペースフレーム_は、大きな屋根や重い橋を支えることができる多角形構造です。

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

プラトンの固体はまた、 __サイコロ__を作成するために使用されます。対称性があるため、すべての面で上向きに着地する[可能性](gloss:probability)があります。そのため、サイコロは公平です。

[切頂二十](gloss:truncated-icosahedron)面体はおそらく世界で最も有名な多面体です。それはサッカーの形です。

:::
