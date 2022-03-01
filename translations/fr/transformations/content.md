# Transformations et symétrie

## introduction

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

De nombreux concepts géométriques comme les [lignes](gloss:line) ou les [polygones](gloss:polygon) ont été «inventés» par les mathématiciens. La symétrie, en revanche, est partout autour de nous. Presque toutes les plantes, les animaux et même nous, les humains, sont symétriques.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Au fil du temps, nous avons imité la symétrie de la nature dans l'art, l'architecture, la technologie et le design. Les formes et les motifs symétriques semblent simplement _plus beaux_ que ceux non symétriques.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Mais la symétrie est beaucoup plus importante que la simple _beauté_ . Il est à la base même de notre univers et peut même expliquer les lois les plus fondamentales de la physique.

_{button.next-step} Continuer_

---
> id: transformations
> goals: t1 t2 t3

Bien que la symétrie soit un concept très intuitif, sa description mathématique est plus difficile que vous ne le pensez. Tout d'abord, nous devons en apprendre davantage sur les [__transformations__](gloss:transformation) , qui sont des moyens de convertir une figure géométrique en une autre. Voici quelques exemples:

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

Le résultat d'une transformation s'appelle l' [__image__](gloss:transformation-image) . On désigne souvent l'image d'une forme `A` comme `A'` , prononcé «A prime». Il existe de nombreux types de transformation différents, que nous explorerons plus en détail tout au long de ce cours.

---

## Transformations rigides

> id: rigid
> section: rigid
> translated: auto

Une [__transformation rigide__](gloss:rigid-transformation) est un type spécial de transformation qui ne change pas la taille ou la forme d'une figure. Nous pourrions imaginer qu'il est fait d'un matériau solide comme le bois ou le métal: nous pouvons le déplacer, le tourner ou le retourner, mais nous ne pouvons pas l'étirer, le plier ou le déformer.

Laquelle de ces cinq transformations est rigide?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Il s'avère qu'il n'y a que trois types différents de transformations rigides:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Une transformation qui _déplace_ simplement une forme s'appelle une [__translation__](gloss:translation) .

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Une transformation qui _retourne_ une forme est appelée une [__réflexion__](gloss:reflection) .

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Une transformation qui fait _tourner_ une forme est appelée [__rotation__](gloss:rotation) .

:::

---
> id: rigid-2

Nous pouvons également combiner plusieurs types de transformation pour en créer des plus complexes - par exemple, une translation suivie d'une rotation.

Mais d'abord, examinons plus en détail chacun de ces types de transformations.

---
> id: translations

### translations

Une [__translation__](gloss:translation) est une transformation qui déplace chaque point d'une figure de la même distance dans la même direction.

Dans le plan de coordonnées, nous pouvons spécifier une translation de la distance de déplacement de la forme le long de l'axe _x_ et de l'axe _y_ . Par exemple, une transformation de (3, 5) déplace une forme de 3 le long de l'axe _x_ et de 5 le long de l'axe _y_ .

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Traduit par ( [[5]] , [[1]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Traduit par ( [[-4]] , [[2]] )

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Traduit par ( [[4]] , [[-2]] )

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Maintenant, c'est votre tour - traduisez les formes suivantes comme indiqué:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Traduire par (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Traduire par (–4, –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Traduire par (5, –1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### Réflexions

Une [__réflexion__](gloss:reflection) est une transformation qui «retourne» ou «reflète» une forme sur une ligne. Cette ligne est appelée la __ligne de réflexion__ .

Tracez la ligne de réflexion dans chacun de ces exemples:

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

Maintenant, c'est votre tour - dessinez le reflet de chacune de ces formes:

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

Notez que si un point se trouve sur la ligne de réflexion, il [[ne bouge pas | tourne | bascule]] lorsqu'il est réfléchi: _{span.reveal(when="blank-0")} son image est le même point que l'original._

---
> id: reflections-3

Dans tous les exemples ci-dessus, la ligne de réflexion était horizontale, verticale ou à un angle de 45°, ce qui facilitait le dessin des réflexions. Si ce n'est pas le cas, la construction nécessite un peu plus de travail:

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

{.r} Pour refléter cette forme sur la [ligne de réflexion](target:refl) , nous devons réfléchir chaque [sommet](gloss:polygon-vertex) individuellement, puis les relier à nouveau. _{button.next-step} Continuer_

{.r.reveal(when="next-0")} Choisissons l'un des sommets et dessinons la ligne à travers ce sommet qui est perpendiculaire à la ligne de réflexion. _{button.next-step} Continuer_

{.r.reveal(when="next-1")} Maintenant, nous pouvons mesurer la [distance](target:d1) entre le sommet et la ligne de réflexion, et faire le point qui a la [même distance](target:d2) de l'autre côté. _{span.lgrey} (Nous pouvons utiliser une règle ou une [boussole](target:circ) pour ce faire.)_ _{button.next-step} Continuer_

{.r.reveal(when="next-2")} Nous pouvons faire de même pour tous les autres sommets de notre forme. _{button.next-step} Continuer_

{.r.reveal(when="next-3")} Il ne nous reste plus qu'à connecter les sommets réfléchis dans le bon ordre, et nous avons trouvé la réflexion!

:::

---
> id: rotations
> goals: r0 r1 r2

### Rotations

Une [__rotation__](gloss:rotation) est une transformation qui «transforme» une forme d'un certain angle autour d'un point fixe. Ce point est appelé le [__centre de rotation__](gloss:center-of-rotation) . Les rotations peuvent être dans le sens horaire ou antihoraire.

Essayez de faire pivoter les formes ci-dessous autour du centre de rotation rouge:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Tournez de 90° dans le sens des aiguilles d'une montre.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Tournez de 180°.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Tournez de 90° dans le sens inverse des aiguilles d'une montre.

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

Il est plus difficile de dessiner des rotations qui ne sont pas exactement à 90° ou 180°. Essayons de faire pivoter cette forme en ${10*ang}{ang|6|-18,18,1}° autour du [centre de rotation](target:rot) .

{.r} Comme pour les réflexions, nous devons faire pivoter chaque point d'une forme individuellement. _{button.next-step} Continuer_

{.r.reveal(when="next-0")} Nous commençons par choisir l'un des sommets et tracer une ligne au centre de rotation. _{button.next-step} Continuer_

{.r.reveal(when="next-1")} En utilisant un [rapporteur](target:protractor) , nous pouvons mesurer un [angle de ${ang*10}°](target:angle) autour du centre de rotation. Tirons une [deuxième ligne](target:l2) à cet angle. _{button.next-step} Continuer_

{.r.reveal(when="next-2")} En utilisant une [boussole](target:compass) ou une règle, nous pouvons trouver un [point](target:a1) sur cette ligne qui a la même distance du centre de rotation que le point d'origine. _{button.next-step} Continuer_

{.r.reveal(when="next-3")} Nous devons maintenant répéter ces étapes pour tous les autres sommets de notre forme. _{button.next-step} Continuer_

{.reveal(when="next-4")} Et enfin, comme précédemment, nous pouvons connecter les sommets individuels pour obtenir l'image pivotée de notre forme d'origine.

:::

---
> id: composition-1

Les transformations sont un concept important dans de nombreuses parties des mathématiques, pas seulement la géométrie. Par exemple, vous pouvez transformer des [_fonctions_](gloss:function) en déplaçant ou en faisant pivoter leurs [graphiques](gloss:function-graph) . Vous pouvez également utiliser des transformations pour déterminer si deux formes sont [congruentes](gloss:congruent) .

---

## Congruence

> section: congruence
> sectionStatus: dev

TODO

---

## Symétrie

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

La [__symétrie__](gloss:symmetry) est partout autour de nous, et un concept intuitif: les différentes parties d'un regard d'objet _même_ d' une certaine façon. Mais en utilisant des transformations, nous pouvons donner une définition mathématique beaucoup plus précise de ce que signifie _réellement la_ symétrie:

{.definition} Un objet est _symétrique_ s'il a la même apparence, même après avoir appliqué une certaine transformation.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Nous pouvons refléter ce papillon, et il a la même apparence après. Nous disons qu'il a __une symétrie réflexionnelle__ .

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Nous pouvons faire pivoter cette fleur, et elle aura la même apparence par la suite. Nous disons qu'il a __une symétrie de rotation__ .

:::

---
> id: reflectional-symmetry

### Symétrie réflexive

Une forme a [__une symétrie de réflexion__](gloss:reflectional-symmetry) si elle a la même apparence après avoir été réfléchie. La ligne de réflexion est appelée l' [__axe de symétrie__](gloss:axis-of-symmetry) , et elle divise la forme en deux [[congruentes | égal |]] moitiés [[similaires]] . Certaines figures peuvent également avoir plusieurs axes de symétrie.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Dessinez tous les axes de symétrie dans ces six images et formes:

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

{.caption} Cette forme a [[2]] axes de symétrie.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Un carré a [[4]] axes de symétrie.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Cette forme a [[2]] axes de symétrie.

:::

---
> id: alphabet

De nombreuses lettres de l'alphabet ont une symétrie de réflexion. Sélectionnez tous ceux qui le font:

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

Voici d'autres formes. Complétez-les pour qu'ils aient une symétrie de réflexion:

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

Les formes, les lettres et les images peuvent avoir une symétrie de réflexion, tout comme les nombres entiers, les mots et les phrases!

Par exemple, «25352» et «ANNA» lisent tous les deux la même chose de l'arrière vers l'avant. Des nombres ou des mots comme celui-ci sont appelés [__Palindromes__](gloss:palindrome) . Pouvez-vous penser à d'autres palindromes?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Si nous ignorons les espaces et la ponctuation, les phrases courtes ci-dessous ont également une symétrie de réflexion. Pouvez-vous créer le vôtre?

{.text-center} Jamais impair ou pair.
Une [[noix]] pour un pot de thon.
Yo, banane [[garçon!]]

{.reveal(when="blank-0 blank-1")} Mais les palindromes ne sont pas seulement amusants, ils ont en fait une importance pratique. Il y a quelques années, les scientifiques ont découvert que certaines parties de notre [ADN](gloss:dna) sont palindromiques. Cela les rend plus résistants aux mutations ou aux dommages - car il existe une deuxième copie de sauvegarde de chaque pièce.

---
> id: rotational-symmetry

### Une symétrie de rotation

::: column.grow

Une forme a [__une symétrie de rotation__](gloss:rotational-symmetry) si elle a la même apparence après avoir été tournée (de moins de 360°). Le [centre de rotation](gloss:center-of-rotation) est généralement juste au milieu de la forme.

L' [__ordre de symétrie__](gloss:order-of-symmetry) est le nombre d'orientations distinctes dans lesquelles la forme est identique. Vous pouvez également y penser comme le _nombre de fois que nous pouvons faire pivoter la forme_ , avant de revenir au début. Par exemple, ce flocon de neige a l'ordre [[6]] .

{.reveal(when="blank-0")} L'angle de chaque rotation est `"360°"/"order"` . Dans le flocon de neige, c'est `"360°"/6 = input(60)°` .

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Trouvez l'ordre et l'angle de rotation pour chacune de ces formes:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Ordre [[4]] , angle [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Ordre [[2]] , angle [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Ordre [[8]] , angle [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Complétez maintenant ces formes, afin qu'elles aient une symétrie de rotation:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Ordre 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Ordre 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Ordre 4

:::

---

## Groupes de symétrie et fonds d'écran

> id: groups
> section: symmetry-groups
> translated: auto

 Certaines formes ont plus d'une symétrie - jetons un œil au [carré](gloss:square) comme exemple simple.

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

Vous avez déjà montré ci-dessus qu'un carré a [[4]] axes de réflexion.

{.reveal(when="blank-0")} Il présente également une symétrie de rotation de [[90]]°, [[180]]° et [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Et enfin, nous pouvons penser à «ne rien faire» comme un autre type particulier de symétrie - parce que le résultat est (évidemment) le même qu'avant. C'est ce qu'on appelle parfois l' __identité__ .

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Au total, nous avons trouvé [[8]] différentes «symétries du carré».

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Maintenant, nous pouvons réellement commencer à faire de l'arithmétique avec ces symétries. Par exemple, nous pouvons _ajouter_ deux symétries pour en obtenir de nouvelles:

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

Chaque fois que vous ajoutez deux symétries d'un carré, vous en obtenez une nouvelle. Voici un "calculateur de symétrie" où vous pouvez l'essayer vous-même:

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

Passez du temps à jouer avec la calculatrice de symétrie et essayez de trouver des motifs. Pouvez-vous compléter ces observations?

* Ajouter deux rotations donnera toujours [[une rotation | une réflexion]] (ou l'identité). * L'ajout de deux réflexions donnera toujours [[une rotation | une réflexion]] (ou l'identité). * L'ajout des deux mêmes symétries dans l'ordre opposé [[donne parfois un résultat différent | donne toujours un autre | donne toujours le même]] résultat. * L'ajout de l'identité [[ne fait rien | renvoie une réflexion | renvoie le contraire]] .

---
> id: group-axioms

Vous vous êtes peut-être déjà rendu compte que l'ajout __{.orange} symétries__ est en fait très similaire à l'ajout __{.green} entiers__ :

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

En mathématiques, toute collection possédant ces propriétés est appelée un [__groupe__](gloss:group) . Certains groupes (comme le __{.orange} symétries__ d'un carré) n'ont qu'un nombre fini d'éléments. D'autres (comme le __{.green} entiers__ ) sont infinis.

Dans cet exemple, nous avons commencé avec les huit symétries du carré. En fait, chaque forme géométrique possède son propre __groupe de symétrie__ . Ils ont tous des éléments différents, mais ils satisfont toujours aux trois règles ci-dessus.

Les groupes apparaissent partout en mathématiques. Les éléments peuvent être des nombres ou des symétries, mais aussi des polynômes, permutations, matrices, fonctions… _tout ce_ qui obéit aux trois règles. L'idée clé de la _théorie des groupes_ est que nous ne nous intéressons pas aux éléments individuels, juste à la _façon dont ils interagissent les uns avec les autres_ .

::: column.grow

Par exemple, les groupes de symétrie de différentes molécules peuvent aider les scientifiques à prédire et expliquer les propriétés des matériaux correspondants.

Les groupes peuvent également être utilisés pour analyser la stratégie gagnante dans les jeux de société, le comportement des virus en médecine, les différentes harmonies musicales et bien d'autres concepts…

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Les propriétés de la molécule CCl <sub>4</sub> (à gauche) et de l'adénovirus (à droite) sont déterminées par leurs symétries.

:::

---

### Groupes de papiers peints

> id: wallpaper-groups

Dans les [sections précédentes,](/course/transformations/symmetry) nous avons vu deux types de symétrie différents correspondant à deux transformations différentes: les rotations et les réflexions. Mais il y a aussi une symétrie pour le troisième type de transformation rigide: les [[translations | tourne | retourne]] .

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__La symétrie translationnelle__](gloss:translational-symmetry) ne fonctionne pas pour les objets isolés comme les fleurs ou les papillons, mais elle le fait pour les motifs réguliers qui s'étendent dans toutes les directions:

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

{.caption} Carrelage mural en céramique

:::

---
> id: footsteps

En plus de la symétrie réflexionnelle, rotationnelle et translationnelle, il existe même un quatrième type: les [__réflexions de glissement__](gloss:glide-reflection) . Il s'agit d'une combinaison d'une réflexion et d'une translation dans le même sens que l'axe de réflexion.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Un motif peut avoir plusieurs types de symétrie. Et tout comme pour les carrés, nous pouvons trouver le [groupe](gloss:symmetry-group) de [symétrie](gloss:symmetry-group) d'un motif, qui contient toutes ses différentes symétries.

Ces groupes ne vous disent pas grand-chose à quoi _ressemble_ le motif (par exemple ses couleurs et ses formes), juste comment il est _répété_ . Plusieurs motifs différents peuvent avoir le même groupe de symétrie - tant qu'ils sont organisés et répétés de la même manière.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ces deux motifs ont les mêmes symétries, même s'ils sont très différents. Mais les symétries ne concernent pas les couleurs ou les formes superficielles.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Ces deux motifs ont également les mêmes symétries - même s'ils se ressemblent plus aux motifs correspondants à gauche qu'entre eux.

:::

---
> id: wallpaper-groups-3
> goals: gallery

Il s'avère que, bien qu'il existe une infinité de modèles possibles, ils ont tous l'un des 17 groupes de symétrie différents. Ceux-ci sont appelés les __groupes de papier peint__ . Chaque groupe de papier peint est défini par une combinaison de translations, rotations, réflexions et réflexions de glissement. Pouvez-vous voir les [centres de rotation](gloss:center-of-rotation) et les [axes de réflexion](gloss:axis-of-symmetry) dans ces exemples?

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

Malheureusement, il n'y a pas de raison simple pour laquelle il y a _17_ de ces groupes, et prouver qu'il nécessite des mathématiques plus avancées. Au lieu de cela, vous pouvez essayer de dessiner vos propres motifs répétés pour chacun des 17 groupes de fonds d'écran:


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

Les groupes de papier peint étaient tous sur des motifs plats et bidimensionnels. Nous pouvons faire quelque chose de similaire pour les modèles tridimensionnels: ceux-ci sont appelés groupes cristallographiques, et il y en a 219!

En plus des translations, des réflexions, des rotations et des réflexions de glissement, ces groupes incluent des symétries comme __des plans de glissement__ et __des axes de vis__ (pensez au mouvement lorsque vous dévissez une bouteille).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Le nitrure de bore a ses molécules disposées dans ce réseau cristallin, qui a un groupe de symétrie en trois dimensions.

:::

---

## Symétrie en physique

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

Jusqu'à présent, toutes les symétries que nous avons examinées étaient _visuelles_ dans un certain sens: formes, images ou motifs visibles. En fait, la symétrie peut être un concept beaucoup plus large: l' _immunité au changement_ .

Par exemple, si vous aimez autant le jus de pomme que le jus d'orange, votre préférence est «symétrique» sous la transformation qui permute les pommes et les oranges.

En 1915, le mathématicien allemand [Emmy Noether a](bio:noether) observé que quelque chose de similaire est vrai pour les [lois de la nature](gloss:laws-of-nature) .

::: column.grow

Par exemple, notre expérience nous dit que les lois de la physique sont les mêmes partout dans l'univers. Peu importe que vous meniez une expérience à Londres, à New York ou sur Mars - les lois de la physique devraient toujours être les mêmes. D'une certaine manière, ils ont une [[symétrie translationnelle | symétrie réflexionnelle]] .

{.reveal(when="blank-0")} De même, peu importe que nous menions une expérience face au Nord, au Sud, à l'Est ou à l'Ouest: les lois de la nature ont [[une symétrie de rotation | glisser la symétrie de réflexion]] .

{.reveal(when="blank-1")} Et enfin, peu importe que nous menions une expérience aujourd'hui, ou demain, ou dans un an. Les lois de la nature sont «symétriques dans le temps».

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Ces «symétries» peuvent initialement sembler tout à fait dénuées de sens, mais elles peuvent en fait nous en dire beaucoup sur notre univers. Emmy Noether a réussi à prouver que chaque symétrie correspond à une certaine quantité physique qui est _conservée_ .

Par exemple, la symétrie temporelle implique que l' __énergie__ doit être conservée dans notre univers: vous pouvez convertir l'énergie d'un type à un autre (par exemple la lumière en électricité), mais vous ne pouvez jamais créer ou détruire d'énergie. La quantité totale d'énergie dans l'univers restera toujours constante.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Il s'avère que, simplement en connaissant la symétrie, les physiciens peuvent dériver la plupart des lois de la nature qui régissent notre univers - sans jamais avoir à faire une expérience ou une observation.

La symétrie peut même prédire l'existence de particules fondamentales. Un exemple est le célèbre __Higgs Boson__ : il a été prédit dans les années 1960 par des physiciens théoriciens, mais n'a été observé dans le monde réel qu'en 2012.

:::

---

## Dilatations

> id: dilations
> section: dilations
> translated: auto

Jusqu'à présent, nous venons de regarder [[rigide | conforme |]] transformations [[visuelles]] . _{span.reveal(when="blank-0")} Maintenant, réfléchissons à une autre: une [__dilatation__](gloss:dilation) change la taille d'une forme en l'agrandissant ou en la diminuant._

---
> id: dilations-1

::: column.grow

Toutes les dilatations ont un [__centre__](target:center) et un [__facteur d'échelle__](->.scale-target) . Le centre est le point de référence pour la dilatation et le facteur d'échelle nous indique dans quelle mesure la figure s'étire ou rétrécit.

Si le [facteur d'échelle](gloss:scale-factor) est compris entre 0 et 1, l'image est [[plus petite | plus grand]] que l'original. Si le facteur d'échelle est supérieur à 1, l'image est [[plus grande | plus petit]] que l'original.

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

{.text-center.scale-target} Facteur d'échelle: ${s}{s|2|0,3,0.1}

:::

{.todo} À VENIR - Plus d'informations sur les dilatations

---

## Similarité

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
