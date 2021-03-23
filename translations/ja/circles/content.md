# 円と円周率

## 前書き

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

人間が存在する限り、私たちは空を見つめ、星、惑星、月の動きを使って地球上の生命を説明しようとしました。

古代ギリシャの天文学者は、すべての天体が__軌道__と呼ばれる通常の経路上を移動することを発見した最初の人でした。彼らはこれらの軌道は常に円形であると信じていました。結局のところ、円はすべての形の「最も完全な」ものです。つまり、あらゆる方向に対称であり、宇宙の基本的な秩序にふさわしい選択です。

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption}地球は_プトレマイオス宇宙の_中心にあり_ます_ 。

:::

---
> id: radius
> goals: compass

[__円の__](gloss:circle)すべての点は、中心からの距離が同じです。これは、 [コンパス](gloss:compass)を使用して描画できることを意味します。

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")}知っておくべき円に関連する3つの重要な測定があります。

* {.reveal(when="compass" delay="1000")}の[{.pill.red.b}半径](target:r)は、円の中心からその外縁までの距離です。
* {.reveal(when="compass" delay="4000")}の[{.pill.blue.b}直径](target:d)は、円の2つの向かい合う点の間の距離です。中央を通り、長さは[[2倍|ハーフ|]]半径[[と同じ]]です。
* {.reveal(when="blank-0")}の[{.pill.green.b}円周](target:c) （または周長）は、円の周りの距離です。

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

円の重要な特性の1つは、すべての円が[類似していること](gloss:similar)です。単純な[翻訳](gloss:translation)と[膨張](gloss:dilation)を使用してすべての円を一致させる方法を示すことで、それを証明できます。

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

類似のポリゴンの場合、対応する辺間の比率は常に一定であることを覚えているかもしれません。円についても同様の動作が行われます。 [円周](gloss:circle-circumference)と[直径の](gloss:circle-diameter)比率は_すべての円で_同じです。常に3.14159です。– [__Pi__](gloss:pi)と呼ばれる神秘的な数で、「p」のギリシャ文字の_π_としてよく書かれます。 Piには、特定のパターンなしで永遠に続く無限に多くの10進数があります。

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

これが直径1のホイールです。円周を「展開」すると、長さが正確にわかることがわかります[[`pi`|`2 * pi`| 3]] ：

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

直径_dの_円の場合、円周は`C = π × d` 。同様に、 [半径](gloss:circle-radius) _rの_円の場合、円周は

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] 。

---
> id: nature

円は完全に対称であり、ポリゴンの角のような「弱点」はありません。これが自然界のどこにでも見つかる理由の1つです。

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption}フラワーズ

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption}惑星

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption}木

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption}フルーツ

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption}シャボン玉

:::

{.r}そして、他にも非常に多くの例があります。虹から水の波紋までです。他に何か考えられますか？ [継続する](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

また、円は特定の円周で最大の面積を持つ形状であることがわかります。たとえば、長さが100 \ mのロープがある場合、（長方形や三角形などの他の形状ではなく）円を形成する場合、それを使用して最大のスペースを囲むことができます。

自然界では、水滴や気泡などのオブジェクトは、円形または球形になり、表面積を減らすことで_エネルギー_を_節約_でき_ます_ 。

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _円周_ = __{.m-green} 100__ 、 _面積_ = __${area}__

:::

---
> id: area
> goals: slider

### 円の面積

しかし、実際にはどのようにして円の面積を計算しますか？ [四角形の領域](/course/polyhedra/quadrilaterals)を[見つける](/course/polyhedra/quadrilaterals)ために使用したのと同じ手法を試してみましょう。形状を複数の異なる部分にカットしてから、それらをすでにわかっている別の形状（たとえば、長方形または三角形）に再配置します。

唯一の違いは、円は湾曲しているため、いくつかの近似を使用する必要があることです。

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

ここでは、円が分割されています。 ${toWord(n1)}厚切りポテト。スライダーを動かして、くさびを一列に並べます。

{.reveal(when="slider")}くさびの数を${n1}{n1|6|6,30,2} 、この形状はますます[[長方形の]]ように見え始め[[ます|サークル|スクエア]] 。

{.reveal(when="blank-0")}長方形の高さは[[半径]]と等しい[[|周|]]円の[[直径]] 。 _{span.reveal(when="blank-1")}長方形の幅は[[円周の半分に]]等しい[[|円周|]]円[[の半径]]の[[2倍]] 。_ _{span.reveal(when="blank-2")} （くさびの半分が下向きで、半分が上向きであることに注意してください。）_

{.reveal(when="blank-2" delay=1000)}したがって、長方形の総面積はおよそ`A = π r^2` 。

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

ここでは、円が分割されています。 ${toWord(n)}リング。以前と同様に、スライダーを動かしてリングを「ほどく」ことができます。

{.reveal(when="slider")}リングの数を増やすと${n2}{n2|4|2,12,1} 、この形はますます[[三角形の]]ように見え始めます[[|矩形|台形]] 。

{.reveal(when="blank-0")}三角形の高さは[[半径に]]等しい[[|直径|円周]] 。 _{span.reveal(when="blank-1")}三角形の底辺は[[円周に]]等しい[[|]]円[[の直径]]の[[2倍]] 。_ _{span.reveal(when="blank-2")}したがって、三角形の総面積はおよそ_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` 。

:::

---
> id: area-2

無限に多くのリングまたはウェッジを使用できる場合、上記の近似は完璧です-そして、どちらも円の面積に対して同じ式を与えます：

{.text-center.r}`A = π r^2` 。 [継続する](btn:next)

---
> id: pi-approximations

### 円周率の計算

上で見たように、 `π = 3.1415926…`は単純な整数ではなく、その10進数は繰り返しパターンなしで永遠に続きます。このプロパティを持つ[__数値は__](gloss:irrational-numbers) 、 [__無理数__](gloss:irrational-numbers)と呼ばれ[__ます__](gloss:irrational-numbers) 。これは、 `π`単純な分数として表現することはできません`a/b` 。

これはまた、Piの_すべて_の桁を書き留めることができないことを意味します。結局のところ、無限に多くあります。古代ギリシャと中国の数学者は、円を正多角形で近似することにより、パイの最初の4桁を計算しました。辺を追加すると、ポリゴンが[[どんどん]]見え始め[[ます。 |もっと少なく|まさに]]サークルのように：

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665年、 [アイザックニュートン](bio:newton)は15桁の計算に成功しました。今日では、強力なコンピューターを使用してPiの値をはるかに高い精度で計算できます。

現在の記録は31.4兆桁です。これらすべての数字を含む印刷された本は、約400 \ kmの厚さになります。これが、 [国際宇宙ステーションが](gloss:iss)地球を周回する高さです。

もちろん、パイの桁数を覚えておく必要はありません。実際、割合`22/7 = 3.142…`素晴らしい近似です。

:::

---
> id: pi-sequence

Piを計算する1つの方法は、無限の数列を使用することです。 1676年に[Gottfried Wilhelm Leibniz](bio:leibniz)によって発見された1つの例を次に示します。

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")}このシリーズの項を計算するにつれて、常に同じパターンに従って、結果はPiにますます近づきます。

---
> id: pi-colours
> goals: hover

::: column.grow

多くの数学者は、Piにはさらに奇妙な特性があると信じています。それは__通常の数__であるということです。つまり、まるで自然が10面のサイコロを無限に転がしてPiの値を決定したかのように、0〜9の数字は完全にランダムに表示されます。

ここにPiの最初の100桁が表示されます。いくつかのセルの上に移動して、数字がどのように分布しているかを確認します。

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

Piが正常である場合は、 _任意_の数字列を考えることができ、数字のどこかに表示されます。ここでは、Piの最初の100万桁を検索できます。これには誕生日が含まれていますか？

::: .box.f-red.pi-box

#### 100万桁のPi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

ハリーポッターのような本全体を非常に長い数字の文字列（a = 01、b = 02など）に変換することもできます。 Piが正常である場合、この文字列は数字のどこかに表示されますが、それを見つけるのに十分な数字を計算するには数百万年かかります。

Piは理解しやすいですが、科学と数学では基本的に重要です。それがPiが私たちの文化で異常に人気になった理由かもしれません（少なくとも、他の数学のトピックと比較して）：

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

毎年_Piの日_があり、3月14日になる。 `pi ≈ 3.14` 、または7月22日`pi ≈ 22/7` 。

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## 度とラジアン

> section: radians
> id: degrees
> translated: auto

これまでのジオメトリでは、角度を[度](gloss:degrees)単位で常に測定してきました。あ__{.m-red}全円__回転は[[360]]°、 __{.m-green}半円__は[[180]]°、 __{.m-yellow}四分円__は[[90]]°、などです。

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r} 360という数値は、2、3、4、5、6、8、9、10、12、15など、他の多くの数値で割り切れるので非常に便利です。これは、1つの円の多くの分数も整数であることを意味します。しかし、360という数字がどこから来るのか疑問に思ったことはありませんか？ [継続する](btn:next)

---
> id: babylon

::: column.grow

偶然にも、360度は、今日でも使用されている数学の最も古い概念の1つです。それらは5000年以上前の古代バビロンで開発されました！

当時、数学の最も重要な用途の1つは天文学でした。 _太陽_は、農家が作物を栽培するときに知っておく必要がある四季を決定します。同様に、 _月_は潮を決定します。これは漁師にとって重要でした。人々は星を研究して未来を予測したり、神とコミュニケーションしたりしました。

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption}計算用のバビロニアタブレット`sqrt(2)`

:::

---
> id: constellations
> goals: rotate

天文学者は、夜の特定の時間に見える星座が毎日ほんの少しずつシフトしていることに気づきました-およそ360日後、彼らは彼らの出発点に戻った。そして、これが彼らが円を360度に分割した理由かもしれません。

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

もちろん、実際には1年間に365日（正確には365.242199）ありますが、バビロニアの数学者は単純な日時計を使って作業しており、この近似は完全に適切でした。

また、既存の60進数システムとうまく機能しました（ `6 xx 60 = 360` ）。このシステムは、他のほとんどの単位が[10](gloss:base-10)を[基数](gloss:base-10)として測定される場合でも（例：10年間で10年、または1世紀で100年）、1分間に60秒、1時間に60分がある理由です。

::: column.grow

私たちの多くにとって、度単位で角度を測定することは2番目の性質です。360°のビデオがあり、スケートボーダーは540を引っ張ることができ、決定を変更する誰かが180°回転する可能性があります。

しかし、数学的な観点からは、360の選択は完全に任意です。火星に住んでいた場合、円は670°で、木星での1年は10,475日でさえあります。

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540マクフリップ、540°回転

:::

---
> id: radians

### ラジアン

円をいくつかのセグメント（360度など）に分割するのではなく、数学者は[__単位円__](gloss:unit-circle) （半径1の円）の[円周](gloss:circle-circumference)を使用して角度を測定することを好みます。

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

あ[全周](action:setState(0))に円周があります _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ 。

{.reveal(when="eqn-0")}のために[半円回転](action:setState(1))、円周に沿った対応する距離は _{x-equation.small(solution="π" keys="+ × π" numeric)}_ 。

{.reveal(when="eqn-1")}のために[四分円回転](action:setState(2))、円周に沿った距離は _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ 。

{.reveal(when="eqn-2")}このように角度を測定する方法は[__ラジアン__](gloss:radians)と呼ばれます（これを「半径単位」と覚えておくことができます）。

:::

---
> id: radians-conversion

度単位のすべての角度は、ラジアン単位で同等のサイズになります。 2つの間の変換は非常に簡単です。メートルとキロメートル、または摂氏と華氏のような他の単位間で変換できるのと同じです。

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} _2π_ラジアン__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

ラジアン値は、 _πの_倍数として、または単一の10進数として書き込むことができます。度とラジアンで表した同等の角度サイズの表に記入できますか？

| __{.m-red}度__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green}ラジアン__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### 走行距離

ラジアンは、単位円の円周に沿った「移動距離」と考えることができます。これは、円形のパス上を移動するオブジェクトを操作するときに特に役立ちます。

::: column.grow

たとえば、 [国際宇宙ステーション](gloss:iss)は1.5時間に1回地球を周回しています。これは、その__回転速度__が[[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]]時間あたりのラジアン。

{.reveal(when="blank-0")} [単位円](gloss:unit-circle)では、回転の長さは_実際の_速度と同じです。これは、円周の長さがラジアンでの1回転と同じであるためです（両方とも`2pi` ）。

{.reveal(when="blank-0" delay=1000)} ISSの軌道の半径は6800 \ kmです。つまり、ISSの_実際の_速度は[[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} =時速28483 km。_

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

この例では、ラジアンが度よりもはるかに便利な単位であることがわかりますか？回転速度がわかったら、実際の速度を取得するには、半径を掛けるだけです。

これは別の例です：あなたの車には半径0.25 \ mの車輪があります。 20 \ m / sの速度で運転している場合、車のホイールは[[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]]ラジアン/秒_{span.reveal(when="blank-0")} （または`80/(2pi) = 13` 1秒あたりの回転数）。_

---
> id: radians-trig

### 三角法

ほとんどの単純なジオメトリの問題では、度とラジアンは完全に交換可能です。どちらを選択するか、質問によって回答の単位を指定できる場合があります。ただし、より高度な[三角法](gloss:trigonometry)または[微積分](gloss:calculus)を学ぶと、そのラジアンは度よりもはるかに便利です。

::: column.grow

ほとんどの計算機には、度とラジアンを切り替えるための[特別なボタンがあります](->.button.mode) 。 [__sin__](gloss:sin) 、 [__cos__](gloss:cos) 、 __tanの__ような三角関数は角度を入力として取り、それらの逆関数__arcsin__ 、 __arccos__および__arctanは__角度を出力として返します。現在の計算機の設定により、これらの角度に使用される単位が決まります。

この計算機を使って計算してみてください

{.text-center} sin（30°）= [[0.5]] _{span.eqn-gap}_ cos（1°）= [[0.999]]
sin（30 rad）= [[-0.988]] _{span.eqn-gap}_ cos（1 rad）= [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

ラジアンを使用すると、正弦関数を使用するときに特に興味深い利点が1つあります。もし`θ`が非常に小さい角度（20°または0.3 rad未満）である場合`sin(θ) ≈ θ` 。例えば、

{.text-center}罪（ ${x}{x|0.1|0,0.5,0.05} ） `≈`${sin(x)} …

{.reveal(when="var-0")}これは__小角近似__と呼ばれ、三角関数を含む特定の方程式を大幅に簡略化できます。これについては、今後さらに詳しく学びます。

---

## 接線、和音、円弧

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

前のセクションでは、中心、半径、直径、円周など、円のいくつかの異なる部分に付けられた名前を学びました。ただし、円に関連する多くの幾何学的要素があり、より複雑な問題を解決する必要があります。

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r}あ[{.red}割線](target:secant)は、2点で円と交差する線です。 [続行](btn:next)
* {.r.reveal(when="next-0")}あ[{.green}弦](target:chord)は、端点が円の円周上にある線分です。 [続行](btn:next)
* {.r.reveal(when="next-1")}あ[{.blue}接線](target:tangent)は、正確に1点で円に接する線です。これは__接点__と呼ばれます。 [続行](btn:next)
* {.r.reveal(when="next-2")}あ[{.yellow}円弧](target:arc)は円周の一部です。 [続行](btn:next)
* {.r.reveal(when="next-3")}あ[{.teal}セクター](target:sector)は、 _円弧_と_2つの半径_で囲まれた円の内部の一部です。 [続行](btn:next)
* {.r.reveal(when="next-4")}最後に、 [{.purple}セグメント](target:segment)は、 _円弧_と_弦_で囲まれた円の内部の一部です。 [継続する](btn:next)

:::

---
> id: circle-parts-1

このセクションでは、これらすべての要素間の関係を調べ、それらの特性についての定理を証明します。今のところすべての定義を覚えておく必要はありません。いつでも[用語集を](->.footer-link[data-modal=glossarym])使用できます。

---

### 接線

{.todo}近日公開！

---

### 和音

{.todo}近日公開！

---
> id: earth-arc

### 弧とセクター

::: column.grow

古代ギリシャのほとんどの科学者は、地球が球であることに同意しました。たくさんの証拠がありました：船が海の地平線の後ろに姿を消したことから、夜間の星の円運動まで。

残念ながら、紀元前200年頃まで数学者[エラトステネス](bio:eratosthenes)が基本的な形状を使用して地球の半径を測定する独創的な方法を発見するまで、誰も地球の_大きさを_正確に知りませんでした。必要なのは、円弧と円弧のセクターに関するもう少しの知識です。

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

図からわかるように、 [{.red}弧](target:arc)は[[円周の]]一部です[[|直径|]]円の[[接線]] 、および[{.yellow}セクター](target:sector)は[[インテリアの]]一部です[[|半径|]]円の[[周囲]] 。

::: .reveal(when="blank-0 blank-1")

2つの点_A_と_Bの_間の弧は、 `arc(AB)` 。この定義は少しあいまいです。 [{.purple}](target:major) _A_と_B_を結ぶ[2番目の円弧](target:major)ですが、円の周りを逆方向に進みます。

2つの円弧の小さい方が__マイナーアーク__と呼ばれ、大きい方が__大きな弧を__呼ばれています。点_A_と_B_が互いに正反対の場合、両方の弧は同じ長さで[[半円に]]なります[[|直径|円周]] 。

:::

:::

---
> id: arcs-1

::: column.grow

弧の長さまたは扇形の面積を見つけるには、円の中心での対応する角度を知る必要があります。これは、 [{.blue}中心角](target:angle)

円弧、扇形、および角度がすべて、完全な円の_同じ割合を占める_ことに注意してください。たとえば、 [{.blue}中心角](target:angle)は [90°](action:set90Deg()) 、それは[[四分の一]]を占めます[[|半分|の3分]]の1 [{.teal}全周](target:fangle) 。

::: .reveal(when="blank-0")

これは、 [{.red}弧の長さ](target:arc)も`1/4`の[{.purple}](target:circ)円の[全周](target:circ) 、そして[{.yellow}セクターの面積](target:sector)は`1/4`の[{.orange}](target:area)サークル[全体](target:area) 。

この関係を方程式で表すことができます。

{.text-center}`"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

これで、これらの方程式を整理して、興味のある変数を見つけることができます。たとえば、

::: column(width=320 parent="padded-thin")

| [弧長](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [セクターエリア](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

ここで、 _r_は円の半径、 _c_は中心角のサイズです。



---
> id: arcs-rad

中心角が[度](gloss:degrees)ではなく[ラジアン](gloss:radians)で測定される場合、同じ方程式を使用できますが、360°を[[`2 π`|`1/2 π`|`π`]] ：

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [弧長](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [セクターエリア](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

方程式がはるかに単純になり、 _π_はどこでも相殺されることに注意してください。これは、覚えているかもしれませんが[、ラジアン](/course/circles/radians#radians)の[定義](/course/circles/radians#radians)は基本的に半径1の円弧の長さだからです。

次に、円弧と扇形を使用して地球の円周を計算する方法を見てみましょう。 [継続する](btn:next)

:::

---
> id: eratosthenes

古代エジプトでは、 _スウェネ_市はナイル川沿いにありました。スウェネは不思議な性質の井戸で有名でした。太陽の光が井戸の底に届くのは毎年6月21日の正午、 _夏至の_日です。その正確な時間に、井戸の底は照らされましたが、側面は照らされていませんでした。これは、太陽が井戸の真上に立っていたことを意味します。

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption}古代エジプト人は、歩くのに必要な歩数を数えることで長距離を測定しました。

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption}一部の情報筋は、「エラトステネスの泉」はナイル川の_エレファンティネ島_にあったと述べています。

:::

数学者[エラトステネス](bio:eratosthenes)は、スウェネの北約800 kmにある_アレクサンドリア_に住んでおり、大図書館の館長を務めていました。アレクサンドリアの市内中心部には、ピラミッド型の頂部を備えた背の高い細長い記念碑であるオベリスクが立っていました。

エラトステネスは、夏至の日の正午に、オベリスクが影を投げたことに気づきました。これは、太陽が真上に_ない_ことを意味します。彼はこれが地球の曲率によるものであると推定し、それが私たちの惑星の円周を計算するために使用できることに気づきました。

---
> id: eratosthenes-1

::: column.grow

{.r}ここでは、スウェネの井戸とアレクサンドリアのオベリスクを見ることができます。太陽光線は直接井戸に落ちますが、斜めにオベリスクに当たり、影を落とします。 [継続する](btn:next)

::: .reveal(when="next-0")

エラトステネスは、 [{.teal}](target:angle1)影の[角度](target:angle1)は7.2°でした。これは同じです[{.purple}の中心角](target:angle2) [{.red}](target:arc)アレクサンドリアからSwenetに[アーク](target:arc) 、彼らは[[、交流]]であるため、 [[|垂直|対応する]]角度。

:::

::: .reveal(when="blank-0")

これで、上記で導出した弧長の式を使用できます。

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

これを並べ替えると、地球の周囲が

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

最後に、円の円周は`C = 2 pi r`なので、地球の半径は

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` 。

:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)

        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")

        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

エラトステネスの測定は、古代における最も重要な実験の1つでした。彼の地球の大きさの推定値は驚くほど正確でした。特に、非常に基本的な測定ツールしか使用できなかったと考えた場合はなおさらです。

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

もちろん、彼の元の結果をキロメートルなどの現代の単位に変換することは難しい場合があります。古代ギリシャでは、距離は_スタジア_ （約160 m）で測定されましたが、普遍的な基準はありませんでした。すべての地域で若干異なるバージョンがあり、どのエラトステネスが使用されたかはわかりません。

次の数世紀、科学者は地球の半径を計算するために他の方法を使用しようとしました-時々非常に異なって、不正確な結果で。

クリストファーコロンブスがポルトガルから西に航海するきっかけとなったのは、こうした誤った測定の1つでした。彼は地球が実際よりもはるかに小さいと仮定し、インドに到達することを望んだ。実際、彼はアメリカ大陸の間に別の大陸に到着しました。

:::

---

### セグメント

{.todo}近日公開！

---

## サークル定理

> section: circle-theorems
> sectionStatus: dev

TODO

---

## 循環ポリゴン

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## 球、円錐、円柱

> section: spheres-cones-cylinders
> id: solids
> translated: auto

前のセクションでは、平面上の円の特性を調査しました。しかし、私たちの世界は実際には3次元なので、円に基づくいくつかの3Dソリッドを見てみましょう。

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} [__円柱__](gloss:cylinder)は、曲面で結合された2つの合同で平行な円で構成されます。

::: column(width=220)

    x-solid(size=220)

{.text-center} [__円錐に__](gloss:cone)は、単一の点（頂点と呼ばれる）に結合された円形のベースがあります。

::: column(width=220)

    x-solid(size=220 static)

{.text-center} [__球__](gloss:sphere)の表面上のすべての点は、その中心からの距離が同じです。

:::

球の定義が[[円の]]定義とほとんど同じであることに注意してください[[|半径|立方体]] – 3次元を除いて！

---
> id: gasometer

### シリンダー

::: column.grow

ここでは、ドイツのオーバーハウゼンにある円筒形の_ガスメーター_を見ることができます。近くの工場や発電所で燃料として使用されていた天然ガスを貯蔵するために使用されていました。 Gasometerの高さは120mで、底面と天井は半径35mの2つの大きな円です。エンジニアが回答したいと思う2つの重要な質問があります。

*どれだけの天然ガスを貯蔵できますか？これは[[ボリュームです|範囲|]]円柱の[[直径]] 。 * {.reveal(when="blank-0")}ガスメーターを構築するにはどのくらいの鋼が必要ですか？これは（およそ） [[表面積です|周|]]円柱の[[対角線]] 。

{.reveal(when="blank-0 blank-1")}これらの両方の結果の数式を見つけてみましょう！

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption}ガスメーターオーバーハウゼン

:::

---
> id: cylinder-prism

#### 円柱の体積

シリンダーの上部と下部には、2つの合同円、と呼ばれる__塩基__です。の__{.m-blue}__円柱の__高さ_h___は、これらの底面間の垂直距離であり、 __{.m-red}__円柱の__半径_r___は、単に円形の底面の半径です。

を使用してシリンダーを近似できます${n}{n|5|3,20,1}両面[__プリズム__](gloss:prism) 。辺の数が増えると、プリズムはますます円柱のように見え始めます。

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

円柱は厳密にはプリズムではありませんが、多くの特性を共有しています。どちらの場合も、ボリュームの面積を掛けることでボリュームを見つけることができます__{.m-red}__彼らの__拠点__ __{.m-blue}身長__これは、半径を持つ円柱が_{.b.m-red} r_と高さ_{.b.m-blue} hに_はボリュームがあります

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")}半径と高さは同じ単位を使用する必要があることに注意してください。たとえば、 _r_と_hの_両方がcmの場合、体積は次のようになります。 [[`"cm"^3`|`"cm"^2`| cm]] 。

---
> id: oblique-cylinder
> goals: slide

::: column.grow

上記の例では、円柱の2つの底面は常に_互いに直接上にありました_ 。これは__右円柱__と呼ばれます。底面が互いに直接上にない場合は、 __斜めの円柱になり__ます。底面はまだ平行ですが、側面は90度ではない角度で「傾いている」ように見えます。

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption}イタリアの_ピサの斜塔_は、かなり斜めの円柱ではありません。

:::

---
> id: cavalieri
> goals: slide

斜めの円柱の体積は、同じ半径と高さの正しい円柱の体積とまったく同じになります。これは、イタリアの数学者[Bonaventura Cavalieri](bio:cavalieri)にちなんで名付けられた[__Cavalieriの原理__](gloss:cavalieri)によるものです。2つの固体がすべての高さで同じ断面積を持つ場合、それらは同じ体積になります。

シリンダーを多数の薄いディスクにスライスすることを想像してください。次に、これらのディスクを水平にスライドさせて、斜めの円柱を作成します。個々のディスクのボリュームは、斜めにしても変化しないため、合計ボリュームも一定のままです。

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### 円柱の表面積

::: column.grow

シリンダーの表面積を見つけるには、それをフラット[ネット](gloss:net)に「展開」する必要があります。たとえば、食品の缶のラベルをはがすことで、これを自分で試すことができます。

2つの[[円]]があります[[|球|正方形]] 。1つは円柱の上部にあり、もう1つは円柱の下部にあります。湾曲した側は実際には大きな[[長方形です|平方|楕円形]] 。

* {.reveal(when="blank-0 blank-1")} 2つの円にはそれぞれ領域があります_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ 。
* {.reveal(when="eqn-0")}長方形の高さは_{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")}長方形の幅は[[円周]]と同じです[[|直径|]]円の[[接線]] ：_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ 。

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

これは、半径_r_ 、高さ_hの_円柱の総表面積が、

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ 。

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

シリンダーは、ソーダ缶からトイレットペーパーや水道管まで、世界中のどこにでもあります。他に例はありますか？

上の_Gasometerの_半径は35m、高さは120mでした。これで、その体積は約[[461,000±1000である]]と計算できます`"m"^3`そしてその表面積は約[[34,080±100です]] `"m"^2` 。

---
> id: cone

### コーン

::: column.grow

[__円錐__](gloss:cone)は、円形の3次元ソリッドです。 __{.m-red}ベース__ 。図に示されているように、その側面は「上向きに先細り」になっており、 __{.m-green}頂点__ 。

の__{.m-red}__円錐の__半径は、__円形基部の半径であり、そして__{.m-blue}__コーンの__高さ__は、ベースから頂点までの垂直距離です。

以前に出会った他の形と同じように、コーンは私たちの周りのいたるところにあります。アイスクリームコーン、トラフィックコーン、特定の屋根、さらにはクリスマスツリーです。他に何が考えられますか？

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### コーンのボリューム

::: column.grow

以前は、プリズムを使用して近似することで円柱の体積を見つけました。同様に、 [__ピラミッド__](gloss:pyramid)を使用して近似することにより、円錐の体積を求めることができます。

ここであなたは見ることができます${n}{n|5|3,18,1}両面ピラミッド。辺の数が増えるにつれて、ピラミッドはますます円錐のように見え始めます。実際、円錐は_無限に多くの_側面を_持つ_ピラミッドと考えることができます。

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

これは、ボリュームの方程式も使用できることも意味します。 `V = 1/3 "base" × "height"` 。円錐の底面は円であるため、半径_r_ 、高さ_hの_円錐の体積は

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

円柱の体積の方程式との類似性に注意してください。同じ底面と高さで円錐の_周り_に円筒を描くことを想像してください–これは__外接円筒__と呼ばれます。今、コーンはちょうど[[3分の1]]を占めます[[|ハーフ|]]シリンダーの体積の[[1/4]]

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey}注：近似としての無限に多くの小さな側面は少し「不正確」であると考えるかもしれません。数学者は長い時間をかけて、円錐の体積を計算するより簡単な方法を見つけようとしました。 1900年に、偉大な数学者の[デイビッドヒルベルト](bio:hilbert)は、数学における23の最も重要な未解決の問題の1 [つにさえ](bio:hilbert)それを挙げました！今日、私たちはそれが実際には不可能であることを知っています。

---
> id: oblique-cone
> goals: slide

::: column.grow

円柱のように、円錐は「まっすぐ」である必要はありません。頂点がベースの中心の真上にある場合は、 __右円錐になり__ます。それ以外の場合は、 __斜め円錐__と呼びます。

ここでも、Cavalieriの原理を使用して、ベースと高さが同じである限り、すべての斜めの円錐が同じ体積であることを示すことができます。

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### コーンの表面積

::: column.grow

円錐の表面積を見つけるのは少し難しいです。以前と同様に、コーンをそのネットに解明することができます。スライダーを動かして、何が起こるかを確認します。この場合、1つの円と1つの[[円のセクターが表示されます。 |円セグメント|円弧]] 。

{.reveal(when="blank-0")}次に、これら両方のコンポーネントの面積を合計する必要があります。の__{.m-yellow}ベース__は半径_rの_円なので、面積は

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ 。

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

の半径__{.m-green}セクター__は、円錐の縁から頂点までの距離と同じです。これは[{.pill.green.b}](target:s)コーン[_の_傾斜高さ_s。_](target:s)通常とは異なります[{.pill.blue.b}高さ_h_](target:h) 。 [ピタゴラス](gloss:pythagoras-theorem)を使用して傾斜高さを見つけることができます：

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

の[{.pill.red}](target:arc)扇形の[弧の長さ](target:arc)は[[円周]]と同じです[[|直径|の弧]] [{.pill.yellow}ベース](target:base) ： _{span.reveal(when="blank-0")}`2 π r` 。これで、前のセクションで導出した[式](gloss:circle-sector)を使用してセクターの面積を見つけることができます。_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

:::

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

最後に、面積を合計するだけです__{.m-yellow}ベース__との面積__{.m-green}セクター__ 、全体の表面を取得するには、円錐形です：

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### 球

::: column.grow

[__球__](gloss:sphere)は、指定された距離から同じ距離にあるすべての点で構成される3次元の立体です__{.m-green}センター_C。___この距離は__{.m-red}__球の__半径_r___ 。

球は「3次元の[円](gloss:circle) 」と考えることができます。まるで円のように、球も__{.m-blue}直径_d___ 、 [[2倍|]]半径の長さの[[半分]]だけでなく、和音と割線。

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} [前のセクション](/course/circles/tangets-chords-arcs#eratosthenes-1)では、ギリシャの数学者[エラトステネス](bio:eratosthenes)が極の影を使用して地球の半径を計算する方法を学びました。これは6,371 kmでした。それでは、地球の総体積と表面積を見つけてみましょう。 [継続する](btn:next)

---
> id: sphere-volume

#### 球のボリューム

球の体積を見つけるには、もう一度Cavalieriの原理を使用する必要があります。まず、半球（赤道に沿って半分に切り取った球）から始めましょう。また、半球と同じ半径と高さの円柱が必要ですが、中央に逆円錐が切り取られています。

下のスライダーを動かすと、ベースの上の特定の高さでこれらの両方の形状の断面を確認できます。

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")

      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)

{.reveal(when="slider-0")}距離を置いて、これらの両方のソリッドの断面積を見つけてみましょう[{.pill.blue}](target:h)ベースの上の[高さ_h_](target:h) 。

::: column.grow

{.reveal(when="slider-0")}半球の断面は常に[[円です|リング|シリンダー]] 。

{.reveal(when="blank-0")}の[{.pill.red}](target:x)断面の[半径_x_](target:x)はaの一部です[{.pill.yellow}直角三角形な](target:tri)ので、 [ピタゴラス](gloss:pythagoras-theorem)を使用できます：

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` 。

今、断面の面積は

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

切り取られたシリンダーの断面は常に[[リングです|サークル|コーン]] 。

::: .reveal(when="blank-1")

穴の半径は_h_です。大きな円の面積から穴の面積を引くと、リングの面積がわかります。

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

どちらのソリッドも、すべてのレベルで同じ断面積を持っているようです。カバリエリの原理により、両方の固体も同じ[[体積で]]なければなりません[[|表面積|円周]] ！ _{span.reveal(when="blank-0")} [円柱](gloss:cylinder-volume)の体積と[円錐の](gloss:cone-volume)体積を引くことで、半球の体積を求めることができます。_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

球は[[2つの]]半球で構成され、 _{span.reveal(when="blank-0")}つまり、そのボリュームは_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` 。

---
> id: earth-volume
> goals: numbers

::: column.grow

地球は（おおよそ）半径6,371 \ kmの球体です。したがって、そのボリュームは

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")}地球の平均密度は`5510 "kg/m"^3` 。これは、その総質量が

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")}これは6の後に24のゼロが続きます！

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

円柱、円錐、球の体積の方程式を比較すると、ジオメトリで最も満足できる関係の1つに気付くでしょう。ベースの直径と同じ高さの円柱があるとします。これで、円錐と球の両方をその内部に完全に収めることができます。

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center}この円錐には半径があります`r`そして高さ`2r` 。そのボリュームは_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center}この球には半径があります`r` 。そのボリュームは_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center}この円柱には半径があります`r`そして高さ`2r` 。そのボリュームは_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")}我々は[[、最大追加し]]た場合、どのように注意してください[[|差し引く|]]円錐と球の体積を[[掛ける]]と、円柱の体積が正確に得られます。

---
> id: sphere-maps
> goals: move projection

#### 球の表面積

球の表面積の式を見つけることは非常に困難です。 1つの理由は、以前のコーンやシリンダーの場合のように、球の表面を開いて「平らにする」ことができないためです。

これは、マップを作成しようとするときの特定の問題です。地球の曲面は3次元ですが、印刷された地図はすべて平面で2次元でなければなりません。これは、地理学者が特定の領域を伸ばしたりつぶしたりして、ごまかす必要があることを意味します。

ここでは、 __プロジェクション__と呼ばれるいくつかの異なるタイプのマップを見ることができます。赤い正方形を動かしてみて、この領域_が_地球上で_実際に_どのよう_に_見えるかを見てください。

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Cylindrical
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide") Mollweide
      .box.no-padding.sphere-maps
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the three-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

球の表面積を見つけるには、別の形状（たとえば、たくさんの面を持つ多面体）を使用して、球をもう一度近似します。面の数が増えると、多面体はますます球体のように見え始めます。

{.todo}近日公開：球の表面積の証明






---

## 円錐断面

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

円は、 [コーンを](gloss:cone)通る「スライス」を使用して作成できる4つの異なる形状の1つです。これは、トーチのライトコーンを使用して説明できます。

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p.no-voice: strong Circle
          include svg/circle.svg
        .hide
          p.no-voice: strong Ellipse
          include svg/ellipse.svg
        .hide
          p.no-voice: strong Parabola
          include svg/parabola.svg
        .hide
          p.no-voice: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

トーチを垂直に下に向けると、 [[円]]が見えます[[|楕円|]]光の[[楕円]] 。 _{span.reveal(when="blank-0")}円錐を傾けると、 [__楕円になり__](gloss:ellipse)ます。さらに傾けると、 [__放物線__](gloss:parabola)または[__双曲線になり__](gloss:hyperbola)ます。_

---
> id: conics-2

::: column.grow

これらの4つの形状をまとめて、 [__円錐セクション__](gloss:conic-section)と呼び[__ます__](gloss:conic-section) 。それらはすべて非常に異なって見えますが、密接に関連しています。実際、それらはすべて同じ方程式を使用して生成できます！

円錐曲線は、古代ギリシャの数学者[ペルガのアポロニウス](bio:apollonius)によって最初に研究されました。

後のコースでは、放物線と双曲線についてさらに学習します。とりあえず、楕円を詳しく見てみましょう。

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### 楕円

楕円は、単に「細長い円」のように見えます。実際、 _2つの中心_を持つ円と考えることもできます。これらは__フォーカルポイント__と呼ばれます。円上のすべての点が中心からの距離が同じであるように、楕円上のすべての点は、2つの焦点まで_の距離の合計が_同じです。

2つの固定点に接続された長い文字列がある場合、文字列の最大距離をトレースすることにより、完全な楕円を描くことができます。

{.todo}近日提供予定：楕円のインタラクティブな描画

---
> id: ellipses-2
> goals: v0 v1 v2 v3

楕円を描く方法については、他にも多くの物理的表現があります。

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### 惑星軌道

::: column.grow

このコースの最初から、古代ギリシャの天文学者は地球が宇宙の中心にあり、太陽、月、惑星が地球を周回する軌道を回っていると信じていたことを覚えているかもしれません。

残念ながら、空の天体観測はこれを完全にサポートしませんでした。たとえば、太陽は1年のある部分では大きく、他の部分では小さく見えました。円では、すべての点が[[同じで]]なければなりません[[|増加|]]その中心からの距離[[の減少]] 。

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption}ニカイアのギリシャの天文学者ヒッパルコス

:::

---
> id: epicycles
> goals: play

これを修正するために、天文学者は太陽系のモデルに__エピサイクル__を追加しました。惑星は地球の周りの大きな円を移動すると同時に、小さな円を回転します。これは非常に複雑ですが、1000年以上の間、私たちの宇宙で最も広く受け入れられているモデルでした。

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption}この惑星は${n}{n|6|2,12,1}大きな円（ __ディファーレント__ ）を中心とした1回の回転中の、小さな円（ __エピサイクル__ ）を中心とした回転。

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} __ジオセントリックモデル__におけるエピサイクルの16世紀の図。ギリシャ語の「planetes」は「放浪者」を意味します。

:::

---
> id: kepler
> goals: play

::: column.grow

時間が経つにつれ、人々は地球が太陽を周回する多くの惑星の1つであることに気づきました（太陽中心__モデル__ ）が、天文学者[ヨハネスケプラー](bio:kepler)が惑星が実際に_楕円軌道上を_移動することを発見したのは1609年のことです。

太陽は、これらの楕円の2つの焦点の1つにあります。惑星は、太陽に近づくにつれて加速し、遠ざかるにつれて減速します。

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

数十年後、 [アイザックニュートン](bio:newton)は新しく開発された[__重力の__](gloss:gravity)法則を使用して、ケプラーの観察を証明することができました。ニュートンは、2つの磁石間の引力と同様に、宇宙の任意の2つの質量間に力があることを認識しました。

重力はすべてが地面に落ちる原因であり、重力は惑星が太陽の周りを移動する原因でもあります。太陽が惑星に直接落下するのを防ぐのは、惑星が動く素晴らしい速度だけです。

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

ニュートンの法則を使用して、重力のもとで移動するときにオブジェクトがたどる経路を導き出すことができます。惑星は楕円上を移動しますが、彗星のような他のオブジェクトは[放物線](gloss:parabola)または[双曲線の](gloss:hyperbola)経路を移動することができます。それらは太陽の近くを飛行してから、向きを変えて宇宙に向けて発射し、二度と戻ってきません。

伝説によると、落下するリンゴはニュートンに重力について考えるように促しました。彼は史上最も影響力のある科学者の1人であり、彼のアイデアは、300年近くの間、私たちの世界の理解を形作りました– 1905年にアルバートアインシュタインが相対性理論を発見するまで。

:::
