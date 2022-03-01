# Polygones et polyèdres

## Des polygones

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

Un [__polygone__](gloss:polygon) est une forme plate fermée qui n'a que des côtés droits. Les polygones peuvent avoir un nombre illimité de côtés et d'angles, mais les côtés ne peuvent pas être incurvés. Lesquelles des formes ci-dessous sont des polygones?

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

    x-gesture(target="#item1")

---
> id: polygons-1

Nous donnons des noms différents aux polygones, selon le nombre de côtés qu'ils ont:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangle]#[br]3 sides
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilateral]#[br]4 sides
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 sides
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 sides
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 sides
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octagon]#[br]8 sides

---
> id: angles-0

### Angles dans les polygones

Chaque polygone à _n_ côtés a également _n_ [angles internes](gloss:internal-angle) . Nous savons déjà que la somme des angles internes dans un triangle est toujours de [[180]]° mais qu'en est-il des autres polygones?

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ + _{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ + _{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ = _{x-anibutton(text="???")}_

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ + _{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ + _{span.circled.yellow}${a2[3]}°_ + _{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ = _{x-anibutton(text="???")}_

:::

---
> id: angles-1

Il semble que la somme des angles internes dans un quadrilatère soit toujours à [[360]]° - exactement [[deux fois | trois fois | la moitié de]] la somme des angles dans un triangle. _{span.reveal(when="blank-0 blank-1")} Ce n'est pas un hasard: chaque quadrilatère peut être divisé en deux triangles._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Il en va de même pour les polygones plus grands. Nous pouvons diviser un pentagone en [[3]] triangles, de sorte que sa somme d'angle interne est `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Et nous pouvons diviser un hexagone en [[4]] triangles, de sorte que sa somme d'angle interne est `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Un polygone avec ${x}{x|7|3,15,1} les côtés auront une somme d'angle interne de 180° × ${x-2} = ${(x-2)*180}°. Plus généralement, un polygone à _n_ côtés peut être divisé en [[n - 2 | n - 1 | n]] triangles. Par conséquent,

{.text-center.reveal(when="blank-0")} Somme des angles internes dans un _n_ -gon `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Polygones convexes et concaves

::: column.grow

Nous disons qu'un polygone est [__concave__](gloss:concave) s'il a une section qui «pointe vers l'intérieur». Vous pouvez imaginer que cette partie a [«cédé»](target:cave) . Les polygones qui _ne_ sont _pas_ concaves sont appelés [__convexes__](gloss:convex) .

Il existe deux façons d'identifier facilement les polygones concaves: ils ont au moins un [angle interne supérieur à 180°](target:angle) . Ils ont également au moins une [diagonale située en _dehors_ du polygone](target:diagonal) .

Dans les polygones convexes, en revanche, tous les angles internes sont inférieurs à [[180]]°, et toutes les diagonales se trouvent à l' [[intérieur | en dehors]] du polygone.

::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")

:::

---
> id: concave-1

Lesquels de ces polygones sont concaves?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Polygones réguliers

Nous disons qu'un polygone est [__régulier__](gloss:regular-polygon) si tous ses côtés ont la même longueur et tous les angles ont la même taille. Lesquelles de ces formes sont des polygones réguliers?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Les polygones réguliers peuvent avoir de nombreuses tailles différentes - mais tous les polygones réguliers avec le même nombre de côtés [[sont similaires | sont congruents | avoir la même zone]] !

---
> id: regular-2

Nous connaissons déjà la somme de tous [les angles internes](gloss:internal-angle) dans les polygones. Pour les polygones réguliers, tous ces angles ont [[la même taille | sont des angles alternés]] , nous pouvons donc calculer la taille d'un seul angle interne:

{.text-center.reveal(when="blank-0")} angle = <mfrac><mrow>[[somme de tous les angles | nombre d'angles]]</mrow><mrow>[[nombre d'angles | somme de tous les angles]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} Si `n=3` nous obtenons la taille des angles internes d'un triangle équilatéral - nous savons déjà qu'il doit être de [[60]]°. _{span.reveal(when="blank-3")} Dans un polygone régulier avec ${x}{x|6|3,12,1} côtés, chaque angle interne est de 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### L'aire des polygones réguliers

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)

      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow

Ici vous pouvez voir un [polygone régulier](gloss:regular-polygon) avec ${n}{n|5|4,12,1} côtés. Chaque côté a une longueur [{.pill.green} 1m](target:base) . Essayons de calculer sa superficie!

Tout d'abord, nous pouvons diviser le polygone en ${toWord(n)} congruente, [[isocèle | équilatéral |]] triangles [[à angle droit.]]

{.reveal(when="blank-0")} Nous connaissons déjà la [[base | la taille | zone]] de ces triangles, mais nous avons également besoin de la [[hauteur | jambes | médianes]] pour pouvoir calculer sa superficie. _{span.reveal(when="blank-2")} Dans les polygones réguliers, cette hauteur est parfois appelée [{.pill.yellow} apothème](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Notez qu'il y a un [triangle rectangle](target:right-triangle) formé par l'apothème et la moitié de la base du triangle isocèle. Cela signifie que nous pouvons utiliser la trigonométrie!

{.reveal(when="blank-1 blank-2" delay=2000)} le [{.pill.blue} les angles](target:base-angle) de [base](target:base-angle) du triangle isocèle (appelons-les α) sont la [[moitié de la | le même | deux fois la]] taille des [angles internes](target:int-angle) du polygone:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Pour trouver l'apothème, on peut utiliser la définition des [[tangentes | sinus | cosinus]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Maintenant, l'aire du [triangle isocèle](target:isosceles-triangle) est

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Le polygone se compose de ${toWord(n)} de ces triangles isocèles, qui ont tous la même aire. Par conséquent, l'aire totale du polygone est

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Quadrilatères

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

Dans le [cours précédent,](/course/triangles) nous avons étudié de nombreuses propriétés différentes des triangles. Voyons maintenant les quadrilatères.

Un _quadrilatère régulier_ est appelé un [[carré | rectangle | quadrilatère équilatéral]] . Tous ses côtés ont la même longueur et tous ses angles sont égaux.

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} Un __carré__ est un quadrilatère avec [quatre côtés égaux](target:side) et [quatre angles égaux](target:angle) .

:::

---
> id: quadrilaterals-1

Pour les quadrilatères légèrement «moins réguliers», nous avons deux options. Si nous voulons juste que les _angles_ soient égaux, nous obtenons un [__rectangle__](gloss:rectangle) . Si nous voulons juste que les _côtés_ soient égaux, nous obtenons un [__losange__](gloss:rhombus) .

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} Un __rectangle__ est un quadrilatère avec [quatre angles égaux](target:angle) .

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} Un __losange__ est un quadrilatère à [quatre côtés égaux](target:side) .

:::

---
> id: quadrilaterals-2

Il existe quelques autres quadrilatères, qui sont encore moins réguliers mais qui ont quand même certaines propriétés importantes:

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption} Si les deux paires de côtés _opposés_ sont [parallèles](gloss:parallel) , nous obtenons un __parallélogramme__ .

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption} Si deux paires de côtés _adjacents_ ont la même longueur, nous obtenons un __cerf__ - __volant__ .

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption} Si au moins une paire de côtés opposés est parallèle, nous obtenons un __trapèze__ .

:::

---
> id: quadrilaterals-venn

Les quadrilatères peuvent appartenir à plusieurs de ces catégories. Nous pouvons visualiser la hiérarchie des différents types de quadrilatères sous forme de [diagramme de Venn](gloss:venn-diagram) :

    figure: include svg/venn.svg

Par exemple, chaque rectangle est également un [[parallélogramme | rhombe | carré]] , et chaque [[losange | trapèze | le parallélogramme]] est également un cerf-volant. Un losange est [[parfois | toujours | jamais]] un carré et un rectangle est [[toujours | quelquefois | jamais]] un trapèze.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Pour éviter toute ambiguïté, nous utilisons généralement uniquement le type le plus spécifique.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Choisissez maintenant quatre points, n'importe où dans la case grise à gauche. _{span.reveal(when="points")} Nous pouvons les connecter tous pour former un quadrilatère._

{.reveal(when="points" delay=1000)} Trouvons le milieu de chacun des quatre côtés. Si nous connectons les points médians, nous obtenons [[un autre quadrilatère | un triangle | un rectangle]] .

{.reveal(when="blank-0")} Essayez de déplacer les sommets du quadrilatère externe et observez ce qui arrive au plus petit. Il semble que ce ne soit pas n'importe _quel_ quadrilatère, mais toujours un [[parallélogramme | trapèze | rectangle]] !

{.reveal(when="blank-1")} Mais pourquoi est-ce le cas? Pourquoi le résultat d' _un_ quadrilatère devrait-il toujours être un parallélogramme? Pour nous aider à expliquer, nous devons dessiner l'une des [diagonales](gloss:polygon-diagonal) du quadrilatère d'origine.

{.reveal(when="diagonal")} La diagonale divise le quadrilatère en [deux triangles](target:triangle) . Et maintenant, vous pouvez voir que [deux des côtés](target:midsegment) du quadrilatère interne sont en fait des [[segments médians | médianes | bissectrices perpendiculaires]] de ces triangles.

{.reveal(when="blank-2")} Dans le [cours précédent,](/course/triangles/properties) nous avons montré que les [segments médians](gloss:triangle-midsegment) d'un triangle sont toujours parallèles à sa base. Dans ce cas, cela signifie que [ces deux côtés](target:parallel) sont parallèles à la diagonale - ils doivent donc également être [[parallèles l'un à l'autre | la même longueur | perpendiculaires les uns aux autres]] .

{.reveal(when="blank-3" delay=2000)} On peut faire exactement la même chose avec la [deuxième diagonale](target:other) du quadrilatère, pour montrer que les deux paires de côtés opposés sont parallèles. Et c'est tout ce dont nous avons besoin pour prouver que le quadrilatère interne est un [parallélogramme](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### Parallélogrammes

Il s'avère que les parallélogrammes ont de nombreuses autres propriétés intéressantes, autres que les côtés opposés étant parallèles. Lesquelles des six affirmations suivantes sont vraies?

::: column.grow

    x-picker.list
      .item.md The opposite sides are [congruent](gloss:congruent).
      .item(data-error="parall-error-1") The internal angles are always less than 90°.
      .item.md(data-error="parall-error-2") The diagonals [bisect](gloss:angle-bisector) the internal angles.
      .item The opposite angles are congruent.
      .item(data-error="parall-error-3") Both diagonals are congruent.
      .item(data-error="parall-error-4") Adjacent sides have the same length
      .item The two diagonals bisect each other in the middle.

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")

      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

Bien sûr, simplement «observer» ces propriétés ne suffit pas. Pour être sûrs qu'ils sont _toujours_ vrais, nous devons les _prouver_ :

::: tab

#### Côtés et angles opposés _{span.check(when="diagonal blank-0 blank-1")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")

      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")

      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow

{.task} Essayons de prouver que les côtés et les angles opposés dans un parallélogramme sont toujours congruents.

Commencez par dessiner l'une des diagonales du parallélogramme.

{.reveal(when="diagonal")} La diagonale crée quatre nouveaux angles avec les côtés du parallélogramme. Les deux [angles rouges](target:red-angle) et les deux [angles bleus](target:blue-angle) sont [des angles alternés](gloss:alternate-angles) , donc ils doivent chacun être [[congruents | adjacent | supplémentaire]] .

{.reveal(when="blank-0")} Maintenant, si nous regardons les [deux triangles](target:triangles) créés par la diagonale, nous voyons qu'ils ont deux angles congrus et [un côté congru](target:diagonal) . Par l' [[ASA | AAS |]] Condition de congruence [[AA]] , les deux triangles doivent être congruents.

{.reveal(when="blank-1")} Cela signifie que les autres parties correspondantes des triangles doivent également être congruentes: en particulier, les deux [paires de côtés opposés](target:sides) sont congruentes et les deux [paires d'angles opposés](target:angles) sont congruentes. _{span.qed}_

:::

{.reveal(when="blank-1")} Il s'avère que l'inverse est également vrai: si les deux paires de côtés (ou angles) opposés dans un quadrilatère sont congruentes, alors le quadrilatère doit être un parallélogramme.

::: tab

#### Diagonales _{span.check(when="diagonal blank-2 blank-3")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")

      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")

      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")

      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")

      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow

{.task} Maintenant, prouvez que les deux diagonales d'un parallélogramme se coupent en deux.

Pensons aux deux triangles jaunes générés par les diagonales:

* Nous venons de prouver que les [deux côtés verts](target:side1) sont congruents, car ce sont des côtés opposés d'un parallélogramme. * Les [deux angles rouges](target:anglesR) et les [deux angles bleus](target:anglesB) sont congruents, car ce sont [[des angles alternés | angles opposés | angles droits]] .

{.reveal(when="blank-2")} Par l' [[ASA | SSS |]] Condition [[AAS]] , les deux triangles jaunes doivent donc également être congruents.

{.reveal(when="blank-3")} Maintenant, nous pouvons utiliser le fait que les parties correspondantes des triangles congrus sont également congruentes, pour conclure que [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) et [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . En d'autres termes, les deux diagonales se croisent à leur milieu. _{span.qed}_

:::

{.reveal(when="blank-3")} Comme précédemment, l'inverse est également vrai: si les deux diagonales d'un quadrilatère se coupent en deux, alors le quadrilatère est un parallélogramme.

:::

---
> id: kites

### Cerfs-volants

::: column.grow

Nous avons montré ci-dessus que les deux paires d' [[opposés | les]] côtés [[adjacents]] d'un parallélogramme sont congruents. Dans un cerf-volant, deux paires de côtés _adjacents_ sont congruentes.

Le nom _Kite_ vient clairement de sa forme: il ressemble aux cerfs-volants que vous pouvez voler dans le ciel. Cependant, de tous les quadrilatères spéciaux que nous avons vus jusqu'à présent, le cerf-volant est le seul qui peut également être [concave](gloss:concave) : s'il a la forme d'une fléchette ou d'une flèche:

::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} Un cerf-volant convexe

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} Un cerf-volant concave qui ressemble à une flèche

:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")

      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")

      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")

      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")

      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow

Vous avez peut-être remarqué que tous les cerfs-volants sont [[symétriques | similaire]] . _{span.reveal(when="blank-0")} L' [axe de symétrie](gloss:axis-of-symmetry) est l' [[une des diagonales | un des côtés | un segment intermédiaire]] ._

{.reveal.r(when="blank-1")} La diagonale divise le cerf-volant en [deux triangles congrus](target:triangle1) . Nous savons qu'ils sont congruents à partir de la condition [SSS](gloss:triangle-sss) : les deux triangles ont [trois côtés congruents](target:sss) (rouge, vert et bleu). _{button.next-step} Continuer_

{.reveal.r(when="next-0")} En utilisant [CPOCT](gloss:cpoct) , nous savons donc que les [angles correspondants](target:angles) doivent également être congruents. _{button.next-step} Continuer_

{.reveal.r(when="next-1")} Cela signifie, par exemple, que la [diagonale](target:d1) est une [[bissectrice | perpendiculaire | médiane]] des [deux angles](target:vAngle) à ses extrémités. _{button.next-step} Continuer_

{.reveal.r(when="next-2")} Nous pouvons aller encore plus loin: si nous dessinons l'autre diagonale, nous obtenons [deux triangles plus petits](target:triangle2) . Celles-ci doivent également être congruentes, en raison de la condition [SAS](gloss:triangle-sss) : elles ont les [deux](target:sas) mêmes [côtés et l'angle inclus](target:sas) . _{button.next-step} Continuer_

{.reveal(when="next-3")} Cela signifie que l' [angle α](target:alpha) doit également être le même que l' [angle β](target:beta) . Puisqu'ils sont adjacents, [les angles supplémentaires](gloss:supplementary-angles) α et β doivent être de [[90]]°.

{.reveal(when="blank-3")} En d'autres termes, les diagonales d'un cerf-volant sont toujours [[perpendiculaires | parallèle]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Zone de quadrilatères

Lors du calcul de l'aire des triangles dans le cours précédent, nous avons utilisé l'astuce de la convertir en [[rectangle | carré | pentagone]] . Il s'avère que nous pouvons également le faire pour certains quadrilatères:

::: tab

#### Parallélogramme _{span.check(when="draw-1 blank-1")}_

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.red.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow

Sur la gauche, essayez de dessiner un rectangle qui a la même zone que le parallélogramme.

{.reveal(when="draw-1")} Pouvez-vous voir que le [triangle manquant](target:triangle-1) à gauche est [[exactement le même que | plus petit que | plus grand que]] le [triangle se chevauchant](target:triangle-2) à droite? _{span.reveal(when="blank-1")} Par conséquent, l'aire d'un parallélogramme est_

{.text-center.reveal(when="blank-1")} Zone = __{.i.m-green} base__ × __{.i.m-yellow} la taille__

{.reveal(when="blank-1" delay=1000)} _Soyez prudent lorsque vous mesurez la hauteur d'un parallélogramme: ce n'est généralement pas la même chose que l'un des deux côtés._

:::

::: tab

#### Trapèze _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Rappelons que les trapèzes sont des quadrilatères avec une paire de [côtés parallèles](target:bases) . Ces côtés parallèles sont appelés les __bases__ du trapèze.

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow

Comme précédemment, essayez de dessiner un rectangle qui a la même surface que ce trapèze. _{span.reveal(when="draw-2")} Pouvez-vous voir comment les [triangles manquants et ajoutés](target:triangles-3) à gauche et à droite s'annulent?_

{.reveal(when="draw-2" delay=2000)} le [{.pill.green} la hauteur](target:t-height) de ce rectangle est la [[distance entre | moyenne de | longueur des]] [côtés parallèles](target:bases) du trapèze.

{.reveal.r(when="blank-2")} le [{.pill.yellow} la largeur](target:t-width) du rectangle est la distance entre les [[points médians | extrémités]] des deux côtés non parallèles du trapèze. _{span.reveal(when="blank-3")} C'est ce qu'on appelle le __segment médian__ du trapèze._ _{button.next-step.reveal(when="blank-3")} Continuer_

{.reveal(when="next-0")} Comme pour les [triangles](gloss:triangle-midsegment) , le segment médian d'un trapèze est [[parallèle à | perpendiculaire à | la même longueur que]] ses deux bases. La longueur du segment médian est la moyenne des longueurs des bases: `(a+c)/2` .

{.reveal(when="blank-4")} Si nous combinons tout cela, nous obtenons une équation pour l'aire d'un trapèze avec les côtés parallèles [_a_](target:base-2) et [_c_](target:base-1) , et la hauteur [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Cerf-volant _{span.check(when="blank-5")}_

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")

      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")

      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")

      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow

Dans ce cerf-volant, les [deux diagonales](target:diag3) forment la largeur et la hauteur d'un grand [rectangle](target:rect4) qui entoure le cerf-volant.

L'aire de ce rectangle est [[deux fois | le même que | trois fois]] la surface du cerf-volant. _{span.reveal(when="blank-5")} Pouvez-vous voir comment chacun des [quatre triangles](target:inside) qui composent le cerf-volant est le même que les [quatre espaces à l'](target:outside) extérieur?_

{.reveal(when="blank-5")} Cela signifie que la zone d'un cerf-volant avec des diagonales [{.i.pill.green} d1](target:d31) et [{.i.pill.yellow} d2](target:d32) est

{.text-center.reveal(when="blank-5")} _Zone_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### Rhombe _{span.check(when="blank-6 blank-7")}_

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")

      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")

      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")

      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow

Un [losange](gloss:rhombus) est un quadrilatère qui a quatre côtés congruents. Vous vous souvenez peut-être que chaque losange est un [[parallélogramme | rectangle | carré]] - et aussi un [[cerf]] - [[volant | hexagone | polygone concave]] .

{.reveal(when="blank-6 blank-7")} Cela signifie que pour trouver l'aire d'un losange, nous pouvons utiliser soit l'équation pour l'aire d'un parallélogramme, soit celle pour l'aire d'un cerf-volant:

{.text-center.reveal(when="blank-6 blank-7")} _Zone_ = [{.i.pill.blue} base](target:base) × [{.i.pill.red} hauteur](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _Dans différents contextes, différentes parties d'un losange peuvent vous être attribuées (côtés, hauteur, diagonales) et vous devez choisir l'équation la plus pratique._

:::

:::



---

## Tessellations

> section: tessellations
> id: tessellations
> translated: auto

[Les polygones](gloss:polygon) apparaissent partout dans la nature. Ils sont particulièrement utiles si vous souhaitez carreler une grande surface, car vous pouvez assembler des polygones sans aucun espace ni chevauchement. De tels modèles sont appelés [__pavages__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Hexagonal | Triangulaire | Nid d']] abeille [[quadratique]]

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Milk Snake skin

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Structure cellulaire des feuilles

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Colonnes de basalte à la Chaussée des Géants en Irlande du Nord

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Peau d'ananas

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Coquille d'une tortue

:::

---
> id: tessellations-1

Les humains ont copié bon nombre de ces modèles naturels dans l'art, l'architecture et la technologie - de la Rome antique à nos jours. Voici quelques exemples:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Rectangulaire | Quadratique |]] Modèle de chaussée [[hexagonale]]

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Serre à l'Eden Project en Angleterre

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaïque à l'Alhambra

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Triangulaire | Hexagonal |]] Toit [[rectangulaire]] au British Museum de Londres

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Pavillon de pavage cellulaire à Sydney

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Étude de la division régulière de l'avion avec des reptiles_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Ici, vous pouvez créer vos propres pavages en utilisant des polygones réguliers. Faites simplement glisser de nouvelles formes de la barre latérale sur la toile. Quelles formes tessellent bien? Y a-t-il des formes qui ne tessellent pas du tout? Essayez de créer des motifs intéressants!

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn Clear
        button.btn Download
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Pavages de polygones réguliers

Vous avez peut-être remarqué que certains [polygones réguliers](gloss:regular-polygon) (comme les [[carrés | pentagones]] ) se tessèlent très facilement, tandis que d’autres (comme les [[pentagones | Triangles | hexagones]] ) ne semblent pas du tout tesseller.

---
> id: tessellation-regular-1

Cela a à voir avec la taille de leurs [angles internes](gloss:internal-angle) , que nous avons appris à calculer auparavant. À chaque [sommet](gloss:polygon-vertex) de la mosaïque, les angles internes de plusieurs polygones différents se rencontrent. Nous avons besoin de tous ces angles pour atteindre [[360]]°, sinon il y aura soit un écart soit un chevauchement.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Triangles [[tessellés | ne pas paver]] _{span.reveal(when="blank-0")} car 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Carrés [[tessellés | ne pas paver]] _{span.reveal(when="blank-1")} car 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Les pentagones [[ne tessellent pas | tessellé]] _{span.reveal(when="blank-2")} car les multiples de 108° ne totalisent pas 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Hexagones [[tessellés | ne pas paver]] _{span.reveal(when="blank-3")} car 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Vous pouvez également vérifier que, tout comme les pentagones, tout polygone régulier à 7 côtés ou plus n'est pas tessellé. Cela signifie que les seuls polygones réguliers qui tessellent sont des triangles, des carrés et des hexagones!

Bien sûr, vous pouvez combiner différents types de polygones réguliers dans une tessellation, à condition que leurs angles internes puissent atteindre 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagons, squares and triangles#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octagons and squares#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) and triangles#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, hexagons and squares#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Tessellations de polygones irréguliers

Nous pouvons également essayer de créer des pavages à partir de [polygones irréguliers](gloss:irregular-polygon) - à condition de faire attention lors de leur rotation et de leur disposition.

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow

Il s'avère que vous pouvez tesseller non seulement des triangles équilatéraux, mais _n'importe quel triangle_ ! Essayez de déplacer les [sommets](target:vertex) de ce diagramme.

La somme des angles internes dans un triangle est de [[180]]°. Si nous utilisons [[deux fois]] chaque angle [[| une fois que | trois fois]] à chaque sommet de la tessellation, on obtient 360°:

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")

:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)

::: column.grow

Plus surprenant, _tout quadrilatère est_ également pavé! Leur somme d'angle interne est de [[360]]°, donc si nous utilisons chaque angle [[une fois | deux fois | trois fois]] à chaque sommet de la mosaïque, nous obtenons 360°.

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")

:::

---
> id: tessellation-pentagons

Les pentagones sont un peu plus compliqués. Nous avons déjà vu que _les_ pentagones _réguliers_ [[ne tessellaient pas | tessellé]] , mais qu'en est-il des non-réguliers?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Voici trois exemples différents de pavages avec des pentagones. Ils ne sont pas _réguliers_ , mais ce sont des polygones à 5 faces parfaitement valides.

Jusqu'à présent, les mathématiciens n'ont trouvé que 15 types de pavages différents avec des pentagones (convexes) - dont le plus récent a été découvert en 2015. Personne ne sait s'il y en a d'autres, ou si ces 15 sont les seuls…

---
> id: escher

### Tessellations dans l'art

Tessellations nous à la fois un outil et une inspiration pour de nombreux artistes, architectes et designers - le plus célèbre artiste néerlandais [MC Escher](bio:escher) . Le travail d'Escher contient d'étranges créatures, motifs et paysages en mutation:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

Ces œuvres d'art ont souvent l'air amusantes et sans effort, mais les principes mathématiques sous-jacents sont les mêmes qu'auparavant: angles, rotations, translations et polygones. Si les maths ne sont pas corrects, la tessellation ne fonctionnera pas!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

Toutes les pavages que nous avons vus jusqu'à présent ont une chose en commun: ils sont __périodiques__ . Cela signifie qu'ils consistent en un motif régulier qui se répète encore et encore. Ils peuvent continuer indéfiniment dans toutes les directions et ils se ressembleront partout.

Dans les années 1970, le mathématicien et physicien britannique [Roger Penrose a](bio:penrose) découvert des [pavages](bio:penrose) _non périodiques_ - ils continuent toujours infiniment dans toutes les directions, mais _ne se_ ressemblent _jamais_ exactement. Ce sont des __pavages Penrose__ , et vous n'avez besoin que de quelques types de polygones différents pour en créer un:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose explorait les pavages uniquement pour le plaisir, mais il s'avère que la structure interne de certains matériaux réels (comme l'aluminium) suit un modèle similaire. Le motif a même été utilisé sur du papier toilette, car les fabricants ont remarqué qu'un motif non périodique peut être enroulé sans renflement.

---

## Polyèdres

> section: polyhedra
> id: polyhedra
> translated: auto

Jusqu'à présent, nous venons de voir ce que nous pouvons faire avec des polygones dans un monde plat et bidimensionnel. Un [__polyèdre__](gloss:polyhedron) est un objet tridimensionnel composé de polygones. Voici quelques exemples:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Les polyèdres ne peuvent pas contenir de surfaces courbes - les sphères et les cylindres, par exemple, ne sont pas des polyèdres.

Les polygones qui composent un polyèdre sont appelés ses [__faces__](gloss:polyhedron-face) . Les lignes où deux faces sont connectées sont appelées [__arêtes__](gloss:polyhedron-edge) et les coins où les arêtes se rencontrent sont appelés [__sommets__](gloss:polyhedron-vertex) .

---
> id: euler

Les polyèdres se présentent sous de nombreuses formes et tailles différentes - des simples cubes ou pyramides avec seulement quelques faces, aux objets complexes comme l'étoile ci-dessus, qui a 60 faces triangulaires. Il s'avère cependant que _tous les_ polyèdres ont une propriété importante en commun:

::: .theorem

__Formule polyèdre d'Euler__
Dans chaque polyèdre, le nombre de faces ( _F_ ) plus le nombre de sommets ( _V_ ) est deux de plus que le nombre d'arêtes ( _E_ ). En d'autres termes,

{.text-center}`F + V = E + 2`

:::

Par exemple, si un polyèdre a 12 faces et 18 sommets, nous savons qu'il doit avoir [[28]] arêtes.

---
> id: euler-1

Cette équation a été découverte par le célèbre mathématicien suisse [Leonard Euler](bio:euler) . C'est vrai pour tout polyèdre, tant qu'il ne contient pas de trous.

Si vous essayez différents polyèdres, comme ceux ci-dessus, vous constaterez que la formule d'Euler fonctionne toujours. Dans [un cours ultérieur,](/course/graph-theory/planar-graphs) vous apprendrez à le prouver mathématiquement.

---

## Filets et coupes

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prismes et pyramides

> section: prisms-pyramids
> sectionStatus: dev

FAIRE

---

## Mise à l'échelle des formes et des solides

> section: scaling
> sectionStatus: dev

FAIRE

---

## Solides platoniciens

> section: platonic
> id: platonic
> translated: auto

Au début de ce cours, nous avons défini [les polygones réguliers](gloss:regular-polygon) comme des [polygones](gloss:regular-polygon) particulièrement «symétriques», où tous les côtés et les angles sont identiques. Nous pouvons faire quelque chose de similaire pour les polyèdres.

Dans un _polyèdre régulier,_ toutes les [faces](gloss:polyhedron-face) sont toutes du même type de polygone régulier, et le même nombre de faces se rencontrent à chaque [sommet](gloss:polyhedron-vertex) . Les polyèdres possédant ces deux propriétés sont appelés [__solides platoniciens__](gloss:platonic-solid) , du nom du philosophe grec [Platon](bio:plato) .

 À quoi ressemblent les solides platoniciens - et combien y en a-t-il? Pour créer une forme tridimensionnelle, nous avons besoin d'au moins [[3]] faces à rencontrer à chaque sommet. Commençons systématiquement par le plus petit polygone régulier: triangles équilatéraux:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Si nous créons un polyèdre où trois [triangles équilatéraux se](gloss:equilateral-triangle) rencontrent à chaque sommet, nous obtenons la forme à gauche. Il s'appelle un __tétraèdre__ et a [[4]] faces. _{.reveal(when="blank-0")} («Tetra» signifie «quatre» en grec)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Si quatre triangles équilatéraux se rencontrent à chaque sommet, nous obtenons un solide platonicien différent. Il s'appelle l' __Octaèdre__ et a [[8]] faces. _{.reveal(when="blank-0")} ("Octa" signifie "huit" en grec. Tout comme "Octagon" signifie forme à 8 côtés, "Octaèdre" signifie solide à 8 faces.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Si [[cinq]] triangles se rencontrent à chaque sommet, nous obtenons l' __icosaèdre__ . Il a [[20]] visages. _{.reveal(when="blank-1")} («Icosa» signifie «vingt» en grec.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Si [[six]] triangles se rencontrent à chaque sommet, quelque chose de différent se produit: nous obtenons simplement [[une tessellation | un quadrilatère | un autre Icosaèdre]] , _{span.reveal(when="blank-1")} au lieu d'un polyèdre tridimensionnel._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Et sept triangles ou plus à chaque sommet ne produisent pas non plus de nouveaux polyèdres: il n'y a pas assez d'espace autour d'un sommet pour s'adapter à autant de triangles.

:::

Cela signifie que nous avons trouvé [[trois]] solides platoniciens constitués de triangles. Passons au polygone régulier suivant: les carrés.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Si [[trois]] carrés se rencontrent à chaque sommet, nous obtenons le __cube__ . Tout comme les dés, il a [[6]] faces. _{span.reveal(when="blank-1")} Le cube est parfois aussi appelé _hexaèdre_ , après le mot grec «hexa» pour «six»._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Si [[quatre]] carrés se rencontrent à chaque sommet, nous obtenons [[une autre pavage | un tétraèdre | un autre cube]] . _{span.reveal(when="blank-1")} Et comme avant, cinq carrés ou plus ne fonctionneront pas non plus._

:::

---
> id: platonic-dodecahedron

Ensuite, essayons les pentagones réguliers:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Si [[trois]] pentagones se rencontrent à chaque sommet, nous obtenons le __Dodécaèdre__ . Il a [[12]] faces. _{.reveal(when="blank-1")} («Dodeca» signifie «douze» en grec.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Comme auparavant, quatre pentagones ou plus [[ne fonctionnent pas | sont possibles]] car il n'y a pas assez d'espace.

:::

---
> id: platonic-hexagons

Le prochain polygone régulier à essayer sont les hexagones:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Si trois hexagones se rencontrent à chaque sommet, nous obtenons immédiatement une [[tessellation | polyèdre | hexaèdre]] . _{span.reveal(when="blank-0")} Puisqu'il n'y a pas d'espace pour plus de trois, il semble qu'il n'y ait pas de solides platoniciens constitués d'hexagones._

:::

---
> id: platonic-final

Il en va de même pour tous les polygones réguliers à plus de six côtés. Ils ne tessellent pas, et nous n'avons certainement pas de polygones tridimensionnels.

Cela signifie qu'il n'y a que [[cinq]] solides platoniciens! Jetons un coup d'œil à tous ensemble:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tétraèdre__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] visages_
_{span.dual} [[4]] sommets_
_{span.dual} [[6]] arêtes_

::: column.grow.text-center(width=120)

__cube__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] visages_
_{span.dual(target="dual1")} [[8]] sommets_
_{span.dual} [[12]] arêtes_

::: column.grow.text-center(width=120)

__Octaèdre__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] visages_
_{span.dual(target="dual1")} [[6]] sommets_
_{span.dual} [[12]] arêtes_

::: column.grow.text-center(width=120)

__Dodécaèdre__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] visages_
_{span.dual(target="dual2")} 20 sommets_
_{span.dual} 30 arêtes_

::: column.grow.text-center(width=120)

__Icosaèdre__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] visages_
_{span.dual(target="dual2")} 12 sommets_
_{span.dual} 30 arêtes_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Remarquez comment le nombre de faces et de sommets sont [[échangés | la même chose]] pour le [cube et l'octaèdre](target:dual1) , ainsi que pour le [dodécaèdre et l'icosaèdre](target:dual2) , tandis que le nombre d'arêtes [[reste le même | sont différents]] . Ces paires de solides platoniciens sont appelées [__solides doubles__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Nous pouvons transformer un polyèdre en son dual, en «remplaçant» chaque face par un sommet, et chaque sommet par une face. Ces animations montrent comment:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Le tétraèdre est double avec lui-même. Puisqu'il a le même nombre de faces et de sommets, les échanger ne changerait rien.

---
> id: platonic-elements

[Platon](bio:plato) croyait que toute matière dans l'Univers se compose de quatre éléments: l'air, la terre, l'eau et le feu. Il pensait que chaque élément correspondait à l'un des solides platoniciens, tandis que le cinquième représenterait l'univers dans son ensemble. Aujourd'hui, nous savons qu'il existe plus de 100 éléments différents qui sont constitués d'atomes sphériques et non de polyèdres.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Solides archimédiens

> id: archimedean

Les solides platoniciens sont des polyèdres particulièrement importants, mais il en existe d'innombrables autres.

[__Les solides archimédiens__](gloss:archimedean-solid) , par exemple, doivent encore être constitués de [polygones réguliers](gloss:regular-polygon) , mais vous pouvez utiliser plusieurs types différents. Ils portent le nom d'un autre mathématicien grec, [Archimède de Syracuse](bio:archimedes) , et ils sont au nombre de 13:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tétraèdre tronqué__
8 faces, 12 sommets, 18 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctaèdre__
14 faces, 12 sommets, 24 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cube tronqué__
14 faces, 24 sommets, 36 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Octaèdre tronqué__
14 faces, 24 sommets, 36 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctaèdre__
26 faces, 24 sommets, 48 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cuboctaèdre tronqué__
26 faces, 48 sommets, 72 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 faces, 24 sommets, 60 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodécaèdre__
32 faces, 30 sommets, 60 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Dodécaèdre tronqué__
32 faces, 60 sommets, 90 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Icosaèdre tronqué__
32 faces, 60 sommets, 90 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodécaèdre__
62 faces, 60 sommets, 120 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodécaèdre tronqué__
62 faces, 120 sommets, 180 arêtes

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Dodécaèdre snob__
92 faces, 60 sommets, 150 arêtes

:::

---
> id: polyhedra-applications

### Applications

Platon avait tort de croire que tous les éléments sont constitués de solides platoniciens. Mais les polyèdres réguliers ont de nombreuses propriétés spéciales qui les font apparaître ailleurs dans la nature - et nous pouvons copier ces propriétés en science et en génie.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

De nombreux __virus__ , __bactéries__ et autres petits __organismes__ ont la forme d' [icosaèdres](gloss:icosahedron) . Les virus, par exemple, doivent enfermer leur matériel génétique à l'intérieur d'une coquille de nombreuses unités protéiques identiques. L'icosaèdre est le moyen le plus efficace de le faire, car il se compose de quelques éléments réguliers mais a presque la forme d'une sphère.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

De nombreuses __molécules__ ont la forme de polyèdres réguliers. L'exemple le plus célèbre est `C_60` qui se compose de 60 atomes de carbone disposés sous la forme d'un [icosaèdre tronqué](gloss:truncated-icosahedron) .

Il a été découvert en 1985 lorsque des scientifiques ont étudié la poussière interstellaire. Ils l'ont baptisée «Buckyball» (ou Buckminsterfullerene) du nom de l'architecte [Buckminster Fuller](bio:fuller) , célèbre pour la construction de bâtiments d'apparence similaire.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

La plupart des __cristaux__ ont leurs atomes disposés dans une grille régulière composée de [tétraèdres](gloss:tetrahedron) , de [cubes](gloss:cube) ou d' [octaèdres](gloss:octahedron) . Lorsqu'elles se fissurent ou se brisent, vous pouvez voir ces formes à plus grande échelle.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Les tétraèdres et les octaèdres sont incroyablement rigides et stables, ce qui les rend très utiles dans la __construction__ . _Les cadres spatiaux_ sont des structures polygonales qui peuvent supporter de grands toits et des ponts lourds.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Les solides platoniciens sont également utilisés pour créer des __dés__ . en raison de leur symétrie, chaque côté a la [probabilité](gloss:probability) d'atterrir face vers le haut - donc les dés sont justes.

L' [icosaèdre tronqué](gloss:truncated-icosahedron) est probablement le polyèdre le plus célèbre au monde: c'est la forme du ballon de football.

:::
