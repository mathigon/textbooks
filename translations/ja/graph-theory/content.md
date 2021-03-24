#グラフとネットワーク

## 前書き

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

私たちは毎日、無数の接続とネットワークに囲まれています。道路と線路、電話回線、インターネット、電子回路、さらには分子結合です。友人と家族の間にさえ_ソーシャルネットワーク_があります。他に例はありますか？

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption}道路および鉄道ネットワーク

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption}コンピュータチップ

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption}サプライチェーン

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption}友情

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption}ニューラルコネクション

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption}インターネット

:::

---
> id: intro

::: column.grow

数学では、これらの例はすべて[__グラフ__](gloss:graph)として表すことができ[__ます__](gloss:graph) （関数の_グラフ_と混同しないでください）。グラフは[[頂点]]と呼ばれる特定の_点で_構成されています[[|サークル|交差点]] 、その一部は[[エッジで]]接続されてい[[ます|境界|ペア]] 。

__グラフ理論__は、グラフとその特性の研究です。数学の中でも最も刺激的で視覚的な領域の1つであり、重要なアプリケーションが無数にあります。

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

円と線を使って簡単なグラフのレイアウトを描くことができます。頂点の位置とエッジの長さは関係ありません。 _どのように_頂点が相互に_接続さ_れ_ているか_だけが重要です。エッジは互いに交差することもでき、直線である必要はありません。

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption}一部のグラフでは、エッジが一方向にしか進みません。これらは[__有向グラフ__](gloss:directed-graph)と呼ばれ[__ます__](gloss:directed-graph) 。

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption}一部のグラフは、エッジで相互に接続されていない複数の頂点グループで構成されています。これらのグラフは__切断されています__ 。

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption}他のグラフには、同じ頂点のペア間の複数のエッジ、またはそれら自体に接続されている頂点（ループ）が含まれている場合があります。

:::

---
> id: intro-2

一部の頂点とエッジを削除することにより、既存のグラフから新しいグラフを作成できます。結果は[__サブグラフ__](gloss:subgraph)と呼ばれます。ここでは、グラフのいくつかの例を見ることができます。色付きのエッジと頂点がサブグラフの可能性を示しています。

::: column(width=212 parent="padded-thin")

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

:::

---
> id: intro-3

グラフの[__次数__](gloss:graph-order)は、グラフの頂点の数であると言います。頂点の[__次数__](gloss:graph-degree)は、その頂点で交わるエッジの数です。

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center}注文： [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center}注文： [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center}学位： [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center}学位： [[6]]

:::

---
> id: intro-4

頂点の単一のループで構成されるグラフは、 [__サイクル__](gloss:graph-cycle)と呼ばれます。すべてのサイクル[[に同じ数のエッジと頂点があります|頂点よりも多くのエッジ|頂点より少ないエッジ]] 。

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")}これらの新しい定義を備えた、グラフの魅力的な特性とアプリケーションのいくつかを見てみましょう。

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## ケーニヒスベルクの橋

::: column.grow

グラフとネットワークについて考える最初の数学者の一人は、 [レオンハルトオイラー](bio:euler)でした。オイラーは、バルト海の近くのケーニヒスベルクの町に関する古い問題に興味をそそられました。

プレゲル川は、ケーニヒスベルクを4つの部分に分け、7つの橋でつながっています。すべての橋を渡る街を正確に1度だけ歩くことはできますか。 （どこでも開始および終了できますが、必ずしも同じ場所である必要はありません。）

これらの地図を描いて、有効なルートを見つけてください。

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Clear
        button.btn.right Skip

---
> id: bridges-1

ケーニヒスベルクの場合、有効なルートを見つけるのは不可能のようですが、他のいくつかの都市は機能しています。オイラーは、グラフ理論を使用して、多くの可能性を試さなくても、どの都市にも適用できる簡単なルールを見つけることができました。

::: column.grow

まず、都市マップをエッジと頂点を持つグラフに変換する必要があります。すべての島または土地の領域は[[頂点で]]表され[[ます|縁|エリア]]と2つのリージョンを接続するすべてのブリッジは、対応する[[エッジで]]表され[[ます|バーテックス|ストリート]] 。

{.reveal(when="blank-0 blank-1")}現在、「すべての橋を1度だけ通過しながら都市をツアーする」という問題は、「すべてのエッジを1回だけトレースしながら1つの連続したストロークでグラフを描く」という問題になっています。

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

紙の上で、いくつかの異なるグラフを考え出してから、単一の連続したストロークで描画できるグラフを考えてみてください。

---
> id: bridges-3
> goals: size prime eo

以前の都市マップと同じように、一部のグラフは可能であるが、それ以外は不可能であることがわかります。理由を理解するために、すべての頂点にその[次数を](gloss:graph-degree)ラベル付けしましょう。次に、さまざまな方法で頂点に色を付け、パターンを明らかにすることができます。

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Value
        div(value="size") Size
        div(value="prime") Prime Numbers
        div(value="eo") Even and Odd
      .box
        p.no-voice(style="margin: 0"): strong These graphs are possible:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong These graphs are not possible:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

可能なグラフと不可能なグラフのこれらの数を比較すると、 [[「奇数」の頂点が2つ以下の]]場合にグラフを描画できるようです。 [[| 「偶数」の頂点しかありません|次数が4より大きい頂点はありません|奇数の頂点があります|次数3の頂点はありません]] 。この状態は、グラフ内の単一の頂点だけを見ると説明できます。

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Here you can see a single, magnified vertex in a graph.
      .legend(slot="legend") If we draw the graph, we will eventually have an edge leading towards this vertex, and then another one leading away. This makes two edges meeting at the vertex.
      .legend(slot="legend") Maybe the vertex is a crossing rather than a corner. In that case there will be another edge leading towards the vertex, and another edge leading away. Now we have four edges.
      .legend(slot="legend") And in some graphs, there may even be a third pair of edges leading towards and away from the vertex. Now there are six edges.
      .legend(slot="legend") Notice that, either way, there always is an even number of edges meeting at the vertex.
      .legend(slot="legend") The only two exceptions are the vertices where the path starts, and where it ends – these two may have an odd number of edges. If the start and end point are the same, all vertices in the graph are even.

---
> id: bridges-5

::: column.grow(parent="right")

スクロールしてケーニヒスベルクの地図に戻ると、橋の数が奇数である島が3つ以上あることがわかります。したがって、すべての橋を1度だけ通過するルートは確かに不可能です。これが、レナードオイラーが発見したものです。

オイラー氏の発見は、実際にはそれほど有用ではないように見えるかもしれませんが、グラフは、2つの場所間の方向を見つけるなど、他の多くの地理的問題の基礎となっています。これらのアプリケーションについては、後で詳しく説明します。

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## 握手とデート

::: column.grow

友達と一緒に素敵な誕生日パーティーに招待されました。あなた自身とホストを含めて、 ${hnd}{hnd|5|3,15,1}人々が存在します。

夕方、ゲストが出発する準備ができると、誰もが他の人と握手します。握手は全部でいくつありますか？

グラフを使用してハンドシェイクを表すことができます。すべての人が[[頂点です|エッジ]] 、そしてすべてのハンドシェイクは[[エッジです|頂点]] 。

{.reveal(when='blank-0 blank-1')}これで、グラフのエッジの数を数えることが簡単になりました。そこに${hnd}人、あります${hnd*(hnd-1)/2}握手。

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

大きなグラフのすべてのエッジを数えるのではなく、 _任意の_数のゲストの結果を示す単純な式を見つけることもできます。

それぞれの${n}{n|5|2,8,1}パーティーの人々は握手${n-1}その他。それは${n} × ${n-1} = ${n×(n-1)}合計で握手。 _n_人の場合、ハンドシェイクの数は[[`n×(n–1)`|`n×(n+1)`|`n^2`]] 。

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

残念ながら、この回答は正しくありません。方法に注意してください[一番上の行の最初の2つのエントリ](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2))実際には同じですが、反転します。

実際、すべてのハンドシェイクを[[2回]]カウント[[しました|かつて| 3回]] 、 _{span.reveal(when="blank-0")}関係する2人それぞれに1回ずつ。これは、正しい数のハンドシェイクが${n}{n|5|2,25,1}ゲストは`(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` 。_

---
> id: handshakes-3

すべての頂点が他のすべての頂点に接続されているため、ハンドシェイクグラフは特別です。このプロパティを持つグラフは__完全グラフ__と呼ばれ__ます__ 。 4つの頂点を持つ完全なグラフは、しばしば次のように省略されます。 `K_4` 、5つの頂点を持つ完全なグラフは`K_5` 、 等々。

完全なグラフが`n`頂点、 `K_n` 、持っている`(n × (n-1))/2`エッジ。

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

別の日に、あなたはのスピードデートイベントに招待されています${m}{m|5|2,8,1}男の子と${f}{f|4|2,8,1}女の子。小さなテーブルがたくさんあり、すべての男の子が各女の子と5分を過ごします。個別の「日付」は合計でいくつありますか？

::: column.grow

この場合、対応するグラフは、頂点の2つの別個のセットで構成されます。すべての頂点は[[反対側の]]すべての頂点に接続されています[[|独自の]]セットが、 [[それ自身]]の頂点のどれも[[|反対の]]セット。このレイアウトの__グラフ__は、 __2部グラフ__と呼ばれ__ます__ 。

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")}サイズ_x_と_yの_ 2つのセットを持つ2部グラフは、 `K_"x,y"` 。それは持っています[[`x×y`|`x+y`|`2x–y`]]エッジ、 _{span.reveal(when="blank-2")}つまり、上記の例では、 ${m} × ${f} = ${m×f}日付。_

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## 平面グラフ

::: column.grow

ここに、グラフ理論に関連する別のパズルがあります。

小さな村には3つの家と3つのユーティリティ工場があり、水、電気、ガスを生産しています。各コースを各ユーティリティプラントに接続する必要がありますが、村のレイアウトにより、異なるパイプやケーブルを横断することはできません。

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

各家屋を下の各公益事業会社に接続するようにしてください。回線が交差することはありません。

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

以前のケーニヒスベルク橋のように、この問題も不可能であることをすぐに発見します。一部のグラフは、エッジが重ならないように描画できるようです（これらは__平面グラフ__と呼ばれ__ます）__ 。

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3`平面です。

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[平面です|平面ではありません]] 。

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[平面ではありません|平面]]です。

:::

---
> id: utilities-2

[完全なグラフ](gloss:complete-graph) `K_5`平面ではない最小のグラフです。を含むその他のグラフ`K_5`ある意味でサブグラフも平面ではありません。これも`K_6` 、 `K_7` 、およびすべてのより大きな完全なグラフ。

3つのユーティリティパズルの[グラフ](gloss:bipartite-graph)は[2部グラフです](gloss:bipartite-graph) `K_"3,3"` 。非平面グラフには、 `K_5`または`K_"3,3"` （またはこれら2つのグラフの[サブディビジョン](gloss:subdivision) ）をサブグラフとして。これは_クラトフスキーの定理_と呼ばれています。

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### 平面性

    x-solved
    svg#planarity(viewBox="0 0 720 360")

これは平面グラフですが、 ${n}{n|7|5,20,1}頂点はスクランブルされています。エッジが重ならないように頂点を再配置します。

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### オイラーの公式

すべての平面グラフは、それらが領域の数と呼ばれる__面__内に描かれている面を分割します。

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]]頂点
[[5]]面
[[10]]エッジ
_{span.euler-sum} 11頂点+面_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]]頂点
[[7]]面
[[14]]エッジ
_{span.euler-sum} 15頂点+面_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]]頂点
[[13]]面
[[24]]エッジ
_{span.euler-sum} 25頂点+面_

:::

---
> id: euler-1

これらの数値を比較すると、エッジの数が常に[[1つ少ない]]ことがわかります。 [[|より大きい|]]面の数と頂点の数を足した数[[と同じ]]です。言い換えると、 _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ +1。この結果は__オイラーの方程式__と呼ばれ、ケーニヒスベルク橋問題を解いた同じ[数学者に](bio:euler)ちなんで名付けられました。

残念ながら、グラフは無限にあり、すべてをチェックしてオイラーの方程式が機能するかどうかを確認することはできません。代わりに、あらゆるグラフで機能する簡単な[証明](gloss:proof)を見つけることができます…

---
> id: euler-2

    x-slideshow
      .stage(slot="stage")
        svg(viewBox="0 0 640 200")
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
          line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
          line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
          circle.node(cx=270 cy=30  r=7)
          circle.node(cx=150 cy=100 r=7 style="display: none")
          circle.node(cx=270 cy=170 r=7 style="display: none")
          circle.node(cx=390 cy=100 r=7 style="display: none")

        .euler-table
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

任意の（有限）グラフは、1つの頂点から始めて、頂点を1つずつ追加することで作成できます。新しい頂点を追加する方法にかかわらず、オイラーの方程式は有効であることを示しました。したがって、すべてのグラフで有効です。

私たちが使用したプロセスは、 __数学的帰納法__と呼ばれます。これは、最も単純なケースから始めて、より複雑なケースを構築するときにすべてのステップで結果が保持されることを示すだけで、無限に多くのケースで結果を証明するのに非常に役立つテクニックです。

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

多くの平面グラフは、 [多角形の](gloss:polygon)面を備えた3次元形状である[多面体](gloss:polyhedron)のネットに非常によく似ています。多面体を弾性バンドで構成されていると考える場合、それらを平らな平面グラフになるまで伸ばすことを想像できます。

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

これは、平面グラフだけでなく、すべての多面体にもオイラーの公式を使用できることを意味します-1つの小さな違いがあります。多面体をグラフに変換すると、面の1つが消えます。多面体の一番上の面が「外側」になります。グラフの。

つまり、数を数えると__{.red}エッジ__ 、 __{.blue}顔__と__{.green}__ _任意の_多面体の__頂点__ 、あなたはそれを見つけるでしょう_{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] 。

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __正二十面体__
__{.blue} 20__面
__{.green} 12__頂点
__{.red} 30__エッジ

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __菱形二十面体__
__{.blue} 62__面
__{.green} 60__頂点
__{.red} 120__エッジ

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __切頂二十面体__
__{.blue} 32__面（12黒、20白）
__{.green} 60__頂点
__{.red} 90__エッジ

:::

---
> id: maps
> section: map-colouring
> translated: auto

## マップのカラーリング

::: column.grow

特定のマップですでにグラフ理論を使用しています。ズームアウトすると、個々の道路や橋が消え、代わりに国全体の概要が表示されます。

マップ、または個別の地域で構成されるその他の図面に色を付ける場合、隣接する国を同じ色にすることはできません。また、できるだけ少ない色を使用することもできます。

チェス盤のようないくつかの単純な「マップ」は2色（黒と白）しか必要としませんが、ほとんどの複雑なマップはそれ以上必要です。

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

米国の州の地図に色を付ける場合、50色で十分ですが、必要な色ははるかに少なくなります。以下のマップをできるだけ少ない色で着色してみてください。

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] colours used
        include svg/colours-1.svg
        button.btn.clear Clear
        // Note that states or countries which only share a corner are allowed to have the same colour.
        // Alaska and Hawaii are isolated from all of the other states and can have any colour.
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

これらのマップはすべて4つの異なる色で着色できますが、他の非常に複雑なマップではさらに多くの色が必要になる可能性があることは想像に難くありません。実際、一部のマップには、4つの国がすべて相互に接続されている場合__、少なくとも__ 4つの色が必要です。

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

以前と同様に、国と国境を含むマップを平面グラフに変換できます。すべての国が[[頂点になります|縁|顔]] 、および[[国境]]を[[共有する]]国[[|同じ色]]がエッジで接続されている：

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")}次に、グラフの頂点に色を付けます。2つの頂点がエッジで接続されている場合、それらの頂点は異なる色でなければなりません。

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852年、植物学の学生である[フランシスガスリー](bio:guthrie)は、イングランドの郡の地図に色を[付ける](bio:guthrie)必要がありました。彼が試したどのマップでも4色で十分であるように見えましたが、 _すべての_マップで機能する証拠を見つけることができませんでした。これは非常に困難な問題であることが判明し、 __4色の定理__として知られるようになりました。

その後の100年の間に、多くの数学者は4色の定理に「証明」を発表しましたが、後で間違いが見つかるだけでした。これらの無効な証明の一部は説得力があり、エラーの発見に10年以上かかりました。

長い間、数学者たちは4色で十分であることを証明することも、4色以上を必要とするマップを見つけることもできませんでした。

:::

---
> id: maps-4

[ウォルフガングハーケン](bio:haken)と[ケネスアペル](bio:appel)が最終的にそれを解決するためにコンピューターを使用した1976年まで、4色の問題はほとんど進歩しませんでした。彼らは無限に多くの可能な地図を1936の特別な場合に削減しました、それらはそれぞれ合計で1000時間以上かかるコンピュータによってチェックされました。

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

4色の定理は、コンピュータを使用して証明された最初のよく知られている数学的定理であり、それはずっと一般的になり、論争の余地が少なくなっています。より高速なコンピュータとより効率的なアルゴリズムは、今日、ラップトップで4色の定理をほんの数時間で証明できることを意味します。

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

4色の定理は、平面または球体上のマップでのみ機能し、すべての国が単一のエリアで構成されています。

ただし、数学者は、国が複数の切り離されたコンポーネントで構成できる_帝国の_地図や、トーラス（ドーナツの形）などの異なる形状の惑星の地図も見てきました。これらの場合、4色以上が必要になる場合があり、プルーフはさらに難しくなります。

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## 巡回セールスマン問題

::: column.grow(parent="right")

もう一度、ネットワークとマップについて考えてみましょう。配達サービスが訪問しなければならないことを想像してください${tsn}{tsn|8|2,50,1}小包を配布するさまざまな都市。これらの都市は、グラフの頂点と考えることができます。すべての都市が道路で接続されている場合、これは[[完全なグラフです|サイクル|二部グラフな]]ので、 <mfrac><mrow>${tsn} ×（ ${tsn} – 1）</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2}合計でエッジ。

配送トラックは、すべての都市を任意の順序で訪問する必要があります。ケーニヒスベルク橋の問題では、 _すべてのエッジ_に沿っ_て_正確に1本のパスを検索する必要がありました。ここで、 _すべての頂点を_ 1回だけ訪問するパスを見つけたいと思います。これらのパスは、 __ハミルトニアンサイクル__と呼ばれます。

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

完全なグラフのハミルトニアンサイクルには、無数の異なる可能性があります。実際、任意の頂点を開始頂点として選択し、残りの都市を任意の順序で選択できます。

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

グラフで${tsn1}{tsn1|4|2,10,1}都市、すべてのハミルトニアンサイクルには、 ${tsn1}都市。さて、

    ul.var(:html="tsmString(tsn1)")

これは、合計で、 ${tsnPaths(tsn1)}可能なパス。この製品の略記は${tsn1} ！または${tsn1} __階乗__

別の都市を経由せずに、2つの都市間を直接移動することは不可能だと想像できます。その場合、完全なグラフはもはや存在せず、ハミルトニアンサイクルが存在するとしても、その数を見つけることははるかに困難になります。

---
> id: salesman-3

::: column.grow(parent="right")

これまでのところ、一部の都市が他の都市よりも離れている可能性があるという事実を無視してきました。実生活では、しかし、これは非常に重要な考慮事項です：私たちは_すべての_パスを見つけるにしたくないが、我々は最短1を見つけたいです。これは__巡回セールスマン問題__と呼ばれます。輸送と物流だけでなく、トランジスタをマイクロチップに配置するとき、より高速なコンピュータを作るとき、または[DNA](gloss:dna)の構造を分析するときにも解決する必要があります。

簡単な方法の1つは、考えられるすべてのパスを試し、それぞれの長さを見つけて、最短のパスを選択することです。しかし、私たちはそれを示しただけです。 ${tsn2}{tsn2|10|2,20,1}ある都市${tsn2} ！ = ${factorial(tsn2)}可能なパス。数百または数千の頂点があると、強力なコンピュータを使用しても、考えられるすべてのパスを試すことは不可能になります。

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

残念ながら、巡回セールスマン問題を解決するためのより効率的なアルゴリズムはありません。代わりに、数学者やコンピューター科学者は、たとえ最善策ではない場合でも、 _適切な_解決策を見つけるさまざまなアルゴリズムを開発しました。近似解のみを与えるこれらのアルゴリズムは、 __ヒューリスティックス__と呼ばれます。

このマップで都市を並べ替えて、都市間の最短経路がどのように変化するかを確認してください。都市をタップして削除したり、地図上の任意の場所をクリックして都市を追加したりできます（最大8つ）。

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__貪欲アルゴリズム__ （または最近傍アルゴリズム）は非常に単純です。ランダムな都市から始めて、これまでに訪れたことのない最も近い都市に連続して移動します。すべての都市を訪れたら、立ち止まります。

::: column(width=300)

{.todo}アニメーションはもうすぐ…

:::

平均して、貪欲なアルゴリズムを使用して検出されたパスは、可能な最短パスより25％長いことを示すことができます。

---
> id: salesman-6

::: column.grow

__2-Optアルゴリズム__は、ランダムな可能なパスから始まります。次に、2つのエッジを繰り返し選択し、パスの長さが短くなる場合はそれらを入れ替えます。エッジのペアを交換して、長さをそれ以上短くできない場合は停止します。

::: column(width=300)

{.todo}アニメーションはもうすぐ…

:::

---
> id: ants

コンピュータが存在するずっと前から、Natureはアリのコロニーなど、さまざまな場所の間の最適な経路を見つけるための賢い方法を見つけていました。

    x-parallax.full-width(background="images/ants.jpg")

アリは、巣と可能な食料源との間の可能な限り最短のルートを見つけたいと考えています。彼らは彼らが彼らの道に沿って残し、他のアリが従うことができる化学物質を介して互いに通信することができます。

---
> id: ants-1

::: column.grow

*アリのコロニーは、最初はランダムな方向に移動する多くのスカウトを送り出します。食べ物を見つけると、フェロモンの痕跡を残して戻ってきます。 *他のアリは、トレイルを見つけたときにトレイルをたどる傾向があります。彼らは帰りの旅でより多くのフェロモンを堆積させ、道を強化します。 *時間の経過とともに、フェロモンは蒸発します。経路が長いほど、アリがそれに沿って移動する時間が長くなるため、フェロモンが蒸発する時間が長くなります。一方、短いパスはより速く強化されるため、強度はより速く増加します。

::: column(width=240)

{.todo}図はすぐに来る…

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Ant Colony System（ACS）アルゴリズムは、多くの「仮想」アリを使用して、コンピューターでこの動作を再現しようとします。彼らは巡回セールスマン問題の非常に良い解決策をすぐに見つけることができます。

ACSアルゴリズムの特に便利な特性の1つは、継続的に実行でき、グラフの変更にリアルタイムで適応できることです。これらの変更は、自動車事故や道路網の通行止め、またはコンピュータネットワーク上のWebサーバーへのトラフィックの急増によって引き起こされる可能性があります。

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

巡回セールスマン問題は[NP困難](gloss:np)です。つまり、コンピューターで解決することは非常に困難です（少なくとも多数の都市では）。

高速で正確なアルゴリズムを見つけることは、コンピュータサイエンスの分野で深刻な意味を持ちます。つまり、 _すべての_ NP困難な問題に対して高速なアルゴリズムがあるということです。また、特定の問題がコンピュータにとって非常に困難であると考えられているという事実に依存しているため、インターネットセキュリティのほとんどが役に立たなくなります。

巡回セールスマン問題を解決する高速アルゴリズムを見つけると、数学とコンピューターサイエンスで最も有名な未解決問題の1つである__P対NP__問題も解決されます。これは、7つの[ミレニアム賞問題の](gloss:millennium-prize) 1つであり、それぞれが100万ドルの賞金を獲得しています。

:::

---
> section: scheduling
> sectionStatus: dev

## 問題のスケジュール

{.todo}近日公開

---
> id: applications
> section: applications
> translated: auto

## 日常生活のグラフ

以前の章ではグラフ理論の多くの異なるアプリケーションを見てきましたが、それらのいくつかは少し工夫されていました。しかし、グラフは日常生活における多くのオブジェクト、概念、プロセスの基礎になっていることがわかります。

::: column.grow

たとえば、インターネットは広大な仮想グラフです。すべての頂点は個別のWebページであり、すべてのエッジは2つのページ間にハイパーリンクがあることを意味します。このグラフが[[向け]]られるように、リンクが唯一、1つの道を行くことに注意してください[[|複数行| conected、]]このグラフは_非常に、非常に、大きい_こと。

ウィキペディアやFacebookなどの一部のWebサイトには多数の受信リンクがありますが、多くの小さなWebサイトには受信リンクがほとんどない場合があります。これは、Googleが検索結果の並べ替えに使用する基本的な概念です。

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

着信リンクの多いWebサイトは品質が高くなる傾向があり、検索結果の上部に表示されます。たとえば、「ロンドン」を検索すると、ロンドンの小さなお店やロンドンに住んでいる人のブログの前に公式の観光情報サイトが表示されます。グラフ理論のこの単純なアイデアである__ページランクアルゴリズムは__ 、Googleを他の初期の検索エンジンよりも大幅に優れたものにしました。

---
> id: applications-2

インターネットは人類がこれまでに作成した最大のネットワークです。この画像は、インターネットに接続されているすべてのサーバーのごく一部を示しています。

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

ウェブサイトとハイパーリンクは_仮想_グラフを形成しますが、コンピューター、サーバー、ルーター、電話回線、ケーブルの_物理_ネットワークもあります。

::: column.grow(parent="right")

ネットワークオペレーターは、電話をかけたりWebサイトを読み込んだりするたびに、個々のケーブルや接続の容量を超えずに、送信者と受信者を接続する方法を見つける必要があります。グラフの理論と確率により、たとえば特定の接続がビジーであるときに宛先変更を見つけることにより、信頼できるサービスを保証することが可能になります。

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

グラフは、輸送やナビゲーションにおいても重要な役割を果たします。すべてのフライト、電車、地下鉄のネットワークはグラフを形成し、効率的なスケジュールを作成するときに使用できます。最もわかりやすいグラフの1つはロンドン地下鉄マップです。

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

すべての道路と高速道路も大きなネットワークを形成しており、これはGoogleマップなどのナビゲーションサービスで、指定された2点間の最短ルートを求めるときに使用されます。

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

将来的には、 __Intelligent Transportation Systems__は、スマートフォンや自動運転車から収集された位置データを使用して、より効率的に車をルーティングすることにより、渋滞や事故を減らします。これにより、毎年何百万時間もの道路での損失を節約し、汚染を大幅に削減し、緊急サービスをより速く移動させることができます。

:::

---
> id: applications-6

この画像は、北ヨーロッパを横断する民間航空会社のフライトのネットワークを示しています。

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

科学、工学、日常生活には他にも無数のグラフがあります。

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} __分子内の__原子と結晶グリッド間のリンクがグラフを形成します。

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __病気__や伝染病の蔓延は、ネットワークを使用してモデル化できます。

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption}生物学では、種の祖先を示す__進化の木__がグラフを形成します。

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} __電気回路__とコンピューターチップのさまざまなコンポーネントがネットワークを形成しています。

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} __言語__の文法構造は、たとえば翻訳アルゴリズムを作成するために、グラフを使用してモデル化できます。

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption}グラフは、 __確率__ 、 __ゲーム理論__ 、 __金融数学において__も多くの用途があります。

:::

---
> id: social

### ソーシャルネットワーク

最後に、日常生活に存在するグラフの特に良い例、ソーシャルメディアについて考えてみましょう。ここで、頂点は[[人を]]表します[[|友達|ネットワーク]]とエッジは、友情、いいね、購読、フォロワーを表します。

ソーシャルメディアのグラフを描くと、同じ学校に行ったり同じ都市に住んだりしている、相互の友人の特定の__クラスター__が表示される場合があります。また、頂点がどれほど適切に接続されているかに依存し、ソーシャルメディアでの個人の人気の尺度となる可能性がある、人々の__中心__性を判断することもできます。

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014年のFacebookのアクティブユーザーは14億人で、合計で2,000億人を超える友情がありました。 Facebookユーザーの半数には200人を超える友達がいて、ほとんどの友達は同数の友達を持っているため、簡単に何万人もの_友達ができます_ 。

エキサイティングな質問は次のようになります。ランダムなFacebookユーザーを2人選んだ場合、一方から他方に移動するためにいくつの「友情のエッジ」に従う必要があるでしょうか。たとえば、友達同士の距離は[[1]] 、友達同士の距離は[[2]]などです。

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Facebookは2016年に、ユーザー同士のつながり方を[調査](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/)しました。彼らは、平均して、あなたはFacebook上の_他の誰か_と最大で3.57人の人々を通じてつながっていることを発見した。そして、これには有名人、政治家、さらには王族さえ含まれます！

言い換えれば、世界中の何十億ものFacebookユーザーのいずれかを選択した場合、おそらく友達の友達を知っている友達の友達がいることになります。 3.57 __度の分離__があると言います。

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

1929年にハンガリーの作家[Frigyes Karinthyが](bio:karinthy)最初に「6度の分離」のアイデアを提案したとき、インターネットやソーシャルメディアはありませんでしたが、世界はすでにより相互につながり始めていました。

1967年、 [スタンリーミルグラム](bio:milgram)は最初の実証実験を行いました。ネブラスカとカンザスに住む296人の参加者は、マサチューセッツ州ボストンに住む特定の人に手紙を送るように求められました。彼らは全員、手紙を送る友人を選ばなければならず、その友人が別の友人を選んだ。すべての段階で、手紙はボストンに近づきました。ミルグラムは、平均して5.2人の中間の友人しかいないことを発見しました。分離度は5.2度です。

:::

今日、私たち一人ひとりが、数え切れないほどの目に見えないグラフの一部になっています。このグラフは、私たちの社会的相互作用、旅行、インターネットとテクノロジー、科学などの根底にあります。
