# Grafice și rețele

## Introducere

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

În fiecare zi suntem înconjurați de nenumărate conexiuni și rețele: drumuri și căi ferate, linii telefonice, internet, circuite electronice și chiar legături moleculare. Există chiar și _rețele sociale_ între prieteni și familii. Vă puteți gândi la alte exemple?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Rețele rutiere și feroviare

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Chipuri de calculator

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Lanțurile de aprovizionare

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} prieteniile

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Conexiuni neuronale

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Internetul

:::

---
> id: intro

::: column.grow

În matematică, toate aceste exemple pot fi reprezentate ca [__grafice__](gloss:graph) (nu trebuie confundate cu _graficul_ unei funcții). Un grafic este format din anumite _puncte_ numite [[vârfuri | cerc | traversări]] , unele dintre ele fiind conectate prin [[margini | limite | perechi]] .

__Teoria graficului__ este studiul graficelor și a proprietăților acestora. Este una dintre cele mai interesante și vizuale domenii ale matematicii și are nenumărate aplicații importante.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Putem realiza aspectul graficelor simple folosind cercuri și linii. Poziția vârfurilor și lungimea marginilor este irelevantă - ne interesează doar _modul în care acestea sunt conectate_ între ele. Marginile se pot încrucișa și nu trebuie să fie drepte.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} În unele grafice, marginile merg doar într-un singur sens. Acestea se numesc [__grafice direcționate__](gloss:directed-graph) .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Unele grafice constau din mai multe grupuri de vârfuri care nu sunt conectate între ele prin margini. Aceste grafice sunt __deconectate__ .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Alte grafice pot conține mai multe muchii între aceleași perechi de vârfuri sau vârfuri care sunt legate între ele (bucle).

:::

---
> id: intro-2

Putem crea noi grafice dintr-un grafic existent eliminând unele dintre vârfuri și muchii. Rezultatul se numește [__subgrafă__](gloss:subgraph) . Aici puteți vedea câteva alte exemple de grafice, cu margini colorate și vârfuri care indică o posibilă subgrafă:

::: column(width=212 parent="padded-thin")

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

:::

---
> id: intro-3

Spunem că [__ordinea__](gloss:graph-order) unui grafic este numărul de vârfuri pe care le are. [__Gradul__](gloss:graph-degree) unui vertex este numărul de muchii care se întâlnesc la acel vertex.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Comanda: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Comanda: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grad: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grad: [[6]]

:::

---
> id: intro-4

Graficele care constau dintr-o singură buclă de vârfuri se numesc [__cicluri__](gloss:graph-cycle) . Toate ciclurile au [[același număr de muchii și vârfuri | mai multe margini decât vârfuri | mai puțini margini decât vârfurile]] .

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Dotat cu aceste noi definiții, să explorăm unele dintre proprietățile și aplicațiile fascinante ale graficelor.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Podurile din Königsberg

::: column.grow

Unul dintre primii matematicieni care s-a gândit la grafice și rețele a fost [Leonhard Euler](bio:euler) . Euler a fost intrigat de o veche problemă cu privire la orașul Königsberg, lângă Marea Baltică.

Râul Pregel împarte Königsberg în patru părți separate, care sunt conectate de șapte poduri. Este posibil să vă plimbați prin oraș care traversează toate podurile exact o dată - dar nu mai mult de o dată? (Puteți începe și termina oriunde, nu neapărat în același loc.)

Încercați să găsiți un traseu valid desenând pe aceste hărți:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Clear
        button.btn.right Skip

---
> id: bridges-1

În cazul Königsberg se pare că este imposibil să se găsească o rută validă, dar unele dintre celelalte orașe funcționează. Euler a reușit să găsească o regulă simplă care să poată fi aplicată oricărui oraș, fără a fi nevoie să încerci o mulțime de posibilități - folosind teoria graficului.

::: column.grow

În primul rând, trebuie să convertim hărțile orașului în grafice cu margini și vertexuri. Fiecare insulă sau regiune de pământ este reprezentată de [[un vertex | o margine | o zonă]] și fiecare pod care leagă două regiuni este reprezentat de o [[margine]] corespunzătoare [[| zenit | stradă]] .

{.reveal(when="blank-0 blank-1")} Acum, problema „turului unui oraș în timp ce traversați fiecare pod exact o dată” a devenit o problemă a „desenării unui grafic cu o cursă continuă în timp ce urmărim fiecare muchie exact o dată”.

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Pe hârtie, apăsați cu câteva grafice diferite și apoi încercați să aflați care pot fi desenate cu un singur accident continuu.

---
> id: bridges-3
> goals: size prime eo

La fel ca și pentru hărțile orașului de dinainte, descoperim că unele grafice sunt posibile în timp ce altele nu. Pentru a ne ajuta să înțelegem de ce, să etichetăm fiecare vertex cu [gradul](gloss:graph-degree) său. Apoi putem colora vârfurile în moduri diferite și vom încerca să dezvăluim un model:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Value
        div(value="size") Size
        div(value="prime") Prime Numbers
        div(value="eo") Even and Odd
      .box
        p.no-voice(style="margin: 0"): strong These graphs are possible:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong These graphs are not possible:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Comparând aceste numere pentru grafice care sunt posibile și cele care nu sunt posibile, se pare că un grafic poate fi desenat dacă nu [[are mai mult de două vârfuri „impare” | are doar vârfuri „uniforme” | nu are vârfuri cu o ordine mai mare de 4 | are un număr impar de vârfuri | nu are vârfuri de ordin 3]] . Această condiție poate fi explicată dacă ne uităm la un singur vertex în grafic:

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Here you can see a single, magnified vertex in a graph.
      .legend(slot="legend") If we draw the graph, we will eventually have an edge leading towards this vertex, and then another one leading away. This makes two edges meeting at the vertex.
      .legend(slot="legend") Maybe the vertex is a crossing rather than a corner. In that case there will be another edge leading towards the vertex, and another edge leading away. Now we have four edges.
      .legend(slot="legend") And in some graphs, there may even be a third pair of edges leading towards and away from the vertex. Now there are six edges.
      .legend(slot="legend") Notice that, either way, there always is an even number of edges meeting at the vertex.
      .legend(slot="legend") The only two exceptions are the vertices where the path starts, and where it ends – these two may have an odd number of edges. If the start and end point are the same, all vertices in the graph are even.

---
> id: bridges-5

::: column.grow(parent="right")

Dacă derulați înapoi la harta Königsberg, veți vedea că există mai mult de două insule cu un număr impar de poduri. Prin urmare, un traseu care traversează fiecare pod exact o dată este într-adevăr imposibil - și asta a descoperit Leonard Euler.

Descoperirea lui Euler nu poate părea deosebit de utilă în viața reală, dar graficele sunt la baza multor alte probleme geografice, cum ar fi găsirea direcțiilor între două locații. Mai multe dintre aceste aplicații vom descoperi mai târziu.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Strângeri de mână și întâlniri

::: column.grow

Ai fost invitat la o minunată petrecere de naștere alături de prieteni. Inclusiv tu și gazda, există ${hnd}{hnd|5|3,15,1} oameni prezenți.

Seara, pe măsură ce oaspeții se pregătesc să plece, toată lumea dă mâna cu toți ceilalți. Câte strângeri de mână sunt în total?

Putem reprezenta strângerile de mână folosind un grafic: fiecare persoană este [[un vertex | o margine]] și fiecare strângere de mână este [[o margine | un vertex]] .

{.reveal(when='blank-0 blank-1')} Acum este ușor să numeri numărul de muchii din grafic. O găsim acolo cu ${hnd} oameni, există ${hnd*(hnd-1)/2} strângeri de mână.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

În loc să numărați toate marginile în grafice mari, am putea încerca, de asemenea, să găsim o formulă simplă care să ne spună rezultatul pentru _orice_ număr de invitați.

Fiecare din ${n}{n|5|2,8,1} oamenii de la petrecere dau mâna cu ${n-1} alții. Asta face ${n} × ${n-1} = ${n×(n-1)} strângeri de mână în total. Pentru _n_ oameni, numărul de strângeri de mână ar fi [[`n×(n–1)`|`n×(n+1)`|`n^2`]] .

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Din păcate, acest răspuns nu este chiar corect. Observați cum [primele două intrări din rândul de sus](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) sunt de fapt aceleași, doar răsucite.

De fapt, am numărat fiecare strângere de mână de [[două ori | o singura data | de trei ori]] , _{span.reveal(when="blank-0")} o dată pentru fiecare dintre cele două persoane implicate. Acest lucru înseamnă că numărul corect de strângeri de mână pentru ${n}{n|5|2,25,1} oaspeții este `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._

---
> id: handshakes-3

Graficele de strângere de mână sunt speciale, deoarece fiecare vertex este conectat la fiecare alt vertex. Graficele cu această proprietate sunt numite __grafice complete__ . Graficul complet cu 4 vârfuri este adesea prescurtat ca `K_4` , graficul complet cu 5 vârfuri este cunoscut ca `K_5` , si asa mai departe.

Tocmai am arătat că un grafic complet cu `n` noduri, `K_n` , are `(n × (n-1))/2` margini.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Într-o altă zi, sunteți invitat la un eveniment de întâlnire rapidă pentru ${m}{m|5|2,8,1} băieți și ${f}{f|4|2,8,1} fete. Există multe mese mici și fiecare băiat petrece 5 minute cu fiecare dintre fete. Câte „date” individuale există în total?

::: column.grow

În acest caz, graficul corespunzător este format din două seturi de vârfuri separate. Fiecare vertex este conectat la toate vârfurile din [[opus |]] setul [[propriu]] , dar niciunul dintre vârfurile [[sale |]] setul [[opus]] . Graficele care dispun de acest aspect se numesc __grafice bipartite__ .

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Graficul bipartit cu două seturi de dimensiuni _x_ și _y_ este adesea scris ca `K_"x,y"` . Are [[`x×y`|`x+y`|`2x–y`]] margini, _{span.reveal(when="blank-2")} ceea ce înseamnă că în exemplul de mai sus există ${m} × ${f} = ${m×f} datele._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Graficele planare

::: column.grow

Iată un alt puzzle care are legătură cu teoria graficului.

Într-un sat mic există trei case și trei uzine care produc apă, energie electrică și gaz. Trebuie să conectăm fiecare dintre cursuri la fiecare dintre instalațiile de utilitate, dar, datorită amenajării satului, nu se permite traversarea țevilor și cablurilor.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Încercați să conectați fiecare dintre case la fiecare dintre companiile de servicii de mai jos, fără ca oricare dintre liniile dvs. să se intersecteze:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

La fel ca podurile din Königsberg înainte, descoperiți rapid că această problemă este imposibilă. Se pare că unele grafice pot fi desenate fără margini suprapuse - acestea se numesc __grafice plane__ - dar altele nu pot.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` este planar.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[este planar | nu este planar]] .

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[nu este planar | este planar]] .

:::

---
> id: utilities-2

[Graficul complet](gloss:complete-graph) `K_5` este cel mai mic grafic care nu este plan. Orice alt grafic care conține `K_5` întrucât, într-un fel, o subgrafă nu este plană. Aceasta include `K_6` . `K_7` , și toate graficele complete mai mari.

Graficul din puzzle-ul celor trei utilități este [graficul bipartit](gloss:bipartite-graph) `K_"3,3"` . Se pare că orice grafic non-planar trebuie să conțină fie o `K_5` sau a `K_"3,3"` (sau o [subdiviziune](gloss:subdivision) a acestor două grafice) ca subgrafă. Aceasta se numește _teorema lui Kuratowski_ .

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarity

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Acesta este un grafic plan, dar ${n}{n|7|5,20,1} vârfurile au fost zguduite. Rearanjați vârfurile astfel încât niciunul dintre margini să nu se suprapună.

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Formula lui Euler

Toate graficele plane împart planul pe care sunt desenate într-un număr de zone, numite __fețe__ .

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vârfuri
[[5]] fețe
[[10]] muchii
_{span.euler-sum} 11 Vârfuri + fețe_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vârfuri
[[7]] fețe
[[14]] muchii
_{span.euler-sum} 15 Vârfuri + fețe_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vârfuri
[[13]] fețe
[[24]] muchii
_{span.euler-sum} 25 Vârfuri + fețe_

:::

---
> id: euler-1

Când compari aceste numere, vei observa că numărul de muchii este întotdeauna [[unul mai mic | mai mare | la fel]] decât numărul de fețe plus numărul de vârfuri. Cu alte cuvinte, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Acest rezultat se numește __ecuația lui Euler__ și poartă numele aceluiași [matematician](bio:euler) care a rezolvat problema Königsberg Bridges.

Din păcate, există foarte multe grafice și nu putem verifica fiecare pentru a vedea dacă ecuația lui Euler funcționează. În schimb, putem încerca să găsim o simplă [dovadă](gloss:proof) care funcționează pentru orice grafic ...

---
> id: euler-2

    x-slideshow
      .stage(slot="stage")
        svg(viewBox="0 0 640 200")
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
          line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
          line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
          circle.node(cx=270 cy=30  r=7)
          circle.node(cx=150 cy=100 r=7 style="display: none")
          circle.node(cx=270 cy=170 r=7 style="display: none")
          circle.node(cx=390 cy=100 r=7 style="display: none")

        .euler-table
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

Orice grafic (finit) poate fi construit începând cu un vertex și adăugând mai multe vertexuri unul câte unul. Am arătat că, indiferent de modul în care adăugăm noi noduri, ecuația lui Euler este valabilă. Prin urmare, este valabil pentru toate graficele.

Procesul pe care l-am folosit se numește __inducție matematică__ . Este o tehnică foarte utilă pentru dovedirea rezultatelor în infinit de multe cazuri, pur și simplu începând cu cel mai simplu caz și arătând că rezultatul se menține la fiecare pas atunci când se construiește cazuri mai complexe.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Multe grafice plane arată foarte asemănătoare cu plasele de [poliedre](gloss:polyhedron) , cu forme tridimensionale cu fețe [poligonale](gloss:polygon) . Dacă ne gândim la poliedre ca fiind formate din benzi elastice, ne putem imagina întinzându-le până devin grafice plane, plane:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Aceasta înseamnă că putem folosi formula lui Euler nu numai pentru graficele plane, ci și pentru toate poliedrele - cu o mică diferență. La transformarea poliedrelor în grafice, una dintre fețe dispare: fața superioară a poliedrului devine „afară”; a graficelor.

Cu alte cuvinte, dacă numeri numărul de __{.red} marginile__ , __{.blue} chipuri__ și __{.green} vârfuri__ ale _oricărui_ poliedru, veți găsi asta _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] .

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __icosahedron__
__{.blue} 20 de__ fețe
__{.green} 12__ Vârfuri
__{.red} 30__ muchii

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__
__{.blue} 62__ fețe
__{.green} 60__ Vârfuri
__{.red} 120__ muchii

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icozaedru trunchiat__
__{.blue} 32__ fețe (12 negre, 20 alb)
__{.green} 60__ Vârfuri
__{.red} 90__ muchii

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Harta de colorat

::: column.grow

Am folosit deja teoria graficului cu anumite hărți. Pe măsură ce mărim, drumurile și podurile individuale dispar și, în schimb, vedem conturul țărilor întregi.

Atunci când colorați o hartă - sau orice alt desen format din regiuni distincte - țările adiacente nu pot avea aceeași culoare. De asemenea, am putea dori să folosim cât mai puține culori diferite.

Unele „hărți” simple, precum o tablă de șah, au nevoie doar de două culori (alb-negru), dar cele mai complexe hărți au nevoie de mai multe.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Când colorați harta statelor din SUA, sunt evident 50 de culori, dar sunt necesare mult mai puține. Încercați să colorați hărțile de mai jos cu cât mai puține culori:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] colours used
        include svg/colours-1.svg
        button.btn.clear Clear
        // Note that states or countries which only share a corner are allowed to have the same colour.
        // Alaska and Hawaii are isolated from all of the other states and can have any colour.
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Toate aceste hărți pot fi colorate doar cu patru culori diferite, dar nu este greu de imaginat că alte hărți foarte complicate ar putea avea nevoie de mult mai multe culori. De fapt, unele hărți au __cel puțin__ patru culori, ori de câte ori conțin patru țări toate conectate între ele.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Ca și înainte, putem converti o hartă cu țări și granițe într-un grafic plan: fiecare țară devine [[un vertex | o margine | o față]] și țările care [[au o frontieră | au aceeași culoare]] să fie conectate de o margine:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Acum vrem să colorăm vertexurile unui grafic, iar două vârfuri trebuie să aibă o culoare diferită dacă sunt conectate de o margine.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

În 1852, studentul de botanică [Francis Guthrie a](bio:guthrie) trebuit să coloreze o hartă a județelor din Anglia. El a observat că patru culori păreau să fie suficiente pentru orice hartă încercată, dar nu a fost în stare să găsească o dovadă care să funcționeze pentru _toate_ hărțile. Aceasta s-a dovedit a fi o problemă extrem de dificilă și a devenit cunoscută sub numele de __teorema__ celor __patru culori__ .

În următorii 100 de ani, mulți matematicieni au publicat „dovezi” la cele patru culori ale teoremei, doar pentru a găsi greșeli mai târziu. Unele dintre aceste dovezi invalide au fost atât de convingătoare încât a fost nevoie de mai mult de 10 ani pentru a descoperi erori.

Pentru o lungă perioadă de timp, matematicienii nu au putut nici să dovedească faptul că patru culori sunt suficiente, nici să găsească o hartă care avea nevoie de mai mult de patru culori.

:::

---
> id: maps-4

Nu s-au înregistrat progrese în ceea ce privește problema celor patru culori până în 1976, când [Wolfgang Haken](bio:haken) și [Kenneth Appel au](bio:appel) folosit un computer pentru a rezolva definitiv. Aceștia au redus la infinit multe hărți posibile la 1936 cazuri speciale, care au fost verificate fiecare de un computer în total peste 1000 de ore.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Teorema în patru culori este prima teoremă matematică bine cunoscută care a fost dovedită folosind un computer, ceva care a devenit mult mai comun și mai puțin controversat de atunci. Calculatoare mai rapide și un algoritm mai eficient înseamnă că astăzi poți dovedi teorema de patru culori pe un laptop în doar câteva ore.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

Teorema celor patru culori funcționează numai pentru hărți pe un plan plat sau o sferă și în care toate țările constau dintr-o singură zonă.

Cu toate acestea, matematicienii s-au uitat, de asemenea, la hărțile _imperiilor_ , unde țările pot consta din mai multe componente deconectate și la hărți de pe planete în formă diferită, cum ar fi un torus (formă de gogoși). În aceste cazuri, este posibil să aveți nevoie de mai mult de patru culori, iar dovezile devin și mai dificile.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## Problema vânzătorului călător

::: column.grow(parent="right")

Să ne gândim, încă o dată, la rețele și hărți. Imaginați-vă că trebuie să vizitați un serviciu de livrare ${tsn}{tsn|8|2,50,1} diferite orașe pentru distribuirea coletelor. Putem gândi la aceste orașe la vârfurile unui grafic. Dacă toate orașele sunt conectate pe drumuri, acesta este un [[grafic complet | ciclu | grafic bipartit]] , deci există <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} marginile în total.

Camionul de livrare trebuie să viziteze toate orașele, în orice comandă. În problema podurilor din Königsberg am vrut să găsim căi care să călătorească de-a lungul _oricărei margini_ exact una. Acum vrem să găsim căi care vizită _fiecare vertex_ exact o dată. Aceste căi se numesc __cicluri hamiltoniene__ .

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Există nenumărate posibilități diferite pentru ciclurile hamiltoniene în grafice complete. De fapt, putem alege orice vertex ca vertex de pornire și apoi să alegem oricare dintre orașele rămase în orice ordine:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

Într-un grafic cu ${tsn1}{tsn1|4|2,10,1} orașe, fiecare ciclu hamiltonian trebuie să conțină și ele ${tsn1} orase. Acum,

    ul.var(:html="tsmString(tsn1)")

Aceasta înseamnă că, în total, există ${tsnPaths(tsn1)} căi posibile. O scurtătură pentru acest produs este ${tsn1} ! sau ${tsn1} __Factorial__ .

Vă puteți imagina că este posibil să nu puteți călători direct între două orașe - fără a trece printr-un alt oraș. În acest caz, nu mai avem un grafic complet, iar găsirea numărului de cicluri hamiltoniene, dacă există deloc, devine mult mai dificilă.

---
> id: salesman-3

::: column.grow(parent="right")

Până acum am ignorat faptul că unele orașe ar putea fi mai departe de altele. În viața reală, însă, aceasta este o considerație foarte importantă: nu dorim doar să găsim _vreo_ cale, ci vrem să o găsim pe cea mai scurtă. Aceasta se numește __Travelling Travelling Problem__ . Trebuie rezolvat nu numai în transport și logistică, ci și atunci când poziționați tranzistoarele pe microcipuri, pentru a face computere mai rapide sau când analizați structura [ADN-ului](gloss:dna) .

O metodă simplă ar fi să încercați toate căile posibile, găsind lungimea fiecăreia, apoi selectând cea mai scurtă. Cu toate acestea, tocmai am arătat asta, chiar și cu doar ${tsn2}{tsn2|10|2,20,1} orașe există ${tsn2} ! = ${factorial(tsn2)} căi posibile. După ce ai sute sau mii de vertexuri, încercarea tuturor căilor posibile devine imposibilă, chiar și folosind computere puternice.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Din păcate, nu există un algoritm mai eficient pentru a rezolva problema vânzătorului în călătorie. În schimb, matematicienii și informaticienii au dezvoltat diferiți algoritmi care găsesc soluții _bune_ , chiar dacă este posibil să nu fie cei mai buni. Acești algoritmi, care dau doar soluții aproximative, se numesc __Heuristic__ .

Încercați să rearanjați orașele de pe această hartă și urmăriți cum se schimbă calea cea mai scurtă dintre ele. Puteți elimina orașele atingând-le și puteți adăuga orașe făcând clic oriunde pe hartă (până la 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__Greedy Algorithm__ (sau __Algoritmul__ cel mai apropiat) este foarte simplu: începeți într-un oraș aleatoriu și vă mutați consecutiv în cel mai apropiat oraș pe care nu l-ați vizitat până acum. După ce ați vizitat toate orașele, vă opriți.

::: column(width=300)

{.todo} Animația va veni în curând ...

:::

Puteți arăta că, în medie, căile găsite folosind algoritmul lacom sunt cu 25% mai lungi decât cea mai scurtă cale posibilă.

---
> id: salesman-6

::: column.grow

__Algoritmul 2-Opt__ începe cu o cale posibilă aleatorie. Apoi, alegeți în mod repetat două muchii și le schimbați în jurul valorii dacă acest lucru ar reduce lungimea căii. Vă opriți atunci când nu puteți reduce lungimea mai departe schimbând orice pereche de margini.

::: column(width=300)

{.todo} Animația va veni în curând ...

:::

---
> id: ants

Se dovedește că, cu mult înainte ca computerele să existe chiar, Natura a găsit o modalitate inteligentă de a găsi căi optime între diferite locații: în coloniile de furnici.

    x-parallax.full-width(background="images/ants.jpg")

Furnicile vor să găsească cele mai scurte rute posibile între cuibul lor și sursele de hrană posibile. Ele pot comunica între ele prin intermediul substanțelor chimice pe care le lasă de-a lungul urmelor lor și pe care alte furnici le pot urma.

---
> id: ants-1

::: column.grow

* Colonia de furnici trimite numeroase cercete care călătoresc inițial în direcții aleatorii. Odată ce găsesc mâncare, se întorc, lăsând în urmă o urmă de feromoni. * Alte furnici tind să urmeze o potecă atunci când găsesc una, ceea ce îi duce la mâncare. În călătoria lor de întoarcere depun mai multe feromoni, întărind astfel calea. * În timp, feromona se evaporă. Cu cât este mai lungă calea, cu atât mai mult timp este nevoie ca furnicile să călătorească de-a lungul ei și astfel feromona are mai mult timp să se evapore. Căile scurte, pe de altă parte, se pot întări mai repede, astfel încât rezistența lor crește mai repede.

::: column(width=240)

{.todo} Diagrama care va veni în curând ...

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Algoritmii Sistemului de colonii antice (ACS) încearcă să reproducă acest comportament pe computere, folosind multe furnici „virtuale”. Ei pot găsi rapid soluții foarte bune pentru problema vânzătorului în călătorie.

O proprietate deosebit de utilă a algoritmilor ACS este că aceștia pot rula continuu și se pot adapta în timp real la modificările grafice. Aceste modificări ar putea fi cauzate de accidente auto și închideri rutiere în rețelele stradale sau de vârfurile de trafic către serverele web din rețelele de calculatoare.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Problema Traveling Salesman este [NP-hard](gloss:np) , ceea ce înseamnă că este foarte dificil de rezolvat de către calculatoare (cel puțin pentru un număr mare de orașe).

Găsirea unui algoritm rapid și exact ar avea implicații grave în domeniul informaticii: ar însemna că există algoritmi rapizi pentru _toate_ problemele dificile NP. De asemenea, aceasta ar face inutilă securitatea Internetului, ceea ce se bazează pe faptul că anumite probleme sunt considerate a fi foarte dificile pentru calculatoare.

Găsirea unui algoritm rapid pentru rezolvarea problemei de vânzător de călători ar rezolva, de asemenea, una dintre cele mai faimoase probleme deschise în matematică și informatică, problema __P vs NP__ . Este una dintre cele șapte [probleme ale premiului Mileniului](gloss:millennium-prize) , fiecare purtând un premiu de 1 milion USD.

:::

---
> section: scheduling
> sectionStatus: dev

## Programarea problemelor

{.todo} In curand

---
> id: applications
> section: applications
> translated: auto

## Grafice în viața de zi cu zi

Am văzut multe aplicații diferite ale teoriei graficelor în capitolele anterioare, deși unele dintre ele au fost puțin conturate. Totuși, se dovedește că graficele sunt la baza multor obiecte, concepte și procese din viața de zi cu zi.

::: column.grow

Internetul, de exemplu, este un grafic vast, virtual. Fiecare vertex este o pagină web individuală și fiecare muchie înseamnă că există un hyperlink între două pagini. Rețineți că legăturile merg doar într-un singur sens, astfel încât acest grafic este [[direcționat | multi-line | conectat]] și că acest grafic este _foarte, foarte, mare_ .

 Unele site-uri web, cum ar fi Wikipedia sau Facebook, au o mulțime de link-uri primite, în timp ce multe site-uri web mai mici pot avea foarte puține legături primite. Acesta este conceptul de bază pe care Google îl folosește pentru a sorta rezultatele căutării.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Site-urile web cu mai multe link-uri primite tind să fie de o calitate superioară și ar trebui să fie afișate în partea de sus a rezultatelor căutării. De exemplu, atunci când căutați „Londra”, site-urile de informații turistice oficiale sunt afișate în fața magazinelor mici din Londra sau a blogurilor oamenilor care locuiesc în Londra. Această idee simplă din teoria graficului, __algoritmul Page Rank__ , a făcut ca Google să fie semnificativ mai bun decât alte motoare de căutare timpurii.

---
> id: applications-2

Internetul este cea mai mare rețea creată vreodată de omenire. Această imagine arată o proporție foarte mică din toate serverele conectate la Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

În timp ce site-urile web și hyperlink-urile formează un grafic _virtual_ , există și rețeaua _fizică_ de computere, servere, routere, linii de telefon și cabluri.

::: column.grow(parent="right")

De fiecare dată când efectuați un apel telefonic sau încărcați un site web, operatorii de rețele trebuie să găsească o modalitate de a conecta expeditorul și receptorul, fără a depăși capacitatea fiecărui cablu sau conexiune individuală. Teoria și probabilitatea graficului fac posibilă garantarea unui serviciu fiabil, de exemplu, găsind devieri atunci când o anumită conexiune este ocupată.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

De asemenea, graficele joacă un rol important în transport și navigație. Toate rețelele de zbor, tren și metrou formează grafice, care pot fi utilizate la crearea de programe eficiente. Unul dintre cele mai recunoscute grafice este harta metroului din Londra:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Toate drumurile și autostrăzile formează, de asemenea, o rețea mare, care este utilizată de serviciile de navigație, cum ar fi Google Maps, atunci când se lucrează la cea mai scurtă rută între două puncte.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

În viitor, __sistemele de transport inteligent__ vor reduce congestia și accidentele, dirijând mașinile mai eficient, folosind datele despre locația colectate de pe smartphone-uri și autovehiculele auto. Acest lucru ar putea economisi milioane de ore pierdute pe drum în fiecare an, reduce semnificativ poluarea și permite serviciilor de urgență să călătorească mai rapid.

:::

---
> id: applications-6

Această imagine arată rețeaua de zboruri aeriene comerciale din toată Europa de nord.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Există nenumărate alte grafice în știință, inginerie sau viața de zi cu zi:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Legăturile dintre atomii din __molecule__ și grilele de cristal formează un grafic.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __Răspândirea bolilor__ și epidemiilor poate fi modelată folosind o rețea.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} În Biologie, __arborii evolutivi__ care arată strămoșii speciilor formează un grafic.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Diferitele componente ale __circuitelor electrice__ și ale cipurilor de computer formează o rețea.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Structura gramaticală a __limbilor__ poate fi modelată folosind grafice, de exemplu pentru a crea algoritmi de traducere.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Graficele au, de asemenea, multe aplicații în __probabilitate__ , __teoria jocurilor__ și __matematica financiară__ .

:::

---
> id: social

### Retele sociale

În cele din urmă, să ne gândim la un exemplu deosebit de bun de grafice care există în viața de zi cu zi: social media. Aici, vârfurile reprezintă [[oameni | prieteni | rețelele]] și marginile reprezintă prietenii, like-uri, abonamente sau adepți.

Când desenăm graficele social media, s-ar putea să vedem anumite __grupuri__ de prieteni reciproci, care poate au plecat la aceeași școală sau au locuit în același oraș. De asemenea, putem determina __centralitatea__ oamenilor, care depinde de cât de bine este conectat un vertex și care poate fi o măsură a popularității unei persoane pe rețelele de socializare.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

În 2014, Facebook a avut 1,4 miliarde de utilizatori activi și un total de peste 200 de miliarde de prieteni. Jumătate dintre utilizatorii Facebook au peste 200 de prieteni și, din moment ce majoritatea prietenilor noștri au un număr similar de prieteni, am putea avea cu ușurință zeci de mii _de prieteni_ .

O întrebare interesantă ar fi acum: dacă alegeți doi utilizatori Facebook aleatori, câte „muchii de prietenie” ar trebui să urmați pentru a trece de la unul la altul? De exemplu, distanța dintre prieteni este [[1]] , distanța dintre prietenii prietenilor este de [[2]] și așa mai departe.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

În 2016, Facebook a realizat [un studiu](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) pentru a determina modul în care utilizatorii săi sunt conectați între ei. Ei au descoperit că, în medie, sunteți conectat la _oricine altcineva_ pe Facebook prin cel mult 3.57 alte persoane. Și asta include celebrități, politicieni sau chiar regalitate!

Cu alte cuvinte, dacă alegeți unul dintre miliardele de utilizatori Facebook din întreaga lume, probabil vor avea un prieten al unui prieten care cunoaște un prieten al unuia dintre prietenii tăi. Spunem că există 3,57 __grade de separare__ .

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

În 1929, când autorul maghiar [Frigyes Karinthy a](bio:karinthy) propus prima dată ideea „șase grade de separare”, nu exista internet sau social media, dar lumea începuse deja să fie mai interconectată.

În 1967, [Stanley Milgram a](bio:milgram) realizat un prim experiment empiric, unde 296 de participanți care locuiesc în Nebraska și Kansas au fost rugați să livreze o scrisoare unei anumite persoane care locuiește în Boston, Massachusetts. Toți au fost nevoiți să aleagă un prieten pentru a trimite scrisoarea, care apoi a ales un alt prieten. La fiecare pas, scrisoarea s-a apropiat de Boston. Milgram a descoperit că, în medie, erau doar 5,2 prieteni intermediari - 5,2 grade de separare.

:::

Astăzi, fiecare dintre noi face parte din nenumărate grafice invizibile, care stau la baza interacțiunilor noastre sociale, călătorii, internet și tehnologie, știință și multe altele.
