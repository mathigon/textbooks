# Đồ thị và Mạng lưới

## Giới thiệu

> id: intro
> section: introduction

::: column.grow
Mỗi ngày chúng ta tiếp xúc với muôn vàn những mạng lưới và kết nối khác nhau: hệ thống đường xá, đường ray, mạng điện thoại, internet, mạch điện tử và ngay cả liên kết phân tử. Chúng ta cũng có những kết nối xã hội với bạn bè và gia đình. Tất cả những hệ thống này chứa đựng những điểm gọi là [[đỉnh|vòng tròn|giao điểm]], trong đó một số điểm được nối với nhau bởi [[cạnh|giới hạn|cặp]]. Trong toán học hệ thống này được gọi là [__đồ thị__](gloss:graph).
::: column(width=160)

    svg#graph0.graph.novertices.noedges(width="160" height="130")

:::
__Lý thuyết về đồ thị __ là môn học về đồ thị và các đặc tính của nó. Đây là một trong những vấn đề thú vị và trực quan nhất trong toán học, và nó có muôn vàn những ứng dụng quan trọng khác nhau trong đời sống: 

    x-gallery(slide-width="300")
      div
        x-media(src="images/network1.jpg" width=260 height=260 lightbox)
        p.caption Hệ thống đường giao thông và đường ray
      div
        x-media(src="images/network6.jpg" width=260 height=260 lightbox)
        p.caption Tổ hợp mạch điện
      div
        x-media(src="images/network3.jpg" width=260 height=260 lightbox)
        p.caption Hệ thống phân phối
      div
        x-media(src="images/network2.jpg" width=260 height=260 lightbox)
        p.caption Mối quan hệ bạn bè
      div
        x-media(src="images/network7.jpg" width=260 height=260 lightbox)
        p.caption Mạng tế bào thần kinh
      div
        x-media(src="images/network4.jpg" width=260 height=260 lightbox)
        p.caption Mạng Internet

---
> id: intro-1

Chúng ta có thể vẽ một đồ thị đơn giản sử dụng các đường và vòng tròn. Vị trí của các vòng tròn hay chiều dài của mỗi đường không quan trọng – chúng ta chỉ quan tâm cách chúng kết nối với nhau như thế nào. Các đường có thể cắt nhau và không cần phải là đường thẳng.


::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Trong một vài biểu đồ, cạnh chỉ đi theo một hướng nhất định. Chúng được gọi là
[__đồ thị có hướng__](gloss:directed-graph).
::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Trong những đồ thị khác có chứa nhiều mảng khác nhau không được kết nối bởi cạnh biên. Những đồ thị này _gián đoạn_.
::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Một số đồ thị khác có thể có nhiều cạnh kết nối cùng hai đỉnh (đa biên), hay những đỉnh kết nối với chính nó (vòng/khuyên).
:::

Để đơn giản, chúng ta chỉ chú trọng tìm hiểu về những đồ thị kết nối và không định hướng trong bài này, tạm gác qua đồ thị đa biên hay vòng/khuyên.  

---
> id: intro-2

Chúng ta có thể tạo nhiều đồ thị từ một đồ thị có sẵn bằng cách di chuyển các đỉnh và cạnh. Kết quả có được gọi là [__đồ thị con__](gloss:subgraph). Đây là một số ví dụ về đồ thị và đồ thị con:

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

:::

---
> id: intro-3

Đồ thị có [__cấp số__](gloss:graph-order) chính là số đỉnh của nó. Đồ thị cũng có 
[__cấp độ__](gloss:graph-degree) là số cạnh gặp nhau ở đỉnh đó. 

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Cấp số: [[5]]
::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Cấp số: [[8]]
::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Cấp độ: [[3]]
::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Cấp độ: [[6]]
:::

---
> id: intro-4

Các đồ thị có một vòng nối các đỉnh được gọi là [__vòng__]. Mọi đồ thị vòng đều có [[cùng một số lượng đỉnh và cạnh|nhiều cạnh hơn đỉnh|ít cạnh hơn đỉnh]].

    .row
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')

---
> id: handshakes-1
> section: parties-and-dating

## Tiệc tùng và hẹn hò

::: column.grow
Hãy tưởng tượng bạn được mời tham dự một buổi tiệc sang trọng. Tính thêm cả bạn và chủ tiệc thì có tổng cộng
 ${hnd}{hnd|5|3,15,1} người tham dự.

Cuối buổi tiệc khi mọi người chuẩn bị ra về, mọi người bắt tay nhau. Vậy có tất cả bao nhiêu cái bắt tay? 

Nếu minh họa những cái bắt tay bằng một đồ thị thì mỗi người tham gia là [[một đỉnh|một cạnh]],
và mỗi cái bắt tay là [[một cạnh|một đỉnh]].
 
{.reveal(when='blank-0 blank-1')}  Vậy giờ ta có thể dếm dễ dàng số lượng cạnh của đồ thị, với ${hnd} người, có tất cả ${hnd*(hnd-1)/2} cái bắt tay.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Thay vì đếm tất cả các cạnh trong một đồ thị lớn, ta cũng có thể tìm một công thức đơn giản để tính ra kết quả với bất kỳ số lượng nào của người tham dự tiệc. 

Mỗi người trong số ${n}{n|5|2,8,1} người đến tham dự tiệc bắt tay với ${n-1} người khác.
Vậy là có  ${n} × ${n-1} = ${n×(n-1)} cái bắt tay tất cả. Cho số _n_ người, số cái bắt tay sẽ là [[_n_ × (_n_ – 1)|_n_ × (_n_ + 1)|_n_<sup>2</sup>]].

    p.var ${handshakeTable(n)}
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Tuy nhiên thật ra kết quả này là không đúng: bởi chúng ta đã đếm mỗi cái bắt tay
[[hai lần|một lần|ba lần]], _{span.reveal(when="blank-0")}vì hai người tham gia chỉ bắt tay một lần với nhau._

{.reveal(when="blank-0")} Ví dụ, <x-target to=".handshakes tr:first-child
td:first-child, .handshakes tr:first-child td:nth-child(2)"> hai cái bắt tay đầu tiên
ở hàng trên cùng </x-target> thực ra là một. Số cái bắt tay đúng cho ${n}{n|5|2,25,1} người tham dự là <mfrac><mrow>${n} ×
${n-1}</mrow><mn>2</mn></mfrac> = ${n*(n-1)/2}.

---
> id: handshakes-3

Đồ thị minh họa những cái bắt tay rất đặc biệt vì các đỉnh đều kết nối với các đỉnh còn lại. Đồ thị với đặc tính này được gọi là __đồ thị hoàn chỉnh__. Đồ thị hoàn chỉnh có 4 đỉnh được viết tắt là `K_4`, đồ thị hoàn chỉnh  với 5 đỉnh được ký hiệu là `K_5`, v...v...

Chúng ta vừa thấy rằng đồ thị có `n` đỉnh, ký hiệu `K_n`, có tất cả
`(n × (n-1))/2` cạnh.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Vào một ngày đẹp trời khác, bạn được mời đến tham dự một buổi hẹn hò tốc hành (speed dating) cho ${m}{m|5|2,8,1}
bạn nam và ${f}{f|4|2,8,1} bạn nữ. Ban tổ chức sắp đặt những cái bàn nhỏ để mỗi bạn nam có thể có 5 phút với mỗi bạn nữ.
Vậy tổng cộng có bao nhiêu "cuộc gặp gỡ" đã diễn ra? 

::: column.grow
Trong trường hợp này, đồ thì tương ứng có hai tập đỉnh khác nhau. Mỗi đỉnh được kết nối với tất cả các đỉnh [[của nhóm đối diện|của chính nhóm đó]], nhưng không kết nối với các đỉnh của [[chính nhóm đó|nhóm đối diện]]. Đồ thị với đặc tính này được gọi là __đồ thị hai phía__.
::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Đồ thị hai phía với hai tập đỉnh _x_
và _y_ thường được ký hiệu là `K_"x,y"`. Đồ thị này có [[_x_ × _y_|_x_ + _y_|2_x_ – _y_]]
cạnh, _{span.reveal(when="blank-2")} nghĩa là trong ví dụ trên có tất cả ${m} × ${f} = ${m×f} cuộc gặp gỡ._

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg
> section: bridges-of-koenigsberg

## Những cây cầu ở Königsberg

::: column.grow
Một trong những nhà Toán học đầu tiên nghĩ về đồ thị và mạng lưới là [Leonhard
Euler](bio:euler). Euler rất hứng thú về một bài toán lâu đời ở thị trấn Königsberg gần Biể Baltic.

Con sông Pregel phân chia thị trấn Königsberg thành 4 khu vực khác nhau, được kết nối bởi 7 cây cầu. Liệu có thể có cách nào đi một vòng thành phố và đi qua tất cả 7 cây cầu – và chỉ đi qua mỗi cây cầu đúng 1 lần không? ( Bạn có thể bắt đầu và kết thúc ở bất kỳ điểm nào, không nhất thiết phải cùng một chỗ.) 

Tìm giải pháp bằng cách vẽ đường đi trên bản đồ dưới đây: ::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Clear
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Clear
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Clear
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Clear

---
> id: bridges-1

Trong trường hợp của thị trấn Königsberg dường như không có giải pháp nào khả thi cả, nhưng với một số thành phố khác thì có thể thực hiện được. Euler đã tìm ra quy tắc đơn giản sử dụng phương pháp đồ thị để tìm lời giải và có thể áp dụng cho tất cả khác thành phố mà không phải ngồi vẽ nháp thử đi thử lại nhiều lần. 

::: column.grow
Đầu tiên chúng ta cần chuyển đổi bản đồ thành phố thành đỉnh và cạnh của đồ thị. Mỗi vùng đất được đại diện bởi [[một đỉnh|một cạnh|một vùng]]
và mỗi cây cầu kết nối hai vùng đất khác nhau được đại diện bởi
[[một cạnh|một đỉnh|đường phố]] tương ứng.

{.reveal(when="blank-0 blank-1")} Bây giờ bài toán từ “ đi một vòng thành phố qua tất cả các cây cầu đúng một lần" thành bài toán “vẽ lại đồ thị với một đường duy nhất đi qua các cạnh đúng một lần"
::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Trên giấy nháp, bạn hãy thử vẽ các đồ thị khác nhau dưới đây và xem đồ thị nào có thể vẽ được bằng một đường liên tục duy nhất. 
    // p Try drawing these graphs with one continuous stroke:
    // p.todo Interactive coming soon…

---
> id: bridges-3
> goals: dropdown

Cũng như bản đồ ở trên, ta thấy rằng một số đồ thị có giải pháp khả thi trong khi một số khác thì không. Để hiểu vì sao chúng ta có thể đánh số [cấp độ](gloss:graph-degree) của mỗi đỉnh trong đồ thị.
:

    .frame.fill(style="padding: 20px")
      p(style="margin: 0"): strong Những đồ thị này khả thi:
      include svg/vertex-orders-1.svg
      p(style="margin: 1em 0 0"): strong Những đồ thị này không khả thi:
      include svg/vertex-orders-2.svg
      p: select
        option(value="val", selected) Phân màu theo giá trị
        option(value="size") Phân màu theo nhỏ và lớn
        option(value="prime") Phân màu theo số nguyên tố và số đa hợp
        option(value="eo") Phân màu theo chẵn lẽ

---
> id: bridges-4

Khi so sánh các số giữa nhóm đồ thị khả thi và không khả thi, ta thấy dường như có phương án khả thi nếu đồ thị [[không có nhiều hơn hai đỉnh có cấp độ "lẻ"|chỉ có số cạnh là "chẵn"|không có đỉnh nào có cấp độ lớn hơn 4|không có đỉnh nào có cấp độ 3]]. Điều này có thể giải thích được bằng cách nhìn vào mỗi cạnh trong đồ thị: 

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Ở đây bạn có một đỉnh của đồ thị được đơn giản hóa và phóng to.
      .legend(slot="legend") Nếu bạn vẽ đồ thị, sẽ có cạnh đi vào đỉnh này và có một cạnh khác đi ra khỏi đỉnh. Điều này tạo nên hai cạnh gặp nhau ở đỉnh. 
      .legend(slot="legend") Có thể đỉnh này không nằm ở góc mà là điểm giao nhau. Lúc này sẽ có hai cạnh khác đi vào và đi ra khỏi đỉnh. Vậy ta có 4 cạnh. 
      .legend(slot="legend") Và trong một số đồ thị, sẽ có cặp cạnh thứ 3 đi vào và đi ra khỏi đỉnh. Lúc này ta có 6 cạnh. 
      .legend(slot="legend") Hãy để ý rằng dù như thế nào, sẽ luôn có một số chẵn các cạnh gặp nhau ở đỉnh. 
      .legend(slot="legend") Chỉ có hai trường hợp ngoại lệ là đỉnh nơi cạnh bắt đầu và đỉnh nơi cạnh kết thúc nếu khác nhau thì hai đỉnh này có thể có cấp độ lẻ. Nếu đỉnh bắt đầu và đỉnh kết thúc là một cấp độ của các đỉnh là số chẵn.

---
> id: bridges-5

::: column.grow(parent="right")
Nếu bạn quay lại với bản đồ của thị trấn Königsberg, bạn sẽ thấy rằng có hơn hai khu đất với số lẻ những cây cầu. Do đó việc đi qua các cây cầu duy nhất một lần là bất khả thi, và đây chính là quy luật mà Leonard Euler đã phát hiện ra.

Phát hiện này của Euler có vẻ như không hữu ích gì nhiều trong cuộc sống, nhưng đồ thị là nền tảng để giải quyết rất nhiều vấn đề về địa lý, ví dụ như tìm kiếm đường đi giữa hai địa điểm. Chúng ta sẽ khám phá thêm về những ứng dụng này sau. 
::: column(width=240)

    x-media(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Đồ thị phẳng

::: column.grow
Sau đây là một bài toán khác liên quan đến lý thuyết đồ thị.

Trong một ngôi làng nhỏ có 3 nhà máy sản xuất nước, gas và điện. Trong làng cũng có 3 ngôi nhà là khách hàng tiềm năng. Do kết cấu xây dựng của làng, các ống dẫn không được phép cắt ngang nhau.
::: column(width=300)

    x-media(width=300 height=200 src="images/power-plant.jpg")

:::

Hãy thử kết nối các nhà máy với nhà của khách hàng sao cho các đường dẫn không cắt ngang nhau:

    .frame.fill
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Cũng như bài toán của thị trấn Königsberg ở trên, bạn nhận ra rằng không có cách nào là khả thi. Dường như một số đồ thị có các cạnh không cắt nhau – gọi là __đồ thị phẳng__ – còn một số đồ thị khác như bài toán ở trên thì không thể. 

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` là đồ thị phẳng.
::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[là đồ thị phẳng| không là đồ thị phẳng]].
::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[là đồ thị phẳng|không là đồ thị phẳng]].
:::

---
> id: utilities-2

[Đồ thị hoàn chỉnh](gloss:complete-graph) `K_5`  là đồ thị phẳng nhỏ nhất. Tất cả những đồ thị nào có đồ thị con là `K_5` thì không phải là đồ thị phẳng. Bao gồm `K_6`, `K_7`, và tất cả các đồ thị lớn hơn khác.

Đồ thị trong bài toán đố về các nhà máy ở trên là [đồ thị hai phía](gloss:bipartite-graph) `K_"3,3"`. Hóa ra rằng tất cả các đồ thị không phẳng nào cũng có đồ thị con là `K_5` hoặc `K_"3,3"` hoặc có đồ thị con là [đồ thị phân chia](gloss:subdivision) của hai đồ thị này.

---
> id: planarity
> goals: planarity

    .box.problem-box
      .box-title: h3 Planarity
      .box-body
        x-solved
        svg#planarity.frame(viewBox="0 0 640 320")
        p.md Đây là đồ thị phẳng nhưng ${n}{n|7|5,20,1} đỉnh đã bị xáo trộn. Hãy sắp xếp lại các cạnh này sao cho chúng không cắt nhau. 
        button.btn Thử đồ thị khác

---
> id: euler
> section: eulers-formula

## Công thức Euler

All planar graphs divide the plane they are drawn on into a number of areas,
called __faces__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vertices  
[[5]] Faces  
[[10]] Edges  
_{span.euler-sum} 11 Vertices + Faces_
::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vertices  
[[7]] Faces  
[[14]] Edges  
_{span.euler-sum} 15 Vertices + Faces_
::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vertices  
[[13]] Faces  
[[24]] Edges  
_{span.euler-sum} 25 Vertices + Faces_
:::

---
> id: euler-1

When comparing these numbers, you will notice that the number of edges is always
[[one less|bigger|the same]] than the number of faces plus the number of
vertices. In other words, _{.b.blue}F_ + _{.b.green}V_ = _{.b.red}E_ + 1. This
result is called __Euler’s equation__ and is named after the same
[mathematician](bio:euler) who solved the Königsberg Bridges problem.

Unfortunately, there are infinitely many graphs and we can’t check every one to
see if Euler’s equation works. Instead we can try to find a simple
[proof](gloss:proof) that works for any graph…

---
> id: euler-2

    x-slideshow
      .stage(slot="stage")
        svg.frame(viewBox="0 0 640 200")
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
          line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
          line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
          circle.node(cx=270 cy=30  r=7)
          circle.node(cx=150 cy=100 r=7 style="display: none")
          circle.node(cx=270 cy=170 r=7 style="display: none")
          circle.node(cx=390 cy=100 r=7 style="display: none")

        div(style="position: absolute; top: 20px; right: 0; font-size: 1.2em;")
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler&rsquo;s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler&rsquo;s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler&rsquo;s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

Any (finite) graph can be constructed by starting with one vertex and adding
more vertices one by one. We have shown that, whichever way we add new vertices,
Euler’s equation is valid. Therefore it is valid for all graphs.

The process we have used is called __mathematical induction__. It is a very
useful technique for proving results in infinitely many cases, simply by
starting with the simplest case, and showing that the result holds at every
step when constructing more complex cases.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Many planar graphs look very similar to the nets of [polyhedra](gloss:polyhedron),
three dimensional shapes with [polygonal](gloss:polygon) faces. If we think of
polyhedra as made of elastic bands, we can imagine stretching them out until
they become flat, planar graphs:

    .row
      .grow: x-img-sequence(src="images/cube/cube#.png" pages=32 width=300 height=300)
      .grow: x-img-sequence(src="images/dodecahedron/dodeca#.png" pages=32 width=300 height=300)

---
> id: euler-5

This means that we can use Euler&rsquo;s formula not only for planar graphs but
also for all polyhedra – with one small difference. When transforming the
polyhedra into graphs, one of the faces disappears: the topmost face of the
polyhedra becomes the “outside”; of the graphs.

In other words, if you count the number of __{.red}edges__, __{.blue}faces__ and
__{.green}vertices__ of _any_ polyhedron, you will find that _{.b.blue}F_ +
_{.b.green}V_ = _{.b.red}E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosahedron__  
one of the 5 [Platonic Solids](/course/polygons-and-polyhedra/platonic-solids)  
__{.blue}20__ Faces, __{.green}12__ Vertices and __{.red}30__ Edges
::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Small Rhombicosidodecahedron__  
one of the 13 [Archimedean Solids](/course/polygons-and-polyhedra/more-on-polyhedra)  
__{.blue}62__ Faces, __{.green}60__ Vertices and __{.red}120__ Edges
::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" credit="pond5.com" hover loop)

{.caption} __Football, or *Truncated Icosahedron*__  
__{.blue}32__ Faces (12 black and 20 white),  
__{.green}60__ Vertices and__{.red}90__ Edges
:::

---
> id: maps
> section: map-colouring

## Tô màu bản đồ

::: column.grow
We have already used graph theory with certain maps. As we zoom out, individual
roads and bridges disappear and instead we see the outline of entire countries.

When colouring a map – or any other drawing consisting of distinct regions –
adjacent countries cannot have the same colour. We might also want to use as few
different colours as possible.

Some simple “maps”, like a chessboard, only need two colours (black and white),
but most complex maps need more.
::: column(width=240 style="margin-top: -10px")

    x-media.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

When colouring the map of US states, 50 colours are obviously enough, but far
fewer are necessary. Try colouring the maps below with as few colours as
possible:

    p.text-center
      span.four-colour-icon.on
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        include svg/colours-1.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
        // Note that states or countries which only share a corner are allowed to have the same colour.
        // Alaska and Hawaii are isolated from all of the other states and can have any colour.
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        include svg/colours-2.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        include svg/colours-3.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        include svg/colours-4.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow
All of these maps can be coloured with only four different colours, but it is
not hard to imagine that other, very complicated maps might need many more
colours. In fact, some maps need __at least__ four colours, whenever they
contain four countries all connected to each other.
::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Like before, we can convert a map with countries and borders into a planar
graph: every country becomes [[a vertex|an edge|a face]], and countries which
[[share a border|have the same colour]] get connected by an edge:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Now we want to colour the vertices of a graph,
and two vertices must have a different colour if they are connected by an edge.

---
> id: maps-3

::: column(width=240 parent="right")

    x-media(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow
In 1852, the botany student [Francis Guthrie](bio:guthrie) had to colour a map
of counties in England. He observed that four colours seemed to suffice for any
map he tried, but he was not able to find a proof that worked for _all_ maps.
This turned out to be an extremely difficult problem, and became known as the
__four colour theorem__.

During the following 100 years, many mathematicians published “proofs” to the
four colour theorem, only for mistakes to be found later. Some of these invalid
proofs were so convincing that it took more than 10 years to discover errors.

For a long time, mathematicians were unable to either prove that four colours
are enough, or to find a map that needed more than four colours.
:::

---
> id: maps-4

Little progress was made on the four colour problem until 1976, when [Wolfgang
Haken](bio:haken) and [Kenneth Appel](bio:appel) used a computer to finally
solve it. They reduced infinitely many possible maps to 1936 special cases,
which were each checked by a computer taking over 1000 hours in total.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

The four colour theorem is the first well-known mathematical theorem to be
proven using a computer, something that has become much more common and less
controversial since. Faster computers and a more efficient algorithm mean that
today you can solve the four colour theorem on a laptop in just a few hours.

    figure
      x-media(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow
The four colour theorem only works for maps on a flat plane or a sphere, and
where all countries consist of a single area.

However mathematicians have also looked at maps of _empires_, where countries
can consist of multiple disconnected components, and at maps on
differently-shaped planets, such as a torus (doughnut shape). In these cases you
may need more than four colours and the proofs become even more difficult.
::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: the-travelling-salesman-problem

## Bài toán đường đi của người bán hàng 

::: column.grow(parent="right")
Let us think, once more, about networks and maps. Imagine that a delivery
service has to visit ${tsn}{tsn|8|2,50,1} different cities to distribute
parcels. We can think of these cities as the vertices in a graph. If all of the
cities are connected by roads, this is a [[complete graph|cycle|bipartite graph]],
so there are <mfrac><mrow>${tsn} × (${tsn} – 1)</mrow><mn>2</mn></mfrac> =
${tsn*(tsn-1)/2} edges in total.

The delivery truck has to visit all cities, in any order. In the Königsberg
bridges problem we wanted to find paths which travel along _every edge_ exactly
one. Now we want to find paths which visit _every vertex_ exactly once. These
paths are called __Hamiltonian cycles__.
::: column(width=260)

    x-media(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

There are countless different possibilities for Hamiltonian cycles in complete
graphs. In fact, we can pick any vertex as starting vertex and then pick any of
the remaining cities in any order:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

In a graph with ${tsn1}{tsn1|4|2,10,1} cities, every Hamiltonian cycle must also
contain ${tsn1} cities. Now,

    ul.var ${tsmString(tsn1)}

This means that, in total, there are ${tsnPaths(tsn1)} possible paths. A
shorthand for this product is ${tsn1}! or ${tsn1} __Factorial__.

You could imagine that it might not be possible to travel directly between two
cities - without going via another city. In that case we no longer have a
complete graph, and finding the number of Hamiltonian cycles, if they exist at
all, becomes much more difficult.

---
> id: salesman-3

::: column.grow(parent="right")
So far we have ignored the fact that some cities might be further apart than
others. In real life, however, this is a very important consideration: we don’t
just want to find _any_ path but we want to find the shortest one. This is
called the __Travelling Salesman Problem__. It has to be solved not only in
transportation and logistics, but also when positioning transistors on
microchips, to make faster computers, or when analysing the structure of
[DNA](gloss:dna).

One simple method would be to try all possible paths, finding the length of
each, and then picking the shortest one. However we have just shown that, even
with just ${tsn2}{tsn2|10|2,20,1} cities there are ${tsn2}! = ${factorial(tsn2)}
possible paths. Once you have hundreds or thousands of vertices, trying all
possible paths becomes impossible, even using powerful computers.
::: column(width=220)

    x-media(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4

Unfortunately there is no more efficient algorithm to solve the travelling
salesman problem. Instead, mathematicians and computer scientists have developed
various algorithms that find _good_ solutions, even if they may not be the very
best one. These algorithms, which only give approximate solutions, are called
__Heuristics__.

Try rearranging the cities on this map. You can remove cities by clicking on
them, and you can add cities by clicking anywhere on the map.

    .tsm-wrap.frame.fill.clearfix
      .tsm-box: svg

---
> id: salesman-5

::: column.grow
The __Greedy Algorithm__ (or Nearest Neighbour Algorithm) is very simple: you
start in a random city and consecutively move to the closest city you haven’t
visited before. Once you have visited all cities, you stop.
::: column(width=300)
{.todo} Animation coming soon…
:::

You can show that, on average, paths found using the greedy algorithm are 25% longer than the shortest possible path.

---
> id: salesman-6

::: column.grow
The __2-Opt Algorithm__ starts with a random possible path. Then you repeatedly
pick two edges and swap them around if that would reduce the length of the path.
You stop when you can't reduce the length further by swapping any pairs of
edges.
::: column(width=300)
{.todo} Animation coming soon…
:::

---
> id: ants

It turns out that, long before computers even existed, Nature had found a clever
way to find optimal paths between different locations: in ant colonies.

    x-parallax.full-width(background="images/ants.jpg")

Ants want to find the shortest possible routes between their nest and possible
food sources. They can communicate with each other through chemicals which they
leave along their trail, and which other ants can follow.

---
> id: ants-1

::: column.grow

* The ant colony sends out many scouts which initially travel in random
  directions. Once they find food, they return, leaving behind a trail of
  pheromone.
* Other ants tend to follow a trail when they find one, which leads them to
  food. On their return journey they deposit more pheromone, thus reinforcing
  the trail.
* Over time, pheromone evaporates. The longer a path is, the more time it takes
  ants to travel along it, and so the pheromone has more time to evaporate.
  Short paths, on the other hand, can get reinforced more quickly, so their
  strength increases faster.

::: column(width=240)
{.todo} Diagram coming soon…
:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-media(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow
Ant Colony System (ACS) algorithms try to replicate this behaviour on computers,
using many “virtual” ants. They can quickly find very good solutions for the
travelling salesman problem.

One particularly useful property of ACS algorithms is that they can run
continuously and adapt in real time to changes to the graph. These changes could
be caused by car accidents and road closures on street networks, or by traffic
spikes to web servers on computer networks.
:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow
The Travelling Salesman problem is [NP-hard](gloss:np), which means that it is
very difficult to be solved by computers (at least for large numbers of cities).

Finding a fast and exact algorithm would have serious implications in the field
of computer science: it would mean that there are fast algorithms for _all_
NP-hard problems. It would also render most of internet security useless, which
relies on the fact that certain problems are believed to be very difficult for
computers.

Finding a fast algorithm to solve the travelling salesman problem would also
solve one of the most famous open problems in mathematics and computer science,
the __P vs NP__ problem. It is one of the seven [Millennium Prize
Problems](gloss:millennium-prize), each carrying a $1m prize.
:::

---
> id: applications
> section: graphs-in-everyday-life

## Đồ thị trong cuộc sống hằng ngày

Throughout this course we have seen many applications of graph theory, though
some were somehow contrived. It turns out, however, that graphs are at the very
heart of many objects and concepts in everyday life.

::: column.grow
The internet, for example, is a vast, virtual graph. Every vertex is an
individual webpage, and every edge means that there is a hyperlink between two
pages. Note that links only go one way, so this graph is
[[directed|multi-line|conected]], and that this graph is _very, very, large_.

Some websites, like Wikipedia or Facebook, have lots of incoming links, while
many smaller websites may have very few incoming links. This is the underlying
concept which Google uses to sort search results.

::: column(width=240)

    img(credit="© Various" src="images/internet.png" width=240 height=240)

:::

---
> id: applications-1

Websites with more incoming links tend to be of higher quality and should be
shown at the top of the search results. For example, when searching for “London”,
official tourist information sites are shown before small shops in London, or
blogs of people who live in London. This simple idea from Graph theory, the
__Page Rank Algorithm__, made Google significantly better than other early
search engines.

---
> id: applications-2

The internet is the largest network ever created by mankind. This image shows a
very small proportion of all the servers connected to the internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

While websites and hyperlinks form a _virtual_ graph, there is also the
_physical_ network of computers, servers, routers, phone lines and cables.

::: column.grow(parent="right")
Every time you make a phone call or load a website, network operators have to
find a way to connect sender and receiver, without exceeding the capacity of any
individual cable or connection. Graph theory and probability make it possible to
guarantee a reliable service, for example by finding diversions when a
particular connection is busy.
::: column(width=220)

    x-media(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Graphs also play an important role in transportation and navigation. All flight,
train and subway networks form graphs, which can be used when creating efficient
schedules. One of the most recognisable graphs is the London Underground map:

    figure: x-media(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow
All roads and motorways also form a large network, which is used by navigation
services like Google Maps when working out the shortest route between two given
points.
::: column(width=60)

    x-media(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-media(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow
In the future, __Intelligent Transportation Systems__ will reduce congestion and
accidents by routing cars more efficiently, using location data collected from
smartphones and self-driving cars. This could save millions of hours lost on the
road every year, significantly reduce pollution, and allow emergency services to
travel faster.
:::

---
> id: applications-6

This image shows the network of commercial airline flights across northern Europe.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

There are countless other graphs in science, engineering or everyday life:

::: column(width=200)

    x-media(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} The links between atoms in __molecules__ and crystal grids form a graph.
::: column(width=200)

    x-media(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} The __spread of diseases__ and epidemics can be modelled using a network.
::: column(width=200)

    x-media(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} In Biology, the __evolutionary trees__ that show the ancestry of
species form a graph.
::: column(width=200)

    x-media(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} The different components of __electric circuits__ and computer chips
form a network.
::: column(width=200)

    x-media(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} The grammatical structure of __languages__ can be modelled using
graphs, for example to create translation algorithms.
::: column(width=200)

    x-media(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Graphs also have many applications in __probability__, __game
theory__ and __financial mathematics__.
:::

---
> id: social
> section: social-networks

### Mạng xã hội

Finally, let us think about one particularly good example of graphs which exist
in everyday life: social media. Here, vertices represent [[people|friends|networks]]
and edges represent friendships, likes, subscriptions or followers.

When we start drawing social media graphs, we can clearly see certain
__clusters__ of mutual friends, who may have gone to the same school or live in
the same city. We can also determine people’s __centrality__, which depends on
how well-connected a vertex is, and which may be a measure of a person’s
popularity in social media.

    figure: x-media(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow
In 2014, Facebook had 1.4 billion active users and a total of more than 200
billion friendships. Half of all Facebook users have more than 200 friends, and
since most of our friends have a similar number of friends, we could easily have
tens of thousands of _friends of friends_.

An exciting question would now be: if you pick any two random Facebook users,
how many “friendship edges” would you need to follow to get from one to the
other? For example, the distance between friends is [[1]], the distance between
friends of friends is [[2]], and so on.
::: column(width=200)

    x-media(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Based on a [study](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/)
which Facebook conducted in 2016, you are, on average, connected to anyone else
on Facebook through at most 3.57 other people: we say there are 3.57 __degrees
of separation__.

In other words, if you pick any one of the billions of Facebook users all around
the world, they will have a friend of a friend who knows a friend of one of your
friends. And this includes celebrities, politicians or royalty…

    figure
      x-media(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-media(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow
In 1929, when the Hungarian author [Frigyes Karinthy](bio:karinthy) first
proposed the idea of “six degrees of Separation”, there was no internet or
social media, but the world had already started to become more interconnected.

In 1967, [Stanley Milgram](bio:milgram) conducted a first empirical experiment,
where 296 participants living in Nebraska and Kansas were asked to deliver a
letter to a particular person living in Boston, Massachusetts. They all had to
choose a friend to send the letter to, who then picked another friend. At every
step, the letter moved closer to Boston. Milgram found that there were, on
average, only 5.2 intermediate friends &#8211; 5.2 degrees of separation.
:::

Today, every one of us is part of countless invisible graphs, which underlie our
social interactions, travel, internet and technology, science, and so much more.
