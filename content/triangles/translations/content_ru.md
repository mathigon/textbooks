# Треугольники и тригонометрия

## Введение

> id: intro
> section: introduction

::: column.grow

К началу 19-го века исследователи открыли большую часть мира. Торговля и транспорт процветали между отдаленными странами, и это создало потребность в _точных картах_ всей планеты. Сегодня у нас есть спутники, которые могут делать фотографии сверху, но 200 лет назад создание карт было сложной и трудоемкой задачей. Это было сделано математиками, такими как [Радханатх Сикдар](bio:sikdar), которые работали над _Великим тригонометрическим исследованием_: столетним проектом по измерению всей Индии, включая Гималайский хребет.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} _теодолит_, геодезический инструмент

:::

Особый интерес представлял поиск самой высокой горы на Земле. Было несколько разных кандидатов, но из сотен километров было трудно сказать, кто из них был самым высоким. Итак, как вы измеряете высоту горы?

    figure.mountain: include svg/mountain.svg

{.r} Сегодня мы можем использовать спутники для измерения высоты гор с точностью до нескольких сантиметров - но их не было, когда Радханатх исследовал Индию. _{button.next-step} Продолжить_

{.r.reveal(when="next-0")} Альпинисты используют _высотомеры_ для определения своей высоты. Эти устройства используют разницу давления воздуха на разных высотах. Однако это потребовало бы, чтобы кто-то действительно поднялся на вершину [каждой горы](->.mountain-top) - чрезвычайно трудный подвиг, который не был достигнут до столетия спустя. _{button.next-step} Продолжить_ {.r.reveal(when="next-1")} Вы также можете попробовать использовать похожие треугольники, как мы это делали в [предыдущем курсе](/course/transformations/similarity). Этот метод требует знания расстояния [<<<<](->.mountain-distance) до [основания горы](->.mountain-base): точки на уровне моря, которая находится непосредственно под вершиной. Мы можем сделать это для деревьев или высоких зданий, но для гор эта точка скрыта под сотнями метров скал. _{button.next-step} Продолжить_

---

> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Эдмунд Хиллари и Тенцинг Норгей были первыми, кто достиг вершины горы Эверест в 1953 году.

::: column.grow

Но есть более продвинутые геометрические методы, которые [Радханатх](bio:sikdar) использовали для открытия самой высокой горы на Земле: теперь она называется _гора Эверест_. Его измерение составляет всего несколько метров от сегодняшней официальной высоты 8848 метров. В этом курсе вы узнаете о многих различных особенностях и свойствах треугольников. Это позволит вам измерить высоту гор, но они также имеют фундаментальное значение во многих других областях математики, науки и техники. _{button.next-step} Продолжить_

:::

---

> id: applications

Треугольники особенные, потому что они особенно _сильные_. Они являются единственным полигоном, который, будучи изготовленным из деревянных балок и петель, будет полностью _жестким_ - в отличие, например, от прямоугольников, которые вы можете легко переместить. {.todo} СКОРО - Анимация

---

> id: applications-1

Это свойство делает треугольники особенно полезными в строительстве, где они могут нести большой вес.

::: column(width=200)

    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} «Ферменный мост» поддерживается треугольными стержнями

::: column(width=200)

    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Треугольники в высоковольтных опорах электричества

::: column(width=200)

    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Даже велосипеды используют треугольники для устойчивости ,

:::

---
> id: applications-2
> goals: video

Треугольники также являются самым простым многоугольником с наименьшим количеством сторон. Это делает их особенно подходящими для аппроксимации сложных криволинейных поверхностей. Это делается в физическом строительстве…

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

... но и в виртуальных мирах. В компьютерной графике (например, для фильмов или видеоигр) все поверхности аппроксимируются с использованием «сетки» из крошечных треугольников. Художники и инженеры программного обеспечения должны знать о геометрии и тригонометрии, чтобы иметь возможность реалистично перемещать и преобразовывать эти треугольники и рассчитывать их цвет и текстуру.

::: column(width=220)

    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="images/tiger.mp4" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Свойства треугольников

> id: angle-sum
> section: properties

Начнем с простого: треугольник - это замкнутая фигура с тремя сторонами (которые являются [отрезками линии](gloss:line-segment)) и три вершины ([точек](gloss:point), где встречаются стороны). Он также имеет три [внутренних угла](gloss:internal-angle), и мы уже знаем, что их сумма всегда равна [[180]] °.

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

{.caption} A __прямоугольный треугольник__  
имеет один [прямой угол](gloss:right-angle).

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} __тупой треугольник__  
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

{.caption} __Острый треугольник__  
имеет [[три]] [острых угла](gloss:acute-angle).

:::

---
> id: labels

::: column.grow

Для удобства мы всегда помечаем треугольники одинаково. Вершины обозначены заглавными буквами [_A_, _B_ и _C_](target:vertex), стороны обозначены строчными буквами [_a_, _b_ и _c_](target:side), а углы обозначены греческими буквами [`α`, `β` и `γ`](target:angle) ( «Альфа», «бета» и «гамма»).

Сторона [>>>>, которая лежит _напротив_ вершины _A_](target:X), помечена _a_, а угол [находится рядом с _A_](target:Y) имеет маркировку `α`. Тот же шаблон работает для _B_ / _b_ / `β` и для _C_ / _c_ / `γ`.

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

Здесь вы можете увидеть треугольник, а также [средние точки](gloss:midpoint) его трех сторон.

[__медиана__](gloss:triangle-median) треугольника - это отрезок, соединяющий вершину и среднюю точку противоположной стороны. Нарисуйте три медианы этого треугольника. _{span.reveal(when="s0 s1 s2")} Что происходит, когда вы перемещаете вершины треугольника?_

{.reveal(when="move")} Кажется, медианы всегда [[пересекаются в одной точке|have the same length|divide each other in the middle]]. _{span.reveal(when="blank-0")} Эта точка называется [__центроидом__](gloss:centroid)._

{.reveal(when="blank-0")} Медианы всегда делят друг друга в соотношении [2: 1](target:ratio). Для каждой из трех медиан расстояние от вершины до центроида всегда [[в два раза|three times|exactly]] равно расстоянию от центроида до средней точки.

:::

---
> id: center-of-mass

Центроид также является «точкой равновесия» треугольника. Нарисуйте треугольник на картоне, вырежьте его и найдите три медианы. Если вы были точны, теперь вы можете уравновесить треугольник на кончике карандаша или повесить его ровно на уровне нити, прикрепленной к центроиду:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Это работает, потому что вес треугольника равномерно распределен вокруг центроида. В физике эту точку часто называют __центром масс__.

---
> id: circumcircle
> goals: s0 s1 s2

### перпендикулярные биссектрисы и окружность

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

Напомним, что [перпендикулярная биссектриса](gloss:perpendicular-bisector) линии является перпендикулярной линией, проходящей через ее [[среднюю точку|endpoints]].

{.reveal(when="blank-0")} Нарисуйте перпендикулярную биссектрису всех трех сторон этого треугольника. _{.lgrey} Чтобы нарисовать перпендикулярную биссектрису стороны треугольника, просто щелкните и перетащите от одной из ее конечных точек к другой._

{.reveal(when="s0 s1 s2")} Как и прежде, три перпендикулярных биссектрисы встречаются в одной точке. И опять же, эта точка обладает особым свойством.

{.reveal(when="s0 s1 s2")} Любая точка на перпендикулярном биссектрисе имеет одинаковое расстояние от двух конечных точек линий, которые она делит пополам. Например, любая точка на [синем биссектрисе](target:b-blue) имеет одинаковое расстояние от точек _A_ и _C_, а любая точка на [красном биссектрисе](target:b-red) имеет одинаковое расстояние от точек [[A и B|A and C|B and C]].

{.reveal(when="blank-1")} Точка пересечения [<<<<](target:center) лежит на всех трех перпендикулярных биссектрисе, поэтому она должна иметь одинаковое расстояние от всех трех [[вершин|sides]] треугольника.

{.reveal(when="blank-2")} Это означает, что мы можем нарисовать круг вокруг него, который идеально касается всех вершин. Этот круг называется [__окружностью__](gloss:circumcircle) треугольника, а центр называется __окружностью__.

:::

---
> id: circumcircle-1

Фактически это означает, что если вам даны три какие-либо точки, вы можете использовать круговой центр, чтобы найти круг, который проходит через все три из них. (Если точки не являются [[коллинеарными|parallel]], в этом случае они все лежат на прямой линии.)

---
> id: incircle
> goals: s0 s1 s2

### Угловые делители и окружности

Вы, наверное, уже поняли это: мы выбираем определенную конструкцию, делаем это три раза для всех сторон / углов треугольников, а затем выясняем, что особенного в их пересечении.

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

Напомним, что биссектриса угла [<<<<](gloss:angle-bisector) делит угол точно посередине. Нарисуйте угол биссектрисы трех углов в этом треугольнике. _{.lgrey} Чтобы нарисовать биссектрису угла, вы должны нажать на три точки, которые образуют угол, который вы хотите разделить пополам._

{.r.reveal(when="s0 s1 s2")} Еще раз, все три линии пересекаются в одной точке. Вы, вероятно, ожидали чего-то подобного, но важно заметить, что нет очевидной причины, по которой это должно происходить - треугольники - это просто особые формы! _{button.next-step} Продолжить_

{.reveal(when="next-0")} Точки, лежащие на биссектрисе угла, имеют одинаковое расстояние от двух линий, образующих угол. Например, любая точка на [синем биссектрисе](target:b-blue) имеет одинаковое расстояние от стороны _a_ и стороны _c_, а также от любой точки на [красном биссектрисе](target:b-red) имеет одинаковое расстояние от сторон [[a и b|a and c|b and c]].

{.reveal(when="blank-0")} [точка пересечения](target:center) лежит на всех трех биссектрисе. Следовательно, он должен иметь одинаковое расстояние от всех трех [[сторон|vertices]] треугольника.

{.reveal(when="blank-1")} Это означает, что мы можем нарисовать круг вокруг него, который лежит внутри треугольника и просто касается его трех сторон. Этот круг называется __вкраплением__ треугольника, а центр называется __стимулятором__.

:::

---
> id: area

### Площадь и высота

::: column.grow

{.r} Найти область прямоугольника [<<<<](gloss:rectangle) легко: вы просто умножаете его ширину на высоту. Нахождение площади треугольника немного менее очевидно. Давайте начнем с «захвата» треугольника внутри прямоугольника. _{button.next-step} Продолжить_

{.reveal.r(when="next-0")} Ширина прямоугольника - это длина нижней стороны [<<<<](target:base) треугольника (который называется __основанием__). Высота прямоугольника - это [перпендикулярное расстояние](target:height) от основания до противоположной вершины. _{button.next-step} Продолжить_

{.reveal(when="next-1")} Высота делит треугольник на две части. Обратите внимание, что [два промежутка в прямоугольнике](target:gap) точно так же велики, как две части треугольника. Это означает, что прямоугольник [[в два раза больше|three times as|exactly as]] размера треугольника.

{.reveal(when="blank-0")} Мы можем легко определить площадь прямоугольника, поэтому площадь треугольника должна быть вдвое меньше: {.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} base](target:base) `×` [{.step-target.pill.blue} высота](target:height)

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

Чтобы вычислить площадь треугольника, вы можете выбрать любую из трех сторон как __основание__, а затем найти соответствующий { 370} высота__, которая является линией, которая [[перпендикулярна|parallel]] к основанию и проходит через противоположную вершину.

{.reveal(when="blank-0")} В треугольниках эти _высоты_ часто называют [__высотами__](gloss:triangle-altitude). Каждый треугольник имеет [[три]] высоты.

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

Как и [медианы](gloss:triangle-median), [перпендикулярные биссектрисы](gloss:perpendicular-bisector) и [биссектрисы](gloss:angle-bisector), три высоты треугольника пересекаются в одной точке. Это называется [__ортоцентром__](target:center) треугольника. В [острых треугольниках](gloss:acute-triangle) ортоцентр [[находится внутри|lies outside|is a vertex of]] треугольника.

{.reveal(when="blank-0")} В [тупых треугольниках](gloss:obtuse-triangle), ортоцентр [[находится вне|lies inside|is a vertex of]] треугольника.

{.reveal(when="blank-1")} В [прямоугольных треугольниках](gloss:right-triangle), ортоцентр [[является вершиной|lies inside|lies outside]] треугольника. Две из высот на самом деле просто стороны треугольника.

:::

---

## Мидсегменты и сходство

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

::: column.grow Мидсегмент [__<<<<__](gloss:triangle-midsegment) - это отрезок, соединяющий средние точки двух сторон треугольник Нарисуйте три средних сегмента этого треугольника. {.reveal(when="s0 s1 s2")} Как видите, средние сегменты разбивают треугольник на [четыре меньших треугольника](target:triangles). {.reveal(when="s0 s1 s2")} Оказывается, что все эти меньшие треугольники [[конгруэнтны|overlapping|different sizes]] - даже перевернутый в середине. _{span.reveal(when="blank-0")} Они также все [[похожи|congruent]] на [исходный треугольник](target:large),_ _{span.reveal(when="blank-1")} с масштабным коэффициентом `1/2`._ { 957} Это позволяет нам вывести некоторые важные факты о средних сегментах треугольников:

::: .theorem.reveal(when="blank-1") __Теорема о средних сегментах__ <br> Средний сегмент треугольника параллелен его противоположной стороне и ровно на половине длины этой стороны.

:::
:::

---

{.todo} СКОРО - подробнее о средних сегментах треугольника и о том, как они связаны со сходством и пропорциональностью.

---

## Конгруэнтность треугольника

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Теперь, когда мы можем проверить, могут ли три стороны образовать треугольник, давайте подумаем, как на самом деле _построить_ треугольник с этими сторонами.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow

{.task} Нарисуйте треугольник, стороны которого имеют длину 4 см, 5 см и 6 см.

{.r} В поле длины нарисуйте самую длинную сторону треугольника, которая составляет __6 см__. _{span.reveal(when="draw-base")} Теперь у нас уже есть [две](target:base) из трех вершин треугольника - задача состоит в том, чтобы найти последнюю. _{button.next-step} Продолжить__

{.reveal(when="next-0")} Затем нарисуйте круг радиуса __4 см__ вокруг одной из вершин, _{span.reveal(when="draw-c1")} и круг радиуса __5 см__ вокруг другого._

{.reveal(when="draw-c2")} Третья вершина треугольника - это [[пересечение|center|radius]] двух окружностей. _{span.reveal(when="blank-0")} Теперь мы можем просто соединить их, чтобы сформировать треугольник._

{.reveal(when="blank-0" delay="3000")} Круги фактически пересекаются [[дважды|three times|infinitely many times]]: _{span.reveal(when="blank-1")} один раз [на вершине {456 } и один раз [внизу](target:bottom). Мы можем выбрать любое из этих пересечений, и полученные два треугольника являются [[конгруэнтными|equilateral|perpendicular]]._

:::

---
> id: congruence

### Условиями конгруэнтности

Но возможно ли построить _другого_ треугольник с теми же тремя сторонами? Мы уже видели два треугольника выше, но оба они были конгруэнтными. Фактически, любые два треугольника, которые имеют одинаковую длину трех сторон, являются конгруэнтными. Это называется [__Условием соответствия SSS__](gloss:triangle-sss) для треугольников («Сторона-сторона-сторона»). Теперь у нас есть два условия для треугольников: «AA» означает, что два треугольника [[подобны|congruent|transformations]], а «SSS» означает, что два треугольника [[конгруэнтны|similar|equal]]. Есть еще несколько условий соответствия:

---
> id: congruence-1

::: .theorem

Два треугольника являются конгруэнтными, если выполняется любое из следующих условий:

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
        p.caption All sides are congruent.
    
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
        p.caption Two sides and the #[strong included] angle are congruent.
    
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
        p.caption Two angles and the #[strong included] side are congruent.
    
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
        p.caption Two angles and one of the non-included sides.

:::

---
> id: cpoct

Вы можете думать об этих условиях как «Горячие клавиши»: чтобы проверить, совпадают ли два треугольника, вам просто нужно проверить одно из условий, описанных выше.

Как только вы _знаете_, что два треугольника являются конгруэнтными, вы знаете, что _всех_ их соответствующих сторон и углов конгруэнтны. Это часто называют [__CPOCT__](gloss:cpoct) или «Соответствующие части конгруэнтных треугольников конгруэнтны». Интересно отметить, что все условия состоят из [[трех]] разных значений (либо сторон, либо углов)!

---
> id: contruction

### Построение треугольников

В начале этого раздела мы увидели, как построить треугольник, если мы знаем его три стороны. Точно так же, есть способы построить треугольники для каждого из условий конгруэнтности выше.

::: tab

#### SAS

::: column(width=300)

{.todo} СКОРО - Анимация

::: column.grow

{.task} Нарисуйте треугольник со сторонами 5 см и 3 см и включенным углом 40 °.

Как и прежде, мы начнем с рисования одной из сторон треугольника. Затем используйте транспортир для измерения угла 40 ° вокруг одной из двух вершин. Давайте отметим этот угол точкой. Мы можем соединить вершину с нашим измерением, чтобы сформировать вторую сторону треугольника. Мы знаем, что эта сторона должна быть длиной 3 см, поэтому давайте измерим это расстояние линейкой, а затем отметим третью вершину треугольника. Наконец, мы можем соединить последние две вершины, чтобы завершить треугольник.

:::

Конечно, мы могли бы сначала нарисовать сторону 3 см или выбрать другую вершину, чтобы нарисовать угол 40 °. Однако во всех этих случаях полученные треугольники были бы конгруэнтны этому.

::: tab

#### ASA

::: column(width=300)

{.todo} СКОРО - Анимация

::: column.grow

{.task} Нарисуйте треугольник с углами 70 ° и 50 ° и включенной стороной длиной 5 см.

Давайте начнем с рисования первой стороны, используя линейку для измерения 5см. Теперь давайте используем транспортир для измерения угла 70 ° вокруг одной из конечных точек стороны и угла 50 ° вокруг другой конечной точки. (Какая из сторон не имеет значения - получающиеся треугольники будут конгруэнтны.) Соединение угловых меток с конечными точками завершает треугольник.

:::

::: tab

#### AAS

::: column(width=300)

{.todo} СКОРО - Анимация

::: column.grow

{.task} Нарисуйте треугольник с углами 40 ° и 50 ° и включенной стороной длиной 5 см.

Опять же, мы начнем с построения первой стороны треугольника длиной 5 см. И снова мы будем использовать транспортир, чтобы измерить угол 40 ° вокруг одной из конечных точек, и нарисуем вторую сторону треугольника. Тем не менее, мы еще не знаем, где эта сторона закончится. Вместо этого давайте выберем любую точку вокруг этой линии, представим, что это третья вершина треугольника и измерим угол в 50 °. Как видите, это не совсем работает: третья сторона еще не связана с вершиной A. Чтобы это исправить, нам просто нужно сместить ее: мы рисуем параллельную линию, проходящую через A. (Вы уже узнали как построить параллельные линии в [предыдущем курсе](/course/euclidean-geometry/geometric-construction).) Теперь два угла вверху - это чередующиеся углы, поэтому они должны быть одинаковыми и равными 50 °. Мы можем стереть неправильную первую строку, чтобы получить заполненный треугольник AAS.

:::

::: tab

#### SSA

Конструкция SSA немного отличается. Возможно, вы заметили, что «SSA» не было в списке условий конгруэнтности выше, поэтому сравнение SSA с двумя треугольниками недостаточно для подтверждения их конгруэнтности. Это покажет вам, почему:

::: column(width=300)

{.todo} СКОРО - Анимация

::: column.grow

{.task} Нарисуйте треугольник со сторонами 4 см и 5 см и без учета угла 50 °.

Как всегда, давайте начнем с рисования первой стороны треугольника длиной 5 см. Далее, давайте измерим угол 50 ° вокруг одной из конечных точек и нарисуем вторую сторону треугольника. Тем не менее, мы еще не знаем, где эта сторона закончится. Третья сторона должна быть длиной 4 см. Используя транспортир, мы можем нарисовать круг радиусом 4 см вокруг другой конечной точки исходной стороны. Конечная вершина треугольника образована пересечением круга и второй линии. Однако в этом случае есть два пересечения! Эти два треугольника явно не совпадают. Это означает, что есть два разных треугольника, у которых есть стороны 4 см и 5 см, а также не включенный угол 50 °. SSA недостаточно, чтобы подтвердить, что два треугольника совпадают.

:::
:::

---

## Теорема Пифагора

> id: pythagoras
> section: pythagoras

Теперь мы достигли важной точки в геометрии - возможности сформулировать и понять одну из самых известных [теорем](gloss:theorem) во всей математике : __Теорема Пифагора__. Он назван в честь древнегреческого математика [Пифагора Самосского](bio:pythagoras).

::: .theorem
::: column.grow

__Теорема Пифагора__  
В любом прямоугольном треугольнике квадрат длины [__гипотенузы__](target:hypot) (сторона, противоположная прямому углу) равен сумме квадратов двух других сторон , Другими словами, {.text-center} _{span.circled.green} `a^2`_ + _{span.circled.blue} `b^2`_ = _{span.circled.yellow} `c^2`_ _Обратное также верно: если три стороны в треугольнике удовлетворяют _{sup} 2_ + b _{sup} 2_ = c _{sup} 2_, то это должен быть [[прямоугольным|acute|obtuse]]._

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

Прямые углы повсюду, и поэтому теорема Пифагора так полезна. Здесь вы можете увидеть лестницу __{.m-red} длиной 6 м__, прислоненную к стене. Нижняя часть лестницы находится на расстоянии __{.m-blue} 1 м__ от стены. Как далеко он достигает стены? Обратите внимание, что есть прямоугольный треугольник, образованный лестницей, стеной и землей. Используя теорему Пифагора, мы получаем

    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92m</mn></td>

:::

{.reveal(when="blank-0")} Всякий раз, когда у вас есть прямоугольный треугольник и вы знаете две его стороны, Пифагор может помочь вам найти третий.

---
> id: pythagoras-proof

### Доказательство теоремы

Пифагора Теорема Пифагора была известна древним вавилонянам, месопотамцам, индийцам и китайцам, но Пифагор, возможно, был первым, кто нашел формальное математическое доказательство. На самом деле существует много разных способов доказать теорему Пифагора. Здесь вы видите три разных примера, каждый из которых использует свою стратегию:

::: tab.proof-1

#### Перестановка _{span.check(when="blank-0 blank-1")}_

::: column.grow

Have a look at the figure on the right. The square has side length _a_ + _b_,
and contains [four right-angled triangles](target:triangle), as well as a
[smaller square](target:square) of area [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Now let’s rearrange the triangles in the square. The
result still contains the four right-angles triangles, as well as two squares
of size [[<msup><mi>a</mi><mn>2</mn></msup> and <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Comparing the area of the red area
_{span.hover-target}before_ and _{span.hover-target}after_ the rearrangement, we
see that

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} This is the original proof that
[Pythagoras](bio:pythagoras) came up with. _{span.qed}_

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

Here we have the same figure as before, but this time we’ll use _algebra_ rather
than _rearrangement_ to prove Pythagoras’ theorem.

The large square has side length `a + b` and area
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} It consists of [four triangles](target:triangle), each
with an area of [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]],
and [one square](target:square) of area [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} If we combine all of that information, we have

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td> {.reveal(when="blank-3 blank-4")} И, снова, мы получим теорему Пифагора. _{span.qed}_

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

{.r} Here you can see another right-angled triangle. If we draw one of the
altitudes, it splits the triangle into two smaller triangle.
It also divides the hypotenuse _c_ into [two smaller parts](target:hypotenuse)
which we’ll call [{.step-target.i.pill.blue}x](target:x) and
[{.step-target.i.pill.green}y](target:y).
_{span.next-step} Continue_

{.r.reveal(when="next-0")} Let’s separate out the two smaller triangles, so that
it’s clearer to see how they are related…
_{span.next-step} Continue_

{.reveal(when="next-1")} Both smaller triangles [share one angle](target:angle)
with the original triangle. They also all have [one right angle](target:right).
By the AA condition, all three triangles must be [[similar|congruent|right-angled]].

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

{.reveal(when="blank-5")} Теперь мы можем использовать уравнения, которые мы уже знаем о похожих многоугольниках:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Продолжить_

{.reveal(when="next-2")} Но помните, что _c_ = [{.step-target.i.pill.blue} x](target:x) + [{.step-target.i.pill.green} y](target:y). Поэтому

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Еще раз мы доказали теорему Пифагора! _{span.qed}_

:::

---
> id: pythagoras-2

Многое о жизни Пифагора неизвестно, и ни одна оригинальная копия его работы не сохранилась. Он основал религиозный культ _пифагорейцев_, который практиковал своего рода «поклонение числам». Они считали, что все числа имеют свой собственный характер, и следовали множеству других странных обычаев.

::: column.grow

Пифагорейцам приписывают множество математических открытий, включая поиск первого [иррационального числа](gloss:irrational-numbers), `sqrt(2)`. Нерациональные числа не могут быть выражены в виде простой дроби - концепция, которую пифагорейцы находили глубоко тревожной и (безуспешно) пытались скрыть!

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} Федор Бронников: «Пифагорейцы празднуют восход»

:::

---

### Расчет расстояний

Одним из наиболее важных применений теоремы Пифагора является расчет расстояний.

::: column.grow

{.r} Справа вы видите две точки в системе координат. Мы могли бы измерить их расстояние с помощью линейки, но это не совсем точно. Вместо этого давайте попробуем использовать Пифагор. _{span.next-step} Продолжить_

{.reveal(when="next-0")} Мы можем легко сосчитать [горизонтальное расстояние](target:dx) вдоль оси _x_ и [вертикальное расстояние](target:dy) вдоль _{688 г} ось. Если мы нарисуем эти две линии, мы получим [прямоугольный треугольник](target:triangle).

{.reveal(when="next-0")} Используя Пифагора,

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

Этот метод работает для _любых_ двух точек:

::: .theorem

__Формула расстояния__  
Если вам даны две точки с координатами (`x_1`, `y_1`) и (`x_2`, `y_2`), расстояние между ними составляет

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`

:::

---
> id: pythagorean-triples

### Пифагорейские Тройки

Перемещая [вершин треугольника](->#tri-move) на предыдущем шаге, вы, возможно, заметили, что в большинстве случаев длина гипотенузы _d_ в конечном итоге была [[десятичным числом]]. _{span.reveal(when="blank-0")} Однако есть несколько примеров прямоугольных треугольников, где длины *всех трех сторон* оказываются *целыми числами*._

---
> id: pythagorean-triples-1

::: column.grow

Один известный пример - треугольник 3-4-5. Поскольку `3^2 + 4^2 = 5^2`, любой треугольник со сторонами длины 3, 4 и 5 должен быть прямоугольным. Древние египтяне не знали о теореме Пифагора, но они знали о треугольнике 3-4-5. При строительстве пирамид они использовали веревки с узлами длиной 3, 4 и 5, чтобы измерить идеальные прямые углы.

::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Три таких числа называются [__Пифагорейские тройки__](gloss:pythagorean-triple). (3, 4, 5) является одним из примеров пифагорейской тройки. Если мы умножим каждое число на 2, мы получим еще одну пифагорейскую тройку: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Мы можем рассматривать эти тройки как точки сетки в системах координат. Для действительных пифагорейских троек расстояние от начала координат до точки сетки должно быть целым числом. Используя приведенную ниже систему координат, можете ли вы найти другие пифагорейские тройки?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)} {.reveal(when="p0 p1 p2 p3 p4 p5")} Вы заметили какую-либо закономерность в распределении этих точек?

---

## Равнобедренные и равносторонние треугольники

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

TODO

---
> id: equilateral

### Равносторонние треугольники

Мы говорим, что треугольник [__равносторонний__](todo:equilateral-triangle), если все его стороны имеют одинаковую длину. Вы уже [уже видели](/course/euclidean-geometry/geometric-construction), как построить равносторонний треугольник, используя прямой край и компас.

---

## Тригонометрия

> id: trigonometry
> section: trigonometry

До сих пор мы видели взаимосвязи между __углами__ треугольников (например, они всегда суммируются до 180 °) и взаимосвязи между __сторонами__ треугольников (например, Пифагор). Но нет ничего, что _связывает_ по размеру углов и сторон. Например, если я знаю три стороны треугольника, как мне найти размер его углов - без рисования треугольника и измерения их с помощью транспортира? Это где __Тригонометрия__ приходит!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow

Представьте, что у нас есть прямоугольный треугольник, и мы также знаем один из двух других углов, __{.m-red} α__. Мы уже знаем, что самая длинная сторона называется [__{.m-yellow} гипотенуза__](target:hyp). Два других обычно называют [__{.m-green} рядом с__](target:adj) (который находится рядом с углом __{.m-red} α__) и [__напротив__](target:opp) (это противоположный угол __{.m-red} α__).

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse" target="hyp")
      path.blue(x="segment(b,c)" label="Opposite" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")

:::

Существует много разных треугольников, которые имеют углы __{.m-red} α__ и 90 °, но из условия [AA](gloss:triangle-aa) мы знаем, что все они [[Similar|congruent]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Поскольку все эти треугольники похожи, мы знаем, что их стороны пропорциональны. В частности, следующие соотношения одинаковы для всех этих треугольников:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-green.b Adjacent
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-green.b Adjacent Давайте попробуем суммировать это: мы выбрали определенное значение для __{.m-red} α__ и получили множество похожих прямоугольных треугольники. Все эти треугольники имеют одинаковые соотношения сторон. Поскольку __{.m-red} α__ была нашей единственной переменной, должна быть некоторая связь между __{.m-red} α__ и этими соотношениями. Эти отношения являются __тригонометрическими функциями__ - и их три:

::: .theorem

Три тригонометрические функции - это отношения между углами и соотношениями сторон в прямоугольном треугольнике. У каждого из них есть имя и трехбуквенное сокращение:

::: column.grow

    ul
      li.display
        strong Sine:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-yellow.b Hypotenuse
      li.display
        strong Cosine:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Adjacent
          mrow: mtext.m-yellow.b Hypotenuse
      li.display
        strong Tangent:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-green.b Adjacent

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

---
> id: trig-functions-1

{.todo} СКОРО - Подробнее о тригонометрии

---
> id: inverse-trig

### Обратные тригонометрические функции

{.todo} СКОРО - Обратные функции

---

## Правила синуса и косинуса

> section: sine-cosine-rule
> id: sine-cosine-rule

Пока все, что вы узнали о тригонометрии, работает только в прямоугольные треугольники. Но большинство треугольников не прямоугольные, и есть два важных результата, которые работают для всех треугольников

::: column.grow
::: .theorem

__Синусоидальное правило__ <br> В треугольнике со сторонами _a_, _b_ и _c_ и углами _A_, _B_ и _C_, {.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`

:::

::: column.grow
::: .theorem

__Правило косинуса__ <br> В треугольнике со сторонами _a_, _b_ и _c_ и углами _A_, _B_ и _C_, {.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)` <br> `b^2 = c^2 + a^2 - 2ca cos(B)` <br> `a^2 = b^2 + c^2 - 2bc cos(A)`

:::
:::

---

> id: trigonometry-4

{.todo} СКОРО - Доказательства, примеры и приложения

---
> id: mountains

### Великий тригонометрический обзор

Вы все еще помните квест найти самую высокую гору на Земле из [введения](/course/triangles/introduction)? С Trigonometry у нас наконец есть инструменты, чтобы сделать это!

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
        path.yellow(x="segment(x,y)" target="right" label="height") Геодезисты в Индии измерили угол вершины горы с [двух разных позиций](target:points), _{span.pill.step-target.yellow(data-to="base")} на расстоянии 5 км_. Результаты были _{span.pill.step-target.red(data-to="ang")} 23 °_ и _{span.pill.step-target.blue(data-to="ang1")} 29 °_. Поскольку _{span.pill.step-target.green(data-to="a")} угол α_ является [дополнительным углом](gloss:supplementary-angles), мы знаем, что он должен быть [[151]] °. _{span.reveal(when="blank-0")} Теперь мы можем использовать сумму внутренних углов треугольника, чтобы определить, что _{span.pill.step-target(data-to="b")} угол β_ равен [[6]] °._ {.reveal(when="blank-1")} Теперь мы знаем [все три угла](target:angles) треугольника, а также _{span.pill.step-target.yellow(data-to="base")} одну из сторон_. Этого достаточно, чтобы использовать [[синусоидальное правило|cosine rule]], чтобы найти расстояние [_d_](target:d):

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
          mn.pill.yellow.step-target(data-to="d") 23.2 km {.reveal(when="blank-3 blank-4" delay=2000)} Есть один последний шаг: давайте посмотрим на [большой прямоугольный треугольник](target:right). Мы уже знаем длину гипотенузы, но что нам действительно нужно, это [[противоположная сторона|adjacent]]. _{span.reveal(when="blank-5")} Мы можем найти его, используя определение _sin_:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[height|23]]
            mrow.md [[23|height]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
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
          mn.pill.step-target.yellow(data-to="height") 8.987 km {.reveal(when="blank-6 blank-7" delay=2000)} И это очень близко к фактической высоте Эвереста, самой высокой горы на Земле: 8,848m.

:::

---

> id: mountains-1

Это объяснение значительно упрощает необычайную работу, проделанную математиками и географами, работающими над Великой тригонометрической съемкой. Они начинали с уровня моря на пляже, измеряли тысячи километров расстояния, строили геодезические башни по всей стране и даже учитывали кривизну Земли.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
