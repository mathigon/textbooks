# Sekvence i obrasci

## Uvod

> section: introduction
> id: intro

Mnoge profesije koje koriste matematiku zainteresirane su za jedan specifičan aspekt - _pronalaženje obrazaca_ i mogu predvidjeti budućnost. Evo nekoliko primjera:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

U posljednjem desetljeću, __policijske uprave__ širom svijeta počele su se više oslanjati na matematiku. Posebni algoritmi mogu koristiti podatke iz prošlih zločina da predvide kada i gdje bi se zločini mogli dogoditi u budućnosti. Primjerice, sustav _PredPol_ (ukratko za „prediktivno policiranje“), pomogao je u smanjenju stope kriminala u dijelovima Los Angelesa za 12%!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Ispada da __potresi__ slijede slične obrasce kao zločini. Baš kao što bi jedno zločin mogao pokrenuti odmazde, potres može izazvati i potrese. U matematici se to naziva „uzbudljivi procesi“, a postoje jednadžbe koje pomažu predvidjeti kada bi se sljedeći mogao dogoditi.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Bankari također pregledavaju povijesne podatke o cijenama dionica, kamatama i tečajevima kako bi procjenili kako se __financijska tržišta__ mogu promijeniti u budućnosti. Biti u stanju predvidjeti hoće li vrijednost dionica porasti ili opati može biti vrlo unosno!

:::

Profesionalni matematičari koriste vrlo složene algoritme kako bi pronašli i analizirali sve te obrasce, ali počet ćemo s nečim malo osnovnijim.

---

> id: simple-patterns

### Jednostavne sekvence

U matematici, [__slijed__](gloss:sequence) je lanac brojeva (ili drugih predmeta) koji obično slijede određeni obrazac. Pojedini elementi u nizu nazivaju se [__izrazi__](gloss:sequence-term).

Evo nekoliko primjera nastavka. Možete li pronaći njihove obrasce i izračunati sljedeća dva pojma?

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

Točkice (…) na kraju jednostavno znače da slijed može trajati zauvijek. Kada govorimo o ovakvim nizovima u matematici, često svaki termin predstavljamo posebnom [varijablom](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

Mali broj nakon _x_ naziva se __pretplatnikom__ i označava poziciju pojma u nizu. To znači da možemo _n_ prvi izraz u nizu predstaviti do [[`x_n`|`x_i`|`x_2`]].

---

> id: triangles

### Brojevi trokuta i kvadrata

Sekvence u matematici ne moraju uvijek biti brojevi. Evo niza koji se sastoji od geometrijskih oblika - trokuta sve veće veličine:

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

Na svakom koraku dodajemo još jedan redak prethodnom trokutu. Duljina ovih novih redaka također se svaki put povećava po jedan. Možete li vidjeti uzorak?

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

Da bismo dobili _n_ -ti broj trokuta, uzmemo [[prethodni|first|next]] broj trokuta i dodamo _n_. Na primjer, ako _n_ = ${n}{n|5|2,20,1}, formula postaje <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---

> id: recursive-1

Formula koja izražava `x_n` kao funkciju prethodnih izraza u nizu naziva se [__rekurzivna formula__](gloss:sequence-recursive). Sve dok znate [[prvi izraz|last term|second term]] u nizu, možete izračunati sve sljedeće.

---

> id: squares

    hr

Drugi niz koji se sastoji od geometrijskih oblika su __kvadratni brojevi__. Svaki pojam formiran je od sve većih kvadrata:

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

Za brojeve trokuta pronašli smo rekurzivnu formulu koja vam govori _sljedeći_ izraz niza kao funkciju njegovih _prethodnih_ izraza. Za kvadratne brojeve možemo još bolje: formula koja vam izravno govori _n_, a da prethodno niste morali izračunati sve prethodne:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---

> id: explicit

To se zove [__eksplicitna formula__](gloss:sequence-explicit). Možemo ga koristiti, na primjer, za izračunavanje da je 13. kvadratni kvadrat [[169]], a da prethodno nismo pronašli prethodnih 12 kvadratnih brojeva.

---

> id: definitions

    hr

Sažmi sve definicije koje smo vidjeli do sada:

::: .theorem

[__slijed__](gloss:sequence) je popis brojeva, geometrijskih oblika ili drugih predmeta koji slijede određeni obrazac. Pojedine stavke u nizu nazivaju se [__izrazi__](gloss:sequence-term) i predstavljene su varijablama poput `x_n`.

[__rekurzivna formula__](gloss:sequence-recursive) za niz govori vam o vrijednosti _n_ trećeg termina kao funkciji [[njegovih prethodnih izraza|the first term]]. Morate navesti i prvi termin (e).

[__Izričita formula__](gloss:sequence-explicit) za niz govori vam o vrijednosti _n_ trećeg termina u funkciji [[samo _n_|the previous term]], bez pozivanja na druge izraze u nizu.

:::

---

> id: action-sequence

### Fotografska sekvenca

U sljedećim ćete odjeljcima saznati više različitih matematičkih nizova, iznenađujućih obrazaca i neočekivanih aplikacija.

Prvo, ipak, pogledajmo nešto sasvim drugo: __fotografiranje nizova radnji__. Fotograf brzo snima niz snimaka, a zatim ih spaja u jednu sliku:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Možete li vidjeti kako skijaš formira niz? Uzorak nije zbrajanje ili množenje, već geometrijska [transformacija](gloss:rigid-transformation). Između uzastopnih koraka, skijaš je preveden i [[rotiran|reflected|dilated]].

---

> id: action-sequence-1

Evo još nekoliko primjera fotografija iz sekvenci akcija za vaše uživanje:

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

## Aritmetičke i geometrijske sekvence

> section: arithmetic-geometric
> id: halley

::: column.grow

Godine 1682. astronom [Edmond Halley](bio:halley) opazio je neobičnu pojavu: blistavi bijeli predmet s dugačkim repom koji se kretao noćnim nebom. Bio je to __komet__, mala ledena stijena koja leti kroz svemir, ostavljajući iza sebe trag prašine i leda.

Halley se sjetio da su i drugi astronomi primijetili slične komete mnogo ranije: jedan 1530., a drugi 1606. Primijetite da je jaz između dva uzastopna opažanja isti u oba slučaja: [[76]] godina.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley je zaključio da su sva tri promatranja u stvari isti komet - koji se danas naziva _Halleyev komet_. Orbitira oko sunca i prolazi kroz Zemlju otprilike svakih 76 godina. Također je predvidio kada će kometa biti vidljiva sljedeća:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---

> id: halley-2

Zapravo, vremenski interval nije uvijek _tačno_ 76 godina: može varirati za jednu ili dvije godine, jer orbiti kometa prekidaju drugi planeti. Danas znamo da su Halleyev komet promatrali stari astronomi već 240. godine prije Krista!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depections of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---

> id: ball

Drugačija skupina znanstvenika istražuje ponašanje odskakavajuće teniske lopte. Bacili su loptu s visine od 10 metara i tijekom vremena izmjerili njen položaj. Svakim odbijanjem, lopta gubi dio svoje izvorne visine:

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

Ako usporedite oba ova problema, primijetite da postoje mnoge sličnosti: slijed Halleyevog kometa ima istu [[razliku|ratio|product]] između uzastopnih izraza, dok redoslijed odskoka za tenisku lopticu ima isti odnos [[<<<<|difference|product]] između uzastopnih izraza.

---

> id: arithmetic-geometric-1

Sekvence s tim svojstvima imaju posebno ime:

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

[__Aritmetički niz__](gloss:arithmetic-sequence) ima konstantnu __{.m-red} razliku _d___ između uzastopnih izraza.

Isti se broj dodaje ili oduzima svakom terminu, da bi se proizveo sljedeći.

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

[__geometrijski niz__](gloss:geometric-sequence) ima konstantan __{.m-green} omjer _r___ između uzastopnih izraza.

Svaki se pojam množi ili dijeli s istim brojem, da se dobije sljedeći.

:::

:::

---

> id: arithmetic-geometric-select

Evo nekoliko različitih nizova. Možete li odrediti koji su aritmetički, geometrijski ili ne, i koje su vrijednosti _{.b.m-red} d_ i _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_, ...

::: column(width=320)

je [[geometrijski|arithmetic|neither]] _{span.reveal(when="blank-0")}, s omjerom [[2]].

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_, ...

::: column(width=320)

je [[aritmetika|geometric|neither]] _{span.reveal(when="blank-2")}, s razlikom [[3]]_

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_, ...

::: column(width=320)

je [[aritmetika|geometric|neither]] _{span.reveal(when="blank-4")}, s razlikom [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_, ...

::: column(width=320)

nije [[niti|arithmetic|geometric]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2,5_, _{span.n} 1,25_, ...

::: column(width=320)

je [[geometrijski|arithmetic|neither]] _{span.reveal(when="blank-7")}, s omjerom [[0,5]].

:::

---

> id: arithmetic-geometric-graph

Da bismo definirali aritmetički ili geometrijski niz, moramo znati ne samo zajedničku razliku ili omjer, već i početnu vrijednost (zvanu `a`). Ovdje možete generirati vlastite sekvence i crtati njihove vrijednosti na grafikonu, mijenjajući vrijednosti `a`, _d_ i _r_. Možete li pronaći bilo koji uzorak?

::: column.ag-chart(width=320)

#### {.m-red} Aritmetička sekvenca

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Geometrijska sekvenca

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Primjetite kako svi __{.m-red} aritmetički nizi__ izgledaju vrlo slično: ako je razlika pozitivna, oni se uporno [[povećavaju|decrease]], a ako je razlika negativna, oni se stalno smanjuju [[<<<<|increase]].

{.reveal(when="blank-0 blank-1")} Geometrijski nizovi, s druge strane, mogu se ponašati potpuno drugačije na osnovu vrijednosti `a` i _r_:

::: column.ag-limit-box.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Ako se _{span.var-action} `r > 1`_, uvjeti [[brzo povećavaju|quickly decrease|get closer to zero]] _{span.reveal(when="blank-2")}, sve do beskonačnosti. Matematičari kažu da se redoslijed [__razlikuje__](gloss:sequence-divergence)_

::: column.reveal.ag-limit-box(when="blank-2" animation="pop" delay=200 width=220)

Ako je _{span.var-action} _r_ između -1 i 1_, uvjeti će se uvijek [[približiti 0|decrease to negative infinity|get smaller]] _{span.reveal(when="blank-3")}. Kažemo da niz [__konvergira__](gloss:sequence-convergence)_

::: column.reveal.ag-limit-box(when="blank-3" animation="pop" delay=200 width=220)

Ako se _{span.var-action} `r < -1`_ izrazi izmjenjuju između pozitivnih i negativnih, dok njihova [[apsolutna vrijednost|inverse|difference]] postaje veća.

:::

{.reveal(when="blank-4 blank-5")} Saznajte više o konvergenciji i divergenciji u [posljednjem odjeljku](/course/sequences/convergence) ovog predmeta.

---

> id: arithmetic-geometric-recursive

### Rekurzivne i eksplicitne formule

U prethodnom smo odjeljku naučili da [__rekurzivna formula__](gloss:sequence-recursive) govori o vrijednosti svakog pojma kao funkciji prethodnih izraza. Ovdje su rekurzivne formule za aritmetičke i geometrijske sekvence:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---

> id: arithmetic-geometric-explicit

Jedan problem rekurzivnih formula je da, na primjer, da bismo pronašli 100. pojam, prvo moramo izračunati prethodnih 99 pojmova - a to bi moglo potrajati dugo. Umjesto toga, možemo pokušati pronaći [__izričitu formulu__](gloss:sequence-explicit) koja nam izravno govori o vrijednosti _n_.

::: column.grow

Za __{.m-red} aritmetičke sekvence__, moramo dodati _d_ na svakom koraku:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} Na _n_ ovom terminu dodajemo [[`n-1`|`n`|`n+1`]] kopije _d_, tako da je opća formula

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

Za __{.m-green} geometrijske sekvence__, moramo pomnožiti _r_ na svakom koraku:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} Na _n_ ovom terminu množimo [[`n-1`|`n`|`n+1`]] kopije _r_, tako da je opća formula

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---

> id: arithmetic-geometric-explicit-1

Ovdje je sažetak svih definicija i formula koje ste dosad vidjeli:

::: column.grow

::: .theorem.s-red

__{.m-red} Aritmetički niz__ ima prvi izraz `a` i zajedničku razliku `d` između uzastopnih izraza.

{.text-center} __Rekurzivna formula__: `x_n = x_(n-1) + d`

{.text-center} __Izričita formula__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

__{.m-green} geometrijski niz__ ima prvi izraz `a` i zajednički omjer `r` između uzastopnih izraza.

{.text-center} __Rekurzivna formula__: `x_n = x_(n-1) × r`

{.text-center} __Izričita formula__: `x_n = a × r^(n-1)`

:::

:::

Pogledajmo nekoliko primjera gdje sve to možemo upotrijebiti!

---

> id: pay-it-forward
> goals: video

### Plati naprijed

Evo kratkog isječka iz filma _Plati naprijed_, gdje 12-godišnji Trevor objašnjava svoju ideju da svijet učini boljim mjestom:

    figure
      x-video(src="https://storage.googleapis.com/mathigon-videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---

> id: pay-it-forward-1

Suština Trevorove ideje je da, ako svi "plaćaju naprijed", jedna osoba može imati ogroman utjecaj na svijet:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Primijetite kako broj ljudi na svakom koraku tvori [[geometrijski niz|arithmetic sequence|triangle number]], _{span.reveal(when="blank-0")} sa zajedničkim omjerom [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---

> id: pay-it-forward-2

Pomoću [eksplicitne formule](gloss:sequence-explicit) za geometrijske nizove, možemo utvrditi koliko je novih ljudi pogođeno u bilo kojem koraku:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---

> id: pay-it-forward-3

Broj ljudi se nevjerojatno brzo povećava. U 10. koraku postigli biste 19.683 nove, a nakon 22 koraka postigli biste više ljudi nego što su trenutno živi na Zemlji.

Ovaj slijed brojeva ima posebno ime: __moći 3__. Kao što vidite, svaki je izraz zapravo samo drugačija snaga [<<<<](gloss:powers) od 3:

{.text-center.s-orange} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---

> id: millionaire

### Tko želi biti milijunaš?

{.todo} Uskoro!

---

> id: chessboard

### Problem sa šahovnicom

{.todo} Uskoro!

---

## Figuriraj brojeve

> section: figurate
> id: figurate

Naziv [geometrijskih nizova](gloss:geometric-sequence) prilično je zbunjujući jer oni nemaju ništa s geometrijom. U stvari, ime je razvijeno prije stotine godina, kada su matematičari razmišljali o _množenju_ i _kvadratnih korijena_ na mnogo geometrijskiji način.

Međutim, postoje mnogi drugi nizovi koji se _temelje na određenim geometrijskim oblicima - neke od njih ste već vidjeli u uvodu [<<<<](/course/sequences/introduction). Ove sekvence često nazivamo [__figurate brojevima__](gloss:figurate-numbers), a u ovom ćemo dijelu detaljnije pogledati neke od njih.

---

> id: triangle-numbers

### Brojevi trokuta

Brojevi trokuta __<<<<__ nastaju stvaranjem trokuta progresivno većih veličina:

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

Već ste vidjeli rekurzivnu formulu za brojeve trokuta: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---

> id: billiard-pool

Nije slučajno da uvijek postoji 10 igara prilikom kuglanja ili 15 lopti pri igranju biljara: oboje su to brojevi trokuta!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---

> id: triangle-proof

Nažalost, rekurzivna formula nije od velike pomoći ako želimo pronaći stoti ili 5000. trokutni broj, a da prethodno nismo izračunali sve prethodne. No, kao što smo to radili s aritmetičkim i geometrijskim nizovima, možemo pokušati pronaći eksplicitnu formulu za brojeve trokuta.

{.todo} Uskoro: animirani dokaz za formulu broja trokuta

---

> id: triangle-sums

Čini se da se brojevi trokuta pojavljuju svugdje u matematici i vidjet ćete ih ponovo tijekom ovog tečaja. Jedna posebno zanimljiva činjenica je da se _bilo koji_ cijeli broj može zapisati kao zbroj od najviše tri broja trokuta:

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

{.reveal(when="slide")} Činjenica da ovo djeluje za _svih_ čitavih brojeva prvi je put dokazao 1796. godine njemački matematičar [Carl Friedrich Gauss](bio:gauss) - u dobi od 19 godina!

---

> id: triangle-investigate

::: .box.problem-box

    .box-title: h3 Problem Solving

::: .box-body

Koliki je zbroj prvih 100 pozitivnih [celih brojeva](gloss:integer)? Drugim riječima, u čemu je vrijednost

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

Umjesto da ručno dodajete sve, možete li vam pomoći [brojevi trokuta](gloss:triangle-numbers)? Što je sa zbrojem prvih 1000 pozitivnih brojeva?

:::

:::

---

> id: square-numbers

### Kvadrati i poligonalni brojevi

Drugi niz koji se zasniva na geometrijskim oblicima su __kvadratni brojevi__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Brojeve možete izračunati ovim redoslijedom tako što ćete zarezati svaki cijeli broj (`1^2`, `2^2`, `3^2`, ...), ali ispada da postoji drugi obrazac: razlike između uzastopnih kvadratnih brojeva su [[Neparni brojevi|triangle numbers|integers]] sve većim redoslijedom!

---

> id: square-numbers-1

::: column.grow

Razlog za ovaj obrazac postaje očit ako stvarno nacrtamo kvadrat. Svaki korak dodaje jedan red i jedan stupac. Veličina ovih "uglova" počinje od 1 i povećava se za 2 u svakom koraku - time se formira slijed neparnih brojeva.

To također znači da je _n_ četvrti broj samo zbroj prvih _n_ neparnih brojeva! Na primjer, zbroj prvih 6 neparnih brojeva je

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---

> id: square-numbers-2

Pored toga, svaki je kvadratni broj zbroj dva uzastopna [broja trokuta](gloss:triangle-numbers). Na primjer, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. Možete li vidjeti kako možemo podijeliti svaki kvadrat duž njegove dijagonale, na dva trokuta?

---

> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Nakon brojeva trokuta i kvadrata, možemo nastaviti s većim [mnogokutima](gloss:polygon). Rezultirajući brojevi nizova nazivaju se __poligonalni brojevi__.

Na primjer, ako koristimo poligone sa ${k}{k|5|3,10,1} stranama, dobit ćemo niz __${polygonName(k)} brojeva__.

Možete li pronaći rekurzivne i eksplicitne formule za _n_ taj višekutni broj koji ima _k_ strane? I primjećujete li još neke zanimljive obrasce za veće poligone?

:::

---

> id: tetrahedral

### Tetraedarski i kubni brojevi

Naravno, također se ne moramo ograničavati na dvodimenzionalne oblike i obrasce. Mogli bismo složiti sfere kako bi formirali male piramide, baš kao što biste slagali naranče u supermarket:

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

Matematičari često nazivaju ove piramide [__tetraedrama__](gloss:tetrahedron), a rezultirajući niz [__tetraedarskim brojevima__](gloss:tetrahedral-numbers).

{.todo} Uskoro: Više o brojevima Tetraedrale, kubnim brojevima i 12 dana Božića.

---

## Sekvence kao funkcije

> section: functions
> sectionStatus: dev

NAPRAVITI

---

## Fibonaccijevi brojevi

> section: fibonacci
> id: rabbits

Zamislite da ste primili par beba zečeva, jednog mužjaka i jednu ženku. Oni su vrlo posebni zečevi, jer nikada ne umiru, a ženka rađa novi par zečeva točno jednom mjesečno (uvijek drugi par mužjaka i ženki).

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
    
      .legend(slot="legend") In the first month, the rabbits are very small and can’t do much – but they grow very quickly.
      .legend(slot="legend") After one month, the rabbits are grown up and can start mating…
      .legend(slot="legend") … and after another month, they will give birth to their first pair of kids. You now have two pairs of rabbits.
      .legend(slot="legend") In the next month, your pair of rabbits will give birth to another couple. Meanwhile, the first pair of kids have grown up. You now have three pairs in total.
      .legend(slot="legend") In the fifth month, your original pair of rabbits will give birth to a new pair. At the same time, their first pair of kids is now old enough to give birth to grandchildren. You now have five pairs of rabbits.
      .legend(slot="legend") In the sixth month, there are three more couples that give birth: the original one, as well as their first two pairs or kids.

---

> id: rabbits-1

{.r} U sljedećem mjesecu imali biste 13 pari kunića: 8 iz prethodnog mjeseca, plus 5 novih beba. Možete li otkriti uzorak u ovom nizu? _{button.next-step} Nastavi_

---

> id: rabbits-2

Broj zečeva u određenom mjesecu je [[zbroj dva prethodna broja|twice the previous number]]. _{span.reveal(when="blank-0")} Drugim riječima, trebate dodati _prethodna dva_ izraza u niz, da biste dobili sljedeći. Slijed započinje s dva 1, a [rekurzivna formula](gloss:sequence-recursive) je_

{.text-center.s-orange.reveal(when="blank-0")} _{span.n} `x_n`_ = _{span.n} `x_(n-1)`_ + _{span.n} `x_(n-2)`_

---

> id: rabbits-3

Možete li izračunati broj zečeva nakon još nekoliko mjeseci?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} Dakle nakon 12 mjeseci imat ćete 144 para zečeva!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---

> id: fibonacci

Taj niz brojeva zove se [__Fibonacijeva sekvenca__](gloss:fibonacci-numbers), nazvana po talijanskom matematičaru [Leonardu Fibonacsu](bio:fibonacci).

::: column.grow

Kada se Fibonaccije rodio 1175. godine, većina ljudi u Europi još uvijek je koristila [rimski brojčani sustav](gloss:roman-numerals) za brojeve (npr. IVX ili MCMLIV). Fibonacijev otac bio je trgovac i zajedno su putovali u sjevernu Afriku, kao i na Bliski Istok. Tamo je Fibonaccije prvi naučio [arapski brojčani sustav](gloss:arabic-numerals).

Kada se vratio u Italiju, Fibonaccije je napisao knjigu nazvanu _Liber Abaci_ (latinski za "Knjigu izračuna"), gdje je prvi uveo nove arapske brojeve europskim trgovcima. Oni su bili neposredan uspjeh - i danas ih koristimo.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

Na jednoj od stranica u svojoj knjizi, također je istraživao uzgojne uzgoje zečeva - zato su Fibonacijevi brojevi nazvani po njemu.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---

> id: spirals

Naravno, Fibonaccijevi brojevi nisu način na koji se zečevi _<<<<_ naseljavaju u stvarnom životu. Kunići nemaju točno jednog mužjaka i jednu ženku potomstva svaki mjesec, a mi nismo računali da će kunići na kraju umrijeti.

Ali ispada da u prirodi postoje mnoga druga mjesta na kojima se pojavljuju Fibonaccijevi brojevi _do_: na primjer spirale u biljkama. Možete li prebrojati koliko spirala ima u svakom smjeru?

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Ovaj borov konus ima [[8]] spirale u smjeru kazaljke na satu i [[13]] spirale.

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Ovaj suncokret ima 34 spirale u smjeru kazaljke na satu i 55 spirala u smjeru suprotnom od kazaljke na satu.

:::

---

> id: spirals-1

U oba slučaja brojevi spirale su uzastopni Fibonaccijevi brojevi. Isto vrijedi i za mnoge druge biljke: sljedeći put kad izađete vani, brojite latice u cvijetu ili broj lišća na stabljici. Vrlo često ćete otkriti da su to Fibonaccijevi brojevi!

Naravno, to nije samo slučajnost. Postoji važan razlog zbog kojeg priroda voli Fibonaccijev slijed o kojem ćete saznati više kasnije.

---

> id: bees

::: column(width=320)

    x-select.spiral-tabs   
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Fibonaccijevi brojevi pojavljuju se i u populacijama medonosnih pčela.

U svakoj pčelinjoj koloniji postoji po jedna _kraljica_ koja odlaže mnogo jaja. Ako jaje oplodi muško pčelo, ono se izljeva u __žensku__ pčelu. Ako nije oplođena, izljeva se na __mužjaka__ pčelu (zvanu bespilotna drona).

To znači da ženske pčele imaju [[dva roditelja|one parent]], dok muške pčele imaju samo [[jednog roditelja|two parents]].

{.reveal(when="blank-0 blank-1")} Ako nacrtamo stablo pčela pčela, broj roditelja, baka i djedova, pradjedova i starijih generacija uvijek su Fibonaccijevi brojevi!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Povremeno se mlade pčele hrane posebnom hranom koja se zove "matična mliječ". U tom se slučaju pretvaraju u kraljice i odletjet će u novu košnicu.

:::

---

> id: golden-spiral

### Zlatni omjer

Baš kao [trokut](gloss:triangle-numbers) i [kvadratni brojevi](gloss:square-numbers), i drugi nizovi koje smo vidjeli prije, Fibonaccijev niz se može prikazati pomoću geometrijskog uzorka:

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") We start with two small squares of size 1.
      .legend(slot="legend") Next, we add a new square of size 2, to form a larger rectangle.
      .legend(slot="legend") Next, we add a square of size 3, to form an even larger rectangle.
      .legend(slot="legend") The next square has size 5. Can you see that we’re recreating the Fibonacci numbers?
      .legend(slot="legend") If we continue adding squares, they will have size 8, 13, 21, and so on.
      .legend(slot="legend") You might have noticed that, as the rectangles get larger, they seem to start “spiraling” outwards. We can even visualise this by drawing a perfect spiral that connects the corners of the squares.

---

> id: golden-ratio

Na svakom koraku, kvadrati formiraju veći pravokutnik. Njegova širina i visina uvijek su dva uzastopna Fibonaccijeva broja. __Omjer slike__ pravokutnika je omjer njegove širine i njegove visine:

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

Primijetite kako se, kako dodajemo sve više i više kvadrata, čini se da se omjer slike bliži i približava određenom broju oko 1,6. Ovaj se broj zove [__zlatni omjer__](gloss:golden-ratio) i obično je predstavljen grčkim slovom `φ` ("phi"). Točna je njegova vrijednost

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Mnogi vjeruju da je zlatni omjer posebno estetski ugodan. Zato je često koriste umjetnici i arhitekti - kao u ova dva primjera:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Kaže se da je grčki kipar Phidias koristio zlatni omjer dizajnirajući _Partenon_ u Ateni. Prvo slovo njegova imena, `φ`, simbol je koji koristimo za zlatni omjer.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _Sakrament Posljednje večere_, španjolskog umjetnika Salvadora Dalíja, jedna je od mnogih slika u zlatnom omjeru. U pozadini se takođe može vidjeti veliki [dodekaedar](gloss:dodecahedron).

:::

---

> id: golden-ratio-2

Zlatni omjer možemo približiti [[dijeljenjem|adding|subtracting]] dva uzastopna Fibonaccijeva broja.

{.reveal(when="blank-0")} Međutim, ispada da se tačna vrednost `φ` ne može zapisati kao jednostavan ulomak: to je [__iracionalni broj__](gloss:irrational-numbers), baš kao [`π`](gloss:pi) i `sqrt(2)` i neke druge brojeve koje ste vidjeli prije.

---

> id: sunflower-growing

### Fibonaccijeva spirala

::: column.grow

Zlatni omjer objašnjava zašto se Fibonaccijevi brojevi pojavljuju u prirodi, poput konusa suncokreta i borova koje ste vidjeli na početku ovog odjeljka.

Obje ove biljke rastu prema van iz njihovog središta (dio biljke nazvan _meristem_). Kako se dodaju nove sjemenke, lišće ili latice, guraju postojeće dalje prema van.

Pomaknite klizač udesno da biste prikazali kako biljka raste. Uočite kako se svaki list dodaje pri drugačijoj rotaciji od prethodnog. Kut između dva uzastopna lista uvijek je isti.

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

Za cvijeće je važno odabrati prikladan kut: lišće ili sjeme moraju biti približno jednako raspoređeni kako bi dobili najveću količinu sunčeve svjetlosti i hranjivih sastojaka. Na donjem dijagramu možete istražiti kako može izgledati suncokret pod različitim kutovima između njegovih sjemenki:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Ako je kut _{span.fib-action(data-value=0)} 0 °_, sve će sjeme rasti u jednom dugom redu daleko od središta.

{div.inline(slot="legend")} Ako je kut _{span.fib-action(data-value=0.5)} `1/2`_ potpune rotacije (180 °), sjeme će se izmjenjivati između dva odvojena "kraka" koji se odmiču od središta.

{div.inline(slot="legend")} Ako je rotacija drugi udio od 360 °, na primjer _{span.fib-action(data-value=2/5)} `2/5`_ ili _{span.fib-action(data-value=1/3)} `1/3`_ ili _{span.fib-action(data-value=3/8)} `3/8`_, tada će broj "krakova" biti isti kao i [[nazivnik|numerator|prime factor]] tog ulomka.

{div(slot="legend")} Nažalost, "ruke" su loše, jer znače da sjeme nije ravnomjerno raspoređeno: sav se prostor između krakova izgubi. Ali ako [racionalni brojevi](gloss:rational-numbers) neće raditi, pokušajmo [iracionalne brojeve](gloss:irrational-numbers)!

{div.inline(slot="legend")} Jedan primjer iracionalnog broja je [`pi`](gloss:pi). Ali ako je kut između sjemena _{span.fib-action(data-value=0.31831)} `1/pi`_ 360 °, i dalje imamo oružje: njih 22. To je zato što je ulomak `22/7 = 3.1429…` prilično dobra aproksimacija za `pi`. Ono što nam stvarno treba je iracionalni broj koji _ne može_ približiti jednostavnim dijelom.

{div.inline(slot="legend")} Ispada da je [omjer zlata](gloss:golden-ratio) upravo to: "najracionalniji" od svih iracionalnih brojeva. Ako je kut između sjemena _{span.fib-action(data-value=0.6180339)} `1/phi`_ 360 °, oni izgledaju gotovo savršeno raspoređeni. A upravo je to kut koji koriste biljke širom svijeta.

:::

    x-gesture(target=".fib-action")

---

> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Sjetite se odozgo da se omjeri uzastopnih Fibonaccijevih brojeva sve više približavaju zlatnom omjeru - i zato ćete, ako brojite spirale u biljci, često pronaći Fibonaccijev broj.

Važno je zapamtiti da priroda ne zna za Fibonaccijeve brojeve. Priroda također ne može riješiti jednadžbe za izračun zlatnog omjera - ali tijekom milijuna milijuna godina, biljke su imale dovoljno vremena da isprobaju različite uglove i otkriju najbolji.

Biljke i životinje uvijek žele rasti na najučinkovitiji način i zato je priroda puna redovitih, matematičkih obrazaca.

:::

---

> id: lucas-numbers

### Fibonachos

Do sada smo koristili rekurzivnu jednadžbu samo za Fibonaccijeve brojeve. Zapravo postoji i eksplicitna jednadžba - ali je mnogo teže pronaći:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Također bismo mogli pokušati odabrati različite početne točke za Fibonaccijeve brojeve. Na primjer, ako krenemo s 2, 1, ... a ne s 1, 1, ... dobit ćemo niz nazvan __Lucasovi brojevi__.

Ispada da, bez obzira na dva početna broja koja odaberete, rezultirajući nizovi dijele mnoga svojstva. Na primjer, omjeri uzastopnih izraza _uvijek će_ [konvertirati](gloss:sequence-convergence) u zlatni omjer.

{.text-center.s-purple.s-small} ${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n} ${a+b}<<<<_, _{span.n} ${a+2×b}<<<<_, _{span.n} ${2×a+3×b}<<<<_, _{span.n} ${3×a+5×b}<<<<_ , _{span.n} ${5×a+8×b}<<<<_, _{span.n} ${8×a+13×b}<<<<_, ...

---

> id: fibonacci-puzzles

Postoje mnoge druge zagonetke, obrasci i aplikacije povezane s Fibonaccijevim brojevima. Evo nekoliko primjera koje možete i sami isprobati:

::: .box.problem-box

    .box-title: h3 Problem solving

::: .box-body

{1 1463}. Fibonacijeva podjela__

(a) Koji su Fibonaccijevi brojevi parni? Postoji li uzorak na kojem su mjestu smještene duž niza? Možete li objasniti zašto?

(b) Koji su Fibonaccijevi brojevi djeljivi sa 3 (ili djeljivi sa 4)? Što primjećujete?

    hr

__2. Fibonaccijevi zbrojevi__

Što se događa ako zbrojite bilo koja tri uzastopna Fibonaccijeva broja? Možete li objasniti zašto?

    hr

{3 1469}. Fibonaccije stubišta__

Kad hodam stubama, mogu napraviti pojedinačne korake ili preskočiti dvije korake u isto vrijeme. To znači da postoji mnogo različitih mogućnosti za to kako bih se uspio stepenicom. Na primjer, ako postoji 5 koraka, imam 8 različitih izbora:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Koliko ima izbora za stubište sa 6, 7 ili 8 stepenica? Možete li otkriti uzorak? I kako je to povezano s Fibonaccijevim brojevima?

:::
:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Posebne sekvence

> section: special
> id: special-intro

Pored [aritmetičkih](gloss:arithmetic-sequence) i [geometrijskih](gloss:geometric-sequence) nastavaka, [Fibonaccijevih brojeva](gloss:fibonacci-numbers) i [figurativnih brojeva](gloss:figurate-numbers), postoji bezbroj zanimljivih nizova koji ne slijede slično , pravilni uzorak.

---

> id: primes

### Primarni brojevi

Jedan primjer koji ste već vidjeli je [__glavni brojevi__](gloss:prime). Kažemo da je broj _glavni_ ako nema [faktora](gloss:factor) [[osim 1 i samog sebe|other than 1 and 2|and no multiples]].

---
> id: primes-1

Evo prvih nekoliko glavnih brojeva:

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Nažalost, prosti brojevi ne slijede jednostavan obrazac ili rekurzivnu formulu. Ponekad se pojavljuju neposredno jedan pored drugog (to se zove [blizanac prim.](gloss:twin-primes)), a ponekad postoje velike praznine između njih. Čini se da su raspoređeni gotovo nasumično! Prime brojevi također nemaju jednostavan geometrijski prikaz poput [trokuta](gloss:triangle-numbers) ili [kvadratnih brojeva](gloss:square-numbers), ali uz malo rada možemo otkriti zanimljive obrasce:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Ako precrtamo sve višestruke male cjelobrojne brojeve, preostali brojevi moraju biti primarni. Ova metoda se zove [__Sita Eratostena__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} Ako nacrtamo grafikon koji se povećava za 1 kad postoji glavni broj, dobit ćemo "stepenastu" funkciju sa fascinantnim svojstvima.

:::

---
> id: primes-3

Možete saznati više o tim i drugim svojstvima pravih brojeva u našem tečaju na temu [Razdvojenost i prava](/course/divisibility/primes). Oni su neki od najvažnijih i najtajanstvenijih pojmova u matematici!     figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Savršeni brojevi

Da bismo utvrdili da li je broj [<<<<](gloss:prime), moramo pronaći sve njegove [faktore](gloss:factor). Obično bismo _množili_ ove faktore da bismo dobili izvorni broj, ali da vidimo što će se dogoditi ako _zbrojimo_ sve faktore broja (bez samog broja):

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

Za većinu brojeva, zbroj njegovih faktora je [[manji od samog|greater than|equal to]]. Ti se brojevi nazivaju __manjkavi brojevi__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" width=220)

Za nekoliko brojeva, zbroj njegovih faktora je veći od njega samog. Ti se brojevi nazivaju __obilni brojevi__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" delay=500 width=220)

Samo jedan broj na gornjem popisu ima zbroj faktora koji je _jednak_ sebi: [[6]]. To se zove [__savršen broj__](gloss:perfect-numbers).

:::

---
> id: perfect-2

Sljedeći savršeni broj je 28, jer ako zbrojimo sve njegove faktore, dobit ćemo `1 + 2 + 4 + 7 + 14 = 28`. Nakon toga, savršeni brojevi postaju mnogo rjeđi:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Primjetite da su svi ovi brojevi [[čak i|multiples of 3|2 more than a square number]]. _{span.reveal(when="blank-0")} Ispada da su i svi trokutasti brojevi!_

---
> id: perfect-3

::: column.grow

Savršene brojeve prvi su proučavali grčki matematičari poput [Euklid](bio:euclid), [Pitagore](bio:pythagoras) i [Nicomachus](bio:nicomachus), prije više od 2000 godina. Izračunali su prvih nekoliko savršenih brojeva i pitali se može li ih biti _neparnih_. Danas su matematičari koristili računala za provjeru prvih 10 <sup>1500</sup> brojeva (to je jedan praćen 1500 nula), ali bez uspjeha: svi savršeni brojevi koje su pronašli bili su parni. Do danas još uvijek nije poznato postoje li neki neparni savršeni brojevi, što ga čini najstarijim neriješenim problemom u _čitavoj matematici_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euklid iz Aleksandrije

:::

---
> id: hailstone

### Slijed Hailstone-a

Većina nastavka koje smo do sada vidjeli imalo je jedno pravilo ili obrazac. Ali nema razloga zašto ne možemo kombinirati više različitih - na primjer, rekurzivnu formulu poput ove:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Počnimo s `x_1 = 5` i vidjeti što se događa:

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

Izgleda da nakon nekoliko termina, niz dostigne "ciklus" ”: 4, 2, 1 nastavit će se ponavljati iznova i iznova, zauvijek. Naravno, mogli smo odabrati drugačiju polaznu točku, poput ${n}{n|10|5,40,1}. Tada bi slijed izgledao ovako:

{.text-center} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Čini se da duljina sekvence jako varira, ali uvijek će završiti u ciklusu 4, 2, 1 - bez obzira koji prvi broj odaberemo. U grafikonu možemo čak zamisliti i redoslijede niza:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Primjetite kako se neke početne točke završavaju vrlo brzo, dok druge (poput _{span.var-action} 31_ ili _{span.var-action} 47_) čine više od stotinu koraka prije nego što dođu do četvorke, 2, 1 ciklus.

---

> id: hailstone-3

::: column.grow

Svi nizovi koji slijede ovu rekurzivnu formulu nazivaju se [__Hailstone sekvence__](gloss:hailstone-sequence), jer se čini da se kreću nasumično gore-dolje prije nego što dosegnu ciklus 4, 2, 1 - baš kao i graševine koje se kreću prema gore i dolje u oblaku prije nego što se srušio na Zemlju.

1937. godine, matematičar [Lothar Collatz](bio:collatz) predložio je da se _svaki_ niz točaka na kraju završi u ciklusu 4, 2, 1 - bez obzira na početnu vrijednost koju odaberete. Već ste provjerili nekoliko početnih točaka, a računala su zapravo isprobala sve brojeve do `10^20` - to je 100 milijardi milijardi ili 1 nakon čega slijedi dvadeset nula.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Međutim, postoji beskonačno mnogo cijelih brojeva. Nemoguće je provjeriti svaki od njih, a nitko nije uspio pronaći [dokaz](gloss:proof) koji djeluje za sve.

Baš kao i potraga za neparnim savršenim brojevima, ovo je još uvijek otvoren matematički problem. Nevjerojatno je da ovi jednostavni uzorci nizova mogu dovesti do pitanja koja su stoljećima mistificirala čak i najbolje matematičare na svijetu!

---

> id: look-and-say

### Slijed pretraživanja i kazivanja

Evo još jednog niza koji se malo razlikuje od svih gore navedenih. Možete li pronaći uzorak?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Nastavi_

---

> id: look-and-say-1

Taj se niz naziva __slijed i gledaj__, a obrazac je upravo ono što ime kaže: započinješ s brojem 1, a svaki sljedeći izraz je ono što dobiješ ako "glasno čitaš" prethodni. Evo primjera:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Možete li sada pronaći sljedeće uvjete?

{.text-center.s-lime.s-vertical} ..., _{.n} 312211_, _{.n} [[13112221]]_, _{.n} [[1113213211]]_, ...

---

> id: look-and-say-2

Ovaj se slijed često koristi kao zagonetka da bi se upoznali matematičari - jer se čini da je uzorak potpuno ne-matematički. Međutim, kako se ispostavilo, niz ima mnoga zanimljiva svojstva. Na primjer, svaki izraz završava u [[1]], a niti jedna znamenka veća od [[3]] se nikad ne koristi.

---

> id: look-and-say-3

Britanski matematičar [John Conway](bio:conway) otkrio je da će se, bez obzira koji broj odabrati kao početna vrijednost, slijed na kraju podijeliti u različite „odjeljke“ koji više ne djeluju jedni s drugima. Conway je to nazvao _kosmološkom teoremom_ i imenovao različite odjeljke pomoću kemijskih elemenata _Vodik_, _Helij_, _Litij_, ..., sve do _{plutonijevog 1760}.

---

> id: quiz

### Kviz sekvence

Sada ste vidjeli bezbroj različitih matematičkih nizova - neki temeljeni na geometrijskim oblicima, neki koji slijede određene formule, a drugi koji se izgleda ponašaju gotovo nasumično.

U ovom kvizu možete kombinirati sve svoje znanje o nastavcima. Postoji samo jedan cilj: pronaći uzorak i izračunati sljedeća dva pojma!

::: .box.problem-box

    .box-title: h3 Find the next number

::: .box-body

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
:::

---

## Pascalov trokut

> section: pascals-triangle
> id: pascal-intro

Ispod možete vidjeti piramidu brojeva koja je stvorena jednostavnim uzorkom: započinje s jednim "1" na vrhu, a svaka sljedeća ćelija zbroj je dvije stanice izravno iznad. Zadržite pokazivač miša iznad neke ćelije da biste vidjeli kako se izračunavaju, a zatim ispunite nedostajuće:

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

Ovaj je dijagram pokazao samo prvih dvanaest redaka, ali mogli smo nastaviti zauvijek, dodajući nove retke na dnu. Primjetite da je trokut [[simetričan|right-angled|equilateral]], što vam može pomoći da izračunate neke ćelije.

---

> id: pascal-triangle

Trokut se zove [__Pascalov trokut__](gloss:pascals-triangle), nazvan po francuskom matematičaru [Blaise Pascal](bio:pascal). Bio je jedan od prvih europskih matematičara koji je istražio njegove obrasce i svojstva, ali to je bilo poznato i drugim civilizacijama mnogo stoljeća ranije:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} U 450. godine, indijski matematičar [Pingala](bio:pingala) nazvao je trokut __"stubištem gore Meru"__, nazvanim po svetoj hinduističkoj planini.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} U Iranu je bio poznat kao __"Khayyam trokut"__ (مثلث خیام), nazvan po perzijskom pjesniku i matematičaru [Omaru Khayyámu](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} U Kini, matematičar Jia Xian također je otkrio trokut. Ime je dobio po njegovom nasljedniku, __"trokut Yang Hui"__ (杨辉 三角).

:::

Pascalov trokut može se stvoriti vrlo jednostavnim uzorkom, ali on je ispunjen iznenađujućim uzorcima i svojstvima. Zato je stotinama godina fascinirao matematičare širom svijeta.

_{button.next-step} Nastavi_

---

> id: pascal-sequences

### Pronalaženje slijeda

U prethodnim smo odjeljcima vidjeli bezbroj različitih matematičkih nizova. Ispada da se mnogi od njih mogu naći i u Pascalovom trokutu:

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

Brojevi u prvoj dijagonali s obje strane su [[brojevi|increasing|even]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

Brojevi u drugoj dijagonali na obje strane su [[cijeli brojevi|primes|square numbers]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

Brojevi u trećoj dijagonali na obje strane su [[brojevi trokuta|square numbers|Fibonacci numbers]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

Brojevi u četvrtoj dijagonali su [[tetraedarski brojevi|cubic numbers|powers of 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Ako zbrojite sve brojeve u redu, njihovi zbrojevi tvore drugi slijed: [[snage dvije|perfect numbers|prime numbers]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

U svakom retku koji ima glavni broj u svojoj drugoj ćeliji, svi su sljedeći brojevi [[višestruki|factors|inverses]] tog pravog broja.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

Dijagram iznad označava „plitke“ dijagonale u različitim bojama. Ako zbrojimo brojeve u svaku dijagonalu, dobit ćemo [[Fibonaccijeve brojeve|Hailstone numbers|geometric sequence]].

:::

---

> id: pascal-sequences-1

Naravno, svaki od ovih obrazaca ima matematički razlog koji objašnjava zašto se pojavljuje. Možda možete pronaći neke od njih!

Drugo pitanje koje možete postaviti je koliko se često pojavljuje broj u Pascalovom trokutu. Jasno je da postoji beskonačno mnogo 1, jedan, a svaki drugi broj pojavljuje se [[najmanje dva puta|at least once|exactly twice]], _{span.reveal(when="blank-0")} u drugoj dijagonali na obje strane._

---

> id: pascal-sequences-2

Neki se brojevi u sredini trokuta također pojavljuju tri ili četiri puta. Postoji čak nekoliko koji se pojavljuju šest puta: možete vidjeti i [120](->.s120) i [3003](->.s3003) četiri puta u trokutu iznad, a pojavit će se još dva puta u redovima 120 i 3003 ,

Budući da je 3003 broj trokuta, on se zapravo pojavljuje još dva puta u _trećoj_ dijagonali trokuta - što čini ukupno osam pojava.

Nije poznato postoje li neki drugi brojevi koji se u trokutu pojavljuju osam puta ili postoje brojevi koji se pojavljuju više od osam puta. Američki matematičar [David Singmaster](bio:singmaster) pretpostavio je da postoji fiksno ograničenje u koliko često se brojevi mogu pojaviti u Pascalovom trokutu, ali to još nije dokazano.

---

> id: modular
> goals: select

### Podijeljenost

Neki obrasci Pascalovog trokuta nisu tako lako prepoznati. Na donjem dijagramu označite sve ćelije koje su ujednačene:

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

{.reveal(when="select")} Izgleda da parni broj u Pascalovom trokutu tvori drugi, manji [[trokut|matrix|square]].

---

> id: modular-1
> goals: c2 c3 c4 c5

Ručno bojanje svake ćelije traje dugo, ali ovdje možete vidjeti što se događa ako to učinite za još mnogo redaka. A što je sa stanicama koje se dijele s drugim brojevima?

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

Wow! Obojene ćelije uvijek se pojavljuju u [[trokutima|squares|pairs]] (osim nekoliko pojedinačnih ćelija, koje se mogu vidjeti kao trokut veličine 1).

Ako nastavimo uzorak ćelija djeljiv s 2, dobit ćemo jednu koja je vrlo slična __Sierpinskom trokutu__ na desnoj strani. Oblici poput ovoga, koji se sastoje od jednostavnog obrasca koji izgleda zauvijek ostaje sve manji i manji, nazivaju se [__fraktalima__](gloss:fractal). Saznat ćete više o njima u budućnosti ...

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---

> id: pascal-binomial

### Binomni koeficijenti

Postoji još jedno važno svojstvo Pascalovog trokuta o kojem moramo razgovarati. Da bismo ga razumjeli, pokušat ćemo riješiti isti problem s dvije potpuno različite metode, a zatim ćemo vidjeti kako su povezani.

{.todo} Uskoro

---

## Granice i konvergencija

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} Uskoro
