# Fractal

## Giới thiệu

> section: introduction
> id: intro
> translated: auto

Khi nhìn xung quanh thiên nhiên, bạn có thể nhận thấy những loài thực vật phức tạp như thế này:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} __Dương xỉ__ này bao gồm nhiều lá nhỏ phân nhánh lớn hơn.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} __Romanesco bông cải xanh__ này bao gồm các hình nón [[nhỏ hơn|cubes|spheres]] xoắn ốc xung quanh một cái lớn hơn.

:::

{.reveal(when="blank-0")} Ban đầu, chúng có hình dạng rất phức tạp - nhưng khi bạn nhìn gần hơn, bạn có thể nhận thấy rằng cả hai đều theo một mô hình tương đối đơn giản: tất cả [các bộ phận riêng lẻ](target:fractal) của các cây trông giống hệt như toàn bộ Cây, chỉ nhỏ hơn. Mô hình tương tự được lặp đi lặp lại nhiều lần, ở quy mô nhỏ hơn. [Tiếp tục](btn:next)

---
> id: fern

Trong toán học, chúng ta gọi thuộc tính này là __tự tương tự__ và các hình dạng có tên đó là [__fractals__](gloss:fractal). Chúng là một trong những vật thể đẹp nhất và kỳ quái nhất trong tất cả toán học.

Để tạo ra các hình nhỏ của riêng mình, chúng ta phải bắt đầu với một mẫu đơn giản và sau đó lặp đi lặp lại nhiều lần, ở quy mô nhỏ hơn.

::: column.grow

Một trong những mẫu đơn giản nhất có thể là phân đoạn dòng [{.pill.red}](target:s1), với [{.pill.blue} hai phân đoạn nữa](target:s2) phân nhánh một đầu. Nếu chúng ta lặp lại mô hình này, cả hai phân đoạn màu xanh này cũng sẽ có thêm hai nhánh ở cuối của chúng.

Bạn có thể di chuyển [dấu chấm màu xanh](target:dot) để thay đổi độ dài và góc của tất cả các nhánh. Sau đó tăng số lần lặp bằng cách sử dụng [thanh trượt](->#fern-slider) bên dưới.

{.reveal(when="slider-0")} Tùy thuộc vào vị trí của các nhánh, bạn có thể tạo các mẫu hoàn toàn khác nhau - trông giống như [fern](action:set(130,228,197,184)) ở trên, một [cây](action:set(160,186,200,186)) hoặc [hình ngũ giác lồng nhau](action:set(113,235,232,238)). Bạn có thể tìm thấy gì khác? [Tiếp tục](btn:next)

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

Một fractal nổi tiếng khác là tam giác [__Sierpinki__](gloss:sierpinski-triangle). Trong trường hợp này, chúng ta bắt đầu với một hình tam giác lớn, bằng nhau, và sau đó liên tục cắt các hình tam giác nhỏ hơn ra khỏi các phần còn lại.

{.reveal(when="slider=0")} Lưu ý cách hình dạng cuối cùng được tạo thành từ [ba bản sao giống hệt nhau của chính nó](target:x) và mỗi bản sao này được tạo thành từ các bản sao nhỏ hơn của toàn bộ tam giác! Bạn có thể tiếp tục phóng to vào hình tam giác mãi mãi, và các mẫu và hình dạng sẽ luôn tiếp tục lặp lại.

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

Các nhà máy ở đầu chương này _trông_ giống như các fractals, nhưng rõ ràng không thể tạo ra các fractals _thật_ trong đời thực. Nếu chúng ta cứ lặp đi lặp lại cùng một kiểu lặp đi lặp lại, nhỏ hơn và nhỏ hơn, cuối cùng chúng ta sẽ đến được các tế bào, phân tử hoặc nguyên tử không còn có thể phân chia được nữa.

Tuy nhiên, bằng cách sử dụng toán học, chúng ta có thể nghĩ về các thuộc tính mà fractals thực sự sẽ có - và đây là những điều rất đáng ngạc nhiên [Tiếp tục](btn:next)

---
> id: dimension

### Kích thước Fractal

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Đầu tiên, hãy để ý nghĩ về kích thước của fractals. Một dòng có thứ nguyên [[1]]. _{span.reveal(when="blank-0")} Khi nhân rộng nó theo hệ số 2, chiều dài của nó tăng theo hệ số `2^1 = 2`. Rõ ràng!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Một hình vuông có kích thước [[2]]. _{span.reveal(when="blank-0")} Khi nhân rộng nó theo hệ số 2, diện tích của nó tăng theo hệ số `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Một khối lập phương có kích thước [[3]]. _{span.reveal(when="blank-0")} Khi chia tỷ lệ theo hệ số 2, khối lượng của nó tăng theo hệ số `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Lưu ý rằng khối lớn hơn trong hình ảnh bao gồm 8 bản sao của bản nhỏ hơn!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Bây giờ hãy để một cái nhìn về tam giác Sierpinki. Nếu chúng tôi chia tỷ lệ theo hệ số 2, bạn có thể thấy rằng phạm vi của khu vực của bạn tăng theo hệ số [[3]].

{.reveal(when="blank-0")} Hãy nói rằng _d_ là kích thước của tam giác Sierpinki. Sử dụng cùng một mẫu như trên, chúng tôi nhận được `2^d = 3`. Nói cách khác, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} 1.585 tựa_

:::

---
> id: dimension-4

Nhưng chờ đợi, làm thế nào một cái gì đó có một thứ nguyên không phải là một số nguyên? Có vẻ như không thể, nhưng đây chỉ là một trong những tính chất kỳ lạ của fractals. Trên thực tế, đây là những gì mang lại cho fractals tên của chúng: chúng có kích thước phân __đoạn__.

Với mỗi lần lặp lại, chúng tôi loại bỏ một phần diện tích của tam giác Sierpinki. Nếu chúng ta có thể làm điều này vô cùng nhiều lần, thì thực sự sẽ không còn khu vực nào nữa: đó là lý do tại sao tam giác Sierpinki là một thứ gì đó nằm giữa khu vực 2 chiều và đường 1 chiều.

::: .theorem

Trong khi nhiều fractals là _tự tương tự_, một định nghĩa tốt hơn là __fractals__ là các hình có kích thước không nguyên {{}}__.

:::

[Tiếp tục](btn:next)

---

> id: snowflake

### Bông tuyết Koch

Có rất nhiều hình dạng trong tự nhiên trông giống như fractals. Chúng tôi đã thấy một số nhà máy ở đầu chương này. Các ví dụ tuyệt vời khác là bông tuyết và tinh thể băng:

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

Để tạo ra bông tuyết fractal của riêng chúng ta, một lần nữa chúng ta phải tìm một quy trình đơn giản mà chúng ta có thể áp dụng nhiều lần.

::: column.grow

Giống như tam giác Sierpinki, hãy bắt đầu với một tam giác đều, bằng nhau. Tuy nhiên, thay vì _loại bỏ_ hình tam giác nhỏ hơn ở mỗi bước, chúng tôi _thêm_ hình tam giác nhỏ hơn dọc theo cạnh. Độ dài cạnh của mỗi tam giác là [[`1/3`|`1/4`|`1/2`]] của các tam giác ở bước trước.

{.reveal(when="blank-0")} Hình dạng kết quả được gọi là [__Bông tuyết Koch__](gloss:koch-snowflake), được đặt theo tên của nhà toán học Thụy Điển [Helge von Koch](bio:koch). Lưu ý, một lần nữa, [phần nhỏ](target:t2) của cạnh của bông tuyết trông giống hệt như [phần lớn hơn](target:t1).

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

Khi chúng tôi chia tỷ lệ một phân đoạn cạnh của Bông tuyết Koch theo hệ số 3, chiều dài của nó là [[gấp bốn lần|triples|doubles]].

{.reveal(when="blank-0")} Sử dụng cùng một mối quan hệ giữa các kích thước và các yếu tố tỷ lệ như trên, chúng ta có phương trình [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Điều này có nghĩa là kích thước của Bông tuyết Koch là `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Khu vực _{span.check(when="blank-6")}_

Tạo các bông tuyết Koch gần giống như một chuỗi đệ [quy](gloss:sequence-recursive): chúng ta biết hình dạng bắt đầu (một hình tam giác) và chúng ta biết cách chuyển từ một thuật ngữ này sang thuật ngữ tiếp theo (bằng cách thêm nhiều hình tam giác ở mỗi cạnh):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] hình tam giác mới

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] hình tam giác mới

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] hình tam giác mới

:::

{.reveal(when="blank-0 blank-1 blank-2")} Sau lần lặp đầu tiên, số lượng tam giác mới được thêm vào tăng theo hệ số [[4]] ở mỗi bước. Đồng thời, diện tích của các hình tam giác mới này giảm theo hệ số [[9]] ở mỗi bước.

{.reveal(when="blank-3 blank-4")} Hãy để nói rằng [tam giác đầu tiên](->#koch-0) có diện tích là 1. Sau đó, tổng diện tích của [ba tam giác tiếp theo](->#koch-1) là `3 × 1/9 = 1/3`. Tất cả các bước sau đây tạo thành một chuỗi hình [[học|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} với tỷ lệ chung [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Sử dụng công thức tính tổng của chuỗi hình học [vô hạn](gloss:geometric-series), chúng ta có thể tính được rằng tổng diện tích của bông tuyết Koch là

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Chu vi _{span.check(when="blank-9")}_

::: column.grow

Chúng ta cũng có thể thử tính chu vi của bông tuyết Koch. Như chúng ta đã thấy trước đây, độ dài của chu vi thay đổi theo hệ số [[`4/3`|`3/4`|`1/4`]] ở mỗi bước.

{.reveal(when="blank-8")} Điều này có nghĩa là, một lần nữa, chúng ta có một chuỗi hình học - nhưng trong trường hợp này, nó [[không hội tụ|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} Điều này có nghĩa là chu vi của bông tuyết Koch thực sự là __dài vô hạn__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Nếu điều này có vẻ trái ngược, chỉ cần nhớ rằng chúng tôi nhân chu vi với `§4/3` ở mỗi bước và chúng tôi thực hiện việc này vô cùng nhiều lần._

:::

---

> id: frozen

::: column.grow

Gần như không thể tưởng tượng rằng bạn có thể có hình dạng với diện tích _hữu hạn_ và chu vi_ vô hạn_ - nhưng đây chỉ là một trong nhiều đặc tính bất ngờ của fractals.

Bạn có thể đưa ra bất kỳ cách nào khác để tạo ra fractals của riêng bạn? [Tiếp tục](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} Linh hồn của tôi đang xoắn ốc trên những mảnh nhỏ bị đóng băng xung quanh

:::

---

> id: menger-sponge

### Miếng bọt biển

Fractals don lồng phải là loại phẳng phẳng, giống như nhiều ví dụ ở trên. Một trong những mảnh nhỏ nổi tiếng nhất có hình 3 chiều là miếng bọt biển __Menger__, được đặt theo tên của nhà toán học [Karl Menger](bio:menger), người đầu tiên mô tả nó vào năm 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Chúng tôi bắt đầu với một khối lập phương vững chắc, và liên tục khoan các lỗ nhỏ hơn và nhỏ hơn vào các cạnh của nó. Mỗi lần lặp lỗ mới có [[`1/3`|`1/2`|`1/4`]] chiều rộng của lần lặp lỗ trước đó.

{.reveal(when="blank-0")} Một khối `3×3×3` bao gồm 27 khối nhỏ hơn, nhưng ở đây chúng tôi đã loại bỏ một số trong số này. Miếng bọt biển Menger bao gồm]] 20]] bản sao của nó, nhỏ hơn 3 lần.

{.reveal(when="blank-1")} Bây giờ chúng ta có thể thử tính kích thước _d_ của miếng bọt biển Menger giống như chúng ta đã làm cho bông tuyết Koch ở trên. Trong trường hợp này, chúng tôi nhận được `3^d = 20` hoặc `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Nếu bạn tưởng tượng việc cắt ra càng nhiều lỗ, vô cùng nhiều lần, sẽ không còn khối lượng thực tế. Đó là lý do tại sao khối lập phương là không phải là 3 chiều! [Tiếp tục](btn:next)

---

> id: coastlines

### Đường bờ biển Fractal

Một trong những đặc điểm chính của tất cả các fractals mà chúng tôi đã thấy cho đến nay là bạn có thể phóng to phóng to mãi mãi và luôn tìm thấy các mẫu mới. Khoảng năm 1920, nhà toán học người Anh [Lewis Fry Richardson](bio:richardson) nhận ra rằng điều tương tự cũng đúng với biên giới hoặc bờ biển của nhiều quốc gia.

Bạn bắt đầu với hình dạng cơ bản của đất nước, và khi bạn phóng to, bạn thêm các cửa sông, vịnh và cửa sông, sau đó là các vách đá, đá, sỏi, v.v.

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

[Tiếp tục](btn:next)

---

> id: coastlines-1

::: column.grow

Đây là một vấn đề quan trọng khi cố gắng tính chiều dài biên giới của một quốc gia - làm thế nào để bạn quyết định phóng to bao xa, và bao gồm các ngõ ngách?

Chẳng hạn, một cách chúng ta có thể đo chiều dài bờ biển của Anh, là lấy một cây thước dài, đi bộ khắp các bãi biển của nó, và sau đó cộng tất cả các khoảng cách.

Nếu thước dài ${rulers[index]}{index|0|0,8,1} km, chúng ta phải sử dụng ${count} lần, do đó, chúng ta có tổng đường bờ biển là ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Chúng ta chỉ có thể tiếp tục, với những người cai trị nhỏ hơn và nhỏ hơn, và mỗi lần kết quả của chúng ta cho chiều dài của đường bờ biển sẽ dài hơn một chút. Giống như Bông tuyết Koch trước đây, dường như bờ biển nước Anh dài vô tận! Điều này thường được gọi là nghịch lý bờ __biển__. [Tiếp tục](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Vài thập kỷ sau, nhà toán học [Benoit Mandelbrot](bio:mandelbrot) tình cờ bắt gặp công việc của Richardson trong một cuốn sách thư viện bị loại bỏ, khi làm việc tại IBM. Ông đã nhận ra tầm quan trọng của nó, và cũng là cách nó liên quan đến nghiên cứu gần đây hơn về fractals và kích thước.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Đường bờ biển của Anh chắc chắn có vẻ như fractal, nhưng nó không giống với _>>>>, giống như các fractals khác mà chúng tôi đã thấy trước đây. Để tìm kích thước của nó, chúng ta có thể vẽ nó trên một lưới và đếm số lượng ô mà nó giao nhau.

{.r.reveal(when="slider-0")} Ban đầu, có __{.pill.yellow} 88__ các ô giao nhau. Nếu chúng ta chia tỷ lệ đường bờ biển theo hệ số 2, có __{.pill.yellow} 197__ các ô giao nhau - nhiều hơn gấp đôi! [Tiếp tục](btn:next)

{.r.reveal(when="next-0")} Kích thước của đường bờ biển đã tăng theo hệ số `§197/88`. Giống như trước đây, điều này có nghĩa là kích thước của đường bờ biển là

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Nếu chúng ta lặp lại điều này với các lưới lớn hơn, chúng ta sẽ thấy rằng kích thước của bờ biển Anh Làn thực sự là khoảng 1,21. Mandelbrot nhận ra rằng kích thước fractal này cũng là thước đo độ __nhám__ của một hình dạng - một khái niệm mới, mà ông đã tìm thấy các ứng dụng quan trọng trong nhiều lĩnh vực khác của toán học và khoa học.

---

> id: nature

### Thêm Fractals trong tự nhiên và công nghệ

Mặc dù fractals thực sự không bao giờ có thể xuất hiện trong tự nhiên, có rất nhiều đối tượng trông giống như _gần như_ giống như fractals. Chúng tôi đã nhìn thấy thực vật, bông tuyết và bờ biển, và đây là một số ví dụ khác:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Dãy núi ở Trung Á

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Đồng bằng sông Hằng ở Ấn Độ

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} tia sét

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Mạch máu ở võng mạc

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon ở Hoa Kỳ

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Mây

:::

Tất cả các đối tượng này có thể xuất hiện hoàn toàn ngẫu nhiên, nhưng, giống như fractals, có một mô hình cơ bản xác định cách chúng được hình thành. Toán học có thể giúp chúng ta hiểu các hình dạng tốt hơn và fractals có các ứng dụng trong các lĩnh vực như y học, sinh học, địa chất và khí tượng. [Tiếp tục](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Địa hình fractal do máy tính tạo ra

::: column.grow

Ví dụ, chúng ta cũng có thể sử dụng các hình nhỏ để tạo ra các bản sao thực tế, bản chất, như phong cảnh và kết cấu được sử dụng trong các trò chơi video hoặc phim do máy tính tạo ra. Nước, núi và mây trong hình ảnh này được tạo ra hoàn toàn bằng máy tính, với sự trợ giúp của fractals!

Và chúng tôi thậm chí có thể đảo ngược quá trình này để nén hình ảnh kỹ thuật số, để giảm kích thước tệp của chúng. Các thuật toán đầu tiên được phát triển bởi Michael Barnsley và Alan Sloan vào những năm 1980, và những thuật toán mới vẫn đang được nghiên cứu cho đến ngày nay.

:::

---

## Tam giác Sierpinki

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

Một trong những hình chữ nhật mà chúng ta đã thấy trong chương trước là tam giác [__Sierpinki__](gloss:sierpinski-triangle), được đặt theo tên của nhà toán học Ba Lan [Wacław Sierpiński](bio:sierpinski). Nó có thể được tạo ra bằng cách bắt đầu với một hình tam giác lớn, bằng nhau, và sau đó liên tục cắt các hình tam giác nhỏ hơn ra khỏi tâm của nó.

{.r.reveal(when="slider-0")} Wacław Sierpiński là nhà toán học đầu tiên nghĩ về các tính chất của tam giác này, nhưng nó đã xuất hiện nhiều thế kỷ trước đó trong các tác phẩm nghệ thuật, hoa văn và khảm.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Dưới đây là một số ví dụ về việc lát sàn từ các nhà thờ khác nhau ở Rome:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Hóa ra, tam giác Sierpinki xuất hiện trong một loạt các lĩnh vực khác của toán học, và có nhiều cách khác nhau để tạo ra nó. Trong chương này, chúng ta sẽ khám phá một số trong số họ! [Tiếp tục](btn:next)

---

> id: pascal
> goals: select

### Tam giác Pascal

Bạn có thể đã nhớ tam giác Sierpinki từ chương của chúng tôi về [__Pascal Trâm__](gloss:pascals-triangle). Đây là một kim tự tháp số trong đó mọi số là tổng của hai số trên. Chạm vào tất cả các số _thậm chí_ trong hình tam giác bên dưới, để tô sáng chúng - và xem nếu bạn nhận thấy một mẫu:

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

Tam giác Pascal có thể được tiếp tục đi xuống mãi mãi và mô hình Sierpinki sẽ tiếp tục với các tam giác lớn hơn và lớn hơn. Bạn đã có thể thấy sự bắt đầu của một hình tam giác thậm chí còn lớn hơn, bắt đầu từ hàng 16.

Nếu hai ô liền kề chia hết cho 2, thì tổng của chúng trong ô bên dưới cũng phải chia hết cho 2 - đó là lý do tại sao chúng ta chỉ có thể có được các hình tam giác màu (hoặc các ô đơn). Tất nhiên, chúng ta cũng có thể thử tô màu tất cả các ô chia hết cho các số _khác với 2_. Bạn nghĩ gì sẽ xảy ra trong những trường hợp đó? [Tiếp tục](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Tại đây bạn có thể thấy một phiên bản nhỏ của 128 hàng đầu tiên của tam giác Pascal. Chúng tôi đã đánh dấu tất cả các ô chia hết cho ${n}{n|2|2,40,1} - bạn chú ý điều gì?

{.reveal(when="var-0")} Với mỗi số, chúng ta có một mẫu hình tam giác khác nhau tương tự như tam giác Sierpinki. Mẫu đặc biệt thường xuyên nếu chúng ta chọn số nguyên [[tố|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Nếu số có _nhiều yếu tố nguyên tố_ khác nhau, mẫu có vẻ ngẫu nhiên hơn._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Trò chơi hỗn loạn

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Ở đây bạn có thể thấy ba đỉnh của một tam giác đều. Chạm vào bất cứ nơi nào trong khu vực màu xám để tạo điểm thứ tư.

. [Tiếp tục](btn:next)

{.r.reveal(when="next-0")} Bây giờ chúng tôi lặp lại quy trình: chúng tôi chọn một đỉnh ngẫu nhiên khác, vẽ đoạn từ điểm cuối cùng của chúng tôi và sau đó tìm trung điểm [{.pill.green}](target:p2). Lưu ý rằng chúng ta tô màu các điểm mới này dựa trên màu của đỉnh của tam giác mà chúng ta đã chọn. [Tiếp tục](btn:next)

{.reveal(when="next-1")} Cho đến nay, không có gì đáng ngạc nhiên xảy ra - nhưng hãy xem khi chúng ta lặp lại quá trình tương tự nhiều lần nữa:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Thêm 1000 bước_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Quá trình này được gọi là __Trò chơi hỗn loạn__. Có thể có một vài điểm đi lạc lúc ban đầu, nhưng nếu bạn lặp lại các bước tương tự nhiều lần, sự phân bố các chấm bắt đầu trông giống hệt như tam giác Sierpinki!

Có nhiều phiên bản khác của nó - ví dụ: chúng ta có thể bắt đầu bằng hình vuông hoặc hình ngũ giác, chúng ta có thể thêm các quy tắc bổ sung như không thể chọn cùng một đỉnh hai lần liên tiếp hoặc chúng ta có thể chọn điểm tiếp theo theo tỷ lệ khác với `§1/2` dọc theo đoạn. Trong một số trường hợp này, chúng tôi sẽ chỉ nhận được một phân phối ngẫu nhiên các dấu chấm, nhưng trong các trường hợp khác, chúng tôi tiết lộ nhiều hơn nữa các đoạn nhỏ:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Bạn đã khám phá thảm {Sierpinki](action:carpet()) hay bông tuyết hình ngũ giác [này dựa trên [__Tỷ lệ vàng__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Tự động di động

Một máy tự động di __động__ là một lưới bao gồm nhiều ô riêng lẻ. Mỗi ô có thể ở các trạng thái khác nhau, các trạng thái khác nhau (ví dụ: các màu khác nhau) và trạng thái của mọi ô được xác định bởi các ô xung quanh.

Trong ví dụ của chúng tôi, mọi ô có thể là đen hoặc trắng. Chúng tôi bắt đầu với một hàng chỉ chứa một hình vuông màu đen. Trong mỗi hàng tiếp theo, màu của mỗi ô được xác định bởi ba ô ngay bên trên. Nhấn vào tám tùy chọn có thể bên dưới để lật màu của chúng - bạn có thể tìm thấy một bộ quy tắc tạo ra một mô hình tương tự như tam giác Sierpinki không?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Có hai lựa chọn cho mỗi trong số tám tùy chọn, có nghĩa là có tổng cộng `2^8 =` [[256]]. Một số, như [Quy tắc 126](action:setRule('01111110')), trông giống như tam giác Sierpinki. Những người khác, như [Quy tắc 30](action:setRule('01111000')), trông hoàn toàn hỗn loạn. Nó được phát hiện bởi [Stephen Wolfram](bio:wolfram) vào năm 1983 và máy tính thậm chí có thể sử dụng chúng để tạo ra các số ngẫu nhiên!

---

> id: cellular-1

::: column.grow

Cellata automata cho thấy các mẫu rất phức tạp có thể được tạo ra bằng các quy tắc rất đơn giản - giống như fractals. Nhiều quy trình trong tự nhiên cũng tuân theo các quy tắc đơn giản, nhưng tạo ra các hệ thống cực kỳ phức tạp.

Trong một số trường hợp, điều này có thể dẫn đến sự xuất hiện của các mẫu trông giống như automata di động, ví dụ như màu sắc trên vỏ của con ốc này.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus dệt, một con ốc biển độc

:::

---

> id: tetrahedra

### tứ diện Sierpinki

Có nhiều biến thể của tam giác Sierpinki và các hình chữ nhật khác có tính chất và quy trình tạo tương tự. Một số nhìn 2 chiều, như _Thảm Sierpinki_ bạn đã thấy ở trên. Những người khác nhìn 3 chiều, như những ví dụ sau:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} tứ diện Sierpinki

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Kim tự tháp Sierpinki

:::

---

## Bộ Mandelbrot

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Tất cả các fractals mà chúng ta đã thấy trong các chương trước đã được tạo bằng quy trình __lặp__: bạn bắt đầu với một mẫu cụ thể, và sau đó bạn lặp đi lặp lại nhiều lần.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Điều này tương tự với một khái niệm khác trong toán học mà bạn đã thấy trước đây: với [chuỗi đệ quy](gloss:sequence-recursive), bạn bắt đầu với một số cụ thể, và sau đó bạn áp dụng cùng một công thức đệ quy, để lấy số tiếp theo trong sự nối tiếp.

Ví dụ, hãy lấy công thức đệ quy `§x_n = x_(n-1)^2` và vẽ các thuật ngữ của nó trên một dòng số. Bạn có thể thay đổi giá trị của `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Lưu ý cách chuỗi kết quả có thể hành xử rất khác nhau, tùy thuộc vào giá trị bắt đầu `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Nếu `x_0 > 1`, chuỗi [[phân kỳ|converges]]:|converges]] {span.reveal(when="blank-0")}, nó sẽ tiếp tục phát triển, lên đến vô cùng._

::: column.frame.f-blue.text-center(width=212)

Nếu `x_0` nằm giữa dòng1 và 1, chuỗi [[hội tụ|diverges]].

::: column.frame.f-blue.text-center(width=212)

Nếu `x_0 < -1`, chuỗi [[phân kỳ|converges]].

:::

---

> id: iteration-2

Cho đến nay, chúng tôi không học được gì mới. Tuy nhiên, khoảng một thế kỷ trước, các nhà toán học bắt đầu khám phá những gì xảy ra với các chuỗi này nếu bạn sử dụng [__số phức__](gloss:complex-numbers), thay vì chỉ là dòng số thực. Những khám phá của họ là một số kết quả đáng ngạc nhiên và đẹp nhất trong tất cả các toán học.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Bộ Julia

Hãy để sử dụng chuỗi tương tự như trước, `§x_n = x_(n-1)^2`, nhưng trên mặt phẳng phức. Bạn có thể di chuyển vị trí của `pill(x_0,"yellow","x0")`, để xem điều gì xảy ra với các điều khoản sau. Nếu chuỗi trông giống như nó sẽ hội tụ, hãy tô màu điểm tương ứng trên mặt phẳng theo _{span.pill.blue} màu xanh_:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Như bạn có thể thấy, chuỗi hội tụ miễn là `pill(x_0,"yellow","x0")` nằm [[bên trong vòng tròn đơn vị| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (vòng tròn có bán kính 1, tập trung tại điểm gốc)._

---

> id: julia-1

Bây giờ hãy để Lừa làm mọi thứ khó khăn hơn một chút. Thay vì chỉ bình phương số trước đó, chúng tôi cũng thêm hằng số _{.pill.red} c_ mỗi lần (có thể là bất kỳ số phức nào). Nói cách khác, `§x_n = x_(n-1)^2 + c`. Bạn có nghĩ rằng chúng tôi vẫn sẽ có được một vòng tròn hội tụ? Những hình dạng khác mà bạn nghĩ rằng chúng ta có thể nhìn thấy? [Tiếp tục](btn:next)

---

> id: julia-2

Trong sơ đồ này, bạn có thể di chuyển vị trí của `pill(x_0,"yellow","x0")` cũng như giá trị của `pill(c,"red","c")`:

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

{div(slot="legend")} Chúng ta đã biết điều gì sẽ xảy ra nếu [`c = 0`](action:animate(0,0)) - điều đó giống như ví dụ ở trên. Chuỗi hội tụ miễn là `x_0` nằm trong vòng tròn đơn vị.

{div(slot="legend")} Ngay sau khi chúng tôi thay đổi giá trị của _c_, một điều tuyệt vời sẽ xảy ra. Các vòng tròn biến thành một hình dạng fractal rất phức tạp.

{div(slot="legend")} Khi [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), hình dạng phân chia thành vô số các phần tử nhỏ được sắp xếp theo hình xoắn ốc.

::: div(slot="legend")

Trong một số trường hợp, chuỗi khôngn hội tụ đến một điểm duy _nhất_ - thay vào đó, nó đạt đến một chu kỳ gồm nhiều điểm, giống như một hình tam giác. Các chu trình này được gọi là __quỹ đạo__.

Các điểm có màu xanh lam có nghĩa là dãy tương ứng sẽ hội tụ hoặc có quỹ đạo (chúng tôi nói rằng đó là __giới hạn__). Các điểm được để lại màu trắng có nghĩa là chuỗi tương ứng __phân kỳ__: nó không bị giới hạn, và cuối cùng thổi đến vô cùng.

:::

{div(slot="legend")} bạn có thể tìm thấy gì khác? Hãy xem các mẫu khi [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) hoặc khi [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Ngoài ra còn có một số giá trị của _c_ trong đó _mỗi_ trình tự phân kỳ, do đó toàn bộ đồng bằng phức tạp vẫn giữ nguyên màu trắng.

:::

---

> id: julia-3

Các hình dạng khác nhau được hình thành bằng cách tô màu trong các số được gọi là [__Julia Đặt__](gloss:julia-set). Chúng được phát hiện độc lập bởi hai nhà toán học người Pháp, [Gaston Julia](bio:julia) và [Pierre Fatou](bio:fatou), vào khoảng năm 1918.

Vào thời điểm đó, không có máy tính để giúp hình dung bộ Julia thực sự trông như thế nào. Các nhà toán học như Julia và Fatou có thể suy luận về chúng về mặt toán học, nhưng họ chỉ nhìn thấy những bản phác thảo vẽ tay thô ráp về những gì họ có thể trông như thế nào.

Chúng tôi không có vấn đề này ngày hôm nay - những hình ảnh dưới đây là tất cả các bộ Julia khác nhau. Các màu khác nhau biểu thị _nhanh như thế nào_ trình tự tại điểm đó phân kỳ:

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

[Tiếp tục](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Bộ Mandelbrot

Khi tạo các bộ Julia khác nhau, bạn có thể nhận thấy rằng có một số giá trị _c_ mà mọi chuỗi đều phân kỳ và toàn bộ mặt phẳng phức vẫn giữ nguyên màu trắng. Vài thập kỷ sau Julia và Fatou, một thế hệ các nhà toán học mới đã cố gắng vạch ra những khu vực này trông như thế nào.

Trong ví dụ trước, chúng tôi đã chọn một giá trị cố định cho `pill(c,"red","c")`, và sau đó thay đổi vị trí của `pill(x_0,"yellow","x0")` để tô màu cho mặt phẳng. Bây giờ, hãy để Lừa sửa giá trị của `pill(x_0 = 0,"yellow","x0")` và thay vào đó thay đổi giá trị của `pill(c,"red","c")`.

Một lần nữa, vẽ lên mặt phẳng phức tạp để lộ khu vực mà các chuỗi vẫn còn giới hạn. Những hình dạng nào bạn mong đợi xuất hiện?

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

Fractal này được gọi là [__Mandelbrot Set__](gloss:mandelbrot-set), và khi được xoay 90 °, nó trông gần giống như một người, với đầu, cơ thể và hai cánh tay. Nó được định nghĩa và vẽ lần đầu tiên vào năm 1978, trong một bài viết nghiên cứu của các nhà toán học Robert Brooks và Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Vài năm sau, [Benoit Mandelbrot](bio:mandelbrot) đã sử dụng các máy tính mạnh mẽ tại IBM để tạo ra một hình ảnh chi tiết hơn nhiều về fractal, sau này được đặt theo tên ông. Các bản in đầu tiên trông khác với những gì anh ta mong đợi - cho đến khi anh ta nhận ra rằng các kỹ thuật viên làm việc tại các máy in đang dọn dẹp các fuzziness, xung quanh rìa của nó, cho rằng đó là do các hạt bụi hoặc lỗi máy in, và không phải là một đặc điểm xác định của fractals ! [Tiếp tục](btn:next)

---

> id: mandel-zoom

Giống như tất cả các fractals, chúng ta có thể phóng to thu nhỏ vào nhóm Mandelbrot mãi mãi, tìm ra các mẫu mới ở mọi quy mô. Tại đây, bạn có thể phóng to một phần của bộ Mandelbrot được gọi là __thung lũng cá ngựa__. Điểm đen là _bên trong_ bộ Mandelbrot, trong đó chuỗi được giới hạn. Các điểm màu là _bên ngoài_ bộ Mandelbrot, trong đó chuỗi phân kỳ và các màu khác nhau biểu thị _nó phát triển nhanh đến mức nào:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Thanh trượt này bao gồm 27 hình ảnh riêng lẻ, lên tới mức thu phóng hơn 14 triệu, hoặc `2^54`. Tổng cộng, họ mất gần 45 phút để kết xuất trên một máy tính xách tay hiện đại. Bộ Mandelbrot có thể được tạo chỉ bằng một phương trình đơn giản, `§x_n = x_(n-1)^2 + c`, nhưng nó vô cùng phức tạp và đẹp tuyệt vời.

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

Khi bạn di chuyển giá trị [{.pill.red} c](target:c) xung quanh bộ Mandelbrot, bạn có thể nhận thấy một thuộc tính tò mò:

* Tất cả các chuỗi trong thân [chính](target:bulb0) của bộ Mandelbrot [[hội tụ|diverge|reach an orbit]] _{span.reveal(when="blank-0")} đến một điểm duy nhất._
* {.reveal(when="blank-0")} Các chuỗi trong [bóng đèn lớn](target:bulb1) ở đầu [[đạt đến quỹ đạo|converge|diverge]] _{span.reveal(when="blank-1")} bao gồm [[3]] điểm._
* {.reveal(when="blank-2")} Chuỗi trong [bóng đèn nhỏ hơn này](target:bulb2) có quỹ đạo có chiều dài [[5]].

:::

{.reveal(when="blank-3")} Mỗi bóng đèn có quỹ đạo có kích thước khác nhau, với các bóng đèn nhỏ hơn có càng nhiều điểm trên quỹ đạo của chúng. Kích thước của các quỹ đạo này có liên quan chặt chẽ với __Bản đồ logistic__, một khái niệm quan trọng trong [lý thuyết hỗn loạn](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot dành phần lớn cuộc đời của mình cho nghiên cứu về fractals, cũng như toán học của _độ nhám_ và _tự tương tự_. Công việc của ông có các ứng dụng trong vật lý, khí tượng, thần kinh học, kinh tế, địa chất, kỹ thuật, khoa học máy tính và nhiều lĩnh vực khác.

Năm 1985, bộ Mandelbrot xuất hiện trên trang bìa của tạp chí _Science American_, và từ đó nó đã trở thành một trong những hình dạng toán học dễ nhận biết nhất trên thế giới. Bạn có thể tìm thấy nó trên áo phông, trong các video âm nhạc, và như những người bảo vệ màn hình, và nó đã được tham khảo trong nhiều cuốn sách và bộ phim nổi tiếng.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Đường cong lấp đầy không gian

> section: space-filling
> sectionStatus: dev

{.todo} Sắp ra mắt!
