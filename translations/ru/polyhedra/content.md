# Многоугольники и многогранники

## Полигоны

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

[__Многоугольник__](gloss:polygon) - это замкнутая, плоская фигура, которая имеет какое-то количество сторон. Многоугольники могут иметь любое количество сторон и углов, но стороны не могут быть изогнуты. Какие из фигур ниже являются многоугольниками?

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

Мы даем разные названия многоугольникам, в зависимости от того, сколько у них сторон:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Треугольник]#[br]3 стороны
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Четырехугольник]#[br]4 стороны
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Пятиугольник]#[br]5 сторон
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Шестиугольник]#[br]6 сторон
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Семиугольник]#[br]7 сторон
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Восьмиугольник]#[br]8 сторон

---
> id: angles-0

### Углы в многоугольниках

Каждый многоугольник, который имеет  _n_ сторон также имеет _n_ [внутренних углов](gloss:internal-angle) . Мы уже знаем, что сумма внутренних углов в треугольнике всегда равна [[180]]°, но что насчет других многоугольников?

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

Похоже, что сумма внутренних углов в четырехугольнике всегда равна [[360]]° - ровно [[вдвое больше|в три раза больше|половина]] суммы углов в треугольнике. _{span.reveal(when="blank-0 blank-1")} Это не случайно: каждый четырехугольник можно разбить на два треугольника._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} То же самое также работает для больших многоугольников. Мы можем разделить пятиугольник на [[3]] треугольника, поэтому его внутренняя угловая сумма `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} И мы можем разделить шестиугольник на [[4]] треугольника, поэтому сумма его внутренняя углов равна `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Многоугольник с ${x}{x|7|3,15,1} сторонами будет иметь сумму внутренних углов 180° × ${x-2} = ${(x-2)*180}°. Получается, многоугольник с _n_ сторонами может быть разбит на [[n - 2|n - 1|n]] треугольников. Следовательно,

{.text-center.reveal(when="blank-0")} Сумма внутренних углов в _n-_ угольнике `= (n - 2) × 180°` ,

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Выпуклые и невыпуклые многоугольники

::: column.grow

Мы говорим, что многоугольник [__невыпуклый,__](gloss:concave) если у него есть угол, который «смотрит внутрь». Этот угол как будто [«прогнулся»](target:cave) . Если такого угла нет, то такие многоугольники называются [__выпуклыми__](gloss:convex) .

Есть два способа легко определить невыпуклые многоугольники: у них есть хотя бы один [внутренний угол, который больше 180°](target:angle) . Или у него есть по крайней мере одна [диагональ, лежащая _вне_ многоугольника](target:diagonal) .

С другой стороны, в выпуклых многоугольниках все внутренние углы меньше [[180]]°, а все диагонали лежат [[внутри|вне]] многоугольника.

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

Какие из этих многоугольников невыпуклые?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Правильные многоугольники

Мы говорим, что многоугольник является [__правильным,__](gloss:regular-polygon) если все его стороны имеют одинаковую длину и все углы имеют одинаковый размер. Какие из этих фигур являются правильными многоугольниками?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Правильные многоугольники могут быть разных размеров, но все правильные многоугольники с одинаковым числом сторон [[подобны|конгруэнтны|имеют равные площади]] !

---
> id: regular-2

Мы уже знаем сумму всех [внутренних углов](gloss:internal-angle) в многоугольниках. Для правильных многоугольников все эти углы имеют [[одинаковый размер|в сумме дают 180 градусов]] , поэтому мы можем определить размер одного внутреннего угла:

{.text-center.reveal(when="blank-0")} угол = <mfrac><mrow>[[сумма всех углов|количество углов]]</mrow><mrow>[[количество углов|сумма всех углов]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ,_

{.reveal(when="blank-1 blank-2" delay=1000)} Если `n=3` мы получаем углы равностороннего треугольника - мы уже знаем, что они равны [[60]]°. _{span.reveal(when="blank-3")} В правильном многоугольнике с ${x}{x|6|3,12,1} сторонами, каждый внутренний угол равен 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _знак равно ${round(180-360/x)}°._

---
> id: regular-area

### Площадь правильных многоугольников

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

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="апофема" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow

Здесь вы можете увидеть [правильный многоугольник](gloss:regular-polygon) с ${n}{n|5|4,12,1} сторонами. Каждая сторона имеет длину [{.pill.green} 1 м](target:base) Попробуем рассчитать его площадь!

Во-первых, мы можем разбить многоугольник на ${toWord(n)} конгруэнтных, [[равнобедренных|равносторонних|прямоугольных]] треугольников.

{.reveal(when="blank-0")} Мы уже знаем [[основание|высоту|площадь]] этих треугольников, но нам также нужна [[высота|боковые стороны|медианы]], чтобы можно было рассчитать его площадь. _{span.reveal(when="blank-2")} В правильных многоугольниках эту высоту иногда называют [{.pill.yellow} апофема](target:apothem)_

{.reveal(when="blank-1 blank-2" delay=1000)} Обратите внимание, что мы получили [прямоугольный треугольник](target:right-triangle) , образованный апофемой и половиной основания равнобедренного треугольника. Это означает, что мы можем использовать тригонометрию!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.pill.blue} Углы при основании](target:base-angle) равнобедренного треугольника (назовем их α) равны [[половине|утроенному|удвоенному]] размера [внутреннего угла многоугольника](target:int-angle) многоугольника:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Чтобы найти апофему, мы можем использовать определение [[тангенса|синуса|косинуса]] :

{.text-center.reveal(when="blank-4")}`tg pill(α, "blue", "alpha") =
pill("противолежащий катет", "yellow", "apothem") / pill("прилежащий катет", "green", "half-base") =
blank("апофема", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("апофема", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tg pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Теперь найдем площадь [равнобедренного треугольника](target:isosceles-triangle)

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "основания" × "высота"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Многоугольник состоит из ${toWord(n)} равных равнобедренных треугольников, каждый из которых имеет такую же площадь. Следовательно, общая площадь многоугольника

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Четырехугольники

> section: quadrilaterals
> id: quadrilaterals

В [предыдущем курсе](/course/triangles) мы исследовали множество различных свойств треугольников. Теперь давайте посмотрим на четырехугольники.

 _Правильный четырехугольник_ называется [[квадратом|прямоугольником|равносторонним четырехугольником]] . Все его стороны имеют одинаковую длину, и все его углы равны.

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

{.caption} __Квадрат__ - четырехугольник с четырьмя [равными сторонами](target:side) и четырьмя [равными углами](target:angle) .

:::

---
> id: quadrilaterals-1

Для «менее правильных» четырехугольников у нас есть два варианта. Если мы просто хотим, чтобы только _углы_ четырехугольника были равны, мы получим [__прямоугольник__](gloss:rectangle) . Если мы хотим, чтобы только _стороны_ были равны, мы получим [__ромб__](gloss:rhombus) .

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

{.caption} __Прямоугольник__ - это четырехугольник с четырьмя [равными углами](target:angle) .

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

{.caption} __Ромб__ - четырехугольник с четырьмя [равными сторонами](target:side) .

:::

---
> id: quadrilaterals-2

Есть еще несколько четырехугольников, которые "еще менее правильные", но все же имеют определенные важные свойства:

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

{.caption} Если обе пары _противоположных_ сторон [параллельны](gloss:parallel) , мы получим __параллелограмм__ .

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

{.caption} Если две пары _соседних_ сторон имеют одинаковую длину, мы получаем __Дельтоид__ (или ромбоид).

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

{.caption} Если хотя бы одна пара противоположных сторон параллельна, мы получаем __трапецию__ .

:::

---
> id: quadrilaterals-venn

Четырехугольники могут попадать в несколько различных категорий. Мы можем визуализировать иерархию различных типов четырехугольников в виде [диаграммы Венна](gloss:venn-diagram) :

    figure: include svg/venn.svg

Например, каждый прямоугольник также является [[параллелограммом|ромбом| квадратом]] , и каждый [[ромб|трапеция|параллелограмм]] также является дельтоидом. Ромб [[иногда является|всегда является|нельзя назвать]] квадратом и прямоугольник [[всегда является|иногда является|нельзя назвать]] трапецией.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Чтобы избежать двусмысленности, мы обычно используем только наиболее точное название. Мы не будем называть квадрат ромбом, так как это название не отображает все его свойства.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Теперь выберите четыре точки в любом месте серого поля слева. _{span.reveal(when="points")} Мы можем соединить их, чтобы сформировать четырехугольник._

{.reveal(when="points" delay=1000)} Давайте найдем середину каждой из четырех сторон. Если мы соединяем середины, мы получим [[еще один четырехугольник|треугольник|прямоугольник]]

{.reveal(when="blank-0")} Попробуйте переместить вершины первоначального четырехугольника и понаблюдать, что происходит с меньшим. Похоже, что это не просто четырехугольник, это всегда [[параллелограмм|трапеция|прямоугольник]] !

{.reveal(when="blank-1")} Но почему? Почему для _любого_ четырехугольника результатом всегда будет параллелограмм? Чтобы это объяснить, нам нужно нарисовать одну из [диагоналей](gloss:polygon-diagonal) исходного четырехугольника.

{.reveal(when="diagonal")} Диагональ разбивает четырехугольник на [два треугольника](target:triangle) . И теперь вы можете видеть, что [две стороны](target:midsegment) внутреннего четырехугольника на самом деле являются [[средними линиями|медианами|срединными перпендикулярами]] этих треугольников.

{.reveal(when="blank-2")} В [предыдущем курсе](/course/triangles/properties) мы узнали, что [средняя линия](gloss:triangle-midsegment) треугольника всегда параллельна его основанию. В этом случае это означает, что [обе эти стороны](target:parallel) параллельны диагонали - поэтому они также должны быть [[параллельны друг другу|одинаковой длины|перпендикулярны друг другу]] .

{.reveal(when="blank-3" delay=2000)} Аналогично мы можем сделать то же самое со [второй диагональю](target:other) четырехугольника, чтобы доказать, что противоположные стороны попарно параллельны. И это все, что нам нужно, чтобы доказать, что внутренний четырехугольник является [параллелограммом](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### Параллелограммы

Оказывается, у параллелограммов есть много других интересных свойств, кроме того, что противоположные стороны параллельны. Какие из следующих шести утверждений верны?

::: column.grow

    x-picker.list
      .item.md Противоположные стороны [конгруэнтны](gloss:congruent).
      .item(data-error="parall-error-1") Внутренние углы всегда меньше  90°.
      .item.md(data-error="parall-error-2") Диагонали параллелограмма являются [биссектрисами](gloss:angle-bisector) внутренних углов.
      .item Противоположные углы конгруэнтны.
      .item(data-error="parall-error-3") Обе диагонали конгруэнтны.
      .item(data-error="parall-error-4") Смежные стороны конгруэнтны.
      .item Диагонали делятся точкой пересечения пополам.

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

Конечно, просто «увидеть» за эти свойства недостаточно. Чтобы быть уверенными, что они _всегда_ верны, нам нужно _доказать_ их:

::: tab

#### Противоположные стороны и углы _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Попробуем доказать, что противоположные стороны и углы в параллелограмме всегда равны.

Начните с рисования одной из диагоналей параллелограмма.

{.reveal(when="diagonal")} Диагональ создает четыре угла со сторонами параллелограмма. Два [красных угла](target:red-angle) и два [синих угла](target:blue-angle) являются [накрест лежащими](gloss:alternate-angles) , поэтому красные углы и синие углы должны быть [[конгруэнтными|смежными|различными]] .

{.reveal(when="blank-0")} Теперь, если мы посмотрим на [два треугольника,](target:triangles) созданных диагональю, мы увидим, что они имеют два конгруэнтных угла и [одну конгруэнтную сторону](target:diagonal) . По признаку конгруэнтности [[ASA|AAS|AA]] , оба треугольника должны быть конгруэнтными.

{.reveal(when="blank-1")} Это означает, что другие соответствующие части треугольников также должны быть конгруэнтными: в частности, обе [пары противоположных сторон](target:sides) конгруэнтны, и обе [пары противоположных углов](target:angles) тоже конгруэнтны. _{span.qed}_

:::

{.reveal(when="blank-1")} Оказывается, обратное также верно: если обе пары противоположных сторон (или углов) в четырехугольнике являются конгруэнтными, то данный четырехугольник параллелограмм.

    //- Adjacent angles are supplementary.

::: tab

#### Диагонали _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Теперь докажем, что диагонали в параллелограмме точкой пересечения делятся пополам.

 Давайте рассмотрим два желтых треугольника, созданных диагоналями:

* Мы только что доказали, что [две зеленые стороны](target:side1) конгруэнтны, потому что они являются противоположными сторонами параллелограмма.
* [Два красных угла](target:anglesR) и [два синих угла](target:anglesB) конгруэнтны, потому что они являются [[накрест лежащими|соответственными|прямыми]] .

{.reveal(when="blank-2")} По признаку конгруэнтности [[ASA|SSS|AAS]] оба желтых треугольника также должны быть конгруэнтными.

{.reveal(when="blank-3")} Теперь мы можем использовать тот факт, что соответственные части конгруэнтных треугольников также конгруэнтны, чтобы сделать вывод, что [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) и [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) , Другими словами, две диагонали делятся точкой пересечения пополам. _{span.qed}_

:::

{.reveal(when="blank-3")} Как и прежде, верно и обратное: если две диагонали четырехугольника делят друг друга пополам, то четырехугольник является параллелограммом.

:::

---
> id: kites

### Воздушные змеи

::: column.grow

Выше мы рассмотрели четырехугольник, у которого две пары [[противоположных|смежных]] сторон конгруэнтны. В дельтоиде две пары _смежных_ сторон конгруэнтны.

Название _дельтоид_ (по-английски _kite_) происходит от его формы: он похож на kite - воздушного змея. Однако из всех особых четырехугольников, которые мы видели до сих пор, дельтоид - единственный, который также может быть [невыпуклым](gloss:concave) : если он имеет форму стрелы:

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

{.caption} Выпуклый дельтоид

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

{.caption} Невыпуклый дельтоид, похожий на стрелу

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

Вы могли заметить, что все дельтоиды [[симметричны|подобны]] . _{span.reveal(when="blank-0")} [Осью симметрии](gloss:axis-of-symmetry) является [[одна из диагоналей|одна из сторон|высота]] ._

{.reveal.r(when="blank-1")} Диагональ разбивает дельтоид на [два конгруэнтных треугольника](target:triangle1) . Мы знаем, что они конгруэнтны по признаку [SSS](gloss:triangle-sss) : оба треугольника имеют [три конгруэнтные стороны](target:sss) (красная, зеленая и синяя). _{button.next-step} Продолжить_

{.reveal.r(when="next-0")} Из конгруэнтности мы получаем, что [соответственные углы](target:angles) также должны быть конгруэнтными. _{button.next-step} Продолжить_

{.reveal.r(when="next-1")} Это означает, например, что [диагональ](target:d1) является [[биссектрисой|перпендикуляром|медианой]] [двух противоположных углов](target:vAngle). _{button.next-step} Продолжить_

{.reveal.r(when="next-2")} Мы можем пойти еще дальше: если мы нарисуем другую диагональ, мы получим [два меньших треугольника](target:triangle2) . Они также должны быть конгруэнтными по условию [SAS](gloss:triangle-sss) : они имеют конгруэнтные [две стороны и угол между ними](target:sas) . _{button.next-step} Продолжить_

{.reveal(when="next-3")} Это означает, что [угол α](target:alpha) также должен быть конгруэнтен [углу β](target:beta) . Так как эти углы являются [смежными](gloss:supplementary-angles) , то и α, и β должны равняться [[90]]°.

{.reveal(when="blank-3")} Другими словами, диагонали дельтоида всегда [[перпендикулярны|параллельны]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Площадь четырехугольников

При расчете площади треугольников в предыдущем курсе мы использовали метод преобразования его в [[прямоугольник|квадрат|пятиугольник]] Оказывается, мы можем сделать это и для некоторых четырехугольников:

::: tab

#### Параллелограмм _{span.check(when="draw-1 blank-1")}_

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

Слева попробуйте нарисовать прямоугольник, который имеет ту же площадь, что и параллелограмм.

{.reveal(when="draw-1")} Вы видите, что [недостающий треугольник](target:triangle-1) слева имеет площадь [[точно такую же, как|меньше чем|больше]] площадь [части параллелограмма](target:triangle-2) справа? _{span.reveal(when="blank-1")} Следовательно, площадь параллелограмма_

{.text-center.reveal(when="blank-1")} Площадь = __{.i.m-green} основание__ × __{.i.m-yellow} высоту__

{.reveal(when="blank-1" delay=1000)} _Будьте осторожны при измерении высоты параллелограмма: она обычно не совпадает с одной из двух сторон._

:::

::: tab

#### Трапеция _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Напомним, что трапеции являются четырехугольником с одной парой [параллельных сторон](target:bases) . Эти параллельные стороны называются __основаниями__ трапеции.

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

 Как и прежде, попробуйте нарисовать прямоугольник, который имеет ту же площадь, что и эта трапеция. _{span.reveal(when="draw-2")} Вы заметили, как нужно переместить [треугольники](target:triangles-3) слева и справа?_

{.reveal(when="draw-2" delay=2000)} [{.pill.green} Высота](target:t-height) этого прямоугольника - это [[расстояние между|среднее арифметическое|длина]] [параллельными сторонами](target:bases) трапеции.

{.reveal.r(when="blank-2")} [{.pill.yellow} Ширина](target:t-width) прямоугольника - это расстояние между [[серединами|концами]] двух непараллельных сторон трапеции. _{span.reveal(when="blank-3")} Это называется __средняя линия__ трапеции._
_{button.next-step.reveal(when="blank-3")} Продолжить_

{.reveal(when="next-0")} Как и в случае с [треугольниками](gloss:triangle-midsegment) , средняя линия трапеции [[параллельна| перпендикулярна|той же длины, что и]] ее основаниям. Длина средней линии - это средняя арифметическое длин оснований: `(a+c)/2` .

{.reveal(when="blank-4")} Если мы объединим все это, мы получим уравнение для площади трапеции с параллельными сторонами [_a_](target:base-2) и [_c_](target:base-1) и высотой [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Дельтоид _{span.check(when="blank-5")}_

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

В этом дельтоиде [две диагонали](target:diag3) образуют ширину и высоту большого [прямоугольника,](target:rect4) в который вписан дельтоид.

Площадь этого прямоугольника [[в два раза меньше|такая же как|в три раза меньше]] площади дельтоида. _{span.reveal(when="blank-5")} Вы заметили, что каждый из [четырех треугольников](target:inside) , составляющих дельтоид, равен [четырем зазорам](target:outside) снаружи?_

{.reveal(when="blank-5")} Это означает, что площадь воздушного змея с диагоналями [{.i.pill.green} d1](target:d31) и [{.i.pill.yellow} d2](target:d32) это

{.text-center.reveal(when="blank-5")} _Площадь_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} д2](target:d32) .

:::

::: tab

#### Ромб _{span.check(when="blank-6 blank-7")}_

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
      path.red(x="segment(q4,a4)" label="высота" target="height")

      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow

[Ромб](gloss:rhombus) - это четырехугольник с четырьмя конгруэнтными сторонами. Возможно, вы помните, что каждый ромб является [[параллелограммом|прямоугольником|квадратом]] - а также [[дельтоидом| шестиугольником|невыпуклым четырехугольником]] .

{.reveal(when="blank-6 blank-7")} Это означает, что для определения площади ромба мы можем использовать либо уравнение для площади параллелограмма, либо уравнение для площади дельтоида:

{.text-center.reveal(when="blank-6 blank-7")} _Площадь_ = [{.i.pill.blue} основание](target:base) × [{.i.pill.red} высота](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _В разных задачах вам могут быть даны разные части ромба (стороны, высота, диагонали), и вы можете выбрать любое удобное уравнение._

:::
:::

---

## Замощение

> section: tessellations
> id: tessellations

[Многоугольники](gloss:polygon) встречаются в природе повсюду. Они особенно полезны, если мы хотим разбить большую площадь на части, потому что мы можем соединить многоугольники без зазоров или наложений. Такие действия называются [__замощением__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Шестиугольные|Треугольные|Квадратные]] соты

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan змеиная кожа

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Клеточная структура листьев

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Базальтовые колонны в Северной Ирландии

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Кожа ананаса

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Панцирь черепахи

:::

---
> id: tessellations-1

 Люди скопировали эти природные паттерны в искусстве, архитектуре и технике - от древнего Рима до современности. Вот несколько примеров:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Прямоугольная|Квадратная|Гексагональная]] схема замощения

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Теплица в проекте Eden в Англии

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Мозаика в Альгамбре

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Треугольная|Шестиугольная|Прямоугольная]] крыша в Британском музее в Лондоне

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Павильон с шестиугольным замощением в Сиднее

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Регулярное деление плоскости с рептилиями_ , М.К. Эшер

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Здесь вы можете создавать свои собственные замощения, используя обычные многоугольники. Просто перетащите фигуры с боковой панели на холст. Какие формы хорошо соединяются? Есть ли какие-либо фигуры, которые вообще не замащиваются? Попробуйте создать интересные шаблоны!

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

### Замощение из правильных многоугольников

Вы могли заметить, что некоторые [правильные многоугольники](gloss:regular-polygon) (например, [[квадраты|пятиугольники]] ) замащиваются очень легко, в то время как другие (как [[пятиугольники|треугольники|шестиугольники]] ) не получается замостить вообще.

---
> id: tessellation-regular-1

Это связано с размером их [внутренних углов](gloss:internal-angle) , который мы научились вычислять ранее. В каждой [вершине](gloss:polygon-vertex) замощения встречаются внутренние углы нескольких разных многоугольников. Нам нужно, чтобы все эти углы в сумме давали [[360]]°, иначе мы получим зазор, либо наложение.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Треугольники [[можно|нельзя]] замостить,
_{span.reveal(when="blank-0")} потому что 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Квадраты [[можно|нельзя]] замостить,
_{span.reveal(when="blank-1")} потому что 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Пятиугольники [[нельзя|можно]] замостить,
_{span.reveal(when="blank-2")} потому что 360° не кратно 108°._

    //- {.caption}3 × 108° = 324° is too small, but 4 × 108° = 432° is too big.

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Шестиугольники [[можно|нельзя]] замостить,
_{span.reveal(when="blank-3")} потому что 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Вы также можете проверить, что, как и пятиугольники, любой правильный многоугольник с 7 или более сторонами не замащивается. Это означает, что единственные правильные многоугольники, которые можно замостить, - это треугольники, квадраты и шестиугольники!

Конечно, вы можете комбинировать различные виды правильных многоугольников для замащивания, при условии, что их внутренние углы могут дать в сумме 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Квадраты и треугольники#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Квадраты и треугольники#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Шестиугольники и треугольники#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Шестиугольники и треугольники#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Шестиугольники, квадраты и треугольники#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Восьмиугольники и квадраты#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Двенадцатиугольники и треугольники#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Двенадцатиугольники, шестиугольники и квадраты#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Замощение из неправильных многоугольников

Мы также можем попытаться сделать замощения из [неправильных многоугольников](gloss:irregular-polygon) - если мы будем осторожны при их расположении.

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

Оказывается, мы можем замостить не только правильные треугольники, а вообще _любые треугольники_ ! Попробуйте переместить [вершины](target:vertex) на иллюстрации слева.

Сумма внутренних углов в треугольнике составляет [[180]]°. Если мы используем каждый угол [[дважды|один раз|три раза]] в каждой вершине замощения, то мы получим 360°:

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

Что еще более удивительно, _любым четырехугольником_ также можно замостить бесконечную площадь! Сумма внутренних углов четырехугольника равна [[360]]°, поэтому, если мы используем каждый угол [[один раз|дважды|три раза]] в каждой вершине замощения, то мы получим 360°.

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

С пятиугониками немного сложнее. Мы уже видели, что _правильные_ пятиугольники [[не замощаются|замощаются]] , а как насчет неправильных?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Вот три разных примера замощения пятиугольниками. Они не являются _правильными_ , но при этом они все равно являются 5-сторонними многоугольниками.

До настоящего времени математики нашли только 15 различных видов замощения с (выпуклыми) пятиугольниками - самый последний из которых был обнаружен в 2015 году. Никто не знает, есть ли другие, или эти 15 единственные…

---
> id: escher

### Замощения в искусстве

Замощение - это и инструмент, и вдохновение для многих художников, архитекторов и дизайнеров - наиболее известного голландского художника [MC Escher](bio:escher) . Работа Эшера содержит странные, мутирующие существа, узоры и пейзажи:

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

Эти работы часто выглядят забавно и просто, но основные математические принципы здесь те же, что и раньше: углы, повороты и многоугольники. Если математика не верна, замощение не сработает!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Мозаика Пенроуза

Все замощения, которые мы видели до сих пор, имеют одну общую черту: они являются __периодическими__ . Это означает, что они состоят из повторяющегося шаблона, который повторяется снова и снова. Они могут продолжаться вечно во всех направлениях и везде будут выглядеть одинаково.

В 1970-х годах британский математик и физик [Роджер Пенроуз](bio:penrose) открыл _непериодические_ замощения - они все еще продолжаются бесконечно во всех направлениях, но _никогда не_ выглядят одинаково. Это так называемые __мозаики Пенроуза__ , и для создания одного из них нужно всего несколько видов многоугольников:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Двигайте слайдер, чтобы увидеть различные рисунки этого замощения. Заметьте, как тот же самый паттерн повторяется при разных масштабах: малые желтые пятиугольники, синие звезды, розовые ромбы и зеленые "корабли" появляются и при #[strong.blue более крупном масштабе] и даже #[strong.red еще более крупном]. Это #[em самоподобие] можно использовать, чтобы доказать, что эта мозаика Пенроуза непереодична.

---
> id: penrose-1

Пенроуз изучал замощения исключительно для забавы, но оказалось, что внутренняя структура некоторых реальных материалов (таких как алюминий) имеет сходный характер. Мозаики даже использовались на туалетной бумаге, потому что производители заметили, что непериодический узор можно свернуть без выпуклостей.

---

## Многогранники

> section: polyhedra
> id: polyhedra

До сих пор мы рассматривали, что мы можем сделать с многоугольниками в плоском, двумерном мире. [__Многогранник__](gloss:polyhedron) - это трехмерный объект, состоящий из многоугольников. Вот некоторые примеры:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Многогранники не могут содержать изогнутые поверхности - например, сферы и цилиндры не являются многогранниками.

Многоугольники, составляющие многогранник, называются его [__гранями__](gloss:polyhedron-face) . Линии, где соединены две грани, называются [__ребрами__](gloss:polyhedron-edge) , а углы, где встречаются ребра, называются [__вершинами__](gloss:polyhedron-vertex) .

---
> id: euler

Многогранники бывают разных форм и размеров - от простых кубов или пирамид с несколькими гранями, до сложных объектов, таких как звезда сверху, которая имеет 60 треугольных граней. Оказывается, однако, что _все_ многогранники имеют одно важное общее свойство:

::: .theorem

__Формула многогранника Эйлера__
В каждом многограннике число граней ( _F_ ) плюс количество вершин ( _V_ ) на два больше, чем количество ребер ( _E_ ). Другими словами,

{.text-center}`F + V = E + 2`

:::

Например, если многогранник имеет 12 граней и 18 вершин, мы знаем, что он должен иметь [[28]] ребер.

---
> id: euler-1

Это уравнение было открыто известным швейцарским, немецким и русским математиком [Леонардом Эйлером](bio:euler) . Это уравнение верно для любого многогранника, если он не содержит отверстий.

Если вы попробуете исследовать разные многогранники, как те, что указаны выше, вы обнаружите, что формула Эйлера всегда работает. [Позже](/course/graph-theory/planar-graphs) вы узнаете, как доказать это математически.

---

## Развёртки и сечения

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Призмы и пирамиды

> section: prisms-pyramids
> sectionStatus: dev

ДЕЛАТЬ

---

## Масштабирование форм и тел

> section: scaling
> sectionStatus: dev

ДЕЛАТЬ

---

## Платоновы тела

> section: platonic
> id: platonic

В начале этого курса мы определили [правильные многоугольники](gloss:regular-polygon) как особенно «симметричные» многоугольники, где все стороны и углы конгруэнтны. Мы можем сделать что-то подобное для многогранников.

В _правильном многограннике_ все [грани](gloss:polyhedron-face) являются конгруэнтными правильными многоугольниками, и в каждой [вершине](gloss:polyhedron-vertex) встречается одинаковое количество граней. Многогранники с этими двумя свойствами называются [__Платоновыми телами__](gloss:platonic-solid) , названными в честь греческого философа [Платона](bio:plato) .

Так как же выглядят платоновы тела и сколько их там? Чтобы сделать трехмерную фигуру, нам нужно как минимум [[3]] грани, которые встречаются в каждой вершине. Давайте начнем с наиболее простого правильного многоугольника: равностороннего треугольника.

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Если мы создадим многогранник, где три [равносторонних треугольника](gloss:equilateral-triangle) встречаются в каждой вершине, мы получим фигуру слева. Она называется __тетраэдр__ и имеет [[4]] грани. _{.reveal(when="blank-0")} («Тетра» означает «четыре» на греческом языке)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Если в каждой вершине встречаются четыре равносторонних треугольника, мы получаем другое платоновское тело. Он называется __Октаэдр__ и имеет [[8]] граней. _{.reveal(when="blank-0")} («Octa» означает «восемь» на греческом языке. Так же, как «Octagon» означает 8-стороннюю фигуру, «Octahedron» означает 8-гранное тело.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Если в каждой вершине встречаются [[5]] треугольников, мы получим __икосаэдр__ . У него [[20]] граней. _{.reveal(when="blank-1")} («Икоси» означает «двадцать» на греческом языке.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
Если в каждой вершине встречаются [[6]] треугольников, происходит что-то интересное: мы просто получаем [[замощение|четырехугольник|другой икосаэдр]] , _{span.reveal(when="blank-1")} вместо трехмерного многогранника._
:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
Семь или более треугольников в каждой вершине также не создают новых многогранников: вокруг вершины недостаточно места, чтобы поместить такое количество треугольников.
:::

Это означает, что мы нашли [[три]] Платоновых тела, состоящих из треугольников. Давайте перейдем к следующему правильному многоугольнику: квадрату.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Если [[3]] квадрата встречаются в каждой вершине, мы получаем __куб__ . Точно так же как у игральной кости, у куба есть [[6]] граней. _{span.reveal(when="blank-1")}Куб иногда также называют шестигранником, от греческого слова «гекса» - шесть._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Если [[4]] квадрата встречаются в каждой вершине, мы получаем [[замощение|тетраэдр|куб]] . _{span.reveal(when="blank-1")} И, как и раньше, пять или более квадратов тоже не дадут нам многогранник._

:::

---
> id: platonic-dodecahedron

Далее давайте попробуем поработать с пятиугольниками:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Если [[3]] пятиугольника встречаются в каждой вершине, мы получаем __додекаэдр__ . У него [[12]] граней. _{.reveal(when="blank-1")} («Додека» означает «двенадцать» по-гречески.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Как и раньше, четыре и более пятиугольников в одной вершине [[не образуют|могут образовать]] многогранник, потому что не хватает места.

:::

---
> id: platonic-hexagons

Следующий правильный многоугольник - это шестиугольник:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow
Если три шестиугольника встречаются в каждой вершине, мы немедленно получаем [[замощение|многогранник|шестигранник]] _{span.reveal(when="blank-0")} Поскольку места больше нет, кажется, что нет платоновых тел, состоящих из шестиугольников._

:::

---
> id: platonic-final

То же самое происходит и для всех правильных многоугольников с более чем шестью сторонами. Мы больше не получаем никаких трехмерных полигонов.

Это означает, что есть только [[пять]] платоновых тел! Давайте посмотрим на них всех вместе:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

 __Тетраэдр__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

 _{span.dual} [[4]] грани_
_{span.dual} [[4]] вершины_
_{span.dual} [[6]] ребер_

::: column.grow.text-center(width=120)

 __Куб__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

 _{span.dual(target="dual1")} [[6]] гранец_
_{span.dual(target="dual1")} [[8]] вершин_
_{span.dual} [[12]] ребер_

::: column.grow.text-center(width=120)

 __Октаэдр__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

 _{span.dual(target="dual1")} [[8]] граней_
_{span.dual(target="dual1")} [[6]] вершин_
_{span.dual} [[12]] ребер_

::: column.grow.text-center(width=120)

 __Додекаэдр__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

 _{span.dual(target="dual2")} [[12]] граней_
_{span.dual(target="dual2")} 20 вершин_
_{span.dual} 30 ребер_

::: column.grow.text-center(width=120)

 __Икосаэдр__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

 _{span.dual(target="dual2")} [[20]] граней_
_{span.dual(target="dual2")} 12 вершин_
_{span.dual} 30 ребер_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Обратите внимание, как число граней и вершин  [[чередуются|равны]] для [куба и октаэдра](target:dual1) , а также для [додекаэдра и икосаэдра](target:dual2) , в то время как число ребер [[остается неизменным|меняется]] . Эти пары платоновых тел называются [__двойственными многогранниками__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Мы можем превратить многогранник в двойственный ему, «заменив» каждую грань вершиной, а каждую вершину гранью. Эти анимации показывают, как это происходит:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Тетраэдр является двойственным самому себе. Поскольку у него одинаковое количество граней и вершин, их замена ничего не изменит.

---
> id: platonic-elements

[Платон](bio:plato) считал, что вся материя во Вселенной состоит из четырех элементов: воздуха, земли, воды и огня. Он думал, что каждый элемент соответствует одному из Платоновых тел, а пятый будет представлять вселенную в целом. Сегодня мы знаем, что существует более 100 различных элементов, которые состоят из атомов, а не многогранников.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Изображение из книги Иоганна Кеплера “Harmonices Mundi” (1619)

---

### Архимедовы тела

> id: archimedean

Платоновы тела являются особенно важными многогранниками, но существует множество других.

Например, [__архимедовы тела__](gloss:archimedean-solid) будут состоять из [правильных многоугольников](gloss:regular-polygon) , но не обязательно из одних и тех же. Они названы в честь другого греческого математика, [Архимеда Сиракузского](bio:archimedes) , и их 13:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Усеченный тетраэдр__
8 граней, 12 вершин, 18 ребер

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Кубооктаэдр__
14 граней, 12 вершин, 24 ребра

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Усеченный куб__
14 граней, 24 вершины, 36 ребер

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Усеченный восьмигранник__
14 граней, 24 вершины, 36 ребер

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Ромбокубооктаэдр__
26 граней, 24 вершины, 48 ребер

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Усеченный кубоктаэдр__
26 граней, 48 вершин, 72 ребра

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Курносый куб__
38 граней, 24 вершины, 60 ребер

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Икосододекаэдр__
32 грани, 30 вершин, 60 граней

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Усеченный додекаэдр__
32 грани, 60 вершин, 90 граней

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Усеченный икосаэдр__
32 грани, 60 вершин, 90 граней

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Ромбоикосододекаэдр__
62 грани, 60 вершин, 120 граней

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Усеченный икозидодекаэдр__
62 грани, 120 вершин, 180 граней

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Плосконосый додекаэдр__
92 грани, 60 вершин, 150 граней

:::

---
> id: polyhedra-applications

### Применение

Платон ошибался, полагая, что все элементы состоят из платоновых тел. Но обычные многогранники обладают многими особыми свойствами, поэтому многогранники появляются в природе - и мы можем скопировать эти свойства в науке и технике.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Многие __вирусы__ , __бактерии__ и другие мелкие __организмы__ имеют форму [икосаэдров](gloss:icosahedron) . Например, вирусы должны заключать свой генетический материал в оболочку из множества идентичных белковых единиц. Икосаэдр является наиболее эффективным способом сделать это, потому что он состоит из нескольких правильных элементов, но почти имеет форму сферы.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Многие __молекулы__ имеют форму правильных многогранников. Самый известный пример `C_60` который состоит из 60 атомов углерода, расположенных в форме [усеченного икосаэдра](gloss:truncated-icosahedron) .

Он был открыт в 1985 году, когда ученые исследовали межзвездную пыль. Они назвали его «Buckyball» (или «Бакминстерфуллерен») в честь архитектора [Бакминстера Фуллера](bio:fuller) , известного тем, что строил похожие здания.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

У большинства __кристаллов__ атомы расположены в регулярной сетке, состоящей из [тетраэдров](gloss:tetrahedron) , [кубов](gloss:cube) или [октаэдров](gloss:octahedron) . Когда они трескаются или разрушаются, вы можете увидеть эти формы в большем масштабе.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Тетраэдры и октаэдры невероятно жесткие и устойчивые, что делает их очень полезными в __строительстве__ . _Пространственные каркасы_ - это многоугольные конструкции, которые могут поддерживать большие крыши и тяжелые мосты.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Платоновы тела также используются для создания __костей__ . Из-за их симметрии у каждой стороны одинаковая [вероятность](gloss:probability) выпасть - таким образом, кости являются справедливыми.

[Усеченный икосаэдр](gloss:truncated-icosahedron) , пожалуй, самый известный многогранник в мире: это форма футбольного мяча.

:::
