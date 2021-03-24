# Secuencias y patrones

## Introducción

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Muchas profesiones que usan las matemáticas están interesadas en un aspecto específico: _encontrar patrones_ y poder predecir el futuro. Aquí mostramos algunos ejemplos:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160)

::: column(width=400)

En la última década, __departamentos de policía__ en todo el mundo han comenzado a confiar más en las matemáticas. Algoritmos especiales pueden usar los datos de crímenes pasados ​​para predecir cuándo y dónde podrían ocurrir crímenes en el futuro. Por ejemplo, el sistema _PredPol_ (abreviatura de "vigilancia predictiva" en ingles) ayudó a reducir la tasa de criminalidad de Los Ángeles en un 12%.

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160)

::: column(width=400)

Resulta que los __terremotos__ siguen patrones similares a los crímenes. Al igual que un crimen podría provocar represalias, un terremoto podría provocar réplicas. En matemáticas, esto se llama un "proceso autoexcitado", y hay ecuaciones que ayudan a predecir cuándo podría ocurrir el próximo.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160)

::: column(width=400)

Los banqueros también observan datos históricos del precio de las acciones, las tasas de interés y las tasas de cambio de divisas, para estimar cómo los __mercados financieros__ podrían cambiar en el futuro. ¡Ser capaz de predecir si el valor de una acción aumentará o disminuirá puede ser extremadamente lucrativo!

:::

Los matemáticos profesionales usan algoritmos altamente complejos para encontrar y analizar todos estos patrones, pero vamos a comenzar con un ejemplo un poco más básico.

---
> id: simple-patterns

### Secuencias simples

En matemáticas, una [__secuencia__](gloss:sequence) es una cadena de números (u otros objetos) que generalmente siguen un patrón particular. Los elementos individuales en una secuencia se llaman [__términos__](gloss:sequence-term).

Aquí hay algunos ejemplos de secuencias. ¿Puedes encontrar sus patrones y calcular los próximos dos términos?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Patrón: "Sumar 3 al número anterior para obtener el siguiente"._

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Patrón: “Sumar 6 al número anterior para obtener el siguiente”._

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Patrón: “Sumar alternadamente 1 y sumas 3 al número anterior, para obtener el siguiente”._

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Patrón: "Multiplicar el número anterior por 2, para obtener el siguiente"._

---
> id: simple-patterns-1

Los puntos (…) al final simplemente significan que la secuencia puede continuar para siempre. Cuando nos referimos a secuencias como esta en matemáticas, a menudo representamos cada término mediante una [variable especial](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

El pequeño número después de _x_ se llama un __subíndice__, e indica la posición del término en la secuencia. Esto significa que podemos representar el _n_ ésimo-término en la secuencia por [[`x_n`|`x_i`|`x_2`]].

---
> id: triangles

### Triángulos y números cuadrados

Las secuencias en matemáticas no siempre tienen que ser númericas. Aquí hay una secuencia que consiste en formas geométricas: triángulos de tamaño creciente:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b} [[10]]

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b} [[15]]

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b} [[21]]

    include svg/triangle-6.svg

:::

---
> id: triangle-1

En cada paso, estamos agregando una fila más al triángulo anterior. La longitud de cada fila nueva también aumenta en uno cada vez. ¿Puedes ver el patrón?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

También podemos describir este patrón usando una [fórmula especial](gloss:formula):

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Para obtener el número del triángulo _n_, tomamos el número del triángulo [[anterior|primero|siguiente]] y sumamos _n_. Por ejemplo, si _n_ = ${n}{n|5|2,20,1}, la fórmula se convierte en <msub><mi>x</mi><mn>${n}</mn></msub> = <msub><mi>x</mi><mn>${n-1}</mn></msub> + ${n}.

---
> id: recursive-1

Una fórmula que expresa `x_n` en función de términos anteriores en la secuencia se llama [__fórmula recursiva__](gloss:sequence-recursive). Mientras conozcamos el [[primer término|último término|segundo término]] de la secuencia, podremos calcular todos los siguientes.

---
> id: squares

    hr

Otra secuencia que consiste en formas geométricas son los __números cuadrados__. Cada término está formado por cuadrados cada vez más grandes:

::: column(width=24 parent="padded-thin squares")

{.text-center} __1__

    include svg/square-1.svg

::: column(width=50)

{.text-center} __4__

    include svg/square-2.svg

::: column(width=76)

{.text-center} __9__

    include svg/square-3.svg

::: column(width=102)

{.text-center.b} [[16]]

    include svg/square-4.svg

::: column(width=128)

{.text-center.b} [[25]]

    include svg/square-5.svg

::: column(width=154)

{.text-center.b} [[36]]

    include svg/square-6.svg

:::

---
> id: square-1

Para los números de triángulo, encontramos una fórmula recursiva que le indica el _siguiente_ término de la secuencia en función de sus _términos_ anteriores. Para los números cuadrados podemos hacerlo aún mejor: una ecuación que le indica el _n_ ésimo-término directamente, sin tener que calcular primero todos los anteriores:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---
> id: explicit

Las ecuaciones como esta se denominan [__fórmulas explícitas__](gloss:sequence-explicit). Podemos usarlo, por ejemplo, para calcular que el 13º número cuadrado es [[169]], sin encontrar primero los 12 números cuadrados anteriores.

---
> id: definitions

    hr

Resumamos todas las definiciones que hemos visto hasta ahora:

::: .theorem

Una [__secuencia__](gloss:sequence) es una lista de números, formas geométricas u otros objetos que siguen un patrón específico. Los elementos individuales de la secuencia se denominan [__términos__](gloss:sequence-term) y se representan mediante variables como `x_n`.

Una [__fórmula recursiva__](gloss:sequence-recursive) para una secuencia dice el valor del _n_ ésimo-término en función de [[sus términos anteriores|del primer término]]. También debe especificar los primeros términos.

Una [__fórmula explícita__](gloss:sequence-explicit) para una secuencia dice el valor del término _n_ -ésimo en función de [[solo _n_|el término anterior]], sin hacer referencia a otros términos en la secuencia.

:::

---
> id: action-sequence

### Fotografía de secuencia de acción

En las siguientes secciones aprenderá sobre muchas secuencias matemáticas diferentes, patrones sorprendentes y aplicaciones inesperadas.

Primero, sin embargo, veamos algo completamente diferente: __fotografía de secuencia de acción__. Un fotógrafo toma muchas fotos en cámara rápida y luego las combina en una sola imagen:

    figure: x-img(src="images/action-1.jpg" width=640 height=320)

¿Puedes ver cómo el esquiador forma una secuencia? El patrón no es suma ni multiplicación, sino una [transformación geométrica](gloss:rigid-transformation). Entre los pasos consecutivos, el esquiador se traslada y [[gira|se refleja|se dilata]].

---
> id: action-sequence-1

Aquí hay algunos ejemplos más de fotografía de secuencia de acción para observar:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox)

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox)

:::

---

## Secuencias aritméticas y geométricas

> section: arithmetic-geometric
> id: halley

::: column.grow

En 1682, el astrónomo [Edmond Halley](bio:halley) observó un fenómeno inusual: un objeto blanco brillante con una larga cola que se movía a través del cielo nocturno. Era un __cometa__, una pequeña roca helada que vuela por el espacio, dejando un rastro de polvo y hielo.

Halley recordó que otros astrónomos habían observado cometas similares mucho antes: uno en 1530 y otro en 1606. Observe que la brecha entre dos observaciones consecutivas es la misma en ambos casos: [[76]] años.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg")
    p.caption Imagen del cometa Halley, tomada en 1986 en la isla de Pascua.

:::

---
> id: halley-1

Halley concluyó que las tres observaciones eran en realidad el mismo cometa, que ahora se llama _cometa Halley_. Está orbitando alrededor del sol y pasa la Tierra aproximadamente cada 76 años. También predijo cuándo sería visible el cometa nuevamente:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

En realidad, el intervalo de tiempo no siempre es _exactamente_ 76 años: puede variar en uno o dos años, ya que la órbita del cometa es interrumpida por otros planetas. ¡Hoy sabemos que los antiguos astrónomos observaron el cometa Halley desde el año 240 antes de Cristo!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Dependencias del cometa Halley a lo largo del tiempo: una tableta babilónica (164 a. C.), un tapiz medieval (1070), una revista científica (1910) y un sello soviético (1986).

---
> id: ball

Un grupo diferente de científicos está investigando el comportamiento de una pelota de tenis que rebota. Dejaron caer la pelota desde una altura de 10 metros y midieron su posición con respecto al tiempo. Con cada rebote, la pelota pierde algo de su altura original:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="tiempo,altura")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Los científicos notaron que la pelota pierde el 20% de su altura después de cada rebote. En otras palabras, la altura máxima de cada rebote es el 80% de la anterior. Esto les permitió predecir la altura de los rebotes siguientes:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definiciones

Si comparamos ambos problemas, podemos notar que hay muchas similitudes: la secuencia del cometa Halley tiene la misma [[diferencia|razón|producto]] entre términos consecutivos, mientras que la secuencia de rebotes de pelotas de tenis tiene la misma proporción [[76]] entre términos consecutivos.

---
> id: arithmetic-geometric-1

Las secuencias con estas propiedades reciben un nombre especial:

::: column.grow
::: .theorem.s-red

    p.text-center: include svg/comet.svg

Una [__secuencia aritmética__](gloss:arithmetic-sequence) tiene una diferencia __{.m-red} constante _d___ entre términos consecutivos.

El mismo número se suma o resta a cada término, para producir el siguiente.

:::
::: column.grow
::: .theorem.s-green

    p.text-center: include svg/ball.svg

Una [__secuencia geométrica__](gloss:geometric-sequence) tiene una relación __{.m-green} constante _r___ entre términos consecutivos.

Cada término se multiplica o se divide por el mismo número, para producir el siguiente.

:::
:::

---
> id: arithmetic-geometric-select

Aquí hay algunas secuencias diferentes. ¿Puede determinar cuáles son aritméticas, geométricas o ninguna, y cuáles son los valores de _{.b.m-red} d_ y _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_, …

::: column(width=320)

es [[geométrica|aritmética|ninguna]] _{span.reveal(when="blank-0")}, con una relación [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_, …

::: column(width=320)

es [[aritmética|geométrica|ninguna]] _{span.reveal(when="blank-2")}, con la diferencia [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_, …

::: column(width=320)

es [[aritmética|geométrica|ninguna]] _{span.reveal(when="blank-4")}, con la diferencia [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_, …

::: column(width=320)

es [[ninguna|aritmética|geométrica]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2.5_, _{span.n} 1.25_, …

::: column(width=320)

es [[geométrica|aritmética|niguna]] _{span.reveal(when="blank-7")}, con una relación [[0.5]]._

:::

---
> id: arithmetic-geometric-graph

Para definir una secuencia aritmética o geométrica, debemos conocer no solo la diferencia o relación común, sino también el valor inicial (llamado `a`). Aquí puede generar sus propias secuencias y trazar sus valores en un gráfico, cambiando los valores de `a`, _d_ y _r_. ¿Puedes encontrar algún patrón?

::: column.ag-chart(width=320)

#### {.m-red} Secuencia aritmética

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Secuencia geométrica

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Observe cómo todas las secuencias aritméticas __{.m-red}__ se ven muy similares: si la diferencia es positiva, [[aumentan|disminuyen]] constantemente, y si la diferencia es negativa, [[disminuyen|aumentan]] constantemente.

{.reveal(when="blank-0 blank-1")} Las secuencias geométricas, por otro lado, pueden comportarse de manera completamente diferente en función de los valores de `a` y _r_:

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Si [`r > 1`](action:set(2,2)), los términos [[crecerán rápidamente|decrecerán rápidamente|se acercaran a 0]] _{span.reveal(when="blank-2")}, hasta el infinito. Los matemáticos dicen que la secuencia [__diverge__](gloss:sequence-divergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

Si [_r_ está entre –1 y 1](action:set(10,0.6)), los términos siempre [[se acercarán a 0|decrecerán hacia menos infinito|se hacen más pequeños]] _{span.reveal(when="blank-3")}. Decimos que la secuencia [__converge__](gloss:sequence-convergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

Si [`r < -1`](action:set(3,-1.4)), los términos alternarán entre positivo y negativo, mientras que su [[valor absoluto|inversa|diferencia]] aumenta.

:::

{.reveal(when="blank-4 blank-5")} Aprenderá más sobre convergencia y divergencia en la [última sección](/course/sequences/convergence) de este curso.

---
> id: arithmetic-geometric-recursive

### Fórmulas recursivas y explícitas

En la sección anterior, aprendiste que una [__fórmula recursiva__](gloss:sequence-recursive) te dice el valor de cada término en función de los términos anteriores. Aquí están las fórmulas recursivas para secuencias aritméticas y geométricas:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

Un problema con las fórmulas recursivas es que para encontrar el término número 100, por ejemplo, primero tenemos que calcular los 99 términos anteriores, y eso puede llevar mucho tiempo. En cambio, podemos intentar encontrar una [__fórmula explícita__](gloss:sequence-explicit), que nos diga el valor del término _n_ directamente.

::: column.grow

Para __{.m-red} secuencias aritméticas__, tenemos que agregar _d_ en cada paso:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} En el _n_ término, estamos agregando [[`n-1`|`n`|`n+1`]] copias de _d_, por lo que la fórmula general es

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

Para __{.m-green} secuencias geométricas__, tenemos que multiplicar _r_ en cada paso:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} En el _n_ término, estamos multiplicando [[`n-1`|`n`|`n+1`]] copias de _r_, por lo que la fórmula general es

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Aquí hay un resumen de todas las definiciones y fórmulas que ha visto hasta ahora:

::: column.grow

{sesenta y cinco}

Una secuencia aritmética __{.m-red}__ tiene el primer término `a` y la diferencia común `d` entre términos consecutivos.

{.text-center} __Fórmula recursiva__: `x_n = x_(n-1) + d`

{.text-center} __Fórmula explícita__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

Una secuencia geométrica __{.m-green}__ tiene el primer término `a` y una relación común `r` entre términos consecutivos.

{.text-center} __Fórmula recursiva__: `x_n = x_(n-1) × r`

{.text-center} __Fórmula explícita__: `x_n = a × r^(n-1)`

:::

:::

¡Ahora echemos un vistazo a algunos ejemplos en los que podemos usar todo esto!

---
> id: pay-it-forward
> goals: video

### Pay it Forward

Aquí hay un breve clip de la película _Pay it Forward_, donde Trevor, de 12 años, explica su idea de hacer del mundo un lugar mejor:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extracto de “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

La esencia de la idea de Trevor es que, si todos "pagan", una sola persona puede tener un gran impacto en el mundo:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Observe cómo el número de personas en cada paso forma una [[secuencia geométrica|secuencia aritmética|número triangular]], _{span.reveal(when="blank-0")} con una razón común [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Usando la [fórmula explícita](gloss:sequence-explicit) para secuencias geométricas, podemos calcular cuántas personas nuevas se ven afectadas en cualquier paso:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

El número de personas aumenta increíblemente rápido. En el décimo paso, alcanzarías 19,683 nuevos, y después de 22 pasos habrías llegado a más personas que las que actualmente están vivas en la Tierra.

Esta secuencia de números tiene un nombre especial: las potencias __de 3__. Como puede ver, cada término es en realidad una [potencia](gloss:powers) diferente de 3:

{.text-center.s-orange} _{span.n} `3^0`_, _{span.n} `3^1`_, _{span.n} `3^2`_, _{span.n} {996 }_, _{span.n} `3^4`_, _{span.n} `3^5`_, …

---
> id: millionaire

### ​​¿Quién quiere ser millonario?

{.todo} ¡MUY PRONTO!

---
> id: chessboard

### El problema del tablero de ajedrez

{.todo} ¡MUY PRONTO!

---

## Números figurados

> section: figurate
> id: figurate

El nombre de [secuencias geométricas](gloss:geometric-sequence) es bastante confuso, porque no tienen nada que ver con la geometría. De hecho, el nombre se desarrolló hace cientos de años, cuando los matemáticos pensaron en _multiplicación_ y _raíces cuadradas_ de una manera mucho más geométrica.

Sin embargo, hay muchas otras secuencias que _son_ basadas en ciertas formas geométricas, algunas de las cuales ya viste en la [introducción](/course/sequences/introduction). Estas secuencias a menudo se denominan [__números figurados__](gloss:figurate-numbers), y en esta sección veremos más de cerca algunas de ellas.

---
> id: triangle-numbers

### Números triangulares

Los __números de triángulo__ se generan creando triángulos de tamaño progresivamente mayor:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center} __10__

    include svg/triangle-4.svg

::: column(width=136)

{.text-center} __15__

    include svg/triangle-5.svg

::: column(width=164)

{.text-center} __21__

    include svg/triangle-6.svg

:::

Ya has visto la fórmula recursiva para los números de triángulo: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

No es casualidad que siempre haya 10 palos cuando juegues al bowling o 15 bolas cuando juegues al billar: ¡ambos son números triangulares!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Desafortunadamente, la fórmula recursiva no es muy útil si queremos encontrar el número de triángulo número 100 o 5000, sin calcular primero todos los números anteriores. Pero, como hicimos con las secuencias aritméticas y geométricas, podemos intentar encontrar una fórmula explícita para los números triangulares.

{.todo} PRÓXIMAMENTE: Prueba animada para la fórmula del número triangular

---
> id: triangle-sums

Los números de triángulos parecen aparecer en todas partes en matemáticas, y los veremos nuevamente a lo largo de este curso. Un hecho particularmente interesante es que _cualquier_ número entero se puede escribir como la suma de como máximo tres números triangulares:

::: column(width=140 parent="triangle-sum")

{.text-center} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} =

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} El hecho de que esto funcione para _todos_ números enteros fue probado por primera vez en 1796 por el matemático alemán [Carl Friedrich Gauss](bio:gauss) - ¡a la edad de 19 años!

---
> id: triangle-investigate

::: .box.f-blue

#### Problema

¿Cuál es la suma de los primeros 100 enteros [positivos](gloss:integer) positivos? En otras palabras, ¿cuál es el valor de

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

En lugar de sumar todo manualmente, ¿puedes usar los [números de triángulo](gloss:triangle-numbers) para ayudarte? ¿Qué pasa con la suma de los primeros 1000 enteros positivos?

:::

---
> id: square-numbers

### Números cuadrados y poligonales

Otra secuencia que se basa en formas geométricas son los __números cuadrados__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Puedes calcular los números en esta secuencia al elevar al cuadrado cada número entero (`1^2`, `2^2`, `3^2`, …), pero resulta que hay otro patrón: las diferencias entre los números cuadrados consecutivos son ¡[[números impares|números triangulares|enteros]] en orden creciente!

---
> id: square-numbers-1

::: column.grow

La razón de este patrón se hace evidente si realmente dibujamos un cuadrado. En cada paso se agrega una fila y una columna. El tamaño de estas "esquinas" comienza en 1 y aumenta en 2 en cada paso, formando así la secuencia de números impares.

¡Esto también significa que el _n_-ésimo número cuadrado es igual a la suma de los primeros _n_ números impares! Por ejemplo, la suma de los primeros 6 números impares es

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

Además, cada número cuadrado también es la suma de dos números triangulares [consecutivos](gloss:triangle-numbers). Por ejemplo, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. ¿Puedes ver cómo podemos dividir cada cuadrado a lo largo de su diagonal, en dos triángulos?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Después de los números triangulares y los cuadrados, podemos continuar con [polígonos](gloss:polygon) más grandes. Las secuencias numéricas resultantes se denominan __números poligonales__.

Por ejemplo, si usamos polígonos con ${k}{k|5|3,10,1} lados, obtenemos la secuencia de __${polygonName(k)} números__.

¿Puedes encontrar fórmulas recursivas y explícitas para el _n_-ésimo número poligonal que tiene _k_ lados? ¿Notas algún otro patrón interesante para polígonos más grandes?

:::

---
> id: tetrahedral

### Números tetraédricos y cúbicos

Por supuesto, tampoco tenemos que limitarnos a formas y patrones bidimensionales. Podríamos apilar esferas para formar pequeñas pirámides, tal como se apilan las naranjas en un supermercado:

::: column(width=64 parent="padded-thin")

{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Los matemáticos a menudo llaman a estas pirámides [__tetraedros__](gloss:tetrahedron), y la secuencia resultante [__números tetraédricos__](gloss:tetrahedral-numbers).

{.todo} PRÓXIMAMENTE: Más sobre números tetraédricos, números cúbicos y los 12 días de Navidad.

---

## Secuencias como funciones

> section: functions
> sectionStatus: dev

QUE HACER

---

## Números de Fibonacci

> section: fibonacci
> id: rabbits

Imagine que ha recibido un par de conejos, un macho y una hembra. Son conejos muy especiales, porque nunca mueren, y la hembra da a luz a un nuevo par de conejos exactamente una vez al mes (siempre nacen un nuevo par de un macho y una hembra).

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

      .legend(slot="legend") En el primer mes, los conejos son muy pequeños y no pueden hacer mucho, pero crecen muy rápido.
      .legend(slot="legend") Después de un mes, los conejos crecen y pueden comenzar a aparearse ...
      .legend(slot="legend") ... y después de otro mes, darán a luz a su primer par de hijos. Ahora tienes dos pares de conejos.
      .legend(slot="legend") En el próximo mes, la primera pareja de conejos dará a luz a otra pareja. Mientras tanto, el primer par de niños ha crecido. Ahora tienes tres pares en total.
      .legend(slot="legend") En el quinto mes, la pareja original de conejos dará a luz a una nueva pareja. Al mismo tiempo, su primer par de hijos ahora tiene la edad suficiente para dar a luz nietos. Ahora tienes cinco pares de conejos.
      .legend(slot="legend") En el sexto mes, hay tres parejas más que dan a luz: la original, así como sus dos primeras parejas o hijos.

---
> id: rabbits-1

{.r} En el mes siguiente tendrías 13 pares de conejos: los 8 del mes anterior, más 5 nuevos grupos de bebés. ¿Puedes detectar un patrón en esta secuencia? _{button.next-step} Continuar_

---
> id: rabbits-2

El número de conejos en un mes en particular es [[la suma de los dos números anteriores|el doble del número anterior]]. _{span.reveal(when="blank-0")} En otras palabras, debemos sumar los *dos términos* anteriores en la secuencia, para obtener el siguiente. La secuencia comienza con dos 1s, y la [fórmula recursiva](gloss:sequence-recursive) es_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

¿Puedes calcular la cantidad de conejos después de unos meses más?

{.text-center.s-orange} _{.n} 1_, _{.n} 1_, _{.n} 2_, _{.n} 3_, _{.n} 5_, _{.n} 8_, _{.n} [[13]]_, _{.n} [[21]] { 1252}, _{.n} [[34]]_, _{.n} [[55]]_, _{.n} [[89]]_, _{.n} [[144]]_, …

{.reveal(when="blank-5")} Entonces, después de 12 meses, ¡tendrás 144 pares de conejos!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Esta secuencia de números se llama [__Secuencia de Fibonacci__](gloss:fibonacci-numbers), llamada así por el matemático italiano [Leonardo Fibonacci](bio:fibonacci).

::: column.grow

Cuando Fibonacci nació en 1175, la mayoría de las personas en Europa todavía usaban el [sistema de números romanos](gloss:roman-numerals) para los números (por ejemplo, IVX o MCMLIV). El padre de Fibonacci era un comerciante, y juntos viajaron al norte de África y al Medio Oriente. Fue allí donde Fibonacci aprendió por primera vez el [sistema de numeración árabe](gloss:arabic-numerals).

Cuando regresó a Italia, Fibonacci escribió un libro llamado _Liber Abaci_ (en latín, "El libro de los cálculos"), donde presentó por primera vez los nuevos números arábigos a los comerciantes europeos. Fueron un éxito inmediato, y todavía los usamos hoy.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Retrato de Leonardo Fibonacci

:::

En una de las páginas de su libro, también investigó los patrones de reproducción de los conejos, por eso los números de Fibonacci llevan su nombre.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Páginas de #[em Liber Abaci] de Fibonacci

---
> id: spirals

Por supuesto, los números de Fibonacci no son cómo se reproducen los conejos _en realidad_ en la vida real. Los conejos no tienen exactamente una descendencia macho y una hembra cada mes, y no hemos tenido en cuenta que los conejos mueran eventualmente.

Pero resulta que hay muchos otros lugares en la naturaleza donde aparecen los _números de Fibonacci_: por ejemplo, las espirales en las plantas. ¿Puedes contar cuántas espirales hay en cada dirección?

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Dextrorso
      div(data-value="ccw") Sinistrórsum
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Esta piña tiene [[8]] espirales en sentido horario y [[13]] espirales en sentido antihorario.

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Dextrorso
      div(data-value="ccw") Sinistrórsum
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Este girasol tiene 34 espirales en sentido horario y 55 espirales en sentido antihorario.

:::

---
> id: spirals-1

En ambos casos, los números de espirales son números consecutivos de Fibonacci. Lo mismo es cierto para muchas otras plantas: la próxima vez que salga a un paseo, cuente la cantidad de pétalos en una flor o la cantidad de hojas en un tallo. ¡Muy a menudo encontrarás que son números de Fibonacci!

Por supuesto, esto no es solo una coincidencia. Hay una razón importante por la que a la naturaleza le gusta la secuencia de Fibonacci, de la que aprenderemos más adelante.

---
> id: bees

::: column(width=320)

    x-select.segmented
      div(data-value="male") Masculino
      div(data-value="female") Hembra
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Los números de Fibonacci también aparecen en las poblaciones de abejas melíferas.

En cada colonia de abejas hay una sola _reina_ que pone muchos huevos. Si un huevo es fertilizado por una abeja macho, se convierte en una abeja __hembra__. Si no se fertiliza, se incuba en una abeja __macho__ (llamada dron).

Esto significa que las abejas hembras tienen [[dos padres|un padre]], mientras que las abejas macho solo tienen [[un padre|dos padres]].

{.reveal(when="blank-0 blank-1")} Si dibujamos el árbol ancestral de una abeja, ¡el número de padres, abuelos, bisabuelos y generaciones anteriores siempre son números de Fibonacci!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Ocasionalmente, las abejas jóvenes son alimentadas con una comida especial llamada "jalea real". En ese caso, se convierten en reinas y volarán para comenzar una nueva colmena.

:::

---
> id: golden-spiral

### La proporción áurea

Al igual que los [números triangulares](gloss:triangle-numbers) y [números cuadrados](gloss:square-numbers), y otras secuencias que hemos visto antes, la secuencia de Fibonacci se puede visualizar usando un patrón geométrico:

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") Comenzamos con dos cuadrados pequeños de tamaño 1.
      .legend(slot="legend") A continuación, agregamos un nuevo cuadrado de tamaño 2, para formar un rectángulo más grande.
      .legend(slot="legend") A continuación, agregamos un cuadrado de tamaño 3, para formar un rectángulo aún más grande.
      .legend(slot="legend") El siguiente cuadrado tiene el tamaño 5. ¿Puedes ver que estamos recreando los números de Fibonacci?
      .legend(slot="legend") Si continuamos agregando cuadrados, tendrán tamaño 8, 13, 21, y así sucesivamente.
      .legend(slot="legend") Es posible que hayas notado que, a medida que los rectángulos se hacen más grandes, parecen comenzar a "girar en espiral" hacia afuera. Incluso podemos visualizar esto dibujando una espiral perfecta que conecte las esquinas de los cuadrados.

---
> id: golden-ratio

En cada paso, los cuadrados forman un rectángulo más grande. Su ancho y alto son siempre dos números consecutivos de Fibonacci. La __proporción__ del rectángulo es la relación de su ancho y su altura:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2

::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1.5

::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1.666…

::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1.6

::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac><mn>[[13]]</mn><mn>[[8]]</mn></mfrac> _{span.reveal(when="blank-0 blank-1")} = 1.625_

::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac><mn>[[21]]</mn><mn>[[13]]</mn></mfrac> _{span.reveal(when="blank-2 blank-3")} = 1.62…_

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Observemos cómo, a medida que agregamos más y más cuadrados, la proporción del rectángulo parece acercarse cada vez más a un número específico alrededor de 1.6. Este número se llama [__Proporción Aúrea__](gloss:golden-ratio) y generalmente se representa con la letra griega `φ` ("phi"). Su valor exacto es

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Mucha gente cree que la proporción áurea es particularmente agradable estéticamente. Es por eso que a menudo la usan artistas y arquitectos, como en estos dos ejemplos:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Se dice que el escultor griego Fidias utilizó la proporción áurea al diseñar el _Partenón_ en Atenas. La primera letra de su nombre, `φ`, es el símbolo que ahora usamos para la proporción áurea.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali.png" width=320 height=198)

{.caption} _El sacramento de la última cena_, del artista español Salvador Dalí, es una de las muchas pinturas en proporción áurea. En el fondo, también puede ver un gran [dodecaedro](gloss:dodecahedron).

:::

---
> id: golden-ratio-2

Podemos aproximar la proporción áurea entre [[dividiendo|sumando|restando]] dos números consecutivos de Fibonacci.

{.reveal(when="blank-0")} Sin embargo, resulta que el valor exacto de `φ` no puede escribirse como una fracción simple: es un [__número irracional__](gloss:irrational-numbers), al igual que [`π`](gloss:pi) y `sqrt(2)` y algunos otros números que has visto antes.

---
> id: sunflower-growing

### Espirales de Fibonacci

::: column.grow

La proporción áurea explica por qué los números de Fibonacci aparecen en la naturaleza, como el cono de girasol y pino que viste al comienzo de esta sección.

Ambas plantas crecen hacia afuera desde su centro (una parte de la planta llamada _meristemo_). A medida que se agregan nuevas semillas, hojas o pétalos, empujan los existentes más hacia afuera.

Mueve el control deslizante hacia la derecha para visualizar cómo crece una planta. Observe cómo cada hoja se agrega en una rotación diferente a la anterior. El ángulo entre dos hojas consecutivas es siempre el mismo.

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

Es importante que las flores escojan un ángulo adecuado: las hojas o semillas deben estar aproximadamente a la misma distancia para que obtengan la mayor cantidad de luz solar y nutrientes. En el diagrama a continuación, puede explorar cómo se vería un girasol con diferentes ángulos entre sus semillas:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Si el ángulo es [0°](action:set(0)), todas las semillas crecerán en una sola fila larga lejos del centro.

{div.inline(slot="legend")} Si el ángulo es [`1/2`](action:set(0.5)) de una rotación completa (180 °), las semillas se alternarán entre dos "brazos" separados que se alejan del centro.

{div.inline(slot="legend")} Si la rotación es otra proporción fraccional de 360 ​​°, por ejemplo [`2/5`](action:set(2/5)) o [`1/3`](action:set(1/3)) o [`3/8`](action:set(3/8)), entonces el número de "brazos" será el mismo que el [[denominador|numerador|factor primo]] de esa fracción.

{div(slot="legend")} Lamentablemente, los "brazos" son malos, porque significan que las semillas no están distribuidas de manera uniforme: todo el espacio entre los brazos se desperdicia. Si [números racionales](gloss:rational-numbers) no van a funcionar, ¡intentemos con [números irracionales](gloss:irrational-numbers)!

{div.inline(slot="legend")} Un ejemplo de un número irracional es [`pi`](gloss:pi). Pero si el ángulo entre las semillas es [`1/pi`](action:set(0.31831)) de 360 ​​°, todavía parece que tenemos brazos: 22 de ellas. Esto se debe a que la fracción `22/7 = 3.1429…` es una aproximación bastante buena para `pi`. Lo que realmente necesitamos es un número irracional que _no se pueda_ aproximar por una simple fracción.

{div.inline(slot="legend")} Resulta que la [proporción áurea](gloss:golden-ratio) es justamente eso: el "más irracional" de todos los números irracionales. Si el ángulo entre las semillas es [`1/phi`](action:set(0.6180339)) de 360 ​​°, parecen estar espaciadas casi perfectamente. Y este es precisamente el ángulo que utilizan las plantas ed todo el mundo.

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Podemos recordar que las proporciones de números consecutivos de Fibonacci se acercan cada vez más a la proporción áurea, y es por eso que, si contamos el número de espirales en una planta, a menudo encontraremos un número de Fibonacci.

Es importante recordar que la naturaleza no sabe acerca de los números de Fibonacci. La naturaleza tampoco puede resolver ecuaciones para calcular la proporción áurea, pero en el transcurso de millones de años, las plantas tuvieron mucho tiempo para probar diferentes ángulos y descubrir la mejor opción.

Las plantas y los animales siempre quieren crecer de la manera más eficiente, y es por eso que la naturaleza está llena de patrones matemáticos regulares.

:::

---
> id: lucas-numbers

### Fibonachos

Hasta ahora, hemos usado la ecuación recursiva para los números de Fibonacci. En realidad, también hay una ecuación explícita, pero es mucho más difícil de encontrar:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Podríamos intentar elegir diferentes puntos de partida para los números de Fibonacci. Por ejemplo, si comenzamos con 2, 1, … en lugar de 1, 1, … obtenemos una secuencia llamada __números de Lucas__.

Resulta que, independientemente de los dos números iniciales que elijamos, las secuencias resultantes comparten muchas propiedades. Por ejemplo, las proporciones de términos consecutivos _siempre_ [convergen](gloss:sequence-convergence) a la proporción áurea.

{.text-center.s-purple.s-small}
${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n}${a+b}_, _{span.n}${a+2×b}_,
_{span.n}${2×a+3×b}_, _{span.n}${3×a+5×b}_, _{span.n}${5×a+8×b}_,
_{span.n}${8×a+13×b}_, …

---
> id: fibonacci-puzzles

Existen muchos otros acertijos, patrones y aplicaciones relacionados con los números de Fibonacci. Aquí hay algunos ejemplos, que puede probar usted mismo:

::: .box.f-blue

#### Problema

__1. Divisibilidad de Fibonacci__

(a) ¿Qué números de Fibonacci son pares? ¿Hay un patrón para ubicarlos a lo largo de la secuencia? ¿Puedes explicar porque?

(b) ¿Qué números de Fibonacci son divisibles por 3 (o divisibles por 4)? ¿Que notaste?

    hr

__2. Sumas de Fibonacci__

¿Qué sucede si sumas tres números consecutivos de Fibonacci? ¿Puedes explicar porque?

    hr

__3. Escaleras de Fibonacci__

Al subir las escaleras, puedo dar pasos individuales o saltar dos pasos a la vez. Esto significa que hay muchas posibilidades diferentes de cómo subir una escalera. Por ejemplo, si hay 5 pasos, tengo 8 opciones diferentes:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

¿Cuántas opciones hay para escaleras con 6, 7 u 8 escalones? ¿Puedes detectar un patrón? ¿Y cómo se relaciona esto con los números de Fibonacci?

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Secuencias especiales

> section: special
> id: special-intro

Además de [aritmética](gloss:arithmetic-sequence) y [secuencias geométricas](gloss:geometric-sequence), [números de Fibonacci](gloss:fibonacci-numbers) y [números figurados](gloss:figurate-numbers), hay innumerables secuencias interesantes que no siguen una secuencia similar, un patron regular.

---
> id: primes

### Números primos

Un ejemplo que ya has visto antes son los [__números primos__](gloss:prime). Decimos que un número es _primo_ si no tiene [factores](gloss:factor) [[distintos de 1 y en sí mismo|distinto de 1 y de 2|múltiplos]].

---
> id: primes-1

Aquí están los primeros números primos:

{.text-center.s-teal} _{.n} 2_, _{.n} 3_, _{.n} 5_, _{.n} 7_, _{.n} 11_, _{.n} [[13]]_, _{.n} [[17]]_, _{.n} [[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Desafortunadamente, los números primos no siguen un patrón simple o una fórmula recursiva. A veces aparecen directamente uno al lado del otro (se denominan [primos gemelos](gloss:twin-primes)), y a veces hay grandes diferencias entre ellos. ¡Parecen estar distribuidos casi al azar!

Los números primos tampoco tienen una representación geométrica simple como los [números triangulares](gloss:triangle-numbers) o los [números cuadrados](gloss:square-numbers), pero con un poco de trabajo podemos revelar patrones interesantes:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Si tachamos todos los múltiplos de enteros pequeños, los números restantes deben ser primos. Este método se llama [__Tamiz de Eratóstenes__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,número de primos menores que x")

{.caption} Si dibujamos un gráfico que aumenta en 1 siempre que haya un número primo, obtenemos una función "escalonada" con propiedades fascinantes.

:::

---
> id: primes-3

Puede obtener más información sobre estas y otras propiedades de los números primos en nuestro curso sobre [Divisibilidad y primos](/course/divisibility/primes). ¡Son algunos de los conceptos más importantes y misteriosos de las matemáticas!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Números perfectos

Para determinar si un número es [primo](gloss:prime), tenemos que encontrar todos sus [factores](gloss:factor). Por lo general, _multiplicaríamos_ estos factores para recuperar el número original, pero veamos qué sucede si _sumamos_ todos los factores de un número:

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }

    table.grid.perfect-table
      tr
        td: strong Número
        td: strong Factores
        td: strong Suma de factores
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

Comparemos estos números con su suma de factores:

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

Para la mayoría de los números, la suma de sus factores es [[menor que|mayor que|igual a]] sí misma. Estos números se denominan __números deficientes__.

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

Para algunos números, la suma de sus factores es mayor que sí misma. Estos números se llaman __números abundantes__.

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Solo un número en la lista anterior tiene una suma de factores que es _igual_ a sí mismo: [[6]]. Estos números se llaman [__números perfectos__](gloss:perfect-numbers).

:::

---
> id: perfect-2

El siguiente número perfecto es 28, porque si sumamos todos sus factores obtenemos `1 + 2 + 4 + 7 + 14 = 28`. Después de eso, los números perfectos se vuelven mucho más raros:

{.text-center.s-purple.s-vertical.perfect-list} _{.n} 6_, _{.n} 28_, _{.n} 496_, _{.n} 8,128_, _{.n} 33,550,336_, _{.n} 8,589,869,056_, _{.n} 137,438,691,328_, _{.n} 2,305,843,008,139,952,128_,…

Tenga en cuenta que todos estos números son [[pares|multiplos de 3|2 más que un número cuadrado]]. _{span.reveal(when="blank-0")} ¡Resulta que también son todos números de triángulo!_

---
> id: perfect-3

::: column.grow

Los números perfectos fueron estudiados por primera vez por antiguos matemáticos griegos como [Euclides](bio:euclid), [Pitágoras](bio:pythagoras) y [Nicomachus](bio:nicomachus), hace más de 2000 años. Calcularon los primeros números perfectos y se preguntaron si podría haber _impares_.

Hoy, los matemáticos han usado computadoras para verificar los primeros 10 <sup> 1500 </sup> números (es decir, 1 seguido de 1500 ceros), pero sin éxito: todos los números perfectos que encontraron fueron pares. Hasta el día de hoy, aún se desconoce si hay números impares perfectos, lo que lo convierte en el problema no resuelto más antiguo en _de todas las matemáticas_.

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclides de Alejandría

:::

---
> id: hailstone

### La secuencia de granizo

La mayoría de las secuencias que hemos visto hasta ahora tenían una sola regla o patrón. Pero no hay ninguna razón por la que no podamos combinar varios diferentes, por ejemplo, una fórmula recursiva como esta:

    table.grid.text-left
      tr
        td: strong.md Si `x_n` es par:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md Si `x_n` es impar:
        td.md `x_(n+1) = 3 x_n + 1`

Comencemos con `x_1 = 5` y veamos qué sucede:

{.text-center.s-orange.with-arrows} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

Parece que después de algunos términos, la secuencia alcanza un "ciclo": 4, 2, 1 continuará repitiéndose una y otra vez, para siempre.

Por supuesto, podríamos haber elegido un punto de partida diferente, como ${n}{n|10|5,40,1}. Entonces la secuencia se vería así:

{.text-center} _{span.var.s-orange}${hailstones(n)}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Parece que la longitud de la secuencia varía mucho, pero siempre terminará en un ciclo 4, 2, 1, sin importar el primer número que elijamos. Incluso podemos visualizar los términos de la secuencia en un gráfico:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Observe cómo algunos puntos de partida terminan muy rápidamente, mientras que otros (como [31](action:set(31)) o [47](action:set(47))) toman más de un centenar de pasos antes de llegar al 4, 2, 1 ciclo.

---
> id: hailstone-3

::: column.grow

Todas las secuencias que siguen esta fórmula recursiva se llaman [__Secuencias de granizo__](gloss:hailstone-sequence), porque parecen moverse aleatoriamente hacia arriba y hacia abajo antes de alcanzar el ciclo 4, 2, 1, al igual que las piedras de granizo que se mueven hacia arriba y hacia abajo en una nube antes de estrellarse contra la Tierra.

En 1937, el matemático [Lothar Collatz](bio:collatz) propuso que _cada_ secuencia de granizo termina finalmente en un ciclo 4, 2, 1, cualquiera que sea el valor inicial que elija. Ya hemos verificado algunos puntos de partida anteriores, y las computadoras lo han probado para todos los números hasta `10^20`, es decir, 100 mil millones o un 1 seguido de veinte ceros.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Sin embargo, hay infinitos números enteros. Es imposible verificar cada uno de ellos, y nadie ha podido encontrar una [prueba](gloss:proof) que funcione para todos.

Al igual que la búsqueda de números perfectos impares, este sigue siendo un problema abierto en matemáticas. ¡Es sorprendente que estos patrones simples para secuencias puedan conducir a preguntas que han desconcertado incluso a los mejores matemáticos del mundo durante siglos!

---
> id: look-and-say

### La secuencia de mirar y decir

Aquí hay una secuencia más que es un poco diferente de todas las que has visto anteriormente. ¿Puedes encontrar el patrón?

{.text-center.s-lime.s-vertical} _{span.n} 1_, _{span.n} 11_, _{.n} 21_, _{.n} 1211_, _{.n} 111221_, _{.n} 312211_, …

_{button.next-step} Continuar_

---
> id: look-and-say-1

Esta secuencia se llama secuencia __Mirar y Decir__, y el patrón es exactamente lo que dice el nombre: comienzas con un 1, y cada término siguiente es lo que obtienes si “lees en voz alta” el el anterior. Aquí hay un ejemplo:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

¿Puedes encontrar ahora los siguientes términos?

{.text-center.s-lime.s-vertical}…, _{.n} 312211_, _{.n} [[13112221]]_, _{.n} [[1113213211]]_, …

---
> id: look-and-say-2

Esta secuencia se usa a menudo como un rompecabezas para confundir a los matemáticos, porque el patrón parece ser completamente no matemático. Sin embargo, resulta que la secuencia tiene muchas propiedades interesantes. Por ejemplo, cada término termina en [[1]], y nunca se usa ningún dígito mayor que [[3]].

---
> id: look-and-say-3

El matemático británico [John Conway](bio:conway) descubrió que, sin importar el número que elija como valor inicial, la secuencia eventualmente se dividirá en distintas "secciones" que ya no interactúan entre sí. Conway llamó a esto el _Teorema cosmológico_, y nombró las diferentes secciones utilizando los elementos químicos _Hidrógeno_, _Helio_, _Litio_, …, hasta _Plutonio_.

---
> id: quiz

### El cuestionario de secuencia

Hasta ahora ha visto innumerables secuencias matemáticas diferentes, algunas basadas en formas geométricas, algunas que siguen fórmulas específicas y otras que parecen comportarse casi al azar.

En este cuestionario puedes combinar todos tus conocimientos sobre secuencias. Solo hay un objetivo: ¡encontrar el patrón y calcular los siguientes dos términos!

::: .box.f-blue

#### Encuentra el siguiente número

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Patrón: Siempre +4_

{.text-center.s-orange} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Patrón: +3, +4, +5, +6,…_

{.text-center.s-red} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Patrón: +4, –1, +4, –1,…_

{.text-center.s-purple} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Patrón: × 2, +2, × 2, +2,…_

{.text-center.s-blue} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Patrón: Números de Fibonacci_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Patrón: +1, +2, ÷ 2, +1, +2, ÷ 2,…_

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Patrón: números cuadrados impares_

:::

---

## Triángulo de Pascal

> section: pascals-triangle
> id: pascal-intro

A continuación podemos ver una pirámide numérica que se crea usando un patrón simple: comienza con un solo "1" en la parte superior, y cada celda siguiente es la suma de las dos celdas directamente superiores. Pase el mouse sobre algunas de las celdas para ver cómo se calculan y luego complete las que faltan:

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

Este diagrama solo muestra las primeras doce filas, pero podríamos continuar para siempre, agregando nuevas filas en la parte inferior. Observe que el triángulo es [[simétrico|recto|equilátero]], lo que puede ayudarlo a calcular algunas de las celdas.

---
> id: pascal-triangle

El triángulo se llama [__El triángulo de Pascal__](gloss:pascals-triangle), llamado así por el matemático francés [Blaise Pascal](bio:pascal). Fue uno de los primeros matemáticos europeos en investigar sus patrones y propiedades, pero fue conocido por otras civilizaciones muchos siglos antes:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280)

{.caption} En 450 a. C., el matemático indio [Pingala](bio:pingala) llamó al triángulo la __"Escalera del Monte Meru"__, llamada así por una montaña sagrada hindú.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} En Irán, se conocía como el __"Triángulo de Khayyam"__ (مثلث خیام), llamado así por el poeta y matemático persa [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} En China, el matemático Jia Xian también descubrió el triángulo. Fue nombrado después de su sucesor, __"El triángulo de Yang Hui"__ (杨辉 三角).

:::

El triángulo de Pascal se puede crear usando un patrón muy simple, pero está lleno de patrones y propiedades sorprendentes. Es por eso que ha fascinado a los matemáticos de todo el mundo, durante cientos de años.

_{button.next-step} Continuar_

---
> id: pascal-sequences

### Buscando secuencias

En las secciones anteriores vimos innumerables secuencias matemáticas diferentes. Resulta que muchos de ellos también se pueden encontrar en el triángulo de Pascal:

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

#### {.btn.yellow} _{span.check(when="blank-0")}_

Los números en la primera diagonal a cada lado son todos [[uno|crecientes|pares]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

Los números en la segunda diagonal a cada lado son los [[enteros|primos|números cuadrados]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

Los números en la tercera diagonal a cada lado son los [[números de triángulo|números cuadrados|Números de Fibonacci]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

Los números en la cuarta diagonal son los [[números tetraédricos|números cúbicos|potencias de 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Si sumas todos los números en una fila, sus sumas forman otra secuencia: los [[potencias de dos|números perfectos|números primos]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

En cada fila que tiene un número primo en su segunda celda, todos los números siguientes son [[múltiplos|factores|inversos]] de ese primo.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

El diagrama anterior resalta las diagonales "superficiales" en diferentes colores. Si sumamos los números en cada diagonal, obtenemos los [[números de Fibonacci|números de granizo|una secuencia geométrica]].

:::

---
> id: pascal-sequences-1

Por supuesto, cada uno de estos patrones tiene una razón matemática que explica por qué aparece. ¡Quizás puedas encontrar algunos de ellos!

Otra pregunta que podemos hacer es con qué frecuencia aparece un número en el triángulo de Pascal. Claramente, hay infinitos 1s, uno 2, y todos los demás números aparecen [[al menos dos veces|al menos una vez|exactamente dos veces]], _{span.reveal(when="blank-0")} en la segunda diagonal a cada lado._

---
> id: pascal-sequences-2

Algunos números en el medio del triángulo también aparecen tres o cuatro veces. Incluso hay algunas que aparecen seis veces: puede ver tanto [120](->.s120) como [3003](->.s3003) cuatro veces en el triángulo de arriba, y aparecerán dos veces más cada una en las filas 120 y 3003 .

Como 3003 es un número de triángulo, en realidad aparece dos veces más en las diagonales _tercera_ del triángulo, lo que hace ocho ocurrencias en total.

Se desconoce si hay otros números que aparecen ocho veces en el triángulo, o si hay números que aparecen más de ocho veces. El matemático estadounidense [David Singmaster](bio:singmaster) planteó la hipótesis de que hay un límite fijo sobre la frecuencia con la que los números pueden aparecer en el triángulo de Pascal, pero aún no se ha demostrado.

---
> id: modular
> goals: select

### Divisibilidad

Algunos patrones en el triángulo de Pascal no son tan fáciles de detectar. En el siguiente diagrama, resalte todas las celdas que son pares:

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

{.reveal(when="select")} Parece que los números pares en el triángulo de Pascal forman [[otro triángulo más pequeño|una matriz|un cuadrado]].

---
> id: modular-1
> goals: c2 c3 c4 c5

Colorear cada celda manualmente lleva mucho tiempo, pero aquí puede ver qué sucede si haríamos esto para muchas más filas. ¿Y qué hay de las céldas divisibles por otros números?

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
        button.btn.btn-red(data-value="2") Divisible por 2
        button.btn.btn-blue(data-value="3") Divisible por 3
        button.btn.btn-green(data-value="4") Divisible por 4
        button.btn.btn-yellow(data-value="5") Divisible por 5

---
> id: modular-2

::: column.grow

¡Guauu! Las celdas de colores siempre aparecen en [[triángulos|cuadrados|pares]] (a excepción de algunas celdas individuales, que podrían verse como triángulos de tamaño 1).

Si continuamos el patrón de celdas divisibles por 2, obtenemos uno que es muy similar al __triángulo de Sierpinski__ a la derecha. Las formas como esta, que consisten en un patrón simple que parece continuar para siempre mientras se hacen cada vez más pequeñas, se denominan [__Fractales__](gloss:fractal). Aprenderemos más sobre ellos en el futuro …

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")

{.caption} El triángulo de Sierpinski

:::

---
> id: pascal-binomial

### Coeficientes binomiales

Hay una propiedad más importante del triángulo de Pascal de la que tenemos que hablar. Para entenderlo, intentaremos resolver el mismo problema con dos métodos completamente diferentes y luego veremos cómo están relacionados.

{.todo} MUY PRONTO

---

## Límites y convergencia

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} MUY PRONTO
