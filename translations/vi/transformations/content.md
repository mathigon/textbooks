# Biến đổi và đối xứng

## Giới thiệu

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

Nhiều khái niệm hình học như [đường](gloss:line) hoặc [đa giác](gloss:polygon) đã được các nhà toán học phát minh ra. Đối xứng, mặt khác, là ở khắp mọi nơi xung quanh chúng ta. Hầu như tất cả các loài thực vật, động vật và thậm chí cả con người chúng ta đều đối xứng.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Theo thời gian, chúng ta đã bắt chước sự đối xứng của tự nhiên trong nghệ thuật, kiến trúc, công nghệ và thiết kế. Hình dạng và mẫu đối xứng dường như trông _đẹp_ hơn so với hình không đối xứng.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Nhưng đối xứng là quan trọng hơn nhiều so với chỉ đơn giản là _nhìn đẹp_ . Nó nằm ở chính nền tảng của vũ trụ của chúng ta, và thậm chí có thể giải thích các định luật vật lý cơ bản nhất.

_{button.next-step} Tiếp tục_

---
> id: transformations
> goals: t1 t2 t3

Mặc dù đối xứng là một khái niệm rất trực quan, nhưng việc mô tả nó về mặt toán học khó khăn hơn bạn nghĩ. Đầu tiên, chúng ta phải tìm hiểu về các [__phép biến đổi__](gloss:transformation) , đó là những cách để chuyển đổi một hình hình học thành một hình khác. Đây là vài ví dụ:

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

Kết quả của một biến đổi được gọi là [__hình ảnh__](gloss:transformation-image) . Chúng ta thường biểu thị hình ảnh của một hình dạng `A` như `A'` , phát âm là Một thủ tướng. Có nhiều loại chuyển đổi khác nhau, chúng ta sẽ khám phá chi tiết hơn trong suốt khóa học này.

---

## Biến đổi cứng nhắc

> id: rigid
> section: rigid
> translated: auto

[__Biến đổi cứng nhắc__](gloss:rigid-transformation) là một loại biến đổi đặc biệt không thay đổi kích thước hoặc hình dạng của hình. Chúng ta có thể tưởng tượng rằng nó được làm từ một vật liệu rắn như gỗ hoặc kim loại: chúng ta có thể di chuyển nó, xoay hoặc lật nó, nhưng chúng ta không thể kéo dài, uốn cong hoặc làm biến dạng nó.

Cái nào trong năm biến đổi này là cứng nhắc?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Nó chỉ ra rằng chỉ có ba loại biến đổi cứng nhắc khác nhau:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Một phép biến đổi chỉ đơn giản là _di chuyển_ một hình dạng được gọi là [__bản dịch__](gloss:translation) .

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Một phép biến đổi _lật_ một hình dạng được gọi là [__sự phản chiếu__](gloss:reflection) .

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Một phép biến đổi _quay_ một hình được gọi là [__phép quay__](gloss:rotation) .

:::

---
> id: rigid-2

Chúng ta cũng có thể kết hợp nhiều loại chuyển đổi để tạo ra các loại biến đổi phức tạp hơn - ví dụ: bản dịch theo sau là xoay vòng.

Nhưng trước tiên, chúng ta hãy xem xét từng loại biến đổi chi tiết hơn.

---
> id: translations

### Bản dịch

Một [__bản dịch__](gloss:translation) là một phép biến đổi di chuyển mọi điểm của một hình theo cùng một khoảng cách theo cùng một hướng.

Trong mặt phẳng tọa độ, chúng ta có thể chỉ định một bản dịch bằng cách hình dạng được di chuyển dọc theo _x_ -axis và _y_ -axis. Ví dụ, một phép biến đổi theo (3, 5) di chuyển một hình bằng 3 dọc theo _x_ -axis và 5 dọc theo _y_ -axis.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Được dịch bởi ( [[5]] , [[1]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Được dịch bởi ( [[-4]] , [[2]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Được dịch bởi ( [[4]] , [[-2]] )

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Bây giờ đến lượt bạn - dịch các hình dạng sau như được hiển thị:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Dịch bởi (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Dịch bởi (hè4, mạng2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Dịch bởi (5, PayPal1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Những phản ánh

Một [__sự phản chiếu__](gloss:reflection) là một sự biến đổi mà những người khác lật lại những người khác hay một người khác. Dòng này được gọi là __dòng phản ánh__ .

Vẽ đường phản chiếu trong mỗi ví dụ sau:

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

Bây giờ đến lượt bạn - vẽ sự phản chiếu của từng hình dạng sau:

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

Lưu ý rằng nếu một điểm nằm trên đường phản xạ, nó [[sẽ không di chuyển | xoay | lật qua]] khi được phản ánh: _{span.reveal(when="blank-0")} hình ảnh của nó là cùng một điểm với bản gốc._

---
> id: reflections-3

Trong tất cả các ví dụ ở trên, đường phản xạ là ngang, dọc hoặc ở góc 45° - giúp bạn dễ dàng vẽ các phản xạ. Nếu đó không phải là trường hợp, việc xây dựng đòi hỏi một chút công việc:

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

{.r} Để phản ánh hình dạng này qua [đường phản xạ](target:refl) , chúng ta phải phản ánh từng [đỉnh](gloss:polygon-vertex) riêng lẻ và sau đó kết nối chúng lại. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-0")} Chúng ta hãy chọn một trong các đỉnh và vẽ đường thẳng qua đỉnh này vuông góc với đường phản xạ. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-1")} Bây giờ chúng ta có thể đo [khoảng cách](target:d1) từ đỉnh đến đường phản xạ và tạo điểm có [cùng khoảng cách](target:d2) ở phía bên kia. _{span.lgrey} (Chúng ta có thể sử dụng thước kẻ hoặc [la bàn](target:circ) để làm việc này.)_ _{button.next-step} Tiếp tục_

{.r.reveal(when="next-2")} Chúng ta có thể làm tương tự cho tất cả các đỉnh khác của hình dạng của chúng ta. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-3")} Bây giờ chúng ta chỉ cần kết nối các đỉnh được phản ánh theo đúng thứ tự và chúng ta đã tìm thấy sự phản chiếu!

:::

---
> id: rotations
> goals: r0 r1 r2

### Xoay

Một [__vòng quay__](gloss:rotation) là một phép biến đổi mà khu vực này biến hình thành một góc nhất định xung quanh một điểm cố định. Điểm đó được gọi là [__tâm quay__](gloss:center-of-rotation) . Các vòng quay có thể theo chiều kim đồng hồ hoặc ngược chiều kim đồng hồ.

Cố gắng xoay các hình bên dưới xung quanh tâm xoay màu đỏ:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Xoay 90° theo chiều kim đồng hồ.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Xoay 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Xoay 90° ngược chiều kim đồng hồ.

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

Việc vẽ các phép quay không chính xác 90° hoặc 180° là khó khăn hơn. Hãy thử xoay hình này bằng cách ${10*ang}{ang|6|-18,18,1}° quanh [tâm quay](target:rot) .

{.r} Giống như đối với phản xạ, chúng ta phải xoay từng điểm trong một hình dạng riêng lẻ. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-0")} Chúng tôi bắt đầu bằng cách chọn một trong các đỉnh và vẽ một đường thẳng đến tâm xoay. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-1")} Sử dụng [thước đo góc](target:protractor) , chúng ta có thể đo [góc ${ang*10}°](target:angle) quanh tâm quay. Hãy vẽ một [đường thứ hai](target:l2) ở góc đó. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-2")} Sử dụng một [la bàn](target:compass) hoặc thước kẻ, chúng ta có thể tìm thấy một [điểm](target:a1) trên đường thẳng này có cùng khoảng cách từ tâm quay với điểm ban đầu. _{button.next-step} Tiếp tục_

{.r.reveal(when="next-3")} Bây giờ chúng ta phải lặp lại các bước này cho tất cả các đỉnh khác của hình dạng của chúng ta. _{button.next-step} Tiếp tục_

{.reveal(when="next-4")} Và cuối cùng, giống như trước đây, chúng ta có thể kết nối các đỉnh riêng lẻ để có được hình ảnh xoay của hình dạng ban đầu của chúng ta.

:::

---
> id: composition-1

Biến đổi là một khái niệm quan trọng trong nhiều phần của toán học, không chỉ hình học. Ví dụ: bạn có thể chuyển đổi các [_hàm_](gloss:function) bằng cách dịch chuyển hoặc xoay [đồ thị](gloss:function-graph) của chúng. Bạn cũng có thể sử dụng các phép biến đổi để xác định xem hai hình có [đồng dạng hay không](gloss:congruent) .

---

## Đồng dư

> section: congruence
> sectionStatus: dev
> translated: auto

TODO

---

## Đối diện

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Đối xứng__](gloss:symmetry) là ở khắp mọi nơi xung quanh chúng ta, và một khái niệm trực quan: các phần khác nhau của một đối tượng trông _giống nhau_ theo một cách nào đó. Nhưng bằng cách sử dụng các phép biến đổi, chúng ta có thể đưa ra một định nghĩa toán học chính xác hơn nhiều về ý nghĩa đối xứng _thực sự_ có nghĩa là gì:

{.definition} Một đối tượng là _đối xứng_ nếu nó trông giống nhau, ngay cả sau khi áp dụng một biến đổi nhất định.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Chúng ta có thể phản ánh con bướm này, và nó trông giống như sau đó. Chúng tôi nói rằng nó có __đối xứng phản chiếu__ .

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Chúng ta có thể xoay bông hoa này, và nó trông giống như sau đó. Chúng tôi nói rằng nó có __đối xứng quay__ .

:::

---
> id: reflectional-symmetry

### Đối xứng phản xạ

Một hình có [__đối xứng phản xạ__](gloss:reflectional-symmetry) nếu nó trông giống nhau sau khi được phản chiếu. Đường phản xạ được gọi là [__trục đối xứng__](gloss:axis-of-symmetry) và nó chia hình dạng thành hai [[đồng dạng | công bằng |]] một nửa [[tương tự]] . Một số hình cũng có thể có nhiều hơn một trục đối xứng.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Vẽ tất cả các trục đối xứng trong sáu hình ảnh và hình dạng này:

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

{.caption} Hình này có [[2]] trục đối xứng.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Một hình vuông có [[4]] trục đối xứng.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Hình này có [[2]] trục đối xứng.

:::

---
> id: alphabet

Nhiều chữ cái trong bảng chữ cái có sự đối xứng phản chiếu. Chọn tất cả những cái mà làm:

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

Dưới đây là một số hình dạng hơn. Hoàn thành chúng sao cho chúng có tính đối xứng phản xạ:

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

Hình dạng, chữ cái và hình ảnh có thể có sự đối xứng phản chiếu, nhưng vì vậy có thể toàn bộ số, từ và câu!

Ví dụ, cả hai đều có thể đọc giống nhau từ trước ra sau. Những con số hoặc những từ như thế này được gọi là [__Palindromes__](gloss:palindrome) . Bạn có thể nghĩ về bất kỳ palindromes khác?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Nếu chúng ta bỏ qua khoảng trắng và dấu câu, các câu ngắn dưới đây cũng có tính đối xứng phản xạ. Bạn có thể đến với của riêng bạn?

{.text-center} Không bao giờ lẻ hoặc thậm chí.
Một [[hạt]] cho một lọ cá ngừ.
Yo, [[cậu bé]] chuối!

{.reveal(when="blank-0 blank-1")} Nhưng Palindromes không chỉ là niềm vui, chúng thực sự có tầm quan trọng thực tế. Một vài năm trước, các nhà khoa học phát hiện ra rằng các phần của [DNA](gloss:dna) của chúng ta là palindromic. Điều này làm cho chúng trở nên linh hoạt hơn trước các đột biến hoặc thiệt hại - bởi vì có một bản sao lưu thứ hai của mỗi mảnh.

---
> id: rotational-symmetry

### Đối xứng quay

::: column.grow

Một hình có [__đối xứng quay__](gloss:rotational-symmetry) nếu nó trông giống nhau sau khi được xoay (dưới 360°). [Trung tâm của vòng quay](gloss:center-of-rotation) thường chỉ là giữa hình.

Thứ [__tự đối xứng__](gloss:order-of-symmetry) là số lượng các hướng khác nhau trong đó hình dạng trông giống nhau. Bạn cũng có thể nghĩ về nó như _số lần chúng ta có thể xoay hình dạng_ , trước khi chúng ta quay lại bắt đầu. Ví dụ, bông tuyết này có thứ tự [[6]] .

{.reveal(when="blank-0")} Góc của mỗi vòng quay là `"360°"/"order"` . Trong bông tuyết, đây là `"360°"/6 = input(60)°` .

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Tìm thứ tự và góc quay, cho mỗi hình dạng sau:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Đặt hàng [[4]] , góc [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Đặt hàng [[2]] , góc [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Đặt hàng [[8]] , góc [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Bây giờ hoàn thành các hình dạng này, để chúng có đối xứng quay:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Đặt hàng 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Đặt hàng 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Đặt hàng 4

:::

---

## Nhóm đối xứng và hình nền

> id: groups
> section: symmetry-groups
> translated: auto

 Một số hình có nhiều hơn một đối xứng - hãy xem [hình vuông](gloss:square) là một ví dụ đơn giản.

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

Bạn đã chỉ ra ở trên rằng một hình vuông có [[4]] trục phản xạ.

{.reveal(when="blank-0")} Nó cũng có tính đối xứng quay [[90]]°, [[180]]° và [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Và cuối cùng, chúng ta có thể nghĩ về việc không làm gì khác như một kiểu đối xứng đặc biệt khác - bởi vì kết quả là (rõ ràng) giống như trước đây. Điều này đôi khi được gọi là __danh tính__ .

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Tổng cộng, chúng tôi đã tìm thấy [[8]] đối xứng khác nhau của vùng vuông góc vuông.

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Bây giờ chúng ta thực sự có thể bắt đầu thực hiện một số số học với các đối xứng này. Ví dụ: chúng ta có thể _thêm_ hai đối xứng để có được những đối xứng mới:

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

Bất cứ khi nào bạn thêm hai đối xứng của một hình vuông, bạn sẽ có một hình mới. Đây là một máy tính đối xứng của người Viking, nơi bạn có thể tự mình thử:

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

Dành thời gian chơi xung quanh với máy tính đối xứng và cố gắng tìm bất kỳ mẫu nào. Bạn có thể hoàn thành những quan sát này?

* Thêm hai phép quay sẽ luôn cho [[phép xoay | một phản ánh]] (hoặc bản sắc). * Thêm hai phản xạ sẽ luôn luôn cho [[một vòng quay | một phản ánh]] (hoặc bản sắc). * Thêm hai đối xứng giống nhau theo thứ tự ngược lại [[đôi khi tạo ra sự khác biệt | luôn luôn cho một sự khác biệt | luôn cho]] kết quả [[như nhau]] * Thêm danh tính [[không làm gì cả | trả lại một phản ánh | trả lại ngược lại]] .

---
> id: group-axioms

Bạn có thể đã nhận ra rằng thêm __{.orange} đối xứng__ thực sự rất giống với việc thêm __{.green} số nguyên__ :

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

Trong toán học, bất kỳ bộ sưu tập nào có các tính chất này được gọi là một [__nhóm__](gloss:group) . Một số nhóm (như __{.orange} đối xứng__ của một hình vuông) chỉ có một số phần tử hữu hạn. Những người khác (như __{.green} số nguyên__ ) là vô hạn.

Trong ví dụ này, chúng tôi bắt đầu với tám đối xứng của hình vuông. Trong thực tế, mỗi hình dạng hình học có __nhóm đối xứng__ riêng. Chúng đều có các yếu tố khác nhau, nhưng chúng luôn đáp ứng ba quy tắc trên.

Các nhóm xuất hiện ở mọi nơi trong toán học. Các phần tử có thể là số hoặc đối xứng, nhưng cũng là đa thức, hoán vị, ma trận, hàm số _bất cứ thứ gì_ tuân theo ba quy tắc. Ý tưởng chính của _lý thuyết nhóm_ là chúng ta không quan tâm đến các yếu tố riêng lẻ, chỉ là _cách chúng tương tác với nhau_ .

::: column.grow

Ví dụ, các nhóm đối xứng của các phân tử khác nhau có thể giúp các nhà khoa học dự đoán và giải thích các tính chất của các vật liệu tương ứng.

Các nhóm cũng có thể được sử dụng để phân tích chiến lược chiến thắng trong các trò chơi trên bàn cờ, hành vi của virus trong y học, các hòa âm khác nhau trong âm nhạc và nhiều khái niệm khác.

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Các thuộc tính của phân tử CCl <sub>4</sub> (trái) và Adenovirus (phải) được xác định bởi các đối xứng của chúng.

:::

---

### Nhóm hình nền

> id: wallpaper-groups

Trong các [phần trước](/course/transformations/symmetry) chúng ta đã thấy hai loại đối xứng khác nhau tương ứng với hai phép biến đổi khác nhau: phép quay và phản xạ. Nhưng cũng có một sự đối xứng cho loại chuyển đổi cứng nhắc thứ ba: [[bản dịch | quay | lật]] .

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Đối xứng tịnh tiến__](gloss:translational-symmetry) không hoạt động đối với các đối tượng bị cô lập như hoa hoặc bướm, nhưng đối với các mẫu thông thường kéo dài theo mọi hướng:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Honyecomb lục giác

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Gạch ốp tường

:::

---
> id: footsteps

Ngoài đối xứng phản xạ, quay và đối xứng, thậm chí còn có một loại thứ tư: [__phản xạ trượt__](gloss:glide-reflection) . Đây là sự kết hợp giữa sự phản chiếu và bản dịch theo cùng hướng với trục phản chiếu.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Một mẫu có thể có nhiều hơn một loại đối xứng. Và cũng giống như đối với hình vuông, chúng ta có thể tìm thấy [nhóm đối xứng](gloss:symmetry-group) của một mẫu, trong đó chứa tất cả các đối xứng khác nhau của nó.

Các nhóm này không cho bạn biết nhiều về hình mẫu _trông_ như thế nào (ví dụ như màu sắc và hình dạng của nó), chỉ là cách nó được _lặp lại_ . Nhiều mẫu khác nhau có thể có cùng một nhóm đối xứng - miễn là được sắp xếp và lặp lại theo cùng một cách.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Hai mẫu này có cùng tính đối xứng, mặc dù chúng trông rất khác nhau. Nhưng đối xứng không phải là về màu sắc, hoặc hình dạng bề ngoài.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Hai mẫu này cũng có các đối xứng giống nhau - mặc dù chúng trông giống với các mẫu tương ứng ở bên trái, hơn là với nhau.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Nó chỉ ra rằng, trong khi có vô số các mẫu có thể, tất cả chúng đều có một trong số 17 nhóm đối xứng khác nhau. Chúng được gọi là __Nhóm hình nền__ . Mỗi nhóm hình nền được xác định bởi sự kết hợp của các bản dịch, xoay, phản xạ và phản xạ trượt. Bạn có thể thấy các [tâm quay](gloss:center-of-rotation) và [trục phản xạ](gloss:axis-of-symmetry) trong các ví dụ này không?

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

Thật không may, không có lý do đơn giản tại sao có _17_ nhóm này, và chứng minh nó đòi hỏi toán học tiên tiến hơn. Thay vào đó, bạn có thể thử vẽ các mẫu lặp lại của riêng mình cho mỗi trong số 17 nhóm hình nền:


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

Các nhóm hình nền là tất cả về mô hình hai chiều phẳng. Chúng ta có thể làm một cái gì đó tương tự cho các mô hình ba chiều: chúng được gọi là các nhóm tinh thể học, và có 219 trong số chúng!

Ngoài các bản dịch, phản xạ, xoay và phản xạ trượt, các nhóm này bao gồm các đối xứng như __mặt phẳng trượt__ và __trục vít__ (nghĩ về chuyển động khi tháo nắp chai).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Boron-Nitride có các phân tử được sắp xếp trong mạng tinh thể này, có nhóm đối xứng ba chiều.

:::

---

## Đối xứng trong Vật lý

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Cho đến nay, tất cả các đối xứng chúng ta nhìn vào đều có _hình ảnh_ theo một nghĩa nào đó: hình dạng, hình ảnh hoặc mô hình có thể nhìn thấy. Trong thực tế, đối xứng có thể là một khái niệm rộng hơn nhiều: _miễn dịch với thay đổi_ .

Ví dụ, nếu bạn thích nước táo nhiều như bạn thích nước cam, thì sở thích của bạn là đối xứng trực tiếp theo sự biến đổi hoán đổi táo và cam.

Năm 1915, nhà toán học người Đức [Emmy Noether đã](bio:noether) quan sát thấy rằng một cái gì đó tương tự là đúng với [quy luật tự nhiên](gloss:laws-of-nature) .

::: column.grow

Ví dụ, kinh nghiệm của chúng tôi cho chúng ta biết rằng các định luật Vật lý giống nhau ở mọi nơi trong vũ trụ. Không thành vấn đề nếu bạn tiến hành một thí nghiệm ở London, hoặc ở New York hoặc trên Sao Hỏa - các định luật Vật lý phải luôn giống nhau. Theo một cách nào đó, chúng có [[tính đối xứng tịnh tiến | đối xứng phản xạ]] .

{.reveal(when="blank-0")} Tương tự như vậy, sẽ không có vấn đề gì nếu chúng ta tiến hành một thí nghiệm trong khi hướng về phía Bắc, hoặc Nam hoặc Đông hoặc Tây: quy luật tự nhiên có [[sự đối xứng quay | đối xứng phản xạ trượt]] .

{.reveal(when="blank-1")} Và cuối cùng, không có vấn đề gì nếu chúng ta tiến hành một thí nghiệm hôm nay, hoặc ngày mai hoặc trong một năm. Quy luật tự nhiên là thời gian đối xứng của người Viking.

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Những đối xứng của người Viking ban đầu có vẻ khá vô nghĩa, nhưng chúng thực sự có thể cho chúng ta biết rất nhiều về vũ trụ của chúng ta. Emmy Noether quản lý để chứng minh rằng mọi đối xứng tương ứng với một lượng vật lý nhất định được _bảo toàn_ .

Ví dụ, đối xứng thời gian ngụ ý rằng __Năng lượng__ phải được bảo toàn trong vũ trụ của chúng ta: bạn có thể chuyển đổi năng lượng từ loại này sang loại khác (ví dụ ánh sáng thành điện năng), nhưng bạn không bao giờ có thể tạo hoặc phá hủy năng lượng. Tổng lượng năng lượng trong vũ trụ sẽ luôn không đổi.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Nó chỉ ra rằng, chỉ cần biết về sự đối xứng, các nhà vật lý có thể rút ra hầu hết các định luật tự nhiên chi phối vũ trụ của chúng ta - mà không cần phải thực hiện một thí nghiệm hay quan sát.

Đối xứng thậm chí có thể dự đoán sự tồn tại của các hạt cơ bản. Một ví dụ là __Higgs Boson__ nổi tiếng: nó được dự đoán vào những năm 1960 bởi các nhà vật lý lý thuyết, nhưng không được quan sát trong thế giới thực cho đến năm 2012.

:::

---

## Pha loãng

> id: dilations
> section: dilations
> translated: auto

Cho đến nay, chúng tôi chỉ nhìn vào [[cứng nhắc | đồng dạng |]] biến đổi [[hình ảnh]] . _{span.reveal(when="blank-0")} Bây giờ chúng ta hãy nghĩ về một thứ không phải là: [__sự giãn nở__](gloss:dilation) thay đổi kích thước của hình dạng bằng cách làm cho nó lớn hơn hoặc nhỏ hơn._

---
> id: dilations-1

::: column.grow

Tất cả các pha loãng có một [__trung tâm__](target:center) và một [__yếu tố quy mô__](->.scale-target) . Trung tâm là điểm tham chiếu cho hệ số giãn nở và tỷ lệ cho chúng ta biết con số kéo dài hoặc co lại bao nhiêu.

Nếu hệ số [tỷ lệ](gloss:scale-factor) nằm trong khoảng từ 0 đến 1, hình ảnh [[nhỏ hơn | lớn]] hơn bản gốc. Nếu hệ số tỷ lệ lớn hơn 1, hình ảnh [[lớn hơn | nhỏ]] hơn bản gốc.

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

{.text-center.scale-target} Yếu tố quy mô: ${s}{s|2|0,3,0.1}

:::

{.todo} SẮP RA MẮT - Thông tin thêm về Pha loãng

---

## Tương tự

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
