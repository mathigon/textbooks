# Fraktali

## Uvod

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

Gledajući prirodu, možda ste primijetili zamršene biljke poput ovih:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Ovo __Paprat__ sastoji se od mnogo malih listova koji se granaju sa većeg.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Ova __Romanesco brokula__ sastoji se od manjih [[konusa|cubes|spheres]] koji se spiraliraju oko većeg.

:::

{.reveal(when="blank-0")} U početku se to čine kao vrlo složeni oblici, ali kada pogledate bliže, primijetit ćete da oboje slijede relativno jednostavan obrazac: svi [pojedinačni dijelovi](target:fractal) biljaka izgledaju potpuno isto kao i cijeli biljka, samo manja. Isti se obrazac ponavlja iznova i iznova, na manjim mjerilima. [Nastaviti](btn:next)

---

> id: fern

U matematici ovo svojstvo nazivamo __sličnošću__, a oblici koji ga imaju nazivaju se [__fraktalima__](gloss:fractal). Oni su neki od najljepših i najbizarnijih predmeta u čitavoj matematici.

Da bismo stvorili vlastite fraktale, moramo početi s jednostavnim uzorkom, a zatim ga ponavljati iznova i iznova, na manjim mjerilima.

::: column.grow

Jedan od najjednostavnijih obrazaca mogao bi biti [{.pill.red} linijski segment](target:s1), s [{.pill.blue} još dva segmenta](target:s2) koji se granaju s jednog kraja. Ako ponovimo ovaj uzorak, oba ova plava segmenta također će imati još dvije grane na svojim krajevima.

Možete pomicati [plave točke](target:dot) za promjenu duljine i kuta svih grana. Zatim povećajte broj ponavljanja pomoću [klizača](->#fern-slider) u nastavku.

{.reveal(when="slider-0")} Ovisno o položaju grana, možete napraviti potpuno drugačije obrasce - izgledajući poput [paprati](action:set(130,228,197,184)) gore, [stabla](action:set(160,186,200,186)) ili [ugniježđenih pentagona](action:set(113,235,232,238)). Što još možete pronaći? [Nastaviti](btn:next)

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

Još jedan poznati fraktal je [__Sierpinski trokut__](gloss:sierpinski-triangle). U ovom slučaju započinjemo velikim, jednakostraničnim trokutom, a zatim više puta izrezujemo manje trokut od preostalih dijelova.

{.reveal(when="slider=0")} Primijetite kako se konačni oblik sastoji od [tri identične kopije samog sebe](target:x), a svaku od njih čine još manje kopije cijelog trokuta! Možete nastaviti zumirati u trokut zauvijek, a obrasci i oblici uvijek će se ponavljati.

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

Biljke na početku ovog poglavlja _izgledaju_ baš poput fraktala, ali očigledno je nemoguće stvoriti _istinske_ fraktale u stvarnom životu. Ako stalno i iznova ponavljamo isti obrazac, sve manji i manji, na kraju bismo stigli do stanica, molekula ili atoma koji se više ne mogu podijeliti.

Međutim, koristeći matematiku, možemo razmišljati o svojstvima koja bi stvarni fraktali "imali" - a to su vrlo iznenađujuća ... [Nastavi](btn:next)

---

> id: dimension

### Fraktalne dimenzije

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Prvo, razmislimo o dimenziji fraktala. Crta ima dimenziju [[1]]. _{span.reveal(when="blank-0")} Kada ga skalirate za faktor 2, njegova duljina se povećava za faktor `2^1 = 2`. Očito!_

:::

---

> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Kvadrat ima dimenziju [[2]]. _{span.reveal(when="blank-0")} Kada ga skalirate za faktor 2, njegova površina se povećava za faktor `2^2 =` [[4]]_

:::

---

> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Kocka ima dimenziju [[3]]. _{span.reveal(when="blank-0")} Kada ga skalirate za faktor 2, njegov se volumen povećava za faktor `2^3 =` [[8]]_ _{span.reveal(when="blank-1")} Primjetite da je veća kocka na slici sastoji se od 8 primjeraka manjeg!_

:::

---

> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Pogledajmo sada Sierpinski trokut. Ako ga skaliramo s faktorom 2, možete vidjeti da se "područje" povećava za faktor [[3]].

{.reveal(when="blank-0")} Recimo da je _d_ dimenzija Sierpinskog trokuta. Koristeći isti obrazac kao gore, dobivamo `2^d = 3`. Drugim riječima, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585 ..._

:::

---

> id: dimension-4

Ali pričekajte ... kako nešto može imati dimenziju koja nije cijeli broj? Čini se nemogućim, ali ovo je samo jedno od čudnih svojstava fraktala. U stvari, to je ono što daje fraktalima svoje ime: oni imaju __frakcijsku dimenziju__.

Svakom iteracijom uklanjamo dio područja Sierpinskog trokuta. Kad bismo to mogli raditi beskonačno mnogo puta, zapravo ne bi ostalo područje: to je razlog zašto je Sierpinski trokut nešto između dvodimenzionalnog područja i jednodimenzionalne crte.

::: .theorem

Iako su mnogi fraktalni _slični_, bolja definicija je da su __fraktalni__ oblici koji imaju __ne-cijelu dimenziju__.

:::

[Nastaviti](btn:next)

---

> id: snowflake

### Kochova pahulja

U prirodi postoji mnogo oblika koji izgledaju poput fraktala. Neke biljke smo već vidjeli na početku ovog poglavlja. Drugi sjajni primjeri su snježne pahulje i ledeni kristali:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120 alt="Snowflake")

:::

---

> id: koch

Da bismo stvorili vlastitu fraktalnu pahuljicu, još jednom moramo pronaći jednostavan postupak koji možemo primjenjivati iznova i iznova.

::: column.grow

Kao i Sierpinski trokut, započnimo s jednim, jednakostraničnim trokutom. No, umjesto _uklanjanja_ manjih trokuta na svakom koraku, _zbrajamo_ manje trokut uz rub. Dužina stranice svakog trokuta je [[`1/3`|`1/4`|`1/2`]] trokuta u prethodnom koraku.

{.reveal(when="blank-0")} Rezultirajući oblik naziva se [__Kochova pahulja__](gloss:koch-snowflake), nazvana po švedskom matematičaru [Helge von Koch](bio:koch). Još jednom primijetite da [mali presjeci](target:t2) ruba snježne pahulje izgledaju potpuno isto kao [veći odjeljci](target:t1).

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

Kada pomaknemo jedan rubni segment Kochove pahulje sa faktorom 3, njegova duljina [[četvoronošca|triples|doubles]].

{.reveal(when="blank-0")} Koristeći isti odnos dimenzija i faktora razmjera kao gore, dobit ćemo jednadžbu [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} To znači da je dimenzija Kochove pahulje `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab(parent="sticky")

#### Područje _{span.check(when="blank-6")}_

Stvaranje Kochovih pahuljica gotovo je poput [rekurzivnog slijeda](gloss:sequence-recursive): znamo početni oblik (trokut) i znamo kako prijeći iz jednog termina u drugi (dodavanjem više trouglova na svaki rub):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] novi trokut

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] novi trokut

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] novi trokut

:::

{.reveal(when="blank-0 blank-1 blank-2")} Nakon prve iteracije, broj novih dodanih trokuta povećava se za faktor [[4]] na svakom koraku. Istovremeno, površina ovih novih trokuta smanjuje se za faktor [[9]] na svakom koraku.

{.reveal(when="blank-3 blank-4")} Recimo da [prvi trokut](->#koch-0) ima površinu 1. Tada je ukupna površina [sljedeća tri trougla](->#koch-1) `3 × 1/9 = 1/3`. Sljedeći koraci čine [[geometrijski niz|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} sa zajedničkim omjerom [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Koristeći formulu za zbroj beskonačnih [geometrijskih serija](gloss:geometric-series), možemo izračunati da je ukupna površina Kochove pahulje

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perimetar _{span.check(when="blank-9")}_

::: column.grow

Također možemo pokušati izračunati perimetar Koch snježne pahulje. Kao što smo već vidjeli, duljina perimetra se mijenja za faktor [[`4/3`|`3/4`|`1/4`]] na svakom koraku.

{.reveal(when="blank-8")} To znači da, opet, imamo geometrijski niz, ali u ovom slučaju, [[se ne konvergira|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} To znači da je perimetar Kochove snježne pahulje zapravo __beskrajno dugačak__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Ako se ovo čini kontraintuitivno, sjetite se da pomnožimo obod sa `§4/3` na svakom koraku, i to radimo beskonačno mnogo puta._

:::

---

> id: frozen

::: column.grow

Gotovo je nezamislivo da možete imati oblik s _konačnim_ područjem i obodom _beskonačno_ - ali ovo je samo jedno od mnogih neočekivanih svojstava fraktala.

Možete li smisliti bilo koji drugi način stvaranja vlastitih fraktala? [Nastaviti](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Moja duša se spiralira na smrznutim fraktalima svuda okolo ..."

:::

---

> id: menger-sponge

### Menger spužva

Fraktali ne moraju biti "ravni", poput mnogih gore navedenih primjera. Jedan od najpoznatijih fraktala koji izgleda trodimenzionalno je __Menger spužva__, nazvan po matematičaru [Karlu Mengeru](bio:menger) koji ga je prvi opisao 1926. godine.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Počinjemo s čvrstom kockom i opetovano izbušimo sve manje i manje rupe na njenim stranama. Svaka nova iteracija rupa ima [[`1/3`|`1/2`|`1/4`]] širinu prethodne iteracije rupa.

{.reveal(when="blank-0")} Kocka `3×3×3` sastoji se od 27 manjih kockica, ali ovdje smo ih uklonili. Mengerova spužva se sastoji od [[20]] samih kopija koje su 3 puta manje.

{.reveal(when="blank-1")} Sada možemo pokušati izračunati dimenziju _d_ Mengerove spužve baš kao što smo to radili za Kochovu pahuljicu gore. U ovom slučaju dobili smo `3^d = 20`, ili `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1 slider-0")} Ako zamislite da izrezujete sve više i više rupa, beskonačno mnogo puta, ne bi preostao stvarni volumen. Zbog toga je kocka "ne baš" trodimenzionalna! [Nastaviti](btn:next)

---

> id: coastlines

### Fraktalne obale

Jedna od ključnih karakteristika svih fraktala koje smo do sada vidjeli jest da možete "zumirati" zauvijek i uvijek pronaći nove obrasce. Oko 1920. godine britanski matematičar [Lewis Fry Richardson](bio:richardson) shvatio je da isto vrijedi i za granicu ili obalu mnogih zemalja.

Počinjete s osnovnim oblikom zemlje i, kako povećavate, dodajete riječne dotoke, uvale i ušća, zatim pojedinačne litice, stijene, šljunak i tako dalje:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180 alt="Cliffs")

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180 alt="Beach")

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180 alt="Pebbles")

:::

[Nastaviti](btn:next)

---

> id: coastlines-1

::: column.grow

Ovo je značajan problem kada pokušavate izračunati duljinu granice neke zemlje - kako odlučiti koliko želite zumirati i koje čvorove i krajeve uključiti?

Jedan od načina na koji bismo mogli izmjeriti dužinu britanske obale, je naprimjer uzeti dugog vladara, prošetati njegovim plažama i zatim zbrojiti sve udaljenosti.

Ako je vladar dugačak ${rulers[index]}{index|0|0,8,1} km, moramo ga upotrijebiti ${count} puta, pa ćemo dobiti ukupnu obalu ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Samo možemo nastaviti, s manjim i manjim vladarima, i svaki put bi naš rezultat u duljini obale postajao malo duži. Kao i prije Kochove pahulje, čini se da je britanska obala beskonačno duga! To se često naziva __paradoks obale__. [Nastaviti](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Nekoliko desetljeća kasnije, matematičar [Benoit Mandelbrot](bio:mandelbrot) našao se na Richardson-ovom radu u odbačenoj knjižničarskoj knjizi, radeći u IBM-u. Prepoznao je njegov značaj, kao i povezanost s novijim istraživanjima fraktala i dimenzija.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Obala Britanije sigurno "izgleda" fraktalno, ali nije _sam sebi slična_, kao ostali fraktali koje smo vidjeli prije. Da bismo pronašli njegovu veličinu, možemo je nacrtati na rešetki i brojati broj ćelija s kojima se presijeca.

{.r.reveal(when="slider-0")} U početku postoje __{.pill.yellow} 88__ stanice koje se presijecaju. Ako skaliramo obalu s faktorom 2, tu je __{.pill.yellow} 197__ stanica koje se presijecaju - više nego dvostruko više! [Nastaviti](btn:next)

{.r.reveal(when="next-0")} Veličina obalne crte povećala se za faktor `§197/88`. Kao i prije, to znači da je dimenzija obale

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Ako ponovimo ovo sa većim mrežama, otkrili bismo da je dimenzija britanske obale zapravo otprilike 1,21. Mandelbrot je shvatio da je ta fraktalna dimenzija ujedno i mjera __hrapavosti oblika__ oblika - novi koncept, za koji je pronašao važne primjene u mnogim drugim područjima matematike i znanosti.

---

> id: nature

### Još fraktala iz prirode i tehnologije

Iako se istinski fraktali nikada ne mogu pojaviti u prirodi, postoji mnogo objekata koji izgledaju _gotovo_ poput fraktala. Već smo vidjeli biljke, pahulje i obalu, a evo još nekoliko primjera:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC" alt="Mountain range")

{.caption} Planinski lanac u središnjoj Aziji

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA" alt="River delta")

{.caption} Delta rijeke Ganges u Indiji

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox alt="Lightning bolts")

{.caption} Vijci za munje

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA" alt="Blood vessels")

{.caption} Krvne žile u mrežnici

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey" alt="Grand Canyon")

{.caption} Grand Canyon u SAD-u

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox alt="Clouds")

{.caption} Oblaci

:::

Svi ti predmeti mogu se činiti potpuno slučajni, ali, baš kao i fraktali, postoji temeljni obrazac koji određuje kako su formirani. Matematika nam može pomoći da bolje razumijemo oblike, a fraktali imaju primjenu u područjima poput medicine, biologije, geologije i meteorologije. [Nastaviti](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox alt="Computer-generated fractal terrain with mountains and water")

{.caption} Fraktalni teren generiran od računala

::: column.grow

Fraktale možemo koristiti i za stvaranje realističnih „kopija“ prirode, na primjer, kao pejzaži i teksture koje se koriste u video igrama ili računalno generiranim filmovima. Vode, planine i oblake na ovoj slici u potpunosti je napravio računalo, uz pomoć fraktala!

A čak i možemo obrnuti ovaj postupak za komprimiranje digitalnih slika, kako bismo smanjili njihovu veličinu datoteke. Prve algoritme razvili su Michael Barnsley i Alan Sloan 1980-ih, a novi se i danas istražuju.

:::

---

## Sierpinski trokut

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

Jedan od fraktala koje smo vidjeli u prethodnom poglavlju bio je [__Sierpinski trokut__](gloss:sierpinski-triangle), koji je dobio ime po poljskom matematičaru [Waclavu Sierpińskom](bio:sierpinski). Može se stvoriti započinjući jednim velikim, jednakostraničnim trokutom, a zatim opetovanim izrezanjem manjih trokuta iz njegovog središta.

{.r.reveal(when="slider-0")} Wacław Sierpiński bio je prvi matematičar koji je razmišljao o svojstvima ovog trokuta, ali pojavilo se mnogo stoljeća ranije u umjetničkim djelima, uzorcima i mozaicima.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Evo nekoliko primjera podnih obloga iz različitih crkava u Rimu:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire" alt="Mosaic Floor with Sierpinski Triangle")

:::

Kao što se ispostavilo, Sierpinski trokut pojavljuje se u širokom rasponu drugih područja matematike, a postoji mnogo različitih načina za njegovo generiranje. U ovom ćemo poglavlju istražiti neke od njih! [Nastaviti](btn:next)

---

> id: pascal
> goals: select

### Pascalov trokut

Možda se već sjećate Sierpinskog trokuta iz našeg poglavlja o [__Pascalov trokut__](gloss:pascals-triangle). Ovo je piramida brojeva u kojoj je svaki broj zbroj dva broja iznad. Dodirnite sve brojeve _čak_ u donjem trokutu kako biste ih istaknuli - i pogledajte primijetite li uzorak:

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

Pascalov trokut može se zauvijek nastaviti prema dolje, a Sierpinski uzorak nastavit će se većim i većim trokutima. Već možete vidjeti početak još većeg trokuta, počevši od 16. reda.

Ako su dvije susjedne ćelije djeljive s 2, tada njihov zbroj u ćeliji ispod mora biti i djeljiv sa 2 - zato možemo dobiti samo obojene trokute (ili pojedine ćelije). Naravno, možemo pokušati obojati i sve ćelije djeljive brojevima _osim 2_. Što mislite, što će se dogoditi u tim slučajevima? [Nastaviti](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Ovdje možete vidjeti malenu verziju prvih 128 redaka Pascalovog trokuta. Izdvojili smo sve ćelije koje su deljive sa ${n}{n|2|2,40,1} - što primjećujete?

{.reveal(when="var-0")} Za svaki broj dobivamo različit trokutasti uzorak sličan Sierpinskom trokutu. Obrazac je osobito pravilan ako odaberemo [[glavni broj|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Ako broj ima _mnogo različitih_ glavnih faktora, obrazac izgleda više slučajno.

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Igra kaosa

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Ovdje možete vidjeti tri vrhova jednakostraničnog trokuta. Kucnite bilo gdje u sivom području da biste stvorili četvrtu točku.

{.r.reveal(when="point")} Igrajmo se jednostavne igre: izaberemo jednu od vrhova trokuta nasumično, povučemo linijski segment između naše točke i vrha, a zatim pronađemo [{.pill.red} sredinu](target:p1) tog segmenta. [Nastaviti](btn:next)

{.r.reveal(when="next-0")} Sada ponavljamo postupak: odabiremo još jednu slučajnu vršku, crtamo segment iz naše posljednje točke i pronalazimo [{.pill.green} sredinu](target:p2). Imajte na umu da ove nove točke obojamo na temelju boje vrha odabranog trokuta. [Nastaviti](btn:next)

{.reveal(when="next-1")} Do sada se nije dogodilo ništa iznenađujuće - ali pazite kako isti postupak ponavljamo još mnogo puta:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Dodajte 1000 koraka_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Taj se postupak naziva __igra kaosa__. Na početku bi moglo biti nekoliko zalutalih točaka, ali ako iste korake ponovite više puta, raspodjela točkica počinje izgledati točno kao Sierpinski trokut!

Postoje mnoge druge verzije istog - na primjer, mogli bismo započeti kvadratom ili pentagonom, mogli bismo dodati dodatna pravila poput nemogućnosti odabira iste vrhove dva puta zaredom ili bismo mogli odabrati sljedeću točku u omjeru osim `§1/2` duž segmenta. U nekim ćemo slučajevima dobiti nasumičnu raspodjelu točkica, ali u drugim slučajevima otkrivamo još više fraktala:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Jeste li otkrili [Sierpinski tepih](action:carpet()) ili ovaj [peterokutni pahuljica](action:snowflake()) na osnovu [__zlatnog omjera__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Stanični automati

__ćelijski automat__ je mreža koja se sastoji od mnogih pojedinačnih ćelija. Svaka ćelija može biti u različitim "stanjima" (npr. Različite boje), a stanje svake ćelije određuje okolne stanice.

U našem primjeru svaka ćelija može biti ili crna ili bijela. Započinjemo s jednim redom koji sadrži samo jedan crni kvadrat. U svakom sljedećem retku boja svake ćelije određuje se od tri gornje ćelije. Dodirnite osam mogućih opcija dolje da biste preokrenuli njihovu boju - možete li pronaći skup pravila koja stvara uzorak sličan Sierpinskom trokutu?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Postoje dva izbora za svaku od osam opcija, što znači da ukupno postoji `2^8 =` [[256]] mogućih pravila. Neki, poput [pravila 126](action:setRule('01111110')), izgledaju kao Sierpinski trokut. Drugi, poput [Pravila 30](action:setRule('01111000')), izgledaju potpuno kaotično. Otkrio ga je [Stephen Wolfram](bio:wolfram) 1983. godine, a računala ih čak mogu koristiti za generiranje slučajnih brojeva!

---

> id: cellular-1

::: column.grow

Stanični automati pokazuju kako se vrlo složeni obrasci mogu stvoriti vrlo jednostavnim pravilima - baš kao i fraktali. Mnogi procesi u prirodi slijede jednostavna pravila, ali ipak proizvode nevjerojatno složene sustave.

U nekim slučajevima to može dovesti do pojave uzoraka koji izgledaju poput staničnih automata, na primjer boje na školjci ovog puža.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0" alt="Shell of a sea snail")

{.caption} Conus tekstil, otrovni morski puž

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Postoje mnoge varijante Sierpinskog trokuta i drugih fraktala sa sličnim svojstvima i procesima stvaranja. Neki izgledaju dvodimenzionalno, poput _Sierpinskog tepiha_ koji ste vidjeli gore. Ostali izgledaju trodimenzionalno, poput ovih primjera:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski piramida

:::

---

## Mandelbrotov set

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Svi fraktali koje smo vidjeli u prethodnim poglavljima stvoreni su postupkom __iteracije__: započinjete s određenim uzorkom, a zatim ga ponavljate iznova i iznova.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

To je slično drugom konceptu iz matematike koji ste vidjeli prije: s [rekurzivnim nizovima](gloss:sequence-recursive), započinjete s određenim brojem, a zatim primjenjujete istu rekurzivnu formulu, iznova i iznova, kako biste dobili sljedeći broj u slijed.

Uzmimo kao primjer rekurzivnu formulu `§x_n = x_(n-1)^2` i crtajte njene pojmove na numeričkoj liniji. Možete promijeniti vrijednost `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Uočite kako se rezultirajući niz može ponašati vrlo različito, ovisno o početnoj vrijednosti `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Ako se `x_0 > 1`, niz [[odvaja|converges]]: _{span.reveal(when="blank-0")} on samo nastavlja rasti, sve do beskonačnosti.

::: column.frame.f-blue.text-center(width=212)

Ako je `x_0` između –1 i 1, slijed [[konvergira|diverges]].

::: column.frame.f-blue.text-center(width=212)

Ako se `x_0 < -1`, slijed [[razlikuje|converges]].

:::

---

> id: iteration-2

Do sada nismo naučili ništa novo. Međutim, prije otprilike jednog stoljeća, matematičari su počeli istraživati što se događa s tim nizovima ako koristite [__složene brojeve__](gloss:complex-numbers), a ne samo pravi brojčani niz. Njihova otkrića bili su neki od najčudesnijih i najljepših rezultata u čitavoj matematici.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Koristimo isti slijed kao prije, `§x_n = x_(n-1)^2`, ali na složenoj ravnini. Možete pomaknuti položaj `pill(x_0,"yellow","x0")` da biste vidjeli što se događa sa sljedećim uvjetima. Ako slijed izgleda kao da se konvergira, obojite odgovarajuću točku na ravnini u _{span.pill.blue} plavu_:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Kao što vidite, niz se konvergira sve dok `pill(x_0,"yellow","x0")` leži [[unutar jediničnog kruga| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (krug s polumjerom 1, centriran u izvoru)._

---

> id: julia-1

Sada ćemo malo otežati stvari. Umjesto da samo usporedimo prethodni broj, svaki put dodamo i konstantnu _{.pill.red} c_ (što može biti bilo koji složen broj). Drugim riječima, `§x_n = x_(n-1)^2 + c`. Mislite li da ćemo ipak dobiti krug konvergencije? Koje biste još oblike mogli vidjeti? [Nastaviti](btn:next)

---

> id: julia-2

U ovom dijagramu možete pomicati položaj `pill(x_0,"yellow","x0")` kao i vrijednost `pill(c,"red","c")`:

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

{div(slot="legend")} Već znamo što će se dogoditi ako [`c = 0`](action:animate(0,0)) - to je isto kao gornji primjer. Konvergencija slijeda sve dok `x_0` leži unutar jediničnog kruga.

{div(slot="legend")} Čim promijenimo vrijednost _c_, događa se nešto prekrasno. Krug se transformira u vrlo složen, fraktalni oblik.

{div(slot="legend")} Kada [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) oblik se dijeli na beskonačno mnogo sitnih elemenata raspoređenih u spirale.

::: div(slot="legend")

U nekim se slučajevima sekvenca ne konvertira u _jednu točku_ - umjesto toga doseže ciklus od više točaka, poput trokuta. Ti se ciklusi nazivaju __orbitama__.

Točke koje su obojene plavo znači da se odgovarajući niz ili konvertira ili ima orbitu (kažemo da je __ograničena__). Bodove koje su bijele označavaju odgovarajući niz __odstupanja__: nije ograničen i na kraju diže u beskonačnost.

:::

{div(slot="legend")} Što još možeš pronaći? Pogledajte obrasce kad [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) ili kada [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Postoje neke vrijednosti _c_ gdje se _svaki_ niz razlikuje, tako da cijela složena ravnina ostaje bijela.

:::

---

> id: julia-3

Različiti oblici koji nastaju bojenjem u brojevima nazivaju se [__skupovi Julia__](gloss:julia-set). Dva francuska matematičara otkrila su samostalno, [Gaston Julia](bio:julia) i [Pierre Fatou](bio:fatou), oko 1918. godine.

U to vrijeme nije bilo računala koja bi mogla vizualizirati kako izgledaju Julijevi kompleti. Matematičari poput Julije i Fatou mogli su matematički rasuđivati o njima, ali samo su ikada vidjeli grube, ručno crtane skice onoga što bi mogli izgledati.

Danas nemamo ovaj problem - slike su dolje različite Julia. Različite boje govore _kako se brzo_ redoslijed u toj točki razilazi:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = 0.285 + 0.01"i"`

:::

[Nastaviti](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Mandelbrotov set

Prilikom stvaranja različitih Julia setova, mogli ste primijetiti da postoje neke vrijednosti _c_ za koje se svaki niz razlikuje, a cijela složena ravnina ostaje bijela. Nekoliko desetljeća nakon Julije i Fatoua, nova generacija matematičara pokušala je preslikati kako ta područja izgledaju.

U prethodnom primjeru odabrali smo fiksnu vrijednost za `pill(c,"red","c")`, a zatim promijenili položaj `pill(x_0,"yellow","x0")` u boji ravnine. Sada ispravimo vrijednost `pill(x_0 = 0,"yellow","x0")` i umjesto toga promijenimo vrijednost `pill(c,"red","c")`.

Još jednom obojite preko složene ravnine da biste otkrili područje na kojem nizovi ostaju omeđeni. Koje oblike očekujete da se pojave?

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

Ovaj fraktal se zove [__Mandelbrot set__](gloss:mandelbrot-set), a kada se rotira za 90 °, izgleda gotovo kao osoba, glave, tijela i dvije ruke. Prvi put ga je definirao i nacrtao 1978. u istraživačkom radu matematičara Roberta Brooksa i Petera Matelskog:

    figure: x-img(src="images/printout.jpg" width=360 height=290 credit="© Princeton University Press" alt="Mandelbrot set drawing")

Nekoliko godina kasnije, [Benoit Mandelbrot](bio:mandelbrot) koristio je moćna računala u IBM-u da bi stvorio mnogo detaljniju vizualizaciju fraktala, koji je kasnije dobio ime po njemu. Prvi ispisi izgledali su drugačije od očekivanih - sve dok nije shvatio da tehničari koji rade na pisačima čiste "nejasnost" oko ivice, pretpostavljajući da je to uzrokovano česticama prašine ili greškama pisača, a ne definirajuća karakteristika fraktala. ! [Nastaviti](btn:next)

---

> id: mandel-zoom

Kao i svi fraktalni materijali, Mandelbrot je zauvijek moguće "zumirati" pronalazeći nove obrasce u svim razmjerima. Ovdje možete zumirati dio Mandelbrotove garniture koja se zove __dolina morskog konja__. Crne točke su _unutar_ Mandelbrotova skupa, gdje je niz ograničen. Obojene točke su _izvan_ skupa Mandelbrot, gdje se niz razlikuje, a različite boje govore _kako brzo_ raste do beskonačnosti:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Ovaj se klizač sastoji od 27 pojedinačnih slika, do razine zumiranja veće od 14 kvadratnih milijardi, ili `2^54`. Sve u svemu, trebalo im je gotovo 45 minuta da predstave moderni laptop. Mandelbrotov skup može se stvoriti samo jednom, jednostavnom jednadžbom, `§x_n = x_(n-1)^2 + c`, ali je beskrajno složen i zapanjujuće lijep.

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

Dok pomičete vrijednost [{.pill.red} c](target:c) oko Mandelbrotovog skupa, možda ćete primijetiti znatiželjno svojstvo:

* Svi nizovi u [glavnom tijelu](target:bulb0) Mandelbrotovog skupa [[konvergiraju se|diverge|reach an orbit]] _{span.reveal(when="blank-0")} u jednu točku._
* {.reveal(when="blank-0")} Sekvence unutar [velike žarulje](target:bulb1) na vrhu [[dosežu orbitu|converge|diverge]] _{span.reveal(when="blank-1")} koja se sastoji od [[3]] točaka._
* {.reveal(when="blank-2")} Sekvence u [ovoj manjoj žarulji](target:bulb2) imaju orbite duljine [[5]].

:::

{.reveal(when="blank-3")} Svaka žarulja ima orbitu različitog veličine, a manje žarulje imaju sve više i više točaka u svojoj orbiti. Veličina ovih orbita je usko povezana sa __logističkom zemljovidom__, važnim konceptom u [teoriji haosa](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot veći dio svog života posvetio je proučavanju fraktala, kao i matematici _hrapavosti_ i _samosličnosti_. Njegov rad imao je primjene iz fizike, meteorologije, neurologije, ekonomije, geologije, inženjerstva, informatike i mnogih drugih područja.

Godine 1985. set Mandelbrot pojavio se na naslovnici časopisa _Scientific American_ i od tada je postao jedan od najprepoznatljivijih matematičkih oblika na svijetu. Možete ga pronaći na majicama, glazbenim spotovima i čuvarima zaslona, a na njega se poziva u mnogim popularnim knjigama i filmovima.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American" alt="Scientific American Magazine Cover")

:::

---

## Krivulje za ispunjavanje prostora

> section: space-filling
> sectionStatus: dev

{.todo} Uskoro!
