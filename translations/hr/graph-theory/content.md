# Grafikoni i mreže

## Uvod

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

Svakodnevno smo okruženi bezbroj veza i mreža: prometnice i željezničke pruge, telefonske linije, internet, elektronički sklopovi, pa čak i molekularne veze. Postoje čak _društvene mreže_ između prijatelja i obitelji. Možete li smisliti još neke primjere?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Cestovne i željezničke mreže

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Računalni čipovi

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Lanci za opskrbu

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Prijateljstva

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Neuronske veze

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Internet

:::

---
> id: intro

::: column.grow

U matematici se svi ovi primjeri mogu predstaviti kao [__grafikoni__](gloss:graph) (da se ne brkaju sa _grafom_ funkcije). Graf se sastoji od određenih _točaka_ nazvanih [[vrhova|circles|crossings]], od kojih su neke povezane [[ivicama|boundaries|pairs]].

__Teorija grafova__ je proučavanje grafova i njihovih svojstava. To je jedno od najuzbudljivijih i najvidljivijih područja matematike i ima bezbroj važnih primjena.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Izgled jednostavnih grafova možemo nacrtati pomoću krugova i linija. Položaj vrhova i duljina rubova nebitni su - brine nas samo _kako su oni povezani_ međusobno. Rubovi se čak mogu prelaziti i ne moraju biti ravni.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} U nekim grafovima rubovi idu samo u jednom smjeru. To se zove [__usmjereni grafikon__](gloss:directed-graph).

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Neki se grafovi sastoje od više skupina vrhova koji međusobno nisu povezani rubovima. Ti su grafovi __nepovezani__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Ostali grafovi mogu sadržavati više rubova između istih parova vrhova ili vrhova koji su povezani sami (petlje).

:::

---
> id: intro-2

Iz postojećeg grafikona možemo stvoriti nove grafikone uklanjajući neke vrhove i rubove. Rezultat se zove [__podgraf__](gloss:subgraph). Ovdje možete vidjeti još nekoliko primjera grafova, s obojenim rubovima i vrhovima koji ukazuju na mogući podgraf:

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

Kažemo da je [__naredba__](gloss:graph-order) grafikona broj vrhova koje ima. [__stupanj__](gloss:graph-degree) vrha je broj rubova koji se nalaze u toj vrhovi.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Naredba: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Naredba: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Stupanj: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Stupanj: [[6]]

:::

---
> id: intro-4

Grafovi koji se sastoje od jedne petlje vrhova nazivaju se [__ciklusom__](gloss:graph-cycle). Svi ciklusi imaju [[isti broj rubova i vrhova|more edges than vertices|fewer edges than vertices]].

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Opremljeni ovim novim definicijama, istražimo neka fascinantna svojstva i primjene grafikona.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Königsberški mostovi

::: column.grow

Jedan od prvih matematičara koji je razmišljao o grafovima i mrežama bio je [Leonhard Euler](bio:euler). Eulera je zaintrigirao stari problem u vezi s gradom Königsberg u blizini Baltičkog mora.

Rijeka Pregel dijeli Königsberg na četiri odvojena dijela koji su povezani sedam mostova. Je li moguće hodati gradom prelazeći sve mostove točno jednom - ali ne više od jednom? (Možete započeti i završiti bilo gdje, ne nužno na istom mjestu.)

Pokušajte pronaći valjanu rutu crtanjem na ovim mapama:

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

U slučaju Königsberga čini se da je nemoguće pronaći valjanu rutu, ali neki drugi gradovi djeluju. Euler je uspio pronaći jednostavno pravilo koje se može primijeniti u bilo kojem gradu, bez da je isprobao puno mogućnosti - koristeći teoriju grafova.

::: column.grow

Prvo moramo pretvoriti karte gradova u grafikone s rubovima i vrhovima. Svaki otok ili područje kopna predstavljen je [[vrhom|an edge|an area]], a svaki most koji povezuje dvije regije predstavljen je odgovarajućim [[rubom|vertex|street]].

{.reveal(when="blank-0 blank-1")} Sada je problem "obilaska grada dok je prešao svaki most točno jedanput" postao problem "crtanja grafa jednim kontinuiranim kretom, istodobno pronalazeći svaki rub točno jedanput".

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Na papiru smislite nekoliko različitih grafova, a zatim pokušajte utvrditi koji se mogu izvući jednim kontinuiranim taktom.

---
> id: bridges-3
> goals: size prime eo

Baš kao i prije na kartama grada, utvrdili smo da su neki grafovi mogući, dok drugi nisu. Da bismo lakše razumjeli zašto, označimo svaku vršku s [stupnjem](gloss:graph-degree). Tada možemo bojati vrhove na različite načine i pokušati otkriti uzorak:

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

Uspoređujući ove brojeve za moguće grafikone i one koji nisu mogući, čini se da se graf može izvući ako [[nema više od dva "neobična" vrha|only has “even” vertices|has no vertices with an order larger than 4|has an odd number of vertices|has no vertices of order 3]]. Taj se uvjet može objasniti ako na grafu pogledamo samo jednu vršku:

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

Ako se vratite na kartu Königsberga, vidjet ćete da postoji više od dva otoka s neparnim brojem mostova. Stoga je ruta koja točno jednom prelazi svaki most zaista nemoguća - a to je otkrio Leonard Euler. Eulerovo otkriće možda se ne čini osobito korisnim u stvarnom životu, ali grafovi su temelj mnogih drugih geografskih problema, poput pronalaženja uputa između dviju lokacija. Više tih aplikacija otkrit ćemo kasnije.

::: column(width=240)     x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Rukovanje i druženje

::: column.grow

Pozvani ste na prekrasnu rođendansku zabavu sa svojim prijateljima. Uključujući sebe i domaćina, prisutni su ${hnd}{hnd|5|3,15,1} ljudi. Uveče, dok se gosti spremaju da odu, svi odmahnu rukom sa svima ostalima. Koliko ima rukovanja ukupno? Rukovanje možemo predstaviti grafikonom: svaka osoba je [[vrhova|an edge]], a svaka stisak ruke je [[ivica|a vertex]].

{.reveal(when='blank-0 blank-1')} Sada je lako izbrojiti broj rubova u grafikonu. Otkrivamo da tamo sa ${hnd} ljudima postoje ${hnd*(hnd-1)/2} stisci ruku.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Umjesto da prebrojimo sve rubove u velikim grafovima, mogli bismo pokušati pronaći jednostavnu formulu koja će nam reći rezultat za _bilo kojeg_ broja gostiju , Svaki od ${n}{n|5|2,8,1} ljudi na zabavi rukuje se s ${n-1} drugima. To čini ${n} × ${n-1} = ${n×(n-1)} rukovanja ukupno. Za _n_ ljudi, broj rukovanja bi bio [[`n×(n–1)`|`n×(n+1)`|`n^2`]].

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Nažalost, ovaj odgovor nije sasvim tačan. Primjetite kako [prva dva unosa u gornji red](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) su zapravo isti, samo ih je okolo. Zapravo smo brojili svaki stisak ruke [[dva puta|once|three times]], _{span.reveal(when="blank-0")} jednom za dvoje uključenih ljudi. To znači da je točan broj rukovanja za ${n}{n|5|2,25,1} gostiju `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")`._

---
> id: handshakes-3

Grafikoni stiska ruku su posebni jer je svaki vrh povezan sa svakom drugom vrhom. Grafikoni s ovim svojstvom nazivaju se __kompletni grafikoni__. Kompletni graf s 4 vrha često se skraćuje kao `K_4`, a čitav graf s 5 vrhova poznat je kao `K_5` i tako dalje. Upravo smo pokazali da kompletan graf sa `n` vrhovima, `K_n`, ima `(n × (n-1))/2` rubove.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Drugog dana, pozvani ste na brzi sastanak za ${m}{m|5|2,8,1} dečaka i ${f}{f|4|2,8,1} djevojke. Mnogo je malih stolova i svaki dječak provodi 5 minuta sa svakom od djevojčica. Koliko pojedinačnih „datuma“ ima ukupno?

::: column.grow

U ovom se slučaju odgovarajući graf sastoji od dva odvojena skupa. Svaka vrhova povezana je sa svim vrhovima u [[suprotno skupu|its own]], ali nijedan od vrhova u [[svom|the opposite]] skupu. Grafovi s ovim izgledom nazivaju se __dvostrani grafovi__.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")
:::

{.reveal(when="blank-0 blank-1")} Dvostrani graf s dva skupa veličina _x_ i _y_ često se piše kao `K_"x,y"`. Ima [[`x×y`|`x+y`|`2x–y`]] rubove, _{span.reveal(when="blank-2")} što znači da u gornjem primjeru postoje datumi ${m} × ${f} = ${m×f}_

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Ravni grafikoni

::: column.grow

Evo još jedne zagonetke koja je povezana s teorijom grafova. U malom selu postoje tri kuće i tri komunalna postrojenja koja proizvode vodu, struju i plin. Moramo povezati svaki tečaj sa svakim komunalnim postrojenjem, ali zbog rasporeda sela različite cijevi i kablovi nisu dopušteni.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Pokušajte spojiti svaku kuću dolje u bilo kojem od komunalnih poduzeća, a da se ni jedan od vaših linija ne presijeca:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Baš kao prije Königsbergovih mostova, brzo otkrijete da je i ovaj problem nemoguć. Čini se da se neki grafikoni mogu nacrtati bez rubova koji se preklapaju - oni se nazivaju __ravninskim grafovima__ - ali drugi ne mogu.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` je ravan.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[je planski|is not planar]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[nije ravni|is planar]].

:::

---
> id: utilities-2

[kompletan grafikon](gloss:complete-graph) `K_5` najmanji je graf koji nije ravan. Bilo koji drugi graf koji sadrži `K_5` kao podgraf na neki način također nije ravan. To uključuje `K_6`, `K_7` i sve veće cjelovite grafikone. Graf u slagalici s tri komunalije je [dvostrani graf](gloss:bipartite-graph) `K_"3,3"`. Ispada da svaki neplanarni graf mora sadržavati `K_5` ili `K_"3,3"` (ili [potpodjelu](gloss:subdivision) ova dva grafikona) kao podgraf. To se zove _Kuratovski teorem_.

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarnost

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Ovo je ravan graf, ali su ${n}{n|7|5,20,1} vrhovi uništeni. Rasporedite vrhove tako da se nijedan od rubova ne preklapa.

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Eulerova formula

Svi ravni planeri dijele ravninu na koju su nacrtani, na brojna područja koja se nazivaju __lica__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vrhovi
[[5]] Lica
[[10]] Rubovi
_{span.euler-sum} 11 vrhova + lica_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] vrhovi
[[7]] Lica
[[14]] Rubovi
_{span.euler-sum} 15 vrhova + lica_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] vrhovi
[[13]] Lica
[[24]] Rubovi
_{span.euler-sum} 25 vrhova i lica_

:::

---
> id: euler-1

Kada uspoređujete ove brojeve, primijetit ćete da je broj rubova uvijek [[jedan manji|bigger|the same]] od broja lica plus broj vrhova. Drugim riječima, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Taj se rezultat zove __Eulerova jednadžba__ i ime je dobio po istom [matematičaru](bio:euler) koji je riješio problem Königsbergovih mostova. Nažalost, postoji beskonačno puno grafova i ne možemo provjeriti svaki da vidimo djeluje li Eulerova jednadžba. Umjesto toga, možemo pokušati pronaći jednostavan [dokaz](gloss:proof) koji djeluje za bilo koji graf ...

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

Bilo koji (konačni) graf može se konstruirati počevši s jednim vrhom i dodavanjem više vrhova jedan po jedan. Pokazali smo da, na koji god način dodali nove vrhove, vrijedi Eulerova jednadžba. Stoga vrijedi za sve grafikone. Proces koji smo koristili naziva se __matematička indukcija__. Vrlo je korisna tehnika dokazivanja rezultata u beskonačno mnogim slučajevima, jednostavno počevši od najjednostavnijeg slučaja i pokazujući da se rezultat drži na svakom koraku prilikom konstrukcije složenijih slučajeva.     .svg-block: include svg/dominoes.svg

---
> id: euler-4

Mnogi ravni planeti izgledaju vrlo slično mrežama [poliedra](gloss:polyhedron), trodimenzionalnim oblicima s [poligonalnim](gloss:polygon) licima. Ako mislimo na poliedre kao na elastične vrpce, možemo zamisliti da ih rastežemo dok oni ne postanu ravni, ravninski grafikoni:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

To znači da mogu koristiti Eulerovu formulu ne samo za ravnine grafova već i za sve poliedre - s jednom malom razlikom. Prilikom pretvaranja poliedra u grafikone jedno lice nestaje: gornje lice poliedra postaje „izvan“; grafova. Drugim riječima, ako računate broj __{.red} rubova__, __{.blue} lica__ i __{.green} vrhova__ od _bilo_ poliedrom, otkrit ćete da je _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Ikozaedar__
__{.blue} 20__ Lica
__{.green} 12__ Vrhovi
__{.red} 30__ Rubovi

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodekahedron__
__{.blue} 62__ Lica
__{.green} 60__ Vrhovi
__{.red} 120__ Rubovi

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Urezan ikosahedron__
__{.blue} 32__ Lica (12 crnih, 20 bijelih)
__{.green} 60__ Vrhovi
__{.red} 90__ Rubovi

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Bojanje karte

::: column.grow

Već smo koristili teoriju grafova s određenim mapama. Kako smanjivamo, pojedini putevi i mostovi nestaju i umjesto toga vidimo obris cijelih zemalja. Prilikom bojanja karte - ili bilo kojeg drugog crteža koji se sastoji od različitih regija - susjedne zemlje ne mogu imati istu boju. Također bismo željeli koristiti što manje različitih boja. Neke jednostavne "mape", poput šahovske ploče, trebaju samo dvije boje (crnu i bijelu), ali većina složenih karata treba više.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Pri bojanju karte američkih država 50 boja je očigledno dovoljno, ali je potrebno mnogo manje. Pokušajte obojiti donje karte s što manje boja:

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

Sve ove karte mogu se obojiti sa samo četiri različite boje, ali nije teško zamisliti da su druge, vrlo složene karte možda će trebati mnogo više boja. Zapravo, nekim mapama je potrebno __najmanje__ četiri boje, kad god sadrže četiri zemlje koje su međusobno povezane.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Kao i prije, kartu možemo pretvoriti sa zemljama i granicama u ravni plan: svaka zemlja postaje [[vrhova|an edge|a face]], i zemlje koje [[dijele granicu|have the same colour]] spojite se rubom:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Sada želimo obojiti vrhove grafa, a dvije vrhove moraju imati drugu boju ako su povezane rubom.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852. student botanike [Francis Guthrie](bio:guthrie) morao je obojiti kartu županija u Engleskoj. Primijetio je da mu se čini da su četiri boje dovoljne za bilo koju kartu koju je pokušao, ali nije uspio pronaći dokaz koji bi funkcionirao za _sve_ karte. Pokazalo se da je to bio izuzetno težak problem, i postao je poznat kao __teorema sa četiri boje__. Tijekom sljedećih 100 godina, mnogi su matematičari objavili "dokaze" za teoremu o četiri boje, samo da su kasnije otkrili pogreške. Neki od tih nevaljanih dokaza bili su toliko uvjerljivi da im je trebalo više od 10 godina da otkriju pogreške. Dugo vremena matematičari nisu bili u stanju ni dokazati da su dovoljne četiri boje, niti pronaći kartu koja treba više od četiri boje.

:::

---
> id: maps-4

Mali napredak postignut je u vezi s problemom četiri boje do 1976. godine, kada su [Wolfgang Haken](bio:haken) i [Kenneth Appel](bio:appel) upotrijebili računalo da bi ga konačno riješili. Smanjili su beskonačno mnogo mogućih karata na posebne slučajeve iz 1936., koje je svaki provjeravao računar koji je ukupno trajao više od 1000 sati.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Teorema s četiri boje prva je poznata matematička teorema dokazana pomoću računala, što je od tada postalo mnogo češći i manje kontroverzni. Brži kompjuteri i učinkovitiji algoritam znače da danas možete dokazati teoremu o četiri boje na prijenosnom računalu u samo nekoliko sati.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

Teorema s četiri boje djeluje samo za karte na ravnoj ravnini ili sferi, a gdje se sve zemlje sastoje od jednog područja.

Međutim, matematičari su također pogledali mape _carstava_, gdje se zemlje mogu sastojati od više isprepletenih komponenti, i karte na planetima različitog oblika, poput torusa (krofni oblik). U tim će vam slučajevima trebati više od četiri boje i dokazi će postati još teži.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## Problem putničkog prodavca

::: column.grow(parent="right")

Razmislimo još jednom o mrežama i kartama. Zamislite da dostavna služba mora posjetiti ${tsn}{tsn|8|2,50,1} različite gradove radi distribucije paketa. O tim gradovima možemo misliti kao o vrhovima na grafu. Ako su svi gradovi povezani cestama, ovo je [[kompletan grafikon|cycle|bipartite graph]], pa postoji <mfrac> <mrow> ${tsn} × (${tsn} - 1) </mrow> <mn> 2 </mn> </mfrac> = ${tsn*(tsn-1)/2} rubova ukupno.

Kamion za dostavu mora posjetiti sve gradove, bilo kojim redoslijedom. U problemu mostova Königsberg željeli smo pronaći staze koje putuju duž _svakog ruba_ točno jednu. Sada želimo pronaći staze koje _obilaze svaki vrh_ točno jednom. Ove se staze nazivaju __Hamiltonski ciklusi__.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Postoji bezbroj različitih mogućnosti za Hamiltonove cikluse u cjelovitim grafovima. Zapravo možemo odabrati bilo koju točku kao vršku i zatim odabrati bilo koji od preostalih gradova bilo kojim redoslijedom:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

U grafikonu sa ${tsn1}{tsn1|4|2,10,1} gradovima, svaki Hamiltonov ciklus također mora sadržavati ${tsn1} gradova. Sada,

    ul.var(:html="tsmString(tsn1)")

To znači da, ukupno, postoji ${tsnPaths(tsn1)} mogućih staza. Skraćenica za ovaj proizvod je ${tsn1}! ili ${tsn1} __Faktorski__.

Mogli biste zamisliti da možda neće biti moguće putovati izravno između dva grada - a da ne prođete kroz neki drugi grad. U tom slučaju više nemamo kompletan graf, a pronalazak broja Hamiltonovih ciklusa, ako oni uopšte postoje, postaje mnogo teže.

---
> id: salesman-3

::: column.grow(parent="right")

Do sada smo zanemarili činjenicu da bi neki gradovi mogli biti dalje od ostalih. U stvarnom životu, međutim, ovo je vrlo važno razmatranje: ne želimo samo pronaći _bilo koji_ put, već želimo pronaći najkraći. To se zove __Problem prodavca putovanja__. To se mora riješiti ne samo u transportu i logistici, već i pri postavljanju tranzistora na mikročipove, radi bržeg računala ili pri analizi strukture [DNA](gloss:dna).

Jedna jednostavna metoda bilo bi isprobati sve moguće staze, pronalazeći duljinu svakog, a zatim birajte najkraći. Međutim, pokazali smo da čak i sa samo 533 gradova ima ${tsn2}! = ${factorial(tsn2)} mogući putevi. Jednom kada imate stotine ili tisuće vrhova, iskušavanje svih mogućih staza postaje nemoguće, čak i koristeći moćna računala.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Nažalost, ne postoji učinkovitiji algoritam za rješavanje problema putničkog prodavca. Umjesto toga, matematičari i računalni znanstvenici razvili su različite algoritme koji pronalaze _dobra_ rješenja, čak i ako možda nisu baš najbolja. Ovi algoritmi, koji daju samo približna rješenja, nazivaju se __Heuristika__.

Pokušajte preurediti gradove na ovoj karti i promatrajte kako se mijenja najkraći put između njih. Gradove možete ukloniti dodirom na njih, a gradove možete dodati klikom bilo gdje na karti (do 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__pohlepni algoritam__ (ili najbliži algoritam susjeda) vrlo je jednostavan: krenete u slučajni grad i uzastopno se preselite u najbliži grad koji prije niste posjetili. Kad jednom posjetite sve gradove, zaustavite se.

::: column(width=300)

{.todo} Animacija uskoro stiže ...

:::

Možete pokazati da su u prosjeku staze pronađene pohlepnim algoritmom 25% duže od najkraćeg mogućeg puta.

---
> id: salesman-6

::: column.grow

__2-opt algoritam__ započinje slučajnim mogućim putem. Zatim nekoliko puta odaberete dva ruba i zamijenite ih ako bi to umanjilo duljinu staze. Zaustavite se kad ne možete dodatno smanjiti duljinu zamjenom bilo kojeg para rubova.

::: column(width=300)

{.todo} Animacija uskoro stiže ...

:::

---
> id: ants

Ispada da je priroda, prije nego što su računala uopće postojala, pronašla pametan način pronalaska optimalnih staza između različitih mjesta: u kolonijama mrava.

    x-parallax.full-width(background="images/ants.jpg")

Mravi žele pronaći najkraće moguće rute između svog gnijezda i mogućih izvora hrane. Oni mogu međusobno komunicirati kemikalijama koje ostave na tragu i koje drugi mravi mogu slijediti.

---
> id: ants-1

::: column.grow

* Kolonija mrava šalje mnogo izviđača koji u početku putuju nasumičnim pravcima. Kad pronađu hranu, vraćaju se, ostavljajući za sobom trag feromona.
* Ostali mravi imaju tendenciju da slijede trag kada pronađu jednog, koji ih vodi do hrane. Na povratku, oni polažu više feromona i na taj način pojačavaju trag.
* S vremenom feromon isparava. Što je put duži, to više treba vremena da mravi putuju po njemu i tako feromon ima više vremena za isparavanje. S druge strane, kratki se putovi mogu brže pojačati pa se njihova snaga brže povećava.

::: column(width=240)

{.todo} Dijagram uskoro stiže ...

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Algoritmi sustava Ant Colony (ACS) pokušavaju ponoviti ovo ponašanje na računalima, koristeći mnoge "virtualne" mrave. Vrlo brzo mogu naći vrlo dobra rješenja za problem putničkog prodavača.

Jedno posebno korisno svojstvo ACS algoritama je ta što se oni mogu neprekidno pokretati i prilagođavati u grafičkom obliku u stvarnom vremenu. Te bi promjene mogle biti uzrokovane prometnim nesrećama i zatvaranjem cesta na uličnim mrežama ili padom prometa na web poslužiteljima računalnih mreža.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Problem prodavača putovanja je [težak](gloss:np), što znači da je to vrlo teško riješiti računalima (barem za veliki broj gradova).

Pronalaženje brzog i točnog algoritma imalo bi ozbiljne implikacije na području računarske znanosti: to bi značilo da postoje brzi algoritmi za _svih_ NP-teških problema. Također bi većinu Internet sigurnosti učinilo beskorisnom, što se oslanja na činjenicu da se vjeruje da su određeni problemi vrlo teški za računala.

Pronalaženje brzog algoritma za rješavanje problema Putničkog prodavača također bi riješilo jedan od najpoznatijih otvorenih problema iz matematike i računarske znanosti, problem __P vs NP__. To je jedan od sedam problema [sa tisućljetnom nagradom](gloss:millennium-prize), a svaki nosi nagradu u iznosu od milion dolara.

:::

---
> section: scheduling
> sectionStatus: dev

## Problemi s planiranjem

{.todo} Uskoro

---
> id: applications
> section: applications
> translated: auto

## Grafovi u svakodnevnom životu

Vidjeli smo mnogo različitih primjena teorije grafova u prethodnim poglavljima, mada su neke od njih bile pomalo zamišljene. Ispada, međutim, da su grafovi sami temelj mnogih predmeta, koncepata i procesa u svakodnevnom životu.

::: column.grow

Na primjer, Internet je ogroman, virtualni graf. Svaka vršica pojedinačna je web stranica, a svaki rub znači da postoji hiperveza između dvije stranice. Imajte na umu da veze idu samo u jednom smjeru, tako da je ovaj grafikon [[usmjeren|multi-line|conected]] i da je ovaj grafikon _vrlo, vrlo velik_.

Neke web stranice, poput Wikipedije ili Facebooka, imaju puno dolaznih veza, dok mnoge manje web stranice mogu imati vrlo malo dolaznih veza. To je temeljni koncept koji Google koristi za razvrstavanje rezultata pretraživanja.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Web stranice s više dolaznih veza obično su kvalitetnije i trebaju biti prikazane na vrhu rezultata pretraživanja. Na primjer, kada tražite "London", službene informacije o turističkim informacijama prikazuju se pred malim trgovinama u Londonu ili blogovima ljudi koji žive u Londonu. Ova jednostavna ideja iz teorije grafova, __algoritam rangiranja stranica__, učinila je Google znatno boljim od ostalih pretraživača.

---
> id: applications-2

Internet je najveća mreža koju je čovječanstvo ikad stvorilo. Ova slika prikazuje vrlo mali udio svih poslužitelja povezanih na Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Dok web stranice i hiperveze čine _virtualni_ graf, postoji i _fizička_ mreža računala, poslužitelja, usmjerivača, telefonskih linija i kablova.

::: column.grow(parent="right")

Svaki put kad telefonirate ili učitate web mjesto, mrežni operatori moraju pronaći način za povezivanje pošiljatelja i primatelja, bez prekoračenja kapaciteta bilo kojeg pojedinačnog kabela ili veze. Teorija grafova i vjerojatnost omogućuju jamčenje pouzdane usluge, na primjer, pronalaženjem preusmjeravanja kada je određena veza zauzeta.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Grafovi također igraju važnu ulogu u prijevozu i plovidbi. Sve mreže letova, vlaka i podzemne željeznice formiraju grafikone koji se mogu koristiti pri kreiranju učinkovitih voznih linija. Jedan od najprepoznatljivijih grafova je mapa londonskog podzemlja:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Sve ceste i autoceste također čine veliku mrežu koja se koristi za navigacijske usluge poput Google Maps prilikom izrade najkraće rute između dviju zadatih točaka.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

U budućnosti će __Inteligentni transportni sustavi__ smanjiti zagušenja i nezgode učinkovitijim usmjeravanjem automobila koristeći podatke o lokaciji prikupljene sa pametnih telefona i automobila koji se voze. Ovo bi moglo uštedjeti milijune sati izgubljenih na cesti svake godine, značajno smanjiti zagađenje i omogućiti hitnim službama da brže putuju.

:::

---
> id: applications-6

Ova slika prikazuje mrežu komercijalnih avionskih letova kroz sjevernu Europu.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Postoji bezbroj drugih grafova iz znanosti, inženjerstva ili svakodnevnog života:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Veze između atoma u __molekuli__ i kristalne rešetke tvore graf.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __širenje bolesti__ i epidemija može se modelirati pomoću mreže.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} U biologiji, __evolucijska stabla__ koja prikazuju porijeklo vrsta iz grafa.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Različite komponente __električnih krugova__ i računalni čipovi tvore mrežu.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Gramatička struktura __jezika__ može se modelirati pomoću grafikona, na primjer za stvaranje algoritama za prijevod.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Grafovi također imaju mnogo primjena u __vjerojatnosti__, __teoriji igara__ i __financijskoj matematici__.

:::

---
> id: social

### Društvene mreže

Za kraj, razmislimo o jednom posebno dobrom primjeru grafova koji postoje u svakodnevnom životu: društvenim medijima. Ovdje vrhovi predstavljaju [[ljudi|friends|networks]], a rubovi predstavljaju prijateljstva, lajkove, pretplate ili sljedbenike.

Kad crtamo grafikone na društvenim mrežama, mogli bismo vidjeti određene __nakupine__ zajedničkih prijatelja, koji su možda išli u istu školu ili žive u istom gradu. Također možemo odrediti __središnju povezanost ljudi__, što ovisi o dobroj povezanosti i koja može biti mjerilo popularnosti osobe na društvenim mrežama.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014. godine Facebook je imao 1,4 milijarde aktivnih korisnika i ukupno više od 200 milijardi prijateljstava. Polovina svih korisnika Facebooka ima više od 200 prijatelja, a budući da većina naših prijatelja ima sličan broj prijatelja, lako bismo mogli imati desetke tisuća _prijatelja_.

Uzbudljivo bi pitanje postalo: ako odaberete bilo kojeg drugog nasumičnog korisnika Facebooka, koliko biste „rubova prijateljstva“ trebali pratiti da biste prešli s jednog na drugog? Na primjer, udaljenost između prijatelja je [[1]], udaljenost između prijatelja prijatelja [[2]], i tako dalje.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

2016. godine Facebook je proveo [istraživanje](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) kako bi utvrdio na koji su način njegovi korisnici povezani jedni s drugima. Otkrili su da ste u prosjeku na _bilo kome drugom_ na Facebooku povezani s najviše 3,57 drugih ljudi. A to uključuje slavne, političare ili čak kraljevske!

Drugim riječima, ako odaberete nekog od milijardi korisnika Facebooka širom svijeta, vjerojatno će imati prijatelja prijatelja koji poznaje prijatelja jednog od vaših prijatelja. Kažemo da postoje 3,57 __stupnjeva razdvojenosti__.

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

1929. godine, kada je mađarska autorica [Frigyes Karinthy](bio:karinthy) prvi put predložila ideju o „šest stupnjeva razdvojenosti“, nije postojao Internet niti društveni mediji, već je svijet već počeo postajati sve više povezan.

1967. [Stanley Milgram](bio:milgram) izveo je prvi empirijski eksperiment u kojem je od 296 sudionika koji žive u Nebraski i Kansasu zatraženo da dostave pismo određenoj osobi koja živi u Bostonu, Massachusetts. Svi su morali odabrati prijatelja kojem će poslati pismo, koji je potom odabrao drugog prijatelja. Na svakom koraku pismo se približavalo Bostonu. Milgram je otkrio da u prosjeku ima samo 5,2 posrednika & # 8211; 5,2 stupnja odvajanja.

:::

Danas je svatko od nas dio bezbrojnih nevidljivih grafova koji su temelj naših društvenih interakcija, putovanja, interneta i tehnologije, znanosti i još mnogo toga.
