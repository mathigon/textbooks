# Transformaciones y Simetría

## Introducción

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles

Muchos conceptos geométricos como [líneas](gloss:line) o [polígonos](gloss:polygon) fueron "inventados" por los matemáticos. La simetría, por otro lado, está en todas partes a nuestro alrededor. Casi todas las plantas, animales e incluso nosotros los humanos somos simétricos.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Con el tiempo, hemos imitado la simetría de la naturaleza en arte, arquitectura, tecnología y diseño. Las formas y patrones simétricos simplemente parecen _más hermosos_ que los no simétricos.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Pero la simetría es mucho más importante que simplemente _verse hermosa_ . Se encuentra en los cimientos mismos de nuestro universo, e incluso puede explicar las leyes más fundamentales de la física.

_{button.next-step} Seguir_

---
> id: transformations
> goals: t1 t2 t3

Si bien la simetría es un concepto muy intuitivo, describirlo matemáticamente es más difícil de lo que piensas. Primero, tenemos que aprender sobre las [__transformaciones__](gloss:transformation) , que son formas de convertir una figura geométrica en otra. Aquí están algunos ejemplos:

::: column.r(width=200 parent="padded-thin")

    .animation
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

El resultado de una transformación se llama [__imagen__](gloss:transformation-image) . A menudo denotamos la imagen de una figura. `A` como `A'` , pronunciado "A prime". Hay muchos tipos diferentes de transformación, que exploraremos con más detalle a lo largo de este curso.

---

## Transformaciones Rígidas

> id: rigid
> section: rigid

Una [__transformación rígida__](gloss:rigid-transformation) es un tipo especial de transformación que no cambia el tamaño o la forma de una figura. Podríamos imaginar que está hecho de un material sólido como madera o metal: podemos moverlo, girarlo o voltearlo, pero no podemos estirarlo, doblarlo ni deformarlo.

¿Cuál de estas cinco transformaciones son rígidas?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Resulta que solo hay tres tipos diferentes de transformaciones rígidas:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Una transformación que simplemente _mueve_ una forma se llama [__traslación__](gloss:translation) .

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Una transformación que _voltea_ una forma se llama [__reflexión__](gloss:reflection) .

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Una transformación que _hace girar_ una forma se llama [__rotación__](gloss:rotation) .

:::

---
> id: rigid-2

También podemos combinar múltiples tipos de transformación para crear otros más complejos, por ejemplo, una traslación seguida de una rotación.

Pero primero, echemos un vistazo a cada uno de estos tipos de transformaciones con más detalle.

---
> id: translations

### Traducciones

Una [__traslación__](gloss:translation) es una transformación que mueve cada punto de una figura por la misma distancia en la misma dirección.

En el plano de coordenadas, podemos especificar una traslación por cuánto se mueve la forma a lo largo del eje _x_ y el eje _y_ . Por ejemplo, una transformación por (3, 5) mueve una forma por 3 a lo largo del eje _xy_ por 5 a lo largo del eje _y_ .

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Traducido por ( [[5]] , [[1]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Traducido por ( [[-4]] , [[2]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Traducido por ( [[4]] , [[-2]] )

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Ahora es tu turno: traslada las siguientes formas como se muestra:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Traducir por (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Traducir por (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Traducir por (5, –1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Reflexiones

Una [__reflexión__](gloss:reflection) es una transformación que "voltea" o "refleja" una forma a través de una línea. Esta línea se llama __línea de reflexión__ .

Dibuje la línea de reflexión en cada uno de estos ejemplos:

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

Ahora es tu turno: dibuja el reflejo de cada una de estas formas:

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

Tenga en cuenta que si un punto se encuentra en la línea de reflexión, [[no se mueve | gira | voltea]] cuando se refleja: _{span.reveal(when="blank-0")} su imagen es el mismo punto que el original._

---
> id: reflections-3

En todos los ejemplos anteriores, la línea de reflexión era horizontal, vertical o en un ángulo de 45°, lo que facilitaba dibujar los reflejos. Si ese no es el caso, la construcción requiere un poco más de trabajo:

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

{.r} Para reflejar esta forma a través de la [línea de reflexión](target:refl) , tenemos que reflejar cada [vértice](gloss:polygon-vertex) individualmente y luego conectarlos nuevamente. _{button.next-step} Seguir_

{.r.reveal(when="next-0")} Elija uno de los vértices y dibuje la línea a través de este vértice que es perpendicular a la línea de reflexión. _{button.next-step} Seguir_

{.r.reveal(when="next-1")} Ahora podemos medir la [distancia](target:d1) desde el vértice hasta la línea de la reflexión, y hacer que el punto que tiene la [misma distancia](target:d2) en el otro lado. _{span.lgrey} (Podemos usar una regla o una [brújula](target:circ) para hacer esto)._ _{button.next-step} Seguir_

{.r.reveal(when="next-2")} Podemos hacer lo mismo para todos los otros vértices de nuestra forma. _{button.next-step} Seguir_

{.r.reveal(when="next-3")} Ahora solo tenemos que conectar los vértices reflejados en el orden correcto, ¡y hemos encontrado el reflejo!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotaciones

Una [__rotación__](gloss:rotation) es una transformación que "gira" una forma en cierto ángulo alrededor de un punto fijo. Ese punto se llama [__centro de rotación__](gloss:center-of-rotation) . Las rotaciones pueden ser en sentido horario o antihorario.

Intenta rotar las siguientes formas alrededor del centro de rotación rojo:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Gire 90° en sentido horario.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Rotar 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Gire 90° en sentido antihorario.

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

Es más difícil dibujar rotaciones que no sean exactamente 90° o 180°. Intentemos rotar esta forma por ${10*ang}{ang|6|-18,18,1}° alrededor del [centro de rotación](target:rot) .

{.r} Al igual que para los reflejos, tenemos que rotar cada punto de una forma individualmente. _{button.next-step} Seguir_

{.r.reveal(when="next-0")} Comenzamos eligiendo uno de los vértices y dibujando una línea al centro de rotación. _{button.next-step} Seguir_

{.r.reveal(when="next-1")} Usando un [transportador](target:protractor) , podemos medir un [ángulo de ${ang*10}°](target:angle) alrededor del centro de rotación. Dibujemos una [segunda línea](target:l2) en ese ángulo. _{button.next-step} Seguir_

{.r.reveal(when="next-2")} Usando una [brújula](target:compass) o regla, podemos encontrar un [punto](target:a1) en esta línea que tenga la misma distancia desde el centro de rotación que el punto original. _{button.next-step} Seguir_

{.r.reveal(when="next-3")} Ahora tenemos que repetir estos pasos para todos los demás vértices de nuestra forma. _{button.next-step} Seguir_

{.reveal(when="next-4")} Y finalmente, como antes, podemos conectar los vértices individuales para obtener la imagen girada de nuestra forma original.

:::

---
> id: composition-1

Las transformaciones son un concepto importante en muchas partes de las matemáticas, no solo en la geometría. Por ejemplo, puede transformar [_funciones_](gloss:function) cambiando o girando sus [gráficos](gloss:function-graph) . También puede usar transformaciones para determinar si dos formas son [congruentes](gloss:congruent) .

---

## Congruencia

> section: congruence
> sectionStatus: dev

QUE HACER

---

### Composición de transformaciones

Por supuesto, podemos combinar múltiples traslaciones, reflexiones y rotaciones para crear transformaciones más complejas.

{.todo} TODO Ejemplo

Sin embargo, resulta que no importa cuántas transformaciones diferentes combine: ¡siempre puede encontrar otra transformación que haga lo mismo de una vez!

{.todo} Calculadora de composición de transformación TODO

Combinar dos reflexiones es particularmente interesante. Hay dos casos diferentes que debemos considerar:

::: column.grow

Si las dos líneas de reflexión son paralelas, el resultado es una sola traslación. La dirección de la traslación es perpendicular a las líneas de reflexión, y la distancia es el doble de la distancia entre las líneas de reflexión.

{.todo} TODO Animación

::: column.grow

Si las dos líneas de reflexión se cruzan, el resultado es una sola rotación. El centro de rotación es la intersección entre las líneas de reflexión, y el ángulo es el doble del ángulo entre las líneas de reflexión.

{.todo} TODO Animación

:::

---

## Simetría

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__La simetría__](gloss:symmetry) está en todas partes a nuestro alrededor, y un concepto intuitivo: las diferentes partes de un objeto se ven _iguales_ de alguna manera. Pero usando transformaciones, podemos dar una definición matemática mucho más precisa de lo que _realmente_ significa la simetría:

{.definition} Un objeto es _simétrico_ si se ve igual, incluso después de aplicar una cierta transformación.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Podemos reflejar esta mariposa, y se ve igual después. Decimos que tiene __simetría reflexiva__ .

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Podemos rotar esta flor, y se ve igual después. Decimos que tiene __simetría rotacional__ .

:::

---
> id: reflectional-symmetry

### Simetría reflexiva

Una forma tiene [__simetría de reflexión__](gloss:reflectional-symmetry) si se ve igual después de reflejarse. La línea de reflexión se llama [__eje de simetría__](gloss:axis-of-symmetry) , y divide la forma en dos [[congruentes. | igual |]] mitades [[similares]] . Algunas figuras también pueden tener más de un eje de simetría.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Dibuja todos los ejes de simetría en estas seis imágenes y formas:

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

{.caption} Esta forma tiene [[2]] ejes de simetría.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Un cuadrado tiene [[4]] ejes de simetría.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Esta forma tiene [[2]] ejes de simetría.

:::

---
> id: alphabet

Muchas letras del alfabeto tienen simetría reflexiva. Seleccione todos los que hacen:

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

Aquí hay algunas formas más. Complételos para que tengan simetría reflexiva:

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

Las formas, las letras y las imágenes pueden tener simetría de reflexión, ¡pero también pueden tener números enteros, palabras y oraciones!

Por ejemplo, "25352" y "ANNA" ambos leen lo mismo de atrás hacia adelante. Los números o palabras como esta se llaman [__Palíndromos__](gloss:palindrome) . ¿Se te ocurren otros palíndromos?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Si ignoramos los espacios y la puntuación, las oraciones cortas a continuación también tienen simetría de reflexión. ¿Se te ocurre el tuyo?

{.text-center} Nunca par o impar.
Una [[nuez]] para una jarra de atún.
Yo, [[chico]] banana!

{.reveal(when="blank-0 blank-1")} Pero los Palindromes no son solo divertidos, sino que tienen una importancia práctica. Hace unos años, los científicos descubrieron que partes de nuestro [ADN](gloss:dna) son palindrómicas. Esto los hace más resistentes a las mutaciones o daños, porque hay una segunda copia de respaldo de cada pieza.

---
> id: rotational-symmetry

### Simetría rotacional

::: column.grow

Una forma tiene [__simetría rotacional__](gloss:rotational-symmetry) si se ve igual después de ser rotada (en menos de 360°). El [centro de rotación](gloss:center-of-rotation) suele ser solo el centro de la forma.

El [__orden de simetría__](gloss:order-of-symmetry) es el número de orientaciones distintas en las que la forma se ve igual. También puede pensarlo como la _cantidad de veces que podemos rotar la forma_ , antes de volver al inicio. Por ejemplo, este copo de nieve tiene el orden [[6]] .

{.reveal(when="blank-0")} El ángulo de cada rotación es `"360°"/"order"` . En el copo de nieve, esto es `"360°"/6 = input(60)°` .

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Encuentre el orden y el ángulo de rotación, para cada una de estas formas:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Orden [[4]] , ángulo [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Orden [[2]] , ángulo [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Orden [[8]] , ángulo [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Ahora complete estas formas, para que tengan simetría rotacional:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Orden 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Orden 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Orden 4

:::

---

## Grupos de simetría y fondos de pantalla

> id: groups
> section: symmetry-groups

 Algunas formas tienen más de una simetría: echemos un vistazo al [cuadrado](gloss:square) como un ejemplo simple.

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

Ya has mostrado anteriormente que un cuadrado tiene [[4]] ejes de reflexión.

{.reveal(when="blank-0")} También tiene simetría rotacional en [[90]]°, [[180]]° y [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Y finalmente, podemos pensar en "no hacer nada" como otro tipo especial de simetría, porque el resultado es (obviamente) el mismo que antes. Esto a veces se llama __identidad__ .

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} En total, hemos encontrado [[8]] diferentes "simetrías del cuadrado".

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Ahora podemos comenzar a hacer algo de aritmética con estas simetrías. Por ejemplo, podemos _agregar_ dos simetrías para obtener otras nuevas:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

Cada vez que agrega dos simetrías de un cuadrado, obtiene una nueva. Aquí hay una "calculadora de simetría" donde puede probarla usted mismo:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button(tabindex=0) + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Pasa un tiempo jugando con la calculadora de simetría e intenta encontrar cualquier patrón. ¿Puedes completar estas observaciones?

* Agregar dos rotaciones siempre dará [[una rotación | una reflexión]] (o la identidad). * Agregar dos reflexiones siempre dará [[una rotación | una reflexión]] (o la identidad). * Agregar las mismas dos simetrías en el orden opuesto a [[veces da una diferencia | siempre da un diferente | siempre da el mismo]] resultado. * Agregar la identidad [[no hace nada | devuelve un reflejo | devuelve lo contrario]] .

---
> id: group-axioms

Es posible que ya te hayas dado cuenta de que agregar __{.orange} simetrías__ es en realidad muy similar a agregar __{.green} enteros__ :

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

En matemáticas, cualquier colección que tenga estas propiedades se llama [__grupo__](gloss:group) . Algunos grupos (como el __{.orange} simetrías__ de un cuadrado) solo tienen un número finito de elementos. Otros (como el __{.green} enteros__ ) son infinitos.

En este ejemplo, comenzamos con las ocho simetrías del cuadrado. De hecho, cada forma geométrica tiene su propio __grupo de simetría__ . Todos tienen elementos diferentes, pero siempre satisfacen las tres reglas anteriores.

Los grupos aparecen en todas partes en matemáticas. Los elementos pueden ser números o simetrías, pero también polinomios, permutaciones, matrices, funciones ... _cualquier cosa_ que obedezca las tres reglas. La idea clave de la _teoría_ de _grupos_ es que no estamos interesados en los elementos individuales, solo en _cómo interactúan entre sí_ .

::: column.grow

Por ejemplo, los grupos de simetría de diferentes moléculas pueden ayudar a los científicos a predecir y explicar las propiedades de los materiales correspondientes.

Los grupos también se pueden utilizar para analizar la estrategia ganadora en los juegos de mesa, el comportamiento de los virus en la medicina, las diferentes armonías en la música y muchos otros conceptos ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Las propiedades de la molécula CCl <sub>4</sub> (izquierda) y el adenovirus (derecha) están determinadas por sus simetrías.

:::

---

### Grupos de papel tapiz

> id: wallpaper-groups

En las [secciones anteriores](/course/transformations/symmetry) vimos dos tipos diferentes de simetría correspondientes a dos transformaciones diferentes: rotaciones y reflexiones. Pero también hay una simetría para el tercer tipo de transformación rígida: las [[traslaciones | giros | volteos]]

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__La simetría traslacional__](gloss:translational-symmetry) no funciona para objetos aislados como flores o mariposas, pero sí para patrones regulares que se extienden en todas las direcciones:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Honyecomb hexagonal

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Revestimiento cerámico

:::

---
> id: footsteps

Además de la simetría de reflexión, rotación y traslación, incluso hay un cuarto tipo: [__reflexiones de deslizamiento__](gloss:glide-reflection) . Esta es una combinación de una reflexión y una traslación en la misma dirección que el eje de reflexión.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Un patrón puede tener más de un tipo de simetría. Y al igual que para los cuadrados, podemos encontrar el [grupo](gloss:symmetry-group) de [simetría](gloss:symmetry-group) de un patrón, que contiene todas sus diferentes simetrías.

Estos grupos no le dicen mucho sobre cómo se _ve_ el patrón (por ejemplo, sus colores y formas), sino cómo se _repite_ . Múltiples patrones diferentes pueden tener el mismo grupo de simetría, siempre que se organicen y repitan de la misma manera.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Estos dos patrones tienen las mismas simetrías, a pesar de que se ven muy diferentes. Pero las simetrías no se tratan de colores o formas superficiales.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Estos dos patrones también tienen las mismas simetrías, a pesar de que se parecen más a los patrones correspondientes a la izquierda que a los demás.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Resulta que, si bien hay infinitos patrones posibles, todos tienen uno de solo 17 grupos de simetría diferentes. Estos se llaman los __grupos de fondo de pantalla__ . Cada grupo de fondos de pantalla se define por una combinación de traslaciones, rotaciones, reflejos y reflejos de deslizamiento. ¿Puedes ver los [centros de rotación](gloss:center-of-rotation) y los [ejes de reflexión](gloss:axis-of-symmetry) en estos ejemplos?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Group 1 – P1</strong>
Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Group 2 – P2</strong>
Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Group 3 – P3</strong>
Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Group 4 – P4</strong>
Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Group 5 – P6</strong>
Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Group 6 – PM</strong>
Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Group 7 – PMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Group 8 – P4M</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Group 9 – P6M</strong>
Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Group 10 – P3M1</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Group 11 – P31M</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Group 12 – P4G</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Group 13 – CMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Group 14 – PMG</strong>
Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Group 15 – PG</strong>
Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Group 16 – CM</strong>
Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Group 17 – PGG</strong>
Perpendicular glide reflections, rotations of order 2, translations

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

Desafortunadamente, no hay una razón simple por la cual hay _17_ de estos grupos, y demostrarlo requiere matemáticas más avanzadas. En su lugar, puede intentar dibujar sus propios patrones repetidos para cada uno de los 17 grupos de fondos de pantalla:


    figure: x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

Los grupos de papel tapiz tenían que ver con patrones planos y bidimensionales. Podemos hacer algo similar para los patrones tridimensionales: estos se llaman grupos cristalográficos, ¡y hay 219 de ellos!

Además de las traslaciones, reflexiones, rotaciones y reflejos de deslizamiento, estos grupos incluyen simetrías como __planos de deslizamiento__ y __ejes de tornillo__ (piense en el movimiento al desenroscar una botella).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} El nitruro de boro tiene sus moléculas dispuestas en esta red cristalina, que tiene un grupo de simetría tridimensional.

:::

---

## Simetría en física

> id: planets
> sectionBackground: dark stars
> section: physics

Hasta ahora, todas las simetrías que observamos eran _visuales_ en cierto sentido: formas, imágenes o patrones visibles. De hecho, la simetría puede ser un concepto mucho más amplio: _inmunidad al cambio_ .

Por ejemplo, si le gusta el jugo de manzana tanto como le gusta el jugo de naranja, entonces su preferencia es "simétrica" bajo la transformación que intercambia manzanas y naranjas.

En 1915, el matemático alemán [Emmy Noether](bio:noether) observó que algo similar es cierto para las [leyes de la naturaleza](gloss:laws-of-nature) .

::: column.grow

Por ejemplo, nuestra experiencia nos dice que las leyes de la física son las mismas en todo el universo. No importa si realiza un experimento en Londres, en Nueva York o en Marte, las leyes de la física siempre deben ser las mismas. En cierto modo, tienen [[simetría traslacional | simetría reflexiva]]

{.reveal(when="blank-0")} Del mismo modo, no debería importar si llevamos a cabo un experimento mientras miramos al norte, al sur, al este o al oeste: las leyes de la naturaleza tienen [[simetría rotacional | desliza la simetría de reflexión]] .

{.reveal(when="blank-1")} Y finalmente, no debería importar si llevamos a cabo un experimento hoy, mañana o dentro de un año. Las leyes de la naturaleza son "simétricas en el tiempo".

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Estas "simetrías" pueden parecer inicialmente sin sentido, pero en realidad nos pueden decir mucho sobre nuestro universo. Emmy Noether logró demostrar que cada simetría corresponde a una cierta cantidad física que se _conserva_ .

Por ejemplo, la simetría del tiempo implica que la __energía__ debe conservarse en nuestro universo: puede convertir la energía de un tipo a otro (por ejemplo, luz a electricidad), pero nunca puede crear o destruir energía. La cantidad total de energía en el universo siempre se mantendrá constante.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Resulta que, solo conociendo la simetría, los físicos pueden derivar la mayoría de las leyes de la naturaleza que gobiernan nuestro universo, sin tener que hacer ningún experimento u observación.

La simetría puede incluso predecir la existencia de partículas fundamentales. Un ejemplo es el famoso __Bosón de Higgs__ : fue predicho en la década de 1960 por físicos teóricos, pero no se observó en el mundo real hasta 2012.

:::

---

## Dilataciones

> id: dilations
> section: dilations

Hasta ahora, acabamos de ver [[rígido | congruente |]] transformaciones [[visuales]] _{span.reveal(when="blank-0")} Ahora pensemos en uno que no lo es: una [__dilatación__](gloss:dilation) cambia el tamaño de una forma haciéndola más grande o más pequeña._

---
> id: dilations-1

::: column.grow

Todas las dilataciones tienen un [__centro__](target:center) y un [__factor de escala__](->.scale-target) . El centro es el punto de referencia para la dilatación y el factor de escala nos dice cuánto se estira o encoge la figura.

Si el [factor de escala](gloss:scale-factor) está entre 0 y 1, la imagen es [[más pequeña | Más grande]] que el original. Si el factor de escala es mayor que 1, la imagen es [[más grande | Más pequeño]] que el original.

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
      path.light.thin(x="segment(C,s<1?c:c1)")

{.text-center.scale-target} Factor de escala: ${s}{s|2|0,3,0.1}

:::

{.todo} PRÓXIMAMENTE - Más sobre dilataciones

---

## Semejanza

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
