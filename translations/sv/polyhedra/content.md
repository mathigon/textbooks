# Polygoner och polyhedra

## polygoner

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

En [__polygon__](gloss:polygon) är en sluten, platt form som endast har raka sidor. Polygoner kan ha valfritt antal sidor och vinklar, men sidorna kan inte vara böjda. Vilka av formerna nedan är polygoner?

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

Vi ger polygoner olika namn, beroende på hur många sidor de har:

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

### Vinklar i polygoner

Varje polygon med _n-_ sidor har också _n_ [inre vinklar](gloss:internal-angle) . Vi vet redan att summan av de inre vinklarna i en triangel alltid är [[180]]° men hur är det med andra polygoner?

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

Det ser ut som att summan av inre vinklar i en fyrkant är alltid [[360]]° - exakt [[två gånger | tre gånger | halva]] summan av vinklar i en triangel. _{span.reveal(when="blank-0 blank-1")} Detta är ingen slump: varje fyrkant kan delas upp i två trianglar._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Detsamma fungerar också för större polygoner. Vi kan dela upp en femkant i [[tre]] trianglar, så dess inre vinkelsumma är `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Och vi kan dela upp en hexagon i [[fyra]] trianglar, så dess inre vinkelsumma är `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

En polygon med ${x}{x|7|3,15,1} sidorna har en inre vinkelsumma på 180° × ${x-2} = ${(x-2)*180}°. Mer generellt kan en polygon med _n-_ sidor delas upp i [[n - 2 | n - 1 | n]] trianglar. Därför,

{.text-center.reveal(when="blank-0")} Summan av inre vinklar i en _n_ -gon `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Konvexa och konkava polygoner

::: column.grow

Vi säger att en polygon är [__konkav__](gloss:concave) om den har ett avsnitt som "pekar inåt". Du kan föreställa dig att den här delen har ["blivit in"](target:cave) . Polygoner som _inte är_ konkava kallas [__konvex__](gloss:convex) .

Det finns två sätt att enkelt identifiera konkava polygoner: de har minst en [inre vinkel som är större än 180°](target:angle) . De har också minst en [diagonal som ligger _utanför_ polygonen](target:diagonal) .

I konvexa polygoner, å andra sidan, är alla inre vinklar mindre än [[180]]°, och alla diagonaler ligger [[inuti | utanför]] polygonen.

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

Vilka av dessa polygoner är konkava?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Vanliga polygoner

Vi säger att en polygon är [__regelbunden__](gloss:regular-polygon) om alla sidor har samma längd och alla vinklar har samma storlek. Vilka av dessa former är vanliga polygoner?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Vanliga polygoner kan fås i många olika storlekar - men alla vanliga polygoner med samma antal sidor [[är lika | är kongruenta | har samma område]] !

---
> id: regular-2

Vi vet redan summan av alla [inre vinklar](gloss:internal-angle) i polygoner. För vanliga polygoner har alla dessa vinklar [[samma storlek | är alternerande vinklar]] , så vi kan räkna ut storleken på en enda inre vinkel:

{.text-center.reveal(when="blank-0")} vinkel = <mfrac><mrow>[[summan av alla vinklar | antal vinklar]]</mrow><mrow>[[antal vinklar | summan av alla vinklar]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} Om `n=3` vi får storleken på de inre vinklarna på en liksidig triangel - vi vet redan att den måste vara [[60]]°. _{span.reveal(when="blank-3")} I en vanlig polygon med ${x}{x|6|3,12,1} sidor, varje inre vinkel är 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### Området med vanliga polygoner

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

Här kan du se en [vanlig polygon](gloss:regular-polygon) med ${n}{n|5|4,12,1} sidor. Varje sida har längd [{.pill.green} 1 m](target:base) Låt oss försöka beräkna dess areal!

Först kan vi dela in polygonen i ${toWord(n)} kongruenta, [[isosceles | liksidig | rätvinklade]] trianglar.

{.reveal(when="blank-0")} Vi känner redan till [[basen | höjd | området]] för dessa trianglar, men vi behöver också [[höjden | ben | medianer]] för att kunna beräkna dess areal. _{span.reveal(when="blank-2")} I vanliga polygoner kallas denna höjd ibland [{.pill.yellow} apotem](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Lägg märke till att det finns en [rätvinklad triangel som](target:right-triangle) bildas av apotemet och halva basen på likbenets triangel. Det betyder att vi kan använda trigonometri!

{.reveal(when="blank-1 blank-2" delay=2000)} De [{.pill.blue} basvinklarna](target:base-angle) för likbenets triangel (låt oss kalla dem α) är [[halva | det samma | dubbelt så]] stor som polygonens [inre vinklar](target:int-angle) :

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} För att hitta apotemet kan vi använda definitionen av [[tangenser | sinus | kosinus]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Nu är området med [likgilt triangeln](target:isosceles-triangle)

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Polygonen består av ${toWord(n)} av dessa likartade trianglar, som alla har samma område. Därför är polygonens totala yta

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## quadrilaterals

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

I den [föregående kursen](/course/triangles) undersökte vi många olika egenskaper hos trianglar. Låt oss nu titta på fyrhjulingar.

En _vanlig fyrkantig_ kallas en [[fyrkant | rektangel | liksidiga fyrsidiga]] . Alla sidor har samma längd och alla vinklar är lika.

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

{.caption} En __kvadrat__ är en fyrkant med [fyra lika sidor](target:side) och [fyra lika vinklar](target:angle) .

:::

---
> id: quadrilaterals-1

För lite "mindre regelbundna" fyrhjulingar har vi två alternativ. Om vi bara vill att _vinklarna_ ska vara lika får vi en [__rektangel__](gloss:rectangle) . Om vi bara vill att _sidorna_ ska vara lika, får vi en [__romb__](gloss:rhombus) .

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

{.caption} En __rektangel__ är en fyrkant med [fyra lika vinklar](target:angle) .

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

{.caption} En __Rhombus__ är en fyrkant med [fyra lika sidor](target:side) .

:::

---
> id: quadrilaterals-2

Det finns några andra fyrhjulingar som är ännu mindre regelbundna men som fortfarande har vissa viktiga egenskaper:

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

{.caption} Om båda par av _motsatta_ sidor är [parallella](gloss:parallel) får vi ett __Parallelogram__ .

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

{.caption} Om två par _intilliggande_ sidor har samma längd får vi en __drake__ .

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

{.caption} Om minst ett par motstående sidor är parallella får vi ett __Trapezium__ .

:::

---
> id: quadrilaterals-venn

Fyrhjulingar kan falla in i flera av dessa kategorier. Vi kan visualisera hierarkin för olika typer av fyrkantiga sidor som ett [Venn-diagram](gloss:venn-diagram) :

    figure: include svg/venn.svg

Till exempel är varje rektangel också ett [[parallellogram | romb | fyrkant]] , och varje [[romb | trapets | parallelogram]] är också en drake. En romb är [[ibland | alltid | aldrig]] en fyrkant och en rektangel är [[alltid | ibland | aldrig]] ett trapez.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} För att undvika tvetydighet använder vi vanligtvis bara den mest specifika typen.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Välj nu fyra punkter, var som helst i den grå rutan till vänster. _{span.reveal(when="points")} Vi kan ansluta dem alla till en fyrkant._

{.reveal(when="points" delay=1000)} Låt oss hitta mittpunkten för var och en av de fyra sidorna. Om vi ansluter mittpunkterna, får vi en [[annan fyrkant | en triangel | en rektangel]] .

{.reveal(when="blank-0")} Försök att flytta vertikalerna på den yttre fyrkantiga och observera vad som händer med den mindre. Det ser ut som om det inte bara är _någon_ fyrkantig, utan alltid ett [[parallellogram | trapets | rektangel]] !

{.reveal(when="blank-1")} Men varför är det så? Varför ska resultatet för _någon_ fyrhjuling alltid hamna som ett parallellogram? För att hjälpa oss förklara måste vi rita en av [diagonalerna](gloss:polygon-diagonal) i det ursprungliga fyrkantiga.

{.reveal(when="diagonal")} Diagonalen delar upp fyrkant i [två trianglar](target:triangle) . Och nu kan du se att [två av sidorna](target:midsegment) på det inre fyrkantiga är [[midsegment | medianer | vinkelräta bisektorer]] av dessa trianglar.

{.reveal(when="blank-2")} I den [föregående kursen](/course/triangles/properties) visade vi att [mellansegment](gloss:triangle-midsegment) i en triangel alltid är parallella med dess bas. I detta fall betyder det att [båda dessa sidor](target:parallel) är parallella med diagonalen - därför måste de också vara [[parallella med varandra | samma längd | vinkelrätt mot varandra]] .

{.reveal(when="blank-3" delay=2000)} Vi kan göra exakt samma sak med fyrkantens [andra diagonal](target:other) för att visa att båda par av motsatta sidor är parallella. Och det är allt vi behöver för att bevisa att det inre fyrsidiga är ett [parallellogram](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### parallellogram

Det visar sig att parallellogram har många andra intressanta egenskaper, andra än att motsatta sidor är parallella. Vilka av följande sex uttalanden är sanna?

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

Naturligtvis är det helt enkelt inte att "observera" dessa egenskaper. För att vara säker på att de _alltid är_ sanna måste vi _bevisa_ dem:

::: tab

#### Motsatta sidor och vinklar _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} Låt oss försöka bevisa att motsatta sidor och vinklar i ett parallellogram alltid överensstämmer.

Börja med att rita en av parallellogrammets diagonaler.

{.reveal(when="diagonal")} Diagonalen skapar fyra nya vinklar med sidorna på parallellogrammet. De två [röda vinklarna](target:red-angle) och de två [blåa vinklarna](target:blue-angle) är [alternerande vinklar](gloss:alternate-angles) , så de måste var och en vara [[kongruenta | intilliggande | kompletterande]] .

{.reveal(when="blank-0")} Om vi nu tittar på de [två trianglarna som](target:triangles) skapats av diagonalen ser vi att de har två kongruenta vinklar och [en kongruent sida](target:diagonal) . Av [[ASA | AAS | AA-]] kongruensvillkor, båda trianglarna måste vara kongruenta.

{.reveal(when="blank-1")} Detta innebär att de andra motsvarande delarna av trianglarna också måste vara kongruenta: i synnerhet är båda [par av motsatta sidor](target:sides) kongruenta, och båda [par av motsatta vinklar](target:angles) är kongruenta. _{span.qed}_

:::

{.reveal(when="blank-1")} Det visar sig att det konverserade också är sant: om båda par av motsatta sidor (eller vinklar) i en fyrkantig är kongruenta, måste fyrkantiga sidor vara ett parallellogram.

::: tab

#### diagonaler _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} Bevis nu att de två diagonalerna i ett parallellogram halverar varandra.

Låt oss tänka på de två gula trianglarna som genereras av diagonalerna:

* Vi har precis bevisat att de [två gröna sidorna](target:side1) är kongruenta, eftersom de är motsatta sidor av ett parallellogram. * De [två röda vinklarna](target:anglesR) och de [två blåa vinklarna](target:anglesB) är kongruenta, eftersom de är [[alternerande vinklar | motsatta vinklar | rät vinklar]] .

{.reveal(when="blank-2")} Av [[ASA | SSS | AAS-]] tillstånd, båda de gula trianglarna måste därför också vara kongruenta.

{.reveal(when="blank-3")} Nu kan vi använda det faktum att motsvarande delar av kongruenta trianglar också är kongruenta för att dra slutsatsen [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) och [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . Med andra ord korsar de två diagonalerna i mittpunkten. _{span.qed}_

:::

{.reveal(when="blank-3")} Liksom tidigare är motsatsen också sant: om de två diagonalerna i en fyrkantig halverar varandra, så är fyrsidans ett parallellogram.

:::

---
> id: kites

### drakar

::: column.grow

Vi visade ovan att de två [[motsatta]] paren [[| intilliggande]] sidor av ett parallellogram är kongruenta. I en drake är två par _intilliggande_ sidor kongruenta.

Namnet _Kite_ kommer helt klart från sin form: det ser ut som drakarna du kan flyga på himlen. Emellertid, av alla de speciella fyrhjulingar som vi hittills har sett, är draken den enda som också kan vara [konkav](gloss:concave) : om den är formad som en pil eller pil:

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

{.caption} En konvex drake

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

{.caption} En konkav drake som ser ut som en pil

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

Du kanske har märkt att alla drakar är [[symmetriska | liknande]] . _{span.reveal(when="blank-0")} [Symmetriaxeln](gloss:axis-of-symmetry) är [[en av diagonalerna | en av sidorna | ett midsegment]] ._

{.reveal.r(when="blank-1")} Diagonalen delar draken i [två kongruenta trianglar](target:triangle1) . Vi vet att de är kongruenta från [SSS-](gloss:triangle-sss) tillståndet: båda trianglarna har [tre kongruenta sidor](target:sss) (röd, grön och blå). _{button.next-step} Fortsätta_

{.reveal.r(when="next-0")} Med hjälp av [CPOCT vet](gloss:cpoct) vi därför att [motsvarande vinklar också](target:angles) måste vara kongruenta. _{button.next-step} Fortsätta_

{.reveal.r(when="next-1")} Detta betyder till exempel att [diagonalen](target:d1) är en [[bisector | vinkelrät | median]] för de [två vinklarna](target:vAngle) i dess ändar. _{button.next-step} Fortsätta_

{.reveal.r(when="next-2")} Vi kan gå ännu längre: om vi ritar den andra diagonalen, får vi [två, mindre trianglar till](target:triangle2) . Dessa måste också vara kongruenta på grund av [SAS-](gloss:triangle-sss) villkoret: de har samma [två sidor och inkluderad vinkel](target:sas) . _{button.next-step} Fortsätta_

{.reveal(when="next-3")} Detta betyder att [vinkeln a också](target:alpha) måste vara densamma som [vinkeln ß](target:beta) . Eftersom de ligger intill, måste [kompletterande vinklar](gloss:supplementary-angles) både a och ß vara [[90]]°.

{.reveal(when="blank-3")} Med andra ord är en drakes diagonaler alltid [[vinkelräta | parallellt]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Område med fyrkantiga områden

När vi beräknade arean för trianglar i den föregående kursen, använde vi tricket för att konvertera det till en [[rektangel | fyrkant | femkant]] . Det visar sig att vi också kan göra det för vissa fyrhjulingar:

::: tab

#### Parallellogram _{span.check(when="draw-1 blank-1")}_

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

Till vänster, försök att rita en rektangel som har samma område som parallellogrammet.

{.reveal(when="draw-1")} Kan du se att den [saknade triangeln](target:triangle-1) till vänster är [[exakt samma som | mindre än | större än]] den [överlappande triangeln](target:triangle-2) till höger? _{span.reveal(when="blank-1")} Därför är området för ett parallellogram_

{.text-center.reveal(when="blank-1")} Area = __{.i.m-green} bas__ × __{.i.m-yellow} höjd__

{.reveal(when="blank-1" delay=1000)} _Var noga när du mäter höjden på ett parallellogram: det är vanligtvis inte detsamma som en av de två sidorna._

:::

::: tab

#### Trapets _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Kom ihåg att trapezier är fyrkantiga sidor med ett par [parallella sidor](target:bases) . Dessa parallella sidor kallas __trapesens baser__ .

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

Liksom tidigare, försök att rita en rektangel som har samma område som detta trapez. _{span.reveal(when="draw-2")} Kan du se hur de [saknade och tillagda trianglarna](target:triangles-3) på vänster och höger avbryter?_

{.reveal(when="draw-2" delay=2000)} De [{.pill.green} höjden](target:t-height) på denna rektangel är [[avståndet mellan | genomsnitt av | längden på]] de [parallella sidorna](target:bases) av trapeziet.

{.reveal.r(when="blank-2")} De [{.pill.yellow}](target:t-width) rektangelns [bredd](target:t-width) är avståndet mellan [[mittpunkterna | slutpunkter]] för de två icke-parallella sidorna av trapeset. _{span.reveal(when="blank-3")} Detta kallas __midsegmentet__ av trapes._ _{button.next-step.reveal(when="blank-3")} Fortsätta_

{.reveal(when="next-0")} Liksom med [trianglar](gloss:triangle-midsegment) , är midsegmentet av ett trapez [[parallellt med | Vinkelrätt mot | samma längd som]] dess två baser. Midsegmentets längd är medelvärdet av basernas längder: `(a+c)/2` .

{.reveal(when="blank-4")} Om vi kombinerar allt detta får vi en ekvation för området för ett trapez med parallella sidor [_a_](target:base-2) och [_c_](target:base-1) och höjd [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Drake _{span.check(when="blank-5")}_

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

I denna drake bildar de [två diagonalerna](target:diag3) bredden och höjden på en stor [rektangel](target:rect4) som omger draken.

Området för denna rektangel är [[två gånger | samma som | tre gånger]] drakens yta. _{span.reveal(when="blank-5")} Kan du se hur var och en av de [fyra trianglarna](target:inside) som utgör draken är desamma som de [fyra luckorna](target:outside) utanför den?_

{.reveal(when="blank-5")} Detta innebär att området med en drake med diagonaler [{.i.pill.green} d1](target:d31) och [{.i.pill.yellow} d2](target:d32) är

{.text-center.reveal(when="blank-5")} _Area_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

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

En [romb](gloss:rhombus) är en fyrkant som har fyra sammanhängande sidor. Du kanske kommer ihåg att varje romb är ett [[parallellogram | rektangel | torget]] - och även en [[drake | sexhörning | konkav polygon]] .

{.reveal(when="blank-6 blank-7")} Detta betyder att vi kan använda antingen ekvationen för området för ett parallellogram, eller det för en drake:

{.text-center.reveal(when="blank-6 blank-7")} _Area_ = [{.i.pill.blue} bas](target:base) × [{.i.pill.red} höjd](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _I olika sammanhang kan du få olika delar av en romb (sidor, höjd, diagonaler), och du bör välja vilken ekvation som är mer bekväm._

:::

:::



---

## Tessellations

> section: tessellations
> id: tessellations
> translated: auto

[Polygoner](gloss:polygon) förekommer överallt i naturen. De är särskilt användbara om du vill kakla in ett stort område, eftersom du kan passa polygoner utan några luckor eller överlappningar. Mönster som det kallas [__tessellationer__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Hexagonal | triangulära | Kvadratisk]] honungskaka

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Milk Snake skin

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Cellstruktur av blad

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Basaltkolonner på Giant's Causeway i Nordirland

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Ananashud

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Sköldpadda

:::

---
> id: tessellations-1

Människor har kopierat många av dessa naturliga mönster inom konst, arkitektur och teknik - från antika Rom till nutid. Här är några exempel:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Rektangulär | Kvadratisk | Sexhörnigt]] trottoarmönster

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Växthus vid Eden-projektet i England

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaik i Alhambra

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[triangulära | Hexagonal | Rektangulärt]] tak på British Museum i London

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Cellulär tessellationspaviljong i Sydney

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Studie av Regular Division of the Plane with Reptiles_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Här kan du skapa dina egna tessellationer med vanliga polygoner. Dra helt enkelt nya former från sidofältet till duken. Vilka former stämmer väl? Finns det några former som inte tessellaterar alls? Försök skapa intressanta mönster!

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

### Tessellationer från vanliga polygoner

Du kanske har märkt att några [vanliga polygoner](gloss:regular-polygon) (som [[rutor) | pentagoner]] ) tessellera mycket lätt, medan andra (som [[pentagoner) | trianglar | sexhörningar]] ) verkar inte tessellera alls.

---
> id: tessellation-regular-1

Detta har att göra med storleken på deras [inre vinklar](gloss:internal-angle) , som vi lärde oss att beräkna tidigare. Vid varje [topp](gloss:polygon-vertex) i tessellationen möts de inre vinklarna hos flera olika polygoner. Vi behöver alla dessa vinklar för att lägga till [[360]]°, annars blir det antingen ett gap eller en överlappning.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Trianglar [[tessellate | tessellate]] _{span.reveal(when="blank-0")} eftersom 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Kvadrater [[tessellat | tessellate]] _{span.reveal(when="blank-1")} eftersom 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Pentagoner [[tessellaterar inte | tessellate]] _{span.reveal(when="blank-2")} eftersom multiplar på 108° inte lägger till 360°._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Sexhörningar [[tessellat | tessellate]] _{span.reveal(when="blank-3")} eftersom 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Du kan på liknande sätt kontrollera att, precis som pentagoner, alla vanliga polygoner med sju eller fler sidor inte tessellaterar. Detta innebär att de enda vanliga polygonerna som tessellaterar är trianglar, rutor och hexagoner!

Naturligtvis kan man kombinera olika typer av vanliga polygoner i en tessellation, förutsatt att deras inre vinklar kan lägga till 360°:

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

### Tessellationer från oregelbundna polygoner

Vi kan också prova att göra tessellationer av [oregelbundna polygoner](gloss:irregular-polygon) - så länge vi är försiktiga när vi roterar och ordnar dem.

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

Det visar sig att du kan tessellera inte bara liksidiga trianglar, utan _vilken triangel som helst_ ! Försök att flytta [topparna](target:vertex) i detta diagram.

Summan av de inre vinklarna i en triangel är [[180]]°. Om vi använder varje vinkel [[två gånger | en gång | tre gånger]] vid varje toppunkt i tessellationen får vi 360°:

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

Mer överraskande, _alla fyrkantiga_ tessellater också! Deras inre vinkelsumma är [[360]]°, så om vi använder varje vinkel en [[gång | dubbelt | tre gånger]] vid varje toppunkt i tessellationen får vi 360°.

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

Pentagoner är lite svårare. Vi såg redan att _vanliga_ pentagoner [[inte stämmer | tessellate]] , men hur är det med icke-regelbundna?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Här är tre olika exempel på tessellationer med pentagoner. De är inte _vanliga_ , men de är giltiga 5-sidiga polygoner.

Hittills har matematiker bara hittat 15 olika typer av tessellationer med (konvexa) pentagoner - den senaste upptäcktes 2015. Ingen vet om det finns några andra, eller om dessa 15 är de enda ...

---
> id: escher

### Tessellationer i art

Tessellations vi både ett verktyg och inspiration för många konstnärer, arkitekter och designer - mest känd den holländska konstnären [MC Escher](bio:escher) . Eschers verk innehåller konstiga, muterande varelser, mönster och landskap:

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

Dessa konstverk ser ofta roliga och enkla ut, men de underliggande matematiska principerna är desamma som tidigare: vinklar, rotationer, översättningar och polygoner. Om matematiken inte är rätt kommer tessellationen inte att fungera!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose brickor

Alla tessellationer vi såg hittills har en sak gemensamt: de är __periodiska__ . Det betyder att de består av ett regelbundet mönster som upprepas om och om igen. De kan fortsätta för evigt i alla riktningar och de kommer att se lika ut överallt.

På 1970-talet upptäckte den brittiska matematikern och fysikern [Roger Penrose](bio:penrose) _icke-periodiska_ tessellationer - de fortsätter oändligt i alla riktningar, men ser _aldrig_ exakt lika ut. Dessa kallas __Penrose-plattor__ , och du behöver bara några olika typer av polygoner för att skapa en:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose utforskade tessellationerna bara för skojs skull, men det visar sig att den inre strukturen i vissa verkliga material (som aluminium) följer ett liknande mönster. Mönstret användes till och med på toalettpapper, eftersom tillverkarna märkte att ett icke-periodiskt mönster kan rullas upp utan utbuktningar.

---

## Polyhedra

> section: polyhedra
> id: polyhedra
> translated: auto

Hittills har vi bara tittat på vad vi kan göra med polygoner i en platt, tvådimensionell värld. En [__polyhedron__](gloss:polyhedron) är ett tredimensionellt objekt som består av polygoner. Här är några exempel:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Polyhedra kan inte innehålla böjda ytor - sfärer och cylindrar är till exempel inte polyhedra.

Polygonerna som utgör en polyhedron kallas dess [__ansikten__](gloss:polyhedron-face) . Raderna där två ytor är anslutna kallas [__kanter__](gloss:polyhedron-edge) , och hörnen där kanterna möts kallas [__vertikaler__](gloss:polyhedron-vertex) .

---
> id: euler

Polyhedra finns i många olika former och storlekar - från enkla kuber eller pyramider med bara några ansikten, till komplexa föremål som stjärnan ovan, som har 60 triangulära ytor. Det visar sig dock att _alla_ polyeder är gemensamma med en viktig egenskap:

::: .theorem

__Eulers polyhedronformel__
I varje polyhedron är antalet ansikten ( _F_ ) plus antalet vertikaler ( _V_ ) två fler än antalet kanter ( _E_ ). Med andra ord,

{.text-center}`F + V = E + 2`

:::

Till exempel, om en polyhedron har 12 ytor och 18 vertikaler, vet vi att den måste ha [[28]] kanter.

---
> id: euler-1

Denna ekvation upptäcktes av den berömda schweiziska matematikern [Leonard Euler](bio:euler) . Det är sant för alla polyeder, så länge det inte innehåller några hål.

Om du försöker olika polyeder, som de ovan, kommer du att upptäcka att Eulers formel alltid fungerar. I [en senare kurs kommer](/course/graph-theory/planar-graphs) du att lära dig att faktiskt bevisa det matematiskt.

---

## Nät och tvärsnitt

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prismor och pyramider

> section: prisms-pyramids
> sectionStatus: dev

ATT GÖRA

---

## Skalningsformer och fasta ämnen

> section: scaling
> sectionStatus: dev

ATT GÖRA

---

## Platoniska fasta partiklar

> section: platonic
> id: platonic
> translated: auto

I början av denna kurs definierade vi [vanliga polygoner](gloss:regular-polygon) som särskilt ”symmetriska” polygoner, där alla sidor och vinklar är desamma. Vi kan göra något liknande för polyeder.

I en _vanlig polyhedron är_ alla [ansikten](gloss:polyhedron-face) alla samma typ av vanlig polygon, och samma antal ansikten möts vid varje [toppunkt](gloss:polyhedron-vertex) . Polyhedra med dessa två egenskaper kallas [__platoniska fasta ämnen__](gloss:platonic-solid) , uppkallad efter den grekiska filosofen [Platon](bio:plato) .

 Så hur ser de platoniska fasta ämnena ut - och hur många av dem finns det? För att göra en tredimensionell form, vi behöver minst [[3]] ansikten för att möta vid varje vertex. Låt oss börja systematiskt med den minsta regelbundna polygonen: liksidiga trianglar:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Om vi skapar en polyhedron där tre [liksidiga trianglar](gloss:equilateral-triangle) möts i varje topp, får vi formen till vänster. Det kallas en __Tetrahedron__ och har [[fyra]] ansikten. _{.reveal(when="blank-0")} ("Tetra" betyder "fyra" på grekiska)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Om fyra liksidiga trianglar möts vid varje toppunkt, får vi ett annat platoniskt fast material. Det kallas __Octahedron__ och har [[åtta]] ansikten. _{.reveal(when="blank-0")} ("Octa" betyder "åtta" på grekiska. Precis som "Octagon" betyder 8-sidig form, "Octahedron" betyder 8-fasad solid.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Om [[fem]] trianglar möts i varje topp, får vi __Icosahedron__ . Den har [[20]] ansikten. _{.reveal(when="blank-1")} ("Icosa" betyder "tjugo" på grekiska.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Om [[sex]] trianglar möts vid varje toppunkt, händer något annat: vi får helt enkelt [[en tessellation | en fyrkantig | en annan Icosahedron]] , _{span.reveal(when="blank-1")} istället för en tredimensionell polyeder._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Och sju eller flera trianglar i varje topp ger inte heller ny polyeder: det finns inte tillräckligt med utrymme runt en topp, för att passa så många trianglar.

:::

Det betyder att vi har hittat [[tre]] platoniska fasta partiklar bestående av trianglar. Låt oss gå vidare till nästa vanliga polygon: rutor.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Om [[tre]] fyrkanter möts vid varje topp, får vi __kuben__ . Precis som tärningar har den [[6]] ansikten. _{span.reveal(when="blank-1")} Kuben kallas ibland också _Hexahedron_ , efter det grekiska ordet "hexa" för "sex"._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Om [[fyra]] rutor möts vid varje toppunkt får vi en [[ny tessellation | en tetrahedron | en annan kub]] . _{span.reveal(when="blank-1")} Och som tidigare fungerar inte heller fem eller fler rutor._

:::

---
> id: platonic-dodecahedron

Låt oss sedan prova vanliga pentagoner:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Om [[tre]] pentagoner möts vid varje toppunkt, får vi __Dodecahedron__ . Den har [[12]] ansikten. _{.reveal(when="blank-1")} ("Dodeca" betyder "tolv" på grekiska.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Som tidigare [[fungerar inte]] fyra eller flera femtoner [[| är möjliga]] eftersom det inte finns tillräckligt med utrymme.

:::

---
> id: platonic-hexagons

Nästa regelbundna polygon att prova är hexagoner:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Om tre sexhörningar möts vid varje toppunkt får vi omedelbart en [[tessellation | polyeder | hexahedron]] . _{span.reveal(when="blank-0")} Eftersom det inte finns plats för mer än tre verkar det som om det inte finns några platoniska fasta partiklar som består av sexhörningar._

:::

---
> id: platonic-final

Detsamma gäller också för alla vanliga polygoner med mer än sex sidor. De tessellaterar inte, och vi får verkligen inga tredimensionella polygoner.

Detta innebär att det bara finns [[fem]] platoniska fasta ämnen! Låt oss titta på dem alla tillsammans:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tetrahedron__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] ansikten_
_{span.dual} [[4]] vertikaler_
_{span.dual} [[6]] kanter_

::: column.grow.text-center(width=120)

__Kub__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] ansikten_
_{span.dual(target="dual1")} [[8]] vertikaler_
_{span.dual} [[12]] kanter_

::: column.grow.text-center(width=120)

__Oktaeder__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] ansikten_
_{span.dual(target="dual1")} [[6]] vertikaler_
_{span.dual} [[12]] kanter_

::: column.grow.text-center(width=120)

__Dodecahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] ansikten_
_{span.dual(target="dual2")} 20 vertikaler_
_{span.dual} 30 kanter_

::: column.grow.text-center(width=120)

__icosahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] ansikten_
_{span.dual(target="dual2")} 12 vertikaler_
_{span.dual} 30 kanter_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Lägg märke till hur antalet ansikten och vertikaler [[byts runt | densamma]] för [kub och oktaeder](target:dual1) , liksom [dodekedron och icosahedron](target:dual2) , medan antalet kanter [[förblir desamma | är olika]] . Dessa par platoniska fasta material kallas [__dubbla fasta ämnen__](gloss:polyhedron-dual) .

---
> id: platonic-dual

Vi kan förvandla en polyhedron till dess dubbla genom att "ersätta" varje ansikte med en topp och alla toppar med ett ansikte. Dessa animationer visar hur:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tetraederen är dubbel med sig själv. Eftersom det har samma antal ansikten och toppar, byter du inte det skulle inte förändra någonting.

---
> id: platonic-elements

[Platon](bio:plato) trodde att all materia i universum består av fyra element: luft, jord, vatten och eld. Han trodde att varje element motsvarar ett av de platoniska fasta ämnena, medan det femte skulle representera universum som helhet. Idag vet vi att det finns mer än 100 olika element som består av sfäriska atomer, inte polyeder.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Arkimediska fasta partiklar

> id: archimedean

Platoniska fasta ämnen är särskilt viktiga polyeder, men det finns otaliga andra.

[__Arkimediska fasta ämnen__](gloss:archimedean-solid) , till exempel, måste fortfarande bestå av [vanliga polygoner](gloss:regular-polygon) , men du kan använda flera olika typer. De har fått sitt namn efter en annan grekisk matematiker, [Archimedes of Syracuse](bio:archimedes) , och det finns 13 av dem:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Trunkerad tetrahedron__
8 ansikten, 12 toppar, 18 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __kuboktaeder__
14 ansikten, 12 toppar, 24 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Trunkerad kub__
14 ansikten, 24 vertikaler, 36 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Trunkerad Octahedron__
14 ansikten, 24 vertikaler, 36 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __rhombicuboctahedron__
26 ansikten, 24 vertikaler, 48 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Trunkerad Cuboctahedron__
26 ansikten, 48 toppar, 72 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub kub__
38 ansikten, 24 vertikaler, 60 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 ansikten, 30 vertikaler, 60 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Trunkerad Dodekahedron__
32 ansikten, 60 toppar, 90 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Trunkerad Icosahedron__
32 ansikten, 60 toppar, 90 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 ansikten, 60 vertikaler, 120 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Trunkerad Icosidodecahedron__
62 ansikten, 120 toppar, 180 kanter

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__
92 ansikten, 60 vertikaler, 150 kanter

:::

---
> id: polyhedra-applications

### tillämpningar

Platon hade fel i att tro att alla element består av platoniska fasta ämnen. Men vanliga polyedrar har många speciella egenskaper som får dem att visas på andra håll i naturen - och vi kan kopiera dessa egenskaper inom vetenskap och teknik.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Många __virus__ , __bakterier__ och andra små __organismer__ är formade som [icosahedra](gloss:icosahedron) . Virus måste till exempel omsluta sitt genetiska material inuti ett skal med många identiska proteinenheter. Ikosahedronen är det mest effektiva sättet att göra detta eftersom den består av några få regelbundna element men nästan är formad som en sfär.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Många __molekyler__ är formade som vanliga polyedra. Det mest kända exemplet är `C_60` som består av 60 kolatomer anordnade i form av en [trunkerad Icosahedron](gloss:truncated-icosahedron) .

Det upptäcktes 1985 när forskare forskade på interstellärt damm. De kallade det "Buckyball" (eller Buckminsterfullerene) efter arkitekten [Buckminster Fuller](bio:fuller) , känd för att bygga byggnader med liknande utseende.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

De flesta __kristaller__ har sina atomer anordnade i ett vanligt rutnät bestående av [tetraedra](gloss:tetrahedron) , [kuber](gloss:cube) eller [oktaedra](gloss:octahedron) . När de spricker eller spricker kan du se dessa former i större skala.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Tetrahedra och oktaedra är otroligt styva och stabila, vilket gör dem mycket användbara i __konstruktionen__ . _Rymdramar_ är polygonala strukturer som kan stödja stora tak och tunga broar.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Platoniska fasta ämnen används också för att skapa __tärningar__ . på grund av deras symmetri har varje sida [sannolikheten](gloss:probability) för att landa uppåt - så tärningarna är rättvisa.

Den [trunkerade Icosahedron](gloss:truncated-icosahedron) är förmodligen den mest berömda polyhedronen i världen: det är formen på fotboll.

:::
