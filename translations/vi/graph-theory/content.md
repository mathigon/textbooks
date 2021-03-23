# Đồ thị và Mạng lưới

## Giới thiệu

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability

::: column.grow
Mỗi ngày chúng ta tiếp xúc với muôn vàn những mạng lưới và kết nối khác nhau: hệ thống đường xá, đường ray, mạng điện thoại, internet, mạch điện tử và ngay cả liên kết phân tử. Chúng ta cũng có những kết nối xã hội với bạn bè và gia đình. Tất cả những hệ thống này chứa đựng những điểm gọi là [[đỉnh|vòng tròn|giao điểm]], trong đó một số điểm được nối với nhau bởi [[cạnh|giới hạn|cặp]]. Trong toán học hệ thống này được gọi là [__đồ thị__](gloss:graph).
::: column(width=160)

    svg#graph0.graph.novertices.noedges(width="160" height="130")

:::
__Lý thuyết về đồ thị__ là môn học về đồ thị và các đặc tính của nó. Đây là một trong những vấn đề thú vị và trực quan nhất trong toán học, và nó có muôn vàn những ứng dụng quan trọng khác nhau trong đời sống:

    x-gallery(slide-width="300")
      div
        x-img(src="images/network1.jpg" width=260 height=260 lightbox)
        p.caption Hệ thống đường giao thông và đường ray
      div
        x-img(src="images/network6.jpg" width=260 height=260 lightbox)
        p.caption Tổ hợp mạch điện
      div
        x-img(src="images/network3.jpg" width=260 height=260 lightbox)
        p.caption Hệ thống phân phối
      div
        x-img(src="images/network2.jpg" width=260 height=260 lightbox)
        p.caption Mối quan hệ bạn bè
      div
        x-img(src="images/network7.jpg" width=260 height=260 lightbox)
        p.caption Mạng tế bào thần kinh
      div
        x-img(src="images/network4.jpg" width=260 height=260 lightbox)
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
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg
> section: bridges

## Những cây cầu ở Königsberg

::: column.grow
Một trong những nhà Toán học đầu tiên nghĩ về đồ thị và mạng lưới là [Leonhard
Euler](bio:euler). Euler rất hứng thú về một bài toán lâu đời ở thị trấn Königsberg gần Biể Baltic.

Con sông Pregel phân chia thị trấn Königsberg thành 4 khu vực khác nhau, được kết nối bởi 7 cây cầu. Liệu có thể có cách nào đi một vòng thành phố và đi qua tất cả 7 cây cầu – và chỉ đi qua mỗi cây cầu đúng 1 lần không? ( Bạn có thể bắt đầu và kết thúc ở bất kỳ điểm nào, không nhất thiết phải cùng một chỗ.)

Tìm giải pháp bằng cách vẽ đường đi trên bản đồ dưới đây:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

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

---
> id: bridges-3
> goals: dropdown

Cũng như bản đồ ở trên, ta thấy rằng một số đồ thị có giải pháp khả thi trong khi một số khác thì không. Để hiểu vì sao chúng ta có thể đánh số [cấp độ](gloss:graph-degree) của mỗi đỉnh trong đồ thị.
:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Giá trị
        div(value="size") Nhỏ và lớn
        div(value="prime") Số nguyên tố và số đa hợp
        div(value="eo") Chẵn lẽ
      .box
        p(style="margin: 0"): strong Những đồ thị này khả thi:
        include svg/vertex-orders-1.svg
        p(style="margin: 1em 0 0"): strong Những đồ thị này không khả thi:
        include svg/vertex-orders-2.svg

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

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

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

{.reveal(when="blank-0")} Ví dụ, [hai cái bắt tay đầu tiên
ở hàng trên cùng](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) thực ra là một. Số cái bắt tay đúng cho ${n}{n|5|2,25,1} người tham dự là <mfrac><mrow>${n} ×
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
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Đồ thị phẳng

::: column.grow
Sau đây là một bài toán khác liên quan đến lý thuyết đồ thị.

Trong một ngôi làng nhỏ có 3 nhà máy sản xuất nước, gas và điện. Trong làng cũng có 3 ngôi nhà là khách hàng tiềm năng. Do kết cấu xây dựng của làng, các ống dẫn không được phép cắt ngang nhau.
::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Hãy thử kết nối các nhà máy với nhà của khách hàng sao cho các đường dẫn không cắt ngang nhau:

    .box.no-padding
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

::: .box.f-blue

#### Planarity

    x-solved
    svg#planarity.frame(viewBox="0 0 640 320")

Đây là đồ thị phẳng nhưng ${n}{n|7|5,20,1} đỉnh đã bị xáo trộn. Hãy sắp xếp lại các cạnh này sao cho chúng không cắt nhau.

    p.btn-row: button.btn Thử đồ thị khác

:::

---
> id: euler

### Công thức Euler

Tất cả các đồ thị phẳng chia mặt phẳng thành nhiều vùng khác nhau,
được gọi là __các mặt__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Đỉnh
[[5]] Mặt
[[10]] Cạnh
_{span.euler-sum} 11 Đỉnh + Mặt_
::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Đỉnh
[[7]] Mặt
[[14]] Cạnh
_{span.euler-sum} 15 Đỉnh + Mặt_
::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Đỉnh
[[13]] Mặt
[[24]] Cạnh
_{span.euler-sum} 25 Đỉnh + Mặt_
:::

---
> id: euler-1

Khi so sánh các con số này, bạn sẽ nhận thấy rằng số cạnh luôn [[ít hơn một|lớn hơn|bằng]] số mặt cộng với số đỉnh. Hay nói cách khác, _{.b.blue}F_ + _{.b.green}V_ = _{.b.red}E_ + 1. Kết quả này được gọi là __phương trình Euler__ đặt theo tên của [nhà toán học](bio:euler) đã giải bài toán những cây cầu ở Königsberg.

Đáng tiếc là có vô vàn các đồ thị và chúng ta không thể kiểm chứng hết tất cả để chứng minh phương trình của Euler. Thay vào đó chúng ta có thể cố gắng tìm ra một [bằng chứng](gloss:proof) đơn giản có thể áp dụng cho bất kỳ đồ thị nào…

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

      .legend(slot="legend") Bắt đầu từ đồ thị đơn giản nhất chứa duy nhất một đỉnh. Chúng ta có thể dễ dàng kiểm tra theo phép tính ở trên đây cho thấy phương trình Euler đúng.
      .legend(slot="legend") Cho vào thêm một đỉnh. Chúng ta thêm vào 1 cạnh, và phương trình Euler vẫn đúng.
      .legend(slot="legend") Nếu chúng ta thêm vào đỉnh thứ 3 thì có hai khả năng xảy ra. Chúng ta có thể tạo một tam giác nhỏ: vậy là có thêm một đỉnh, một mặt và hai cạnh, phương trình Euler vẫn đúng.
      .legend(slot="legend") Hoặc chỉ đơn giản là nối dài đường sẵn có: vậy là có thêm một đỉnh và một cạnh, phương trình Euler đúng.
      .legend(slot="legend") Cứ tiếp tục như vậy: lúc này chúng ta tạo nên một tứ giác nghĩa là có thêm một đỉnh, hai cạnh và một mặt.Phương trình Euler vẫn đúng.

---
> id: euler-3

Bất kỳ đồ thị (có giới hạn) nào đều có thể bắt đầu từ một đỉnh và thêm từng đỉnh mới vào. Chúng ta đã thấy rằng dù thêm đỉnh vào theo cách nào, phương trình Euler vẫn đúng. Do đó phương trình Euler cũng đúng với mọi loại đồ thị.
Euler’s equation is valid. Therefore it is valid for all graphs.

Quy trình chúng ta vừa sử dụng để chứng minh phương trình Euler được gọi là __phương pháp quy nạp Toán học__. Đây là kỹ năng rất hữu dụng sử dụng để chứng minh kết quả của nhiều bài toán khác nhau, đơn giản chỉ bằng khởi điểm từ trường hợp đơn giản nhất, chứng minh kết quả vẫn đúng với mỗi bước phát triển lên thành trường hợp phức tạp hơn.
    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Rất nhiều đồ thị phẳng trông tương tự như mạng lưới của [hình đa diện](gloss:polyhedron),
là những hình không gian ba chiều với [đa diện](gloss:polygon) các mặt. Nếu ta xem hình đa diện được làm từ những sợi dây cao su, chúng ta có thể tưởng tượng ra việc kéo chúng về một mặt phẳng, thành các đồ thị phẳng:

    .row
      .grow: x-img-sequence(src="images/cube/cube#.png" pages=32 width=300 height=300)
      .grow: x-img-sequence(src="images/dodecahedron/dodeca#.png" pages=32 width=300 height=300)

---
> id: euler-5

Điều này có nghĩa là chúng ta không những có thể sử dụng công thức Euler cho đồ thị phẳng mà còn có thể dùng cho tất cả các hình đa diện - với một điểm khác biệt nhỏ. Khi chúng ta chuyển hình đa diện thành đồ thị, một trong các mặt sẽ biến mất: đó là mặt trên cùng trở thành "vòng ngoài" của đồ thị.

Nói cách khác, nếu bạn đếm số __{.red}cạnh__, __{.blue}mặt__ and
__{.green}đỉnh__ của _bất kỳ_ hình đa diện nào, bạn sẽ thấy rằng _{.b.blue}F_ +
_{.b.green}V_ = _{.b.red}E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Khối hai mươi mặt__
một trong 5 [Khối đa diện Platon](/course/polyhedra/platonic)
__{.blue}20__ Mặt, __{.green}12__ Đỉnh and __{.red}30__ Cạnh
::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Khối 60 mặt__
một trong 13 [Khối đa diện Archimedean](/course/polyhedra/platonic#archimedean)
__{.blue}62__ Mặt, __{.green}60__ Đỉnh and __{.red}120__ Cạnh
::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" credit="pond5.com" hover loop)

{.caption} __Bóng đá, hay *Khối 20 mặt cụt*__
__{.blue}32__ Mặt (12 black and 20 white),
__{.green}60__ Đỉnh và__{.red}90__ Cạnh
:::

---
> id: maps
> section: map-colouring

## Tô màu bản đồ

::: column.grow
Chúng ta đã dùng lý thuyết đồ thị với một số bản đồ nhất định. Nếu chúng ta zoom hình bản đồ ra, mỗi con đường và cây cầu sẽ biến mất và thay vào đó là hình ảnh biên giới của cả nước.

Khi tô màu một bản đồ - hay một bản vẽ gồm nhiều vùng khác nhau– các vùng liền kề nhau không được tô cùng một màu. Và chúng ta cũng muốn sử dụng càng ít màu càng tốt.

Một số “bản đồ” đơn giản, như bàn cờ vua, chỉ cần hai màu (đen và trắng),
nhưng hầu hết các bản đồ phức tạp hơn cần nhiều màu hơn.
::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3

Khi tô màu bản đồ của các tiểu  bang của Mỹ, hiển nhiên 50 màu chắc chắn là đủ, nhưng không cần thiết. Hãy thử tô màu bản đồ dưới đây sử dụng càng ít màu càng tốt:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 Hoa Kỳ #[span.check(when="map-0")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-1.svg
        button.btn.clear Clear
      .tab
        h3 Nam Phi #[span.check(when="map-1")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Đức #[span.check(when="map-2")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 Anh #[span.check(when="map-3")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2

::: column.grow
Tất cả các bản đồ ở trên đều có thể được tô với chỉ 4 màu khác nhau, và cũng không khó để tưởng tượng được rằng các bản đồ phức tạp khác có thể cần nhiều màu hơn. Thực tế một số bản đồ cần __ít nhất__ bốn màu, khi bản đồ có 4 vùng kết nối với nhau.
::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Tương tự như trước, chúng ta có thể chuyển đổi bản đồ với vùng miền khác nhau thành một đồ thị phẳng: với mỗi vùng trở thành [[một đỉnh|một cạnh|một mặt]], và các vùng
[[có chung biên giới|có cùng một màu]] kết nối với nhau bởi một cạnh:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Bây giờ chúng ta muốn tô màu các đỉnh của đồ thị,
và hai đỉnh phải có màu khác nhau nếu chúng được kết nối bằng một cạnh.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow
Năm 1852, một sinh viên thực vật học [Francis Guthrie](bio:guthrie) phải tô màu các vùng của nước Anh. Ông quan sát được rằng hầu như chỉ cần 4 màu là đủ với bất kỳ bản đồ nào Ông thử, nhưng Ông tìm được minh chứng rằng quy tắc 4 màu này áp dụng được cho _tất cả_ các bản đồ. Điều này thực ra là một bài toán cực kỳ khó, được biết đến với cái tên __định lý bốn màu__.

Trong suốt 100 năm sau đó, rất nhiều nhà toán học tìm cách công bố các chứng minh khác nhau cho định lý này, để rồi sau đó phát hiện ra nhiều lỗi. Trong số đó có những cách chứng minh có vẻ hết sức thuyết phục khiến phải mất hơn 10 năm mới phát hiện ra lỗi của nó.

Trong một thời gian dài, nhiều nhà toán học không tìm được cách chứng minh chỉ cần dùng 4 màu là đủ hoặc đưa ra các bản đồ cần dùng hơn 4 màu.
:::

---
> id: maps-4

Không có gì tiến triển về bài toán 4 màu cho đến năm 1976, khi [Wolfgang Haken](bio:haken) và [Kenneth Appel](bio:appel) sử dụng máy tính để giải bài toán này. Họ gom vô vàn kiểu bản đồ khác nhau thành 1936 kiểu bản đồ cụ thể, mỗi bản đồ được kiểm tra bởi máy tính, tổng cộng hết tất cả 1000 giờ đồng hồ.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Định lý bốn màu là định lý toán học nổi tiếng đầu tiên dược chứng minh sử dụng máy tính, một phương pháp ngày càng thông dụng và bớt tranh cãi hơn từ đó. Máy tính càng nhanh với thuật toán càng hiệu quả giúp giải bài toán nhanh hơn và ngày nay bài toán bốn màu có thể được giải chỉ trong vài giờ.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Dấu bưu điện của Khoa toán học, trường Đại học <br/>Illinois Urbana-Champaign, nơi Haken và Appel đã làm việc.

---
> id: maps-6

::: column.grow
Định lý bốn màu chỉ áp dụng được cho các bản đồ ở mặt phẳng và toàn bộ các vùng trên bản đồ chỉ là một vùng duy nhất.

Tuy nhiên, các nhà toán học cũng nghiên cứu cả các bản đồ của _các đế chế_, khi các đế chế này có thể có nhiều vùng không kết nối với nhau, và cả những bản đồ thuộc hệ khác, như hình xuyến (hình bánh doughnut). Trong trường hợp này có lẽ bạn cần hơn 4 màu và việc chứng minh trở nên khó khăn hơn nhiều.
::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman

## Bài toán vận chuyển của người bán hàng

::: column.grow(parent="right")
Hãy cùng suy nghĩ thêm một lần nữa về bản đồ và mạng lưới. Hãy tưởng tượng rằng một hệ thống giao hàng hóa phải đi qua ${tsn}{tsn|8|2,50,1} thành phố khác nhau để giao hàng. Chúng ta có thể xem các thành phố này là các đỉnh của đồ thị. Nếu tất cả các thành phố đều kết nối với nhau bằng những con đường, đây là [[đồ thị hoàn chỉnh|vòng tròn|đồ thị hai phía]],
do đó có tổng cộng <mfrac><mrow>${tsn} × (${tsn} – 1)</mrow><mn>2</mn></mfrac> =
${tsn*(tsn-1)/2} cạnh.

Chiếc xe tải đi giao hàng phải đi qua hết các thành phố, theo bất kỳ thức tự nào. Trong bài toán về những cây cầu Königsberg
chúng ta muốn tìm thấy những con đường đi qua _mỗi cạnh_ chỉ đúng một lần. Bây giờ chúng ta muốn tìm con đường đi qua _các đỉnh_ đúng một lần. Những con đường này được gọi là __các vòng Hamiltonian__.
::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Có vô vàn các khả năng khác nhau của các vòng Hamiltonian trong đồ thị hoàn chỉnh. Thực tế, chúng ta có thể lấy bất kỳ đỉnh nào làm điểm khởi đầu và chọn bất kỳ thành phố còn lại nào theo bất kỳ thứ tự nào:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

Trong bản đồi với ${tsn1}{tsn1|4|2,10,1} thành phố, mỗi vòng Hamiltonian phải có ${tsn1} thành phố. Bây giờ,

    ul.var ${tsmString(tsn1)}

Điều này có nghĩa là, tổng cộng có ${tsnPaths(tsn1)} cách đi. Viết tắt của kết quả này là ${tsn1}! hoặc ${tsn1} __Giai thừa__.

Bạn có thể tưởng tượng rằng không thể di chuyển giữa hai thành phố mà không đi qua các thành phố khác. Trong trường hợp này ta không có một đồ thị hoàn chỉnh nữa, và tìm kiếm số lượng các vòng Hamiltonian, nếu có tồn tại, là hết sức khó khăn.

---
> id: salesman-3

::: column.grow(parent="right")
Cho tới lúc này chúng ta đã bỏ qua thực tế là một số thành phố có thể xa nhau hơn những thành phố khác. Trong ứng dụng thực tế xem xét điều này là rất quan trọng: vì chúng ta không chỉ muốn tìm đường đi _bất kỳ_ mà là đường đi ngắn nhất. Bài toán này được gọi là __Bài toán vận chuyển của người bán hàng__. Bài toán này phải được giải không chỉ cho việc vận chuyển và hậu cần (logistics), mà có liên quan đến việc lắp đặt linh kiện bán dẫn và microchips, để làm cho máy tính nhanh hơn, hay được sử dụng để phân tích cấu trúc của [DNA](gloss:dna).

Một phương pháp đơn giản là tìm tất cả các đường đi có thể có, tìm độ dài đường đi của mỗi con đường và chọn ra phương án đi ngắn nhất. Tuy nhiên ta vừa thấy rằng, duy với ${tsn2}{tsn2|10|2,20,1} thành phố đã có ${tsn2}! = ${factorial(tsn2)}
con đường khác nhau. Một khi bạn có hàng trăm hay hàng ngàn đỉnh, việc tìm kiếm các con đường khác nhau là bất khả thi, ngay cả khi bạn dùng máy tính mạnh nhất.
::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4

Rất tiếc là không có thuật toán nào hiệu quả hơn để giải bài toán vận chuyển của người bán hàng. Thay vào đó, các nhà toán học và nhà khoa học máy tính đã cùng nhau phát triển một số thuật toán tìm ra những giải pháp _tốt_, mặc dù nó không phải là giải pháp tốt nhất. Những thuật toán này chỉ cho ra những giải pháp ước chừng được gọi là __Heuristics__.

Hãy thử sắp xếp lại vị trí của các thành phố trên bản đồ sau. Bạn có thể loại bỏ một thành phố bằng cách nhấn vào thành phố và nhấn vào một chỗ khác để thêm thành phố vào.

    .tsm-wrap.frame.fill.clearfix
      .tsm-box: svg

---
> id: salesman-5

::: column.grow
__Thuật toán tham lam__ (hay thuật toán Hàng xóm gần nhất) rất đơn giản: bạn xuất phát từ một thành phố bất kỳ và tiếp tục di chuyển đến các thành phố gần nhất mà bạn chưa đi qua. Khi bạn đã đi qua hết tất cả các thành phố thì dừng lại.
::: column(width=300)
{.todo} Sẽ có hình ảnh bổ sung sớm…
:::

Bạn thấy rằng, trung bình, các đường đi tìm thấy sử dụng "thuật toán tham lam" thì thường dài hơn 25% so với phương án các đường đi ngắn nhất.

---
> id: salesman-6

::: column.grow
__Thuật toán 2-Opt__ bắt đầu với con đường bất kỳ ngẫu nhiên. Sau đó bạn liên tục chọn hai cạnh và đổi lại nếu chúng giúp giảm chiều dài đường đi. Bạn dừng lại khi bạn không thể đổi hai cạnh được nữa  để rút ngắn chiều dài đường đi.
::: column(width=300)
{.todo} Sẽ có hình minh họa sớm…
:::

---
> id: ants

Rốt cuộc là, rất lâu trước khi máy tính ra đời, thiên nhiên đã có cách thông minh tìm ra đường đi tối ưu giữa các địa điểm: thể hiện ở bầy kiến.

    x-parallax.full-width(background="images/ants.jpg")

Những chú kiến muốn tìm thấy đường đi ngắn nhất giữa tổ của chúng và nguồn thức ăn tìm thấy. Chúng có thể liên lạc với nhau bằng cách tiết ra chất đánh dấu đường đi, giúp những chú kiến khác đi theo.

---
> id: ants-1

::: column.grow

* Đàn kiến gửi đi một số chú tiên phong, đi theo các hướng ngẫu nhiên khác nhau. Một khi một chú tìm được nguồn thức ăn sẽ quay về tổ, để lại dấu vết trên đường đi là chất pheromone.
* Những chú kiến khác một khi bắt gặp đường đánh dấu đó thì sẽ đi theo đến nguồn thức ăn. Và trên đường trở về, mỗi chú kiến lại tiết ra chất pheromone, để khẳng định đánh dấu đường đi.
* Thời gian trôi qua, chất pheromone bốc hơi. Đường đi càng dài thì càng mất thời gian và chất pheromone càng dễ bay hơi. Những con đường ngắn, mặt khác, sẽ được khẳng định và đánh dấu lại nhanh chóng hơn, bởi vậy sức mạnh của đàn kiến sẽ tăng lên.

::: column(width=240)
{.todo} Biểu đồ đang được cập nhật…
:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow
Các thuật toán liên quan đến Hệ thống Bầy Kiến (Ant Colony System - ACS) tìm cách bắt chước hệ thống này trên máy tính,
sử dụng nhiều chú kiến “ảo”. Chúng có thể nhaanh chóng tìm ra giải pháp tốt cho bài toán vận chuyển của người bán hàng.

Một điểm đặc biệt hữu dụng của thuật toán ACS là chúng có thể chạy liên tục và thích nghi theo thời gian thực với những thay đổi của đồ thị. Những thay đổi này có thể gây ra do tai nạn, tắt đường trên hệ thống giao thông, hay sự tăng đột biến kết nối vào các trang web hay hệ thống máy tính.
:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow
Bài toán vận chuyển của người bán hàng khó ở mức độ NP [NP-hard](gloss:np), nghĩa là rất khó để giải quyết bằng máy tính (với số lượng lớn các thành phố).

Tìm ra được thuật toán nhanh và chính xác sẽ có tác động rất lớn vào ngành khoa học máy tính: nghĩa là sẽ có thuật toán nhanh cho _tất cả_ các bài toán khó mức độ NP-hard. Nó cũng làm cho hầu hết các hệ thống an ninh internet vô dụng, vốn được xây dựng dựa trên nền tảng có những bài toán phức tạp máy tính không giải được.

Tìm được một thuật toán nhanh giải quyết bài toán vận chuyển của người giao hàng cũng giúp giải quyết một trong những bài toán khó nổi tiếng trong toán học và khoa học máy tính, bài toán __P vs NP__. Đây là một trong 7 [Bài toán khó thế kỷ](gloss:millennium-prize) (Millenium Prize Problems), mỗi bài toán có giải thưởng 1 triệu đô.
:::

---
> section: scheduling
> sectionStatus: dev

## Vấn đề lập kế hoạch

TODO

---
> id: applications
> section: applications

## Đồ thị trong cuộc sống hằng ngày

Qua khóa học này chunsg ta nhìn thấy được ứng dụng của nhiều lý thuyết đồ thị khác nhau, dù có sự sắp xếp. Hóa ra các đồ thị lại là trọng tâm của nhiều vật dụng và khái niệm hằng ngày quanh chúng ta.

::: column.grow
Ví dụ như mạng internet là một đồ thị ảo cực lớn. Mỗi đỉnh là một trang web, và mỗi cạnh là đường kết nối giữa hai trang. Ghi nhớ rằng các đường dẫn internet chỉ đi một phía, vậy đồ thị này là đồ thị [[có hướng|đa đường|kết nối]], và đồ thị này _rất, rất, lớn_.

Một số trang web, như Wikipedia hay Facebook, có rất nhiều đường dẫn, trong khi các trang web khác có ít đường dẫn hơn. Đây là nguyên tắc chính để Google sắp xếp các kết quả tìm kiếm.

::: column(width=240)

    img(credit="© Various" src="images/internet.png" width=240 height=240)

:::

---
> id: applications-1

Các trang web với nhiều đường dẫn tới thường sẽ có chất lượng cao hơn và được đưa lên đầu trang kết quả tìm kiếm. Ví dụ, khi gõ tìm "London", các trang web chính thức về du lịch London được đưa lên trước những trang bán hàng ở London, hay các trang blog của những người sống ở London. Ý tưởng đơn giản này xuất phát từ lý thuyết đồ thị, __thuật toán xếp hạng trang__ (Page Rank Algorithm), đã làm cho Google trở thành công cụ tốt hơn nhiều so với các công cụ tìm kiếm ra đời lúc ban đầu.

---
> id: applications-2

Mạng internet là mạng lớn nhất được con người tạo ra từ trước đến nay. Hình ảnh dưới đây minh họa cho một phần rất nhỏ các servers được kết nối vào internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Trong khi các trang web và đường dẫn tạo nên một đồ thị _ảo_, có cả các
đồ thị _vật lý_ của các máy tính, servers, routers, đường điện thoại và đường cáp.

::: column.grow(parent="right")
Mỗi lần bạn thực hiện một cuộc gọi hay mở một trang web, các tổng đài trong mạng lưới phải tìm cách kết nối người gửi và người nhận, mà không làm quá tải từng đường cáp hay đường truyền kết nối. Lý thuyết đồ thị và lý thuyết xác suất giúp ta có được dịch vụ tin cậy, ví dụ như tìm đường dẫn khác khi một số kết nối bị bận.
::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Lý thuyết đồ thị cũng có vai trò quan trọng trong giao thông và định hướng. Tất cả các chuyến bay, chuyến tàu, và hệ thống tàu điện ngầm tạo nên đồ thị, được sử dụng để sắp xếp thời gian biểu một cách hiệu quả. Một trong những đồ thị dễ nhận ra nhất là Bản đồ Tàu điện ngầm ở London:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow
Tất cả các con đường và đường cao tốc cùng tạo nên một đồ thị lớn, được sử dụng bởi các dịch vụ định vị như Google Maps khi tìm đường đi ngắn nhất giữa hai vị trí.
::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow
Trong tương lai, __Các hệ thống vận chuyển thông minh__ sẽ giảm thiểu kẹt xe và tai nạn bằng cách hướng dẫn xe đi một cách hiệu quả hơn, sử dụng địa điểm thu thập được từ những chiếc điện thoại thông minh hay xe tự lái. Điều này có thể giúp tiết kiệm hàng triệu giờ phí phạm mỗi năm trên đường, giảm thiểu ô nhiễm và giúp các dịch vụ khẩn khấp di chuyển nhanh hơn.
:::

---
> id: applications-6

Ảnh này thể hiện mạng lưới các chuyến bay qua Bắc Âu.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Có vô vàn các đồ thị khác trong khoa học kỹ thuật và cuộc sống hằng ngày:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Kết nối nguyên tử giữa các __phân tử__ và lưới tinh thể tạo nên đồ thị.
::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} Sự __lây truyền bệnh__ và đại dịch cũng được mô tả sử dụng đồ thị.
::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} Trong Sin học, __cây tiến hóa__ cho thấy tổ tiên của các loài kết nối với nhau tạo nên đồ thị.
::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Các thành phần khác nhau của __các mạch điện__ và các con chips máy tính tạo nên mạng lưới.
::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Cấu trúc ngữ pháp của __các ngôn ngữ__ có thể được minh học sử dụng đồ thị, ví dụ để tạo nên các thuật toán dịch ngôn ngữ.
::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Đồ thị cũng có nhiều ứng dụng khác trong __xác suất__, __lý thuyết trò chơi__ and __các bài toán tài chính__.
:::

---
> id: social

### Mạng xã hội

Cuối cùng, hãy nghĩ về một ví dụ rất tốt sử dụng đồ thị trong cuộc sống hằng ngày của chúng ta: mạng xã hội. Ở đây các đỉnh tượng trưng cho [[con người|bạn bè|mạng lưới]] và các cạnh tượng trưng cho mối quan hệ bạn bè, đăng ký, hay theo dõi.

Khi chúng ta vẽ các mạng xã hội, chúng ta có thể thấy rõ các __cụm__ (clusters) của những người bạn chung, những người học cùng nhau hay sống trong cùng một thành phố. Chúng ta cũng xác định được __trung tâm__ của mỗi người, tùy thuộc vào việc các đỉnh kết nối tốt với nhau như thế nào, và có thể đo lường được mức độ nổi tiếng của người đó trên mạng xã hội.
    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow
Năm 2014, Facebook có tổng cộng 1.4  tỷ người sử dụng tích cực và có hơn 200 tỷ kết nối. Nửa số người sử dụng Facebook có hơn 200 người bạn, và bởi vì mỗi người bạn của chúng ta cũng có khoảng chừng đó số bạn, chúng ta dễ dàng có được cả ngàn _người bạn của bạn_.

Một câu hỏi thú vị đặt ra là nối bạn chọ ngẫu nhiên hai người sử dụng Facebook bất kỳ, có bao nhiêu "cạnh mối quan hệ" bạn đi theo để nối với nhau? Ví dụ, khoảng cách giữa các người bạn kết nối trực tiếp là [[1]], và khoảng cách giữa bạn với bạn của bạn là [[2]], v...v...
::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Dựa theo một [nghiên cứu](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/)
Facebook thực hiện vào năm 2016, bạn, trung bình, kết nối với bất kỳ người nào trên FB thông qua nhiều nhất 3.57 người khác: chúng ta gọi là 3.57 __độ cách biệt__.

Nói cách khác, nếu bạn chọn ngẫu nhiên bất kỳ người nào trong hàng tỷ người sử dụng Facebook trên thế giới, người đó sẽ có một người bạn của một người bạn biết một người bạn của một trong những người bạn của bạn. Và điều này áp dụng cho cả người nổi tiếng, chính trị gia và người trong hoàng tộc...

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow
Năm 1929, khi một tách giả người Hungary [Frigyes Karinthy](bio:karinthy) đầu tiên đưa ra ý tưởng “6 Độ Cách Biệt”, lúc đó chưa có internet hay mạng xã hội, nhưng thế giới đã trở nên kết nối rộng rãi hơn bao giờ hết.

Năm 1967, [Stanley Milgram](bio:milgram) thực hiện thí nghiệm  khảo nghiệm đầu tiên, trong đó 296 người tham dự sống ở Nebraska và Kansas được yêu cầu giao một bức thư cho một người cụ thể sống ở Boston, Massachusetts. Người tham gia phải chọn một người bạn họ biết để chuyền tay bức thư đó và chuyển tiếp cho một người khác. Mỗi bước, lá thư di chuyển đến gần Boston hơn. Milgram tìm ra rằng, trung bình, chỉ có 5.2 bạn trung gian &#8211; 5.2 độ cách biệt.
:::

Ngày nay, mỗi chúng ta là một phần của vô vàn các đồ thị vô hình, là gốc của những kết nối xã hội, du lịch, internet và khoa học, kỹ thuật và còn nhiều hơn thế nữa.
