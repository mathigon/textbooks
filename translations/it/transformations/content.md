# Trasformazioni e simmetria

## Introduzione

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

Molti concetti geometrici, come [linee](gloss:line) e [punti](gloss:point), sono stati "inventati" dai matematici. La simmetria, d'altra parte, è ovunque intorno a noi. Quasi tutte le piante, gli animali e persino noi umani sono simmetrici.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Nel tempo, abbiamo imitato la simmetria della natura in arte, architettura, tecnologia e design. Forme e motivi simmetrici sembrano solo _più belli_ di quelli non simmetrici.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Ma la simmetria è molto più importante del semplice _bello_. Giace alle basi stesse del nostro universo e può persino spiegare le leggi fondamentali della fisica.

_{button.next-step} Continua_

---
> id: transformations
> goals: t1 t2 t3

Mentre la simmetria è un concetto molto intuitivo, descriverla matematicamente è più difficile di quanto si possa pensare. Innanzitutto, dobbiamo conoscere le [__trasformazioni__](gloss:transformation), che sono modi per convertire una figura geometrica in un'altra. Ecco alcuni esempi:

::: column.r(width=200)

    .animation#star
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

Il risultato di una trasformazione è chiamato [__immagine__](gloss:transformation-image). L'immagine di una figura `A` è generalmente indicata con `A'` (pronunciata come "A prime").

Il [primo esempio](->#star) sopra è speciale, perché sposta e ruota solo la stella originale, ma non cambia le sue dimensioni o forme. Le trasformazioni con questa proprietà sono chiamate __trasformazioni rigide__.

---

## Trasformazioni rigide

> id: rigid
> section: rigid
> translated: auto

Una [__trasformazione rigida__](gloss:rigid-transformation) è un tipo speciale di trasformazione che non cambia le dimensioni e la forma della figura originale. Immagina che sia fatto di un materiale solido come il legno o il metallo: possiamo spostarlo, girarlo e capovolgerlo, ma non possiamo allungarlo o deformarlo in altro modo.

Quali di queste trasformazioni sono rigide?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Per trasformazioni rigide, l'immagine è sempre [[congruente con|the same as|opposite to]] l'originale. Esistono tre diversi tipi di trasformazioni rigide:

::: column.grow.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Una trasformazione che semplicemente _sposta_ una forma è chiamata [__traduzione__](gloss:translation).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Una trasformazione che _lancia_ una forma sopra è chiamata [__riflessione__](gloss:reflection).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Una trasformazione che _gira_ una forma è chiamata [__rotazione__](gloss:rotation).

:::

---
> id: rigid-2

Possiamo anche combinare più tipi di trasformazione per crearne di più complessi, ad esempio una traduzione seguita da una rotazione.

Ma prima, diamo un'occhiata a ciascuno di questi tipi di trasformazioni in modo più dettagliato.

---
> id: translations

### Traduzioni

Una [__traduzione__](gloss:translation) è una trasformazione che sposta ogni punto di una figura della stessa distanza nella stessa direzione.

Nel piano delle coordinate, possiamo specificare una traduzione di quanto la forma viene spostata lungo l'asse _x_ e l'asse _y_. Ad esempio, una trasformazione di (3, 5) sposta una forma di 3 lungo l'asse _x_ e di 5 lungo l'asse _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Tradotto da ([[5]], [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Tradotto da ([[-4]], [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Tradotto da ([[4]], [[-2]])

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Ora tocca a te: traduci le seguenti forme come mostrato:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Traduci di (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Traduci di (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Traduci di (5, -1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Riflessioni

Una [__riflessione__](gloss:reflection) è una trasformazione che "lancia" o "rispecchia" una forma attraverso una linea. Questa linea è chiamata __linea di riflessione__.

Disegna la linea di riflessione in ciascuno di questi esempi:

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

Ora tocca a te: disegna il riflesso di ognuna di queste forme:

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

Notare che se un punto si trova sulla linea di riflessione, la sua immagine è [[uguale a|smaller than|opposite to]] il punto originale.

---
> id: reflections-3

In tutti gli esempi sopra, la linea di riflessione era orizzontale, verticale o con un angolo di 45 °, il che rendeva facile disegnare i riflessi. In caso contrario, la costruzione richiede un po 'più di lavoro:

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

{.r} Per riflettere questa forma sulla [linea di riflessione](target:refl), dobbiamo riflettere ogni [vertice](gloss:polygon-vertex) individualmente e quindi ricollegarli. _{button.next-step} Continua_

{.r.reveal(when="next-0")} Scegliamo uno dei vertici e tracciamo la linea attraverso questo vertice perpendicolare alla linea di riflessione. _{button.next-step} Continua_

{.r.reveal(when="next-1")} Ora possiamo misurare la [distanza](target:d1) dal vertice alla linea del riflesso e fare il punto che ha la [stessa distanza](target:d2) sull'altro lato. _{span.lgrey} (Possiamo usare un righello o una [bussola](target:circ) per farlo.)_ _{button.next-step} Continua_

{.r.reveal(when="next-2")} Possiamo fare lo stesso per tutti gli altri vertici della nostra forma. _{button.next-step} Continua_

{.r.reveal(when="next-3")} Ora non ci resta che collegare i vertici riflessi nell'ordine corretto e abbiamo trovato il riflesso!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotazioni

Una [__rotazione__](gloss:rotation) è una trasformazione che "ruota" una forma di un certo angolo attorno ad un punto fisso. Quel punto è chiamato [__centro di rotazione__](gloss:center-of-rotation). Le rotazioni possono essere in senso orario o antiorario.

Prova a ruotare le forme sottostanti attorno al centro di rotazione rosso:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Ruota di 90 ° in senso orario.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Ruota di 180 °.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Ruota di 90 ° in senso antiorario.

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

È più difficile disegnare rotazioni che non sono esattamente 90 ° o 180 °. Proviamo a ruotare questa forma di ${10*ang}{ang|6|-18,18,1} ° attorno al [centro di rotazione](target:rot).

{.r} Come per i riflessi, dobbiamo ruotare ogni punto in una forma singolarmente. _{button.next-step} Continua_

{.r.reveal(when="next-0")} Iniziamo selezionando uno dei vertici e tracciando una linea al centro di rotazione. _{button.next-step} Continua_

{.r.reveal(when="next-1")} Usando un [goniometro](target:protractor), possiamo misurare un angolo di [di ${ang*10} °](target:angle) attorno al centro di rotazione. Disegniamo una [seconda linea](target:l2) con quell'angolo. _{button.next-step} Continua_

{.r.reveal(when="next-2")} Usando una [bussola](target:compass) o un righello, possiamo trovare un [punto](target:a1) su questa linea che ha la stessa distanza dal centro di rotazione del punto originale. _{button.next-step} Continua_

{.r.reveal(when="next-3")} Ora dobbiamo ripetere questi passaggi per tutti gli altri vertici della nostra forma. _{button.next-step} Continua_

{.reveal(when="next-4")} E infine, come prima, possiamo collegare i singoli vertici per ottenere l'immagine ruotata della nostra forma originale.

:::

---
> id: composition-1

Le trasformazioni sono un concetto importante in molte parti della matematica, non solo nella geometria. Ad esempio, puoi trasformare [_funzioni_](gloss:function) spostando o ruotando i loro [grafici](gloss:function-graph). Puoi anche utilizzare le trasformazioni per determinare se due forme sono [congruenti](gloss:congruent).

---

## Congruenza

> section: congruence
> sectionStatus: dev

TODO

---

## Simmetria

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Symmetry__](gloss:symmetry) è ovunque intorno a noi e un concetto intuitivo: parti diverse di un oggetto sembrano _lo stesso_ in qualche modo. Ma usando le trasformazioni, possiamo dare una definizione matematica molto più precisa di ciò che la simmetria _in realtà_ significa:

{.definition} Un oggetto è _simmetrico_ se sembra lo stesso, anche dopo aver applicato una certa trasformazione.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Possiamo riflettere questa farfalla e sembra la stessa dopo. Diciamo che ha __simmetria riflessiva__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Possiamo ruotare questo fiore, che sembra lo stesso in seguito. Diciamo che ha __simmetria rotazionale__.

:::

---
> id: reflectional-symmetry

### Simmetria riflessiva

Una forma ha [__simmetria riflettente__](gloss:rotational-symmetry) se sembra la stessa dopo essere stata riflessa. La linea di riflessione si chiama [__asse di simmetria__](gloss:axis-of-symmetry) e divide la forma in due metà [[congruenti|equal|similar]]. Alcune figure possono anche avere più di un asse di simmetria.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Disegna tutti gli assi di simmetria in queste sei immagini e forme:

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

{.caption} Questa forma ha [[2]] assi di simmetria.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Un quadrato ha [[4]] assi di simmetria.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Questa forma ha [[2]] assi di simmetria.

:::

---
> id: alphabet

Molte lettere dell'alfabeto hanno una simmetria riflessiva. Seleziona tutti quelli che fanno:

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

Ecco alcune altre forme. Completali in modo che abbiano una simmetria riflessiva:

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

Forme, lettere e immagini possono avere una simmetria riflessiva, ma anche numeri interi, parole e frasi!

Ad esempio, "25352" e "ANNA" hanno entrambi letto lo stesso da dietro a davanti. Numeri o parole come questa sono chiamati [__Palindromes__](gloss:palindrome). Riesci a pensare ad altri palindromi?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Se ignoriamo gli spazi e la punteggiatura, anche le brevi frasi sottostanti hanno una simmetria riflessiva. Puoi venire con il tuo?

{.text-center} Mai pari o dispari.
Una [[noce]] per un barattolo di tonno.
Yo, banana [[ragazzo]]!

{.reveal(when="blank-0 blank-1")} Ma i Palindromi non sono solo divertenti, ma in realtà hanno un'importanza pratica. Alcuni anni fa, gli scienziati hanno scoperto che parti del nostro [DNA](gloss:dna) sono palindromiche. Ciò lo rende più resistente alle mutazioni o ai danni, poiché esiste una seconda copia di backup di ogni pezzo.

---
> id: rotational-symmetry

### Simmetria rotazionale

::: column.grow

Una forma ha [__simmetria rotazionale__](gloss:rotational-symmetry) se sembra la stessa dopo essere stata ruotata (di meno di 360 °). Il [centro di rotazione](gloss:center-of-rotation) è in genere proprio al centro della forma. [__L'ordine di simmetria__](gloss:order-of-symmetry) è il numero di orientamenti distinti in cui la forma ha lo stesso aspetto. Puoi anche pensarci come il numero _di volte in cui possiamo ruotare la forma_, prima di tornare all'inizio. Ad esempio, questo fiocco di neve ha un ordine [[6]]. {.reveal(when="blank-0")} L'angolo di ogni rotazione è `"360°"/"order"`. Nel fiocco di neve, questo è `"360°"/6` = [[60]] °.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Trova l'ordine e l'angolo di rotazione, per ognuna di queste forme:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Ordine [[4]], angolo [[90]] °

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Ordine [[2]], angolo [[180]] °

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Ordine [[8]], angolo [[45]] °

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Completa ora queste forme, in modo che abbiano una simmetria rotazionale:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Ordine 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Ordine 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Ordine 4

:::

---

## Gruppi e sfondi di simmetria

> id: groups
> section: symmetry-groups
> translated: auto

Alcune forme hanno più di una simmetria - diamo un'occhiata al [square](gloss:square) come semplice esempio.

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

Hai già mostrato sopra che un quadrato ha [[4]] assi di riflessione.

{.reveal(when="blank-0")} Ha anche una simmetria rotazionale di [[90]] °, [[180]] ° e [[270]] °.

{.reveal(when="blank-1 blank-2 blank-3")} E infine, possiamo pensare di "non fare nulla" come un altro tipo speciale di simmetria, perché il risultato è (ovviamente) lo stesso di prima. Questa è talvolta chiamata __identità__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} In totale, abbiamo trovato [[8]] diverse "simmetrie del quadrato".

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Ora possiamo davvero iniziare a fare un po 'di aritmetica con queste simmetrie. Ad esempio, possiamo _aggiungere_ due simmetrie per ottenerne di nuove:

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

Ogni volta che aggiungi due simmetrie di un quadrato, tu prendine uno nuovo. Ecco un "calcolatore di simmetria" in cui puoi provarlo tu stesso:

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

Passa un po 'di tempo a giocare con il calcolatore di simmetria e prova a trovare eventuali schemi. Puoi completare queste osservazioni?

* L'aggiunta di due rotazioni darà sempre a [[una rotazione|a reflection]] (o identità).
* L'aggiunta di due riflessioni darà sempre a [[una rotazione|a reflection]] (o identità).
* L'aggiunta delle stesse due simmetrie nell'ordine opposto [[a volte dà un risultato|always gives a different|always gives the same]] diverso.
* L'aggiunta dell'identità [[non fa nulla|returns a reflection|returns the opposite]].

---
> id: group-axioms

Potresti aver già capito che l'aggiunta di __{.orange} simmetrie__ è in realtà molto simile all'aggiunta di __{.green} numeri interi__:

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

In matematica, qualsiasi raccolta che abbia queste proprietà è chiamata [__gruppo__](gloss:group). Alcuni gruppi (come le __{.orange} simmetrie__ di un quadrato) hanno solo un numero finito di elementi. Altri (come i __{.green} interi__) sono infiniti. In questo esempio, abbiamo iniziato con le otto simmetrie del quadrato. In effetti, ogni forma geometrica ha il suo __gruppo di simmetria__. Hanno tutti elementi diversi, ma soddisfano sempre le tre regole sopra. I gruppi compaiono ovunque in matematica. Gli elementi possono essere numeri o simmetrie, ma anche polinomi, permutazioni, matrici, funzioni ... _qualsiasi cosa_ che obbedisce alle tre regole. L'idea chiave della _teoria dei gruppi_ è che non siamo interessati ai singoli elementi, ma solo al _come interagiscono tra loro_.

::: column.grow

Ad esempio, i gruppi di simmetria di molecole diverse possono aiutare gli scienziati a prevedere e spiegare le proprietà dei materiali corrispondenti. I gruppi possono anche essere utilizzati per analizzare la strategia vincente nei giochi da tavolo, il comportamento dei virus in medicina, diverse armonie nella musica e molti altri concetti ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Le proprietà della molecola CCl <sub>4</sub> (a sinistra) e l'Adenovirus (a destra) sono determinati dalle loro simmetrie.

:::

---
> id: wallpaper-groups

### Gruppi di sfondi

Nelle [sezioni precedenti](/course/transformations/symmetry) abbiamo visto due diversi tipi di simmetria corrispondenti a due diverse trasformazioni: rotazioni e riflessioni. Ma esiste anche una simmetria per il terzo tipo di trasformazione rigida: [[traduzioni|spins|flips]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Simmetria traslazionale__](gloss:translational-symmetry) non funziona per oggetti isolati come fiori o farfalle, ma per schemi regolari che si estendono in ogni direzione:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Honyecomb esagonale

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Piastrelle per pareti in ceramica

:::

---
> id: footsteps

Oltre alla simmetria riflessiva, rotazionale e traslazionale, esiste anche un quarto tipo: [__glide reflection__](gloss:glide-reflection). Questa è una combinazione di una riflessione e una traduzione nella stessa direzione dell'asse di riflessione.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Un modello può avere più di un tipo di simmetria. E proprio come per i quadrati, possiamo trovare il [gruppo di simmetria](gloss:symmetry-group) di un modello, che contiene tutte le sue diverse simmetrie.

Questi gruppi non ti dicono molto su come appare il _modello_ (ad esempio i suoi colori e forme), come è _ripetuto_. Più modelli diversi possono avere lo stesso gruppo di simmetria, purché siano disposti e ripetuti allo stesso modo.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Questi due motivi hanno le stesse simmetrie, anche se sembrano molto diversi. Ma le simmetrie non riguardano i colori o le forme superficiali.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Questi due motivi hanno anche le stesse simmetrie - anche se sembrano più simili ai modelli corrispondenti a sinistra, che tra loro.

:::

---
> id: wallpaper-groups-3

Si scopre che, mentre ci sono infiniti schemi possibili, tutti hanno uno dei soli 17 diversi gruppi di simmetria. Questi sono chiamati __gruppi di sfondi__. Ogni gruppo di sfondi è definito da una combinazione di traduzioni, rotazioni, riflessi e riflessi di planata. Riesci a vedere i [centri di rotazione](gloss:center-of-rotation) e gli [assi di riflessione](gloss:axis-of-symmetry) in questi esempi?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Type P1</strong><br>Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Type P2</strong><br>Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Type P3</strong><br>Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Type P4</strong><br>Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Type P6</strong><br>Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Type PM</strong><br>Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Type PMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Type P4M</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Type P6M</strong><br>Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Type P3M1</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Type P31M</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Type P4G</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Type CMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Type PMG</strong><br>Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Type PG</strong><br>Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Type CM</strong><br>Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Type PGG</strong><br>Perpendicular glide reflections, rotations of order 2, translations

Sfortunatamente non esiste un semplice motivo per cui ci sono _17_ di questi gruppi. Dimostrarlo richiede matematica molto più avanzata ...

Invece, puoi provare a disegnare i tuoi motivi ripetuti per ciascuno dei 17 gruppi di sfondi:

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch


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

I gruppi di carte da parati riguardavano modelli piatti e bidimensionali. Possiamo fare qualcosa di simile per i modelli tridimensionali: questi sono chiamati gruppi cristallografici e ce ne sono 219!

Oltre alle traduzioni, riflessioni, rotazioni e riflessi di planata, questi gruppi includono simmetrie come __planimetrie di planata__ e __assi di vite__ (pensa al movimento quando sviti una bottiglia).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Il nitruro di boro ha le sue molecole disposte in questo reticolo cristallino, che ha un gruppo di simmetria tridimensionale.

:::

---

## Simmetria in fisica

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Finora, tutte le simmetrie che abbiamo esaminato erano _visive_ in un certo senso: forme, immagini o motivi visibili. In effetti, la simmetria può essere un concetto molto più ampio: _immunità al cambiamento_.

Ad esempio, se ti piace il succo di mela tanto quanto ti piace il succo d'arancia, allora la tua preferenza è "simmetrica" sotto la trasformazione che scambia mele e arance.

Nel 1915, il matematico tedesco [Emmy Noether](bio:noether) osservò che qualcosa di simile è vero per le [leggi della natura](gloss:laws-of-nature).

::: column.grow

Ad esempio, la nostra esperienza ci dice che le leggi della fisica sono le stesse ovunque nell'universo. Non importa se conduci un esperimento a Londra, a New York o su Marte: le leggi della fisica dovrebbero sempre essere le stesse. In un certo senso, hanno [[simmetria traslazionale|reflectional symmetry]].

{.reveal(when="blank-0")} Allo stesso modo, non dovrebbe importare se conduciamo un esperimento affrontando il Nord, il Sud, l'Oriente o l'Ovest: le leggi della natura hanno [[simmetria rotazionale|glide reflection symmetry]].

{.reveal(when="blank-1")} E infine, non dovrebbe importare se conduciamo un esperimento oggi, domani o tra un anno. Le leggi della natura sono "simmetriche nel tempo".

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Queste "simmetrie" potrebbero inizialmente sembrare piuttosto insignificanti, ma in realtà possono dirci molto sul nostro universo. Emmy Noether è riuscito a dimostrare che ogni simmetria corrisponde a una certa quantità fisica che è _conservata_.

Ad esempio, la simmetria temporale implica che __Energia__ debba essere conservata nel nostro universo: puoi convertire l'energia da un tipo a un altro (ad esempio luce, calore o elettricità), ma non puoi mai creare o distruggere energia. La quantità totale di energia nell'universo rimarrà sempre costante.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accellerator. Scientists smash together fundamental particles at enourmous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Si scopre che, semplicemente conoscendo la simmetria, i fisici possono derivare la maggior parte delle leggi della natura che governano il nostro universo - senza mai dover fare un esperimento o un'osservazione.

La simmetria può persino prevedere l'esistenza di particelle fondamentali. Un esempio è il famoso __Higgs Boson__: è stato predetto negli anni '60 da fisici teorici, ma non è stato osservato nel mondo reale fino al 2012.

:::

---

## Dilatazioni

> id: dilations
> section: dilations
> translated: auto

Finora abbiamo appena esaminato [[rigide trasformazioni|congruent|visual]]. _{span.reveal(when="blank-0")} Ora pensiamo a uno che non lo è: una [__dilatazione__](gloss:dilation) cambia la dimensione di una forma rendendola più grande o più piccola._

---
> id: dilations-1

::: column.grow

Tutte le dilatazioni hanno un [__centro__](target:center) e un fattore di [__scala__](->.scale-target). Il centro è il punto di riferimento per il fattore di dilatazione e scala che ci dice quanto la figura si allunga o si restringe. Se il [fattore di scala](gloss:scale-factor) è compreso tra 0 e 1, l'immagine è [[più piccola|larger]] rispetto all'originale. Se il fattore di scala è maggiore di 1, l'immagine è [[più grande|smaller]] rispetto all'originale.

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

{.text-center.scale-target} Fattore di scala: ${s}{s|2|0,3,0.1}

:::

{.todo} PRESTO DISPONIBILE - Altre informazioni sulle dilatazioni

---

## Somiglianza

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
