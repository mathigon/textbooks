# Cirklar och Pi

## Introduktion

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

Så länge människor har funnits har vi tittat på himlen och försökt förklara livet på jorden med hjälp av stjärnor, planeter och månen.

Forntida grekiska astronomer var de första som upptäckte att alla himmelobjekt rör sig på vanliga vägar, kallade __banor__ . De trodde att dessa bana alltid är cirkulära. När allt kommer omkring är cirklar den "mest perfekta" av alla former: symmetrisk i alla riktningar, och därmed ett passande val för vårt universums underliggande ordning.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} Jorden är i mitten av det _Ptolemaiska universum_ .

:::

---
> id: radius
> goals: compass

Varje punkt på en [__cirkel__](gloss:circle) har samma avstånd från centrum. Detta innebär att de kan ritas med en [kompass](gloss:compass) :

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} Det finns tre viktiga mätningar relaterade till cirklar som du behöver veta:

* {.reveal(when="compass" delay="1000")} De [{.pill.red.b} radie](target:r) är avståndet från mitten av en cirkel till dess ytterkant.
* {.reveal(when="compass" delay="4000")} De [{.pill.blue.b} diameter](target:d) är avståndet mellan två motsatta punkter på en cirkel. Den går igenom dess centrum, och dess längd är [[två gånger | halv | samma som]] radien.
* {.reveal(when="blank-0")} De [{.pill.green.b} omkrets](target:c) (eller omkrets) är avståndet runt en cirkel.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

En viktig egenskap hos cirklar är att alla cirklar är [lika](gloss:similar) . Du kan bevisa att genom att visa hur alla cirklar kan matchas med helt enkelt [översättningar](gloss:translation) och [utvidgningar](gloss:dilation) :

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Du kanske kommer ihåg att för liknande polygoner är förhållandet mellan motsvarande sidor alltid konstant. Något liknande fungerar för cirklar: förhållandet mellan [periferin](gloss:circle-circumference) och [diametern](gloss:circle-diameter) är lika för _alla cirklar_ . Det är alltid 3.14159 ... - ett mystiskt nummer som heter [__Pi__](gloss:pi) , som ofta skrivs som den grekiska bokstaven _π_ för “p”. Pi har oändligt många decimalsiffror som pågår för alltid utan något specifikt mönster:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Här är ett hjul med diameter 1. När du "rullar upp" omkretsen kan du se att dess längd är exakt [[`pi`|`2 * pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

För en cirkel med diameter _d_ är omkretsen `C = π × d` . På samma sätt är omkretsen för en cirkel med [radie](gloss:circle-radius) _r_

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] .

---
> id: nature

Cirklar är perfekt symmetriska, och de har inga "svaga punkter" som hörnen på en polygon. Detta är en av orsakerna till att de finns överallt i naturen:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Blommor

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planets

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} träd

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Frukt

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Såpbubblor

:::

{.r} Och det finns så många andra exempel: från regnbågar till vattenkrusningar. Kan du tänka på något annat? [Fortsätta](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Det visar sig också att en cirkel är formen med det största området för en given omkrets. Om du till exempel har ett rep på längden 100 \ m kan du använda det för att omsluta det största utrymmet om du bildar en cirkel (snarare än andra former som en rektangel eller triangel).

I naturen kan föremål som vattendroppar eller luftbubblor _spara energi_ genom att bli cirkulära eller sfäriska och minska ytytan.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Omkrets_ = __{.m-green} 100__ , _Area_ = __${area}__

:::

---
> id: area
> goals: slider

### Området för en cirkel

Men hur beräknar vi faktiskt en cirkelyta? Låt oss försöka samma teknik som vi använde för att [hitta området med fyrkantiga sidor](/course/polyhedra/quadrilaterals) : vi skär formen i flera olika delar och ordnar sedan dem till en annan form som vi redan känner till området (t.ex. en rektangel eller en triangel).

Den enda skillnaden är att eftersom cirklar är böjda, måste vi använda några tillnärmningar:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

Här kan du se en cirkel uppdelad i ${toWord(n1)} kilar. Flytta skjutreglaget för att ställa in kilen i en rad.

{.reveal(when="slider")} Om vi ökar antalet kil till ${n1}{n1|6|6,30,2} , denna form börjar se mer och mer ut som en [[rektangel | cirkel | fyrkant]] .

{.reveal(when="blank-0")} Rektangelns höjd är lika med [[radien | omkrets |]] cirkelns [[diameter]] . _{span.reveal(when="blank-1")} Rektangelns bredd är lika med [[halva omkretsen | omkretsen | två gånger]] cirkelns [[radie]] ._ _{span.reveal(when="blank-2")} (Lägg märke till hur hälften av kilarna vänder nedåt och hälften av dem vänder uppåt.)_

{.reveal(when="blank-2" delay=1000)} Därför är rektangelns totala area ungefär `A = π r^2` .

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Här kan du se en cirkel uppdelad i ${toWord(n)} ringar. Liksom tidigare kan du flytta skjutreglaget till "otydliga" ringarna.

{.reveal(when="slider")} Om vi ökar antalet ringar till ${n2}{n2|4|2,12,1} , denna form börjar se mer och mer ut som en [[triangel | rektangel | trapez]] .

{.reveal(when="blank-0")} Triangelns höjd är lika med [[radien | diameter |]] cirkelns [[omkrets.]] _{span.reveal(when="blank-1")} Triangelns bas är lika med [[omkretsen | två gånger]] cirkelns [[diameter]] ._ _{span.reveal(when="blank-2")} Därför är triangelns totala area ungefär_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` .

:::

---
> id: area-2

Om vi skulle kunna använda oändligt många ringar eller kilar skulle tillnärmningarna ovan vara perfekta - och de båda ger oss samma formel för området med en cirkel:

{.text-center.r}`A = π r^2` . [Fortsätta](btn:next)

---
> id: pi-approximations

### Beräknar Pi

Som du såg ovan, `π = 3.1415926…` är inte ett enkelt heltal och dess decimalsiffror fortsätter för evigt, utan att upprepa ett mönster. Nummer med den här egenskapen kallas [__irrationella nummer__](gloss:irrational-numbers) , och det betyder det `π` kan inte uttryckas som en enkel bråk `a/b` .

Det betyder också att vi aldrig kan skriva ner _alla_ siffrorna i Pi - det finns ju oändligt många. Antika grekiska och kinesiska matematiker beräknade de första fyra decimalsiffrorna av Pi genom att ungefärliga cirklar med vanliga polygoner. Lägg märke till hur, när du lägger till fler sidor, polygonen börjar se [[mer och mer ut | mindre | precis]] som en cirkel:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665 lyckades [Isaac Newton](bio:newton) beräkna 15 siffror. Idag kan vi använda kraftfulla datorer för att beräkna värdet på Pi till mycket högre noggrannhet.

Den nuvarande posten är 31,4 biljoner siffror. En tryckt bok som innehåller alla dessa siffror skulle vara ungefär 400 \ km tjock - det är den höjd som den [internationella rymdstationen](gloss:iss) kretsar runt jorden!

Naturligtvis behöver du inte komma ihåg att många siffror av Pi. I själva verket bråk `22/7 = 3.142…` är en bra tillnärmning.

:::

---
> id: pi-sequence

En metod för att beräkna Pi är att använda oändliga antal sekvenser. Här är ett exempel som upptäcktes av [Gottfried Wilhelm Leibniz](bio:leibniz) 1676:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} När vi beräknar fler och fler termer i denna serie, alltid efter samma mönster, kommer resultatet att komma närmare och närmare Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

Många matematiker tror att Pi har en ännu mer nyfiken egenskap: att det är ett __normalt antal__ . Detta betyder att siffrorna från 0 till 9 verkar helt slumpmässigt, som om naturen hade rullat en 10-sidig tärning oändligt många gånger för att bestämma värdet på Pi.

Här kan du se de första 100 siffrorna på Pi. Flytta över några av cellerna för att se hur siffrorna är fördelade.

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

Om Pi är normalt betyder det att du kan tänka på _vilken_ siffra som _helst_ och att den kommer att visas någonstans i siffrorna. Här kan du söka efter de första en miljon siffrorna i Pi - innehåller de din födelsedag?

::: .box.f-red.pi-box

#### En miljon siffror av Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Vi kunde till och med konvertera en hel bok, som Harry Potter, till en mycket lång rad siffror (a = 01, b = 02, och så vidare). Om Pi är normalt visas den här strängen någonstans i siffrorna - men det tar miljoner år att beräkna tillräckligt med siffror för att hitta den.

Pi är lätt att förstå, men av grundläggande betydelse i vetenskap och matematik. Det kan vara en anledning till att Pi har blivit ovanligt populärt i vår kultur (åtminstone jämfört med andra ämnen i matematik):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

Det finns till och med en _Pi-dag_ varje år, som antingen faller den 14 mars, för `pi ≈ 3.14` , eller den 22 juli, för `pi ≈ 22/7` .

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Grader och radianer

> section: radians
> id: degrees
> translated: auto

Hittills inom geometri har vi alltid mätt vinklar i [grader](gloss:degrees) . EN __{.m-red} full__ cirkelrotation är [[360]]°, a __{.m-green} halvcirkeln__ är [[180]]°, a __{.m-yellow} kvartcirkeln__ är [[90]]°, och så vidare.

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r} Numret 360 är mycket bekvämt eftersom det kan delas med så många andra nummer: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 och så vidare. Detta betyder att många fraktioner av en cirkel också är hela siffror. Men har du någonsin undrat var numret 360 kommer ifrån? [Fortsätta](btn:next)

---
> id: babylon

::: column.grow

Som det händer är 360 grader ett av de äldsta begreppen i matematik som vi fortfarande använder idag. De utvecklades i antika Babylon för mer än 5000 år sedan!

Vid den tiden var en av de viktigaste tillämpningarna av matematik inom astronomi. _Solen_ avgör de fyra säsongerna, som jordbrukarna måste veta om när de odlar grödor. På liknande sätt bestämmer _månen_ tidvattnet, vilket var viktigt för fiskare. Människor studerade också stjärnorna för att förutsäga framtiden eller för att kommunicera med gudar.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} En babylonisk tablett för beräkning `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomer märkte att konstellationerna som var synliga vid en viss tid under natten skiftade en liten bit varje dag - tills de efter ungefär 360 dagar hade roterat tillbaka till sin utgångspunkt. Och det kan ha varit orsaken till att de delade cirkeln i 360 grader.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Naturligtvis finns det faktiskt 365 dagar på ett år (väl, 365.242199 för att vara exakt), men babyloniska matematiker arbetade med enkla solurar, och denna tillnärmning var helt tillräcklig.

Det fungerade också bra med deras befintliga bas-60-nummersystem (sedan `6 xx 60 = 360` ). Detta system är anledningen till att vi fortfarande har 60 sekunder på en minut och 60 minuter på en timme - även om de flesta andra enheter mäts i [bas 10](gloss:base-10) (t.ex. 10 år på ett decennium, eller 100 år på ett sekel).

::: column.grow

För många av oss är att mäta vinklar i grader andra naturen: det finns 360° -video, skateboardåkare kan dra 540-tal, och någon som ändrar sitt beslut kan göra en 180° -sväng.

Men ur en matematisk synvinkel är valet av 360 helt godtyckligt. Om vi bodde på Mars kan en cirkel ha 670° och ett år på Jupiter har till och med 10 475 dagar.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 McFlip, en 540° rotation

:::

---
> id: radians

### radianer

I stället för att dela upp en cirkel i ett visst antal segment (som 360 grader) föredrar matematiker ofta att mäta vinklar med hjälp av [omkretsen](gloss:circle-circumference) av en [__enhetscirkel__](gloss:unit-circle) (en cirkel med radie 1).

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

EN [hela cirkeln](action:setState(0)) har omkrets _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-0")} För en [halvcirkelrotation](action:setState(1)), motsvarande avstånd längs omkretsen _{x-equation.small(solution="π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-1")} För en [kvartalscirkelrotation](action:setState(2)), avståndet längs omkretsen är _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ .

{.reveal(when="eqn-2")} Och så vidare: detta sätt att mäta vinklar kallas [__radianer__](gloss:radians) (du kan komma ihåg detta som "radienheter").

:::

---
> id: radians-conversion

Varje vinkel i grader har en motsvarande storlek i radianer. Det är mycket enkelt att konvertera mellan de två - precis som du kan konvertera mellan andra enheter som meter och kilometer, eller Celsius och Fahrenheit:

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} 2 _π_ rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

Du kan skriva radianvärdet antingen som en multipel av _π_ eller som bara ett decimaltal. Kan du fylla i denna tabell med ekvivalenta vinkelstorlekar i grader och radianer?

| __{.m-red} grader__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radianer__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Resa avstånd

Du kan tänka på radianer som "rest avstånd" längs en enhetscirkel. Detta är särskilt användbart när du arbetar med föremål som rör sig på en cirkulär bana.

::: column.grow

Till exempel går den [internationella rymdstationen runt](gloss:iss) jorden en gång var 1,5 / timme. Detta betyder att dess __rotationshastighet__ är [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] radianer per timme.

{.reveal(when="blank-0")} I en [enhetscirkel](gloss:unit-circle) är rotationshastigheten densamma som den _verkliga_ hastigheten, eftersom omkretsens längd är densamma som en full rotation i radianer (båda är `2pi` ).

{.reveal(when="blank-0" delay=1000)} ISS-banans radie är 6800 \ km, vilket innebär att ISS: s _faktiska_ hastighet måste vara [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km per timme._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

Kan du se att radianer i detta exempel är en mycket bekvämare enhet än grader? När vi väl vet rotationshastigheten måste vi helt enkelt multiplicera med radien för att få den faktiska hastigheten.

Här är ett annat exempel: din bil har hjul med radie 0,25 \ m. Om du kör med en hastighet av 20 \ m / s, roterar bilens hjul på [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radianer per sekund _{span.reveal(when="blank-0")} (eller `80/(2pi) = 13` rotationer per sekund)._

---
> id: radians-trig

### Trigonometri

För de flesta enkla geometriproblem, grader och radianer är helt utbytbara - du kan antingen välja vilken du föredrar, eller så kan en fråga säga vilken enhet du ska ge ditt svar på. Men när du studerar mer avancerad [trigonometri](gloss:trigonometry) eller [kalkyl](gloss:calculus) visar det sig att radianer är mycket bekvämare än grader.

::: column.grow

De flesta miniräknare har en [speciell knapp för](->.button.mode) att växla mellan grader och radianer. Trigonometriska funktioner som [__synd__](gloss:sin) , [__cos__](gloss:cos) och __solbränna__ tar vinklar som ingång, och deras omvända funktioner __arcsin__ , __arccos__ och __arctan__ returr vinklar som utgång. Den aktuella räknarinställningen bestämmer vilka enheter som används för dessa vinklar.

Försök använda den här räknaren för att beräkna det

{.text-center} sin (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0,999]]
sin (30 rad) = [[-0,988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

Att använda radianer har en särskilt intressant fördel när du använder Sine-funktionen. Om `θ` är en mycket liten vinkel (mindre än 20° eller 0,3 rad), då `sin(θ) ≈ θ` . Till exempel,

{.text-center} synd( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} ...

{.reveal(when="var-0")} Detta kallas den __lilla vinkeln approximation__ , och det kan i hög grad förenkla vissa ekvationer som innehåller trigonometriska funktioner. Du kommer att lära dig mycket mer om detta i framtiden.

---

## Tangenter, ackord och bågar

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

I de föregående avsnitten lärde du dig namnen som givits till flera olika delar av en cirkel - som mitt, radie, diameter och omkrets. Det finns dock många geometriska element relaterade till en cirkel, som vi måste lösa mer komplexa problem:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} EN [{.red} secant](target:secant) är en linje som skär en cirkel vid två punkter. [Fortsätt](btn:next)
* {.r.reveal(when="next-0")} EN [{.green} ackord](target:chord) är ett linjesegment vars ändpunkter ligger på en cirkelns omkrets. [Fortsätt](btn:next)
* {.r.reveal(when="next-1")} EN [{.blue} tangent](target:tangent) är en linje som vidrör en cirkel på exakt en punkt. Detta kallas __punkten för tangens__ . [Fortsätt](btn:next)
* {.r.reveal(when="next-2")} En [{.yellow} båge](target:arc) är en sektion av en cirkelns omkrets. [Fortsätt](btn:next)
* {.r.reveal(when="next-3")} EN [{.teal} sektor](target:sector) är en del av det inre av en cirkel, avgränsat av en _båge_ och _två radier_ . [Fortsätt](btn:next)
* {.r.reveal(when="next-4")} Slutligen, a [{.purple} segment](target:segment) är en del av det inre av en cirkel, avgränsat av en _båge_ och _ett ackord_ . [Fortsätta](btn:next)

:::

---
> id: circle-parts-1

I det här avsnittet kommer vi att titta på förhållandet mellan alla dessa element och bevisa teorier om deras egenskaper. Oroa dig inte för att memorera alla definitioner för tillfället - du kan alltid använda [ordlistan](->.footer-link[data-modal=glossarym]) .

---

### tangenter

{.todo} KOMMER SNART!



---

### Chords

{.todo} KOMMER SNART!



---
> id: earth-arc

### Bågar och sektorer

::: column.grow

De flesta forskare i antika Grekland var överens om att jorden är en sfär. Det fanns gott om bevis: från fartyg som försvann bakom horisonten vid havet, till stjärnornas cirkulära rörelse under natten.

Tyvärr visste ingen exakt _hur stor_ jorden var - förrän omkring 200 f.Kr., när matematikern [Eratosthenes](bio:eratosthenes) hittade ett genialt sätt att mäta jordens radie med hjälp av grundläggande geometri. Allt vi behöver är lite mer kunskap om bågar och sektorer i en cirkel.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Som du kan se i diagrammet, en [{.red} båge](target:arc) är en del av [[omkretsen | diameter | tangent]] för en cirkel, och a [{.yellow} sektor](target:sector) är en del av [[interiören | radie | omkretsen]] av en cirkel.

::: .reveal(when="blank-0 blank-1")

Bågen mellan två punkter _A_ och _B_ skrivs ofta som `arc(AB)` . Denna definition är något tvetydig: det finns en [{.purple} andra bågen](target:major) som förbinder _A_ och _B_ men går tvärtom runt cirkeln.

Den mindre av de två bågarna kallas den __mindre bågen__ , och den större kallas den __stora bågen__ . Om punkterna _A_ och _B_ är exakt mitt emot varandra, har båda bågarna samma längd och är [[halvcirklar | diametrar | omkretser]] .

:::

:::

---
> id: arcs-1

::: column.grow

För att hitta längden på en båge eller området för en sektor måste vi veta om motsvarande vinkel i mitten av cirkeln: detta kallas [{.blue} central vinkel](target:angle) .

Lägg märke till hur bågen, sektorn och vinkeln tar upp _samma andel_ av en hel cirkel. Till exempel om [{.blue} central vinkel](target:angle) är [90°](action:set90Deg()), det tar [[en fjärdedel | en halv | en tredjedel]] av [{.teal} hela cirkeln](target:fangle) .

::: .reveal(when="blank-0")

Detta innebär att [{.red} längden på bågen](target:arc) är också `1/4` av [{.purple} hela omkretsen](target:circ) av cirkeln och [{.yellow} sektoren](target:sector) är `1/4` av [{.orange} hela området](target:area) av cirkeln.

Vi kan uttrycka detta förhållande i en ekvation:

{.text-center}`"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Nu kan vi ordna om dessa ekvationer för att hitta vilken variabel vi är intresserad av. Till exempel

::: column(width=320 parent="padded-thin")

| [ båglängd](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ sektorområde](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

där _r_ är cirkelns radie, och _c_ är storleken på den centrala vinkeln.



---
> id: arcs-rad

Om den centrala vinkeln mäts i [radianer](gloss:radians) snarare än [grader](gloss:degrees) , kan vi använda samma ekvationer, men måste ersätta 360° med [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ båglängd](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ sektorområde](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Lägg märke till hur ekvationerna blir mycket enklare och _π_ avbryter överallt. Detta beror på, som ni kanske minns, att [definitionen av radianer i](/course/circles/radians#radians) princip är en bågs längd i en cirkel med radie 1.

Låt oss nu se hur vi kan använda bågar och sektorer för att beräkna jordens omkrets. [Fortsätta](btn:next)

:::

---
> id: eratosthenes

I det forna Egypten låg staden _Swenet_ längs floden Nilen. Swenet var berömd för en brunn med en nyfiken egendom: det fanns ett ögonblick varje år när solljuset nådde botten av brunnen - klockan 21 juni, _sommardagens sommarsolstånd_ . Vid den exakta tiden belyses brunnens botten, men inte dess sidor, vilket innebar att solen stod direkt ovanför brunnen.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Forntida egyptier mätte långa avstånd genom att räkna antalet steg som det tog för att gå.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Vissa källor säger att "Eratosthenes-brunnen" fanns på _elefantön_ på Nilen.

:::

Matematikern [Eratosthenes](bio:eratosthenes) bodde i _Alexandria_ , cirka 800 km norr om Swenet, där han var chef för det stora biblioteket. I centrum av Alexandria stod en obelisk, ett högt, smalt monument med en pyramidformad topp.

Eratosthenes märkte att vid middagstid dagen på sommarsolståndet kastade obelisken en skugga - vilket betyder att solen _inte låg_ direkt ovanför den. Han drog slutsatsen att detta berodde på jordens krökning och insåg att den kunde användas för att beräkna vår planet omkrets.

---
> id: eratosthenes-1

::: column.grow

{.r} Här kan du se brunnen i Swenet och obelisken i Alexandria. Solstrålarna faller direkt in i brunnen, men träffar obelisken i en vinkel och kastar en skugga. [Fortsätta](btn:next)

::: .reveal(when="next-0")

Eratosthenes mätte att [{.teal} skuggvinkeln](target:angle1) var 7,2°. Detta är samma sak som [{.purple} centrala vinkeln](target:angle2) på [{.red} båge](target:arc) från Alexandria till Swenet, för de [[växlar | vertikal | motsvarande]] vinklar.

:::

::: .reveal(when="blank-0")

Nu kan vi använda ekvationen för båglängd som vi härledde ovan:

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Om vi omorganiserar detta finner vi att jordens omkrets är

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Slutligen vet vi att cirkelns omkrets är `C = 2 pi r` , så jordens radie är

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` .

:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)

        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")

        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Eratosthenes mätning var ett av de viktigaste experimenten i antiken. Hans uppskattning av jordens storlek var förvånansvärt korrekt, särskilt när han tänkte på att han bara hade tillgång till mycket grundläggande mätverktyg.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Naturligtvis kan det vara svårt att översätta hans ursprungliga resultat till moderna enheter som kilometer. I det antika Grekland mättes avståndet i _stadia_ (cirka 160 m), men det fanns ingen universell standard. Varje område hade en något annorlunda version, och vi vet inte vilken Eratosthenes använde.

Under följande århundraden försökte forskare att använda andra metoder för att beräkna jordens radie - ibland med mycket olika och felaktiga resultat.

Det var en av dessa felaktiga mätningar som fick Christopher Columbus att segla västerut från Portugal. Han antog att jorden var mycket mindre än den faktiskt är och hoppades att nå Indien. I själva verket anlände han till en annan kontinent däremellan: Amerika.

:::

---

### segment

{.todo} KOMMER SNART!

---

## The Circle Theorems

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Cykliska polygoner

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Sfärer, kottar och cylindrar

> section: spheres-cones-cylinders
> id: solids
> translated: auto

I de föregående avsnitten studerade vi egenskaperna hos cirklar på en plan yta. Men vår värld är faktiskt tredimensionell, så låt oss titta på vissa 3D-fasta material som är baserade på cirklar:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} En [__cylinder__](gloss:cylinder) består av två kongruenta, parallella cirklar förenade med en krökt yta.

::: column(width=220)

    x-solid(size=220)

{.text-center} En [__kon__](gloss:cone) har en cirkulär bas som är förenad till en enda punkt (kallas topppunkten).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Varje punkt på ytan av en [__sfär__](gloss:sphere) har samma avstånd från dess centrum.

:::

Lägg märke till hur definitionen av en sfär nästan är densamma som definitionen av en [[cirkel | radie | kub]] - utom i tre dimensioner!

---
> id: gasometer

### cylindrar

::: column.grow

Här kan du se den cylindriska _gasometern_ i Oberhausen, Tyskland. Det brukade lagra naturgas som användes som bränsle i närliggande fabriker och kraftverk. Gasometern är 120 m lång, och dess bas och tak är två stora cirklar med radie 35 m. Det finns två viktiga frågor som ingenjörer kanske vill besvara:

* Hur mycket naturgas kan lagras? Detta är [[volymen | område |]] cylinderns [[diameter.]]
* {.reveal(when="blank-0")} Hur mycket stål behövs för att bygga gasmätaren? Detta är (ungefär) [[ytytan | omkrets | diagonal]] i cylindern.

{.reveal(when="blank-0 blank-1")} Låt oss försöka hitta formler för båda dessa resultat!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometer Oberhausen

:::

---
> id: cylinder-prism

#### Volym av en cylinder

Den övre och nedre delen av en cylinder är två kongruenta cirklar, kallade __baser__ . De __{.m-blue} höjden _h___ av en cylinder är det vinkelräta avståndet mellan dessa baser, och den __{.m-red} radien _r___ hos en cylinder är helt enkelt radien hos de cirkulära baserna.

Vi kan ungefärliga en cylinder med en ${n}{n|5|3,20,1} -sidig [__prisma__](gloss:prism) . När antalet sidor ökar börjar prismen se mer och mer ut som en cylinder:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Även om en cylinder tekniskt inte är ett prisma, delar de många egenskaper. I båda fallen kan vi hitta volymen genom att multiplicera området för deras __{.m-red} bas__ med deras __{.m-blue} höjd__ . Detta betyder att en cylinder med radie _{.b.m-red} r_ och höjd _{.b.m-blue} h_ har volym

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Kom ihåg att radie och höjd måste använda samma enheter. Till exempel, om _r_ och _h_ båda är i cm, kommer volymen att vara i [[`"cm"^3`|`"cm"^2`| cm]] .

---
> id: oblique-cylinder
> goals: slide

::: column.grow

I exemplen ovan var de två baserna på cylindern alltid _direkt ovanför varandra_ : detta kallas en __höger cylinder__ . Om baserna inte ligger direkt ovanför varandra har vi en __sned cylinder__ . Baserna är fortfarande parallella, men sidorna verkar ”luta sig över” i en vinkel som inte är 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} Det _lutande tornet i Pisa_ i Italien är inte riktigt en sned cylinder.

:::

---
> id: cavalieri
> goals: slide

Volymen på en sned cylinder visar sig vara exakt densamma som för en höger cylinder med samma radie och höjd. Detta beror på [__Cavalieris princip__](gloss:cavalieri) , uppkallad efter den italienska matematikern [Bonaventura Cavalieri](bio:cavalieri) : om två fasta ämnen har samma tvärsnittsarea i varje höjd, kommer de att ha samma volym.

Föreställ dig att skära en cylinder i massor av tunna skivor. Vi kan sedan skjuta dessa skivor horisontellt för att få en sned cylinder. Volymen för de enskilda skivorna förändras inte när du gör dem sned, därför förblir den totala volymen också konstant:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### Ytans yta på en cylinder

::: column.grow

För att hitta ytan på en cylinder måste vi "rulla upp" den i dess platta [nät](gloss:net) . Du kan prova detta själv, till exempel genom att skala bort etiketten på en burk mat.

Det finns två [[cirklar | sfärer | rutor]] , en längst upp och en längst ner på cylindern. Den böjda sidan är faktiskt en stor [[rektangel | fyrkant | ellips]] .

* {.reveal(when="blank-0 blank-1")} De två cirklarna har vardera området _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} Rektangelns höjd är _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} och rektangelns bredd är densamma som [[omkretsen | diameter | cirklarens tangent]] :_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Detta innebär att den totala ytarean för en cylinder med radie _r_ och höjd _h_ ges av

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ .

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Cylindrar finns överallt i vår värld - från sodavatten till toalettpapper eller vattenledningar. Kan du tänka på några andra exempel?

_Gasometern_ ovan hade en radie på 35 m och en höjd av 120 m. Vi kan nu beräkna att dess volym är ungefär [[461 000 ± 1000]] `"m"^3` och dess ytarea är ungefär [[34 080 ± 100]] `"m"^2` .

---
> id: cone

### kottar

::: column.grow

En [__kon__](gloss:cone) är en tredimensionell fast substans som har en cirkulär __{.m-red} bas__ . Dess sida "avsmalnar uppåt" som visas i diagrammet och slutar i en enda punkt som kallas __{.m-green} toppunkt__ .

De __{.m-red} radie__ av könen är radien hos den cirkulära basen, och __{.m-blue}__ konens __höjd__ är vinkelrätt avstånd från bas till topp.

Precis som andra former vi träffade tidigare, är kottar överallt runt oss: glass kottar, trafikkottar, vissa tak och till och med julgranar. Vad mer kan du tänka på?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volym av en kon

::: column.grow

Vi hittade tidigare volymen på en cylinder genom att approximera den med ett prisma. På liknande sätt kan vi hitta volummen på en kon genom att approximera den med en [__pyramid__](gloss:pyramid) .

Här kan du se en ${n}{n|5|3,18,1} -sidig pyramid. När antalet sidor ökar börjar pyramiden se mer och mer ut som en kon. Vi kan faktiskt tänka på en kon som en pyramid med _oändligt många_ sidor!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Detta innebär också att vi också kan använda ekvationen för volymen: `V = 1/3 "base" × "height"` . Basen på en kon är en cirkel, så volymen för en kon med radie _r_ och höjd _h_ är

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Lägg märke till likheten med ekvationen för volymen på en cylinder. Tänk dig att rita en cylinder _runt_ konen, med samma bas och höjd - det kallas den __omskrevna cylindern__ . Nu tar konan upp exakt [[en tredjedel | halv | en fjärdedel]] av cylinderns volym:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Obs: Du kanske tror att oändligt många små sidor som en tillnärmning är lite "upresis". Matematiker tillbringade lång tid på att försöka hitta ett mer enkelt sätt att beräkna konens volym. 1900 utsåg den stora matematikern [David Hilbert till och](bio:hilbert) med det som ett av de 23 viktigaste olösta problemen i matematik! Idag vet vi att det faktiskt är omöjligt.

---
> id: oblique-cone
> goals: slide

::: column.grow

Precis som en cylinder behöver en kon inte vara "rak". Om toppmaterialet är direkt över basens centrum har vi en __rätt kon__ . Annars kallar vi det en __sned kon__ .

Återigen kan vi använda Cavalieris princip för att visa att alla sneda kottar har samma volym, så länge de har samma bas och höjd.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Ytan på en kon

::: column.grow

Att hitta ytan på en kon är lite svårare. Som tidigare kan vi ta upp en kon i dess nät. Flytta reglaget för att se vad som händer: i det här fallet får vi en cirkel och en [[cirkel sektor | cirkel segment | cirkelbåge]] .

{.reveal(when="blank-0")} Nu måste vi bara lägga till området för båda dessa komponenter. De __{.m-yellow} basen__ är en cirkel med radie _r_ , så dess yta är

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Radien för __{.m-green} sektoren__ är densamma som avståndet från kottens kant till dess topp. Detta kallas [{.pill.green.b} lutningshöjden _s_](target:s) på konen, och inte samma som den normala [{.pill.blue.b} höjd _h_](target:h) . Vi kan hitta snedhöjden med [Pythagoras](gloss:pythagoras-theorem) :

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

De [{.pill.red} sektorens båglängd](target:arc) är densamma som [[omkretsen | diameter | bågen]] av [{.pill.yellow} bas](target:base) : _{span.reveal(when="blank-0")}`2 π r` . Nu kan vi hitta området inom sektorn med [formeln](gloss:circle-sector) vi härledde i ett tidigare avsnitt:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

:::

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

Slutligen måste vi bara lägga till området __{.m-yellow} basen__ och området för __{.m-green} sektor__ , för att få den totala ytan är av konen:

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### sfärer

::: column.grow

En [__sfär__](gloss:sphere) är en tredimensionell fast substans som består av alla punkter som har samma avstånd från en given __{.m-green} centrum _C.___ Detta avstånd kallas __{.m-red}__ sfärens __radie _r___ .

Du kan tänka på en sfär som en "tredimensionell [cirkel](gloss:circle) ". Precis som en cirkel har en sfär också en __{.m-blue} diameter _d___ , som är [[två gånger | halva]] radieens längd, liksom ackord och fästen.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} I ett [tidigare avsnitt](/course/circles/tangets-chords-arcs#eratosthenes-1) lärde du dig hur den grekiska matematikern [Eratosthenes](bio:eratosthenes) beräknade jordens radie med skuggan av en pol - den var 6 371 km. Låt oss försöka hitta jordens totala volym och ytarea. [Fortsätta](btn:next)

---
> id: sphere-volume

#### Volym av en sfär

För att hitta volymen på en sfär måste vi än en gång använda Cavalieris princip. Låt oss börja med en halvkula - en sfär skuren i hälften längs ekvatorn. Vi behöver också en cylinder med samma radie och höjd som halvklotet, men med en inverterad kon "utskuren" i mitten.

När du flyttar reglaget under kan du se tvärsnittet av båda dessa former i en specifik höjd över basen:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")

      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)

{.reveal(when="slider-0")} Låt oss försöka hitta tvärsnittsområdet för båda dessa fasta ämnen på avstånd [{.pill.blue} höjd _h_](target:h) över basen.

::: column.grow

{.reveal(when="slider-0")} Tvärsnittet av halvklotet är alltid en [[cirkel | ringa | cylinder]] .

{.reveal(when="blank-0")} De [{.pill.red} radien _x_](target:x) av tvärsnittet är en del av a [{.pill.yellow} rätvinklad triangel](target:tri) , så vi kan använda [Pythagoras](gloss:pythagoras-theorem) :

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` .

Nu är tvärsnittsområdet

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

Tvärsnittet på den utskurna cylindern är alltid en [[ring | cirkel | kon]] .

::: .reveal(when="blank-1")

Hålets radie är _h_ . Vi kan hitta området på ringen genom att subtrahera hålets area från området med den större cirkeln:

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Det ser ut som att båda fasta partiklar har samma tvärsnittsarea på alla nivåer. Enligt Cavalieris princip måste båda fasta partiklar också ha samma [[volym | ytarea | omkrets]] ! _{span.reveal(when="blank-0")} Vi kan hitta volymen på halvklotet genom att subtrahera volymen på [cylindern](gloss:cylinder-volume) och [konens](gloss:cone-volume) volym:_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

En sfär består av [[två]] halvsfärer, _{span.reveal(when="blank-0")} vilket betyder att dess volym måste vara_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` .

---
> id: earth-volume
> goals: numbers

::: column.grow

Jorden är (ungefär) en sfär med en radie av 6 371 \ km. Därför är dess volym

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
| | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Jordens genomsnittliga densitet är `5510 "kg/m"^3` . Detta betyder att dess totala massa är

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Det är en 6 följt av 24 nollor!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Om du jämför ekvationerna för volymen på en cylinder, kon och sfär, kanske du märker ett av de mest tillfredsställande förhållandena inom geometri. Föreställ dig att vi har en cylinder med samma höjd som basens diameter. Vi kan nu passa både en kon och en sfär perfekt inuti:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Denna kon har radie `r` och höjd `2r` . Dess volym är _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Denna sfär har radie `r` . Dess volym är _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Denna cylinder har radie `r` och höjd `2r` . Dess volym är _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Lägg märke till hur, om vi [[lägger till | subtrahera | multiplicera]] konens volym och sfär, vi får exakt cylinderns volym!

---
> id: sphere-maps
> goals: move projection

#### Ytan på en sfär

Att hitta en formel för ytan på en sfär är mycket svårt. En anledning är att vi inte kan öppna och "platta" ytan på en sfär, som vi gjorde för kottar och cylindrar tidigare.

Detta är en speciell fråga när du försöker skapa kartor. Jorden har en krökt, tredimensionell yta, men varje tryckt karta måste vara platt och tvådimensionell. Detta innebär att geografer måste fuska: genom att sträcka eller klämma in vissa områden.

Här kan du se några olika typer av kartor, så kallade __projektioner__ . Försök flytta det röda torget och se hur det här området _verkligen_ ser ut i världen:

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Cylindrical
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide") Mollweide
      .box.no-padding.sphere-maps
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the three-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

För att hitta en sfärs ytarea kan vi återigen ungefärliga det med en annan form - till exempel en polyhedron med många ansikten. När antalet ansikten ökar börjar polyederen se mer och mer ut som en sfär.

{.todo} KOMMER GÅNGT: Sfärytans ytskydd

---

## Koniska sektioner

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Cirkeln är en av fyra olika former som kan skapas med "skivor" genom en [kon](gloss:cone) . Detta kan demonstreras med hjälp av ljuskotten från en fackla:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p.no-voice: strong Circle
          include svg/circle.svg
        .hide
          p.no-voice: strong Ellipse
          include svg/ellipse.svg
        .hide
          p.no-voice: strong Parabola
          include svg/parabola.svg
        .hide
          p.no-voice: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

Om du pekar facklan vertikalt nedåt ser du en [[cirkel | ellips | oval]] av ljus. _{span.reveal(when="blank-0")} Om du lutar konen får du en [__ellips__](gloss:ellipse) . Om du lutar den ännu längre får du en [__parabola__](gloss:parabola) eller en [__hyperbola__](gloss:hyperbola) ._

---
> id: conics-2

::: column.grow

Sammantaget kallas dessa fyra former [__koniska sektioner__](gloss:conic-section) . Även om de alla ser väldigt olika ut, är de nära besläktade: de kan faktiskt genereras med samma ekvation!

Koniska sektioner studerades först av den antika grekiska matematikern [Apollonius av Perga](bio:apollonius) , som också gav dem sina ovanliga namn.

På senare kurser lär du dig mycket mer om parabolas och hyperbolor. Låt oss nu titta närmare på ellipsen.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### ellipser

En ellips ser bara nästan ut som en "långsträckt cirkel". I själva verket kan du tänka på det som en cirkel med _två centra_ - dessa kallas __kontaktpunkter__ . Precis som varje punkt på en cirkel har samma avstånd från sitt centrum, så har varje punkt på en ellips samma _summa avstånd_ till dess två kontaktpunkter.

Om du har en lång sträng ansluten till två fasta punkter kan du rita en perfekt ellips genom att spåra strängarnas maximala räckvidd:

{.todo} Kommer snart: Ellipses ritning interaktiv

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Det finns många andra fysiska framställningar av hur du kan rita en ellips:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### Planetbana

::: column.grow

Du kanske kommer ihåg från början av denna kurs, att antika grekiska astronomer trodde att jorden är i universums centrum och att solen, månen och planeterna rör sig runt jorden på cirkulära banor.

Tyvärr stödde inte astronomisk observation av himlen detta. Till exempel verkade solen större under vissa delar av året och mindre under andra. På en cirkel bör varje punkt ha [[samma | en ökande | ett minskande]] avstånd från dess centrum.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Grekisk astronom Hipparchus av Nicaea

:::

---
> id: epicycles
> goals: play

För att fixa detta lade astronomer __Epicycles__ till sin modell av solsystemet: planeter rör sig på en stor cirkel runt jorden, samtidigt som de roterar på en mindre cirkel. Även om det var mycket komplicerat, var detta den mest accepterade modellen av vårt universum i mer än 1000 år:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Den här planeten gör ${n}{n|6|2,12,1} rotationer runt den lilla cirkeln ( __epicykeln__ ) under en rotation runt den stora cirkeln ( __deferenten__ ).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} En ritning av epicyklar från 1500-talet i den __geocentriska modellen__ . Det grekiska ordet "planetes" betyder "vandrare".

:::

---
> id: kepler
> goals: play

::: column.grow

Med tiden insåg människor att jorden bara var en av många planeter som kretsar runt solen (den __heliocentriska modellen__ ), men det var inte förrän 1609, att astronomen [Johannes Kepler](bio:kepler) upptäckte att planeterna faktiskt rör sig på _elliptiska banor_ .

Solen befinner sig i en av de två ellipsernas två fokuspunkter. Planeterna snabbar upp när de kommer närmare solen och saknar ner när de rör sig längre bort.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

Några decennier senare kunde [Isaac Newton](bio:newton) bevisa Keplers iakttagelser genom att använda sina nyutvecklade [__gravitationslagar__](gloss:gravity) . Newton insåg att det finns en kraft mellan två massor i universum - liknande attraktionen mellan två magneter.

Tyngdkraften är det som får allt att falla till marken och tyngdkraften är också det som får planeterna att röra sig runt solen. Det är bara den stora hastigheten som planeterna rör sig på, som hindrar dem från att falla direkt i solen.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Med hjälp av Newtons lagar kan du härleda den väg som objekt tar när du rör sig under tyngdkraften. Det visar sig att planeter rör sig på ellipser, men andra föremål som kometer kan färdas på [paraboliska](gloss:parabola) eller [hyperboliska](gloss:hyperbola) vägar: de flyger nära solen innan de vänder sig om och skjuter ut i universum, för att aldrig komma tillbaka.

Enligt legenden inspirerade ett fallande äpple Newton att tänka på allvar. Han var en av de mest inflytelserika forskarna genom tiderna, och hans idéer formade vår förståelse av världen i nästan 300 år - tills Albert Einstein upptäckte relativitet 1905.

:::
