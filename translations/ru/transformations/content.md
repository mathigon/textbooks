# Преобразования и симметрия

## Введение

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles

Многие геометрические понятия, такие как [прямая](gloss:line) и [точка](gloss:point), были «изобретены» математиками. Симметрия же всегда находилась повсюду вокруг нас. Почти все растения, животные и даже мы, люди, симметричны.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Со временем мы начали использовать симметрию природы в искусстве, архитектуре, технологиях и дизайне. Симметричные формы и узоры кажутся __красивее__, чем несимметричные.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Но симметрия гораздо важнее, чем просто __красивый внешний вид__. Она лежит в основах нашей вселенной и может даже объяснить самые фундаментальные законы физики.

_{button.next-step} Продолжить_

---

> id: transformations
> goals: t1 t2 t3

Хотя симметрия является интуитивным понятием, описать ее математически сложнее, чем вы думаете. Во-первых, нам нужно узнать о [__преобразованиях__](gloss:transformation), это способы преобразования одной геометрической фигуры в другую. Вот несколько примеров:

::: column.r(width=200)

    .animation#star
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

Результат преобразования называется [__образом__](gloss:transformation-image). Образ фигуры `A` обычно обозначается `A'` (произносится как «А штрих»).

[Первый пример](->#star) изображенный выше является особенным, потому что он только перемещает и вращает исходную звезду, но не меняет ее размер или форму. Преобразования с этим свойством называются __изометрическими преобразованиями__.

---

## Изометрические преобразования

> id: rigid
> section: rigid

[__Изометрическое преобразование__](gloss:rigid-transformation) - это особый вид преобразования, который не изменяет размер и форму исходной фигуры. Представьте, что она сделана из твердого материала, такого как дерево или металл: мы можем переместить его, перевернуть и повернуть, но мы не можем растянуть или иным образом деформировать его.

Какие из этих преобразований являются изометрическими?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---

> id: rigid-1
> goals: t1 t2 t3

Для изометрических преобразований образ всегда [[совпадает с|повернут относительно|противоположен]] оригиналом. Существует три различных типа изометрических преобразований:

::: column.grow.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Преобразование, которое просто __перемещает__ фигуру, называется [__параллельным переносом__](gloss:translation).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Преобразование, которое __отражает__ фигуру, называется [__осевой симметрией__](gloss:reflection).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Преобразование, которое __вращает__ фигуру, называется [__поворотом__](gloss:rotation).

:::

---

> id: rigid-2

Мы также можем объединить несколько типов преобразований для создания более сложных, например, поворот с последующей осевой симметрией.

Но сначала давайте рассмотрим каждый из этих типов преобразований более подробно.

---

> id: translations

### Параллельный перенос

[__Параллельный перенос__](gloss:translation) - это преобразование, которое перемещает каждую точку фигуры на одинаковое расстояние в одном направлении.

На координатной плоскости мы можем распознать параллельный перенос по тому, насколько фигура перемещается вдоль оси _x_ и оси _y_. Например, перенос на (3, 5) перемещает фигуру на 3 клетки вдоль оси _x_ и на 5 вдоль оси _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Перенос на ([[5]], [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Перенос на ([[-4]], [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Перенос на ([[4]], [[-2]])

:::

---

> id: translations-1
> goals: drag-0 drag-1 drag-2

Теперь ваша очередь - перенесите следующие фигуры:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Параллельный перенос на (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Параллельный перенос на (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Параллельный перенос на (5, –1) _{span.check(when="drag-2")}_

:::

---

> id: reflections
> goals: r0 r1 r2

### Осевая симметрия

[__Осевая симметрия__](gloss:reflection) - это преобразование, которое «отражает» фигуру относительно прямой. Эта прямая называется __ось симметрии__.

Нарисуйте ось симметрии в каждом из этих примеров:

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

Теперь ваша очередь - нарисуйте отражение каждой из этих фигур:

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

Обратите внимание, что если точка лежит на оси симметрии, то ее образ [[совпадает с|меньше чем|находится напротив]] исходной точкой.

---

> id: reflections-3

Во всех приведенных выше примерах ось симметрии была горизонтальной, вертикальной или под углом 45 °, что облегчало черчение образов. Если это не так, то построение требует немного большей работы:

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

{.r} Чтобы изобразить эту фигуру относительно [оси симметрии](target:refl), мы должны отразить каждую [вершину](gloss:polygon-vertex) по отдельности, а затем соединить их снова. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Давайте выберем одну из вершин и проведем линию через эту вершину, которая перпендикулярна оси симметрии. _{button.next-step} Продолжить_

{.r.reveal(when="next-1")} Теперь мы можем измерить [расстояние](target:d1) от вершины до оси симметрии и создать точку с таким же [расстоянием](target:d2) с другой стороны. _{span.lgrey} (Для этого мы можем использовать линейку или [циркуль](target:circ).)_ _{button.next-step} Продолжить_

{.r.reveal(when="next-2")} Мы можем сделать то же самое и для всех других вершин нашей фигуры. _{button.next-step} Продолжить_

{.r.reveal(when="next-3")} Теперь осталось просто соединить отраженные вершины в правильном порядке, и мы нашли образ!

:::

---

> id: rotations
> goals: r0 r1 r2

### Поворот

[__Поворот__](gloss:rotation) - это преобразование, которое «поворачивает» фигуру на определенный угол вокруг фиксированной точки. Эта точка называется [__центром поворота__](gloss:center-of-rotation). Вращения могут быть по часовой стрелке или против часовой стрелки.

Попробуйте повернуть, расположенные ниже, фигуры вокруг центра поворота, точки красного цвета:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Поворот на 90 ° по часовой стрелке.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Поворот на 180 °.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Поворот на 90 ° против часовой стрелки.

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

Сложнее рисовать повороты, которые не равны 90° или 180°. Давайте попробуем повернуть эту форму на ${10*ang}{ang|6|-18,18,1}° вокруг [центра поворота](target:rot).

{.r} Как и для симметрии, мы должны поворачивать каждую вершину фигуры отдельно. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Мы начинаем с выбора одной из вершин. Соединяем ее с центром поворота. _{button.next-step} Продолжить_

{.r.reveal(when="next-1")} Используя [транспортир](target:protractor), мы можем отмерить угол [${ang*10}°](target:angle) относительно центра поворота. Давайте нарисуем [вторую линию](target:l2) под этим углом. _{button.next-step} Продолжить_

{.r.reveal(when="next-2")} Используя [циркуль](target:compass) или линейку, мы можем найти [точку](target:a1) на этой линии, которая находится на том же расстоянии от центра поворота, что и исходная точка. _{button.next-step} Продолжить_

{.r.reveal(when="next-3")} Теперь мы должны повторить эти шаги для всех остальных вершин нашей фигуры. _{button.next-step} Продолжить_

{.reveal(when="next-4")} И, наконец, как и раньше, мы можем соединить все вершины, чтобы получить повернутое изображение нашей первоначальной фигуры.

:::

---

> id: composition-1

Преобразования являются важной концепцией во многих разделах математики, а не только в геометрии. Например, вы можете преобразовывать [__функции__](gloss:function), сдвигая или поворачивая их [графики](gloss:function-graph). Вы также можете использовать преобразования, чтобы определить, являются ли две фигуры [конгруэнтными](gloss:congruent).

---

## Конгруэнтность

> section: congruence
> sectionStatus: dev

В разработке
Извините, мы все еще работаем над этим разделом.
Пожалуйста, зайдите в ближайшее время!

---

## Симметрия

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__Симметрия__](gloss:symmetry) повсюду вокруг нас, и интуитивная концепция: различные части объекта в некотором роде выглядят __одинаково__. Но используя преобразования, мы можем дать гораздо более точное математическое определение того, что же симметрия действительно означает:

{.definition} Объект является __симметричным__, если он выглядит одинаково даже после применения определенного преобразования.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Мы можем отразить эту бабочку относительно вертикальной прямой, и она будет выглядеть точно так же. Мы говорим, что он имеет __осевую симметрию__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Мы можем повернуть этот цветок относительно центра, и он будет выглядеть так же. Мы говорим, что он имеет __вращательную симметрию__.

:::

---

> id: reflectional-symmetry

### Осевая симметрия

Фигура имеет [__осевую симметрию__](gloss:rotational-symmetry), если после отражения она выглядит так же. Линия отражения называется [__осью симметрии__](gloss:axis-of-symmetry), и она разделяет форму на две [[конгруэнтные|разные|подобные]] половины. Некоторые фигуры также могут иметь более одной оси симметрии.

---

> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Нарисуйте все оси симметрии для этих шести изображений и фигур:

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

{.caption} Эта фигура имеет [[2]] оси симметрии.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Квадрат имеет [[4]] оси симметрии.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Эта фигура имеет [[2]] оси симметрии.

:::

---

> id: alphabet

Многие буквы в алфавите имеют осевую симметрию. Отметьте такие буквы:

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

Вот еще несколько фигур. Дополните их так, чтобы они имели осевую симметрию:

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

Фигуры, буквы и изображения могут иметь осевую симметрию, а еще целые числа, слова и предложения!

Например, «25352» и «ANNA» читаются одинаково сзади-спереди. Числа или подобные слова называются [__палиндромами__](gloss:palindrome). Можете ли вы вспомнить какие-либо другие палиндромы? Напишите в полях ниже любые примеры палиндромов.

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Если мы проигнорируем пробелы и знаки препинания в приведенных ниже коротких предложениях, то они также будут иметь отражательную симметрию. Можете ли вы придумать свое собственное предложение?

{.text-center} Never odd or never.
A [[nut]] for a jar of tuna.
Yo, banana [[boy]]!

{.reveal(when="blank-0 blank-1")} Но Палиндромы - это не просто веселье, они действительно имеют практическое значение. Несколько лет назад ученые обнаружили, что части нашей [ДНК](gloss:dna) являются палиндромными. Это делает его более устойчивым к мутациям или повреждениям - потому что для каждой части есть вторая резервная копия.

---
> id: rotational-symmetry

### Центральная симметрия

::: column.grow

Фигура имеет [__центральную симметрию__](gloss:rotational-symmetry), если она выглядит одинаково после поворота (менее чем на 360°). Обычно [центром вращения](gloss:center-of-rotation) является середина фигуры.

[__Порядок симметрии__](gloss:order-of-symmetry) - это количество раз, когда фигура совместилась с первоначальной за поворот на 360 градусов. Например, эта снежинка имеет порядок [[6]].

{.reveal(when="blank-0")} Угол каждого поворота составляет `"360°"/"порядок"`. В снежинке это `"360°"/6` = [[60]] °.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Найдите порядок и угол поворота для каждой из этих фигур:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Порядок [[4]], угол [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Порядок [[2]], угол [[180]] °

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Порядок [[8]], угол [[45]] °

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Теперь дополните эти фигуры так, чтобы они имели вращательную симметрию:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Порядок 4
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Порядок 2
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Порядок 4
:::

---

## Группы симметрии и орнамента

> id: groups
> section: symmetry-groups

Некоторые фигуры имеют более одной симметрии - давайте посмотрим на [квадрат](gloss:square) в качестве простого примера.

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

Мы уже показали выше, что квадрат имеет [[4]] оси симметрии.

{.reveal(when="blank-0")} Он также имеет центральную симметрию на [[90]]°, [[180]]° и [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} И, наконец, мы можем думать о «бездействии» как о другом особом типе симметрии - потому что результат (очевидно) такой же, как и раньше. Это иногда называют __тождеством__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} В общей сложности мы нашли [[8]] различных «симметрий квадрата».

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Теперь мы можем начать делать некоторую арифметику с этими симметриями. Например, мы можем __сложить__ две симметрии, чтобы получить новые:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

Всякий раз, когда вы складываете две симметрии квадрата, вы получаете новый. Вот «калькулятор симметрии», где вы можете попробовать сделать это сами:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Потратьте некоторое время на игры с калькулятором симметрии и попробуйте найти любые шаблоны. Можете ли вы дополнить эти наблюдения?

* Сложение двух центральных симметрий всегда даст [[центральную|осевую]] симметрию (или тождество).
* Сложение двух осевых симметрий всегда даст [[центральную|осевую]] симметрию (или тождество).
* Сложение двух разных симметрий [[дает различные результаты|всегда дает центральную симметрию|всегда дает осевую симметрию]].
* Сложение с тождеством [[ничего не делает|дает отражение|дает поворот]].

---
> id: group-axioms

Возможно, вы уже поняли, что сложение __{.orange} симметрий__ на самом деле очень похоже на сложение __{.green} целых чисел__:

    ol.proof
      li.r
        | Сложение двух #[strong.orange симметрий]/#[strong.green целых чисел] всегда дает другую #[strong.orange симметрию]/другое #[strong.green целое число]:
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
        span.md Сложение #[strong.orange симметрий]/#[strong.green целых чисел] имеет [сочетательное свойство](gloss:associative):
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
        | Любая #[strong.orange симметрия]/#[strong.green целое число] имеет #[strong противоположную] #[strong.orange симметрию]/#[strong противоположное] #[strong.green целое число] которое при сложении дает тождество или ноль:
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

В математике любой набор, который обладает этими свойствами, называется [__группой__](gloss:group). Некоторые группы (например, __{.orange} симметрии__ квадрата) имеют только конечное число элементов. Другие (как __{.green} целые числа__) бесконечны.

В этом примере мы начали с восьми симметрий квадрата. Фактически, каждая геометрическая форма имеет свою собственную __группу симметрии__. Все они имеют разные элементы, но они всегда удовлетворяют трем правилам, расположенным выше.

Группы появляются везде в математике. Элементы могут быть числами или симметриями, но также полиномами, перестановками, матрицами, функциями. Ключевая идея __теории групп__ заключается в том, что нас не интересуют отдельные элементы, только то, __как они взаимодействуют друг с другом__.

::: column.grow

Например, группы симметрии разных молекул могут помочь ученым предсказать и объяснить свойства соответствующих материалов. Группы также можно использовать для анализа выигрышной стратегии в настольных играх, поведения вирусов в медицине, различных гармоний в музыке и многих других концепций…

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Свойства молекулы CCl<sub>4</sub> (слева) и аденовируса (справа) определяются их симметрией.

:::

---
### Группы орнаментов

> id: wallpaper-groups

В [предыдущих разделах](/course/transformations/symmetry) мы познакомились с двумя видами симметрии, соответствующих двум разным преобразованиям: повороты и отражения. Однако, также существует симметрия для третьего вида изометрического преобразования: [[параллельного переноса|вращения|переворота]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Симметрия переноса__](gloss:translational-symmetry) не работает для отдельных объектов, таких как цветы или бабочки, но она работает для регулярно повторяющихся узоров, которые продолжаются во всех направлениях:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Шестиугольные соты

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Настенная керамическая плитка

:::

---

> id: footsteps

В дополнение к осевой, центральной и симметрии переноса существует даже четвертый тип: [__скользящая__](gloss:glide-reflection). Это комбинация осевой симметрии и симметрии переноса в направлении, параллельному оси симметрии.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---

> id: wallpaper-groups-2

Орнамент может иметь более одного типа симметрии. И так же, как для квадратов, мы можем найти [группу симметрии](gloss:symmetry-group) орнамента, который содержит все его различные симметрии.

Эти группы вряд ли покажут нам, как орнамент __выглядит__ (например, его цвет и формы), но он может показать, как эти формы __повторяются__. Несколько разных орнаментов могут иметь одну и ту же группу симметрии, потому что узоры в них располагаются и повторяются одинаково.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Эти две модели имеют одинаковую симметрию, даже если они выглядят очень по-разному. Но симметрия не зависит от цвета или фигур.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Эти два шаблона также имеют одинаковую симметрию - даже если они выглядят более похожими на соответствующие орнаменты слева, чем друг на друга.

:::

---

> id: wallpaper-groups-3

Хотя, существует бесконечно много возможных вариантов узоров, оказывается, что все они имеют одну из 17 различных групп симметрии. Они называются __Группами орнаментов__. Каждая группа орнаментов определяется сочетанием осевых, центральных, скользящих и симметрий переноса. Сможете ли вы увидеть [центры симметрии](gloss:center-of-rotation) и [оси симметрии](gloss:axis-of-symmetry) в примерах ниже?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Type P1</strong><br>Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Type P2</strong><br>Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Type P3</strong><br>Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Type P4</strong><br>Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Type P6</strong><br>Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Type PM</strong><br>Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Type PMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Type P4M</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Type P6M</strong><br>Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Type P3M1</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Type P31M</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Type P4G</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Type CMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Type PMG</strong><br>Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Type PG</strong><br>Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Type CM</strong><br>Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Type PGG</strong><br>Perpendicular glide reflections, rotations of order 2, translations

К сожалению, нет простого объяснения, почему существует _17_ этих групп. Доказательство требует гораздо более сложной математики ...

Вместо этого вы можете попробовать нарисовать свои собственные повторяющиеся узоры для каждой из 17 групп орнаментов:

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch


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

Группы орнаментов были для плоских, двумерных узоров. Мы можем сделать нечто подобное для трехмерных моделей: они называются кристаллографическими группами, и их 219!

Помимо 4 симметрий для плоских фигур в эти группы входят симметрии, такие как __симметрия плоскости скольжения__ и __симметрия относительно винтовых осей__ (подумайте о движении при открытии бутылки с пробкой).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Нитрид бора имеет молекулы, расположенные в кристаллической решетке, которая имеет трехмерную группу симметрии.

:::

---

## Симметрия в физике

> id: planets
> sectionBackground: dark stars
> section: physics

Пока что все симметрии, на которые мы смотрели, были __визуальными__ в некотором смысле: фигуры, изображения или узоры. Фактически, симметрия может быть гораздо более широкой концепцией: концепция __"иммунитет к изменениям"__.

Например, если вы любите яблочный сок так же, как и апельсиновый, то ваше предпочтение «симметрично» при преобразовании, которое заменяет яблоки на апельсины.

В 1915 году немецкий математик [Эмми Нётер](bio:noether) заметил, что нечто подобное верно и для [законов природы](gloss:laws-of-nature).

::: column.grow

Например, наш опыт говорит нам, что законы физики одинаковы во всей вселенной. Не имеет значения, проводите ли вы эксперимент в Лондоне, Нью-Йорке или на Марсе - законы физики всегда должны быть одинаковыми. В некотором смысле, они имеют [[симметрию переноса|осевую симметрию]].

{.reveal(when="blank-0")} Аналогичным образом, не имеет значения, проводим ли мы эксперимент, обращаясь к северу, югу, востоку или западу: законы природы имеют [[центральную симметрию|скользящую симметрию]].

{.reveal(when="blank-1")} И, наконец, не должно иметь значения, проводим ли мы эксперимент сегодня, или завтра, или через год. Законы природы «симметричны по времени».

::: column(width=300)

    include svg/planets.svg

:::

---

> id: planets-1

Эти «симметрии» могут поначалу казаться совершенно бессмысленными, но на самом деле они могут многое рассказать нам о нашей вселенной. Эмми Нетер удалось доказать, что каждая симметрия соответствует определенной физической величине, которая __сохраняется__ при различных условиях измерения.

Например, временная симметрия подразумевает, что вся __энергия__ в нашей вселенной является постоянной величиной: вы можете преобразовывать энергию из одного типа в другой (например, свет, тепло или электричество), но вы никогда не сможете создавать или разрушать энергию. Общее количество энергии во вселенной всегда будет оставаться постоянным.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN - самый большой ускоритель частиц в мире. Ученые сталкивают фундаментальные частицы на невероятных скоростях, чтобы изучить эти самые частицы. Заметили человека стоящего на полу для сравнения размеров CERN?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Оказывается, что, просто зная о симметрии, физики могут вывести большинство законов природы, которые управляют нашей вселенной - без необходимости проводить эксперимент или наблюдение.

Симметрия может даже предсказать существование фундаментальных частиц. Одним из примеров является знаменитый __бозон Хиггса__: он был предсказан физиками-теоретиками в 1960-х годах, но не наблюдался в реальном мире до 2012 года.

:::

---

## Гомотетия

> id: dilations
> section: dilations

Итак, мы только что рассмотрели [[изометрические|конгруэнтные|визуальные]] преобразования. _{span.reveal(when="blank-0")} Теперь давайте подумаем о том, что не является изометрическим преобразованием: [__гомотетия__](gloss:dilation) изменяет размер формы, делая их больше или меньше._

---

> id: dilations-1

::: column.grow

Все гомотетии имеют [__центр__](target:center) и [__коэффициент__](->.scale-target). Центр является точкой отсчета для расширения, а коэффициент говорит нам о том, насколько растягивается или уменьшается фигура.

Если [коэффициент](gloss:scale-factor) находится между 0 и 1, образ становится [[меньше|больше]], чем оригинал. Если коэффициент больше 1, то образ будет на [[больше|меньше]], чем оригинал.

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

{.text-center.scale-target} Коэффициент масштабирования: ${s}{s|2|0,3,0.1}

:::

{.todo} __СКОРО - Подробнее о гомотетии__

---

## Подобие

> section: similarity
> sectionStatus: dev
> id: similarity

В разработке
Извините, мы все еще работаем над этим разделом.
Пожалуйста, зайдите в ближайшее время!
