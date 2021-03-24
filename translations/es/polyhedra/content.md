# Polígonos y Poliedros

## Polígonos

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

Un [__polígono__](gloss:polygon) es una forma cerrada y plana que solo tiene lados rectos. Los polígonos pueden tener cualquier número de lados y ángulos, pero los lados no pueden ser curvos. ¿Cuál de las siguientes formas son polígonos?

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

Damos diferentes nombres a los polígonos, dependiendo de cuántos lados tengan:

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

### Ángulos en polígonos

Cada polígono con _n_ lados también tiene _n_ [ángulos internos](gloss:internal-angle) . Ya sabemos que la suma de los ángulos internos en un triángulo es siempre [[180]]°, pero ¿qué pasa con otros polígonos?

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

Parece que la suma de los ángulos internos en un cuadrilátero es siempre [[360]]°, exactamente [[dos veces | tres veces | La mitad de]] la suma de ángulos en un triángulo. _{span.reveal(when="blank-0 blank-1")} Esto no es una coincidencia: cada cuadrilátero se puede dividir en dos triángulos._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Lo mismo también funciona para polígonos más grandes. Podemos dividir un pentágono en [[3]] triángulos, por lo que su suma de ángulos internos es `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Y podemos dividir un hexágono en [[4]] triángulos, por lo que su suma de ángulos internos es `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Un polígono con ${x}{x|7|3,15,1} los lados tendrán una suma de ángulo interno de 180° × ${x-2} = ${(x-2)*180}°. Más generalmente, un polígono con _n_ lados se puede dividir en [[n - 2 | n - 1 | n]] triángulos Por lo tanto,

{.text-center.reveal(when="blank-0")} Suma de ángulos internos en un _n_ -gon `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Polígonos convexos y cóncavos

::: column.grow

Decimos que un polígono es [__cóncavo__](gloss:concave) si tiene una sección que "apunta hacia adentro". Puedes imaginar que esta parte se ha ["derrumbado"](target:cave) . Los polígonos que _no_ son cóncavos se llaman [__convexos__](gloss:convex) .

Hay dos formas de identificar fácilmente los polígonos cóncavos: tienen al menos un [ángulo interno mayor de 180°](target:angle) . También tienen al menos una [diagonal que se encuentra _fuera_ del polígono](target:diagonal) .

En los polígonos convexos, por otro lado, todos los ángulos internos son inferiores a [[180]]°, y todas las diagonales se encuentran [[dentro | fuera]] del polígono

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

¿Cuál de estos polígonos son cóncavos?

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

Decimos que un polígono es [__regular__](gloss:regular-polygon) si todos sus lados tienen la misma longitud y todos los ángulos tienen el mismo tamaño. ¿Cuál de estas formas son polígonos regulares?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Los polígonos regulares pueden venir en muchos tamaños diferentes, pero todos los polígonos regulares con el mismo número de lados [[son similares | son congruentes | tener la misma zona]] !

---
> id: regular-2

Ya sabemos la suma de todos [los ángulos internos](gloss:internal-angle) en polígonos. Para polígonos regulares, todos estos ángulos tienen [[el mismo tamaño. | son ángulos alternos]] , por lo que podemos calcular el tamaño de un solo ángulo interno:

{.text-center.reveal(when="blank-0")} ángulo = <mfrac><mrow>[[suma de todos los ángulos | cantidad de ángulos]]</mrow><mrow>[[cantidad de ángulos | suma de todos los ángulos]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} Si `n=3` obtenemos el tamaño de los ángulos internos de un triángulo equilátero; ya sabemos que debe ser [[60]]°. _{span.reveal(when="blank-3")} En un polígono regular con ${x}{x|6|3,12,1} lados, cada ángulo interno es 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### El área de polígonos regulares

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

Aquí puedes ver un [polígono regular](gloss:regular-polygon) con ${n}{n|5|4,12,1} lados Cada lado tiene longitud [{.pill.green} 1m](target:base) . ¡Intentemos calcular su área!

Primero, podemos dividir el polígono en ${toWord(n)} congruente, [[isósceles | equilátero |]] los [[triángulos rectángulos.]]

{.reveal(when="blank-0")} Ya conocemos la [[base | altura | área]] de estos triángulos, pero también necesitamos la [[altura | piernas | medianas]] para poder calcular su área. _{span.reveal(when="blank-2")} En polígonos regulares, esta altura a veces se llama [{.pill.yellow} apotema](target:apothem)_

{.reveal(when="blank-1 blank-2" delay=1000)} Observe que hay un [triángulo rectángulo](target:right-triangle) formado por la apotema y la mitad de la base del triángulo isósceles. ¡Esto significa que podemos usar trigonometría!

{.reveal(when="blank-1 blank-2" delay=2000)} los [{.pill.blue} los ángulos base](target:base-angle) del triángulo isósceles (llamémoslos α) son la [[mitad del | lo mismo | dos veces el]] tamaño de los [ángulos internos](target:int-angle) del polígono:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Para encontrar la apotema, podemos usar la definición de [[tangentes | seno | coseno]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Ahora, el área del [triángulo isósceles](target:isosceles-triangle) es

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} El polígono consta de ${toWord(n)} de estos triángulos isósceles, todos los cuales tienen la misma área. Por lo tanto, el área total del polígono es

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Cuadriláteros

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

En el [curso anterior](/course/triangles) investigamos muchas propiedades diferentes de los triángulos. Ahora echemos un vistazo a los cuadriláteros.

Un _cuadrilátero regular_ se llama [[cuadrado | rectángulo | cuadrilátero equilátero]] . Todos sus lados tienen la misma longitud y todos sus ángulos son iguales.

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

{.caption} Un __cuadrado__ es un cuadrilátero con [cuatro lados iguales](target:side) y [cuatro ángulos iguales](target:angle) .

:::

---
> id: quadrilaterals-1

Para cuadriláteros ligeramente "menos regulares", tenemos dos opciones. Si solo queremos que los _ángulos_ sean iguales, obtenemos un [__rectángulo__](gloss:rectangle) . Si solo queremos que los _lados_ sean iguales, obtenemos un [__rombo__](gloss:rhombus) .

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

{.caption} Un __rectángulo__ es un cuadrilátero con [cuatro ángulos iguales](target:angle) .

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

{.caption} Un __rombo__ es un cuadrilátero con [cuatro lados iguales](target:side) .

:::

---
> id: quadrilaterals-2

Hay algunos otros cuadriláteros, que son incluso menos regulares pero que aún tienen ciertas propiedades importantes:

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

{.caption} Si ambos pares de lados _opuestos_ son [paralelos](gloss:parallel) , obtenemos un __paralelogramo__ .

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

{.caption} Si dos pares de lados _adyacentes_ tienen la misma longitud, obtenemos una __cometa__ .

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

{.caption} Si al menos un par de lados opuestos es paralelo, obtenemos un __trapecio__ .

:::

---
> id: quadrilaterals-venn

Los cuadriláteros pueden caer en múltiples de estas categorías. Podemos visualizar la jerarquía de diferentes tipos de cuadriláteros como un [diagrama de Venn](gloss:venn-diagram) :

    figure: include svg/venn.svg

Por ejemplo, cada rectángulo también es un [[paralelogramo | rombo | cuadrado]] , y cada [[rombo | trapecio | el paralelogramo]] también es una cometa. Un rombo es a [[veces | siempre | nunca]] un cuadrado y un rectángulo es [[siempre | algunas veces | Nunca]] un trapecio.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Para evitar cualquier ambigüedad, generalmente usamos solo el tipo más específico.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Ahora elija cuatro puntos, en cualquier parte del cuadro gris a la izquierda. _{span.reveal(when="points")} Podemos conectarlos a todos para formar un cuadrilátero._

{.reveal(when="points" delay=1000)} Encontremos el punto medio de cada uno de los cuatro lados. Si conectamos los puntos medios, obtenemos [[otro cuadrilátero | un triángulo | un rectángulo]]

{.reveal(when="blank-0")} Intenta mover los vértices del cuadrilátero exterior y observa lo que le sucede al más pequeño. Parece que no es _un_ cuadrilátero _cualquiera_ , sino siempre un [[paralelogramo | trapecio | rectángulo]] !

{.reveal(when="blank-1")} ¿Pero por qué es ese el caso? ¿Por qué el resultado para _cualquier_ cuadrilátero siempre termina siendo un paralelogramo? Para ayudarnos a explicar, necesitamos dibujar una de las [diagonales](gloss:polygon-diagonal) del cuadrilátero original.

{.reveal(when="diagonal")} La diagonal divide el cuadrilátero en [dos triángulos](target:triangle) . Y ahora puedes ver que [dos de los lados](target:midsegment) del cuadrilátero interno son en realidad [[segmentos intermedios | medianas | bisectrices perpendiculares]] de estos triángulos.

{.reveal(when="blank-2")} En el [curso anterior](/course/triangles/properties) mostramos que los [segmentos medios](gloss:triangle-midsegment) de un triángulo siempre son paralelos a su base. En este caso, significa que [ambos lados](target:parallel) son paralelos a la diagonal, por lo tanto, también deben ser [[paralelos entre sí | la misma longitud | perpendicular el uno al otro]] .

{.reveal(when="blank-3" delay=2000)} Podemos hacer exactamente lo mismo con la [segunda diagonal](target:other) del cuadrilátero, para mostrar que ambos pares de lados opuestos son paralelos. Y esto es todo lo que necesitamos para demostrar que el cuadrilátero interno es un [paralelogramo](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### Paralelogramas

Resulta que los paralelogramos tienen muchas otras propiedades interesantes, además de que los lados opuestos son paralelos. ¿Cuál de las siguientes seis afirmaciones es verdadera?

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

Por supuesto, simplemente "observar" estas propiedades no es suficiente. Para asegurarnos de que _siempre_ sean ciertas, debemos _demostrarlas_ :

::: tab

#### Lados opuestos y ángulos _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Tratemos de demostrar que los lados y ángulos opuestos en un paralelogramo siempre son congruentes.

Comience dibujando una de las diagonales del paralelogramo.

{.reveal(when="diagonal")} La diagonal crea cuatro nuevos ángulos con los lados del paralelogramo. Los dos [ángulos rojos](target:red-angle) y los dos [ángulos azules](target:blue-angle) son [ángulos alternos](gloss:alternate-angles) , por lo que deben ser [[congruentes. | adyacente | suplementario]]

{.reveal(when="blank-0")} Ahora, si miramos los [dos triángulos](target:triangles) creados por la diagonal, vemos que tienen dos ángulos congruentes y [un lado congruente](target:diagonal) . Por la [[ASA | AAS |]] Condición de congruencia [[AA]] , ambos triángulos deben ser congruentes.

{.reveal(when="blank-1")} Esto significa que las otras partes correspondientes de los triángulos también deben ser congruentes: en particular, ambos [pares de lados opuestos](target:sides) son congruentes y ambos [pares de ángulos opuestos](target:angles) son congruentes. _{span.qed}_

:::

{.reveal(when="blank-1")} Resulta que lo contrario también es cierto: si ambos pares de lados opuestos (o ángulos) en un cuadrilátero son congruentes, entonces el cuadrilátero debe ser un paralelogramo.

::: tab

#### Diagonales _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Ahora pruebe que las dos diagonales en un paralelogramo se bisecan entre sí.

Pensemos en los dos triángulos amarillos generados por las diagonales:

* Acabamos de demostrar que los [dos lados verdes](target:side1) son congruentes, porque son lados opuestos de un paralelogramo. * Los [dos ángulos rojos](target:anglesR) y los [dos ángulos azules](target:anglesB) son congruentes, porque son [[ángulos alternos | ángulos opuestos | ángulos rectos]]

{.reveal(when="blank-2")} Por la [[ASA | SSS |]] Condición de [[AAS]] , los dos triángulos amarillos también deben ser congruentes.

{.reveal(when="blank-3")} Ahora podemos usar el hecho de que las partes correspondientes de los triángulos congruentes también son congruentes, para concluir que [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) y [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . En otras palabras, las dos diagonales se cruzan en sus puntos medios. _{span.qed}_

:::

{.reveal(when="blank-3")} Como antes, lo contrario también es cierto: si las dos diagonales de un cuadrilátero se bisecan, entonces el cuadrilátero es un paralelogramo.

:::

---
> id: kites

### Cometas

::: column.grow

Mostramos arriba que los dos pares de [[opuestos |]] lados [[adyacentes]] de un paralelogramo son congruentes. En una cometa, dos pares de lados _adyacentes_ son congruentes.

El nombre _Kite_ claramente proviene de su forma: se parece a las cometas que puedes volar en el cielo. Sin embargo, de todos los cuadriláteros especiales que hemos visto hasta ahora, el Kite es el único que también puede ser [cóncavo](gloss:concave) : si tiene forma de dardo o flecha:

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

{.caption} Una cometa convexa

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

{.caption} Una cometa cóncava que parece una flecha

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

Es posible que hayas notado que todas las cometas son [[simétricas | similar]] _{span.reveal(when="blank-0")} El [eje de simetría](gloss:axis-of-symmetry) es [[una de las diagonales. | uno de los lados | Un segmento medio]] ._

{.reveal.r(when="blank-1")} La diagonal divide la cometa en [dos triángulos congruentes](target:triangle1) . Sabemos que son congruentes desde la condición [SSS](gloss:triangle-sss) : ambos triángulos tienen [tres lados congruentes](target:sss) (rojo, verde y azul). _{button.next-step} Seguir_

{.reveal.r(when="next-0")} Usando [CPOCT](gloss:cpoct) , por lo tanto, sabemos que los [ángulos correspondientes](target:angles) también deben ser congruentes. _{button.next-step} Seguir_

{.reveal.r(when="next-1")} Esto significa, por ejemplo, que la [diagonal](target:d1) es una [[bisectriz | perpendicular | mediana]] de los [dos ángulos](target:vAngle) en sus extremos. _{button.next-step} Seguir_

{.reveal.r(when="next-2")} Podemos ir aún más lejos: si dibujamos la otra diagonal, obtenemos [dos triángulos más pequeños](target:triangle2) . Estos también deben ser congruentes, debido a la condición [SAS](gloss:triangle-sss) : tienen los mismos [dos lados y el ángulo incluido](target:sas) . _{button.next-step} Seguir_

{.reveal(when="next-3")} Esto significa que el [ángulo α](target:alpha) también debe ser el mismo que el [ángulo β](target:beta) . Como son adyacentes, [los ángulos suplementarios](gloss:supplementary-angles) tanto α como β deben ser [[90]]°.

{.reveal(when="blank-3")} En otras palabras, las diagonales de una cometa son siempre [[perpendiculares. | paralelo]]

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Área de cuadriláteros

Al calcular el área de triángulos en el curso anterior, utilizamos el truco de convertirlo en un [[rectángulo | cuadrado | pentágono]] Resulta que también podemos hacer eso para algunos cuadriláteros:

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

A la izquierda, intenta dibujar un rectángulo que tenga la misma área que el paralelogramo.

{.reveal(when="draw-1")} ¿Puedes ver que el [triángulo](target:triangle-1) que [falta](target:triangle-1) a la izquierda es [[exactamente el mismo que | menor que | más grande que]] el [triángulo superpuesto](target:triangle-2) a la derecha? _{span.reveal(when="blank-1")} Por lo tanto, el área de un paralelogramo es_

{.text-center.reveal(when="blank-1")} Área = __{.i.m-green} base__ × __{.i.m-yellow} altura__

{.reveal(when="blank-1" delay=1000)} _Tenga cuidado al medir la altura de un paralelogramo: generalmente no es lo mismo que uno de los dos lados._

:::

::: tab

#### Trapecio _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Recuerde que los trapecios son cuadriláteros con un par de [lados paralelos](target:bases) . Estos lados paralelos se llaman las __bases__ del trapecio.

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

Como antes, intenta dibujar un rectángulo que tenga la misma área que este trapecio. _{span.reveal(when="draw-2")} ¿Puedes ver cómo los [triángulos faltantes y agregados](target:triangles-3) a la izquierda y a la derecha se cancelan?_

{.reveal(when="draw-2" delay=2000)} los [{.pill.green} altura](target:t-height) de este rectángulo es la [[distancia entre | promedio de | longitud de]] los [lados paralelos](target:bases) del trapecio.

{.reveal.r(when="blank-2")} los [{.pill.yellow} ancho](target:t-width) del rectángulo es la distancia entre los [[puntos medios | puntos finales]] de los dos lados no paralelos del trapecio. _{span.reveal(when="blank-3")} Esto se llama __segmento medio__ del trapecio._ _{button.next-step.reveal(when="blank-3")} Seguir_

{.reveal(when="next-0")} Al igual que con los [triángulos](gloss:triangle-midsegment) , el segmento medio de un trapecio es [[paralelo a | perpendicular a | la misma longitud que]] sus dos bases. La longitud del segmento medio es el promedio de las longitudes de las bases: `(a+c)/2` .

{.reveal(when="blank-4")} Si combinamos todo esto, obtenemos una ecuación para el área de un trapecio de lados [_a_](target:base-2) y [_c_](target:base-1) paralelas, y la altura [_h:_](target:t-height)

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Cometa _{span.check(when="blank-5")}_

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

En esta cometa, las [dos diagonales](target:diag3) forman el ancho y la altura de un gran [rectángulo](target:rect4) que rodea la cometa.

El área de este rectángulo es [[dos veces | lo mismo que | tres veces]] el área de la cometa. _{span.reveal(when="blank-5")} ¿Puedes ver cómo cada uno de los [cuatro triángulos](target:inside) que componen la cometa son los mismos que los [cuatro huecos](target:outside) fuera de ella?_

{.reveal(when="blank-5")} Esto significa que el área de una cometa con diagonales [{.i.pill.green} d1](target:d31) y [{.i.pill.yellow} d2](target:d32) es

{.text-center.reveal(when="blank-5")} _Área_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### Rombo _{span.check(when="blank-6 blank-7")}_

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

Un [rombo](gloss:rhombus) es un cuadrilátero que tiene cuatro lados congruentes. Quizás recuerdes que cada rombo es un [[paralelogramo | rectángulo | cuadrado]] - y también una [[cometa | hexágono | polígono cóncavo]]

{.reveal(when="blank-6 blank-7")} Esto significa que para encontrar el área de un rombo, podemos usar la ecuación para el área de un paralelogramo o la del área de una cometa:

{.text-center.reveal(when="blank-6 blank-7")} _Área_ = [{.i.pill.blue} base](target:base) × [{.i.pill.red} altura](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _En diferentes contextos, se le pueden dar diferentes partes de un rombo (lados, altura, diagonales), y debe elegir la ecuación que sea más conveniente._

:::

:::



---

## Teselaciones

> section: tessellations
> id: tessellations
> translated: auto

[Los polígonos](gloss:polygon) aparecen en todas partes en la naturaleza. Son especialmente útiles si desea enlosar un área grande, porque puede encajar polígonos juntos sin espacios ni superposiciones. Patrones como ese se llaman [__teselaciones__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Hexagonal | Triangular |]] Panal [[Cuadrático]]

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Piel de serpiente de leche sinaloense

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Estructura celular de las hojas.

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Columnas de basalto en la Calzada del Gigante en Irlanda del Norte

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Piel de piña

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Caparazón de tortuga

:::

---
> id: tessellations-1

Los humanos han copiado muchos de estos patrones naturales en el arte, la arquitectura y la tecnología, desde la antigua Roma hasta el presente. Aquí están algunos ejemplos:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Rectangular | Cuadrático |]] Patrón de pavimento [[hexagonal]]

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Invernadero en el Proyecto Edén en Inglaterra

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaico en la Alhambra

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Triangular | Hexagonal |]] Techo [[rectangular]] en el Museo Británico de Londres

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Pabellón de teselación celular en Sydney

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Estudio de la división regular del avión con reptiles_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Aquí puede crear sus propios mosaicos utilizando polígonos regulares. Simplemente arrastre nuevas formas desde la barra lateral al lienzo. ¿Qué formas teselan bien? ¿Hay formas que no se tessellate en absoluto? ¡Intenta crear patrones interesantes!

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

### Teselaciones de polígonos regulares

Es posible que haya notado que algunos [polígonos regulares](gloss:regular-polygon) (como [[cuadrados) | pentágonos]] ) se teselan muy fácilmente, mientras que otros (como los [[pentágonos | triangulos | hexágonos]] ) no parecen teselar en absoluto.

---
> id: tessellation-regular-1

Esto tiene que ver con el tamaño de sus [ángulos internos](gloss:internal-angle) , que aprendimos a calcular antes. En cada [vértice](gloss:polygon-vertex) de la teselación, se encuentran los ángulos internos de múltiples polígonos diferentes. Necesitamos todos estos ángulos para sumar [[360]]°, de lo contrario habrá un espacio o una superposición.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Triángulos [[teselados | no teselar]] _{span.reveal(when="blank-0")} porque 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Cuadrados [[teselados | no teselar]] _{span.reveal(when="blank-1")} porque 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Los pentágonos [[no se teselan | teselado]] _{span.reveal(when="blank-2")} porque los múltiplos de 108° no suman 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Hexágonos [[teselados | no teselar]] _{span.reveal(when="blank-3")} porque 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

De manera similar, puede verificar que, al igual que los pentágonos, cualquier polígono regular con 7 o más lados no se teselelate. ¡Esto significa que los únicos polígonos regulares que se teselan son triángulos, cuadrados y hexágonos!

Por supuesto, puede combinar diferentes tipos de polígonos regulares en una teselación, siempre que sus ángulos internos puedan sumar 360°:

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

### Teselaciones de polígonos irregulares

También podemos intentar hacer mosaicos con [polígonos irregulares](gloss:irregular-polygon) , siempre que tengamos cuidado al rotarlos y organizarlos.

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

¡Resulta que puedes teselar no solo triángulos equiláteros, sino _cualquier triángulo_ ! Intenta mover los [vértices](target:vertex) en este diagrama.

La suma de los ángulos internos en un triángulo es [[180]]°. Si usamos cada ángulo [[dos veces | una vez | tres veces]] en cada vértice de la teselación, obtenemos 360°:

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

Más sorprendentemente, ¡ _cualquier cuadrilátero_ también se testea! Su suma de ángulo interno es [[360]]°, así que si usamos cada ángulo [[una vez | dos veces | tres veces]] en cada vértice de la teselación, obtenemos 360°.

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

Los pentágonos son un poco más complicados. Ya vimos que _los_ pentágonos _regulares_ [[no se teselan | teselado]] , pero ¿qué pasa con los no regulares?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Aquí hay tres ejemplos diferentes de teselaciones con pentágonos. No son _regulares_ , pero son polígonos de 5 lados perfectamente válidos.

Hasta ahora, los matemáticos solo han encontrado 15 tipos diferentes de teselaciones con pentágonos (convexos), el más reciente de los cuales se descubrió en 2015. Nadie sabe si hay otros, o si estos 15 son los únicos ...

---
> id: escher

### Teselaciones en el arte

Tessellations es a la vez una herramienta e inspiración para muchos artistas, arquitectos y diseñadores, especialmente el artista holandés [MC Escher](bio:escher) . El trabajo de Escher contiene criaturas, patrones y paisajes extraños y mutantes:

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

Estas obras de arte a menudo se ven divertidas y sin esfuerzo, pero los principios matemáticos subyacentes son los mismos que antes: ángulos, rotaciones, traslaciones y polígonos. Si las matemáticas no están bien, ¡la teselación no funcionará!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

Todas las teselaciones que vimos hasta ahora tienen una cosa en común: son __periódicas__ . Eso significa que consisten en un patrón regular que se repite una y otra vez. Pueden continuar para siempre en todas las direcciones y se verán igual en todas partes.

En la década de 1970, el matemático y físico británico [Roger Penrose](bio:penrose) descubrió teselaciones _no periódicas_ : todavía continúan infinitamente en todas las direcciones, pero _nunca se_ ven exactamente iguales. Estos se llaman __inclinaciones de Penrose__ , y solo necesita unos pocos tipos diferentes de polígonos para crear uno:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose estaba explorando los mosaicos puramente por diversión, pero resulta que la estructura interna de algunos materiales reales (como el aluminio) sigue un patrón similar. El patrón incluso se usó en papel higiénico, porque los fabricantes notaron que un patrón no periódico puede enrollarse sin abultamientos.

---

## Poliedros

> section: polyhedra
> id: polyhedra
> translated: auto

Hasta ahora hemos visto lo que podemos hacer con los polígonos en un mundo plano y bidimensional. Un [__poliedro__](gloss:polyhedron) es un objeto tridimensional que se compone de polígonos. Aquí hay unos ejemplos:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Los poliedros no pueden contener superficies curvas: las esferas y los cilindros, por ejemplo, no son poliedros.

Los polígonos que forman un poliedro se llaman [__caras__](gloss:polyhedron-face) . Las líneas donde se conectan dos caras se llaman [__bordes__](gloss:polyhedron-edge) , y las esquinas donde se encuentran los bordes se llaman [__vértices__](gloss:polyhedron-vertex) .

---
> id: euler

Los poliedros vienen en muchas formas y tamaños diferentes, desde simples cubos o pirámides con solo unas pocas caras, hasta objetos complejos como la estrella de arriba, que tiene 60 caras triangulares. Sin embargo, resulta que _todos los_ poliedros tienen una propiedad importante en común:

::: .theorem

__Fórmula del poliedro de Euler__
En cada poliedro, el número de caras ( _F_ ) más el número de vértices ( _V_ ) es dos más que el número de aristas ( _E_ ). En otras palabras,

{.text-center}`F + V = E + 2`

:::

Por ejemplo, si un poliedro tiene 12 caras y 18 vértices, sabemos que debe tener [[28]] aristas.

---
> id: euler-1

Esta ecuación fue descubierta por el famoso matemático suizo [Leonard Euler](bio:euler) . Es cierto para cualquier poliedro, siempre que no contenga ningún agujero.

Si prueba diferentes poliedros, como los anteriores, encontrará que la fórmula de Euler siempre funciona. En [un curso posterior](/course/graph-theory/planar-graphs) aprenderá cómo demostrarlo matemáticamente.

---

## Redes y secciones transversales

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prismas y pirámides

> section: prisms-pyramids
> sectionStatus: dev

QUE HACER

---

## Escalado de formas y sólidos

> section: scaling
> sectionStatus: dev

QUE HACER

---

## Sólidos platónicos

> section: platonic
> id: platonic
> translated: auto

Al comienzo de este curso definimos [polígonos regulares](gloss:regular-polygon) como [polígonos](gloss:regular-polygon) particularmente "simétricos", donde todos los lados y ángulos son iguales. Podemos hacer algo similar para los poliedros.

En un _poliedro regular,_ todas las [caras](gloss:polyhedron-face) son del mismo tipo de polígono regular, y la misma cantidad de caras se encuentran en cada [vértice](gloss:polyhedron-vertex) . Los poliedros con estas dos propiedades se llaman [__sólidos platónicos__](gloss:platonic-solid) , llamados así por el filósofo griego [Platón](bio:plato) .

 Entonces, ¿cómo son los sólidos platónicos y cuántos de ellos hay? Para hacer una forma tridimensional, necesitamos al menos [[3]] caras para encontrarse en cada vértice. Comencemos sistemáticamente con el polígono regular más pequeño: triángulos equiláteros:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Si creamos un poliedro donde tres [triángulos equiláteros se](gloss:equilateral-triangle) encuentran en cada vértice, obtenemos la forma a la izquierda. Se llama __tetraedro__ y tiene [[4]] caras. _{.reveal(when="blank-0")} ("Tetra" significa "cuatro" en griego)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Si cuatro triángulos equiláteros se encuentran en cada vértice, obtenemos un sólido platónico diferente. Se llama __octaedro__ y tiene [[8]] caras. _{.reveal(when="blank-0")} ("Octa" significa "ocho" en griego. Al igual que "Octágono" significa forma de 8 lados, "Octaedro" significa sólido de 8 caras)._

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Si [[cinco]] triángulos se encuentran en cada vértice, obtenemos el __Icosaedro__ . Tiene [[20]] caras. _{.reveal(when="blank-1")} ("Icosa" significa "veinte" en griego)._

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Si [[seis]] triángulos se encuentran en cada vértice, sucede algo diferente: simplemente obtenemos [[una teselación | un cuadrilátero | otro icosaedro]] , _{span.reveal(when="blank-1")} en lugar de un poliedro tridimensional._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Y siete o más triángulos en cada vértice tampoco producen nuevos poliedros: no hay suficiente espacio alrededor de un vértice, para acomodar tantos triángulos.

:::

Esto significa que hemos encontrado [[tres]] sólidos platónicos que consisten en triángulos. Pasemos al siguiente polígono regular: cuadrados.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Si [[tres]] cuadrados se encuentran en cada vértice, obtenemos el __cubo__ . Al igual que los dados, tiene [[6]] caras. _{span.reveal(when="blank-1")} El cubo a veces también se llama _Hexahedron_ , después de la palabra griega "hexa" para "seis"._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Si [[cuatro]] cuadrados se encuentran en cada vértice, obtenemos [[otra teselación | un tetraedro | otro cubo]] _{span.reveal(when="blank-1")} Y como antes, cinco o más cuadrados tampoco funcionarán._

:::

---
> id: platonic-dodecahedron

A continuación, intentemos con pentágonos regulares:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Si [[tres]] pentágonos se encuentran en cada vértice, obtenemos el __Dodecaedro__ . Tiene [[12]] caras. _{.reveal(when="blank-1")} ("Dodeca" significa "doce" en griego)._

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Como antes, cuatro o más pentágonos [[no funcionan | son posibles]] porque no hay suficiente espacio.

:::

---
> id: platonic-hexagons

El siguiente polígono regular para probar son los hexágonos:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Si tres hexágonos se encuentran en cada vértice, inmediatamente obtenemos un [[mosaico | poliedro | hexaedro]] _{span.reveal(when="blank-0")} Dado que no hay espacio para más de tres, parece que no hay sólidos platónicos que consisten en hexágonos._

:::

---
> id: platonic-final

Lo mismo también ocurre para todos los polígonos regulares con más de seis lados. No se teselan, y ciertamente no obtenemos ningún polígono tridimensional.

¡Esto significa que solo hay [[cinco]] sólidos platónicos! Echemos un vistazo a todos ellos juntos:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tetraedro__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] caras_
_{span.dual} [[4]] vértices_
_{span.dual} [[6]] bordes_

::: column.grow.text-center(width=120)

__Cubo__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] caras_
_{span.dual(target="dual1")} [[8]] vértices_
_{span.dual} [[12]] bordes_

::: column.grow.text-center(width=120)

__Octaedro__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] caras_
_{span.dual(target="dual1")} [[6]] vértices_
_{span.dual} [[12]] bordes_

::: column.grow.text-center(width=120)

__Dodecaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] caras_
_{span.dual(target="dual2")} 20 vértices_
_{span.dual} 30 bordes_

::: column.grow.text-center(width=120)

__Icosaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] caras_
_{span.dual(target="dual2")} 12 vértices_
_{span.dual} 30 bordes_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Observe cómo se [[intercambian]] el número de caras y vértices [[| lo mismo]] para el [cubo y el octaedro](target:dual1) , así como para el [dodecaedro y el icosaedro](target:dual2) , mientras que el número de aristas se [[mantiene igual | son diferentes]] Estos pares de sólidos platónicos se denominan [__sólidos duales__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Podemos convertir un poliedro en su doble, "reemplazando" cada cara con un vértice, y cada vértice con una cara. Estas animaciones muestran cómo:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

El tetraedro es dual consigo mismo. Como tiene la misma cantidad de caras y vértices, intercambiarlas no cambiaría nada.

---
> id: platonic-elements

[Platón](bio:plato) creía que toda la materia en el universo consta de cuatro elementos: aire, tierra, agua y fuego. Pensó que cada elemento corresponde a uno de los sólidos platónicos, mientras que el quinto representaría el universo en su conjunto. Hoy sabemos que hay más de 100 elementos diferentes que consisten en átomos esféricos, no en poliedros.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Sólidos Archimedean

> id: archimedean

Los sólidos platónicos son poliedros particularmente importantes, pero hay muchos otros.

[__Los sólidos de Arquímedes__](gloss:archimedean-solid) , por ejemplo, todavía tienen que estar formados por [polígonos regulares](gloss:regular-polygon) , pero puedes usar múltiples tipos diferentes. Reciben su nombre de otro matemático griego, [Arquímedes de Siracusa](bio:archimedes) , y hay 13 de ellos:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tetraedro Truncado__
8 caras, 12 vértices, 18 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctaedro__
14 caras, 12 vértices, 24 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cubo Truncado__
14 caras, 24 vértices, 36 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Octaedro truncado__
14 caras, 24 vértices, 36 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rombicuboctaedro__
26 caras, 24 vértices, 48 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cuboctaedro Truncado__
26 caras, 48 vértices, 72 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 caras, 24 vértices, 60 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecaedro__
32 caras, 30 vértices, 60 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Dodecaedro Truncado__
32 caras, 60 vértices, 90 bordes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Icosaedro Truncado__
32 caras, 60 vértices, 90 bordes

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rombicosidodecaedro__
62 caras, 60 vértices, 120 bordes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodecaedro truncado__
62 caras, 120 vértices, 180 aristas

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Dodecaedro desaire__
92 caras, 60 vértices, 150 bordes

:::

---
> id: polyhedra-applications

### Aplicaciones

Platón se equivocó al creer que todos los elementos consisten en sólidos platónicos. Pero los poliedros regulares tienen muchas propiedades especiales que los hacen aparecer en otras partes de la naturaleza, y podemos copiar estas propiedades en ciencia e ingeniería.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Muchos __virus__ , __bacterias__ y otros __organismos__ pequeños tienen forma de [icosaedro](gloss:icosahedron) . Los virus, por ejemplo, deben encerrar su material genético dentro de un caparazón de muchas unidades de proteínas idénticas. El icosaedro es la forma más eficiente de hacer esto, porque consta de unos pocos elementos regulares pero tiene casi la forma de una esfera.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Muchas __moléculas__ tienen forma de poliedros regulares. El ejemplo más famoso es `C_60` que consta de 60 átomos de carbono dispuestos en forma de un [icosaedro truncado](gloss:truncated-icosahedron) .

Fue descubierto en 1985 cuando los científicos investigaron el polvo interestelar. Lo llamaron "Buckyball" (o Buckminsterfullerene) después del arquitecto [Buckminster Fuller](bio:fuller) , famoso por construir edificios de aspecto similar.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

La mayoría de los __cristales__ tienen sus átomos dispuestos en una cuadrícula regular que consiste en [tetraedros](gloss:tetrahedron) , [cubos](gloss:cube) u [octaedros](gloss:octahedron) . Cuando se agrietan o se rompen, puedes ver estas formas a mayor escala.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

El tetraedro y el octaedro son increíblemente rígidos y estables, lo que los hace muy útiles en la __construcción__ . _Los marcos espaciales_ son estructuras poligonales que pueden soportar techos grandes y puentes pesados.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Los sólidos platónicos también se usan para crear __dados__ . Debido a su simetría, cada lado tiene la [probabilidad](gloss:probability) de aterrizar hacia arriba, por lo que los dados son justos.

El [icosaedro truncado](gloss:truncated-icosahedron) es probablemente el poliedro más famoso del mundo: es la forma del fútbol.

:::
