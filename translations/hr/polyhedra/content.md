# Poligoni i poliedri

## poligoni

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

[__Poligon__](gloss:polygon) je zatvorenog, ravnog oblika koji ima samo ravne strane. Poligoni mogu imati bilo koji broj strana i kutova, ali strane ne mogu biti zakrivljene. Koji od oblika ispod su poligoni?

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

Poligonima dajemo različita imena, ovisno o tome koliko strana imaju:

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

### Kutovi u poligonima

Svaki poligon s _n_ stranama također ima _n_ [unutarnjih kutova](gloss:internal-angle) . Već znamo da je zbroj unutarnjih kutova u trokutu uvijek [[180]]°, ali što je s ostalim mnogokutima?

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

Izgleda da je zbroj unutarnjih kutova u četverostraniku uvijek [[360]]° - točno [[dva puta | tri puta | pola]] zbroja uglova u trokutu. _{span.reveal(when="blank-0 blank-1")} To nije slučajnost: svaki se četverokut može podijeliti u dva trokuta._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Isto vrijedi i za veće poligone. Pentagon možemo podijeliti u [[3]] trokuta, pa je njegov unutarnji kut `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} A šesterokut možemo podijeliti u [[4]] trokuta, pa je njegov unutarnji kut `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Poligon sa ${x}{x|7|3,15,1} strane će imati unutarnji kut od 180° × ${x-2} = ${(x-2)*180}°. Općenitije, poligon s _n_ stranama može se podijeliti na [[n - 2 | n - 1 | n]] trokuta. Stoga,

{.text-center.reveal(when="blank-0")} Zbroj unutarnjih kutova u _n_ -gonu `= (n - 2) × 180°` ,

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Konveksni i konkavni poligoni

::: column.grow

Kažemo da je poligon [__konkavan__](gloss:concave) ako ima presjek koji "pokazuje prema unutra". Možete zamisliti da se ovaj dio ["uklesao"](target:cave) . Poligoni koji _nisu_ konkavni nazivaju se [__konveksni__](gloss:convex) .

Dva su načina na koja lako možete prepoznati konkavne poligone: oni imaju barem jedan [unutarnji kut koji je veći od 180°](target:angle) . Također imaju barem jednu [dijagonalu koja leži _izvan_ poligona](target:diagonal) .

U konveksnim mnogokutima, s druge strane, svi su unutarnji kutovi manji od [[180]]°, a sve dijagonale leže [[unutar | izvan]] poligona.

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

Koji je od ovih poligona konkavan?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Regularni poligoni

Kažemo da je poligon [__pravilan__](gloss:regular-polygon) ako sve njegove strane imaju jednaku duljinu, a svi kutovi imaju istu veličinu. Koji su od tih oblika pravilni poligoni?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Redoviti poligoni mogu biti u raznim veličinama - ali svi pravilni poligoni s istim brojem strana [[slični su | kongruentne su | imaju isto područje]] !

---
> id: regular-2

Već znamo zbroj svih [unutarnjih kutova](gloss:internal-angle) u mnogokutima. Za pravilne poligone svi su ovi kutovi [[iste veličine | su alternativni kutovi]] , tako da možemo izračunati veličinu jednog unutarnjeg kuta:

{.text-center.reveal(when="blank-0")} kut = <mfrac><mrow>[[zbroj svih uglova | broj kutova]]</mrow><mrow>[[broj kutova | zbroj svih uglova]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ,_

{.reveal(when="blank-1 blank-2" delay=1000)} Ako `n=3` dobivamo veličinu unutarnjih kutova jednakostraničnog trokuta - već znamo da mora biti [[60]]°. _{span.reveal(when="blank-3")} U redovnom poligonu sa ${x}{x|6|3,12,1} strane, svaki unutarnji kut je 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### Područje pravilnih poligona

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

Ovdje možete vidjeti [redoviti poligon](gloss:regular-polygon) sa ${n}{n|5|4,12,1} strane. Svaka strana ima duljinu [{.pill.green} 1m](target:base) . Pokušajmo izračunati njegovu površinu!

Prvo možemo poligon podijeliti u ${toWord(n)} kongruentne, [[isosceles | jednakostranični | pravokutni]] trokut.

{.reveal(when="blank-0")} Već znamo [[bazu | visina | područje]] ovih trokuta, ali trebamo i [[visinu | noge | medijani]] da bi mogli izračunati njegovo područje. _{span.reveal(when="blank-2")} U pravilnim mnogokutima ova se visina ponekad naziva i [{.pill.yellow} apotema](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Primijetite da postoji [pravokutni trokut](target:right-triangle) formiran apotemom i polovica osnove jednakokračnog trokuta. To znači da možemo koristiti trigonometriju!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.pill.blue} osnovni kutovi](target:base-angle) izoscele trokuta (nazovimo ih α) su [[upola manji | isto | dvostruko]] veća od [unutarnjih kutova](target:int-angle) poligona:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Da bismo pronašli apotemu, možemo se poslužiti definicijom [[tangenti | sinus | kosinus]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Sada je područje [jednakokračnog trokuta](target:isosceles-triangle)

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Poligon se sastoji od ${toWord(n)} od ovih isoscelesnih trokuta, koji svi imaju isto područje. Stoga je ukupna površina poligona

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## četverokuta

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

U [prethodnom tečaju](/course/triangles) istraživali smo mnoga različita svojstva trokuta. Sada pogledajmo četverostrane.

_Pravilni četverostrani_ naziva se [[kvadrat | pravokutnik | jednakostranični četverokut]] . Sve njegove strane imaju jednaku duljinu, a svi su mu kutovi jednaki.

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

{.caption} __Kvadrat__ je četverokut s [četiri jednake strane](target:side) i [četiri jednaka kuta](target:angle) .

:::

---
> id: quadrilaterals-1

Za malo manje redovne četverokute, imamo dvije mogućnosti. Ako samo želimo da _kutovi_ budu jednaki, dobivamo [__pravokutnik__](gloss:rectangle) . Ako samo želimo da _stranice_ budu jednake, dobit ćemo [__romb__](gloss:rhombus) .

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

{.caption} __Pravokutnik__ je četverostranik s [četiri jednaka kuta](target:angle) .

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

{.caption} __Rhombus__ je četverostrana s [četiri jednake strane](target:side) .

:::

---
> id: quadrilaterals-2

Postoji nekoliko drugih četverokuta, koji su još manje pravilni, ali imaju određena važna svojstva:

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

{.caption} Ako su oba para _suprotnih_ strana [paralelna](gloss:parallel) , dobivamo __paralelogram__ .

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

{.caption} Ako dva para _susjednih_ strana imaju jednaku duljinu, dobit ćemo __Kite__ .

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

{.caption} Ako je barem jedan par suprotnih strana paralelan, dobivamo __trapez__ .

:::

---
> id: quadrilaterals-venn

Četverostrani mogu spadati u više tih kategorija. Možemo prikazati hijerarhiju različitih vrsta četverostrana kao [Vennov dijagram](gloss:venn-diagram) :

    figure: include svg/venn.svg

Na primjer, svaki je pravokutnik [[paralelogram | romb | kvadrat]] i svaki [[romb | trapezoid | paralelogram]] je također zmaj. [[Ponekad]] je romb [[| stalno | nikad]] kvadrat i pravokutnik nisu [[uvijek | ponekad | nikad]] trapez.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Da ne bi došlo do nejasnoća, obično koristimo upravo najkonkretniju vrstu.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Sada odaberite četiri točke bilo gdje u sivom okviru s lijeve strane. _{span.reveal(when="points")} Sve ih možemo povezati da bismo tvorili četverokut._

{.reveal(when="points" delay=1000)} Nađimo sredinu svake od četiri strane. Ako povežemo srednje točke, dobit ćemo [[još jedan četverokut | trokut | pravokutnik]] .

{.reveal(when="blank-0")} Pokušajte pomicati vrhove vanjskog četverokuta i promatrati što se događa s manjim. Izgleda da to nije samo _bilo koji_ četverostrani, već uvijek [[paralelogram | trapezoid | pravokutnik]] !

{.reveal(when="blank-1")} Ali zašto je to tako? Zašto bi rezultat _bilo kojeg_ četverokuta uvijek trebao biti paralelogram? Da bismo nam objasnili, moramo nacrtati jednu [dijagonalu](gloss:polygon-diagonal) izvornog četverokuta.

{.reveal(when="diagonal")} Dijagonala dijeli četverokut u [dva trokuta](target:triangle) . A sada možete vidjeti da su [dvije strane](target:midsegment) unutarnjeg četverokuta zapravo [[srednji dijelovi | medijani | okomiti bisektori]] ovih trokuta.

{.reveal(when="blank-2")} U [prethodnom](/course/triangles/properties) smo [tečaju](/course/triangles/properties) pokazali da su [srednji](gloss:triangle-midsegment) dijelovi trokuta uvijek paralelni s njegovom osnovom. U ovom slučaju, to znači da su [obje ove strane](target:parallel) paralelne dijagonali - dakle moraju biti i [[paralelne jedna s drugom | iste dužine | okomito jedna na drugu]] .

{.reveal(when="blank-3" delay=2000)} Točno isto možemo učiniti s [drugom dijagonalom](target:other) četverokuta, kako bismo pokazali da su oba para suprotnih strana paralelna. I to je sve što trebamo da dokažemo da je unutarnji četverokutan [paralelogram](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### paralelograma

Ispada da paralelogrami imaju i mnoga druga zanimljiva svojstva, osim što su suprotne strane paralelne. Koja je od sljedećih šest tvrdnji istinita?

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

Naravno, jednostavno "promatranje" ovih svojstava nije dovoljno. Da bismo bili sigurni da su _uvijek_ istinite, moramo ih _dokazati_ :

::: tab

#### Nasuprotne strane i kutovi _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Pokušajmo dokazati da su suprotne strane i kutovi u paralelogramu uvijek jednaki.

Započnite crtanjem jedne dijagonale paralelograma.

{.reveal(when="diagonal")} Dijagonala stvara četiri nova kuta sa stranicama paralelograma. Dva [crvena](target:red-angle) i dva [plava kuta](target:blue-angle) su [naizmjenični kutovi](gloss:alternate-angles) , tako da moraju biti [[sukladni | susjedan | dopunski]] .

{.reveal(when="blank-0")} Sada ako pogledamo [dva trokuta](target:triangles) stvorena dijagonalom, vidimo da imaju dva kongruentna kuta i [jednu kongruentnu stranu](target:diagonal) . Od strane [[ASA | AAS |]] Uvjeti kongencije [[AA]] , oba trokuta moraju biti sukladna.

{.reveal(when="blank-1")} To znači da i ostali odgovarajući dijelovi trokuta također moraju biti sukladni: posebno su oba [para suprotnih strana](target:sides) jednaka, a oba [para suprotnih kutova](target:angles) jednaka. _{span.qed}_

:::

{.reveal(when="blank-1")} Ispada da je i obratno: ako su oba para suprotnih strana (ili kutova) u četverostraniku jednaka, tada četverostrani mora biti paralelogram.

::: tab

#### dijagonala _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Sada dokažite da se dvije dijagonale u paralelogramu dijele jedna na drugu.

Razmislimo o dva žuta trokuta generirana dijagonalama:

* Upravo smo dokazali da su [dvije zelene strane](target:side1) jednake, jer su suprotne strane paralelograma. * [Dva crvena](target:anglesR) i [dva plava kuta](target:anglesB) su jednaka jer su [[naizmjenični kutovi | suprotnih kutova | pravim kutovima]] .

{.reveal(when="blank-2")} Od strane [[ASA | SSS | AAS]] uvjet, oba žuta trougla moraju stoga biti sukladni.

{.reveal(when="blank-3")} Sada se možemo upotrijebiti u činjenici da su i odgovarajući dijelovi kongruentnih trokuta u skladu s tim [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) i [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) , Drugim riječima, dvije dijagonale se presijecaju u njihovim srednjim točkama. _{span.qed}_

:::

{.reveal(when="blank-3")} Kao i prije, vrijedi i obrnuto: ako se dvije dijagonale četverostrana dijele jedna na drugu, tada je četverostranik paralelogram.

:::

---
> id: kites

### zmajevi

::: column.grow

Pokazali smo gore da su dva para [[suprotnih | susjedne]] strane paralelograma su skladne. U kitu su dva para _susjednih_ strana sukladna.

Naziv _Kite_ jasno dolazi iz njegovog oblika: izgleda kao zmajevi kojima možete letjeti nebom. Međutim, od svih specijalnih četverostrana koje smo vidjeli do sada, Kite je jedini koji također može biti [konkavan](gloss:concave) : ako je u obliku strelice ili strelice:

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

{.caption} Konveksni zmaj

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

{.caption} Konkavni zmaj koji izgleda poput strijele

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

Možda ste primijetili da su svi zmajevi [[simetrični | slično]] . _{span.reveal(when="blank-0")} [Os simetrije](gloss:axis-of-symmetry) [[jedna je od dijagonala | jedna od strana | srednji segment]] ._

{.reveal.r(when="blank-1")} Dijagonala dijeli zmaj na [dva složena trokuta](target:triangle1) . Znamo da su kongruentni iz [SSS](gloss:triangle-sss) stanja: oba trokuta imaju [tri kongruentne strane](target:sss) (crvena, zelena i plava). _{button.next-step} Nastaviti_

{.reveal.r(when="next-0")} Koristeći [CPOCT](gloss:cpoct) , stoga znamo da i [odgovarajući kutovi](target:angles) moraju biti u skladu. _{button.next-step} Nastaviti_

{.reveal.r(when="next-1")} To znači, na primjer, da je [dijagonala](target:d1) [[bisektor | okomito | sredina]] [dvaju kutova](target:vAngle) na njegovim krajevima. _{button.next-step} Nastaviti_

{.reveal.r(when="next-2")} Možemo ići i dalje: ako nacrtamo drugu dijagonalu, dobit ćemo još [dva, manja trokuta](target:triangle2) . Oni također moraju biti sukladni zbog [SAS](gloss:triangle-sss) uvjeta: imaju iste [dvije strane i uključeni kut](target:sas) . _{button.next-step} Nastaviti_

{.reveal(when="next-3")} To znači da [kut α](target:alpha) mora biti isti kao i [kut β](target:beta) . Budući da su susjedni, [dodatni kutovi](gloss:supplementary-angles) i α i β moraju biti [[90]]°.

{.reveal(when="blank-3")} Drugim riječima, dijagonale kita uvijek su [[okomite | paralelno]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Područje četverostrana

Prilikom izračunavanja površine trokuta u prethodnom tečaju koristili smo trik kako ga pretvoriti u [[pravokutnik | kvadrat | pentagon]] . Ispada da to možemo učiniti i za neke četverokute:

::: tab

#### Paralelogram _{span.check(when="draw-1 blank-1")}_

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

Pokušajte nacrtati pravokutnik s istog područja kao i paralelogram.

{.reveal(when="draw-1")} Možete li vidjeti da je [trokut](target:triangle-1) koji [nedostaje](target:triangle-1) na lijevoj strani [[potpuno isti kao | manji od | veći od]] [trokuta koji se preklapa](target:triangle-2) s desne strane? _{span.reveal(when="blank-1")} Stoga je područje paralelograma_

{.text-center.reveal(when="blank-1")} Područje = __{.i.m-green} baza__ × __{.i.m-yellow} visina__

{.reveal(when="blank-1" delay=1000)} _Pazite pri mjerenju visine paralelograma: on obično nije isti kao jedna od dvije strane._

:::

::: tab

#### trapezoid _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Podsjetimo da su trapezi četverostrani s jednim parom [paralelnih strana](target:bases) . Te se paralelne strane nazivaju __bazama__ trapeza.

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

Kao i prije, pokušajte nacrtati pravokutnik koji ima isto područje kao i ovaj trapez. _{span.reveal(when="draw-2")} Možete li vidjeti kako nestaju [i dodani trokuti](target:triangles-3) s lijeve i desne strane otkazuju?_

{.reveal(when="draw-2" delay=2000)} [{.pill.green} visina](target:t-height) ovog pravokutnika je [[udaljenost između | prosjek od | duljina]] [paralelnih strana](target:bases) trapeza.

{.reveal.r(when="blank-2")} [{.pill.yellow} širina](target:t-width) pravokutnika je udaljenost između [[srednjih točaka | krajnje točke]] dviju paralelnih strana trapeza. _{span.reveal(when="blank-3")} To se naziva __srednji segment__ trapeza._ _{button.next-step.reveal(when="blank-3")} Nastaviti_

{.reveal(when="next-0")} Kao i kod [trokuta](gloss:triangle-midsegment) , srednji segment trapeza je [[paralelan s | okomito na | iste duljine kao i]] njegove dvije osnove. Duljina srednjeg dijela je prosjek duljina baza: `(a+c)/2` ,

{.reveal(when="blank-4")} Ako sve to kombiniramo, dobivamo jednadžbu za područje trapeza s paralelnim stranama [_a_](target:base-2) i [_c_](target:base-1) , a visina [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Zmaj _{span.check(when="blank-5")}_

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

U ovom zmaju [dvije dijagonale](target:diag3) tvore širinu i visinu velikog [pravokutnika](target:rect4) koji okružuje zmaj.

Površina ovog pravokutnika je [[dva puta | isto kao | tri puta]] veće površine kita. _{span.reveal(when="blank-5")} Možete li vidjeti kako su svaki od [četiri trokuta](target:inside) koji čine zmaj jednaki kao i [četiri praznine](target:outside) izvan njega?_

{.reveal(when="blank-5")} To znači da je područje kita dijagonalama [{.i.pill.green} d1](target:d31) i [{.i.pill.yellow} d2](target:d32) je

{.text-center.reveal(when="blank-5")} _Područje_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### Romb _{span.check(when="blank-6 blank-7")}_

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

[Rhombus](gloss:rhombus) je četverostranik koji ima četiri povezane strane. Možda se sjećate da je svaki romb [[paralelogram | pravokutnik | trg]] - i također [[zmaj | šesterokut | konkavni poligon]] .

{.reveal(when="blank-6 blank-7")} To znači da za pronalaženje područja romba možemo upotrijebiti ili jednadžbu za područje paralelograma ili onu za područje zmaja:

{.text-center.reveal(when="blank-6 blank-7")} _Područje_ = [{.i.pill.blue} baza](target:base) × [{.i.pill.red} visina](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _U različitim kontekstima vam mogu biti dodijeljeni različiti dijelovi romba (stranice, visina, dijagonala), a trebali biste odabrati onu jednadžbu koja je prikladnija._

:::

:::



---

## tessellations

> section: tessellations
> id: tessellations
> translated: auto

[Poligoni se](gloss:polygon) pojavljuju svuda u prirodi. Posebno su korisni ako želite obložiti veliku površinu, jer možete polirati poligone zajedno bez praznina ili preklapanja. Takvi se obrasci nazivaju [__tessellations__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[heksagonalan | trokutan | Četverokutna]] saća

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Milk kože od zmija

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Stanična struktura listova

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Bazaltni stupovi u Giant's Causeway u Sjevernoj Irskoj

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Koža od ananasa

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Školjka kornjače

:::

---
> id: tessellations-1

Ljudi su kopirali mnoge od tih prirodnih obrazaca u umjetnosti, arhitekturi i tehnologiji - od antičkog Rima do danas. Evo nekoliko primjera:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Pravokutan | četvrtast | Šesterokutni]] pločnik

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Staklenik u Projektu Eden u Engleskoj

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mozaik u Alhambri

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[trokutan | heksagonalan | Pravokutni]] krov u Britanskom muzeju u Londonu

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Palijon staničnih teskoba u Sydneyu

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Proučavanje redovitog podjele planeta s gmazovima_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Ovdje možete stvoriti vlastite tessellations koristeći pravilne poligone. Jednostavno povucite nove oblike s bočne trake na platno. Koji oblik tessellate dobro? Postoje li oblici koji se uopšte ne dišu? Pokušajte stvoriti zanimljive uzorke!

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

### Tesselacije iz pravilnih poligona

Možda ste primijetili da postoje neki [pravilni poligoni](gloss:regular-polygon) (poput [[kvadrata | pentagoni]] ) tessellate vrlo lako, dok drugi (poput [[pentagona) | trokuti | šesterokutni]] ) uopće ne izgledaju tesno.

---
> id: tessellation-regular-1

To ima veze s veličinom njihovih [unutarnjih kutova](gloss:internal-angle) , koje smo ranije naučili izračunati. U svakoj [vrhovi](gloss:polygon-vertex) teskele sastaju se unutarnji kutovi više različitih poligona. Sve ove kutove trebamo dodati do [[360]]°, inače će doći do zazora ili preklapanja.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Trokuti [[tessellate | ne tesati se]] _{span.reveal(when="blank-0")} jer je 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Kvadrati [[tessellate | ne tesati se]] _{span.reveal(when="blank-1")} jer je 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Pentagoni [[se ne sjeckaju | tessellate]] _{span.reveal(when="blank-2")} jer se množine 108° ne zbrajaju do 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Šesterokut [[tessellat | ne tesati se]] _{span.reveal(when="blank-3")} jer je 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Isto tako možete provjeriti da se, poput pentagona, nijedan običan poligon sa 7 ili više strana ne tesi. To znači da su jedini pravilni poligoni koje tessellate trokut, kvadrat i šesterokut!

Naravno da možete kombinirati različite vrste pravilnih poligona u tessellaciji, pod uvjetom da se njihovi unutarnji kutovi mogu dodati i do 360°:

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

### Tesselacije s nepravilnih poligona

Također možemo pokušati napraviti tesselacije iz [nepravilnih poligona](gloss:irregular-polygon) - sve dok smo oprezni pri rotiranju i rasporedu.

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

Ispada da možete teskirati ne samo jednakostranični trokut, već _bilo koji trokut_ ! Pokušajte pomicati [vrhove](target:vertex) na ovom dijagramu.

Zbroj unutarnjih kutova u trokutu je [[180]]°. Ako svaki kut koristimo [[dvaput | jednom | tri puta]] u svakoj verziji u tessellaciji dobijemo 360°:

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

Što je još iznenađujuće, _bilo koji četverostrani_ također tessellate! Njihov unutarnji zbroj kuta je [[360]]°, pa ako svaki kut koristimo [[jednom | dvaput | tri puta]] u svakom vrhu u tesselliji dobivamo 360°.

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

Pentagoni su malo zamršeniji. Već smo vidjeli da se _redoviti_ pentagoni [[ne sjede | testenlat]] , ali što je s onima koji nisu normalni?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Evo tri različita primjera tessellation s pentagona. Nisu _pravilni_ , ali savršeno vrijede 5-jednostrani poligoni.

Do sada su matematičari pronašli samo 15 različitih vrsta tessela s (konveksnim) pentagonima - od kojih je najnovija otkrivena u 2015. Nitko ne zna ima li drugih ili je tih 15 jedina ...

---
> id: escher

### Tesselacije u čl

Tesselacije smo i alat i inspiracija mnogim umjetnicima, arhitektima i dizajnerima - najpoznatijim nizozemskim umjetnikom [MC Escherom](bio:escher) . Escherovo djelo sadrži čudna, mutirajuća stvorenja, obrasce i pejzaže:

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

Ova umjetnička djela često izgledaju zabavno i bez napora, ali osnovni matematički principi su isti kao i prije: kutovi, rotacije, prijevodi i poligoni. Ako matematika nije u redu, tesketa neće raditi!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Peninove pločice

Sve tesselacije koje smo vidjeli do sada imaju jedno zajedničko: one su __periodične__ . To znači da se sastoje od redovitog uzorka koji se ponavlja iznova i iznova. Oni mogu zauvijek nastaviti u svim smjerovima i izgledat će svugdje isto.

U 1970-ima je britanski matematičar i fizičar [Roger Penrose](bio:penrose) otkrio _neperiodične_ teshelacije - one i dalje traju beskonačno u svim smjerovima, ali _nikada ne_ izgledaju potpuno isto. Zove se __Penrose nagib__ , a za stvaranje jednog vam je potrebno samo nekoliko različitih vrsta poligona:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose je istraživao tesselacije isključivo radi zabave, ali ispada da unutarnja struktura nekih stvarnih materijala (poput aluminija) slijedi sličan obrazac. Uzorak je čak korišten i na toaletnom papiru, jer su proizvođači primijetili da se neperiodični uzorak može namotati bez ispupčenja.

---

## poliedra

> section: polyhedra
> id: polyhedra
> translated: auto

Do sada smo samo pogledali što s poligonima možemo učiniti u ravnom, dvodimenzionalnom svijetu. [__Poliedron__](gloss:polyhedron) je trodimenzionalni objekt sastavljen od poligona. Evo nekoliko primjera:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Poheded ne može sadržavati zakrivljene površine - na primjer, sfere i cilindri nisu poliedri.

Poligoni koji čine poliedar nazivaju se njegova [__lica__](gloss:polyhedron-face) . Linije u kojima su dva lica povezana nazivaju se [__rubovi__](gloss:polyhedron-edge) , a uglovi gdje se rubovi nazivaju [__vrhovima__](gloss:polyhedron-vertex) .

---
> id: euler

Polidedri dolaze u raznim oblicima i veličinama - od jednostavnih kockica ili piramida s samo nekoliko lica, do složenih predmeta poput zvijezde iznad, koja ima 60 trokutastih lica. Ispada, međutim, da _svi_ poliedri imaju jedno važno zajedničko svojstvo:

::: .theorem

__Eulerova poliedronska formula__
U svakom poliedru broj lica ( _F_ ) plus broj vrhova ( _V_ ) dva je više od broja rubova ( _E_ ). Drugim riječima,

{.text-center}`F + V = E + 2`

:::

Na primjer, ako poliedar ima 12 lica i 18 vrhova, znamo da mora imati [[28]] rubova.

---
> id: euler-1

Ovu je jednadžbu otkrio poznati švicarski matematičar [Leonard Euler](bio:euler) . To vrijedi za bilo koji polihedron, sve dok ne sadrži rupe.

Ako isprobate različite poliedre, poput onih gore, otkrit ćete da Eulerova formula uvijek djeluje. U [kasnijem tečaju](/course/graph-theory/planar-graphs) naučit ćete kako to zapravo dokazati matematički.

---

## Mreže i presjeci

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prizme i piramide

> section: prisms-pyramids
> sectionStatus: dev

NAPRAVITI

---

## Oblici skaliranja i kruta tijela

> section: scaling
> sectionStatus: dev

NAPRAVITI

---

## Platonske čvrste tvari

> section: platonic
> id: platonic
> translated: auto

Na početku ovog tečaja definirali smo [pravilne poligone](gloss:regular-polygon) kao posebno „simetrične“ poligone, pri čemu su sve strane i kutovi jednaki. Za poliedre možemo učiniti nešto slično.

U _pravilnom poliedru_ sva su [lica](gloss:polyhedron-face) ista vrsta pravilnog poligona, a isti se broj lica susreće u svakom [vrhu](gloss:polyhedron-vertex) . Poliedri s ta dva svojstva nazivaju se [__platonski kruti dijelovi__](gloss:platonic-solid) , nazvani po grčkom filozofu [Platonu](bio:plato) .

 Pa kako izgledaju platonski kruti dijelovi - i koliko ih ima? Da bismo napravili trodimenzionalni oblik, potrebna su nam najmanje [[3]] lica koja se susreću u svakom vrhu. Krenimo sustavno s najmanjim pravilnim mnogokutom: jednakostranični trokut:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Ako stvorimo poliedar u kojem se tri [jednakostranična trokuta](gloss:equilateral-triangle) susreću u svakoj vertikali, dobit ćemo oblik na lijevoj strani. Zove se __Tetrahedron__ i ima [[4]] lica. _{.reveal(when="blank-0")} ("Tetra" na grčkom znači "četiri"._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Ako se četiri jednakostranična trokuta susreću u svakoj vrhu, dobit ćemo različitu platonsku krutinu. Zove se __Oktahedron__ i ima [[8]] lica. _{.reveal(when="blank-0")} ("Octa" znači "osam" na grčkom. Baš kao što je i "Octagon" znači osmerostrani oblik, "Octahedron" znači čvrsta osoba s 8 strana.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Ako se [[pet]] trokuta sastane u svakoj vrhovi, dobivamo __ikozaedar__ . Ima [[20]] lica. _{.reveal(when="blank-1")} ("Icosa" znači "dvadeset" na grčkom.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Ako se [[šest]] trokuta susreće u svakoj vertikali, događa se nešto drugačije: jednostavno dobivamo [[tespiralu | četverostrana | još jedan ikosahedron]] , _{span.reveal(when="blank-1")} umjesto trodimenzionalnog poliedra._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

A sedam ili više trokuta u svakoj verziji također ne stvaraju nove poliedre: nema dovoljno prostora oko vrha, da se uklopi u toliko trokut.

:::

To znači da smo pronašli [[tri]] platonske krute tvari koje se sastoje od trokuta. Prijeđimo na sljedeći redoviti poligon: kvadrati.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Ako se [[tri]] kvadrata susretnu u svakoj vrhovi, dobivamo __kocku__ . Baš poput kockica, ima [[6]] lica. _{span.reveal(when="blank-1")} Kocka se ponekad naziva i _heksahedron_ , nakon grčke riječi „hexa“ za „šest“._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Ako se u svakom vrhu nalaze [[četiri]] kvadrata, dobit ćemo [[drugu tessellaciju | tetraedar | još jedna kocka]] . _{span.reveal(when="blank-1")} I kao i prije, pet ili više kvadrata također neće raditi._

:::

---
> id: platonic-dodecahedron

Zatim pokušajmo s redovitim pentagonima:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Ako se [[tri]] pentagona susreću u svim vrhovima, dobit ćemo __dodekahedron__ . Ima [[12]] lica. _{.reveal(when="blank-1")} ("Dodeka" znači "dvanaest" na grčkom.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Kao i prije, četiri ili više pentagona [[ne funkcioniraju | mogući su]] jer nema dovoljno prostora.

:::

---
> id: platonic-hexagons

Sljedeći redovni poligon za pokušaj su šesterokutnici:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Ako se tri šesterokuta susreću u svakom vrhu, odmah dobivamo [[tessellaciju | poliedar | šesterokut]] . _{span.reveal(when="blank-0")} Kako nema mjesta za više od tri, čini se da nema platonskih krutih tvari koje se sastoje od šesterokuta._

:::

---
> id: platonic-final

Isto se događa i za sve redovne poligone s više od šest strana. Oni se ne sjedaju, a mi zasigurno ne dobivamo nikakve trodimenzionalne poligone.

To znači da postoji samo [[pet]] platonskih krutih čestica! Pogledajmo ih sve zajedno:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tetraedar__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] Lica_
_{span.dual} [[4]] Vrhovi_
_{span.dual} [[6]] ivica_

::: column.grow.text-center(width=120)

__Kocka__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] Lica_
_{span.dual(target="dual1")} [[8]] Vrhova_
_{span.dual} [[12]] ivica_

::: column.grow.text-center(width=120)

__oktaedar__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] Lica_
_{span.dual(target="dual1")} [[6]] Vrhova_
_{span.dual} [[12]] ivica_

::: column.grow.text-center(width=120)

__dodekahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] Lica_
_{span.dual(target="dual2")} 20 Vrhova_
_{span.dual} 30 ivica_

::: column.grow.text-center(width=120)

__ikozaedra__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] Lica_
_{span.dual(target="dual2")} 12 Vrhova_
_{span.dual} 30 ivica_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Obavijest o tome kako je broj lica i vrhova su [[zamijenili oko | isto]] za [kocku i oktaedar](target:dual1) , kao i za [dodekahedron i ikosahedron](target:dual2) , dok je broj ivica [[isti | su različiti]] . Ti se parovi platonskih krutih tvari nazivaju [__dvostrukim__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Polededar možemo pretvoriti u njegov dual, „zamjenom“ svakog lica s vrhom, i svakog vrha s licem. Ove animacije pokazuju kako:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tetraedar je dvostruk sa sobom. Budući da ima isti broj lica i vrhova, njihovo mijenjanje ne bi ništa promijenilo.

---
> id: platonic-elements

[Platon je](bio:plato) vjerovao da se sva materija u Svemiru sastoji od četiri elementa: zraka, zemlje, vode i vatre. Mislio je da svaki element odgovara jednoj od platonovih tvari, dok će peti predstavljati svemir kao cjelinu. Danas znamo da postoji više od 100 različitih elemenata koji se sastoje od sfernih atoma, a ne poliedra.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Arhimedije

> id: archimedean

Platonske krute tvari posebno su važni poliedri, ali postoji bezbroj drugih.

Primjerice, [__arhimedske čvrste tvari__](gloss:archimedean-solid) i dalje se moraju sastojati od [redovitih poligona](gloss:regular-polygon) , ali možete koristiti više različitih vrsta. Ime su dobili po drugom grčkom matematičaru, [Arhimedu iz Sirakuze](bio:archimedes) , a ima ih 13:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Trnoviti tetraedar__
8 lica, 12 vrhova, 18 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__
14 lica, 12 vrhova, 24 ruba

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Trnovita kocka__
14 lica, 24 vrhova, 36 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Trnoviti oktahedron__
14 lica, 24 vrhova, 36 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__
26 lica, 24 vrhova, 48 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Trnoviti kuboktaedar__
26 lica, 48 vrhova, 72 ruba

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 lica, 24 vrhova, 60 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 lica, 30 vrhova, 60 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Skraćeni dodekahedron__
32 lica, 60 vrhova, 90 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Trnoviti ikozaedar__
32 lica, 60 vrhova, 90 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 lica, 60 vrhova, 120 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Trnoviti ikozidodekahedron__
62 lica, 120 vrhova, 180 rubova

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodekahedron__
92 lica, 60 vrhova, 150 rubova

:::

---
> id: polyhedra-applications

### Prijave

Platon je pogrešno vjerovao da se svi elementi sastoje od platonskih krutih čestica. Ali obični poliedri imaju mnoga posebna svojstva zbog kojih se pojavljuju drugdje u prirodi - i ta svojstva možemo kopirati u znanost i inženjerstvo.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Mnogi __virusi__ , __bakterije__ i drugi mali __organizmi__ imaju oblik [ikosaedra](gloss:icosahedron) . Primjerice, virusi moraju svoj genetski materijal zatvoriti unutar ljuske mnogih identičnih proteinskih jedinica. Ikosaedar je najučinkovitiji način za to, jer se sastoji od nekoliko pravilnih elemenata, ali je gotovo oblikovan poput sfere.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Mnoge su __molekule__ oblikovane poput redovitih poliedra. Najpoznatiji primjer je `C_60` koji se sastoji od 60 atoma ugljika raspoređenih u obliku [Trnovitog ikozaedra](gloss:truncated-icosahedron) .

Otkriven je 1985. kada su znanstvenici istraživali međuzvjezdanu prašinu. Nazvali su je "Buckyball" (ili Buckminsterfullerene) po arhitektu [Buckminsteru Fulleru](bio:fuller) , poznatom po izgradnji građevina sličnog izgleda.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

Većina __kristala__ ima svoje atome raspoređene u pravilnoj mreži koja se sastoji od [tetraedra](gloss:tetrahedron) , [kocke](gloss:cube) ili [oktaedra](gloss:octahedron) . Kad puknu ili se razbiju, ove oblike možete vidjeti u većoj mjeri.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Tetrahedri i oktaedri su nevjerojatno kruti i stabilni, što ih čini vrlo korisnim u __gradnji__ . _Svemirski okviri_ su poligonalne strukture koje mogu podupirati velike krovove i teške mostove.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Platonske krute tvari također se koriste za stvaranje __kockica__ . zbog svoje simetrije, svaka strana ima [vjerojatnost](gloss:probability) da će sletjeti okrenuta prema gore - tako da su kockice poštene.

[Trnoviti ikosahedron](gloss:truncated-icosahedron) je vjerojatno najpoznatiji [polededr](gloss:truncated-icosahedron) na svijetu: to je oblik nogometa.

:::
