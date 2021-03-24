# Đa giác và đa diện

## Đa giác

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

Một [__đa giác__](gloss:polygon) là một hình dạng khép kín, phẳng, chỉ có các cạnh thẳng. Đa giác có thể có bất kỳ số cạnh và góc, nhưng các cạnh không thể cong. Hình nào dưới đây là đa giác?

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

Chúng tôi đặt tên khác nhau cho đa giác, tùy thuộc vào số lượng chúng có:

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

### Góc trong đa giác

Mỗi đa giác có _n_ cạnh cũng có _n_ [góc trong](gloss:internal-angle) . Chúng ta đã biết rằng tổng các góc bên trong một tam giác luôn là [[180]]° nhưng còn các đa giác khác thì sao?

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

Có vẻ như tổng các góc bên trong một hình tứ giác luôn là [[360]]° - chính xác [[gấp đôi | ba lần | một nửa]] tổng số góc trong một tam giác. _{span.reveal(when="blank-0 blank-1")} Điều này không phải là ngẫu nhiên: mọi tứ giác đều có thể được chia thành hai hình tam giác._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Điều tương tự cũng hoạt động cho đa giác lớn hơn. Chúng ta có thể chia một hình ngũ giác thành [[3]] hình tam giác, do đó tổng góc bên trong của nó là `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Và chúng ta có thể chia một hình lục giác thành [[4]] hình tam giác, vì vậy tổng góc bên trong của nó là `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Một đa giác với ${x}{x|7|3,15,1} các cạnh sẽ có tổng góc trong là 180° × ${x-2} = = ${(x-2)*180}°. Tổng quát hơn, một đa giác có _n_ cạnh có thể được chia thành [[n - 2 | n - 1 | n]] hình tam giác. Vì thế,

{.text-center.reveal(when="blank-0")} Tổng các góc bên trong một đường chéo _n_ `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Đa giác lồi và lõm

::: column.grow

Chúng tôi nói rằng một đa giác là [__lõm__](gloss:concave) nếu nó có một phần mà điểm Điểm hướng vào trong. Bạn có thể tưởng tượng rằng phần này có phần được [trích dẫn trong tập sách](target:cave) . Đa giác _không_ lõm được gọi là [__lồi__](gloss:convex) .

Có hai cách bạn có thể dễ dàng xác định các đa giác lõm: chúng có ít nhất một [góc bên trong lớn hơn 180°](target:angle) . Họ cũng có ít nhất một [đường chéo nằm _ngoài_ đa giác](target:diagonal) .

Mặt khác, trong đa giác lồi, tất cả các góc bên trong đều nhỏ hơn [[180]]° và tất cả các đường chéo nằm [[bên trong | ngoài]] đa giác.

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

Những đa giác nào là lõm?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Đa giác thông thường

Chúng tôi nói rằng một đa giác là [__thường xuyên__](gloss:regular-polygon) nếu tất cả các cạnh của nó có cùng chiều dài và tất cả các góc có cùng kích thước. Những hình dạng nào là đa giác thông thường?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Đa giác thông thường có thể có nhiều kích cỡ khác nhau - nhưng tất cả các đa giác thông thường có cùng số cạnh [[đều giống nhau | đồng dạng | Có cùng diện tích]] !

---
> id: regular-2

Chúng ta đã biết tổng của tất cả [các góc bên](gloss:internal-angle) trong đa giác. Đối với đa giác thông thường, tất cả các góc này có [[cùng kích thước | là các góc thay thế]] , vì vậy chúng ta có thể tính ra kích thước của một góc bên trong duy nhất:

{.text-center.reveal(when="blank-0")} góc = <mfrac><mrow>[[tổng của tất cả các góc | số góc]]</mrow><mrow>[[số góc | tổng của tất cả các góc]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} Nếu `n=3` chúng ta có kích thước của các góc trong của một tam giác đều - chúng ta đã biết rằng nó phải là [[60]]°. _{span.reveal(when="blank-3")} Trong một đa giác thông thường với ${x}{x|6|3,12,1} các cạnh, mọi góc bên trong là 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= = ${round(180-360/x)}°._

---
> id: regular-area

### Khu vực của đa giác thông thường

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

Ở đây bạn có thể thấy một [đa giác thông thường](gloss:regular-polygon) với ${n}{n|5|4,12,1} hai bên. Mỗi bên có chiều dài [{.pill.green} 1m](target:base) . Hãy thử tính diện tích của nó!

Đầu tiên, chúng ta có thể chia đa giác thành ${toWord(n)} đồng dư, [[cân | bình đẳng |]] tam giác [[vuông góc phải]] .

{.reveal(when="blank-0")} Chúng tôi đã biết [[cơ sở | Chiều cao | diện tích]] của các hình tam giác này, nhưng chúng ta cũng cần [[chiều cao | chân | trung bình]] để có thể tính diện tích của nó. _{span.reveal(when="blank-2")} Trong đa giác thông thường, chiều cao này đôi khi được gọi là [{.pill.yellow} apothem](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Lưu ý rằng có một [tam giác góc vuông](target:right-triangle) được hình thành bởi apothem và một nửa đáy của tam giác cân. Điều này có nghĩa là chúng ta có thể sử dụng lượng giác!

{.reveal(when="blank-1 blank-2" delay=2000)} Các [{.pill.blue} các góc cơ sở](target:base-angle) của tam giác cân (hãy gọi chúng là α) [[bằng một nửa | giống nhau | gấp đôi]] kích thước của các [góc bên trong](target:int-angle) của đa giác:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Để tìm apothem, chúng ta có thể sử dụng định nghĩa của [[tiếp tuyến | sin | vũ trụ]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Bây giờ, diện tích của [tam giác cân](target:isosceles-triangle) là

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Đa giác bao gồm ${toWord(n)} trong số các tam giác cân này, tất cả đều có cùng diện tích. Do đó, tổng diện tích của đa giác là

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Tứ giác

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

Trong [khóa học trước,](/course/triangles) chúng tôi đã nghiên cứu nhiều tính chất khác nhau của hình tam giác. Bây giờ chúng ta hãy nhìn vào tứ giác.

Một _hình tứ giác_ đều được gọi là [[hình vuông | hình chữ nhật | tứ giác đều]] . Tất cả các cạnh của nó có cùng chiều dài, và tất cả các góc của nó đều bằng nhau.

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

{.caption} Một __hình vuông__ là một hình tứ giác có [bốn cạnh bằng nhau](target:side) và [bốn góc bằng nhau](target:angle) .

:::

---
> id: quadrilaterals-1

Đối với các tứ giác ít thường xuyên hơn một chút, chúng ta có hai lựa chọn. Nếu chúng ta chỉ muốn các _góc_ bằng nhau, chúng ta sẽ có một [__hình chữ nhật__](gloss:rectangle) . Nếu chúng ta chỉ muốn các _cạnh_ bằng nhau, chúng ta sẽ có một [__hình thoi__](gloss:rhombus) .

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

{.caption} __Hình chữ nhật__ là một hình tứ giác có [bốn góc bằng nhau](target:angle) .

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

{.caption} __Hình thoi__ là một hình tứ giác có [bốn cạnh bằng nhau](target:side) .

:::

---
> id: quadrilaterals-2

Có một vài hình tứ giác khác, thậm chí ít thường xuyên hơn nhưng vẫn có một số tính chất quan trọng nhất định:

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

{.caption} Nếu cả hai cặp cạnh _đối diện_ là [song song,](gloss:parallel) chúng tôi có được một __hình bình hành.__

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

{.caption} Nếu hai cặp _cạnh kề_ có cùng độ dài, chúng ta sẽ có một __Cánh diều__ .

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

{.caption} Nếu có ít nhất một cặp cạnh đối diện song song, chúng ta sẽ có được một __Trapezium__ .

:::

---
> id: quadrilaterals-venn

Tứ giác có thể rơi vào nhiều loại. Chúng ta có thể hình dung thứ bậc của các loại hình tứ giác khác nhau dưới dạng [sơ đồ Venn](gloss:venn-diagram) :

    figure: include svg/venn.svg

Ví dụ, mỗi hình chữ nhật cũng là một hình [[bình hành | hình thoi | hình vuông]] và mỗi [[hình thoi | hình thang | hình bình hành]] cũng là một con diều. Một hình thoi [[đôi khi | luôn luôn | không bao giờ]] là hình vuông và hình chữ nhật [[luôn | đôi khi | không bao giờ]] là một hình thang.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Để tránh bất kỳ sự mơ hồ, chúng tôi thường chỉ sử dụng loại cụ thể nhất.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Bây giờ chọn bốn điểm, bất cứ nơi nào trong hộp màu xám bên trái. _{span.reveal(when="points")} Chúng ta có thể kết nối tất cả chúng để tạo thành một hình tứ giác._

{.reveal(when="points" delay=1000)} Chúng ta hãy tìm trung điểm của bốn phía. Nếu chúng ta kết nối các điểm giữa, chúng ta sẽ có [[một hình tứ giác khác | Tam giác | một hình chữ nhật]] .

{.reveal(when="blank-0")} Hãy thử di chuyển các đỉnh của tứ giác bên ngoài và quan sát những gì xảy ra với cái nhỏ hơn. Có vẻ như nó không chỉ là _bất kỳ_ hình tứ giác _nào_ , mà luôn là hình [[bình hành | hình thang | hình chữ nhật]] !

{.reveal(when="blank-1")} Nhưng tại sao lại như vậy? Tại sao kết quả cho _bất kỳ_ tứ giác luôn luôn là một hình bình hành? Để giúp chúng tôi giải thích, chúng tôi cần vẽ một trong các [đường chéo](gloss:polygon-diagonal) của tứ giác ban đầu.

{.reveal(when="diagonal")} Đường chéo chia tứ giác thành [hai hình tam giác](target:triangle) . Và bây giờ bạn có thể thấy rằng [hai trong số các cạnh](target:midsegment) của tứ giác bên trong thực sự là [[giữa | trung vị | chia đôi vuông góc]] của các hình tam giác.

{.reveal(when="blank-2")} Trong quá [trình trước,](/course/triangles/properties) chúng tôi đã chỉ ra rằng [midsegments](gloss:triangle-midsegment) của một tam giác luôn song song với cơ sở của nó. Trong trường hợp này, điều đó có nghĩa là [cả hai cạnh](target:parallel) này đều song song với đường chéo - do đó chúng cũng phải [[song song với nhau | cùng chiều dài | vuông góc với nhau]] .

{.reveal(when="blank-3" delay=2000)} Chúng ta có thể làm chính xác như vậy với [đường chéo thứ hai](target:other) của tứ giác, để cho thấy rằng cả hai cặp cạnh đối diện đều song song. Và đây là tất cả những gì chúng ta cần để chứng minh rằng tứ giác bên trong là hình [bình hành](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### Hình bình hành

Nó chỉ ra rằng hình bình hành có nhiều tính chất thú vị khác, ngoài các mặt đối diện là song song. Khẳng định nào sau đây là đúng?

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

Tất nhiên, chỉ đơn giản là quan sát những người thuộc tính này là không đủ. Để chắc chắn rằng chúng _luôn luôn_ đúng, chúng ta cần _chứng minh_ chúng:

::: tab

#### Đối diện Sides và Angles _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Chúng ta hãy cố gắng chứng minh rằng các cạnh và góc đối diện trong hình bình hành luôn đồng dạng.

Bắt đầu bằng cách vẽ một trong các đường chéo của hình bình hành.

{.reveal(when="diagonal")} Đường chéo tạo ra bốn góc mới với các cạnh của hình bình hành. Hai [góc màu đỏ](target:red-angle) và hai [góc màu xanh](target:blue-angle) là [các góc xen kẽ nhau](gloss:alternate-angles) , vì vậy chúng phải [[đồng nhất với nhau | liền kề | bổ sung]] .

{.reveal(when="blank-0")} Bây giờ nếu chúng ta nhìn vào [hai hình tam giác](target:triangles) được tạo bởi đường chéo, chúng ta thấy rằng chúng có hai góc đồng dạng và [một cạnh đồng dạng](target:diagonal) . Bằng [[ASA | AAS |]] Điều kiện đồng quy [[AA]] , cả hai tam giác đều phải đồng dạng.

{.reveal(when="blank-1")} Điều này có nghĩa là các phần tương ứng khác của các hình tam giác cũng phải đồng dạng: đặc biệt, cả hai [cặp cạnh đối diện](target:sides) đều đồng dạng và cả hai [cặp góc đối diện](target:angles) đều đồng dạng. _{span.qed}_

:::

{.reveal(when="blank-1")} Nó chỉ ra rằng điều ngược lại cũng đúng: nếu cả hai cặp cạnh đối diện (hoặc góc) trong một hình tứ giác đều đồng dạng, thì tứ giác phải là hình bình hành.

::: tab

#### Đường chéo _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Bây giờ chứng minh rằng hai đường chéo trong hình bình hành chia đôi nhau.

Hãy nghĩ về hai hình tam giác màu vàng được tạo bởi các đường chéo:

* Chúng tôi vừa chứng minh rằng [hai mặt màu xanh lá cây](target:side1) đồng dạng với nhau, bởi vì chúng là hai mặt đối diện của hình bình hành. * [Hai góc màu đỏ](target:anglesR) và [hai góc màu xanh](target:anglesB) đồng dạng, vì chúng là [[các góc xen kẽ | góc đối diện | góc vuông]] .

{.reveal(when="blank-2")} Bằng [[ASA | SSS |]] Điều kiện [[AAS]] , do đó cả hai hình tam giác màu vàng cũng phải đồng dạng.

{.reveal(when="blank-3")} Bây giờ chúng ta có thể sử dụng thực tế các phần tương ứng của các tam giác đồng dạng cũng đồng dạng, để kết luận rằng [`bar(AM)`](target:AM) = = [`bar(CM)`](target:CM) và [`bar(BM)`](target:BM) = = [`bar(DM)`](target:DM) . Nói cách khác, hai đường chéo giao nhau tại điểm giữa của chúng. _{span.qed}_

:::

{.reveal(when="blank-3")} Giống như trước đây, điều ngược lại cũng đúng: nếu hai đường chéo của một tứ giác chia đôi cho nhau, thì tứ giác là một hình bình hành.

:::

---
> id: kites

### Diều

::: column.grow

Chúng tôi đã chỉ ra ở trên rằng hai cặp [[đối diện | các]] cạnh bên của hình bình hành là đồng dạng. Trong một con diều, hai cặp _cạnh liền_ nhau.

Cái tên _Diều_ rõ ràng xuất phát từ hình dạng của nó: nó trông giống như những con diều bạn có thể bay trên bầu trời. Tuy nhiên, trong tất cả các tứ giác đặc biệt mà chúng ta đã thấy cho đến nay, Diều là người duy nhất cũng có thể [lõm](gloss:concave) : nếu nó có hình dạng như phi tiêu hoặc mũi tên:

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

{.caption} Một con diều lồi

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

{.caption} Một con diều lõm trông giống như một mũi tên

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

Bạn có thể nhận thấy rằng tất cả các diều là [[đối xứng | tương tự]] _{span.reveal(when="blank-0")} [Trục đối xứng](gloss:axis-of-symmetry) là [[một trong những đường chéo | một trong những phía | một lời giải thích]]_

{.reveal.r(when="blank-1")} Đường chéo chia diều thành [hai hình tam giác đồng dạng](target:triangle1) . Chúng ta biết rằng chúng đồng dạng từ điều kiện [SSS](gloss:triangle-sss) : cả hai hình tam giác đều có [ba cạnh đồng dạng](target:sss) (đỏ, lục và lam). _{button.next-step} Tiếp tục_

{.reveal.r(when="next-0")} Do đó, sử dụng [CPOCT](gloss:cpoct) , chúng ta biết rằng các [góc tương ứng](target:angles) cũng phải đồng dạng. _{button.next-step} Tiếp tục_

{.reveal.r(when="next-1")} Điều này có nghĩa là, ví dụ, [đường chéo](target:d1) là một [[bisector | vuông góc | trung tuyến]] của [hai góc](target:vAngle) ở cuối của nó. _{button.next-step} Tiếp tục_

{.reveal.r(when="next-2")} Chúng ta có thể đi xa hơn: nếu chúng ta vẽ đường chéo khác, chúng ta sẽ có [thêm hai hình tam giác nhỏ hơn](target:triangle2) . Chúng cũng phải đồng dạng, vì điều kiện [SAS](gloss:triangle-sss) : chúng có cùng [hai cạnh và góc bao gồm](target:sas) . _{button.next-step} Tiếp tục_

{.reveal(when="next-3")} Điều này có nghĩa là [góc α](target:alpha) cũng phải giống với [góc β](target:beta) . Vì chúng liền kề nhau, [các góc bổ sung](gloss:supplementary-angles) cả α và β phải là [[90]]°.

{.reveal(when="blank-3")} Nói cách khác, các đường chéo của một con diều luôn [[vuông góc | song song]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Diện tích tứ giác

Khi tính diện tích hình tam giác trong khóa trước, chúng tôi đã sử dụng mẹo chuyển đổi nó thành [[hình chữ nhật | Quảng trường | ngũ giác]] . Hóa ra chúng ta cũng có thể làm điều đó cho một số hình tứ giác:

::: tab

#### Hình bình hành _{span.check(when="draw-1 blank-1")}_

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

Ở bên trái, cố gắng vẽ một hình chữ nhật có cùng diện tích với hình bình hành.

{.reveal(when="draw-1")} Bạn có thể thấy rằng [hình tam giác bị thiếu](target:triangle-1) ở bên trái [[giống hệt như | nhỏ hơn | lớn hơn]] [tam giác chồng chéo](target:triangle-2) bên phải? _{span.reveal(when="blank-1")} Do đó diện tích của hình bình hành là_

{.text-center.reveal(when="blank-1")} Diện tích = __{.i.m-green} cơ sở__ × __{.i.m-yellow} Chiều cao__

{.reveal(when="blank-1" delay=1000)} _Hãy cẩn thận khi đo chiều cao của hình bình hành: nó thường không giống với một trong hai cạnh._

:::

::: tab

#### Hình thang _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Nhớ lại rằng hình thang là tứ giác có một cặp [cạnh song song](target:bases) . Các mặt song song này được gọi là các __cơ sở__ của hình thang.

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

Giống như trước đây, hãy thử vẽ một hình chữ nhật có cùng diện tích với hình thang này. _{span.reveal(when="draw-2")} Bạn có thể thấy làm thế nào các [hình tam giác bị thiếu và thêm](target:triangles-3) vào bên trái và bên phải hủy bỏ?_

{.reveal(when="draw-2" delay=2000)} Các [{.pill.green} chiều cao](target:t-height) của hình chữ nhật này là [[khoảng cách giữa | Trung bình của | chiều dài]] các [cạnh song song](target:bases) của hình thang.

{.reveal.r(when="blank-2")} Các [{.pill.yellow} chiều rộng](target:t-width) của hình chữ nhật là khoảng cách giữa các [[điểm giữa | điểm cuối]] của hai mặt không song song của hình thang. _{span.reveal(when="blank-3")} Điều này được gọi là trung __gian__ của hình thang._ _{button.next-step.reveal(when="blank-3")} Tiếp tục_

{.reveal(when="next-0")} Giống như với [hình tam giác](gloss:triangle-midsegment) , phần giữa của hình thang [[song song với | vuông góc với | cùng chiều dài với]] hai căn cứ của nó. Độ dài của phần giữa là trung bình của độ dài của các bazơ: `(a+c)/2` .

{.reveal(when="blank-4")} Nếu chúng ta kết hợp tất cả những điều này, chúng ta sẽ có được một phương trình cho diện tích của hình thang với các cạnh song song [_a_](target:base-2) và [_c_](target:base-1) và chiều cao [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### cánh diều _{span.check(when="blank-5")}_

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

Trong con diều này, [hai đường chéo](target:diag3) tạo thành chiều rộng và chiều cao của một [hình chữ nhật](target:rect4) lớn bao quanh con diều.

Diện tích của hình chữ nhật này là [[hai lần | giống như | ba lần]] diện tích của diều. _{span.reveal(when="blank-5")} Bạn có thể thấy làm thế nào mỗi [bốn hình tam giác](target:inside) tạo nên con diều giống như [bốn khoảng trống](target:outside) bên ngoài nó không?_

{.reveal(when="blank-5")} Điều này có nghĩa là khu vực của một con diều có đường chéo [{.i.pill.green} d1](target:d31) và [{.i.pill.yellow} d2](target:d32) là

{.text-center.reveal(when="blank-5")} _Diện tích_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### Hình thoi _{span.check(when="blank-6 blank-7")}_

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

[Hình thoi](gloss:rhombus) là một hình tứ giác có bốn cạnh đồng dạng. Bạn có thể nhớ rằng mỗi hình thoi là một hình [[bình hành | hình chữ nhật | hình vuông]] - và cũng là một [[con diều | Hình lục giác | đa giác lõm]] .

{.reveal(when="blank-6 blank-7")} Điều này có nghĩa là để tìm diện tích hình thoi, chúng ta có thể sử dụng phương trình cho diện tích hình bình hành hoặc diện tích hình diều:

{.text-center.reveal(when="blank-6 blank-7")} _Diện tích_ = [{.i.pill.blue} cơ sở](target:base) × [{.i.pill.red} chiều cao](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _Trong các bối cảnh khác nhau, bạn có thể được cung cấp các phần khác nhau của Hình thoi (cạnh, chiều cao, đường chéo) và bạn nên chọn phương trình nào thuận tiện hơn._

:::

:::



---

## Tessellations

> section: tessellations
> id: tessellations
> translated: auto

[Đa giác](gloss:polygon) xuất hiện ở mọi nơi trong tự nhiên. Chúng đặc biệt hữu ích nếu bạn muốn xếp một khu vực rộng lớn, bởi vì bạn có thể ghép các đa giác lại với nhau mà không có bất kỳ khoảng trống hoặc chồng chéo nào. Các mô hình như thế được gọi là [__tessellations__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Lục giác | Tam giác |]] Tổ ong [[bậc hai]]

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Sữa rắn da

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Cấu trúc tế bào của lá

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Cột bazan tại Giant 'Causeway ở Bắc Ireland

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Da dứa

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Vỏ rùa

:::

---
> id: tessellations-1

Con người đã sao chép nhiều mô hình tự nhiên này trong nghệ thuật, kiến trúc và công nghệ - từ thời La Mã cổ đại cho đến hiện tại. Đây là vài ví dụ:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Hình hộp chữ nhật | Phương trình bậc hai |]] Mô hình vỉa hè hình [[lục giác]]

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Nhà kính tại Dự án Eden ở Anh

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Khảm tại Alhambra

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Tam giác | Lục giác |]] Mái nhà hình [[chữ nhật]] tại Bảo tàng Anh ở London

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Gian hàng tessname di động ở Sydney

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Nghiên cứu về sự phân chia thường xuyên của máy bay với bò sát_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Tại đây bạn có thể tạo các tessellations của riêng mình bằng cách sử dụng đa giác thông thường. Chỉ cần kéo hình dạng mới từ thanh bên vào khung vẽ. Những hình dạng tessellate tốt? Có hình dạng nào không tessellate không? Cố gắng tạo ra các mô hình thú vị!

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

### Tessellations từ đa giác thông thường

Bạn có thể nhận thấy rằng một số [đa giác thông thường](gloss:regular-polygon) (như [[hình vuông | ngũ giác]] ) tessellate rất dễ dàng, trong khi những người khác (như [[ngũ giác | Hình tam giác | hình lục giác]] ) dường như không tessellate.

---
> id: tessellation-regular-1

Điều này có liên quan đến kích thước của các [góc bên trong](gloss:internal-angle) của chúng, mà chúng ta đã học cách tính toán trước đó. Tại mọi [đỉnh](gloss:polygon-vertex) trong phần tử, các góc bên trong của nhiều đa giác khác nhau gặp nhau. Chúng ta cần tất cả các góc này để thêm tới [[360]]°, nếu không sẽ có một khoảng cách hoặc chồng chéo.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Tam giác [[tessellate | không tessellate]] _{span.reveal(when="blank-0")} vì 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Hình vuông [[tessellate | không tessellate]] _{span.reveal(when="blank-1")} vì 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Ngũ giác [[không tessellate | tessellate]] _{span.reveal(when="blank-2")} bởi vì bội số của 108° không thêm tới 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Lục giác [[tessellate | không tessellate]] _{span.reveal(when="blank-3")} vì 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Bạn có thể kiểm tra tương tự rằng, giống như các hình ngũ giác, bất kỳ đa giác thông thường nào có 7 cạnh trở lên không bị xé. Điều này có nghĩa là các đa giác thông thường duy nhất mà tessellate là hình tam giác, hình vuông và hình lục giác!

Tất nhiên, bạn có thể kết hợp các loại đa giác thông thường khác nhau trong một phần tử, với điều kiện là các góc bên trong của chúng có thể tăng tới 360°:

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

### Tessellations từ đa giác bất thường

Chúng ta cũng có thể thử tạo ra các phần tử từ [các đa giác không đều](gloss:irregular-polygon) - miễn là chúng ta cẩn thận khi xoay và sắp xếp chúng.

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

Nó chỉ ra rằng bạn có thể tessellate không chỉ là tam giác đều, mà _bất kỳ tam giác_ ! Hãy thử di chuyển các [đỉnh](target:vertex) trong sơ đồ này.

Tổng các góc trong một tam giác là [[180]]°. Nếu chúng ta sử dụng mỗi góc [[hai lần | Một lần | ba lần]] ở mỗi đỉnh trong phần thứ ba, chúng ta nhận được 360°:

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

Đáng ngạc nhiên hơn, _bất kỳ tứ giác_ cũng tessellates! Tổng góc bên trong của chúng là [[360]]°, vì vậy nếu chúng ta sử dụng mỗi góc [[một lần | hai lần | ba lần]] ở mỗi đỉnh trong phần thứ ba, chúng ta có 360°.

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

Ngũ giác là một chút phức tạp hơn. Chúng ta đã thấy rằng _các_ hình ngũ giác đều _đặn_ [[không tessellate | tessellate]] , nhưng những người không thường xuyên?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Dưới đây là ba ví dụ khác nhau về các tessellations với ngũ giác. Chúng không _thường xuyên_ , nhưng chúng là đa giác 5 mặt hoàn toàn hợp lệ.

Cho đến nay, các nhà toán học chỉ tìm thấy 15 loại khác nhau với các hình ngũ giác (lồi) - loại gần đây nhất được phát hiện vào năm 2015. Không ai biết liệu có loại nào khác không, hoặc nếu 15 loại này là những loại duy nhất

---
> id: escher

### Tessellations trong nghệ thuật

Tessellations chúng tôi vừa là công cụ vừa là nguồn cảm hứng cho nhiều nghệ sĩ, kiến trúc sư và nhà thiết kế - nổi tiếng nhất là nghệ sĩ người Hà Lan [MC Escher](bio:escher) . Tác phẩm của Escher chứa những sinh vật, mô hình và phong cảnh kỳ lạ, đột biến:

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

Những tác phẩm nghệ thuật này thường trông vui nhộn và dễ dàng, nhưng các nguyên tắc toán học cơ bản vẫn giống như trước: góc, góc quay, bản dịch và đa giác. Nếu toán học không đúng, thì tessname sẽ không hoạt động!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose

Tất cả các điều mà chúng ta thấy cho đến nay đều có một điểm chung: chúng là __định kỳ__ . Điều đó có nghĩa là chúng bao gồm một mô hình thông thường được lặp đi lặp lại nhiều lần. Chúng có thể tiếp tục mãi mãi theo mọi hướng và chúng sẽ trông giống nhau ở mọi nơi.

Vào những năm 1970, nhà toán học và vật lý học người Anh [Roger Penrose đã](bio:penrose) phát hiện ra _những câu chuyện không định kỳ_ - chúng vẫn tiếp tục vô tận theo mọi hướng, nhưng _không bao giờ_ giống hệt nhau. Chúng được gọi là __nghiêng Penrose__ và bạn chỉ cần một vài loại đa giác khác nhau để tạo một:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose đã khám phá các tessellations hoàn toàn cho vui, nhưng hóa ra cấu trúc bên trong của một số vật liệu thực (như nhôm) theo một mô hình tương tự. Mẫu này thậm chí còn được sử dụng trên giấy vệ sinh, bởi vì các nhà sản xuất nhận thấy rằng một mẫu không định kỳ có thể được cuộn lên mà không có bất kỳ chỗ phồng nào.

---

## Khối đa diện

> section: polyhedra
> id: polyhedra
> translated: auto

Cho đến nay chúng ta chỉ nhìn vào những gì chúng ta có thể làm với đa giác trong một thế giới hai chiều phẳng. [__Đa diện__](gloss:polyhedron) là một vật thể ba chiều được tạo thành từ các đa giác. Dưới đây là một số ví dụ:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Khối đa diện không thể chứa các bề mặt cong - hình cầu và hình trụ, ví dụ, không phải là khối đa diện.

Các đa giác tạo nên một khối đa diện được gọi là các [__mặt__](gloss:polyhedron-face) của nó. Các đường mà hai mặt được kết nối được gọi là [__các cạnh__](gloss:polyhedron-edge) và các góc nơi các cạnh gặp nhau được gọi là [__các đỉnh__](gloss:polyhedron-vertex) .

---
> id: euler

Các khối đa diện có nhiều hình dạng và kích cỡ khác nhau - từ các hình khối hoặc hình chóp đơn giản chỉ với một vài khuôn mặt, đến các vật thể phức tạp như ngôi sao ở trên, có 60 mặt hình tam giác. Tuy nhiên, hóa ra _tất cả các khối_ đa diện đều có một thuộc tính quan trọng chung:

::: .theorem

__Công thức đa diện của Euber__
Trong mọi khối đa diện, số mặt ( _F_ ) cộng với số đỉnh ( _V_ ) nhiều hơn hai cạnh so với số cạnh ( _E_ ). Nói cách khác,

{.text-center}`F + V = E + 2`

:::

Ví dụ: nếu một khối đa diện có 12 mặt và 18 đỉnh, chúng ta biết rằng nó phải có [[28]] cạnh.

---
> id: euler-1

Phương trình này được phát hiện bởi nhà toán học nổi tiếng người Thụy Sĩ [Leonard Euler](bio:euler) . Điều này đúng với bất kỳ khối đa diện nào, miễn là nó không chứa bất kỳ lỗ hổng nào.

Nếu bạn thử các khối đa diện khác nhau, như các khối đa diện ở trên, bạn sẽ thấy rằng công thức của Euler luôn hoạt động. Trong [một khóa học sau,](/course/graph-theory/planar-graphs) bạn sẽ học cách chứng minh nó một cách toán học.

---

## Lưới và phần chéo

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Lăng kính và Kim tự tháp

> section: prisms-pyramids
> sectionStatus: dev

LÀM

---

## Hình dạng tỉ lệ và chất rắn

> section: scaling
> sectionStatus: dev

LÀM

---

## Chất rắn Platonic

> section: platonic
> id: platonic
> translated: auto

Khi bắt đầu khóa học này, chúng tôi đã định nghĩa [các đa giác thông thường là các đa giác](gloss:regular-polygon) đặc biệt đối xứng trực tiếp, trong đó tất cả các cạnh và góc đều giống nhau. Chúng ta có thể làm một cái gì đó tương tự cho khối đa diện.

Trong một khối _đa diện_ đều, tất cả các [mặt](gloss:polyhedron-face) đều là cùng một loại đa giác thông thường, và cùng một số mặt gặp nhau ở mọi [đỉnh](gloss:polyhedron-vertex) . Polyhedra với hai tính chất này được gọi là [__chất rắn Platonic__](gloss:platonic-solid) , được đặt theo tên của triết gia Hy Lạp [Plato](bio:plato) .

 Vì vậy, các chất rắn Platonic trông như thế nào - và có bao nhiêu trong số chúng? Để tạo hình ba chiều, chúng ta cần ít nhất [[3]] mặt để gặp nhau ở mọi đỉnh. Hãy bắt đầu một cách có hệ thống với đa giác thông thường nhỏ nhất: tam giác đều:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Nếu chúng ta tạo một khối đa diện trong đó ba [tam giác đều](gloss:equilateral-triangle) gặp nhau ở mọi đỉnh, chúng ta sẽ có được hình bên trái. Nó được gọi là __tứ diện__ và có [[4]] mặt. _{.reveal(when="blank-0")} (Tet Tetra có nghĩa là người Viking bốn người Hy Lạp)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Nếu bốn tam giác đều gặp nhau ở mọi đỉnh, chúng ta sẽ có một chất rắn Platonic khác nhau. Nó được gọi là __Octahedron__ và có [[8]] khuôn mặt. _{.reveal(when="blank-0")} ._

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Nếu [[năm]] hình tam giác gặp nhau ở mọi đỉnh, chúng ta sẽ có __Icosahedron__ . Nó có [[20]] khuôn mặt. _{.reveal(when="blank-1")} (Tiếng Nhật Icosa có nghĩa là hai mươi tên tiếng Hy Lạp.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Nếu [[sáu]] hình tam giác gặp nhau ở mọi đỉnh, một điều khác biệt sẽ xảy ra: chúng ta chỉ cần có [[một phần tử | một tứ giác | một khối nhựa khác]] , _{span.reveal(when="blank-1")} thay vì đa diện ba chiều._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Và bảy hoặc nhiều hình tam giác ở mọi đỉnh cũng không tạo ra các khối đa diện mới: không có đủ không gian xung quanh một đỉnh, để phù hợp với nhiều hình tam giác đó.

:::

Điều này có nghĩa là chúng tôi đã tìm thấy [[ba]] chất rắn Platonic bao gồm các hình tam giác. Hãy chuyển sang đa giác thông thường tiếp theo: hình vuông.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Nếu [[ba]] hình vuông gặp nhau ở mọi đỉnh, chúng ta sẽ có được __khối lập phương__ . Giống như súc sắc, nó có [[6]] mặt. _{span.reveal(when="blank-1")} Khối lập phương đôi khi cũng được gọi là _Hexahedron_ , theo từ tiếng Hy Lạp là hex hexa "cho tiếng Sáu Sáu._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Nếu [[bốn]] hình vuông gặp nhau ở mọi đỉnh, chúng ta sẽ có [[một phần tử khác | một tứ diện | một khối lập phương khác]] . _{span.reveal(when="blank-1")} Và giống như trước đây, năm ô vuông trở lên cũng không hoạt động._

:::

---
> id: platonic-dodecahedron

Tiếp theo, hãy thử các hình ngũ giác đều đặn:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Nếu [[ba]] hình ngũ giác gặp nhau ở mọi đỉnh, chúng ta sẽ có được __Dodecahedron__ . Nó có [[12]] khuôn mặt. _{.reveal(when="blank-1")} (Cúc Dodeca 'có nghĩa là người mười hai người Viking trong tiếng Hy Lạp.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Giống như trước đây, bốn hoặc nhiều hình ngũ giác [[không hoạt động | là có thể]] bởi vì không có đủ không gian.

:::

---
> id: platonic-hexagons

Đa giác thông thường tiếp theo để thử là hình lục giác:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Nếu ba hình lục giác gặp nhau tại mỗi đỉnh, chúng tôi ngay lập tức nhận được một [[tessellation | khối đa diện | khối sáu mặt]] . _{span.reveal(when="blank-0")} Vì không có không gian cho hơn ba, nên có vẻ như không có chất rắn Platonic bao gồm các hình lục giác._

:::

---
> id: platonic-final

Điều tương tự cũng xảy ra đối với tất cả các đa giác thông thường có nhiều hơn sáu mặt. Họ không tessellate, và chúng tôi chắc chắn không nhận được bất kỳ đa giác ba chiều.

Điều này có nghĩa là chỉ có [[năm]] chất rắn Platonic! Chúng ta hãy cùng nhau xem xét tất cả chúng:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tứ diện__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] khuôn mặt_
_{span.dual} [[4]] đỉnh_
_{span.dual} [[6]] cạnh_

::: column.grow.text-center(width=120)

__Khối lập phương__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] mặt_
_{span.dual(target="dual1")} [[8]] đỉnh_
_{span.dual} [[12]] cạnh_

::: column.grow.text-center(width=120)

__Thiên niên kỷ__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] khuôn mặt_
_{span.dual(target="dual1")} [[6]] đỉnh_
_{span.dual} [[12]] cạnh_

::: column.grow.text-center(width=120)

__Cây ngải cứu__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] mặt_
_{span.dual(target="dual2")} 20 đỉnh_
_{span.dual} 30 cạnh_

::: column.grow.text-center(width=120)

__Icosahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] khuôn mặt_
_{span.dual(target="dual2")} 12 đỉnh_
_{span.dual} 30 cạnh_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Chú ý số lượng mặt và đỉnh được [[hoán đổi xung quanh | tương tự]] đối với [khối lập phương và khối tám mặt](target:dual1) , cũng như [khối mười hai mặt và icosahedron](target:dual2) , trong khi số cạnh [[vẫn giữ nguyên | là khác nhau]] Những cặp chất rắn Platonic này được gọi là [__chất rắn kép__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Chúng ta có thể biến một khối đa diện thành hai mặt của nó, bằng cách thay thế một mặt của mọi mặt bằng một đỉnh và mọi đỉnh bằng một mặt. Những hình ảnh động này cho thấy:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tứ diện là kép với chính nó. Vì nó có cùng số mặt và đỉnh, nên việc hoán đổi chúng sẽ không thay đổi gì cả.

---
> id: platonic-elements

[Plato](bio:plato) tin rằng tất cả vật chất trong Vũ trụ bao gồm bốn yếu tố: Không khí, Trái đất, Nước và Lửa. Ông nghĩ rằng mọi nguyên tố tương ứng với một trong các chất rắn Platonic, trong khi phần tử thứ năm sẽ đại diện cho toàn bộ vũ trụ. Ngày nay chúng ta biết rằng có hơn 100 nguyên tố khác nhau bao gồm các nguyên tử hình cầu, không phải khối đa diện.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Chất rắn Archimedean

> id: archimedean

Chất rắn Platonic là khối đa diện đặc biệt quan trọng, nhưng có vô số khác.

[__Các chất rắn Archimedean__](gloss:archimedean-solid) , ví dụ, vẫn phải được tạo thành từ [các đa giác thông thường](gloss:regular-polygon) , nhưng bạn có thể sử dụng nhiều loại khác nhau. Chúng được đặt theo tên của một nhà toán học Hy Lạp khác, [Archimedes of Syracuse](bio:archimedes) , và có 13 người trong số họ:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tứ diện cắt ngắn__
8 mặt, 12 đỉnh, 18 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Khối lập phương__
14 mặt, 12 đỉnh, 24 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cắt ngắn khối__
14 mặt, 24 đỉnh, 36 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Cắt ngắn Octahedron__
14 mặt, 24 đỉnh, 36 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Hình thoi__
26 mặt, 24 đỉnh, 48 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cuboctahedron cắt ngắn__
26 mặt, 48 đỉnh, 72 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 mặt, 24 đỉnh, 60 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 mặt, 30 đỉnh, 60 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Cắt ngắn Dodecahedron__
32 mặt, 60 đỉnh, 90 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Cắt ngắn Icosahedron__
32 mặt, 60 đỉnh, 90 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Hình thoi__
62 mặt, 60 đỉnh, 120 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodecahedron cắt ngắn__
62 mặt, 120 đỉnh, 180 cạnh

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Cây ngải cứu__
92 mặt, 60 đỉnh, 150 cạnh

:::

---
> id: polyhedra-applications

### Các ứng dụng

Plato đã sai khi tin rằng tất cả các nguyên tố bao gồm chất rắn Platonic. Nhưng khối đa diện thông thường có nhiều tính chất đặc biệt khiến chúng xuất hiện ở nơi khác trong tự nhiên - và chúng ta có thể sao chép các tính chất này trong khoa học và kỹ thuật.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Nhiều __virus__ , __vi khuẩn__ và các __sinh vật__ nhỏ __khác__ có hình dạng giống như [icosahedra](gloss:icosahedron) . Virus, ví dụ, phải đặt vật liệu di truyền của chúng bên trong vỏ của nhiều đơn vị protein giống hệt nhau. Các icosahedron là cách hiệu quả nhất để làm điều này, bởi vì nó bao gồm một vài yếu tố thông thường nhưng gần như có hình dạng như một quả cầu.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Nhiều __phân tử__ có hình dạng như khối đa diện thông thường. Ví dụ nổi tiếng nhất là `C_60` trong đó bao gồm 60 nguyên tử carbon được sắp xếp theo hình [Icosahedron cắt ngắn](gloss:truncated-icosahedron) .

Nó được phát hiện vào năm 1985 khi các nhà khoa học nghiên cứu bụi liên sao. Họ đặt tên cho nó là Buckyball, (hay Buckminsterfullerene) theo tên của kiến trúc sư [Buckminster Fuller](bio:fuller) , nổi tiếng với việc xây dựng các tòa nhà trông tương tự.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

Hầu hết các __tinh thể__ có các nguyên tử của chúng được sắp xếp trong một lưới thông thường bao gồm [tứ diện](gloss:tetrahedron) , [khối](gloss:cube) hoặc [bát diện](gloss:octahedron) . Khi chúng nứt hoặc vỡ, bạn có thể thấy những hình dạng này ở quy mô lớn hơn.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Tetrahedra và octahedra cực kỳ cứng nhắc và ổn định, điều này làm cho chúng rất hữu ích trong __xây dựng__ . _Khung không gian_ là cấu trúc đa giác có thể hỗ trợ mái lớn và cầu nặng.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Chất rắn Platonic cũng được sử dụng để tạo __xúc xắc__ . bởi vì tính đối xứng của chúng, mọi phía đều có [xác suất](gloss:probability) hạ cánh hướng lên - vì vậy xúc xắc là công bằng.

[Icosahedron Truncated](gloss:truncated-icosahedron) có lẽ là khối đa diện nổi tiếng nhất trên thế giới: đó là hình dạng của bóng đá.

:::
