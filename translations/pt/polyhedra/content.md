# Polígonos e Poliedros

## Polígonos

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

Um [__polígono__](gloss:polygon) é uma forma fechada e plana que possui apenas lados retos. Os polígonos podem ter qualquer número de lados e ângulos, mas os lados não podem ser curvos. Quais das formas abaixo são polígonos?

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

Atribuímos nomes diferentes aos polígonos, dependendo de quantos lados eles têm:

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

### Ângulos em polígonos

Todo polígono com _n_ lados também possui _n_ [ângulos internos](gloss:internal-angle) . Já sabemos que a soma dos ângulos internos de um triângulo é sempre [[180]]°, mas e os outros polígonos?

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

Parece que a soma dos ângulos internos de um quadrilátero é sempre de [[360]]° - exatamente [[duas vezes | três vezes | metade]] da soma dos ângulos em um triângulo. _{span.reveal(when="blank-0 blank-1")} Isso não é coincidência: todo quadrilátero pode ser dividido em dois triângulos._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} O mesmo também funciona para polígonos maiores. Podemos dividir um pentágono em [[3]] triângulos, para que a soma dos ângulos internos seja `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} E podemos dividir um hexágono em [[4]] triângulos, então a soma dos ângulos internos é `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Um polígono com ${x}{x|7|3,15,1} lados terão uma soma de ângulos internos de 180° × ${x-2} = ${(x-2)*180}°. De maneira mais geral, um polígono com _n_ lados pode ser dividido em [[n - 2 | n - 1 | n]] triângulos. Portanto,

{.text-center.reveal(when="blank-0")} Soma dos ângulos internos em um _n_ -gon `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Polígonos convexos e côncavos

::: column.grow

Dizemos que um polígono é [__côncavo__](gloss:concave) se tiver uma seção que "aponte para dentro". Você pode imaginar que esta parte ["desmoronou"](target:cave) . Polígonos que _não_ são côncavos são chamados de [__convexos__](gloss:convex) .

Há duas maneiras de identificar facilmente polígonos côncavos: eles têm pelo menos um [ângulo interno maior que 180°](target:angle) . Eles também têm pelo menos uma [diagonal que fica _fora_ do polígono](target:diagonal) .

Em polígonos convexos, por outro lado, todos os ângulos internos são inferiores a [[180]]° e todas as diagonais estão [[dentro | fora]] do polígono.

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

Quais desses polígonos são côncavos?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Polígonos regulares

Dizemos que um polígono é [__regular__](gloss:regular-polygon) se todos os seus lados tiverem o mesmo comprimento e todos os ângulos tiverem o mesmo tamanho. Quais dessas formas são polígonos regulares?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Os polígonos regulares podem ter vários tamanhos - mas todos os polígonos regulares com o mesmo número de lados [[são semelhantes | são congruentes | tem a mesma área]] !

---
> id: regular-2

Já sabemos a soma de todos os [ângulos internos](gloss:internal-angle) em polígonos. Para polígonos regulares, todos esses ângulos têm [[o mesmo tamanho | são ângulos alternativos]] , para que possamos calcular o tamanho de um único ângulo interno:

{.text-center.reveal(when="blank-0")} angle = <mfrac><mrow>[[soma de todos os ângulos | número de ângulos]]</mrow><mrow>[[número de ângulos | soma de todos os ângulos]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} E se `n=3` obtemos o tamanho dos ângulos internos de um triângulo equilátero - já sabemos que deve ser [[60]]°. _{span.reveal(when="blank-3")} Em um polígono regular com ${x}{x|6|3,12,1} lados, todo ângulo interno é de 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### Área de polígonos regulares

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

Aqui você pode ver um [polígono regular](gloss:regular-polygon) com ${n}{n|5|4,12,1} lados. Cada lado tem comprimento [{.pill.green} 1m](target:base) . Vamos tentar calcular sua área!

Primeiro, podemos dividir o polígono em ${toWord(n)} congruente, [[isósceles | equilátero |]] triângulos [[retângulos]] .

{.reveal(when="blank-0")} Já conhecemos a [[base | altura | área]] desses triângulos, mas também precisamos da [[altura | pernas | medianas]] para poder calcular sua área. _{span.reveal(when="blank-2")} Em polígonos regulares, essa altura às vezes é chamada de [{.pill.yellow} apótema](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Observe que existe um [triângulo retângulo](target:right-triangle) formado pelo apótema e metade da base do triângulo isósceles. Isso significa que podemos usar trigonometria!

{.reveal(when="blank-1 blank-2" delay=2000)} o [{.pill.blue} ângulos base](target:base-angle) do triângulo isósceles (vamos chamá-los α) são [[metade da | o mesmo | o dobro do]] tamanho dos [ângulos internos](target:int-angle) do polígono:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Para encontrar o apótema, podemos usar a definição de [[tangentes | seno | cosseno]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Agora, a área do [triângulo isósceles](target:isosceles-triangle) é

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} O polígono consiste em ${toWord(n)} desses triângulos isósceles, todos com a mesma área. Portanto, a área total do polígono é

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Quadriláteros

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

No [curso anterior](/course/triangles) , investigamos muitas propriedades diferentes de triângulos. Agora vamos dar uma olhada nos quadriláteros.

Um _quadrilátero regular_ é chamado de [[quadrado | retângulo | quadrilátero equilateral]] . Todos os seus lados têm o mesmo comprimento e todos os seus ângulos são iguais.

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

{.caption} Um __quadrado__ é um quadrilátero com [quatro lados iguais](target:side) e [quatro ângulos iguais](target:angle) .

:::

---
> id: quadrilaterals-1

Para quadriláteros ligeiramente "menos regulares", temos duas opções. Se apenas queremos que os _ângulos_ sejam iguais, obtemos um [__retângulo__](gloss:rectangle) . Se apenas queremos que os _lados_ sejam iguais, obtemos um [__losango__](gloss:rhombus) .

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

{.caption} Um __retângulo__ é um quadrilátero com [quatro ângulos iguais](target:angle) .

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

{.caption} Um __losango__ é um quadrilátero com [quatro lados iguais](target:side) .

:::

---
> id: quadrilaterals-2

Existem alguns outros quadriláteros, que são ainda menos regulares, mas ainda possuem certas propriedades importantes:

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

{.caption} Se ambos os pares de lados _opostos_ são [paralelos](gloss:parallel) , obtemos um __paralelogramo__ .

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

{.caption} Se dois pares de lados _adjacentes_ tiverem o mesmo comprimento, obteremos uma __pipa__ .

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

{.caption} Se pelo menos um par de lados opostos é paralelo, obtemos um __trapézio__ .

:::

---
> id: quadrilaterals-venn

Os quadriláteros podem se enquadrar em várias dessas categorias. Podemos visualizar a hierarquia de diferentes tipos de quadriláteros como um [diagrama de Venn](gloss:venn-diagram) :

    figure: include svg/venn.svg

Por exemplo, todo retângulo também é um [[paralelogramo | losango | quadrado]] , e todo [[losango | trapézio | O paralelogramo]] também é uma pipa. [[Às vezes,]] um losango [[| sempre | nunca]] um quadrado e um retângulo são [[sempre | as vezes | nunca]] um trapézio.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Para evitar qualquer ambiguidade, geralmente usamos apenas o tipo mais específico.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Agora escolha quatro pontos, em qualquer lugar da caixa cinza à esquerda. _{span.reveal(when="points")} Podemos conectar todos eles para formar um quadrilátero._

{.reveal(when="points" delay=1000)} Vamos encontrar o ponto médio de cada um dos quatro lados. Se conectarmos os pontos médios, obteremos [[outro quadrilátero | um triangulo | um retângulo]] .

{.reveal(when="blank-0")} Tente mover os vértices do quadrilátero externo e observe o que acontece com o menor. Parece que não é _qualquer_ quadrilátero, mas sempre um [[paralelogramo | trapézio | retângulo]] !

{.reveal(when="blank-1")} Mas porque é esse o caso? Por que o resultado de _qualquer_ quadrilátero sempre acaba sendo um paralelogramo? Para nos ajudar a explicar, precisamos desenhar uma das [diagonais](gloss:polygon-diagonal) do quadrilátero original.

{.reveal(when="diagonal")} A diagonal divide o quadrilátero em [dois triângulos](target:triangle) . E agora você pode ver que [dois dos lados](target:midsegment) do quadrilátero interno são na verdade [[segmentos intermediários | medianas | bissetores perpendiculares]] desses triângulos.

{.reveal(when="blank-2")} No [curso anterior](/course/triangles/properties) , mostramos que os [segmentos intermediários](gloss:triangle-midsegment) de um triângulo são sempre paralelos à sua base. Nesse caso, significa que [ambos os lados](target:parallel) são paralelos à diagonal - portanto, eles também devem ser [[paralelos um ao outro | o mesmo comprimento | perpendiculares entre si]] .

{.reveal(when="blank-3" delay=2000)} Podemos fazer exatamente o mesmo com a [segunda diagonal](target:other) do quadrilátero, para mostrar que os dois pares de lados opostos são paralelos. E isso é tudo o que precisamos para provar que o quadrilátero interno é um [paralelogramo](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### Paralelogramos

Acontece que os paralelogramos têm muitas outras propriedades interessantes, além de os lados opostos serem paralelos. Qual das seis afirmações a seguir é verdadeira?

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

Obviamente, simplesmente "observar" essas propriedades não é suficiente. Para ter certeza de que _sempre_ são verdadeiras, precisamos _provar_ :

::: tab

#### Lados e ângulos opostos _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Vamos tentar provar que os lados e ângulos opostos em um paralelogramo são sempre congruentes.

Comece desenhando uma das diagonais do paralelogramo.

{.reveal(when="diagonal")} A diagonal cria quatro novos ângulos com os lados do paralelogramo. Os dois [ângulos vermelhos](target:red-angle) e os dois [ângulos azuis](target:blue-angle) são [ângulos alternados](gloss:alternate-angles) , portanto, cada um deles deve ser [[congruente | adjacente | suplementar]] .

{.reveal(when="blank-0")} Agora, se olharmos para os [dois triângulos](target:triangles) criados pela diagonal, vemos que eles têm dois ângulos congruentes e [um lado congruente](target:diagonal) . Pelo [[ASA | AAS | Na]] condição de congruência [[AA]] , ambos os triângulos devem ser congruentes.

{.reveal(when="blank-1")} Isso significa que as outras partes correspondentes dos triângulos também devem ser congruentes: em particular, os dois [pares de lados opostos](target:sides) são congruentes e os dois [pares de ângulos opostos](target:angles) são congruentes. _{span.qed}_

:::

{.reveal(when="blank-1")} Acontece que o inverso também é verdadeiro: se ambos os pares de lados opostos (ou ângulos) em um quadrilátero são congruentes, então o quadrilátero deve ser um paralelogramo.

::: tab

#### Diagonais _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Agora prove que as duas diagonais em um paralelogramo se cortam.

Vamos pensar nos dois triângulos amarelos gerados pelas diagonais:

* Acabamos de provar que os [dois lados verdes](target:side1) são congruentes, porque são lados opostos de um paralelogramo. * Os [dois ângulos vermelhos](target:anglesR) e [dois azuis](target:anglesB) são congruentes, porque são [[ângulos alternados | ângulos opostos | ângulos retos]] .

{.reveal(when="blank-2")} Pelo [[ASA | SSS | Como]] condição [[AAS]] , os dois triângulos amarelos também devem ser congruentes.

{.reveal(when="blank-3")} Agora podemos usar o fato de que as partes correspondentes dos triângulos congruentes também são congruentes, para concluir que [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) e [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . Em outras palavras, as duas diagonais se cruzam em seus pontos médios. _{span.qed}_

:::

{.reveal(when="blank-3")} Como antes, o oposto também é verdadeiro: se as duas diagonais de um quadrilátero se bissectam, então o quadrilátero é um paralelogramo.

:::

---
> id: kites

### Kites

::: column.grow

Mostramos acima que os dois pares de [[opostos | os]] lados [[adjacentes]] de um paralelogramo são congruentes. Em uma pipa, dois pares de lados _adjacentes_ são congruentes.

O nome _Kite_ vem claramente de sua forma: parece com as pipas que você pode voar no céu. No entanto, de todos os quadriláteros especiais que vimos até agora, o Kite é o único que também pode ser [côncavo](gloss:concave) : se tiver o formato de um dardo ou flecha:

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

{.caption} Uma pipa convexa

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

{.caption} Uma pipa côncava que se parece com uma flecha

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

Você deve ter notado que todas as pipas são [[simétricas | similar]] . _{span.reveal(when="blank-0")} O [eixo da simetria](gloss:axis-of-symmetry) é [[uma das diagonais | um dos lados | um meio segmento]] ._

{.reveal.r(when="blank-1")} A diagonal divide a pipa em [dois triângulos congruentes](target:triangle1) . Sabemos que eles são congruentes com a condição [SSS](gloss:triangle-sss) : ambos os triângulos têm [três lados congruentes](target:sss) (vermelho, verde e azul). _{button.next-step} Continuar_

{.reveal.r(when="next-0")} Usando o [CPOCT](gloss:cpoct) , [sabemos](gloss:cpoct) , portanto, que os [ângulos correspondentes](target:angles) também devem ser congruentes. _{button.next-step} Continuar_

{.reveal.r(when="next-1")} Isso significa, por exemplo, que a [diagonal](target:d1) é uma [[bissetriz | perpendicular | mediana]] dos [dois ângulos](target:vAngle) nas extremidades. _{button.next-step} Continuar_

{.reveal.r(when="next-2")} Podemos ir ainda mais longe: se desenharmos a outra diagonal, obteremos [mais dois triângulos menores](target:triangle2) . Eles também devem ser congruentes, devido à condição do [SAS](gloss:triangle-sss) : eles têm os mesmos [dois lados e ângulo incluído](target:sas) . _{button.next-step} Continuar_

{.reveal(when="next-3")} Isso significa que o [ângulo α](target:alpha) também deve ser o mesmo que o [ângulo β](target:beta) . Como eles são adjacentes, [os ângulos suplementares](gloss:supplementary-angles) α e β devem ser [[90]]°.

{.reveal(when="blank-3")} Em outras palavras, as diagonais de uma pipa são sempre [[perpendiculares | paralelo]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Área dos Quadriláteros

Ao calcular a área de triângulos no curso anterior, usamos o truque de convertê-la em um [[retângulo | quadrado | pentágono]] . Acontece que também podemos fazer isso em alguns quadriláteros:

::: tab

#### Paralelogramo _{span.check(when="draw-1 blank-1")}_

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

À esquerda, tente desenhar um retângulo que tenha a mesma área que o paralelogramo.

{.reveal(when="draw-1")} Você pode ver que o [triângulo](target:triangle-1) que [falta](target:triangle-1) à esquerda é [[exatamente o mesmo que | menor que | maior que]] o [triângulo sobreposto](target:triangle-2) à direita? _{span.reveal(when="blank-1")} Portanto, a área de um paralelogramo é_

{.text-center.reveal(when="blank-1")} Área = __{.i.m-green} base__ × __{.i.m-yellow} altura__

{.reveal(when="blank-1" delay=1000)} _Cuidado ao medir a altura de um paralelogramo: geralmente não é o mesmo que um dos dois lados._

:::

::: tab

#### Trapézio _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Lembre-se de que os trapézios são quadrilaterais com um par de [lados paralelos](target:bases) . Esses lados paralelos são chamados de __bases__ do trapézio.

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

Como antes, tente desenhar um retângulo que tenha a mesma área desse trapézio. _{span.reveal(when="draw-2")} Você pode ver como os [triângulos ausentes e adicionados](target:triangles-3) à esquerda e à direita se cancelam?_

{.reveal(when="draw-2" delay=2000)} o [{.pill.green} altura](target:t-height) deste retângulo é a [[distância entre | média de | comprimento dos]] [lados paralelos](target:bases) do trapézio.

{.reveal.r(when="blank-2")} o [{.pill.yellow} largura](target:t-width) do retângulo é a distância entre os [[pontos médios | pontos finais]] dos dois lados não paralelos do trapézio. _{span.reveal(when="blank-3")} Isso é chamado de meio __segmento__ do trapézio._ _{button.next-step.reveal(when="blank-3")} Continuar_

{.reveal(when="next-0")} Como nos [triângulos](gloss:triangle-midsegment) , o segmento intermediário de um trapézio é [[paralelo ao | perpendicular a | o mesmo comprimento que]] suas duas bases. O comprimento do meio segmento é a média dos comprimentos das bases: `(a+c)/2` .

{.reveal(when="blank-4")} Se combinarmos tudo isso, obteremos uma equação para a área de um trapézio com os lados paralelos [_a_](target:base-2) e [_ce_](target:base-1) altura [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Pipa _{span.check(when="blank-5")}_

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

Nesta pipa, as [duas diagonais](target:diag3) formam a largura e a altura de um grande [retângulo](target:rect4) que circunda a pipa.

A área desse retângulo é [[duas vezes | o mesmo que | três vezes]] a área da pipa. _{span.reveal(when="blank-5")} Você consegue ver como cada um dos [quatro triângulos](target:inside) que compõem a pipa é igual às [quatro lacunas](target:outside) fora dela?_

{.reveal(when="blank-5")} Isso significa que a área de uma pipa com diagonais [{.i.pill.green} d1](target:d31) e [{.i.pill.yellow} d2](target:d32) é

{.text-center.reveal(when="blank-5")} _Área_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32)

:::

::: tab

#### Rhombus _{span.check(when="blank-6 blank-7")}_

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

Um [losango](gloss:rhombus) é um quadrilátero que possui quatro lados congruentes. Você deve se lembrar que todo losango é um [[paralelogramo | retângulo | quadrado]] - e também uma [[pipa | hexágono | polígono côncavo]] .

{.reveal(when="blank-6 blank-7")} Isso significa que, para encontrar a área de um losango, podemos usar a equação para a área de um paralelogramo ou a área de uma pipa:

{.text-center.reveal(when="blank-6 blank-7")} _Área_ = [{.i.pill.blue} base](target:base) × [{.i.pill.red} height](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42)

{.reveal(when="blank-6 blank-7" delay=1000)} _Em contextos diferentes, você pode receber partes diferentes de um losango (lados, altura, diagonais) e escolher a equação mais conveniente._

:::

:::



---

## Pavimentações

> section: tessellations
> id: tessellations
> translated: auto

[Polígonos](gloss:polygon) aparecem em toda parte na natureza. Eles são especialmente úteis se você deseja agrupar uma área grande, porque é possível encaixar polígonos sem espaços ou sobreposições. Padrões como esse são chamados de [__mosaicos__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Hexagonal | Triangular |]] Favo de mel [[quadrático]]

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Pele de cobra de leite de Sinaloan

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Estrutura celular das folhas

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Colunas de basalto na calçada do gigante na Irlanda do Norte

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Pele de abacaxi

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Concha de uma tartaruga

:::

---
> id: tessellations-1

Os seres humanos copiaram muitos desses padrões naturais em arte, arquitetura e tecnologia - da Roma antiga até o presente. Aqui estão alguns exemplos:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Retangular | Quadrático |]] Padrão de pavimento [[hexagonal]]

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Estufa no Eden Project na Inglaterra

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaico em Alhambra

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Triangular | Hexagonal |]] Telhado [[retangular]] no Museu Britânico em Londres

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Pavilhão de mosaico celular em Sydney

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Estudo da Divisão Regular do Avião com Répteis_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Aqui você pode criar seus próprios mosaicos usando polígonos regulares. Simplesmente arraste novas formas da barra lateral para a tela. Quais as formas de mosaico bem? Existe alguma forma que não exagere? Tente criar padrões interessantes!

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

### Pavimentações de polígonos regulares

Você deve ter notado que alguns [polígonos regulares](gloss:regular-polygon) (como [[quadrados | pentágonos]] ) pavimentam muito facilmente, enquanto outros (como [[pentágonos | triângulos | hexágonos]] ) não parecem ter um mosaico.

---
> id: tessellation-regular-1

Isso tem a ver com o tamanho de seus [ângulos internos](gloss:internal-angle) , que aprendemos a calcular antes. Em todos os [vértices](gloss:polygon-vertex) do mosaico, os ângulos internos de vários polígonos diferentes se encontram. Precisamos de todos esses ângulos para somar [[360]]°, caso contrário, haverá uma lacuna ou uma sobreposição.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Triângulos em [[mosaico | não exagere]] _{span.reveal(when="blank-0")} porque 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Quadrados em [[mosaico | não exagere]] _{span.reveal(when="blank-1")} porque 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Pentágonos [[não pavimentam | tessellate]] _{span.reveal(when="blank-2")} porque múltiplos de 108° não somam 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Hexágonos em [[mosaico | não exagere]] _{span.reveal(when="blank-3")} porque 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Da mesma forma, você pode verificar se, assim como os pentágonos, qualquer polígono regular com 7 ou mais lados não é um mosaico. Isso significa que os únicos polígonos regulares que são mosaicos são triângulos, quadrados e hexágonos!

É claro que você pode combinar diferentes tipos de polígonos regulares em um mosaico, desde que seus ângulos internos possam somar 360°:

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

### Pavimentações de polígonos irregulares

Também podemos tentar fazer mosaicos com [polígonos irregulares](gloss:irregular-polygon) - desde que tenhamos cuidado ao girá-los e organizá-los.

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

Acontece que você pode mosaico não apenas triângulos equilaterais, mas _qualquer triângulo_ ! Tente mover os [vértices](target:vertex) neste diagrama.

A soma dos ângulos internos de um triângulo é de [[180]]°. Se usarmos cada ângulo [[duas vezes | uma vez | três vezes]] em cada vértice do mosaico, obtemos 360°:

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

Surpreendentemente, _qualquer quadrilátero_ também pavimenta! A soma dos ângulos internos é de [[360]]°, portanto, se usarmos cada ângulo [[uma vez | duas vezes | três vezes]] em cada vértice do mosaico, obtemos 360°.

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

Pentágonos são um pouco mais complicados. Já vimos que pentágonos _regulares_ [[não pavimentam | mosaico]] , mas e os não-regulares?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Aqui estão três exemplos diferentes de pavimentações com pentágonos. Eles não são _regulares_ , mas são polígonos de 5 lados perfeitamente válidos.

Até agora, os matemáticos encontraram apenas 15 tipos diferentes de mosaicos com pentágonos (convexos) - o mais recente foi descoberto em 2015. Ninguém sabe se existem outros ou se esses 15 são os únicos…

---
> id: escher

### Pavimentações em Arte

Os mosaicos são uma ferramenta e inspiração para muitos artistas, arquitetos e designers - o mais famoso é o artista holandês [MC Escher](bio:escher) . O trabalho de Escher contém criaturas, padrões e paisagens estranhas e mutantes:

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

Essas obras de arte geralmente parecem divertidas e sem esforço, mas os princípios matemáticos subjacentes são os mesmos de antes: ângulos, rotações, traduções e polígonos. Se a matemática não estiver certa, o mosaico não vai funcionar!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

Todos os mosaicos que vimos até agora têm uma coisa em comum: são __periódicos__ . Isso significa que eles consistem em um padrão regular que é repetido várias vezes. Eles podem continuar para sempre em todas as direções e terão a mesma aparência em todos os lugares.

Na década de 1970, o matemático e físico britânico [Roger Penrose](bio:penrose) descobriu [mosaicos](bio:penrose) _não periódicos_ - eles ainda continuam infinitamente em todas as direções, mas _nunca_ parecem exatamente iguais. Eles são chamados de __inclinações de Penrose__ e você só precisa de alguns tipos diferentes de polígonos para criar um:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose estava explorando mosaicos apenas por diversão, mas acontece que a estrutura interna de alguns materiais reais (como o alumínio) segue um padrão semelhante. O padrão foi usado até em papel higiênico, porque os fabricantes perceberam que um padrão não periódico pode ser enrolado sem protuberâncias.

---

## Poliedros

> section: polyhedra
> id: polyhedra
> translated: auto

Até agora, acabamos de analisar o que podemos fazer com polígonos em um mundo bidimensional e plano. Um [__poliedro__](gloss:polyhedron) é um objeto tridimensional formado por polígonos. aqui estão alguns exemplos:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Poliedros não podem conter superfícies curvas - esferas e cilindros, por exemplo, não são poliedros.

Os polígonos que compõem um poliedro são chamados de [__faces__](gloss:polyhedron-face) . As linhas nas quais duas faces estão conectadas são chamadas [__arestas__](gloss:polyhedron-edge) e os cantos onde as arestas se encontram são chamados [__vértices__](gloss:polyhedron-vertex) .

---
> id: euler

Os poliedros têm muitas formas e tamanhos diferentes - desde cubos simples ou pirâmides com poucas faces a objetos complexos como a estrela acima, que possui 60 faces triangulares. Acontece, no entanto, que _todos os_ poliedros têm uma propriedade importante em comum:

::: .theorem

__Fórmula de Poliedro de Euler__
Em todo poliedro, o número de faces ( _F_ ) mais o número de vértices ( _V_ ) é dois a mais que o número de arestas ( _E_ ). Em outras palavras,

{.text-center}`F + V = E + 2`

:::

Por exemplo, se um poliedro tem 12 faces e 18 vértices, sabemos que ele deve ter [[28]] arestas.

---
> id: euler-1

Essa equação foi descoberta pelo famoso matemático suíço [Leonard Euler](bio:euler) . É verdade para qualquer poliedro, desde que não contenha nenhum orifício.

Se você tentar diferentes poliedros, como os acima, verá que a fórmula de Euler sempre funciona. Em [um curso posterior,](/course/graph-theory/planar-graphs) você aprenderá como provar matematicamente.

---

## Redes e Seções Transversais

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prismas e pirâmides

> section: prisms-pyramids
> sectionStatus: dev

FAÇAM

---

## Escalando formas e sólidos

> section: scaling
> sectionStatus: dev

FAÇAM

---

## Sólidos platônicos

> section: platonic
> id: platonic
> translated: auto

No início deste curso, definimos [polígonos regulares](gloss:regular-polygon) como [polígonos](gloss:regular-polygon) particularmente "simétricos", onde todos os lados e ângulos são iguais. Podemos fazer algo semelhante para o poliedro.

Em um _poliedro regular,_ todas as [faces](gloss:polyhedron-face) são do mesmo tipo de polígono regular e o mesmo número de faces se encontra em todos os [vértices](gloss:polyhedron-vertex) . Os poliedros com essas duas propriedades são chamados [__sólidos platônicos__](gloss:platonic-solid) , nomeados em homenagem ao filósofo grego [Platão](bio:plato) .

 Então, como são os sólidos platônicos - e quantos deles existem? Para criar uma forma tridimensional, precisamos de pelo menos [[três]] faces para se encontrar em cada vértice. Vamos começar sistematicamente com o menor polígono regular: triângulos equilaterais:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Se criarmos um poliedro em que três [triângulos equilaterais se](gloss:equilateral-triangle) encontram em cada vértice, obtemos a forma à esquerda. É chamado de __tetraedro__ e tem [[4]] faces. _{.reveal(when="blank-0")} ("Tetra" significa "quatro" em grego)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Se quatro triângulos equilaterais se encontram em cada vértice, obtemos um sólido platônico diferente. É chamado de __octaedro__ e tem [[8]] faces. _{.reveal(when="blank-0")} ("Octa" significa "oito" em grego. Assim como "Octógono" significa formato de 8 lados, "Octaedro" significa sólido de 8 faces.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Se [[cinco]] triângulos se encontram em cada vértice, obtemos o __icosaedro__ . Tem [[20]] faces. _{.reveal(when="blank-1")} ("Icosa" significa "vinte" em grego.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Se [[seis]] triângulos se encontram em cada vértice, algo diferente acontece: simplesmente obtemos [[um mosaico | um quadrilátero | outro icosaedro]] , _{span.reveal(when="blank-1")} em vez de um poliedro tridimensional._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

E sete ou mais triângulos em todos os vértices também não produzem novos poliedros: não há espaço suficiente ao redor de um vértice, para caber em tantos triângulos.

:::

Isso significa que encontramos [[três]] sólidos platônicos compostos por triângulos. Vamos para o próximo polígono regular: quadrados.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Se [[três]] quadrados se encontram em cada vértice, obtemos o __cubo__ . Assim como os dados, ele tem [[6]] faces. _{span.reveal(when="blank-1")} Às vezes, o cubo também é chamado de _hexaedro_ , depois da palavra grega "hexa" para "seis"._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Se [[quatro]] quadrados se encontram em cada vértice, obtemos [[outro mosaico | um tetraedro | outro cubo]] . _{span.reveal(when="blank-1")} E, como antes, cinco ou mais quadrados também não funcionam._

:::

---
> id: platonic-dodecahedron

Em seguida, vamos tentar pentágonos regulares:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Se [[três]] pentágonos se encontram em cada vértice, obtemos o __dodecaedro__ . Tem [[12]] faces. _{.reveal(when="blank-1")} ("Dodeca" significa "doze" em grego.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Como antes, quatro ou mais pentágonos [[não funcionam | são possíveis]] porque não há espaço suficiente.

:::

---
> id: platonic-hexagons

O próximo polígono regular a ser experimentado são hexágonos:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Se três hexágonos se encontram em cada vértice, obtemos imediatamente um [[mosaico | poliedro | hexaedro]] . _{span.reveal(when="blank-0")} Como não há espaço para mais de três, parece que não há sólidos platônicos constituídos por hexágonos._

:::

---
> id: platonic-final

O mesmo acontece com todos os polígonos regulares com mais de seis lados. Eles não pavimentam, e certamente não temos polígonos tridimensionais.

Isso significa que existem apenas [[cinco]] sólidos platônicos! Vamos dar uma olhada em todos eles juntos:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tetraedro__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] Faces_
_{span.dual} [[4]] vértices_
_{span.dual} [[6]] arestas_

::: column.grow.text-center(width=120)

__Cubo__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] Faces_
_{span.dual(target="dual1")} [[8]] vértices_
_{span.dual} [[12]] arestas_

::: column.grow.text-center(width=120)

__Octaedro__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] Faces_
_{span.dual(target="dual1")} [[6]] vértices_
_{span.dual} [[12]] arestas_

::: column.grow.text-center(width=120)

__Dodecaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] Faces_
_{span.dual(target="dual2")} 20 vértices_
_{span.dual} 30 arestas_

::: column.grow.text-center(width=120)

__Icosaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] Faces_
_{span.dual(target="dual2")} 12 vértices_
_{span.dual} 30 arestas_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Observe como o número de faces e vértices é [[trocado | o mesmo]] para [cubo e octaedro](target:dual1) , assim como [dodecaedro e icosaedro](target:dual2) , enquanto o número de arestas [[permanece o mesmo | são diferentes]] . Esses pares de sólidos platônicos são chamados de [__sólidos duplos__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Podemos transformar um poliedro em seu dual, substituindo cada face por um vértice e cada vértice por uma face. Essas animações mostram como:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

O tetraedro é duplo consigo mesmo. Como possui o mesmo número de faces e vértices, trocá-los não mudaria nada.

---
> id: platonic-elements

[Platão](bio:plato) acreditava que toda a matéria do Universo consiste em quatro elementos: Ar, Terra, Água e Fogo. Ele achava que todo elemento correspondia a um dos sólidos platônicos, enquanto o quinto representaria o universo como um todo. Hoje sabemos que existem mais de 100 elementos diferentes que consistem em átomos esféricos, e não em poliedros.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Sólidos Arquimedeanos

> id: archimedean

Os sólidos platônicos são poliedros particularmente importantes, mas existem inúmeros outros.

[__Os sólidos arquimedianos__](gloss:archimedean-solid) , por exemplo, ainda precisam ser compostos de [polígonos regulares](gloss:regular-polygon) , mas você pode usar vários tipos diferentes. Eles têm o nome de outro matemático grego, [Arquimedes de Siracusa](bio:archimedes) , e há 13 deles:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tetraedro truncado__
8 faces, 12 vértices, 18 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__
14 faces, 12 vértices, 24 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cubo truncado__
14 faces, 24 vértices, 36 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Octaedro truncado__
14 faces, 24 vértices, 36 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__
26 faces, 24 vértices, 48 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cuboctaedro truncado__
26 faces, 48 vértices, 72 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 faces, 24 vértices, 60 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecaedro__
32 faces, 30 vértices, 60 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Dodecaedro truncado__
32 faces, 60 vértices, 90 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Icosaedro truncado__
32 faces, 60 vértices, 90 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 faces, 60 vértices, 120 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodecaedro truncado__
62 faces, 120 vértices, 180 arestas

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Dodecaedro de Snub__
92 faces, 60 vértices, 150 arestas

:::

---
> id: polyhedra-applications

### Formulários

Platão estava errado ao acreditar que todos os elementos consistiam em sólidos platônicos. Mas os poliedros comuns têm muitas propriedades especiais que os fazem aparecer em outros lugares da natureza - e podemos copiar essas propriedades na ciência e na engenharia.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Muitos __vírus__ , __bactérias__ e outros pequenos __organismos__ têm o formato de [icosaedra](gloss:icosahedron) . Os vírus, por exemplo, devem incluir seu material genético dentro de uma concha de muitas unidades de proteína idênticas. O icosaedro é a maneira mais eficiente de fazer isso, porque consiste em alguns elementos regulares, mas tem quase o formato de uma esfera.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Muitas __moléculas__ têm a forma de poliedros regulares. O exemplo mais famoso é `C_60` que consiste em 60 átomos de carbono dispostos na forma de um [icosaedro truncado](gloss:truncated-icosahedron) .

Foi descoberto em 1985, quando os cientistas pesquisaram poeira interestelar. Eles o chamaram de “Buckyball” (ou Buckminsterfullerene), em homenagem ao arquiteto [Buckminster Fuller](bio:fuller) , famoso por construir edifícios com aparência semelhante.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

A maioria dos __cristais__ tem seus átomos dispostos em uma grade regular composta por [tetraedros](gloss:tetrahedron) , [cubos](gloss:cube) ou [octaedros](gloss:octahedron) . Quando eles quebram ou quebram, você pode ver essas formas em uma escala maior.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

O tetraedro e a octaedra são incrivelmente rígidos e estáveis, o que os torna muito úteis na __construção__ . _As estruturas espaciais_ são estruturas poligonais que podem suportar telhados grandes e pontes pesadas.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Os sólidos platônicos também são usados para criar __dados__ . por causa de sua simetria, todos os lados têm [probabilidade](gloss:probability) de aterrissar para cima - então os dados são justos.

O [icosaedro truncado](gloss:truncated-icosahedron) é provavelmente o poliedro mais famoso do mundo: é a forma do futebol.

:::
