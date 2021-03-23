# Fraktaler

## Introduktion

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

När du tittar runt naturen kanske du har märkt intrikata växter som dessa:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Denna __Fern__ består av många små blad som grenar bort en större.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Denna __Romanesco broccoli__ består av mindre [[kottar|cubes|spheres]] som snurrar runt en större.

:::

{.reveal(when="blank-0")} Ursprungligen verkar dessa vara mycket komplexa former - men när du tittar närmare kanske du märker att de båda följer ett relativt enkelt mönster: alla [enskilda delar](target:fractal) av växterna ser exakt lika ut som hela växt, bara mindre. Samma mönster upprepas om och om igen, i mindre skalor. [Fortsätt](btn:next)

---

> id: fern

I matematik kallar vi den här egenskapen __självlikhet__, och former som har den kallas [__fraktaler__](gloss:fractal). De är några av de vackraste och mest bisarra föremålen i all matematik.

För att skapa våra egna fraktaler måste vi börja med ett enkelt mönster och sedan upprepa det om och om igen, i mindre skalor.

::: column.grow

Ett av de enklaste mönstren kan vara ett [{.pill.red} radsegment](target:s1), med [{.pill.blue} ytterligare två segment](target:s2) som förgrenas ena änden. Om vi upprepar detta mönster kommer båda dessa blå segment också att ha ytterligare två grenar i sina ändar.

Du kan flytta [blå prickar](target:dot) för att ändra längden och vinkeln på alla grenarna. Öka sedan antalet iterationer med [reglaget](->#fern-slider) nedan.

{.reveal(when="slider-0")} Beroende på grenarnas placering kan du göra helt olika mönster - ser ut som [ormbunken](action:set(130,228,197,184)) ovan, ett [träd](action:set(160,186,200,186)) eller [kapslade pentagoner](action:set(113,235,232,238)). Vad hittar du mer? [Fortsätt](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---

> id: triangle

::: column.grow(parent="right")

En annan berömd fraktal är [__Sierpinski triangeln__](gloss:sierpinski-triangle). I det här fallet börjar vi med en stor, liksidig triangel och klipper sedan upprepade gånger mindre trianglar ur de återstående delarna.

{.reveal(when="slider=0")} Lägg märke till hur den slutliga formen består av [tre identiska kopior av sig själv](target:x), och var och en av dessa består av ännu mindre kopior av hela triangeln! Du kan fortsätta zooma in i triangeln för alltid, och mönstren och formerna kommer alltid att upprepa.

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: real

Växterna i början av detta kapitel _ser_ precis som fraktaler, men det är helt klart omöjligt att skapa _verkliga_ fraktaler i verkligheten. Om vi fortsätter att upprepa samma mönster om och om igen, mindre och mindre, skulle vi så småningom komma till celler, molekyler eller atomer som inte längre kan delas upp.

Men med matematik kan vi tänka på de egenskaper som verkliga fraktaler "skulle" ha - och dessa är mycket överraskande ... [Fortsätt](btn:next)

---
> id: dimension

### Fraktala dimensioner

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Låt oss först tänka på fraktalernas dimension. En rad har dimension [[1]]. _{span.reveal(when="blank-0")} När den skalas med en faktor 2 ökar dess längd med en faktor på `2^1 = 2`. Självklart_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

En kvadrat har dimension [[2]]. _{span.reveal(when="blank-0")} När den skalas med en faktor 2 ökar dess areal med en faktor `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

En kub har dimensionen [[3]]. _{span.reveal(when="blank-0")} När man skalar den med en faktor 2 ökar volymen med en faktor `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Observera att den större kuben i bilden består av 8 kopior av den mindre!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Låt oss titta på Sierpinski-triangeln. Om vi skalar det med en faktor 2, kan du se att det är "area" ökar med en faktor på [[3]].

{.reveal(when="blank-0")} Låt oss säga att _d_ är dimensionen i Sierpinski-triangeln. Med samma mönster som ovan får vi `2^d = 3`. Med andra ord, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585…_

:::

---
> id: dimension-4

Men vänta ... hur kan något ha en dimension som inte är ett heltal? Det verkar omöjligt, men detta är bara en av de konstiga egenskaperna hos fraktaler. I själva verket är det detta som ger fraktaler deras namn: de har en __fraktionerad dimension__.

Med varje iteration tar vi bort en del av Sierpinski-triangeln. Om vi kunde göra detta oändligt många gånger, skulle det faktiskt inte finnas något område kvar: det är därför Sierpinski-triangeln är något mellan ett tvådimensionellt område och en 1-dimensionell linje.

::: .theorem

Medan många fraktaler är _självliknande_, är en bättre definition att __fraktaler__ är former som har en __icke-heltal-dimension__.

:::

[Fortsätt](btn:next)

---

> id: snowflake

### The Koch Snowflake

Det finns många former i naturen som ser ut som fraktaler. Vi har redan sett några växter i början av detta kapitel. Andra bra exempel är snöflingor och iskristaller:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

För att skapa vår egen fraktal snöflinga måste vi återigen hitta en enkel procedur vi kan använda om och om igen.

::: column.grow

Liksom Sierpinski-triangeln, låt oss börja med en enda, liksidig triangel. I stället för att _ta bort_ mindre trianglar i varje steg, lägger vi _till_ mindre trianglar längs kanten. Sidolängden för varje triangel är [[`1/3`|`1/4`|`1/2`]] av trianglarna i föregående steg.

{.reveal(when="blank-0")} Den resulterande formen kallas [__Koch snöflinga__](gloss:koch-snowflake), uppkallad efter den svenska matematikern [Helge von Koch](bio:koch). Lägg märke till att [små sektioner](target:t2) på snöflingans kant ser exakt lika ut som [större delar](target:t1).

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---

> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

När vi skalar ett kantsegment av Koch Snowflake med en faktor 3, är dess längd [[fyrdubblar|triples|doubles]].

{.reveal(when="blank-0")} Med samma förhållande mellan dimensioner och skalfaktorer som ovan får vi ekvationen [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Detta betyder att dimensionen av Koch Snowflake är `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Område _{span.check(when="blank-6")}_

Att skapa Koch-snöflingor är nästan som en [rekursiv sekvens](gloss:sequence-recursive): vi känner till startformen (en triangel), och vi vet hur vi kommer från en term till nästa (genom att lägga till fler trianglar i varje kant):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] nya trianglar

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] nya trianglar

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] nya trianglar

:::

{.reveal(when="blank-0 blank-1 blank-2")} Efter den första iterationen ökar antalet nya trianglar som läggs till med en faktor [[4]] vid varje steg. Samtidigt minskar området för dessa nya trianglar med en faktor [[9]] vid varje steg.

{.reveal(when="blank-3 blank-4")} Låt oss säga att [första triangeln](->#koch-0) har ett område på 1. Då är den totala ytan för [nästa tre trianglar](->#koch-1) `3 × 1/9 = 1/3`. Följande steg bildar alla en [[geometrisk serie|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} med gemensamt förhållande [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Med hjälp av formeln för summan av oändliga [geometriska serier](gloss:geometric-series) kan vi beräkna att den totala ytan för Kochs snöflinga är

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Omkrets _{span.check(when="blank-9")}_

::: column.grow

Vi kan också försöka beräkna Koch-snöflingans omkrets. Som vi redan har sett förändras omkretsens längd med en faktor [[`4/3`|`3/4`|`1/4`]] vid varje steg.

{.reveal(when="blank-8")} Det betyder att vi ännu en gång har en geometrisk serie - men i detta fall konvergerar den [[inte|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} Detta betyder att omkretsen av Kochs snöflinga faktiskt är __oändligt lång__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Om detta verkar motsatt, kom bara ihåg att vi multiplicerar omkretsen med `§4/3` vid varje steg, och vi gör det oändligt många gånger._

:::

---

> id: frozen

::: column.grow

Det är nästan otänkbart att du kan ha en form med ett _ändligt_ område och också en _oändlig_ omkrets - men detta är bara en av de många oväntade egenskaperna hos fraktaler.

Kan du hitta några andra sätt att skapa dina egna fraktaler? [Fortsätt](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Min själ spiralerar på frysta fraktaler runt ..."

:::

---

> id: menger-sponge

### Menger Sponge

Fraktaler behöver inte vara "platta", som många av exemplen ovan. En av de mest kända fraktaler som ser tredimensionell ut är __Menger-svamp__, uppkallad efter matematikern [Karl Menger](bio:menger) som först beskrev den 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Vi börjar med en solid kub och borrar upprepade gånger mindre och mindre hål i sidorna. Varje ny iteration av hål har [[`1/3`|`1/2`|`1/4`]] bredden på den föregående iterationen av hål.

{.reveal(when="blank-0")} En `3×3×3` kub består av 27 mindre kuber, men här har vi tagit bort några av dessa. Menger-svampen består av [[20]] kopior av sig själv, som är tre gånger mindre.

{.reveal(when="blank-1")} Nu kan vi försöka beräkna dimensionen _d_ på Menger-svampen precis som vi gjorde för Kochs snöflinga ovan. I det här fallet får vi `3^d = 20` eller `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Om du föreställer dig att skära ut fler och fler hål, oändligt många gånger, skulle det inte finnas någon faktisk volym kvar. Det är därför kuben är "inte riktigt" tredimensionell! [Fortsätt](btn:next)

---

> id: coastlines

### Fraktkustlinjer

En av de viktigaste egenskaperna för alla fraktaler som vi hittills har sett är att du kan "zooma in" för alltid och alltid hitta nya mönster. Cirka 1920 insåg den brittiska matematikern [Lewis Fry Richardson](bio:richardson) att detsamma gäller för gränsen eller kusten i många länder.

Du börjar med landets grundform, och när du zooma in lägger du till flodinlopp, vikar och flodmynningar, sedan enskilda klippor, klippor, stenar och så vidare:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[Fortsätt](btn:next)

---

> id: coastlines-1

::: column.grow

Detta är ett betydande problem när du försöker beräkna längden på landets gräns - hur bestämmer du hur långt du vill zooma in och vilka krök och krokar du vill inkludera?

Ett sätt vi kan mäta längden på Storbritanniens kust, till exempel, är att ta en lång linjal, gå hela vägen runt dess stränder och sedan lägga till alla avstånd.

Om linjalen är ${rulers[index]}{index|0|0,8,1} km lång, måste vi använda den ${count} gånger, så vi får en total kustlinje på ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Vi kan bara fortsätta, med mindre och mindre linjaler, och varje gång vårt resultat för kustlinjens längd skulle bli lite längre. Precis som Koch Snowflake tidigare verkar det som om Storbritanniens kustlinje är oändligt lång! Detta kallas ofta __kustlinjeparadox__. [Fortsätt](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Några decennier senare snubblade matematikern [Benoit Mandelbrot](bio:mandelbrot) över Richardsons arbete i en kasserad bibliotekbok medan han arbetade på IBM. Han insåg dess betydelse, och även hur den hänför sig till nyare forskning om fraktaler och dimensioner.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Storbritanniens kustlinje "ser" visserligen ut fraktalen, men den är inte _självliknande_, som andra fraktaler som vi har sett tidigare. För att hitta dess storlek kan vi rita det på ett rutnät och räkna antalet celler som det korsar varandra.

{.r.reveal(when="slider-0")} Till att börja med finns det __{.pill.yellow} 88__ korsande celler. Om vi skalar kustlinjen med en faktor 2, finns __{.pill.yellow} 197__ korsande celler - mer än dubbelt så många! [Fortsätt](btn:next)

{.r.reveal(when="next-0")} Storleken på kustlinjen har ökat med en faktor `§197/88`. Liksom tidigare betyder detta att kustlinjens dimension är

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Om vi upprepar detta med större rutnät hittar vi att dimensionen av Storbritanniens kustlinje faktiskt är ungefär 1,21. Mandelbrot insåg att denna fraktala dimension också är ett mått på __råhet__ av en form - ett nytt koncept, för vilket han fann viktiga tillämpningar inom många andra områden inom matematik och naturvetenskap.

---

> id: nature

### Fler fraktaler inom natur och teknik

Även om sanna fraktaler aldrig kan visas i naturen, finns det många objekt som ser _nästan_ ut som fraktaler. Vi har redan sett växter, snöflingor och kustlinjer, och här är några fler exempel:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Bergskedja i centrala Asien

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Ganges floddelta i Indien

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Blixtbultar

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Blodkärl i näthinnan

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon i USA

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Moln

:::

Alla dessa objekt kan verka helt slumpmässiga, men precis som fraktaler finns det ett underliggande mönster som avgör hur de bildas. Matematik kan hjälpa oss att förstå formerna bättre, och fraktaler har tillämpningar inom områden som medicin, biologi, geologi och meteorologi. [Fortsätt](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Datorgenererad fraktal terräng

::: column.grow

Vi kan också använda fraktaler för att skapa realistiska "kopior" av naturen, till exempel som landskap och texturer som används i videospel eller datorgenererade filmer. Vattnet, bergen och molnen i denna bild tillverkas helt av en dator med hjälp av fraktaler!

Och vi kan till och med vända den här processen för att komprimera digitala bilder för att minska deras filstorlek. De första algoritmerna utvecklades av Michael Barnsley och Alan Sloan på 1980-talet och nya undersöks fortfarande idag.

:::

---

## Sierpinski-triangeln

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

En av fraktalerna som vi såg i föregående kapitel var [__Sierpinski-triangeln__](gloss:sierpinski-triangle), som är uppkallad efter den polska matematikern [Wacław Sierpiński](bio:sierpinski). Det kan skapas genom att börja med en stor, liksidig triangel, och sedan upprepade gånger klippa mindre trianglar ur centrum.

{.r.reveal(when="slider-0")} Wacław Sierpiński var de första matematikerna som tänkte på egenskaperna hos denna triangel, men den har dykt upp många århundraden tidigare i konstverk, mönster och mosaiker.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Här är några exempel på golvbeläggningar från olika kyrkor i Rom:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Som det visar sig visas Sierpinski-triangeln inom ett stort antal andra områden inom matematik, och det finns många olika sätt att generera den. I det här kapitlet kommer vi att utforska några av dem! [Fortsätt](btn:next)

---

> id: pascal
> goals: select

### Pascal's Triangle

Du kanske redan kommer ihåg Sierpinski-triangeln från vårt kapitel om [__Pascal's triangel__](gloss:pascals-triangle). Detta är en sifferpyramid där varje nummer är summan av de två siffrorna ovan. Klicka på alla _jämnt_ siffror i triangeln nedan för att markera dem - och se om du märker ett mönster:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---

> id: pascal-1

Pascal's triangel kan fortsättas nedåt för alltid, och Sierpinski-mönstret kommer att fortsätta med större och större trianglar. Du kan redan se början på en ännu större triangel som börjar i rad 16.

Om två angränsande celler kan delas med 2, måste deras summa i cellen under också vara delbar med 2 - det är därför vi bara kan få färgade trianglar (eller enstaka celler). Naturligtvis kan vi också prova att färga alla celler som kan delas med siffrorna _andra än 2_. Vad tror du kommer att hända i dessa fall? [Fortsätt](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Här kan du se en liten version av de första 128 raderna av Pascal triangel. Vi har markerat alla celler som är delbara med ${n}{n|2|2,40,1} - vad märker du?

{.reveal(when="var-0")} För varje nummer har vi ett annat triangulärt mönster som liknar Sierpinski-triangeln. Mönstret är särskilt regelbundet om vi väljer ett [[primtal|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Om antalet har _många olika_ huvudfaktorer ser mönstret mer slumpmässigt ut._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Chaos Game

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Här kan du se de tre topparna i en liksidig triangel. Klicka var som helst i det grå området för att skapa en fjärde punkt.

{.r.reveal(when="point")} Låt oss spela ett enkelt spel: vi väljer slumpmässigt en av topparna i triangeln, drar ett linjesegment mellan vår punkt och toppunktet och hittar sedan [{.pill.red} mittpunkt](target:p1) för det segmentet. [Fortsätt](btn:next)

{.r.reveal(when="next-0")} Nu upprepar vi processen: vi väljer ytterligare ett slumpmässigt toppunkt, drar segmentet från vår sista punkt och hittar sedan [{.pill.green} mittpunkt](target:p2). Observera att vi färgar dessa nya punkter baserat på färgen på toppunkten i triangeln som vi valde. [Fortsätt](btn:next)

{.reveal(when="next-1")} Hittills har inget överraskande hänt - men se när vi upprepar samma process många gånger:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Lägg till 1000 steg_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Denna process kallas __Chaos Game__. Det kan finnas några strömpunkterna i början, men om du upprepar samma steg många gånger börjar fördelningen av prickar se ut precis som Sierpinski-triangeln!

Det finns många andra versioner av det - till exempel kan vi börja med en fyrkant eller en femkant, vi kan lägga till ytterligare regler som att inte kunna välja samma topppunkt två gånger i rad, eller vi kan välja nästa punkt i ett förhållande annat än `§1/2` längs segmentet. I några av dessa fall får vi bara en slumpmässig fördelning av prickar, men i andra fall avslöjar vi ännu fler fraktaler:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Har du upptäckt [Sierpinski-mattan](action:carpet()) eller denna [femkantiga snöflinga](action:snowflake()) baserat på [__Golden ratio__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Mobilautomater

En __cellulär automat__ är ett rutnät som består av många enskilda celler. Varje cell kan vara i olika "tillstånd" (t.ex. olika färger), och tillståndet för varje cell bestäms av dess omgivande celler.

I vårt exempel kan varje cell vara antingen svart eller vit. Vi börjar med en rad som bara innehåller en enda svart fyrkant. I varje följande rad bestäms färgen på varje cell av de tre cellerna omedelbart ovan. Klicka på de åtta möjliga alternativen nedan för att vända deras färg - kan du hitta en uppsättning regler som skapar ett mönster som liknar Sierpinski-triangeln?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Det finns två alternativ för var och en av de åtta alternativen, vilket innebär att det finns `2^8 =` [[256]] möjliga regler totalt. Några, som [regel 126](action:setRule('01111110')), ser ut som Sierpinski-triangeln. Andra, som [regel 30](action:setRule('01111000')), ser helt kaotiska ut. Det upptäcktes av [Stephen Wolfram](bio:wolfram) 1983, och datorer kan till och med använda dem för att generera slumpmässiga nummer!

---

> id: cellular-1

::: column.grow

Mobilautomater visar hur mycket komplexa mönster kan skapas med mycket enkla regler - precis som fraktaler. Många processer i naturen följer också enkla regler, men producerar otroligt komplexa system.

I vissa fall kan detta leda till att mönster som ser ut precis som mobilautomater, till exempel färgerna på skalen på denna snigel.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textil, en giftig havssnigel

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Det finns många varianter av Sierpinski-triangeln och andra fraktaler med liknande egenskaper och skapande processer. Vissa ser tvådimensionella ut, som _Sierpinski Mattan_ du såg ovan. Andra ser tredimensionella ut, som dessa exempel:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Pyramid

:::

---

## Mandelbrot-uppsättningen

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Alla fraktaler som vi såg i de föregående kapitlen skapades med en process med __iteration__: du börjar med ett specifikt mönster och sedan upprepar det om och om igen.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Detta liknar ett annat begrepp i matematik som du såg tidigare: med [rekursiva sekvenser](gloss:sequence-recursive) börjar du med ett specifikt nummer, och sedan använder du samma rekursiva formel, om och om igen, för att få nästa nummer i sekvens.

Låt oss ta den rekursiva formeln `§x_n = x_(n-1)^2` som ett exempel och plotta dess termer på en siffra. Du kan ändra värdet på `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Lägg märke till hur den resulterande sekvensen kan bete sig mycket annorlunda beroende på startvärdet `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Om `x_0 > 1` avviker [[sekvensen|converges]]: _{span.reveal(when="blank-0")} fortsätter den bara att växa upp till oändligheten._

::: column.frame.f-blue.text-center(width=212)

Om `x_0` är mellan –1 och 1, konvergerar [[sekvensen|diverges]].

::: column.frame.f-blue.text-center(width=212)

Om `x_0 < -1` avviker [[sekvensen|converges]].

:::

---

> id: iteration-2

Hittills har vi inte lärt oss något nytt. Men för ungefär ett århundrade sedan började matematiker att utforska vad som händer med dessa sekvenser om du använder [__komplexa siffror__](gloss:complex-numbers), snarare än bara den verkliga talraden. Deras upptäckter var några av de mest överraskande och vackraste resultaten i all matematik.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Låt oss använda samma sekvens som tidigare, `§x_n = x_(n-1)^2`, men på det komplexa planet. Du kan flytta positionen för `pill(x_0,"yellow","x0")` för att se vad som händer med följande termer. Om sekvensen ser ut som om den kommer att gå samman, låt oss färga motsvarande punkt på planet i _{span.pill.blue} blå_:

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Som ni ser konvergerar sekvensen så länge `pill(x_0,"yellow","x0")` ligger [[inuti enhetscirkeln| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (cirkeln med radien 1, centrerad vid ursprunget)._

---

> id: julia-1

Låt oss nu göra saker lite svårare. Istället för att bara kvadratera det föregående talet lägger vi också till en konstant _{.pill.red} c_ varje gång (vilket kan vara vilket komplex nummer som helst). Med andra ord, `§x_n = x_(n-1)^2 + c`. Tror du att vi fortfarande får en cirkel av konvergens? Vilka andra former tror du att vi kan se? [Fortsätt](btn:next)

---

> id: julia-2

I detta diagram kan du flytta positionen för `pill(x_0,"yellow","x0")` såväl som värdet på `pill(c,"red","c")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} Vi vet redan vad som händer om [`c = 0`](action:animate(0,0)) - det är samma som exemplet ovan. Sekvenskonvergensen så länge som `x_0` ligger inom enhetens cirkel.

{div(slot="legend")} Så snart vi ändrar värdet på _c_, händer något underbart. Cirkeln förvandlas till en mycket komplex, fraktal form.

{div(slot="legend")} När [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) delar formen upp i oändligt många små element arrangerade i spiraler.

::: div(slot="legend")

I vissa fall konvergerar inte sekvensen till en _enkelpunkt_ - istället når den en cykel med flera punkter, som en triangel. Dessa cykler kallas __banor__.

Punkter som är färgade blått betyder att motsvarande sekvens antingen konvergerar eller har en bana (vi säger att den är __begränsad__). Punkter som lämnas vita betyder motsvarande sekvens __avviker__: den är inte avgränsad och blåser så småningom upp till oändligheten.

:::

{div(slot="legend")} Vad hittar du mer? Titta på mönstren när [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) eller när [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Det finns också några värden på _c_ där _varje_ sekvens avviker, så hela komplexa slätten förblir vit.

:::

---

> id: julia-3

De olika formerna som bildas genom färgning i siffrorna kallas [__Julia Sets__](gloss:julia-set). De upptäcktes oberoende av två franska matematiker, [Gaston Julia](bio:julia) och [Pierre Fatou](bio:fatou), omkring 1918.

På den tiden fanns det inga datorer som hjälpte till att visualisera hur Julia-uppsättningarna faktiskt såg ut. Matematiker som Julia och Fatou kunde resonera om dem matematiskt, men de såg någonsin bara grova, handritade skisser av hur de kan se ut.

Vi har inte det här problemet idag - bilderna nedan är alla av olika Julia-uppsättningar. De olika färgerna indikerar _hur snabbt_ sekvensen vid den punkten avviker:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Fortsätt](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Mandelbrot-uppsättningen

När du skapar de olika Julia-uppsättningarna kanske du har lagt märke till att det fanns några värden på _c_ som varje sekvens avviker från och hela komplexa planet förblir vitt. Några decennier efter Julia och Fatou försökte en ny generation matematiker att kartlägga hur dessa områden såg ut.

I föregående exempel valde vi ett fast värde för `pill(c,"red","c")` och ändrade sedan positionen för `pill(x_0,"yellow","x0")` för att färga planet. Låt oss nu fixa värdet på `pill(x_0 = 0,"yellow","x0")` och ändra istället värdet på `pill(c,"red","c")`.

Återigen måla du över det komplexa planet för att avslöja området där sekvenserna förblir avgränsade. Vilka former förväntar du dig att dyka upp?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

Denna fraktal kallas [__Mandelbrot Set__](gloss:mandelbrot-set), och när den roteras 90 ° ser den nästan ut som en person, med huvud, kropp och två armar. Det definierades och ritades för första gången 1978 i ett forskningsdokument av matematikerna Robert Brooks och Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Några år senare använde [Benoit Mandelbrot](bio:mandelbrot) de kraftfulla datorerna hos IBM för att skapa en mycket mer detaljerad visualisering av fraktalen, som senare fick sitt namn efter honom. De första utskrifterna såg annorlunda ut än vad han förväntade sig - tills han insåg att teknikerna som arbetade på skrivarna städade upp "fuzziness" runt dess kant, med antagande att det orsakades av dammpartiklar eller skrivarfel och inte ett definierande kännetecken för fraktaler ! [Fortsätt](btn:next)

---

> id: mandel-zoom

Liksom alla fraktaler kan vi "zooma in" i Mandelbrot-set för alltid och hitta nya mönster i varje skala. Här kan du zooma in på en del av Mandelbrot-uppsättningen som kallas __Seahorse Valley__. Svarta punkter är _inuti_ Mandelbrot-uppsättningen, där sekvensen är begränsad. Färgade punkter är _utanför_ Mandelbrot-uppsättningen, där sekvensen avviker, och de olika färgerna indikerar _hur snabbt_ den växer till oändlighet:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Denna skjutreglage består av 27 enskilda bilder, upp till en zoomnivå på över 14 kvadrillioner, eller `2^54`. Sammantaget tog de nästan 45 minuter att rendera på en modern bärbar dator. Mandelbrot-uppsättningen kan skapas med bara en enda enkel ekvation `§x_n = x_(n-1)^2 + c`, men den är oändligt komplex och otroligt vacker.

---

> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

När du flyttar värdet på [{.pill.red} c](target:c) runt Mandelbrot-uppsättningen kanske du märker en nyfiken egenskap:

* Alla sekvenser inom [huvudkroppen](target:bulb0) av Mandelbrot-uppsättningen [[konvergerar|diverge|reach an orbit]] _{span.reveal(when="blank-0")} till en enda punkt._
* {.reveal(when="blank-0")} Sekvenserna i den [stora lampan](target:bulb1) överst [[når en bana|converge|diverge]] _{span.reveal(when="blank-1")} som består av [[3]] poäng._
* {.reveal(when="blank-2")} Sekvenser i [denna mindre glödlampa](target:bulb2) har banor med längden [[5]].

:::

{.reveal(when="blank-3")} Varje glödlampa har en bana i olika storlekar, med mindre glödlampor med fler och fler punkter i sina banor. Storleken på dessa banor är nära besläktade med __Logistic Map__, ett viktigt begrepp i [Chaos theory](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot ägnade större delen av sitt liv åt studiet av fraktaler, liksom matematiken för _grovhet_ och _självlikhet_. Hans arbete hade tillämpningar inom fysik, meteorologi, neurologi, ekonomi, geologi, teknik, datavetenskap och många andra områden.

1985 dök Mandelbrot-uppsättningen på omslaget till tidningen _Scientific American_, och sedan dess har den blivit en av de mest kända matematiska formerna i världen. Du kan hitta det på T-shirts, i musikvideor och som skärmsläckare, och det har nämnts i många populära böcker och filmer.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Rymdfyllningskurvor

> section: space-filling
> sectionStatus: dev

{.todo} kommer snart!

