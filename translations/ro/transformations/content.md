# Transformări și Simetrie

## Introducere

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

Multe concepte geometrice, precum [dreptele](gloss:line) și [punctele](gloss:point),
au fost “inventate” de matematicieni. Pe de altă parte, simetria există peste tot
în jurul nostru. Aproape toate plantele, animalele și chiar oamenii sunt simetrici.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Fluture")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Leu")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Stea de mare")

:::

De-a lungul timpului, am imitat simetria naturii în artă, arhitectură, tehnologie și design.
Formele și modelele simetrice par să arate pur și simplu _mai frumos_ decât cele nesimetrice.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Fereastră cu Vitralii")

:::

Dar simetria este mult mai importantă decât pentru faptul că _arată frumos_.
Ea stă la baza universului nostru și poate chiar explica cele mai fundamentale legi ale fizicii.

_{button.next-step} Continuă_

---
> id: transformations
> goals: t1 t2 t3

În timp ce simetria este un concept foarte intuitiv, descrierea sa matematică este mult
mai dificilă decât ți-ai putea imagina. Mai întâi trebuie să învățăm despre
[_transformări_](gloss:transformation), metode de a converti o formă geometrică
în alta. Iată câteva exemple:

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

Rezultatul unei transformări se numește [__imagine__](gloss:transformation-image).
Imaginea figurii `A` este de obicei notată cu `A'` (se pronunță “A prim”).

[Primul exemplu](->#star) de mai sus este special pentru că el doar mișcă sau rotește
steaua originală, dar nu îi schimbă dimensiunea sau forma. Transformările care
au această proprietate se numesc __transformări rigide__.

---

## Transformări Rigide

> id: rigid
> section: rigid
> translated: auto

O [__transformare rigidă__](gloss:rigid-transformation) este un tip special de transformare
ce nu schimbă dimensiunea și forma figurii inițiale. Imaginează-ți că figura este făcută dintr-un
material solid precum lemnul sau metalul: o putem muta, întoarce sau răsturna, dar nu o putem
întinde sau deforma altfel.

Care dintre aceste transformări sunt rigide?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

În cazul transformărilor rigide imaginea este mereu
[[congruentă cu|asemenea cu|opusă]] forma inițială. Există trei tipuri diferite
de transformări rigide:

::: column.grow.r(width=200)
    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} O transformare care doar _mișcă_ o formă se numește
[__translație__](gloss:translation).

::: column.grow.r(width=200)
    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} O transformare care _răstoarnă_ o formă se numește
[__reflexie__](gloss:reflection).

::: column.grow.r(width=200)
    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} O transformare care _învârte_ o formă se numește
[__rotație__](gloss:rotation).
:::

---
> id: rigid-2

Putem combina mai multe tipuri de transformări pentru a crea transformări mai
complexe – de exemplu, o translație urmată de o rotație.

Dar mai întâi hai să aruncăm o privire mai în detaliu asupra fiecărui tip de transformare.

---
> id: translations

### Translații

O [__translație__](gloss:translation) este o transformare care deplasează fiecare punct
al unei figuri la aceeași distanță și în aceeași direcție.

În sistemul de coordonate carteziene, putem defini o translație prin distanța cu care
este deplasată de-a lungul axei _x_ și a axei _y_. De exemplu, o transformare de (3,5)
deplasează o formă cu 3 de-a lungul axei _x_ și cu 5 de-a lungul axei _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Translat cu ([[5]], [[1]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Translat by ([[-4]], [[2]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Translat cu ([[4]], [[-2]])
:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Acum este rândul tău – translează următoarele forme după cum a fost arătat:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Translat cu (3, 1) _{span.check(when="drag-0")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Translat cu (–4, –2) _{span.check(when="drag-1")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Translat cu (5, –1) _{span.check(when="drag-2")}_
:::

---
> id: reflections
> goals: r0 r1 r2

### Reflexii

O [__reflexie__](gloss:reflection) este o transformare care “răstoarnă” sau
“oglindește” o formă față de o linie. Această linie se numește __axă de reflexie__.

Desenează axa de reflexie pentru fiecare din următoarele exemple:

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

Acum este rândul tău – desenează reflexia fiecărei forme de mai jos:

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

Să observăm că dacă un punct se află pe axa de reflexie, imaginea sa este
[[aceeași ca|mai mică decât|opusă]] punctul inițial.

---
> id: reflections-3

În toate exemplele de mai sus, axa de reflexie a fost orizontală, verticală sau înclinată
la un unghi de 45° – ceea ce ajută ca reflexia să se deseneze ușor. Dacă nu este cazul,
construcția ei necesită un pic mai mult de lucru:

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
{.r} Pentru a reflecta această formă de-a lungul [axei de reflexie](target:refl), trebuie să
reflectăm fiecare [vârf](gloss:polygon-vertex) în parte și apoi să le unim din nou.
_{button.next-step} Continuă_

{.r.reveal(when="next-0")} Hai să alegem unul dintre vârfuri și să desenăm dreapta
care trece prin acest vârf și este perpendiculară pe axa de reflexie.
_{button.next-step} Continuă_

{.r.reveal(when="next-1")} Acum putem măsura [distanța](target:d1) de la vârf
până la axa de reflexie și să trasăm punctul care se află la
[aceeași distanță](target:d2) pe partea cealaltă.
_{span.lgrey}(Putem folosi o riglă sau un [compas](target:circ) pentru a face asta.)_
_{button.next-step} Continuă_

{.r.reveal(when="next-2")} Putem face la fel pentru toate celelalte vârfuri ale
figurii noastre.
_{button.next-step} Continuă_

{.r.reveal(when="next-3")} Acum trebuie doar să unim reflexiile vârfurilor în ordinea
corectă și am obținut reflexia!
:::

---
> id: rotations
> goals: r0 r1 r2

### Rotații

O [__rotație__](gloss:rotation) este o transformare geometrica ce “învârte” o formă cu un
anume unghi în jurul unui punct fix. Acest punct se numește
[__centru de rotație__](gloss:center-of-rotation). Rotațiile pot fi în sensul acelor de ceasornic
sau în sens invers acelor de ceasornic.

Încearcă să rotești formele de mai jos în jurul centrului de rotație roșu:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Rotește cu 90° în sensul acelor de ceasornic.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Rotește cu 180°.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Rotește cu 90° în sens invers acelor de ceasornic.
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
Este mult mai dificil să desenăm rotații care nu sunt exact la 90° sau 180°. Hai să
încercăm să rotim această formă cu ${10*ang}{ang|6|-18,18,1}° în jurul [centrului de rotație](target:rot).

{.r} Ca și la reflexii, trebuie să rotim individual fiecare punct al formei.
_{button.next-step} Continuă_

{.r.reveal(when="next-0")} Începem prin a alege unul dintre vârfuri și a desena o dreaptă până
la centrul de rotație.
_{button.next-step} Continuă_

{.r.reveal(when="next-1")} Folosind un [raportor](target:protractor), putem măsura
măsura unui [unghi de ${ang*10}°](target:angle) în jurul centrului de rotație.
Hai să desenăm o a [doua dreaptă](target:l2) în acel unghi.
_{button.next-step} Continuă_

{.r.reveal(when="next-2")} Folosind un [compas](target:compass) sau o riglă, putem găsi
pe această dreaptă un [punct](target:a1) care se află la aceeași distanță față de centrul de
rotație ca punctul inițial.
_{button.next-step} Continuă_

{.r.reveal(when="next-3")} Acum trebuie să repetăm acești pași pentru toate celelalte vârfuri ale formei noastre.
_{button.next-step} Continuă_

{.reveal(when="next-4")} Și în sfârșit, la fel ca mai înainte, putem uni vârfurile individuale pentru
a obține imaginea rotită a formei noastre inițiale.
:::

---
> id: composition-1

Transformările sunt un concept important în multe din ramurile matematicii, nu
doar în geometrie. De exemplu, putem transforma o [_funcție_](gloss:function) prin
deplasarea sau rotirea [graficului](gloss:function-graph) lor. De asemenea, putem
utiliza transformările pentru a determina dacă două forme sunt [congruente](gloss:congruent).

---

## Congruența

> section: congruence
> sectionStatus: dev
> translated: auto

TODO

---

## Simetria

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Simetria__](gloss:symmetry) există peste tot în jurul nostru și este un concept
intuitiv: părți diferite ale unui obiect arată _identic_ dintr-un anumit punct de vedere.
Dar, folosind transformări geometrice, putem formula o definiție matematică mult mai
precisă pentru ce înseamnă _cu adevărat_ simetria:

{.definition} Un obiect este _simetric_ dacă arată la fel, chiar și după aplicarea unei
anumite transformări geometrice.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Putem construi reflexia acestui fluture și va arăta la fel la final.
Spunem că are __simetrie reflexivă__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Putem roti această floare și va arăta la fel la final.
Spunem că are __simetrie rotațională__.
:::

---
> id: reflectional-symmetry

### Simetria Reflexivă

O figură are [__simetrie reflexivă__](gloss:rotational-symmetry) dacă arată identic
după ce a fost reflectată. Axa de reflexie se numește [__axă de simetrie__](gloss:axis-of-symmetry)
și împarte figura în două jumătăți [[congruente|egale|asemenea]]. Unele pot avea mai mult
de o axă de simetrie.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Desenează toate axele de simetrie din aceste șase imagini și forme:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/lake.jpg" width=220 height=180 alt="Lac")
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/beijing.jpg" width=220 height=180 alt="Orașul Interzis din Beijing")
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/blue-butterfly.jpg" width=220 height=180 alt="Fluture")
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption} Această formă are [[2]] axe de simetrie.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Un pătrat are [[4]] axe de simetrie.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Această formă are [[2]] axe de simetrie.
:::

---
> id: alphabet

Multe din literele alfabetului au simetrie reflexivă. Alege-le pe toate are au simetrie reflexivă:

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

Iată câteva forme în plus. Completează-le astfel încât să aibă simetrie reflexivă:

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

Formele, literele și imaginile au simetrie reflexivă, precum și numerele,
cuvintele și propozițiile!

De exemplu, “25352” și “ANNA” se citesc la fel de la coadă la cap. Un astfel de număr sau
cuvânt se numește [__palindrom__](gloss:palindrome). Poți da alte exemple de palindromuri?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Dacă ignorăm spațiile și punctuația, propozițiile scurte de mai jos au și ele
simetrie reflexivă. Poți găsi un alt exemplu ?

{.text-center} Niciodată par sau impar.
[[Ene]] purta patru pene.
Ai ramas acasa, [[Maria]]!

{.reveal(when="blank-0 blank-1")} Palindromurile nu sunt doar distractive, ele au,
de fapt, o importanță practică. În urmă cu câțiva ani, oamenii de știință au descoperit
că porțiuni din [ADN](gloss:dna)-ul nostru sunt palindromice. Asta întărește rezistența
la mutații sau defecte - pentru că există o copie suplimentară pentru fiecare porțiune.

---
> id: rotational-symmetry

### Simetrie Rotațională

::: column.grow
O formă are [__simetrie rotațională__](gloss:rotational-symmetry) dacă arată la fel după
ce a fost rotită (cu mai puțin de 360°). [Centrul de rotație](gloss:center-of-rotation)
este de obicei mijlocul formei.

[__Ordinul de simetrie__](gloss:order-of-symmetry) este numărul de orientări diferite
în care forma arată la fel. Ne putem gândi la el ca la _numărul de rotații ale unei forme_
necesare pentru a ajunge din nou la poziția de start.
De exemplu, acest fulg de zăpadă are ordinul [[6]].

{.reveal(when="blank-0")} Unghiul fiecărei rotații este `"360°"/"ordin"`. În cazul fulgului
de zăpadă, acesta este `"360°"/6` = [[60]]°.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Găsește ordinul și unghiul de rotație pentru fiecare din aceste forme:

::: column(width=220)
    img(src="images/clover.jpg" width=200 height=200)

{.caption} Ordin [[4]], unghi [[90]]°
::: column(width=220)
    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Ordin [[2]], unghi [[180]]°
::: column(width=220)
    img(src="images/flower.jpg" width=200 height=200)

{.caption} Ordin [[8]], unghi [[45]]°
:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Acum completează aceste forme astfel încât să aibă simetrie rotațională:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Ordin 4
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Ordin 2
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Ordin 4
:::

---

## Grupuri de Simetrie și Tapete

> id: groups
> section: symmetry-groups
> translated: auto

Unele forme au mai mult de o axă de simetrie - hai să aruncăm o privire
la [pătrat](gloss:square) ca exemplu simplu.

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
Ai arătat deja anterior că un pătrat are [[4]] axe de reflexie.

{.reveal(when="blank-0")} El are și simetrie rotațională cu [[90]]°,
[[180]]° și [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Și până la urmă, ne putem gândi la
“nu face nimic” ca un alt tip special de simetrie – pentru că (evident) rezultatul
este la fel ca înainte. Aceasta se numește uneori __identitate__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Am găsit în total [[8]]
 “axe de simetrie diferite ale unui pătrat”.
:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Acum chiar putem începe să efectuăm operații aritmetice cu aceste simetrii. De exemplu,
putem _aduna_ două simetrii pentru a obține altele noi:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Calculator de simetrie
> goals: calculate

De fiecare dată când aduni două simetrii ale unui pătrat, obții una nouă. Iată aici un
“calculator de simetrie” în care poți face încercări:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Joacă-te cu calculatorul de simetrie și încearcă să găsești modele.
Poți completa aceste observații?

* Adunând două rotații se va obține mereu [[o rotație|o reflexie]] (sau identitatea).
* Adunând două reflexii se va obține mereu [[o rotație|o reflexie]] (sau identitatea).
* Adunând aceleași două simetrii în ordine opusă se va obține un rezultat
  [[uneori diferit|mereu diferit|întotdeauna la fel]].
* Adunând identiatea [[nu se schimbă nimic|rezultă o reflexie|rezultă opusul]].

---
> id: group-axioms

Poate că ai observat deja că adunarea __{.orange}simetriilor__ este de fapt
foarte asemănătoare cu adunarea __{.green}numerelor întregi__:

    ol.proof

      li.r
        | Adunând două #[strong.orange simetrii]/#[strong.green numere întregi] se va obține mereu #[strong.orange o altă simetrie]/#[strong.green un alt număr întreg]:
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
        .next-step Continuă

      li.r.reveal(when="next-0")
        span.md Adunarea #[strong.orange simetriilor]/#[strong.green numerelor întregi] este [asociativă](gloss:associative):
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
        | Orice #[strong.orange simetrie]/#[strong.green număr întreg] are o/un #[strong invers(ă)], #[strong.orange o altă simetrie]/#[strong.green un alt număr intreg] care, atunci când e adunat, rezultă identitatea:
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
        .next-step Continuă

---
> id: groups-1

În matematică, orice colecție ce are aceste proprietăți se numește [__grup__](gloss:group).
Unele grupuri (precum __{.orange}simetriile__ unui pătrat) au doar un număr finit de
elemente. Altele (precum __{.green}numerele întregi__) sunt infinite.

În acest exemplu, am început cu cele opt simetrii ale pătratului. De fapt,
orice formă geometrică are propriul ei __grup de simetrie__. Toate au diferite elemente
care satisfac mereu cele trei reguli menționate mai sus.

Grupurile sunt prezente peste tot în matematică. Elementele pot fi numere sau simetrii,
dar și polinoame, permutații, matrice, funcții … _orice_ îndeplinește cele trei reguli.
Ideea principală a _teoriei grupurilor_ este că nu ne interesează elementele individuale,
ci _cum interacționează ele unele cu altele_.

::: column.grow
De exemplu, grupurile de simetrie a diferitelor molecule pot ajuta oamenii de știință să
prezică și să explice proprietăție materialelor corespunzătoare.

Grupurile pot fi utilizate și pentru a analiza strategia câștigătoare în jocurile de masă.
comportamentul virușilor în medicină, armonii diferite în muzică și multe alte concepte…
::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Proprietățile molecului CCl<sub>4</sub> (stânga) și ale
Adenovirusului (dreapta) sunt determinate de simetriile lor.
:::

---

### Grupuri de Tapet

> id: wallpaper-groups

În [capitolele anterioare](/course/transformations/symmetry) am văzut două tipuri
diferite de simetrie ce corespund cu două transformări diferite: rotații si reflexii.
Dar există și o simetrie pentru al treilea tip de transformare rigidă:
[[translație|rotire|răsturnare]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Simetria translativă__](gloss:translational-symmetry) nu se aplică obiectelor izolate
precum flori sau fluturi, dar se aplică tiparelor regulate care se extind în ordice direcție:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Fagure hexagonal
::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Plăci de faianță
:::

---
> id: footsteps

Adițional simetriei reflexive, rotaționale și translative există chiar și un al
patrulea tip: [__reflexie cu alunecare__](gloss:glide-reflection). Aceasta este
o combinație între o reflexie și o translație în aceeași direcție cu axa de reflexie.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Un șablon poate avea mai mult de un tip de simetrie. La fel ca la pătrate,
putem afla [grupul de simetrie](gloss:symmetry-group) al unui șablon, ce conține
toate simetriile sale diferite.

Aceste grupuri nu ne spun cum arată _șablonul_ (ex: culorile și formele sale),
ci doar cum se _repetă_. Multe modele diferite pot avea același grup de simetrie -
atâta timp cât sunt aranjate și se repetă în același fel.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Aceste două șabloane au aceleași simetrii, chiar dacă arată foarte diferit.
Dar simetriile nu au legătură cu culorile sau formele superficiale.
::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Și aceste două șabloane au aceleași simetrii – chiar dacă arată mult mai
asemănator cu modelele corespunzătoare din stânga, decât una cu alta.
:::

---
> id: wallpaper-groups-3

Se pare că, deși există o infinitate de șabloane posibile, toate au unul din cele
17 grupuri de simetrie diferite. Acestea se numesc __grupuri de tapet__.

Orice grup de tapet este definit de o combinație de translații, rotații, reflexii și
reflexii cu alunecare. Poți vedea [centrele de rotație](gloss:center-of-rotation) și
[axele de reflexie](gloss:axis-of-symmetry) din aceste exemple?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Tip P1</strong><br>Doar translații
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Tip P2</strong><br>Rotații de ordin 2, translații
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Tip P3</strong><br>Rotații de ordin 3 (120°), translații
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Tip P4</strong><br>Patru rotații de ordin 2 (180°), translații
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Tip P6</strong><br>Rotații de ordin 2, 3 și 6 (60°), translații
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Tip PM</strong><br>Axe paralele de reflexie, translații
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Tip PMM</strong><br>Reflexii perpendiculare, rotații de ordin 2, translații
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Tip P4M</strong><br>Rotații (ordin 2 + 4), reflexii, reflexii cu alunecare, translații
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Tip P6M</strong><br>Rotații (ord 2 + 6), reflexii, reflexii cu alunecare, translații
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Tip P3M1</strong><br>Rotații of order 3, reflexii, reflexii cu alunecare, translații
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Tip P31M</strong><br>Rotații of order 3, reflexii, reflexii cu alunecare, translații
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Tip P4G</strong><br>Rotații (ord 2 + 4), reflexii, reflexii cu alunecare, translații
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Tip CMM</strong><br>Reflexii perpendiculare, rotații de ordin 2, translații
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Tip PMG</strong><br>Reflexii, reflexii cu alunecare, rotații de ordin 2, translații
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Tip PG</strong><br>Reflexii cu alunecare paralele, translații
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Tip CM</strong><br>Reflections, glide reflections, translații
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Tip PGG</strong><br>reflexii cu alunecare perpendiculare, rotații de ordin 2, translații

Din păcate, nu se poate demonstra ușor de ce există _17_ astfel de grupuri.
Pentru a demonstra e nevoie de noțiuni matematice mult mai avansate…

În schimb, poți încerca să desenezi propriul tău șablon repetitiv pentru fiecare
din cele 17 grupuri de tapet:

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
Grupurile de tapet se referă doar la șabloane plate, bidimensionale. Putem face ceva similar
pentru șabloanele tridimensionale: acestea se numesc grupuri cristalografice și există 219
astfel de grupuri.

Pe lângă translații, reflexii, rotații și reflexii cu alunecare, aceste grupuri conțin
simetrii __plane de alunecare__ și __axe elicoidale__ (te poți gândi la
mișcarea de deșurubare a unui capac).
::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Nitrura cubică de bor are molecule aranjate într-o grilă de cristal,
ce are un grup de simetrie tridimensional.
:::

---

## Simetria în Fizică

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Până acum, toate simetriile pe care le-am studiat au fost cumva _vizuale_: forme,
imagini și sabloane vizibile. De fapt, simetria poate fi un concept mult mai amplu:
_imunitate la schimbare_.

De exemplu, dacă îți place sucul de mere la fel de mult precum sucul de portocale, atunci
preferința ta este “simetrică” sub transformarea care schimbă merele și portocalele.

În anul 1915, matematiciana germană [Emmy Noether](bio:noether) a observat că ceva similar
se aplică și în cazul [legilor naturii](gloss:laws-of-nature).

::: column.grow
De exemplu, experiența ne spune că legile fizicii sunt aceleași pretutindeni în univers.
Nu contează dacă un experiment se realiză în Londra, New York sau pe Marte -
legile fizicii ar trebui să fie întotdeauna aceleași. Într-un fel ele au
[[simetrie translativă|simetrie reflexivă]].

{.reveal(when="blank-0")} În mod similar, nu contează daca realizăm un experiment îndreptați
spre Nord, Sud, Est sau Vest: legile naturii au [[simetrie rotațională|simetrie reflexivă cu alunecare]]

{.reveal(when="blank-1")} Și, în sfârșit, nu contează dacă realizăm un
experiment astăzi, mâine sau peste un an. Legile naturii au simetrie temporală.
::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Aceste “simetrii” ar putea părea inițial să nu aibă niciun sens, dar, de fapt, ele ne
pot spune multe despre universul nostru. Emmy Noether a reușit să demonstreze
că orice simetrie corespunde unei anumite cantități fizice care este _conservată_.

De exemplu, simetria temporală presupune că __energia__ se conservă în universul nostru:
energia se poate converti dintr-un tip în altul (ex: lumină, căldură sau electricitate),
dar niciodată energiau nu se poate crea sau distruge. Cantitatea totală de energie din
univers va rămâne mereu constantă.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Marele Accelerator de Hadroni din CERN")
      p.caption CERN este cel mai mare accelerator de particule din lume. Oamenii de știință izbesc împreună particule elementare la viteze enorme, pentru a afla mai multe despre proprietățile lor. Poți vedea persoana din josul imaginii pentru a compara dimensiunea?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Fragmente de particule")
    p.caption Calea urmată de fragmentele de particule după o coliziune

::: column.grow
Se pare că, doar cunoscând simetria, fizicienii pot deriva cele mai multe din legile
ale naturii care ne guvernează universul - fără a fi nevoie să facă vreodată vreun
experiment sau vreo observație.

Simetria poate chiar prezice existența particulelor elementare. Un exemplu este
binecunoscutul __Boson Higgs__: a fost prezis în anii 1960 de fizicienii teoreticieni,
dar nu a fost observat în lumea reală până în anul 2012.
:::

---

## Omotetii

> id: dilations
> section: dilations
> translated: auto

Până acum, ne-am uitat la transformări geoemtrice [[rigide|congruente|vizuale]].
_{span.reveal(when="blank-0")} Acum hai să ne gândim la o transformare care nu e așa:
o [__omotetie__](gloss:dilation) modifică dimensiunea unei forme făcând-o mai mare sau mai mică._

---
> id: dilations-1

::: column.grow

Toate omotetiile au un [__centru__](target:center) și un [__factor de scalare__](->.scale-target).
Centrul este punctul de referință pentru omotetie și factorul de scalare
ne spune cât de mult s-a mărit sau s-a micșorat figura.

Dacă [factorul de scalare](gloss:scale-factor) este între 0 și 1, imaginea este
[[mai mică|mai mare]] decât originalul. Dacă factorul de scalare este mai mare ca 1,
imaginea este [[mai mare|mai mică]] decât originalul.

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

{.text-center.scale-target} Factor de scalare: ${s}{s|2|0,3,0.1}
:::

{.todo} COMING SOON – Mai multe despre Omotetii

---

## Asemănare

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
