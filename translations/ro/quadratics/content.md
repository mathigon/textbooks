# Ecuații de gradul al doilea

## Introducere

> id: intro
> section: introduction
> color: "#F6700F"
> level: Intermediate
> next: graph-theory
> translated: auto

    img.text-wrap(src="images/skater-1.jpg" style="shape-outside: url(images/skater-1-mask.png)" width=300 height=393)

Bine ați venit la SkateSum, o companie mică care produce skateboard-uri. Inginerii au lucrat la un nou model, _SquareBoard_, care este pregătit pentru a intra în producție. Vi s-a cerut să găsiți prețul optim de vânzare pentru skateboard-uri - și se dovedește că realizarea lor nu este ieftină:

* Sculele și utilajele necesare pentru construirea skateboard-urilor costă 5.000 USD. Acest lucru este adesea numit __cost fix__.
* În costul fiecărui skateboard intră un cost suplimentar de 30 dolari pentru a acoperi cheltuielile cu materialele din care este produs: lemn și alte materiale, precum și salariile angajaților. Acest cost suplimentar este adesea numit __cost variabil__.

Cu alte cuvinte, __costul__ producerii a _n_ skateboard-uri este

{.text-center.no-voice} _{.pill.orange} cost_ = _{x-equation(solution="5000+30×n")}_.

---
> id: demand

Noile skateboard-uri sunt foarte așteptate, dar dacă prețul este prea mare, puține persoane vor chiar cumpăra unul. Putem afișa acest lucru într-un grafic în care pe axa Ox avem prețul unui skateboard și pe axa Oy avem numărul corespunzător de persoane care doresc să cumpere un skateboard (__cererea__).

Care dintre aceste diagrame reprezintă cât mai real relația dintre preț și cerere?

    x-picker.wrap
      .item(data-error="wrong-chart-1" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="0.6x + 2")
      .item(style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="8 - 0.6x")
      .item(data-error="wrong-chart-2" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="2.5 * sqrt(x)")

---
> id: demand-1

Un preț mai mare înseamnă că numărul de persoane care doresc să cumpere un skateboard este mai mic, deci graficul funcției trebuie să se deplaseze în jos. După ce au făcut câteva cercetări de piață, economiștii au venit cu următoarea ecuație:

{.text-center} _{.pill.teal} cerere_ = 2800 - 15 × _{.pill.purple} preț_

De exemplu, dacă un skateboard costă 80 USD, cererea va fi de [[1600]] bucăți.

---
> id: intro4

__Câștigul__ companiei noastre este dat venitul total pe care îl realizăm. Adică, este numărul de skateboard-uri vândute (_cerere_) înmulțit cu prețul unui skateboard:

{.text-center} _{.pill.green} venitul_ = _{.pill.teal} cerere_ × _{.pill.purple} preț_

Ceea ce ne interesează cel mai mult este __profitul nostru__: veniturile pe care le realizăm din vânzarea de skateboard-uri din care scădem costul producerii acestora. Puteți găsi o ecuație care exprimă _{.pill.yellow} profitul_ nostru în funcție doar de _{.pill.purple} prețul_ fiecărui skateboard?

    x-equation-system(steps="demand*price-(5000 + 30*demand) | (2800-15*price)*price-5000-30*(2800-15*price)" hints="intro-1|intro-2|intro-3")
      table
        tr
          td: em.pill.yellow profitul
          td= '='
          td #[em.pill.green venitul] − #[em.pill.orange cost]
        tr
          td
          td= '='
          td: x-equation(solution="-15 × price^2 + 3250 × price - 89000" substitutions="cost: 89000 - 450 price | demand: 2800 - 15 price | revenue: 2800 price - 15 price^2")

---
> id: intro-table

Observați că această ecuație conține _{.pill.purple} prețul_, precum și _{.pill.purple} `pretul^2`_. Ea se numește ecuație de gradul al doilea sau [__ecuație pătratică__](gloss:quadratic-equation), numită după cuvântul latin „quadratus” pentru pătrat.

Pentru a afla modul în care ne putem maximiza profitul, să calculăm profitul pentru câteva prețuri diferite:

::: .overflow-wrap

| _{.pill.purple} preț / $_   | 20   | 40  | 60      | 80      | 100     | 120     | 140 | 160 | 180 |
| _{.pill.yellow} profit / $_ | –30k | 17k | [[52]]k | [[75]]k | [[86]]k | [[85]]k | _{span.reveal(when="blank-3")} 72k_ | _{span.reveal(when="blank-3" delay=400)} 47k_ | _{span.reveal(when="blank-3" delay=800)} 10k_ |
{.grid}

:::

---
> id: intro-chart

Acum putem trasa toate aceste puncte într-un sistem de coordonate și le putem conecta cu o linie:

    x-coordinate-system(width=640 height=400 x-axis="-20,200,20" y-axis="-100000,100000,20000" axis-names="price/$,profit/$" padding=10 animate)
      .region.r1(style="top: 48%; height: 46%; left: 6%; width: 6%;")
      .region.r2(style="top: 26%; height: 40%; left: 79%; width: 21%;")

Vă amintiți că graficul unei [funcții liniare](gloss:linear-function) este întotdeauna o dreaptă. Dar așa cum ați văzut mai sus, graficul unei [funcții de gradul al doilea](gloss:quadratic-function) este curbat. Acesta are chiar și un nume specific: [__Parabolă__](gloss:parabola).

Dacă [prețul este 0](->.r1), profitul nostru este negativ, deoarece oferim gratuit skateboard-uri scumpe. Pe măsură ce prețul crește, crește și profitul nostru. Cu toate acestea, dacă skateboard-urile devin [prea scumpe](->.r2), oamenii nu mai vor să le cumpere și profitul nostru scade din nou.

Ne putem maximiza profitul prin stabilirea prețului unui skateboard la aproximativ $[[108 ± 10]].

---
> id: intro-final

    figure: x-img(src="images/skater-2.jpg" alt="Skateboarder" width=400 height=352)

În lumea reală, poate fi foarte dificil pentru companii să determine o ecuație pentru profitul lor - și este probabil să fie mult mai complicat decât acest exemplu.

Totuși, ecuațiile de gradul al doilea apar peste tot în natură, inginerie și economie. În acest curs veți învăța diferite metode de rezolvare a ecuațiilor de gradul al doilea și veți învăța să înțelegeți graficul funcțiilor asociate acestora.

---

## Expresii binomiale

> section: binomials
> sectionStatus: dev

A FACE

---

## Rezolvarea ecuațiilor de gradul al doilea

> section: solving
> sectionStatus: dev

TODO

---

## Soluțiile ecuației de gradul al doilea

> section: formula
> sectionStatus: dev

TODO

---

## Graficul funcțiilor de gradul al doilea

> section: graphs
> sectionStatus: dev

TODO

---

## Mișcarea proiectilelor

> section: projectiles
> sectionStatus: dev
> sectionBackground: projectiles

TODO

---

## Mai multe aplicații

> section: applications
> sectionStatus: dev

TODO
