# Transformacije i simetrija

## Uvod

> id: intro
> section: introduction
> translated: auto

Mnoge geometrijske koncepte poput [linija](gloss:line) ili [poligona](gloss:polygon) izmislili su matematičari. S druge strane, simetrija je svugdje oko nas. Gotovo sve biljke, životinje, pa čak i mi ljudi simetrične smo.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Vremenom smo oponašali simetriju prirode u umjetnosti, arhitekturi, tehnologiji i dizajnu. Simetrični oblici i obrasci samo izgledaju _ljepše_ od nesimetričnih.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Ali simetrija je mnogo važnija od toga da jednostavno _izgleda lijepo_. Leži u samim temeljima našeg svemira i može objasniti čak i najosnovnije zakone fizike.

_{button.next-step} Nastavi_

---

> id: transformations
> goals: t1 t2 t3

Iako je simetrija vrlo intuitivan pojam, opisati je matematički teže nego što možda mislite. Prvo moramo naučiti o [__transformacijama__](gloss:transformation), koji su načini pretvaranja jedne geometrijske figure u drugu. Evo nekoliko primjera:

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

Rezultat transformacije se zove [__slika__](gloss:transformation-image). Često označavamo sliku oblika `A` kao `A'`, koja se izgovara sa "premijerom". Postoji mnogo različitih vrsta transformacija koje ćemo detaljnije istražiti tijekom ovog tečaja.

---

## Krute transformacije

> id: rigid
> section: rigid
> translated: auto

[__kruta transformacija__](gloss:rigid-transformation) posebna je vrsta transformacije koja ne mijenja veličinu ili oblik figure. Mogli bismo zamisliti da je izrađen od čvrstog materijala poput drveta ili metala: možemo ga premjestiti, okrenuti ili preokrenuti, ali ne možemo ga rastezati, savijati ili na drugi način deformirati.

Koja je od ovih pet transformacija kruta?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---

> id: rigid-1
> goals: t1 t2 t3

Ispada da postoje samo tri različite vrste krutih transformacija:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Transformacija koja jednostavno _pomiče_ oblik zove se [__prijevod__](gloss:translation).

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Transformacija koja _okreće_ oblik preko naziva se [__odraz__](gloss:reflection).

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Transformacija koja _vrti_ oblik naziva se [__rotacija__](gloss:rotation).

:::

---

> id: rigid-2

Također možemo kombinirati više vrsta transformacije kako bismo stvorili složenije - primjerice, prijevod praćen rotacijom.

Prvo, pogledajmo detaljnije svaku od tih vrsta transformacija.

---

> id: translations

### Prijevodi

[__prijevod__](gloss:translation) transformacija je koja pomiče svaku točku figure jednakom udaljenošću u istom smjeru.

U koordinatnoj ravnini možemo odrediti prijevod prema tome koliko je oblik pomaknut prema osi _x_ i osi _y_. Na primjer, transformacija pomoću (3, 5) pomiče oblik za 3 duž osi _x_ i za 5 kroz osovinu _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Preveo ([[5]], [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Preveo ([[-4]], [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Preveo ([[4]], [[-2]])

:::

---

> id: translations-1
> goals: drag-0 drag-1 drag-2

Sada je na vama red - prevedite sljedeće oblike kao što je prikazano:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Prevedi po (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Prevedi po (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Prevedi po (5, -1) _{span.check(when="drag-2")}_

:::

---

> id: reflections
> goals: r0 r1 r2

### Razmišljanja

[__odraz__](gloss:reflection) je transformacija koja "okreće" ili "ogledala" oblik preko crte. Ova linija naziva se __linija refleksije__.

Nacrtajte liniju razmišljanja u svakom od ovih primjera:

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

Sada je na vama red - nacrtajte odraz svakog od ovih oblika:

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

Primijetite da ako točka leži na liniji refleksije, [[se ne pomiče|rotates|flips over]] kada se odražava: _{span.reveal(when="blank-0")} njegova slika je ista točka kao i izvornik._

---
> id: reflections-3

U svim gore navedenim primjerima linija refleksije bila je vodoravna, okomita ili pod kutom od 45 ° - što je olakšalo crtanje odraz. Ako to nije slučaj, za izgradnju je potrebno malo više posla:

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

{.r} Da bismo ovaj oblik prikazali kroz [liniju refleksije](target:refl), moramo odražavati svaku [verteks](gloss:polygon-vertex), a zatim ih ponovo povezati. _{button.next-step} Nastavi_

{.r.reveal(when="next-0")} Odaberemo jednu od vrhova i povučemo crtu preko te vrhove koja je okomita na liniju refleksije. _{button.next-step} Nastavi_

{.r.reveal(when="next-1")} Sada možemo izmjeriti [udaljenost](target:d1) od vrha do linije refleksije i napraviti točku koja ima [isto razmak](target:d2) na drugoj strani. _{span.lgrey} (Možemo koristiti ravnalo ili [kompas](target:circ) za to.)_ _{button.next-step} Nastavite_

{.r.reveal(when="next-2")} To možemo učiniti za sve ostale vrhove našeg oblika. _{button.next-step} Nastavi_

{.r.reveal(when="next-3")} Sada moramo spojiti reflektirane vrhove u ispravnom redoslijedu i pronašli smo odraz!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotacije

[__rotacija__](gloss:rotation) je transformacija koja "okreće" oblik pod određenim uglom oko fiksne točke. Ta se točka zove [__središte rotacije__](gloss:center-of-rotation). Rotacije mogu biti u smjeru kazaljke na satu ili obrnuto.

Pokušajte zakrenuti oblike ispod crvenog središta rotacije:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Zakrenite za 90 ° u smjeru kazaljke na satu.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Zakrenite za 180 °.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Zakrenite za 90 ° u smjeru suprotnom od kazaljke na satu.

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

Teže je crtati rotacije koje nisu točno 90 ° ili 180 °. Pokušajmo zakretati ovaj oblik za ${10*ang}{ang|6|-18,18,1} ° oko [središta rotacije](target:rot).

{.r} Kao i za odraz, moramo svaku točku u obliku rotirati pojedinačno. _{button.next-step} Nastavi_

{.r.reveal(when="next-0")} Počinjemo odabirom jednog od vrhova i crtanjem crte do središta rotacije. _{button.next-step} Nastavi_

{.r.reveal(when="next-1")} Koristeći [nosač](target:protractor), možemo izmjeriti [kut ${ang*10} °](target:angle) oko središta rotacije. Nacrtajmo [drugu liniju](target:l2) pod tim kutom. _{button.next-step} Nastavi_

{.r.reveal(when="next-2")} Koristeći [kompas](target:compass) ili ravnalo, možemo pronaći [točku](target:a1) na ovoj liniji koja ima istu udaljenost od središta rotacije kao i izvorna točka. _{button.next-step} Nastavi_

{.r.reveal(when="next-3")} Sada moramo ponoviti ove korake za sve ostale vrhove našeg oblika. _{button.next-step} Nastavi_

{.reveal(when="next-4")} I na kraju, kao i prije, možemo povezati pojedinačne vrhove da bismo dobili zakrenutu sliku našeg izvornog oblika.

:::

---
> id: composition-1

Transformacije su važan pojam u mnogim dijelovima matematike, a ne samo u geometriji. Na primjer, možete transformirati [_funkcije_](gloss:function) pomicanjem ili rotiranjem njihovih [grafova](gloss:function-graph). Pomoću transformacija možete odrediti jesu li dva oblika [kongruentna](gloss:congruent).

---

## Congruence

> section: congruence
> sectionStatus: dev

NAPRAVITI

---

## Simetrija

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Simetrija__](gloss:symmetry) je svuda oko nas, a intuitivan koncept: različiti dijelovi predmeta izgledaju _isto_ na neki način. Ali pomoću transformacija možemo dati mnogo precizniju, matematičku definiciju onoga što simetrija _zaista_ znači:

{.definition} Objekt je _simetričan_ ako izgleda isto, čak i nakon primjene određene transformacije.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Možemo odraziti ovog leptira, a nakon toga izgleda isto. Kažemo da ima __odraznu simetriju__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Ovaj cvijet možemo zakretati, a on će nakon toga izgledati isto. Kažemo da ima __rotacijsku simetriju__.

:::

---
> id: reflectional-symmetry

### Reflektivna simetrija

Oblik ima [__reflektirajuću simetriju__](gloss:reflectional-symmetry) ako izgleda isto nakon što se odrazi. Linija refleksije naziva se [__simetrija osi__](gloss:axis-of-symmetry) i dijeli oblik na dvije [[kongruentne|equal|similar]] polovice. Neke figure mogu imati i više od jedne osi simetrije.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Nacrtajte sve osi simetrije u ovih šest slika i oblika:

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

{.caption} Ovaj oblik ima [[2]] osi simetrije.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Kvadrat ima [[4]] ose simetrije.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Ovaj oblik ima [[2]] ose simetrije.

:::

---
> id: alphabet

Mnoga slova u abecedi imaju reflektirajuću simetriju. Odaberite sve one koji rade:

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

Evo još nekoliko oblika. Ispunite ih tako da imaju reflektirajuću simetriju:

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

Oblici, slova i slike mogu imati odraznu simetriju, ali mogu postojati i cijeli brojevi, riječi i rečenice!

Na primjer, "25352" i "ANNA" čitaju isto od naprijed. Brojevi ili riječi poput ove se nazivaju [__Palindromi__](gloss:palindrome). Možete li se sjetiti bilo kojeg drugog palindroma?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Ako zanemarimo razmake i interpunkcijske znakove, kratke rečenice u nastavku također imaju odraznu simetriju. Možete li smisliti svoje? {.text-center} Nikad neparno ili parno. <br> [[orah]] za staklenku tunjevine. <br> Yo, banana [[dečko]]! {.reveal(when="blank-0 blank-1")} Ali Palindromi nisu samo zabava, oni zapravo imaju praktičnu važnost. Prije nekoliko godina, znanstvenici su otkrili da su dijelovi našeg [DNA](gloss:dna) palindromni. To ih čini otpornijima na mutacije ili oštećenja - jer postoji svaka sigurnosna kopija svakog komada.

---
> id: rotational-symmetry

### Rotaciona simetrija

::: column.grow

Oblik ima [__rotacijsku simetriju__](gloss:rotational-symmetry) ako izgleda isto nakon zakretanja (za manje od 360 °). [Središte rotacije](gloss:center-of-rotation) obično je samo sredina oblika. [__red simetrije__](gloss:order-of-symmetry) je broj različitih orijentacija u kojima oblik izgleda isto. Možete razmišljati i o tome _koliko puta možemo okretati oblik_, prije nego što se vratimo na početak. Na primjer, ova snježna pahuljica ima redoslijed [[6]]. {.reveal(when="blank-0")} Kut svake rotacije je `"360°"/"order"`. U pahuljici, ovo je `"360°"/6 = input(60)°`.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Pronađite red i ugao rotacije, za svaki od ovih oblika:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Redoslijed [[4]], kut [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Naredba [[2]], kut [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Naredba [[8]], kut [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2 Dovršite ove oblike tako da imaju rotacijsku simetriju:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Red 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Redoslijed 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Naredba 4

:::

---
## Grupe simetrije i pozadine

> id: groups
> section: symmetry-groups
> translated: auto

Neki oblici imaju više od jedne simetrije - pogledajmo [kvadrat](gloss:square) kao jednostavan primjer.

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

Već ste pokazali da kvadrat ima [[4]] ose refleksije.

{.reveal(when="blank-0")} Također ima rotacijsku simetriju za [[90]]°, [[180]]° i [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} I na kraju, možemo razmišljati o tome da ne radimo ništa kao drugu posebnu simetriju - jer je rezultat (očito) isti kao prije. To se ponekad naziva __identitet__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Ukupno smo pronašli [[8]] različite "simetrije kvadrata".

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Sada zapravo možemo početi raditi aritmetiku s tim simetrijama. Na primjer, možemo _dodati_ dvije simetrije kako bismo dobili nove:

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

Kad god dodate dvije simetrije kvadrata, nabavite novi. Ovdje je "kalkulator simetrije", gdje možete i sami da ga isprobate:

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

Provedite malo vremena igrajući se s računalom simetrije i pokušajte pronaći bilo koji obrazac. Možete li dovršiti ova zapažanja?

* Dodavanje dvije rotacije uvijek će [[postići|a reflection]] rotaciju (ili identitet).
* Dodavanje dva razmišljanja uvijek će omogućiti [[rotaciju|a reflection]] (ili identitet).
* Dodavanje istih dviju simetrija u suprotnom redoslijedu [[ponekad daje drukčiji|always gives a different|always gives the same]] rezultat.
* Dodavanje identiteta [[ne znači ništa|returns a reflection|returns the opposite]].

---
> id: group-axioms

Možda ste shvatili da je dodavanje __{.orange} simetrija__ zapravo vrlo slično dodavanju __{.green} celih brojeva__:

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

u matematike, svaka zbirka koja ima ta svojstva naziva se [__grupa__](gloss:group). Neke grupe (poput __{.orange} simetrije__ kvadrata) imaju samo konačan broj elemenata. Drugi (poput __{.green} celih brojeva__) su beskonačni. U ovom primjeru započeli smo s osam simetrija kvadrata. U stvari, svaki geometrijski oblik ima svoju __grupu simetrije__. Svi imaju različite elemente, ali uvijek zadovoljavaju tri gore navedena pravila. Grupe se pojavljuju svugdje u matematici. Elementi mogu biti brojevi ili simetrije, ali također i polinomi, permutacije, matrice, funkcije ... _bilo što_ što se pridržava tri pravila. Ključna ideja _teorije grupa_ je da nas ne zanimaju pojedini elementi, baš u _kako oni međusobno djeluju_.

::: column.grow

Na primjer, simetrijske skupine različitih molekula mogu znanstvenicima pomoći da predvide i objasne svojstva odgovarajućih materijala. Grupe se također mogu koristiti za analizu pobjedničke strategije u društvenim igrama, ponašanja virusa u medicini, različitih harmonija u glazbi i mnogih drugih koncepata ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Svojstva molekule CCl <sub>4</sub> (lijevo) a Adenovirus (desno) određen je njihovim simetrijama.

:::

---
> id: wallpaper-groups

### Grupe pozadina

U [prethodnim odjeljcima](/course/transformations/symmetry) vidjeli smo dvije različite vrste simetrije koje odgovaraju dvije različite transformacije: rotacije i refleksije. Ali postoji i simetrija za treću vrstu krute transformacije: [[prijevodi|spins|flips]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Translacijska simetrija__](gloss:translational-symmetry) ne djeluje na izolirane predmete poput cvijeća ili leptira, ali radi se na uobičajenim obrascima koji se protežu u svakom smjeru:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Šesterokutna honiecomb

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Keramička zidna obloga

:::

---
> id: footsteps

Uz reflektirajuću, rotacijsku i translacijsku simetriju, postoji čak i četvrta vrsta: [__refleksije klizanja__](gloss:glide-reflection). Ovo je kombinacija refleksije i prijevoda u istom smjeru kao i os refleksije.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Uzorak može imati više vrsta simetrije. Kao i kod kvadrata, možemo pronaći [grupu simetrije](gloss:symmetry-group) obrasca, koja sadrži sve njegove različite simetrije.

Te vam grupe ne govore mnogo o tome kako izgleda _obrazac_ (npr. Njegove boje i oblici), koliko se _ponavlja_. Više različitih uzoraka može imati istu skupinu simetrije - sve dok su raspoređeni i ponovljeni na isti način.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ova dva uzorka imaju iste simetrije, iako izgledaju vrlo različito. Ali simetrije se ne tiču boja ili površnih oblika.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ova dva obrasca također imaju iste simetrije - iako izgledaju sličnije odgovarajućim obrascima na lijevoj strani, nego jedni drugima.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Ispada da, iako postoji beskonačno mnogo mogućih obrazaca, svi imaju jednu od samo 17 različitih skupina simetrije. Nazivaju se __pozadinske grupe__. Svaka skupina pozadina definirana je kombinacijom prijevoda, rotacija, odraz i odraz klizanja. Možete li vidjeti [središta rotacije](gloss:center-of-rotation) i [osi refleksije](gloss:axis-of-symmetry) u ovim primjerima?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Group 1 – P1</strong><br>Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Group 2 – P2</strong><br>Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Group 3 – P3</strong><br>Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Group 4 – P4</strong><br>Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Group 5 – P6</strong><br>Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Group 6 – PM</strong><br>Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Group 7 – PMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Group 8 – P4M</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Group 9 – P6M</strong><br>Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Group 10 – P3M1</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Group 11 – P31M</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Group 12 – P4G</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations 
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Group 13 – CMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Group 14 – PMG</strong><br>Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Group 15 – PG</strong><br>Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Group 16 – CM</strong><br>Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Group 17 – PGG</strong><br>Perpendicular glide reflections, rotations of order 2, translations

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

Nažalost, ne postoji jednostavan razlog zašto postoji _17_ ovih grupa, a dokazivanje toga zahtijeva napredniju matematiku. Umjesto toga, možete pokušati nacrtati vlastite ponovljene uzorke za svaku od 17 grupa pozadina:

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

Skupine tapeta bile su sve o ravnim, dvodimenzionalnim uzorcima. Za trodimenzionalne uzorke možemo učiniti nešto slično: to se naziva kristalografskim skupinama, a ima ih 219!

Osim prijevoda, refleksija, rotacija i odmahivanja, ove grupe uključuju simetrije poput __aviona za klizanje__ i __osi vijka__ (razmislite o pokretu prilikom odvrtanja boce).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Bor-nitrid ima svoje molekule raspoređene u ovoj kristalnoj rešetki koja ima trodimenzionalnu grupu simetrije.

:::

---
## Simetrija u fizici

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Do sada su sve simetrije koje smo gledali bile _vizualne_ u nekom smislu: vidljivi oblici, slike ili obrasci. U stvari, simetrija može biti puno širi pojam: _imunitet na promjene_.

Na primjer, ako volite sok od jabuke onoliko koliko volite sok od naranče, onda je vaša preferencija "simetrična" pod preobrazbom koja zamjenjuje jabuke i naranče.

Godine 1915. njemački matematičar [Emmy Noether](bio:noether) primijetio je da nešto slično vrijedi za [zakone prirode](gloss:laws-of-nature).

::: column.grow

Na primjer, naše iskustvo govori nam da su zakoni Fizike jednaki svuda u svemiru. Nije važno je li eksperiment izveo u Londonu, New Yorku ili Marsu - zakoni fizike uvijek bi trebali biti isti. Na neki način imaju [[translacijsku simetriju|reflectional symmetry]].

{.reveal(when="blank-0")} Slično tome, ne bi trebalo biti da provedemo eksperiment dok smo okrenuti sjeveru, jugu, istoku ili zapadu: zakoni prirode imaju [[rotacijsku simetriju|glide reflection symmetry]].

{.reveal(when="blank-1")} I na kraju, ne bi trebalo biti važno da li ćemo eksperiment provesti danas, sutra ili za godinu dana. Zakoni prirode su "vremenski simetrični".

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Te „simetrije“ mogu se u početku činiti potpuno besmislenim, ali zapravo nam mogu reći puno o našem svemiru. Emmy Noether uspio je dokazati da svaka simetrija odgovara određenoj fizičkoj veličini koju je _sačuvano_.

Na primjer, vremenska simetrija podrazumijeva da se u našem svemiru mora čuvati __Energija__: energiju možete pretvoriti iz jedne vrste u drugu (npr. Svjetlost u električnu energiju), ali nikad ne možete stvoriti ili uništiti energiju. Ukupna količina energije u svemiru uvijek će ostati konstantna.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Ispada da, samo znajući za simetriju, fizičari mogu izvući većinu prirodnih zakona koji upravljaju našim svemirom - bez da ikada moraju raditi eksperiment ili opažanje.

Simetrija čak može predvidjeti postojanje temeljnih čestica. Jedan primjer je poznati __Higgs Boson__: predviđali su ga 1960-ih teorijski fizičari, ali nisu ga promatrali u stvarnom svijetu do 2012. godine.

:::

---

## Razredi

> id: dilations
> section: dilations
> translated: auto

Do sada smo samo gledali [[krute|congruent|visual]] transformacije. _{span.reveal(when="blank-0")} Razmislimo o onom koji nije: [__dilatacija__](gloss:dilation) mijenja veličinu oblika čineći ga većim ili manjim._

---
> id: dilations-1

::: column.grow

Sve dilatacije imaju [__središte__](target:center) i [__faktor razmjera__](->.scale-target). Središte je referentne točke za faktor dilatacije i razmjera govori koliko se lik rasteže ili smanjuje. Ako je [faktor skaliranja](gloss:scale-factor) između 0 i 1, slika je [[manja|larger]] od originala. Ako je faktor skaliranja veći od 1, slika je [[veća|smaller]] od originala.

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

{.text-center.scale-target} Faktor skale: ${s}{s|2|0,3,0.1}

:::

{.todo} DOLAZI - Više o dilatacijama

---

## Sličnost

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
