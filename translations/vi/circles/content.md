# Vòng tròn và Pi

## Giới thiệu

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

Từ lâu, con người đã tồn tại, chúng ta đã nhìn lên bầu trời và cố gắng giải thích sự sống trên Trái đất bằng chuyển động của các ngôi sao, hành tinh và mặt trăng.

Các nhà thiên văn học Hy Lạp cổ đại là những người đầu tiên phát hiện ra rằng tất cả các thiên thể di chuyển trên những con đường thông thường, được gọi là __quỹ đạo__ . Họ tin rằng những quỹ đạo này luôn có hình tròn. Xét cho cùng, các vòng tròn là các hình dạng hoàn hảo nhất của tất cả các hình dạng: đối xứng theo mọi hướng, và do đó là một lựa chọn phù hợp cho trật tự cơ bản của vũ trụ của chúng ta.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} Trái đất là trung tâm của _vũ trụ Ptolemy_ .

:::

---
> id: radius
> goals: compass

Mỗi điểm trên một [__vòng tròn__](gloss:circle) có cùng khoảng cách từ tâm của nó. Điều này có nghĩa là chúng có thể được vẽ bằng [la bàn](gloss:compass) :

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

{.reveal(when="compass")} Có ba phép đo quan trọng liên quan đến vòng tròn mà bạn cần biết:

* {.reveal(when="compass" delay="1000")} Các [{.pill.red.b} bán kính](target:r) là khoảng cách từ tâm của vòng tròn đến vành ngoài của nó.
* {.reveal(when="compass" delay="4000")} Các [{.pill.blue.b} đường kính](target:d) là khoảng cách giữa hai điểm đối diện trên một vòng tròn. Nó đi qua trung tâm của nó, và chiều dài của nó là [[hai lần | một nửa | giống như]] bán kính.
* {.reveal(when="blank-0")} Các [{.pill.green.b} chu vi](target:c) (hay chu vi) là khoảng cách xung quanh một vòng tròn.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Một thuộc tính quan trọng của vòng tròn là tất cả các vòng tròn đều [giống nhau](gloss:similar) . Bạn có thể chứng minh rằng bằng cách hiển thị cách tất cả các vòng tròn có thể được khớp với nhau bằng cách sử dụng các [bản dịch](gloss:translation) và độ [giãn](gloss:dilation) đơn giản:

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Bạn có thể nhớ rằng, đối với các đa giác tương tự, tỷ lệ giữa các cạnh tương ứng luôn không đổi. Một cái gì đó tương tự hoạt động cho các vòng tròn: tỷ lệ giữa [chu vi](gloss:circle-circumference) và [đường kính](gloss:circle-diameter) là bằng nhau cho _tất cả các vòng tròn_ . Nó luôn là 3.14159, một con số bí ẩn có tên là [__Pi__](gloss:pi) , thường được viết là chữ Hy Lạp _π_ cho tiếng pát. Pi có vô số chữ số thập phân cứ kéo dài mãi mà không có mẫu cụ thể nào:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Đây là một bánh xe có đường kính 1. Khi bạn mở khóa chu vi, bạn có thể thấy rằng chiều dài của nó là chính xác [[`pi`|`2 * pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Đối với hình tròn có đường kính _d_ , chu vi là `C = π × d` . Tương tự, đối với đường tròn có [bán kính](gloss:circle-radius) _r_ , chu vi là

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] .

---
> id: nature

Các vòng tròn hoàn toàn đối xứng và chúng không có bất kỳ điểm yếu nào của điểm giống như các góc của đa giác. Đây là một trong những lý do tại sao chúng có thể được tìm thấy ở mọi nơi trong tự nhiên:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Những bông hoa

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Những hành tinh

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Cây

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Trái cây

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Bọt xà phòng

:::

{.r} Và còn rất nhiều ví dụ khác: từ cầu vồng đến gợn nước. Bạn có thể nghĩ về bất cứ điều gì khác? [Tiếp tục](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Nó cũng chỉ ra rằng một vòng tròn là hình dạng có diện tích lớn nhất cho một chu vi nhất định. Ví dụ: nếu bạn có một sợi dây có chiều dài 100 \ m, bạn có thể sử dụng nó để bao quanh không gian lớn nhất nếu bạn tạo thành một vòng tròn (thay vì các hình dạng khác như hình chữ nhật hoặc hình tam giác).

Trong tự nhiên, các vật thể như giọt nước hoặc bọt khí có thể _tiết kiệm năng lượng_ bằng cách trở thành hình tròn hoặc hình cầu, và giảm diện tích bề mặt của chúng.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Chu vi_ = __{.m-green} 100__ , _Diện tích_ = __${area}__

:::

---
> id: area
> goals: slider

### Diện tích hình tròn

Nhưng làm thế nào để chúng ta thực sự tính diện tích của một vòng tròn? Chúng ta hãy thử cùng một kỹ thuật mà chúng ta đã sử dụng để [tìm diện tích tứ giác](/course/polyhedra/quadrilaterals) : chúng ta cắt hình thành nhiều phần khác nhau, sau đó sắp xếp lại chúng thành một hình dạng khác nhau mà chúng ta đã biết diện tích (ví dụ hình chữ nhật hoặc hình tam giác).

Sự khác biệt duy nhất là, bởi vì các vòng tròn bị cong, chúng ta phải sử dụng một số phép tính gần đúng:

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

Ở đây bạn có thể thấy một vòng tròn được chia thành ${toWord(n1)} giày cao gót đế bằng. Di chuyển thanh trượt, để sắp xếp các nêm trong một hàng.

{.reveal(when="slider")} Nếu chúng ta tăng số lượng nêm lên ${n1}{n1|6|6,30,2} , hình dạng này bắt đầu trông ngày càng giống [[hình chữ nhật | vòng tròn | hình vuông]] .

{.reveal(when="blank-0")} Chiều cao của hình chữ nhật bằng [[bán kính | chu vi | đường kính]] của vòng tròn. _{span.reveal(when="blank-1")} Chiều rộng của hình chữ nhật bằng [[một nửa chu vi | chu vi | hai lần bán kính]] của vòng tròn._ _{span.reveal(when="blank-2")} (Lưu ý cách một nửa các nêm úp xuống và một nửa trong số chúng úp lên.)_

{.reveal(when="blank-2" delay=1000)} Do đó, tổng diện tích của hình chữ nhật là khoảng `A = π r^2` .

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

Ở đây bạn có thể thấy một vòng tròn được chia thành ${toWord(n)} Nhẫn. Giống như trước đây, bạn có thể di chuyển thanh trượt sang các vòng khác.

{.reveal(when="slider")} Nếu chúng ta tăng số lượng nhẫn lên ${n2}{n2|4|2,12,1} , hình dạng này bắt đầu trông giống như một [[hình tam giác | hình chữ nhật | hình thang]] .

{.reveal(when="blank-0")} Chiều cao của tam giác bằng [[bán kính | đường kính | chu vi]] của vòng tròn. _{span.reveal(when="blank-1")} Cơ sở của tam giác bằng [[chu vi | gấp đôi đường kính]] của vòng tròn._ _{span.reveal(when="blank-2")} Do đó, tổng diện tích của tam giác là khoảng_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` .

:::

---
> id: area-2

Nếu chúng ta có thể sử dụng vô số vòng hoặc nêm, các phép tính gần đúng ở trên sẽ hoàn hảo - và cả hai đều cho chúng ta cùng một công thức cho diện tích hình tròn:

{.text-center.r}`A = π r^2` . [Tiếp tục](btn:next)

---
> id: pi-approximations

### Tính Pi

Như bạn đã thấy ở trên, `π = 3.1415926…` không phải là một số nguyên đơn giản và các chữ số thập phân của nó sẽ tồn tại mãi mãi mà không có bất kỳ mẫu lặp lại nào. Các số có thuộc tính này được gọi là [__số vô tỷ__](gloss:irrational-numbers) và có nghĩa là `π` không thể được biểu thị dưới dạng một phần đơn giản `a/b` .

Điều đó cũng có nghĩa là chúng ta không bao giờ có thể viết ra _tất cả_ các chữ số của Pi - sau tất cả, có vô số. Các nhà toán học Hy Lạp và Trung Quốc cổ đại đã tính toán bốn chữ số thập phân đầu tiên của Pi bằng cách xấp xỉ các vòng tròn bằng cách sử dụng đa giác thông thường. Lưu ý cách, khi bạn thêm nhiều cạnh, đa giác bắt đầu trông [[ngày càng nhiều | ít hơn | chính xác]] như một vòng tròn:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

Năm 1665, [Isaac Newton](bio:newton) đã tính được 15 chữ số. Ngày nay, chúng ta có thể sử dụng các máy tính mạnh mẽ để tính giá trị của Pi với độ chính xác cao hơn nhiều.

Kỷ lục hiện tại là 31,4 nghìn tỷ chữ số. Một cuốn sách in chứa tất cả các chữ số này sẽ dày khoảng 400 \ km - đó là độ cao mà [Trạm vũ trụ quốc tế](gloss:iss) quay quanh Trái đất!

Tất nhiên, bạn không cần phải nhớ nhiều chữ số của Pi. Trong thực tế, phần nhỏ `22/7 = 3.142…` là một xấp xỉ lớn.

:::

---
> id: pi-sequence

Một cách tiếp cận để tính Pi là sử dụng các dãy số vô hạn. Đây là một ví dụ được phát hiện bởi [Gottfried Wilhelm Leibniz](bio:leibniz) vào năm 1676:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Khi chúng tôi tính toán ngày càng nhiều điều khoản của loạt bài này, luôn theo cùng một mẫu, kết quả sẽ ngày càng gần với Pi hơn.

---
> id: pi-colours
> goals: hover

::: column.grow

Nhiều nhà toán học tin rằng Pi có một tính chất thậm chí còn gây tò mò hơn: đó là một __con số bình thường__ . Điều này có nghĩa là các chữ số từ 0 đến 9 xuất hiện hoàn toàn ngẫu nhiên, như thể tự nhiên đã gieo xúc xắc 10 mặt vô hạn nhiều lần, để xác định giá trị của Pi.

Tại đây bạn có thể thấy 100 chữ số đầu tiên của Pi. Di chuyển qua một số ô, để xem cách các chữ số được phân phối.

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

Nếu Pi bình thường, điều đó có nghĩa là bạn có thể nghĩ về _bất kỳ_ chuỗi chữ số nào và nó sẽ xuất hiện ở đâu đó trong các chữ số của nó. Tại đây bạn có thể tìm kiếm một triệu chữ số đầu tiên của Pi - chúng có chứa ngày sinh của bạn không?

::: .box.f-red.pi-box

#### Một triệu chữ số của Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Chúng tôi thậm chí có thể chuyển đổi toàn bộ một cuốn sách, như Harry Potter, thành một chuỗi các chữ số rất dài (a = 01, b = 02, v.v.). Nếu Pi bình thường, chuỗi này sẽ xuất hiện ở đâu đó trong các chữ số của nó - nhưng phải mất hàng triệu năm để tính đủ các chữ số để tìm thấy nó.

Pi rất dễ hiểu, nhưng có tầm quan trọng cơ bản trong khoa học và toán học. Đó có thể là một lý do tại sao Pi trở nên phổ biến khác thường trong văn hóa của chúng tôi (ít nhất, so với các chủ đề khác của toán học):

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

Thậm chí còn có một _ngày Pi_ mỗi năm, rơi vào ngày 14 tháng 3, bởi vì `pi ≈ 3.14` hoặc vào ngày 22 tháng 7 vì `pi ≈ 22/7` .

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Độ và radian

> section: radians
> id: degrees
> translated: auto

Cho đến nay trong hình học, chúng ta luôn đo góc theo [độ](gloss:degrees) . Một __{.m-red} vòng tròn đầy đủ__ là [[360]]°, một __{.m-green} một nửa vòng tròn__ là [[180]]°, một __{.m-yellow} vòng tròn quý__ là [[90]]°, v.v.

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

{.r} Số 360 rất thuận tiện vì nó chia hết cho rất nhiều số khác: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, v.v. Điều này có nghĩa là nhiều phân số của một vòng tròn cũng là số nguyên. Nhưng bạn đã bao giờ tự hỏi số 360 đến từ đâu chưa? [Tiếp tục](btn:next)

---
> id: babylon

::: column.grow

Khi nó xảy ra, 360 độ là một trong những khái niệm lâu đời nhất trong toán học mà chúng ta vẫn sử dụng ngày nay. Chúng được phát triển ở Babylon cổ đại, hơn 5000 năm trước!

Vào thời điểm đó, một trong những ứng dụng quan trọng nhất của toán học là trong thiên văn học. _Mặt trời_ quyết định bốn mùa, mà nông dân phải biết khi trồng trọt. Tương tự, _mặt trăng_ xác định thủy triều, rất quan trọng đối với ngư dân. Mọi người cũng nghiên cứu các ngôi sao để dự đoán tương lai, hoặc để giao tiếp với các vị thần.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Một máy tính bảng Babylon để tính toán `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Các nhà thiên văn nhận thấy rằng các chòm sao có thể nhìn thấy vào một thời điểm cụ thể trong đêm đã thay đổi một chút xíu mỗi ngày - cho đến sau khoảng 360 ngày, chúng đã quay trở lại điểm xuất phát. Và đây có thể là lý do tại sao họ chia vòng tròn thành 360 độ.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Tất nhiên, thực sự có 365 ngày trong một năm (chính xác là 365.242199), nhưng các nhà toán học Babylon đã làm việc với các đồng hồ mặt trời đơn giản, và phép tính gần đúng này là hoàn toàn phù hợp.

Nó cũng hoạt động tốt với hệ thống số 60 cơ sở hiện tại của họ (kể từ đó `6 xx 60 = 360` ). Hệ thống này là lý do tại sao chúng ta vẫn có 60 giây trong một phút và 60 phút trong một giờ - mặc dù hầu hết các đơn vị khác được đo ở [cơ sở 10](gloss:base-10) (ví dụ 10 năm trong một thập kỷ hoặc 100 năm trong một thế kỷ).

::: column.grow

Đối với nhiều người trong chúng ta, đo góc theo độ là bản chất thứ hai: có video 360°, người trượt ván có thể kéo được 540 giây và ai đó thay đổi quyết định của họ có thể quay 180°.

Nhưng theo quan điểm toán học, việc lựa chọn 360 là hoàn toàn tùy ý. Nếu chúng ta đang sống trên Sao Hỏa, một vòng tròn có thể có 670° và một năm trên Sao Mộc thậm chí có 10,475 ngày.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 McFlip, xoay 540°

:::

---
> id: radians

### Xạ hương

Thay vì chia một vòng tròn thành một số phân đoạn (như 360 độ), các nhà toán học thường thích đo các góc bằng [chu vi](gloss:circle-circumference) của một [__vòng tròn đơn vị__](gloss:unit-circle) (một vòng tròn có bán kính 1).

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

Một [vòng tròn đầy đủ](action:setState(0)) có chu vi _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-0")} Cho một [Xoay nửa vòng tròn](action:setState(1)), khoảng cách tương ứng dọc theo chu vi là _{x-equation.small(solution="π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-1")} Cho một [xoay vòng tròn quý](action:setState(2)), khoảng cách dọc theo chu vi là _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ .

{.reveal(when="eqn-2")} Và như vậy: cách đo góc này được gọi là [__radian__](gloss:radians) (bạn có thể nhớ đây là đơn vị bán kính của thang điểm).

:::

---
> id: radians-conversion

Mỗi góc tính theo độ có kích thước tương đương tính bằng radian. Chuyển đổi giữa hai thứ rất dễ dàng - giống như bạn có thể chuyển đổi giữa các đơn vị khác như mét và km, hoặc Celsius và Fahrenheit:

{.text-center} __{.m-red} 360°__ _{span.space} = =_ __{.m-green} 2 rad _π___

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space} = =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space} = =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

Bạn có thể viết đánh giá radian hoặc là một bội số của _π,_ hoặc như chỉ là một số thập phân đơn. Bạn có thể điền vào bảng này kích thước góc tương đương theo độ và radian không?

| __{.m-red} độ__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radian__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Khoảng cách di chuyển

Bạn có thể nghĩ về radian khi khoảng cách của người du hành trên đường đi dọc theo chu vi của một vòng tròn đơn vị. Điều này đặc biệt hữu ích khi làm việc với các đối tượng đang di chuyển trên một đường tròn.

::: column.grow

Ví dụ: [Trạm vũ trụ quốc tế](gloss:iss) quay quanh Trái đất cứ sau 1,5 giờ. Điều này có nghĩa là __tốc độ quay của nó__ là [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] radian mỗi giờ.

{.reveal(when="blank-0")} Trong một [vòng tròn đơn vị](gloss:unit-circle) , tốc độ quay giống như tốc độ _thực tế_ , bởi vì độ dài của chu vi giống như một vòng quay đầy đủ tính bằng radian (cả hai đều `2pi` ).

{.reveal(when="blank-0" delay=1000)} Bán kính của quỹ đạo ISS là 6800 \ km, có nghĩa là tốc độ _thực tế_ của ISS phải là [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km mỗi giờ._

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

Bạn có thể thấy rằng, trong ví dụ này, radian là một đơn vị thuận tiện hơn nhiều so với độ không? Khi chúng ta biết tốc độ quay, chúng ta chỉ cần nhân với bán kính để có được tốc độ thực tế.

Đây là một ví dụ khác: xe của bạn có bánh xe với bán kính 0,25 \ m. Nếu bạn đang lái xe ở tốc độ 20 \ m / s, thì bánh xe của bạn sẽ quay ở [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radian mỗi giây _{span.reveal(when="blank-0")} (hoặc là `80/(2pi) = 13` vòng quay mỗi giây)._

---
> id: radians-trig

### Lượng giác

Đối với hầu hết các bài toán hình học đơn giản, độ và radian hoàn toàn có thể thay thế cho nhau - bạn có thể chọn câu nào bạn thích hoặc câu hỏi có thể cho bạn biết đơn vị nào sẽ đưa ra câu trả lời của bạn. Tuy nhiên, khi bạn nghiên cứu [lượng giác](gloss:trigonometry) hoặc [phép tính](gloss:calculus) nâng cao hơn, nó sẽ xuất hiện radian thuận tiện hơn nhiều so với độ.

::: column.grow

Hầu hết các máy tính có một [nút đặc biệt](->.button.mode) để chuyển đổi giữa độ và radian. Các hàm lượng giác như [__sin__](gloss:sin) , [__cos__](gloss:cos) và __tan__ lấy các góc làm đầu vào và các hàm nghịch đảo của chúng là __arcsin__ , __arccos__ và __arctan__ trả về các góc làm đầu ra. Cài đặt máy tính hiện tại xác định đơn vị nào được sử dụng cho các góc này.

Hãy thử sử dụng máy tính này để tính toán

{.text-center} tội lỗi (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0,999]]
tội lỗi (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]]

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

Sử dụng radian có một lợi thế đặc biệt thú vị khi sử dụng chức năng Sine. Nếu `θ` là một góc rất nhỏ (dưới 20° hoặc 0,3 rad), sau đó `sin(θ) ≈ θ` . Ví dụ,

{.text-center} tội( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} Giáo dục

{.reveal(when="var-0")} Đây được gọi là __xấp xỉ góc nhỏ__ và nó có thể đơn giản hóa rất nhiều phương trình nhất định có chứa các hàm lượng giác. Bạn sẽ tìm hiểu nhiều hơn về điều này trong tương lai.

---

## Tangents, Hợp âm và Arcs

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

Trong các phần trước, bạn đã học các tên được đặt cho một số phần khác nhau của vòng tròn - như tâm, bán kính, đường kính và chu vi. Tuy nhiên, có nhiều yếu tố hình học liên quan đến một vòng tròn, chúng ta sẽ cần giải quyết các vấn đề phức tạp hơn:

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

* {.r} Một [{.red} secant](target:secant) là một đường thẳng cắt một vòng tròn tại hai điểm. [Tiếp tục](btn:next)
* {.r.reveal(when="next-0")} Một [{.green} hợp âm](target:chord) là một đoạn dòng có điểm cuối nằm trên chu vi của một vòng tròn. [Tiếp tục](btn:next)
* {.r.reveal(when="next-1")} Một [{.blue} tiếp tuyến](target:tangent) là một đường chạm vào một vòng tròn tại đúng một điểm. Đây được gọi là __điểm tiếp tuyến__ . [Tiếp tục](btn:next)
* {.r.reveal(when="next-2")} An [{.yellow} cung](target:arc) là một phần của chu vi của một vòng tròn. [Tiếp tục](btn:next)
* {.r.reveal(when="next-3")} Một [{.teal} sector](target:sector) là một phần bên trong của một vòng tròn, giới hạn bởi một _vòng cung_ và _hai bán kính_ . [Tiếp tục](btn:next)
* {.r.reveal(when="next-4")} Cuối cùng, một [{.purple} phân khúc](target:segment) là một phần của nội thất của một vòng tròn, giới hạn bởi một _vòng cung_ và _hợp âm_ . [Tiếp tục](btn:next)

:::

---
> id: circle-parts-1

Trong phần này, chúng ta sẽ xem xét mối quan hệ giữa tất cả các yếu tố này và chứng minh các định lý về tính chất của chúng. Đừng lo lắng về việc ghi nhớ tất cả các định nghĩa bây giờ - bạn luôn có thể sử dụng [bảng chú giải](->.footer-link[data-modal=glossarym]) .

---

### Tiếp tuyến

{.todo} SẮP CÓ!



---

### Hợp âm

{.todo} SẮP CÓ!



---
> id: earth-arc

### Arcs và ngành

::: column.grow

Hầu hết các nhà khoa học ở Hy Lạp cổ đại đều đồng ý rằng Trái đất là một hình cầu. Có rất nhiều bằng chứng: từ những con tàu biến mất sau đường chân trời trên biển, đến chuyển động tròn của các ngôi sao trong đêm.

Thật không may, không ai biết chính xác Trái đất _lớn như thế nào_ - cho đến khoảng năm 200 trước Công nguyên, khi nhà toán học [Eratosthenes](bio:eratosthenes) tìm thấy một cách khéo léo để đo bán kính Trái đất, sử dụng hình học cơ bản. Tất cả những gì chúng ta cần là thêm một chút kiến thức về cung và cung của một vòng tròn.

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

Như bạn có thể thấy trong sơ đồ, một [{.red} vòng cung](target:arc) là một phần của [[chu vi | đường kính | tiếp tuyến]] của một vòng tròn và một [{.yellow} lĩnh vực](target:sector) này là một phần của [[nội thất | bán kính | chu vi]] của một vòng tròn.

::: .reveal(when="blank-0 blank-1")

Vòng cung giữa hai điểm _A_ và _B_ thường được viết là `arc(AB)` . Định nghĩa này hơi mơ hồ: có một [{.purple} cung thứ hai](target:major) nối _A_ và _B_ nhưng đi theo hướng khác xung quanh vòng tròn.

Cung nhỏ hơn trong hai cung được gọi là __cung nhỏ__ và cung lớn hơn được gọi là __cung chính__ . Nếu các điểm _A_ và _B_ hoàn toàn đối diện nhau, cả hai cung có cùng độ dài và là [[hình bán nguyệt | đường kính | chu vi]] .

:::

:::

---
> id: arcs-1

::: column.grow

Để tìm độ dài của một cung hoặc diện tích của một khu vực, chúng ta cần biết về góc tương ứng ở tâm của vòng tròn: đây được gọi là [{.blue} góc trung tâm](target:angle) .

Lưu ý rằng tất cả các cung, góc và góc chiếm _cùng một tỷ lệ_ của một vòng tròn đầy đủ. Ví dụ: nếu [{.blue} góc trung tâm](target:angle) là [90°](action:set90Deg()), phải mất [[một phần tư | một nửa | một phần ba]] [{.teal} vòng tròn đầy đủ](target:fangle) .

::: .reveal(when="blank-0")

Điều này có nghĩa là [{.red} chiều dài của cung](target:arc) cũng là `1/4` sau đó [{.purple} toàn bộ chu vi](target:circ) của vòng tròn và [{.yellow} diện tích của ngành](target:sector) là `1/4` sau đó [{.orange} Toàn bộ diện tích](target:area) hình tròn.

Chúng ta có thể biểu thị mối quan hệ này theo một phương trình:

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

Bây giờ chúng ta có thể sắp xếp lại các phương trình này để tìm bất kỳ biến nào chúng ta quan tâm. Ví dụ:

::: column(width=320 parent="padded-thin")

| [ chiều dài hồ quang](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ khu vực ngành](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

Trong đó _r_ là bán kính của đường tròn và _c_ là kích thước của góc trung tâm.



---
> id: arcs-rad

Nếu góc trung tâm được đo [bằng radian](gloss:radians) chứ không phải [độ](gloss:degrees) , chúng ta có thể sử dụng cùng phương trình, nhưng phải thay 360° bằng [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ chiều dài hồ quang](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ khu vực ngành](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Lưu ý cách các phương trình trở nên đơn giản hơn nhiều và _π_ hủy bỏ ở mọi nơi. Điều này là do, như bạn có thể nhớ lại, [định nghĩa về radian](/course/circles/radians#radians) về cơ bản là độ dài của một cung trong một vòng tròn có bán kính 1.

Bây giờ hãy xem làm thế nào chúng ta có thể sử dụng các cung và cung để tính chu vi của Trái đất. [Tiếp tục](btn:next)

:::

---
> id: eratosthenes

Ở Ai Cập cổ đại, thành phố _Swenet_ nằm dọc theo sông Nile. Swenet nổi tiếng với một cái giếng với một tài sản tò mò: có một khoảnh khắc mỗi năm khi ánh sáng mặt trời chạm đến đáy giếng - vào buổi trưa ngày 21 tháng 6, ngày của ngày _hạ chí_ . Vào thời điểm chính xác đó, đáy giếng được chiếu sáng, nhưng không phải là các mặt của nó, có nghĩa là Mặt trời đang đứng ngay trên giếng.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Người Ai Cập cổ đại đã đo khoảng cách dài bằng cách đếm số bước cần thiết để đi bộ.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Một số nguồn tin cho biết, Giếng của Eratosthenes đã ở trên _đảo Voi_ trên sông Nile.

:::

Nhà toán học [Eratosthenes](bio:eratosthenes) sống ở _Alexandria_ , cách Swenet khoảng 800 km về phía bắc, nơi ông là giám đốc của Thư viện lớn. Ở trung tâm thành phố Alexandria có một đài tưởng niệm, một tượng đài cao, hẹp với đỉnh hình kim tự tháp.

Eratosthenes nhận thấy rằng vào buổi trưa vào ngày hạ chí, obelisk đã ném một cái bóng - có nghĩa là mặt trời _không_ ở ngay trên nó. Ông đã suy luận rằng điều này là do độ cong của Trái đất và nhận ra rằng nó có thể được sử dụng để tính chu vi của hành tinh chúng ta.

---
> id: eratosthenes-1

::: column.grow

{.r} Ở đây bạn có thể nhìn thấy cái giếng ở Swenet cũng như obelisk ở Alexandria. Các tia mặt trời rơi trực tiếp xuống giếng, nhưng đánh vào obelisk ở một góc và tạo bóng. [Tiếp tục](btn:next)

::: .reveal(when="next-0")

Eratosthenes đo rằng [{.teal} góc](target:angle1) của bóng là 7,2°. Điều này giống như [{.purple} góc trung tâm](target:angle2) của [{.red} vòng cung](target:arc) từ Alexandria đến Swenet, vì chúng [[xen kẽ | theo chiều dọc |]] góc [[tương ứng]] .

:::

::: .reveal(when="blank-0")

Bây giờ chúng ta có thể sử dụng phương trình cho độ dài cung mà chúng ta đã dẫn ở trên:

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Nếu chúng ta sắp xếp lại thứ này, chúng ta thấy rằng chu vi của Trái đất là

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Cuối cùng, chúng ta biết rằng chu vi của một vòng tròn là `C = 2 pi r` , vì vậy bán kính Trái đất là

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` .

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

Phép đo của Eratosthenes là một trong những thí nghiệm quan trọng nhất trong thời cổ đại. Ước tính của ông về kích thước Trái đất là chính xác đáng ngạc nhiên, đặc biệt khi xem xét rằng ông chỉ có quyền truy cập vào các công cụ đo lường rất cơ bản.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Tất nhiên, có thể khó dịch các kết quả ban đầu của anh ấy thành các đơn vị hiện đại như km. Ở Hy Lạp cổ đại, khoảng cách được đo bằng _stadia_ (khoảng 160 m), nhưng không có tiêu chuẩn chung. Mỗi khu vực có một phiên bản hơi khác nhau và chúng tôi không biết Eratosthenes nào được sử dụng.

Trong các thế kỷ tiếp theo, các nhà khoa học đã cố gắng sử dụng các phương pháp khác để tính bán kính Trái đất - đôi khi có kết quả rất khác nhau và không chính xác.

Đó là một trong những phép đo không chính xác đã khiến Christopher Columbus đi thuyền về phía tây từ Bồ Đào Nha. Ông cho rằng Trái đất nhỏ hơn nhiều so với thực tế và hy vọng đến được Ấn Độ. Trên thực tế, anh đến một lục địa khác ở giữa: Châu Mỹ.

:::

---

### Phân khúc

{.todo} SẮP CÓ!

---

## Định lý đường tròn

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Đa giác tuần hoàn

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Hình cầu, hình nón và hình trụ

> section: spheres-cones-cylinders
> id: solids
> translated: auto

Trong các phần trước, chúng tôi đã nghiên cứu các thuộc tính của các vòng tròn trên một bề mặt phẳng. Nhưng thế giới của chúng ta thực sự là ba chiều, vì vậy hãy xem xét một số chất rắn 3D dựa trên các vòng tròn:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Một [__hình trụ__](gloss:cylinder) bao gồm hai vòng tròn song song, song song được nối bởi một bề mặt cong.

::: column(width=220)

    x-solid(size=220)

{.text-center} Một [__hình nón__](gloss:cone) có đế tròn được nối với một điểm duy nhất (gọi là đỉnh).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Mọi điểm trên bề mặt của một [__quả cầu__](gloss:sphere) có cùng khoảng cách từ tâm của nó.

:::

Lưu ý cách định nghĩa của hình cầu gần giống với định nghĩa của hình [[tròn | bán kính | khối lập phương]] - ngoại trừ trong ba chiều!

---
> id: gasometer

### Xi lanh

::: column.grow

Ở đây bạn có thể thấy _Gasometer_ hình trụ ở Oberhausen, Đức. Nó được sử dụng để lưu trữ khí đốt tự nhiên được sử dụng làm nhiên liệu trong các nhà máy và nhà máy điện gần đó. Gasometer cao 120m, và đế và trần của nó là hai vòng tròn lớn với bán kính 35m. Có hai câu hỏi quan trọng mà các kỹ sư có thể muốn trả lời:

* Bao nhiêu khí tự nhiên có thể được lưu trữ? Đây là [[âm lượng | khu vực | đường kính]] của xi lanh.
* {.reveal(when="blank-0")} Cần bao nhiêu thép để chế tạo Gasometer? Đây là (khoảng) [[diện tích bề mặt | chu vi | đường chéo]] của hình trụ.

{.reveal(when="blank-0 blank-1")} Hãy thử tìm công thức cho cả hai kết quả này!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Đồng hồ đo khí Oberhausen

:::

---
> id: cylinder-prism

#### Thể tích của một hình trụ

Trên cùng và dưới cùng của một hình trụ là hai vòng tròn đồng dạng, được gọi là __cơ sở__ . Các __{.m-blue} chiều cao _h___ của hình trụ là khoảng cách vuông góc giữa các cơ sở này và __{.m-red} bán kính _r___ của hình trụ đơn giản là bán kính của các đáy tròn.

Chúng ta có thể ước chừng một hình trụ bằng cách sử dụng một ${n}{n|5|3,20,1} [__lăng kính hai__](gloss:prism) mặt. Khi số cạnh tăng lên, lăng kính bắt đầu trông ngày càng giống hình trụ:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Mặc dù một hình trụ về mặt kỹ thuật không phải là lăng kính, chúng có chung nhiều đặc tính. Trong cả hai trường hợp, chúng ta có thể tìm thấy âm lượng bằng cách nhân diện tích của chúng __{.m-red} căn cứ__ với họ __{.m-blue} chiều cao__ . Điều này có nghĩa là một hình trụ có bán kính _{.b.m-red} r_ và chiều cao _{.b.m-blue} h_ có âm lượng

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Hãy nhớ rằng bán kính và chiều cao phải sử dụng cùng một đơn vị. Ví dụ: nếu _r_ và _h_ đều tính bằng cm thì âm lượng sẽ ở [[`"cm"^3`|`"cm"^2`| cm]] .

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Trong các ví dụ trên, hai cơ sở của hình trụ luôn _trực tiếp với nhau_ : đây được gọi là __hình trụ bên phải__ . Nếu các căn cứ không trực tiếp với nhau, chúng ta có một __hình trụ xiên__ . Các căn cứ vẫn song song, nhưng hai bên dường như nghiêng về phía góc nghiêng của góc nghiêng không phải là 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} _Tháp nghiêng Pisa_ ở Ý không hoàn toàn là một hình trụ xiên.

:::

---
> id: cavalieri
> goals: slide

Thể tích của một hình trụ xiên hóa ra giống hệt như hình trụ của một hình trụ bên phải có cùng bán kính và chiều cao. Điều này là do [__Nguyên lý của Cavalier__](gloss:cavalieri) , được đặt theo tên nhà toán học người Ý [Bonaventura Cavalieri](bio:cavalieri) : nếu hai vật rắn có cùng diện tích mặt cắt ngang ở mọi độ cao, thì chúng sẽ có cùng thể tích.

Hãy tưởng tượng cắt một hình trụ thành nhiều đĩa mỏng. Sau đó chúng ta có thể trượt các đĩa này theo chiều ngang để có được một hình trụ xiên. Âm lượng của các đĩa riêng lẻ không thay đổi khi bạn làm cho nó xiên, do đó tổng âm lượng cũng không đổi:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### Diện tích bề mặt của xi lanh

::: column.grow

Để tìm diện tích bề mặt của một hình trụ, chúng ta phải hủy bỏ nó vào [lưới](gloss:net) phẳng. Bạn có thể tự thử, ví dụ bằng cách bóc nhãn trên hộp thức ăn.

Có hai [[vòng tròn | hình cầu | hình vuông]] , một ở phía trên và một ở dưới cùng của hình trụ. Mặt cong thực sự là một [[hình chữ nhật]] lớn [[| Quảng trường | hình elip]] .

* {.reveal(when="blank-0 blank-1")} Hai vòng tròn đều có diện tích _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} Chiều cao của hình chữ nhật là _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} và chiều rộng của hình chữ nhật giống như [[chu vi | đường kính | tiếp tuyến]] của các vòng tròn:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Điều này có nghĩa là tổng diện tích bề mặt của hình trụ có bán kính _r_ và chiều cao _h_ được cho bởi

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ .

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Xi lanh có thể được tìm thấy ở khắp mọi nơi trên thế giới của chúng ta - từ lon soda đến giấy vệ sinh hoặc ống nước. Bạn có thể nghĩ về bất kỳ ví dụ khác?

_Gasometer_ ở trên có bán kính 35m và cao 120m. Bây giờ chúng ta có thể tính toán rằng khối lượng của nó là khoảng [[461.000 ± 1000]] `"m"^3` và diện tích bề mặt của nó là khoảng [[34.080 ± 100]] `"m"^2` .

---
> id: cone

### Nón

::: column.grow

Một [__hình nón__](gloss:cone) là một vật rắn ba chiều có hình tròn __{.m-red} cơ sở__ . Mặt bên của nó hướng lên trên hướng lên trên như thể hiện trong sơ đồ và kết thúc ở một điểm duy nhất gọi là __{.m-green} đỉnh__ .

Các __{.m-red} bán kính__ của hình nón là bán kính của hình tròn và __{.m-blue} chiều cao__ của hình nón là khoảng cách vuông góc từ đáy đến đỉnh.

Cũng giống như những hình dạng khác mà chúng ta đã gặp trước đây, hình nón có ở khắp mọi nơi xung quanh chúng ta: nón kem, nón giao thông, mái nhà nhất định và thậm chí cả cây thông giáng sinh. Bạn có thể nghĩ gì khác?

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

#### Khối lượng của một hình nón

::: column.grow

Trước đây chúng tôi đã tìm thấy thể tích của một hình trụ bằng cách xấp xỉ nó bằng lăng kính. Tương tự như vậy, chúng ta có thể tìm thấy khối lượng của một hình nón bằng cách xấp xỉ nó bằng cách sử dụng một [__kim tự tháp__](gloss:pyramid) .

Ở đây bạn có thể thấy một ${n}{n|5|3,18,1} kim tự tháp hai mặt. Khi số cạnh tăng lên, kim tự tháp bắt đầu trông ngày càng giống hình nón. Trong thực tế, chúng ta có thể nghĩ về một hình nón như một kim tự tháp với _vô số_ mặt!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Điều này cũng có nghĩa là chúng ta cũng có thể sử dụng phương trình cho âm lượng: `V = 1/3 "base" × "height"` . Cơ sở của hình nón là một hình tròn, nên thể tích của hình nón có bán kính _r_ và chiều cao _h_ là

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Lưu ý sự tương đồng với phương trình cho thể tích của một hình trụ. Hãy tưởng tượng vẽ một hình trụ _xung quanh_ hình nón, có cùng đế và chiều cao - đây được gọi là __hình trụ có__ hình tròn. Bây giờ, hình nón sẽ chiếm chính xác [[một phần ba | một nửa | một phần tư]] thể tích của hình trụ:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Lưu ý: Bạn có thể nghĩ rằng vô số các mặt nhỏ như một xấp xỉ là một chút không chính xác. Các nhà toán học đã dành một thời gian dài cố gắng tìm ra một cách đơn giản hơn để tính thể tích của một hình nón. Năm 1900, nhà toán học vĩ đại [David Hilbert](bio:hilbert) thậm chí đã đặt tên cho nó là một trong 23 vấn đề quan trọng nhất chưa được giải quyết trong toán học! Ngày nay chúng ta biết rằng nó thực sự là không thể.

---
> id: oblique-cone
> goals: slide

::: column.grow

Cũng giống như một hình trụ, một hình nón không nhất thiết phải là đường thẳng. Nếu đỉnh trực tiếp trên tâm của cơ sở, chúng ta có một __hình nón bên phải__ . Mặt khác, chúng tôi gọi nó là một __hình nón xiên__ .

Một lần nữa, chúng ta có thể sử dụng nguyên tắc của Cavalieri để chỉ ra rằng tất cả các hình nón xiên có cùng một thể tích, miễn là chúng có cùng chiều cao và chiều cao cơ sở.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Diện tích bề mặt của hình nón

::: column.grow

Tìm diện tích bề mặt của hình nón là một chút khó khăn hơn. Giống như trước đây, chúng ta có thể làm sáng tỏ một hình nón vào lưới của nó. Di chuyển thanh trượt để xem điều gì xảy ra: trong trường hợp này, chúng ta có một [[khu vực]] vòng tròn và một [[vòng tròn | phân khúc vòng tròn | vòng cung tròn]] .

{.reveal(when="blank-0")} Bây giờ chúng ta chỉ cần thêm diện tích của cả hai thành phần này. Các __{.m-yellow} cơ sở__ là một hình tròn có bán kính _r_ , nên diện tích của nó là

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Bán kính của __{.m-green} sector__ giống như khoảng cách từ vành của hình nón đến đỉnh của nó. Cái này được gọi là [{.pill.green.b} chiều cao nghiêng _là_](target:s) của hình nón, và không giống như bình thường [{.pill.blue.b} chiều cao _h_](target:h) . Chúng ta có thể tìm thấy chiều cao nghiêng bằng [Pythagoras](gloss:pythagoras-theorem) :

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

Các [{.pill.red} chiều dài cung](target:arc) của ngành giống như [[chu vi | đường kính | vòng cung]] của [{.pill.yellow} cơ sở](target:base) : _{span.reveal(when="blank-0")}`2 π r` . Bây giờ chúng ta có thể tìm thấy khu vực của khu vực bằng cách sử dụng [công thức](gloss:circle-sector) mà chúng ta đã bắt nguồn trong phần trước:_

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

Cuối cùng, chúng ta chỉ cần thêm diện tích của __{.m-yellow} cơ sở__ và diện tích của __{.m-green} ngành__ , để có được tổng bề mặt là hình nón:

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Hình cầu

::: column.grow

Một [__hình cầu__](gloss:sphere) là một vật rắn ba chiều bao gồm tất cả các điểm có cùng khoảng cách từ một vật đã cho __{.m-green} trung tâm _C.___ Khoảng cách này được gọi là __{.m-red} bán kính _r___ của quả cầu.

Bạn có thể nghĩ về một quả cầu như một [vòng tròn](gloss:circle) ba chiều của người [Viking](gloss:circle) . Giống như một vòng tròn, một hình cầu cũng có một __{.m-blue} đường kính _d___ , [[gấp đôi | một nửa]] chiều dài của bán kính, cũng như hợp âm và secants.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} Trong [phần trước](/course/circles/tangets-chords-arcs#eratosthenes-1) , bạn đã tìm hiểu cách nhà toán học Hy Lạp [Eratosthenes](bio:eratosthenes) tính toán bán kính Trái đất bằng cách sử dụng bóng của một cây sào - nó dài 6.371 km. Bây giờ, chúng ta hãy cố gắng tìm tổng khối lượng và diện tích bề mặt của Trái đất. [Tiếp tục](btn:next)

---
> id: sphere-volume

#### Khối lượng của một hình cầu

Để tìm thể tích của một khối cầu, một lần nữa chúng ta phải sử dụng Nguyên lý của Cavalier. Hãy bắt đầu với một bán cầu - một hình cầu cắt làm đôi dọc theo đường xích đạo. Chúng ta cũng cần một hình trụ có bán kính và chiều cao tương đương với bán cầu, nhưng với một hình nón ngược thì cắt ra hình chữ nhật ở giữa.

Khi bạn di chuyển thanh trượt bên dưới, bạn có thể thấy mặt cắt ngang của cả hai hình dạng này ở độ cao cụ thể phía trên cơ sở:

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

{.reveal(when="slider-0")} Chúng ta hãy cố gắng tìm diện tích mặt cắt ngang của cả hai vật rắn này, ở khoảng cách xa [{.pill.blue} chiều cao _h_](target:h) so với chân đế.

::: column.grow

{.reveal(when="slider-0")} Mặt cắt ngang của bán cầu luôn là một hình [[tròn | nhẫn | xi lanh]] .

{.reveal(when="blank-0")} Các [{.pill.red} bán kính _x_](target:x) của mặt cắt là một phần của [{.pill.yellow} tam giác vuông](target:tri) , vì vậy chúng ta có thể sử dụng [Pythagoras](gloss:pythagoras-theorem) :

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` .

Bây giờ, diện tích của mặt cắt là

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

Mặt cắt ngang của hình trụ cắt luôn là một [[vòng | vòng tròn | hình nón]] .

::: .reveal(when="blank-1")

Bán kính của lỗ là _h_ . Chúng ta có thể tìm thấy diện tích của vòng bằng cách trừ diện tích của lỗ khỏi diện tích của vòng tròn lớn hơn:

| _Một_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Có vẻ như cả hai chất rắn có cùng diện tích mặt cắt ngang ở mọi cấp độ. Theo nguyên lý của Cavalieri, cả hai chất rắn cũng phải có cùng một [[thể tích | diện tích bề mặt | chu vi]] ! _{span.reveal(when="blank-0")} Chúng ta có thể tìm thể tích của bán cầu bằng cách trừ thể tích của [hình trụ](gloss:cylinder-volume) và thể tích của [hình nón](gloss:cone-volume) :_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Một hình cầu bao gồm [[hai]] bán cầu, _{span.reveal(when="blank-0")} có nghĩa là khối lượng của nó phải_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` .

---
> id: earth-volume
> goals: numbers

::: column.grow

Trái đất là (xấp xỉ) một quả cầu có bán kính 6.371 \ km. Do đó, khối lượng của nó là

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Mật độ trung bình của Trái đất là `5510 "kg/m"^3` . Điều này có nghĩa là tổng khối lượng của nó là

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Đó là số 6 theo sau là 24 số không!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Nếu bạn so sánh các phương trình cho thể tích của hình trụ, hình nón và hình cầu, bạn có thể nhận thấy một trong những mối quan hệ thỏa mãn nhất trong hình học. Hãy tưởng tượng chúng ta có một hình trụ có cùng chiều cao với đường kính của đế của nó. Bây giờ chúng ta có thể lắp cả hình nón và hình cầu một cách hoàn hảo vào bên trong:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Hình nón này có bán kính `r` và chiều cao `2r` . Khối lượng của nó là _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Hình cầu này có bán kính `r` . Khối lượng của nó là _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Xi lanh này có bán kính `r` và chiều cao `2r` . Khối lượng của nó là _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Chú ý làm thế nào, nếu chúng ta [[thêm lên | trừ | nhân]] thể tích của hình nón và hình cầu, ta được chính xác thể tích của hình trụ!

---
> id: sphere-maps
> goals: move projection

#### Diện tích bề mặt của một hình cầu

Tìm một công thức cho diện tích bề mặt của một hình cầu là rất khó. Một lý do là chúng ta không thể mở và làm phẳng bề mặt của một hình cầu, giống như chúng ta đã làm cho hình nón và hình trụ trước đây.

Đây là một vấn đề cụ thể khi cố gắng tạo bản đồ. Trái đất có bề mặt cong, ba chiều, nhưng mọi bản đồ in phải phẳng và hai chiều. Điều này có nghĩa là Nhà địa lý phải gian lận: bằng cách kéo dài hoặc squishing một số khu vực nhất định.

Ở đây bạn có thể thấy một vài loại bản đồ khác nhau, được gọi là __phép chiếu__ . Hãy thử di chuyển hình vuông màu đỏ và xem khu vực này _thực sự_ trông như thế nào trên quả địa cầu:

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

Để tìm diện tích bề mặt của một hình cầu, một lần nữa chúng ta có thể ước chừng nó bằng một hình dạng khác - ví dụ như một khối đa diện có nhiều mặt. Khi số lượng khuôn mặt tăng lên, khối đa diện bắt đầu trông ngày càng giống hình cầu.

{.todo} SẮP RA MẮT: Bằng chứng diện tích bề mặt hình cầu






---

## Conic phần

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Vòng tròn là một trong bốn hình dạng khác nhau có thể được tạo ra bằng cách sử dụng các lát cắt của Google thông qua một [hình nón](gloss:cone) . Điều này có thể được chứng minh bằng cách sử dụng hình nón ánh sáng của một ngọn đuốc:

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

Nếu bạn hướng ngọn đuốc theo chiều dọc xuống dưới, bạn sẽ thấy một [[vòng tròn | hình elip | hình bầu dục]] của ánh sáng. _{span.reveal(when="blank-0")} Nếu bạn nghiêng hình nón, bạn sẽ có được một [__hình elip__](gloss:ellipse) . Nếu bạn nghiêng nó hơn nữa, bạn sẽ có một [__parabola__](gloss:parabola) hoặc [__hyperbola__](gloss:hyperbola) ._

---
> id: conics-2

::: column.grow

Chung, bốn hình dạng này được gọi là [__phần hình nón__](gloss:conic-section) . Mặc dù tất cả chúng trông rất khác nhau, nhưng chúng có liên quan chặt chẽ với nhau: trên thực tế, tất cả chúng đều có thể được tạo bằng cùng một phương trình!

Các phần hình nón được nghiên cứu đầu tiên bởi nhà toán học Hy Lạp cổ đại [Apollonius của Perga](bio:apollonius) , người cũng đặt cho chúng những cái tên khác thường.

Trong các khóa học sau, bạn sẽ học được nhiều hơn về parabolas và hyperbolas. Bây giờ, chúng ta hãy xem xét kỹ hơn về hình elip.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Dấu chấm lửng

Một hình elip trông gần giống như một vòng tròn kéo dài của Google. Trên thực tế, bạn có thể nghĩ về nó như một vòng tròn có _hai trung tâm_ - đây được gọi là các __tiêu điểm__ . Giống như mọi điểm trên một vòng tròn có cùng khoảng cách từ tâm của nó, mọi điểm trên một hình elip có cùng _khoảng cách_ đến hai tiêu điểm của nó.

Nếu bạn có một chuỗi dài được kết nối với hai điểm cố định, bạn có thể vẽ một hình elip hoàn hảo bằng cách truy tìm phạm vi tối đa của chuỗi:

{.todo} Sắp có: Ellipses vẽ tương tác

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Có nhiều biểu diễn vật lý khác về cách bạn có thể vẽ một hình elip:

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

### Quỹ đạo hành tinh

::: column.grow

Bạn có thể nhớ từ khi bắt đầu khóa học này, các nhà thiên văn học Hy Lạp cổ đại tin rằng Trái đất nằm ở trung tâm của vũ trụ và mặt trời, mặt trăng và các hành tinh di chuyển quanh Trái đất trên các quỹ đạo tròn.

Thật không may, quan sát thiên văn của bầu trời không hỗ trợ điều này. Ví dụ, mặt trời xuất hiện lớn hơn trong một số phần của năm và nhỏ hơn trong những phần khác. Trên một vòng tròn, mọi điểm phải [[giống nhau | Sự gia tăng | một]] khoảng cách [[giảm]] từ trung tâm của nó.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Nhà thiên văn học Hy Lạp Hipparchus của Nicaea

:::

---
> id: epicycles
> goals: play

Để khắc phục điều này, các nhà thiên văn học đã thêm __Epiciking__ vào mô hình hệ mặt trời của họ: các hành tinh di chuyển trên một vòng tròn lớn quanh Trái đất, đồng thời quay trên một vòng tròn nhỏ hơn. Mặc dù rất phức tạp, đây là mô hình được chấp nhận rộng rãi nhất trong vũ trụ của chúng ta trong hơn 1000 năm:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Hành tinh này làm cho ${n}{n|6|2,12,1} quay xung quanh vòng tròn nhỏ (các __ngoại luân)__ trong một vòng quay xung quanh vòng tròn lớn (các __mặt cầu).__

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Một bản vẽ thế kỷ 16 của các vòng quay trong __mô hình Geocric__ . Từ tiếng Hy Lạp có tên là Plan Plan tinh có nghĩa là giang hồ.

:::

---
> id: kepler
> goals: play

::: column.grow

Theo thời gian, mọi người nhận ra rằng Trái đất chỉ là một trong nhiều hành tinh quay quanh mặt trời ( __mô hình nhật tâm__ ), nhưng mãi đến năm 1609, nhà thiên văn học [Julian Kepler mới](bio:kepler) phát hiện ra rằng các hành tinh thực sự di chuyển trên _quỹ đạo hình elip_ .

Mặt trời nằm ở một trong hai tiêu điểm của những hình elip này. Các hành tinh tăng tốc khi chúng đến gần mặt trời hơn và chậm lại khi chúng di chuyển xa hơn.

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

Vài thập kỷ sau, [Isaac Newton](bio:newton) đã có thể chứng minh những quan sát của Kepler, bằng cách sử dụng định luật [__hấp dẫn__](gloss:gravity) mới được phát triển của mình. Newton nhận ra rằng có một lực giữa bất kỳ hai khối lượng nào trong vũ trụ - tương tự như lực hút giữa hai nam châm.

Trọng lực là thứ khiến mọi thứ rơi xuống đất và trọng lực cũng là thứ khiến các hành tinh di chuyển xung quanh mặt trời. Nó chỉ là tốc độ tuyệt vời mà các hành tinh di chuyển, ngăn chúng rơi trực tiếp vào mặt trời.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Sử dụng định luật Newton, bạn có thể rút ra con đường mà các vật thể đi khi di chuyển dưới lực hấp dẫn. Hóa ra các hành tinh di chuyển trên các hình elip, nhưng các vật thể khác như sao chổi có thể di chuyển trên [các](gloss:hyperbola) đường [parabol](gloss:parabola) hoặc [hyperbolic](gloss:hyperbola) : chúng bay gần mặt trời trước khi quay lại và bắn vào vũ trụ, không bao giờ quay trở lại.

Theo truyền thuyết, một quả táo rơi đã truyền cảm hứng cho Newton nghĩ về trọng lực. Ông là một trong những nhà khoa học có ảnh hưởng nhất mọi thời đại và ý tưởng của ông đã định hình sự hiểu biết của chúng ta về thế giới trong gần 300 năm - cho đến khi Albert Einstein phát hiện ra thuyết tương đối vào năm 1905.

:::
