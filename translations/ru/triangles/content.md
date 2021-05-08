# Треугольники и тригонометрия

## Введение

> id: intro
> section: introduction
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow

К началу 19-го века путешественники уже открыли и исследовали большую часть мира. Торговля и транспорт между отдаленными странами процветали, и это создало потребность в __точных картах__ всего земного шара. Сегодня у нас есть спутники, которые могут делать фотографии из космоса, но 200 лет назад создание карт было сложной и трудоемкой задачей. Это было задачей математиками, такими как [Радханатх Сикдар](bio:sikdar), которые работали над __Великим тригонометрическим исследованием__: столетним проектом по измерению всей Индии, включая Гималайский хребет.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} __Теодолит__, геодезический инструмент

:::

Особый интерес представлял поиск самой высокой горы на Земле. Было несколько разных кандидатов, но из-за огромной высоты этих объектов было трудно определить, кто же был самым высоким. Итак, как нам измерить высоту горы?

    figure.mountain: include svg/mountain.svg

{.r} Сегодня мы можем использовать спутники для измерения высоты гор с точностью до нескольких сантиметров - но их не было в те времена, когда Радханатх исследовал Индию. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Альпинисты используют __высотомеры__ для определения своей высоты. Эти устройства используют разницу давления воздуха на разных высотах. Однако это способ требовал чтобы кто-то действительно поднялся на [вершину](->.mountain-top) каждой горы - чрезвычайно трудный подвиг, который не был достигнут до столетия спустя.
_{button.next-step} Продолжить_

{.r.reveal(when="next-1")} Вы также можете попробовать использовать подобные треугольники, как мы это делали в [предыдущем курсе](/course/transformations/similarity). Для применения этого метода потребуется узнать [расстояние](->.mountain-distance) до [основания горы](->.mountain-base): точки на уровне моря, которая находится непосредственно под вершиной. Мы можем сделать это для деревьев или высоких зданий, но для гор эта точка скрыта под сотнями метров горного массива. _{button.next-step} Продолжить_

---

> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Эдмунд Хиллари и Тенцинг Норгей были первыми, кто достиг вершины горы Эверест в 1953 году.

::: column.grow

Но есть более продвинутые геометрические методы, которые [Радханатх](bio:sikdar) использовали для определения самой высокой горы на Земле: теперь она называется __Эверест__. Его измерение отличалось всего несколько метров от сегодняшнего официального значения - 8848 метров. В этом курсе вы узнаете о многих различных особенностях и свойствах треугольников. Это позволит вам измерить высоту горы, но они также имеют фундаментальное значение во многих других областях математики, науки и техники. _{button.next-step} Продолжить_

:::

---

> id: applications

Треугольник - это особенная фигура, потому что это очень __жесткая__ конструкция. Треугольник это единственный многоугольник, который, если его изготовить из деревянных балок, соединенных подвижными шарнирами, будет полностью __жестким__ - в отличие, например, от прямоугольников, которые можно с легкостью трансформировать например в параллелограмм.

{.todo} СКОРО - Анимация

---

> id: applications-1

Это свойство делает треугольники особенно полезными в строительстве, где они могут выдерживать большие нагрузки.

::: column(width=200)

    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} «Ферменный мост» поддерживается треугольными балками

::: column(width=200)

    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Треугольники в опорах линии электропередач

::: column(width=200)

    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Даже велосипеды используют треугольники для устойчивости

:::

---
> id: applications-2
> goals: video

Треугольники также являются самым простым многоугольником с наименьшим количеством сторон. Это делает их особенно подходящими для аппроксимации сложных криволинейных поверхностей. Это применяется не только в строительстве...

::: column(width=200)

    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} «Огурец», небоскреб в Лондоне

::: column(width=200)

    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Башня Банка Китая в Гонконге

::: column(width=200)

    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Двор Британского музея в Лондоне

:::

::: column.grow

... но и в виртуальном мире. В компьютерной графике (например, для фильмов или видеоигр) все поверхности аппроксимируются с использованием «сетки» из крошечных треугольников. Художники и инженеры программного обеспечения должны многое знать о геометрии и тригонометрии, чтобы иметь возможность реалистично перемещать и преобразовывать эти треугольники, рассчитывать их цвет и текстуру.

::: column(width=220)

    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Свойства треугольников

> id: angle-sum
> section: properties

Начнем с простого: треугольник - это фигура с тремя сторонами (которые являются [отрезками](gloss:line-segment)) и тремя вершинами ([точками](gloss:point), в которых стороны соединяются). Он также имеет три [внутренних угла](gloss:internal-angle), и мы уже знаем, что их сумма всегда равна [[180]] °.

---
> id: classification

Мы можем классифицировать треугольники по размеру их углов:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} __Прямоугольный треугольник__
имеет один [прямой угол](gloss:right-angle).

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} __Тупоугольный треугольник__
имеет один [тупой угол](gloss:obtuse-angle).

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} __Остроугольный треугольник__
имеет [[три]] [острых угла](gloss:acute-angle).

:::

---
> id: labels

::: column.grow

Для удобства мы всегда обозначаем треугольники по определенным правилам. Вершины обозначаем заглавными буквами [_A_, _B_ и _C_](target:vertex), стороны строчными буквами [_a_, _b_ и _c_](target:side), а углы греческими буквами [`α`, `β` и `γ`](target:angle) («Альфа», «бета» и «гамма»).

[Сторона, которая лежит __напротив__ вершины _A_](target:X), помечена как _a_, а угол, который [находится рядом с _A_](target:Y) имеет маркировку `α`. Тот же шаблон работает для _B_ / _b_ / `β` и для _C_ / _c_ / `γ`.

::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Медиана

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")

::: column.grow

Здесь вы можете увидеть треугольник, а также [точки, которые лежат посередине](gloss:midpoint) его трех сторон.

[__Медиана__](gloss:triangle-median) треугольника - это отрезок, соединяющий вершину и среднюю точку противоположной стороны. Нарисуйте три медианы этого треугольника. _{span.reveal(when="s0 s1 s2")}Что происходит, когда вы перемещаете вершины треугольника?_

{.reveal(when="move")} Кажется, медианы всегда [[пересекаются в одной точке|имеют одинаковую длину|пересекаются в центре]]. _{span.reveal(when="blank-0")} Эта точка называется [__центроидом__](gloss:centroid)._

{.reveal(when="blank-0")} Медианы всегда делят друг друга в соотношении [2: 1](target:ratio). Для каждой из трех медиан расстояние от вершины до центроида всегда [[в два раза больше|в три раза больше|равно]] расстояния от центроида до основания медианы.

:::

---
> id: center-of-mass

Центроид также является «точкой равновесия» или «центром тяжести» треугольника. Нарисуйте треугольник на картоне, вырежьте его и нарисуйте три медианы. Если вы были точны, то вы сможете уравновесить треугольник на кончике карандаша или повесить его на нити, прикрепленной к центроиду:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Это работает, потому что вес треугольника равномерно распределен вокруг центроида. В физике эту точку часто называют __центром масс__.

---
> id: circumcircle
> goals: s0 s1 s2

### Срединные перпендикуляры и окружность

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow

Напомним, что [срединный перпендикуляр](gloss:perpendicular-bisector) отрезка это перпендикулярная прямая, проходящая через [[центр|концы]] отрезка.

{.reveal(when="blank-0")} Нарисуйте срединный перпендикуляр для всех трех сторон этого треугольника. __{.lgrey} Чтобы нарисовать срединный перпендикуляр, просто щелкните и проведите мышкой от одного конца отрезка до другого.__

{.reveal(when="s0 s1 s2")} Как и прежде, три срединных перпендикуляра встречаются в одной точке. И опять же, эта точка обладает особым свойством.

{.reveal(when="s0 s1 s2")} Любая точка на срединном перпендикуляре расположена на одинаковом расстоянии от концов отрезка, который она делит пополам. Например, любая точка на [синем срединном перпендикуляре](target:b-blue) имеет одинаковое расстояние от точек _A_ и _C_, а любая точка на [красном срединном перпендикуляре](target:b-red) имеет одинаковое расстояние от точек [[A и B|A и C|B и C]].

{.reveal(when="blank-1")} [Точка пересечения](target:center) лежит на всех трех срединных перпендикулярах, поэтому она должна располагаться на одинаковом расстоянии от всех трех [[вершин|сторон]] треугольника.

{.reveal(when="blank-2")} Это означает, что мы можем нарисовать окружность вокруг него, которая идеально проходит через все вершины. Эта окружность называется [__описанной окружностью__](gloss:circumcircle) около треугольника.

:::

---
> id: circumcircle-1

Фактически это означает, что если вам даны три какие-либо точки, вы можете использовать срединные перпендикуляры, чтобы найти окружность, которая проходит через все три точки. (Только если точки не лежат на [[одной прямой|параллельных прямых]]).

---
> id: incircle
> goals: s0 s1 s2

### Биссектриса и окружность

Вы, наверное, уже поняли логику: мы строим какой-то отрезок отрезок три раза для каждой стороны / угла треугольника, а затем выясняем, какими особенными свойствами обладает точка пересечения этих отрезков.

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow

Напомним, что [биссектриса угла](gloss:angle-bisector) делит угол ровно пополам. Постройте биссектрисы трех углов в этом треугольнике. _{.lgrey} Чтобы нарисовать биссектрису угла, вы должны нажать на три точки, которые образуют угол, который вы хотите поделить пополам._

{.r.reveal(when="s0 s1 s2")} Снова все три прямые пересеклись в одной точке. Вы, вероятно, ожидали этого, но важно заметить, что нет очевидной причины, по которой это должно происходить - треугольники - это просто особые формы! _{button.next-step} Продолжить_

{.reveal(when="next-0")} Точки, лежащие на биссектрисе угла, находятся на одинаковом расстоянии от двух прямых, которые образуют угол. Например, любая точка на [синей биссектрисе](target:b-blue) имеет одинаковое расстояние до стороны _a_ и стороны _c_, также любая точка на [красной биссектрисе](target:b-red) имеет одинаковое расстояние до сторон [[a и b|a и c|b и c]].

{.reveal(when="blank-0")} [Точка пересечения](target:center) лежит сразу на всех трех биссектрисах. Следовательно, она должна быть на одинаковом расстоянии от всех трех [[сторон|вершин]] треугольника.

{.reveal(when="blank-1")} Это означает, что мы можем построить окружность, которая лежит внутри треугольника и касается его трех сторон. Эта окружность называется __вписанной__ в треугольник, а центр иногда называется __инцентром__.

:::

---
> id: area

### Площадь и высота

::: column.grow

{.r} Найти площадь [прямоугольника](gloss:rectangle) легко: вы просто умножаете его ширину на высоту. Нахождение площади треугольника менее очевидно. Давайте начнем с того, что «впишем» треугольник в прямоугольник. _{button.next-step} Продолжить_

{.reveal.r(when="next-0")} Ширина прямоугольника - это длина [нижней стороны](target:основание) треугольника (которая называется __основанием__). Высота прямоугольника - это [расстояние](target:высота) от основания до противоположной вершины. _{button.next-step} Продолжить_

{.reveal(when="next-1")} Высота делит треугольник на две части - зеленую и оранжевую. Обратите внимание, что [достроенные треугольники](target:gap) имеют ту же площадь, что и зеленый и оранжевый треугольники. Это означает, что площадь прямоугольника [[в два раза больше|в три раза больше|равна]] площади треугольника.

{.reveal(when="blank-0")} Мы можем легко определить площадь прямоугольника, тогда площадь треугольника должна быть вдвое меньше:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.pill.red} основание](target:base) `×` [{.pill.blue} высота](target:height)

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="height" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Чтобы вычислить площадь треугольника, вы можете принять любую из трех сторон за __основание__, а затем найти соответствующую  __высоту__, которая является отрезком, который [[перпендикулярен|параллелен]] основанию.

{.reveal(when="blank-0")} Каждый треугольник имеет [[три]] [__высоты__](gloss:triangle-altitude).

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow

Как и [медианы](gloss:triangle-median), [срединные перпендикуляры](gloss:perpendicular-bisector) и [биссектрисы](gloss:angle-bisector), три высоты треугольника пересекаются в одной точке. Это называется [__ортоцентром__](target:center) треугольника. В [остроугольных треугольниках](gloss:acute-triangle) ортоцентр [[находится внутри|находится вне|является вершиной]] треугольника.

{.reveal(when="blank-0")} В [тупоугольных треугольниках](gloss:obtuse-triangle), ортоцентр [[находится вне|находится внутри|является вершиной]] треугольника.

{.reveal(when="blank-1")} В [прямоугольных треугольниках](gloss:right-triangle), ортоцентр [[является вершиной|находится внутри|находится вне]] треугольника. А две высоты становятся сторонами треугольника.

:::

---

## Средняя линия и подобие

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")

      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow [__Средняя линия__](gloss:triangle-midsegment) - это отрезок, соединяющий середины двух сторон треугольника. Нарисуйте три средние линии этого треугольника. {.reveal(when="s0 s1 s2")} Как видите, средние линии разбивают треугольник на [четыре маленьких треугольника](target:triangles). {.reveal(when="s0 s1 s2")} Оказывается, что все эти маленькие треугольники [[конгруэнтны|совпадают|разных размеров]] - даже перевернутый по центру. _{span.reveal(when="blank-0")} Они также все [[подобны|конгруэнтны]] [исходному треугольнику](target:large),_ _{span.reveal(when="blank-1")} с коэффициентом подобия `1/2`._ { 957} Это позволяет нам вывести некоторые важные факты о средних линиях треугольников:

::: .theorem.reveal(when="blank-1") __Теорема о средних линиях__ <br> Средняя линия треугольника параллельна его противоположной стороне и равна половине длины этой стороны.

:::
:::

---

{.todo} СКОРО - подробнее о средних линиях треугольника и о том, как они связаны с подобием и пропорциональностью.

---

## Конгруэнтность треугольника

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Теперь, когда мы можем проверить, могут ли три отрезка образовать треугольник, давайте подумаем, как на самом деле __построить__ треугольник со сторонами заданной длины.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow

{.task} Нарисуйте треугольник, стороны которого имеют длины 4 см, 5 см и 6 см.

{.r} В поле слева нарисуйте самую длинную сторону треугольника, которая составляет __6 см__. _{span.reveal(when="draw-base")} Теперь у нас уже есть [две](target:base) из трех вершин треугольника - задача состоит в том, чтобы найти последнюю. _{button.next-step} Продолжить__

{.reveal(when="next-0")} Затем постройте окружность радиуса __4 см__ с центром в одной из вершин, _{span.reveal(when="draw-c1")} и окружность радиуса __5 см__ с центром в другой вершине._

{.reveal(when="draw-c2")} Третья вершина треугольника - это [[пересечение|центр|радиус]] двух окружностей. _{span.reveal(when="blank-0")} Теперь мы можем просто соединить все три вершины, чтобы сформировать треугольник._

{.reveal(when="blank-0" delay="3000")} На самом деле окружности пересекаются [[дважды|трижды|бесконечное количество раз]]: _{span.reveal(when="blank-1")} один раз [в вершине](target:top) и один раз [внизу](target:bottom). Мы можем построить второй треугольник, и полученные два треугольника являются [[конгруэнтными|равносторонними|перпендикулярными]]._

:::

---
> id: congruence

### Признаки конгруэнтности

Возможно ли построить __другой__ треугольник с теми же тремя сторонами?

Мы уже видели два треугольника выше, но оба они были конгруэнтными. Фактически, любые два треугольника, которые имеют одинаковую длину трех сторон, являются конгруэнтными. Это называется [__Признак конгруэнтности SSS__](gloss:triangle-sss)  («Сторона-сторона-сторона» или «Side-Side-Side»).

Теперь у нас есть два разных признака: признак «AA» («Угол-Угол» или «Angle-Angle») означает, что два треугольника [[подобны|конгруэнтны|прямоугольные]], а признак «SSS» означает, что два треугольника [[конгруэнтны|подобны|прямоугольные]]. Есть еще несколько признаков конгруэнтности:

---
> id: congruence-1

::: .theorem
Два треугольника конгруэнтны если выполняется одно из условия ниже:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Три стороны равны.

      div(style="width: 150px")
        .text-center: strong SAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Две стороны и #[strong между ними] угол равны.

      div(style="width: 150px")
        .text-center: strong ASA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Два угла и #[strong между ними] сторона равны.

      div(style="width: 150px")
        .text-center: strong AAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Два угла и одна из сторон, не лежащая между этими углами.
:::

---
> id: cpoct

Чтобы проверить, конгруэнтны ли два треугольника, вам просто нужно проверить одно из условий, описанных выше.

Как только вы поняли, что два треугольника являются конгруэнтными, то вы точно можете утверждать, что __все__ их соответствующие сторон и углы конгруэнтны. Интересно отметить, что все условия состоят из [[трех]] разных элементов (либо стороны, либо углы)!

---
> id: contruction

### Построение треугольников

В начале этого раздела мы увидели, как можно построить треугольник, если мы знаем три его стороны. Точно так же, есть способы построить треугольники для каждого из условий конгруэнтности.

::: tab

#### SAS

::: column(width=300)

{.todo} _СКОРО - Анимация_

::: column.grow

{.task} Постройте треугольник со сторонами 5 см и 3 см и углом 40° между ними.

Как и прежде, мы начнем с построения одной из сторон треугольника.

Затем используем транспортир, чтобы отмерить угол 40° от одной из двух вершин. Под этим углом мы проводим вторую сторону треугольника. Мы знаем, что эта сторона должна быть длиной 3 см, поэтому отмерим это расстояние линейкой, и отметим третью вершину треугольника.

Наконец, мы можем соединить последние две вершины, чтобы завершить треугольник.

:::

Конечно, мы могли бы сначала нарисовать сторону 3 см или выбрать другую вершину, чтобы отмерить угол 40°. Однако во всех этих случаях полученные треугольники будут конгруэнтны.

::: tab

#### ASA

::: column(width=300)

{.todo} _СКОРО - Анимация_

::: column.grow

{.task} Нарисуйте треугольник с углами 70° и 50° и стороной 5 см между ними.

Начнем с построения первой стороны, используя линейку для построения отрезка длиной 5 см.

После используем транспортир и отмерим угол 70° от одного из концов отрезка и угол 50 ° от другой конечной точки. (Какой из концов не имеет значения - треугольники будут конгруэнтны.)

Пересечение построенных лучей дает третью вершину и завершает построение треугольника.

:::

::: tab

#### AAS

::: column(width=300)

{.todo} _СКОРО - Анимация_

::: column.grow

{.task} Нарисуйте треугольник с углами 40° и 50° и стороной длиной 5 см, которая не лежит между ними.

Опять же, мы начнем с построения первой стороны треугольника длиной 5 см.

И снова мы будем использовать транспортир, чтобы отмерить угол 40° от одной из конечных точек, и построим вторую сторону треугольника.

Тем не менее, мы еще не знаем, где на этой стороне поставить точку - вершину треугольника. Давайте выберем любую точку на этой прямой, представим, что это третья вершина треугольника и отмерим от нее угол в 50°.

Как видите, это не работает: третья сторона еще не проходит через вершину A. Чтобы это исправить, нам просто нужно переместить ее: построим параллельную линию, проходящую через A. (Мы изучили как построить параллельные линии в [предыдущем курсе](/course/euclidean-geometry/geometric-construction).)

Теперь два угла вверху - это соответственные углы, поэтому они должны быть одинаковыми и равны 50°. Мы можем стереть первую прямую, чтобы получить достроенный треугольник по признаку AAS.

:::

::: tab

#### SSA

Конструкция SSA немного отличается. Возможно, вы заметили, что «SSA» не было в списке признаков конгруэнтности выше, поэтому условия SSA недостаточно для доказательства конгруэнтности двух треугольников. Мы покажем, почему:

::: column(width=300)

{.todo} _СКОРО - Анимация_

::: column.grow

{.task} Нарисуйте треугольник со сторонами 4 см и 5 см и углом 50°, который располагается не между ними.

Начнем с построения первой стороны треугольника длиной 5 см.

Далее, отмерим угол 50° от одной из концов отрезка и построим вторую сторону треугольника. Тем не менее, мы еще не знаем, где поставить вершину на этой прямой.

Третья сторона должна быть длиной 4 см. Используя транспортир, мы можем построить окружность радиусом 4 см с центром в другой конечной точке. Третья вершина треугольника получится в пересечении окружности и второй стороны.

Однако мы получаем две точки пересечения! Эти два треугольника явно не конгруэнтны. Это означает, что есть два различных треугольника со сторонами 4 см и 5 см и углом 50°. Условия SSA недостаточно, чтобы подтвердить, что два треугольника конгруэнтны.

:::
:::

---

## Теорема Пифагора

> id: pythagoras
> section: pythagoras

Мы дошли до важного момента в геометрии - возможности сформулировать и понять одну из самых известных [теорем](gloss:theorem) во всей математике: __Теорему Пифагора__. Он назван в честь древнегреческого математика [Пифагора Самосского](bio:pythagoras).

::: .theorem
::: column.grow

__Теорема Пифагора__
В любом прямоугольном треугольнике квадрат длины [__гипотенузы__](target:hypot) (сторона, противоположная прямому углу) равен сумме квадратов двух других сторон. Другими словами,

{.text-center} _{span.circled.green} `a^2`_ + _{span.circled.blue} `b^2`_ = _{span.circled.yellow} `c^2`_

__Обратное также верно: если три стороны в треугольнике удовлетворяют условию `a^2 + b^2 = c^2`, то этот треугольник [[прямоугольный|остроугольный|тупоугольный]].__

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow

Прямые углы повсюду, и поэтому теорема Пифагора так полезна. На рисунке вы можете увидеть лестницу __{.m-red} длиной 6 м__, прислоненную к стене. Нижняя часть лестницы находится на расстоянии __{.m-blue} 1 м__ от стены. Как высоко вы сможете подняться по этой лестнице? Обратите внимание, что мы получили прямоугольный треугольник, образованный лестницей, стеной и землей. Используя теорему Пифагора, мы получаем

    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92м</mn></td>

:::

{.reveal(when="blank-0")} Всякий раз, когда у вас есть прямоугольный треугольник, и вы знаете две его стороны, теорема Пифагора поможет вам найти третью.

---
> id: pythagoras-proof

### Доказательство теоремы

Теорема Пифагора была известна древним вавилонянам, месопотамцам, индийцам и китайцам, но Пифагор, возможно, был первым, кто нашел математическое доказательство. На самом деле существует много разных способов доказать теорему Пифагора. Здесь вы видите три разных примера, каждый из которых использует свою стратегию:

::: tab.proof-1

#### Перестановка _{span.check(when="blank-0 blank-1")}_

::: column.grow

Посмотрите на фигуру справа. Квадрат имеет длину стороны _a_ + _b_, и он содержит [четыре прямоугольных треугольника](target:triangle), а также [меньший квадрат](target:square), который имеет площадь [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Теперь давайте переставим треугольники. В результате большой квадрат все еще содержит четыре прямоугольных треугольника, но теперь вместо одного квадрата мы имеем два квадрата с площадями [[<msup><mi>a</mi><mn>2</mn></msup> и <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Приравняв площадь розовой площади _{span.hover-target}до_ и _{span.hover-target}после_ перестановки, мы видим, что

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} Это оригинальное доказательство, которое использовал [Пифагор](bio:pythagoras). _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Алгебра _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow

Здесь мы имеем ту же фигуру, что и раньше, только в этот раз мы будем использовать другой способ доказательства теоремы.

Длина стороны большого квадрата равна `a + b` и его площадь равна
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} Квадрат состоит из [четырех треугольников](target:triangle), каждый из которых имеет площадь [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]], и [один квадрат](target:square) с площадью [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} Если мы соединим всю эту информацию, мы получим

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} И, снова, мы получим теорему Пифагора. _{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Подобные треугольники _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow

{.r} Здесь вы можете увидеть произвольный прямоугольный треугольник. Если мы построим одну из высот этого треугольника, она разделит большой треугольник на два поменьше.
Она также делит гипотенузу _c_ на [две маленьких отрезка](target:hypotenuse), которые мы назовем [{.step-target.i.pill.blue}x](target:x) и
[{.step-target.i.pill.green}y](target:y).
_{span.next-step} Продолжить_

{.r.reveal(when="next-0")} Давайте рассмотрим два меньших треугольника отдельно, теперь проще заметить, что эти треугольники подобны…
_{span.next-step} Прододжить_

{.reveal(when="next-1")} Оба меньших треугольника [имеют равный угол](target:angle) с первоначальным треугольником. Также все три треугольника имеют [прямой угол](target:right).
По признаку подобия AA, все три треугольника должны быть  [[подобны|конгруэнтны|тупоугольные]].

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Теперь мы можем использовать уравнения, которые мы уже знаем о подобных треугольниках:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Продолжить_

{.reveal(when="next-2")} Мы помним, что _c_ = [{.step-target.i.pill.blue} x](target:x) + [{.step-target.i.pill.green} y](target:y). Поэтому

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Мы еще раз доказали теорему Пифагора! _{span.qed}_

:::

---
> id: pythagoras-2

О жизни Пифагора многое неизвестно, и ни одна оригинальная копия его работы не сохранилась. Он основал религиозный культ __пифагорейцев__, который практиковал своего рода «поклонение числам». Они считали, что все числа имеют свой собственный характер, и имели множество странных обычаев.

::: column.grow

Пифагорейцам приписывают множество математических открытий, включая поиск первого [иррационального числа](gloss:irrational-numbers) `sqrt(2)`. Иррациональные числа не могут быть выражены в виде обыкновенной дроби - концепция, которую пифагорейцы считали глубоко тревожной и (безуспешно) пытались скрыть!

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} Федор Бронников: «Пифагорейцы празднуют восход»

:::

---

### Расчет расстояний

Одним из наиболее важных применений теоремы Пифагора является расчет расстояний.

::: column.grow

{.r} Справа вы видите две точки в системе координат. Мы могли бы измерить их расстояние с помощью линейки, но это будет не совсем точно. Вместо этого давайте попробуем использовать теорему Пифагора. _{span.next-step} Продолжить_

{.reveal(when="next-0")} Мы можем легко сосчитать [горизонтальное расстояние](target:dx) вдоль оси _x_ и [вертикальное расстояние](target:dy) вдоль оси _y_. Если мы нарисуем эти две линии, мы получим [прямоугольный треугольник](target:triangle).

{.reveal(when="next-0")} Используя теорему Пифагора,

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${b.y-a.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)**2+(a.y-b.y)**2}</mn></msqrt><mo>=</mo><mn class="var">${round(distance(a,b),4)}</mn></td>

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---

> id: distance-formula-1

Этот метод работает для __любых__ двух точек:

::: .theorem

__Формула расстояния__
Если вам даны две точки с координатами (`x_1`, `y_1`) и (`x_2`, `y_2`), расстояние между ними составляет

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`

:::

---
> id: pythagorean-triples

### Пифагоровы Тройки

Перемещая [вершины треугольника](->#tri-move) на предыдущем рисунке, вы, возможно, заметили, что в большинстве случаев длина гипотенузы _d_ в конечном итоге была [[иррациональным|целым|отрицательным]] числом.

_{span.reveal(when="blank-0")} Однако есть несколько примеров прямоугольных треугольников, где длины всех трех сторон оказываются целыми числами._

---
> id: pythagorean-triples-1

::: column.grow

Один известный пример - треугольник со сторонами 3, 4 и 5. Так как `3^2 + 4^2 = 5^2`, то любой треугольник со сторонами длины 3, 4 и 5 должен быть прямоугольным. Древние египтяне не знали о теореме Пифагора, но они знали о треугольнике 3-4-5. При строительстве пирамид они использовали веревки с узлами длиной 3, 4 и 5, чтобы строить идеальные прямые углы.

::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Три таких числа называются [__Пифагоровыми тройками__](gloss:pythagorean-triple). Числа (3, 4, 5) являются одним из примеров пифагоровых троек. Если мы умножим каждое число на 2, мы получим еще одну пифагорову тройку: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Мы можем рассматривать эти тройки как точки сетки в системах координат. Для пифагоровых троек расстояние от начала координат до точки сетки должно быть целым числом. Используя приведенную ниже систему координат, можете ли вы найти другие пифагорейские тройки?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Вы заметили какие-то закономерности в расположении этих точек?

---

## Равнобедренные и равносторонние треугольники

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

TODO

---
> id: equilateral

### Равносторонние треугольники

Мы говорим, что треугольник [__равносторонний__](todo:equilateral-triangle), если все его стороны имеют одинаковую длину. Вы [уже видели](/course/euclidean-geometry/geometric-construction), как построить равносторонний треугольник, используя линейку и циркуль.

---

## Тригонометрия

> id: trigonometry
> section: trigonometry

До сих пор мы исследовали взаимосвязи между __углами__ треугольника (например, то, что они всегда дают в сумме 180°) и взаимосвязи между __сторонами__ треугольника (например, в теореме Пифагора). Но пока мы не рассмотрели ничего, что __связывало__ бы между собой углы и стороны. Например, если я знаю три стороны треугольника, как мне найти его углы - без построения треугольника и измерения углов с помощью транспортира? Это именно тот вопрос, где нам необходима __Тригонометрия__!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow

Представьте, что у нас есть прямоугольный треугольник, и мы также знаем один из двух острых углов, __{.m-red} α__. Мы уже знаем, что самая длинная сторона называется [__{.m-yellow} гипотенуза__](target:hyp). Две другие стороны обычно называют [__{.m-green} прилежащим катетом__](target:adj) (который находится рядом с углом __{.m-red} α__) и [__{.m-blue}противолежащим катетом__](target:opp) (который лежит напротив угла __{.m-red} α__).

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Гипотенуза" target="hyp")
      path.blue(x="segment(b,c)" label="Противолежащий" target="opp")
      path.green(x="segment(a,c)" label="Прилежащий" target="adj")

:::

Существует много разных треугольников с углами __{.m-red} α__ и 90°. Из условия [AA](gloss:triangle-aa) мы знаем, что такие треугольники [[подобны|конгруэнтны]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Поскольку все эти треугольники подобны, мы знаем, что длины их стороны пропорциональны. Например, для всех этих треугольников одинаковы следующие соотношения:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Противолежащий катет
        mrow: mtext.m-yellow.b Гипотенуза
      span.space
      mfrac
        mrow: mtext.m-green.b Прилежащий катет
        mrow: mtext.m-yellow.b Гипотенуза
      span.space
      mfrac
        mrow: mtext.m-blue.b Противолежащий катет
        mrow: mtext.m-green.b Прилежащий катет

Давайте попробуем подвести итоги: мы выбрали определенное значение для __{.m-red} α__ и получили множество подобных прямоугольных треугольников. Все эти треугольники имеют одинаковые соотношения сторон. Поскольку __{.m-red} α__ была нашей единственной переменной, должна быть некоторая связь между __{.m-red} α__ и этими соотношениями. Эти отношения являются основными __тригонометрическими функциями__ - и их три:

::: .theorem

Тригонометрические функции - это зависимость между углами и соотношениями сторон в прямоугольном треугольнике. У каждого из них есть имя и трехбуквенное сокращение:

::: column.grow

    ul
      li.display
        strong Sine:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Противолежащий катет
          mrow: mtext.m-yellow.b Гипотенуза
      li.display
        strong Cosine:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Прилежащий катет
          mrow: mtext.m-yellow.b Гипотенуза
      li.display
        strong Tangent:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Противолежащий катет
          mrow: mtext.m-green.b Прилежащий катет

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Гипотенуза")
      path.blue(x="segment(b,c)" label="Противолежащий")
      path.green(x="segment(a,c)" label="Прилежащий")

:::
:::

---
> id: trig-functions-1

{.todo} _СКОРО - Подробнее о тригонометрии_

---
> id: inverse-trig

### Обратные тригонометрические функции

{.todo} _СКОРО - Обратные функции_

---

## Теоремы синусов и косинусов

> section: sine-cosine-rule
> id: sine-cosine-rule

Пока все, что вы узнали о тригонометрии, работает только в прямоугольные треугольники. Но большинство треугольников не прямоугольные, и есть два важные теоремы, которые работают для всех треугольников

::: column.grow
::: .theorem

__Теорема синусов__
В треугольнике со сторонами _a_, _b_ и _c_ и углами _A_, _B_ и _C_,

{.text-center} `(sin(A))/a = (sin(B))/b = (sin(C))/c`

:::
::: column.grow
::: .theorem

__Теорема косинусов__
В треугольнике со сторонами _a_, _b_ и _c_ и углами _A_, _B_ и _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`
`b^2 = c^2 + a^2 - 2ca cos(B)`
`a^2 = b^2 + c^2 - 2bc cos(A)`

:::
:::

---

> id: trigonometry-4

{.todo} _СКОРО - Доказательства, примеры и приложения_

---
> id: mountains

### Великое тригонометрическое исследование

Вы все еще помните квест найти самую высокую гору на Земле из [введения](/course/triangles/introduction)? С тригонометрией у нас наконец появились инструменты, чтобы сделать это!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=760 height=250): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="высота")

Геодезисты в Индии измерили угол между горизонтом и вершиной горы с [двух разных позиций](target:points), [{.pill.yellow} на расстоянии 5 км](target:base). Результаты были [{.pill.red} 23°](target:ang) и [{.pill.blue} 29°](target:ang1).

Поскольку [{.pill.green} угол α](target:a) это [смежный угол](gloss:supplementary-angles), мы знаем, что он должен быть [[151]]°. _{span.reveal(when="blank-0")} Теперь мы можем использовать сумму внутренних углов треугольника, чтобы определить, что [{.pill} угол β](target:b) равен [[6]]°._

{.reveal(when="blank-1")} Теперь мы знаем [все три угла](target:angles) треугольника, а также [{.pill.yellow} одну из сторон](target:base). Этого достаточно, чтобы использовать [[теорему синусов|теорему косинусов]], чтобы найти расстояние [_d_](target:d):

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)} Есть один последний шаг: давайте посмотрим на [большой прямоугольный треугольник](target:right). Мы уже знаем длину гипотенузы, но что нам действительно нужно, это [[противолежащий катет|прилежащий катет]]. _{span.reveal(when="blank-5")} Мы можем найти его, используя определение синуса:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[высота|23]]
            mrow.md [[23|высота]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext высота
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="height") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} И это очень близко к реальной высоте Эвереста, самой высокой горы на Земле: 8,848m.

:::

---

> id: mountains-1

Эти вычисления значительно упрощают сложнейшую работу, проделанную математиками и географами, работающими над Великим тригонометрическим исследованием. Они начинали с уровня моря на пляже, измеряли тысячи километров расстояния, строили геодезические башни по всей стране и даже учитывали кривизну Земли.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
