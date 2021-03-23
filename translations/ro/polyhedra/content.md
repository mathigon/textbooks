# Poligoane și Poliedre

## Poligoane

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

Un [__poligon__](gloss:polygon) este o formă plană închisă care are doar laturi
drepte. Poligoanele pot avea orice număr de laturi și unghiuri, dar laturile
nu pot fi curbe. Care din formele de mai jos sunt poligoane?

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

Poligoanele au diferite denumiri în funcție de câte laturi au:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triunghi]#[br]3 laturi
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Patrulater]#[br]4 laturi
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 laturi
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 laturi
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 laturi
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octogon]#[br]8 laturi

---
> id: angles-0

### Unghiuri în Poligoane

Orice poligon cu _n_ laturi are și _n_ [unghiuri interne](gloss:internal-angle).
Știm deja că suma unghiurilor interne ale unui triunghi este mereu [[180]]°,
dar care este aceasta în cazul altor poligoane?

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

{.text-center.var} _{span.circled.red}${a1[0]}°_ +
_{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ +
_{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_

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

{.text-center.var} _{span.circled.red}${a2[0]}°_ +
_{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ +
_{span.circled.yellow}${a2[3]}°_ +
_{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_
:::

---
> id: angles-1

Se pare că un patrulater are suma unghiurilor interne este mereu [[360]]°
– exact [[de două ori|de trei ori|jumătate din]] suma unghiurilor unui triunghi.
_{span.reveal(when="blank-0 blank-1")} Nu este o coincidență: fiecare patrulater
poate fi împărțit în două triunghiuri._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} La fel se întâmplă și în cazul poligoanelor mai mari.
Putem împărți un pentagon în [[3]] triunghiuri, deci suma unghiurilor interne este
`3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Și putem împărți
un hexagon în [[4]] triunghiuri, deci suma unghiurilor interne este`4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Un poligon cu ${x}{x|7|3,15,1} laturi va avea suma unghiurilor interne egală cu
180° × ${x-2} = ${(x-2)*180}°. Mai general, un poligon cu _n_ laturi poate fi
împărțit în [[n – 2|n – 1|n]] triunghiuri. Prin urmare,

{.text-center.reveal(when="blank-0")} Îmtr-un n-gon suma unghiurilor interne este
`= (n - 2) × 180°`.

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Poligoane Convexe și Concave

::: column.grow
Spunem că un poligon este [__concav__](gloss:concave) dacă are o porțiune
“orientată spre interior”. Ne putem imagina că această porțiune a fost [“scobită”](target:cave).
Poligoanele care _nu_ sunt concave se numesc [__convexe__](gloss:convex).

Poligoanele concave pot fi identificare în două moduri: ele au cel puțin un
[unghi intern mai mare ca 180°](target:angle). De asemenea, ele au și cel puțin
o [diagonală  ce se află _în afara_ poligonului](target:diagonal).

Pe de altă parte, în poligoanele convexe, toate unghiurile interne sunt mai mici ca
[[180]]° și toate diagonalele se află [[în interiorul|în exteriorul]] poligonului.
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

Care dintre aceste poligoane sunt concave?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Poligoane regulate

Spunem că un poligon este [__regulat__](gloss:regular-polygon) dacă toate laturile
sale au aceeași lungime și toate unghiurile au aceeași măsură. Care dintre
aceste forme sunt poligoane regulate?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Poligoanele regulate pot fi de diferite dimensiuni – dar toate poligoanele regulate
care au același număr de laturi [[sunt asemenea|sunt congruente|au aceeași arie]]!

---
> id: regular-2

Știm deja care este suma tuturor [unghiurilor interne](gloss:internal-angle) în poligoane.
În cazul poligoanelor regulate toate aceste unghiuri [[au aceeași măsură|sunt unghiuri alterne]],
deci putem calcula măsura unui singur unghi intern:

{.text-center.reveal(when="blank-0")} unghi = <mfrac><mrow>[[suma unghiurilor|numărul de unghiuri]]</mrow><mrow>[[numărul de unghiuri|suma unghiurilor]]</mrow></mfrac>
_{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x`._

{.reveal(when="blank-1 blank-2" delay=1000)} Dacă `n=3` obținem măsura unghiurilor interne
ale unui triunghi echilateral – știm deja că are valoarea [[60]]°.
_{span.reveal(when="blank-3")} Într-un poligon regulat cu ${x}{x|6|3,12,1} laturi,
fiecare unghi intern este de 180° – <mfrac class="inline"><mrow>360°</mrow><mrow>${x}</mrow></mfrac> =
${round(180-360/x)}°._

---
> id: regular-area

### Aria poligoanelor regulate

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

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apotemă" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow
Aici se poate vedea un [poligon regulat](gloss:regular-polygon) cu ${n}{n|5|4,12,1}
laturi. Fiecare latură are lungimea de [{.step-target.pill.green}1m](target:base). Hai
să incercăm sa-i calculăm aria!

Mai întâi, putem împărți poligonul în ${n} triunghiuri
[[isoscele|echilaterale|dreptunghice]] congruente.

{.reveal(when="blank-0")} Știm deja [[baza|înălțimea|aria]] acestor triunghiuri,
dar avem nevoie și de [[înălțime|laturile congruente|mediane]] pentru a le putea
calcula aria. _{span.reveal(when="blank-2")} În cazul poligoanelor regulate,
această înălțime este numită și [{.step-target.pill.yellow}apotemă](target:apothem)._

{.reveal(when="blank-1 blank-2" delay=1000)} Să observăm că există un
[triunghi dreptunghic](target:right-triangle) format de apotemă și jumătate din baza|înălțimea|aria
triunghiului isoscel. Aceasta înseamnă că putem folosi elemente de trigonometrie!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.step-target.pill.blue}Unghiurile de la baza](target:base-angle)
triunghiului isoscel (hai să le notăm α) sunt [[jumătate din|egale cu|de două ori]]
măsura [unghiului intern](target:int-angle) al poligonului:

{.text-center.reveal(when="blank-3")} `pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Pentru a determina apotema, putem folosi definiția
[[tangentei|sinusului|cosinusului]]:

{.text-center.reveal(when="blank-4")} `tan pill(α, "blue", "alpha") =
pill("olatura opusă", "yellow", "apothem") / pill("latura alăturată", "green", "half-base") =
blank("apotema", "s", "s/2") / blank("s/2", "s", "apotema")`

{.text-center.reveal(when="blank-5 blank-6")} `⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Acum, aria
[triunghiului isoscel](target:isosceles-triangle) este

{.text-center.reveal(when="blank-5 blank-6" delay=2000)} `1/2 "baza" × "înălțimea"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Poligonul constă din ${n} astfel de
triunghiuri isoscele, care au toate aceeași arie. Prin urmare, aria totală
a poligonului este

{.text-center.reveal(when="blank-5 blank-6" delay=4000)} `A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`
:::

---

## Patrulatere

> section: quadrilaterals
> id: quadrilaterals

În [cursul precedent](/course/triangles) am investigat multe proprietăți diferite
ale triunghiurilor. Acum, hai să aruncăm o privire asupra patrulaterelor.

Un _patrulater regulat_ se numește [[pătrat|dreptunghi|patrulater echilateral]].
Toate laturile sale au aceeași lungime și toate unghiurile sale sunt egale.

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

{.caption} Un __pătrat__ este un patrulater cu [patru laturi egale](target:side)
și [patru unghiuri egale](target:angle).
:::

---
> id: quadrilaterals-1

Pentru patrulatere un pic “mai puțin regulate” avem două opțiuni. Dacă vrem
ca doar _unghiurile_ să fie egale, obținem un [__dreptunghi__](gloss:rectangle).
Dacă vrem ca _laturile_ să fie egale, obținem un [__romb__](gloss:rhombus).

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

{.caption} Un __dreptunghi__ este un patrulater cu [patru unghiuri egale](target:angle).
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

{.caption} Un __romb__ este un patrulater cu [patru laturi egale](target:side).
:::

---
> id: quadrilaterals-2

Mai există câteva patrulatere care sunt și mai puțin regulate, dar care
tot au anumite proprietăți importante:

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

{.caption} Dacă ambele perechi de laturi _opuse_ sunt [paralele](gloss:parallel),
obținem un __paralelogram__.
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

{.caption} Dacă două perechi de laturi _alăturate_ au aceeași lungime, obținem un __patrulater zmeu__.
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

{.caption} Dacă cel puțin o pereche de laturi opuse este paralelă, obținem un
__trapez__.
:::

---
> id: quadrilaterals-venn

Patrulaterele se pot încadra în mai multe dintre aceste categorii. Putem vizualiza
ierarhia diferitelor tipuri de patrulatere sub forma unei [diagrame Venn](gloss:venn-diagram):

    figure: include svg/venn.svg

De exemplu, orice dreptunghi este și un [[paralelogram|romb|pătrat]] și
orice [[romb|trapez|paralelogram]] este și un patrulater zmeu. Un romb este
[[uneori|mereu|niciodată]] un pătrat și un dreptunghi este [[mereu|uneori|niciodată]]
un trapez.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Pentru a evita orice ambiguitate,
vom folosi în general doar tipul cel mai specific.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow
Acum alege patru puncte, oriunde în caseta gri din stânga.
_{span.reveal(when="points")} Le putem uni pe toate pentru a forma un patrulater._

{.reveal(when="points" delay=1000)} Hai să aflăm mijlocul fiecărei din cele patru
laturi. Dacă vom conecta mijloacele, obținem [[un alt patrulater|un triunghi|un dreptunghi]].

{.reveal(when="blank-0")} Încearcă să miști vârfurile patrulaterului exterior și
observă ce se întâmplă cu patrulaterul mai mic. Pare ca nu este pur și simplu un patrulater
_oarecare_, ci este mereu un [[paralelogram|trapez|dreptunghi]]!

{.reveal(when="blank-1")} Dar de ce se întâmplă așa? De ce rezultatul _oricărui_
patrulater devine mereu un paralelogram? Pentru a explica aceasta, avem nevoie
să desenăm una din [diagonalele](gloss:polygon-diagonal) patrulaterului inițial.

{.reveal(when="diagonal")} Diagonalele împart patrulaterul în [două triunghiuri](target:triangle).
Și acum se poate vedea că [două din laturile](target:midsegment) patrulaterului
interior sunt de fapt [[liniile mijlocii|medianele|mediatoarele]] acestor triunghiuri.

{.reveal(when="blank-2")} În [cursul anterior](/course/triangles/properties)
am arătat că într-un triunghi [liniile mijlocii](gloss:triangle-midsegment) sunt
mereu paralele cu baza. În acest caz, înseamnă că [ambele laturi](target:parallel)
sunt paralele cu diagonala – așadar ele sunt și [[paralele una cu alta|de aceeași lungime|perpendiculare una pe alta]].

{.reveal(when="blank-3" delay=2000)} Putem proceda la fel și cu
[a doua diagonală](target:other) a patrulaterului, pentru a arăta că ambele perechi de
laturi opuse sunt paralele. Și asta e tot de ce avem nevoie pentru a demonstra
că patrulaterul interior este un [paralelogram](gloss:parallelogram). _{span.qed}_
:::

---
> id: parallelograms

### Paralelograme

Se pare că paralelogramele au multe alte proprietăți interesante, altele decât
paralelismul laturilor opuse. Care din următoarele șase enunțuri sunt adevărate?

::: column.grow

    x-picker.list
      .item.md Laturile opuse sunt [congruente](gloss:congruent).
      .item(data-error="parall-error-1") Unghiurile interne sunt întotdeauna mai mici ca  90°.
      .item.md(data-error="parall-error-2") Diagonalele [sunt bisectoarele](gloss:angle-bisector) unghiurilor interne.
      .item Unghiurile opuse sunt congruente.
      .item(data-error="parall-error-3") Ambele diagonale sunt congruente.
      .item(data-error="parall-error-4") Laturile alăturate au aceeași lungime.
      .item Cele două diagonale se împart în două la mijloc.

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

Bineînțeles că simpla “observare” a acestor proprietăți nu este suficientă. Pentru a ne asigura
că ele sunt _mereu_ adevărate, avem nevoie să le _demonstrăm_:

::: tab
#### Laturi și unghiuri opuse _{span.check(when="diagonal blank-0 blank-1")}_

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
{.task} Hai să incercăm să demonstrăm că într-un paralelogram laturile și unghiurile
opuse sunt mereu congruente.

Începem prin a desena una din diagonalele paralelogramului.

{.reveal(when="diagonal")} Diagonala crează patru unghiuri noi cu laturile paralelogramului.
Cele două [unghiuri roșii](target:red-angle) și cele două [unghiuri albastre](target:blue-angle)
sunt [unghiuri alterne](gloss:alternate-angles), deci sunt [[congruente|adiacente|suplementare]].

{.reveal(when="blank-0")} Dacă ne uităm la cele [două triunghiuri](target:triangles)
create de diagonală, vom observa că ele au două unghiuri congruente și
[o latură congruentă](target:diagonal). Conform criteriului de congruență [[ULU|UUL|UU]],
cele două triunghiuri sunt congruente.

{.reveal(when="blank-1")} Aceasta înseamnă că și celelalte elemente corespondente ale
triunghiurilor vor fi congruente: în mod deosebit, ambele [perechi de laturi opuse](target:sides)
sunt congruente și ambele [perechi de unghiuri opuse](target:angles) sunt congruente. _{span.qed}_
:::

{.reveal(when="blank-1")} Și reciproca este adevărată: dacă ambele perechi de
laturi (sau unghiuri) opuse ale unui patrulater sunt congruente, atunci
patrulaterul este un paralelogram.

::: tab
#### Diagonale _{span.check(when="diagonal blank-2 blank-3")}_

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
{.task} Să demonstrăm acum că într-un paralelogram cele două diagonale
se împart pe jumătate una pe alta.

Să ne gândim la cele două triunghiuri galbene generate de diagonale:

* Tocmai am demonstrat că cele [două laturi verzi](target:side1) sunt congruente,
  pentru că ele sunt laturile opuse ale unui paralelogram.
* Cele [două unghiuri roșii](target:anglesR) și cele [două unghiuri albastre](target:anglesB)
  sunt congruente, pentru că sunt [[unghiuri alterne|unghiuri opuse|unghiuri drepte]].

{.reveal(when="blank-2")} Conform criteriului de congruență [[ULU|LLL|UUL]], ambele
triunghiuri galbene sunt, de asemenea, congruente.

{.reveal(when="blank-3")} Având în vedere că părțile corespondente ale triunghiurilor
congruente sunt la rândul lor congruente, putem concluziona că [`bar(AM)`](target:AM)
= [`bar(CM)`](target:CM) and [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM). Cu
alte cuvinte, cele două diagonale se intersectează la mijloc. _{span.qed}_
:::

{.reveal(when="blank-3")} La fel ca mai înainte, și reciproca este adevărată: dacă
cele două diagonale ale unui patrulater se împart în două părți egale  una pe alta,
atunci patrulaterul este un paralelogram.
:::

---
> id: kites

### Patrulatere zmeu

::: column.grow
Am arătat că într-un paralelogram două perechi de laturi [[opuse|alăturate]]
sunt congruente. Într-un patrulater zmeu, două perechi de laturi _alăturate_
sunt congruente.

În mod evident, numele _patrulater zmeu_ vine de la forma sa: arată ca un zmeu
pe care îl poți înălța în aer. Cu toate acestea, din toate patrulaterele speciale
pe care le-am văzut până acum, patrulaterul zmeu este singurul care poate fi și
[concav](gloss:concave): dacă are formă de suliță sau săgeată:
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

{.caption} Un patrulater zmeu convex
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

{.caption} Un patrulater zmeu concav care seamnănă cu o săgeată
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
Poate că ai observat că toate patrulaterele zmeu sunt [[simetrice|similare]].
_{span.reveal(when="blank-0")} [Axa de simetrie](gloss:axis-of-symmetry) este
[[una din diagonale|una din laturi|o linie mijlocie]]._

{.reveal.r(when="blank-1")} Diagonala împarte patrulaterul zmeu în [două triunghiuri
congruente](target:triangle1). Conform criteriul de congruență [SSS](gloss:triangle-sss)
știm că sunt congruente: ambele triunghiuri au [trei laturi congruente](target:sss)
(roșu, verde și albastru).
_{button.next-step} Continuă_

{.reveal.r(when="next-0")} Conform [PCTC](gloss:cpoct), știm că [unghiurile corespondente](target:angles) sunt congruente.
_{button.next-step} Continuă_

{.reveal.r(when="next-1")} Aceasta înseamnă, de exemplu, că [diagonala](target:d1)
este [[bisectoarea|mediatoarea|mediana]] celor [două unghiuri](target:vAngle) aflate
la capetele sale.
_{button.next-step} Continuă_

{.reveal.r(when="next-2")} Putem merge chiar și mai departe: dacă desenăm cealaltă
diagonală, obținem [încă două triunghiuri mai mici](target:triangle2). Conform criteriului
de congruență [LUL](gloss:triangle-sss) și ele sunt congruente: au aceleași
[două laturi și unghi inclus](target:sas).
_{button.next-step} Continuă_

{.reveal(when="next-3")} Asta înseamnă că [unghiul α](target:alpha) are aceeași măsură
ca [unghiul β](target:beta). Cum ele sunt [unghiuri suplementare](gloss:supplementary-angles)
alăturate, atunci α și β vor avea [[90]]°.

{.reveal(when="blank-3")} Altfel spus, diagonalele patrulaterului zmeu sunt întodeauna
[[perpendiculare|paralele]].
:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Aria patrulaterelor

Pentru a calcula aria unui triunghi în cursul precedent, am folosit trucul de
a-l transforma într-un [[dreptunghi|pătrat|pentagon]]. Putem face asta și pentru
unele patrulatere:

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
Încearcă să desenezi la stânga un dreptunghi care are aceeași arie ca paralelogramul.

{.reveal(when="draw-1")} Poți vedea că [triunghiul lipsă](target:triangle-1) din stânga
este [[exact la fel|mai mic|mai mare]] ca [triunghiul suprapus](target:triangle-2) din dreapta?
_{span.reveal(when="blank-1")}Așadar, aria paralelogramului este_

{.text-center.reveal(when="blank-1")} Aria = __{.i.m-green}baza__ × __{.i.m-yellow}înălțimea__

{.reveal(when="blank-1" delay=1000)} _Ai grijă când măsori înălțimea unui paralelogram:
de obicei, nu este identică cu una din cele două laturi._
:::

::: tab
#### Trapez _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Să ne reamintim că trapezul este un patrulater care o pereche de [laturi paralele](target:bases).
Aceste laturi paralele se numesc __bazele__ trapezului.

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
La fel ca mai înainte, încearcă sa desenezi un dreptunghi care să aibă aceeași arie
ca acest trapez.
_{span.reveal(when="draw-2")} Poți observa cum [triunghiul lipsă și triunghiul adăugat](target:triangles-3)
din partea stângă și din cea dreaptă se anulează?_

{.reveal(when="draw-2" delay=2000)} [{.step-target.pill.green} Înălțimea](target:t-height)
acestui dreptunghi este [[distanța dintre|media|lungimea]]
[laturile paralele](target:bases) ale trapezului.

{.reveal.r(when="blank-2")} [{.step-target.pill.yellow} Lungimea](target:t-width)
dreptunghiului este distanța dintre [[punctele de mijloc ale|extremitățile]] celor două
laturi neparalele. _{span.reveal(when="blank-3")} Aceasta se numește __linia mijlocie__
a trapezului._
_{button.next-step.reveal(when="blank-3")} Continuă_

{.reveal(when="next-0")} Ca și în cazul [triunghiurilor](gloss:triangle-midsegment),
linia mijlocie a unui trapez este [[paralelă cu|perpendiculară pe|de aceeași lungime ca]]
cele două baze ale sale. Lungimea liniei mijlocii este media lungimilor bazelor:
`(a+c)/2`.

{.reveal(when="blank-4")} Combinând toate acestea, obținem ecuația ariei unui trapez cu
laturile paralele [_a_](target:base-2) și [_c_](target:base-1) și înălțimea [_h_](target:t-height):

{.text-center.reveal(when="blank-4")} `A = h xx ((a+c) / 2)`
:::

::: tab
#### Patrulater zmeu _{span.check(when="blank-5")}_

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
În acest patrulater zmeu, cele [două diagonale](target:diag3) constituie lungimea și înățimea
unui mare [dreptunghi](target:rect4) care înconjoară zmeul.

Aria acestui dreptunghi este [[de două ori|la fel ca|de trei ori]] aria
patrulaterului zmeu.
_{span.reveal(when="blank-5")} Poți observa cum cele [patru triunghiuri](target:inside)
care constituie patrulaterul zmeu sunt identice cu cele [patru goluri](target:outside)
din afara lui?_

{.reveal(when="blank-5")} Asta înseamnă că aria unui patrulater zmeu cu diagonalele
[{.step-target.i.pill.green}d1](target:d31) și
[{.step-target.i.pill.yellow}d2](target:d32) este

{.text-center.reveal(when="blank-5")} _Aria_ = `1/2`
[{.step-target.i.pill.green}d1](target:d31) ×
[{.step-target.i.pill.yellow}d2](target:d32).
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
Un [romb](gloss:rhombus) este un patrulater cu patru laturi congruente. Poate că
îți amintești că orice romb este un [[paralelogram|dreptunghi|pătrat]] – și
totodată și un [[patrulater zmeu|hexagon|poligon ooncav]].

{.reveal(when="blank-6 blank-7")} Așadar, pentru a afla aria unui romb,
putem folosi fie ecuația pentru aria unui paralelogram, fie ecuația pentru
aria unui patrulater zmeu:

{.text-center.reveal(when="blank-6 blank-7")} _Aria_ =
[{.step-target.i.pill.blue}base](target:base) ×
[{.step-target.i.pill.red}height](target:height) = `1/2`
[{.step-target.i.pill.green}d1](target:d41) ×
[{.step-target.i.pill.yellow}d2](target:d42).

{.reveal(when="blank-6 blank-7" delay=1000)} _În diferite contexte, se pot da
diferite elemente ale unui romb (laturi, înalțime, diagonale) și ar trebui să alegi
oricare ecuație ce se potrivește mai bine._
:::

:::

---

## Mozaicări

> section: tessellations
> id: tessellations

[Poligoanele](gloss:polygon) apar peste tot în natură. Ele sunt utile în mod special
atunci când vrem să pavăm o suprafață mare, pentru că poligoanele se pot potrivi împreună
fără suprapuneri sau spații libere. Aceste tipuri de șabloane se numesc
[__mozaicări__](gloss:tessellation).

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} Fagure de miere [[hexagonal|triunghiular|pătratic]]
::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Pielea șarpelui de lapte Sinaloan
::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Structura celulară a frunzelor
::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Coloane de bazalt de la Giant’s Causeway din Irlanda de Nord
::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Coajă de ananas
::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Carapacea unei țestoase
:::

---
> id: tessellations-1

Oamenii au copiat multe din aceste șabloane naturale în artă, arhitectură și
tehnologie – din Roma Antică până în prezent. Iată câteva exemple:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} Model de pavaj [[dreptunghiular|pătratic|hexagonal]]
::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Seră din Proiectul Eden în Anglia
::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mozaic de la Alhambra
::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} Acoperiș [[triunghiular|hexagonal|dreptunghiular]] la Muzeul Britanic din Londra
::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Pavilion cu mozaicări celulalre în Sydney
::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Studiul diviziunii regulate a planului cu reptile_, M. C. Escher
:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Aici îți poți crea propriile mozaicări folosind poligoane regulate. Trage forme noi de pe
bara alăturată pe pânza de lucru. Ce forme se mozaichează bine ? Există forme care
nu se mozaichează deloc ? Încearcă să creezi modele interesante!

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
      h4 Exemple de mozaicări realizate de alți studenți
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Mozaicări din poligoane regulate

Poate ai observat că unele [poligoane regulate](gloss:regular-polygon) (precum
[[pătrate|pentagoane]]) se mozaichează foarte ușor, în timp ce altele (precum
[[pentagoane|triunghiuri|hexagoane]]) nu par să se mozaicheze deloc.

---
> id: tessellation-regular-1

Aceasta are legătura cu măsura [unghiurilor interne](gloss:internal-angle),
despre care am învățat anterior cum se calculează. La fiecare [vârf](gloss:polygon-vertex) din
mozaicare, se întâlnesc unghiurile interne ale multor poligoane diferite. Avem nevoie
de toate aceste unghiuri pentru a însuma [[360]]°, altfel vor exista goluri sau suprapuneri.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")
    include svg/tessellations/triangles.svg

{.caption} Triunghiurile [[se mozaichează|nu se mozaichează]] _{span.reveal(when="blank-0")} pentru că 6 × 60° = 360°._
::: column(width=160)
    include svg/tessellations/squares.svg

{.caption} Squares [[tessellate|don’t tessellate]] _{span.reveal(when="blank-1")} pentru că 4 × 90° = 360°._
::: column(width=160)
    include svg/tessellations/pentagons.svg

{.caption} Pentagons [[don’t tessellate|tessellate]] _{span.reveal(when="blank-2")} pentru că multiplii lui 108°
nu se pot însuma până la 360°._

::: column(width=160)
    include svg/tessellations/hexagons.svg

{.caption} Hexagoanele [[se mozaichează|nu se mozaichează]] _{span.reveal(when="blank-3")} pentru că 3 × 120° = 360°._
:::

---
> id: tessellation-regular-3

În mod similar se poate verifica faptul că, asemeni pentagoanelor, orice poligon regulat cu 7
sau mai multe laturi nu se mozaichează. Aceasta înseamnă că singurele poligoane regulate
care se mozaichează sunt triunghiurile, pătratele și hexagoanele!

Desigur că ai putea combina diferite tipuri de poligoane regulate într-o mozaicare,
cu condiția ca unghiurile lor interne să însumeze 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Pătrate și triunghiuri#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Pătrate și triunghiuri#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagoane și triunghiuri#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagoane și triunghiuri#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagoane, pătrate și triunghiuri#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octogoane și pătrate#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagoane (12-gaone) și triunghiuri#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagoane, hexagoane și pătrate#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Mozaicări din poligoane neregulate

Putem încerca să realizăm mozaicări și din [poligoane neregulate](gloss:irregular-polygon)
– atâta timp cât suntem atenți când le rotim și le aranjăm.

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
Se pare că putem mozaica nu doar triunghiuri echilaterale, ci _orice triunghi_!
Încearcă să muți [vârfurile](target:vertex) din această diagramă.

Într-un triunghi suma unghiurilor interne este [[180]]°. Dacă folosim fiecare unghi
[[de două ori|o dată|de trei ori]] la fiecare vârf în mozaicare, obținem 360°:

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
Și mai surprinzător, și _orice patrulater_ se poate mozaica! Suma unghiurilor interne
este de [[360]]°, așadar dacă folosim fiecare unghi [[o dată|de două ori|de trei ori]]
la fiecare vârf în mozaicare, vom obține 360°.

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

Pentagoanele sunt un pic mai complicate. Am văzut deja că pentagoanele _regulate_
[[nu se mozaichează|se mozaichează]], dar cum rămâne cu cele neregulate?

---
> id: tessellation-pentagons-1

::: column(width=220)
    include svg/tessellations/pentagons-1.svg
::: column(width=220)
    include svg/tessellations/pentagons-2.svg
::: column(width=220)
    include svg/tessellations/pentagons-3.svg
:::

Avem aici trei exemple diferite de mozaicări cu pentagoane. Ele nu sunt _regulate_,
dar sunt poligoane cu 5 laturi perfect valide.

Până acum, matematicienii au găsit doar 15 tipuri diferite de mozaicări cu pentagoane
(convexe) – cea mai recentă a fost descoperită în 2015. Nimeni nu știe dacă mai există
și altele sau dacă cele 15 sunt singurele…

---
> id: escher

### Mozaicări în Artă

Mozaicările sunt și un instrument, și inspirație pentru mulți artiști, arhitecți și
designeri – cel mai faimos este artistul olandez [M. C. Escher](bio:escher). Lucrările
lui Escher conțin creaturi ciudate și mutante, șabloane și peisaje:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Cer și Apăr I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Șopârlă” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Șopârlă, Pește, Liliac” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Fluture” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Doi Pești” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Scoici și Stele de Mare” (1941)

Aceste opere de artă arată adesea distractive și lipsite de efort, dar principiile matematice
care stau la bază sunt aceleași ca mai înainte: unghiuri, rotații, translații și poligoane.
Dacă calculele matematice nu sunt corecte, mozaicarea nu se va putea realiza!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorfoză II” by M. C. Escher (1940)

---
> id: penrose

### Plăcile Penrose

Toate mozaicările pe care le-am văzut până acum au ceva în comun:  ele sunt
__periodice__. Asta înseamnă că ele constau dintr-un model regulat care se repetă
iar și iar. Ele se pot repeta la nesfârșit în toatele direcțiile și vor arăta
la fel peste tot.

În anul 1970, matematicianul și fizicianul britanic [Roger Penrose](bio:penrose)
a descoperit mozaicări _neperiodice_ – ele se tot continuă la infinit în toate
direcțiile, dar nu arată _niciodată_ exact la fel. Acestea se numesc __Plăcile Penrose__
și ai nevoie de doar câteva tipuri diferite de poligoane pentru a crea una:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Mută glisorul pentru a dezvălui structura de bază a acestei mozaicări. Observă cum ai aceleași modele la diverse: pentagoanele mici și galbene, stelele albastre, romburile portocalii și ‘navele’ verzi apar la dimensiunea lor inițială, într-o #[strong.blue măsură puțin mai mare] și într-o #[strong.red măsură și mai mare]. ăceastă #[em auto-asemănare] poate fi folosită pentru a demonstra că această placă Penrose este neperiodică.

---
> id: penrose-1

Penrose a explorat mozaicările doar din amuzament, dar se pare că structura internă
a unor materiale reale (precum aluminiul) au un șablon similar. Șablonul a fost
utilizat chiar și pe hârtie igienică, deoarece producătorii au observat că un
model neperiodic poate fi rulat fără nicio proeminență.

---

## Poliedre

> section: polyhedra
> id: polyhedra

Până acum am văzut doar cum putem utiliza poligoanele într-o lume plană bidimensională.
Un [__poliedru__](gloss:polyhedron) este un obiect tridimensional alcătuit din poligoane.
Iată câteva exemple:

::: column.padded-thin(width=220)
    x-polyhedron#poly1(size=220 shape="PentagonalPrism")
::: column(width=220)
    x-polyhedron(size=220 shape="Hebesphenorotunda")
::: column(width=220)
    x-polyhedron(size=220 shape="StellatedDodecahedron")
:::

Poliedrele nu pot conține suprafețe curbate – de exemplu, sferele și cilindrii
nu sunt poliedre.

Poligoanele care formează un poliedru se numesc [__fețe__](gloss:polyhedron-face).
Liniile de unire a două fețe se numesc [__muchii__](gloss:polyhedron-edge) și
colțurile în care se întâlnesc muchiile se numesc [__vârfuri__](gloss:polyhedron-vertex).

---
> id: euler

Poliedrele sunt de diferite forme și mărimi – de la cuburi simple sau piramide
cu doar câteva fețe până la obiecte complexe precum steaua de deasupra care are
60 de fețe triunghiulare. Cu toate acestea, se pare că, _toate_ poliedrele
au în comun o proprietate importantă:

::: .theorem
__Formula lui Euler pentru Poliedre__
În orice poliedru, numărul fețelor (_F_) plus numărul vârfurilor (_V_)
este cu doi mai mare decât numărul muchiilor (_E_). Altfel scris,

{.text-center} `F + V = E + 2`
:::

De exemplu, dacă un poliedru are 12 fețe și 18 vârfuri, știm că are [[28]] muchii.

---
> id: euler-1

Această ecuație a fost descoperită de faimosul matematician elvețian
[Leonard Euler](bio:euler). Este adevărată pentru orice poliedru, cât timp
acesta nu conține niciun gol.

Dacă încerci diferite poliedre, precum cele de deasupra, vei descoperi că
formula lui Euler funcționează mereu. Într-un [curs ulterior](/course/graph-theory/planar-graphs)
vei învăța cum să o demonstrezi matematic.

---

## Plase și Secțiuni Transversale

> section: nets-cross-sections
> sectionStatus: dev

Întreaga noastră lume este tridimensională, dar adesea este mult mai ușor
să desenăm sau să vizualizăm în plan, obiecte bidimensionale. Există câteva
moduri diferite de a vedea poliedrele tridimensionale în formă bidimensională.

Care dintre aceste plase formează un cub
Potrivește plasa cu obiectul
https://github.com/polymake/matchthenet
Desenare plase

Descrie secțiunea transversală formată de intersecția planului cu solidul.

O secțiune transversală este intersecția unui plan cu un solid.
Un alt mod de a reprezenta o figură tridimensională într-un plan bidimensional
este de a folosi o plasă. O plasă este o reprezentare plană desfășurată a
lateralelor unei figuri tridimensionale.

rotește un cub pentru a crea o sectțiune transversală hexagonală

---

## Prisme și Piramide

> section: prisms-pyramids
> sectionStatus: dev

TODO

---

## Scalarea Formelor și a Solidelor

> section: scaling
> sectionStatus: dev

TODO

---

## Corpurile lui Platon

> section: platonic
> id: platonic

La începutul acestui curs am definit [poligoanele regulate](gloss:regular-polygon)
ca fiind poligoane  deosebit de “simetrice”, în care toate laturile și unghiurile
sunt la fel.
Putem face ceva asemănător și in cazul poliedrelor.

Într-un _poligon regulat_ toate [fețele](gloss:polyhedron-face) sunt
același tip de poligon regulat și în fiecare [vârf](gloss:polyhedron-vertex)
se întâlnesc același număr de fețe. Poliedrele care au aceste două proprietăți
se numesc [__corpuri platonice__](gloss:platonic-solid), numite după
folosoful grec [Platon](bio:plato).

Așadar cum arată corpurile platonice – și câte sunt? Pentru a construi o formă
tridimensională avem nevoie de cel puțin [[3]] fețe care să se întâlnească în
fiecare vârf. Să începem sistematic cu cel mai mic poligon regulat:
triunghiuri echilaterale:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow
Dacă vom crea un poliedru în care în fiecare vârf se întâlnesc trei
[triunghiuri echilaterale](gloss:equilateral-triangle), vom obține forma
din stânga. Aceasta se numește __tetraedru__ și are [[4]] fețe.
_{.reveal(when="blank-0")}(“Tetra” înseamnă “patru” în limba greacă)._
:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow
Dacă în fiecare vârf se întâlnesc patru triunghiuri echilaterale, obținem un
corp platonic diferit. Acesta se numește __octaedru__ și are [[8]] fețe.
_{.reveal(when="blank-0")}(“Octa” înseamnă “opt” în limba greacă. Așa cum “octogon”
înseamnă formă cu 8 laturi, “octaedru” înseamnă corp geometric cu 8 fețe.)_
:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow
Dacă în fiecare vârf se întâlnesc [[cinci]] triunghiuri, obținem un __icosaedru__.
El are [[20]] fețe. _{.reveal(when="blank-1")}(“Icosa” înseamnă “douăzeci” în limba greacă.)_
:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
Dacă  în fiecare vârf se întâlnesc [[șase]] triunghiuri, se întâmplă ceva diferit: obținem
[[o mozaicare|un patrulater|un alt icosaedru]],
_{span.reveal(when="blank-1")}în locul unui poliedru tridimensional._
:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
Nici șapte sau mai multe triunghiuri care se întâlnesc în fiecare vârf
nu determină poliedre noi: nu există suficient spațiu în jurul unui vârf
pentru atât de multe triunghiuri.
:::

Asta înseamnă că am găsit [[tre]] corpuri platonice formate din triunghiuri.
Să trecem mai departe la urmatorul poligon regulat: pătratele.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow
Dacă în fiecare vârf se întâlnesc [[trei]] pătrate, obținem un __cub__. Asemenea unui zar,
el are [[6]] fețe. _{span.reveal(when="blank-1")}Cubul mai este numit uneori și *Hexaedru*,
de la cuvântul grec “hexa" care înseamnă “șase”._
:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow
Dacă în fiecare vârf se întâlnesc [[patru]] pătrate, obținem [[o alta mozaicare|un tetraedru|un alt cub]].
_{span.reveal(when="blank-1")}La fel ca mai înainte, cinci sau mai multe pătrate nu determină poliedre noi._
:::

---
> id: platonic-dodecahedron

În continuare, să încercăm  cu pentagoane regulate:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Dacă în fiecare vârf se întâlnesc [[trei]] pentagoane, obținem un __dodecaedru__. Acesta
are [[12]] fețe. _{.reveal(when="blank-1")} (“Dodeca” înseamnă “doisprezece” în limba greacă.)_
:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow
Ca mai înainte, patru sau mai multe pentagoane [[nu determină|determină] poliedre noi
pentru că nu există suficient spațiu.
:::

---
> id: platonic-hexagons

Următoarele poligoane sunt hexagoanele:

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow
Dacă în fiecare vârf se întâlnesc trei hexagoane, obținem [[o mozaicare|un poliedru|un hexaedru]].
_{span.reveal(when="blank-0")} Având în vedere că nu există spațiu pentru mai mult de trei,
se pare că nu există corpuri platonice alcătuite din hexagoane._
:::

---
> id: platonic-final

La fel se întâmplă cu toate poligoanele regulate ce au mai mult de șase laturi. Ele nu se
mozaichează și cu siguranța că nu obținem niciun poligon tridimensional.

Asta înseamnă că există doar [[cinci]] corpuri platonice! Hai să ne uităm la toate la un loc:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")
__Tetraedru__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual}[[4]] Fețe_
_{span.dual}[[4]] Vârfuri_
_{span.dual}[[6]] Muchii_

::: column.grow.text-center(width=120)
__Cub__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")}[[6]] Fețe_
_{span.dual(target="dual1")}[[8]] Vârfuri_
_{span.dual}[[12]] Muchii_

::: column.grow.text-center(width=120)
__Octaedru__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")}[[8]] Fețe_
_{span.dual(target="dual1")}[[6]] Vârfuri_
_{span.dual}[[12]] Muchii_

::: column.grow.text-center(width=120)
__Dodecaedru__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")}[[12]] Fețe_
_{span.dual(target="dual2")}20 Vârfuri_
_{span.dual}30 Muchii_

::: column.grow.text-center(width=120)
__Icosaedru__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")}[[20]] Fețe_
_{span.dual(target="dual2")}12 Vârfuri_
_{span.dual}30 Muchii_
:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} De observat
cum numărul de fețe si vârfuri [[se schimbă|rămâne la fel]] la
[cub și octaedru](target:dual1), precum și la [dodecaedru și icosaedru](target:dual2),
în timp ce numărul muchiilor [[rămâne mereu la fel|e diferit]]. Aceste perechi
de corpuri Platonice se numesc [__corpuri duale__](gloss:polyhedron-dual).

---
> id: platonic-dual

Putem transforma un poliedru în varianta sa duală “înlocuind” fiecare față cu un vârf,
și fiecare vârf cu o față. Aceste animație arată cum:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tetraedrul este dual cu el însuși. Având în vedere că are același număr de fețe și vârfuri,
înlocuirea lor nu ar aduce nicio schimbare.

---
> id: platonic-elements

[Platon](bio:plato) credea că toată materia din Univers este alcătuită din patru
elemente: Aer, Pământ, Apă și Foc. El credea că fiecărui element îi corespunde
un corp platonic, în timp ce al cincilea ar reprezenta universul ca un întreg.
Astăzi știm că există peste 100 de elemente diferite ce sunt alcătuite din
atomi sferici, nu din poliedre.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Imagini din cartea lui Johannes Kepler “Harmonices Mundi” (1619)

---

### Corpurile lui Arhimede

> id: archimedean

Corpurile platonice sunt poliedre importante în mod deosebit, dar există nenumărate altele.

De exemplu, [__corpurile lui Arhimede__](gloss:archimedean-solid) tot trebuie să fie
alcătuite din [poligoane regulate](gloss:regular-polygon), dar se pot folosi mai multe
tipuri diferite. Numele lor e dat după un alt matematician grec,
[Arhimede din Siracuza](bio:archimedes), și există 13 astfel de corpuri geometrice:

::: column(width=170 parent="padded-thin")
    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tetraedru trunchiat__
8 faces, 12 vertices, 18 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctaedru__
14 faces, 12 vertices, 24 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cub trunchiat__
14 faces, 24 vertices, 36 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Octaedru trunchiat__
14 faces, 24 vertices, 36 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rombocuboctaedru__
26 faces, 24 vertices, 48 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cuboctaedru trunchiat__
26 faces, 48 vertices, 72 edges
::: column(width=170)
    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Cubus simus__
38 faces, 24 vertices, 60 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecaedru__
32 faces, 30 vertices, 60 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Dodecaedru trunchiat__
32 faces, 60 vertices, 90 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Icosaedru trunchiat__
32 faces, 60 vertices, 90 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecaedru__
62 faces, 60 vertices, 120 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodecaedru trunchiat__
62 faces, 120 vertices, 180 edges
::: column(width=170)
    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Dodecahedron simum__
92 faces, 60 vertices, 150 edges
:::

---
> id: polyhedra-applications

### Aplicații

Platon s-a înșelat crezând că toate elementele sunt alcătuite din corpuri platonice.
Dar poliedrele regulate au multe proprietăți speciale care le fac să apară altundeva
în natură - și putem copia aceste proprietăți în știință și inginerie.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Schelet de radiolar

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Virus icosaedric

::: column.grow
Mulți __viruși__, __bacterii__ și alte __organisme__ mici au formă de
[icosaedru](gloss:icosahedron). Virușii, de exemplu, trebuie să-și cuprindă
materialul genetic într-un cadru de multe unități proteice identice.
Icosaedrul este cel mai eficient mod de a face asta, pentru ca e format din
câteva elemente regulate, dar arată aproape ca o sferă.
:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Molecula Buckyball

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow
Multe __molecule__ au formă de poliedre regulate. Cel mai faimos exemplu este
`C_60` care constă din 60 de atomi de carbon aranjați sub forma unui
[Icosaedru trunchiat](gloss:truncated-icosahedron).

A fost descoperit în anul 1985 când oamenii de știință cercetau praful interstelar. I-au dat
numele “Buckyball” (sau Buckminsterfulerenă) after the architect [Buckminster
Fuller](bio:fuller), famous for constructing similar-looking buildings.
:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Octaedru de fluorită

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Cub de pirită

::: column.grow
Majoritatea __cristalelor__ au atomii aranjați într-o grilă regulată alcătuită
din [tetraedre](gloss:tetrahedron), [cuburi](gloss:cube) și [octaedre](gloss:octahedron).
Când se crapă sau se sparg, aceste forme se pot vedea la o scară mai mare.
:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Cadre spațiale octogonale

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Muzeul Louvre din Paris

::: column.grow
Tetraedrele și octaedrele sunt incredibil de rigide și stabile, ceea ce le face foarte utile
în __construcții__. _Cadrele spațiale_ sunt structuri poligonale ce pot susține
acoperișuri mari și poduri masive.
:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow
Corpurile platonice sunt utilizate și la crearea __zarurilor__. Datorită simetriei lor,
fiecare laterală are o [probabilitate](gloss:probability) de a ateriza cu fața în sus – deci
zarul este cinstit.

[Icosaedrul trunchiat](gloss:truncated-icosahedron) este probabil cel mai faimos poliedru
din lume: este forma mingiei de fotbal.
:::
