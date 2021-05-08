# Transformações e simetria

## Introdução

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles

Muitos conceitos geométricos, como [linhas](gloss:line) ou [polígonos,](gloss:polygon) foram "inventados" por matemáticos. A simetria, por outro lado, está por toda parte. Quase todas as plantas, animais e até nós humanos somos simétricos.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Com o tempo, imitamos a simetria da natureza em arte, arquitetura, tecnologia e design. Formas e padrões simétricos parecem _mais bonitos do_ que não-simétricos.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Mas a simetria é muito mais importante do que simplesmente _parecer bonita_ . Está nos próprios fundamentos do nosso universo e pode até explicar as leis mais fundamentais da física.

_{button.next-step} Continuar_

---
> id: transformations
> goals: t1 t2 t3

Embora a simetria seja um conceito muito intuitivo, descrevê-la matematicamente é mais difícil do que você imagina. Primeiro, temos que aprender sobre [__transformações__](gloss:transformation) , que são maneiras de converter uma figura geométrica em outra. Aqui estão alguns exemplos:

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

O resultado de uma transformação é chamado de [__imagem__](gloss:transformation-image) . Nós frequentemente denotamos a imagem de uma forma `A` Como `A'` , pronunciado "A prime". Existem muitos tipos diferentes de transformação, que exploraremos em mais detalhes ao longo deste curso.

---

## Transformações rígidas

> id: rigid
> section: rigid
> translated: auto

Uma [__transformação rígida__](gloss:rigid-transformation) é um tipo especial de transformação que não altera o tamanho ou a forma de uma figura. Poderíamos imaginar que ele é feito de um material sólido, como madeira ou metal: podemos movê-lo, girá-lo ou virar, mas não podemos esticar, dobrar ou deformar.

Quais dessas cinco transformações são rígidas?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Acontece que existem apenas três tipos diferentes de transformações rígidas:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Uma transformação que simplesmente _move_ uma forma é chamada de [__tradução__](gloss:translation) .

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Uma transformação que _vira_ uma forma é chamada de [__reflexão__](gloss:reflection) .

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Uma transformação que _gira_ uma forma é chamada de [__rotação__](gloss:rotation) .

:::

---
> id: rigid-2

Também podemos combinar vários tipos de transformação para criar outros mais complexos - por exemplo, uma tradução seguida por uma rotação.

Mas primeiro, vamos dar uma olhada em cada um desses tipos de transformações com mais detalhes.

---
> id: translations

### Traduções

Uma [__tradução__](gloss:translation) é uma transformação que move todos os pontos de uma figura pela mesma distância na mesma direção.

No plano de coordenadas, podemos especificar uma tradução pela distância que a forma é movida ao longo do eixo _x_ e eixo _y_ . Por exemplo, uma transformação por (3, 5) move uma forma por 3 ao longo do eixo _x_ e por 5 ao longo do eixo _y_ .

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Traduzido por ( [[5]] , [[1]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Traduzido por ( [[-4]] , [[2]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Traduzido por ( [[4]] , [[-2]] )

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Agora é sua vez - traduza as seguintes formas, como mostrado:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Traduzir por (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Traduzir por (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Traduzir por (5, –1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Reflexões

Um [__reflexo__](gloss:reflection) é uma transformação que "vira" ou "espelha" uma forma através de uma linha. Essa linha é chamada de __linha de reflexão__ .

Desenhe a linha de reflexão em cada um destes exemplos:

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

Agora é sua vez - desenhe o reflexo de cada uma destas formas:

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

Observe que, se um ponto estiver na linha de reflexão, ele [[não se moverá | gira | vira]] quando está refletido: _{span.reveal(when="blank-0")} sua imagem é o mesmo ponto que o original._

---
> id: reflections-3

Em todos os exemplos acima, a linha de reflexão era horizontal, vertical ou em um ângulo de 45° - o que tornava mais fácil desenhar as reflexões. Se não for esse o caso, a construção exige um pouco mais de trabalho:

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

{.r} Para refletir essa forma na [linha de reflexão](target:refl) , precisamos refletir todos os [vértices](gloss:polygon-vertex) individualmente e conectá-los novamente. _{button.next-step} Continuar_

{.r.reveal(when="next-0")} Vamos escolher um dos vértices e desenhar a linha através desse vértice que é perpendicular à linha de reflexão. _{button.next-step} Continuar_

{.r.reveal(when="next-1")} Agora podemos medir a [distância](target:d1) do vértice à linha da reflexão e definir o ponto que tem a [mesma distância](target:d2) do outro lado. _{span.lgrey} (Podemos usar uma régua ou uma [bússola](target:circ) para fazer isso.)_ _{button.next-step} Continuar_

{.r.reveal(when="next-2")} Podemos fazer o mesmo para todos os outros vértices de nossa forma. _{button.next-step} Continuar_

{.r.reveal(when="next-3")} Agora só precisamos conectar os vértices refletidos na ordem correta e encontramos a reflexão!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotações

Uma [__rotação__](gloss:rotation) é uma transformação que "transforma" uma forma em um determinado ângulo em torno de um ponto fixo. Esse ponto é chamado de [__centro de rotação__](gloss:center-of-rotation) . As rotações podem ser no sentido horário ou anti-horário.

Tente girar as formas abaixo em torno do centro de rotação vermelho:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Gire 90° no sentido horário.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Gire 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Gire 90° no sentido anti-horário.

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

É mais difícil desenhar rotações que não sejam exatamente 90° ou 180°. Vamos tentar girar essa forma ${10*ang}{ang|6|-18,18,1}° em torno do [centro de rotação](target:rot) .

{.r} Como nas reflexões, temos que girar cada ponto de uma forma individualmente. _{button.next-step} Continuar_

{.r.reveal(when="next-0")} Começamos escolhendo um dos vértices e desenhando uma linha para o centro de rotação. _{button.next-step} Continuar_

{.r.reveal(when="next-1")} Usando um [transferidor](target:protractor) , podemos medir um [ângulo de ${ang*10}° em](target:angle) torno do centro de rotação. Vamos desenhar uma [segunda linha](target:l2) nesse ângulo. _{button.next-step} Continuar_

{.r.reveal(when="next-2")} Usando uma [bússola](target:compass) ou régua, podemos encontrar um [ponto](target:a1) nessa linha que tem a mesma distância do centro de rotação que o ponto original. _{button.next-step} Continuar_

{.r.reveal(when="next-3")} Agora temos que repetir essas etapas para todos os outros vértices de nossa forma. _{button.next-step} Continuar_

{.reveal(when="next-4")} E, finalmente, como antes, podemos conectar os vértices individuais para obter a imagem girada de nossa forma original.

:::

---
> id: composition-1

As transformações são um conceito importante em muitas partes da matemática, não apenas na geometria. Por exemplo, você pode transformar [_funções_](gloss:function) deslocando ou girando seus [gráficos](gloss:function-graph) . Você também pode usar transformações para determinar se duas formas são [congruentes](gloss:congruent) .

---

## Congruência

> section: congruence
> sectionStatus: dev
> translated: auto

FAÇAM

---

## Simetria

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__A simetria__](gloss:symmetry) está por toda parte e um conceito intuitivo: diferentes partes de um objeto têm _a mesma_ aparência de alguma maneira. Mas, usando transformações, podemos dar uma definição matemática muito mais precisa do que _realmente_ significa simetria:

{.definition} Um objeto é _simétrico_ se tiver a mesma aparência, mesmo após aplicar uma certa transformação.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Podemos refletir essa borboleta, e ela parece a mesma depois. Dizemos que tem __simetria reflexiva__ .

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Podemos girar esta flor, e ela parece a mesma depois. Dizemos que tem __simetria rotacional__ .

:::

---
> id: reflectional-symmetry

### Simetria reflexiva

Uma forma tem [__simetria reflexiva__](gloss:reflectional-symmetry) se parecer igual após ser refletida. A linha de reflexão é chamada de [__eixo de simetria__](gloss:axis-of-symmetry) e divide a forma em duas [[congruentes | igual |]] metades [[semelhantes]] . Algumas figuras também podem ter mais de um eixo de simetria.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Desenhe todos os eixos de simetria nestas seis imagens e formas:

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

{.caption} Esta forma tem [[2]] eixos de simetria.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Um quadrado tem [[4]] eixos de simetria.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Esta forma tem [[2]] eixos de simetria.

:::

---
> id: alphabet

Muitas letras do alfabeto têm simetria reflexiva. Selecione todos os que fazem:

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

Aqui estão mais algumas formas. Complete-os para que tenham simetria reflexiva:

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

Formas, letras e imagens podem ter simetria reflexiva, mas também números inteiros, palavras e frases!

Por exemplo, "25352" e "ANNA" lêem o mesmo de trás para frente. Números ou palavras como essa são chamados [__palíndromos__](gloss:palindrome) . Você consegue pensar em outros palíndromos?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Se ignorarmos espaços e pontuação, as frases curtas abaixo também terão simetria reflexiva. Você pode criar sua própria?

{.text-center} Nunca estranho ou par.
Uma [[noz]] para um pote de atum.
Ei, [[garoto]] banana!

{.reveal(when="blank-0 blank-1")} Mas os Palíndromos não são apenas divertidos, eles realmente têm importância prática. Alguns anos atrás, os cientistas descobriram que partes do nosso [DNA](gloss:dna) são palindrômicas. Isso os torna mais resilientes a mutações ou danos - porque há uma segunda cópia de backup de cada peça.

---
> id: rotational-symmetry

### Simetria rotacional

::: column.grow

Uma forma tem [__simetria rotacional__](gloss:rotational-symmetry) se tiver a mesma aparência depois de ser girada (menos de 360°). O [centro de rotação](gloss:center-of-rotation) geralmente é apenas o meio da forma.

A [__ordem de simetria__](gloss:order-of-symmetry) é o número de orientações distintas nas quais a forma tem a mesma aparência. Você também pode pensar nisso como o _número de vezes que podemos rotacionar a forma_ , antes de voltarmos ao início. Por exemplo, este floco de neve tem o pedido [[6]] .

{.reveal(when="blank-0")} O ângulo de cada rotação é `"360°"/"order"` . No floco de neve, isso é `"360°"/6 = input(60)°` .

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Encontre a ordem e o ângulo de rotação, para cada uma destas formas:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Ordem [[4]] , ângulo de [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Ordem [[2]] , ângulo [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Ordem [[8]] , ângulo de [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Agora complete estas formas, para que tenham simetria rotacional:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Ordem 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Ordem 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Ordem 4

:::

---

## Grupos de Simetria e Papéis de Parede

> id: groups
> section: symmetry-groups
> translated: auto

 Algumas formas têm mais de uma simetria - vamos dar uma olhada no [quadrado](gloss:square) como um exemplo simples.

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

Você já mostrou acima que um quadrado tem [[4]] eixos de reflexão.

{.reveal(when="blank-0")} Também possui simetria rotacional em [[90]]°, [[180]]° e [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} E, finalmente, podemos pensar em "não fazer nada" como outro tipo especial de simetria - porque o resultado é (obviamente) o mesmo de antes. Isso às vezes é chamado de __identidade__ .

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} No total, foram encontradas [[8]] “simetrias do quadrado” diferentes.

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Agora podemos começar a fazer aritmética com essas simetrias. Por exemplo, podemos _adicionar_ duas simetrias para obter novas:

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

Sempre que você adiciona duas simetrias de um quadrado, obtém uma nova. Aqui está uma "calculadora de simetria", na qual você pode tentar:

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

Passe algum tempo brincando com a calculadora de simetria e tente encontrar padrões. Você pode completar essas observações?

* Adicionar duas rotações sempre dará [[uma rotação | uma reflexão]] (ou a identidade). * Adicionar duas reflexões sempre dará [[uma rotação | uma reflexão]] (ou a identidade). * A adição das mesmas duas simetrias na ordem oposta [[às vezes gera uma diferença | sempre dá uma diferente | sempre dá o mesmo]] resultado. * Adicionar a identidade [[não faz nada | retorna uma reflexão | retorna o oposto]] .

---
> id: group-axioms

Você já deve ter percebido que adicionar __{.orange} simetrias__ é realmente muito semelhante à adição __{.green} inteiros__ :

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

Em matemática, qualquer coleção que possua essas propriedades é chamada de [__grupo__](gloss:group) . Alguns grupos (como o __{.orange} simetrias__ de um quadrado) possuem apenas um número finito de elementos. Outros (como o __{.green} inteiros__ ) são infinitos.

Neste exemplo, começamos com as oito simetrias do quadrado. De fato, toda forma geométrica tem seu próprio __grupo de simetria__ . Todos eles têm elementos diferentes, mas sempre satisfazem as três regras acima.

Grupos aparecem em todos os lugares na matemática. Os elementos podem ser números ou simetrias, mas também polinômios, permutações, matrizes, funções ... _qualquer coisa_ que obedeça às três regras. A idéia principal da _teoria_ dos _grupos_ é que não estamos interessados nos elementos individuais, apenas em _como eles interagem_ .

::: column.grow

Por exemplo, os grupos de simetria de diferentes moléculas podem ajudar os cientistas a prever e explicar as propriedades dos materiais correspondentes.

Os grupos também podem ser usados para analisar a estratégia vencedora em jogos de tabuleiro, o comportamento dos vírus na medicina, diferentes harmonias na música e muitos outros conceitos ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} As propriedades da molécula CCl <sub>4</sub> (esquerda) e do adenovírus (direita) são determinadas por suas simetrias.

:::

---

### Grupos de papel de parede

> id: wallpaper-groups

Nas [seções anteriores](/course/transformations/symmetry) , vimos dois tipos diferentes de simetria, correspondentes a duas transformações diferentes: rotações e reflexões. Mas há também uma simetria para o terceiro tipo de transformação rígida: [[traduções | rotaciona | vira]] .

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__A simetria translacional__](gloss:translational-symmetry) não funciona para objetos isolados, como flores ou borboletas, mas para padrões regulares que se estendem em todas as direções:

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

{.caption} Revestimento de parede em cerâmica

:::

---
> id: footsteps

Além da simetria reflexiva, rotacional e translacional, existe ainda um quarto tipo: [__reflexões planas__](gloss:glide-reflection) . Esta é uma combinação de uma reflexão e uma tradução na mesma direção que o eixo de reflexão.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Um padrão pode ter mais de um tipo de simetria. E, assim como nos quadrados, podemos encontrar o [grupo](gloss:symmetry-group) de [simetria](gloss:symmetry-group) de um padrão, que contém todas as suas diferentes simetrias.

Esses grupos não informam muito sobre a _aparência_ do padrão (por exemplo, suas cores e formas), exatamente como é _repetido_ . Vários padrões diferentes podem ter o mesmo grupo de simetria - desde que sejam organizados e repetidos da mesma maneira.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Esses dois padrões têm as mesmas simetrias, embora pareçam muito diferentes. Mas simetrias não são sobre cores ou formas superficiais.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Esses dois padrões também têm as mesmas simetrias - embora pareçam mais semelhantes aos padrões correspondentes à esquerda do que um ao outro.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Acontece que, embora existam infinitos padrões possíveis, todos eles têm um de apenas 17 grupos de simetria diferentes. Estes são chamados de __Grupos de Papéis de Parede__ . Cada grupo de papel de parede é definido por uma combinação de translações, rotações, reflexões e reflexões planas. Você pode ver os [centros de rotação](gloss:center-of-rotation) e os [eixos de reflexão](gloss:axis-of-symmetry) nesses exemplos?

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

Infelizmente, não há uma razão simples para haver _17_ desses grupos, e provar que isso requer matemática mais avançada. Em vez disso, você pode tentar desenhar seus próprios padrões repetidos para cada um dos 17 grupos de papéis de parede:


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

Os grupos de papéis de parede eram sobre padrões planos e bidimensionais. Podemos fazer algo semelhante para padrões tridimensionais: eles são chamados de grupos cristalográficos e existem 219 deles!

Além de translações, reflexões, rotações e reflexões de deslizamento, esses grupos incluem simetrias como __planos de deslizamento__ e __eixos de parafuso__ (pense no movimento ao desaparafusar uma garrafa).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} O nitreto de boro tem suas moléculas dispostas nessa estrutura cristalina, que possui um grupo de simetria tridimensional.

:::

---

## Simetria em Física

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Até agora, todas as simetrias que examinamos eram _visuais_ em certo sentido: formas, imagens ou padrões visíveis. De fato, a simetria pode ser um conceito muito mais amplo: _imunidade à mudança_ .

Por exemplo, se você gosta de suco de maçã tanto quanto de suco de laranja, sua preferência é "simétrica" sob a transformação que troca maçãs e laranjas.

Em 1915, o matemático alemão [Emmy Noether](bio:noether) observou que algo semelhante é verdadeiro para as [leis da natureza](gloss:laws-of-nature) .

::: column.grow

Por exemplo, nossa experiência nos diz que as leis da Física são as mesmas em todos os lugares do universo. Não importa se você realiza um experimento em Londres, Nova York ou Marte - as leis da Física devem sempre ser as mesmas. De certa forma, eles têm [[simetria traducional | simetria reflexiva]] .

{.reveal(when="blank-0")} Da mesma forma, não importa se realizamos um experimento diante do norte, sul ou leste ou oeste: as leis da natureza têm [[simetria rotacional | simetria de reflexão de deslizamento]] .

{.reveal(when="blank-1")} E, finalmente, não importa se realizamos um experimento hoje, amanhã ou em um ano. As leis da natureza são "simétricas no tempo".

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Essas "simetrias" podem inicialmente parecer bastante sem sentido, mas podem realmente nos dizer muito sobre o nosso universo. Emmy Noether conseguiu provar que toda simetria corresponde a uma certa quantidade física que é _conservada_ .

Por exemplo, a simetria do tempo implica que a __energia__ deve ser conservada em nosso universo: você pode converter energia de um tipo para outro (por exemplo, luz em eletricidade), mas nunca pode criar ou destruir energia. A quantidade total de energia no universo sempre permanecerá constante.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Acontece que, apenas conhecendo a simetria, os físicos podem derivar a maioria das leis da natureza que governam nosso universo - sem ter que fazer um experimento ou observação.

A simetria pode até prever a existência de partículas fundamentais. Um exemplo é o famoso __Bóson de Higgs__ : foi previsto na década de 1960 por físicos teóricos, mas não foi observado no mundo real até 2012.

:::

---

## Dilatações

> id: dilations
> section: dilations
> translated: auto

Até agora, acabamos de olhar para [[rígida | congruente |]] transformações [[visuais]] . _{span.reveal(when="blank-0")} Agora, vamos pensar em um que não é: uma [__dilatação__](gloss:dilation) altera o tamanho de uma forma, tornando-a maior ou menor._

---
> id: dilations-1

::: column.grow

Todas as dilatações têm um [__centro__](target:center) e um [__fator de escala__](->.scale-target) . O centro é o ponto de referência para o fator de dilatação e escala nos diz o quanto a figura estica ou diminui.

Se o [fator de escala](gloss:scale-factor) estiver entre 0 e 1, a imagem será [[menor | maior]] que o original. Se o fator de escala for maior que 1, a imagem será [[maior | menor]] que o original.

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

{.text-center.scale-target} Fator de escala: ${s}{s|2|0,3,0.1}

:::

{.todo} EM BREVE - Mais sobre dilatações

---

## Similaridade

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
