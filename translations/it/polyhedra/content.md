# Poligoni e poliedri

## Poligoni

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

Un [__poligono__](gloss:polygon) è una figura piana chiusa i cui lati sono dei segmenti. Un poligono può avere un numero arbitrario di lati e angoli, ma i lati non possono essere curvi. Quale delle seguenti figure è un poligono?

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

Il nome dei poligoni dipende dal numero dei suoi lati:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangolo]#[br]3 lati
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilatero]#[br]4 lati
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagono]#[br]5 lati
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Esagono]#[br]6 lati
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Ettagono]#[br]7 lati
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Ottagono]#[br]8 lati

---
> id: angles-0

### Angoli nei poligoni

Ogni poligono con _n_ lati possiede anche _n_ [angoli interni](gloss:internal-angle).
Sappiamo già che la somma degli angoli interni di un triangolo è sempre
[[180]]° , ma per gli altri poligoni?

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

Sembrerebbe che la somma degli angoli interni di un quadrilater sia sempre [[360]]°
– esattamente [[il doppio|il triplo|la metà]] della somma degli angoli in un triangolo.
_{span.reveal(when="blank-0 blank-1")} Non è una coincidenza: ogni quadrilatero può essere diviso in due triangoli._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Lo stesso vale per poligoni con più lati.
Possiamo suddividere un pentagono in [[3]] triangoli, quindi la somma dei suoi angoli interni sarà:
`3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} E possiamo suddividere un esagono in [[4]] triangoli, quindi la somma dei suoi angoli interni sarà: `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

Per un poligono con ${x}{x|7|3,15,1} lati la somma degli angoli interni sarà:
180° × ${x-2} = ${(x-2)*180}°. Più in generale, un poligono con _n_ lati può essere suddiviso in  [[n – 2|n – 1|n]] triangoli. Dunque:

{.text-center.reveal(when="blank-0")} Somma degli angoli interni in un poligono di _n_ lati
`= (n - 2) × 180°`.

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Poligoni convessi e concavi

::: column.grow
Diciamo che un poligono è [__concavo__](gloss:concave) se ha un vertice che
“rientra”. Puoi immaginare che questa parte sia stata [“scavata”](target:cave).
I poligoni che _non_ sono concavi si dicono [__convessi__](gloss:convex).

Ci sono due modi di identificare facilmente i poligoni concavi: possiedono almeno
un [angolo interno che è maggiore di 180°](target:angle). Hanno anche almeno
una [diagonale che giace _all'esterno_ del poligono](target:diagonal).

Nei poligoni convessi, d'altro canto, tutti gli angoli interni sono minori di
[[180]]°, e tutte le diagonali giacciono [[all'interno|all'esterno]] del poligono.
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

Quale di questi poligoni è concavo?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Poligoni regolari

Diciamo che un poligono è [__regolare__](gloss:regular-polygon) se tutti i suoi
lati hanno la stessa lunghezza e tutti i suoi angoli hanno la stessa ampiezza. Quali di
queste figure sono poligoni regolari?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

I poligoni regolari possono avere dimensioni diverse – ma tutti i poligoni regolari
con lo stesso numero di lati [[sono simili|sono congruenti|hanno la stessa area]]!

---
> id: regular-2

Conosciamo già la somma di tutti gli [angoli interni](gloss:internal-angle) di
un poligono. Per i poligoni regolari tutti questi angoli  [[hanno la stessa ampiezza|sono angoli alterni]],
possiamo così calcolare l'ampiezza di un singolo angolo interno:

{.text-center.reveal(when="blank-0")} angolo = <mfrac><mrow>[[somma degli angoli interni|numero di angoli]]</mrow><mrow>[[numero di angoli|somma degli angoli interni]]</mrow></mfrac>
_{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x`._

{.reveal(when="blank-1 blank-2" delay=1000)} Se `n=3` troviamo l'ampiezza
dell'angolo interno di un triangolo equilatero – sappiamo già che dev'essere
[[60]]°. _{span.reveal(when="blank-3")} In un poligono regolare con ${x}{x|6|3,12,1}
lati, ogni angolo interno misura: 180° – <mfrac class="inline"><mrow>360°</mrow><mrow>${x}</mrow></mfrac> =
${round(180-360/x)}°._

---
> id: regular-area

### L'area di un poligono regolare

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
Qui puoi vedere un [poligono regolare](gloss:regular-polygon) con ${n}{n|5|4,12,1}
lati. Ogni lato misura [{.step-target.pill.green}1m](target:base). Proviamo
a calcolarne l'area!

Prima di tutto, possiamo dividere il poligono in ${n} , triangoli
[[isosceli|equilateri|rettangoli]] congruenti.

{.reveal(when="blank-0")} Conosciamo già la [[base|altezza|area]] di questi
triangoli, ma ci serve anche [[l'altezza|il lato obliquo|la mediana]] per poterne calcolare
l'area. _{span.reveal(when="blank-2")} Nei poligoni regolari, questa altezza
si chiama [{.step-target.pill.yellow}apotema](target:apothem)._

{.reveal(when="blank-1 blank-2" delay=1000)} Nota che l'apotema e la metà della base di ogni triangolo isoscele sono i cateti di [un triangolo
rettangolo](target:right-triangle)
Possiamo quindi utilizzare la trigonometria!

{.reveal(when="blank-1 blank-2" delay=2000)} gli [{.step-target.pill.blue}angoli alla base](target:base-angle)
del triangolo isoscele (chiamiamoli α) misurano [[la metà di|come|il doppio di]]
un [angolo interno](target:int-angle) del poligono:

{.text-center.reveal(when="blank-3")} `pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Per trovare l'apotema, possiamo usare la definizione di
[[tangente|seno|coseno]]:

{.text-center.reveal(when="blank-4")} `tan pill(α, "blue", "alpha") =
pill("cateto opposto", "yellow", "apothem") / pill("cateto adiacente", "green", "half-base") =
blank("apotema", "s", "s/2") / blank("s/2", "s", "apotema")`

{.text-center.reveal(when="blank-5 blank-6")} `⇒ pill("apotema", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Allora, l'area del
[triangolo isoscele](target:isosceles-triangle) vale:

{.text-center.reveal(when="blank-5 blank-6" delay=2000)} `1/2 "base" × "altezza"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Il poligono è formato da ${n}
triangoli isosceli, che hanno tutti la stessa area. Perciò, l'area
totale del poligono sarà:

{.text-center.reveal(when="blank-5 blank-6" delay=4000)} `A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`
:::

---

## Quadrilateri

> section: quadrilaterals
> id: quadrilaterals

Nel [corso precedente](/course/triangles) abbiamo investigato molte
proprietà dei triangoli. Ora concentriamoci sui quadrilateri.

Un _quadrilatero regolare_ è chiamato [[quadrato|rettangolo|quadrilatero equilatero]].
Tutti i suoi lati hanno la stessa lunghezza e tutti i suoi angoli hanno la stessa ampiezza.

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

{.caption} Un __quadrato__ è un quadrilatero con [quattro lati uguali](target:side)
e [quattro angoli congruenti](target:angle).
:::

---
> id: quadrilaterals-1

Per i quadrilateri un po' meno “regolari”, abbiamo due opzioni. Se vogliamo che solo
gli _angoli_ siano uguali, otteniamo un [__rettangolo__](gloss:rectangle). Se vogliamo che solo
i _lati_ siano uguali, otteniamo un [__rombo__](gloss:rhombus).

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

{.caption} Un __rettangolo__ è un quadrilatero con [quattro angoli uguali](target:angle).
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

{.caption} Un __rombo__ è un quadrilatero con [quattro lati lunghi uguali](target:side).
:::

---
> id: quadrilaterals-2

Esistono anche altri quadrilateri che sono ancora meno regolari, ma che possiedono comunque
delle proprietà importanti:

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

{.caption} Se entrambe le coppie di lati _opposti_ sono [paralleli](gloss:parallel), otteniamo
un __parallelogramma__.
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

{.caption} Se due coppie di lati _adiacenti_ hanno la stessa lunghezza, otteniamo un __deltoide (o aquilone)__.
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

{.caption} Se almeno una coppia di lati opposti è parallela, otteniamo un
__trapezio__.
:::

---
> id: quadrilaterals-venn

Ogni quadrilatero può appartenere a più di una di queste categorie. Possiamo visualizzare la
gerarchia dei diversi tipi di quadrilateri con un [diagramma di Venn](gloss:venn-diagram):

    figure: include svg/venn.svg

Ad esempio, ogni rettangolo è anche un [[parallelogramma|rombo|quadrato]], e
e ogni [[rombo|trapezio|parallelogramma]] è anche un deltoide. Un rombo
[[può essere|è sempre|non è mai]] un quadrato, mentre un rettangolo [[è sempre|è talvolta|non è mai]]
un trapezio.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Per evitare ogni ambiguità, si indica normalmente la categoria più specifica a cui appartiene il quadrilatero.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow
Scegli ora quattro punti qualsiasi, nel riquadro grigio a sinistra.
_{span.reveal(when="points")} Possiamo connetterli per formare un quadrilatero._

{.reveal(when="points" delay=1000)} Troviamo i punti medi di ognuno dei quattro
lati. Se connettiamo i punti medi, otteniamo [[un altro quadrilatero|un triangolo|un rettangolo]].

{.reveal(when="blank-0")} Prova a spostare i vertici del quadrilatero esterno e
osserva cosa accade a quello interno. Si direbbe che non è solo un quadrilatero _qualsiasi_
, bensì un [[parallelogramma|trapezio|rettangolo]]!

{.reveal(when="blank-1")} Ma perché?Come mai il risultato
per _ogni_ quadrilatero è sempre un parallelogramma? Per capire meglio,
dobbiamo disegnare una delle [diagonali](gloss:polygon-diagonal) del quadrilatero
originale.

{.reveal(when="diagonal")} La diagonale divide il quadrilatero in [due
triangoli](target:triangle). E ora puoi vedere che [due dei lati](target:midsegment)
del quadrilatero interno sono in realtà [[le linee che congiungono i punti medi|le mediane|gli assi]]
di questi triangoli.

{.reveal(when="blank-2")} Nel [corso precedente](/course/triangles/properties)
abbiamo dimostrato che i [segmenti che congiungono i punti medi](gloss:triangle-midsegment) di un triangolo sono sempre
paralleli alle sue basi. In questo caso, significa che [entrambi questi lati](target:parallel)
sono paralleli alla diagonale – e quindi devono anche essere [[paralleli tra di loro|lunghi uguali|perpendicolari]].

{.reveal(when="blank-3" delay=2000)} Possiamo fare lo stesso con la [seconda
diagonale](target:other) del quadrilatero, per mostrare che entrambe le coppie
di lati opposti sono parallele. Ed ecco tutto ciò che serve per dimostrare che il quadrilatero
interno è un [parallelogramma](gloss:parallelogram). _{span.qed}_
:::

---
> id: parallelograms

### Parallelogrammi

Si da il caso che i parallelogrammi abbiano molte altre proprietà interessanti, oltre
al fatto che i lati opposti sono paralleli. Quale delle sei affermazioni seguenti è
vera?

::: column.grow

    x-picker.list
      .item.md I lati opposti sono [congruenti](gloss:congruent).
      .item(data-error="parall-error-1") Gli angoli interni misurano sempre meno di 90°.
      .item.md(data-error="parall-error-2") Le diagonali sono le [bisettrici](gloss:angle-bisector) degli angoli interni.
      .item Gli angoli opposti sono congruenti.
      .item(data-error="parall-error-3") Entrambe le diagonali sono congruenti.
      .item(data-error="parall-error-4") I lati adiacenti hanno la stessa lunghezza
      .item Le due diagonali si tagliano a metà.

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

Naturalmente, la semplice “osservazione” di queste proprietà non basta. Per essere certi che
siano _sempre_ vere, dobbiamo  _dimostrarle_ :

::: tab
#### Lati opposti e angoli _{span.check(when="diagonal blank-0 blank-1")}_

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
{.task} Proviamo ora a dimostrare che i lati e gli angoli opposti in in parallelogramma sono sempre congruenti.

Inizia tracciando una delle diagonali del parallelogramma.

{.reveal(when="diagonal")} La diagonale crea quattro nuovi angoli con i lati
del parallelogramma. I due [angoli rossi](target:red-angle) e i due
[angoli blu](target:blue-angle) sono [angoli alterni](gloss:alternate-angles),
quindi devono essere [[congruenti|adiacenti|supplementari]].

{.reveal(when="blank-0")} Ora, osservando i [due triangoli](target:triangles)
creati dalle diagonali, notiamo che essi hanno due angoli congruenti,
e [un lato congruente](target:diagonal). Secondo il criterio di congruenza [[ALA|AAS|AA]]
i due triangoli devono essere congruenti.

{.reveal(when="blank-1")} Ciò significa che anche le altre grandezze corrispondenti nei due triangoli
devono essere uguali: in particolare, entrambe le [coppie di lati
opposti](target:sides) sono congruenti, e entrambe le [coppie di angoli opposti](target:angles) sono congruenti. _{span.qed}_
:::

{.reveal(when="blank-1")} Si dà il caso che anche il contrario è vero: se entrambe le
coppie di lati (o angoli) opposti in un quadrilatero sono cungruenti, allora il
quadrilatero dev'essere un parallelogramma.

::: tab
#### Diagonali _{span.check(when="diagonal blank-2 blank-3")}_

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
{.task} Ora dimostra che le due diagonali di un parallelogramma si intersecano nel loro punto medio.

Riflettiamo sui due triangoli gialli generati dalle diagonali:

* Abbiamo appena dimostrato che i [due lati verdi](target:side1) sono congruenti,
  perché sono i lati opposti di un parallelogramma.
* I [due angoli rossi](target:anglesR) e i [due angoli blu](target:anglesB) sono
  congruenti, perché sono [[angoli alterni|angoli opposti|angoli retti]].

{.reveal(when="blank-2")} Secondo il criterio [[ALA|LLL|AAL]], entrambi i triangoli
gialli devono quindi essere congruenti.

{.reveal(when="blank-3")} Possiamo ora sfruttare il fatto che le misure corrispondenti di
due triangoli congruenti sono congruenti, per concludere che[`bar(AM)`](target:AM)
= [`bar(CM)`](target:CM) e [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM). In
altre parole, le due diagonali si intersecano nel loro punto medio. _{span.qed}_
:::

{.reveal(when="blank-3")} Come prima, anche il contrario è vero: se le due
diagonali di un quadrilatero si tagliano a metà, allora il quadrilatero è un parallelogramma.
:::

---
> id: kites

### Aquiloni (o deltoidi)

::: column.grow
Abbiamo mostrato sopra che le due coppie di lati [[opposti|adiacenti]] di un
parallelogramma sono congruenti. In un aquilone, due coppie di lati _adiacenti_ sono
congruenti.

Il nome _aquilone_ fa chiaramente riferimento agli aquiloni che puoi far
volare nel cielo. Tuttavia, tra tutti i quadrilateri particolari che abbiamo visto fin qui,
l'aquilone è l'unico che può anche essere [concavo](gloss:concave): se è a forma di freccia:
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

{.caption} Un aquilone convesso
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

{.caption} Un aquilone concavo a forma di freccia
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
Avrai forse notato, che tutti gli aquiloni sono [[simmetrici|simili]].
_{span.reveal(when="blank-0")} L'[asse di simmetria](gloss:axis-of-symmetry) è
[[una delle diagonali|uno dei lati|il segmento che collega due punti medi]]._

{.reveal.r(when="blank-1")} La diagonale divide l'aquilone in [due triangoli
congruenti](target:triangle1). Sappiamo che sono congruenti grazie al criterio
[LLL](gloss:triangle-sss): entrambi i triangoli hanno [tre lati congruenti](target:sss) (rosso, verde e blu).
_{button.next-step} Continua_

{.reveal.r(when="next-0")} Osservando le [parti corrispondenti dei triangoli congruenti](gloss:cpoct), sappiamo quindi che anche gli
[angoli corrispondenti](target:angles) devono essere congruenti.
_{button.next-step} Continua_

{.reveal.r(when="next-1")} Questo significa, ad esempio,che la [diagonale](target:d1)
è una [[bisettrice|perpendicolare|mediana]] dei [due angoli](target:vAngle) ai suoi
estremi.
_{button.next-step} Continua_

{.reveal.r(when="next-2")} E non è tutto: se tracciamo l'altra diagonale,
otteniamo [altri due triangoli più piccoli](target:triangle2). Anche questi devono essere
congruenti, per via del criterio [LAL](gloss:triangle-sss) : hanno gli stessi [due lati e l'angolo da essi incluso](target:sas).
_{button.next-step} Continua_

{.reveal(when="next-3")} Questo significa che l'[angolo α](target:alpha) dev'essere
uguale a [angle β](target:beta). Siccome sono adiacenti, [angoli supplementari](gloss:supplementary-angles) sia α che β devono misurare [[90]]°.

{.reveal(when="blank-3")} In altre parole, le diagonali di un aquilone sono sempre
[[perpendicolari|parallele]].
:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Area di un quadrilatero

Per calcolare l'area di un triangolo nel corso precedente, abbiamo sfruttato
l'idea di trasformarlo in un [[rettangolo|quadrato|pentagono]]. Potremo fare
lo stesso per alcuni quadrilateri:

::: tab
#### Parallelogramma _{span.check(when="draw-1 blank-1")}_

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
A sinistra, prova a disegnare un rettangolo che abbia la stessa area del
parallelogramma.

{.reveal(when="draw-1")} Riesci a vedere che il [triangolo mancante](target:triangle-1)
a sinistra è [[esattamente lo stesso|più piccolo|più grande]] del [triangolo sovrapposto](target:triangle-2) a destra?
_{span.reveal(when="blank-1")} Perciò l'area di un parallelogramma è_

{.text-center.reveal(when="blank-1")} Area = __{.i.m-green}base__ × __{.i.m-yellow}altezza__

{.reveal(when="blank-1" delay=1000)} _Fai attenzione quando misuri l'altezza di un
parallelogramma: normalmente non è uguale alla lunghezza di uno dei lati._
:::

::: tab
#### Trapezio _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Ricorda che i trapezi sono quadrilateri con una coppia di  [lati paralleli](target:bases).
Questi lati paralleli si chiamano __basi__ del trapezio.

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
Come prima, prova a disegnare un rettangolo che abbia la stessa area di questo trapezio.
_{span.reveal(when="draw-2")} Riesci a vedere come il [triangolo mancante e quello aggiunto](target:triangles-3) a sinistra si bilanciano?_

{.reveal(when="draw-2" delay=2000)} L'[{.step-target.pill.green} altezza](target:t-height)
di questo rettangolo è la [[distanza tra i |media dei|lunghezza dei]] [lati paralleli](target:bases) del trapezio.

{.reveal.r(when="blank-2")} La [{.step-target.pill.yellow} base](target:t-width)
del rettangolo è la distanza tra i [[punti medi|vertici]] dei due
lati obliqui del trapezio.

_{span.reveal(when="blank-3")}._
_{button.next-step.reveal(when="blank-3")} Continua_

{.reveal(when="next-0")} Come nei [triangoli](gloss:triangle-midsegment), il segmento
che congiunge i punti medi dei lati obliqui in un trapezio è [[parallelo alle|perpendicolare alle|lungo come le]]
sue due basi. La lunghezza di questo segmento è la media delle lunghezze delle
basi: `(a+c)/2`.

{.reveal(when="blank-4")} Combinando queste informazioni, otteniamo un'equazione per
l'area di un trapezio con basi [_a_](target:base-2) e [_c_](target:base-1),
e altezza [_h_](target:t-height):

{.text-center.reveal(when="blank-4")} `A = h xx ((a+c) / 2)`
:::

::: tab
#### Aquilone _{span.check(when="blank-5")}_

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
In questo aquilone, le [due diagonali](target:diag3) formano la base e l'altezza di
un grande [rettangolo](target:rect4) che incornicia l'aquilone.

L'area di questo rettangolo è [[il doppio dell'|uguale all'|il triplo dell']]area dell'aquilone. _{span.reveal(when="blank-5")} Hai notato come ognuno dei [quattro
triangoli](target:inside) che compongono l'aquilone sono uguali ai
[quattro buchi](target:outside) all'esterno?_

{.reveal(when="blank-5")} Ciò significa che l'area di un aquilone con diagonali
[{.step-target.i.pill.green}d1](target:d31) e
[{.step-target.i.pill.yellow}d2](target:d32) è

{.text-center.reveal(when="blank-5")} _Area_ = `1/2`
[{.step-target.i.pill.green}d1](target:d31) ×
[{.step-target.i.pill.yellow}d2](target:d32).
:::

::: tab
#### Rombo _{span.check(when="blank-6 blank-7")}_

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
Un [rombo](gloss:rhombus) è un quadrilatero che ha quattro lati congruenti. Come
ricorderai, ogni rombo è un [[parallelogramma|rettangolo|quadrato]] – e
anche un [[aquilone|esagono|poligono concavo]].

{.reveal(when="blank-6 blank-7")} Di conseguenza, per trovare l'area di un rombo,
possiamo usare l'equazione per l'area di un parallelogramma, o quella per
l'area di un aquilone:

{.text-center.reveal(when="blank-6 blank-7")} _Area_ =
[{.step-target.i.pill.blue}base](target:base) ×
[{.step-target.i.pill.red}altezza](target:height) = `1/2`
[{.step-target.i.pill.green}d1](target:d41) ×
[{.step-target.i.pill.yellow}d2](target:d42).

{.reveal(when="blank-6 blank-7" delay=1000)} _A dipendenza del contesto, potresti
conoscere diverse informazioni di un rombo (lati, altezza, diagonali), e dovrai
quindi scegliere la formula più efficace._
:::

:::

---

## Tassellazioni

> section: tessellations
> id: tessellations

I [poligoni](gloss:polygon) appaiono ovunque nel mondo che ci circonda. Sono particolarmente
utili per piastrellare una grande superficie, perché talvolta li si possono accostare
senza spazi o sovrapposizioni. Queste strutture sono chiamate
[__tassellazioni__](gloss:tessellation).

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} Alveare [[esagonale|triangolare|quadratico]]
::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Pelle del serpente del latte
::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Struttura cellulare delle foglie
::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Colonne di basalto sul Selciato del Gigante in Irlanda del Nord.
::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Buccia d'ananas
::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Guscio di una tartaruga
:::

---
> id: tessellations-1

Gli esseri umani hanno copiato molte di queste strutture presenti in natura nell'arte, in architettura e
in tecnologia – dall'antica Roma fino ad oggi. Ecco qualche esempio:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} Piastrellatura [[rettangolare|quadratica|esagonale]]
::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Serra al Progetto Eden in Inghilterra
::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaico all'Alhambra
::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} Tetto [[triangolare|esagonale|rettangolare]] al British Museum di Londra
::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Padiglione con tassellazione cellulare a Sydney
::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Studio della divisione rettangolare del piano con rettili_, M. C. Escher
:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Qui puoi creare la tua propria tassellazione usando dei poligoni regolari. Trascina le
nuove forme dalla barra laterale sulla tela. Quali forme funzionano bene? Quali
non funzionano? Prova a creare strutture interessanti!

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

### Tassellazioni con poligoni regolari

Avrai notato che con alcuni [poligoni regolari](gloss:regular-polygon) (ad esempio con i
[[quadrati|pentagoni]]) si può ricoprire molto facilmente una superficie, mentre con altri (come
[[i pentagoni|i triangoli|gli esagoni]]) non sembra possibile.

---
> id: tessellation-regular-1

Questo ha a che vedere con l'ampiezza dei loro [angoli interni](gloss:internal-angle),
che abbiamo imparato a calcolare prima. In ogni [vertice](gloss:polygon-vertex) della
tassellazione, gli angoli interni di più poligoni sono accostati. La
somma di tutti questi angoli dev'essere [[360]]°, altrimenti avremo un buco o una sovrapposizione.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")
    include svg/tessellations/triangles.svg

{.caption} I triangoli [[possono tassellare|non possono tassellare]] _{span.reveal(when="blank-0")} il piano perché 6 × 60° = 360°._
::: column(width=160)
    include svg/tessellations/squares.svg

{.caption} I quadrati [[possono tassellare|non possono tassellare]] _{span.reveal(when="blank-1")} il piano, poiché 4 × 90° = 360°._
::: column(width=160)
    include svg/tessellations/pentagons.svg

{.caption} I pentagoni [[non possono tassellare|possono tassellare]] _{span.reveal(when="blank-2")} il piano, perché nessun multiplo di 108°
corrisponde a 360°._

::: column(width=160)
    include svg/tessellations/hexagons.svg

{.caption} Gli esagoni [[possono tassellare|non possono tassellare]] _{span.reveal(when="blank-3")} il piano, perché 3 × 120° = 360°._
:::

---
> id: tessellation-regular-3

In modo analogo, si può verificare che, come il pentagono, ogni poligono regolare con 7 lati o
più non può tassellare il piano. Questo significa che gli unici poligoni regolari che
producuno delle tassellazioni sono i triangoli, i quadrati e gli esagoni!

Naturalmente si possono combinare diversi tipi di poligoni regolari in una
tassellazione, a condizione che la somma dei loro angoli interni sia 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Quadrati e triangoli#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Quadrati e triangoli#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Esagoni e triangoli#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Esagoni e triangoli#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Esagoni, quadrati e triangoli#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Ottagoni e quadrati#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagoni e triangoli#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagoni, esagoni e quadrati#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Tassellazioni con poligoni irregolari

Possiamo anche provare a creare delle tassellazioni con [poligoni irregolari](gloss:irregular-polygon)
– basta ruotarli e disporli con cura.

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
Scopriamo così che non funzionano solo le tassellazioni con i triangoli equilateri, bensì con _ogni
triangol_! Prova a spostare [vertici](target:vertex) in questo diagramma.

La somma degli angoli interni di un tiangolo è [[180]]°. Se usiamo ogni angolo
[[due volte|una volta|tre volte]] in ogni vertice della tassellazione, otteniamo 360°:

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
Sorprendentemente, _ogni quadrilatero_ può tassellare il piano! La somma dei suoi angoli interni
è [[360]]°, quindi se usiamo ogni angolo [[una volta|due volte|tre volte]] in ogni
vertice della tassellazione, otteniamo 360°.

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

Con i pentagoni è un po' più difficile. Abbiamo già visto che i pentagoni _regolari_  [[non tassellano|tessellano]] il piano, ma cosa possiamo dire di quelli irregolari?

---
> id: tessellation-pentagons-1

::: column(width=220)
    include svg/tessellations/pentagons-1.svg
::: column(width=220)
    include svg/tessellations/pentagons-2.svg
::: column(width=220)
    include svg/tessellations/pentagons-3.svg
:::

Ecco qui tre esempi diversi di tassellazioni con pentagoni. Non sono
_regolari_, ma sono poligoni di 5 lati perfettamente legittimi.

Sinora, i matematici hanno trovato solo 15 diversi tipi di tassellazioni con
pentagoni (convessi) – la più recenti delle quali è stata scoperta nel 2015. Nessuno
sa se ce ne sono altre, o se queste 15 sono le uniche…

---
> id: escher

### Tassellazioni nell'arte

Le tassellazioni sono servite da strumento e ispirazione per molti artisti, architetti e
designers – in particolare all'artista olandese [M. C. Escher](bio:escher). Il lavoro di
Escher contiene creature curiose e mutanti, schemi e paesaggi:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Cielo e acqua I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lucertole” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lucertola, Pesce, Pipistrello” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Farfalla” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Due pesci” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Conchiglie e Stelle marine” (1941)

Queste opere spesso sembrano divertenti e prodotte con naturalezza, ma i principi matematici
su cui si basano sono gli stessi di prima: angoli, rotazioni, traslazioni e poligoni.
Se i conti non tornano, la tassellazione non funzionerà!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorfosi II” di M. C. Escher (1940)

---
> id: penrose

### Tassellazioni di Penrose

Tutte le tassellazioni che abbiamo visto sinora hanno una cosa in comune: sono
__periodiche__. Ciò significa che consistono in uno schema regolare che è ripetuto
ancora e ancora. Possono estendersi all'infinito, in ogni direzione, e appariranno
uguali ovunque.

Negli anni'70, il matematico e fisico britannico [Roger Penrose](bio:penrose)
scoprì le tassellazioni _non-periodiche_  – che si estendono sì all'infinito in ogni
direzione, ma non appaiono _mai_ esattamente uguali. Qeste tassellazioni si chiamano __tassellature
di Penrose__, e servono solo un pochi tipi di poligoni diversi per
crearne una:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Sposta il cursore per far apparire la struttura sottostante di questa tassellazione. Nota come le stesse strutture appaiono in dimensioni diverse: i piccoli pentagoni arancioni, le stelle blu, i rombi viola e le ‘barchette’ verdi appaiono nella loro dimensione originale, #[strong.blue leggermente più grandi] e #[strong.red ancora più grandi]. Questa #[em auto-similarità] può essere usata per dimostrare che la tassellatura di Penrose non è periodica.

---
> id: penrose-1

Penrose studiava le tassellazioni per puro divertimento, ma si da il caso che la struttura
interna di alcuni materiali (come l'alluminio) seguano una struttura
di questo tipo. La struttura è stata usata persino sulla carta igienica, perché i fabbricanti
hanno notato che una struttura non periodica può essere arrotolata senza rigonfiamenti.

---

## Poliedri

> section: polyhedra
> id: polyhedra

Fino ad ora abbiamo considerato i poligoni solo in un universo piatto,
bidimensionale. Un [__poliedro__](gloss:polyhedron) è un oggetto tridimensionale
delimitato da poligoni. Ecco alcuni esempi:

::: column.padded-thin(width=220)
    x-polyhedron#poly1(size=220 shape="PentagonalPrism")
::: column(width=220)
    x-polyhedron(size=220 shape="Hebesphenorotunda")
::: column(width=220)
    x-polyhedron(size=220 shape="StellatedDodecahedron")
:::

I poliedri non possono avere facce curve – la sfera e il cilindro, ad esempio,
non sono poliedri.

I poligoni che delimitano un poliedro si chiamano [__facce__](gloss:polyhedron-face).
Le linee lungo le quali si incontrano due facce si dicono [__spigoli__](gloss:polyhedron-edge),
e i punti in cui si incontrano gli spigoli sono chiamati [__vertici__](gloss:polyhedron-vertex).

---
> id: euler

I poliedri possono avere diverse forme e dimensioni – da semplici cubi o
piramidi con poche facce, fino ad oggetti complessi come la stella illustrata sopra, che
ha 60 facce triangolari. Tuttavia, _tutti_ i poliedri hanno un'importante proprietà in comune:

::: .theorem
__La formula di Eulero per i poliedri__
In ogni poliedro, il numero di facce (_F_) addizionato al numero di vertici (_V_)
supera di due il numero di spigoli (_S_). In altre parole,

{.text-center} `F + V = S + 2`
:::

Ad esempio, ise un poliedro ha 12 facce e 18 vertici, sappiamo che dovrà avere
 [[28]] spigoli.

---
> id: euler-1

Questa equazione fu scoperta dal famoso matematico svizzero [Leonard
Euler](bio:euler). È valida per ogni poliedro, a condizione che non contenga buchi.

Se provi con diversi poliedri, come quelli sopra, scoprirai che la formula di Eulero funziona
sempre. In [un corso seguente](/course/graph-theory/planar-graphs)
scoprirai come dimostrarla matematicamente.

---

## Sviluppi e sezioni piane

> section: nets-cross-sections
> sectionStatus: dev

Il nostro mondo è tridimensionale – ma spesso è molto più semplice disegnare
e visualizzare oggetti piatti, bidimensionali. Ci sono diversi modi di
visualizzare un poliedro tridimensionale in due dimensioni.

Quale di questi sviluppi forma un cubo?
Associa ogni sviluppo all'oggetto tridimensionale
https://github.com/polymake/matchthenet
Disegnare sviluppi piani.

Descrivi la sezione formata dall'intersezione tra il piano e il solido.

Una sezione piana è l'intersezione di un piano con un solido.
Un altro modo di rappresentare un oggetto tridimensionale in due dimensioni
è quello di usare uno sviluppo piano. Uno sviluppo piano è una rappresentazione piana delle facce di
un oggetto tridimensionale.

ruota un cubo in modo da ottenere una sezione esagonale

---

## Prismi e piramidi

> section: prisms-pyramids
> sectionStatus: dev

TODO

---

## Omotetia di figure e solidi

> section: scaling
> sectionStatus: dev

TODO

---

## Solidi platonici

> section: platonic
> id: platonic

All'inizio di questo corso abbiamo definito i [poligoni regolari](gloss:regular-polygon)
come poligoni particolarmente “simmetrici”, in cui tutti i lati e gli angoli sono congruenti.
Possiamo fare qualcosa di analogo con i poliedri.

In un _poliedro regolare_ tutte le [facce](gloss:polyhedron-face) sono lo stesso tipo
di poligono regolare, e lo stesso numero di facce si incontra in ogni
[vertice](gloss:polyhedron-vertex). I poliedri con queste due proprietà si dicono
 [__solidi platonici__](gloss:platonic-solid), in onore del filosofo greco
 [Platone](bio:plato).

Allora, come sono fatti i solidi platonici – e quanti ce ne sono? per
creare un solido, abbiamo bisogno che almeno [[3]] facce si incontrino in ogni
vertice. Cominciamo con ordine con il più piccolo poligono regolare:
il triangolo equilatero:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow
Se creiamo un poliedro in cui tre [triangoli equilateri](gloss:equilateral-triangle)
si incontrano in ogni vertice, otteniamo il solido a sinistra. È un
__tetraedro__ e ha [[4]] facce. _{.reveal(when="blank-0")}(“tetra” significa
“quattro” in greco)._
:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow
Se quattro triangoli equilateri si incontrano in ogni vertice, otteniamo un solido platonico
diverso. È chiamato __ottaedro__ e ha [[8]] facce.
_{.reveal(when="blank-0")}(“octa” significa “otto” in greco. Come “ottagono”
significa figura con 8 lati, “ottaedro” significa solido con 8 facce.)_
:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow
Se [[cinque]] triangoli si incontrano in ogni vertice, otteniamo l'__icosaedro__. Ha
[[20]] facce. _{.reveal(when="blank-1")}(“icosa” significa “venti” in greco.)_
:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
Se [[sei]] triangoli si incontrano in ogni vertice, otteniamo un oggetto diverso: è
[[una tassellazione|un quadrilatero|un altro icosaedro]],
_{span.reveal(when="blank-1")}anziché un poliedro tridimensionale._
:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
E nemmeno sette o più triangoli che si incontrano in ogni vertice possono produrre un nuovo poliedro:
non c'è abbastanza spazio attorno ad ogni vertice, per accostare così tanti triangoli.
:::

Questo significa che abbiamo trovato [[tre]] solidi platonici delimitati da triangoli. Passiamo
al prossimo poligono regolare: il quadrato.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow
Se [[tre]] quadrati si incontrano in ogni vertice, otteniamo un __cubo__. Come un dado,
ha [[6]] facce. _{span.reveal(when="blank-1")}Il cubo a volte è anche
chiamato *esaedro*, dal greco “hexa", che significa “sei”._
:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow
Se [[quattro]] quadrati si incontrano in ogni vertice, otteniamo [[un'altra tassellazione|un tetraedro|un altro cubo]].
_{span.reveal(when="blank-1")}E come prima, cinque o più quadrati attorno allo stesso vetice non funzioneranno._
:::

---
> id: platonic-dodecahedron

Proviamo ora con il pentagono regolare:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow
Se [[tre]] pentagoni si incontrano in ogni vertice, otteniamo il __dodecaedro__. Ha
[[12]] facce. _{.reveal(when="blank-1")} (“dodeca” significa “dodici” in greco.)_
:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow
Come prima, quattro o più pentagoni [[non funzionano|sono possibili]] perché non c'è abbastanza spazio.
:::

---
> id: platonic-hexagons

Il prossimo poligono regolare con cui provare è l'esagono:

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow
Se tre esagoni si incontrano in ogni vertice, otteniamo immediatamente [[una tassellazione|un poliedro|un esaedro]].
_{span.reveal(when="blank-0")} Dato che non c'è spazio per più di tre esagoni, sembrerebbe
che non ci siano solidi platonici formati da esagoni._
:::

---
> id: platonic-final

Lo stesso vale per tutti i poligoni regolari con più di sei lati. Non possono
formare una tassellazione, e certamente non possono formare un poligono tridimensionale.

Questo significa che ci sono solo [[cinque]] solidi platonici! Osserviamoli insieme:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")
__tetraedro__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual}[[4]] Faces_
_{span.dual}[[4]] Vertices_
_{span.dual}[[6]] Edges_

::: column.grow.text-center(width=120)
__cubo__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")}[[6]] facce_
_{span.dual(target="dual1")}[[8]] vertici_
_{span.dual}[[12]] Edges_

::: column.grow.text-center(width=120)
__ottaedro__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")}[[8]] facce_
_{span.dual(target="dual1")}[[6]] vertici_
_{span.dual}[[12]] spigoli_

::: column.grow.text-center(width=120)
__dodecaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")}[[12]] facce_
_{span.dual(target="dual2")}20 vertici_
_{span.dual}30 spigoli_

::: column.grow.text-center(width=120)
__icosaedro__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")}[[20]] facce_
_{span.dual(target="dual2")}12 vertici_
_{span.dual}30 spigoli_
:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Osserva come
il numero di facce e di vertici è [[scambiato|lo stesso]] per [il cubo e l'ottaedro](target:dual1), e per [il dodecaetro e l'icosaedro](target:dual2),
mentre il numero di spigoli [[rimane uguale|è diverso]]. Queste coppie di
solidi platonici sono chiamate [__solidi duali__](gloss:polyhedron-dual).

---
> id: platonic-dual

Possiamo trasformare un poliedro nel suo poliedro duale, “rimpiazzando” ogni faccia con un vertice,
e ogni vertice con una faccia. Queste animazioni mostrano come:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Il tetraedro è il duale di se stesso. Siccome ha lo stesso numero di facce e vertici, scambiarli non cambierebbe nulla.

---
> id: platonic-elements

[Platone](bio:plato) credeva che tutta la materia nell'universo fosse formata da quattro
elementi: aria, terra, acqua e fuoco. Egli credeva che ogni elemento corrispondesse
a uno dei solidi platonici, mentre il quinto rappresentava l'universo
nella sua pienezza. Oggi sappiamo che gli elementi sono piÙ di 100 e
sono formati da atomi sferici, non poliedri.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Immagini dal libro di Giovanni Keplero “Harmonices Mundi” (1619)

---

### Solidi di archimede

> id: archimedean

I solidi platonici sono poliedri particolarmente importanti, ma ne esistono molti
altri.

Anche i [__solidi di Archimede__](gloss:archimedean-solid), ad esempio, devono
essere composti da [poligoni regolari](gloss:regular-polygon), ma se ne possono utilizzare
diversi tipi. Prendono il loro nome da un altro famoso matematico greco, [Archimede
di Siracusa](bio:archimedes), e ne esistono 13:

::: column(width=170 parent="padded-thin")
    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Tetraedro troncato__
8 facce, 12 vertici, 18 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cubottaedro__
14 facce, 12 vertici, 24 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Cubo troncato__
14 facce, 24 vertici, 36 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Ottaedro troncato__
14 facce, 24 vertici, 36 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rombicubottaedro__
26 facce, 24 vertici, 48 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Cubottaedro troncato__
26 facce, 48 vertici, 72 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Cubo camuso__
38 facce, 24 vertici, 60 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecaedro__
32 facce, 30 vertici, 60 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Dodecaedro troncato__
32 facce, 60 vertici, 90 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Icosaedro troncato__
32 facce, 60 vertici, 90 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecaedro__
62 facce, 60 vertici, 120 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Icosidodecaedro troncato__
62 facce, 120 vertici, 180 spigoli
::: column(width=170)
    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Dodecaedro camuso__
92 facce, 60 vertici, 150 spigoli
:::

---
> id: polyhedra-applications

### Applicazioni

Platone si sbagliava nel pensare che tutti gli elementi consistessero in solidi poatonici, ma
i poliedri regolari hanno molte proprietà particolari grazie alle quali appaiono altrove
in natura – e possiamo sfruttare queste proprieta nella scienza e nell'ingenieria.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Scheledro di radiolario

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Virus icosaedrico

::: column.grow
Molti __virus__, __batteri__ e altri piccoli __organismi__ hanno la forma di un
[icosaedro](gloss:icosahedron). I virus ad esempio, devono racchiudere il loro
materiale genetico all'interno di un guscio formato da tante unità proteiche identiche. L'icosaedro
è la soluzione più efficiente, perché è composto da pochi elementi regolari
ma ha quasi la forma di una sfera.
:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Molecola di  buckminsterfullerene

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Biosfera di Montreal

::: column.grow
Molte __molecole__ hanno la forma di poliedri regolari. L'esempi più famoso è il
`C_60` che consiste in 60 atomi di carbonio disposti a forma di [icosaedro troncato](gloss:truncated-icosahedron).

È stata scoperta nel 1985 mentre gli scienziati ricercavano le polveri interstellari. La chiamarono
“Buckyball” (o Buckminsterfullerene) in onore dell'architetto [Buckminster
Fuller](bio:fuller), famoso per la costruzione di edifici con quella forma.
:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Ottaedro di fluorite

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Cubo di pirite

::: column.grow
La maggior parte dei __cristalli__ hanno i loro atomi disposti in una griglia regolare composta da
[tetraedri](gloss:tetrahedron), [cubi](gloss:cube) o [ottaedri](gloss:octahedron).
Quando si rompono o si fessurano, queste forma appaiono a più ampia scala.
:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Strutture reticolari

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Museo del Louvre a Paris

::: column.grow
I tetraedri e gli ottaedri sono incredibilmente rigidi e stabili, il che li rende molto
utili nelle __construzioni__. _strutture reticolari_ sono delle strutture poligonali che possono
sostenere ampi tetti e pesanti ponti.
:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Pallone da calcio

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Dado poligonale

::: column.grow
I solidi platonici, sono anche usati per creare dei __dadi__. A causa della loro simmetria,
ogni faccia ha la stessa [probabilità](gloss:probability) di apparire – quindi
il dado è bilanciato.

L'[icosaedro troncato](gloss:truncated-icosahedron) è probabilmente il poliedro più famoso
al mondo: è la forma di un pallone da calcio.
:::
