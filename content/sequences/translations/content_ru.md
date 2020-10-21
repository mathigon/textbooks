# Последовательности и паттерны 

## Введение 

> section: introduction
> id: intro

Многие профессии, использующие математику, заинтересованы в одном конкретном аспекте - _поиске моделей_ и способности предсказывать будущее. Вот несколько примеров: 

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

В последнее десятилетие __полицейские управления__ по всему миру стали больше полагаться на математику. Специальные алгоритмы могут использовать данные прошлых преступлений, чтобы предсказать, когда и где преступления могут произойти в будущем. Например, система _PredPol_ (сокращение от «предиктивная полицейская деятельность») помогла снизить уровень преступности в некоторых районах Лос-Анджелеса на 12%! 

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Оказывается, что __землетрясения__ следуют аналогичным схемам преступлений. Так же, как одно преступление может вызвать ответные меры, землетрясение может вызвать толчки. В математике это называется «процесс самовозбуждения», и есть уравнения, которые помогают предсказать, когда может произойти следующий. 

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Банкиры также изучают исторические данные о ценах на акции, процентных ставках и курсах валют, чтобы оценить, как __финансовые рынки__ могут измениться в будущем. Возможность предсказать, будет ли стоимость акций расти или падать, может быть чрезвычайно прибыльной! 

:::

Профессиональные математики используют очень сложные алгоритмы для поиска и анализа всех этих паттернов, но мы собираемся начать с чего-то более базового. 

---
> id: simple-patterns

### Простые последовательности 

В математике [__последовательность__](gloss:sequence) - это цепочка чисел (или других объектов), которые обычно следуют определенному шаблону. Отдельные элементы в последовательности называются [__терминами__](gloss:sequence-term) . 

Вот несколько примеров последовательностей. Можете ли вы найти их шаблоны и рассчитать следующие два условия? 

{.text-center.s-orange.with-arrows.no-voice} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Шаблон: «Добавьте 3 к предыдущему номеру, чтобы получить следующий»._ 

{.text-center.s-teal.with-arrows.no-voice} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Шаблон: «Добавьте 6 к предыдущему номеру, чтобы получить следующий»._ 

{.text-center.s-purple.with-arrows.no-voice} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Шаблон: «Поочередно добавьте 1 и добавьте 3 к предыдущему номеру, чтобы получить следующий»._ 

{.text-center.s-lime.with-arrows.no-voice} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Шаблон: «Умножьте предыдущее число на 2, чтобы получить следующее»._ 

---
> id: simple-patterns-1

Точки (…) в конце просто означают, что последовательность может продолжаться вечно. Когда мы ссылаемся на подобные последовательности в математике, мы часто обозначаем каждый термин специальной [переменной](gloss:variable) : 

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

Небольшое число после _x_ называется __нижним индексом__ и указывает положение термина в последовательности. Это означает, что мы можем представить _n-_ й член в последовательности [[`x_n`|`x_i`|`x_2`]] , 

---
> id: triangles

### Треугольные и квадратные числа 

Последовательности в математике не всегда должны быть числами. Вот последовательность, которая состоит из геометрических фигур - треугольников увеличивающегося размера: 

::: column(width=24 parent="padded-thin")

{.text-center.no-voice} __1__ 

    include svg/triangle-1.svg

::: column(width=52)

{.text-center.no-voice} __3__ 

    include svg/triangle-2.svg

::: column(width=80)

{.text-center.no-voice} __6__ 

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b.no-voice} [[10]] 

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b.no-voice} [[15]] 

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b.no-voice} [[21]] 

    include svg/triangle-6.svg

:::

---
> id: triangle-1

На каждом шаге мы добавляем еще одну строку к предыдущему треугольнику. Длина этих новых строк также увеличивается на единицу каждый раз. Вы можете увидеть шаблон? 

{.text-center.s-orange.with-arrows.no-voice} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

Мы также можем описать этот шаблон с помощью специальной [формулы](gloss:formula) : 

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Чтобы получить номер _n-го_ треугольника, мы берем [[предыдущее | первый | следующий]] номер треугольника и добавьте _n_ . Например, если _n_ = ${n}{n|5|2,20,1} формула становится <msub><mi>Икс</mi><mn>${n}</mn></msub> знак равно <msub><mi>Икс</mi><mn>${n-1}</mn></msub> + ${n} , 

---
> id: recursive-1

Формула, которая выражает `x_n` как функция предыдущих членов в последовательности называется [__рекурсивной формулой__](gloss:sequence-recursive) . Пока вы знаете [[первый срок | последний семестр | Второе слагаемое]] в последовательности можно вычислить на всех следующих. 

---
> id: squares

    hr

Другой последовательностью, состоящей из геометрических фигур, являются __квадратные числа__ . Каждый член состоит из все более крупных квадратов: 

::: column(width=24 parent="padded-thin squares")

{.text-center.no-voice} __1__ 

    include svg/square-1.svg

::: column(width=50)

{.text-center.no-voice} __4__ 

    include svg/square-2.svg

::: column(width=76)

{.text-center.no-voice} __9__ 

    include svg/square-3.svg

::: column(width=102)

{.text-center.b.no-voice} [[16]] 

    include svg/square-4.svg

::: column(width=128)

{.text-center.b.no-voice} [[25]] 

    include svg/square-5.svg

::: column(width=154)

{.text-center.b.no-voice} [[36]] 

    include svg/square-6.svg

:::

---
> id: square-1

Для чисел треугольника мы нашли рекурсивную формулу, которая сообщает вам _следующий_ член последовательности как функцию его _предыдущих_ членов. Для квадратных чисел мы можем сделать еще лучше: формула, которая говорит вам _n-_ й термин напрямую, без необходимости сначала вычислять все предыдущие: 

{.text-center.s-purple} _{.n}`x_n`_ знак равно _{x-equation(solution="n^2")}_ 

---
> id: explicit

Это называется [__явной формулой__](gloss:sequence-explicit) . Мы можем использовать его, например, для вычисления числа 13-го квадрата [[169]] без предварительного нахождения предыдущих 12-ти квадратных чисел. 

---
> id: definitions

    hr

Давайте суммируем все определения, которые мы видели до сих пор: 

::: .theorem

[__Последовательность__](gloss:sequence) - это список чисел, геометрических фигур или других объектов, которые следуют определенному шаблону. Отдельные элементы в последовательности называются [__терминами__](gloss:sequence-term) и представлены такими переменными, как `x_n` , 

[__Рекурсивная формула__](gloss:sequence-recursive) для последовательности сообщает вам значение _n-_ го члена как функцию [[его предыдущих членов | первый семестр]] Вы также должны указать первый термин (ы). 

[__Явная формула__](gloss:sequence-explicit) для последовательности говорит вам о значении _n-_ го члена как функции [[просто _n_ | предыдущий термин]] , без ссылки на другие термины в последовательности. 

:::

---
> id: action-sequence

### Фотография последовательности действий 

В следующих разделах вы узнаете о множестве различных математических последовательностей, неожиданных шаблонах и неожиданных приложениях. 

Во-первых, давайте посмотрим на что-то совершенно другое: __фотография последовательности действий__ . Фотограф делает несколько снимков подряд, а затем объединяет их в одно изображение: 

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Вы видите, как лыжник формирует последовательность? Шаблон не сложение или умножение, а геометрическое [преобразование](gloss:rigid-transformation) . Между последовательными шагами лыжник переводится и [[вращается | отраженный | расширен]] . 

---
> id: action-sequence-1

Вот еще несколько примеров фотографии последовательности действий для вашего удовольствия: 

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::

---

## Арифметические и геометрические последовательности 

> section: arithmetic-geometric
> id: halley

::: column.grow

В 1682 году астроном [Эдмонд Халли](bio:halley) наблюдал необычное явление: светящийся белый объект с длинным хвостом, который двигался по ночному небу. Это была __комета__ , маленькая ледяная скала, которая летит сквозь пространство, оставляя за собой след пыли и льда. 

Галли вспомнил, что другие астрономы наблюдали подобные кометы гораздо раньше: одну в 1530 году, а другую в 1606 году. Обратите внимание, что разрыв между двумя последовательными наблюдениями одинаков в обоих случаях: [[76]] лет. 

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Халли пришел к выводу, что все три наблюдения были на самом деле одной и той же кометой, которая сейчас называется _кометой Галлея_ . Он вращается вокруг Солнца и проходит Землю примерно каждые 76 лет. Он также предсказал, когда комета будет видна дальше: 

{.text-center.s-orange.s-large.with-arrows.no-voice} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

На самом деле, временной интервал не всегда _ровно_ 76 лет: он может меняться на один или два года, поскольку орбита кометы прерывается другими планетами. Сегодня мы знаем, что комета Галлея наблюдалась древними астрономами еще в 240 году до нашей эры! 

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depictions of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

Другая группа ученых исследует поведение прыгающего теннисного мяча. Они сбросили мяч с высоты 10 метров и со временем измерили его положение. С каждым отскоком мяч теряет часть своей первоначальной высоты: 

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Ученые заметили, что мяч теряет 20% своей высоты после каждого отскока. Другими словами, максимальная высота каждого отскока составляет 80% от предыдущего. Это позволило им прогнозировать высоту каждого следующего отскока: 

{.text-center.s-teal.s-large.with-arrows.no-voice} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Определения 

Если вы сравните обе эти проблемы, вы можете заметить, что есть много общего: последовательность кометы Галлея имеет ту же [[разницу | соотношение | произведение]] между последовательными сроками, в то время как последовательность ударов теннисных мячей имеет такое же [[соотношение | разница | продукт]] между последовательными сроками. 

---
> id: arithmetic-geometric-1

Последовательности с этими свойствами имеют специальное имя: 

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

[__Арифметическая последовательность__](gloss:arithmetic-sequence) имеет постоянную __{.m-red} Разница _d___ между последовательными сроками. 

То же число добавляется или вычитается к каждому члену, чтобы получить следующий. 

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

[__Геометрическая последовательность__](gloss:geometric-sequence) имеет постоянную __{.m-green} соотношение _г___ между последовательными сроками. 

Каждый член умножается или делится на одно и то же число, чтобы произвести следующий. 

:::

:::

---
> id: arithmetic-geometric-select

Вот несколько разных последовательностей. Можете ли вы определить, какие из них являются арифметическими, геометрическими или нет, и каковы значения _{.b.m-red} д_ и _{.b.m-green} г_ есть? 

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{span.n} 8_ , _{span.n} 16_ , _{span.n} 32_ , _{span.n} 64_ ,… 

::: column(width=320)

{.no-voice} является [[геометрическим | арифметика | ни]] _{span.reveal(when="blank-0")} с соотношением [[2]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 5_ , _{span.n} 8_ , _{span.n} 11_ , _{span.n} 14_ , _{span.n} 17_ ,… 

::: column(width=320)

{.no-voice} [[арифметический | геометрический | ни]] _{span.reveal(when="blank-2")} с разницей [[3]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 17_ , _{span.n} 13_ , _{span.n} 9_ , _{span.n} 5_ , _{span.n} 1_ , _{span.n} –3_ ,… 

::: column(width=320)

{.no-voice} [[арифметический | геометрический | ни]] _{span.reveal(when="blank-4")} с разницей [[-4]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{span.n} 7_ , _{span.n} 11_ , _{span.n} 16_ , _{span.n} 22_ ,… 

::: column(width=320)

{.no-voice} не является [[ни | арифметика | геометрический]] _{span.reveal(when="blank-6")} ,_ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 40_ , _{span.n} 20_ , _{span.n} 10_ , _{span.n} 5_ , _{span.n} 2,5_ , _{span.n} 1.25_ ,… 

::: column(width=320)

{.no-voice} является [[геометрическим | арифметика | ни]] _{span.reveal(when="blank-7")} с соотношением [[0,5]] ._ 

:::

---
> id: arithmetic-geometric-graph

Чтобы определить арифметическую или геометрическую последовательность, мы должны знать не только общую разницу или отношение, но и начальное значение (называемое `a` ). Здесь вы можете создавать свои собственные последовательности и отображать их значения на графике, изменяя значения `a` , _д_ и _р_ . Можете ли вы найти какие-либо шаблоны? 

::: column.ag-chart(width=320)

####{.m-red} Арифметическая последовательность 

{.text-center.no-voice}`a` знак равно ${a}{a|2|-10,10,0.2} , _д_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

####{.m-green} Геометрическая последовательность 

{.text-center.no-voice}`a` знак равно ${b}{b|2|-10,10,0.2} , _г_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Обратите внимание, как все __{.m-red} арифметические последовательности__ выглядят очень похоже: если разница положительна, они неуклонно [[увеличиваются | уменьшаться]] , а если разница отрицательная, они неуклонно [[уменьшаются | увеличение]] 

{.reveal(when="blank-0 blank-1")} С другой стороны, геометрические последовательности могут вести себя совершенно по-разному в зависимости от значений `a` и _р_ : 

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Если [`r > 1`](action:set(2,2)) сроки [[быстро]] станут [[больше | быстро уменьшаться | приблизиться к нулю]] _{span.reveal(when="blank-2")} , до бесконечности. Математики говорят, что последовательность [__расходится__](gloss:sequence-divergence) ._ 

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

Если [ _r_ между –1 и 1](action:set(10,0.6)), члены всегда [[будут ближе к 0 | уменьшить до отрицательной бесконечности | стать меньше]] _{span.reveal(when="blank-3")} , Мы говорим, что последовательность [__сходится__](gloss:sequence-convergence) ._ 

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

Если [`r < -1`](action:set(3,-1.4)) условия будут чередоваться между положительными и отрицательными, а их [[абсолютное значение | обратный | разница]] становится больше. 

:::

{.reveal(when="blank-4 blank-5")} Вы узнаете больше о сближении и расхождении в [последнем разделе](/course/sequences/convergence) этого курса. 

---
> id: arithmetic-geometric-recursive

### Рекурсивные и явные формулы 

В предыдущем разделе вы узнали, что [__рекурсивная формула__](gloss:sequence-recursive) сообщает вам значение каждого термина как функцию предыдущих терминов. Вот рекурсивные формулы для арифметических и геометрических последовательностей: 

::: column.grow

{.text-center.no-voice}`x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]] 

::: column.grow

{.text-center.no-voice}`x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]] 

:::

---
> id: arithmetic-geometric-explicit

Одна проблема с рекурсивными формулами состоит в том, что, например, чтобы найти 100-й член, нам сначала нужно вычислить предыдущие 99 слагаемых - и это может занять много времени. Вместо этого мы можем попытаться найти [__явную формулу__](gloss:sequence-explicit) , которая напрямую сообщает нам значение _n-_ го члена. 

::: column.grow

Для __{.m-red} арифметические последовательности__ , мы должны добавлять _d_ на каждом шаге: 

{.ag-equation.no-voice}`x_1 = a`

{.ag-equation.no-voice}`x_2 = a + d`

{.ag-equation.no-voice}`x_3 = a + d + d`

{.ag-equation.no-voice}`x_4 =` _{x-equation(solution="a+d+d+d")}_ 

{.ag-equation.no-voice.reveal(when="eqn-0")}`x_5 =` _{x-equation(solution="a+d+d+d+d")}_ 

{.reveal(when="eqn-1")} На _n-_ й срок мы добавляем [[`n-1`|`n`|`n+1`]] копии _d_ , поэтому общая формула 

{.ag-equation.no-voice.reveal(when="blank-0")}`x_n = a + d × (n-1)` , 

::: column.grow

Для __{.m-green} геометрические последовательности__ , мы должны умножать _r_ на каждом шаге: 

{.ag-equation.no-voice}`x_1 = a`

{.ag-equation.no-voice}`x_2 = a × r`

{.ag-equation.no-voice}`x_3 = a × r × r`

{.ag-equation.no-voice}`x_4 =` _{x-equation(solution="a×r×r×r")}_ 

{.ag-equation.no-voice.reveal(when="eqn-2")}`x_5 =` _{x-equation(solution="a×r×r×r×r")}_ 

{.reveal(when="eqn-3")} На _n-_ й срок мы умножаем [[`n-1`|`n`|`n+1`]] копии _г_ , поэтому общая формула 

{.ag-equation.no-voice.reveal(when="blank-1")}`x_n = a × r^(n-1)` , 

:::

---
> id: arithmetic-geometric-explicit-1

Вот краткое изложение всех определений и формул, которые вы видели до сих пор: 

::: column.grow

::: .theorem.s-red

__{.m-red} арифметическая последовательность__ имеет первый член `a` и общая разница `d` между последовательными сроками. 

{.text-center} __Рекурсивная формула__ : `x_n = x_(n-1) + d`

{.text-center} __Явная формула__ : `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

__{.m-green} геометрическая последовательность__ имеет первый член `a` и общее соотношение `r` между последовательными сроками. 

{.text-center} __Рекурсивная формула__ : `x_n = x_(n-1) × r`

{.text-center} __Явная формула__ : `x_n = a × r^(n-1)`

:::

:::

Теперь давайте посмотрим на некоторые примеры, где мы можем использовать все это! 

---
> id: pay-it-forward
> goals: video

### Оплатить это вперед 

Вот короткий клип из фильма « _Заплати вперед»_ , где 12-летний Тревор объясняет свою идею сделать мир лучше: 

    figure
      x-video(src="https://storage.googleapis.com/mathigon-videos/pay-it-forward.mp4" poster="images/pay-it-forward-poster.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

Суть идеи Тревора заключается в том, что, если все «платят вперед», один человек может оказать огромное влияние на мир: 

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Обратите внимание, как количество людей на каждом шаге образует [[геометрическую последовательность | арифметическая последовательность | номер треугольника]] , _{span.reveal(when="blank-0")} с общим соотношением [[3]] :_ 

{.text-center.s-orange.with-arrows.no-voice.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Используя [явную формулу](gloss:sequence-explicit) для геометрических последовательностей, мы можем определить, сколько новых людей затронуто на любом этапе: 

{.text-center}`x_n` знак равно _{x-equation(solution="3^(n-1)")}_ 

---
> id: pay-it-forward-3

Количество людей увеличивается невероятно быстро. На 10-м шаге вы достигнете 19 683 новых, а через 22 шага вы достигнете большего количества людей, чем в настоящее время живы на Земле. 

Эта последовательность чисел имеет специальное имя: __полномочия 3__ . Как вы можете видеть, каждый термин на самом деле представляет собой различную [степень](gloss:powers) 3: 

{.text-center.s-orange.no-voice} _{span.n}`3^0`_ , _{span.n}`3^1`_ , _{span.n}`3^2`_ , _{span.n}`3^3`_ , _{span.n}`3^4`_ , _{span.n}`3^5`_ … 

---
> id: millionaire

### Кто хочет стать миллионером? 

{.todo} СКОРО БУДЕТ! 

---
> id: chessboard

### Проблема с шахматной доской 

{.todo} СКОРО БУДЕТ! 

---

## Фигурные числа 

> section: figurate
> id: figurate

Название для [геометрических последовательностей](gloss:geometric-sequence) довольно запутанно, потому что они не имеют ничего общего с геометрией. На самом деле, название было разработано сотни лет назад, когда математики думали о _умножении_ и _квадратных корнях_ в гораздо более геометрической форме. 

Тем не менее, есть много других последовательностей, _которые_ основаны на определенных геометрических формах - некоторые из которых вы уже видели во [введении.](/course/sequences/introduction) Эти последовательности часто называют [__фигурными числами__](gloss:figurate-numbers) , и в этом разделе мы подробнее рассмотрим некоторые из них. 

---
> id: triangle-numbers

### Треугольные числа 

Номера __треугольников__ генерируются путем создания треугольников с постепенно увеличивающимся размером: 

::: column(width=24 parent="padded-thin")

{.text-center.no-voice} __1__ 

    include svg/triangle-1.svg

::: column(width=52)

{.text-center.no-voice} __3__ 

    include svg/triangle-2.svg

::: column(width=80)

{.text-center.no-voice} __6__ 

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.no-voice} __10__ 

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.no-voice} __15__ 

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.no-voice} __21__ 

    include svg/triangle-6.svg

:::

Вы уже видели рекурсивную формулу для номеров треугольников: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]] , 

---
> id: billiard-pool

Не случайно, что в боулинге всегда есть 10 кеглей или 15 шаров при игре в бильярд: это оба треугольных числа! 

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

К сожалению, рекурсивная формула не очень полезна, если мы хотим найти 100-й или 5000-й номер треугольника без предварительного вычисления всех предыдущих. Но, как и в случае с арифметическими и геометрическими последовательностями, мы можем попытаться найти явную формулу для чисел треугольника. 

{.todo} СКОРО: Анимированное доказательство для формулы числа треугольника 

---
> id: triangle-sums

Треугольные числа, кажется, появляются везде в математике, и вы увидите их снова на протяжении всего этого курса. Один особенно интересный факт заключается в том, что _любое_ целое число можно записать как сумму не более трех треугольных чисел: 

::: column(width=140 parent="triangle-sum")

{.text-center.no-voice}${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} знак равно 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} + 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} + 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} Тот факт, что это работает для _всех_ целых чисел, был впервые доказан в 1796 году немецким математиком [Карлом Фридрихом Гауссом](bio:gauss) - в возрасте 19 лет! 

---
> id: triangle-investigate

::: .box.f-blue

#### Решение проблем 

Какова сумма первых 100 натуральных [чисел](gloss:integer) ? Другими словами, какова ценность 

{.text-center}`1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100` ? 

Вместо того, чтобы сложить все вручную, можете ли вы использовать [треугольные числа,](gloss:triangle-numbers) чтобы помочь вам? Как насчет суммы первых 1000 натуральных чисел? 

:::

---
> id: square-numbers

### Квадратные и многоугольные числа 

Другой последовательностью, основанной на геометрических фигурах, являются __квадратные числа__ : 

{.text-center.s-purple.with-arrows.no-voice} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Вы можете вычислить числа в этой последовательности, возведя в квадрат каждое целое число ( `1^2` , `2^2` , `3^2` ,…), Но оказывается, что есть другая закономерность: различия между последовательными квадратными числами являются [[нечетными числами | числа треугольника | целые числа]] в порядке возрастания! 

---
> id: square-numbers-1

::: column.grow

Причина этого паттерна становится очевидной, если мы на самом деле рисуем квадрат. Каждый шаг добавляет одну строку и один столбец. Размер этих «углов» начинается с 1 и увеличивается на 2 на каждом шаге - тем самым образуя последовательность нечетных чисел. 

Это также означает, что число _n-_ го квадрата является просто суммой первых _n_ нечетных чисел! Например, сумма первых 6 нечетных чисел 

{.text-center}`1 + 3 + 5 + 7 + 9 + 11 =` [[36]] 

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

Кроме того, каждое квадратное число также является суммой двух последовательных [треугольных чисел](gloss:triangle-numbers) . Например, ${n×n}{n|4|1,20,1} знак равно ${n×(n+1)/2} + ${n×(n-1)/2} , Можете ли вы увидеть, как мы можем разбить каждый квадрат по диагонали на два треугольника? 

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

После чисел треугольника и квадрата мы можем продолжать работать с большими [полигонами](gloss:polygon) . Результирующие __числовые__ последовательности называются __многоугольными числами__ . 

Например, если мы используем полигоны с ${k}{k|5|3,10,1} стороны, мы получаем последовательность __${polygonName(k)} номера__ 

Можете ли вы найти рекурсивные и явные формулы для _n-_ го многоугольного числа с _k_ сторонами? А вы заметили какие-нибудь другие интересные модели для больших полигонов? 

:::

---
> id: tetrahedral

### Тетраэдрические и кубические числа 

Конечно, нам также не нужно ограничиваться двумерными формами и узорами. Мы могли бы складывать сферы в маленькие пирамиды, как если бы вы складывали апельсины в супермаркете: 

::: column(width=64 parent="padded-thin")

{.text-center.no-voice} __1__ 

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center.no-voice} __[[4]]__ 

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center.no-voice} __[[10]]__ 

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center.no-voice} __20__ 

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center.no-voice} __35__ 

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Математики часто называют эти пирамиды [__тетраэдрами__](gloss:tetrahedron) , а полученную последовательность [__тетраэдрическими числами__](gloss:tetrahedral-numbers) . 

{.todo} СКОРО: Больше о тетраэдрических числах, кубических числах и 12 днях Рождества. 

---

## Последовательности как функции 

> section: functions
> sectionStatus: dev

ДЕЛАТЬ 

---

## Числа Фибоначчи 

> section: fibonacci
> id: rabbits

Представьте, что вы получили пару маленьких кроликов, одного самца и одной самки. Это особенные кролики, потому что они никогда не умирают, а самка рожает новую пару кроликов ровно раз в месяц (всегда другую пару мужского и женского пола). 

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange.s-small
          svg(width=760 height=456 viewBox="0 0 760 456")
            line(y1=51  x2=760 y2=51)
            line(y1=130 x2=760 y2=130)
            line(y1=209 x2=760 y2=209)
            line(y1=287 x2=760 y2=287)
            line(y1=366 x2=760 y2=366)
            path(d="M84,91c223.68,0,405,7,405,45")
            path(d="M84,170c124.82,0,226,14,226,45")
            path(d="M84,248c74.56,0,135,20.15,135,45")
            path(d="M534,248c74.56,0,135,20.15,135,45")
            path(d="M84,327a45,45,0,0,1,45,45")
            path(d="M354,327a45,45,0,0,1,45,45")
            path(d="M534,327a45,45,0,0,1,45,45")
            polygon(points="489 150 481 130 489 135 497 130 489 150")
            polygon(points="310 229 302 209 310 214 318 209 310 229")
            polygon(points="219 307 211 287 219 292 227 287 219 307")
            polygon(points="669 307 661 287 669 292 677 287 669 307")
            polygon(points="129 386 121 366 129 371 137 366 129 386")
            polygon(points="399 386 391 366 399 371 407 366 399 386")
            polygon(points="579 386 571 366 579 371 587 366 579 386")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")
    
          .n(style="top: 0%") 1
          .n(style="top: 15%") 1
          .n(style="top: 32%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 84%") 8
    
      .legend(slot="legend") In the first month, the rabbits are very small and can’t do much – but they grow very quickly.
      .legend(slot="legend") After one month, the rabbits are grown up and can start mating…
      .legend(slot="legend") … and after another month, they will give birth to their first pair of kids. You now have two pairs of rabbits.
      .legend(slot="legend") In the next month, your pair of rabbits will give birth to another couple. Meanwhile, the first pair of kids have grown up. You now have three pairs in total.
      .legend(slot="legend") In the fifth month, your original pair of rabbits will give birth to a new pair. At the same time, their first pair of kids is now old enough to give birth to grandchildren. You now have five pairs of rabbits.
      .legend(slot="legend") In the sixth month, there are three more couples that give birth: the original one, as well as their first two pairs or kids.

---
> id: rabbits-1

{.r} В следующем месяце у вас будет 13 пар кроликов: 8 из предыдущего месяца плюс 5 новых наборов младенцев. Можете ли вы обнаружить шаблон в этой последовательности? _{button.next-step} Продолжать_ 

---
> id: rabbits-2

Количество кроликов в конкретном месяце является [[суммой двух предыдущих чисел | дважды предыдущий номер]] . _{span.reveal(when="blank-0")} Другими словами, вы должны добавить _два предыдущих_ термина в последовательность, чтобы получить следующий. Последовательность начинается с двух единиц, и [рекурсивная формула](gloss:sequence-recursive)_ 

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Можете ли вы рассчитать количество кроликов через несколько месяцев? 

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} Таким образом, через 12 месяцев у вас будет 144 пары кроликов! 

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Эта последовательность чисел называется [__последовательностью Фибоначчи__](gloss:fibonacci-numbers) , названной в честь итальянского математика [Леонардо Фибоначчи](bio:fibonacci) . 

::: column.grow

Когда Фибоначчи родился в 1175 году, большинство людей в Европе все еще использовали [римскую систему счисления](gloss:roman-numerals) для чисел (например, XIV или MCMLIV). Отец Фибоначчи был торговцем, и они вместе отправились в Северную Африку, а также на Ближний Восток. Именно там Фибоначчи впервые выучил [арабскую систему счисления](gloss:arabic-numerals) . 

Вернувшись в Италию, Фибоначчи написал книгу под названием « _Liber Abaci»_ (на латыни «Книга расчетов»), где он впервые ввел новые арабские цифры для европейских торговцев. Они имели немедленный успех - и мы до сих пор используем их сегодня. 

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

На одной из страниц своей книги он также исследовал схемы размножения кроликов - вот почему числа Фибоначчи были названы в его честь. 

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Конечно, числа Фибоначчи - это не то, как кролики на _самом деле_ живут в реальной жизни. Кролики не имеют точно одного потомства мужского и женского пола каждый месяц, и мы не учитывали, что кролики в конечном итоге умирали. 

Но оказывается, что есть много других мест в природе, где числа Фибоначчи _действительно_ появляются: например, спирали в растениях. Можете ли вы посчитать, сколько спиралей в каждом направлении? 

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Эта шишка имеет [[8]] спиралей по часовой стрелке и [[13]] спиралей против часовой стрелки. 

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Этот подсолнух имеет 34 спирали по часовой стрелке и 55 спиралей против часовой стрелки. 

:::

---
> id: spirals-1

В обоих случаях числа спиралей являются последовательными числами Фибоначчи. То же самое верно и для многих других растений: в следующий раз, когда вы выйдете на улицу, посчитайте количество лепестков в цветке или количество листьев на стебле. Очень часто вы обнаружите, что это числа Фибоначчи! 

Конечно, это не просто совпадение. Существует важная причина, почему природе нравится последовательность Фибоначчи, о которой вы узнаете позже. 

---
> id: bees

::: column(width=320)

    x-select.segmented   
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Числа Фибоначчи также появляются в популяциях пчел. 

В каждой пчелиной колонии есть одна _королева,_ которая откладывает много яиц. Если яйцеклетка оплодотворена __самкой__ пчелы, она высиживается в __самку__ пчелы. Если это не оплодотворено, это выводится в __мужскую__ пчелу (названный беспилотником). 

Это означает, что у пчел женского пола есть [[два родителя | один родитель]] , в то время как у самцов пчелы есть только [[один родитель | два родителя]] 

{.reveal(when="blank-0 blank-1")} Если мы нарисуем дерево предков пчелы, число родителей, бабушек и дедушек, прабабушек и прародителей всегда будет числом Фибоначчи! 

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Иногда молодых самок пчел кормят специальной пищей, называемой «маточное молочко». В этом случае они превращаются в королев и улетят, чтобы начать новый улей. 

:::

---
> id: golden-spiral

### Золотое сечение 

Как и числа [треугольников](gloss:triangle-numbers) и [квадратов](gloss:square-numbers) , а также другие последовательности, которые мы видели ранее, последовательность Фибоначчи можно визуализировать с помощью геометрического шаблона: 

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") We start with two small squares of size 1.
      .legend(slot="legend") Next, we add a new square of size 2, to form a larger rectangle.
      .legend(slot="legend") Next, we add a square of size 3, to form an even larger rectangle.
      .legend(slot="legend") The next square has size 5. Can you see that we’re recreating the Fibonacci numbers?
      .legend(slot="legend") If we continue adding squares, they will have size 8, 13, 21, and so on.
      .legend(slot="legend") You might have noticed that, as the rectangles get larger, they seem to start “spiraling” outwards. We can even visualise this by drawing a perfect spiral that connects the corners of the squares.

---
> id: golden-ratio

На каждом шаге квадраты образуют больший прямоугольник. Его ширина и высота всегда являются двумя последовательными числами Фибоначчи. __Соотношение сторон__ прямоугольника - это соотношение его ширины и высоты: 

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center.no-voice}`2/1` = 2 

::: column(width=100)

    include svg/golden-2.svg

{.text-center.no-voice}`3/2` = 1,5 

::: column(width=100)

    include svg/golden-3.svg

{.text-center.no-voice}`5/3` = 1.666 ... 

::: column(width=100)

    include svg/golden-4.svg

{.text-center.no-voice}`8/5` = 1,6 

::: column(width=100)

    include svg/golden-5.svg

{.text-center.no-voice}<mfrac><mn>[[13]]</mn><mn>[[8]]</mn></mfrac> _{span.reveal(when="blank-0 blank-1")} = 1,625_ 

::: column(width=100)

    include svg/golden-6.svg

{.text-center.no-voice}<mfrac><mn>[[21]]</mn><mn>[[13]]</mn></mfrac> _{span.reveal(when="blank-2 blank-3")} = 1,62…_ 

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Обратите внимание, что, когда мы добавляем все больше и больше квадратов, соотношение сторон кажется все ближе и ближе к определенному числу около 1,6. Это число называется [__золотым сечением__](gloss:golden-ratio) и обычно представлено греческой буквой `φ` ( «Фи»). Его точное значение 

{.text-center}`(1 + sqrt(5))/2 = 1.61803398875…`

Многие люди считают, что золотое сечение особенно эстетично. Вот почему это часто используется художниками и архитекторами - как в этих двух примерах: 

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Говорят, что греческий скульптор Фидий использовал золотое сечение при проектировании _Парфенона_ в Афинах. Первая буква его имени, `φ` является символом, который мы сейчас используем для золотого сечения. 

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _«Таинство Тайной Вечери_ » испанского художника Сальвадора Дали является одной из многих картин в золотом сечении. На заднем плане вы также можете увидеть большой [додекаэдр](gloss:dodecahedron) . 

:::

---
> id: golden-ratio-2

Мы можем приблизить золотое сечение, [[разделив | добавление | вычитая]] два последовательных числа Фибоначчи. 

{.reveal(when="blank-0")} Однако оказывается, что точное значение `φ` не может быть записана как простая дробь: это [__иррациональное число__](gloss:irrational-numbers) , так же, как [`π`](gloss:pi) и `sqrt(2)` и некоторые другие цифры, которые вы видели раньше. 

---
> id: sunflower-growing

### Спирали Фибоначчи 

::: column.grow

Золотое сечение объясняет, почему числа Фибоначчи появляются в природе, как подсолнечник и сосновая шишка, которые вы видели в начале этого раздела. 

Оба эти растения растут наружу от своего центра (часть растения, называемая _меристемой_ ). Когда добавляются новые семена, листья или лепестки, они выталкивают уже существующие наружу. 

Переместите ползунок вправо, чтобы увидеть, как растение растет. Обратите внимание, как каждый лист добавляется с другим оборотом, чем предыдущий. Угол между двумя последовательными листьями всегда одинаков. 

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1
    
    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

Для цветов важно выбрать подходящий угол: листья или семена должны быть примерно одинаково разнесены, чтобы они получали наибольшее количество солнечного света и питательных веществ. На диаграмме ниже вы можете посмотреть, как может выглядеть подсолнух под разными углами между его семенами: 

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Если угол [0°](action:set(0)), все семена будут расти в один длинный ряд от центра. 

{div.inline(slot="legend")} Если угол [`1/2`](action:set(0.5)) на полный оборот (180°) семена будут чередоваться между двумя отдельными «рукавами», которые удаляются от центра. 

{div.inline(slot="legend")} Если вращение составляет другую дробную пропорцию 360°, например [`2/5`](action:set(2/5)) или [`1/3`](action:set(1/3)) или [`3/8`](action:set(3/8)) тогда число «рук» будет таким же, как у [[знаменателя | числитель | главный фактор]] этой фракции. 

{div(slot="legend")} К сожалению, «руки» плохие, потому что они означают, что семена распределяются неравномерно: все пространство между руками тратится впустую. Но если [рациональные числа](gloss:rational-numbers) не сработают, давайте попробуем [иррациональные числа](gloss:irrational-numbers) ! 

{div.inline(slot="legend")} Одним из примеров иррационального числа является [`pi`](gloss:pi) , Но если угол между семенами [`1/pi`](action:set(0.31831)) 360°, мы все еще, кажется, получаем оружие: 22 из них. Это потому, что фракция `22/7 = 3.1429…` это довольно хорошее приближение для `pi` , Что нам действительно нужно, так это иррациональное число, которое _не может_ быть близко аппроксимировано простой дробью. 

{div.inline(slot="legend")} Оказывается, что [золотое сечение](gloss:golden-ratio) - это просто «самое иррациональное» из всех иррациональных чисел. Если угол между семенами [`1/phi`](action:set(0.6180339)) на 360° они кажутся почти идеально разнесенными. И это именно тот угол, который используют растения по всему миру. 

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Вы можете помнить сверху, что отношения последовательных чисел Фибоначчи становятся все ближе и ближе к золотому сечению - и поэтому, если вы посчитаете количество спиралей в растении, вы часто найдете число Фибоначчи. 

Важно помнить, что природа не знает о числах Фибоначчи. Природа также не может решить уравнения для расчета золотого сечения, но в течение миллионов лет у растений было достаточно времени, чтобы опробовать разные углы и найти лучший. 

Растения и животные всегда хотят расти наиболее эффективным способом, и поэтому природа полна регулярных математических моделей. 

:::

---
> id: lucas-numbers

### Fibonachos 

До сих пор мы использовали только рекурсивное уравнение для чисел Фибоначчи. Здесь также есть явное уравнение, но его гораздо сложнее найти: 

{.text-center}`F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Мы также можем попытаться выбрать разные начальные точки для чисел Фибоначчи. Например, если мы начнем с 2, 1, ..., а не с 1, 1, ..., мы получим последовательность, называемую __числами Лукаса__ . 

Получается, что какие бы два стартовых номера вы ни выбрали, результирующие последовательности имеют много общих свойств. Например, отношения последовательных членов _всегда_ будут [сходиться](gloss:sequence-convergence) к золотому сечению. 

{.text-center.s-purple.s-small.no-voice}${a}{a|1|0,10,1} , ${b}{b|1|0,10,1} , _{span.n}${a+b}_ , _{span.n}${a+2×b}_ , _{span.n}${2×a+3×b}_ , _{span.n}${3×a+5×b}_ , _{span.n}${5×a+8×b}_ , _{span.n}${8×a+13×b}_ … 

---
> id: fibonacci-puzzles

Есть много других головоломок, моделей и приложений, связанных с числами Фибоначчи. Вот несколько примеров, которые вы можете попробовать сами: 

::: .box.f-blue

#### Решение проблем 

__1. Делимость Фибоначчи__ 

(а) Какие числа Фибоначчи четные? Есть ли шаблон, где они расположены вдоль последовательности? Вы можете объяснить, почему? 

(б) Какие числа Фибоначчи делятся на 3 (или делятся на 4)? Что ты заметил? 

    hr

__2. Суммы Фибоначчи__ 

Что произойдет, если вы сложите три любых последовательных числа Фибоначчи? Вы можете объяснить, почему? 

    hr

__3. Лестницы Фибоначчи__ 

Поднимаясь по лестнице, я могу либо сделать один шаг, либо перепрыгнуть через два шага за раз. Это означает, что есть много разных возможностей для того, чтобы я мог подняться по лестнице. Например, если есть 5 шагов, у меня есть 8 различных вариантов: 

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Сколько существует вариантов для лестницы с 6, 7 или 8 ступенями? Можете ли вы обнаружить шаблон? И как это связано с числами Фибоначчи? 

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Особые последовательности 

> section: special
> id: special-intro

Помимо [арифметических](gloss:arithmetic-sequence) и [геометрических](gloss:geometric-sequence) последовательностей, [чисел Фибоначчи](gloss:fibonacci-numbers) и [фигурных чисел](gloss:figurate-numbers) , существует множество интересных последовательностей, которые не следуют подобному регулярному шаблону. 

---
> id: primes

### Простые числа 

Один пример, который вы уже видели раньше, - это [__простые числа__](gloss:prime) . Мы говорим, что число является _простым,_ если оно не имеет никаких [факторов,](gloss:factor) [[кроме 1 и само по себе | кроме 1 и 2 | и нет кратных]] . 

---
> id: primes-1

Вот первые несколько простых чисел: 

{.text-center.s-teal} _{.n} 2_ , _{.n} 3_ , _{.n} 5_ , _{.n} 7_ , _{.n} 11_ , _{.n} [[13]]_ , _{.n} [[17]]_ , _{.n} [[19]]_ ,… 

---
> id: primes-2
> goals: p2 p3 p5 p7

К сожалению, простые числа не следуют простой схеме или рекурсивной формуле. Иногда они появляются непосредственно рядом друг с другом (они называются [двойными простыми числами](gloss:twin-primes) ), а иногда между ними возникают огромные промежутки. Похоже, они распределяются почти случайно! 

Простые числа также не имеют простого геометрического представления, такого как [треугольные](gloss:triangle-numbers) или [квадратные числа](gloss:square-numbers) , но немного поработав, мы можем выявить интересные закономерности: 

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Если мы вычеркнем все кратные малых целых чисел, все остальные числа должны быть простыми. Этот метод называется [__ситом Эратосфена__](gloss:sieve-eratosthenes) . 

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} Если мы рисуем диаграмму, которая увеличивается на 1, когда есть простое число, мы получаем «ступенчатую» функцию с захватывающими свойствами. 

:::

---
> id: primes-3

Вы можете узнать больше об этих и других свойствах простых чисел в нашем курсе [делимости и](/course/divisibility/primes) простых чисел. Это одни из самых важных и загадочных понятий в математике! 

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Совершенные числа 

Чтобы определить, является ли число [простым](gloss:prime) , мы должны найти все его [факторы](gloss:factor) . Обычно мы _умножаем_ эти факторы, чтобы получить исходное число, но давайте посмотрим, что произойдет, если мы _сложим_ все факторы числа (исключая само число): 

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }
    
    table.grid.perfect-table
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

Давайте сравним эти числа с их суммой факторов: 

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

Для большинства чисел сумма его факторов [[меньше | лучше чем | равных]] себе. Эти числа называются __недостающими числами__ . 

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

Для нескольких чисел сумма его факторов больше, чем он сам. Эти числа называются __обильными числами__ . 

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Только один номер в приведенном выше списке имеет сумму факторов, _равную_ себе: [[6]] . Это называется [__идеальным числом__](gloss:perfect-numbers) . 

:::

---
> id: perfect-2

Следующее идеальное число - 28, потому что, если мы сложим все его факторы, мы получим `1 + 2 + 4 + 7 + 14 = 28` , После этого идеальные числа становятся намного реже: 

{.text-center.s-purple.s-vertical.perfect-list.no-voice.no-voice} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Обратите внимание, что все эти числа [[четные | кратно 3 | 2 больше, чем квадратное число]] . _{span.reveal(when="blank-0")} Оказывается, они тоже все треугольные числа!_ 

---
> id: perfect-3

::: column.grow

Совершенные числа были впервые изучены древнегреческими математиками, такими как [Евклид](bio:euclid) , [Пифагор](bio:pythagoras) и [Никомах](bio:nicomachus) , более 2000 лет назад. Они вычислили первые несколько совершенных чисел и задались вопросом, могут ли быть какие-то _странные числа_ . 

Сегодня математики использовали компьютеры для проверки первых 10 <sup>1500</sup> чисел (это 1, а затем 1500 нулей), но безуспешно: все найденные ими совершенные числа были четными. До сих пор неизвестно, существуют ли какие-то нечетные совершенные числа, что делает его самой старой нерешенной проблемой во _всей математике_ ! 

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Евклид Александрийский 

:::

---
> id: hailstone

### Последовательность града 

Большинство последовательностей, которые мы видели до сих пор, имели единственное правило или шаблон. Но нет причины, по которой мы не можем объединить несколько разных - например, рекурсивную формулу, подобную этой: 

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Давайте начнем с `x_1 = 5` и посмотрим что получится 

{.text-center.s-orange.with-arrows.no-voice} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

Похоже, что после нескольких терминов последовательность достигает «цикла»: 4, 2, 1 будет повторяться снова и снова, навсегда. 

Конечно, мы могли бы выбрать другую отправную точку, как ${n}{n|10|5,40,1} , Тогда последовательность будет выглядеть так: 

{.text-center.no-voice} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Кажется, что длина последовательности сильно варьируется, но она всегда заканчивается 4, 2, 1 циклом - независимо от того, какое первое число мы выберем. Мы даже можем визуализировать условия последовательности на графике: 

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Обратите внимание, что некоторые отправные точки заканчиваются очень быстро, а другие (например, [31](action:set(31)) или [47](action:set(47)) ) сделать более ста шагов, прежде чем они достигнут 4, 2, 1 цикла. 

---
> id: hailstone-3

::: column.grow

Все последовательности, которые следуют этой рекурсивной формуле, называются [__Последовательностями града__](gloss:hailstone-sequence) , потому что они, кажется, движутся случайным образом вверх и вниз до достижения цикла 4, 2, 1 - точно так же, как градины, которые движутся вверх и вниз в облаке перед падением на Землю. 

В 1937 году математик [Лотар Коллатц](bio:collatz) предложил, чтобы _каждая_ последовательность града в конечном итоге заканчивалась циклом 4, 2, 1 - независимо от того, какое начальное значение вы выберете. Вы уже проверили несколько начальных точек выше, и компьютеры фактически перепробовали все числа до `10^20` - это 100 миллиардов миллиардов или 1, за которыми следуют двадцать нулей. 

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Однако целых чисел бесконечно много. Невозможно проверить каждый из них, и никто не смог найти [доказательства,](gloss:proof) которое работает для всех. 

Как и поиск нечетных совершенных чисел, это все еще открытая проблема в математике. Удивительно, что эти простые шаблоны последовательностей могут привести к вопросам, которые на протяжении веков загадывали даже самых лучших математиков в мире! 

---
> id: look-and-say

### Последовательность «посмотри и скажи» 

Вот еще одна последовательность, которая немного отличается от всех тех, что вы видели выше. Вы можете найти образец? 

{.text-center.s-lime.s-vertical} _{span.n} 1_ , _{span.n} 11_ , _{.n} 21_ , _{.n} 1211_ , _{.n} 111221_ , _{.n} 312211_ ,… 

_{button.next-step} Продолжать_ 

---
> id: look-and-say-1

Эта последовательность называется последовательностью __Look-and-Say__ , и шаблон - это то, что говорит само название: вы начинаете с 1, и каждый следующий термин - это то, что вы получаете, если вы «читаете вслух» предыдущий. Вот пример: 

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Теперь вы можете найти следующие термины? 

{.text-center.s-lime.s-vertical} ..., _{.n} 312211_ , _{.n} [[13112221]]_ , _{.n} [[1113213211]]_ ,… 

---
> id: look-and-say-2

Эта последовательность часто используется как загадка, чтобы сбить с толку математиков - потому что модель выглядит совершенно нематематической. Однако, как выясняется, последовательность имеет много интересных свойств. Например, каждый термин оканчивается на [[1]] , и ни одна цифра больше [[3]] не используется. 

---
> id: look-and-say-3

Британский математик [Джон Конвей](bio:conway) обнаружил, что независимо от того, какое число вы выберете в качестве начального значения, последовательность в конечном итоге будет разделена на отдельные «секции», которые больше не взаимодействуют друг с другом. Конвей назвал это _космологической теоремой_ и назвал различные разделы, используя химические элементы: _водород_ , _гелий_ , _литий_ , ..., вплоть до _плутония_ . 

---
> id: quiz

### Викторина о последовательности 

Теперь вы видели бесчисленное множество различных математических последовательностей - некоторые основаны на геометрических фигурах, некоторые следуют определенным формулам, а другие ведут себя почти случайно. 

В этом тесте вы можете объединить все свои знания о последовательностях. Есть только одна цель: найти шаблон и рассчитать следующие два условия! 

::: .box.f-blue

#### Найти следующий номер 

{.text-center.s-yellow.no-voice} _{span.n} 7_ , _{span.n} 11_ , _{.n} 15_ , _{.n} 19_ , _{.n} 23_ , _{.n} 27_ , _{.n} [[31]]_ , _{.n} [[35]]_ ,… _{span.pattern.reveal(when="blank-0 blank-1")} Выкройка: всегда +4_ 

{.text-center.s-orange.no-voice} _{span.n} 11_ , _{span.n} 14_ , _{.n} 18_ , _{.n} 23_ , _{.n} 29_ , _{.n} 36_ , _{.n} [[44]]_ , _{.n} [[53]]_ ,… _{span.pattern.reveal(when="blank-2 blank-3")} Шаблон: +3, +4, +5, +6,…_ 

{.text-center.s-red.no-voice} _{span.n} 3_ , _{span.n} 7_ , _{.n} 6_ , _{.n} 10_ , _{.n} 9_ , _{.n} 13_ , _{.n} [[12]]_ , _{.n} [[16]]_ ,… _{span.pattern.reveal(when="blank-4 blank-5")} Шаблон: +4, –1, +4, –1,…_ 

{.text-center.s-purple.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{.n} 6_ , _{.n} 12_ , _{.n} 14_ , _{.n} 28_ , _{.n} [[30]]_ , _{.n} [[60]]_ ,… _{span.pattern.reveal(when="blank-6 blank-7")} Шаблон: × 2, +2, × 2, +2,…_ 

{.text-center.s-blue.no-voice} _{span.n} 1_ , _{span.n} 1_ , _{.n} 2_ , _{.n} 3_ , _{.n} 5_ , _{.n} 8_ , _{.n} [[13]]_ , _{.n} [[21]]_ ,… _{span.pattern.reveal(when="blank-8 blank-9")} Выкройка: числа Фибоначчи_ 

{.text-center.s-teal.no-voice} _{span.n} 27_ , _{span.n} 28_ , _{.n} 30_ , _{.n} 15_ , _{.n} 16_ , _{.n} 18_ , _{.n} [[9]]_ , _{.n} [[10]]_ ,… _{span.pattern.reveal(when="blank-10 blank-11")} Шаблон: +1, +2, ÷ 2, +1, +2, ÷ 2,…_ 

{.text-center.s-green.no-voice} _{span.n} 1_ , _{span.n} 9_ , _{.n} 25_ , _{.n} 49_ , _{.n} 81_ , _{.n} 121_ , _{.n} [[169]]_ , _{.n} [[225]]_ ,… _{span.pattern.reveal(when="blank-12 blank-13")} Шаблон: Нечетные квадратные числа_ 

:::

---

## Треугольник Паскаля 

> section: pascals-triangle
> id: pascal-intro

Ниже вы можете увидеть числовую пирамиду, созданную с использованием простого шаблона: она начинается с единственной «1» в верхней части, а каждая следующая ячейка является суммой двух ячеек, расположенных непосредственно выше. Наведите курсор на некоторые ячейки, чтобы увидеть, как они рассчитываются, а затем заполните недостающие: 

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };
    
    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

На этой диаграмме показаны только первые двенадцать строк, но мы могли бы продолжать вечно, добавляя новые строки внизу. Обратите внимание, что треугольник [[симметричен | Прямоугольный | равносторонний]] , который может помочь вам рассчитать некоторые клетки. 

---
> id: pascal-triangle

Треугольник называется треугольником [__Паскаля и__](gloss:pascals-triangle) назван в честь французского математика [Блеза Паскаля](bio:pascal) . Он был одним из первых европейских математиков, исследовавших его закономерности и свойства, но он был известен другим цивилизациям много веков назад: 

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} В 450 г. до н.э. индийский математик [Пингала](bio:pingala) назвал треугольник __«Лестницей горы Меру»__ , названной в честь священной индуистской горы. 

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} В Иране он был известен как __«треугольник Хайям»__ (مثلث خیام), названный в честь персидского поэта и математика [Омара Хайяма](bio:khayyam) . 

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} В Китае математик Цзя Сянь также открыл треугольник. Он был назван в честь его преемника, __«треугольник Ян Хуэй»__ (杨辉 三角). 

:::

Треугольник Паскаля можно создать с помощью очень простого шаблона, но он наполнен удивительными узорами и свойствами. Вот почему он очаровал математиков по всему миру на протяжении сотен лет. 

_{button.next-step} Продолжать_ 

---
> id: pascal-sequences

### Нахождение последовательности 

В предыдущих разделах вы видели множество различных математических последовательностей. Оказывается, что многие из них также могут быть найдены в треугольнике Паскаля: 

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };
    
    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")

####{.btn.yellow} _{span.check(when="blank-0")}_ 

Цифры в первой диагонали с обеих сторон все [[те]] , [[| повышение | даже]] 

::: tab

####{.btn.orange} _{span.check(when="blank-1")}_ 

Числа во второй диагонали с обеих сторон являются [[целыми числами | простые числа | квадратные числа]] . 

::: tab

####{.btn.red} _{span.check(when="blank-2")}_ 

Числа в третьей диагонали с обеих сторон являются [[числами треугольника | квадратные числа | Числа Фибоначчи]] . 

::: tab

####{.btn.purple} _{span.check(when="blank-3")}_ 

Числа в четвертой диагонали являются [[тетраэдрическими числами | кубические числа | полномочия 2]] . 

::: tab

####{.btn.blue} _{span.check(when="blank-4")}_ 

Если вы сложите все числа в ряд, их суммы образуют другую последовательность: [[полномочия двух | идеальные числа | простые числа]] . 

::: tab

####{.btn.teal} _{span.check(when="blank-5")}_ 

В каждой строке, которая имеет простое число во второй ячейке, все последующие числа [[кратны | факторы | инверсии]] этого простого. 

::: tab

####{.btn.green} _{span.check(when="blank-6")}_ 

На диаграмме выше выделены «мелкие» диагонали разных цветов. Если мы сложим числа в каждой диагонали, мы получим [[числа Фибоначчи | Градовые цифры | геометрическая последовательность]] 

:::

---
> id: pascal-sequences-1

Конечно, у каждого из этих шаблонов есть математическая причина, которая объясняет, почему это появляется. Может быть, вы можете найти некоторые из них! 

Другой вопрос, который вы можете задать, - это как часто число появляется в треугольнике Паскаля. Ясно, что существует бесконечно много 1s, один 2, и каждое другое число появляется [[по крайней мере дважды | Хотя бы один раз | ровно в два раза]] , _{span.reveal(when="blank-0")} во второй диагонали с обеих сторон._ 

---
> id: pascal-sequences-2

Некоторые числа в середине треугольника также появляются три или четыре раза. Есть даже несколько, которые появляются шесть раз: вы можете увидеть [120](->.s120) и [3003](->.s3003) четыре раза в треугольнике выше, и они появятся еще два раза каждый в строках 120 и 3003. 

Поскольку 3003 - это число треугольника, оно на самом деле появляется еще два раза в _третьей_ диагонали треугольника, что составляет в общей сложности восемь вхождений. 

Неизвестно, есть ли какие-либо другие числа, которые появляются в треугольнике восемь раз, или есть числа, которые появляются более восьми раз. Американский математик [Дэвид Сингмастер](bio:singmaster) предположил, что существует фиксированный предел того, как часто числа могут появляться в треугольнике Паскаля - но это еще не доказано. 

---
> id: modular
> goals: select

### делимость 

Некоторые паттерны в треугольнике Паскаля не так легко обнаружить. На диаграмме ниже выделите все чётные ячейки: 

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    
    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} Похоже, четное число в треугольнике Паскаля образует другой, меньший [[треугольник | матрица | квадратный]] 

---
> id: modular-1
> goals: c2 c3 c4 c5

Окрашивание каждой ячейки вручную занимает много времени, но здесь вы можете увидеть, что произойдет, если вы сделаете это для еще большего количества строк. А как насчет клеток, делимых на другие числа? 

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    
    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow

Вот Это Да! Цветные клетки всегда появляются в [[треугольниках | квадраты | пары]] (за исключением нескольких одиночных ячеек, которые можно рассматривать как треугольники размера 1). 

Если мы продолжим узор ячеек, делимых на 2, мы получим тот, который очень похож на __треугольник Серпинского__ справа. Подобные формы, которые состоят из простого шаблона, который, кажется, продолжается вечно, становясь все меньше и меньше, называются [__фракталами__](gloss:fractal) . Вы узнаете о них больше в будущем ... 

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Биномиальные коэффициенты 

Есть еще одно важное свойство треугольника Паскаля, о котором нам нужно поговорить. Чтобы понять это, мы попытаемся решить одну и ту же проблему двумя совершенно разными методами, а затем посмотрим, как они связаны. 

{.todo} СКОРО БУДЕТ 

---

## Пределы и сходимости 

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} СКОРО БУДЕТ 
