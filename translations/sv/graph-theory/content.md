# Grafer och nätverk

## Introduktion

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

Varje dag omges vi av otaliga anslutningar och nätverk: vägar och järnvägsspår, telefonlinjer, internet, elektroniska kretsar och till och med molekylära bindningar. Det finns till och med _sociala nätverk_ mellan vänner och familjer. Kan du tänka på några andra exempel?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Väg- och järnvägsnät

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Datorchip

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Försörjningskedjor

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} vänskap

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Neurala anslutningar

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Internet

:::

---
> id: intro

::: column.grow

I matematik kan alla dessa exempel representeras som [__diagram__](gloss:graph) (inte förväxlas med _grafen_ för en funktion). En graf består av vissa _punkter som_ kallas [[vertikaler | cirklar | korsningar]] , av vilka några är förbundna med [[kanter | gränser | par]] .

__Grafteori__ är studiet av grafer och deras egenskaper. Det är ett av de mest spännande och visuella områdena i matematik och har otaliga viktiga tillämpningar.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Vi kan rita layouten för enkla grafer med cirklar och linjer. Hörnpunkternas placering och kanternas längd är irrelevant - vi bryr oss bara om _hur de är anslutna_ till varandra. Kanterna kan till och med korsa varandra och behöver inte vara raka.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} I vissa grafer går kanterna bara en väg. Dessa kallas [__riktade diagram__](gloss:directed-graph) .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Vissa grafer består av flera grupper av toppar som inte är förbundna med varandra genom kanter. Dessa diagram är __frånkopplade__ .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Andra grafer kan innehålla flera kanter mellan samma par av hörn, eller hörn som är anslutna till sig själva (slingor).

:::

---
> id: intro-2

Vi kan skapa nya grafer från en befintlig graf genom att ta bort en del av hörn och kanter. Resultatet kallas en [__subgraf__](gloss:subgraph) . Här kan du se några fler exempel på grafer, med färgade kanter och hörn som indikerar en möjlig undergraf:

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

Vi säger att [__ordningen__](gloss:graph-order) på en graf är antalet vertikaler som den har. [__Graden__](gloss:graph-degree) av ett toppunkt är antalet kanter som möts vid det toppunktet.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Beställning: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Beställning: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Examen: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Examen: [[6]]

:::

---
> id: intro-4

Grafer som består av en enda ögla med vertikaler kallas [__cykler__](gloss:graph-cycle) . Alla cykler har [[samma antal kanter och hörn | fler kanter än vertikaler | färre kanter än vertikaler]] .

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Utrustad med dessa nya definitioner, låt oss utforska några av de fascinerande egenskaperna och tillämpningarna av grafer.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Königsbergs broar

::: column.grow

[Leonhard Euler var](bio:euler) en av de första matematikerna som tänkte på grafer och nätverk. Euler blev fascinerad av ett gammalt problem beträffande staden Königsberg nära Östersjön.

Floden Pregel delar upp Königsberg i fyra separata delar som är förbundna med sju broar. Är det möjligt att gå runt staden som korsar alla broar exakt en gång - men inte mer än en gång? (Du kan börja och avsluta var som helst, inte nödvändigtvis på samma plats.)

Försök hitta en giltig rutt genom att rita på dessa kartor:

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

När det gäller Königsberg verkar det vara omöjligt att hitta en giltig rutt, men några av de andra städerna fungerar. Euler lyckades hitta en enkel regel som kan tillämpas på vilken stad som helst utan att behöva prova många möjligheter - med grafteori.

::: column.grow

Först måste vi konvertera stadskartorna till diagram med kanter och vertikaler. Varje ö eller landskap representeras av [[ett toppunkt | en kant | ett område]] och varje bro som förbinder två regioner representeras av en motsvarande [[kant | vertex | gata]] .

{.reveal(when="blank-0 blank-1")} Nu har problemet med att "turnera en stad medan du korsar varje bro exakt en gång" blivit ett problem med "ritning av en graf med ett kontinuerligt slag medan du spårar varje kant exakt en gång".

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Ta fram några olika grafer på papper och försök sedan ta reda på vilka som kan ritas med ett enda, kontinuerligt slag.

---
> id: bridges-3
> goals: size prime eo

Precis som för stadskartan förut hittar vi att vissa grafer är möjliga medan andra inte är det. För att hjälpa oss förstå varför, låt oss märka varje toppunkt med dess [grad](gloss:graph-degree) . Då kan vi färga topparna på olika sätt och försöka avslöja ett mönster:

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

Jämförs dessa siffror med grafer som är möjliga och de som inte är möjliga verkar det som om ett diagram kan ritas om det inte [[har mer än två "udda" hörn | har bara "jämna" toppar | har inga vertikaler med en order större än 4 | har ett udda antal vertikaler | har inga vertikaler i ordning 3]] . Detta tillstånd kan förklaras om vi bara tittar på ett enda toppunkt i grafen:

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

Om du bläddrar tillbaka till kartan över Königsberg, kommer du att upptäcka att det finns mer än två öar med ett udda antal broar. Därför är en rutt som korsar varje bro exakt en gång verkligen omöjlig - och det är vad Leonard Euler upptäckte.

Eulers upptäckt kanske inte verkar särskilt användbar i verkligheten, men diagram är grunden till många andra geografiska problem, till exempel att hitta vägbeskrivningar mellan två platser. Vi kommer att upptäcka fler av dessa applikationer senare.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Handskakningar och dejting

::: column.grow

Du har blivit inbjuden till en underbar födelsedagsfest med dina vänner. Inklusive dig själv och värden finns det ${hnd}{hnd|5|3,15,1} människor närvarande.

På kvällen, när gästerna är redo att lämna, skakar alla hand med alla andra. Hur många handskakningar är det totalt?

Vi kan representera handskakningarna med hjälp av en graf: varje person är [[ett toppunkt | en kant]] , och varje handskakning är [[en kant | ett toppunkt]] .

{.reveal(when='blank-0 blank-1')} Nu är det enkelt att räkna antalet kanter i diagrammet. Vi finner det där med ${hnd} människor, det finns ${hnd*(hnd-1)/2} handslag.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

I stället för att räkna alla kanter i stora diagram kan vi också försöka hitta en enkel formel som berättar resultatet för _valfritt_ antal gäster.

Var och en av ${n}{n|5|2,8,1} folk på festen skakar hand med ${n-1} andra. Det gör ${n} × ${n-1} = ${n×(n-1)} totalt handskakningar. För _n_ människor skulle antalet handskakningar vara [[`n×(n–1)`|`n×(n+1)`|`n^2`]] .

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Tyvärr är detta svar inte helt rätt. Lägg märke till hur [de två första posterna på den översta raden](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) är faktiskt samma, bara vänt runt.

Vi har faktiskt räknat varje handskakning [[två gånger | en gång | tre gånger]] , _{span.reveal(when="blank-0")} en gång för var och en av de två inblandade. Detta betyder att rätt antal handskakningar för ${n}{n|5|2,25,1} gäster är `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._

---
> id: handshakes-3

Handskakningsgraferna är speciella eftersom varje toppunkt är ansluten till varje annan toppunkt. Grafer med den här egenskapen kallas __kompletta grafer__ . Den kompletta grafen med 4 vertikaler förkortas ofta som `K_4` är den kompletta grafen med 5 vertikaler känd som `K_5` , och så vidare.

Vi har precis visat att en komplett graf med `n` vertex, `K_n` , har `(n × (n-1))/2` kanter.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

På en annan dag är du inbjuden till ett speed dating-evenemang för ${m}{m|5|2,8,1} pojkar och ${f}{f|4|2,8,1} flickor. Det finns många små bord och varje pojke tillbringar 5 minuter med var och en av flickorna. Hur många enskilda "datum" är det totalt?

::: column.grow

I detta fall består motsvarande graf av två separata uppsättningar av hörn. Varje topp är ansluten till [[motsatta]] vertikaler [[| sin egen]] uppsättning, men ingen av topparna i [[sin egen | motsatt]] uppsättning. Grafer som har denna layout kallas __bipartitgrafer__ .

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Den tvåpartsgrafen med två uppsättningar av storlek _x_ och _y_ skrivs ofta som `K_"x,y"` . Det har [[`x×y`|`x+y`|`2x–y`]] kanter, _{span.reveal(when="blank-2")} vilket betyder att i exemplet ovan finns det ${m} × ${f} = ${m×f} datum._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Plana diagram

::: column.grow

Här är ett annat pussel som är relaterat till grafteori.

I en liten by finns det tre hus och tre bruksanläggningar som producerar vatten, el och gas. Vi måste ansluta var och en av banorna till var och en av verktygsanläggningarna, men på grund av byns utformning får de olika rören och kablarna inte gå över.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Försök att ansluta vart och ett av husen till vart och ett av verktygsföretagen nedan, utan att några av dina linjer korsar varandra:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Precis som Königsbergbroarna tidigare upptäcker du snabbt att detta problem också är omöjligt. Det verkar som att vissa grafer kan ritas utan överlappande kanter - dessa kallas __plana diagram__ - men andra kan inte.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` är plan.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[är plan | är inte plan]] .

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[är inte plan | är plan]] .

:::

---
> id: utilities-2

Den [kompletta grafen](gloss:complete-graph) `K_5` är den minsta grafen som inte är plan. Alla andra diagram som innehåller `K_5` som en subgraf på något sätt är inte heller plan. Detta inkluderar `K_6` , `K_7` och alla större kompletta diagram.

Grafen i de tre verktygspusslet är den [tvåpartsgrafen](gloss:bipartite-graph) `K_"3,3"` . Det visar sig att alla icke-plana diagram antingen måste innehålla en `K_5` eller a `K_"3,3"` (eller en [underindelning](gloss:subdivision) av dessa två grafer) som en undergraf. Detta kallas _Kuratowski's teorem_ .

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planhet

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Detta är ett plant diagram, men ${n}{n|7|5,20,1} vertikaler har skrapats upp. Ordna om topparna så att ingen av kanterna överlappar varandra.

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Eulers formel

Alla plana diagram delar upp planet som de dras på i ett antal områden, kallade __ansikten__ .

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] vertikaler
[[5]] ansikten
[[10]] kanter
_{span.euler-sum} 11 vertikaler + ansikten_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] vertikaler
[[7]] ansikten
[[14]] kanter
_{span.euler-sum} 15 vertikaler + ansikten_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] vertikaler
[[13]] ansikten
[[24]] kanter
_{span.euler-sum} 25 vertikaler + ansikten_

:::

---
> id: euler-1

När du jämför dessa siffror kommer du att märka att antalet kanter alltid är [[ett mindre | större | samma sak]] än antalet ansikten plus antalet vertikaler. Med andra ord, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Detta resultat kallas __Eulers ekvation__ och är uppkallad efter samma [matematiker](bio:euler) som löste problemet med Königsberg Bridges.

Tyvärr finns det oändligt många grafer och vi kan inte kontrollera var och en för att se om Eulers ekvation fungerar. Istället kan vi försöka hitta ett enkelt [bevis](gloss:proof) som fungerar för alla diagram ...

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

Alla (begränsade) diagram kan konstrueras genom att börja med ett toppunkt och lägga till fler vertikaler en efter en. Vi har visat att, oavsett sätt vi lägger till nya vertikaler, är Eulers ekvation giltig. Därför är det giltigt för alla diagram.

Den process vi har använt kallas __matematisk induktion__ . Det är en mycket användbar teknik för att bevisa resultat i oändligt många fall, helt enkelt genom att börja med det enklaste fallet, och visa att resultatet håller i varje steg när man bygger mer komplexa fall.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Många plana diagram ser mycket lika ut som nät av [polyeder](gloss:polyhedron) , tredimensionella former med [polygonala](gloss:polygon) ytor. Om vi tänker på polyeder som är gjorda av elastiska band, kan vi föreställa oss att sträcka ut dem tills de blir plana, plana grafer:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Detta betyder att vi kan använda Eulers formel inte bara för plana diagram utan också för alla polyhedra - med en liten skillnad. När man omvandlar polyhedraen till diagram, försvinner en av ansiktena: den övre ytan på polyhedraen blir ”utsidan”; av graferna.

Med andra ord, om du räknar antalet __{.red} kanter__ , __{.blue} ansikten__ och __{.green} toppar__ av _alla_ polyeder, du kommer att hitta det _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] .

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __icosahedron__
__{.blue} 20__ ansikten
__{.green} 12__ vertikaler
__{.red} 30__ kanter

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__
__{.blue} 62__ Ansikten
__{.green} 60__ vertikaler
__{.red} 120__ kanter

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Trunkerad Icosahedron__
__{.blue} 32__ ansikten (12 svarta, 20 vita)
__{.green} 60__ vertikaler
__{.red} 90__ kanter

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Kartläggning

::: column.grow

Vi har redan använt grafteori med vissa kartor. När vi zooma ut försvinner enskilda vägar och broar och i stället ser vi konturen över hela länder.

När man målar en karta - eller någon annan ritning bestående av distinkta regioner - kan angränsande länder inte ha samma färg. Vi kanske också vill använda så få olika färger som möjligt.

Vissa enkla "kartor", som ett schackbräde, behöver bara två färger (svart och vitt), men de flesta komplexa kartor behöver mer.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

När man målar kartan över amerikanska stater räcker uppenbarligen 50 färger, men mycket färre är nödvändiga. Prova att måla kartorna nedan med så få färger som möjligt:

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

Alla dessa kartor kan färgas med bara fyra olika färger, men det är inte svårt att föreställa sig att andra, mycket komplicerade kartor kan behöva många fler färger. I själva verket behöver vissa kartor __minst__ fyra färger, när de innehåller fyra länder som alla är kopplade till varandra.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Som tidigare kan vi konvertera en karta med länder och gränser till en plan graf: varje land blir [[ett toppunkt | en kant | ett ansikte]] och länder som [[delar en gräns | ha samma färg]] kopplas ihop med en kant:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Nu vill vi färga vertikorna på en graf, och två toppar måste ha en annan färg om de är anslutna i en kant.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852 fick botanikstudenten [Francis Guthrie](bio:guthrie) måla en karta över län i England. Han observerade att fyra färger tycktes räcka för någon karta han försökte, men han kunde inte hitta ett bevis som fungerade för _alla_ kartor. Detta visade sig vara ett oerhört svårt problem och blev känt som __fyra färdsatsen__ .

Under de följande 100 åren publicerade många matematiker ”bevis” på fyra färgsteorem, bara för att misstag hittades senare. Vissa av dessa ogiltiga bevis var så övertygande att det tog mer än tio år att upptäcka fel.

Under en lång tid kunde matematikerna inte heller bevisa att fyra färger räcker, eller hitta en karta som behövde mer än fyra färger.

:::

---
> id: maps-4

Lite framsteg gjordes med fyra färgproblem fram till 1976, då [Wolfgang Haken](bio:haken) och [Kenneth Appel](bio:appel) använde en dator för att äntligen lösa det. De reducerade oändligt många möjliga kartor till 1936 specialfall, som vart och ett kontrollerades av en dator som tog över 1000 timmar totalt.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Det fyra färgsteoremet är det första välkända matematiska teoremet som bevisats med hjälp av en dator, något som har blivit mycket vanligare och mindre kontroversiellt sedan dess. Snabbare datorer och en effektivare algoritm innebär att du idag kan bevisa fyra färdsatser på en bärbar dator på bara några timmar.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

De fyra färgerna fungerar bara för kartor på ett plant plan eller en sfär, och där alla länder består av ett enda område.

Men matematiker har också tittat på kartor över _imperier_ , där länder kan bestå av flera frånkopplade komponenter och på kartor på olika formade planeter, till exempel en torus (munkform). I dessa fall kan du behöva mer än fyra färger och bevisen blir ännu svårare.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## Det resande säljaren problemet

::: column.grow(parent="right")

Låt oss tänka ännu en gång om nätverk och kartor. Föreställ dig att en leveransservice måste besöka ${tsn}{tsn|8|2,50,1} olika städer för att distribuera paket. Vi kan tänka på dessa städer som topparna i en graf. Om alla städer är anslutna med vägar är detta en [[komplett graf | cykel | tvåpartsgraf]] , så det finns det <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} kanter totalt.

Leveransbilen måste besöka alla städer i alla ordningar. I Königsberg-broproblemet ville vi hitta stigar som går längs _varje kant_ exakt. Nu vill vi hitta vägar som besöker _varje toppunkt_ exakt en gång. Dessa vägar kallas __Hamiltonian cykler__ .

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Det finns otaliga olika möjligheter för Hamiltonian-cykler i kompletta diagram. I själva verket kan vi välja valfri toppunkt som startpunkt och sedan välja någon av de återstående städerna i valfri ordning:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

I en graf med ${tsn1}{tsn1|4|2,10,1} städer, måste varje Hamiltonian-cykel också innehålla ${tsn1} städer. Nu,

    ul.var(:html="tsmString(tsn1)")

Detta innebär att det totalt finns ${tsnPaths(tsn1)} möjliga vägar. En korthet för denna produkt är ${tsn1} ! eller ${tsn1} __Factorial__ .

Du kan tänka dig att det kanske inte är möjligt att resa direkt mellan två städer - utan att gå via en annan stad. I så fall har vi inte längre en komplett graf, och att hitta antalet Hamiltonian-cykler, om de finns alls, blir mycket svårare.

---
> id: salesman-3

::: column.grow(parent="right")

Hittills har vi ignorerat det faktum att vissa städer kan vara längre från varandra än andra. I verkliga livet är detta emellertid ett mycket viktigt övervägande: vi vill inte bara hitta _någon_ väg utan vi vill hitta den kortaste vägen. Detta kallas __Travelling Salesman Problem__ . Det måste lösas inte bara inom transport och logistik, utan också när man placerar transistorer på mikrochips, för att göra snabbare datorer eller när man analyserar [DNA-](gloss:dna) strukturen.

En enkel metod skulle vara att prova alla möjliga vägar, hitta längden på varje och sedan välja den kortaste. Men vi har bara visat det, även med bara ${tsn2}{tsn2|10|2,20,1} städer finns ${tsn2} ! = ${factorial(tsn2)} möjliga vägar. När du väl har hundratals eller tusentals vertikaler blir det omöjligt att prova alla möjliga vägar, även med kraftfulla datorer.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Tyvärr finns det ingen effektivare algoritm för att lösa det resande säljaren problemet. Istället har matematiker och datavetare utvecklat olika algoritmer som hittar _bra_ lösningar, även om de kanske inte är de allra bästa. Dessa algoritmer, som bara ger ungefärliga lösningar, kallas __Heuristics__ .

Försök omarrangera städerna på den här kartan och se hur den kortaste vägen mellan dem ändras. Du kan ta bort städer genom att trycka på dem och du kan lägga till städer genom att klicka var som helst på kartan (upp till 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

Den __giriga algoritmen__ (eller närmaste grannalgoritm) är mycket enkel: du börjar i en slumpmässig stad och flyttar i följd till den närmaste stad du inte har besökt tidigare. När du har besökt alla städer stannar du.

::: column(width=300)

{.todo} Animering kommer snart ...

:::

Du kan visa att i genomsnitt är banor som hittas med den giriga algoritmen 25% längre än den kortaste möjliga sökvägen.

---
> id: salesman-6

::: column.grow

__2-optalgoritmen__ börjar med en slumpmässig möjlig sökväg. Sedan väljer du upprepade gånger två kanter och byter runt dem om det skulle minska banans längd. Du stannar när du inte kan minska längden ytterligare genom att byta några par par kanter.

::: column(width=300)

{.todo} Animering kommer snart ...

:::

---
> id: ants

Det visar sig att naturen länge innan datorer existerade hade hittat ett smart sätt att hitta optimala vägar mellan olika platser: i myrkolonier.

    x-parallax.full-width(background="images/ants.jpg")

Myror vill hitta kortast möjliga rutter mellan deras bo och möjliga matkällor. De kan kommunicera med varandra genom kemikalier som de lämnar längs sin spår och vilka andra myror kan följa.

---
> id: ants-1

::: column.grow

* Myrkolonin skickar ut många speider som ursprungligen reser i slumpmässiga riktningar. När de har hittat mat återvänder de och lämnar efter sig ett spår av feromon. * Andra myror tenderar att följa en spår när de hittar en, vilket leder dem till mat. På sin återresa deponerar de mer feromon, vilket förstärker spåret. * Med tiden avdunstar feromon. Ju längre en väg är, desto mer tid tar det myror att resa längs den, och så har feromonen mer tid att avdunsta. Korta vägar kan å andra sidan förstärkas snabbare, så att deras styrka ökar snabbare.

::: column(width=240)

{.todo} Diagram kommer snart ...

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Ant Colony System (ACS) algoritmer försöker replikera detta beteende på datorer med många "virtuella" myror. De kan snabbt hitta mycket bra lösningar för det resande säljaren problemet.

En särskilt användbar egenskap hos ACS-algoritmer är att de kan köras kontinuerligt och anpassa sig i realtid till förändringar i grafen. Dessa förändringar kan orsakas av bilolyckor och vägstängningar i gatunät, eller av trafikspikar till webbservrar i datornät.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Problemet med den resande säljaren är [NP-hårt](gloss:np) , vilket innebär att det är mycket svårt att lösas av datorer (åtminstone för ett stort antal städer).

Att hitta en snabb och exakt algoritm skulle ha allvarliga konsekvenser inom datavetenskapen: det skulle betyda att det finns snabba algoritmer för _alla_ NP-hårda problem. Det skulle också göra det mesta av Internet-säkerhet värdelös, vilket förlitar sig på att vissa problem tros vara mycket svåra för datorer.

Att hitta en snabb algoritm för att lösa Travelling Salesman-problemet skulle också lösa ett av de mest kända öppna problemen inom matematik och datavetenskap, __P vs NP-__ problemet. Det är ett av de sju [tusenprisproblemen](gloss:millennium-prize) , var och en har ett pris på 1 miljoner dollar.

:::

---
> section: scheduling
> sectionStatus: dev

## Schemaläggningsproblem

{.todo} Kommer snart

---
> id: applications
> section: applications
> translated: auto

## Grafer i vardagen

Vi har sett många olika tillämpningar av grafteori i de föregående kapitlen, även om vissa av dem var lite motstridiga. Det visar sig dock att grafer är grunden för många objekt, begrepp och processer i vardagen.

::: column.grow

Internet är till exempel en stor, virtuell graf. Varje toppunkt är en enskild webbsida och varje kant innebär att det finns en hyperlänk mellan två sidor. Observera att länkar bara går en väg, så den här grafen är [[riktad | multi-line | conected]] , och att denna graf är _mycket, mycket, stor_ .

 Vissa webbplatser, som Wikipedia eller Facebook, har massor av inkommande länkar, medan många mindre webbplatser kan ha mycket få inkommande länkar. Detta är det underliggande konceptet som Google använder för att sortera sökresultat.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Webbplatser med fler inkommande länkar tenderar att vara av högre kvalitet och bör visas högst upp i sökresultaten. När du till exempel söker efter "London" visas officiella turistinformationssidor före små butiker i London eller bloggar om människor som bor i London. Denna enkla idé från grafteori, __Page Rank Algoritmen__ , gjorde Google betydligt bättre än andra tidiga sökmotorer.

---
> id: applications-2

Internet är det största nätverket som någonsin skapats av mänskligheten. Den här bilden visar en mycket liten andel av alla servrar som är anslutna till Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Medan webbplatser och hyperlänkar bildar en _virtuell_ graf, finns det också det _fysiska_ nätverket av datorer, servrar, routrar, telefonlinjer och kablar.

::: column.grow(parent="right")

Varje gång du ringer eller laddar en webbplats måste nätoperatörer hitta ett sätt att ansluta avsändare och mottagare, utan att överskrida kapaciteten för någon enskild kabel eller anslutning. Grafteori och sannolikhet gör det möjligt att garantera en tillförlitlig tjänst, till exempel genom att hitta avledningar när en viss anslutning är upptagen.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Grafer spelar också en viktig roll i transport och navigering. Alla flyg-, tåg- och tunnelbana nätverk bildar diagram som kan användas när du skapar effektiva scheman. En av de mest kända graferna är London Underground-kartan:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Alla vägar och motorvägar bildar också ett stort nätverk, som används av navigeringstjänster som Google Maps när man arbetar med den kortaste vägen mellan två givna punkter.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

I framtiden kommer __intelligenta transportsystem__ att minska trafikstockningar och olyckor genom att dirigera bilar mer effektivt genom att använda platsdata som samlas in från smartphones och självkörande bilar. Detta kan spara miljoner timmar förlorade på vägen varje år, minska föroreningar avsevärt och låta räddningstjänsterna resa snabbare.

:::

---
> id: applications-6

Den här bilden visar nätverket av kommersiella flygbolag över norra Europa.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Det finns otaliga andra grafer i vetenskap, teknik eller vardagsliv:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Länkarna mellan atomer i __molekyler__ och kristallgaller bildar en graf.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __Spridningen av sjukdomar__ och epidemier kan modelleras med hjälp av ett nätverk.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} I biologi bildar de __evolutionära träden__ som visar arternas ursprung en graf.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} De olika komponenterna i __elektriska kretsar__ och datorchips bildar ett nätverk.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Den grammatiska strukturen för __språk__ kan modelleras med hjälp av grafer, till exempel för att skapa översättningsalgoritmer.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Grafer har också många tillämpningar inom __sannolikhet__ , __spelteori__ och __finansiell matematik__ .

:::

---
> id: social

### Sociala nätverk

Låt oss slutligen tänka på ett särskilt bra exempel på diagram som finns i vardagen: sociala medier. Här representerar vertikaler [[människor | vänner | nätverk]] och kanter representerar vänskap, gillar, prenumerationer eller följare.

När vi ritar diagram på sociala medier kan vi se vissa __kluster__ av ömsesidiga vänner, som kan ha gått på samma skola eller bo i samma stad. Vi kan också bestämma människors __centralitet__ , vilket beror på hur välkopplad en toppunkt är, och som kan vara ett mått på en persons popularitet på sociala medier.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014 hade Facebook 1,4 miljarder aktiva användare och totalt mer än 200 miljarder vänskap. Hälften av alla Facebook-användare har mer än 200 vänner, och eftersom de flesta av våra vänner har ett liknande antal vänner, kan vi lätt ha tiotusentals _vänner av vänner_ .

En spännande fråga skulle nu vara: om du väljer två slumpmässiga Facebook-användare, hur många "vänskapskanter" skulle du behöva följa för att komma från det ena till det andra? Till exempel är avståndet mellan vänner [[1]] , avståndet mellan vänner till vänner är [[2]] osv.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

2016 genomförde Facebook [en studie för](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) att avgöra hur dess användare är anslutna till varandra. De fann att du i genomsnitt är ansluten till _någon annan_ på Facebook via högst 3,57 andra personer. Och detta inkluderar kändisar, politiker eller till och med kungligheter!

Med andra ord, om du väljer någon av miljarder Facebook-användare över hela världen kommer de förmodligen att ha en vän till en vän som känner en vän till en av dina vänner. Vi säger att det finns 3,57 __graders separering__ .

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

1929, när den ungerska författaren [Frigyes Karinthy](bio:karinthy) först föreslog idén om "sex graders separation", fanns det inget internet eller sociala medier, men världen hade redan börjat bli mer sammankopplade.

1967 genomförde [Stanley Milgram](bio:milgram) ett första empiriskt experiment, där 296 deltagare som bodde i Nebraska och Kansas uppmanades att leverera ett brev till en viss person som bor i Boston, Massachusetts. De var tvungna att välja en vän att skicka brevet till, som sedan valde en annan vän. Vid varje steg flyttade brevet närmare Boston. Milgram fann att det i genomsnitt bara var 5,2 mellanliggande vänner - 5,2 graders separation.

:::

Idag är var och en av oss en del av otaliga osynliga grafer som ligger till grund för våra sociala interaktioner, resor, Internet och teknik, vetenskap och så mycket mer.
