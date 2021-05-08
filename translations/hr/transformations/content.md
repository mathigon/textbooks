# Preslikavanja i simetrija

## Uvod

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles

Mnoge geometrijske koncepte poput [crte](gloss:line) ili [poligona](gloss:polygon) mateatičari su izmislili. S druge strane, simetrija je svugdje oko nas. Gotovo sve biljke, životinje, pa čak i mi ljudi, simetrični smo.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Kroz vrijeme, oponašali smo simetriju prirode u umjetnosti, arhitekturi, tehnologiji i dizajnu. Simetrični oblici i obrasci jednostavno izgledaju _ljepše_ od onih koji nisu simetrični.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Ali simetrija je mnogo važnija od toga da samo _izgleda lijepo_. Ona postoji u samim temeljima našeg svemira i može objasniti čak i najosnovnije zakone fizike.

_{button.next-step} Nastavi_

---
> id: transformations
> goals: t1 t2 t3

Iako je simetrija vrlo intuitivan pojam, opisati simetriju matematički teže je nego što možda mislite. Prvo moramo naučiti o [__preslikavanjima__](gloss:transformation), načinima pretvaranja jednog geometrijskog lika u drugi. Evo nekoliko primjera:

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

Rezultat preslikavanja zove se [__slika__](gloss:transformation-image). Sliku oblika `A` često označavamo kao `A'`, koja se izgovara "A crtano". Postoji mnogo različitih vrsta preslikavanja koje ćemo detaljnije istražiti tijekom ovog tečaja.

---

## Preslikavanja koja čuvaju udaljenost (izometrije)

> id: rigid
> section: rigid

[__Preslikavanje koje čuva udaljenost__](gloss:rigid-transformation) posebna je vrsta preslikavanja kojim se ne mijenja veličina i oblik lika. Mogli bismo zamisliti da je lik izrađen od čvrstog materijala poput drveta ili metala: možemo ga premjestiti, okrenuti ili preokrenuti, ali ne možemo ga rastezati, savijati ili na drugi način deformirati.

Koje je od ovih pet preslikavanja izometrija?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Postoje samo tri različite vrste izometrija:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Preslikavanje koja samo _pomiče_ lik zove se [__translacija__](gloss:translation).

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Preslikavanje koje _okreće_ lik na drugu stranu zove se [__zrcaljenje__](gloss:reflection).

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Preslikavanje koje _vrti_ lik zove se [__rotacija__](gloss:rotation).

:::

---
> id: rigid-2

Možemo kombinirati više vrsta preslikavanja kako bismo stvorili složenije preslikavanje - na primjer, translacija praćena rotacijom.

Pogledajmo detaljnije svaku od tih vrsta preslikavanja.

---
> id: translations

### Translacije

[__Translacija__](gloss:translation) je preslikavanje koje pomiče svaku točku lika za istu udaljenost u istom smjeru.

U koordinatnoj ravnini možemo opisati translaciju prema tome za koliko se lik pomiče prema osi _x_ i osi _y_. Na primjer, transformacija za (3, 5) pomiče lik za 3 duž osi _x_ i za 5 duž osi _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Translacija za ([[5]], [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Translacija za ([[-4]], [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Translacija za ([[4]], [[-2]])

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Sad je na vama red - translatirajte sljedeće likove kao što je prikazano:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Translatiraj za (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Translatiraj za (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Translatiraj za (5, -1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Zrcaljenja

[__Zrcaljenje__](gloss:reflection) je preslikavanje koje "okreće" ili "zrcali" lik preko crte. Ta crta zove se __os simetrije__.

Nacrtajte os simetrije u svakom od ovih primjera:

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

Sad je na vama red - nacrtajte odraz svakog od ovih likova:

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

Primijetite da ako točka leži na osi simetrije, [[ne pomiče se|rotira se|zrcali se]] kada se zrcali: _{span.reveal(when="blank-0")} njezina slika je ista točka kao i original._

---
> id: reflections-3

U svim gore navedenim primjerima os simetrije bila je vodoravna, okomita ili pod kutom od 45 ° - što je olakšalo crtanje slike. Ako to nije slučaj, za crtanje je potrebno malo više posla:

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

{.r} Da bismo ovaj lik preslikali po [osi refleksije](target:refl), moramo posebno preslikati svaki [vrh](gloss:polygon-vertex), a zatim vrhove ponovo povezati. _{button.next-step} Nastavi_

{.r.reveal(when="next-0")} Odaberimo jedan od vrhova i povucimo kroz taj vrh pravac koji je okomit na os refleksije. _{button.next-step} Nastavi_

{.r.reveal(when="next-1")} Sad možemo izmjeriti [udaljenost](target:d1) od vrha do osi refleksije i označiti točku koja je [jednalo udaljena](target:d2) na drugoj strani. _{span.lgrey} (Za to možemo koristiti ravnalo ili [šestar](target:circ).)_ _{button.next-step} Nastavite_

{.r.reveal(when="next-2")} Ponovimo postupak za sve ostale vrhove našeg lika. _{button.next-step} Nastavi_

{.r.reveal(when="next-3")} Ako sada spojimo preslikane vrhove odgovarajućim redoslijedom, pronašli smo odraz!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotacije

[__Rotacija__](gloss:rotation) je transformacija koja "okreće" oblik pod određenim kutom oko fiksne točke. Ta se točka zove [__centar rotacije__](gloss:center-of-rotation). Rotacije mogu biti u smjeru kazaljke na satu ili obrnuto.

Pokušajte rotirati oblike oko crvenog središta rotacije:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Rotirajte za 90° u smjeru kazaljke na satu.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Rotirajte za 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Rotirajte za 90° u smjeru suprotnom od kazaljke na satu.

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

Puno je teže crtati rotacije koje nisu točno 90° ili 180°. Pokušajmo rotirati ovaj lik za ${10*ang}{ang|6|-18,18,1} ° oko [centra rotacije](target:rot).

{.r} Kao i za zrcaljenje, svaki vrh u liku moramo rotirati pojedinačno. _{button.next-step} Nastavi_

{.r.reveal(when="next-0")} Počinjemo odabirom jednog od vrhova i crtanjem crte do centra rotacije. _{button.next-step} Nastavi_

{.r.reveal(when="next-1")} Koristeći [kutomjer](target:protractor), možemo izmjeriti [kut ${ang*10} °](target:angle) oko centra rotacije. Nacrtajmo [drugi pravac](target:l2) pod tim kutom. _{button.next-step} Nastavi_

{.r.reveal(when="next-2")} Koristeći [šestar](target:compass) ili ravnalo, možemo pronaći [točku](target:a1) na ovom pravcu koja ima istu udaljenost od centra rotacije kao i izvorna točka. _{button.next-step} Nastavi_

{.r.reveal(when="next-3")} Sada moramo ponoviti ove korake za sve ostale vrhove našeg lika. _{button.next-step} Nastavi_

{.reveal(when="next-4")} Na kraju, kao i u prethodnom primjeru, povežemo pojedinačne vrhove da bismo dobili rotiranu sliku našeg izvornog lika.

:::

---
> id: composition-1

Preslikavanja su važan pojam u mnogim dijelovima matematike, a ne samo u geometriji. Na primjer, mogu se preslikavati [_funkcije_](gloss:function) pomicanjem ili rotiranjem njihovih [grafova](gloss:function-graph). Pomoću preslikavanja također možemo odrediti jesu li dva oblika [kongruentna](gloss:congruent).

---

## Kongruencija

> section: congruence
> sectionStatus: dev

NAPRAVITI

---

## Simetrija

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__Simetrija__](gloss:symmetry) je svuda oko nas, a također je i intuitivan koncept: različiti dijelovi predmeta izgledaju _isto_ na neki način. Pomoću preslikavanja možemo dati mnogo precizniju, matematičku definiciju onoga što simetrija _zaista_ znači:

{.definition} Objekt je _simetričan_ ako izgleda isto, čak i nakon primjene određenog preslikavanja.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Ovog leptira možemo zrcaliti, i nakon toga će izgledati isto. Kažemo da je __osno simetričan__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Ovaj cvijet možemo rotirati, i on će nakon toga izgledati isto. Kažemo da je __centralno simetričan__.

:::

---
> id: reflectional-symmetry

### Reflektivna simetrija

Lik je [__osno simetričan__](gloss:reflectional-symmetry) ako izgleda isto nakon što se zrcali. Pravac simetrije naziva se [__os simetrije__](gloss:axis-of-symmetry) i dijeli lik na dvije [[kongruentne|jednake|slične]] polovice. Neki likovi mogu imati više od jedne osi simetrije.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Nacrtajte sve osi simetrije kod ovih šest slika i likova:

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

{.caption} Ovaj lik ima [[2]] osi simetrije.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Kvadrat ima [[4]] osi simetrije.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Ovaj lik ima [[2]] osi simetrije.

:::

---
> id: alphabet

Mnoga slova u abecedi su osno simetrična. Označite ona koja jesu:

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

Evo još nekoliko likova. Nadopunite ih tako da budu osno simetrična:

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

LIkovi, slova i slike mogu biti osno simetrični, a mogu to biti i neki brojevi, riječi ili rečenice!

Na primjer, "25352" i "ANNA" čitaju se isto prema naprijed i unazad. Brojevi ili riječi poput ovih nazivaju se [__Palindromi__](gloss:palindrome). Možete li se sjetiti još nekog palindroma?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Ako zanemarimo razmake i interpunkcijske znakove, kratke rečenice u nastavku također su osno simetrične. Možete li smisliti svoje? {.text-center} Never odd or even. <br> [A [nut]] for a jar of tun. <br> Yo, banana [[boy]]! {.reveal(when="blank-0 blank-1")} Palindromi nisu samo zabavni, oni zapravo imaju i praktičnu vrijednost. Prije nekoliko godina, znanstvenici su otkrili da su dijelovi našeg [DNA](gloss:dna) palindromni. To ih čini otpornijima na mutacije ili oštećenja - jer za svaki dio postoji sigurnosna kopija.

---
> id: rotational-symmetry

### Osna simetrija

::: column.grow

Lik je [__osno simetričan__](gloss:rotational-symmetry) ako izgleda isto nakon rotiranja (za manje od 360 °). [Središte rotacije](gloss:center-of-rotation) obično je samo središte lika. [__Red simetrije__](gloss:order-of-symmetry) je broj različitih orijentacija za koje lik izgleda isto. Možete razmišljati i na način _koliko puta možemo okretati lik_, prije nego što se vratimo na početak. Na primjer, ova snježna pahuljica ima red [[6]]. {.reveal(when="blank-0")} Kut svake rotacije je `"360°"/"order"`. U pahuljici, ovo je `"360°"/6 = input(60)°`.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Za svaki od ovih likova odredite red i kut rotacije:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Red [[4]], kut [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Red [[2]], kut [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Naredba [[8]], kut [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Dopunite ove likove tako da budu centralno simetrični:

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

{.caption} Red 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Red 4

:::

---
## Grupe simetrija i pozadine

> id: groups
> section: symmetry-groups

Neki likovi imaju više od jedne simetrije - pogledajmo [kvadrat](gloss:square) kao jednostavan primjer.

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

Već ste zaključili da kvadrat ima [[4]] osi simetrije.

{.reveal(when="blank-0")} Također je i centralno simetričan za [[90]]°, [[180]]° i [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} I na kraju, možemo razmišljati i na način da je "ne raditi ništa" posebna vrsta simetrije - jer je rezultat (očito) isti kao na početku. Ovo se ponekad naziva __identitet__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Ukupno smo pronašli [[8]] različitih vrsta "simetrije kvadrata".

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Sada možemo početi računati s ovim simetrijama. Na primjer, možemo _dodati_ dvije simetrije kako bismo dobili nove:

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

Kad god zbrojimo dvije simetrije kvadrata, rezultat je nova simetrija. Ovo je "kalkulator simetrije", gdje to možete i sami isprobati:

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

Provedite malo vremena igrajući se s kalkulatorom simetrije i pokušajte pronaći neki obrazac. Možete li dopuniti ova zapažanja?

* Zbrajanje dviju rotacija uvijek daje [[rotaciju|refleksiju]] (ili identitet).
* Zvrajanje dviju refleksija uvijek daje [[rotaciju|refleksiju]] (ili identitet).
* Zbrajanje dviju istih simetrija u suprotnom redoslijedu [[ponekad daje drukčiji|uvijek daje drukčiji|uvijek daje jednaki]] rezultat.
* Zbrajanje identiteta [[ne mijenja ništa|daje refleksiju|daje suprotan lik]].

---
> id: group-axioms

Možda ste primjetili da je zbrajanje __{.orange} simetrija__ zapravo vrlo slično zbrajanju __{.green} cijelih brojeva__:

    ol.proof
      li.r
        | Zbrajanje dviju #[strong.orange simetrija]/#[strong.green cijelih brojeva] uvijek daje novu #[strong.orange simetriju]/#[strong.green cijeli broj]:
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
        span.md Zbrajanje #[strong.orange simetrija]/#[strong.green cijelih brojeva] je [asocijativno](gloss:associative):
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
        | Svaka #[strong.orange simetrija]/#[strong.green cijeli broj] ima #[strong inverz], drugu #[strong.orange simetriju]/#[strong.green cijeli broj] koji, kad zbrajamo s njim, daje identitet:
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

U matematici, svaki skup koja ima ta svojstva zove se [__grupa__](gloss:group). Neke grupe (poput __{.orange} simetrije__ kvadrata) imaju konačan broj elemenata. Druge (poput __{.green} cijelih brojeva__) imaju beskonačno mnogo elemenata. U ovom primjeru započeli smo s osam simetrija kvadrata. Zapravo, svaki geometrijski lik ima svoju __grupu simetrija__. Te grupe sadrže različite elemente, ali uvijek zadovoljavaju tri gore navedena pravila. Grupe se pojavljuju svugdje u matematici. Elementi grupe mogu biti brojevi ili simetrije, ali i polinomi, permutacije, matrice, funkcije ... _bilo što_ što zadovoljava tri pravila grupe. Ključna ideja _teorije grupa_ je da nas ne zanimaju pojedini elementi gremo, nego _kako oni međusobno djeluju jedni na druge_.

::: column.grow

Na primjer, grupe simetrija različitih molekula mogu znanstvenicima pomoći predvidjeti i objasniti svojstva nekih materijala. Grupe se također mogu koristiti za analizu pobjedničke strategije u društvenim igrama, ponašanja virusa u medicini, različitih harmonija u glazbi i mnogih drugih koncepata ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Svojstva molekule CCl <sub>4</sub> (lijevo) i Adenovirusa (desno) određena su njihovim simetrijama.

:::

---
> id: wallpaper-groups

### Popoločavanja ravnine

U [prethodnim odjeljcima](/course/transformations/symmetry) vidjeli smo dvije različite vrste simetrija kojima odgovaraju dvije različite transformacije: rotacije i refleksije. Ali postoji i simetrija za treću vrstu transformacije u ravnini: [[translacije|vrtnja|prebacivanja]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Translacija__](gloss:translational-symmetry) nije primjenjiva na izolirane predmete poput cvijeća ili leptira, ali jest na pravilnim uzorcima koji se protežu u svakom smjeru:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Šesterokutne saće

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Keramičke zidne pločice

:::

---
> id: footsteps

Osim translacije, osne i centralne simetrije, postoji čak i četvrta vrsta: [__klizno zrcaljenje__](gloss:glide-reflection). Ovo je kombinacija osne simetrije i translacije u istom smjeru kao i os simetrije.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Uzorak može imati više vrsta simetrije. Kao i kod kvadrata, možemo pronaći [grupu simetrija](gloss:symmetry-group) uzorka, koja sadrži sve njegove različite simetrije.

Ove grupe ne govore mnogo o tome kako izgleda uzorak _<<<<_ (npr. njegovu boju i oblik), nego samo kako se ponavlja _<<<<_. Više različitih uzoraka može imati istu grupu simetrija - sve dok su raspoređeni i ponavljaju se na isti način.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ova dva uzorka imaju iste simetrije, iako izgledaju posve različito. Ali simetrije se ni ne bave bojama ili oblicima na površini.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ova dva uzorka također imaju iste simetrije - iako izgledaju sličnije odgovarajućim uzorcima na lijevoj strani, nego jedni drugima.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Iako postoji beskonačno mnogo mogućih uzoraka, svi oni pripadaju jednoj od samo 17 različitih grupa simetrija. Te grupe zovu se __popločavanja ravnine__. Svako popločavanje ravnine definirano je kombinacijom translacija, rotacija, osnih simetrija i kliznih zrcaljenja. Možete li vidjeti [centre rotacije](gloss:center-of-rotation) i [osi simetrije](gloss:axis-of-symmetry) u ovim primjerima?

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

Nažalost, ne postoji jednostavan razlog zašto ovih grupa ima točno _17_, a dokazivanje toga zahtijeva provodi se pomoću naprednije matematike. Umjesto toga, pokušajte nacrtati vlastite ponovljene uzorke za svaku od 17 popločavanja ravnine:


    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Primjeri crteža drugih učenika
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

Popločavanja ravnine odnose se na ravne, dvodimenzionalne uzorke. Za trodimenzionalne uzorke možemo učiniti nešto slično: radi se o grupama kristala, a ima ih 219!

Osim translacija, refleksija, rotacija i kliznih zrcaljenja, ove grupe uključuju simetrije poput __klizanja ravnine__ i __zavijanja osi__ (usporedite s pokretom prilikom odvrtanja čepa na boci).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Molekule bor-nitrida raspoređene su u ovoj kristalnoj rešetki koja ima trodimenzionalnu grupu simetrija.

:::

---
## Simetrija u fizici

> id: planets
> sectionBackground: dark stars
> section: physics

Do sada su sve simetrije koje smo gledali bile _vizualne_ u nekom smislu: vidljivi likovi, slike ili obrasci. Zapravo, simetrija može biti puno širi pojam: _otpornost na promjenu_.

Na primjer, ako volite sok od jabuke onoliko koliko volite sok od naranče, onda je vaša preferencija "simetrična" za transformaciju koja zamjenjuje jabuke i naranče.

Godine 1915. njemački matematičar [Emmy Noether](bio:noether) primijetio je da nešto slično vrijedi za [zakone prirode](gloss:laws-of-nature).

::: column.grow

Na primjer, iskustvo nam govori da su zakoni fizike jednaki svuda u svemiru. Nije važno je li eksperiment proveden u Londonu, New Yorku ili na Marsu - zakoni fizike uvijek bi trebali biti isti. Na neki način oni imaju [[translacijsku simetriju|refleksivnu simetriju]].

{.reveal(when="blank-0")} Slično tome, trebalo bi biti svejedno da provodimo li eksperiment dok smo okrenuti prema sjeveru, jugu, istoku ili zapadu: zakoni prirode imaju [[rotacijsku simetriju|kliznu simetriju]].

{.reveal(when="blank-1")} I na kraju, ne bi trebalo biti važno provodimo li eksperiment danas, sutra ili za godinu dana. Zakoni prirode su "vremenski simetrični".

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Ove „simetrije“ mogu se u početku činiti potpuno besmislenima, ali zapravo nam mogu reći puno o svemiru. Emmy Noether uspio je dokazati da svaka simetrija odgovara određenoj fizičkoj veličini koju je _očuvana_.

Na primjer, vremenska simetrija podrazumijeva da se u našem svemiru mora očuvati __Energija__: energiju se može pretvariti iz jedne vrste u drugu (npr. svjetlost u električnu energiju), ali nikad se ne može stvoriti ili uništiti. Ukupna količina energije u svemiru uvijek će ostati konstantna.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN je najveći akcelerator čestica na svijetu. Znanstvenici sudaraju elementarne čestice pri nevjerojatnim brzinama kako bi naučili više o njihovim svojstvima. Za usporedbu veličine, vidite li osobu pri dnu fotografije?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Čini se da, poznajući simetriju, fizičari mogu izvesti većinu prirodnih zakona koji upravljaju našim svemirom - bez da ikada moraju raditi eksperiment ili opažati.

Simetrija čak može predvidjeti postojanje elementarnih čestica. Jedan od primjera je poznati __Higgsov Bozon__: teorijski fizičari predviđali su ga još 1960-ih, ali nisu ga uočili u stvarnom svijetu do 2012. godine.

:::

---

## Homotetija

> id: dilations
> section: dilations

Do sada smo samo gledali [[krute|kongruentne|vizualne]] transformacije. _{span.reveal(when="blank-0")} Razmislimo sada o transformaciji koja nije takva: [__homotetija__](gloss:dilation) mijenja veličinu lika čineći ga većim ili manjim._

---
> id: dilations-1

::: column.grow

Sve homotetije imaju [__središte__](target:center) i [__koeficijent homotetije__](->.scale-target). Središte je referentna točka, a koeficijent homotetije govori o tome koliko se lik povećava ili smanjuje. Ako je [koeficijent](gloss:scale-factor) između 0 i 1, slika je [[manja|veća]] od originala. Ako je koeficijent veći od 1, slika je [[veća|manja]] od originala.

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

{.todo} DOLAZI - Više o homotetiji

---

## Sličnost

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
