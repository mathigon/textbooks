# Seqüències i patrons 

## Introducció 

> section: introduction
> id: intro
> translated: auto

Moltes professions que utilitzen matemàtiques estan interessades en un aspecte concret: _trobar patrons_ i ser capaços de predir el futur. Aquests són alguns exemples: 

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

En l'última dècada, __els departaments de policia de__ tot el món han començat a confiar més en les matemàtiques. Algoritmes especials poden utilitzar les dades de delictes passats per predir quan i on es poden produir delictes en el futur. Per exemple, el sistema _PredPol_ (curt per “policia predictiu”), va ajudar a disminuir la taxa de criminalitat a algunes parts de Los Angeles un 12%! 

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Resulta que els __terratrèmols__ segueixen patrons similars als delictes. De la mateixa manera que un delicte podria desencadenar represàlies, un terratrèmol podria provocar rèpliques. En matemàtiques, això es diu un "procés auto-excitant", i hi ha equacions que ajuden a predir quan pot passar el següent. 

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Els banquers també consulten dades històriques dels preus de les accions, dels tipus d’interès i dels tipus de canvi de moneda per estimar com podrien canviar __els mercats financers__ en el futur. Poder predir si el valor d'una acció pujarà o baixarà pot ser molt lucratiu. 

:::

Els matemàtics professionals utilitzen algoritmes altament complexos per trobar i analitzar tots aquests patrons, però començarem amb una mica més bàsic. 

---
> id: simple-patterns

### Seqüències simples 

En matemàtiques, una [__seqüència__](gloss:sequence) és una cadena de nombres (o altres objectes) que solen seguir un patró particular. Els elements individuals d'una seqüència s'anomenen [__termes__](gloss:sequence-term) . 

A continuació, es mostren alguns exemples de seqüències. Podeu trobar els seus patrons i calcular els dos termes següents? 

{.text-center.s-orange.with-arrows.no-voice} _{.n} 3_ , _{.n} 6 _{span.arrow} +3__ , _{.n} 9 _{span.arrow(hidden)} +3__ , _{.n} 12 _{span.arrow(hidden)} +3__ , _{.n} 15 _{span.arrow(hidden)} +3__ , _{.n} [[18]] _{span.arrow(hidden)} +3__ _{.n} [[21]] _{span.arrow(hidden)} +3__ ,… _{span.pattern.reveal(when="blank-0 blank-1")} Patró: "Afegeix 3 al número anterior per obtenir el següent."_ 

{.text-center.s-teal.with-arrows.no-voice} _{.n} 4_ , _{.n} 10 _{span.arrow(hidden)} +6__ , _{.n} 16 _{span.arrow(hidden)} +6__ , _{.n} 22 _{span.arrow(hidden)} +6__ , _{.n} 28 _{span.arrow(hidden)} +6__ , _{.n} [[34]] _{span.arrow(hidden)} +6__ , _{.n} [[40]] _{span.arrow(hidden)} +6__ , ... _{span.pattern.reveal(when="blank-2 blank-3")} Patró: "Afegiu 6 al número anterior per obtenir el següent."_ 

{.text-center.s-purple.with-arrows.no-voice} _{.n} 3_ , _{.n} 4 _{span.arrow(hidden)} +1__ , _{.n} 7 _{span.arrow(hidden)} +3__ , _{.n} 8 _{span.arrow(hidden)} +1__ , _{.n} 11 _{span.arrow(hidden)} +3__ , _{.n} [[12]] _{span.arrow(hidden)} +1__ , _{.n} [[15]] _{span.arrow(hidden)} +3__ ,… _{span.pattern.reveal(when="blank-4 blank-5")} Patró: "Afegiu alternativament 1 i afegiu-ne 3 al número anterior, per obtenir el següent."_ 

{.text-center.s-lime.with-arrows.no-voice} _{.n} 1_ , _{.n} 2 _{span.arrow(hidden)} × 2__ , _{.n} 4 _{span.arrow(hidden)} × 2__ , _{.n} 8 _{span.arrow(hidden)} × 2__ , _{.n} 16 _{span.arrow(hidden)} × 2__ , _{.n} [[32]] _{span.arrow(hidden)} × 2__ , _{.n} [[64]] _{span.arrow(hidden)} × 2__ , ... _{span.pattern.reveal(when="blank-6 blank-7")} Patró: “Multiplica el número anterior per 2, per obtenir el següent”._ 

---
> id: simple-patterns-1

Els punts (...) al final volen dir simplement que la seqüència pot continuar per sempre. Quan ens referim a seqüències com aquesta en matemàtiques, sovint representem tots els termes per una [variable](gloss:variable) especial: 

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

El nombre petit després de la _x_ s'anomena __subíndex__ i indica la posició del terme a la seqüència. Això vol dir que podem representar el _n-èsim_ terme de la seqüència de [[`x_n`|`x_i`|`x_2`]] . 

---
> id: triangles

### Nombres del triangle i quadrat 

Les seqüències en matemàtiques no sempre han de ser números. Aquí hi ha una seqüència que consta de formes geomètriques - triangles de mida creixent: 

::: column(width=24 parent="padded-thin")

{.text-center.no-voice} __1__ 

    include svg/triangle-1.svg

::: column(width=52)

{.text-center.no-voice} __3__ 

    include svg/triangle-2.svg

::: column(width=80)

{.text-center.no-voice} __6__ 

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b.no-voice} [[10]] 

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b.no-voice} [[15]] 

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b.no-voice} [[21]] 

    include svg/triangle-6.svg

:::

---
> id: triangle-1

A cada pas, afegim una fila més al triangle anterior. La longitud d’aquestes noves files també augmenta una cada vegada. Pots veure el patró? 

{.text-center.s-orange.with-arrows.no-voice} _{.n} 1_ , _{.n} 3 _{span.arrow} +2__ , _{.n} 6 _{span.arrow} +3__ , _{.n} 10 _{span.arrow} +4__ , _{.n} 15 _{span.arrow} +5__ , _{.n} 21 _{span.arrow} +6__ _{.n} [[28]] _{span.arrow.reveal(when="blank-0")} +7__ , _{.n} [[36]] _{span.arrow.reveal(when="blank-1")} +8__ ,… 

---
> id: recursive

També podem descriure aquest patró mitjançant una [fórmula](gloss:formula) especial: 

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Per obtenir el nombre de triangle _n_ -ésimo, prenem [[l'anterior | primer | següent]] número de triangle i afegiu _n_ . Per exemple, si _n_ = ${n}{n|5|2,20,1} , la fórmula es converteix <msub><mi>x</mi><mn>${n}</mn></msub> = <msub><mi>x</mi><mn>${n-1}</mn></msub> + ${n} . 

---
> id: recursive-1

Una fórmula que expressa `x_n` com a funció de termes anteriors de la seqüència s'anomena [__fórmula recursiva__](gloss:sequence-recursive) . Sempre que coneguis el [[primer terme | últim terme | segon terme]] de la seqüència, podeu calcular tots els següents. 

---
> id: squares

    hr

Una altra seqüència que consta de formes geomètriques són els __nombres quadrats__ . Cada terme està format per quadrats cada vegada més grans: 

::: column(width=24 parent="padded-thin squares")

{.text-center.no-voice} __1__ 

    include svg/square-1.svg

::: column(width=50)

{.text-center.no-voice} __4__ 

    include svg/square-2.svg

::: column(width=76)

{.text-center.no-voice} __9__ 

    include svg/square-3.svg

::: column(width=102)

{.text-center.b.no-voice} [[16]] 

    include svg/square-4.svg

::: column(width=128)

{.text-center.b.no-voice} [[25]] 

    include svg/square-5.svg

::: column(width=154)

{.text-center.b.no-voice} [[36]] 

    include svg/square-6.svg

:::

---
> id: square-1

Per als nombres del triangle hem trobat una fórmula recursiva que us indica el _següent_ terme de la seqüència en funció dels seus termes _anteriors_ . Per als nombres quadrats que podem fer encara millor: una fórmula que li indica _l'enèsim_ terme directament, sense haver de calcular tots els anteriors: 

{.text-center.s-purple} _{.n}`x_n`_ = _{x-equation(solution="n^2")}_ 

---
> id: explicit

D’aquesta forma s’anomena [__fórmula explícita__](gloss:sequence-explicit) . Podem utilitzar-ho, per exemple, per calcular que el 13è número quadrat és [[169]] , sense abans trobar els 12 números quadrats anteriors. 

---
> id: definitions

    hr

Resumim totes les definicions que hem vist fins ara: 

::: .theorem

Una [__seqüència__](gloss:sequence) és una llista de números, formes geomètriques o altres objectes, que segueixen un patró específic. Els ítems individuals de la seqüència s’anomenen [__termes__](gloss:sequence-term) i estan representats per variables com `x_n` . 

Una [__fórmula recursiva__](gloss:sequence-recursive) per una seqüència li indica el valor de _l'enèsima_ termini com una funció dels [[seus termes anteriors | el primer terme]] . També heu d’especificar el primer terme. 

Una [__fórmula explícita__](gloss:sequence-explicit) per a una seqüència indica el valor de _l'enèsim_ terme com una funció de [[tan sols _n_ | el terme anterior]] , sense fer referència a altres termes de la seqüència. 

:::

---
> id: action-sequence

### Fotografia de seqüències d'acció 

A les següents seccions, coneixereu moltes seqüències matemàtiques diferents, patrons sorprenents i aplicacions inesperades. 

Primer, però, vegem alguna cosa completament diferent: la __fotografia de seqüències d’acció__ . Un fotògraf pren moltes fotos de forma ràpida i, després, les fusiona en una sola imatge: 

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Es pot veure com l’esquiador forma una seqüència? El patró no és addició ni multiplicació, sinó una [transformació](gloss:rigid-transformation) geomètrica. Entre passos consecutius, l'esquiador es tradueix i [[gira | reflectit | dilatat]] . 

---
> id: action-sequence-1

A continuació, es mostren alguns exemples més de fotografia de seqüència d’acció per al seu gaudi: 

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

## Aritmètica i seqüències geomètriques 

> section: arithmetic-geometric
> id: halley
> translated: auto

::: column.grow

El 1682, l’astrònom [Edmond Halley va](bio:halley) observar un fenomen insòlit: un objecte blanc brillant amb una llarga cua que es movia pel cel nocturn. Es tractava d’un __cometa__ , una petita roca gelada que vola per l’espai, tot deixant enrere un rastre de pols i gel. 

Halley va recordar que altres astrònoms havien observat cometes similars molt abans: una el 1530 i una altra el 1606. Observeu que la bretxa entre dues observacions consecutives és la mateixa en els dos casos: [[76]] anys. 

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley va concloure que les tres observacions eren en realitat del mateix cometa, que ara es diu _cometa de Halley_ . Està orbitant al voltant del sol i passa la Terra aproximadament cada 76 anys. També va predir quan el cometa seria visible a continuació: 

{.text-center.s-orange.s-large.with-arrows.no-voice} _{span.n} 1530_ , _{span.n} 1606 _{span.arrow} +76__ , _{.n} 1682 _{span.arrow} +76__ , _{.n} 1758 _{span.arrow} +76__ , _{.n} [[1834]] _{span.arrow} +76__ , _{.n} [[1910]] _{span.arrow} +76__ , _{.n} [[1986]] _{span.arrow} +76__ , ... 

---
> id: halley-2

En realitat, l'interval de temps no sempre _és exactament de_ 76 anys: pot variar un o dos anys, ja que l'òrbita del cometa és interrompuda per altres planetes. Avui sabem que el cometa Halley va ser observat per astrònoms antics fins al 240 aC! 

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depictions of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

Un grup diferent de científics està investigant el comportament d'una pilota de tennis rebot. Van caure la pilota des d'una alçada de 10 metres i van mesurar la seva posició amb el pas del temps. Amb cada rebot, la pilota perd part de la seva alçada original: 

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Els científics van observar que la pilota perd el 20% de la seva alçada després de cada rebot. Dit d’una altra manera, l’alçada màxima de cada rebot és del 80% de l’anterior. Això els va permetre predir l'alçada de cada rebot següent: 

{.text-center.s-teal.s-large.with-arrows.no-voice} _{span.n} 10_ , _{span.n} 8 _{span.arrow} × 0,8__ , _{.n} [[6.4]] _{span.arrow} × 0,8__ , _{span.n} [[5.12]] _{span.arrow} × 0,8__ , _{span.n.reveal} 4.096 _{span.arrow} × 0,8__ _{span.reveal} ,_ _{span.n.reveal} 3.277 _{span.arrow} × 0,8__ _{span.reveal} ,_ _{span.n.reveal} 2.621 _{span.arrow} × 0,8__ _{span.reveal} ,_ _{span.n.reveal} 2.097 _{span.arrow} × 0,8__ _{span.reveal} , ..._ 

---
> id: arithmetic-geometric

### Definicions 

Si compareu aquests dos problemes, podríeu notar que hi ha moltes semblances: la seqüència del cometa de Halley té la mateixa [[diferència | relació | producte]] entre termes consecutius, mentre que la seqüència de rebots de pilota de tennis té la mateixa [[proporció | diferència | producte]] entre termes consecutius. 

---
> id: arithmetic-geometric-1

Les seqüències d’aquestes propietats tenen un nom especial: 

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

Una [__seqüència aritmètica__](gloss:arithmetic-sequence) té una constant __{.m-red} diferència _d___ entre termes consecutius. 

S’afegeix o es resta el mateix nombre a tots els termes, per produir-ne el següent. 

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

Una [__seqüència geomètrica__](gloss:geometric-sequence) té una constant __{.m-green} relació _r___ entre termes consecutius. 

Cada terme es multiplica o es divideix pel mateix nombre, per produir el següent. 

:::

:::

---
> id: arithmetic-geometric-select

A continuació, es detallen algunes seqüències diferents. Podeu determinar quines són aritmètiques, geomètriques o cap dels dos i quins són els valors de _{.b.m-red} d_ i _{.b.m-green} r_ són? 

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{span.n} 8_ , _{span.n} 16_ , _{span.n} 32_ , _{span.n} 64_ ,… 

::: column(width=320)

{.no-voice} és [[geomètrica | aritmètica | tampoc]] _{span.reveal(when="blank-0")} , amb la proporció [[2]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 5_ , _{span.n} 8_ , _{span.n} 11_ , _{span.n} 14_ , _{span.n} 17_ ,… 

::: column(width=320)

{.no-voice} és [[aritmètica | geomètrica | tampoc]] _{span.reveal(when="blank-2")} , amb la diferència [[3]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 17_ , _{span.n} 13_ , _{span.n} 9_ , _{span.n} 5_ , _{span.n} 1_ , _{span.n} –3_ ,… 

::: column(width=320)

{.no-voice} és [[aritmètica | geomètrica | tampoc]] _{span.reveal(when="blank-4")} , amb diferència [[-4]] ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{span.n} 7_ , _{span.n} 11_ , _{span.n} 16_ , _{span.n} 22_ ,… 

::: column(width=320)

{.no-voice} [[no]] és [[cap dels dos | aritmètica | geomètrica]] _{span.reveal(when="blank-6")} ._ 

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n} 40_ , _{span.n} 20_ , _{span.n} 10_ , _{span.n} 5_ , _{span.n} 2.5_ , _{span.n} 1,25_ ,… 

::: column(width=320)

{.no-voice} és [[geomètrica | aritmètica | tampoc]] _{span.reveal(when="blank-7")} , amb la proporció [[0,5]] ._ 

:::

---
> id: arithmetic-geometric-graph

Per definir una seqüència aritmètica o geomètrica, hem de conèixer no només la diferència o relació comuna, sinó també el valor inicial (anomenat `a` ). Aquí podeu generar les vostres pròpies seqüències i traçar els seus valors en un gràfic, canviant els valors de `a` , _d_ i _r_ . Podeu trobar algun patró? 

::: column.ag-chart(width=320)

####{.m-red} Seqüència aritmètica 

{.text-center.no-voice}`a` = ${a}{a|2|-10,10,0.2} , _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${arithmetic(a,d,0)}_ , _{span.n}${arithmetic(a,d,1)}_ , _{span.n}${arithmetic(a,d,2)}_ , _{span.n}${arithmetic(a,d,3)}_ , _{span.n}${arithmetic(a,d,4)}_ , _{span.n}${arithmetic(a,d,5)}_ , ... 

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

####{.m-green} Seqüència geomètrica 

{.text-center.no-voice}`a` = ${b}{b|2|-10,10,0.2} , _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${geometric(b,r,0)}_ , _{span.n}${geometric(b,r,1)}_ , _{span.n}${geometric(b,r,2)}_ , _{span.n}${geometric(b,r,3)}_ , _{span.n}${geometric(b,r,4)}_ , _{span.n}${geometric(b,r,5)}_ , ... 

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Fixeu-vos com tot __{.m-red} Les seqüències aritmètiques__ semblen molt similars: si la diferència és positiva, [[augmenten]] constantment [[| disminueixen]] i, si la diferència és negativa, [[disminueixen]] constantment [[| augment]] . 

{.reveal(when="blank-0 blank-1")} D'altra banda, les seqüències geomètriques poden comportar-se completament diferent segons els valors de `a` i _r_ : 

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Si [`r > 1`](action:set(2,2)), els termes augmentaran [[ràpidament | disminueix ràpidament | apropeu-vos a zero]] _{span.reveal(when="blank-2")} , fins a l’infinit. Els matemàtics diuen que la seqüència [__divergeix__](gloss:sequence-divergence) ._ 

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

Si [_r_ està entre –1 i 1](action:set(10,0.6)), els termes sempre [[s’acostaran a 0 | disminuir fins a l’infinit negatiu | fer-se més petit]] _{span.reveal(when="blank-3")} . Diem que la seqüència [__convergeix__](gloss:sequence-convergence) ._ 

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

Si [`r < -1`](action:set(3,-1.4)), els termes alternaran entre positius i negatius, mentre que el seu [[valor absolut | invers | la diferència]] és més gran. 

:::

{.reveal(when="blank-4 blank-5")} A l’ [últim apartat](/course/sequences/convergence) d’aquest curs, coneixereu més informació sobre la convergència i la divergència. 

---
> id: arithmetic-geometric-recursive

### Fórmules recursives i explícites 

A la secció anterior, heu après que una [__fórmula recursiva__](gloss:sequence-recursive) us indica el valor de cada terme en funció dels termes anteriors. Aquestes són les fórmules recursives per a seqüències aritmètiques i geomètriques: 

::: column.grow

{.text-center.no-voice}`x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]] 

::: column.grow

{.text-center.no-voice}`x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]] 

:::

---
> id: arithmetic-geometric-explicit

Un dels problemes de les fórmules recursives és que per trobar el centèsim terme, per exemple, primer hem de calcular els 99 termes anteriors, i això pot trigar molt. En canvi, podem mirar de trobar una [__fórmula explícita,__](gloss:sequence-explicit) que ens diu el valor de _l'enèsima_ expressió directa. 

::: column.grow

Per __{.m-red} seqüències aritmètiques__ , hem d’afegir _d_ a cada pas: 

{.ag-equation.no-voice}`x_1 = a`

{.ag-equation.no-voice}`x_2 = a + d`

{.ag-equation.no-voice}`x_3 = a + d + d`

{.ag-equation.no-voice}`x_4 =` _{x-equation(solution="a+d+d+d")}_ 

{.ag-equation.no-voice.reveal(when="eqn-0")}`x_5 =` _{x-equation(solution="a+d+d+d+d")}_ 

{.reveal(when="eqn-1")} En _l'enèsim_ terme, estem afegint [[`n-1`|`n`|`n+1`]] còpies de _d_ , de manera que la fórmula general és 

{.ag-equation.no-voice.reveal(when="blank-0")}`x_n = a + d × (n-1)` . 

::: column.grow

Per __{.m-green} seqüències geomètriques__ , hem de multiplicar _r_ a cada pas: 

{.ag-equation.no-voice}`x_1 = a`

{.ag-equation.no-voice}`x_2 = a × r`

{.ag-equation.no-voice}`x_3 = a × r × r`

{.ag-equation.no-voice}`x_4 =` _{x-equation(solution="a×r×r×r")}_ 

{.ag-equation.no-voice.reveal(when="eqn-2")}`x_5 =` _{x-equation(solution="a×r×r×r×r")}_ 

{.reveal(when="eqn-3")} En _l'enèsim_ terme, estem multiplicant [[`n-1`|`n`|`n+1`]] còpies de _r_ , de manera que la fórmula general és 

{.ag-equation.no-voice.reveal(when="blank-1")}`x_n = a × r^(n-1)` . 

:::

---
> id: arithmetic-geometric-explicit-1

Aquí teniu un resum de totes les definicions i fórmules que heu vist fins ara: 

::: column.grow

::: .theorem.s-red

Un __{.m-red} la seqüència aritmètica__ té primer terme `a` i la diferència comuna `d` entre termes consecutius. 

{.text-center} __Fórmula recursiva__ : `x_n = x_(n-1) + d`

{.text-center} __Fórmula explícita__ : `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

A __{.m-green} la seqüència geomètrica__ té primer terme `a` i la proporció comuna `r` entre termes consecutius. 

{.text-center} __Fórmula recursiva__ : `x_n = x_(n-1) × r`

{.text-center} __Fórmula explícita__ : `x_n = a × r^(n-1)`

:::

:::

Ara fem una ullada a alguns exemples en què podem fer servir tot això! 

---
> id: pay-it-forward
> goals: video

### Pagar per avançat 

Aquí teniu un breu clip de la pel·lícula _Pay it Forward_ , on Trevor, de 12 anys, explica la seva idea per fer del món un lloc millor: 

    figure
      x-video(src="https://storage.googleapis.com/mathigon-videos/pay-it-forward.mp4" poster="images/pay-it-forward-poster.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

L’essència de la idea de Trevor és que, si tothom “la paga endavant”, una sola persona pot tenir un impacte enorme en el món: 

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Observeu com el nombre de persones a cada pas forma una [[seqüència geomètrica | seqüència aritmètica | número de triangle]] , _{span.reveal(when="blank-0")} amb proporció comuna [[3]] :_ 

{.text-center.s-orange.with-arrows.no-voice.reveal(when="blank-1")} _{span.n} 1_ , _{span.n} 3 _{span.arrow} × 3__ , _{span.n} 9 _{span.arrow} × 3__ , _{span.n} [[27]] _{span.arrow} × 3__ , _{span.n} [[81]] _{span.arrow} × 3__ , _{span.n} [[243]] _{span.arrow} × 3__ , ... 

---
> id: pay-it-forward-2

Utilitzant la [fórmula explícita](gloss:sequence-explicit) de seqüències geomètriques, podem esbrinar quantes persones noves es veuen afectades a qualsevol pas: 

{.text-center}`x_n` = _{x-equation(solution="3^(n-1)")}_ 

---
> id: pay-it-forward-3

El nombre de persones augmenta increïblement ràpidament. En el desè pas, aconseguiríeu 19.683 nous i, després de 22 passos, hauríeu arribat a més persones de les que hi ha actualment vives a la Terra. 

Aquesta seqüència de nombres té un nom especial: les __potències de 3__ . Com veieu, cada terme és realment un [poder](gloss:powers) diferent de 3: 

{.text-center.s-orange.no-voice} _{span.n}`3^0`_ , _{span.n}`3^1`_ , _{span.n}`3^2`_ , _{span.n}`3^3`_ , _{span.n}`3^4`_ , _{span.n}`3^5`_ , ... 

---
> id: millionaire

### Qui vol ser milionari? 

{.todo} PRÒXIMAMENT! 

---
> id: chessboard

### El problema del tauler d’escacs 

{.todo} PRÒXIMAMENT! 

---

## Nombres figurats 

> section: figurate
> id: figurate
> translated: auto

El nom de [seqüències geomètriques](gloss:geometric-sequence) és força confús, perquè no tenen res a veure amb la geometria. De fet, el nom es va desenvolupar fa centenars d’anys, quan els matemàtics van pensar en la _multiplicació_ i l’ _arrelament quadrat_ d’una manera molt més geomètrica. 

No obstant això, hi ha moltes altres seqüències que _es_ basen en certes formes geomètriques - algunes de les quals ja vam veure en la [introducció.](/course/sequences/introduction) Aquestes seqüències s’anomenen sovint [__nombres figurats__](gloss:figurate-numbers) i, en aquest apartat, podrem veure amb detall algunes d’elles. 

---
> id: triangle-numbers

### Nombres del triangle 

Els __nombres del triangle__ es generen creant triangles de mida progressivament més gran: 

::: column(width=24 parent="padded-thin")

{.text-center.no-voice} __1__ 

    include svg/triangle-1.svg

::: column(width=52)

{.text-center.no-voice} __3__ 

    include svg/triangle-2.svg

::: column(width=80)

{.text-center.no-voice} __6__ 

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.no-voice} __10__ 

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.no-voice} __15__ 

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.no-voice} __21__ 

    include svg/triangle-6.svg

:::

Ja heu vist la fórmula recursiva dels números de triangles: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]] . 

---
> id: billiard-pool

No és casual que sempre hi hagi 10 pins quan es fan bitlles o 15 pilotes quan jugueu al billar: tots dos són números de triangle! 

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Malauradament, la fórmula recursiva no és de gran ajuda si volem trobar el número del triangle número 100 o 5000, sense calcular primer tots els anteriors. Però, com vam fer amb les seqüències aritmètiques i geomètriques, podem intentar trobar una fórmula explícita per als nombres del triangle. 

{.todo} COM VEURE: Prova animada de la fórmula del número del triangle 

---
> id: triangle-sums

Els números del triangle semblen aparèixer arreu de les matemàtiques i els veureu de nou al llarg d'aquest curs. Un fet especialment interessant és que _qualsevol_ nombre complet es pot escriure com la suma de com a màxim tres números de triangles: 

::: column(width=140 parent="triangle-sum")

{.text-center.no-voice}${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} = 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} + 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} + 

::: column(width=140)

{.text-center.no-voice} __{.t-sum}__ 

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} El fet que això funcionés per a _tots els_ nombres sencers va ser demostrat per primera vegada el 1796 pel matemàtic alemany [Carl Friedrich Gauss](bio:gauss) - als 19 anys! 

---
> id: triangle-investigate

::: .box.f-blue

#### Solucionar problemes 

Quina és la suma dels primers 100 [nombres enters](gloss:integer) positius? En altres paraules, quin és el valor de 

{.text-center}`1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100` ? 

En lloc de afegir-hi tot manualment, podeu utilitzar els [números](gloss:triangle-numbers) del [triangle](gloss:triangle-numbers) per ajudar-vos? Què passa amb la suma dels primers 1000 nombres enters positius? 

:::

---
> id: square-numbers

### Nombres quadrats i poligonals 

Una altra seqüència que es basa en formes geomètriques són els __nombres quadrats__ : 

{.text-center.s-purple.with-arrows.no-voice} _{.n} 1_ , _{.n} 4 _{span.arrow.reveal(when="blank-4")} +3__ , _{.n} 9 _{span.arrow.reveal(when="blank-4")} +5__ , _{.n} 16 _{span.arrow.reveal(when="blank-4")} +7__ , _{.n} [[25]] _{span.arrow.reveal(when="blank-4")} +9__ , _{.n} [[36]] _{span.arrow.reveal(when="blank-4")} +11__ , _{.n} [[49]] _{span.arrow.reveal(when="blank-4")} +13__ , _{.n} [[64]] _{span.arrow.reveal(when="blank-4")} +15__ , ... 

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Podeu calcular els nombres d’aquesta seqüència mitjançant el nombre de quadrats ( `1^2` , `2^2` , `3^2` , ...), però resulta que hi ha un altre patró: les diferències entre números quadrats consecutius són els [[nombres imparells | números de triangle | nombres enters]] en ordre creixent! 

---
> id: square-numbers-1

::: column.grow

La raó d'aquest patró es fa evident si realment dibuixem un quadrat. Cada pas afegeix una fila i una columna. La mida d’aquests “cantons” comença a l’1 i augmenta un 2 a cada pas, formant així la seqüència de nombres imparells. 

Això també vol dir que _l'enèsim_ nombre quadrat és simplement la suma dels _n_ primers nombres senars! Per exemple, la suma dels primers 6 nombres imparells és 

{.text-center}`1 + 3 + 5 + 7 + 9 + 11 =` [[36]] . 

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

A més, cada nombre quadrat també és la suma de dos [nombres triangulars](gloss:triangle-numbers) consecutius. Per exemple, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2} . Podeu veure com podem dividir cada quadrat al llarg de la seva diagonal, en dos triangles? 

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Després de nombres de triangles i quadrats, podem seguir endavant amb [polígons](gloss:polygon) més grans. Les seqüències de nombres resultants s’anomenen __nombres poligonals__ . 

Per exemple, si utilitzem polígons amb ${k}{k|5|3,10,1} costats, obtenim la seqüència de __${polygonName(k)} números__ . 

Pot trobar fórmules recursives i explícites per _l'enèsim_ nombre poligonal que té _k_ costats? I detecteu algun patró interessant per a polígons més grans? 

:::

---
> id: tetrahedral

### Nombres tetraèdrics i cúbics 

Per descomptat, tampoc ens hem de limitar a formes i patrons bidimensionals. Podríem apilar esferes per formar petites piràmides, de la mateixa manera que s’apilen taronges en un supermercat: 

::: column(width=64 parent="padded-thin")

{.text-center.no-voice} __1__ 

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center.no-voice} __[[4]]__ 

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center.no-voice} __[[10]]__ 

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center.no-voice} __20__ 

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center.no-voice} __35__ 

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Els matemàtics solen anomenar aquests [__tetraedres de les__](gloss:tetrahedron) piràmides i els [__números tetraèdrics de la__](gloss:tetrahedral-numbers) seqüència resultant. 

{.todo} COM VENIR: Més informació sobre els números tetraèdrics, els números cúbics i els 12 dies de Nadal. 

---

## Seqüències com a funcions 

> section: functions
> sectionStatus: dev

FER 

---

## Nombres de Fibonacci 

> section: fibonacci
> id: rabbits
> translated: auto

Imagineu-vos que heu rebut un parell de conills, un mascle i una femella. Són conills molt especials, perquè no moren mai, i la femella dóna a llum una nova parella de conills exactament un cop al mes (sempre una altra parella de mascles i femelles). 

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

{.r} Al mes següent, tindríeu 13 parells de conills: els 8 del mes anterior, més 5 nous jocs de nadons. Podeu detectar un patró en aquesta seqüència? _{button.next-step} Continuar_ 

---
> id: rabbits-2

El nombre de conills en un determinat mes és [[la suma dels dos números anteriors | el doble del número anterior]] . _{span.reveal(when="blank-0")} Dit d'una altra manera, heu d'afegir els _dos_ termes _anteriors_ a la seqüència, per obtenir el següent. La seqüència comença amb dos 1s, i la [fórmula recursiva](gloss:sequence-recursive) és_ 

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Podeu calcular el nombre de conills al cap d’uns mesos més? 

{.text-center.s-orange} _{.n} 1_ , _{.n} 1_ , _{.n} 2_ , _{.n} 3_ , _{.n} 5_ , _{.n} 8_ , _{.n} [[13]]_ , _{.n} [[21]]_ , _{.n} [[34]]_ , _{.n} [[55]]_ , _{.n} [[89]]_ , _{.n} [[144]]_ ,… 

{.reveal(when="blank-5")} Així, al cap de 12 mesos, tindreu 144 parells de conills. 

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Aquesta seqüència de nombres s’anomena [__Seqüència de Fibonacci__](gloss:fibonacci-numbers) , batejada amb el nom del matemàtic italià [Leonardo Fibonacci](bio:fibonacci) . 

::: column.grow

Quan Fibonacci va néixer el 1175, la majoria d’Europa encara utilitzava el [sistema de numeració romana](gloss:roman-numerals) per a nombres (com IVX o MCMLIV). El pare de Fibonacci era comerciant, i junts van viatjar al nord d’Àfrica, així com al Pròxim Orient. Va ser allà on Fibonacci va aprendre per primera vegada el [sistema de numeraris àrabs](gloss:arabic-numerals) . 

Quan va tornar a Itàlia, Fibonacci va escriure un llibre anomenat _Liber Abaci_ (llatí per a "El llibre dels càlculs"), on va introduir els nous números àrabs als comerciants europeus. Van ser un èxit immediat, i encara avui en fem servir. 

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

En una de les pàgines del seu llibre també va investigar els patrons de cria dels conills, és per això que els nombres de Fibonacci van rebre el seu nom. 

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Per descomptat, els nombres de Fibonacci no són _en realitat_ la forma en conills poblen en la vida real. Els conills no tenen exactament un fill masculí i una femella cada mes, i finalment no hem explicat que els conills van morir. 

Però resulta que hi ha molts altres llocs a la natura, on _apareixen_ els nombres de Fibonacci: per exemple, les espirals en les plantes. Es pot comptar quantes espirals hi ha en cada direcció? 

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Aquest con de pi té [[8]] espirals en sentit horari i [[13 en]] sentit antihorari. 

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Aquest gira-sol té 34 espirals en sentit horari i 55 espirals en sentit antihorari. 

:::

---
> id: spirals-1

En ambdós casos, els nombres d’espirals són números de Fibonacci consecutius. El mateix passa per a moltes altres plantes: la propera vegada que sortiu a l’exterior, compteu el nombre de pètals d’una flor o el nombre de fulles d’una tija. Molt sovint comproveu que són números de Fibonacci. 

Per descomptat, no és només una coincidència. Hi ha una raó important per la qual la natura li agrada la seqüència de Fibonacci, de la qual podreu conèixer més endavant. 

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

Els nombres de fibonacci també apareixen a les poblacions d’abelles. 

A cada colònia d’abelles hi ha una única _reina_ que posa molts ous. Si un ou fecundat per un òvul fecundat, aquest eclosiona a una abella __femella__ . Si no està fecundada, eclosiona a una abella __masculina__ (anomenada drone). 

Això vol dir que les abelles femelles tenen [[dos pares | un progenitor]] , mentre que les abelles masculines només tenen [[un progenitor | dos pares]] 

{.reveal(when="blank-0 blank-1")} Si dibuixem l’arbre ancestral d’una abella, el nombre de pares, avis, besavis i de les generacions anteriors són sempre nombres de Fibonacci. 

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} De vegades, les abelles femelles joves són alimentades amb menjar especial anomenat “gelea reial”. En aquest cas, es converteixen en reines i volaran per començar un nou rusc. 

:::

---
> id: golden-spiral

### La ratio d’or 

Igual que els [números](gloss:square-numbers) del [triangle](gloss:triangle-numbers) i [quadrat](gloss:square-numbers) i altres seqüències que hem vist abans, es pot visualitzar la seqüència de Fibonacci mitjançant un patró geomètric: 

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

A cada pas, els quadrats formen un rectangle més gran. La seva amplada i alçada són sempre dos números consecutius de Fibonacci. La __relació__ d' __aspecte__ del rectangle és la relació entre l'amplada i l'altura: 

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center.no-voice}`2/1` = 2 

::: column(width=100)

    include svg/golden-2.svg

{.text-center.no-voice}`3/2` = 1,5 

::: column(width=100)

    include svg/golden-3.svg

{.text-center.no-voice}`5/3` = 1.666 ... 

::: column(width=100)

    include svg/golden-4.svg

{.text-center.no-voice}`8/5` = 1,6 

::: column(width=100)

    include svg/golden-5.svg

{.text-center.no-voice}<mfrac><mn>[[13]]</mn><mn>[[8]]</mn></mfrac> _{span.reveal(when="blank-0 blank-1")} = 1.625_ 

::: column(width=100)

    include svg/golden-6.svg

{.text-center.no-voice}<mfrac><mn>[[21]]</mn><mn>[[13]]</mn></mfrac> _{span.reveal(when="blank-2 blank-3")} = 1,62 ..._ 

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Observeu com, a mesura que afegim cada cop més quadrats, la relació d’aspecte sembla apropar-se i apropar-se a un nombre específic al voltant d’1,6. Aquest nombre s'anomena [__proporció daurada__](gloss:golden-ratio) i sol representar-se amb la lletra grega `φ` (“Phi”). El seu valor exacte és 

{.text-center}`(1 + sqrt(5))/2 = 1.61803398875…`

Moltes persones creuen que la proporció daurada és particularment agradable estèticament. És per això que sovint s’utilitzen artistes i arquitectes, com en aquests dos exemples: 

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Es diu que l'escultor grec Phidias havia utilitzat la proporció daurada a l'hora de dissenyar el _Partenó_ d'Atenes. La primera lletra del seu nom, `φ` , és el símbol que fem servir ara per a la proporció daurada. 

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _El sagrament de l’última cena_ , de l’artista espanyol Salvador Dalí, és un dels molts quadres amb la proporció daurada. Al fons, també es pot veure un gran [dodecaedre](gloss:dodecahedron) . 

:::

---
> id: golden-ratio-2

Podem aproximar la proporció daurada [[dividint | afegint | restant]] dos nombres consecutius de Fibonacci. 

{.reveal(when="blank-0")} Tanmateix, resulta que el valor exacte de `φ` no es pot escriure com una fracció senzilla: és un [__nombre irracional__](gloss:irrational-numbers) , de la mateixa manera [`π`](gloss:pi) i `sqrt(2)` i alguns altres números que heu vist abans. 

---
> id: sunflower-growing

### Espirals de Fibonacci 

::: column.grow

La proporció daurada explica per què apareixen a la natura els números de Fibonacci, com el con de gira-sol i pi que vau veure al començament d'aquesta secció. 

Ambdues plantes creixen cap a fora del seu centre (una part de la planta anomenada _meristema_ ). A mesura que s’afegeixen noves llavors, fulles o pètals, empenyen els existents més cap a fora. 

Desplaceu el control lliscant cap a la dreta per visualitzar com creix una planta. Observeu com s’afegeix cada full a una rotació diferent de l’anterior. L’angle entre dues fulles consecutives és sempre el mateix. 

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

És important que les flors trien un angle adequat: les fulles o les llavors han d’estar aproximadament iguals d’espai per obtenir la major quantitat de llum i nutrients. Al diagrama següent, podeu explorar com podria semblar un gira-sol amb diferents angles entre les seves llavors: 

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Si l’angle és [0°](action:set(0)) , totes les llavors creixeran en una sola fila llarga del centre. 

{div.inline(slot="legend")} Si l’angle és [`1/2`](action:set(0.5)) de rotació completa (180°), les llavors s’alternaran entre dos “braços” separats que s’allunyen del centre. 

{div.inline(slot="legend")} Per exemple, si la rotació és una altra proporció fraccionada de 360° [`2/5`](action:set(2/5)) o [`1/3`](action:set(1/3)) o [`3/8`](action:set(3/8)) , llavors el nombre de "braços" serà el mateix que el [[denominador | numerador | factor principal]] d'aquesta fracció. 

{div(slot="legend")} Malauradament, els “braços” són dolents, perquè signifiquen que les llavors no es distribueixen de manera uniforme: es malgasta tot l’espai entre els braços. Però si [els números racionals](gloss:rational-numbers) no funcionen, provem [els números irracionals](gloss:irrational-numbers) . 

{div.inline(slot="legend")} Un exemple de nombre irracional és [`pi`](gloss:pi) . Però si l’angle entre llavors és [`1/pi`](action:set(0.31831)) de 360°, encara sembla tenir armes: 22 d’ells. Això és així perquè la fracció `22/7 = 3.1429…` és una aproximació força bona per a `pi` . El que realment necessitem és un nombre irracional que _no es_ pugui aproximar estretament amb una fracció senzilla. 

{div.inline(slot="legend")} Resulta que la [proporció daurada](gloss:golden-ratio) és només això: la "més irracional" de tots els nombres irracionals. Si l’angle entre llavors és [`1/phi`](action:set(0.6180339)) de 360°, semblen estar gairebé perfectament espaiades. I aquest és precisament l’angle que utilitzen les plantes de tot el món. 

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Potser recordeu des de dalt que les proporcions de nombres de Fibonacci consecutius s’acosten i s’aproximen més a la proporció daurada, i és per això que, si comptau el nombre d’espirals d’una planta, sovint trobareu un nombre de Fibonacci. 

És important recordar que la natura no coneix els números de Fibonacci. La naturalesa tampoc no pot resoldre equacions per calcular la proporció daurada, però al llarg de milions d’anys, les plantes van tenir molt de temps per provar diferents angles i descobrir-ne la millor. 

Les plantes i els animals sempre volen créixer de la manera més eficient, i és per això que la natura està plena de patrons regulars i matemàtics. 

:::

---
> id: lucas-numbers

### Fibonachos 

Fins ara, només hem utilitzat l’equació recursiva per a nombres de Fibonacci. De fet, hi ha una equació explícita, però és molt més difícil trobar-la: 

{.text-center}`F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

També podríem intentar triar diferents punts de partida per als números de Fibonacci. Per exemple, si comencem amb 2, 1, ... en lloc d'1, 1, ... obtenim una seqüència anomenada __números de Lucas__ . 

Resulta que, siguin quins siguin els dos números inicials que trieu, les seqüències resultants comparteixen moltes propietats. Per exemple, les proporcions de termes consecutius _sempre_ [convergiran](gloss:sequence-convergence) a la proporció daurada. 

{.text-center.s-purple.s-small.no-voice}${a}{a|1|0,10,1} , ${b}{b|1|0,10,1} , _{span.n}${a+b}_ , _{span.n}${a+2×b}_ , _{span.n}${2×a+3×b}_ , _{span.n}${3×a+5×b}_ , _{span.n}${5×a+8×b}_ , _{span.n}${8×a+13×b}_ , ... 

---
> id: fibonacci-puzzles

Hi ha molts altres trencaclosques, patrons i aplicacions relacionats amb números de Fibonacci. Aquests són alguns exemples que podeu provar a vosaltres mateixos: 

::: .box.f-blue

#### Solucionar problemes 

__1. Divisibilitat de Fibonacci__ 

(a) Quins nombres de Fibonacci són parells? Hi ha un patró on se situen al llarg de la seqüència? Pots explicar per què? 

(b) Quins nombres de Fibonacci són divisibles per 3 (o divisibles per 4)? Què nota? 

    hr

__2. Sumes Fibonacci__ 

Què passa si afegiu tres números consecutius de Fibonacci? Pots explicar per què? 

    hr

__3. Escales de Fibonacci__ 

Al pujar les escales, puc fer passos senzills o fer un salt sobre dos esglaons alhora. Això vol dir que hi ha moltes possibilitats diferents sobre com puc pujar una escala. Per exemple, si hi ha 5 passos, tinc 8 opcions diferents: 

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Quantes opcions hi ha per a escala amb 6, 7 o 8 graons? Podeu detectar un patró? I com es relaciona això amb els números de Fibonacci? 

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Seqüències especials 

> section: special
> id: special-intro
> translated: auto

A més de [les](gloss:geometric-sequence) seqüències [aritmètiques](gloss:arithmetic-sequence) i [geomètriques](gloss:geometric-sequence) , [els nombres de Fibonacci](gloss:fibonacci-numbers) i els [nombres](gloss:fibonacci-numbers) [figurats](gloss:figurate-numbers) , hi ha infinitat de seqüències interessants que no segueixen un patró regular i similar. 

---
> id: primes

### Nombres primers 

Un exemple que ja heu vist anteriorment són els [__números primers__](gloss:prime) . Diem que un nombre és _primer_ si no té [[altres]] [factors](gloss:factor) [[que 1 i ell mateix | que no siguin 1 i 2 | i cap múltiple]] . 

---
> id: primes-1

Aquests són els primers números primers: 

{.text-center.s-teal} _{.n} 2_ , _{.n} 3_ , _{.n} 5_ , _{.n} 7_ , _{.n} 11_ , _{.n} [[13]]_ , _{.n} [[17]]_ , _{.n} [[19]]_ ,… 

---
> id: primes-2
> goals: p2 p3 p5 p7

Malauradament, els nombres primers no segueixen un patró simple ni una fórmula recursiva. De vegades apareixen directament l’un al costat de l’altre (es diuen [primes bessones](gloss:twin-primes) ) i, de vegades, hi ha grans llacunes entre elles. Sembla que es distribueixen gairebé de forma aleatòria! 

Els nombres primers tampoc tenen una representació geomètrica simple com un [número](gloss:square-numbers) [triangle](gloss:triangle-numbers) o [quadrat](gloss:square-numbers) , però amb una mica de treball podem revelar patrons interessants: 

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Si superem tots els múltiples de petits nombres enters, els nombres restants han de ser primers. Aquest mètode s’anomena [__tamís d’Eratòstenes__](gloss:sieve-eratosthenes) . 

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} Si dibuixem un gràfic que augmenta un 1 cada vegada que hi ha un nombre primer, obtenim una funció "esglaonada" amb propietats fascinants. 

:::

---
> id: primes-3

Podeu obtenir més informació sobre aquestes i altres propietats dels nombres primers del nostre curs sobre [Divisibilitat i Primes](/course/divisibility/primes) . Són alguns dels conceptes més importants i misteriosos de les matemàtiques. 

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Nombres perfectes 

Per determinar si un nombre és [primer](gloss:prime) , hem de trobar tots els seus [factors](gloss:factor) . Normalment _multiplicaríem_ aquests factors per obtenir el número original, però vegem què succeeix si _sumem_ tots els factors d’un nombre (excepte el número en si): 

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

Comparem aquests nombres amb la seva suma de factors: 

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

Per a la majoria dels nombres, la suma dels seus factors és [[menor | més gran que | igual a]] si mateix. Aquests nombres s’anomenen __números deficients__ . 

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

Per uns quants números, la suma dels seus factors és més gran que ella mateixa. Aquests números s’anomenen __nombres abundants__ . 

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Només un número de la llista anterior té una suma de factors que és _igual_ a si mateix: [[6]] . Això es diu un [__nombre perfecte__](gloss:perfect-numbers) . 

:::

---
> id: perfect-2

El següent número perfecte és 28, perquè si sumem tots els seus factors, obtindrem `1 + 2 + 4 + 7 + 14 = 28` . Després d'això, els nombres perfectes són molt més rars: 

{.text-center.s-purple.s-vertical.perfect-list.no-voice.no-voice} _{.n} 6_ , _{.n} 28_ , _{.n} 496_ , _{.n} 8.128_ , _{.n} 33.550.336_ , _{.n} 8.559.869.056_ , _{.n} 137.438.691.328_ , _{.n} 2.305.843.008.139.952.128_ , ... 

Observeu que tots aquests nombres són [[parells | múltiples de 3 | 2 més que un nombre quadrat]] . _{span.reveal(when="blank-0")} Resulta que també són nombres de triangles!_ 

---
> id: perfect-3

::: column.grow

Els números perfectes van ser estudiats per matemàtics grecs antics com [Euclides](bio:euclid) , [Pitàgores](bio:pythagoras) i [Nicòmac](bio:nicomachus) , fa més de 2000 anys. Van calcular els primers nombres perfectes i es van preguntar si n’hi podria haver _algun_ . 

Avui, els matemàtics han utilitzat ordinadors per comprovar els primers 10 <sup>1500</sup> números (és a dir un 1 seguit per 1500 zeros), però sense èxit: tots els números perfectes que van trobar eren parells. A dia d’avui, encara no se sap si hi ha algun nombre perfecte i estrany, convertint-lo en el problema més antic que no s’ha resolt en _totes les matemàtiques_ . 

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclides d’Alexandria 

:::

---
> id: hailstone

### La seqüència de la pedregada 

La majoria de les seqüències que hem vist fins ara tenien una sola regla o patró. Però no hi ha cap raó per la qual no podem combinar-ne diverses, com ara una fórmula recursiva com aquesta: 

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Comencem `x_1 = 5` i veure què passa: 

{.text-center.s-orange.with-arrows.no-voice} _{.n} 5_ , _{.n} [[16]] _{span.arrow} × 3 +1__ , _{.n} [[8]] _{span.arrow.reveal(when="blank-0")} ÷ 2__ , _{.n} [[4]] _{span.arrow.reveal(when="blank-1")} ÷ 2__ , _{.n} [[2]] _{span.arrow.reveal(when="blank-2")} ÷ 2__ , _{.n} [[1]] _{span.arrow.reveal(when="blank-3")} ÷ 2__ , _{.n} [[4]] _{span.arrow.reveal(when="blank-4")} × 3 +1__ , _{.n} [[2]] _{span.arrow.reveal(when="blank-5")} ÷ 2__ , _{.n} [[1]] _{span.arrow.reveal(when="blank-6")} ÷ 2__ , ... 

---
> id: hailstone-1

Sembla que després d’uns quants termes, la seqüència arriba a un “cicle”: 4, 2, 1 continuaran repetint-se una i altra vegada per sempre. 

Per descomptat, podríem haver escollit un punt de partida diferent, com ${n}{n|10|5,40,1} . Aleshores, la seqüència quedaria així: 

{.text-center.no-voice} _{span.var.s-orange(:html="hailstones(n)")}_ , _{span.s-red} _{.n} 4_ , _{.n} 2_ , _{.n} 1_ ,_ _{span.s-purple} _{.n} 4_ , _{.n} 2_ , _{.n} 1_ ,_ _{span.s-blue} _{.n} 4_ , _{.n} 2_ , _{.n} 1_ ,…_ 

---
> id: hailstone-2

Sembla que la longitud de la seqüència varia molt, però sempre acabarà en un cicle de 4, 2, 1, sense importar el primer número que triem. Fins i tot podem visualitzar els termes de la seqüència en un gràfic: 

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Observeu com alguns punts de partida acaben molt ràpidament, mentre que d’altres (com [31](action:set(31)) o [47](action:set(47)) ) fer més d’un centenar de passos abans d’arribar al 4, 2, 1 cicle. 

---
> id: hailstone-3

::: column.grow

Totes les seqüències que segueixen aquesta fórmula recursiva s’anomenen [__Hailstone Sequences__](gloss:hailstone-sequence) , perquè semblen moure’s de forma aleatòria amunt i avall abans d’arribar al cicle 4, 2, 1, igual que les pedres de grana que es desplacen amunt i avall en un núvol abans d’estavellar-se a la Terra. 

El 1937, el matemàtic [Lothar Collatz va](bio:collatz) proposar que _cada_ seqüència de pedra de calamars acabés amb un cicle de 4, 2, 1, qualsevol valor inicial que trieu. Ja heu comprovat uns quants punts d’inici més amunt i els ordinadors han provat tots els números fins a arribar `10^20` - això és 100.000 milions de milions o un 1 seguit de vint zeros. 

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

Tot i això, hi ha infinitat de nombres enters. És impossible comprovar cadascun d’ells i ningú ha estat capaç de trobar una [prova](gloss:proof) que funcioni per a tots. 

Igual que la recerca de nombres perfectes estranys, encara és un problema obert de les matemàtiques. És sorprenent que aquests senzills patrons de seqüències puguin donar lloc a preguntes que han mistificat fins i tot els millors matemàtics del món durant segles! 

---
> id: look-and-say

### La seqüència de mirades i dites 

Aquí teniu una seqüència més diferent de totes les que heu vist anteriorment. Podeu trobar el patró? 

{.text-center.s-lime.s-vertical} _{span.n} 1_ , _{span.n} 11_ , _{.n} 21_ , _{.n} 1211_ , _{.n} 111221_ , _{.n} 312211_ ,… 

_{button.next-step} Continuar_ 

---
> id: look-and-say-1

Aquesta seqüència s’anomena seqüència __Look-and-Say__ , i el patró és exactament el que diu el nom: comenceu amb un 1 i cada terme següent és el que obteniu si “llegeu en veu alta” l’anterior. Aquí teniu un exemple: 

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Ara podeu trobar els propers termes? 

{.text-center.s-lime.s-vertical} ..., _{.n} 312211_ , _{.n} [[13112221]]_ , _{.n} [[1113213211]]_ , ... 

---
> id: look-and-say-2

Aquesta seqüència s'utilitza sovint com a trencaclosques per desencadenar matemàtics, perquè el patró sembla completament no matemàtic. No obstant això, segons resulta, la seqüència té moltes propietats interessants. Per exemple, tots els termes acaben en [[1]] i no s’utilitza cap dígit superior a [[3]] . 

---
> id: look-and-say-3

El matemàtic britànic [John Conway va](bio:conway) descobrir que, independentment del nombre que trieu com a valor inicial, la seqüència es dividirà en diferents "seccions" que ja no interaccionen entre elles. Conway va anomenar aquest _teorema cosmològic_ i va nomenar les diferents seccions que utilitzaven els elements químics _Hidrogen_ , _Heli_ , _Liti_ , ..., fins a _Plutoni_ . 

---
> id: quiz

### El Test de seqüències 

Ara heu vist infinitat de seqüències matemàtiques diferents: algunes basades en formes geomètriques, algunes que segueixen fórmules específiques i altres que semblen comportar-se gairebé de forma aleatòria. 

En aquest qüestionari podeu combinar tots els vostres coneixements sobre seqüències. Només hi ha un objectiu: trobar el patró i calcular els dos termes següents. 

::: .box.f-blue

#### Cerqueu el número següent 

{.text-center.s-yellow.no-voice} _{span.n} 7_ , _{span.n} 11_ , _{.n} 15_ , _{.n} 19_ , _{.n} 23_ , _{.n} 27_ , _{.n} [[31]]_ , _{.n} [[35]]_ ,… _{span.pattern.reveal(when="blank-0 blank-1")} Patró: Sempre +4_ 

{.text-center.s-orange.no-voice} _{span.n} 11_ , _{span.n} 14_ , _{.n} 18_ , _{.n} 23_ , _{.n} 29_ , _{.n} 36_ , _{.n} [[44]]_ , _{.n} [[53]]_ ,… _{span.pattern.reveal(when="blank-2 blank-3")} Patró: +3, +4, +5, +6, ..._ 

{.text-center.s-red.no-voice} _{span.n} 3_ , _{span.n} 7_ , _{.n} 6_ , _{.n} 10_ , _{.n} 9_ , _{.n} 13_ , _{.n} [[12]]_ , _{.n} [[16]]_ ,… _{span.pattern.reveal(when="blank-4 blank-5")} Patró: +4, –1, +4, –1,…_ 

{.text-center.s-purple.no-voice} _{span.n} 2_ , _{span.n} 4_ , _{.n} 6_ , _{.n} 12_ , _{.n} 14_ , _{.n} 28_ , _{.n} [[30]]_ , _{.n} [[60]]_ ,… _{span.pattern.reveal(when="blank-6 blank-7")} Patró: × 2, +2, × 2, +2, ..._ 

{.text-center.s-blue.no-voice} _{span.n} 1_ , _{span.n} 1_ , _{.n} 2_ , _{.n} 3_ , _{.n} 5_ , _{.n} 8_ , _{.n} [[13]]_ , _{.n} [[21]]_ ,… _{span.pattern.reveal(when="blank-8 blank-9")} Patró: Nombres de Fibonacci_ 

{.text-center.s-teal.no-voice} _{span.n} 27_ , _{span.n} 28_ , _{.n} 30_ , _{.n} 15_ , _{.n} 16_ , _{.n} 18_ , _{.n} [[9]]_ , _{.n} [[10]]_ ,… _{span.pattern.reveal(when="blank-10 blank-11")} Patró: +1, +2, ÷ 2, +1, +2, ÷ 2, ..._ 

{.text-center.s-green.no-voice} _{span.n} 1_ , _{span.n} 9_ , _{.n} 25_ , _{.n} 49_ , _{.n} 81_ , _{.n} 121_ , _{.n} [[169]]_ , _{.n} [[225]]_ ,… _{span.pattern.reveal(when="blank-12 blank-13")} Patró: Nombres quadrats imparells_ 

:::

---

## Triangle de Pascal 

> section: pascals-triangle
> id: pascal-intro
> translated: auto

A continuació, es pot veure una piràmide de números que es crea mitjançant un patró simple: comença amb una sola "1" a la part superior, i cada cel·la següent és la suma de les dues cel·les directament a sobre. Passa el ratolí sobre algunes de les cel·les per veure com es calculen i, a continuació, empleneu les que falten: 

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

Aquest diagrama només mostrava les dotze primeres files, però podríem continuar per sempre, afegint noves files a la part inferior. Observeu que el triangle és [[simètric | d’angle dret | equilàter]] , que us pot ajudar a calcular algunes de les cèl·lules. 

---
> id: pascal-triangle

El triangle es diu [__triangle de Pascal__](gloss:pascals-triangle) , rebut el nom del matemàtic francès [Blaise Pascal](bio:pascal) . Va ser un dels primers matemàtics europeus a investigar els seus patrons i propietats, però va ser conegut per altres civilitzacions molts segles abans: 

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} El 450 aC, el matemàtic indi [Pingala va](bio:pingala) anomenar el triangle la __"Escala del Mont Meru"__ , batejada amb el nom d'una sagrada muntanya hindú. 

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} A l'Iran, era conegut com el __"triangle de Khayyam"__ (مثلث خیام), amb el nom del poeta i matemàtic persa [Omar Khayyám](bio:khayyam) . 

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} A la Xina, el matemàtic Jia Xian també va descobrir el triangle. Va rebre el nom del seu successor, __"El triangle de Yang Hui"__ (杨辉 三角). 

:::

El triangle de Pascal es pot crear utilitzant un patró molt senzill, però està farcit de patrons i propietats sorprenents. Per això ha fascinat matemàtics a tot el món durant centenars d’anys. 

_{button.next-step} Continuar_ 

---
> id: pascal-sequences

### Trobar seqüències 

A les seccions anteriors, heu vist infinitat de seqüències matemàtiques diferents. Resulta que moltes d’elles també es poden trobar al triangle de Pascal: 

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

####{.btn.yellow} _{span.check(when="blank-0")}_ 

Els números de la primera diagonal a banda i banda són tots [[únics | creixent | fins i tot]] . 

::: tab

####{.btn.orange} _{span.check(when="blank-1")}_ 

Els nombres de la segona diagonal a banda i banda són els [[nombres enters | primes | números quadrats]] . 

::: tab

####{.btn.red} _{span.check(when="blank-2")}_ 

Els números de la tercera diagonal a banda i banda són els [[números]] del [[triangle | números quadrats | Nombres de Fibonacci]] . 

::: tab

####{.btn.purple} _{span.check(when="blank-3")}_ 

Els nombres de la quarta diagonal són els [[nombres tetraèdrics | números cúbics | potències de 2]] . 

::: tab

####{.btn.blue} _{span.check(when="blank-4")}_ 

Si sumem tots els números seguits, les seves sumes formen una altra seqüència: les [[potències de dos | números perfectes | nombres primers]] . 

::: tab

####{.btn.teal} _{span.check(when="blank-5")}_ 

A cada fila que tingui un nombre prim a la seva segona cel·la, tots els números següents són [[múltiples | factors | les inverses]] d’aquest primer. 

::: tab

####{.btn.green} _{span.check(when="blank-6")}_ 

El diagrama de dalt destaca les diagonals "poc profundes" de diferents colors. Si sumem els nombres a cada diagonal, obtenim els [[nombres de Fibonacci | Nombres de calamarsa | seqüència geomètrica]] . 

:::

---
> id: pascal-sequences-1

Per descomptat, cadascun d’aquests patrons té una raó matemàtica que explica per què apareix. Potser en trobeu alguns! 

Una altra pregunta que us podeu fer és la freqüència amb què apareix un número al triangle de Pascal. És evident que hi ha infinites moltes un, un 2 i tots els altres apareixen [[almenys dues vegades | al menys un cop | exactament dues vegades]] , _{span.reveal(when="blank-0")} a la segona diagonal a banda i banda._ 

---
> id: pascal-sequences-2

Alguns números al mig del triangle també apareixen tres o quatre vegades. Fins i tot n’hi ha algunes que apareixen sis vegades: es poden veure tant [120](->.s120) com [3003](->.s3003) quatre vegades al triangle de dalt i apareixeran dues vegades més cadascuna a les files 120 i 3003. 

Com que 3003 és un número de triangle, en realitat apareix dues vegades més a les _terceres_ diagonals del triangle, fet que fa vuit ocurrències en total. 

No se sap si hi ha altres números que apareixen vuit vegades al triangle o si hi ha números que apareixen més de vuit vegades. El matemàtic nord-americà [David Singmaster va](bio:singmaster) plantejar la hipòtesi que hi ha un límit fix en la freqüència amb què es poden aparèixer nombres al triangle de Pascal, però encara no s'ha demostrat. 

---
> id: modular
> goals: select

### Divisibilitat 

Alguns patrons del triangle de Pascal no són tan fàcils de detectar. Al diagrama següent, ressalteu totes les cel·les parelles: 

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

{.reveal(when="select")} Sembla que el nombre parell del triangle de Pascal forma un altre [[triangle]] més petit [[| matriu | quadrat]] . 

---
> id: modular-1
> goals: c2 c3 c4 c5

Pintar cada cel·la manualment triga molt, però aquí podeu veure què passa si ho faríeu durant moltes més files. I què passa amb les cel·les divisibles per altres nombres? 

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

Uau! Les cel·les de colors sempre apareixen en [[triangles | quadrats | parells]] (excepte algunes cel·les simples, que es podrien veure com a triangles de mida 1). 

Si continuem el patró de cèl·lules divisibles per 2, obtenim una que és molt semblant al __triangle de Sierpinski__ a la dreta. Formes com aquesta, que consisteixen en un patró senzill que sembla continuar per sempre mentre es fan cada cop més petits, s’anomenen [__fractals__](gloss:fractal) . En el futur en sabreu més ... 

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Coeficients binomials 

De la qual hem de parlar una propietat més important del triangle de Pascal. Per entendre-ho, intentarem resoldre el mateix problema amb dos mètodes completament diferents i, a continuació, veurem com es relacionen. 

{.todo} PRÒXIMAMENT 

---

## Límits i Convergència 

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} PRÒXIMAMENT 

    
    
    
    
    
    
    
    
    
    
    
