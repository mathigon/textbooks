

# Círculos y Pi

## Introducción

> section: introduction
> id: intro

::: column.grow

Mientras existan los humanos, hemos mirado al cielo y hemos tratado de explicar la vida en la Tierra usando el movimiento de las estrellas, los planetas y la luna.

Los antiguos astrónomos griegos fueron los primeros en descubrir que todos los objetos celestes se mueven en caminos regulares, llamados __órbitas__. Creían que estas órbitas son siempre circulares. Después de todo, los círculos son las formas "más perfectas": simétricas en todas las direcciones y, por lo tanto, una elección adecuada para el orden subyacente de nuestro universo.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} La Tierra está en el centro del _universo ptolemaico_.

:::

---

> id: radius
> goals: compass

Cada punto en un [__círculo__](gloss:circle) tiene la misma distancia desde su centro. Esto significa que se pueden dibujar con una [compás](gloss:compass):

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} Hay tres medidas importantes relacionadas con los círculos que debes saber:

* {.reveal(when="compass" delay="1000")} El radio de [{.step-target.pill.b.red}](target:r) es la distancia desde el centro de un círculo hasta su borde exterior.
* {.reveal(when="compass" delay="4000")} El [{.step-target.pill.b.blue} diámetro](target:d) es la distancia entre dos puntos opuestos en un círculo. Atraviesa su centro y su longitud es [[dos veces|half|the same as]] el radio.
* {.reveal(when="blank-0")} La [{.step-target.pill.b.green} circunferencia](target:c) (o perímetro) es la distancia alrededor de un círculo.

:::

---

> id: similar
> goals: circle-0 circle-1 circle-2

Una propiedad importante de los círculos es que todos los círculos son [similares](gloss:similar). Puede demostrarlo mostrando cómo se pueden combinar todos los círculos usando simplemente [traslaciones](gloss:translation) y [dilataciones](gloss:dilation):

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---

> id: pi-definition
> goals: digits

Puede recordar que, para polígonos similares, la relación entre los lados correspondientes es siempre constante. Algo similar funciona para los círculos: la relación entre la [circunferencia](gloss:circle-circumference) y el [diámetro](gloss:circle-diameter) es igual para _todos los círculos_. Siempre es 3.14159 ... - un número misterioso llamado [__Pi__](gloss:pi), que a menudo se escribe como la letra griega _π_ para "p". Pi tiene infinitos dígitos decimales que duran para siempre sin ningún patrón específico:

    canvas.pi-spiral(width=800 height=760)

---

> id: wheel
> goals: unroll

Aquí hay una rueda con diámetro 1. A medida que "desenrolla" la circunferencia, puede ver que su longitud es exactamente [[`pi`|`2 * pi`|3]]:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---

> id: circumference

Para un círculo con diámetro _d_, la circunferencia es `C = π × d`. De manera similar, para un círculo con [radio](gloss:circle-radius) _r_, la circunferencia es

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]].

---

> id: nature

Los círculos son perfectamente simétricos y no tienen "puntos débiles" como las esquinas de un polígono. Esta es una de las razones por las cuales se pueden encontrar en todas partes en la naturaleza:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Flores

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planetas

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Árboles

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Fruta

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} pompas de jabón

:::

{.r} Y hay muchos otros ejemplos: desde arcoiris hasta ondas de agua. ¿Puedes pensar en algo más? [Continuar](btn:next)

---

> id: max-area
> goals: area-circle

::: column.grow

También resulta que un círculo es la forma con el área más grande para una circunferencia dada. Por ejemplo, si tiene una cuerda de 100 \ m de longitud, puede usarla para encerrar el espacio más grande si forma un círculo (en lugar de otras formas como un rectángulo o un triángulo).

En la naturaleza, los objetos como gotas de agua o burbujas de aire pueden _ahorrar energía_ volviéndose circulares o esféricas, y reduciendo su área de superficie.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triángulo
      div(data-value="1") Cuadrado
      div(data-value="2") Pentágono
      div(data-value="3") Círculo
    svg(width=320 height=200)

{.caption} _Circunferencia_ = __{.m-green} 100__, _Área_ = __${area}__

:::

---

> id: area
> goals: slider

### El área de un círculo

Pero, ¿cómo calculamos realmente el área de un círculo? Probemos la misma técnica que utilizamos para [encontrar el área de cuadriláteros](/course/polyhedra/quadrilaterals): cortamos la forma en varias partes diferentes y luego las reorganizamos en una forma diferente de la que ya conocemos el área (por ejemplo, un rectángulo o un triángulo) .

La única diferencia es que, debido a que los círculos son curvos, tenemos que usar algunas aproximaciones:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: columns.grow

Aquí puede ver un círculo dividido en ${toWord(n1)} cuñas. Mueva el control deslizante para alinear las cuñas en una fila.

{.reveal(when="slider")} Si aumentamos el número de cuñas a ${n1}{n1|6|6,30,2}, esta forma comienza a parecerse cada vez más a un [[rectángulo|circle|square]].

{.reveal(when="blank-0")} La altura del rectángulo es igual al [[radio|circumference|diameter]] del círculo. _{span.reveal(when="blank-1")} El ancho del rectángulo es igual a [[la mitad de la circunferencia|the circumference|twice the radius]] del círculo._ _{span.reveal(when="blank-2")} (Observe cómo la mitad de las cuñas están boca abajo y la otra mitad de ellas arriba)_

{.reveal(when="blank-2" delay=1000)} Por lo tanto, el área total del rectángulo es aproximadamente `A = π r^2`.

:::

---

> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Aquí puede ver un círculo dividido en ${toWord(n)} anillos. Como antes, puede mover el control deslizante para "desenrollar" los anillos.

{.reveal(when="slider")} Si aumentamos el número de anillos a ${n2}{n2|4|2,12,1}, esta forma comienza a parecerse cada vez más a un [[triángulo|rectángulo|trapecio]].

{.reveal(when="blank-0")} La altura del triángulo es igual al [[radio|diámetro|circunferencia]] del círculo. _{span.reveal(when="blank-1")} La base del triángulo es igual a [[la circunferencia|twice the diameter]] del círculo._ _{span.reveal(when="blank-2")} Por lo tanto, el área total del triángulo es aproximadamente_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`.

:::

---

> id: area-2

Si pudiéramos usar infinitos anillos o cuñas, las aproximaciones anteriores serían perfectas, y ambas nos dan la misma fórmula para el área de un círculo:

{.text-center.r} `A = π r^2`. [Continuar](btn:next)

---

> id: pi-approximations

### Calculando Pi

Como viste anteriormente, `π = 3.1415926…` no es un entero simple, y sus dígitos decimales continúan para siempre, sin ningún patrón repetitivo. Los números con esta propiedad se denominan [__números irracionales__](gloss:irrational-numbers), y significa que `π` no se puede expresar como una fracción simple `a/b`.

También significa que nunca podemos escribir _todos_ los dígitos de Pi; después de todo, hay infinitos. Los antiguos matemáticos griegos y chinos calcularon los primeros cuatro dígitos decimales de Pi aproximando círculos usando polígonos regulares. Observe cómo, a medida que agrega más lados, el polígono comienza a verse [[más y más|less|exactly]] como un círculo:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---

> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

En 1665, [Isaac Newton](bio:newton) logró calcular 15 dígitos. Hoy, podemos usar computadoras potentes para calcular el valor de Pi con una precisión mucho mayor.

El registro actual es de 31,4 billones de dígitos. Un libro impreso que contenga todos estos dígitos tendría aproximadamente 400 \ km de espesor, ¡esa es la altura a la que la [Estación Espacial Internacional](gloss:iss) orbita alrededor de la Tierra!

Por supuesto, no necesita recordar tantos dígitos de Pi. De hecho, la fracción `22/7 = 3.142…` es una gran aproximación.

:::

---

> id: pi-sequence

Un enfoque para calcular Pi es usar secuencias infinitas de números. Aquí hay un ejemplo que fue descubierto por [Gottfried Wilhelm Leibniz](bio:leibniz) en 1676:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} A medida que calculamos más y más términos de esta serie, siempre siguiendo el mismo patrón, el resultado se acercará cada vez más a Pi.

---

> id: pi-colours
> goals: hover

::: column.grow

Muchos matemáticos creen que Pi tiene una propiedad aún más curiosa: que es un __número normal__. Esto significa que los dígitos del 0 al 9 aparecen completamente al azar, como si la naturaleza hubiera lanzado un dado de 10 lados infinitamente muchas veces, para determinar el valor de Pi.

Aquí puedes ver los primeros 100 dígitos de Pi. Muévase sobre algunas de las celdas para ver cómo se distribuyen los dígitos.

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---

> id: pi-digits
> goals: search

Si Pi es normal, significa que puede pensar en _cualquier_ cadena de dígitos, y aparecerá en algún lugar de sus dígitos. Aquí puede buscar el primer millón de dígitos de Pi: ¿contienen su cumpleaños?

::: .box.f-red.pi-box
#### One Million Digits of Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---

> id: pi-movies

Incluso podríamos convertir un libro completo, como Harry Potter, en una cadena muy larga de dígitos (a = 01, b = 02, etc.). Si Pi es normal, esta cadena aparecerá en algún lugar de sus dígitos, pero tomaría millones de años calcular suficientes dígitos para encontrarla.

Pi es fácil de entender, pero de fundamental importancia en ciencias y matemáticas. Esa podría ser una razón por la cual Pi se ha vuelto inusualmente popular en nuestra cultura (al menos, en comparación con otros temas de matemáticas):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---

> id: pi-day

Incluso hay un _Pi día_ cada año, que cae el 14 de marzo, porque `pi ≈ 3.14`, o el 22 de julio, porque `pi ≈ 22/7`.

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Grados y radianes

> section: radians
> id: degrees

Hasta ahora en geometría, siempre hemos medido ángulos en [grados](gloss:degrees). Una rotación __{.m-red} círculo completo__ es [[360]] °, un __{.m-green} semicírculo__ es [[180]] °, un __{.m-yellow} cuarto de círculo__ es [[90]] °, y así sucesivamente.

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---

> id: degrees-1

{.r} El número 360 es muy conveniente porque es divisible por muchos otros números: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, y así sucesivamente. Esto significa que muchas fracciones de un círculo también son números enteros. ¿Pero alguna vez te has preguntado de dónde viene el número 360? [Continuar](btn:next)

---

> id: babylon

::: column.grow

Resulta que 360 grados son uno de los conceptos más antiguos en matemáticas que todavía usamos hoy. ¡Se desarrollaron en la antigua Babilonia, hace más de 5000 años!

En ese momento, una de las aplicaciones más importantes de las matemáticas fue en astronomía. El _sol_ determina las cuatro estaciones, que los agricultores deben conocer al cultivar. De manera similar, la _luna_ determina las mareas, lo cual fue importante para los pescadores. La gente también estudió las estrellas para predecir el futuro o para comunicarse con los dioses.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Una tableta babilónica para calcular `sqrt(2)`

:::

---

> id: constellations
> goals: rotate

Los astrónomos notaron que las constelaciones visibles a una hora específica durante la noche cambiaban un poquito cada día, hasta que, después de aproximadamente 360 días, habían vuelto a su punto de partida. Y esta podría haber sido la razón por la cual dividieron el círculo en 360 grados.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---

> id: constellations-1
> goals: video

Por supuesto, en realidad hay 365 días en un año (bueno, 365.242199 para ser exactos), pero los matemáticos babilónicos trabajaron con relojes de sol simples, y esta aproximación fue perfectamente adecuada.

También funcionó bien con su sistema de números base 60 existente (desde `6 xx 60 = 360`). Este sistema es la razón por la que todavía tenemos 60 segundos en un minuto y 60 minutos en una hora, a pesar de que la mayoría de las otras unidades se miden en [base 10](gloss:base-10) (por ejemplo, 10 años en una década o 100 años en un siglo).

::: column.grow

Para muchos de nosotros, medir ángulos en grados es una segunda naturaleza: hay un video de 360 °, los patinadores pueden tirar de 540 segundos, y alguien que cambie su decisión podría hacer un giro de 180 °. Pero desde un punto de vista matemático, la elección de 360 es completamente arbitraria. Si viviéramos en Marte, un círculo podría tener 670 °, y un año en Júpiter incluso tiene 10,475 días.

:: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} El 540 McFlip, una rotación de 540 °

:::

---
> id: radians

### Radianes

En lugar de dividir un círculo en algún número de segmentos (como 360 grados), los matemáticos a menudo prefieren mida los ángulos usando la [circunferencia](gloss:circle-circumference) de un [__círculo unitario__](gloss:unit-circle) (un círculo con radio 1).

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

A [círculo completo](action:setState(0)) tiene circunferencia _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} Para una [rotación de medio círculo](action:setState(1)), la distancia correspondiente a lo largo de la circunferencia es _{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} Para un [cuarto de círculo de rotación](action:setState(2)), la distancia a lo largo de la circunferencia es _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} Y así sucesivamente: esta forma de medir ángulos se llama [__radianes__](gloss:radians) (puede recordar esto como "unidades de radio").

:::

---
> id: radians-conversion

Cada ángulo en grados tiene un tamaño equivalente en radianes. La conversión entre los dos es muy fácil, al igual que puede convertir entre otras unidades como metros y kilómetros, o Celsius y Fahrenheit:

{.text-center} __{.m-red} 360 °__ _{span.space} =_ __{.m-green} 2 _π_ rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left} `=>`_ <br> __{.m-red} 1 °__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.left} `=>`_ <br> __{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

puede escribir el valor en radianes como un múltiplo de _π_, o como un solo número decimal. ¿Puedes completar esta tabla de ángulos equivalentes en grados y radianes? El

| __{.m-red} grados__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radianes__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distancia recorrida

Puedes pensar en radianes como la "distancia recorrida" a lo largo de la circunferencia de un círculo unitario. Esto es particularmente útil cuando se trabaja con objetos que se mueven en una trayectoria circular.

::: column.grow

Por ejemplo, la [Estación Espacial Internacional](gloss:iss) orbita la Tierra una vez cada 1.5\ horas. Esto significa que su __velocidad de rotación__ es [[`(2 pi)/1.5`| `1.5/(2 pi)`|`1.5 * pi`]] radianes por hora.

{.reveal(when="blank-0")} En un [círculo de unidad](gloss:unit-circle), la velocidad de rotación es la misma que la velocidad _real_, porque la longitud de la circunferencia es la misma que una rotación completa en radianes (ambas son `2pi`).

{.reveal(when="blank-0" delay=1000)} El radio de la órbita de la ISS es 6800 \ km, lo que significa que la _velocidad real_ de la ISS tiene que ser [[`(2 pi)/1.5 xx 6800`| `(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km por hora._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

¿Puedes ver que, en este ejemplo, los radianes son una unidad mucho más conveniente que los grados? Una vez que conocemos la velocidad de rotación, simplemente tenemos que multiplicar por el radio para obtener la velocidad real. Aquí hay otro ejemplo: su automóvil tiene ruedas con radio de 0.25 \ m. Si conduce a una velocidad de 20 \ m / s, las ruedas de su automóvil giran a [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radianes por segundo _{span.reveal(when="blank-0")} (o `80/(2pi) = 13` rotaciones por segundo)._

---
> id: radians-trig

### Trigonometría

Para la mayoría de los problemas de geometría simples, los grados y radianes son completamente intercambiables: puedes elegir cuál prefieres o una pregunta puede decirte en qué unidad dar tu respuesta. Sin embargo , una vez que estudie la [trigonometría](gloss:trigonometry) o el [cálculo](gloss:calculus) más avanzados, resulta que los radianes son mucho más convenientes que los grados.

::: column.grow

La mayoría de las calculadoras tienen un [botón especial](->.button.mode) para cambiar entre grados y radianes. Las funciones trigonométricas como [__sin__](gloss:sin), [__cos__](gloss:cos) y __tan__ toman ángulos como entrada y sus funciones inversas __arcsin__, __arccos__ y __arctan__ devuelven ángulos como salida. La configuración actual de la calculadora determina qué unidades se utilizan para estos ángulos. Intente usar esta calculadora para calcular que {.text-center} sin (30 °) = [[0.5]] _{span.eqn-gap}_ cos (1 °) = [[0.999]] <br> sin (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

El uso de radianes tiene una ventaja particularmente interesante cuando se usa la función [__Seno__](gloss:sin). Si `θ` es un ángulo muy pequeño (menos de 20 ° o 0.3 rad), entonces `sin(θ) ≈ θ`. Por ejemplo,

{.text-center} sin (${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)} ...

{.reveal(when="var-0")} Esto se llama __aproximación de ángulo pequeño__, y puede simplificar enormemente ciertas ecuaciones que contienen funciones trigonométricas. Aprenderá mucho más sobre esto en el futuro.

---

## Tangentes, acordes y arcos

> section: tangets-chords-arcs
> id: circle-parts

En las secciones anteriores, aprendió los nombres dados a varias partes diferentes de un círculo, como el centro, el radio, el diámetro y la circunferencia. Sin embargo, hay muchos elementos geométricos relacionados con un círculo, que tendremos que resolver problemas más complejos:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} A [{.red} secante](target:secant) es una línea que corta un círculo en dos puntos. [Continuar](btn:next)
* {.r.reveal(when="next-0")} Un acorde [{.green}](target:chord) es un segmento de línea cuyos puntos finales se encuentran en la circunferencia de un círculo. [Continuar](btn:next)
* {.r.reveal(when="next-1")} Una [{.blue} tangente](target:tangent) es una línea que toca un círculo exactamente en un punto. Esto se llama el __punto de tangencia__. [Continuar](btn:next)
* {.r.reveal(when="next-2")} Un [{.yellow} arco](target:arc) es una sección de la circunferencia de un círculo. [Continuar](btn:next)
* {.r.reveal(when="next-3")} Un [{.teal} sector](target:sector) es una parte del interior de un círculo, delimitado por un _arco_ y _dos radios_. [Continuar](btn:next)
* {.r.reveal(when="next-4")} Finalmente, un [{.purple} segmento](target:segment) es parte del interior de un círculo, delimitado por un _arco_ y _un acorde_. [Continuar](btn:next)

:::

---

> id: circle-parts-1

En esta sección, veremos la relación entre todos estos elementos y probaremos teoremas sobre sus propiedades. No se preocupe por memorizar todas las definiciones por ahora; siempre puede usar el [glosario](->.footer-link[data-modal=glossarym]).

---

### Tangentes

{.todo} ¡MUY PRONTO!

---

### Acordes

{.todo} ¡MUY PRONTO!

---

> id: earth-arc

### Arcos y sectores

::: column.grow

La mayoría de los científicos en la antigua Grecia coincidieron en que la Tierra es una esfera. Había muchas pruebas: desde barcos que desaparecían detrás del horizonte en el mar, hasta el movimiento circular de las estrellas durante la noche.

Desafortunadamente, nadie sabía exactamente _cuán grande era_ la Tierra, hasta alrededor del 200 a. C., cuando el matemático [Eratóstenes](bio:eratosthenes) encontró una manera ingeniosa de medir el radio de la Tierra, usando geometría básica. Todo lo que necesitamos es un poco más de conocimiento sobre arcos y sectores de un círculo.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---

> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Como puede ver en el diagrama, un [{.red} arco](target:arc) es parte de la [[circunferencia|diameter|tangent]] de un círculo, y un [{.yellow} sector](target:sector) es una parte del [[interior|radius|perimeter]] de un círculo.

::: .reveal(when="blank-0 blank-1")

El arco entre dos puntos _A_ y _B_ a menudo se escribe como `arc(AB)`. Esta definición es ligeramente ambigua: hay un [{.purple} segundo arco](target:major) que conecta _A_ y _B_ pero da la vuelta al círculo.

El más pequeño de los dos arcos se llama __arco menor__, y el más grande se llama __arco mayor__. Si los puntos _A_ y _B_ son exactamente opuestos, ambos arcos tienen la misma longitud y son [[semicírculos|diameters|circumferences]].

:::

:::

---

> id: arcs-1

::: column.grow

Para encontrar la longitud de un arco o el área de un sector, necesitamos saber sobre el ángulo correspondiente en el centro del círculo: esto se llama [{.blue} ángulo central](target:angle).

Observe cómo el arco, el sector y el ángulo ocupan la _misma proporción_ de un círculo completo. Por ejemplo, si el [{.blue} ángulo central](target:angle) es [90°](action:set90Deg()), ocupa [[un cuarto|one half|one third]] de un [{.teal} círculo completo](target:fangle).

{sesenta y cinco}

Esto significa que la longitud [{.red} del arco](target:arc) también es `1/4` de la [{.purple} circunferencia entera](target:circ) del círculo, y el área [{.yellow} del El sector](target:sector) es `1/4` del [{.orange} área entera](target:area) del círculo.

Podemos expresar esta relación en una ecuación:

{.text-center} `"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---

> id: arcs-2

Ahora podemos reorganizar estas ecuaciones para encontrar la variable que nos interese. Por ejemplo,

::: column(width=320 parent="padded-thin")

| [ longitud de arco](pill:red) | = | `"circumference" × c/360` |
|                                 | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ área del sector](pill:yellow) | = | `"circle area" × c/360` |
|                                   | = | `π r^2 × c/360` |
{.eqn-system}

:::

donde _r_ es el radio del círculo y _c_ es el tamaño del ángulo central.

---

> id: arcs-rad

Si el ángulo central se mide en [radianes](gloss:radians) en lugar de [grados](gloss:degrees), podemos usar las mismas ecuaciones, pero tenemos que reemplazar 360 ° con [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ longitud del arco](pill:red) | = | `2 π r × c/(2π)` |
|                                  | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ área del sector](pill:yellow) | = | `π r^2 × c/(2π)` |
|                                   | = | `1/2 r^2 c` |
{.eqn-system}

:::

Observe cómo las ecuaciones se vuelven mucho más simples y _π_ se cancela en todas partes. Esto se debe a que, como recordarán, la definición [de radianes](/course/circles/radians#radians) es básicamente la longitud de un arco en un círculo con radio 1.

Ahora veamos cómo podemos usar arcos y sectores para calcular la circunferencia de la Tierra. [Continuar](btn:next)

:::

---

> id: eratosthenes

En el antiguo Egipto, la ciudad de _Swenet_ estaba ubicada a lo largo del río Nilo. Swenet era famoso por un pozo con una propiedad curiosa: había un momento cada año cuando la luz del sol llegaba al fondo del pozo: al mediodía del 21 de junio, el día del _solsticio de verano_. En ese momento preciso, el fondo del pozo estaba iluminado, pero no sus lados, lo que significa que el Sol estaba parado directamente sobre el pozo.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Los antiguos egipcios midieron largas distancias contando la cantidad de pasos que dio para caminar.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Algunas fuentes dicen que el "Pozo de Eratóstenes" estaba en _Isla Elefantina_ en el río Nilo.

:::

El matemático [Eratóstenes](bio:eratosthenes) vivió en _Alejandría_, a unos 800 \ km al norte de Swenet, donde fue director de la Gran Biblioteca. En el centro de la ciudad de Alejandría había un obelisco, un monumento alto y estrecho con una parte superior en forma de pirámide.

Eratóstenes notó que al mediodía del día del solsticio de verano, el obelisco arrojaba una sombra, lo que significa que el sol estaba _no_ directamente encima de él. Él dedujo que esto se debía a la curvatura de la Tierra, y se dio cuenta de que podría usarse para calcular la circunferencia de nuestro planeta.

---

> id: eratosthenes-1

::: column.grow

{.r} Aquí puedes ver el pozo en Swenet y el obelisco en Alejandría. Los rayos del sol caen directamente en el pozo, pero golpean el obelisco en ángulo y proyectan una sombra. [Continuar](btn:next)

::: .reveal(when="next-0")

Eratóstenes midió que el [{.teal} ángulo](target:angle1) de la sombra era 7.2 °. Esto es lo mismo que el [{.purple} ángulo central](target:angle2) del [{.red} arco](target:arc) de Alejandría a Swenet, porque son [[ángulos alternos|vertical|corresponding]].

:::

::: .reveal(when="blank-0")

Ahora podemos usar la ecuación para la longitud del arco que derivamos arriba:

{.text-center} `pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Si reorganizamos esto, encontramos que la circunferencia de la Tierra es

{.text-center} `pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Finalmente, sabemos que la circunferencia de un círculo es `C = 2 pi r`, por lo que el radio de la Tierra es

{.text-center} `r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"`.

:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)

        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")

        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---

> id: eratosthenes-2

La medición de Eratóstenes fue uno de los experimentos más importantes en la antigüedad. Su estimación del tamaño de la Tierra fue sorprendentemente precisa, especialmente al considerar que solo tenía acceso a herramientas de medición muy básicas.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Por supuesto, puede ser difícil traducir sus resultados originales en unidades modernas como kilómetros. En la antigua Grecia, la distancia se midió en _estadios_ (aproximadamente 160 m), pero no había un estándar universal. Cada área tenía una versión ligeramente diferente, y no sabemos cuál utilizó Eratóstenes.

En los siglos siguientes, los científicos trataron de usar otros métodos para calcular el radio de la Tierra, a veces con resultados muy diferentes e incorrectos.

Fue una de estas medidas incorrectas lo que llevó a Cristóbal Colón a navegar hacia el oeste desde Portugal. Supuso que la Tierra era mucho más pequeña de lo que realmente es, y esperaba llegar a la India. De hecho, llegó a un continente diferente en el medio: las Américas.

:::

---

### segmentos

¡{.todo} MUY PRONTO!

---

## Los teoremas del círculo

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/ http: // amsi .org.au / teacher_modules / Circle_Geometry.html

__[CC] Identifica y describe relaciones entre ángulos, radios y acordes inscritos. Incluya la relación entre ángulos centrales, inscritos y circunscritos; los ángulos inscritos en un diámetro son ángulos rectos; el radio de un círculo es perpendicular a la tangente donde el radio se cruza con el círculo.__

Un ángulo inscrito es un ángulo con su vértice es el círculo y sus lados contienen acordes. El arco interceptado es el arco que está en el interior del ángulo inscrito y cuyos puntos finales están en el ángulo. El vértice de un ángulo inscrito puede estar en cualquier parte del círculo siempre que sus lados se crucen con el círculo para formar un arco interceptado.

__Teorema del ángulo inscrito__ La medida de un ángulo inscrito es la mitad de la medida de su arco interceptado. Para probar el Teorema del ángulo inscrito, deberías dividirlo en tres casos, como los tres ángulos diferentes extraídos de la Investigación.

__Teorema del ángulo inscrito congruente__ Los ángulos inscritos que interceptan el mismo arco son congruentes.

__Teorema del semicírculo de ángulo inscrito__ Un ángulo que intercepta un semicírculo es un ángulo recto.

En el teorema del semicírculo de ángulo inscrito, también podríamos decir que el ángulo está inscrito en un semicírculo. Cada vez que se inscribe un ángulo recto en un círculo, los puntos finales del ángulo son los puntos finales de un diámetro. Por lo tanto, lo contrario del Teorema del semicírculo de ángulo inscrito también es cierto.

Cuando un ángulo está en un círculo, el vértice está en la circunferencia del círculo. Un tipo de ángulo en un círculo es uno formado por una tangente y un acorde.

__Teorema del ángulo de acorde / tangente__ La medida de un ángulo formado por un acorde y una tangente que se cruzan en el círculo es la mitad de la medida del arco interceptado.

Según el Teorema del ángulo de acorde / tangente, ahora sabemos que hay dos tipos de ángulos que son la mitad de la medida del arco interceptado; un ángulo inscrito y un ángulo formado por un acorde y una tangente. Por lo tanto, cualquier ángulo con su vértice en un círculo será la mitad de la medida del arco interceptado.

Un ángulo se considera dentro de un círculo cuando el vértice está en algún lugar dentro del círculo, pero no en el centro. Todos los ángulos dentro de un círculo están formados por dos acordes que se cruzan.

__Teorema de ángulos de intersección de acordes__ La medida del ángulo formado por dos acordes que se cruzan dentro de un círculo es el promedio de la medida de los arcos interceptados.

Se considera que un ángulo está fuera de un círculo si el vértice del ángulo está fuera del círculo y los lados son tangentes o secantes. Hay tres tipos de ángulos que están fuera de un círculo: un ángulo formado por dos tangentes, un ángulo formado por una tangente y una secante, y un ángulo formado por dos secantes. Al igual que un ángulo dentro o sobre un círculo, un ángulo fuera de un círculo tiene una fórmula específica que involucra los arcos interceptados.

__Teorema del ángulo exterior__ La medida de un ángulo formado por dos secantes, dos tangentes o una secante y una tangente dibujada desde un punto fuera del círculo es igual a la mitad de la diferencia de las medidas de los arcos interceptados.

Cuando dos acordes se cruzan dentro de un círculo, los dos triángulos que crean son similares, haciendo que los lados de cada triángulo sean proporcionales entre sí. Si eliminamos AD y BC, las relaciones entre AE, EC, DE y EB seguirán siendo las mismas.

__Teorema de acordes de intersección__ Si dos acordes se cruzan dentro de un círculo de modo que uno se divide en segmentos de longitud a y b y el otro en segmentos de longitud c y d, entonces ab = cd. En otras palabras, el producto de los segmentos de un acorde es igual al producto de segmentos del segundo acorde.

Además de formar un ángulo fuera de un círculo, el círculo puede dividir las secantes en segmentos que son proporcionales entre sí.

Si dibujamos los acordes que se cruzan, tendremos dos triángulos similares.

Desde los ángulos inscritos y la propiedad reflexiva (∠R≅∠R), △ PRS∼ △ TRQ. Debido a que los dos triángulos son similares, podemos establecer una proporción entre los lados correspondientes. Luego, multiplícate. ac + d = ca + b⇒a (a + b) = c (c + d)

__Teorema de segmentos de dos secantes__ Si se dibujan dos secantes desde un punto común fuera de un círculo y los segmentos se etiquetan como arriba, entonces a (a + b) = c (c + d). En otras palabras, el producto del segmento externo y la totalidad de una secante es igual al producto del segmento externo y la totalidad de la otra secante.

Si una tangente y una secante se encuentran en un punto común fuera de un círculo, los segmentos creados tienen una relación similar a la de dos rayos secantes. Recuerde que el producto de la porción externa de una secante y el todo es igual al de la otra secante. Si uno de estos segmentos es una tangente, seguirá siendo el producto de la porción externa y del todo. Sin embargo, para una línea tangente, la porción externa y el todo son iguales.

__Teorema del segmento de la tangente secante__ Si una tangente y una secante se dibujan desde un punto común fuera del círculo (y los segmentos se etiquetan como la imagen a la izquierda), entonces a2 = b (b + c). Esto significa que el producto del segmento exterior de la secante y el todo es igual al cuadrado del segmento tangente.

---

### Tales & # 39; Teorema

Prueba usando triángulos isósceles

Combina toda la geometría euclidiana.

{.todo} TODO

---

## Polígonos cíclicos

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construye un triángulo equilátero, un cuadrado y un hexágono regular inscrito en un círculo.__

Un polígono inscrito es un polígono donde cada vértice está en un círculo. Tenga en cuenta que no todos los cuadriláteros o polígonos se pueden inscribir en un círculo. Los cuadriláteros inscritos también se denominan cuadriláteros cíclicos. Para estos tipos de cuadriláteros, deben tener una propiedad especial. Lo investigaremos aquí.

Esta investigación muestra que los ángulos opuestos en un cuadrilátero inscrito son suplementarios. Al cortar el cuadrilátero por la mitad, a través de la diagonal, pudimos demostrar que los otros dos ángulos (que no cortamos) formaron un par lineal cuando se emparejaron.

Teorema del cuadrilátero inscrito: un cuadrilátero se inscribe en un círculo si y solo si los ángulos opuestos son suplementarios.

https://www.youtube.com/watch?v=bJOuzqu3MUQ

---

## Esferas, conos y cilindros

> section: spheres-cones-cylinders
> id: solids

En las secciones anteriores, estudiamos las propiedades de los círculos en una superficie plana. Pero nuestro mundo es en realidad tridimensional, así que echemos un vistazo a algunos sólidos 3D que se basan en círculos:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Un [__cilindro__](gloss:cylinder) consta de dos círculos paralelos congruentes unidos por una superficie curva.

::: column(width=220)

    x-solid(size=220)

{.text-center} Un [__cono__](gloss:cone) tiene una base circular que se une a un solo punto (llamado vértice).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Cada punto en la superficie de una [__esfera__](gloss:sphere) tiene la misma distancia desde su centro.

:::

Observe cómo la definición de una esfera es casi la misma que la definición de un [[círculo|radio|cubo]], ¡excepto en tres dimensiones!

---

> id: gasometer

### Cilindros

::: column.grow

Aquí puede ver el _Gasómetro cilíndrico_ en Oberhausen, Alemania. Solía almacenar gas natural que se usaba como combustible en fábricas y plantas de energía cercanas. El gasómetro mide 120 m de altura y su base y techo son dos círculos grandes con radio de 35 m. Hay dos preguntas importantes que los ingenieros pueden querer responder:

* ¿Cuánto gas natural se puede almacenar? Este es el [[volumen|area|diameter]] del cilindro.
* {.reveal(when="blank-0")} ¿Cuánto acero se necesita para construir el gasómetro? Esta es (aproximadamente) la [[área de superficie|circumference|diagonal]] del cilindro.

{.reveal(when="blank-0 blank-1")} ¡Intentemos encontrar fórmulas para ambos resultados!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasómetro Oberhausen

:::

---

> id: cylinder-prism

#### Volumen de un cilindro

La parte superior e inferior de un cilindro son dos círculos congruentes, llamados __bases__. La __{.m-blue} altura _h___ de un cilindro es la distancia perpendicular entre estas bases, y el radio __{.m-red} _r___ de un El cilindro es simplemente el radio de las bases circulares.

Podemos aproximar un cilindro usando un ${n}{n|5|3,20,1} lado [__prisma__](gloss:prism). A medida que aumenta el número de lados, el prisma comienza a parecerse cada vez más a un cilindro:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---

> id: cylinder-volume

Aunque técnicamente un cilindro no es un prisma, comparten muchas propiedades. En ambos casos, podemos encontrar el volumen multiplicando el área de su __{.m-red} base__ con su __{.m-blue} altura__. Esto significa que un cilindro con radio _{.b.m-red} r_ y altura _{.b.m-blue} h_ tiene volumen

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Recuerde que el radio y la altura deben usar las mismas unidades. Por ejemplo, si _r_ y _h_ están en cm, entonces el volumen estará en [[`"cm"^3`|`"cm"^2`|cm]].

---

> id: oblique-cylinder
> goals: slide

::: column.grow

En los ejemplos anteriores, las dos bases del cilindro siempre estuvieron _directamente una encima de la otra_: esto se llama __cilindro derecho__. Si las bases no están directamente una encima de la otra, tenemos un __cilindro oblicuo__. Las bases todavía son paralelas, pero los lados parecen "inclinarse" en un ángulo que no es de 90 °.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} La _Torre inclinada de Pisa_ en Italia no es un cilindro oblicuo.

:::

---

> id: cavalieri
> goals: slide

El volumen de un cilindro oblicuo resulta ser exactamente el mismo que el de un cilindro derecho con el mismo radio y altura. Esto se debe al [__Principio de Cavalieri__](gloss:cavalieri), llamado así por el matemático italiano [Bonaventura Cavalieri](bio:cavalieri): si dos sólidos tienen la misma área de sección transversal en cada altura, entonces tendrán tener el mismo volumen

Imagine cortar un cilindro en muchos discos delgados. Luego podemos deslizar estos discos horizontalmente para obtener un cilindro oblicuo. El volumen de los discos individuales no cambia a medida que lo hace oblicuo, por lo tanto, el volumen total también permanece constante:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---

> id: cylinder-surface

#### Área de superficie de un cilindro

::: column.grow

Para encontrar el área de superficie de un cilindro, tenemos que "desenrollarlo" en su plano [net](gloss:net). Puede probarlo usted mismo, por ejemplo, quitando la etiqueta de una lata de comida.

Hay dos [[círculos|spheres|squares]], uno en la parte superior y otro en la parte inferior del cilindro. El lado curvo es en realidad un gran [[rectángulo|cuadrado|elipse]].

* {.reveal(when="blank-0 blank-1")} Los dos círculos tienen cada uno un área _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} La altura del rectángulo es _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} y el ancho del rectángulo es el mismo que la [[circunferencia|diametro|tangente]] de los círculos:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---

> id: cylinder-surface-1

Esto significa que la superficie total de un cilindro con radio _r_ y altura _h_ viene dada por

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---

> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Los cilindros se pueden encontrar en todo el mundo, desde latas de refrescos hasta papel higiénico o tuberías de agua. ¿Se te ocurren otros ejemplos?

El _Gasómetro_ anterior tenía un radio de 35 my una altura de 120 m. Ahora podemos calcular que su volumen es aproximadamente [[461,000 ± 1000]] `"m"^3` y su área de superficie es aproximadamente [[34,080 ± 100]] `"m"^2`.

---

> id: cone

### Conos

::: column.grow

Un [__cono__](gloss:cone) es un sólido tridimensional que tiene una base circular __{.m-red}__. Su lado “se estrecha hacia arriba” como se muestra en el diagrama, y termina en un solo punto llamado vértice __{.m-green}__.

El radio __{.m-red}__ del cono es el radio de la base circular, y la altura __{.m-blue}__ del cono es la distancia perpendicular desde la base hasta el vértice.

Al igual que otras formas que conocimos antes, los conos están en todas partes: conos de helado, conos de tráfico, ciertos techos e incluso árboles de navidad. ¿Qué más se te ocurre?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---

> id: cone-volume

#### Volumen de un cono

::: column.grow

Anteriormente encontramos el volumen de un cilindro aproximándolo con un prisma. De manera similar, podemos encontrar el volumen de un cono aproximándolo usando una [__pirámide__](gloss:pyramid).

Aquí puede ver una pirámide de ${n}{n|5|3,18,1} lados. A medida que aumenta el número de lados, la pirámide comienza a parecerse cada vez más a un cono. De hecho, ¡podríamos pensar en un cono como una pirámide con _infinitamente muchos_ lados!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---

> id: cone-volume-1

Esto también significa que también podemos usar la ecuación para el volumen: `V = 1/3 "base" × "height"`. La base de un cono es un círculo, por lo que el volumen de un cono con radio _r_ y altura _h_ es

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---

> id: cone-circumscribed

Observe la similitud con la ecuación para el volumen de un cilindro. Imagine dibujar un cilindro _alrededor de_ el cono, con la misma base y altura; esto se llama el __cilindro circunscrito__. Ahora, el cono ocupará exactamente [[un tercio|half|one quarter]] del volumen del cilindro:

    figure: x-solid(size=280)

---

> id: cone-hilbert

{.i.lgrey} Nota: Puede pensar que infinitamente muchos lados pequeños como una aproximación es un poco "impreciso". Las matemáticas pasaron mucho tiempo tratando de encontrar una forma más directa de calcular el volumen de un cono. ¡En 1900, el gran matemático [David Hilbert](bio:hilbert) incluso lo nombró como uno de los 23 problemas no resueltos más importantes en matemáticas! Hoy sabemos que en realidad es imposible.

---

> id: oblique-cone
> goals: slide

::: column.grow

Al igual que un cilindro, un cono no tiene que ser "recto". Si el vértice está directamente sobre el centro de la base, tenemos un __cono derecho__. De lo contrario, lo llamamos un __cono oblicuo__.

Una vez más, podemos usar el principio de Cavalieri para mostrar que todos los conos oblicuos tienen el mismo volumen, siempre que tengan la misma base y altura.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---

> id: cone-surface

#### Área de superficie de un cono

::: column.grow

Encontrar el área de superficie de un cono es un poco más complicado. Como antes, podemos desenredar un cono en su red. Mueva el control deslizante para ver qué sucede: en este caso, obtenemos un círculo y un [[sector circular|segmento circular|arco]].

{.reveal(when="blank-0")} Ahora solo tenemos que sumar el área de ambos componentes. La base __{.m-yellow}__ es un círculo con radio _r_, por lo que su área es

{.text-center.reveal(when="blank-0")} `pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---

> id: slant-height

::: column.grow

El radio del sector __{.m-green}__ es el mismo que la distancia desde el borde de un cono hasta su vértice. Esto se llama __{.pill.green.step-target(data-to="s")} altura inclinada _s___ del cono, y no es lo mismo que la altura normal __{.pill.blue.step-target(data-to="h")} _h___ . Podemos encontrar la altura inclinada usando [Pitágoras](gloss:pythagoras-theorem):

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---

> id: cone-surface-1

::: column.grow

La _{span.pill.step-target.red(data-to="arc")} longitud del arco_ del sector es la misma que la [[circunferencia|diameter|arc]] de la _{span.pill.step-target.yellow(data-to="base")} base_: _{span.reveal(when="blank-0")} `2 π r`. Ahora podemos encontrar el área del sector utilizando la [fórmula](gloss:circle-sector) que derivamos en una sección anterior:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

:::

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---

> id: cone-surface-2

Finalmente, solo tenemos que sumar el área de la __{.m-yellow} base__ y el área del sector __{.m-green}__, para obtener la superficie total del cono:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---

> id: sphere

### esferas

::: column.grow

Una [__esfera__](gloss:sphere) es un sólido tridimensional que consta de todos los puntos que tienen la misma distancia desde un __{.m-green} centro _C___. Esta distancia se denomina radio __{.m-red} _r___ de la esfera.

Puede pensar en una esfera como un "[círculo](gloss:circle) tridimensional". Al igual que un círculo, una esfera también tiene un __{.m-blue} diámetro _d___, que es [[dos veces|half]] la longitud del radio, así como acordes y secantes.

::: column(width=240)

    x-solid(size=240)

:::

---

> id: sphere-1

{.r} En una [sección anterior](/course/circles/tangets-chords-arcs#eratosthenes-1), aprendiste cómo el matemático griego [Eratóstenes](bio:eratosthenes) calculó el radio de la Tierra usando la sombra de un poste: era 6.371 km. Ahora, intentemos encontrar el volumen total de la Tierra y el área de superficie. [Continuar](btn:next)

---

> id: sphere-volume

#### Volumen de una esfera

Para encontrar el volumen de una esfera, una vez más tenemos que usar el Principio de Cavalieri. Comencemos con un hemisferio: una esfera cortada por la mitad a lo largo del ecuador. También necesitamos un cilindro con el mismo radio y altura que el hemisferio, pero con un cono invertido "cortado" en el medio.

A medida que mueve el control deslizante hacia arriba, puede ver la sección transversal de estas dos formas a una altura específica sobre la base:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")

      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)

{.reveal(when="slider-0")} Tratemos de encontrar el área de la sección transversal de estos dos sólidos, a una distancia __{span.pill.blue.step-target(data-to="h")} altura _h___ sobre la base.

::: column.grow

{.reveal(when="slider-0")} La sección transversal del hemisferio es siempre un [[círculo|anillo|cilindro]].

{.reveal(when="blank-0")} El radio __{span.pill.red.step-target(data-to="x")} _x___ de la sección transversal es parte de un triángulo en ángulo recto _{span.pill.yellow.step-target(data-to="tri")}_, por lo que podemos usar {1111 } Pitágoras](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")

{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Ahora, el área de la sección transversal es

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

La sección transversal del cilindro recortado siempre es un  [[anillo|círculo|cono]].

::: .reveal(when="blank-1")

El radio del hoyo es _h_. Podemos encontrar el área del anillo restando el área del agujero del área del círculo más grande:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---

> id: sphere-volume-1

Parece que ambos sólidos tienen la misma área de sección transversal en todos los niveles. Según el principio de Cavalieri, ¡ambos sólidos también deben tener el mismo [[volumen|surface area|circumference]]! _{span.reveal(when="blank-0")} Podemos encontrar el volumen del hemisferio restando el volumen del [cilindro](gloss:cylinder-volume) y el volumen del [cono](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---

> id: sphere-volume-2

Una esfera consta de [[dos]] hemisferios, _{span.reveal(when="blank-0")}, lo que significa que su volumen debe ser_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---

> id: earth-volume
> goals: numbers

::: column.grow

La Tierra es (aproximadamente) una esfera con un radio de 6.371 \ km. Por lo tanto su volumen es

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} La densidad media de la Tierra es `5510 "kg/m"^3`. Esto significa que su masa total es

{.text-center.reveal(when="numbers")} `"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} ¡Eso es un 6 seguido de 24 ceros!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---

> id: sphere-sum

Si compara las ecuaciones para el volumen de un cilindro, cono y esfera, es posible que note una de las relaciones más satisfactorias en geometría. Imagina que tenemos un cilindro con la misma altura que el diámetro de su base. Ahora podemos colocar tanto un cono como una esfera perfectamente en su interior:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Este cono tiene radio `r` y altura `2r`. Su volumen es _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Esta esfera tiene radio `r`. Su volumen es _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Este cilindro tiene radio `r` y altura `2r`. Su volumen es _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Observe cómo, si [[sumamos|subtract|multiply]] el volumen del cono y la esfera, ¡obtenemos exactamente el volumen del cilindro!

---

> id: sphere-maps
> goals: move projection

#### Área de superficie de una esfera

Encontrar una fórmula para el área de superficie de una esfera es muy difícil. Una razón es que no podemos abrir y "aplanar" la superficie de una esfera, como lo hicimos antes para conos y cilindros.

Este es un problema particular cuando se trata de crear mapas. La Tierra tiene una superficie curva tridimensional, pero cada mapa impreso debe ser plano y bidimensional. Esto significa que los geógrafos tienen que hacer trampa: estirando o aplastando ciertas áreas.

Aquí puede ver algunos tipos diferentes de mapas, llamados __proyecciones__. Intente mover el cuadrado rojo y observe cómo se ve esta área _en realidad_ en un globo:

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Cylindrical
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide") Mollweide
      .box.no-padding.sphere-maps
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the 3-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---

> id: sphere-surface

Para encontrar el área de superficie de una esfera, una vez más podemos aproximarla usando una forma diferente, por ejemplo, un poliedro con muchas caras. A medida que aumenta el número de caras, el poliedro comienza a parecerse cada vez más a una esfera.

{.todo} PRÓXIMAMENTE: Prueba de área de superficie de esfera

---

## Secciones cónicas

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

El círculo es una de las cuatro formas diferentes que se pueden crear utilizando "cortes" a través de un [cono](gloss:cone). Esto se puede demostrar usando el cono de luz de una antorcha:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---

> id: conics-1

Si apuntas la antorcha verticalmente hacia abajo, verás un [[círculo|ellipse|oval]] de luz. _{span.reveal(when="blank-0")} Si inclinas el cono, obtienes una [__elipse__](gloss:ellipse). Si lo inclina aún más, obtendrá una [__parábola__](gloss:parabola) o una [__hipérbola__](gloss:hyperbola)._

---

> id: conics-2

::: column.grow

En conjunto, estas cuatro formas se denominan [__secciones cónicas__](gloss:conic-section). Aunque todos se ven muy diferentes, están estrechamente relacionados: de hecho, ¡todos se pueden generar utilizando la misma ecuación!

Las secciones cónicas fueron estudiadas por primera vez por el matemático griego antiguo [Apolonio de Perga](bio:apollonius), quien también les dio sus nombres inusuales.

En cursos posteriores, aprenderá mucho más sobre parábolas e hipérbolas. Por ahora, echemos un vistazo más de cerca a la elipse.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---

> id: ellipses

### Elipses

Una elipse se ve casi como un "círculo alargado". De hecho, podría pensarlo como un círculo con _dos centros_: estos se denominan __puntos focales__. Al igual que cada punto en un círculo tiene la misma distancia desde su centro, cada punto en una elipse tiene la misma _suma de distancias_ a sus dos puntos focales.

Si tiene una cadena larga conectada a dos puntos fijos, puede dibujar una elipse perfecta trazando el alcance máximo de las cadenas:

{.todo} Próximamente: Elipses de dibujo interactivo

---

> id: ellipses-2
> goals: v0 v1 v2 v3

Hay muchas otras representaciones físicas de cómo podrías dibujar una elipse:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---

> id: orbits

### Órbitas planetarias

::: column.grow

Quizás recuerdes desde el comienzo de este curso, que los antiguos astrónomos griegos creían que la Tierra está en el centro del universo y que el sol, la luna y los planetas se mueven alrededor de la Tierra en órbitas circulares.

Desafortunadamente, la observación astronómica del cielo no fue muy compatible con esto. Por ejemplo, el sol parecía más grande durante algunas partes del año y más pequeño durante otras. En un círculo, cada punto debe tener [[la misma|an increasing|a decreasing]] distancia desde su centro.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Astrónomo griego Hiparco de Nicea

:::

---

> id: epicycles
> goals: play

Para solucionar esto, los astrónomos agregaron __Epiciclos__ a su modelo del sistema solar: los planetas se mueven en un gran círculo alrededor de la Tierra, mientras que simultáneamente giran en un círculo más pequeño. Si bien es muy complicado, este fue el modelo más aceptado de nuestro universo durante más de 1000 años:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Este planeta realiza ${n}{n|6|2,12,1} rotaciones alrededor del círculo pequeño (el __epiciclo__) durante una rotación alrededor del círculo grande (el __deferente__).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Un dibujo de epiciclos del siglo XVI en el __modelo geocéntrico__. La palabra griega "planetas" significa "vagabundos".

:::

---

> id: kepler
> goals: play

::: column.grow

Con el tiempo, la gente se dio cuenta de que la Tierra era solo uno de los muchos planetas que orbitan alrededor del Sol (el __modelo heliocéntrico__), pero no fue sino hasta 1609 que el astrónomo [Johannes Kepler](bio:kepler) descubrió que los planetas mover en realidad en _órbitas elípticas_.

El sol está en uno de los dos puntos focales de estas elipses. Los planetas se aceleran a medida que se acercan al sol y disminuyen la velocidad a medida que se alejan.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---

> id: newton
> goals: apple

Algunas décadas más tarde, [Isaac Newton](bio:newton) pudo probar las observaciones de Kepler, utilizando sus leyes recientemente desarrolladas de [__gravedad__](gloss:gravity). Newton se dio cuenta de que hay una fuerza entre dos masas en el universo, similar a la atracción entre dos imanes.

La gravedad es lo que hace que todo caiga al suelo y la gravedad también es lo que hace que los planetas se muevan alrededor del sol. Es solo la gran velocidad a la que se mueven los planetas, lo que les impide caer directamente al sol.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Usando las leyes de Newton, puede derivar el camino que toman los objetos cuando se mueven bajo la fuerza de la gravedad. Resulta que los planetas se mueven en elipses, pero otros objetos como los cometas pueden viajar en caminos [parabólicos](gloss:parabola) o [hiperbólicos](gloss:hyperbola): vuelan cerca del sol antes de darse la vuelta y disparar al universo, nunca volver

Según la leyenda, una manzana que cae inspiró a Newton a pensar en la gravedad. Fue uno de los científicos más influyentes de todos los tiempos, y sus ideas dieron forma a nuestra comprensión del mundo durante casi 300 años, hasta que Albert Einstein descubrió la relatividad en 1905.

:::
