# Transformationer och symmetri

## Introduktion

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

Många geometriska begrepp som [linjer](gloss:line) eller [polygoner](gloss:polygon) "uppfanns" av matematiker. Symmetri, å andra sidan, finns överallt runt omkring oss. Nästan alla växter, djur och till och med vi människor är symmetriska.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Med tiden har vi imiterat naturens symmetri inom konst, arkitektur, teknik och design. Symmetriska former och mönster verkar bara se _vackrare ut_ än icke-symmetriska.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Men symmetri är mycket viktigare än att bara vara _vacker_ . Det ligger i grunden för vårt universum och kan till och med förklara fysikens mest grundläggande lagar.

_{button.next-step} Fortsätta_

---
> id: transformations
> goals: t1 t2 t3

Medan symmetri är ett mycket intuitivt koncept, är det svårare att beskriva det matematiskt än du kanske tror. Först måste vi lära oss om [__transformationer__](gloss:transformation) , som är sätt att konvertera en geometrisk figur till en annan. Här är några exempel:

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

Resultatet av en omvandling kallas [__bilden__](gloss:transformation-image) . Vi betecknar ofta bilden av en form `A` som `A'` , uttalas "A prime". Det finns många olika typer av transformationer, som vi kommer att utforska mer detaljerat under hela denna kurs.

---

## Stela transformationer

> id: rigid
> section: rigid
> translated: auto

En [__styv transformation__](gloss:rigid-transformation) är en speciell typ av transformation som inte förändrar storleken eller formen på en figur. Vi kan föreställa oss att det är gjord av ett fast material som trä eller metall: vi kan flytta det, vända det eller vända det, men vi kan inte sträcka, böja eller på annat sätt deformera det.

Vilka av dessa fem transformationer är styva?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Det visar sig att det bara finns tre olika typer av styva transformationer:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} En transformation som helt enkelt _flyttar_ en form kallas en [__översättning__](gloss:translation) .

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} En transformation som _vänder över_ en form kallas en [__reflektion__](gloss:reflection) .

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} En transformation som _snurrar_ en form kallas en [__rotation__](gloss:rotation) .

:::

---
> id: rigid-2

Vi kan också kombinera flera typer av transformation för att skapa mer komplexa - till exempel en översättning följt av en rotation.

Men låt oss först titta på var och en av dessa typer av transformationer mer detaljerat.

---
> id: translations

### översättningar

En [__översättning__](gloss:translation) är en transformation som förflyttar varje punkt i en figur med samma avstånd i samma riktning.

I koordinatplanet kan vi specificera en översättning av hur långt formen flyttas längs _x_ -ax och _y_ -ax. Till exempel förflyttar en transformation med (3, 5) en form med 3 längs _x_ -axen och med 5 längs _y_ -axeln.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Översatt av ( [[5]] , [[1]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Översatt av ( [[-4]] , [[2]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Översatt av ( [[4]] , [[-2]] )

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Nu är det din tur - översätt följande former som visas:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Översätt av (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Översätt med (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Översätt med (5, –1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Reflections

En [__reflektion__](gloss:reflection) är en transformation som "vänder" eller "speglar" en form över en linje. Denna linje kallas __reflektionslinjen__ .

Rita reflektionslinjen i vart och ett av dessa exempel:

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

Nu är det din tur - rita reflektionen av var och en av dessa former:

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

Lägg märke till att om en punkt ligger på reflektionslinjen, [[rör sig den inte | roterar | vänder över]] när det reflekteras: _{span.reveal(when="blank-0")} dess bild är samma punkt som originalet._

---
> id: reflections-3

I alla exemplen ovan var reflektionslinjen horisontell, vertikal eller i 45° vinkel - vilket gjorde det enkelt att rita reflektionerna. Om så inte är fallet kräver konstruktionen lite mer arbete:

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

{.r} För att återspegla denna form över [reflektionslinjen](target:refl) måste vi reflektera varje [topppunkt](gloss:polygon-vertex) individuellt och sedan ansluta dem igen. _{button.next-step} Fortsätta_

{.r.reveal(when="next-0")} Låt oss välja en av vertikalerna och dra linjen genom denna toppunkt som är vinkelrätt mot reflektionslinjen. _{button.next-step} Fortsätta_

{.r.reveal(when="next-1")} Nu kan vi mäta [avståndet](target:d1) från toppunktet till reflektionslinjen och göra den punkt som har [samma avstånd](target:d2) på andra sidan. _{span.lgrey} (Vi kan antingen använda en linjal eller en [kompass för](target:circ) att göra detta.)_ _{button.next-step} Fortsätta_

{.r.reveal(when="next-2")} Vi kan göra samma sak för alla andra toppar i vår form. _{button.next-step} Fortsätta_

{.r.reveal(when="next-3")} Nu måste vi bara ansluta de reflekterade topparna i rätt ordning, och vi har hittat reflektionen!

:::

---
> id: rotations
> goals: r0 r1 r2

### rotationer

En [__rotation__](gloss:rotation) är en transformation som "vänder" en form med en viss vinkel runt en fast punkt. Den punkten kallas [__rotationscentrum__](gloss:center-of-rotation) . Rotationer kan vara medurs eller moturs.

Försök att rotera formerna nedanför den röda rotationscentrum:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Vrid 90° medsols.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Rotera 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Vrid 90° moturs.

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

Det är svårare att dra rotationer som inte är exakt 90° eller 180°. Låt oss försöka rotera denna form genom ${10*ang}{ang|6|-18,18,1}° runt [rotationscentrum](target:rot) .

{.r} Liksom för reflektioner måste vi rotera varje punkt i en form individuellt. _{button.next-step} Fortsätta_

{.r.reveal(when="next-0")} Vi börjar med att plocka en av topparna och dra en linje mot rotationscentrum. _{button.next-step} Fortsätta_

{.r.reveal(when="next-1")} Med hjälp av en [gradskiva](target:protractor) kan vi mäta en [vinkel på ${ang*10}°](target:angle) runt rotationscentrum. Låt oss rita en [andra rad](target:l2) i den vinkeln. _{button.next-step} Fortsätta_

{.r.reveal(when="next-2")} Med hjälp av en [kompass](target:compass) eller linjal kan vi hitta en [punkt](target:a1) på den här linjen som har samma avstånd från rotationscentret som den ursprungliga punkten. _{button.next-step} Fortsätta_

{.r.reveal(when="next-3")} Nu måste vi upprepa dessa steg för alla andra vertikaler i vår form. _{button.next-step} Fortsätta_

{.reveal(when="next-4")} Och slutligen, som tidigare, kan vi ansluta de enskilda vertikalerna för att få den roterade bilden av vår ursprungliga form.

:::

---
> id: composition-1

Transformationer är ett viktigt begrepp i många delar av matematiken, inte bara geometri. Du kan till exempel transformera [_funktioner_](gloss:function) genom att flytta eller rotera deras [diagram](gloss:function-graph) . Du kan också använda transformationer för att avgöra om två former är [kongruenta](gloss:congruent) .

---

## Kongruens

> section: congruence
> sectionStatus: dev

TODO

---

## Symmetri

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Symmetri__](gloss:symmetry) finns överallt runt omkring oss och ett intuitivt koncept: olika delar av ett objekt ser _likadant ut_ på något sätt. Men med transformationer kan vi ge en mycket mer exakt, matematisk definition av vad symmetri _egentligen_ betyder:

{.definition} Ett objekt är _symmetriskt_ om det ser lika ut, även efter tillämpning av en viss transformation.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Vi kan reflektera denna fjäril, och den ser densamma ut efteråt. Vi säger att den har __reflektionssymmetri__ .

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Vi kan rotera denna blomma, och den ser densamma ut efteråt. Vi säger att den har __rotationssymmetri__ .

:::

---
> id: reflectional-symmetry

### Reflektionssymmetri

En form har [__reflektionssymmetri__](gloss:reflectional-symmetry) om den ser densamma ut efter [__reflektion__](gloss:reflectional-symmetry) . Reflektionslinjen kallas [__symmetriaxeln__](gloss:axis-of-symmetry) , och den delar formen i två [[kongruenta | likvärdig | liknande]] halvor. Vissa figurer kan också ha mer än en symmetriaxel.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Rita alla symmetriaxlar i dessa sex bilder och former:

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

{.caption} Denna form har [[2]] symmetriaxlar.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} En kvadrat har [[4]] symmetriaxlar.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Denna form har [[2]] symmetriaxlar.

:::

---
> id: alphabet

Många bokstäver i alfabetet har reflektionssymmetri. Välj alla som gör:

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

Här är några fler former. Slutför dem så att de har reflektionssymmetri:

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

Former, bokstäver och bilder kan ha reflektionssymmetri, men så kan hela siffror, ord och meningar!

Till exempel "25352" och "ANNA" läser båda samma från bakåt till framsidan. Siffror eller ord som detta kallas [__Palindromes__](gloss:palindrome) . Kan du tänka på några andra palindromer?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Om vi ignorerar mellanslag och skiljetecken, har de korta meningarna nedan också reflektionssymmetri. Kan du komma med dina egna?

{.text-center} Aldrig udda eller jämnt.
En [[mutter]] för en burk tonfisk.
Yo, banan [[boy!]]

{.reveal(when="blank-0 blank-1")} Men Palindromes är inte bara roliga, de har faktiskt praktisk betydelse. För några år sedan upptäckte forskare att delar av vårt [DNA](gloss:dna) är palindromiska. Detta gör dem mer motståndskraftiga mot mutationer eller skador - eftersom det finns en andra säkerhetskopia av varje bit.

---
> id: rotational-symmetry

### Rotationssymmetri

::: column.grow

En form har [__rotationssymmetri__](gloss:rotational-symmetry) om den ser densamma ut efter att ha roterats (med mindre än 360°). [Rotationscentrum](gloss:center-of-rotation) är vanligtvis bara mitten av formen.

[__Ordningen på symmetri__](gloss:order-of-symmetry) är antalet distinkta orienteringar där formen ser densamma ut. Du kan också tänka på det som _antalet gånger vi kan rotera formen_ innan vi kommer tillbaka till start. Till exempel har detta snöflinga ordning [[6]] .

{.reveal(when="blank-0")} Vinkeln för varje rotation är `"360°"/"order"` . I snöflingan är detta `"360°"/6 = input(60)°` .

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Hitta ordningen och rotationsvinkeln för var och en av dessa former:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Beställ [[4]] , vinkel [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Beställ [[2]] , vinkel [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Beställ [[8]] , vinkel [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Fyll nu i dessa former så att de har rotationssymmetri:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Beställ 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Beställ 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Beställ 4

:::

---

## Symmetri grupper och bakgrundsbilder

> id: groups
> section: symmetry-groups
> translated: auto

 Vissa former har mer än en symmetri - låt oss titta på [torget](gloss:square) som ett enkelt exempel.

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

Du har redan visat ovan att en fyrkant har [[fyra]] reflektionsaxlar.

{.reveal(when="blank-0")} Den har också rotationssymmetri med [[90]]°, [[180]]° och [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Och slutligen kan vi tänka på att ”göra ingenting” som en annan speciell typ av symmetri - för resultatet är (uppenbarligen) detsamma som tidigare. Detta kallas ibland __identiteten__ .

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Totalt har vi hittat [[8]] olika “symmetrier of the square”.

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Nu kan vi faktiskt börja göra lite aritmetik med dessa symmetrier. Vi kan till exempel _lägga till_ två symmetrier för att få nya:

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

När du lägger till två symmetrier på en kvadrat får du en ny. Här är en "symmetriskräknare" där du kan prova själv:

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

Spendera lite tid med att leka med symmeträknaren och försök hitta mönster. Kan du slutföra dessa observationer?

* Att lägga till två rotationer ger alltid [[en rotation | en reflektion]] (eller identiteten). * Att lägga till två reflektioner ger alltid [[en rotation | en reflektion]] (eller identiteten). * Att lägga till samma två symmetrier i motsatt ordning [[ger ibland en annan | ger alltid en annan | ger alltid samma]] resultat. * Att lägga till identiteten [[gör ingenting | ger en reflektion | ger motsatsen]] .

---
> id: group-axioms

Du kanske redan har insett att lägga till __{.orange} symmetrier__ liknar faktiskt mycket att lägga till __{.green} heltal__ :

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

I matematik kallas varje samling som har dessa egenskaper en [__grupp__](gloss:group) . Vissa grupper (som __{.orange} symmetrier__ av en kvadrat) har endast ett begränsat antal element. Andra (som __{.green} heltal__ ) är oändliga.

I det här exemplet började vi med de åtta symmetrierna på torget. Faktum är att varje geometrisk form har sin egen __symmetergrupp__ . De har alla olika element, men de uppfyller alltid de tre reglerna ovan.

Grupper visas överallt i matematik. Elementen kan vara siffror eller symmetrier, men också polynomier, permutationer, matriser, funktioner ... _allt_ som följer de tre reglerna. Den centrala idén med _gruppteori_ är att vi inte är intresserade av de enskilda elementen, bara i _hur de interagerar med varandra_ .

::: column.grow

Exempelvis kan symmeturgrupperna för olika molekyler hjälpa forskare att förutsäga och förklara egenskaperna hos motsvarande material.

Grupper kan också användas för att analysera den vinnande strategin i brädspel, uppförandet av virus i medicin, olika harmonier i musik och många andra begrepp ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Egenskaperna hos den CCl <sub>4-molekylen</sub> (vänster) och Adenovirus (höger) bestäms av deras symmetrier.

:::

---

### Tapetgrupper

> id: wallpaper-groups

I de [föregående avsnitten](/course/transformations/symmetry) såg vi två olika slags symmetri motsvarande två olika transformationer: rotationer och reflektioner. Men det finns också en symmetri för den tredje typen av styv transformation: [[översättningar | snurrar | vänder]] .

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Translational symmetry__](gloss:translational-symmetry) fungerar inte för isolerade föremål som blommor eller fjärilar, men det gör för vanliga mönster som sträcker sig i alla riktningar:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Hexagonal honyecomb

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Keramisk väggbeläggning

:::

---
> id: footsteps

Förutom reflektions-, rotations- och translationssymmetri finns det till och med en fjärde typ: [__glidreflektioner__](gloss:glide-reflection) . Detta är en kombination av en reflektion och en översättning i samma riktning som reflektionsaxeln.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Ett mönster kan ha mer än en typ av symmetri. Och precis som för rutor kan vi hitta [symmetrigruppen](gloss:symmetry-group) i ett mönster, som innehåller alla dess olika symmetrier.

Dessa grupper berättar inte så mycket om hur mönstret _ser_ ut (t.ex. dess färger och former), bara hur det _upprepas_ . Flera olika mönster kan ha samma symmeturgrupp - så länge är ordnade och upprepade på samma sätt.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Dessa två mönster har samma symmetrier, även om de ser väldigt olika ut. Men symmetrier handlar inte om färger eller ytliga former.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Dessa två mönster har också samma symmetrier - även om de ser mer ut som motsvarande mönster till vänster än varandra.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Det visar sig att även om det finns oändligt många möjliga mönster har de alla en av bara 17 olika symmeturgrupper. Dessa kallas __tapetgrupper__ . Varje tapetgrupp definieras av en kombination av översättningar, rotationer, reflektioner och glidreflektioner. Kan du se [rotationscentra](gloss:center-of-rotation) och [reflektionsaxlarna](gloss:axis-of-symmetry) i dessa exempel?

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

Tyvärr finns det ingen enkel anledning till att det finns _17_ av dessa grupper, och för att bevisa att det kräver mer avancerad matematik. Istället kan du prova att rita dina egna upprepade mönster för var och en av de 17 tapetgrupperna:


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

Tapetgrupperna handlade om platta, tvådimensionella mönster. Vi kan göra något liknande för tredimensionella mönster: dessa kallas kristallografiska grupper, och det finns 219 av dem!

Förutom översättningar, reflektioner, rotationer och glidreflektioner inkluderar dessa grupper symmetrier som __glidplan__ och __skruvaxlar__ (tänk på rörelsen när du skruvar av en flaska).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Boron-nitrid har sina molekyler arrangerade i detta kristallgitter, som har en tredimensionell symmeturgrupp.

:::

---

## Symmetri i fysik

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Hittills var alla symmetrier vi tittade på _visuella_ i någon mening: synliga former, bilder eller mönster. I själva verket kan symmetri vara ett mycket bredare begrepp: _immunitet mot förändring_ .

Till exempel, om du gillar äppeljuice lika mycket som du gillar apelsinjuice, är din preferens "symmetrisk" under omvandlingen som byter äpplen och apelsiner.

1915 observerade den tyska matematikern [Emmy Noether](bio:noether) att något liknande är sant för [naturlagarna](gloss:laws-of-nature) .

::: column.grow

Till exempel berättar vår erfarenhet att fysikens lagar är desamma överallt i universum. Det spelar ingen roll om du genomför ett experiment i London, eller i New York eller på Mars - fysikens lagar bör alltid vara desamma. På ett sätt har de [[translationell symmetri | reflektionssymmetri]] .

{.reveal(when="blank-0")} På samma sätt borde det inte göra någon roll om vi utför ett experiment när vi vetter mot nord, söder eller öst eller väst: naturlagarna har [[rotationssymmetri | glidreflektionssymmetri]] .

{.reveal(when="blank-1")} Och slutligen borde det inte betyda om vi genomför ett experiment idag, imorgon eller om ett år. Naturlagarna är ”tidssymmetriska”.

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Dessa ”symmetrier” kanske till en början verkar ganska meningslösa, men de kan faktiskt berätta mycket om vårt universum. Emmy Noether lyckades bevisa att varje symmetri motsvarar en viss fysisk mängd som _bevaras_ .

Tidsymmetri innebär till exempel att __energi__ måste bevaras i vårt universum: du kan konvertera energi från en typ till en annan (t.ex. ljus till elektricitet), men du kan aldrig skapa eller förstöra energi. Den totala mängden energi i universum kommer alltid att vara konstant.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Det visar sig att fysiker, bara genom att veta om symmetri, kan härleda de flesta naturlagar som styr vårt universum - utan att behöva göra något experiment eller observation.

Symmetri kan till och med förutsäga existensen av grundläggande partiklar. Ett exempel är den berömda __Higgs Boson__ : den förutsades på 1960-talet av teoretiska fysiker, men observerades inte i den verkliga världen förrän 2012.

:::

---

## utvidgningar

> id: dilations
> section: dilations
> translated: auto

Hittills har vi bara tittat på [[styva | kongruent | visuella]] transformationer. _{span.reveal(when="blank-0")} Låt oss nu tänka på en som inte är det: en [__utvidgning__](gloss:dilation) ändrar formens storlek genom att göra den större eller mindre._

---
> id: dilations-1

::: column.grow

Alla utvidgningar har ett [__centrum__](target:center) och en [__skalfaktor__](->.scale-target) . Mitten är referenspunkten för utvidgningen och skalfaktorn berättar hur mycket figuren sträcker sig eller krymper.

Om [skalfaktorn](gloss:scale-factor) är mellan 0 och 1 är bilden [[mindre | större]] än originalet. Om skalfaktorn är större än 1 är bilden [[större | mindre]] än originalet.

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

{.text-center.scale-target} Skalfaktor: ${s}{s|2|0,3,0.1}

:::

{.todo} Kommer snart - Mer om Dilations

---

## Likhet

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
