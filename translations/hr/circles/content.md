# Krugovi i Pi

## Uvod

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

Sve dok ljudi postoje, gledali smo u nebo i pokušali objasniti život na Zemlji koristeći gibanje zvijezda, planeta i mjeseca.

Drevni grčki astronomi bili su prvi koji su otkrili da se svi nebeski objekti kreću redovitim stazama, nazvanim __orbitama__. Vjerovali su da su ove orbite uvijek kružne. Napokon, krugovi su "najsavršeniji" svih oblika: simetrični u svim smjerovima, i na taj način je pogodan izbor za temeljni poredak našeg svemira.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} Zemlja je u središtu _Ptolemejskog svemira_.

:::

---
> id: radius
> goals: compass

Svaka točka [__kruga__](gloss:circle) ima istu udaljenost od središta. To znači da se mogu nacrtati [kompasom](gloss:compass):

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

{.reveal(when="compass")} Postoje tri važna mjerenja povezana s krugovima koje morate znati:

* {.reveal(when="compass" delay="1000")} Polumjer [{.pill.red.b}](target:r) je udaljenost od središta kruga do njegovog vanjskog ruba.
* {.reveal(when="compass" delay="4000")} [{.pill.blue.b} promjer](target:d) je udaljenost između dviju suprotnih točaka u krugu. Prolazi kroz njegovo središte, a njegova dužina je [[dva puta|half|the same as]] polumjer.
* {.reveal(when="blank-0")} Opseg [{.pill.green.b}](target:c) (ili obod) je udaljenost oko kruga.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Važno svojstvo krugova je da su svi krugovi [slični](gloss:similar). To možete dokazati pokazujući kako se svi krugovi mogu uskladiti koristeći [prijevode](gloss:translation) i [dilatacije](gloss:dilation):

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Možda se sjećate da je za slične poligone omjer između odgovarajućih strana uvijek konstantan. Nešto slično djeluje za krugove: omjer između [obima](gloss:circle-circumference) i [promjera](gloss:circle-diameter) jednak je za _svih krugova_. Uvijek je 3.14159 ... - tajanstveni broj zvan [__Pi__](gloss:pi), koji se često piše kao grčko pismo _π_ za "p". Pi ima beskonačno mnogo decimalnih znamenki koje se zauvijek nastavljaju bez ikakvog određenog uzorka:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Ovdje je kotač promjera 1. Dok "odmotavate" obod, možete vidjeti da je njegova duljina točno [[`pi`|`2 * pi`|3]]:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Za krug promjera _d_, obim je `C = π × d`. Slično tome, za krug s [polumjerom](gloss:circle-radius) _r_, obim je

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]].

---
> id: nature

Krugovi su savršeno simetrični i nemaju "slabe točke" poput uglova poligona. To je jedan od razloga zašto ih možete naći svugdje u prirodi:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Cvijeće

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planeti

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Drveće

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Voće

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Sapunski mjehurići

:::

{.r} A ima i toliko mnogo drugih primjera: od duge do vodenih valova. Možete li smisliti nešto drugo? [Nastaviti](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Ispada također da je krug oblika s najvećim područjem za određeni opseg. Na primjer, ako imate konop duljine 100 \ m, možete ga upotrijebiti za ograđivanje najvećeg prostora ako formirate krug (umjesto ostalih oblika poput pravokutnika ili trokuta).

U prirodi predmeti poput kapi vode ili mjehurića zraka mogu _uštedjeti energiju_ postajući kružni ili sferični, smanjujući njihovu površinu.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Kružnica_ = __{.m-green} 100__, _Područje_ = __${area}__

:::

---
> id: area
> goals: slider

### Područje kruga

Ali kako zapravo izračunati površinu kruga? Pokušajmo s istom tehnikom kojom smo koristili [pronalaženje područja četverokuta](/course/polyhedra/quadrilaterals): izrezali smo oblik na više različitih dijelova, a zatim ih preuredili u drugi oblik za koji već znamo područje (npr. Pravokutnik ili trokut ).

Razlika je samo u tome što su krugovi zakrivljeni i moramo imati neke aproksimacije:

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

Ovdje možete vidjeti krug podijeljen na ${toWord(n1)} klinove. Pomaknite klizač kako biste složili klinove u jednom redu.

{.reveal(when="slider")} Ako povećamo broj klinova na ${n1}{n1|6|6,30,2}, ovaj oblik počinje sve više ličiti na [[pravokutnik|circle|square]].

{.reveal(when="blank-0")} Visina pravokutnika jednaka je [[polumjeru|circumference|diameter]] kruga. _{span.reveal(when="blank-1")} Širina pravokutnika jednaka je [[polovini kruga|the circumference|twice the radius]] kružnice. gore.)_

{.reveal(when="blank-2" delay=1000)} Stoga je ukupna površina pravokutnika približno `A = π r^2`.

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

Ovdje možete vidjeti krug podijeljen na ${toWord(n)} prstenove. Kao i prije, klizač možete pomaknuti da "odvijete" prstenove.

{.reveal(when="slider")} Ako povećamo broj prstenova na ${n2}{n2|4|2,12,1}, ovaj oblik počinje sve više ličiti na [[trokut|rectangle|trapezium]].

{.reveal(when="blank-0")} Visina trokuta jednaka je [[polumjeru|diameter|circumference]] kruga. _{span.reveal(when="blank-1")} Baza trokuta jednaka je [[obimu|twice the diameter]] kruga._ _{span.reveal(when="blank-2")} Stoga je ukupna površina trokuta približno_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`.

:::

---
> id: area-2

Ako bismo mogli upotrijebiti beskonačno mnogo prstenova ili klinova, gornje aproksimacije bi bile savršene - i obojica nam daju istu formulu za područje kruga:

{.text-center.r} `A = π r^2`. [Nastaviti](btn:next)

---
> id: pi-approximations

### Izračunavanje Pi

Kao što ste vidjeli gore, `π = 3.1415926…` nije jednostavan cijeli broj, a decimalne se znamenke nastavljaju zauvijek, bez ikakvog ponavljajućeg uzorka. Brojevi s ovim svojstvom nazivaju se [__iracionalni brojevi__](gloss:irrational-numbers), a to znači da se `π` ne može izraziti kao jednostavan ulomak `a/b`.

To također znači da nikada ne možemo zapisati _sve_ znamenke Pi - uostalom, ima ih beskonačno mnogo. Drevni grčki i kineski matematičari izračunali su prve četiri decimalne znamenke Pi približavajući krugove koristeći pravilne poligone. Primijetite kako, kako dodajete više strana, poligon počinje izgledati [[i više|less|exactly]] poput kruga:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665. [Isaac Newton](bio:newton) uspio je izračunati 15 znamenki. Danas možemo koristiti moćna računala za izračunavanje vrijednosti Pi na mnogo veću točnost.

Trenutni rekord iznosi 31,4 bilijuna znamenki. Tiskana knjiga koja sadrži sve ove znamenke bila bi debljina otprilike 400 \ km - to je visina na kojoj [Međunarodna svemirska stanica](gloss:iss) kruži oko Zemlje!

Naravno, ne trebate pamtiti mnogobrojne Pi znakove. U stvari, frakcija `22/7 = 3.142…` je velika aproksimacija.

:::

---
> id: pi-sequence

Jedan od načina izračunavanja Pi je korištenje beskonačnih nizova brojeva. Evo jednog primjera koji je [Gottfried Wilhelm Leibniz](bio:leibniz) otkrio 1676. godine:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Kako izračunavamo sve više i više izraza ove serije, uvijek slijedeći isti obrazac, rezultat će se Pi i približiti.

---
> id: pi-colours
> goals: hover

::: column.grow

Mnogi matematičari vjeruju da Pi ima još znatiželjnije svojstvo: da je to __normalan broj__. To znači da se znamenke od 0 do 9 pojavljuju potpuno nasumično, kao da je priroda nekoliko puta beskonačno bacala kockice na 10 stranica kako bi odredila vrijednost Pi.

Ovdje možete vidjeti prvih 100 znamenki Pi-a. Pomičite se kroz neke ćelije da biste vidjeli kako se dijele znamenke.

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

Ako je Pi normalan, to znači da možete smisliti _bilo koji_ niz cifara, a on će se pojaviti negdje na njegovim znamenkama. Ovdje možete pretraživati prvih milijun Pi-a - sadrže li vaš rođendan?

::: .box.f-red.pi-box

#### Milijun cifara Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Čak smo mogli pretvoriti cijelu knjigu, poput Harryja Pottera, u vrlo dugačak niz znamenki (a = 01, b = 02 i tako dalje). Ako je Pi normalan, ovaj se niz pojavit će negdje u njegovim znamenkama - ali bilo bi potrebno milion godina da izračunamo dovoljno znamenki da ga pronađete.

Pi je lako razumjeti, ali od temeljne važnosti u znanosti i matematici. To bi mogao biti razlog zašto je Pi postao neuobičajeno popularan u našoj kulturi (barem, u usporedbi s drugim temama matematike):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")

{.caption} Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")

{.caption} Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")

{.caption} Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

Postoji čak i _Pi dan_ svake godine, koji ili pada 14. ožujka, jer `pi ≈ 3.14`, ili 22. srpnja, jer `pi ≈ 22/7`.

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Stupnjevi i radijani

> section: radians
> id: degrees
> translated: auto

Do sada smo u geometriji uvijek mjerili kutove u [stupnjevima](gloss:degrees). __{.m-red} puni krug__ rotacija je [[360]] °, __{.m-green} polovina kruga__ je [[180]] °, __{.m-yellow} četvrtina kruga__ je [[90]] °, i tako dalje.

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

{.r} Broj 360 je vrlo zgodan jer je djeljiv s tolikim drugim brojevima: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, i tako dalje. To znači da su mnogi ulomci jednog kruga također cijeli brojevi. Ali jeste li se ikad zapitali odakle dolazi broj 360? [Nastaviti](btn:next)

---
> id: babylon

::: column.grow

Kao što se događa, 360 stupnjeva jedan je od najstarijih pojmova u matematici koji i danas koristimo. Razvijeni su u drevnom Babilonu, prije više od 5000 godina!

U to je vrijeme jedna od najvažnijih primjena matematike bila u astronomiji. _sunce_ određuje četiri godišnja doba koja poljoprivrednici moraju znati kada uzgajaju usjeve. Slično tome, _mjesec_ određuje plimu, koja je bila važna za ribolovce. Ljudi su također proučavali zvijezde kako bi predviđali budućnost ili komunicirali s bogovima.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Babilonska tablica za izračun `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomi su primijetili da se zviježđa vidljiva u određeno vrijeme tijekom noći pomiču sitno svaki dan - sve dok se, nakon otprilike 360 dana, ne okreću natrag do svoje početne točke. A to bi mogao biti razlog zašto su krug podijelili u 360 stupnjeva.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Naravno, zapravo ima 365 dana u jednoj godini (dobro, 365.242199 da budemo tačni), ali babilonski matematičari radili su s jednostavnim sunčanim satima i ta je aproksimacija bila sasvim odgovarajuća.

Također je dobro surađivao s postojećim brojevnim brojem-60 (od `6 xx 60 = 360`). Ovaj sustav je razlog zašto još uvijek imamo 60 sekundi u minuti i 60 minuta u satu - iako se većina ostalih jedinica mjeri u [bazi 10](gloss:base-10) (npr. 10 godina u desetljeću ili 100 godina u stoljeće).

::: column.grow

Za mnoge od nas mjerenje kuta u stupnjevima je druga priroda: postoji 360 ° video, skejtboristi mogu povući 540s, a netko tko promijeni odluku mogao bi skrenuti za 180 °. Ali s matematičkog stajališta, izbor 360 potpuno je proizvoljan. Da smo živjeli na Marsu, krug bi mogao imati 670 °, a godina na Jupiteru čak ima 10.475 dana.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 McFlip, rotacija za 540 °

:::

---
> id: radians

### Radijani

Umjesto da podijele krug na neki broj segmenata (poput 360 stupnjeva), matematičari često vole izmjerite kutove pomoću [obima](gloss:circle-circumference) [__kruga jedinice__](gloss:unit-circle) (krug s polumjerom 1).

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

A [puni krug](action:setState(0)) ima opseg _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} Za [rotaciju polukruga](action:setState(1)), odgovarajuća udaljenost duž oboda je _{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} Za [rotaciju četvrtine kruga](action:setState(2)), udaljenost duž oboda je _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} I tako dalje: ovaj način mjerenja uglova naziva se [__radijanima__](gloss:radians) (ovo se možeš zapamtiti kao "jedinice radijusa").

:::

---
> id: radians-conversion

Svaki kut u stupnjevima ima ekvivalentnu veličinu u radijanima. Pretvaranje između dvije je vrlo jednostavno - baš kao što možete pretvoriti između drugih jedinica poput metra i kilometara ili Celzija i Farenheita:

{.text-center} __{.m-red} 360 °__ _{span.space} =_ __{.m-green} 2 _π_ rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left} `=>`_
__{.m-red} 1 °__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180) {.text-center} _{span.rotate.right} `=>`_
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

ti može napisati vrijednost radijana bilo kao množinu _π_, ili kao samo jedan decimalni broj. Možete li ispuniti ovu tablicu ekvivalentnih veličina kuta u stupnjevima i radijanima?

| __{.m-red} stupnjeva__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radijani__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Putovanje udaljenosti

Radijane možete misliti kao "pređenu udaljenost" duž opsega jedinice kruga. Ovo je posebno korisno za rad s predmetima koji se kreću kružnom stazom.

::: column.grow

Na primjer, [Međunarodna svemirska stanica](gloss:iss) kruži oko Zemlje jednom svakih 1,5 \ sat. To znači da je __brzina rotacije__ [[`(2 pi)/1.5`| `1.5/(2 pi)`|`1.5 * pi`]] radijana na sat.

{.reveal(when="blank-0")} U [krugu jedinica](gloss:unit-circle), brzina rotacije jednaka je brzini _stvarna_, jer je duljina opsega jednaka jednoj punoj rotaciji u radijanima (oba su `2pi`).

{.reveal(when="blank-0" delay=1000)} Polumjer ISS-ove orbite je 6800 \ km, što znači da _stvarna_ brzina ISS-a mora biti [[`(2 pi)/1.5 xx 6800`| `(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km na sat._

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

Možete li vidjeti da su u ovom primjeru radijani mnogo prikladnija jedinica od stupnjeva? Jednom kada znamo brzinu rotacije, jednostavno se moramo pomnožiti s polumjerom da bismo dobili stvarnu brzinu. Evo još jednog primjera: vaš automobil ima kotače s radijusom 0,25 m. Ako vozite brzinom od 20 m / s, kotači vašeg automobila okreću se brzinom od [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radijana u sekundi _{span.reveal(when="blank-0")} (ili `80/(2pi) = 13` rotacije u sekundi)._

---
> id: radians-trig

### Trigonometrija

Za većinu jednostavnih problema s geometrijom stupnjevi i radijani su potpuno međusobno zamijenjeni - možete odabrati koji vam je draži ili će vam postaviti pitanje koja jedinica treba dati odgovor. Međutim , kad proučite napredniju [trigonometriju](gloss:trigonometry) ili [račun](gloss:calculus), ispostavilo se da su radijani mnogo prikladniji od stupnjeva.

::: column.grow

Većina kalkulatora ima [poseban gumb](->.button.mode) za prebacivanje između stupnjeva i radijana. Trigonometrijske funkcije poput [__sin__](gloss:sin), [__cos__](gloss:cos) i __ten__ uzimaju kutove kao ulaz, a njihove obrnute funkcije __arcsin__, __lukovi__ i __arctan__ vratili su kutove kao izlaz. Trenutna postavka kalkulatora određuje koje se jedinice koriste za te kutove. Pokušajte pomoću ovog kalkulatora izračunati da je

{.text-center} sin (30 °) = [[0,5]] _{span.eqn-gap}_ cos (1 °) = [[0.999]]
grijeh (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]]

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

Korištenje radijana ima jednu posebno zanimljivu prednost kod korištenja funkcije Sine. Ako je `θ` vrlo mali kut (manji od 20 ° ili 0,3 rad), onda je `sin(θ) ≈ θ`. Na primjer,

{.text-center} grijeh (${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)} ...

{.reveal(when="var-0")} To se naziva __aproksimacija malog kuta__, a može uvelike pojednostaviti određene jednadžbe koje sadrže trigonometrijske funkcije. O tome ćete u budućnosti saznati mnogo više.

---

## Tangenta, akordi i lukovi

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

U prethodnim smo odjeljcima naučili nazive dane nekoliko različitih dijelova kruga - poput središta, polumjera, promjera i obima. Međutim, postoji mnogo geometrijskih elemenata koji se odnose na krug i trebamo ih riješiti složenije probleme:

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

* {.r} [{.red} seant](target:secant) je linija koja presijeca krug u dvije točke. [Nastaviti](btn:next)
* {.r.reveal(when="next-0")} A [{.green} akord](target:chord) je linijski segment čije krajnje točke leže na obodu kruga. [Nastaviti](btn:next)
* {.r.reveal(when="next-1")} A [{.blue} tangenta](target:tangent) je linija koja dodiruje krug u točno jednoj točki. To se zove __točka tangencije__. [Nastaviti](btn:next)
* {.r.reveal(when="next-2")} [{.yellow} luk](target:arc) presjek je kruga. [Nastaviti](btn:next)
* {.r.reveal(when="next-3")} [{.teal} sektor](target:sector) deo je unutrašnjosti kruga, omeđen _lukom_ i _dva radijusa_. [Nastaviti](btn:next)
* {.r.reveal(when="next-4")} Konačno, [{.purple} segment](target:segment) je dio unutrašnjosti kruga, omeđen _lukom_ i _akordom_. [Nastaviti](btn:next)

:::

---
> id: circle-parts-1

U ovom ćemo dijelu pogledati odnos svih tih elemenata i dokazati teoreme o njihovim svojstvima. Ne brinite za pamćenje svih definicija za sada - uvijek možete upotrijebiti [pojmovnik](->.footer-link[data-modal=glossarym]).

---

### Tangenta

{.todo} Uskoro!

---

### Akordi

{.todo} Uskoro!

---
> id: earth-arc

### Lukovi i sektori

::: column.grow

Većina znanstvenika u drevnoj Grčkoj složila se da je Zemlja sfera. Bilo je puno dokaza: od brodova koji su nestajali iza horizonta u moru, do kružnih kretanja zvijezda tijekom noći.

Nažalost, nitko nije točno znao _koliko je bila velika_ Zemlja - sve do oko 200. godine prije Krista, kada je matematičar [Eratosten](bio:eratosthenes) pronašao genijalan način za mjerenje Zemljevog radijusa, koristeći osnovnu geometriju. Trebamo malo više znanja o lukovima i sektorima kruga.

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

Kao što možete vidjeti na dijagramu, [{.red} luk](target:arc) dio je [[obima|diameter|tangent]] kruga, a [{.yellow} sektor](target:sector) dio [[unutrašnjosti|radius|perimeter]] kruga.

::: .reveal(when="blank-0 blank-1")

Luk između dvije točke _A_ i _B_ često se piše kao `arc(AB)`. Ova je definicija malo dvosmislena: postoji [{.purple} drugi luk](target:major) koji povezuje _A_ i _B_, ali ide obrnuto.

Manji od dva luka naziva se __manji luk__, a veći se zove __glavni luk__. Ako su točke _A_ i _B_ točno jedna nasuprot, oba luka imaju jednaku duljinu i [[polukrugovi|diameters|circumferences]].

:::
:::

---
> id: arcs-1

::: column.grow

Da bismo pronašli duljinu luka ili područje jednog sektora, moramo znati odgovarajući kut u središtu kruga: to se zove [{.blue} središnji kut](target:angle).

Primjetite kako luk, sektor i kut zauzimaju _isti omjer_ cijelog kruga. Na primjer, ako je [{.blue} središnji kut](target:angle) [90°](action:set90Deg()), potrebna je [[jedna četvrtina|one half|one third]] [{.teal} punog kruga](target:fangle).

::: .reveal(when="blank-0")

To znači da je [{.red} dužina luka](target:arc) takođe `1/4` [{.purple} cijelog opsega](target:circ) kruga, a [{.yellow} područje](target:sector) `1/4` od [{.orange} cijelog područja](target:area) kruga.

Taj odnos možemo izraziti jednadžbom:

{.text-center} `"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

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

Sada možemo preurediti te jednadžbe da bismo pronašli onu varijablu koja nas zanima. Na primjer,

::: column(width=320 parent="padded-thin")

| [ Duljina luka](pill:red) | = | `"circumference" × c/360` |
|                             | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ Područje sektora](pill:yellow) | = | `"circle area" × c/360` |
|                                    | = | `π r^2 × c/360` |
{.eqn-system}

:::

gdje je _r_ polumjer kruga, a _c_ veličina središnjeg kuta.

---
> id: arcs-rad

Ako se središnji kut mjeri u [radijanima](gloss:radians) a ne [stupnjeva](gloss:degrees), možemo upotrijebiti iste jednadžbe, ali moramo zamijeniti 360 ° sa [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ Dužina luka](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ Područje sektora](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Primijetite kako jednadžbe postaju mnogo jednostavnije i _π_ otkazuje se posvuda. To je zato što, kao što se sjećate, [definicija radijana](/course/circles/radians#radians) u osnovi je duljina luka u krugu s polumjerom 1.

Sada da vidimo kako možemo upotrebljavati lukove i sektore za izračunavanje opsega Zemlje. [Nastaviti](btn:next)

:::

---
> id: eratosthenes

U starom Egiptu, grad _Swenet_ bio je smješten uz rijeku Nil. Swenet je bio poznat po bunaru s znatiželjnim imanjem: postojao je jedan trenutak svake godine, kada je sunčeva svjetlost došla do samog dna bunara - u podne 21. lipnja, dan _ljetnog solsticija_. U to je točno vrijeme bilo osvijetljeno dno bunara, ali ne i njegove strane, što znači da Sunce stoji neposredno iznad izvora.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Stari Egipćani mjerili su velike udaljenosti računajući broj koraka koji su joj bili potrebni za hodanje.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Neki izvori kažu da je "Bunar Eratostena" bio na _Slonovskom ostrvu_ na rijeci Nil.

:::

Matematičar [Eratosten](bio:eratosthenes) živio je u _Aleksandriji_, oko 800 \ km sjeverno od Sweneta, gdje je bio direktor Velike knjižnice. U centru grada Aleksandrije stajao je obelisk, visok uski spomenik s vrhom u obliku piramide.

Eratosten je primijetio da je u podne na dan ljetnog solsticija obelisk bacio sjenu - što znači da je sunce _a ne_ neposredno iznad njega. Zaključio je da je to zbog zakrivljenosti Zemlje i shvatio da bi se ona mogla koristiti za izračun opsega našeg planeta.

---
> id: eratosthenes-1

::: column.grow

{.r} Ovdje možete vidjeti i izvor u Swenetu, kao i obelisk u Aleksandriji. Sunčeve zrake padaju izravno u bunar, ali udaraju obelisk pod kutom i bacaju sjenu. [Nastaviti](btn:next)

::: .reveal(when="next-0")

Eratosteni su izmjerili da je [{.teal} kut](target:angle1) sjene 7,2 °. To je isto kao [{.purple} središnji kut](target:angle2) [{.red} luk](target:arc) od Aleksandrije do Sweneta, jer su [[naizmjenični|vertical|corresponding]] kutovi.

:::
::: .reveal(when="blank-0")

Sada možemo koristiti jednadžbu za duljinu luka koju smo dobili gore:

{.text-center} `pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::
::: .reveal(when="blank-1")

Ako to preuredimo, ustanovit ćemo da je opseg Zemlje

{.text-center} `pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::
::: .reveal(when="blank-2")

Napokon znamo da je opseg kružnice `C = 2 pi r`, dakle, polumjer Zemlje je

{.text-center} `r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"`.

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

Eratostenovo mjerenje bio je jedan od najvažnijih pokusa u antici. Njegova procjena veličine Zemlje bila je iznenađujuće precizna, posebno kada je imao u vidu da je imao pristup vrlo osnovnim mjernim alatima.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Naravno, može biti teško prevesti njegove originalne rezultate u moderne jedinice poput kilometara. U staroj Grčkoj udaljenost je mjerena u _stadijima_ (približno 160 m), ali nije postojao univerzalni standard. Svako je područje imalo malo drugačiju verziju, a mi ne znamo koji je Eratosten koristio.

U sljedećim stoljećima znanstvenici su pokušali koristiti druge metode za izračun polumjera Zemlje - ponekad s vrlo različitim i netočnim rezultatima.

Jedno je od tih netočnih mjerenja natjeralo Kristofora Kolumba da zaplovi zapadno od Portugala. Pretpostavio je da je Zemlja mnogo manja nego što je zapravo, i nadao se da će stići do Indije. Zapravo je stigao na drugi kontinent između: Amerike.

:::

---

### Segmenti

{.todo} Uskoro!

---

## Teoreme kruga

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Ciklički poligoni

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Kugle, konusi i cilindri

> section: spheres-cones-cylinders
> id: solids
> translated: auto

U prethodnim smo odjeljcima proučavali svojstva kružnica na ravnoj površini. No, naš je svijet zapravo trodimenzionalan, pa pogledajmo neke 3D čvrste sastojke koji se temelje na krugovima:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} [__Cilindar__](gloss:cylinder) sastoji se od dva kongruentna paralelna kruga spojena zakrivljenom površinom.

::: column(width=220)

    x-solid(size=220)

{.text-center} A [__konus__](gloss:cone) ima kružnu bazu koja je spojena u jednu točku (koja se naziva vrhovima).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Svaka točka na površini [__sfere__](gloss:sphere) ima istu udaljenost od središta.

:::

Primijetite kako je definicija sfere gotovo jednaka definiciji [[kruga|radius|cube]] - osim u tri dimenzije!

---
> id: gasometer

### Cilindri

::: column.grow

Ovdje možete vidjeti cilindrični _Gasometar_ u Oberhausenu, Njemačka. Nekada je skladištao prirodni plin koji je služio kao gorivo u obližnjim tvornicama i elektranama. Gasometar je visok 120 m, a njegova baza i strop dva su velika kruga s polumjerom 35 m. Postoje dva važna pitanja na koja bi inženjeri mogli odgovoriti:

* Koliko prirodnog plina može biti pohranjeno? Ovo je [[volumen|area|diameter]] cilindra.
* {.reveal(when="blank-0")} Koliko čelika je potrebno za izgradnju gasometra? Ovo je (približno) [[površina|circumference|diagonal]] cilindra.

{.reveal(when="blank-0 blank-1")} Pokušajmo pronaći formule za oba ova rezultata!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometar Oberhausen

:::

---
> id: cylinder-prism

#### Količina cilindra

Gornji i donji dio cilindra su dva složena kruga koja se zovu __osnove__. __{.m-blue} visina _h___ cilindra je okomita udaljenost između ovih baza, a __{.m-red} polumjer _r___ od cilindar je jednostavno polumjer kružnih baza.

Cilindar možemo približiti ${n}{n|5|3,20,1}__ __prizmom__](gloss:prism). Kako se broj strana povećava, prizma počinje sve više podsjećati na cilindar:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Iako cilindar tehnički nije prizma, dijele mnoga svojstva. U oba slučaja možemo pronaći volumen množenjem površine njihove baze __{.m-red}__ s njihovom __{.m-blue} visinom__. To znači da cilindar sa polumjerom _{.b.m-red} r_ i visinom _{.b.m-blue} h_ ima volumen

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Zapamtite da polumjer i visina moraju koristiti iste jedinice. Na primjer, ako su _r_ i _h_ oboje u cm, glasnoća će biti u [[`"cm"^3`|`"cm"^2`|cm]].

---
> id: oblique-cylinder
> goals: slide

::: column.grow

U gornjim primjerima, dvije baze cilindra uvijek su bile _izravno jedna iznad druge_: ovo se zove __desni cilindar__. Ako osnove nisu izravno jedna iznad druge, imamo __kosi cilindar__. Osnove su još uvijek paralelne, ali čini se da se stranice "naginju" pod kutom koji nije 90 °.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} _Nagnuti toranj u Pizi_ u Italiji nije baš običan cilindar.

:::

---
> id: cavalieri
> goals: slide

Pokazalo se da je volumen nagibnog cilindra potpuno isti kao volumen desnog cilindra s istim polumjerom i visinom. To je zbog [__Cavalierijevog principa__](gloss:cavalieri), nazvanog po talijanskom matematičaru [Bonaventura Cavalieri](bio:cavalieri): ako dvije čvrste tvari imaju isto područje poprečnog presjeka na svakoj visini, tada će imaju isti volumen.

Zamislite rezanje cilindra na puno tankih diskova. Zatim možemo ove diskove gurnuti vodoravno da bismo dobili kosi cilindar. Glasnoća pojedinih diskova se ne mijenja dok se pravite ukoso, pa ukupna glasnoća također ostaje konstantna:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### Površina cilindara

::: column.grow

Da bismo pronašli površinu cilindra, moramo ga "razmotati" u svoj stan [mreža](gloss:net). Možete to i sami pokušati, na primjer skidanjem s etikete na konzervi hrane.

Postoje dva [[kruga|spheres|squares]], jedan na vrhu i jedan na dnu cilindra. Zakrivljena strana je zapravo veliki [[pravokutnik|square|ellipse]].

* {.reveal(when="blank-0 blank-1")} Svaka od dva kruga imaju područje _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} Visina pravokutnika je _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")}, a širina pravokutnika je jednaka [[obodu|diameter|tangent]] krugova:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

To znači da je ukupna površina cilindra s polumjerom _r_ i visinom _h_ dana

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Cilindre možete pronaći svugdje u našem svijetu - od limenke s sodom do toaletnog papira ili vodovodnih cijevi. Možete li smisliti još neke primjere?

_Gasometar_ imao je polumjer 35m i visinu od 120m. Sada možemo izračunati da je njegov volumen otprilike [[461,000 ± 1000]] `"m"^3`, a njegova površina je približno [[34,080 ± 100]] `"m"^2`.

---
> id: cone

### Konusi

::: column.grow

[__konus__](gloss:cone) trodimenzionalna kruta tvar koja ima kružnu __{.m-red} bazu__. Njegova strana "sužava se prema gore", kao što je prikazano na dijagramu, a završava u jednoj točki nazvanoj __{.m-green} verteksu__.

__{.m-red} polumjer__ konusa je polumjer kružne baze, a __{.m-blue} visina__ konusa pravokutni je udaljenost od osnove do vrha.

Kao i drugi oblici koje smo prije sreli, i stožci su posvuda oko nas: stožci sladoleda, prometni stošci, određeni krovovi pa čak i božićna drvca. Što još možete misliti?

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

#### Volumen konusa

::: column.grow

Prethodno smo pronašli volumen cilindra aproksimirajući ga pomoću prizme. Slično tome, volumen konusa možemo pronaći tako da ga približimo pomoću [__piramide__](gloss:pyramid).

Ovdje možete vidjeti ${n}{n|5|3,18,1} jednostranu piramidu. Kako se broj strana povećava, piramida počinje sve više ličiti na stožac. U stvari, o konusu bismo mogli razmišljati kao o piramidi sa _beskonačno mnogo strana_!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

To također znači da za volumen možemo upotrijebiti i jednadžbu: `V = 1/3 "base" × "height"`. Osnova konusa je krug, tako da je volumen konusa s polumjerom _r_ i visinom _h_

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Primijetite sličnost s jednadžbom za volumen cilindra. Zamislite da crtate cilindar _oko_ konusa, s istom bazom i visinom - to se naziva __opisan cilindar__. Konus će zauzeti tačno [[jednu trećinu|half|one quarter]] volumena cilindra:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Napomena: Mogli biste pomisliti da je beskonačno mnogo sitnih strana kao aproksimacija pomalo "neprecizno". Matematičari su dugo vremena pokušavali pronaći jednostavniji način izračunavanja volumena konusa. Godine 1900. veliki matematičar [David Hilbert](bio:hilbert) čak ga je imenovao jednim od 23 najvažnija neriješena problema u matematici! Danas znamo da je to zapravo nemoguće.

---
> id: oblique-cone
> goals: slide

::: column.grow

Kao i cilindar, konus ne mora biti "ravan". Ako se vrh nalazi izravno preko sredine baze, imamo __desni konus__. Inače ga zovemo __kosi konus__.

Još jednom možemo upotrijebiti Cavalierijev princip da pokažemo da svi kosi stožci imaju isti volumen pod uvjetom da imaju istu bazu i visinu.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Površina konusa

::: column.grow

Pronalaženje površine konusa nešto je složenije. Kao i prije, možemo iskopati konus u njegovu mrežu. Pomaknite klizač da vidite što se događa: u ovom slučaju dobit ćemo jedan krug i jedan [[sektor kruga|circle segment|circle arc]].

{.reveal(when="blank-0")} Sada samo moramo dodati površinu obje ove komponente. Baza __{.m-yellow}__ je krug s polumjerom _r_, pa je njegovo područje

{.text-center.reveal(when="blank-0")} `pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Polumjer __{.m-green} sektora__ jednak je udaljenosti od ruba konusa do njegove vrhove. To se zove [{.pill.green.b} visina nagiba _s_](target:s) konusa, a nije isto što je uobičajena [{.pill.blue.b} visina _h_](target:h) , Visinu nagiba možemo pronaći pomoću [Pitagore](gloss:pythagoras-theorem):

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
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

[{.pill.red} Dužina luka](target:arc) sektora jednaka je [[obodu|diameter|arc]] baze [{.pill.yellow} baze](target:base): _{span.reveal(when="blank-0")} `2 π r`. Sada možemo pronaći područje sektora pomoću [formule](gloss:circle-sector) koju smo dobili u prethodnom odjeljku:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
|                                     | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

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

I na kraju, moramo samo zbrojiti područje __{.m-yellow} baze__ i područje __{.m-green} sektora__ da ukupna površina bude od konusa:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Sfere

::: column.grow

[__sfera__](gloss:sphere) trodimenzionalna je čvrsta tvar koja se sastoji od svih točaka koje imaju istu udaljenost od danog __{.m-green} središta _C___. Ta se udaljenost naziva polumjer __{.m-red} _r___.

O sferi možete razmišljati kao o "trodimenzionalnom [krugu](gloss:circle)". Baš kao krug, kugla ima i promjer __{.m-blue} _d___, što je [[dva puta|half]] duljina radijusa, kao i akordi i sekvence.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} U [prethodnom odjeljku](/course/circles/tangets-chords-arcs#eratosthenes-1) naučili ste kako je grčki matematičar [Eratosten](bio:eratosthenes) izračunao polumjer Zemlje pomoću sjene pola - bio je 6.371 km. Sada pokušajmo pronaći ukupni volumen i površinu Zemlje. {[Nastaviti 1091}

---
> id: sphere-volume

#### Volumen sfere

Da bismo pronašli volumen sfere, još jednom moramo upotrijebiti Cavalierijevo načelo. Počnimo s hemisferom - sferom presječenom na polovici duž ekvatora. Također nam je potreban cilindar s istim polumjerom i visinom kao i hemisfera, ali s invertiranim konusom „izrezanim“ u sredini.

Dok pomičete klizač dolje, možete vidjeti presjek oba ova oblika na određenoj visini iznad baze:

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

{.reveal(when="slider-0")} Pokušajmo pronaći površinu presjeka obje ove čvrste tvari, na udaljenosti [{.pill.blue} visine _h_](target:h) iznad baze.

::: column.grow

{.reveal(when="slider-0")} Presjek hemisfere je uvijek [[krug|ring|cylinder]].

{.reveal(when="blank-0")} Polumjer [{.pill.red} _x_](target:x) presjeka je dio [{.pill.yellow} pravokutnog trokuta](target:tri), pa možemo koristiti [pythagoras](gloss:pythagoras-theorem),

::: .reveal(when="blank-0")

{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Sada je područje presjeka

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::
::: column.grow.reveal(when="eqn-0")

Poprečni presjek izrezanog cilindra uvijek je [[prsten|circle|cone]].

::: .reveal(when="blank-1")

Polumjer rupe je _h_. Područje prstena možemo pronaći oduzimanjem područja rupe od područja većeg kruga:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}

:::
:::

---
> id: sphere-volume-1

Čini se da obje čvrste tvari imaju isto područje poprečnog presjeka na svakoj razini. Prema Cavalierijevom principu, obje čvrste tvari moraju također imati isti [[volumen|surface area|circumference]]! _{span.reveal(when="blank-0")} Volumen hemisfere možemo pronaći ako oduzmemo volumen [cilindra](gloss:cylinder-volume) i volumen [konusa](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Kugla se sastoji od [[dvije]] hemisfere, _{span.reveal(when="blank-0")} što znači da njen volumen mora biti_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

Zemlja je (približno) sfera s polumjerom od 6.371 \ km. Stoga je njegov volumen

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Prosječna gustoća Zemlje je `5510 "kg/m"^3`. To znači da je njegova ukupna masa

{.text-center.reveal(when="numbers")} `"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} To je 6, a slijede 24 nule!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Ako usporedite jednadžbe za volumen cilindra, konusa i sfere, možda ćete primijetiti jedan od najzadovoljnijih odnosa u geometriji. Zamislite da imamo cilindar iste visine kao i promjer njegove osnove. Sada možemo savršeno uklopiti konus i kuglu u svoju unutrašnjost:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Ovaj konus ima polumjer `r` i visinu `2r`. Volumen mu je _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Ova sfera ima polumjer `r`. Volumen mu je _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Ovaj cilindar ima polumjer `r` i visinu `2r`. Volumen mu je _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Primjetite kako, ako [[zbrojimo|subtract|multiply]] volumen konusa i sfere, dobivamo točno volumen cilindra!

---
> id: sphere-maps
> goals: move projection

#### Površina sfere

Pronalaženje formule za površinu kugle vrlo je teško. Jedan od razloga je što površinu sfere ne možemo otvoriti i "poravnati", kao što smo to radili za konuse i boce.

To je posebno pitanje kod pokušaja stvaranja karata. Zemlja ima zakrivljenu, trodimenzionalnu površinu, ali svaka ispisana karta mora biti ravna i dvodimenzionalna. To znači da Geografi moraju varati: istezanjem ili škripanjem određenih područja.

Ovdje možete vidjeti nekoliko različitih tipova karata, nazvanih __projekcije__. Pokušajte pomaknuti crveni kvadrat i pogledajte kako ovo područje _zapravo izgleda_ na globusu:

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

Da bismo pronašli površinu neke kugle, još jednom je možemo približiti drugačijim oblikom - na primjer, poleded s puno lica. Kako se broj lica povećava, poliedar počinje sve više podsjećati na sferu.

{.todo} Uskoro: Dokazivanje površine sfere

---

## Konusni presjeci

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Krug je jedan od četiri različita oblika koji se mogu stvoriti pomoću kriški kroz [konus](gloss:cone). To se može pokazati svjetlošću konusa baklje:

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

Ako bateriju usmjerite okomito prema dolje, vidjet ćete [[krug|ellipse|oval]] svjetla. _{span.reveal(when="blank-0")} Ako nagnete konus, dobit ćete [__elipsu__](gloss:ellipse). Ako je nagnete još više, dobit ćete [__parabolu__](gloss:parabola) ili [__hiperbolu__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Zbirno, ova četiri oblika se nazivaju [__konični presjeci__](gloss:conic-section). Iako izgledaju vrlo različito, oni su usko povezani: u stvari, svi se mogu stvoriti istom jednadžbom!

Konične dijelove prvi je proučavao drevni grčki matematičar [Apolonij iz Perge](bio:apollonius), koji im je također dao svoja neobična imena.

Na kasnijim tečajevima naučit ćete puno više o parabolama i hiperbolama. Za sada, pogledajmo bliže elipsu.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Elipsa

Elipsa samo izgleda poput "izduženog kruga". Zapravo, o tome biste mogli razmišljati kao o krugu s _dva centra_ - oni se zovu __žarišta__. Baš kao što svaka točka kruga ima istu udaljenost od svog središta, svaka točka na elipsi ima istu _zbroj udaljenosti_ do njezina dva žarišta.

Ako imate dugi niz spojen na dvije fiksne točke, možete nacrtati savršenu elipsu prateći maksimalni domet žica:

{.todo} Uskoro: Elipse crtaju interaktivno

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Postoje mnogi drugi fizički prikazi kako možete nacrtati elipsu:

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

### Planetarne orbite

::: column.grow

Možda se sjećate od samog početka ovog tečaja da su drevni grčki astronomi vjerovali da je Zemlja u središtu svemira i da se sunce, mjesec i planeti kreću oko Zemlje kružnim orbitama.

Nažalost, astronomska promatranja neba nisu baš to podržala. Na primjer, sunce se pojavilo veće tijekom nekih dijelova godine, a manje tijekom drugih. U krugu bi svaka točka trebala biti [[jednaka|an increasing|a decreasing]] udaljenosti od njegovog središta.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Grčki astronom Hipparh iz Nikeje

:::

---
> id: epicycles
> goals: play

Da bi to popravili, astronomi su svom modelu Sunčevog sustava dodali __Epicycles__: planete se kreću velikim krugom oko Zemlje, istovremeno se okrećući na manjem krugu. Iako vrlo kompliciran, ovo je bio najopćenitiji model našeg svemira više od 1000 godina:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Ova planeta vrši ${n}{n|6|2,12,1} rotacije oko malog kruga (__epicikl__) tijekom jedne rotacije oko velikog kruga (__odbojnik__).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Crtež epica u 16. stoljeću u __Geocentričnom modelu__. Grčka riječ "planetes" znači "lutalice".

:::

---
> id: kepler
> goals: play

::: column.grow

Vremenom su ljudi shvatili da je Zemlja samo jedan od mnogih planeta koji kruže oko Sunca (__Heliocentrični model__), ali tek je 1609. godine astronom [Johannes Kepler](bio:kepler) otkrio te planete zapravo kreću po _eliptičnim orbitama_.

Sunce se nalazi u jednom od dva žarišta ovih elipsa. Planeti se ubrzavaju kad se približe suncu i usporavaju kako se odmiču dalje.

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

Nekoliko desetljeća kasnije, [Isaac Newton](bio:newton) uspio je dokazati Keplerove opažanja, koristeći svoje novorazvijene zakone [__gravitacije__](gloss:gravity). Newton je shvatio da u svemiru postoji sila između bilo koje dvije mase - slična privlačnosti između dva magneta.

Gravitacija je ono zbog čega sve pada na zemlju, a gravitacija je također ono zbog čega se planeti kreću oko Sunca. Samo velika brzina kojom se planeti kreću sprečava da padnu izravno na sunce.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Korištenjem Newtonovih zakona možete izvesti putanju kojom se predmeti kreću pri kretanju pod silom gravitacije. Ispada da se planeti kreću po elipsama, ali drugi objekti poput kometa mogu putovati [paraboličnim](gloss:parabola) ili [hiperboličkim](gloss:hyperbola) stazama: lete blizu sunca prije nego što se okrenu i pucaju u svemir, nikad se ne vratiti.

Prema legendi, padajuća jabuka nadahnula je Newtona na razmišljanje o gravitaciji. Bio je jedan od najutjecajnijih znanstvenika svih vremena, a njegove ideje oblikovale su naše razumijevanje svijeta gotovo 300 godina - sve dok Albert Einstein nije otkrio relativnost 1905. godine.

:::
