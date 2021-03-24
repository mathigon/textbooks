# フラクタル

## はじめに

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

自然を見回すと、次のような複雑な植物に気づいたかもしれません。

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} この __シダ__ は、大きな葉から枝分かれした多くの小さな葉で構成されています。

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} この__ロマネスコブロッコリー__は、より大きな[[コーン|cubes|spheres]]で構成され、より大きなコーンを中心にらせん状になっています。

:::

{.reveal(when="blank-0")} 最初は、これらは非常に複雑な形状のように見えますが、よく見ると、どちらも比較的単純なパターンに従っていることに気付くでしょう：植物のすべての[個々の部分](target:fractal)は、全体とまったく同じに見えます植物、ちょうど小さい。同じパターンが小さなスケールで何度も繰り返されます。 [続行](btn:next)

---

> id: fern

数学では、このプロパティを __自己相似性__ と呼び、それを持つ形状を[__フラクタル__](gloss:fractal)と呼びます。それらはすべての数学で最も美しく、最も奇妙なオブジェクトの一部です。

独自のフラクタルを作成するには、単純なパターンから始めて、小さなスケールで繰り返します。

::: column.grow

最も単純なパターンの1つは、[{.pill.red}ラインセグメント](target:s1)で、[{.pill.blue}もう2つのセグメント](target:s2)が一方の端から分岐しています。このパターンを繰り返すと、これらの青いセグメントの両方に、その端にさらに2つの分岐があります。

[青い点](target:dot)を移動して、すべての枝の長さと角度を変更できます。次に、下の[スライダー](->#fern-slider)を使用して反復回数を増やします。

{.reveal(when="slider-0")} 枝の位置に応じて、上の[シダ](action:set(130,228,197,184))、[ツリー](action:set(160,186,200,186))、または[ネストされた五角形](action:set(113,235,232,238))のように、完全に異なるパターンを作成できます。他に何が見つかりますか？ [続行](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---
> id: triangle

::: column.grow(parent="right")

もう1つの有名なフラクタルは、[__Sierpinski三角形__](gloss:sierpinski-triangle)です。この場合、大きな正三角形から始めて、残りの部分から小さな三角形を繰り返し切り取ります。

{.reveal(when="slider=0")}最終形状が[それ自体の3つの同一のコピー](target:x)で構成され、これらのそれぞれが三角形全体のさらに小さなコピーで構成されていることに注意してください！あなたは永遠に三角形をズームインし続けることができ、パターンと形は常に繰り返され続けます。

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: real

この章の冒頭にある植物は、フラクタルのように_見えます_が、実際に_真の_フラクタルを作成することは明らかに不可能です。同じパターンを何度も何度も繰り返し続けると、最終的には分割できない細胞、分子、または原子に到達することになります。

ただし、数学を使用すると、実際のフラクタルが「持つ」はずの性質について考えることができます。これらは非常に驚くべきことです... [続行](btn:next)

---
> id: dimension

### フラクタル次元

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

まず、フラクタルの次元について考えてみましょう。線の寸法は[[1]]です。 _{span.reveal(when="blank-0")} 2倍に拡大すると、その長さは`2^1 = 2`倍になります。明らかに！_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

正方形の寸法は[[2]]です。 _{span.reveal(when="blank-0")} 2倍に拡大すると、その面積は`2^2 =` [[4]]倍増加します。_

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

キューブのディメンションは[[3]]です。 _{span.reveal(when="blank-0")} 2倍に拡大すると、ボリュームは`2^3 =` [[8]]倍に増加します。_ _{span.reveal(when="blank-1")}画像内の大きな立方体に注目してください小さい方の8つのコピーで構成されています！_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

次に、シェルピンスキーの三角形を見てみましょう。 2倍に拡大すると、「面積」が[[3]]倍に増加していることがわかります。

{.reveal(when="blank-0")} _d_がシェルピンスキー三角形の次元であるとしましょう。上記と同じパターンを使用して、`2^d = 3`を取得します。つまり、_d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")}≈1.585…_

:::

---
> id: dimension-4

しかし、ちょっと待って…何かが整数ではない次元を持つことができるのでしょうか？それは不可能に思えますが、これはフラクタルの奇妙な特性の1つにすぎません。実際、これがフラクタルに彼らの名前を与えるものです：彼らは __分数次元__ を持っています。

すべての反復で、シェルピンスキー三角形の一部の領域を削除します。これを無限に実行できるとしたら、実際には領域が残っていないことになります。そのため、シェルピンスキーの三角形は2次元の領域と1次元の線の間にあるものです。

::: .theorem

多くのフラクタルは _自己相似_ ですが、より適切な定義は、__フラクタル__ が __非整数次元__ を持つ形状であるということです。

:::

[続行](btn:next)

---
> id: snowflake

### コッホスノーフレーク

自然にはフラクタルのような形がたくさんあります。この章の初めにすでにいくつかの植物を見てきました。他の素晴らしい例は雪片と氷の結晶です：

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

独自のフラクタルスノーフレークを作成するには、繰り返し適用できる簡単な手順をもう一度見つける必要があります。

::: column.grow

シェルピンスキーの三角形と同様に、単一の正三角形から始めましょう。ただし、すべてのステップで小さな三角形を_削除_するのではなく、エッジに沿って小さな三角形を_追加_します。すべての三角形の辺の長さは、前のステップの三角形の[[`1/3`|`1/4`|`1/2`]]です。

{.reveal(when="blank-0")}結果の形状は[__コッホスノーフレーク__](gloss:koch-snowflake)と呼ばれ、スウェーデンの数学者[ヘルゲフォンコッホ](bio:koch)にちなんで名付けられました。もう一度、スノーフレークのエッジの[小さなセクション](target:t2)が[大きなセクション](target:t1)とまったく同じに見えることに注意してください。

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---
> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

コッホスノーフレークの1つのエッジセグメントを3倍に拡大すると、その長さは[[の4倍の|triples|doubles]]になります。

{.reveal(when="blank-0")} 上記と同じ次元とスケール係数の関係を使用して、式[[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]を取得します。 _{span.reveal(when="blank-1")}これは、Kochスノーフレークの次元が`§d = log_3(4) ≈ 1.262`であることを意味します。_

:::

---

> id: koch-size

::: tab

#### エリア_{span.check(when="blank-6")}_

Kochスノーフレークの作成は、[再帰シーケンス](gloss:sequence-recursive)のようなものです。最初の形（三角形）がわかっており、（各エッジに三角形を追加することで）1つの項から次の項に移動する方法を知っています。

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]]新しい三角形

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]]新しい三角形

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]]新しい三角形

:::

{.reveal(when="blank-0 blank-1 blank-2")} 最初の反復の後、追加される新しい三角形の数は、すべてのステップで[[4]]倍に増加します。同時に、これらの新しい三角形の面積は、ステップごとに[[9]]の係数で減少します。

{.reveal(when="blank-3 blank-4")} [最初の三角形](->#koch-0)の面積が1であるとしましょう。[次の3つの三角形](->#koch-1)の合計面積は`3 × 1/9 = 1/3`です。次のステップはすべて、共通の比率[[`4/9`|`9/4`|`4/3`]]で[[幾何シリーズ|arithmetic series|quadratic series]]、_{span.reveal(when="blank-5")}を形成します。_

{.reveal(when="blank-6")} 無限の[幾何学的系列](gloss:geometric-series)の合計の式を使用すると、コッホ雪片の総面積は

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`。

::: tab

#### 境界 _{span.check(when="blank-9")}_

::: column.grow

Kochスノーフレークの周長を計算することもできます。すでに見てきたように、周囲の長さはステップごとに[[`4/3`|`3/4`|`1/4`]]の係数で変化します。

{.reveal(when="blank-8")}これは、もう一度、幾何学的な系列があることを意味します。ただし、この場合、[[は収束しません|converges to 0|doesn’t have a first term]]。 _{span.reveal(when="blank-9")}これは、Kochスノーフレークの周囲が実際に__無限に長い__ことを意味します！_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _これが直観に反するように見える場合は、すべてのステップで境界に`§4/3`を乗算し、これを無限に繰り返します。_

:::

---

> id: frozen

::: column.grow

_有限_の領域と_無限_の円周を持つ形状を作成できるとは考えられませんが、これはフラクタルの予期しない多くの特性の1つにすぎません。

独自のフラクタルを作成する他の方法を考え出すことはできますか？ [続行](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption}「凍ったフラクタルに私の魂は渦巻いている…」

:::

---

> id: menger-sponge

### メンガースポンジ

上記の例のように、フラクタルは「フラット」である必要はありません。 3次元に見える最も有名なフラクタルの1つは、1926年に初めてそれを説明した数学者[カールメンガー](bio:menger)にちなんで名付けられた__メンガースポンジ__です。

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

私たちは固体の立方体から始め、その側面に次第に小さな穴をあけます。穴の新しい繰り返しごとに、前の穴の繰り返しの幅が[[`1/3`|`1/2`|`1/4`]]になります。

{.reveal(when="blank-0")} `3×3×3`キューブは27個の小さいキューブで構成されていますが、ここではこれらのいくつかを削除しました。メンガースポンジは、それ自身の[[20]]コピーで構成され、3倍小さくなっています。

{.reveal(when="blank-1")}これで、上記のKochスノーフレークの場合と同じように、メンガースポンジの寸法_d_を計算することができます。この場合、`3^d = 20`または`§d = log_3(20) ≈ 2.727`を取得します。

:::

{.reveal(when="blank-1")}無限に何度も穴を空けることを想像すると、実際のボリュームは残っていません。そのため、立方体は「完全ではない」3次元です。 [続行](btn:next)

---

> id: coastlines

### フラクタル海岸線

これまでに見たすべてのフラクタルの主要な特徴の1つは、いつまでも「ズームイン」して、常に新しいパターンを見つけることができることです。 1920年頃、イギリスの数学者[ルイスフライリチャードソン](bio:richardson)は、同じことが多くの国の境界または海岸線に当てはまることを認識しました。

国の基本的な形状から始めて、ズームインすると、河川の入り江、入り江、河口を追加し、次に個々の崖、岩、小石などを追加します。

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[続行](btn:next)

---

> id: coastlines-1

::: column.grow

これは、国の境界線の長さを計算しようとするときに重大な問題です。どのくらいズームインするか、どの隅と隅を含めるかをどのように決定しますか？

たとえば、イギリスの海岸線の長さを測定する方法の1つは、長い定規を使って、ビーチを一周して、すべての距離を合計することです。

ルーラーが${rulers[index]}{index|0|0,8,1} kmの長さの場合、${count}回使用する必要があるため、合計の海岸線は${count}×${rulers[index]} = ${count * rulers[index]} kmになります。

{.reveal(when="var-0")}どんどん小さくしていく定規を使い続けるだけで、海岸線の長さの結果が少しずつ長くなります。以前のコッホスノーフレークと同じように、イギリスの海岸線は無限に長いようです。これはしばしば __海岸線パラドックス__ と呼ばれます。 [続行](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

数十年後、数学者[Benoit Mandelbrot](bio:mandelbrot)は、IBMで働いていたときに、破棄された図書館の本でリチャードソンの研究に遭遇しました。彼はその重要性と、それがフラクタルと次元に関する最近の研究とどのように関連しているかを認識しました。

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

英国の海岸線は確かにフラクタルを「見ている」が、これまでに見た他のフラクタルとは異なり、_自己相似_ではない。そのサイズを見つけるために、グリッド上にそれを描画し、それが交差するセルの数を数えることができます。

{.r.reveal(when="slider-0")}最初は、__{.pill.yellow} 88__ 個の交差するセルがあります。海岸線を2倍に拡大すると、交差するセルは __{.pill.yellow} 197__ であり、2倍以上になります。 [続行](btn:next)

{.r.reveal(when="next-0")}海岸線のサイズは`§197/88`倍に増加しました。以前と同様に、これは海岸線の次元が

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

これをより大きなグリッドで繰り返すと、英国の海岸線の寸法は実際には約1.21であることがわかります。マンデルブロは、このフラクタル次元が形状の __ラフネス__ の尺度でもあることに気づきました。彼は、数学と科学の他の多くの分野で重要なアプリケーションを見つけた新しい概念です。

---

> id: nature

### 自然と技術におけるより多くのフラクタル

本当のフラクタルは自然界には決して現れませんが、フラクタルのように_ほとんど_見えるオブジェクトがたくさんあります。すでに植物、雪片、海岸線を見てきましたが、さらにいくつかの例を次に示します。

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption}中央アジアの山脈

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption}インドのガンジス川デルタ

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption}稲妻

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption}網膜の血管

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption}アメリカのグランドキャニオン

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption}雲

:::

これらのオブジェクトはすべて完全にランダムに見える場合がありますが、フラクタルと同様に、オブジェクトの形成方法を決定する基本的なパターンがあります。数学は形状をよりよく理解するのに役立ち、フラクタルは医学、生物学、地質学、気象学などの分野での用途があります。 [続行](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption}コンピュータ生成のフラクタル地形

::: column.grow

また、フラクタルを使用して、自然のリアルな「コピー」を作成することもできます。たとえば、ビデオゲームやコンピューター生成の映画で使用される風景やテクスチャなどです。この画像の水、山、雲はすべてフラクタルの助けを借りてコンピューターで作成されています！

また、このプロセスを逆にしてデジタル画像を圧縮し、ファイルサイズを小さくすることもできます。最初のアルゴリズムは1980年代にマイケルバーンズリーとアランスローンによって開発され、現在も新しいアルゴリズムが研究されています。

:::

---

## シェルピンスキートライアングル

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

前の章で見たフラクタルの1つは、ポーランドの数学者[Wac {awSierpiński](bio:sierpinski)にちなんで名付けられた[__Sierpinski三角形__](gloss:sierpinski-triangle)でした。これは、1つの大きな正三角形から始めて、中心から小さな三角形を繰り返しカットすることで作成できます。

{.r.reveal(when="slider-0")}ワクワフ・シェルピスキはこの三角形の性質について考えた最初の数学者でしたが、アートワーク、パターン、モザイクの何世紀も前に登場しました。

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

ローマのさまざまな教会の床タイルの例をいくつか示します。

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

結局のところ、シェルピンスキーの三角形は、数学の他のさまざまな領域に現れており、それを生成するにはさまざまな方法があります。この章では、それらのいくつかについて説明します。 [続行](btn:next)

---

> id: pascal
> goals: select

### パスカルの三角形

[__パスカルの三角形__](gloss:pascals-triangle)の章にあるシェルピンスキーの三角形をすでに覚えているかもしれません。これは、すべての数値が上記の2つの数値の合計である数値ピラミッドです。下の三角形の_偶数_個の数字をすべてタップしてハイライト表示し、パターンに気づいたかどうかを確認します。

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---

> id: pascal-1

パスカルの三角形はいつまでも下向きに続くことができ、シェルピンスキーパターンは次第に大きくなる三角形で続きます。行16から始まる、さらに大きな三角形の始まりを既に確認できます。

隣接する2つのセルが2で割り切れる場合、下のセルの合計も2で割り切れる必要があります。そのため、色付きの三角形（または単一のセル）しか取得できません。もちろん、_2以外の数値_で割り切れるすべてのセルに色を付けることもできます。それらの場合に何が起こると思いますか？ [続行](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

ここでは、パスカルの三角形の最初の128行の小さなバージョンを見ることができます。 ${n}{n|2|2,40,1}で割り切れるすべてのセルをハイライトしました–何に気付きましたか？

{.reveal(when="var-0")}数字ごとに、シェルピンスキーの三角形に似た別の三角形のパターン。 [[素数|triangle number|Fibonacci number]]を選択した場合、パターンは特に規則的です。 _{span.reveal(when="blank-0")}数値に_多くの異なる_素因数がある場合、パターンはよりランダムに見えます。_

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### カオスゲーム

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

ここでは、正三角形の3つの頂点を確認できます。灰色の領域のどこかをタップして、4番目のポイントを作成します。

{.r.reveal(when="point")}簡単なゲームで遊んでみましょう。三角形の頂点の1つをランダムに選択し、点と頂点の間に線分を描画して、そのセグメントの[{.pill.red}中点](target:p1)を見つけます。 [続行](btn:next)

{.r.reveal(when="next-0")}次に、プロセスを繰り返します。別のランダムな頂点を選択し、最後の点からセグメントを描画して、[{.pill.green}中点](target:p2)を見つけます。選択した三角形の頂点の色に基づいて、これらの新しい点に色を付けることに注意してください。 [続行](btn:next)

{.reveal(when="next-1")}これまでのところ、驚くべきことは何も起こっていません。しかし、同じプロセスを何度も繰り返すのを見てください。

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} 1000ステップを追加_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

このプロセスは、__カオスゲーム__と呼ばれます。最初はいくつかの点があるかもしれませんが、同じ手順を何度も繰り返すと、ドットの分布はシェルピンスキーの三角形のように見え始めます。

他にも多くのバージョンがあります。たとえば、正方形や五角形から始めたり、同じ頂点を続けて2度選択できないなどのルールを追加したり、比率で次の点を選択したりできます。セグメントに沿って`§1/2`以外。これらのケースのいくつかでは、ドットのランダムな分布を取得しますが、他のケースでは、さらに多くのフラクタルを明らかにします：

    include components/chaos-game

{.reveal(when="s1 s2 play")} [__黄金比__](gloss:golden-ratio)に基づいて、[シェルピンスキーカーペット](action:carpet())またはこの[五角形の雪片](action:snowflake())を発見しましたか？

---

> id: cellular
> goals: sierpinski

### セルラーオートマトン

__セルオートマトン__ は、多くの個別のセルで構成されるグリッドです。すべてのセルは異なる「状態」（たとえば、異なる色）にすることができ、すべてのセルの状態は周囲のセルによって決定されます。

この例では、すべてのセルを黒または白にすることができます。まず、黒い正方形が1つだけ含まれる1つの行から始めます。次のすべての行では、各セルの色はすぐ上の3つのセルによって決定されます。下の8つの可能なオプションをタップして色を反転させてください。シェルピンスキーの三角形に似たパターンを作成する一連のルールを見つけることができますか？

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} 8つのオプションそれぞれに2つの選択肢があります。つまり、合計で`2^8 =` [[256]]の可能なルールがあることになります。 [ルール126](action:setRule('01111110'))のようないくつかは、シェルピンスキーの三角形のように見えます。 [ルール30](action:setRule('01111000'))のような他のものは完全に無秩序に見えます。それは1983年に[Stephen Wolfram](bio:wolfram)によって発見され、コンピュータはそれらを使用して乱数を生成することさえできます！

---

> id: cellular-1

::: column.grow

セルオートマトンは、フラクタルのように、非常に単純なルールで非常に複雑なパターンを作成する方法を示しています。自然界の多くのプロセスも単純なルールに従いますが、信じられないほど複雑なシステムを生成します。

場合によっては、これにより、セルラーオートマトンのように見えるパターン（このカタツムリの殻の色など）が表示されることがあります。

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption}毒のカタツムリである円錐繊維

:::

---

> id: tetrahedra

### シェルピンスキーテトラヘドラ

シェルピンスキーの三角形には多くの変種があり、他のフラクタルにも同様の特性と作成プロセスがあります。上で見た_シェルピンスキーカーペット_のように、2次元に見えるものもあります。他の例は次の例のように3次元に見えます。

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption}シェルピンスキー四面体

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption}シェルピンスキーピラミッド

:::

---

## マンデルブロセット

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

前の章で見たフラクタルはすべて、__反復__ のプロセスを使用して作成されました。特定のパターンから始めて、それを何度も繰り返します。

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

これは、前に見た数学の別の概念に似ています。[再帰シーケンス](gloss:sequence-recursive)では、特定の数値から始めて、同じ再帰式を繰り返し適用して、次の数値を取得しますシーケンス。

例として再帰的な式`§x_n = x_(n-1)^2`を取り上げ、その項を数直線上にプロットします。 `pill(x_0,"yellow","x0")`の値を変更できます。

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

開始値`x_0`に応じて、結果のシーケンスの動作が大きく異なることに注意してください。

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

`x_0 > 1`の場合、シーケンス[[は分岐します|converges]]：_{span.reveal(when="blank-0")}それは無限にまで成長し続けます。_

::: column.frame.f-blue.text-center(width=212)

`x_0`が–1と1の間にある場合、シーケンス[[は|diverges]]に収束します。

::: column.frame.f-blue.text-center(width=212)

`x_0 < -1`の場合、シーケンス[[は|converges]]を分岐します。

:::

---

> id: iteration-2

これまでのところ、新しいことは何も学んでいません。ただし、約1世紀前に、数学者は、実際の数直線だけでなく、[__複素数__](gloss:complex-numbers)を使用した場合にこれらのシーケンスがどうなるかを探求し始めました。彼らの発見は、すべての数学において最も驚くべき、そして美しい結果でした。

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### ジュリアセット

以前と同じシーケンス`§x_n = x_(n-1)^2`を使用してみましょう。ただし、複雑な平面上です。 `pill(x_0,"yellow","x0")`の位置を移動して、次の条件がどうなるかを確認できます。シーケンスが収束するように見える場合は、平面上の対応する点を_{span.pill.blue}青_で色付けしましょう。

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")}ご覧のように、`pill(x_0,"yellow","x0")`が単位円| outside the unit square|above the _x_-axis]] _{span.reveal(when="blank-0")}（原点を中心とする半径1の円）内に[[ある限り、シーケンスは収束します。_

---

> id: julia-1

では、もう少し難しくしましょう。以前の数値を単に2乗するのではなく、定数_{.pill.red} c_を毎回追加します（これは任意の複素数にすることができます）。つまり、`§x_n = x_(n-1)^2 + c`です。私たちはまだ収束の輪を手に入れると思いますか？他にどんな形が見えると思いますか？ [続行](btn:next)

---

> id: julia-2

この図では、`pill(x_0,"yellow","x0")`の位置と`pill(c,"red","c")`の値を移動できます。

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} [`c = 0`](action:animate(0,0))の場合はどうなるかはすでにわかっています。これは上記の例と同じです。 `x_0`が単位円内にある限り、シーケンスの収束。

{div(slot="legend")} _c_の値を変更するとすぐに、素晴らしいことが起こります。円は非常に複雑なフラクタル形状に変形します。

{div(slot="legend")} [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5))になると、形状はらせん状に配置された無限に多くの小さな要素に分割されます。

::: div(slot="legend")

場合によっては、シーケンスが_1つのポイント_に収束せず、三角形のように複数のポイントのサイクルに達することがあります。これらのサイクルは、__軌道__ と呼ばれます。

青色で表示されている点は、対応するシーケンスが収束しているか、軌道を持っていることを意味します（__境界__ であると言います）。白のままになっている点は、対応するシーケンス __発散__ を意味します。境界がなく、最終的には無限に膨らみます。

:::

{div(slot="legend")}他に何が見つかりますか？ [`c = 0.4 + 0.21i`](action:animate(0.4,0.21))または[`c = 0.38 – 0.25i`](action:animate(0.38,-0.25))のパターンを確認してください。また、_c_にはいくつかの値があり、_すべての_シーケンスが発散するため、複雑な平野全体は白のままです。

:::

---

> id: julia-3

数字で色分けして形成されるさまざまな形状は、[__ジュリアセット__](gloss:julia-set)と呼ばれます。 1918年頃、フランスの2人の数学者[Gaston Julia](bio:julia)と[Pierre Fatou](bio:fatou)によって独立して発見されました。

当時、ジュリアのセットが実際にどのように見えるかを視覚化するのに役立つコンピューターはありませんでした。ジュリアやファトウのような数学者は数学的にそれらについて推論することができましたが、彼らは今まで自分たちがどのように見えるかもしれないラフな手描きのスケッチを見ただけでした。

今日、この問題は発生していません。下の画像はすべて異なるジュリアセットです。異なる色は、その時点でのシーケンスが発散する_速さ_を示します。

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[続行](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### マンデルブロセット

さまざまなジュリアセットを作成するときに、すべてのシーケンスが発散する_c_の値がいくつかあり、複雑な平面全体が白のままであることに気付いたかもしれません。ジュリアとファトウの数十年後、新世代の数学者がこれらの領域がどのように見えるかをマッピングしようとしました。

前の例では、`pill(c,"red","c")`の固定値を選択し、次に`pill(x_0,"yellow","x0")`の位置を変更して平面に色を付けました。次に、`pill(x_0 = 0,"yellow","x0")`の値を修正して、代わりに`pill(c,"red","c")`の値を変更します。

もう一度、複雑な平面の上にペイントして、シーケンスが制限されたままの領域を明らかにします。どんな形が出ると思いますか？

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

このフラクタルは[__マンデルブロセット__](gloss:mandelbrot-set)と呼ばれ、90度回転すると、頭、体、2本の腕を持つ人のように見えます。それは1978年に初めて数学者ロバート・ブルックスとピーター・マテルスキーによる研究論文で定義され、描かれました：

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

数年後、[Benoit Mandelbrot](bio:mandelbrot)は、IBMの強力なコンピュータを使用して、フラクタルをより詳細に視覚化しました。最初のプリントアウトは、期待したものとは異なって見えました–プリンターで作業している技術者がその端の周りの「あいまいさ」を、フラクタルの明確な特徴ではなく、ダスト粒子またはプリンターのエラーが原因であると想定してクリーンアップしていることに気付きました。 ！ [続行](btn:next)

---

> id: mandel-zoom

すべてのフラクタルと同様に、マンデルブロ集合を永久に「拡大」して、あらゆるスケールで新しいパターンを見つけることができます。ここでは、__タツノオトシゴの谷__ と呼ばれるマンデルブロセットの一部を拡大できます。黒点は、シーケンスが制限されているマンデルブロ集合の_内部_です。色付きの点は、シーケンスが分岐するマンデルブロ集合の_外側_であり、異なる色は、無限に成長する_速さ_を示します。

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

このスライダーは27の個別の画像で構成され、最大14兆を超えるズームレベル、つまり`2^54`です。要するに、最新のラップトップでレンダリングするのに約45分かかりました。マンデルブロ集合は、単一の単純な方程式`§x_n = x_(n-1)^2 + c`で作成できますが、それは無限に複雑で驚くほど美しいです。

---

> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

マンデルブロ集合内で[{.pill.red} c](target:c)の値を移動すると、奇妙なプロパティに気付くでしょう：

* マンデルブロ集合の[本体](target:bulb0)内のすべてのシーケンスは、_{span.reveal(when="blank-0")}を単一点に収束させます。_
* {.reveal(when="blank-0")} 上部の[大きな電球](target:bulb1) 内のシーケンスは、[[3]] ポイントで構成される軌道 _{span.reveal(when="blank-1")}に到達します。_
* {.reveal(when="blank-2")} [この小さい電球](target:bulb2) のシーケンスは、軌道の長さが [[5]] です。

:::

{.reveal(when="blank-3")} すべての球根には異なるサイズの軌道があり、小さい球根は軌道のポイントがますます増えています。これらの軌道のサイズは、[カオス理論](/course/chaos) の重要な概念である __ロジスティックマップ__ と密接に関連しています。

---

> id: mandel-outro

::: column.grow

ベルノアットマンデルブロは、彼の人生のほとんどをフラクタルの研究と、_ラフネス_と_自己相似性_の数学に捧げました。彼の作品は、物理学、気象学、神経学、経済学、地質学、工学、コンピューターサイエンス、および他の多くの分野で応用されていました。

1985年、マンデルブロセットは_Scientific American_誌の表紙に登場し、それ以来、世界で最も有名な数学的形状の1つになりました。 Tシャツやミュージックビデオ、スクリーンセーバーとして見つけることができ、多くの人気のある本や映画で使用されています。

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## 空間充填曲線

> section: space-filling
> sectionStatus: dev

{.todo}もうすぐ！

