# преобразования и симметрия

## Введение

> id: intro
> section: introduction

Многие геометрические понятия, такие как [линии](gloss:line) и [точек](gloss:point), были «изобретены» математиками. Симметрия, с другой стороны, повсюду вокруг нас. Почти все растения, животные и даже мы, люди, симметричны.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Со временем мы подражали симметрии природы в искусстве, архитектуре, технологиях и дизайне. Симметричные формы и узоры кажутся просто _красивее_, чем несимметричные.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Но симметрия гораздо важнее, чем просто _выглядеть красиво_. Он лежит в самых основах нашей вселенной и может даже объяснить самые фундаментальные законы физики.

_{button.next-step} Продолжить_

---

> id: transformations
> goals: t1 t2 t3

Хотя симметрия является очень интуитивным понятием, описать ее математически сложнее, чем вы думаете. Во-первых, нам нужно узнать о [__преобразованиях__](gloss:transformation), которые являются способами преобразования одной геометрической фигуры в другую. Вот несколько примеров:

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

Результат преобразования называется [__image__](gloss:transformation-image). Изображение фигуры `A` обычно обозначается `A&#39;` (произносится как «простое число»).

Первый [первый пример](->#star) выше является особенным, потому что он только перемещает и вращает исходную звезду, но не меняет ее размер или форму. Преобразования с этим свойством называются __жесткими преобразованиями__.

---

## Жесткие преобразования

> id: rigid
> section: rigid

[__жесткое преобразование__](gloss:rigid-transformation) - это особый вид преобразования, который не изменяет размер и форму исходной фигуры. Представьте, что он сделан из твердого материала, такого как дерево или металл: мы можем переместить его, перевернуть и перевернуть, но мы не можем растянуть или иным образом деформировать его.

Какие из этих преобразований являются жесткими?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---

> id: rigid-1
> goals: t1 t2 t3

Для жестких преобразований изображение всегда [[совпадает с|the same as|opposite to]] оригиналом. Существует три различных типа жестких преобразований:

::: column.grow.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Преобразование, которое просто _перемещает_ форму, называется [__переводом__](gloss:translation).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Преобразование, которое _переворачивает_ форму, называется [__отражением__](gloss:reflection).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Преобразование, которое _вращает_ форму, называется [__вращением__](gloss:rotation).

:::

---

> id: rigid-2

Мы также можем объединить несколько типов преобразований, чтобы создать более сложные, например, перевод с последующим вращением.

Но сначала давайте рассмотрим каждый из этих типов преобразований более подробно.

---

> id: translations

### Переводы

[__перевод__](gloss:translation) - это преобразование, которое перемещает каждую точку фигуры на одинаковое расстояние в одном направлении.

В координатной плоскости мы можем указать перевод по тому, как далеко форма перемещается вдоль оси _x_ и оси _y_. Например, преобразование с помощью (3, 5) перемещает фигуру на 3 вдоль оси _x_ и на 5 вдоль оси _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Переведено ([[5]], [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} переведено как ([[-4]], [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Переведено ([[4]], [[-2]])

:::

---

> id: translations-1
> goals: drag-0 drag-1 drag-2

Теперь ваша очередь - переведите следующие фигуры, как показано:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Перевести на (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Перевести с помощью (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Перевести с помощью (5, –1) _{span.check(when="drag-2")}_

:::

---

> id: reflections
> goals: r0 r1 r2

### Размышления

[__отражение__](gloss:reflection) - это преобразование, которое «переворачивает» или «отражает» форму поперек линии. Эта линия называется __линией отражения__.

Нарисуйте линию отражения в каждом из этих примеров:

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

Обратите внимание, что если точка лежит на линии отражения, ее изображение [[совпадает с|smaller than|opposite to]] исходной точкой.

---

> id: reflections-3

Во всех приведенных выше примерах линия отражения была горизонтальной, вертикальной или под углом 45 °, что облегчало рисование отражений. Если это не так, конструкция требует немного больше работы:

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

{.r} Чтобы отразить эту форму через [линию отражения](target:refl), мы должны отразить каждую [вершину](gloss:polygon-vertex) по отдельности, а затем соединить их снова. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Давайте выберем одну из вершин и проведем линию через эту вершину, которая перпендикулярна линии отражения. _{button.next-step} Продолжить_

{.r.reveal(when="next-1")} Теперь мы можем измерить расстояние [<<<<](target:d1) от вершины до линии отражения и создать точку с таким же расстоянием [<<<<](target:d2) на другой стороне. _{span.lgrey} (Для этого мы можем использовать линейку или [компас](target:circ).)_ _{button.next-step} Продолжить_

{.r.reveal(when="next-2")} Мы можем сделать то же самое для всех других вершин нашей формы. _{button.next-step} Продолжить_

{.r.reveal(when="next-3")} Теперь нам просто нужно соединить отраженные вершины в правильном порядке, и мы нашли отражение!

:::

---

> id: rotations
> goals: r0 r1 r2

### Обороты

[__вращение__](gloss:rotation) - это преобразование, которое «поворачивает» фигуру на определенный угол вокруг фиксированной точки. Эта точка называется [__центром вращения__](gloss:center-of-rotation). Вращения могут быть по часовой стрелке или против часовой стрелки.

Попробуйте повернуть фигуры ниже вокруг красного центра вращения:

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

Сложнее рисовать повороты, которые не точно на 90° или 180°. Давайте попробуем повернуть эту форму на ${10*ang}{ang|6|-18,18,1}° вокруг [центра вращения](target:rot).

{.r} Как и для отражений, мы должны поворачивать каждую точку формы индивидуально. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Мы начинаем с выбора одной из вершин и рисования линии к центру вращения. _{button.next-step} Продолжить_

{.r.reveal(when="next-1")} Используя [транспортир](target:protractor), мы можем измерить угол [${ang*10}°](target:angle) вокруг центра вращения. Давайте нарисуем [вторую линию](target:l2) под этим углом. _{button.next-step} Продолжить_

{.r.reveal(when="next-2")} Используя [компас](target:compass) или линейку, мы можем найти [точку](target:a1) на этой линии, которая находится на том же расстоянии от центра вращения, что и исходная точка. _{button.next-step} Продолжить_

{.r.reveal(when="next-3")} Теперь мы должны повторить эти шаги для всех остальных вершин нашей фигуры. _{button.next-step} Продолжить_

{.reveal(when="next-4")} И, наконец, как и прежде, мы можем соединить отдельные вершины, чтобы получить повернутое изображение нашей первоначальной формы.

:::

---

> id: composition-1

Преобразования являются важной концепцией во многих частях математики, а не только в геометрии. Например, вы можете преобразовать [_функций_](gloss:function), сдвигая или поворачивая их [графики](gloss:function-graph). Вы также можете использовать преобразования, чтобы определить, являются ли две фигуры [конгруэнтными](gloss:congruent).

---

## Конгруэнтность

> section: congruence
> sectionStatus: dev

ДЕЛАТЬ

---

## Симметрия

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__Симметрия__](gloss:symmetry) повсюду вокруг нас, и интуитивно понятная концепция: различные части объекта выглядят _одинаково_ в некотором роде. Но используя преобразования, мы можем дать гораздо более точное математическое определение того, что симметрия _действительно_ означает:

{.definition} Объект является _симметричным_, если он выглядит одинаково даже после применения определенного преобразования.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Мы можем отразить эту бабочку, и потом она будет выглядеть так же. Мы говорим, что он имеет __отражательную симметрию__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Мы можем повернуть этот цветок, и потом он будет выглядеть так же. Мы говорим, что он имеет __вращательную симметрию__.

:::

---

> id: reflectional-symmetry

### Симметрия отражения

Форма имеет [__отражательную симметрию__](gloss:rotational-symmetry), если после отражения она выглядит одинаково. Линия отражения называется осью симметрии [__<<<<__](gloss:axis-of-symmetry), и она разделяет форму на две [[конгруэнтные|equal|similar]] половины. Некоторые фигуры также могут иметь более одной оси симметрии.

---

> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Нарисуйте все оси симметрии на этих шести изображениях и формах:

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

{.caption} Эта форма имеет [[2]] осей симметрии.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Квадрат имеет [[4]] осей симметрии.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Эта форма имеет [[2]] осей симметрии.

:::

---

> id: alphabet

Многие буквы в алфавите имеют отражательную симметрию. Выберите все те, которые делают:

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

Вот еще несколько фигур. Завершите их так, чтобы они имели отражательную симметрию:

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

Фигуры, буквы и изображения могут иметь отражательную симметрию, как и целые числа, слова и предложения!

Например, «25352» и «ANNA» читаются одинаково сзади-спереди. Числа или подобные слова называются [__палиндромами__](gloss:palindrome). Можете ли вы вспомнить какие-либо другие палиндромы?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Если мы игнорируем пробелы и знаки препинания, приведенные ниже короткие предложения также имеют отражательную симметрию. Можете ли вы придумать свой собственный?

{.text-center} Никогда нечетно или нечетно.  
[[орех]] для банки с тунцом.  
Эй, банан [[мальчик]]!

{.reveal(when="blank-0 blank-1")} Но Палиндромы - это не просто веселье, они действительно имеют практическое значение. Несколько лет назад ученые обнаружили, что части нашей [ДНК](gloss:dna) являются палиндромными. Это делает его более устойчивым к мутациям или повреждениям - потому что для каждой части есть вторая резервная копия.

---
> id: rotational-symmetry

### Вращательная симметрия

::: column.grow

Форма имеет [__вращательную симметрию__](gloss:rotational-symmetry), если она выглядит одинаково после поворота (менее чем на 360°). Центр вращения [<<<<](gloss:center-of-rotation) обычно является просто серединой фигуры.

[__порядок симметрии__](gloss:order-of-symmetry) - это число различных ориентаций, в которых форма выглядит одинаково. Вы также можете думать об этом как о _числе раз, когда мы можем повернуть форму_, прежде чем мы вернемся к началу. Например, эта снежинка имеет порядок [[6]].

{.reveal(when="blank-0")} Угол каждого поворота составляет `"360°"/"order"`. В снежинке это `"360°"/6` = [[60]] °.

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

Теперь заполните эти фигуры, чтобы они имели вращательную симметрию:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0") {.caption} Порядок 4 column(width=220)     x-geopad.draw(width=220 height=180 grid=20 no-points): svg
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

## Группы симметрии и обои

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

Вы уже показали выше, что квадрат имеет [[4]] осей отражения.

{.reveal(when="blank-0")} Он также имеет вращательную симметрию на [[90]]°, [[180]]° и [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} И, наконец, мы можем думать о «бездействии» как о другом особом типе симметрии - потому что результат (очевидно) такой же, как и раньше. Это иногда называют __тождеством__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} В общей сложности мы нашли [[8]] различных «симметрий квадрата».

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Теперь мы можем начать делать некоторую арифметику с этими симметриями. Например, мы можем _добавить_ две симметрии, чтобы получить новые:

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

Всякий раз, когда вы добавляете две симметрии квадрата, вы получить новый. Вот «калькулятор симметрии», где вы можете попробовать его сами:

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

Потратьте некоторое время на игры с калькулятором симметрии и попробуйте найти любые паттерны. Можете ли вы завершить эти наблюдения?

* Добавление двух вращений всегда даст [[вращение|a reflection]] (или идентичность).
* Добавление двух отражений всегда даст [[поворот|a reflection]] (или идентичность).
* Добавление тех же двух симметрий в противоположном порядке [[иногда дает другой результат|always gives a different|always gives the same]].
* Добавление идентификатора [[ничего не делает|returns a reflection|returns the opposite]].

---
> id: group-axioms

Вы, возможно, уже поняли, что добавление __{.orange} симметрий__ на самом деле очень похоже на добавление __{.green} целых чисел__:

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

В математика, любая коллекция, которая обладает этими свойствами, называется [__группа__](gloss:group). Некоторые группы (например, __{.orange} симметрии__ квадрата) имеют только конечное число элементов. Другие (например, __{.green} целых__) бесконечны.

В этом примере мы начали с восьми симметрий квадрата. Фактически, каждая геометрическая форма имеет свою собственную __группу симметрии__. Все они имеют разные элементы, но они всегда удовлетворяют трем правилам выше.

Группы появляются везде в математике. Элементы могут быть числами или симметриями, но также полиномами, перестановками, матрицами, функциями… _всего, что_ подчиняется трем правилам. Ключевая идея _теории групп_ состоит в том, что нас не интересуют отдельные элементы, просто, _как они взаимодействуют друг с другом_.

::: column.grow

Например, группы симметрии разных молекул могут помочь ученым предсказать и объяснить свойства соответствующих материалов. Группы также можно использовать для анализа выигрышной стратегии в настольных играх, поведения вирусов в медицине, различных гармоний в музыке и многих других концепций…

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Свойства молекулы CCl<sub>4</sub> (слева) и аденовирус (справа) определяется их симметрией.

::

---
### Группы обоев

> id: wallpaper-groups

В [предыдущих разделах](/course/transformations/symmetry) мы видели два разных вида симметрии, соответствующих двум разным преобразованиям: вращения и отражения. Но существует также симметрия для третьего вида жесткого преобразования: [[переводов|spins|flips]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Трансляционная симметрия__](gloss:translational-symmetry) не работает для изолированных объектов, таких как цветы или бабочки, но она работает для регулярных шаблонов, которые простираются в каждом направлении:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Шестиугольный хоникомб

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Настенная керамическая плитка

:::

---

> id: footsteps

В дополнение к отражательной, вращательной и поступательной симметрии существует даже четвертый тип: [__глиссады__](gloss:glide-reflection). Это комбинация отражения и перемещения в том же направлении, что и ось отражения.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---

> id: wallpaper-groups-2

Шаблон может иметь более одного типа симметрии. И так же, как для квадратов, мы можем найти [группу симметрии](gloss:symmetry-group) шаблона, который содержит все его различные симметрии.

Эти группы не рассказывают вам много о том, как шаблон _выглядит_ (например, его цвета и формы), как _повторяется_. Несколько разных шаблонов могут иметь одну и ту же группу симметрии - так как длинные располагаются и повторяются одинаково.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Эти две модели имеют одинаковую симметрию, даже если они выглядят очень по-разному. Но симметрия не о цветах или поверхностных формах.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Эти два шаблона также имеют одинаковую симметрию - даже если они выглядят более похожими на соответствующие шаблоны слева, чем друг на друга.

:::

---

> id: wallpaper-groups-3

Оказывается, что, хотя существует бесконечно много возможных паттернов, все они имеют одну из 17 различных групп симметрии. Они называются __Группы обоев__. Каждая группа обоев определяется сочетанием переводов, вращений, отражений и отражений скольжения. Можете ли вы увидеть [центров вращения](gloss:center-of-rotation) и [осей отражения](gloss:axis-of-symmetry) в этих примерах?

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

К сожалению, нет простой причины, почему существует _17_ этих групп. Доказательство требует гораздо более сложной математики ...

Вместо этого вы можете попробовать нарисовать свои собственные повторяющиеся узоры для каждой из 17 групп обоев:

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

Группы обоев были все о плоских, двумерных образцах. Мы можем сделать нечто подобное для трехмерных моделей: они называются кристаллографическими группами, и их 219!

Помимо перемещений, отражений, вращений и отражений скольжения в эти группы входят симметрии, такие как __плоскости скольжения__ и __винтовых осей__ (подумайте о движении при отвинчивании бутылки).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Нитрид бора имеет молекулы, расположенные в этой кристаллической решетке, которая имеет трехмерную группу симметрии.

:::

---

## Симметрия в физике

> id: planets
> sectionBackground: dark stars
> section: physics

Пока что все симметрии, на которые мы смотрели, были _визуальными_ в некотором смысле: видимые формы, изображения или узоры. Фактически, симметрия может быть гораздо более широкой концепцией: _иммунитет к изменениям_.

Например, если вы любите яблочный сок так же, как и апельсиновый, то ваше предпочтение «симметрично» при преобразовании, которое меняет яблоки и апельсины.

В 1915 году немецкий математик [Эмми Нётер](bio:noether) заметил, что нечто подобное верно и для [законов природы](gloss:laws-of-nature).

::: column.grow

Например, наш опыт говорит нам, что законы физики везде во вселенной одинаковы. Не имеет значения, проводите ли вы эксперимент в Лондоне, Нью-Йорке или на Марсе - законы физики всегда должны быть одинаковыми. В некотором смысле, они имеют [[трансляционную симметрию|reflectional symmetry]].

{.reveal(when="blank-0")} Аналогичным образом, не имеет значения, проводим ли мы эксперимент, обращаясь к северу, югу, востоку или западу: законы природы имеют [[симметрию вращения|glide reflection symmetry]].

{.reveal(when="blank-1")} И, наконец, не должно иметь значения, проводим ли мы эксперимент сегодня, или завтра, или через год. Законы природы «симметричны по времени».

::: column(width=300)

    include svg/planets.svg

:::

---

> id: planets-1

Эти «симметрии» могут поначалу казаться совершенно бессмысленными, но на самом деле они могут многое рассказать нам о нашей вселенной. Эмми Нетер удалось доказать, что каждая симметрия соответствует определенной физической величине, которая _сохраняется_.

Например, временная симметрия подразумевает, что __Энергия__ должна быть сохранена в нашей вселенной: вы можете преобразовывать энергию из одного типа в другой (например, свет, тепло или электричество), но вы никогда не сможете создавать или разрушать энергию. Общее количество энергии во вселенной всегда будет оставаться постоянным.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accellerator. Scientists smash together fundamental particles at enourmous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Оказывается, что, просто зная о симметрии, физики могут вывести большинство законов природы, которые управляют нашей вселенной - без необходимости проводить эксперимент или наблюдение.

Симметрия может даже предсказать существование фундаментальных частиц. Одним из примеров является знаменитый __бозон Хиггса__: он был предсказан физиками-теоретиками в 1960-х годах, но не наблюдался в реальном мире до 2012 года.

:::

---

## Расширения

> id: dilations
> section: dilations

Итак, мы только что рассмотрели [[жестких|congruent|visual]] преобразований. _{span.reveal(when="blank-0")} Теперь давайте подумаем о том, что не является: [__расширение__](gloss:dilation) изменяет размер формы, делая ее больше или меньше._

---

> id: dilations-1

::: column.grow

Все дилатации имеют [__центр__](target:center) и [__масштабный коэффициент__](->.scale-target). Центр является точкой отсчета для коэффициента расширения и масштаба, который говорит нам о том, насколько растягивается или уменьшается фигура.

Если [масштабный коэффициент](gloss:scale-factor) находится между 0 и 1, изображение на [[меньше|larger]], чем оригинал. Если масштабный коэффициент больше 1, изображение будет на [[больше|smaller]], чем оригинал.

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
      path.light.thin(x="segment(C,s<1?c:c1)") {.text-center.scale-target} Коэффициент масштабирования: ${s}{s|2|0,3,0.1}

:::

{.todo} СКОРО - Подробнее о дилатациях

---

## Сходство

> section: similarity
> sectionStatus: dev
> id: similarity

СКОРО
