# Sekvenser och mönster

## Introduktion

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Många yrken som använder matematik är intresserade av en specifik aspekt - _hitta mönster_, samt att kunna förutsäga framtiden. Här är några exempel:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160)

::: column(width=400)

Under det senaste decenniet har __polisavdelningar__ runt om i världen börjat förlita sig mer och mer på matematik. Speciella algoritmer kan använda data från tidigare brott för att förutsäga när och var brott kan tänkas inträffa i framtiden. Exempelvis hjälpte _PredPol_ -systemet (förkortning för ”prediktiv polisering”) att minska brottsfrekvensen i delar av Los Angeles med 12%!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160)

::: column(width=400)

Det visar sig att __jordbävningar__ följer liknande mönster som brott. Precis som ett brott kan utlösa hämnd, kan en jordbävning utlösa efterskalv. I matematik kallas detta "själv-spännande processer", och det finns ekvationer som hjälper till att förutsäga när nästa kan hända.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160)

::: column(width=400)

Bankirer tittar också på historiska uppgifter om aktiekurser, räntor och valutakurser för att uppskatta hur __finansmarknader__ kan förändras i framtiden. Att kunna förutsäga om värdet på en aktie kommer att gå upp eller ner kan vara extremt lukrativt!

:::

Professionella matematiker använder mycket komplexa algoritmer för att hitta och analysera alla dessa mönster, men vi kommer att börja med något mer grundläggande.

---
> id: simple-patterns

### Enkla sekvenser

I matematik är en [__sekvens__](gloss:sequence) en kedja med siffror (eller andra objekt) som vanligtvis följer ett visst mönster. De enskilda elementen i en sekvens kallas [__termer__](gloss:sequence-term).

Här är några exempel på sekvenser. Kan du hitta deras mönster och beräkna de nästa två termerna?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Mönster: "Lägg till 3 till föregående nummer för att få nästa."_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Mönster: "Lägg till 6 till föregående nummer för att få nästa."_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Mönster: "Lägg omväxlande 1 till och lägg till 3 till föregående nummer för att få nästa."_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Mönster: "Multiplicera föregående nummer med 2 för att få nästa."_

---
> id: simple-patterns-1

Prickarna (...) i slutet betyder helt enkelt att sekvensen kan fortsätta för alltid. När vi refererar till sådana sekvenser i matematik, representerar vi ofta varje term med en speciell [variabel](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

Det lilla antalet efter _x_ kallas ett __-underlag__ och indikerar termens position i sekvensen. Det betyder att vi kan representera _n_ termen i sekvensen med [[`x_n`|`x_i`|`x_2`]].

---
> id: triangles

### Triangel- och fyrkantiga siffror

Sekvenser i matematik behöver inte alltid vara siffror. Här är en sekvens som består av geometriska former - trianglar av ökande storlek:

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

I varje steg lägger vi till ytterligare en rad till den föregående triangeln. Längden på dessa nya rader ökar också med en varje gång. Kan du se mönstret?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

Vi kan också beskriva detta mönster med en speciell [formel](gloss:formula):

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

För att få _n_ -de triangelnumret tar vi [[föregående|first|next]] triangelnummer och lägger till _n_. Om till exempel _n_ = ${n}{n|5|2,20,1} blir formeln <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---
> id: recursive-1

En formel som uttrycker `x_n` som en funktion av tidigare termer i sekvensen kallas en [__rekursiv formel__](gloss:sequence-recursive). Så länge du känner till [[första termen|last term|second term]] i sekvensen kan du beräkna alla följande.

---
> id: squares

    hr

En annan sekvens som består av geometriska former är __kvadratnumren__. Varje term bildas av allt större rutor:

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

För triangelnumren hittade vi en rekursiv formel som säger _nästa_ term i sekvensen som en funktion av dess _tidigare_ termer. För kvadratiska siffror kan vi göra ännu bättre: en formel som berättar _n_: e termen direkt utan att först behöva beräkna alla tidigare:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---
> id: explicit

Detta kallas en [__uttrycklig formel__](gloss:sequence-explicit). Vi kan till exempel använda det för att beräkna att det 13: e kvadratnumret är [[169]], utan att först hitta de tidigare 12 kvadratnumren.

---
> id: definitions

    hr

Låt oss sammanfatta alla definitioner som vi hittills har sett:

::: .theorem

En [__sekvens__](gloss:sequence) är en lista över siffror, geometriska former eller andra objekt som följer ett specifikt mönster. De enskilda objekten i sekvensen kallas [__termer__](gloss:sequence-term) och representeras av variabler som `x_n`.

En [__rekursiv formel__](gloss:sequence-recursive) för en sekvens säger värdet på _n_: e termen som en funktion av [[dess tidigare termer|the first term]]. Du måste också ange de första termerna.

En [__uttrycklig formel__](gloss:sequence-explicit) för en sekvens berättar värdet på _n_: e termen som en funktion av [[bara _n_ {496 }, utan att hänvisa till andra termer i sekvensen.

:::

---
> id: action-sequence

### Action Sequence Photography

I följande avsnitt kommer du att lära dig om många olika matematiska sekvenser, överraskande mönster och oväntade applikationer.

Låt oss dock först se på något helt annat: __fotografering av åtgärdssekvens__. En fotograf tar många bilder snabbt i följd och sammanfogar dem sedan till en enda bild:

    figure: x-img(src="images/action-1.jpg" width=640 height=320)

Kan du se hur skidåkaren bildar en sekvens? Mönstret är inte tillägg eller multiplikation, utan en geometrisk [transformation](gloss:rigid-transformation). Mellan på varandra följande steg översätts och [[roteras|reflected|dilated]].

---
> id: action-sequence-1

Här är några fler exempel på action-sekvensfotografering för din njutning:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox)

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox)

:::

---

## Aritmetiska och geometriska sekvenser

> section: arithmetic-geometric
> id: halley

::: column.grow

1682 observerade astronomen [Edmond Halley](bio:halley) ett ovanligt fenomen: ett glödande vitt föremål med en lång svans som rörde sig över natthimlen. Det var en __komet__, en liten, isig sten som flyger genom rymden, medan han lämnar ett spår av damm och is.

Halley kom ihåg att andra astronomer hade observerat liknande kometer mycket tidigare: en 1530 och en annan 1606. Lägg märke till att klyftan mellan två på varandra följande observationer är densamma i båda fallen: [[76]] år.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley drog slutsatsen att alla tre observationerna i själva verket var av samma komet - som nu kallas _Halleys komet_. Den kretsar runt solen och passerar jorden ungefär vart 76 år. Han förutspådde också när kometen skulle bli synlig nästa:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

Faktiskt är tidsintervallet inte alltid _exakt_ 76 år: det kan variera med ett eller två år, eftersom kometens bana avbryts av andra planeter. Idag vet vi att Halleys komet observerades av forntida astronomer redan 240 f.Kr.

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depections of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

En annan grupp forskare undersöker beteendet hos en studsande tennisboll. De tappade bollen från en höjd av 10 meter och mätte dess position över tid. Med varje studs förlorar bollen en del av sin ursprungliga höjd:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Forskarna märkte att bollen förlorar 20% av sin höjd efter varje studs. Med andra ord, den maximala höjden för varje studs är 80% av den föregående. Detta tillät dem att förutsäga höjden på varje följande studs:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definitioner

Om du jämför båda dessa problem, kanske du märker att det finns många likheter: sekvensen för Halleys komet har samma [[skillnad|ratio|product]] mellan på varandra följande termer, medan sekvensen av tennisbollsprång har samma [[-förhållande { 619} mellan på varandra följande villkor.

---
> id: arithmetic-geometric-1

Sekvenser med dessa egenskaper har ett speciellt namn:

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

En [__aritmetisk sekvens__](gloss:arithmetic-sequence) har en konstant __{.m-red} skillnad _d___ mellan på varandra följande termer.

Samma nummer läggs till eller subtraheras för varje term för att producera nästa.

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

En [__geometrisk sekvens__](gloss:geometric-sequence) har ett konstant __{.m-green} förhållande _r___ mellan på varandra följande termer.

Varje term multipliceras eller delas med samma antal för att producera nästa.

:::

:::

---
> id: arithmetic-geometric-select

Här är några olika sekvenser. Kan du bestämma vilka som är aritmetiska, geometriska eller varken, och vilka värden för _{.b.m-red} d_ och _{.b.m-green} r_ är?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_, ...

::: column(width=320)

är [[geometrisk|arithmetic|neither]] _{span.reveal(when="blank-0")}, med förhållandet [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_, ...

::: column(width=320)

är [[aritmetik|geometric|neither]] _{span.reveal(when="blank-2")}, med skillnad [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_, ...

::: column(width=320)

är [[aritmetik|geometric|neither]] _{span.reveal(when="blank-4")}, med skillnad [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_, ...

::: column(width=320)

är [[varken|arithmetic|geometric]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2,5_, _{span.n} 1,25_, ...

::: column(width=320)

är [[geometrisk|arithmetic|neither]] _{span.reveal(when="blank-7")}, med förhållandet [[0,5]]._

:::

---
> id: arithmetic-geometric-graph

För att definiera en aritmetisk eller geometrisk sekvens måste vi veta inte bara den vanliga skillnaden eller förhållandet, utan också det initiala värdet (kallad `a`). Här kan du generera dina egna sekvenser och plotta deras värden på en graf genom att ändra värdena på `a`, _d_ och _r_. Kan du hitta några mönster?

::: column.ag-chart(width=320)

#### {.m-red} Aritmetisk sekvens

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Geometrisk sekvens

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Lägg märke till hur alla __{.m-red} aritmetiska sekvenser__ ser väldigt lika ut: om skillnaden är positiv ökar de stadigt [[increase|decrease]], och om skillnaden är negativ, minskar de stadigt [[decrease|increase]].

{.reveal(when="blank-0 blank-1")} Geometriska sekvenser kan å andra sidan bete sig helt annorlunda baserat på värdena på `a` och _r_:

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Om [`r > 1`](action:set(2,2)) kommer termerna [[snabbt att bli större|quickly decrease|get closer to zero]] _{span.reveal(when="blank-2")}, upp till oändlighet. Matematiker säger att sekvensen [__avviker__](gloss:sequence-divergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

Om [*r* är mellan –1 och 1](action:set(10,0.6)) kommer termerna alltid [[att närma sig 0|decrease to negative infinity|get smaller]] _{span.reveal(when="blank-3")}. Vi säger att sekvensen [__konvergerar__](gloss:sequence-convergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

Om [`r < -1`](action:set(3,-1.4)), kommer termerna att växla mellan positivt och negativt, medan deras [[absoluta värde|inverse|difference]] blir större.

:::

{.reveal(when="blank-4 blank-5")} Du lär dig mer om konvergens och avvikelse i [sista avsnittet](/course/sequences/convergence) i den här kursen.

---
> id: arithmetic-geometric-recursive

### Rekursiva och explicita formler

I det föregående avsnittet fick du veta att en [__rekursiv formel__](gloss:sequence-recursive) berättar värdet för varje term som en funktion av tidigare termer. Här är de rekursiva formlerna för aritmetiska och geometriska sekvenser:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

Ett problem med rekursiva formler är att för att hitta den 100: e termen, till exempel, måste vi först beräkna de tidigare 99 termerna - och det kan ta lång tid. Istället kan vi försöka hitta en [__uttrycklig formel__](gloss:sequence-explicit), som säger värdet på _n_: e termen direkt.

::: column.grow

För __{.m-red} aritmetiska sekvenser__ måste vi lägga till _d_ i varje steg:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} Vid _n_: e termen lägger vi till [[`n-1`|`n`|`n+1`]] kopior av _d_, så den allmänna formeln är

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

För __{.m-green} geometriska sekvenser__ måste vi multiplicera _r_ vid varje steg:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} Vid _n_: e terminen multiplicerar vi [[`n-1`|`n`|`n+1`]] kopior av _r_, så den allmänna formeln är

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Här är en sammanfattning av alla definitioner och formler som du hittills har sett:

::: column.grow

::: .theorem.s-red

En __{.m-red} aritmetisk sekvens__ har första term `a` och gemensam skillnad `d` mellan på varandra följande termer.

{.text-center} __Rekursiv formel__: `x_n = x_(n-1) + d`

{.text-center} __Explicit formel__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

En __{.m-green} geometrisk sekvens__ har första term `a` och gemensamt förhållande `r` mellan på varandra följande termer.

{.text-center} __Rekursiv formel__: `x_n = x_(n-1) × r`

{.text-center} __Explicit formel__: `x_n = a × r^(n-1)`

:::

:::

Låt oss nu titta på några exempel där vi kan använda allt detta!

---
> id: pay-it-forward
> goals: video

### Betala framåt

Här är ett kort klipp från filmen _Pay it Forward_, där 12-åriga Trevor förklarar sin idé för att göra världen till en bättre plats:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

Kärnan i Trevors idé är att om alla ”betalar ut det” kan en enda person ha en enorm inverkan på världen:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Lägg märke till hur antalet personer i varje steg bildar en [[geometrisk sekvens|arithmetic sequence|triangle number]], _{span.reveal(when="blank-0")} med gemensamt förhållande [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Med hjälp av den [explicita formeln](gloss:sequence-explicit) för geometriska sekvenser kan vi ta reda på hur många nya människor som påverkas i vilket steg som helst:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

Antalet människor ökar otroligt snabbt. På 10: e steget skulle du nå 19 683 nya, och efter 22 steg skulle du ha nått fler människor än som för närvarande lever på jorden.

Denna sekvens av siffror har ett speciellt namn: __krafter på 3__. Som ni ser är varje term faktiskt bara en annan [effekt](gloss:powers) av 3:

{.text-center.s-orange} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### ​​Vem vill bli miljonär?

{.todo} KOMMER FÖR!

---
> id: chessboard

### Chessboard-problemet

{.todo} KOMMER FÖR!

---

## Figurnummer

> section: figurate
> id: figurate

Namnet på [geometriska sekvenser](gloss:geometric-sequence) är ganska förvirrande eftersom de inte har något med geometri att göra. Faktum är att namnet utvecklades för hundratals år sedan, när matematiker tänkte på _multiplikation_ och _kvadratrötter_ på ett mycket mer geometriskt sätt.

Men det finns många andra sekvenser som _är_ baserat på vissa geometriska former - av vilka du redan såg i [introduktion](/course/sequences/introduction). Dessa sekvenser kallas ofta [__figurnummer__](gloss:figurate-numbers), och i det här avsnittet kommer vi att titta närmare på några av dem.

---
> id: triangle-numbers

### Triangelnummer

__triangelnumren__ genereras genom att skapa trianglar med gradvis större storlek:

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

Du har redan sett den rekursiva formeln för triangelnummer: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

Det är ingen slump att det alltid finns 10 stift vid bowling eller 15 bollar när man spelar biljard: de är båda triangeln!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Tyvärr är den rekursiva formeln inte så bra om vi vill hitta det 100: e eller det 5000: e triangelnumret utan att först beräkna alla tidigare. Men som vi gjorde med aritmetiska och geometriska sekvenser, kan vi försöka hitta en uttrycklig formel för triangelnumren.

{.todo} COMING SOON: Animerat bevis för triangelnummerformeln


      g







---
> id: triangle-sums

Triangelnummer verkar dyka upp överallt i matematik, och du kommer att se dem igen under hela denna kurs. Ett särskilt intressant faktum är att _alla_ heltal kan skrivas som summan av högst tre triangelnummer:

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

{.reveal(when="slide")} Det faktum att detta fungerar för _alla_ hela siffror bevisades först 1796 av den tyska matematikern [Carl Friedrich Gauss](bio:gauss) - vid 19 års ålder!

---
> id: triangle-investigate

::: .box.f-blue

#### Problem Solving

Vilken är summan av de första 100 positiva [heltal](gloss:integer)? Med andra ord, vad är värdet av

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

I stället för att manuellt lägga till allt, kan du använda [triangelnumren](gloss:triangle-numbers) för att hjälpa dig? Vad sägs om summan av de första 1000 positiva heltalen?

:::

---
> id: square-numbers

### Kvadratiska och polygonala siffror

En annan sekvens som är baserad på geometriska former är __kvadratnumren__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Du kan beräkna siffrorna är denna sekvens genom att kvadratera hela heltalet (`1^2`, `2^2`, `3^2`, ...), men det visar sig att det finns ett annat mönster: skillnaderna mellan på varandra följande kvadratiska nummer är [[udda siffror|triangle numbers|integers]] i ökande ordning!

---
> id: square-numbers-1

::: column.grow

Anledningen till detta mönster blir uppenbar om vi faktiskt ritar en fyrkant. Varje steg lägger till en rad och en kolumn. Storleken på dessa "hörn" börjar på 1 och ökar med 2 vid varje steg - och därmed bildar sekvensen med udda siffror.

Detta betyder också att det _n_: e kvadratnumret bara är summan av de första _n_ udda siffrorna! Till exempel är summan av de första 6 udda siffrorna

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

Dessutom är varje kvadratnummer också summan av två på varandra följande [triangelnummer](gloss:triangle-numbers). Till exempel ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. Kan du se hur vi kan dela varje kvadrat längs dess diagonal, i två trianglar?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Efter triangel- och kvadratnummer kan vi fortsätta med större [polygoner](gloss:polygon). De resulterande nummersekvenserna kallas __polygonala nummer__.

Om vi ​​till exempel använder polygoner med ${k}{k|5|3,10,1} sidor får vi sekvensen med __${polygonName(k)} siffror__.

Kan du hitta rekursiva och explicita formler för _n_ th månghörnigt tal som har _k_ sidor? Och märker du några andra intressanta mönster för större polygoner?

:::

---
> id: tetrahedral

### Tetraedriska och kubiska siffror

Naturligtvis behöver vi inte begränsa oss till tvådimensionella former och mönster. Vi kunde stapla sfärer för att bilda små pyramider, precis som hur du skulle stapla apelsiner i en stormarknad:

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

Matematiker kallar ofta dessa pyramider [__tetrahedra__](gloss:tetrahedron), och den resulterande sekvensen [__tetrahedralnummer__](gloss:tetrahedral-numbers).

{.todo} KOMMER FRÅN: Mer om tetraedriska nummer, kubiska siffror och julens 12 dagar.

---

## Sekvenser som funktioner

> section: functions
> sectionStatus: dev

ATT GÖRA

---

## Fibonacci-nummer

> section: fibonacci
> id: rabbits

Föreställ dig att du har fått ett par babykaniner, en hane och en kvinna. De är väldigt speciella kaniner, eftersom de aldrig dör, och den kvinnliga föder ett nytt par kaniner exakt en gång i månaden (alltid ett par manliga och kvinnliga par).

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

{.r} Under följande månad skulle du ha 13 par kaniner: de åtta från föregående månad, plus 5 nya uppsättningar av spädbarn. Kan du upptäcka ett mönster i den här sekvensen? _{button.next-step} Fortsätt_

---
> id: rabbits-2

Antalet kaniner under en viss månad är [[summan av de två tidigare siffrorna|twice the previous number]]. _{span.reveal(when="blank-0")} Med andra ord måste du lägga till _tidigare två_ termer i sekvensen för att få nästa. Sekvensen börjar med två 1s, och [rekursiv formel](gloss:sequence-recursive) är_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Kan du beräkna antalet kaniner efter några månader till?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} Så efter 12 månader har du 144 par kaniner!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Denna sekvens av nummer kallas [__Fibonacci Sequence__](gloss:fibonacci-numbers), uppkallad efter den italienska matematikern [Leonardo Fibonacci](bio:fibonacci).

::: column.grow

När Fibonacci föddes 1175 använde de flesta människor i Europa fortfarande det [romerska siffrsystemet](gloss:roman-numerals) för nummer (t.ex. IVX eller MCMLIV). Fibonciens far var köpman och tillsammans reste de både till norra Afrika och Mellanöstern. Det var där Fibonacci först lärde sig [arabiska siffersystemet](gloss:arabic-numerals).

När han återvände till Italien skrev Fibonacci en bok som heter _Liber Abaci_ (latin för ”The Book of Calculations”), där han först introducerade de nya arabiska siffrorna för europeiska handlare. De var en omedelbar framgång - och vi använder dem fortfarande idag.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

På en av sidorna i sin bok undersökte han också kaninernas avelsmönster - det är därför Fibonacci-numren fick sitt namn efter honom.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Naturligtvis är Fibonacci-siffrorna inte hur kaniner _faktiskt_ befolkar i verkliga livet. Kaniner har inte exakt en manlig och en kvinnlig avkom varje månad, och vi har inte redovisat att kaniner dör så småningom.

Men det visar sig att det finns många andra platser i naturen där Fibonacci-nummer _gör_ visas: till exempel spiralerna i växter. Kan du räkna hur många spiraler det finns i varje riktning?

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Denna kotte har [[8]] spiraler medurs och [[13]] moturs spiraler.

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Denna solros har 34 medurs spiraler och 55 moturs spiraler.

:::

---
> id: spirals-1

I båda fallen är antalet spiraler i följd Fibonacci-nummer. Detsamma gäller för många andra växter: nästa gång du går ut, räkna antalet kronblad i en blomma eller antalet löv på en stjälk. Mycket ofta kommer du att upptäcka att det är Fibonacci-nummer!

Naturligtvis är detta inte bara en slump. Det finns ett viktigt skäl till att naturen gillar Fibonacci-sekvensen, som du lär dig mer om senare.

---
> id: bees

::: column(width=320)

    x-select.segmented
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Fibonacci-nummer visas också i populationerna av honungsbin.

I varje bi-koloni finns en _drottning_ som lägger många ägg. Om ett ägg befruktas av ett manbi, kläcks det till ett __kvinnligt__ bi. Om den inte befruktas kläcks den i en __hane__ bi (kallas drönare).

Detta betyder att kvinnliga bin har [[två föräldrar|one parent]], medan manliga bin bara har [[en förälder|two parents]].

{.reveal(when="blank-0 blank-1")} Om vi ​​ritar ett bi, är antalet föräldrar, morföräldrar, morföräldrar och tidigare generationer alltid Fibonacci-nummer!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Ibland matas unga kvinnliga bin med särskild mat som kallas "kunglig gelé". I så fall förvandlas de till drottningar och flyger iväg för att starta en ny bikupa.

:::

---
> id: golden-spiral

### Golden Ratio

Precis som [triangeln](gloss:triangle-numbers) och [kvadratiska siffrorna](gloss:square-numbers) och andra sekvenser som vi har sett tidigare, kan Fibonacci-sekvensen visualiseras med hjälp av ett geometriskt mönster:

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

Vid varje steg bildar rutorna en större rektangel. Dess bredd och höjd är alltid två Fibonacci-nummer i följd. Rektangelns __bildförhållande__ är förhållandet mellan dess bredd och höjd:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2

::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1,5

::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1,666 ...

::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1,6

::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac> <mn> [[13]] </mn> <mn> [[8]] </mn> </mfrac> _{span.reveal(when="blank-0 blank-1")} = 1.625_

::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac> <mn> [[21]] </mn> <mn> [[13]] </mn> </mfrac> _{span.reveal(when="blank-2 blank-3")} = 1,62 ..._

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Lägg märke till hur, när vi lägger till fler och fler rutor, verkar bildförhållandet närma sig och närmare ett specifikt nummer runt 1,6. Detta nummer kallas [__Golden Ratio__](gloss:golden-ratio) och representeras vanligtvis av den grekiska bokstaven `φ` (“phi”). Dess exakta värde är

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Många tror att det gyllene förhållandet är särskilt estetiskt tilltalande. Det är därför det ofta används av konstnärer och arkitekter - som i dessa två exempel:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Den grekiska skulptören Phidias sägs ha använt Golden-förhållandet när han utformade _Parthenon_ i Aten. Den första bokstaven i hans namn, `φ`, är den symbol vi nu använder för det gyllene förhållandet.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali.png" width=320 height=198)

{.caption} _Sacrament of the Last Supper_, av den spanska konstnären Salvador Dalí, är en av många målningar i det gyllene förhållandet. I bakgrunden kan du också se en stor [dodecahedron](gloss:dodecahedron).

:::

---
> id: golden-ratio-2

Vi kan ungefärligt gyllene förhållandet genom att [[dela|adding|subtracting]] två Fibonacci-nummer i följd.

{.reveal(when="blank-0")} Det visar sig emellertid att det exakta värdet för `φ` inte kan skrivas som en enkel bråk: det är ett [__irrationellt nummer__](gloss:irrational-numbers), precis som [`π`](gloss:pi) och `sqrt(2)` och några andra nummer du har sett tidigare.

---
> id: sunflower-growing

### Fibonacci-spiraler

::: column.grow

Det gyllene förhållandet förklarar varför Fibonacci-siffror visas i naturen, som solrosen och kotten som du såg i början av detta avsnitt.

Båda dessa växter växer utåt från deras centrum (en del av växten som kallas _meristem_). När nya frön, löv eller kronblad läggs, skjuter de de befintliga längre utåt.

Flytta reglaget till höger för att visualisera hur en växt växer. Lägg märke till hur varje blad läggs till med en annan rotation än det föregående. Vinkeln mellan två på varandra följande blad är alltid densamma.

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

Det är viktigt för blommor att välja en lämplig vinkel: bladen eller frönna måste vara ungefär lika fördelade så att de får den största mängden solljus och näringsämnen. I diagrammet nedan kan du undersöka hur en solros kan se ut med olika vinklar mellan dess frön:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Om vinkeln är [0°](action:set(0)) kommer alla frön att växa i en enda lång rad bort från mitten.

{div.inline(slot="legend")} Om vinkeln är [`1/2`](action:set(0.5)) av en hel rotation (180 °) kommer fröna att växla mellan två separata "armar" som rör sig bort från mitten.

{div.inline(slot="legend")} Om rotationen är en annan del av 360 °, till exempel [`2/5`](action:set(2/5)) eller [`1/3`](action:set(1/3)) eller [`3/8`](action:set(3/8)), då kommer antalet "armar" att vara detsamma som [[nämnaren|numerator|prime factor]] för den fraktionen.

{div(slot="legend")} Tyvärr är "armar" dåliga, eftersom de betyder att fröna inte är jämnt fördelade: allt utrymmet mellan armarna slösas bort. Men om [rationella siffror](gloss:rational-numbers) inte kommer att fungera, låt oss försöka [irrationella siffror](gloss:irrational-numbers)!

{div.inline(slot="legend")} Ett exempel på ett irrationellt nummer är [`pi`](gloss:pi). Men om vinkeln mellan frön är [`1/pi`](action:set(0.31831)) på 360 °, verkar vi fortfarande få armar: 22 av dem. Det beror på att fraktionen `22/7 = 3.1429…` är en ganska bra approximation för `pi`. Det vi verkligen behöver är ett irrationellt tal som _inte_ kan närmas med en enkel bråk.

{div.inline(slot="legend")} Det visar sig att [gyllene förhållandet](gloss:golden-ratio) bara är det: det 'mest irrationella' av alla irrationella siffror. Om vinkeln mellan frön är [`1/phi`](action:set(0.6180339)) på 360 °, verkar de vara nästan perfekt åtskilda. Och det är just den vinkel som växter runt om i världen använder.

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Du kommer kanske att komma ihåg från ovan att förhållandena mellan på varandra följande Fibonacci-nummer kommer närmare och närmare det gyllene förhållandet - och det är därför, om du räknar antalet spiraler i en växt, kommer du ofta att hitta ett Fibonacci-nummer.

Det är viktigt att komma ihåg att naturen inte vet om Fibonacci-nummer. Naturen kan inte lösa ekvationer för att beräkna det gyllene förhållandet - men under miljoner år hade växter god tid att prova olika vinklar och upptäcka det bästa.

Växter och djur vill alltid växa på det mest effektiva sättet, och det är därför naturen är full av regelbundna, matematiska mönster.

:::

---
> id: lucas-numbers

### Fibonachos

Hittills har vi bara använt den rekursiva ekvationen för Fibonacci-nummer. Det finns faktiskt en uttrycklig ekvation också - men det är mycket svårare att hitta:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Vi kan också prova att välja olika utgångspunkter för Fibonacci-siffrorna. Om vi ​​till exempel börjar med 2, 1, ... snarare än 1, 1, ... får vi en sekvens som heter __Lucas-numren__.

Det visar sig att oavsett två startnummer du väljer, de resulterande sekvenserna delar många egenskaper. Exempelvis kommer förhållandena mellan på varandra följande termer _alltid_ [att konvergera](gloss:sequence-convergence) till det gyllene förhållandet.

{.text-center.s-purple.s-small} ${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n} ${a+b}<<<<_, _{span.n} ${a+2×b}<<<<_, _{span.n} ${2×a+3×b}<<<<_, _{span.n} ${3×a+5×b}<<<<_ , _{span.n} ${5×a+8×b}<<<<_, _{span.n} ${8×a+13×b}<<<<_, ...

---
> id: fibonacci-puzzles

Det finns många andra pussel, mönster och applikationer relaterade till Fibonacci-nummer. Här är några exempel som du kan prova själv:

::: .box.f-blue

#### Problem solving

__1. Fibonacci delbarhet__

(a) Vilka Fibonacci-nummer är jämnt? Finns det ett mönster där de är placerade längs sekvensen? Kan du förklara varför?

(b) Vilka Fibonacci-nummer kan delas med 3 (eller delas med 4)? Vad märker du?

    hr

__2. Fibonacci Sums__

Vad händer om du lägger till tre Fibonacci-nummer i följd? Kan du förklara varför?

    hr

__3. Fibonacci trappor__

När jag går uppför trappan kan jag antingen ta enstaka steg eller hoppa över två steg åt gången. Det innebär att det finns många olika möjligheter för hur jag kan gå upp en trappa. Om det till exempel finns 5 steg har jag 8 olika val:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Hur många alternativ finns det för trappa med 6, 7 eller 8 steg? Kan du upptäcka ett mönster? Och hur är detta relaterat till Fibonacci-siffrorna?

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Speciella sekvenser

> section: special
> id: special-intro

Förutom [aritmetiska](gloss:arithmetic-sequence) och [geometriska](gloss:geometric-sequence) sekvenser, [Fibonacci-nummer](gloss:fibonacci-numbers) och [figurnummer](gloss:figurate-numbers) finns det otaliga intressanta sekvenser som inte följer en liknande , vanligt mönster.

---
> id: primes

### Prime Numbers

Ett exempel som du redan har sett tidigare är [__Primnummer__](gloss:prime). Vi säger att ett tal är _prim_ om det inte har några [faktorer](gloss:factor) [[annat än 1 och sig själv|other than 1 and 2|and no multiples]].

---
> id: primes-1

Här är de första huvudnumren:

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Tyvärr följer inte primtal ett enkelt mönster eller en rekursiv formel. Ibland visas de direkt intill varandra (dessa kallas [tvillingprimor](gloss:twin-primes)), och ibland finns det stora luckor mellan dem. De verkar distribueras nästan slumpmässigt!

Primtal har inte heller en enkel geometrisk representation som [triangel](gloss:triangle-numbers) eller [kvadratiska siffror](gloss:square-numbers), men med lite arbete kan vi avslöja intressanta mönster:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Om vi ​​kryssar ut alla multiplar av små heltal måste alla återstående siffror vara primata. Denna metod kallas [__Sieve of Eratosthenes__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} Om vi ​​ritar ett diagram som ökar med 1 när det finns ett primtal, får vi en "stegad" funktion med fascinerande egenskaper.

:::

---
> id: primes-3

Du kan lära dig mer om dessa och andra egenskaper hos primtal i vår kurs om [Delbarhet och primes](/course/divisibility/primes). De är några av de viktigaste och mest mystiska begreppen i matematik!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### perfekta siffror

För att avgöra om ett tal är [prim](gloss:prime) måste vi hitta alla dess [faktorer](gloss:factor). Vanligtvis skulle vi _multiplicera_ dessa faktorer för att få tillbaka det ursprungliga numret, men låt oss se vad som händer om vi _lägger till_ alla faktorer i ett nummer (exklusive numret i sig):

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

Låt oss jämföra dessa siffror med deras summa av faktorer:

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

För de flesta siffror är summan av dess faktorer [[mindre än|greater than|equal to]] själv. Dessa nummer kallas __bristfälliga nummer__.

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

För några få siffror är summan av dess faktorer större än sig själv. Dessa nummer kallas __rikligt med__.

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Endast ett nummer i listan ovan har en summa av faktorer som är _lika_ till sig själv: [[6]]. Detta kallas ett [__perfekt nummer__](gloss:perfect-numbers).

:::

---
> id: perfect-2

Nästa perfekta nummer är 28, för om vi lägger till alla dess faktorer får vi `1 + 2 + 4 + 7 + 14 = 28`. Därefter blir perfekta siffror mycket sällsyntare:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Lägg märke till att alla dessa siffror är [[till och med|multiples of 3|2 more than a square number]]. _{span.reveal(when="blank-0")} Det visar sig att de också alla är triangelnummer!_

---
> id: perfect-3

::: column.grow

Perfekt antal studerades först av forntida grekiska matematiker som [Euclid](bio:euclid), [Pythagoras](bio:pythagoras) och [Nicomachus](bio:nicomachus), för mer än 2000 år sedan. De beräknade de första perfekta siffrorna och undrade om det kan finnas några _udda_.

Idag har matematiker använt datorer för att kontrollera de första 10 <sup> 1500 </sup> -numren (det är ett 1 följt av 1500 nollor), men utan framgång: alla perfekta siffror de hittade var jämn. Än idag är det fortfarande okänt om det finns några udda perfekta siffror, vilket gör det till det äldsta olösta problemet i _hela matematiken_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euklid av Alexandria

:::

---
> id: hailstone

### The Hailstone Sequence

De flesta av de sekvenser vi hittills har sett hade en enda regel eller mönster. Men det finns ingen anledning till att vi inte kan kombinera flera olika - till exempel en rekursiv formel som denna:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Låt oss börja med `x_1 = 5` och se vad som händer:

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

Det ser ut som att efter några termer, sekvensen når en "cykel": 4, 2, 1 kommer att fortsätta att upprepa om och om igen, för alltid.

Naturligtvis kunde vi ha valt en annan utgångspunkt, som ${n}{n|10|5,40,1}. Då skulle sekvensen se ut så här:

{.text-center} _{span.var.s-orange}${hailstones(n)}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Det verkar som att sekvensens längd varierar mycket, men den kommer alltid att hamna i en cykel på 4, 2, 1 - oavsett vilket första nummer vi väljer. Vi kan till och med visualisera termerna i sekvensen i ett diagram:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Lägg märke till hur vissa startpunkter slutar mycket snabbt, medan andra (som [31](action:set(31)) eller [47](action:set(47))) tar mer än hundra steg innan de når 4, 2, 1 cykel.

---
> id: hailstone-3

::: column.grow

Alla sekvenser som följer denna rekursiva formel kallas [__Hailstone Sequences__](gloss:hailstone-sequence), eftersom de verkar röra sig slumpmässigt upp och ner innan de når 4, 2, 1 cykeln - precis som hagelstenar som rör sig upp och ner i ett moln innan jag kraschar till jorden.

1937 föreslog matematikern [Lothar Collatz](bio:collatz) att _varje_ haglstenssekvens slutligen slutar i en 4, 2, 1-cykel - vilket startvärde du än väljer. Du har redan kontrollerat några utgångspunkter ovan, och datorer har faktiskt testat alla siffror upp till `10^20` - det är 100 miljarder miljarder eller 1 följt av tjugo nollor.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Men det finns oändligt många heltal. Det är omöjligt att kontrollera var och en av dem och ingen har kunnat hitta ett [bevis](gloss:proof) som fungerar för alla.

Precis som sökandet efter udda perfekta siffror är detta fortfarande ett öppet problem i matematik. Det är fantastiskt att dessa enkla mönster för sekvenser kan leda till frågor som har mystifierat till och med de bästa matematikerna i världen i århundraden!

---
> id: look-and-say

### Look-and-Say-sekvensen

Här är ytterligare en sekvens som skiljer sig lite från alla de du har sett ovan. Kan du hitta mönstret?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Fortsätt_

---
> id: look-and-say-1

Denna sekvens kallas __Look-and-Say__ -sekvensen, och mönstret är precis vad namnet säger: du börjar med en 1, och varje följande term är vad du får om du "läser högt" föregående. Här är ett exempel:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Kan du nu hitta nästa termer?

{.text-center.s-lime.s-vertical} …, _{.n}312211_, _{.n}[[13112221]]_,
_{.n}[[1113213211]]_, …

---
> id: look-and-say-2

Denna sekvens används ofta som ett pussel för att resa upp matematiker - eftersom mönstret verkar vara helt icke-matematiskt. Men som det visar sig har sekvensen många intressanta egenskaper. Till exempel slutar varje term på [[1]], och ingen siffra som är större än [[3]] kommer någonsin att användas.

---
> id: look-and-say-3

Den brittiska matematikern [John Conway](bio:conway) upptäckte att oavsett vilket nummer du väljer som utgångsvärde kommer sekvensen så småningom att delas upp i distinkta "sektioner" som inte längre interagerar med varandra. Conway kallade detta den _kosmologiska teorem_ och namngav de olika sektionerna med hjälp av de kemiska elementen _väte_, _helium_, _litium_, ... _Plutonium_.

---
> id: quiz

### Sequence Quiz

Du har nu sett otaliga olika matematiska sekvenser - några baserade på geometriska former, några som följer specifika formler och andra som verkar uppträda nästan slumpmässigt.

I denna frågesport kan du kombinera all din kunskap om sekvenser. Det finns bara ett mål: hitta mönstret och beräkna de kommande två termerna!

::: .box.f-blue

#### Find the next number

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Mönster: Alltid +4_

{.text-center.s-orange} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Mönster: +3, +4, +5, +6, ..._

{.text-center.s-red} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Mönster: +4, –1, +4, –1,…_

{.text-center.s-purple} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Mönster: × 2, +2, × 2, +2, ..._

{.text-center.s-blue} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Mönster: Fibonacci-nummer_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Mönster: +1, +2, ÷ 2, +1, +2, ÷ 2, ..._

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Mönster: Udda kvadratiska nummer_

:::

---

## Pascal's Triangle

> section: pascals-triangle
> id: pascal-intro

Nedan kan du se en talpyramid som skapas med ett enkelt mönster: den börjar med en enda ”1” upptill, och varje följande cell är summan av de två cellerna direkt ovanför. Håll muspekaren över några av cellerna för att se hur de beräknas och fyll sedan i de saknade:

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

Detta diagram visade bara de första tolv raderna, men vi kunde fortsätta för evigt och lägga till nya rader längst ner. Lägg märke till att triangeln är [[symmetrisk|right-angled|equilateral]], vilket kan hjälpa dig att beräkna några av cellerna.

---
> id: pascal-triangle

Triangeln heter [__Pascal triangel__](gloss:pascals-triangle), uppkallad efter den franska matematikern [Blaise Pascal](bio:pascal). Han var en av de första europeiska matematikerna som undersökte dess mönster och egenskaper, men den var känd för andra civilisationer många århundraden tidigare:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} Under 450 f.Kr. kallade den indiska matematikern [Pingala](bio:pingala) triangeln __'trappuppgången på berget Meru'__, uppkallad efter ett heligt hinduberg.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} I Iran var den känd som __'Khayyam-triangeln'__ (مثلث خیام), uppkallad efter den persiska poeten och matematikern [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} I Kina upptäckte matematikern Jia Xian också triangeln. Den fick sitt namn efter hans efterträdare, __"Yang Huis triangel"__ (杨辉 三角).

:::

Pascal triangel kan skapas med ett mycket enkelt mönster, men den är fylld med överraskande mönster och egenskaper. Det är därför det har fascinerat matematiker över hela världen i hundratals år.

_{button.next-step} Fortsätt_

---
> id: pascal-sequences

### Hitta sekvenser

I de föregående avsnitten såg du otaliga olika matematiska sekvenser. Det visar sig att många av dem också finns i Pascals triangel:

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

Siffrorna i den första diagonalen på vardera sidan är alla [[de|increasing|even]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

Siffrorna i den andra diagonalen på vardera sidan är [[heltal|primes|square numbers]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

Siffrorna i den tredje diagonalen på vardera sidan är [[triangelnumren|square numbers|Fibonacci numbers]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

Siffrorna i den fjärde diagonalen är de [[tetraedriska siffrorna|cubic numbers|powers of 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Om du lägger till alla siffror i rad bildar deras summor en annan sekvens: [[-kraften för två|perfect numbers|prime numbers]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

I varje rad som har ett primtal i sin andra cell är alla följande siffror [[multiplar|factors|inverses]] av det primet.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

Diagrammet ovan belyser de "grunda" diagonalerna i olika färger. Om vi ​​lägger till siffrorna i varje diagonal får vi [[Fibonacci-siffrorna|Hailstone numbers|geometric sequence]].

:::

---
> id: pascal-sequences-1

Naturligtvis har vart och ett av dessa mönster ett matematiskt skäl som förklarar varför det visas. Kanske kan du hitta några av dem!

En annan fråga du kan ställa är hur ofta ett nummer visas i Pascals triangel. Det finns uppenbarligen oändligt många 1, en 2, och alla andra nummer visas [[minst två gånger|at least once|exactly twice]], _{span.reveal(when="blank-0")} i den andra diagonalen på båda sidor._

---
> id: pascal-sequences-2

Vissa siffror i mitten av triangeln visas också tre eller fyra gånger. Det finns till och med några som visas sex gånger: du kan se både [120](->.s120) och [3003](->.s3003) fyra gånger i triangeln ovan, och de kommer att visas ytterligare två gånger vardera i raderna 120 och 3003 .

Eftersom 3003 är ett triangelnummer visas det faktiskt ytterligare två gånger i triangeln _tredje_ i triangeln - vilket gör åtta händelser totalt.

Det är okänt om det finns några andra nummer som visas åtta gånger i triangeln, eller om det finns nummer som visas mer än åtta gånger. Den amerikanska matematikern [David Singmaster](bio:singmaster) antog att det finns en fast limed på hur ofta siffror kan uppträda i Pascals triangel - men det har ännu inte bevisats.

---
> id: modular
> goals: select

### Delbarhet

Vissa mönster i Pascal triangel är inte lika lätt att upptäcka. I diagrammet nedan markerar du alla celler som är jämna:

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

{.reveal(when="select")} Det ser ut som att jämnt tal i Pascals triangel bildar en annan, mindre [[triangel|matrix|square]].

---
> id: modular-1
> goals: c2 c3 c4 c5

Att färga varje cell manuellt tar lång tid, men här kan du se vad som händer om du skulle göra detta i många fler rader. Och vad med celler som kan delas med andra nummer?

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

Wow! De färgade cellerna visas alltid i [[trianglar|squares|pairs]] (utom några få enskilda celler, som kan ses som trianglar i storlek 1).

Om vi fortsätter med mönstret av celler som kan delas med 2, får vi ett som är mycket likt __Sierpinski triangeln__ till höger. Formar som denna, som består av ett enkelt mönster som verkar fortsätta för alltid medan det blir mindre och mindre, kallas [__Fraktaler__](gloss:fractal). Du kommer att lära dig mer om dem i framtiden ...

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Binomialkoefficienter

Det finns en viktigare egenskap i Pascal triangel som vi behöver prata om. För att förstå det kommer vi att försöka lösa samma problem med två helt olika metoder och sedan se hur de är relaterade.

{.todo} KOMMER GODT

---

## Gränser och konvergens

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} KOMMER GODT
