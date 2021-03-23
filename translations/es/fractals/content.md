# Fractales

## Introducción

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

Al mirar alrededor de la naturaleza, es posible que haya notado plantas complejas como estas:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Este __Helecho__ consiste en muchas hojas pequeñas que se ramifican de una más grande.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Este __brócoli romanesco__ consiste en [[conos más pequeños|cubes|spheres]] en espiral alrededor de uno más grande.

:::

{.reveal(when="blank-0")} Inicialmente, estos aparecen como formas muy complejas, pero cuando miras más de cerca, puedes notar que ambos siguen un patrón relativamente simple: todas las [partes individuales](target:fractal) de las plantas se ven exactamente igual que la totalidad planta, solo que más pequeña. El mismo patrón se repite una y otra vez, a escalas más pequeñas. [Continuar](btn:next)

---

> id: fern

En matemáticas, llamamos a esta propiedad __autosimilitud__, y las formas que la tienen se llaman [__fractales__](gloss:fractal). Son algunos de los objetos más bellos y extraños de todas las matemáticas.

Para crear nuestros propios fractales, tenemos que comenzar con un patrón simple y luego repetirlo una y otra vez, a escalas más pequeñas.

::: column.grow

Uno de los patrones más simples podría ser un segmento de línea [{.pill.red}](target:s1), con [{.pill.blue} dos segmentos más](target:s2) que se ramifican desde un extremo. Si repetimos este patrón, ambos segmentos azules también tendrán dos ramas más en sus extremos.

Puede mover los [puntos azules](target:dot) para cambiar la longitud y el ángulo de todas las ramas. Luego aumente el número de iteraciones usando [el control deslizante](->#fern-slider) a continuación.

{.reveal(when="slider-0")} Dependiendo de la posición de las ramas, puedes hacer patrones completamente diferentes, como el [helecho](action:set(130,228,197,184)) arriba, un [árbol](action:set(160,186,200,186)) o [pentágonos anidados](action:set(113,235,232,238)). ¿Qué más puedes encontrar? [Continuar](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---

> id: triangle

::: column.grow(parent="right")

Otro famoso fractal es el [__triángulo de Sierpinski__](gloss:sierpinski-triangle). En este caso, comenzamos con un triángulo equilátero grande, y luego cortamos repetidamente triángulos más pequeños de las partes restantes.

{.reveal(when="slider=0")} Observe cómo la forma final está compuesta de [tres copias idénticas de sí misma](target:x), ¡y cada una de estas está compuesta de copias aún más pequeñas de todo el triángulo! Podrías seguir haciendo zoom en el triángulo para siempre, y los patrones y formas siempre continuarán repitiéndose.

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: real

Las plantas al comienzo de este capítulo _se ven_ como fractales, pero es claramente imposible crear _verdaderos_ fractales en la vida real. Si seguimos repitiendo el mismo patrón una y otra vez, cada vez más pequeños, eventualmente llegaríamos a células, moléculas o átomos que ya no se pueden dividir.

Sin embargo, usando las matemáticas, podemos pensar en las propiedades que los fractales reales "tendrían", y estas son muy sorprendentes ... [Continuar](btn:next)

---
> id: dimension

### Dimensiones fractales

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Primero, pensemos en la dimensión de los fractales. Una línea tiene dimensión [[1]]. _{span.reveal(when="blank-0")} Al escalarlo en un factor de 2, su longitud aumenta en un factor de `2^1 = 2`. ¡Obviamente!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un cuadrado tiene dimensión [[2]]. _{span.reveal(when="blank-0")} Al escalarlo en un factor de 2, su área aumenta en un factor de `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cubo tiene dimensión [[3]]. _{span.reveal(when="blank-0")} Al escalarlo en un factor de 2, su volumen aumenta en un factor de `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Observe que el cubo más grande en la imagen ¡consta de 8 copias de la más pequeña!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Ahora echemos un vistazo al triángulo de Sierpinski. Si lo escalamos por un factor de 2, puede ver que su "área" aumenta en un factor de [[3]].

{.reveal(when="blank-0")} Digamos que _d_ es la dimensión del triángulo de Sierpinski. Usando el mismo patrón que el anterior, obtenemos `2^d = 3`. En otras palabras, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585…_

:::

---
> id: dimension-4

Pero espera ... ¿cómo puede algo tener una dimensión que no sea un número entero? Parece imposible, pero esta es solo una de las propiedades extrañas de los fractales. De hecho, esto es lo que les da su nombre a los fractales: tienen una dimensión __fraccional__.

Con cada iteración, eliminamos parte del área del triángulo de Sierpinski. Si pudiéramos hacer esto infinitamente muchas veces, en realidad no quedaría ningún área: es por eso que el triángulo de Sierpinski es algo entre un área bidimensional y una línea unidimensional.

::: .theorem

Mientras que muchos fractales son _auto-similares_, una mejor definición es que __fractales__ son formas que tienen una dimensión __no entera__.

:::

[Continuar](btn:next)

---

> id: snowflake

### El copo de nieve de Koch

Hay muchas formas en la naturaleza que parecen fractales. Ya hemos visto algunas plantas al comienzo de este capítulo. Otros grandes ejemplos son los copos de nieve y los cristales de hielo:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

Para crear nuestro propio copo de nieve fractal, una vez más tenemos que encontrar un procedimiento simple que podamos aplicar una y otra vez.

::: column.grow

Al igual que el triángulo de Sierpinski, comencemos con un solo triángulo equilátero. Sin embargo, en lugar de _eliminar_ triángulos más pequeños en cada paso, _agregamos_ triángulos más pequeños a lo largo del borde. La longitud lateral de cada triángulo es [[`1/3`|`1/4`|`1/2`]] de los triángulos en el paso anterior.

{.reveal(when="blank-0")} La forma resultante se llama [__copo de nieve de Koch__](gloss:koch-snowflake), llamado así por el matemático sueco [Helge von Koch](bio:koch). Observe, una vez más, que [secciones pequeñas](target:t2) del borde del copo de nieve se ven exactamente igual que [secciones más grandes](target:t1).

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---

> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

Cuando escalamos un segmento de borde del Copo de nieve Koch por un factor de 3, su longitud [[se cuadruplica|triples|doubles]].

{.reveal(when="blank-0")} Usando la misma relación entre dimensiones y factores de escala que el anterior, obtenemos la ecuación [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Esto significa que la dimensión del copo de nieve de Koch es `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Área _{span.check(when="blank-6")}_

Crear los copos de nieve Koch es casi como una secuencia [recursiva](gloss:sequence-recursive): conocemos la forma inicial (un triángulo) y sabemos cómo pasar de un término al siguiente (agregando más triángulos en cada borde):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] nuevos triángulos

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] nuevos triángulos

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] nuevos triángulos

:::

{.reveal(when="blank-0 blank-1 blank-2")} Después de la primera iteración, el número de nuevos triángulos agregados aumenta en un factor de [[4]] en cada paso. Al mismo tiempo, el área de estos nuevos triángulos disminuye en un factor de [[9]] en cada paso.

{.reveal(when="blank-3 blank-4")} Digamos que el [primer triángulo](->#koch-0) tiene un área de 1. Luego, el área total de los [próximos tres triángulos](->#koch-1) es `3 × 1/9 = 1/3`. Los siguientes pasos forman una [[serie geométrica|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} con una proporción común [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Usando la fórmula para la suma de infinitas [series geométricas](gloss:geometric-series), podemos calcular que el área total del copo de nieve de Koch es

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perímetro _{span.check(when="blank-9")}_

::: column.grow

También podemos intentar calcular el perímetro del copo de nieve de Koch. Como ya hemos visto antes, la longitud del perímetro cambia por un factor de [[`4/3`|`3/4`|`1/4`]] en cada paso.

{.reveal(when="blank-8")} Esto significa que, una vez más, tenemos una serie geométrica, pero en este caso, [[no converge|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} ¡Esto significa que el perímetro del copo de nieve de Koch es en realidad __infinitamente largo__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Si esto parece contradictorio, solo recuerda que multiplicamos el perímetro por `§4/3` en cada paso, y lo hacemos infinitamente muchas veces._

:::

---

> id: frozen

::: column.grow

Es casi impensable que pueda tener una forma con un área _finita_ y también una circunferencia _infinita_, pero esta es solo una de las muchas propiedades inesperadas de los fractales.

¿Puedes encontrar alguna otra forma de crear tus propios fractales? [Continuar](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Mi alma está en espiral en fractales congelados por todas partes ..."

:::

---

> id: menger-sponge

### esponja Menger

Los fractales no tienen que ser "planos", como muchos de los ejemplos anteriores. Uno de los fractales más famosos que parecen tridimensionales es la __esponja Menger__, llamada así por el matemático [Karl Menger](bio:menger) que la describió por primera vez en 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Comenzamos con un cubo sólido, y repetidamente taladramos agujeros cada vez más pequeños en sus lados. Cada nueva iteración de agujeros tiene [[`1/3`|`1/2`|`1/4`]] el ancho de la iteración anterior de agujeros.

{.reveal(when="blank-0")} Un cubo `3×3×3` consta de 27 cubos más pequeños, pero aquí hemos eliminado algunos de estos. La esponja Menger consta de [[20]] copias de sí misma, que son 3 veces más pequeñas.

{.reveal(when="blank-1")} Ahora podemos intentar calcular la dimensión _d_ de la esponja Menger tal como lo hicimos para el copo de nieve de Koch arriba. En este caso obtenemos `3^d = 20` o `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Si imagina cortar más y más agujeros, infinitas veces, no quedaría ningún volumen real. ¡Es por eso que el cubo es "no del todo" tridimensional! [Continuar](btn:next)

---

> id: coastlines

### Costas fractales

Una de las características clave de todos los fractales que hemos visto hasta ahora es que puedes "acercar" para siempre y siempre encontrar nuevos patrones. Alrededor de 1920, el matemático británico [Lewis Fry Richardson](bio:richardson) se dio cuenta de que lo mismo es cierto para la frontera o la costa de muchos países.

Comienza con la forma básica del país y, a medida que se acerca, agrega entradas de ríos, bahías y estuarios, luego acantilados individuales, rocas, guijarros, etc.

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[Continuar](btn:next)

---

> id: coastlines-1

::: column.grow

Este es un problema importante cuando se trata de calcular la longitud de la frontera de un país: ¿cómo decide hasta qué punto acercarse y qué rincones y grietas incluir?

Una manera de medir la longitud de la costa de Gran Bretaña, por ejemplo, es tomar una regla larga, caminar alrededor de sus playas y luego sumar todas las distancias.

Si la regla tiene ${rulers[index]}{index|0|0,8,1} km de largo, tenemos que usarla ${count} veces, por lo que obtenemos una línea costera total de ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Podemos seguir adelante, con gobernantes cada vez más pequeños, y cada vez que nuestro resultado para la longitud de la costa sea un poco más largo. Al igual que el Copo de nieve de Koch, ¡parece que la costa de Gran Bretaña es infinitamente larga! Esto a menudo se llama la paradoja de la __costa__. [Continuar](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Algunas décadas más tarde, el matemático [Benoit Mandelbrot](bio:mandelbrot) tropezó con el trabajo de Richardson en un libro de la biblioteca descartado, mientras trabajaba en IBM. Reconoció su importancia y también cómo se relaciona con investigaciones más recientes sobre fractales y dimensiones.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

La costa de Gran Bretaña ciertamente "parece" fractal, pero no es _auto-similar_, como otros fractales que hemos visto antes. Para encontrar su tamaño, podemos dibujarlo en una cuadrícula y contar el número de celdas con las que se cruza.

{.r.reveal(when="slider-0")} Inicialmente, hay __{.pill.yellow} 88__ celdas de intersección. Si escalamos la costa por un factor de 2, hay __{.pill.yellow} 197__ celdas que se cruzan, ¡más del doble! [Continuar](btn:next)

{.r.reveal(when="next-0")} El tamaño de la costa ha aumentado en un factor de `§197/88`. Como antes, esto significa que la dimensión de la costa es

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Si repetimos esto con cuadrículas más grandes, encontraremos que la dimensión de la costa de Gran Bretaña es en realidad aproximadamente 1.21. Mandelbrot se dio cuenta de que esta dimensión fractal también es una medida de la __rugosidad__ de una forma, un nuevo concepto, para el cual encontró importantes aplicaciones en muchas otras áreas de las matemáticas y las ciencias.

---

> id: nature

### Más fractales en la naturaleza y la tecnología

Si bien los verdaderos fractales nunca pueden aparecer en la naturaleza, hay muchos objetos que se parecen _casi_ a fractales. Ya hemos visto plantas, copos de nieve y costas, y aquí hay algunos ejemplos más:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Cordillera en Asia central

{sesenta y cinco}

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Delta del río Ganges en India

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Rayos

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Vasos sanguíneos en la retina

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Gran Cañón en los EE. UU.

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Nubes

:::

Todos estos objetos pueden aparecer completamente al azar, pero, al igual que los fractales, hay un patrón subyacente que determina cómo se forman. Las matemáticas pueden ayudarnos a comprender mejor las formas, y los fractales tienen aplicaciones en campos como la medicina, la biología, la geología y la meteorología. [Continuar](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Terreno fractal generado por computadora

::: column.grow

También podemos usar fractales para crear "copias" realistas de la naturaleza, por ejemplo, como paisajes y texturas utilizadas en videojuegos o películas generadas por computadora. ¡El agua, las montañas y las nubes en esta imagen están hechas completamente por una computadora, con la ayuda de fractales!

E incluso podemos revertir este proceso para comprimir imágenes digitales, para reducir su tamaño de archivo. Los primeros algoritmos fueron desarrollados por Michael Barnsley y Alan Sloan en la década de 1980, y todavía se están investigando nuevos.

:::

---

## El triángulo de Sierpinski

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

Uno de los fractales que vimos en el capítulo anterior fue el [__triángulo de Sierpinski__](gloss:sierpinski-triangle), que lleva el nombre del matemático polaco [Wacław Sierpiński](bio:sierpinski). Se puede crear comenzando con un triángulo equilátero grande y luego cortando repetidamente triángulos más pequeños fuera de su centro.

{.r.reveal(when="slider-0")} Wacław Sierpiński fue el primer matemático en pensar en las propiedades de este triángulo, pero ha aparecido muchos siglos antes en obras de arte, patrones y mosaicos.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Aquí hay algunos ejemplos de revestimientos de pisos de diferentes iglesias en Roma:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Como resultado, el triángulo de Sierpinski aparece en una amplia gama de otras áreas de las matemáticas, y hay muchas formas diferentes de generarlo. ¡En este capítulo, exploraremos algunos de ellos! [Continuar](btn:next)

---

> id: pascal
> goals: select

### Triángulo de Pascal

Es posible que ya recuerde el triángulo de Sierpinski de nuestro capítulo sobre [__el triángulo de Pascal__](gloss:pascals-triangle). Esta es una pirámide numérica en la que cada número es la suma de los dos números anteriores. Toque todos los números _pares_ en el triángulo a continuación para resaltarlos y vea si nota un patrón:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---

> id: pascal-1

El triángulo de Pascal puede continuar hacia abajo para siempre, y el patrón de Sierpinski continuará con triángulos cada vez más grandes. Ya puedes ver el comienzo de un triángulo aún más grande, comenzando en la fila 16.

Si dos celdas adyacentes son divisibles por 2, entonces su suma en la celda debajo también debe ser divisible por 2, es por eso que solo podemos obtener triángulos de colores (o celdas individuales). Por supuesto, también podemos intentar colorear todas las celdas divisibles por números _que no sean 2_. ¿Qué crees que pasará en esos casos? [Continuar](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Aquí puedes ver una pequeña versión de las primeras 128 filas del triángulo de Pascal. Hemos resaltado todas las celdas que son divisibles por ${n}{n|2|2,40,1}. ¿Qué notas?

{.reveal(when="var-0")} Para cada número, tenemos un patrón triangular diferente similar al triángulo de Sierpinski. El patrón es particularmente regular si elegimos un [[número primo|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Si el número tiene _muchos factores primos_ diferentes, el patrón parece más aleatorio._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### El juego del caos

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Aquí puedes ver los tres vértices de un triángulo equilátero. Toque en cualquier lugar del área gris para crear un cuarto punto.

{.r.reveal(when="point")} Juguemos un juego simple: elegimos uno de los vértices del triángulo al azar, dibujamos un segmento de línea entre nuestro punto y el vértice, y luego encontramos el [{.pill.red} punto medio](target:p1) de ese segmento. [Continuar](btn:next)

{.r.reveal(when="next-0")} Ahora repetimos el proceso: elegimos otro vértice aleatorio, dibujamos el segmento desde nuestro último punto y luego encontramos el [{.pill.green} punto medio](target:p2). Tenga en cuenta que coloreamos estos nuevos puntos en función del color del vértice del triángulo que elegimos. [Continuar](btn:next)

{.reveal(when="next-1")} Hasta ahora, no ha sucedido nada sorprendente, pero observe cómo repetimos el mismo proceso muchas veces más:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Agregar 1000 pasos_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Este proceso se llama __Chaos Game__. Puede haber algunos puntos extraviados al principio, pero si repite los mismos pasos muchas veces, la distribución de puntos comienza a parecerse exactamente al triángulo de Sierpinski.

Hay muchas otras versiones: por ejemplo, podríamos comenzar con un cuadrado o un pentágono, podríamos agregar reglas adicionales como no poder seleccionar el mismo vértice dos veces seguidas, o podríamos elegir el siguiente punto en una proporción que no sea `§1/2` a lo largo del segmento. En algunos de estos casos, solo obtendremos una distribución aleatoria de puntos, pero en otros casos, revelaremos aún más fractales:

    include components/chaos-game

{.reveal(when="s1 s2 play")} ¿Descubriste la [alfombra Sierpinski](action:carpet()) o este [copo de nieve pentagonal](action:snowflake()) basado en la [__Proporción dorada__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Autómatas celulares

Un __autómata celular__ es una cuadrícula que consta de muchas células individuales. Cada celda puede estar en diferentes "estados" (por ejemplo, diferentes colores), y el estado de cada celda está determinado por sus celdas circundantes.

En nuestro ejemplo, cada celda puede ser negra o blanca. Comenzamos con una fila que contiene un solo cuadrado negro. En cada fila siguiente, el color de cada celda está determinado por las tres celdas inmediatamente anteriores. Toque las ocho opciones posibles a continuación para cambiar su color: ¿puede encontrar un conjunto de reglas que cree un patrón similar al triángulo de Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Hay dos opciones para cada una de las ocho opciones, lo que significa que hay `2^8 =` [[256]] reglas posibles en total. Algunos, como [Regla 126](action:setRule('01111110')), se parecen al triángulo de Sierpinski. Otros, como [Regla 30](action:setRule('01111000')), parecen completamente caóticos. Fue descubierto por [Stephen Wolfram](bio:wolfram) en 1983, ¡y las computadoras incluso pueden usarlos para generar números aleatorios!

---

> id: cellular-1

::: column.grow

Los autómatas celulares muestran cómo se pueden crear patrones altamente complejos mediante reglas muy simples, al igual que los fractales. Muchos procesos en la naturaleza también siguen reglas simples, pero producen sistemas increíblemente complejos.

En algunos casos, esto puede conducir a la aparición de patrones que se parecen a los autómatas celulares, por ejemplo, los colores en el caparazón de este caracol.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, un caracol de mar venenoso

:::

---

> id: tetrahedra

### Tetrahedra de Sierpinski

Hay muchas variantes del triángulo de Sierpinski y otros fractales con propiedades y procesos de creación similares. Algunos se ven bidimensionales, como la _Alfombra Sierpinski_ que viste arriba. Otros se ven tridimensionales, como estos ejemplos:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Tetrahedra de Sierpinski

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Pirámide de Sierpinski

:::

---

## El conjunto de Mandelbrot

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Todos los fractales que vimos en los capítulos anteriores se crearon utilizando un proceso de __iteración__: comienzas con un patrón específico y luego lo repites una y otra vez.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Esto es similar a otro concepto en matemáticas que viste antes: con [secuencias recursivas](gloss:sequence-recursive), comienzas con un número específico, y luego aplicas la misma fórmula recursiva, una y otra vez, para obtener el siguiente número en el secuencia.

Tomemos como ejemplo la fórmula recursiva `§x_n = x_(n-1)^2` y grafiquemos sus términos en una recta numérica. Puede cambiar el valor de `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Observe cómo la secuencia resultante puede comportarse de manera muy diferente, dependiendo del valor inicial `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Si `x_0 > 1`, la secuencia [[diverge|converges]]: _{span.reveal(when="blank-0")} simplemente sigue creciendo, hasta el infinito._

::: column.frame.f-blue.text-center(width=212)

Si `x_0` está entre –1 y 1, la secuencia [[converge|diverges]].

::: column.frame.f-blue.text-center(width=212)

Si `x_0 < -1`, la secuencia [[diverge|converges]].

:::

---

> id: iteration-2

Hasta ahora, no hemos aprendido nada nuevo. Sin embargo, hace aproximadamente un siglo, los matemáticos comenzaron a explorar qué sucede con estas secuencias si usas [__números complejos__](gloss:complex-numbers), en lugar de solo la recta numérica real. Sus descubrimientos fueron algunos de los resultados más sorprendentes y hermosos en todas las matemáticas.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Conjuntos de Julia

Usemos la misma secuencia que antes, `§x_n = x_(n-1)^2`, pero en el plano complejo. Puede mover la posición de `pill(x_0,"yellow","x0")` para ver qué sucede con los siguientes términos. Si parece que la secuencia convergerá, coloreemos el punto correspondiente en el plano en _{span.pill.blue} azul_:

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Como puede ver, la secuencia converge siempre que `pill(x_0,"yellow","x0")` se encuentre [[dentro del círculo unitario| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (el círculo con radio 1, centrado en el origen)._

---

> id: julia-1

Ahora hagamos las cosas un poco más difíciles. En lugar de simplemente cuadrar el número anterior, también agregamos una constante _{.pill.red} c_ cada vez (que puede ser cualquier número complejo). En otras palabras, `§x_n = x_(n-1)^2 + c`. ¿Crees que todavía obtendremos un círculo de convergencia? ¿Qué otras formas crees que podríamos ver? [Continuar](btn:next)

---

> id: julia-2

En este diagrama, puede mover la posición de `pill(x_0,"yellow","x0")` así como el valor de `pill(c,"red","c")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} Ya sabemos qué sucede si [`c = 0`](action:animate(0,0)), eso es lo mismo que en el ejemplo anterior. La secuencia de convergencia siempre que `x_0` se encuentre dentro del círculo unitario.

{div(slot="legend")} Tan pronto como cambiemos el valor de _c_, sucede algo maravilloso. El círculo se transforma en una forma fractal muy compleja.

{div(slot="legend")} Cuando [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), la forma se divide en infinitos elementos diminutos dispuestos en espirales.

::: div(slot="legend")

En algunos casos, la secuencia no converge a un _punto único_, sino que alcanza un ciclo de múltiples puntos, como un triángulo. Estos ciclos se denominan __órbitas__.

Los puntos de color azul significan que la secuencia correspondiente converge o tiene una órbita (decimos que está __delimitada__). Los puntos que quedan en blanco significan que la secuencia correspondiente __diverge__: no está acotada, y eventualmente explota hasta el infinito.

:::

{div(slot="legend")} ¿Qué más puedes encontrar? Echa un vistazo a los patrones cuando [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) o cuando [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). También hay algunos valores de _c_ donde _cada_ secuencia diverge, por lo que todo el plano complejo permanece blanco.

:::

---

> id: julia-3

Las diferentes formas que se forman coloreando los números se llaman [__Conjuntos de Julia__](gloss:julia-set). Fueron descubiertos independientemente por dos matemáticos franceses, [Gaston Julia](bio:julia) y [Pierre Fatou](bio:fatou), alrededor de 1918.

En ese momento, no había computadoras para ayudar a visualizar cómo se veían los conjuntos de Julia. Los matemáticos como Julia y Fatou pudieron razonar matemáticamente sobre ellos, pero solo vieron bocetos a mano y toscos de cómo se verían.

Hoy no tenemos este problema: las imágenes a continuación son todos conjuntos de Julia diferentes. Los diferentes colores indican _qué tan rápido_ la secuencia en ese punto diverge:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Continuar](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### El conjunto de Mandelbrot

Al crear los diferentes conjuntos de Julia, es posible que haya notado que había algunos valores de _c_ para los cuales cada secuencia diverge, y todo el plano complejo permanece blanco. Unas pocas décadas después de Julia y Fatou, una nueva generación de matemáticos intentó mapear cómo se veían estas áreas.

En el ejemplo anterior, elegimos un valor fijo para `pill(c,"red","c")`, y luego cambiamos la posición de `pill(x_0,"yellow","x0")` para colorear el plano. Ahora arreglemos el valor de `pill(x_0 = 0,"yellow","x0")` y, en su lugar, cambiemos el valor de `pill(c,"red","c")`.

Una vez más, pinta sobre el plano complejo para revelar el área en la que las secuencias permanecen delimitadas. ¿Qué formas esperas que aparezcan?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

Este fractal se llama [__Conjunto de Mandelbrot__](gloss:mandelbrot-set), y cuando se gira 90 °, se ve casi como una persona, con cabeza, cuerpo y dos brazos. Fue definido y dibujado por primera vez en 1978, en un trabajo de investigación de los matemáticos Robert Brooks y Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Unos años más tarde, [Benoit Mandelbrot](bio:mandelbrot) utilizó las potentes computadoras de IBM para crear una visualización mucho más detallada del fractal, que más tarde recibió su nombre. Las primeras impresiones se veían diferentes de lo que esperaba, hasta que se dio cuenta de que los técnicos que trabajaban en las impresoras estaban limpiando la "borrosidad" alrededor de su borde, suponiendo que fue causada por partículas de polvo o errores de la impresora, y no una característica definitoria de los fractales. ! [Continuar](btn:next)

---

> id: mandel-zoom

Como todos los fractales, podemos "acercarnos" al conjunto de Mandelbrot para siempre, encontrando nuevos patrones en cada escala. Aquí puede ampliar una parte del conjunto de Mandelbrot que se llama __Seahorse valley__. Los puntos negros son _dentro de_ el conjunto de Mandelbrot, donde la secuencia está limitada. Los puntos de color están _fuera de_ del conjunto de Mandelbrot, donde la secuencia diverge, y los diferentes colores indican _qué tan rápido_ crece hasta el infinito:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Este control deslizante consta de 27 imágenes individuales, hasta un nivel de zoom de más de 14 billones, o `2^54`. En total, tomaron casi 45 minutos para renderizar en una computadora portátil moderna. El conjunto de Mandelbrot se puede crear con una sola ecuación simple, `§x_n = x_(n-1)^2 + c`, pero es infinitamente complejo e increíblemente hermoso.

---

> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

A medida que mueve el valor de [{.pill.red} c](target:c) alrededor del conjunto de Mandelbrot, puede notar una propiedad curiosa:

* Todas las secuencias dentro del [cuerpo principal](target:bulb0) del conjunto Mandelbrot [[convergen|diverge|reach an orbit]] _{span.reveal(when="blank-0")} en un solo punto._
* {.reveal(when="blank-0")} Las secuencias dentro del [bulbo grande](target:bulb1) en la parte superior [[alcanzan una órbita|converge|diverge]] _{span.reveal(when="blank-1")} que consta de [[3]] puntos._
* {.reveal(when="blank-2")} Las secuencias en [esta bombilla más pequeña](target:bulb2) tienen órbitas de longitud [[5]].

:::

{.reveal(when="blank-3")} Cada bombilla tiene una órbita de diferente tamaño, con bombillas más pequeñas que tienen más y más puntos en sus órbitas. El tamaño de estas órbitas está estrechamente relacionado con el __Mapa logístico__, un concepto importante en [Teoría del caos](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot dedicó la mayor parte de su vida al estudio de los fractales, así como a las matemáticas de la _aspereza_ y la _autosimilitud_. Su trabajo tuvo aplicaciones en física, meteorología, neurología, economía, geología, ingeniería, informática y muchos otros campos.

En 1985, el set de Mandelbrot apareció en la portada de la revista _Scientific American_, y desde entonces se ha convertido en una de las formas matemáticas más reconocibles del mundo. Puede encontrarlo en camisetas, videos musicales y como protectores de pantalla, y ha sido mencionado en muchos libros y películas populares.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Curvas de relleno de espacio

> section: space-filling
> sectionStatus: dev

{.todo} ¡Próximamente!

