# Divizibilitate și Numere Prime

## Factori și Multipli

> section: factors-and-multiples
> id: divisibility1
> color: "#1AA845"
> level: Foundations

Acum sunteți deja familiari cu adunarea, scăderea și înmulțirea numerelor întregi. 
Împărțirea este ușor diferită, pentru că nu putem împărți întotdeauna un număr întreg
la oricare altul. De exemplu, 17 împărțit la 3 nu este un număr întreg - este
undeva între 5 și 6. Fie dăm un rezultat cu rest (2), fie dăm răspunsul sub
forma unui număr zecimal (5.66…).

    .row.padded
      .grow
        include svg/divisibility-1.svg
        p.caption 12 este divizibil cu 3
      .grow
        include svg/divisibility-2.svg
        p.caption 10 nu este divizibil cu 4

Dacă putem împărți un număr __{.red}A__ la un număr __{.blue}B__, fără
rest, spunem ca __{.blue}B__ este un __factor__ (sau __divizor__) al lui
__{.red}A__, iar __{.red}A__ este un __multiplu__ al lui __{.blue}B__.
Se notează __{.blue}B__|__{.red}A__, unde bara verticală înseamnă _“divide pe”_.

De exemplu, __{.green}7__ × 3 = __{.orange}21__, așadar __{.green}7__ este un
[[divizor|multiplu]] al lui __{.orange}21__. Asemănător, __{.orange}21__ este [[multiplu|divizor]]
de __{.green}7__ și putem scrie __{.green}7__|__{.orange}21__.

---
> id: divisibility-game

În acest scurt joc trebuie să determini cât de repede posibil care numere sunt divizori și care multipli.
Apasă [butonul play](->#divisibility-game_.toggle) pentru a începe.

::: .box.f-blue.no-padding
#### Chestionar Divizori și Multipli

    x-gameplay
      .factors-row
        .factor-number ${x}
        | este un
        .factor-value
          .factor-bubble: .btn.btn-blue divizor
          .factor-bubble: .btn.btn-blue multiplu
          .factor-bubble: .btn.btn-blue niciunul
        | al lui
        .factor-number ${y}

:::

---
> id: factors

Adesea este util să găsim _toți_ divizorii unui număr. De exemplu,
divizorii lui 60 sunt 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 și 60.

Bineînțeles că nu dorim să verificăm toate numerele până la 60 pentru
a afla dacă sunt divizori. În schimb, există o tehnică simplă care se bazează
pe faptul că divizorii apar mereu în [[perechi|triplete|jumătăți]].

---
> id: factors1

În cazul lui 60 avem 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 =
6 × 10. Sau, folosind o notație diferită,

    include mixins
    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

Pentru a afla toți divizorii unui număr începem de la ambele capete ale acestei liste
până ajungem la mijloc.

---
> id: factors2

    include mixins
    x-slideshow
      .stage(slot="stage")
        +divisor-table([1, 2, 3, 6, 7, 14, 21, 42], [3, 2, 1, 0])
      .legend(slot="legend") De exemplu, prima pereche de divizori ai lui 42 este 1 și 42 și îi scriem lăsând mult spațiu între ei.
      .legend(slot="legend") După 1 de la început, verificăm dacă 2 divide pe 42. Divide, iar perechea corespondentă este 42 ÷ 2 = 21.
      .legend(slot="legend") Apoi, verificăm dacă 3 divide pe 42. Divide, iar perechea corespondentă este 42 ÷ 3 = 14.
      .legend(slot="legend") Acum verificăm dacă 4 divide pe 42. Nu divide, așa că mergem mai departe.
      .legend(slot="legend") Nici 5 nu divide pe 42 așa că mergem mai departe.
      .legend(slot="legend") 6 divide pe 42. Perechea sa este 42 ÷ 6 = 7. Iată cum am ajuns la mijloc după doar câteva încercări, fără a fi necesar să testăm toate numerele de la 7 până la 42.

Singurul caz special al acestei metode apare la numerele pătrate perfecte: în acest caz, punctul de întâlnire din mijloc este un singur număr, precum 64 = 8 × 8.

---

## Criterii de Divizibilitate

> id: divisibility2
> section: rules

Există câteva criterii diferite care pot ușura surprinzător de mult verificarea dacă
un număr este divizibil cu altul. În acest capitol vom arunca o privire asupra
câtorva dintre acestea...

### Criteriul de divizibilitate cu 2 și 5

Orice număr este divizibil cu 1. Pentru a determina dacă un număr este divizibil cu 2
trebuie doar să verificăm dacă este un număr par: orice număr care se termină în
0, 2, 4, 6, sau 8 este divizibil cu 2.

    include mixins
    +grid(30)

---
> id: divisibility5

Pentru a afla dacă un număr este divizibil cu 5 trebuie să verificăm, în mod similar,
că ultima sa cifră este 0 sau 5:

    include mixins
    +grid(30)

---
> id: divisibility5a

Aceste criterii de divizibilitate cu 2 și 5 sunt atât de simple mulțumită sistemului nostru de numerație.
Baza sistemului nostru de numerație este 10, ceea ce înseamnă că fiecare poziție a unui număr indică
o valoare de 10 ori mai mare decât urmatoarea poziție din dreapta. De exemplu,
daca luăm numărul 6382,

    table.base-10.base-10-fixed
      tr.base-10-large
        td: strong 6
        td: strong 3
        td: strong 8
        td: strong 2
      tr.caption
        td: | =6000
        td: | =300
        td: | =80
        td: | =2

Acum putem separa ultima cifră a unui număr de toate celelalte cifre ale sale:

    table.table-tiny
      tr.base-10-large
        td #[strong.m-red abc]#[strong.m-green d]
        td: | =
        td #[strong.m-red abc × 10]
        td +
        td #[strong.m-green d]
      tr.caption
        td #[strong.m-red 638]#[strong.m-green 2]
        td: | =
        td #[strong.m-red 638 × 10]
        td +
        td #[strong.m-green 2]

2 și 5 sunt divizori ai lui 10, așadar ei vor [[divide mereu pe|nu vor divide niciodată pe|vor divide uneori pe]]
__{.m-red}abc × 10__, indiferent ce valoare au __{.m-red}a__, __{.m-red}b__
și __{.m-red}c__. De aceea, avem nevoie să verificăm doar ultima cifră: dacă
__{.m-green}d__ este divizibil cu 2 atunci [[numărul întreg|abc]] este, de asemenea,
divizibil cu 2. Dacă __{.m-green}d__ este divizibil cu 5 atunci numărul întreg este divizibil cu 5.

---
> id: divisibility4b

Cel mai simplu criteriu este criteriul de divizibilitate cu 10: avem nevoie să verificăm doar dacă
[[ultima cifra e 0|prima cifră e 1|ultima cifră e pară]].

---
> id: divisibility4

### Criteriul de divizibilitate cu 4 și 8

Din păcate, 4 nu divide pe 10, așa că nu putem să ne uităm doar la ultima cifră –
dar 4 _divide pe_ 100, așa că trebuie doar să modificăm ușor regula de deasupra.
Acum scriem __{.m-red}ab__**{.m-green}cd** = __{.m-red}ab × 100__ +
__{.m-green}cd__. Știm că 4 va divide mereu pe __{.m-red}ab × 100__, așa că trebuie
să ne uităm la ultimele [[două]] cifre pentru a verifica dacă un număr este divizibil cu 4.

De exemplu, __{.m-green}24__ este divizibil cu 4, deci __{.m-red}2735__**{.m-green}24**
[[este mereu|nu este]] divizibil cu 4, pe când __{.m-green}18__ nu este divizibil cu 4, deci
__{.m-red}1947__**{.m-green}18** [[nu este nici el|este și el]] divizibil cu 4.

---
> id: divisibility4a

Criteriul de divizibilitate cu 8 devine și mai dificil, pentru că 100 nu este
divizibil cu 8. În schimb, trebuie să urcăm până la [[1000|800|108]] și să ne uităm la
ultimele [[trei]] cifre ale unui număr.

De exemplu, __{.m-green}120__ este divizibil cu 8, deci
__{.m-red}271__**{.m-green}120** este, de asemenea, divizibil cu 8.

---
> id: divisibility3a

### Criteriul de divizibilitate cu 3 și 9

Criteriul de divizibilitate cu 3 este destul de dificil. 3 nu divide pe 10 și nici pe
100, 1000 sau oricare altă putere a lui 10. Nu ne va ajuta să ne uităm doar la ultimele
câteva cifre ale unui număr.

În schimb, trebuie să folosim __suma cifrelor__ unui număr, care este pur și simplu
suma tuturor cifrelor sale individuale. De exemplu, suma cifrelor lui ${13×n+123}{n|3|0,20,1}
este ${digitSumString(123+13×n)} = ${digitSum(123+13×n)} și suma cifrelor lui 3524
este [[14]].

---
> id: divisibility3b

    include mixins
    +grid(40, function(n) { if (!(n % 3)) { var s = '' + n; return +s[0] + (+s[1] || 0); } })

Aici am subliniat toate numerele care sunt multiplu de trei. Se poate observa
că suma cifrelor lor este mereu [[un multiplu de 3|0 sau 3|numere impare]].

{.reveal(when="blank-0")} Așadar, pentru a determina dacă un număr oarecare este
divizibil cu 3, avem nevoie să calculăm suma cifrelor sale și să verificăm dacă
rezultatul este divizibil cu 3.

---
> id: divisibility9

Hai să ne uităm în continuare la multiplii lui 9:

    .number-grid
      for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .number-cell.yellow= x*9
          .number-badge= (x == 11 ? 18 : 9)

Așadar, pentru toate numerele divizibile cu 9, suma cifrelor
[[este|nu este]] divizibilă cu 9. _{span.reveal(when="blank-0")}De exemplu,
suma cifrelor lui 4752 este [[18]], deci 4752 [[este|nu este]] divizibilă cu 9._

---
> id: divisibility9a

Bineînțeles că aceste reguli interesante pentru numerele divizibile cu 3 sau 9
trebuie să aibă o explicație - și la fel ca mai înainte are de-a face cu
sistemul nostru de numerație în baza 10. După cum am văzut, scrierea numărului
__{.m-red}6__**{.m-blue}3**__{.m-green}8__**{.m-yellow}4**

înseamnă de fapt

{.text-center} __{.m-red}6 × 1000__ + __{.m-blue}3 × 100__ + __{.m-green}8 × 10__ + __{.m-yellow}4__.

Putem sparge fiecare din aceste produse în două părți:

{.text-center} __{.m-red}*{span.digit-sum-else}6 × 999* + *{span.digit-sum-is}6*__ +
__{.m-blue}*{span.digit-sum-else}3 × 99* + *{span.digit-sum-is}3*__ +
__{.m-green}*{span.digit-sum-else}8 × 9* + *{span.digit-sum-is}8*__ +
__{.m-yellow.digit-sum-is}4__.

Bineînțeles că __{.m-green}9__, __{.m-blue}99__, __{.m-red}999__ și așa mai departe
sunt mereu divizibile cu 3 (sau cu 9). Ne mai rămâne doar sa verificăm că ce a mai
rămas este de asemenea divizibil cu 3 (sau cu 9):

{.text-center} __{.m-red}6__ + __{.m-blue}3__ + __{.m-green}8__ + __{.m-yellow}4__

Aceasta este totodată și suma cifrelor! Deci, dacă [{.no-margins}suma cifrelor](->.digit-sum-is)
este multiplu de 3 și știm că [{.no-margins}restul](->.digit-sum-else) e multiplu de 3, atunci
rezultatul va fi și el un multiplu de 3.

---
> id: divisibility6
> goals: btn2 btn3

### Criteriul de divizibilitate cu 6

Până acum am omis numărul 6, dar deja am trecut greul.
Să ne amintim că 6 = 2 × 3.

    include mixins
    +grid(40)
    p.btn-row.text-center(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") Arată multiplul lui 2
      button.btn.btn-small(data-display="visibility") Arată multiplul lui 3

Pentru a verifica dacă un număr este divizibil cu 6, trebuie doar să verificăm dacă
este divizibil cu 2 [[și|sau]] 3. De reținut că această regulă funcționează
pentru 6, dar cu siguranță nu pentru _orice_ număr care este produsul a două numere.
Mai multe despre toate acestea mai târziu…

---

## Numere Prime

> id: primes
> section: primes

Atunci când calculăm perechile de divizori, se poate întâmpla ca un număr să nu aibă
niciun divizor cu excepția primei perechi. Un exemplu este 13 - singurii săi divizori sunt
doar 1 și 13. Aceste numere speciale se numesc _numere prime_. Ele nu pot fi descompuse
sub forma unui produs de numere mai mici, iar asta le face, într-un fel sa fie “atomii numerelor”.

Să observăm că 1 _nu_ este număr prim, așa că primele numere prime sunt
2, 3, 5, 7, 11, 13, …

---
> id: primes1

Orice număr ce nu este prim poate fi scris sub forma unui produs de numere prime:
pur și simplu continuăm să-l împărțim de mai multe ori până când toți factorii
sunt primi. De exemplu,

    table.table-tiny
      tr
        td(colspan=4)
        td: .number-ball.legs.b.a 84
      tr
        td(colspan=2)
        td: .number-ball.blue 2
        td(colspan=3) ×
        td: .number-ball.blue.legs.b 42
      tr
        td(colspan=4)
        td: .number-ball.green 2
        td(colspan=2) ×
        td: .number-ball.green.legs(style="margin: 0 -10px") 21
      tr.td-border-bottom
        td(colspan=6)
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7
      tr
        td: .number-ball 84
        td: | =
        td: .number-ball.blue 2
        td ×
        td: .number-ball.green 2
        td ×
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7

2, 3 și 7 sunt numere prime și nu se mai pot împărți. Produsul 2 × 2 × 3 × 7
se numește __descompunerea în factori primi__ a lui 84, iar 2, 3 și 7
sunt __factorii primi__. De observat că unele numere prime, precum 2 în acest caz,
poate apărea de mai multe ori într-o descompunere în factori primi.

Orice număr întreg se poate descompune în factori primi și nu există două numere întregi
care să aibă aceeași descompunere în factori primi. Mai mult de atât, orice număr întreg
poate fi exprimat în mod unic ca produs de numere prime. Aceasta se numește
__Teorema Fundamentală a Aritmeticii__ (TFA).

Folosirea TFA poate simplifica multe probleme de matematică: descompunem numerele în
factori primi, rezolvăm problema pentru numerele prime individuale, care
adesea poate fi mult mai ușoară, iar apoi combinăm aceste rezultate pentru a rezolva
problema inițială.

---
> id: eratosthenes

### Ciurul lui Eratostene

S-a dovedit că poate fi destul de dificil de determinat dacă un număr este prim: trebuie
să găsim mereu _toți_ factori săi primi, ceea ce devine din ce în ce mai dificil
pe măsură ce numerele cresc. În schimb, matematicianul grec
[Eratostene din Cyrene](bio:eratosthenes) a găsit un algoritm simplu de aflare
a tuturor numerelor prime până la 100: the __Ciurul lui Eratostene__.

    include mixins
    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") Scriem întâi toate numerele până la 100.
      .legend(slot="legend") Știm că 1 nu este număr prim, așa că îl ștergem.
      .legend(slot="legend") Cel mai mic număr prim este #[strong.m-red 2]. Oricare multiplu al lui 2 nu poate fi număr prim, deoarece 2 este factorul lui. Prin urmare, putem tăia toți multiplii lui 2.
      .legend(slot="legend") Următorul număr de pe lista noastră este #[strong.m-blue 3] – tot un număr prim. Toți multiplii lui 3 nu pot fi numere prime, deoarece 3 este factorul lor. Prin urmare, îi putem tăia și pe aceștia la fel de bine.
      .legend(slot="legend") Următorul număr, 4, este deja tăiat, așa că trecem la #[strong.m-green 5]: este număr prim și tăiem din nou toți multiplii lui 5.
      .legend.md(slot="legend") Următorul număr prim trebuie să fie [[7]], căci 6 este tăiat. Încă o dată, tăiem toți multiplii săi.
      .legend.md(slot="legend") Următorul număr prim [[11]]. Observă, însă, că toți multiplii săi sunt [[deja tăiați|multiplii de 3]]. Același lucru este valabil pentru toate celalalte numere rămase. Prin urmare, toate aceste numere rămase trebuie să fie prime.

Acum putem număra că sunt în total [[25]] de numere prime mai mici ca 100.

---
> id: primes3

### Câte numere prime există?

::: column.grow
Bineînțeles că putem folosi Ciurul lui Eratostene pentru a calcula numere prime mai mari.
Sunt 21 de numere prime între 100 și 200, 16 numere prime între 200 și 300,
17 numere prime între 400 și 500 and doar 11 numere prime între 10.000 și 10.100.

Numerele prime par să se dispereze din ce în ce mai mult, dar se termină vreodată șirul lor?
Există un _cel mai mare_ sau un _ultim_ număr prim?

Matematicianul grec [Euclid din Alexandria](bio:euclid) a fost primul care a demonstrat
că există o infinitate de numere prime, folosind următorul raționament:
::: column(width=220)

    x-img(lightbox width=220 height=300 src="images/euclid.jpg" alt="Euclid of Alexandria Portrait")

:::

    ol.proof
      li Să presupunem că șirul numerelor prime este finit.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li Să le înmulțim pe toate împreună pentru a obține un număr foarte mare pe care îl vom nota #[em N].
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li Acum hai să ne gândim la #[em N] + 1. Orice număr prim care divide pe #[em N] nu poate să-l dividă și pe #[em N] + 1. Având în vedere că toate numerele prime găsite până acum îl divid pe #[em N], niciunul din acestea nu poate să-l dividă și pe #[em N] + 1.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md Conform [Teoriei Fundamentale a Aritmeticii](gloss:fta) #[em N] + 1 trebuie să aibă un factor prim. Fie #[em N] + 1 este el însuși prim, fie există un alt număr prim nou  #[em P’] care-l divide pe #[em N] + 1.
        .text-center #[em.number-ball.green P’] #[span.divides] #[em.number-ball N] + 1
      li În ambele cazuri am găsit un nou număr prim care nu se află în lista noastră inițială, dar am presupus ca #[em toate] numerele prime se aflau în această listă.
      li Cu siguranță că ceva nu e în regulă! Dar, având în vedere că pașii #[span.proof-step 2]–#[span.proof-step 4] erau mai mult ca sigur valizi, singura posibilitate este că presupunerea noastră inițială din pasul #[span.proof-step 1] a fost greșită. Așadar, există o infinitate de numere prime.

---
> id: primes4

Explicația lui Euclid este unul din primele exemple din istorie al unei
__demonstrații__ matematice formale – un agument logic prin care se dovedește
că trebuie să fie adevărat. Acest exemplu se numește adesea
__demonstrație prin reducere la absurd__: pornim de la o presupunere, deducem ceva
imposibil și astfel știm că propria noastră presupunere trebuie să fie incorectă.

---

## Distribuția Numerelor Prime

> id: prime-test
> goals: calculator
> section: distribution-of-primes

Cea mai simpla metodă de a verifica dacă un număr este prim este să încerci sa-l
împarți la toate numerele întregi mai mici decât el. Calculatoarele pot face asta
foarte rapid și eficient. Pentru numere _foarte mari_, cu sute de cifre, există
algoritmi mai eficienți. Unii dintre aceștia folosesc chiar și probabilități pentru
a determina dacă un număr este _aproape sigur prim_.

Iată un calculator care îți permite să verifici daca un număr oarecare e prim:

    .calculator
      h3 Verificator de Numere Prime
      input(type="number" min="2")
      .result.var(:html="result")

---
> id: prime-test-1

::: column.grow

Oamenii au încercat de-a lungul timpului să găsească numere prime din ce în ce mai mari.
În anul 1460, cel mai mare număr prim cunoscut era 131.071. În 1772, [Leonard Euler](bio:euler)
a arătat că și 2.147.483.647 este prim.

O dată cu sosirea calculatoarelor în secolul 20, calcularea numerelor prime mari
a devenit mult mai ușoară. Cel mai mare număr prim cunoscut la ora actuală a fost descoperit
în decembrie 2018 și are 24.862.048 cifre. Am avea nevoie de 8000 de foi de hârtie pentru a-l tipări!

::: column(width=300)

    img(src="images/network.jpg" width=300 height=200)

{.caption} GIMPS (_Great Internet Mersenne Prime Search_) este un proiect colaborativ în care volunarii
pot găsi numere prime folosind software gratuit.

:::

---
> id: prime-generator
> goals: calculator

Calculul acestor numere prime mari ar putea părea a fi doar o pierdere de timp, dar mai târziu vei învăța
în acest curs despre variatele aplicatii din viața reală în care calculatoarele au nevoie să folosească
numere prime mari.

Aici poți genera propriile tale numere prime cu un număr dat de cifre:

    .calculator
      h3 Generator de Numere Prime
      p.md Numar cifre: ${d}{d|6|2,16,1}
      p(style="margin: 10px 0"): button.btn.btn-white Generează
      .result.var(:html="result")

---
> id: ulam

### Spirala Ulam

Matematicianul polonez [Stanisław Ulam](bio:ulam) a descoperit o metodă  grozavă
de a arăta ddistribuția numerelor prime mari în timp ce mâzgălea pe când se afla la
o ședință _“lungă și foarte plictisitoare”_ din anul 1963.

    .number-grid.ulam-grid
      for x in [37, 36, 35, 34, 33, 32, 31]
        .number-cell(data-display="visibility")= x
      for x in [38, 17, 16, 15, 14, 13, 30]
        .number-cell(data-display="visibility")= x
      for x in [39, 18,  5,  4,  3, 12, 29]
        .number-cell(data-display="visibility")= x
      for x in [40, 19,  6,  1,  2, 11, 28]
        .number-cell(data-display="visibility")= x
      for x in [41, 20,  7,  8,  9, 10, 27]
        .number-cell(data-display="visibility")= x
      for x in [42, 21, 22, 23, 24, 25, 26]
        .number-cell(data-display="visibility")= x
      for x in [43, 44, 45, 46, 47, 48, 49]
        .number-cell(data-display="visibility")= x

Notăm toate numerele întregi într-o grilă dreptunghiulară, începând cu 1 în mijloc
și apoi mergând în spirală spre exterior. Apoi subliniem toate numerele prime.

---
> id: ulam1

Momentan, spirala Ulam nu pare deosebit de interesantă. Dar, dacă o mărim,
apar modele interesante. Iată numerele prime până la 160.000:

    figure: img(src="images/ulam.png" width=399 height=399)

::: column.grow
În loc să apară în mod aleator, așa cum ne-am putea aștepta, pare că anumite
diagonale conțin mai multe numere prime ca altele. Se crează astfel un model
"în carouri" interesant.

_{.lgrey}Se dovedește că toate aceste diagonale corespund anumitor ecuații de gradul
al doilea care par să genereze numere prime mai des decât media. Cu toate acestea
nu se știe de ce se întâmplă așa._

::: column(width=200)

    x-img(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg" alt="Scientific American Magazine Cover")

{.caption} Coperta revistei Scientific American din Martie 1964
:::

---
> id: goldbach1
> goals: calculator

### Conjectura lui Goldbach

În anul 1742, matematicianul german [Christian Goldbach](bio:goldbach) a făcut
o descoperire interesantă: el a observat că toate numerele întregi pare (cu excepția lui 2)
pot fi scrise ca sumă a două numere prime. De exemplu, 8 = 5 + 3 and 24 = 13 + 11.
Acest lucru este destul de surprinzător, deoarece numerele prime sunt determinate folosind
înmulțirea și divizorii - și nu ar trebui să aibă prea mult de-a face cu adunarea.

    .calculator
      h3 Calculatorul Goldbach
      p Alege un număr par oarecare pentru a calcula cum#[br]se poate scrie ca sumă a două numere prime.
      input(type="number", min=4, step=2)
      .result.var(:html="result")

Goldbach a scris despre constatarea sa într-o scrisoare adresată faimosului matematician
[Leonhard Euler](bio:euler), dar niciunul din cei doi nu a putut să o demonstreze.
A devenit cunoscută drept __Conjectura lui Goldbach__.

Calculatoarele au verificat că această Conjectură a lui Goldbach funcționează pentru
orice număr par până la 4 × 10<sup>18</sup> (un 4 urmat de 18 zerouri), dar matematicienii
nu au demonstrat încă faptul că ea functionează pentru _toate_ numerele întregi pare.
Si asta constituie o diferență mare pentru că există o infinitate de numere întregi,
așa că nu am avea cum să le verificăm pe toate.

Simplitatea aparentă a acestei conjecturi a făcut ca ea să fie una din cele mai faimoase
probleme nerezolvate din matematică.

---
> id: twin-primes

### Numere Prime Gemene

Am văzut deja că numerele prime se distanțeaza tot mai mult pe măsură ce devin mai mari.
Dar ele par să apară mereu complet aleator și ocazional găsim două numere prime
alăturate, la doar un număr distanță: acestea se numesc __Numere Prime Gemene__.

    p.text-center
      span.twin
        span.number-ball 3
        span.number-ball 5
      | ,
      span.twin
        span.number-ball.blue 11
        span.number-ball.blue 13
      | ,
      span.twin
        span.number-ball.green 41
        span.number-ball.green 43
      | ,
      span.twin
        span.number-ball.yellow 101
        span.number-ball.yellow 103
      | ,
      span.twin
        span.number-ball 2027
        span.number-ball 2029
      | ,
      span.twin
        span.number-ball.blue 108,377
        span.number-ball.blue 108,379
      | ,
      span.twin
        span.number-ball.green 1,523,651
        span.number-ball.green 1,523,653

Cea mai mare pereche cunoscută de numere prime are 58.711 cifre! Dar există oare
o infinitate de numere prime gemene, așa cum există o infinitate de numere prime?
Nu se știe – _Conjectura Numerelor Prime Gemene_ este o altă problemă nerezolvată
cu privire la numerele prime.

---
> id: riemann
> goals: zoom
> title: Distribution of the Primes

### Ipoteza Riemann

Matematicienii au explorat timp de multe secole modelul și distribuția
numerelor prime. Acestea par să apară complet aleator - uneori există spații
mari între numerele prime consecutive, iar alteori găsim
[numere prime gemene](gloss:twin-primes) unul lângă altul.

Pe când avea doar 15 ani, matematicianul german [Carl Friedrich Gauss](bio:gauss)
a avut o idee inovatoare: el a numărat numerele prime până la un anume punct și
a pus rezultatele într-un grafic:

    figure(style="max-width:680px; position:relative;")
      svg(width=680 height=300 viewBox="0 0 680 300")
        line.axis(x1=0 y1=280 x2=680 y2=280)
        g.chart
          path.pi(fill="none" stroke="#0f82f2")
          path.log(fill="none" stroke="#cd0e66")
          g.small-primes
        g.numbers
      .zoom-icon: svg(viewBox="0 0 32 32" class="icon" width=32 height=32)
        use(xlink:href="/icons.svg#search")

De-a lungul axei X se pot vedea toate numerele întregi. La fiecare număr prim
_{span.m-blue}Funcția de Numărare a Numerelor Prime_ (marcată cu __{.m-blue}albastru__) crește cu 1.
Pe măsură ce [micșorăm](->#riemann_.zoom-icon), linia albastră devine foarte uniformă.
Gauss a observat că graficul acestei funcții este foarte similar cu cel al funcției
_{span.m-red}`x/(log(x))`_ (marcat cu __{.m-red}roșu__). El a prezis că cele două
funcții sunt mereu “aproximativ similare”, iar aceasta s-a demonstrat în anul 1896.

---
> id: riemann1
> title: The Riemann Hypothesis

Cu toate acestea, după cum am văzut mai sus, încă există o abatere semnificativă între numărul
actual de numere prime și aproximarea lui Gauss. În 1859, matematicianul
[Bernhard Riemann](bio:riemann) a descoperit o aproximare mult mai bună, dar nu a putut dovedit
că aceasta se aplică _mereu_. Ideea sa a devenit cunoscută sub numele de __Ipoteza Riemann__.

Sute de matematicieni au incercat să demonstreze ipoteza lui Riemann, dar toate încercările
au fost fără succes. Este adesea considerată una din cele mai dificile și importante probleme
nerezolvate din matematică. În anul 2000, Institutul de Matematică Clay a numit-o
una din cele șapte [__Probleme de Premiul Mileniului__](gloss:millennium-prize)
și a promit să acorde $1.000.000 oricărui matematician care o rezolvă.

---

## Cel Mai Mic Multiplu Comun

> id: race
> goals: race
> section: lcm

Doi alergători se antrenează pe o pistă de alergare de formă circulară.
__{.m-blue}Primul alergător__ face un tur în __{.m-blue}60__ de secunde.
__{.m-green}Al doilea alergător__ face un tur în doar __{.m-green}40__ de secunde.
Dacă ambii pornesc în același timp de la linia de start, când se vor întâlni
din nou la start?

    figure: include svg/race.svg

---
> id: race1

Această intrebare chiar nu este despre geometria pistei de alergare sau despre
viteză - este despre multipli și divizibilitate.

Primul alergător trece linia de start după 60s, 120s, 180s, 240s, ș.a.m.d.
Aceștia sunt pur și simplu [[multiplii|factorii]] lui __{.m-blue}60__. Al doilea
alergător trece linia de start după 40s, 80s, 120s, 160s, ș.a.m.d. Primul moment când
ambii alergători se află din nou la linia de start este după [[120]] seconds.

{.reveal(when="blank-0 blank-1")} Rezultatul găsit este cel mai mic număr care este și
multiplul lui __{.m-green}40__ și multiplul lui __{.m-blue}60__.
Acesta se numește __cel mai  mic multiplu comun__ sau __cmmmc__.

---
> id: race2

Pentru a afla cmmmc pentru două numere oarecare, este important să ne dăm seama că dacă
__{.m-yellow}a__ divide pe __{.m-blue}b__, atunci __{.m-blue}b__  are nevoie să conțină
toți factorii primi ai lui __{.m-yellow}a__ (plus  alți câțiva):

    table.table-tiny
      tr
        td.text-right: .number-ball.yellow 12
        td: .divides
        td.text-left: .number-ball.blue 60
      tr
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
        td
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
          | &nbsp;×&nbsp;
          .number-ball.l-blue 5

Se verifică ușor: dacă un factor prim divide pe __{.m-yellow}a__ și
__{.m-yellow}a__ divide pe __{.m-green}b__, atunci acel factor prim divide _și el_ pe __{.m-green}b__.

---
> id: race3

Pentru a afla cmmmc pentru __{.m-green}40__ și __{.m-blue}60__, avem nevoie să facem
mai întâi [descompunerea în factori primi](gloss:factorisation) a ambelor numere:

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

Să presupunem că __{.m-red}X__ este cmmmc al lui __{.m-green}40__ și al lui __{.m-blue}60__.
Atunci __{.m-green}40__ divide pe __{.m-red}X__, deci _{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}2_ și
_{span.number-ball.small.l-blue}5_ sunt factorii primi ai lui __{.m-red}X__. De asemenea,
__{.m-blue}60__ divide pe __{.m-red}X__, deci __{span.number-ball.small.l-green}2__,
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ și
_{span.number-ball.small.l-green}5_ sunt factorii primi ai lui __{.m-red}X__.

---
> id: race4

Pentru a afla __{.m-red}X__, vom combina pur și simplu toți factorii primi ai lui __{.m-green}40__
și ai lui __{.m-blue}60__, dar vom utiliza duplicatele o singură dată:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

Rezultă că __{.m-red}X__ = 120, exact cum s-a văzut mai sus. De observat că dacă un factor prim
apare de mai multe ori, precum 2 mai sus, avem nevoie să pastrăm numărul maxim de apariții
într-unul din cele două numere (de 3 ori în __{.m-green}40__ este mai mult decât de 2 ori
în __{.m-blue}60__).

---
> id: race5

Acum avem o metodă simplă de calculare a cmmmc a două numere:

    ol.proof
      li Descompune în factori primi fiecare număr.
      li Combină toți factorii primi, dar numără duplicatele o singură dată.

Putem folosi aceeași metodă pentru a calcula cmmmc pentru trei sau mai multe numere simultan,
precum __{.m-blue}12__, __{.m-green}30__ and __{.m-yellow}45__:

    table.table-tiny
      tr
        td: .number-ball.blue 12
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5
      tr
        td: .number-ball.yellow 45
        td: | =
        td(colspan=4)
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 5

Așadar cmmmc pentru __{.m-blue}12__, __{.m-green}30__ și __{.m-yellow}45__ este
2 × [[2]] × 3 × 3 × [[5]] = 180.

---
> id: race6

Numerele prime sunt un caz special: cmmmc pentru două numere prime diferite este pur și simplu
[[produsul|suma|diferența]] lor, pentru că ele nu au niciun factor prim comun care
s-ar putea “tăia”.

---
> id: cicadas
> goals: bound-low bound-high

### Cicadele

::: column.grow
America de Nord găzduiește diferite familii de cicade. Acestea au o caracteristică interesantă
- apar la suprafață pentru a se înmulți doar o dată la câțiva ani în timpul verii -
restul timpului și-l petrec în subteran.

De exemplu, cicadele din Florida și Mississippi apar o dată la 13 ani. Cicadele din
Illinois și Iowa apar doar o dată la 17 ani. Dar nu există cicade cu ciclul de viață
de 12, 14, 15 sau 16 ani.
::: column(width=360)

    x-img(width=360 height=240 src="images/cicadas.jpg" alt="Cicadas")

:::

Și 1, și 17 sunt numere prime și există o explicație pertinentă pentru asta. Imaginează-ți
că în pădure există predatori care omoară cicadele. Acești predatori apar și ei
la intervale regulate, să zicem la fiecare 6 ani.

Acum imaginează-ți ca o generație de cicade apare o dată la fiecare ${n}{n|13|4,20,1} de ani
(${isPrime(n) ? 'prime' : 'not prime'}). Cele două animale s-ar întâlni o dată la fiecare
${lcm(n,6)} ani, care este [[cmmmc|produsul|media]] lui 6 și ${n}.

    figure
      include svg/cicadas.svg
      p.caption Durata până la întalnirea cicadelor cu prădătorii, pentru diferite lungimi de ciclu de viață al cicadelor.

---
> id: cicadas1

Acest număr pare să fie mult mai mare dacă durata ciclului de viață al cicadei este
un număr prim precum 13 și 17. Este așa pentru că numerele prime nu au factori comuni cu
6, astfel că la calcularea cmmmc nu tăiem niciun factor duplicat.

Bineînțeles că cicadele nu au nicio idee ce sunt numerele prime, dar de-a lungul a milioane
de ani evoluția a stabilit că numerele prime sunt cea mai sigură opțiune pentru durata
ciclului de viață. Animalul prădător pare să fi dispărut de-a lungul timpului, dar
ciclurile de viață cu numere prime au ramas.

---

## Cel Mai Mare Divizor Comun

> id: gcd
> section: gcf

Un arhitect proiectează podeaua unei curți mari cu dimensiunea 18m pe 30m. El vrea ca
aceasta să fie acoperită cu dale pătratice fără să existe goluri sau suprapuneri
de-a lungul marginilor. Care este dimensiunea maximă a pătratelor pe care le poate folosi?

    figure
      include svg/floorplan.svg
      p.text-center.md Dalele au dimensiunea de ${x}{x|3|1,18,1}m.#[br]#[span.result.var]

---
> id: gcd1

La fel ca mai înainte, această întrebare nu este despre geometrie - este despre divizibilitate.
Lungimea laturilor dalelor trebuie să dividă pe 18 și 30, iar cel mai mare număr posibil
care îndeplinește această condiție este [[6]]. Acesta se numește
__Cel Mai Mare Divizor Comun__ sau __cmmdc__ al lui 18 și 30.

---
> id: gcd2

Putem folosi din nou [descompunerea în factori primi](gloss:factorisation) pentru a calcula
cmmdc al oricăror două numere. Să ne reamintim că orice divizor al unui număr trebuie să aibă
o parte din divizorii primi ai acelui număr.

    table.table-tiny
      tr
        td: .number-ball.blue 18
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5

Să presupunem că __{.m-red}X__ este cmmdc al lui __{.m-green}18__ și __{.m-blue}30__.
Atunci __{.m-red}X__ divide pe __{.m-green}18__, deci divizorii primi ai lui __{.m-red}X__
vor fi _{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}3_
și _{span.number-ball.small.l-blue}3_. De asemenea, __{.m-red}X__ divide pe __{.m-blue}30__,
deci divizorii primi ai lui __{.m-red}X__ vor fi _{span.number-ball.small.l-green}2_,
_{span.number-ball.small.l-green}3_ și _{span.number-ball.small.l-green}5_.

---
> id: gcd3

Pentru a-l afla pe __{.m-red}X__, avem nevoie sa înmulțim toate numerele care sunt
divizori primi pentru [[ambele|unul dintre]] numere __{.m-green}18__ și __{.m-blue}30__:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}3_ &nbsp;=&nbsp; 6.

---
> id: gcd4

Acum avem o metodă simplă pentru găsirea cmmfc a două numere:

    ol.proof
      li Descompuneți în factori primi fiecare număr.
      li Înmulțește factorii primi ce aparțin ambelor numere.

Încă o dată numerele prime sunt speciale: cmmdc a două numere prime diferite este mereu
[[1]], pentru că nu au în comun niciun divizor prim.

---
> id: crypto

### Criptografia

::: column.grow
Una din cele mai importante aplicații moderne ale numerelor prime este în ramura
matematicii numită __Criptografie__. Timp de mii de ani, oamenii au încercat să
ascundă mesaje astfel încât doar destinatarii stabiliți să le poată citi - acest
proces se numește criptare. Criptarea este folosită de oricine, de la generalii care
făceau schimb de ordine secrete în timpul războiului până la poșta electronică sau
transferurile bancare pe internet.
Oamenii au încercat întotdeauna să găsească metode de criptare mai bune și mai sigure,
dar, după o vreme, toate erau sparte cu ajutorul algoritmilor și mai avansați.
În timpul celui de-al Doilea Război mondial, armata germană a folosit Enigma:
o mașină complexă formată dintr-o tastatură, discuri rotative și un tablou de prize.
Această mașină criptografia mesajele folosind una din cele 158 de milioane de milioane de milioane
de posibilități (acesta e un 158 urmat de 18 zerouri!). Se credea că acest cod nu putea
fi spart, dar Serviciul Secret Britanic, condus de matematicianul Alan Turing, a construit
unul din primele calculatoare care au reușit să-l descifreze.

::: column(width=240)

    x-img(lightbox credit="Magnus Manske, via Wikipedia" width=240 height=344 src="images/enigma.jpg" alt="Mașina Enigma")
    p.caption Mașina germană Enigma cu patru rotoare

:::

În ziua de azi, calculatoarele sunt mult mai performante și sunt capabile să
încerce milioane de posibilități în fiecare secundă. Pentru a dezvolta algoritmi
de criptare mai buni, trebuie să găsim o operație matematică dificilă chiar
și pentru calculatoarele puternice. Calculatoarele sunt incredibil de rapide
la adunăre, scădere, înmulțire și împărțire. Cu toate acestea, ele sunt foarte
lente la descompunerea numerelor întregi în numere prime…

---
> id: crypto1

{.todo} ÎN CURÂND – exemplu RSA cu Alice și Bob

Acest algoritm criptografic numit se numește __Criptografie RSA__, numit după cei trei inventatori
ai săi, Ron Rivest, Adi Shamir și Leonard Adleman care l-au făcut public în anul 1977.
Se pare că Serviciului Britanic Secret știa o metodă foarte similară încă din anul 1973,
dar algoritmul a rămas clasificat până mult mai târziu.

Astăzi, numerele prime sunt utilizate de calculatoarele din toată lumea pentru a face
schimb de date. În timp ce navighezi pe internet sau trimiți mesaje de chat, telefonul
sau laptopul tău vor genera în liniște numere prime mari și vor face schimburi
de chei publice cu alte calculatoare.
