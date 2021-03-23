# Sequenze e pattern

## Introduzione

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Molte professioni che usano la matematica sono interessate ad un aspetto specifico: _trovare schemi (pattern)_ per poter predire il futuro. Ecco alcuni esempi:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

Nell'ultimo decennio, i __dipartimenti di polizia__ in tutto il mondo hanno iniziato a fare più affidamento sulla matematica. Algoritmi speciali usano i dati dei crimini passati per prevedere quando e dove i crimini potrebbero verificarsi in futuro. Ad esempio, il sistema _PredPol_ (abbreviazione di "polizia predittiva"), ha contribuito a ridurre il tasso di criminalità in alcune parti di Los Angeles del 12%!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Si è scoperto che __i terremoti__ seguono schemi simili ai crimini. Proprio come un crimine potrebbe innescare delle ritorsioni, un terremoto potrebbe innescare delle scosse di assestamento. In matematica, si chiama "processo autoeccitante" e delle equazioni ci aiutano a prevedere quando potrebbe accadere il prossimo.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Inoltre, i banchieri guardano anche ai dati storici dei prezzi delle azioni, dei tassi di interesse e dei tassi di cambio per stimare come i __mercati finanziari__ potrebbero cambiare in futuro. Essere in grado di prevedere se il valore di un titolo aumenterà o diminuirà può essere estremamente redditizio!

:::

I matematici professionisti usano algoritmi molto complessi per trovare ed analizzare tutti questi schemi, ma inizieremo con qualcosa di un po' più semplice.

---

> id: simple-patterns

### Sequenze semplici

In matematica, una [__successione__](gloss:sequence) è una sequenza di numeri (o altri oggetti) che di solito seguono uno schema particolare. I singoli elementi di una successione sono chiamati [__termini__](gloss:sequence-term).

Ecco alcuni esempi di sequenze. Riesci a trovare i loro modelli e calcolare i prossimi due termini?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Pattern: “Per ottenere il prossimo numero, aggiungi 3 al numero precedente.”_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: “Per ottenere il prossimo,
aggiungi 6 al numero precedente.”_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: “Per ottenere il prossimo numero,
aggiungi 1 e aggiungi 3 al numero precedente, in alternanza.”_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: “Per ottenere il prossimo numero,
moltiplica il  numero precedente per 2.”_

---
> id: simple-patterns-1

I punti (...) alla fine significano semplicemente che la sequenza può continuare all'infinito. Quando ci riferiamo a successioni come questa in matematica, spesso rappresentiamo ogni termine con una [__variabile__](gloss:variable) speciale:

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

Il piccolo numero dopo _x_ si chiama __pedice__ e indica la posizione del termine nella successione. Ciò significa che possiamo rappresentare il termine _n_ nella sequenza di [[`x_n`|`x_i`|`x_2`]].

---

> id: triangles

### Numeri triangolari e quadrati

Le successioni matematiche non devono essere necessariamente composte da numeri. Ecco una successione di forme geometriche - triangoli di dimensioni crescenti:

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

Ad ogni passaggio, stiamo aggiungendo una nuova riga al triangolo precedente. Anche la lunghezza di queste nuove righe aumenta di volta in volta. Riesci a vedere lo schema?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

Possiamo descrivere questo modello usando una [formula](gloss:formula)speciale:

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Per ottenere il numero del triangolo _n_, prendiamo il numero del triangolo [[precedente|primo|seguente]] e aggiungiamo _n_. Ad esempio, se _n_ = ${n}{n|5|2,20,1}, la formula diventa <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---
> id: recursive-1

Una formula che esprime `x_n` in funzione dei termini precedenti nella successione si chiama [__formula ricorsiva__](gloss:sequence-recursive). Se conosci [[il primo termine|l'ultimo termine|il secondo termine]] nella successione, puoi calcolare tutti i seguenti.

---
> id: squares

    hr

Un'altra successione che consiste di forme geometriche è rappresentata dai __numeri quadrati__. Ogni termine è formato da quadrati sempre più grandi:

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

Per i numeri dei triangoli abbiamo trovato una formula ricorsiva che ci dice il termine _successivo_ della sequenza in funzione dei suoi _termini precedenti_. Per i numeri quadrati possiamo fare ancora meglio: una formula che ci dice il termine _n_ direttamente, senza aver calcolato tutti i precedenti:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---

> id: explicit

Questa si chiama [__formula esplicita__](gloss:sequence-explicit). Possiamo usarla, ad esempio, per calcolare che il 13° numero quadrato, che è [[169]], senza prima trovare i precedenti 12 numeri quadrati.

---

> id: definitions

    hr

Riassumiamo tutte le definizioni che abbiamo visto finora:

::: .theorem

Una [__successione__](gloss:sequence) è un elenco di numeri, forme geometriche o altri oggetti che seguono uno schema specifico. I singoli elementi nella successione sono chiamati [__termini__](gloss:sequence-term) e rappresentati da variabili come `x_n`.

Una [__formula ricorsiva__](gloss:sequence-recursive) per una successione indica il valore dell'_ennesimo_ termine in funzione [[dei suoi termini precedenti|del primo termine]]. Ma bisogna anche specificare i primi termini.

Una [__formula esplicita__](gloss:sequence-explicit) per una successione indica il valore dell'_ennesimo_ termine in funzione [[di _n_ soltanto|del termine precedente]], senza fare riferimento ad altri termini nella successione.

:::

---

> id: action-sequence

### Fotografia in sequenza d'azione

Nelle sezioni seguenti imparerai molte successioni matematiche diverse, schemi sorprendenti e applicazioni inaspettate.

Per prima cosa, diamo un'occhiata a qualcosa di completamente diverso: __fotografia istantanea di sequenze d'azione__. Un fotografo fa molti scatti in rapida successione, quindi li unisce in un'unica immagine:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Riesci a vedere come lo sciatore forma una successione? Il modello non è addizione o moltiplicazione, ma una [__trasformazione geometrica__](gloss:rigid-transformation). Tra una sequenza e l'altra, lo sciatore viene traslato e [[ruotato|riflesso|dilatato]].

---

> id: action-sequence-1

Ecco altri esempi di fotografia in sequenza d'azione per il tuo divertimento:

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

## Successioni aritmetiche e geometriche

> section: arithmetic-geometric
> id: halley

::: column.grow

Nel 1682, l'astronomo [Edmond Halley](bio:halley) osservò un fenomeno insolito: un oggetto bianco splendente con una lunga coda che si muoveva attraverso il cielo notturno. Era una __cometa__, una piccola roccia ghiacciata che vola nello spazio, lasciando dietro di sé una scia di polvere e ghiaccio.

Halley ricordò che altri astronomi avevano osservato comete simili molto prima: una nel 1530 e un'altra nel 1606. Notate che l'intervallo tra due osservazioni consecutive è lo stesso, in entrambi i casi: [[76]] anni.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Immagine della cometa di Halley,#[br]fotografata nel 1986 nell'Isola di Pasqua

:::

---

> id: halley-1

Halley concluse che tutte e tre le osservazioni erano in effetti della stessa cometa - che ora viene chiamata _la cometa di Halley_. Orbita intorno al sole e passa la Terra circa ogni 76 anni. L'astronomo riuscì anche a predire quando la cometa sarà visibile in futuro:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---

> id: halley-2

In realtà, l'intervallo di tempo non è sempre _esattamente_ di 76 anni: può variare di uno o due anni, poiché l'orbita della cometa viene interrotta da altri pianeti. Oggi sappiamo che la cometa di Halley fu osservata dagli antichi astronomi già nel 240 a.C.!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Raffigurazioni della cometa di Halley nel tempo: una tavoletta babilonese (164 a.C.), un arazzo medievale (1070), una rivista scientifica (1910) e un francobollo sovietico (1986).

---

> id: ball

Un altro gruppo di scienziati sta studiando il comportamento di una palla da tennis che rimbalza. Hanno lasciato cadere la palla da un'altezza di 10 metri e hanno misurato la sua posizione nel tempo. Ad ogni rimbalzo, la palla perde parte della sua altezza originale:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---

> id: ball-1
> goals: reveals

Gli scienziati hanno notato che la palla perde il 20% della sua altezza dopo ogni rimbalzo. In altre parole, l'altezza massima di ogni rimbalzo è dell'80% di quella precedente. Ciò ha permesso loro di prevedere l'altezza di ogni rimbalzo successivo:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definizioni

Se confronti entrambi questi problemi, potresti notare che ci sono molte somiglianze: la sequenza della cometa di Halley ha la stessa [[differenza|rapporto|prodotto]] tra termini consecutivi, mentre la sequenza di rimbalzi della pallina da tennis ha lo stesso [[rapporto|differenza|prodotto]] tra termini consecutivi.

---
> id: arithmetic-geometric-1

Le successioni con queste proprietà hanno un nome speciale:

::: column.grow
::: .theorem.s-red

    p.text-center: include svg/comet.svg

Una [__progressione aritmetica__](gloss:arithmetic-sequence) ha una differenza __{.m-red} costante _d___ tra termini consecutivi.

Lo stesso numero viene aggiunto o sottratto ad ogni termine, per produrre quello successivo.

:::
::: column.grow
::: .theorem.s-green

    p.text-center: include svg/ball.svg

Una [__progressione geometrica__](gloss:geometric-sequence) ha un __{.m-green} rapporto _r___ costante tra termini consecutivi.

Ogni termine viene moltiplicato o diviso per lo stesso numero, per produrre il prossimo.

:::
:::

---
> id: arithmetic-geometric-select

Ecco varie progressioni: puoi determinare quali sono aritmetiche, geometriche o nessuna delle due, e quali sono i valori di _{.b.m-red} d_ e _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_, ...

::: column(width=320)

è [[geometrico|aritmetica|nessuna delle 2]] _{span.reveal(when="blank-0")}, con rapporto [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_, ...

::: column(width=320)

è [[aritmetica|geometrica|nessuna delle 2]] _{span.reveal(when="blank-2")}, con differenza [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_, ...

::: column(width=320)

è [[aritmetica|geometric|neither]] _{span.reveal(when="blank-4")}, con differenza [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_, ...

::: column(width=320)

è [[nessuna delle 2|aritmetica|geometrica]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2,5_, _{span.n} 1,25_, ...

::: column(width=320)

è [[geometrica|arithmetica|nessuna delle 2]] _{span.reveal(when="blank-7")}, con rapporto [[0,5]]._

:::

---

> id: arithmetic-geometric-graph

Per definire una progressione aritmetica o geometrica, dobbiamo conoscere non solo la differenza o il rapporto costante, ma anche il valore iniziale (chiamato `a`). Qui puoi generare le tue progressioni e tracciare i loro valori su un grafico, modificando i valori di `a`, _d_ e _r_. Riesci a trovare degli schemi?

::: column.ag-chart(width=320)

#### {.m-red} Progressione aritmetica

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Progressione geometrica

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Hai notato che tutte le __{.m-red} progressioni aritmetiche__ sembrano molto simili? Se la differenza è positiva, [[aumentano|diminuiscono]] costantemente e se la differenza è negativa, [[diminuiscono|aumentano]] costantemente.

{.reveal(when="blank-0 blank-1")} Le progressioni geometriche, invece, possono comportarsi in modo completamente diverso in base ai valori di `a` e _r_:

::: column.ag-limit-box.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Se [`r > 1`](action:set(2,2)), i termini [[aumentano rapidamente|diminuiscono rapidamente|si avvicinano a 0]] _{span.reveal(when="blank-2")}, fino all'infinito. I matematici affermano che la progressione [__diverge__](gloss:sequence-divergence)._

::: column.reveal.ag-limit-box(when="blank-2" animation="pop" delay=200 width=220)

Se [`r`_ è compreso tra -1 e 1](action:set(10,0.6)), i termini [[si avvicinano a 0|tendono all'infinito negativo|diventano più piccoli]] _{span.reveal(when="blank-3")}. Diciamo che la progressione [__converge__](gloss:sequence-convergence)._

::: column.reveal.ag-limit-box(when="blank-3" animation="pop" delay=200 width=220)
o
Se [`r < -1`](action:set(3,-1.4)), i termini si alternano tra positivo e negativo, mentre il loro [[valore assoluto|inverso|differenza]] aumenta.

:::

{.reveal(when="blank-4 blank-5")} Imparerai di più sulla convergenza e la divergenza nella [ultima sezione](/course/sequences/convergence) di questo corso.

---

> id: arithmetic-geometric-recursiv

### Formule ricorsive ed esplicite

Nella sezione precedente, hai appreso che una [__formula ricorsiva__](gloss:sequence-recursive) ci dice il valore di ciascun termine in funzione dei termini precedenti. Ecco le formule ricorsive per progressioni aritmetiche e geometriche:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---

> id: arithmetic-geometric-explicit

Un problema con le formule ricorsive è che per trovare il 100° termine, ad esempio, dobbiamo prima calcolare i 99 termini precedenti e ciò potrebbe richiedere molto tempo. Invece, possiamo provare a trovare una [__formula esplicita__](gloss:sequence-explicit), che ci dice direttamente il valore di _n_.

::: column.grow

Per __{.m-red} progressioni aritmetiche__, dobbiamo aggiungere _d_ ad ogni passaggio:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} All' _ennesimo_ termine, stiamo aggiungendo [[`n-1`|`n`|`n+1`]] copie di _d_, quindi la formula generale è

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

Per __{.m-green} progressioni geometriche__, dobbiamo moltiplicare _r_ ad ogni passaggio:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} All' _ennesimo_ termine, stiamo moltiplicando [[`n-1`|`n`|`n+1`]] copie di _r_, quindi la formula generale è

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---

> id: arithmetic-geometric-explicit-1

Ecco un riepilogo di tutte le definizioni e le formule che hai visto finora:

::: column.grow

::: .theorem.s-red

Una progressione aritmetica __{.m-red}__ ha il primo termine `a` e la differenza costante `d` tra termini consecutivi.

{.text-center} __Formula ricorsiva__: `x_n = x_(n-1) + d`

{.text-center} __Formula esplicita__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

Una progressione geometrica __{.m-green}__ ha il primo termine `a` e il rapporto costante `r` tra termini consecutivi.

{.text-center} __Formula ricorsiva__: `x_n = x_(n-1) × r`

{.text-center} __Formula esplicita__: `x_n = a × r^(n-1)`

:::

:::

Ora diamo un'occhiata ad alcuni esempi in cui possiamo usare tutto questo!

---

> id: pay-it-forward
> goals: video

### Passa un favore

Ecco una breve clip del film _Un sogno per domani (Pay It Forward)_, in cui Trevor, 12 anni, spiega la sua idea per rendere il mondo un posto migliore:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Estratto da “Un sogno per domani (Pay It Forward)” (2000), © Warner Bros. Entertainment

---

> id: pay-it-forward-1

L'essenza dell'idea di Trevor è che, se tutti "passano un favore", una sola persona può avere un impatto enorme sul mondo:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Notiamo come il numero di persone in ogni fase forma [[una progressione geometrica|una progressione aritmetica|un numero triangolare]], _{span.reveal(when="blank-0")} con rapporto costante [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Utilizzando la [formula esplicita](gloss:sequence-explicit) per le progressioni geometriche, possiamo capire quante nuove persone sono interessate in qualsiasi fase:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

Il numero di persone aumenta incredibilmente in fretta. Nel decimo passaggio, raggiungiamo 19 683 nuove persone, e dopo 22 passaggi vengono coinvolte più persone di quelle che attualmente vivono sulla Terra.

Questa successione di numeri ha un nome speciale: la __potenza di 3__. Come puoi vedere, ogni termine è in realtà solo una diversa [potenza](gloss:powers) di 3:

{.text-center.s-orange} _{span.n} `3^0`_, _{span.n} `3^1`_, _{span.n} `3^2`_, _{span.n} `3^3`_, _{span.n} `3^4`_, _{span.n} `3^5`_, ...

---

> id: millionaire

### Chi vuole essere milionario?

{.todo} DISPONIBILE A BREVE!

---

> id: chessboard

### Il problema della scacchiera

{.todo} DISPONIBILE A BREVE!

---

## Numeri figurati

> section: figurate
> id: figurate

Il nome [progressioni geometriche](gloss:geometric-sequence) potrebbe confonderti, perché non ha nulla a che fare con la geometria. In effetti, il nome è stato sviluppato centinaia di anni fa, quando i matematici pensavano a _moltiplicazione_ e _radici quadrate_ in un modo molto più geometrico.

Tuttavia, ci sono molte altre successioni che si basano su determinate forme geometriche - alcune delle quali hai già visto nell'[introduzione](/course/sequences/introduction). Queste sequenze sono spesso chiamate [__numeri figurati__](gloss:figurate-numbers) e in questa sezione daremo uno sguardo più da vicino ad alcuni di essi.

---

> id: triangle-numbers

### Numeri triangolari

I __numeri triangolari__ sono generati creando triangoli di dimensioni progressivamente maggiori:

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

Hai già visto la formula ricorsiva per i numeri triangolari: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---

> id: billiard-pool

Non è un caso che ci siano sempre 10 birilli quando si gioca a bowling o 15 palle quando si gioca a biliardo: sono entrambi numeri triangolari!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Sfortunatamente, la formula ricorsiva non è molto utile se vogliamo trovare il numero del triangolo 100 o 5000, perchè dobbiamo prima calcolare tutti i numeri precedenti. Tuttavia, come abbiamo fatto con le progressioni aritmetiche e geometriche, possiamo provare a trovare una formula esplicita per i numeri triangolari.

{.todo} DISPONIBILE A BREVE: Prova animata

---
> id: triangle-sums

I numeri triangolari sembrano spuntare ovunque in matematica e li vedrai di nuovo durante questo corso. Un fatto particolarmente interessante è che _qualsiasi_ numero intero può essere scritto come la somma di massimo tre numeri triangolari:

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

{.reveal(when="slide")} Il fatto che questo funzioni per _tutti_ i numeri interi è stato dimostrato per la prima volta nel 1796 dal matematico tedesco [Carl Friedrich Gauss](bio:gauss) - all'età di 19 anni!

---

> id: triangle-investigate

::: .box.problem-box

    .box-title: h3 Problem Solving

::: .box-body

Qual è la somma dei primi 100 [numeri interi](gloss:integer) positivi? In altre parole, qual è il valore di

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

Invece di fare la somma manualmente, puoi aiutarti con i [numeri triangolari](gloss:triangle-numbers)? Che dire della somma dei primi 1000 numeri interi positivi?

:::

:::

---

> id: square-numbers

### Numeri quadrati e poligonali

Un'altra successione basata su forme geometriche è quella dei __numeri quadrati__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} È possibile calcolare i numeri in questa successione facendo il quadrato di ogni numero intero (`1^2`, `2^2`, `3^2`, ...), ma si scopre che esiste un altro modello: le differenze tra i numeri quadrati consecutivi sono i [[numeri dispari|numeri triangolari|interi]] in ordine crescente!

---

> id: square-numbers-1

::: column.grow

Il motivo di questo modello diventa evidente se disegniamo un quadrato. Ogni passaggio aggiunge una riga e una colonna. La dimensione di questi "angoli" inizia da 1 e aumenta di 2 ad ogni passo, formando così una successione di numeri dispari.

Ciò significa anche che l' _ennesimo_ numero quadrato è solo la somma dei primi _n_ numeri dispari! Ad esempio, la somma dei primi 6 numeri dispari è

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---

> id: square-numbers-2

Inoltre, ogni numero quadrato è anche la somma di due [numeri triangolari consecutivi](gloss:triangle-numbers). Ad esempio, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. Riesci a vedere come possiamo dividere ogni quadrato lungo la sua diagonale, in due triangoli?

---

> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Dopo i numeri triangolari e quadrati, possiamo continuare con [poligoni più grandi](gloss:polygon). Le successioni numeriche risultanti sono chiamate __numeri poligonali__.

Ad esempio, se utilizziamo poligoni con ${k}{k|5|3,10,1} lati, otteniamo una successione di __ numeri ${polygonName(k)}__.

Riesci a trovare formule ricorsive ed esplicite per l'_ennesimo_ numero poligonale che ha _k_ lati? E noti altri modelli interessanti per i poligoni più grandi?

:::

---

> id: tetrahedral

### Numeri tetraedrici e cubici

Naturalmente, non dobbiamo nemmeno limitarci a forme e motivi bidimensionali. Potremmo accumulare le sfere per formare piccole piramidi, proprio come faresti per sistemare delle piramidi di arance al supermercato:

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

I matematici spesso chiamano queste piramidi [__tetraedri__](gloss:tetrahedron) e la sequenza risultante [__numeri tetraedrici__](gloss:tetrahedral-numbers).

{.todo} DISPONIBILE A BREVE: Altre informazioni sui numeri tetraedrici, i numeri cubici e i 12 giorni di Natale.

---

## Sequenze come funzioni

> section: functions
> sectionStatus: dev

DISPONIBILE A BREVE

---

## Successione di Fibonacci

> section: fibonacci
> id: rabbits

Immagina di aver ricevuto un paio di coniglietti, un maschio e una femmina. Sono conigli molto speciali, perché non muoiono mai, e la femmina dà alla luce una nuova coppia di conigli esattamente una volta al mese (sempre un'altra coppia di maschi e femmine).

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

      .legend(slot="legend") Nel primo mese, i conigli sono molto piccoli e non possono fare molto, ma crescono molto rapidamente.
      .legend(slot="legend") Dopo un mese, i conigli sono cresciuti e possono iniziare ad accoppiarsi ...
      .legend(slot="legend") ... e dopo un altro mese, daranno alla luce il loro primo paio di figli. Ora hai due coppie di conigli.
      .legend(slot="legend") Nel mese successivo, la tua coppia di conigli partorirà un'altra coppia. Nel frattempo, il primo paio di coniglietti è cresciuto. Ora hai tre coppie in totale.
      .legend(slot="legend") Nel quinto mese, la tua coppia originale di conigli darà alla luce una nuova coppia. Allo stesso tempo, il loro primo paio di figli è ora abbastanza grande da dare alla luce nipoti. Ora hai cinque coppie di conigli.
      .legend(slot="legend") Nel sesto mese, ci sono altre tre coppie che partoriscono: quella originale, così come le loro prime due coppie o figli.

---

> id: rabbits-1

{.r} Nel mese successivo avresti avuto 13 coppie di conigli: gli 8 del mese precedente, più 5 nuove coppie. Riesci a rilevare un modello in questa successione? _{button.next-step} Continua_

---

> id: rabbits-2

Il numero di conigli in un determinato mese è [[la somma dei due numeri precedenti|il doppio del numero precedente]]. _{span.reveal(when="blank-0")} In altre parole, devi sommare i _due termini precedenti_ della successione, per ottenere il successivo. La successione inizia con due 1 e la [formula ricorsiva](gloss:sequence-recursive) è_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---

> id: rabbits-3

Riesci a calcolare il numero di conigli dopo qualche mese?

{.text-center.s-orange} _{.n} 1_, _{.n} 1_, _{.n} 2_, _{.n} 3_, _{.n} 5_, _{.n} 8_, _{.n} [[13]]_, _{.n} [[21]]_, _{.n} [[34]]_, _{.n} [[55]]_, _{.n} [[89]]_, _{.n} [[144]]_, ...

{.reveal(when="blank-5")} Quindi dopo 12 mesi avrai 144 coppie di conigli!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---

> id: fibonacci

Questa sequenza di numeri è chiamata [__Successione di Fibonacci__](gloss:fibonacci-numbers), dal nome del matematico italiano [Leonardo Fibonacci](bio:fibonacci).

::: column.grow

Quando Fibonacci nacque nel 1175, la maggior parte delle persone in Europa utilizzava ancora il [sistema numerico romano](gloss:roman-numerals) per i numeri (ad esempio XIV o MCMLIV). Il padre di Fibonacci era un commerciante e insieme viaggiarono in Nord Africa e nel Medio Oriente. Fu lì che Fibonacci apprese per la prima volta il [sistema numerico arabo](gloss:arabic-numerals).

Al suo ritorno in Italia, Fibonacci scrisse un libro intitolato _Liber Abaci_ (latino per "Libro del calcolo"), dove introdusse per la prima volta i nuovi numeri arabi ai mercanti europei. Sono stati un successo immediato - e li usiamo ancora oggi.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

In una delle pagine del suo libro, ha anche studiato gli schemi genetici dei conigli - ecco perché i numeri di Fibonacci hanno preso il suo nome.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pagine del libro #[em Liber Abaci] di Fibonacci

---

> id: spirals

Naturalmente, _in realtà_ i conigli si riproducono in modo diverso. Non hanno esattamente un figlio maschio e una femmina ogni mese, e non abbiamo mai tenuto conto della morte dei conigli.

Ma si scopre che ci sono molti altri luoghi in natura in cui compaiono i numeri di Fibonacci: ad esempio le spirali nelle piante. Riesci a contare quante spirali ci sono in ogni direzione?

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Questa pigna ha [[8]] spirali in senso orario e [[13]] spirali in senso antiorario.

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Questo girasole ha 34 spirali in senso orario e 55 spirali in senso antiorario.

:::

---

> id: spirals-1

In entrambi i casi, i numeri delle spirali sono numeri di Fibonacci consecutivi. Lo stesso vale per molte altre piante: la prossima volta che esci, conta il numero di petali in un fiore o il numero di foglie su uno stelo. Molto spesso scoprirai che sono numeri di Fibonacci!

Certo, questa non è solo una coincidenza. C'è un motivo importante per cui alla natura piace la successione di Fibonacci! In seguito scoprirai molti più dettagli.

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

I numeri di Fibonacci compaiono anche nelle popolazioni di api mellifere.

In ogni colonia di api c'è una sola _regina_ che depone molte uova. Se un uovo viene fecondato da un'ape maschio, si schiude in un'ape __femmina__. Se non viene fertilizzato, si schiude in un'ape __maschio__ (chiamata drone).

Ciò significa che le api femmine hanno [[due genitori|un genitore]], mentre le api maschio hanno [[un solo genitore|due genitori]].

{.reveal(when="blank-0 blank-1")} Se disegniamo l'albero genealogico di un'ape, il numero di genitori, nonni, bisnonni e generazioni precedenti sono sempre numeri di Fibonacci!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Occasionalmente, le giovani api femmine vengono alimentate con cibo speciale chiamato "pappa reale". In tal caso, si trasformano in regine e voleranno via per iniziare un nuovo alveare.

:::

---

> id: golden-spiral

### La Sezione Aurea

Proprio come il [triangolo](gloss:triangle-numbers) e [numeri quadrati](gloss:square-numbers) e altre sequenze che abbiamo visto prima, la successione di Fibonacci può essere visualizzata usando un motivo geometrico:

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") Iniziamo con due quadratini di misura 1.
      .legend(slot="legend") Quindi, aggiungiamo un nuovo quadrato di dimensione 2, per formare un rettangolo più grande.
      .legend(slot="legend") Successivamente, aggiungiamo un quadrato di dimensione 3, per formare un rettangolo ancora più grande.
      .legend(slot="legend") Il quadrato successivo ha dimensione 5. Riesci a vedere che stiamo ricreando i numeri di Fibonacci?
      .legend(slot="legend") Se continuiamo ad aggiungere quadrati, avranno dimensioni 8, 13, 21 e così via.
      .legend(slot="legend") Potresti aver notato che, man mano che i rettangoli diventano più grandi, sembrano iniziare a formare delle spirali verso l'esterno. Possiamo persino visualizzarlo disegnando una spirale perfetta che collega gli angoli dei quadrati.

---

> id: golden-ratio

Ad ogni passo, i quadrati formano un rettangolo più grande. La sua larghezza e altezza sono sempre due numeri di Fibonacci consecutivi. Notate il rapporto tra larghezza e altezza dei rettangoli:

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

Notate che man a mano che si aggiungono più quadrati, le proporzioni sembrano avvicinarsi sempre più a un numero specifico intorno a 1,6. Questo numero è chiamato [__sezione aureo__](gloss:golden-ratio) e di solito rappresentato dalla lettera greca `φ` ("phi"). Il suo valore esatto è

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Molte persone credono che la sezione aurea sia esteticamente gradevole. Ecco perché viene spesso utilizzata da artisti e architetti, come in questi due esempi:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Si dice che lo scultore greco Fidia abbia usato la sezione aurea durante la progettazione del _Partenone_ ad Atene. La prima lettera del suo nome, `φ`, è il simbolo che ora utilizziamo per la sezione aurea.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _L'ultima cena_, dell'artista spagnolo Salvador Dalí, è uno dei tanti dipinti che usa la sezione aurea. Sullo sfondo, puoi anche vedere un grande [dodecaedro](gloss:dodecahedron).

:::

---

> id: golden-ratio-2

Possiamo approssimare la sezione aurea [[dividendo|aggiungendo|sottraendo]] due numeri di Fibonacci consecutivi.

{.reveal(when="blank-0")} Tuttavia, si scopre che il valore esatto di `φ` non può essere scritto come una semplice frazione: è un [__numero irrazionale__](gloss:irrational-numbers), proprio come [`π`](gloss:pi) e `sqrt(2)` e altri numeri che hai visto precedentemente.

---

> id: sunflower-growing

### Spirali di Fibonacci

::: column.grow

La sezione aurea spiega perché i numeri di Fibonacci compaiono in natura, come il girasole e la pigna che hai visto all'inizio di questa sezione.

Entrambe queste piante crescono verso l'esterno dal loro centro (una parte della pianta chiamata _meristema_). I nuovi semi, foglie o petali spingono quelli esistenti verso l'esterno.

Sposta il cursore a destra per visualizzare come cresce una pianta. Notate come ogni foglia che viene aggiunta ha una rotazione diversa dalla precedente. L'angolo tra due foglie consecutive è sempre lo stesso.

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

È importante che i fiori scelgano un'angolazione adeguata: le foglie o i semi devono essere approssimativamente equidistanti in modo da ottenere la maggior quantità di luce solare e sostanze nutritive. Nel diagramma seguente, puoi esplorare come potrebbe apparire un girasole con angoli diversi tra i suoi semi:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Se l'angolo è [0°](action:set(0)), tutti i semi cresceranno in un'unica lunga fila dal centro.

{div.inline(slot="legend")} Se l'angolo è [`1/2`](action:set(0.5)) di una rotazione completa (180°), i semi si alterneranno tra due "bracci" separati che si allontanano dal centro.

{div.inline(slot="legend")} Se la rotazione è un'altra proporzione frazionaria di 360°, ad esempio [`2/5`](action:set(2/5)) o [`1/3`](action:set(1/3)) o [`3/8`](action:set(3/8)), il numero di "armi" sarà lo stesso del [[denominatore|numeratore|fattore primo]] di quella frazione.

{div(slot="legend")} Sfortunatamente, i semi non sono distribuiti uniformemente: tutto lo spazio tra le braccia è sprecato. Ma se i [numeri razionali](gloss:rational-numbers) non funzionano, proviamo con i [numeri irrazionali](gloss:irrational-numbers)!

{div.inline(slot="legend")} Un esempio di un numero irrazionale è [`pi`](gloss:pi). Ma se l'angolo tra i semi è [`1/pi`](action:set(0.31831)) di 360 °, sembriamo ancora ottenere 22 braccia. Questo perché la frazione `22/7 = 3.1429…` è un'approssimazione abbastanza buona per `pi`. Ciò di cui abbiamo davvero bisogno è un numero irrazionale che _non può_ essere approssimato con una semplice frazione.

{div.inline(slot="legend")} Si scopre che la [sezione aurea](gloss:golden-ratio) è proprio questo: il "più irrazionale" di tutti i numeri irrazionali. Se l'angolo è [`1/phi`](action:set(0.6180339)) di 360°, i semi sembrano distanziati quasi alla perfezione. E questa è esattamente l'angolazione utilizzata dalle piante di tutto il mondo.

:::

    x-gesture(target=".fib-action")

---

> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Potresti ricordare da prima che il rapporto di numeri di Fibonacci consecutivi si avvicinano sempre più alla sezione aurea - ed è per questo che, se conti il numero di spirali in una pianta, troverai spesso un numero di Fibonacci.

È importante ricordare che la natura non conosce i numeri di Fibonacci. Inoltre, la natura non è in grado di risolvere equazioni per calcolare il rapporto aureo, ma nel corso di milioni di anni le piante hanno avuto molto tempo per provare diverse angolazioni e scoprire quella migliore.

Le piante e gli animali vogliono sempre crescere nel modo più efficiente, ed è per questo che la natura è piena di schemi matematici regolari.

:::

---

> id: lucas-numbers

### Fibonachos

Finora abbiamo usato solo l'equazione ricorsiva per i numeri di Fibonacci. In realtà esiste anche un'equazione esplicita, ma è molto più difficile da trovare:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Potremmo anche provare a scegliere diversi punti di partenza per i numeri di Fibonacci. Ad esempio, se iniziamo con 2, 1, ... anziché 1, 1, ... otteniamo una successione chiamata __numeri di Lucas__.

Si scopre che, qualunque siano i due numeri iniziali scelti, le successioni risultanti condividono molte proprietà. Ad esempio, i rapporti di termini consecutivi _sempre_ [convergeranno](gloss:sequence-convergence) nella sezione aureo.

{.text-center.s-purple.s-small}
${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n}${a+b}_, _{span.n}${a+2×b}_,
_{span.n}${2×a+3×b}_, _{span.n}${3×a+5×b}_, _{span.n}${5×a+8×b}_,
_{span.n}${8×a+13×b}_, …

---

> id: fibonacci-puzzles

Esistono molti altri enigmi, schemi e applicazioni relativi ai numeri di Fibonacci. Ecco alcuni esempi, che puoi provare tu stesso:

::: .box.problem-box

    .box-title: h3 Problem solving

::: .box-body

__1. Divisibilità di Fibonacci__

(a) Quali numeri di Fibonacci sono pari? In che modo sono posizionati lungo la sequenza? Puoi spiegare perché?

(b) Quali numeri di Fibonacci sono divisibili per 3 (o divisibili per 4)? Cosa noti?

    hr

__2. Somme di Fibonacci__

Cosa succede se sommi tre numeri di Fibonacci consecutivi? Puoi spiegare perché?

    hr

__3. Scale di Fibonacci__

Quando sali le scale, puoi fare singoli passi o saltare due passi alla volta. Ciò significa che puoi salire una scala in tanti modi diversi. Ad esempio, se ci sono 5 gradini, hai 8 diverse scelte:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Quante scelte ci sono per le scale con 6, 7 o 8 gradini? Riesci a rilevare un modello? E in che modo questo è legato ai numeri di Fibonacci?

:::

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Successioni speciali

> section: special
> id: special-intro

Oltre alle [progressioni aritmetiche](gloss:arithmetic-sequence) e [geometriche](gloss:geometric-sequence), i [numeri di Fibonacci](gloss:fibonacci-numbers) e i [numeri figurati](gloss:figurate-numbers), ci sono innumerevoli successioni interessanti che non seguono uno schema regolare.

---

> id: primes

### Numeri primi

Un esempio che hai già visto prima sono i [__numeri primi__](gloss:prime). Diciamo che un numero è _primo_ se ha come [fattori](gloss:factor) [[solo 1 e stesso|solo 1 e 2|1 e nessun multiplo]].

---
> id: primes-1

Ecco i primi numeri primi:

{.text-center.s-teal} _{.n} 2_, _{.n} 3_, _{.n} 5_, _{.n} 7_, _{.n} 11_, _{.n} [[13]]_, _{.n} [[17]]_, _{.n} [[19]]_,…

---
> id: primes-2
> goals: p2 p3 p5 p7

Sfortunatamente, i numeri primi non seguono un modello semplice o una formula ricorsiva. A volte appaiono direttamente uno accanto all'altro (questi sono chiamati [numeri primi gemelli](gloss:twin-primes)), e talvolta sono separati da enormi intervalli. Sembrano essere distribuiti quasi casualmente!

Inoltre, i numeri primi non hanno una semplice rappresentazione geometrica come i [numeri triangolari](gloss:triangle-numbers) o i [numeri quadrati](gloss:square-numbers), ma con un po' di lavoro possiamo rivelare modelli interessanti:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Se cancelliamo tutti i multipli di piccoli numeri interi, i numeri rimanenti devono essere tutti primi. Questo metodo è chiamato [__Crivello di Eratostene__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,numero di numeri primi minori di x")

{.caption} Se disegniamo un grafico che aumenta di 1 ogni volta che c'è un numero primo, otteniamo una funzione "a gradini" con proprietà affascinanti.

:::

---
> id: primes-3

Puoi saperne di più su queste e altre proprietà dei numeri primi nel nostro corso su [Divisibilità e numeri primi](/course/divisibility/primes). Questi sono alcuni dei concetti più importanti e misteriosi della matematica!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Numeri perfetti

Per determinare se un numero è [primo](gloss:prime), dobbiamo trovare tutti i suoi [fattori](gloss:factor). Di solito _moltiplichiamo_ questi fattori per recuperare il numero originale, ma vediamo cosa succede se _sommiamo_ tutti i fattori di un numero (escluso il numero stesso):

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

Confrontiamo questi numeri con la loro somma dei fattori:

::: column.perfect-box(width=220 parent="padded-thin")

Per la maggior parte dei numeri, la somma dei suoi fattori è [[inferiore a|maggiore a|uguale a]] al numero stesso. Questi numeri sono chiamati __numeri carenti__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" width=220)

Per alcuni numeri, la somma dei suoi fattori è maggiore al numero stesso. Questi numeri sono chiamati __numeri abbondanti__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" delay=500 width=220)

Solo per un numero nell'elenco sopra la somma di fattori che è _uguale al_ numero stesso: [[6]]. Questo si chiama [__numero perfetto__](gloss:perfect-numbers).

:::

---
> id: perfect-2

Il prossimo numero perfetto è 28, perché se sommiamo tutti i suoi fattori otteniamo `1 + 2 + 4 + 7 + 14 = 28`. Successivamente, i numeri perfetti diventano molto più rari:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Si noti che tutti questi numeri sono [[pari|multipli di 3|numeri quadrati più 2]]. _{span.reveal(when="blank-0")} Si scopre che sono anche tutti numeri triangolari!_

---
> id: perfect-3

::: column.grow

I numeri perfetti furono studiati per la prima volta da antichi matematici greci come [Euclide](bio:euclid), [Pitagora](bio:pythagoras) e [Nicomaco](bio:nicomachus), più di 2000 anni fa. Hanno calcolato alcuni numeri perfetti, e si sono chiesti se ci fossero dei numeri _dispari_.

Oggi i matematici hanno usato i computer per controllare i primi 10 <sup>1500</sup> numeri (che è un 1 seguito da 1500 zeri), ma senza successo: tutti i numeri perfetti che hanno trovato erano pari. Ad oggi, non si sa ancora se ci siano numeri dispari perfetti, rendendolo il problema irrisolto più antico di _tutta la matematica_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclide di Alessandria

:::

---
> id: hailstone

### La sequenza di Hailstone

La maggior parte delle sequenze che abbiamo visto finora avevano una sola regola o modello. Ma non vi è alcun motivo per cui non possiamo combinarne diversi, ad esempio una formula ricorsiva come questa:

    table.grid.text-left
      tr
        td: strong.md Se `x_n` è pari:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md Se `x_n` è dispari:
        td.md `x_(n+1) = 3 x_n + 1`

Cominciamo con `x_1 = 5` e vediamo cosa succede:

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

Sembra che dopo alcuni termini, la sequenza raggiunga un "ciclo": 4, 2, 1 e che continuerà a ripetersi per sempre.

Ovviamente, avremmo potuto scegliere un punto di partenza diverso, come ${n}{n|10|5,40,1}. In tal caso la sequenza sarebbe simile a questa:

{.text-center} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Sembra che la lunghezza della sequenza vari molto, ma finirà sempre con un ciclo di 4, 2, 1, indipendentemente dal primo numero che selezioniamo. Possiamo persino visualizzare i termini della sequenza in un grafico:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Nota come alcuni punti di partenza finiscono molto rapidamente, mentre altri (come [31](action:set(31)) o [47](action:set(47))) fanno più di cento passi prima di raggiungere il ciclo 4, 2, 1.

---

> id: hailstone-3

::: column.grow

Tutte le sequenze che seguono questa formula ricorsiva sono chiamate [__Sequenze di Hailstone__](gloss:hailstone-sequence), perché sembrano muoversi casualmente su e giù prima di raggiungere il ciclo 4, 2, 1 - proprio come chicchi di grandine (hailstone in inglese) che si muovono su e giù in una nuvola prima di schiantarsi sulla Terra.

Nel 1937, il matematico [Lothar Collatz](bio:collatz) propose che _ogni sequenza di Hailstone_ alla fine termina con un ciclo di 4, 2, 1, qualunque sia il valore iniziale che scegli. Hai già verificato alcuni punti di partenza sopra e i computer hanno effettivamente provato tutti i numeri fino a `10^20`, ovvero 100 miliardi di miliardi o un 1 seguito da venti zeri.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Tuttavia, ci sono infiniti numeri interi. È impossibile controllarli tutti e nessuno è stato in grado di trovare una [prova](gloss:proof) che funzioni per tutti.

Proprio come la ricerca di numeri dispari perfetti, questo è ancora un problema aperto in matematica. È sorprendente che questi semplici schemi per le sequenze abbiano portato a delle domande che hanno sconcertato i migliori matematici del mondo per secoli!

---

> id: look-and-say

### La sequenza Look-and-Say

Ecco un'altra sequenza leggermente diversa da tutte quelle che hai visto sopra. Riesci a trovare il modello?

{.text-center.s-lime.s-vertical} _{span.n} 1_, _{span.n} 11_, _{.n} 21_, _{.n} 1211_, _{.n} 111221_, _{.n} 312211_, ...

_{button.next-step} Continua_

---

> id: look-and-say-1

Questa sequenza è chiamata sequenza __Look-and-Say__ e lo schema è proprio quello che dice il nome: inizi con un 1 e ogni termine successivo è quello che ottieni se “leggi ad alta voce” il precedente. Ecco un esempio:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Riesci ora a trovare i termini seguenti?

{.text-center.s-lime.s-vertical}…, _{.n} 312211_, _{.n} [[13112221]]_, _{.n} [[1113213211]]_, ...

---

> id: look-and-say-2

Questa sequenza viene spesso utilizzata come puzzle per ingannare i matematici, perché il modello sembra essere completamente non matematico. Tuttavia, a quanto pare, la sequenza ha molte proprietà interessanti. Ad esempio, ogni termine termina in [[1]] e nessuna cifra superiore a [[3]] viene utilizzata.

---

> id: look-and-say-3

Il matematico britannico [John Conway](bio:conway) ha scoperto che, indipendentemente dal numero selezionato come valore iniziale, la sequenza alla fine verrà suddivisa in "sezioni" distinte che non interagiscono più tra loro. Conway lo chiamò _Teorema cosmologico_ e nominò le diverse sezioni usando gli elementi chimici _Hydrogen_, _Helium_, _Lithium_, ..., fino al plutonio.

---

> id: quiz

### Quiz sulle Sequenze

Ora hai visto innumerevoli sequenze matematiche diverse, alcune basate su forme geometriche, alcune che seguono formule specifiche e altre che sembrano comportarsi in modo quasi casuale.

In questo quiz puoi combinare tutte le tue conoscenze sulle sequenze. C'è solo un obiettivo: trovare lo schema e calcolare i due termini successivi!

::: .box.problem-box

    .box-title: h3 Trova il numero successivo

::: .box-body

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Pattern: Sempre +4_

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
_{span.pattern.reveal(when="blank-8 blank-9")} Pattern: Numeri di Fibonacci_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Pattern: +1, +2, ÷2, +1, +2, ÷2, …_

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Pattern: Numeri quadrati dispari_

:::
:::

---

## Triangolo di Pascal

> section: pascals-triangle
> id: pascal-intro

Di seguito puoi vedere una piramide numerica creata usando un modello semplice: inizia con un singolo “1” in alto e ogni cella successiva è la somma delle due celle direttamente sopra. Passa il mouse sopra alcune celle per vedere come vengono calcolate, quindi compila quelle mancanti:

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

Questo diagramma mostrava solo le prime dodici righe, ma potevamo continuare per sempre, aggiungendo nuove righe in fondo. Si noti che è un triangolo [[simmetrico|rettangolo|equilatero]], il che può aiutarti a calcolare alcune delle celle.

---

> id: pascal-triangle

Il triangolo si chiama [__Triangolo di Pascal__](gloss:pascals-triangle), dal nome del matematico francese [Blaise Pascal](bio:pascal). Fu uno dei primi matematici europei a indagarne i modelli e le proprietà, ma questi triangoli erano noti anche ad altre civiltà molti secoli prima:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} Nel 450 a.C., il matematico indiano [Pingala](bio:pingala) chiamò questo triangolo __"Scala del Monte Meru"__, dal nome di una montagna indù sacra.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} In Iran, era noto come __"Triangolo di Khayyam"__ (مثلث خیام), dal nome del poeta e matematico persiano [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} Anche il matematico Jia Xian in China scoprì questo triangolo. Prende il nome dal suo successore, __"Triangolo di Yang Hui"__ (杨辉 三角).

:::

Il triangolo di Pascal può essere creato usando un modello molto semplice, ma è pieno di pattern e proprietà sorprendenti. Ecco perché ha affascinato i matematici di tutto il mondo, per centinaia di anni.

_{button.next-step} Continua_

---

> id: pascal-sequences

### Alla ricerca di sequenze

Scoprirai che molte delle innumerevoli sequenze matematiche, che hai visto nelle sezioni precedenti, possono comparire anche nel triangolo di Pascal:

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

I numeri nella prima diagonale su entrambi i lati [[sono 1|vanno crescendo|sono pari]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

I numeri nella seconda diagonale su entrambi i lati sono [[numeri interi|numeri primi|numeri quadrati]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

I numeri nella terza diagonale su entrambi i lati sono [[numeri triangolari|numeri quadrati|numeri di Fibonacci]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

I numeri nella quarta diagonale sono [[numeri tetraedrici|numeri cubici|potenze di 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Se sommi tutti i numeri di fila, le loro somme formano un'altra sequenza: la potenza [[di due|numeri perfetti|numeri primi]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

In ogni riga che ha un numero primo nella sua seconda cella, tutti i numeri seguenti sono [[multipli|fattori|inversi]] di quel numero primo.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

Il diagramma sopra evidenzia le diagonali "poco profonde" in diversi colori. Se sommiamo i numeri in ogni diagonale, otteniamo [[numeri di Fibonacci|numeri di Hailstone|una progressione geometrica]].

:::

---

> id: pascal-sequences-1

Naturalmente, ciascuno di questi schemi ha una ragione matematica alla base. Forse puoi trovarne alcune!

Un'altra domanda che potresti porre è la frequenza con cui un numero appare nel triangolo di Pascal. Chiaramente ci sono infiniti 1, un 2 e ogni altro numero appare [[almeno due volte|almeno una volta|esattamente due volte]], _{span.reveal(when="blank-0")} nella seconda diagonale su entrambi i lati._

---

> id: pascal-sequences-2

Alcuni numeri al centro del triangolo appaiono anche tre o quattro volte. Ce ne sono anche alcune che appaiono sei volte: puoi vedere sia [120](->.s120) che [3003](->.s3003) quattro volte nel triangolo sopra, e poi appaiono altre due volte ciascuna nelle righe 120 e 3003 .

Poiché 3003 è un numero triangolare, in realtà appare altre due volte nella _terza_ diagonale del triangolo: per un totale di otto occorrenze.

Non è noto se vi siano altri numeri che compaiono otto volte nel triangolo o se ci sono numeri che compaiono più di otto volte. Il matematico americano [David Singmaster](bio:singmaster) ha ipotizzato che ci sia un limite fisso sulla frequenza con cui i numeri possono apparire nel triangolo di Pascal - ma non è stato ancora dimostrato.

---

> id: modular
> goals: select

### Divisibilità

Alcuni schemi del triangolo di Pascal non sono così facili da rilevare. Il diagramma seguente evidenzia tutte le celle pari:

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

{.reveal(when="select")} Sembra che i numeri pari nel triangolo di Pascal formino un piccolo [[triangolo|matrice|quadrato]].

---

> id: modular-1
> goals: c2 c3 c4 c5

La colorazione manuale di ogni cella richiede molto tempo, ma qui puoi vedere cosa succede se lo fai per molte più righe. E che dire delle celle divisibili per altri numeri?

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

Wow! Le celle colorate appaiono sempre in [[triangoli|quadrati|coppie]] (ad eccezione di alcune singole celle, che potrebbero essere viste come triangoli di dimensione 1).

Se continuiamo il modello di celle divisibili per 2, ne otteniamo uno che è molto simile al __triangolo di Sierpinski__ sulla destra. Forme come questa, che consistono in un modello semplice che sembra continuare all'infinito pur diventando sempre più piccolo, sono chiamate [__Frattali__](gloss:fractal). Imparerai di più su di loro in futuro ...

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---

> id: pascal-binomial

### Coefficienti binomiali

C'è un'altra proprietà importante del triangolo di Pascal di cui dobbiamo parlare. Per capirlo, proveremo a risolvere lo stesso problema con due metodi completamente diversi, quindi vedremo come sono correlati.

{.todo} DISPONIBILE A BREVE

---

## Limiti e convergenza

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} PRESTO DISPONIBILE

