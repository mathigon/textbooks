# Nizovi i obrasci

## Uvod

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Mnoge profesije u kojima se koristi matematika usmjerene su na jedan određeni dio - _pronalaženje obrazaca_, te na mogućnost predviđanja budućnosti. Evo nekoliko primjera:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

U posljednjem desetljeću, __policijske uprave__ širom svijeta počele su se više oslanjati na matematiku. Posebni algoritmi mogu pomoću podataka o prošlim zločinima predvidjeti kada i gdje bi se zločini mogli dogoditi u budućnosti. Primjerice, sustav _PredPol_ (kraće za predictive policing“), pomogao je smanjiti stopu kriminala u dijelovima Los Angelesa za 12%!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Pokazalo se da __potresi__ slijede slične obrasce kao i zločini. Baš kao što bi jedan zločin mogao pokrenuti niz ostalih, tako i jedan potres može uzrokovati nove potrese (aftershock). U matematici se to naziva „procesi koji sami sebe stvaraju“, a postoje i jednadžbe koje pomažu predvidjeti kada bi se sljedeći mogao dogoditi.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Bankari također analiziraju prošle podatke o cijenama dionica, kamatama i tečajevima da bi procijenili kako bi se __financijska tržišta__ mogla mijenjati u budućnosti. Biti u stanju predvidjeti hoće li vrijednost dionica porasti ili opasti može biti vrlo unosno!

:::

Profesionalni matematičari koriste vrlo složene algoritme kako bi pronašli i analizirali sve te obrasce, ali počet ćemo s nečim malo osnovnijim.

---
> id: simple-patterns

### Jednostavni nizovi

U matematici, [__niz__](gloss:sequence) je lanac brojeva (ili drugih predmeta) koji obično slijede određeni obrazac. Pojedini elementi u nizu nazivaju se [__elementi niza__](gloss:sequence-term).

Evo nekoliko primjera nizova. Možete li pronaći njihove obrasce i izračunati sljedeća dva elementa u nizu?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")}Pattern: “Add 3 to the previous
number to get the next one.”_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: “Add 6 to the previous
number to get the next one.”_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: “Alternatingly add 1 and
add 3 to the previous number, to get the next one.”_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: “Multiply the previous
number by 2, to get the next one.”_

---
> id: simple-patterns-1

Točkice (…) na kraju znače da je niz beskonačan. Kada govorimo o ovakvim nizovima u matematici, često svaki element niza predstavljamo posebnom [varijablom](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

Mali broj nakon _x_ naziva se __indeks__ i označava mjesto elementa u nizu. To znači da možemo _n_ -ti element niza zapisati kao [[`x_n`|`x_i`|`x_2`]].

---
> id: triangles

### Trokutasti i kvadratni brojevi

Nizovi u matematici ne moraju uvijek biti brojevi. Evo niza koji se sastoji od geometrijskih oblika - trokuta sve većih veličina:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b} [[10]]

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b} [[15]]

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b} [[21]]

    include svg/triangle-6.svg

:::

---
> id: triangle-1

Pri svakom koraku dodajemo još jedan redak prethodnom trokutu. Duljina ovih novih redaka također se svaki put povećava za jedan. Možete li prepoznati uzorak?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

Ovaj uzorak možemo opisati i pomoću posebne [formule](gloss:formula):

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Da bismo dobili broj za _n_ -ti trokut, uzmemo broj za [[prethodni|prvi|sljedeći]] trokut i dodamo _n_. Na primjer, ako je _n_ = ${n}{n|5|2,20,1}, formula postaje <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---
> id: recursive-1

Formula koja određuje `x_n` kao funkciju prethodnih izraza u nizu naziva se [__rekurzivna formula__](gloss:sequence-recursive). Sve dok znate [[prvi element|posljednji element|drugi element]] niza, možete izračunati sve sljedeće elemente.

---
> id: squares

    hr

Još jedan primjer niza koji se sastoji od geometrijskih oblika su __kvadratni brojevi__. Svaki element niza formiran je od sve većih kvadrata:

::: column(width=24 parent="padded-thin squares")

{.text-center} __1__

    include svg/square-1.svg

::: column(width=50)

{.text-center} __4__

    include svg/square-2.svg

::: column(width=76)

{.text-center} __9__

    include svg/square-3.svg

::: column(width=102)

{.text-center.b} [[16]]

    include svg/square-4.svg

::: column(width=128)

{.text-center.b} [[25]]

    include svg/square-5.svg

::: column(width=154)

{.text-center.b} [[36]]

    include svg/square-6.svg

:::

---
> id: square-1

Za trokutne brojeve pronašli smo rekurzivnu formulu koja svaki _sljedeći_ element niza opisuje kao funkciju njegovih _prethodnih_ elemenata. Za kvadratne brojeve možemo još bolje: formula koja izravno određuje _n_, a da prethodno ne moramo izračunati sve prethodne:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---
> id: explicit

To je [__eksplicitna formula__](gloss:sequence-explicit). Možemo je koristiti, na primjer, za izračunati da je 13. kvadratni broj [[169]], a da prethodno nismo pronašli prethodnih 12 kvadratnih brojeva.

---
> id: definitions

    hr

Rezimirajmo sve definicije koje smo vidjeli do sada:

::: .theorem

[__niz__](gloss:sequence) je popis brojeva, geometrijskih oblika ili drugih objekata koji slijede određeni obrazac. Pojedine stavke u nizu nazivaju se [__elementi niza__](gloss:sequence-term) i predstavljene su varijablama poput `x_n`.

[__rekurzivna formula__](gloss:sequence-recursive) za niz određuje vrijednost _n_ tog elementa niza kao funkciju [[prethodnih elemenata niza|prvog elementa niza]]. Potrebno je navesti početni element niza (ili više njih).

[__Eksplicitna formula__](gloss:sequence-explicit) za niz određuje vrijednost _n_ tog elementa niza kao funkciju [[samo _n_|prethodnog elementa]], bez pozivanja na druge elemente niza.

:::

---
> id: action-sequence

### Fotografiranje niza radnji

U sljedećim ćete poglavljima upoznati više različitih matematičkih nizova, iznenađujućih obrazaca i neočekivanih primjena.

Prvo, ipak, pogledajmo nešto sasvim drugo: __fotografiranje niza radnji__. Fotograf brzo snima niz snimaka, a zatim ih spaja u jednu sliku:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Možete li vidjeti kako skijaš formira niz? Uzorak nije zbrajanje ili množenje, već geometrijska [transformacija](gloss:rigid-transformation). Između uzastopnih koraka, skijaš je translatiran i [[rotiran|reflektiran|uvećan]].

---
> id: action-sequence-1

Evo još nekoliko primjera fotografiranja niza radnji:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::

---

## Aritmetički i geometrijski niz

> section: arithmetic-geometric
> id: halley

::: column.grow

Godine 1682. astronom [Edmond Halley](bio:halley) opazio je neobičnu pojavu: blistavi bijeli objekt s dugačkim repom koji se kretao noćnim nebom. Bio je to __komet__, mala ledena stijena koja leti kroz svemir, ostavljajući iza sebe trag prašine i leda.

Halley se sjetio da su i drugi astronomi primijetili slične komete mnogo ranije: jedan 1530., a drugi 1606. Primijetite da je vremenski razmak između dva uzastopna opažanja u oba slučaja jednak: [[76]] godina.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley je zaključio da su sva tri opažanja zapravo isti komet - koji se danas naziva _Halleyev komet_. Orbitira oko sunca i prolazi uz Zemlju otprilike svakih 76 godina. Također je predvidio kada će komet biti vidljiv sljedeći put:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

Zapravo, vremenski interval nije uvijek _točno_ 76 godina: može varirati za jednu ili dvije godine, jer na orbitu kometa utječu drugi planeti. Danas znamo da su Halleyev komet promatrali stari astronomi već 240. godine prije Krista!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depections of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

Druga skupina znanstvenika istražila je ponašanje teniske loptice koja odskakuje. Bacili su loptu s visine od 10 metara i tijekom vremena izmjerili njen položaj. Svakim odbijanjem lopta gubi dio svoje izvorne visine:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Znanstvenici su primijetili da lopta gubi 20% svoje visine nakon svakog odbijanja. Drugim riječima, maksimalna visina svakog odskoka je 80% od prethodnog. To im je omogućilo predviđanje visine svakog sljedećeg odskoka:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definicije

Ako uspoređujemo oba ova problema, primijećujemo da postoje mnoge sličnosti: niz Halleyevog kometa ima istu [[razliku|omjer|umnožak]] između uzastopnih elemenata niza, dok redoslijed odskoka za tenisku lopticu ima isti [[kvocijent|razliku|umnožak]] između uzastopnih elemenata niza.

---
> id: arithmetic-geometric-1

Nizovi s tim svojstvima imaju posebno ime:

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

[__Aritmetički niz__](gloss:arithmetic-sequence) ima konstantnu __{.m-red} razliku _d___ između uzastopnih elemenata niza.

Isti se broj dodaje ili oduzima svakom elementu, da bi se dobio sljedeći.

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

[__Geometrijski niz__](gloss:geometric-sequence) ima konstantan __{.m-green} kvocijent _r___ dvaju uzastopnih elemenata niza.

Svaki se element množi ili dijeli s istim brojem, da bi se dobio sljedeći.

:::

:::

---
> id: arithmetic-geometric-select

Evo nekoliko različitih nizova. Možete li odrediti koji su aritmetički, geometrijski ili ni jedan ni drugi, i koje su vrijednosti _{.b.m-red} d_ i _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_, ...

::: column(width=320)

je [[geometrijski|aritmetički|ni jedan ni drugi]] _{span.reveal(when="blank-0")}, s kvocijentom [[2]].

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_, ...

::: column(width=320)

je [[aritmetički|geometrijski|ni jedan ni drugi]] _{span.reveal(when="blank-2")}, s razlikom [[3]]_

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_, ...

::: column(width=320)

je [[aritmetički|geometrijski|ni jedna ni drugi]] _{span.reveal(when="blank-4")}, s razlikom [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_, ...

::: column(width=320)

nije [[ni jedan ni drugi|aritmetički|geometrijski]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2,5_, _{span.n} 1,25_, ...

::: column(width=320)

je [[geometrijski|aritmetički|ni jedan ni drugi]] _{span.reveal(when="blank-7")}, s omjerom [[0,5]].

:::

---
> id: arithmetic-geometric-graph

Da bismo definirali aritmetički ili geometrijski niz, moramo znati ne samo razliku ili kvocijent, već i početnu vrijednost (zvanu `a`). Ovdje možete generirati vlastite nizove i crtati njihove vrijednosti na grafikonu, mijenjajući vrijednosti `a`, _d_ i _r_. Možete li pronaći neki uzorak?

::: column.ag-chart(width=320)

#### {.m-red} Aritmetički niz

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Geometrijski niz

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Primjetite kako svi __{.m-red} aritmetički nizovi__ izgledaju vrlo slično: ako je razlika pozitivna, oni konstantno [[rastu|padaju]], a ako je razlika negativna, oni konstantno [[padaju|increase]].

{.reveal(when="blank-0 blank-1")} Geometrijski nizovi, s druge strane, mogu se ponašati potpuno drugačije ovisno o vrijednosti `a` i _r_:

::: column.ag-limit-box.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Ako je _{span.var-action} `r > 1`_, elementi [[se brzo povećavaju|brzo padaju|se približavaju nuli]] _{span.reveal(when="blank-2")}, sve do beskonačnosti. Matematičari kažu da niz [__divergira__](gloss:sequence-divergence)_

::: column.reveal.ag-limit-box(when="blank-2" animation="pop" delay=200 width=220)

Ako je _{span.var-action} _r_ između -1 i 1_, elementi će uvijek [[približavati se 0|padati u beskonačnost|smanjivati se]] _{span.reveal(when="blank-3")}. Kažemo da niz [__konvergira__](gloss:sequence-convergence)_

::: column.reveal.ag-limit-box(when="blank-3" animation="pop" delay=200 width=220)

Ako je _{span.var-action} `r < -1`_ elementi niza izmjenjuju se između pozitivnih i negativnih, dok njihova [[apsolutna vrijednost|inverzna vrijednost|razlika]] postaje veća.

:::

{.reveal(when="blank-4 blank-5")} Saznajte više o konvergenciji i divergenciji u [posljednjem odjeljku](/course/sequences/convergence) ove teme.

---
> id: arithmetic-geometric-recursive

### Rekurzivne i eksplicitne formule

U prethodnom smo poglavlju naučili da se [__rekurzivnom formulom__](gloss:sequence-recursive) određuje vrijednost svakog elementa niza kao funkcija prethodnih elemenata. Ovo su rekurzivne formule za aritmetički i geometrijski niz:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

Jedan problem s rekurzivnom formulom je da, na primjer, da bismo pronašli 100. element, prvo moramo izračunati prethodnih 99 elemenata - a to bi moglo potrajati dugo. Umjesto toga, možemo pokušati pronaći [__eksplicitnu formulu__](gloss:sequence-explicit) kojom izravno određujemo vrijednost _n_-tog elementa.

::: column.grow

Za __{.m-red} aritmetičke nizove__, moramo dodati _d_ pri svakom koraku:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} Na _n_-tom elementu niza dodajemo [[`n-1`|`n`|`n+1`]] puta _d_, tako da je opća formula

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

Za __{.m-green} geometrijske nizove__, moramo pomnožiti s _r_ pri svakom koraku:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} Za _n_-ti element množimo [[`n-1`|`n`|`n+1`]] puta _r_, tako da je opća formula

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Ovdje je sažetak svih definicija i formula koje ste dosad vidjeli:

::: column.grow

::: .theorem.s-red

__{.m-red} Aritmetički niz__ ima prvi element `a` i istu razliku `d` između uzastopnih elemenata niza.

{.text-center} __Rekurzivna formula__: `x_n = x_(n-1) + d`

{.text-center} __Eksplicitna formula__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

__{.m-green} Geometrijski niz__ ima prvi element `a` i isti kvocijent `r` između uzastopnih elemenata niza.

{.text-center} __Rekurzivna formula__: `x_n = x_(n-1) × r`

{.text-center} __Eksplicitna formula__: `x_n = a × r^(n-1)`

:::

:::

Pogledajmo nekoliko primjera gdje sve to možemo upotrijebiti!

---
> id: pay-it-forward
> goals: video

### Šalji dalje

Evo kratkog isječka iz filma _Šalji dalje_, gdje 12-godišnji Trevor objašnjava svoju ideju kako učiniti svijet boljim mjestom:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

Suština Trevorove ideje je da, ako svi "šalju dalje", jedna osoba može imati ogroman utjecaj na svijet:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Primijetite kako broj ljudi na svakom koraku čini [[geometrijski niz|aritmetički niz|trokutni broj]], _{span.reveal(when="blank-0")} sa stalnim kvocijentom [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Pomoću [eksplicitne formule](gloss:sequence-explicit) za geometrijski niz, možemo utvrditi koliko je novih ljudi zahvaćeno u bilo kojem koraku:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

Broj ljudi se nevjerojatno brzo povećava. U 10. koraku zahvatili biste 19.683 novih, a nakon 22 koraka zahvatili biste više ljudi nego što trenutno živi na Zemlji.

Ovaj niz brojeva ima posebno ime: __potencija od 3__. Kao što vidite, svaki je element neka [potencija](gloss:powers) od 3:

{.text-center.s-orange} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### Tko želi biti milijunaš?

{.todo} Uskoro!

---
> id: chessboard

### Problem sa šahovskom pločom

{.todo} Uskoro!

---

## Figurativni brojevi

> section: figurate
> id: figurate

Naziv [geometrijski niz](gloss:geometric-sequence) prilično je zbunjujuć jer ovi nizovi nemaju ništa s geometrijom. U stvari, ime je nastalo prije više stotina godina, kada su matematičari razmišljali o _množenju_ i _korjenovanju_ na više geometrijski način.

Međutim, postoje mnogi drugi nizovi koji se temelje na određenim geometrijskim oblicima - neke od njih ste već vidjeli u [uvodu](/course/sequences/introduction). Ove nizove često nazivamo [__figurativnim brojevima__](gloss:figurate-numbers), a u ovom ćemo djelu detaljnije pogledati neke od njih.

---
> id: triangle-numbers

### Trokutni brojevi

Trokutni brojevi generiraju se stvaranjem trokuta čija veličina progresivno raste:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center} __10__

    include svg/triangle-4.svg

::: column(width=136)

{.text-center} __15__

    include svg/triangle-5.svg

::: column(width=164)

{.text-center} __21__

    include svg/triangle-6.svg

:::

Već ste vidjeli rekurzivnu formulu za trokutne brojeve: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

Nije slučajno da uvijek imamo 10 čunjeva u kuglanju ili 15 loptica pri igranju biljara: i jedno i drugo su trokutni brojevi!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Nažalost, rekurzivna formula nije od velike pomoći ako želimo pronaći stoti ili 5000. trokutni broj, a da prije nismo izračunali sve prethodne. No, kao što smo to radili s aritmetičkim i geometrijskim nizovima, možemo pokušati pronaći eksplicitnu formulu za trokutne brojeve.

{.todo} Uskoro: animirani dokaz za formulu trokutnih brojeva

---
> id: triangle-sums

Čini se da se trokutni brojevi pojavljuju svugdje u matematici te ćete ih vidjeti ponovo tijekom ovog poglavlja. Jedna posebno zanimljiva činjenica je da se _bilo koji_ cijeli broj može zapisati kao zbroj najviše tri trokutna broja:

::: column(width=140 parent="triangle-sum")

{.text-center} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} =

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} Činjenicu da ovo vrijedi za _svaki_ cijeli broj prvi je put dokazao 1796. godine njemački matematičar [Carl Friedrich Gauss](bio:gauss) - u dobi od 19 godina!

---
> id: triangle-investigate

::: .box.f-blue

#### Rješavanje problema

Koliki je zbroj prvih 100 pozitivnih [cijelih brojeva](gloss:integer)? Drugim riječima, koliko je

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

Umjesto da ručno zbrajamo sve, mogu li nam pomoći [trokutni brojevi](gloss:triangle-numbers)? Što je sa zbrojem prvih 1000 pozitivnih brojeva?

:::

---
> id: square-numbers

### Kvadratni i poligonalni brojevi

Još jedan od nizova koji se zasnivaju na geometrijskim oblicima su __kvadratni brojevi__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Brojeve u ovom nizu možete izračunati tako što ćete svaki cijeli broj kvadrirati (`1^2`, `2^2`, `3^2`, ...), ali postoji i drugi način: razlike između uzastopnih kvadratnih brojeva su [[Neparni brojevi|trokutni brojevi|cijeli brojevi]] u rastućem poretku!

---
> id: square-numbers-1

::: column.grow

Razlog za ovaj obrazac postaje očit ako nacrtamo kvadrat. U svakom sljedećem koraku dodajemo jedan red i jedan stupac. Veličina ovih "kutova" počinje od 1 i povećava se za 2 u svakom koraku - time se formira niz neparnih brojeva.

To također znači da je _n_-ti kvadratni broj zapravo zbroj prvih _n_ neparnih brojeva! Na primjer, zbroj prvih 6 neparnih brojeva je

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

Pored toga, svaki je kvadratni broj zbroj dva uzastopna [trokutna broja](gloss:triangle-numbers). Na primjer, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. Možete li vidjeti kako možemo podijeliti svaki kvadrat duž njegove dijagonale, na dva trokuta?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Nakon trokutnih i kvadratnih brojeva, možemo nastaviti s većim [mnogokutima](gloss:polygon). Rezultirajući nizovi brojeva nazivaju se __poligonalni brojevi__.

Na primjer, ako koristimo poligone sa ${k}{k|5|3,10,1} stranama, dobit ćemo niz __${polygonName(k)} brojeva__.

Možete li pronaći rekurzivne i eksplicitne formule za _n_-ti poligonalni broj koji ima _k_ strana? I primjećujete li još neke zanimljive obrasce za veće poligone?

:::

---
> id: tetrahedral

### Tetraedarski i kubni brojevi

Naravno, također se ne moramo ograničavati na dvodimenzionalne oblike i obrasce. Možemo složiti sfere u oblik malih piramida, baš kao što se slažu naranče u supermarketu:

::: column(width=64 parent="padded-thin")

{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Matematičari ove piramide nazivaju [__tetraedri__](gloss:tetrahedron), a dobiveni niz [__tetraedarski brojevi__](gloss:tetrahedral-numbers).

{.todo} Uskoro: Više o tetraedarskim brojevima, kubnim brojevima i 12 dana Božića.

---

## Niz kao funkcija

> section: functions
> sectionStatus: dev

U IZRADI

---

## Fibonaccijevi brojevi

> section: fibonacci
> id: rabbits

Zamislite da ste dobili par mladih zečeva, jednog mužjaka i jednu ženku. Oni su vrlo posebni zečevi, jer nikada ne umiru, a ženka rađa novi par zečeva točno jednom mjesečno (uvijek novi par mužjaka i ženki).

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange.s-small
          svg(width=760 height=456 viewBox="0 0 760 456")
            line(y1=51  x2=760 y2=51)
            line(y1=130 x2=760 y2=130)
            line(y1=209 x2=760 y2=209)
            line(y1=287 x2=760 y2=287)
            line(y1=366 x2=760 y2=366)
            path(d="M84,91c223.68,0,405,7,405,45")
            path(d="M84,170c124.82,0,226,14,226,45")
            path(d="M84,248c74.56,0,135,20.15,135,45")
            path(d="M534,248c74.56,0,135,20.15,135,45")
            path(d="M84,327a45,45,0,0,1,45,45")
            path(d="M354,327a45,45,0,0,1,45,45")
            path(d="M534,327a45,45,0,0,1,45,45")
            polygon(points="489 150 481 130 489 135 497 130 489 150")
            polygon(points="310 229 302 209 310 214 318 209 310 229")
            polygon(points="219 307 211 287 219 292 227 287 219 307")
            polygon(points="669 307 661 287 669 292 677 287 669 307")
            polygon(points="129 386 121 366 129 371 137 366 129 386")
            polygon(points="399 386 391 366 399 371 407 366 399 386")
            polygon(points="579 386 571 366 579 371 587 366 579 386")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")

          .n(style="top: 0%") 1
          .n(style="top: 15%") 1
          .n(style="top: 32%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 84%") 8

      .legend(slot="legend") U prvom mjesecu, zečevi su jako mali i ništa se ne događa – ali oni jako brzo rastu.
      .legend(slot="legend") Nakon mjesec dana, zečevi su odrasli i mogu se početi razmnožavati…
      .legend(slot="legend") … i nakon još mjesec dana, dobit će svoj prvi par podmlatka. Sada imate dva para zečeva.
      .legend(slot="legend") U sljedećem mjesecu, vaš par zečeva dobit će još jedan par podmlatka. U međuvremenu, prvi par djece je odrastao. Sada imate ukupno tri para.
      .legend(slot="legend") U petom mjesecu, vaš prvi par dobit će još jedan par podmlatka. U isto vrijeme, njihov prvi podmladak je sad dovoljno star da dobije prve unuke početnog para. Sada imate pet parova zečeva.
      .legend(slot="legend") U šestom mjesecu, još tri para dobit će podmladak: početni par i njihova prva dva para djece.

---
> id: rabbits-1

{.r} U sljedećem mjesecu imali biste 13 parova zečeva: 8 iz prethodnog mjeseca, plus 5 novih beba. Možete li otkriti uzorak u ovom nizu? _{button.next-step} Nastavi_

---
> id: rabbits-2

Broj zečeva u određenom mjesecu je [[zbroj dva prethodna broja|dvostruki prethodni broj]]. _{span.reveal(when="blank-0")} Drugim riječima, trebate dodati prethodna dva_ elementa niza da biste dobili sljedeći. Niz započinje s dvije jedinice, a [rekurzivna formula](gloss:sequence-recursive) je_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Možete li izračunati broj zečeva nakon još nekoliko mjeseci?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} Dakle nakon 12 mjeseci imate 144 para zečeva!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Taj niz brojeva zove se [__Fibonaccijev niz__](gloss:fibonacci-numbers), nazvan po talijanskom matematičaru [Leonardu Fibonacciju](bio:fibonacci).

::: column.grow

Kada se Fibonacci rodio 1175. godine, većina ljudi u Europi još uvijek je koristila [rimske brojke](gloss:roman-numerals) za zapis brojeva (npr. IVX ili MCMLIV). Fibonacijev otac bio je trgovac i zajedno su putovali u sjevernu Afriku, kao i na Bliski Istok. Tamo je Fibonacci prvi naučio koristiti [arapske brojke](gloss:arabic-numerals).

Kada se vratio u Italiju, Fibonacci je napisao knjigu naziva _Liber Abaci_ (latinski za "Knjiga o računanju"), gdje je prvi uveo nove arapske brojke europskim trgovcima. Oni su bili trenutan uspjeh - i danas ih koristimo.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

Na jednoj od stranica u svojoj knjizi, također je istraživao uzgojne obrasce zečeva - zato su Fibonaccijevi brojevi nazvani po njemu.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Naravno, Fibonaccijevi brojevi ne opisuju način na koji se zečevi razmnožavaju u stvarnom životu. Kunići nemaju točno jednog muškog i jednog ženskog potomka svaki mjesec, a nije uračunato ni da će kunići na kraju i umrijeti.

Ipak, čini se da u prirodi postoje mnoga druga mjesta na kojima se pojavljuju Fibonaccijevi brojevi; na primjer spirale u biljkama. Možete li prebrojati koliko spirala ima u svakom smjeru?

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") U smjeru kazaljki na satu
      div(data-value="ccw") Suprotno od kazaljki na satu
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Ovaj češer ima [[8]] spirala u smjeru kazaljke na satu i [[13]] spirala u smjeru suprotnom od smjera kazaljke na satu.

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") U smjeru kazaljki na satu
      div(data-value="ccw") Suprotno od kazaljki na satu
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Ovaj suncokret ima 34 spirale u smjeru kazaljke na satu i 55 spirala u smjeru suprotnom od smjera kazaljke na satu.

:::

---
> id: spirals-1

U oba slučaja brojevi spirala su uzastopni Fibonaccijevi brojevi. Isto vrijedi i za mnoge druge biljke: sljedeći put kad izađete van, brojite latice u cvijetu ili broj listova na stabljici. Vrlo često ćete otkriti da su to Fibonaccijevi brojevi!

Naravno, to nije samo slučajnost. Postoji važan razlog zbog kojeg priroda voli Fibonaccijev niz, o kojem ćete saznati više kasnije.

---
> id: bees

::: column(width=320)

    x-select.spiral-tabs
      div(data-value="male") Mužjaci
      div(data-value="female") Ženke
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Fibonaccijevi brojevi pojavljuju se i u populacijama pčela.

U svakoj koloniji pčela postoji po jedna _kraljica_ koja polaže mnogo jaja. Ako jaje oplodi muška pčela, ono se izleže u __žensku__ pčelu. Ako nije oplođeno, izleže se u __mušku__ pčelu (zvanu radilica).

To znači da ženske pčele imaju [[dva roditelja|jednog roditelja]], dok muške pčele imaju samo [[jednog roditelja|dva roditelja]].

{.reveal(when="blank-0 blank-1")} Ako nacrtamo pčelinje obiteljsko stablo, brojevi roditelja, baka i djedova, pradjedova i ranijih generacija uvijek će biti Fibonaccijevi brojevi!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Povremeno se mlade pčele hrane posebnom hranom koja se zove "matična mliječ". U tom se slučaju pretvaraju u kraljice i odletjet će van kako bi osnovale novu košnicu.

:::

---
> id: golden-spiral

### Zlatni rez

Baš kao [trokutni](gloss:triangle-numbers) i [kvadratni brojevi](gloss:square-numbers) i još neki nizovi koje smo vidjeli prije, Fibonaccijev niz može se prikazati pomoću geometrijskog uzorka:

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") Počinjemo s dva kvadratića veličine 1.
      .legend(slot="legend") Dalje, dodajemo novi kvadrat veličine 2, formirajući veći pravokutnik.
      .legend(slot="legend") Dalje, dodajemo kvadrat veličine 3, formirajući još veći pravokutnik.
      .legend(slot="legend") Sljedeći kvadrat ima veličinu 5. Primjećujete li da stvaramo Fibonaccijeve brojeve?
      .legend(slot="legend") Ako nastavimo dodavati kvadrate, oni će biti veličine 8, 13, 21, i tako dalje.
      .legend(slot="legend") Možda ste primjetili da, kako se pravokutnici povećavaju, čini se da počinju formirati spiralu. Ovo možemo vizualizirati tako da nacrtamo pravilnu spiralu koja povezuje kutove kvadrata.

---
> id: golden-ratio

Na svakom koraku, kvadrati formiraju veći pravokutnik. Njegova širina i visina uvijek su dva uzastopna Fibonaccijeva broja. __Format__ pravokutnika je omjer njegove širine i njegove duljine:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2

::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1.5

::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1.666 ...

::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1.6

::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac> <mn> [[13]] </mn> <mn> [[8]] </mn> </mfrac> _{span.reveal(when="blank-0 blank-1")} = 1.625_

::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac> <mn> [[21]] </mn> <mn> [[13]] </mn> </mfrac> _{span.reveal(when="blank-2 blank-3")} = 1.62…_

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Primijetite kako se, dodajući sve više i više kvadrata, čini da se omjer slike približava određenom broju oko 1,6. Ovaj se broj zove [__zlatni rez__](gloss:golden-ratio) i obično je predstavljen grčkim slovom `φ` ("phi"). Točna je njegova vrijednost

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Mnogi vjeruju da zlatni rez ima posebnu estetsku vrijednost. Zato ga često koriste umjetnici i arhitekti - kao u ova dva primjera:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Vjeruje se da je grčki kipar Fidija koristio zlatni rez pri dizajnu _Partenona_ u Ateni. Prvo slovo njegova imena, `φ`, simbol je koji se koristi za zlatni rez.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _Sakrament Posljednje večere_, španjolskog umjetnika Salvadora Dalíja, jedna je od mnogih slika u zlatnom rezu. U pozadini se također može vidjeti veliki [dodekaedar](gloss:dodecahedron).

:::

---
> id: golden-ratio-2

Zlatni rez možemo aproksimirati [[dijeljenjem|zbrajanjem|oduzimanjem]] dva uzastopna Fibonaccijeva broja.

{.reveal(when="blank-0")} Međutim, ispada da se točna vrednost `φ` ne može zapisati kao jednostavan razlomak: to je [__iracionalni broj__](gloss:irrational-numbers), baš kao [`π`](gloss:pi) i `sqrt(2)` i neki drugi brojevi koje ste vidjeli prije.

---
> id: sunflower-growing

### Fibonaccijeva spirala

::: column.grow

Zlatni rez objašnjava zašto se Fibonaccijevi brojevi pojavljuju u prirodi, poput suncokreta i češera koje ste vidjeli na početku ovog poglavlja.

Obje ove biljke rastu prema van iz svojeg središta (dio biljke nazvan _meristem_). Kako izrastaju nove sjemenke, lišće ili latice, one guraju postojeće dalje prema van.

Pomaknite klizač desno da biste vidjeli kako biljka raste. Uočite kako se svaki list dodaje drugačijom rotacijom od prethodnog. Kut između dva uzastopna lista uvijek je isti.

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

Za cvijeće je važan odgovarajući kut: lišće i sjemenke moraju biti približno jednako raspoređeni kako bi dobili najveću količinu sunčeve svjetlosti i hranjivih sastojaka. Na donjem dijagramu možete istražiti kako može izgledati suncokret s različitim kutovima između njegovih sjemenki:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Ako je kut _{span.fib-action(data-value=0)} 0 °_, sve će sjemenke rasti u jednom dugom redu daleko od središta.

{div.inline(slot="legend")} Ako je kut _{span.fib-action(data-value=0.5)} `1/2`_ punog okretaja (180 °), sjemenke će se izmjenjivati između dva odvojena "kraka" koji se odmiču od središta.

{div.inline(slot="legend")} Ako je rotacija neki drugi udio od 360 °, na primjer _{span.fib-action(data-value=2/5)} `2/5`_ ili _{span.fib-action(data-value=1/3)} `1/3`_ ili _{span.fib-action(data-value=3/8)} `3/8`_, tada će broj "krakova" biti isti kao i [[nazivnik|brojnik|djelitelj]] tog razlomka.

{div(slot="legend")} Nažalost, "ruke" su loše, jer znače da sjeme nije ravnomjerno raspoređeno: sav je prostor između krakova izgubljen. Ali ako [racionalni brojevi](gloss:rational-numbers) ne odgovaraju, pokušajmo [iracionalne brojeve](gloss:irrational-numbers)!

{div.inline(slot="legend")} Jedan primjer iracionalnog broja je [`pi`](gloss:pi). Ali ako je kut između sjemenki _{span.fib-action(data-value=0.31831)} `1/pi`_ 360 °, i dalje imamo oružje: njih 22. To je zato što je razlomak `22/7 = 3.1429…` prilično dobra aproksimacija za `pi`. Ono što nam stvarno treba je iracionalni broj koji se _ne može_ aproksimirati jednostavnim razlomkom.

{div.inline(slot="legend")} Čini se da je [zlatni rez](gloss:golden-ratio) upravo to: "najracionalniji" od svih iracionalnih brojeva. Ako je kut između sjemena _{span.fib-action(data-value=0.6180339)} `1/phi`_ 360 °, ono izgleda gotovo savršeno raspoređeno. A upravo je to kut koji koriste biljke širom svijeta.

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Sjetite se od prije da se omjeri uzastopnih Fibonaccijevih brojeva sve više približavaju zlatnom rezu - i zato ćete, ako brojite spirale u biljci, često pronaći Fibonaccijev broj.

Važno je zapamtiti da priroda ne zna za Fibonaccijeve brojeve. Priroda također ne može riješiti jednadžbe za izračun zlatnog reza - ali tijekom milijuna godina, biljke su imale dovoljno vremena da isprobaju različite pristupe i otkriju koji je najbolji.

Biljke i životinje uvijek žele rasti na najučinkovitiji način i upravo zato je priroda puna pravilnih, matematičkih obrazaca.

:::

---
> id: lucas-numbers

### Fibonachos

Do sada smo za Fibonaccijeve brojeve koristili samo rekurzivnu formulu. Zapravo postoji i eksplicitna jednadžba - ali nju je mnogo teže pronaći:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Također bismo mogli pokušati odabrati različite početne točke za Fibonaccijeve brojeve. Na primjer, ako krenemo s 2, 1, ... a ne s 1, 1, ... dobit ćemo niz nazvan __Lucasovi brojevi__.

Ispada da, bez obzira koja dva početna broja odaberete, rezultirajući nizovi imaju mnoga ista svojstva. Na primjer, omjeri uzastopnih elemenata niza _uvijek će_ [konvergirati](gloss:sequence-convergence) u zlatni rez.

{.text-center.s-purple.s-small} ${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n} ${a+b}<<<<_, _{span.n} ${a+2×b}<<<<_, _{span.n} ${2×a+3×b}<<<<_, _{span.n} ${3×a+5×b}<<<<_ , _{span.n} ${5×a+8×b}<<<<_, _{span.n} ${8×a+13×b}<<<<_, ...

---
> id: fibonacci-puzzles

Postoje mnoge zagonetke, obrasci i aplikacije povezane s Fibonaccijevim brojevima. Evo nekoliko primjera koje možete i sami isprobati:

::: .box.f-blue

#### Rješavanje problema

__1. Fibonacijeva djeljivost__

(a) Koji su Fibonaccijevi brojevi parni? Postoji li uzorak po kojem znamo redni broj elementa niza? Možete li objasniti zašto?

(b) Koji su Fibonaccijevi brojevi djeljivi s 3 (ili djeljivi s 4)? Što primjećujete?

    hr

__2. Fibonaccijevi zbrojevi__

Što se događa ako zbrojite bilo koja tri uzastopna Fibonaccijeva broja? Možete li objasniti zašto?

    hr

__3. Fibonaccijeva stubišta__

Kad hodamo stepenicama, možemo stati na svaku stepenicu ili preskakati dvije stepenice odjednom. To znači da postoji mnogo različitih mogućnosti za penjanje stepenicama. Na primjer, ako postoji 5 stepenica, imamo 8 različitih izbora:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Koliko izbora ima za stubište sa 6, 7 ili 8 stepenica? Možete li otkriti uzorak? I kako je to povezano s Fibonaccijevim brojevima?

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Posebni nizovi

> section: special
> id: special-intro

Pored [aritmetičkih](gloss:arithmetic-sequence) i [geometrijskih](gloss:geometric-sequence) nizova, [Fibonaccijevih brojeva](gloss:fibonacci-numbers) i [figurativnih brojeva](gloss:figurate-numbers), postoji bezbroj zanimljivih nizova koji ne slijede sličan, pravilni uzorak.

---
> id: primes

### Prosti brojevi

Jedan primjer koji ste već vidjeli su [__prosti brojevi__](gloss:prime). Kažemo da je broj _prost_ ako nema [djelitelja](gloss:factor) [[osim 1 i samog sebe|osim brojeva 1 i 2|uopće]].

---
> id: primes-1

Evo prvih nekoliko prostih brojeva:

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Nažalost, prosti brojevi ne slijede jednostavan obrazac ili rekurzivnu formulu. Ponekad se pojavljuju neposredno jedan pored drugog (zovu se [blizanački prosti brojevi.](gloss:twin-primes)), a ponekad postoje velike praznine između njih. Čini se da su raspoređeni gotovo nasumično! Prosti brojevi također nemaju jednostavan geometrijski prikaz poput [trokutnih](gloss:triangle-numbers) ili [kvadratnih brojeva](gloss:square-numbers), ali uz malo truda možemo otkriti zanimljive obrasce:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Ako precrtamo sve umnoške malih cijelih brojeva, preostali brojevi moraju biti prosti. Ova metoda zove se [__Eratostenovo sito__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,broj prostih brojeva manjih od x")

{.caption} Ako nacrtamo grafikon koji se povećava za 1 kad god se pojavi prost broj, dobit ćemo "stepenastu" funkciju sa zapanjujućim svojstvima.

:::

---
> id: primes-3

Možete saznati više o tim i drugim svojstvima prostih brojeva u našem poglavlju [Djeljivost i prosti brojevi](/course/divisibility/primes). To su neki od najvažnijih i najtajanstvenijih pojmova u matematici!     figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Savršeni brojevi

Da bismo utvrdili je li broj [prost](gloss:prime), moramo pronaći sve njegove [faktore](gloss:factor). Obično _množimo_ faktore da bismo dobili izvorni broj, ali da vidimo što će se dogoditi ako _zbrojimo_ sve faktore broja (bez samog broja):

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }

    table.grid.perfect-table
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

Usporedimo ove brojeve s njihovim zbrojem faktora:

::: column.perfect-box(width=220 parent="padded-thin")

Za većinu brojeva, zbroj njegovih faktora je [[manji od samog broja|veći od samog broja|jednak kao sam broj]]. Ti se brojevi nazivaju __manjkavi brojevi__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" width=220)

Za nekoliko brojeva, zbroj njihovih faktora je veći od njh samih. Ti se brojevi nazivaju __obilni brojevi__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" delay=500 width=220)

Samo jedan broj na gornjem popisu ima zbroj faktora koji je _jednak_ tom broju: [[6]]. Ovakav broj zove se [__savršeni broj__](gloss:perfect-numbers).

:::

---
> id: perfect-2

Sljedeći savršeni broj je 28, jer ako zbrojimo sve njegove faktore, dobit ćemo `1 + 2 + 4 + 7 + 14 = 28`. Nakon toga, savršeni brojevi postaju mnogo rjeđi:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Primjetite da su svi ovi brojevi [[parni|višekratnici broja 3|za dva veći od kvadrata nekog broja]]. _{span.reveal(when="blank-0")} Ispada da su svi ovi brojevi ujedno i trokutasti!_

---
> id: perfect-3

::: column.grow

Savršene brojeve prvi su proučavali grčki matematičari poput [Euklida](bio:euclid), [Pitagore](bio:pythagoras) i [Nicomachusa](bio:nicomachus), prije više od 2000 godina. Izračunali su prvih nekoliko savršenih brojeva i pitali se ima li možda _neparnih_. Danas matematičari koriste računala za provjeru prvih 10 <sup>1500</sup> brojeva (to je jedan i 1500 nula), ali bez uspjeha: svi savršeni brojevi koje su pronašli bili su parni. Do danas još uvijek nije poznato postoje li neki neparni savršeni brojevi, što ovaj problem čini najstarijim neriješenim problemom u _čitavoj matematici_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euklid iz Aleksandrije

:::

---
> id: hailstone

### Hailstonov niz

Većina nizova koje smo do sada vidjeli imala je jedno pravilo ili obrazac. Ali nema razloga da ne kombiniramo više različitih - na primjer, rekurzivnu formulu poput ove:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Počnimo s `x_1 = 5` i vidimo što će se dogoditi:

{.text-center.s-orange.with-arrows} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

Izgleda da nakon nekoliko elemenata, niz dostigne "ciklus" ”: 4, 2, 1 će se nastaviti ponavljati iznova i iznova, zauvijek. Naravno, mogli smo odabrati drugačiju polaznu točku, poput ${n}{n|10|5,40,1}. Tada bi niz izgledao ovako:

{.text-center} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Čini se da duljina niza jako varira, ali uvijek će završiti u ciklusu 4, 2, 1 - bez obzira koji prvi broj odaberemo. U grafikonu možemo čak zamisliti i elemente niza:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Primjetite kako neke početne točke završavaju vrlo brzo, dok druge (poput _{span.var-action} 31_ ili _{span.var-action} 47_) naprave više od stotinu koraka prije nego što dođu do ciklusa 4, 2, 1.

---
> id: hailstone-3

::: column.grow

Svi nizovi koji slijede ovu rekurzivnu formulu nazivaju se [__nizovi tuča__](gloss:hailstone-sequence), jer se čini da se kreću nasumično gore-dolje prije nego što dosegnu ciklus 4, 2, 1 - baš kao i tuča koje se kreće prema gore i dolje u oblaku prije nego što se obruši na Zemlju.

1937. godine, matematičar [Lothar Collatz](bio:collatz) pretpostavio je da se _svaki_ niz tuča na kraju završi u ciklusu 4, 2, 1 - bez obzira na odabranu početnu vrijednost. Već smo provjerili nekoliko početnih točaka, a računalno su isprobani svi brojevi do `10^20` - to je 100 milijardi milijardi ili 1 nakon čega slijedi dvadeset nula.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Međutim, postoji beskonačno mnogo cijelih brojeva. Nemoguće je provjeriti svaki od njih, a nitko nije uspio pronaći [dokaz](gloss:proof) koji vrijedi za sve brojeve.

Baš kao i potraga za neparnim savršenim brojevima, ovo je još uvijek otvoren matematički problem. Nevjerojatno je da ovi jednostavni uzorci za nizove mogu voditi do pitanja koja su stoljećima zbunjivala čak i najbolje matematičare na svijetu!

---
> id: look-and-say

### Niz pogledaj i reci

Evo još jednog niza koji se malo razlikuje od svih gore navedenih. Možete li pronaći uzorak?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Nastavi_

---
> id: look-and-say-1

Taj se niz naziva __pogledaj i reci__, a obrazac je upravo ono što mu ime kaže: započinjete s brojem 1, a svaki sljedeći izraz je ono što dobijete ako "glasno pročitate" prethodni. Evo primjera:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Možete li sada pronaći sljedeće elemente?

{.text-center.s-lime.s-vertical} ..., _{.n} 312211_, _{.n} [[13112221]]_, _{.n} [[1113213211]]_, ...

---
> id: look-and-say-2

Ovaj se niz često koristi kao zagonetka da bi se nasamarili matematičari - jer se čini da je uzorak potpuno ne-matematički. Međutim, ispostavlja se da niz ima mnoga zanimljiva svojstva. Na primjer, svaki element završava s [[1]], a niti jedna znamenka veća od [[3]] se nikad ne koristi.

---
> id: look-and-say-3

Britanski matematičar [John Conway](bio:conway) otkrio je da će se, bez obzira koji broj odaberemo kao početnu vrijednost, niz na kraju podijeliti u različite „odjeljke“ koji međusobno nisu povezani. Conway je to nazvao _kozmološkom teoremom_ i imenovao različite odjeljke pomoću kemijskih elemenata _Vodik_, _Helij_, _Litij_, ..., sve do _{Plutonija}.

---
> id: quiz

### Kviz o nizovima

Sada ste vidjeli mnoge različite matematičke nizove - neki su temeljeni na geometrijskim oblicima, neki slijede određene formule, a neki se ponašaju gotovo nasumično.

U ovom kvizu možete kombinirati sve svoje znanje o nizovima. Postoji samo jedan cilj: pronaći uzorak i izračunati sljedeća dva elementa niza!

::: .box.problem-box

#### Find the next number

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Pattern: Always +4_

{.text-center.s-orange} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: +3, +4, +5, +6, …_

{.text-center.s-red} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: +4, –1, +4, –1, …_

{.text-center.s-purple} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: ×2, +2, ×2, +2, …_

{.text-center.s-blue} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Pattern: Fibonacci Numbers_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Pattern: +1, +2, ÷2, +1, +2, ÷2, …_

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Pattern: Odd square numbers_

:::

---

## Pascalov trokut

> section: pascals-triangle
> id: pascal-intro

U nastavku možete vidjeti piramidu brojeva koja je nastala pomoću jednostavnog uzorka: započinje s jednim "1" na vrhu, a svaka sljedeća ćelija zbroj je dvije ćelije izravno iznad. Zadržite pokazivač miša iznad neke ćelije da biste vidjeli kako se izračunavaju, a zatim ispunite one koje nedostaju:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

Ovaj dijagram pokazuje samo prvih dvanaest redaka, ali mogli smo nastaviti u beskonačnost, dodajući nove retke na bazi trokuta. Primjetite da je trokut [[simetričan|pravokutan|jednakostraničan]], što vam može pomoći da izračunate neke ćelije.

---
> id: pascal-triangle

Ovaj trokut zove se [__Pascalov trokut__](gloss:pascals-triangle), nazvan po francuskom matematičaru [Blaise Pascalu](bio:pascal). On je bio jedan od prvih europskih matematičara koji je istražio obrasce i svojstva ovog trokuta, no sve to bilo je poznato i drugim civilizacijama mnogo stoljeća ranije:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} 450. godine, indijski matematičar [Pingala](bio:pingala) nazvao je trokut __"Stubište planine Meru"__, po svetoj hinduističkoj planini.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} U Iranu je trokut bio poznat kao __"Khayyam trokut"__ (مثلث خیام), nazvan po perzijskom pjesniku i matematičaru [Omaru Khayyámu](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} U Kini, matematičar Jia Xian također je otkrio trokut. Ime je dobio po njegovom nasljedniku, __"Trokut Yang Hui"__ (杨辉 三角).

:::

Pascalov trokut može se napraviti vrlo jednostavnim uzorkom, ali on je ispunjen iznenađujućim uzorcima i svojstvima. Zato je stotinama godina fascinirao matematičare širom svijeta.

_{button.next-step} Nastavi_

---
> id: pascal-sequences

### Pronalaženje nizova

U prethodnim smo odjeljcima vidjeli mnogo različitih matematičkih nizova. Mnogi od njih mogu se naći i u Pascalovom trokutu:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")

#### {.btn.yellow} _{span.check(when="blank-0")}_

Brojevi u prvoj dijagonali s obje strane uvijek su [[jedinice|rastući|parni]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

Brojevi u drugoj dijagonali na obje strane su [[cijeli brojevi|prosti|kvadratni]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

Brojevi u trećoj dijagonali na obje strane su [[trokutni brojevi|kvadratni|Fibonaccijevi brojevi]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

Brojevi u četvrtoj dijagonali su [[tetraedarski brojevi|kubni brojevi|potencije od 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Ako zbrojimo sve brojeve u redu, njihovi zbrojevi tvore drugi niz: [[kvadrati brojeva|savršeni brojevi|prosti brojevi].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

U svakom retku koji ima prost broj u svojoj drugoj ćeliji, svi su sljedeći brojevi [[višekratnici|djelitelji|inverzi]] tog prostog broja.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

Dijagram iznad označava „plitke“ dijagonale u različitim bojama. Ako zbrojimo brojeve u svakoj dijagonali, dobit ćemo [[Fibonaccijeve brojeve|Hailstonove brojeve|geometrijski niz]].

:::

---
> id: pascal-sequences-1

Naravno, svaki od ovih obrazaca ima matematičko objašnjenje zašto se pojavljuje. Možda možete pronaći neke od njih!

Drugo pitanje koje se može postaviti je koliko se često pojavljuje broj u Pascalovom trokutu. Jasno je da postoji beskonačno mnogo jedinica, jedna dvojka, a svi ostali brojevi pojavljuju se [[najmanje dva puta|barem jednom|točno dvaput]], _{span.reveal(when="blank-0")} u drugoj dijagonali na obje strane._

---
> id: pascal-sequences-2

Neki se brojevi u sredini trokuta pojavljuju tri ili četiri puta. Postoji čak nekoliko njih koji se pojavljuju šest puta: možete vidjeti i [120](->.s120) i [3003](->.s3003) četiri puta u trokutu iznad, a pojavit će se još dva puta u redovima 120 i 3003 ,

Budući da je 3003 trokutni broj, on se zapravo pojavljuje još dva puta u _trećoj_ dijagonali trokuta - što čini ukupno osam pojavljivanja.

Nije poznato postoje li i neki drugi brojevi koji se u trokutu pojavljuju osam puta ili postoje brojevi koji se pojavljuju više od osam puta. Američki matematičar [David Singmaster](bio:singmaster) pretpostavio je da postoji fiksno ograničenje koliko se često neki broj može pojaviti u Pascalovom trokutu, ali to još nije dokazano.

---
> id: modular
> goals: select

### Djeljivost

Neki obrasci Pascalovog trokuta ne mogu se tako lako prepoznati. Na donjem dijagramu označite sve ćelije u kojima su parni brojevi:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} Izgleda da parni brojevi u Pascalovom trokutu tvore drugi, manji [[trokut|matricu|kvadrat]].

---
> id: modular-1
> goals: c2 c3 c4 c5

Ručno bojanje svake ćelije traje dugo, ali ovdje možete vidjeti što se događa ako to učinite za još mnogo redaka. A što je s ćelijama djeljivima s nekim drugim brojevima?

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow

Wow! Obojene ćelije uvijek se pojavljuju u [[trokutima|kvadratima|parovima]] (osim nekoliko pojedinačnih ćelija, koje se mogu definirati kao trokut veličine 1).

Ako nastavimo uzorak ćelija djeljivih s 2, dobit ćemo jednu koja je vrlo slična __trokutu Sierpinski__ prikazanom desno. Oblici poput ovog, koji se sastoje od jednostavnog obrasca koji se nastavlja u beskonačnost postajući sve manji i manji, nazivaju se [__fraktali__](gloss:fractal). Saznat ćete više o njima poslije ...

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Binomni koeficijenti

Postoji još jedno važno svojstvo Pascalovog trokuta koje moramo spomenuti. Da bismo ga razumjeli, pokušat ćemo riješiti isti problem pomoću dvije potpuno različite metode, a zatim ćemo vidjeti kako su povezane.

{.todo} Uskoro

---

## Limesi i konvergencija

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} Uskoro
