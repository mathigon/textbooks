# Fraktallar 

## Giriş 

> section: introduction
> id: intro
> translated: auto

Təbiətə baxarkən, bu kimi mürəkkəb bitkiləri görmüş ola bilərsiniz: 

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Bu __Fern__ daha böyük bir yarpağı olan bir çox kiçik yarpaqdan ibarətdir. 

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Bu __Romanesko brokoli__ daha kiçik [[konuslardan]] ibarətdir [[| kublar |]] daha böyük birinin ətrafına yayılan [[sferalar]] . 

:::

{.reveal(when="blank-0")} Başlanğıcda bunlar olduqca mürəkkəb formalar kimi görünür - lakin daha yaxından baxdığınız zaman onların ikisinin də nisbətən sadə bir nümunəyə uyduğunu görə bilərsiniz: bitkilərin bütün [fərdi hissələri](target:fractal) bütün bitki ilə eynidir, sadəcə daha kiçik. Eyni nümunə kiçik ölçülərdə təkrar-təkrar təkrarlanır. [Davam edin](btn:next) 

---
> id: fern

Riyaziyyatda bu mülkiyyəti __özünə bənzətmə__ və ona sahib olan formalar [__fraktallar__](gloss:fractal) adlandırırıq. Bunlar riyaziyyatın ən gözəl və ən qəribə obyektlərindən biridir. 

Öz fraktallarımızı yaratmaq üçün sadə bir naxışdan başlamalı və sonra təkrar-təkrar, daha kiçik ölçülərdə təkrarlamalıyıq. 

::: column.grow

Ən sadə nümunələrdən biri a ola bilər [{.pill.red} xətti seqmenti](target:s1) , ilə [{.pill.blue}](target:s2) bir ucundan dallanan [daha iki seqment](target:s2) . Bu nümunəni təkrarlasaq, hər iki mavi seqmentin də uclarında daha iki filial olacaqdır. 

Bütün filialların uzunluğunu və bucağını dəyişdirmək üçün [mavi nöqtələri](target:dot) hərəkət etdirə bilərsiniz. Sonra aşağıdakı [kaydırıcıyı](->#fern-slider) istifadə edərək təkrarlama sayını artırın. 

{.reveal(when="slider-0")} Budaqların mövqeyindən asılı olaraq tamamilə fərqli naxışlar [düzəldə bilərsiniz -](action:set(130,228,197,184)) yuxarıdakı [fern](action:set(130,228,197,184)) , bir [ağac](action:set(160,186,200,186)) və ya [yuva şəklindəki beşiklər kimi](action:set(113,235,232,238)) . Başqa nə tapa bilərsiniz? [Davam edin](btn:next) 

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

Digər məşhur fraktal [__Sierpinski üçbucağıdır__](gloss:sierpinski-triangle) . Bu vəziyyətdə böyük, bərabər tərəfli üçbucaqla başlayırıq və sonra qalan hissələrdən dəfələrlə kiçik üçbucaqları kəsirik. 

{.reveal(when="slider=0")} Son şəklin [özünün üç eyni nüsxədən](target:x) necə qurulduğuna diqqət yetirin və bunların hər biri bütün üçbucağın daha da kiçik nüsxələrindən ibarətdir! Üçbucağa əbədi olaraq böyütməyə davam edə bilərsiniz və naxışlar və formalar həmişə təkrar etməyə davam edəcəkdir. 

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

Yalnız fractals kimi bu fəsildə _göz_ başında bitkilərin, amma real həyatda _doğru_ fractals yaratmaq aydın mümkün deyil. Eyni nümunəni təkrar-təkrar, daha kiçik və daha kiçik bir şəkildə təkrarlamağa davam etsək, nəticədə bölünə bilməyən hüceyrələrə, molekullara və ya atomlara qovuşacağıq. 

Ancaq riyaziyyatdan istifadə edərək həqiqi fraktalların "olacağı" xüsusiyyətləri barədə düşünə bilərik - və bunlar çox təəccüblüdür ... [Davam et](btn:next) 

---
> id: dimension

### Fraktal Ölçülər 

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Əvvəlcə fraktalların ölçüsü barədə düşünək. Bir xəttin [[1]] ölçüsü var. _{span.reveal(when="blank-0")} 2 faktorla ölçüldükdə, uzunluğu bir amil artır `2^1 = 2` . Aydındır!_ 

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Bir kvadratın [[2]] ölçüsü var. _{span.reveal(when="blank-0")} 2 faktorla ölçüldükdə, sahəsi bir amil artar `2^2 =` [[4]] ._ 

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Bir kubun [[3]] ölçüsü var. _{span.reveal(when="blank-0")} 2 faktorla ölçüldükdə, onun həcmi bir amil artar `2^3 =` [[8]] ._ _{span.reveal(when="blank-1")} Görünüşdəki daha böyük kub, daha kiçik olan 8 nüsxədən ibarətdir!_ 

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

İndi Sierpinski üçbucağına nəzər salaq. Əgər onu 2 faktora görə ölçsək, “sahə” nin [[3]] amil artdığını görə bilərsiniz. 

{.reveal(when="blank-0")} Deyək ki, _d_ Sierpinski üçbucağının ölçüsüdür. Yuxarıdakı kimi eyni nümunədən istifadə edərək əldə edirik `2^d = 3` . Başqa sözlə, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585…_ 

:::

---
> id: dimension-4

Ancaq gözləyin ... necə bir şey tam olmayan bir ölçüyə sahib ola bilər? Bu qeyri-mümkün görünür, amma bu fraktalların qəribə xüsusiyyətlərindən yalnız biridir. Əslində fraktallara adlarını verən budur: __fraksiya ölçüsü var__ . 

Hər iterasiya ilə Sierpinski üçbucağının bir hissəsini çıxarırıq. Bunu sonsuz dəfələrlə edə bilsəydik, əslində heç bir sahə qalmazdı: buna görə Sierpinski üçbucağı iki ölçülü bir sahə və bir ölçülü bir xətt arasındakı bir şeydir. 

::: .theorem

Bir çox fraktallar bir-birinə _bənzər_ olsa da, daha yaxşı bir tərif __fraktalların__ __tam olmayan ölçülərə sahib olmasıdır__ . 

:::

[Davam edin](btn:next) 

---
> id: snowflake

### Koch qar uçqunu 

Təbiətdə fraktallara bənzəyən bir çox forma var. Bu fəslin əvvəlində bəzi bitkiləri gördük. Digər böyük nümunələr qar yağışı və buz kristallarıdır: 

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

Öz fraktal qar uçqunu yaratmaq üçün bir daha təkrar-təkrar tətbiq edə biləcəyimiz sadə bir prosedur tapmalıyıq. 

::: column.grow

Sierpinski üçbucağı kimi, tək, bərabər tərəfli üçbucaqdan başlayaq. Bununla birlikdə, hər addımda kiçik üçbucaqları _çıxarmaqdansa_ , kənar boyunca daha kiçik üçbucaqlar _əlavə_ edirik. Hər üçbucağın yan uzunluğu [[`1/3`|`1/4`|`1/2`]] əvvəlki addımdakı üçbucaqların. 

{.reveal(when="blank-0")} Yaranan forma, İsveç riyaziyyatçısı [Helge von Kochun](bio:koch) adını daşıyan [__Koch qar uçqunu__](gloss:koch-snowflake) adlanır. Bir daha diqqət yetirin ki, qar uçqununun kənarındakı [kiçik hissələr](target:t2) [daha böyük hissələrlə](target:t1) eynidir. 

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

Koch Snowflake'nin bir kənar seqmentini 3 faktoru ilə [[ölçdüyümüzdə]] , uzunluğu [[dördlü olur | üçlü | ikiqat]] . 

{.reveal(when="blank-0")} Yuxarıdakı kimi ölçülər və miqyas amilləri arasındakı eyni əlaqədən istifadə edərək tənliyi əldə edirik [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]] . _{span.reveal(when="blank-1")} Bu, Koch Snowflake ölçüsünün olması deməkdir `§d = log_3(4) ≈ 1.262` ._ 

:::

---
> id: koch-size

::: tab(parent="sticky")

#### Sahə _{span.check(when="blank-6")}_ 

Koch qar uçqunlarının yaradılması demək olar ki, bir [rekursiv ardıcıllığa](gloss:sequence-recursive) bənzəyir: başlanğıc şəklini (üçbucaq) bilirik və bir müddətdən digərinə necə keçəcəyimizi bilirik (hər tərəfə daha çox üçbucaq əlavə etməklə): 

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] yeni üçbucaq 

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] yeni üçbucaq 

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] yeni üçbucaq 

:::

{.reveal(when="blank-0 blank-1 blank-2")} Birinci iterasyondan sonra əlavə olunan yeni üçbucaqların sayı hər addımda [[4]] amil artır. Eyni zamanda, bu yeni üçbucaqların sahəsi hər addımda [[9]] amil azalır. 

{.reveal(when="blank-3 blank-4")} Deyək ki, [ilk üçbucağın](->#koch-0) 1 sahəsi var. Sonra [növbəti üçbucağın](->#koch-1) ümumi sahəsi `3 × 1/9 = 1/3` . Aşağıdakı addımlar hamısı [[həndəsi bir sıra təşkil edir | hesab ardıcıllığı | kvadrat sıra]] , _{span.reveal(when="blank-5")} ümumi nisbətlə [[`4/9`|`9/4`|`4/3`]] ._ 

{.reveal(when="blank-6")} Sonsuz [həndəsi silsilələrin](gloss:geometric-series) cəminin düsturundan istifadə edərək Koch qar uçqununun ümumi sahəsinin olduğunu hesablaya bilərik 

{.text-center.reveal(when="blank-6")}`A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")` . 

::: tab

#### Perimetr _{span.check(when="blank-9")}_ 

::: column.grow

Koch qar uçqununun perimetrini hesablamağa da cəhd edə bilərik. Daha əvvəl də gördüyümüz kimi, perimetrin uzunluğu bir amil ilə dəyişir [[`4/3`|`3/4`|`1/4`]] hər addımda. 

{.reveal(when="blank-8")} Bu o deməkdir ki, bir daha həndəsi silsiləmiz var - ancaq bu vəziyyətdə bir araya [[gəlmir | 0-a çevrilir | ilk termini yoxdur]] _{span.reveal(when="blank-9")} Bu o deməkdir ki, Koch qar uçqununun perimetri həqiqətən __sonsuzdur__ !_ 

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Bu əks nəticə verərsə, yalnız perimetri çoxaltdığımızı unutmayın `§4/3` hər addımda və bunu sonsuz dəfələrlə edirik._ 

:::

---
> id: frozen

::: column.grow

_Sonlu bir_ sahəyə və eyni zamanda _sonsuz bir_ dövrə sahib bir forma sahib ola biləcəyiniz demək olar ki, ağlınıza gəlmir - ancaq bu fraktalların gözlənilməz xüsusiyyətlərindən biridir. 

Öz fraktallarınızı yaratmaq üçün başqa bir yol tapa bilərsinizmi? [Davam edin](btn:next) 

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Ruhum ətrafındakı dondurulmuş fraktallar üzərində hərəkət edir ..." 

:::

---
> id: menger-sponge

### Menger Süngər 

Fraktallar yuxarıdakı nümunələrin çoxu kimi "düz" olmağa məcbur deyillər. Üç ölçülü baxmaq ən məşhur fractals biri ilk 1926-cı ildə təsvir riyaziyyatçı [Karl Menger](bio:menger) adına __Menger süngər__ edir. 

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Möhkəm bir kub ilə başlayırıq və dəfələrlə kiçik və daha kiçik dəlikləri qazırıq. Deliklərin hər yeni iterasiyası var [[`1/3`|`1/2`|`1/4`]] əvvəlki deşiklərin eni. 

{.reveal(when="blank-0")} A `3×3×3` kub 27 kiçik kubdan ibarətdir, amma burada bunların bir qismini çıxartdıq. Menger süngəri 3 dəfə kiçik olan [[20]] nüsxədən ibarətdir. 

{.reveal(when="blank-1")} İndi yuxarıdakı Koch qar uçqunu üçün etdiyimiz kimi Menger süngərinin _d_ ölçüsünü hesablamağa cəhd edə bilərik. Bu vəziyyətdə alırıq `3^d = 20` , və ya `§d = log_3(20) ≈ 2.727` . 

:::

{.reveal(when="blank-1 slider-0")} Daha çox və daha çox deşik kəsdiyinizi təsəvvür etsəniz, sonsuz dəfələrlə gerçək bir həcm qalmazdı. Buna görə kub üç ölçülü deyil "olduqca"! [Davam edin](btn:next) 

---
> id: coastlines

### Fraktal sahillər 

İndiyə qədər gördüyümüz bütün fraktalların əsas xüsusiyyətlərindən biri budur ki, əbədi olaraq "böyüdə" və daima yeni naxışlar tapa bilərsiniz. 1920-ci ilə yaxın İngilis riyaziyyatçısı [Lyuis Fry Richardson bir](bio:richardson) çox ölkələrin sərhədi və ya sahil zolağı üçün eyni şeyin olduğunu başa düşdü. 

Ölkənin əsas formasından başlayırsınız və böyüdükcə çay axınları, körfəzlər və anbarlar, sonra fərdi qayalar, qayalar, çınqıllar və s. Əlavə edirsiniz: 

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

[Davam edin](btn:next) 

---
> id: coastlines-1

::: column.grow

Bir ölkənin sərhədinin uzunluğunu hesablamağa çalışarkən bu əhəmiyyətli bir problemdir - böyütməyə nə qədər qərar verdiyinizi və hansı çuxurları və kələkləri daxil etməyi düşünürsünüz? 

İngiltərənin sahil xəttinin uzunluğunu ölçməyin bir yolu, məsələn, uzun bir hökmdar götürmək, çimərlikləri boyunca gəzmək və sonra bütün məsafələri əlavə etməkdir. 

Hökmdar varsa ${rulers[index]}{index|0|0,8,1} km uzunluğunda istifadə etməliyik ${count} dəfə, buna görə də ümumi sahil xəttini alırıq ${count} × ${rulers[index]} = ${count * rulers[index]} km. 

{.reveal(when="var-0")} Sadəcə, daha kiçik və daha kiçik hökmdarlarla davam edə bilərik və hər dəfə sahil xəttinin uzunluğuna dair nəticələrimiz bir az daha uzun olardı. Əvvəlki Koch Snowflake kimi, Britaniyanın sahil xəttinin sonsuz qədər uzun olduğu görünür! Buna tez-tez __sahil xətti paradoksu__ deyilir. [Davam edin](btn:next) 

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---
> id: coastline-grid

Bir neçə on il sonra, riyaziyyatçı [Benoit Mandelbrot](bio:mandelbrot) , IBM-də işləyərkən Richardsonun atılmış kitabxana kitabındakı işi ilə qarşılaşdı. O, bunun əhəmiyyətini və fraktallar və ölçülər barədə daha son araşdırmalarla necə əlaqəli olduğunu tanıdı. 

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Britaniyanın sahil xətti əlbətdə fraktal “görünür”, amma əvvəllər gördüyümüz digər fraktallar kimi _özünə bənzər_ deyildir. Ölçüsünü tapmaq üçün onu bir grid üzərində çəkib, kəsişdiyi hüceyrələrin sayını təyin edə bilərik. 

{.r.reveal(when="slider-0")} Əvvəlcə var __{.pill.yellow} 88__ kəsişən hüceyrə. Sahil xəttini 2 faktora görə ölçsək, var __{.pill.yellow} 197__ kəsişən hüceyrə - iki qat daha çox! [Davam edin](btn:next) 

{.r.reveal(when="next-0")} Sahil xəttinin ölçüsü bir amil artdı `§197/88` . Əvvəllər olduğu kimi, bu da sahil xəttinin ölçüsü deməkdir 

{.text-center.reveal(when="next-0")}`§d = log_2(197/88) ≈ 1.16`

:::

---
> id: coastline-dimension-1

Bunu daha böyük ızgaralarla təkrarlasaq, Britaniyanın sahil xəttinin ölçüsünün əslində təxminən 1.21 olduğunu görərdik. Mandelbrot başa düşdü ki, bu fraktal ölçü eyni zamanda bir formanın __pürüzlülüyünün__ ölçüsüdür - yeni bir konsepsiya, bunun üçün riyaziyyat və elmin bir çox başqa sahələrində mühüm tətbiqlər tapdı. 

---
> id: nature

### Təbiət və Texnologiyada daha çox fraktallar 

Əsl fraktallar təbiətdə heç vaxt görünə bilməsə də, _demək olar ki_ , fraktallara bənzəyən bir çox cisim var. Artıq bitkiləri, qar yağışlarını və sahil zolaqlarını gördük və burada daha bir neçə nümunə var: 

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC" alt="Mountain range")

{.caption} Orta Asiyada dağ silsiləsi 

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA" alt="River delta")

{.caption} Hindistandakı Ganges çay deltası 

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox alt="Lightning bolts")

{.caption} Şimşək boltları 

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA" alt="Blood vessels")

{.caption} Retinada qan damarları 

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey" alt="Grand Canyon")

{.caption} ABŞ-da Grand Canyon 

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox alt="Clouds")

{.caption} Buludlar 

:::

Bütün bu cisimlər tamamilə təsadüfi görünə bilər, ancaq fraktallar kimi, onların necə meydana gəldiyini müəyyənləşdirən əsas bir nümunə var. Riyaziyyat bizə formaları daha yaxşı başa düşməyə kömək edə bilər və fraktalların tibb, biologiya, geologiya və meteorologiya kimi sahələrdə tətbiqləri var. [Davam edin](btn:next) 

---
> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox alt="Computer-generated fractal terrain with mountains and water")

{.caption} Kompüter tərəfindən yaradılan fraktal ərazi 

::: column.grow

Həqiqətən təbiətin "nüsxələrini" yaratmaq üçün fraktallardan istifadə edə bilərik, məsələn, video oyunlarda və ya kompüter istehsalı olan filmlərdə istifadə olunan mənzərə və dokular kimi. Bu görüntüdəki su, dağlar və buludlar tamamilə kompüter tərəfindən, fraktalların köməyi ilə hazırlanmışdır! 

Rəqəmsal şəkilləri sıxışdırmaq, fayl ölçüsünü azaltmaq üçün bu prosesi də geri çevirə bilərik. İlk alqoritmlər 1980-ci illərdə Michael Barnsley və Alan Sloan tərəfindən hazırlanmışdır və bu gün də yeniləri araşdırılır. 

:::

---

## Sierpinski üçbucağı 

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

Əvvəlki fəsildə gördüyümüz fraktallardan biri Polşa riyaziyyatçısı [Wacław Sierpiński](bio:sierpinski) adını daşıyan [__Sierpinski üçbucağı__](gloss:sierpinski-triangle) idi. Bir böyük, bərabər tərəfli üçbucaqdan başlayaraq, sonra mərkəzdən bir neçə dəfə kiçik üçbucaqları kəsərək yarana bilər. 

{.r.reveal(when="slider-0")} Wacław Sierpiński bu üçbucağın xüsusiyyətləri haqqında düşünən ilk riyaziyyatçı idi, lakin sənət əsərlərində, naxışlarda və mozaikalarda çox əsrlər əvvəl ortaya çıxmışdır. 

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: sierpinski-history

Romadakı müxtəlif kilsələrin döşəmə plitələrinə dair bəzi nümunələr: 

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire" alt="Mosaic Floor with Sierpinski Triangle")

:::

Göründüyü kimi, Sierpinski üçbucağı riyaziyyatın digər sahələrində geniş görünür və onu yaratmaq üçün bir çox müxtəlif yol var. Bu fəsildə onlardan bəzilərini araşdıracağıq! [Davam edin](btn:next) 

---
> id: pascal
> goals: select

### Paskal üçbucağı 

Sierpinski üçbucağını [__Paskal__](gloss:pascals-triangle) üçbucağındakı bölümümüzdən xatırlaya bilərsiniz. Bu, hər nömrənin yuxarıdakı iki ədədin cəminə bərabər olduğu bir sıra piramidadır. Aşağıdakı üçbucağında bütün _hətta_ nömrələri Tap, onlara qeyd etmək - və bir model qeyd əgər görmək: 

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

Paskal üçbucağı əbədi olaraq aşağıya davam etdirilə bilər və Sierpinski naxışı daha böyük və daha böyük üçbucaqlarla davam edəcəkdir. Artıq 16 satırdan başlayaraq daha da böyük üçbucağın başlanğıcını görə bilərsiniz. 

İki qonşu hüceyrə 2-yə bölünürsə, altındakı hüceyrədəki cəmi də 2-ə bölünməlidir - buna görə yalnız rəngli üçbucaqları (və ya tək hüceyrələri) əldə edə bilərik. Əlbəttə ki, _2-dən başqa_ ədədlərə bölünən bütün hüceyrələri rəngləndirməyə də cəhd edə bilərik. Sizcə bu hallarda nə olacaq? [Davam edin](btn:next) 

---
> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Burada Paskal üçbucağının ilk 128 cərgəsinin kiçik bir versiyasını görə bilərsiniz. Bölünən bütün hüceyrələri qeyd etdik ${n}{n|2|2,40,1} - nəyi hiss edirsən? 

{.reveal(when="var-0")} Hər nömrə üçün Sierpinski üçbucağına bənzər fərqli üçbucaqlı bir naxış alırıq. Mükəmməl bir [[nömrə]] seçsək nümunə xüsusilə müntəzəmdir [[| üçbucaq nömrəsi | Fibonacci nömrəsi]] . _{span.reveal(when="blank-0")} Sayın bir _çox fərqli_ əsas amili varsa, desen daha təsadüfi görünür._ 

    x-gesture(target="#pascal-large x-var" slide="100,0")

---
> id: chaos-game
> goals: point play

### Xaos oyunu 

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Burada bərabər tərəfli üçbucağın üç ucunu görə bilərsiniz. Dördüncü nöqtə yaratmaq üçün boz ərazinin hər hansı bir yerinə vurun. 

{.r.reveal(when="point")} Sadə bir oyun oynayaq: üçbucağın uclarından birini təsadüfi olaraq seçirik, nöqtəmizlə vertex arasında bir xətt seqmenti çəkirik və sonra tapırıq [{.pill.red}](target:p1) həmin seqmentin [orta nöqtəsi](target:p1) . [Davam edin](btn:next) 

{.r.reveal(when="next-0")} İndi prosesi təkrarlayırıq: başqa bir təsadüfi ucu seçirik, son nöqtəmizdən seqment çəkirik və sonra tapırıq [{.pill.green} orta nöqtə](target:p2) . Diqqət yetirin ki, bu yeni nöqtələri seçdiyimiz üçbucağın yuxarısının rənginə əsasən rəngləndiririk. [Davam edin](btn:next) 

{.reveal(when="next-1")} İndiyə qədər təəccüblü heç nə baş verməyib - ancaq eyni əməliyyatı dəfələrlə təkrarladığımıza baxın: 

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} 1000 addım əlavə edin_ 

:::

---
> id: fractal-builder
> goals: s1 s2 shape play

Bu proses __Xaos oyunu__ adlanır. Başlanğıcda bir neçə səhv nöqtə ola bilər, ancaq eyni addımları dəfələrlə təkrarlasanız, nöqtələrin paylanması Sierpinski üçbucağına bənzəməyə başlayır! 

Bunun bir çox başqa versiyası var - məsələn, bir kvadrat və ya beşbucaqla başlaya bilərik, eyni ucu iki dəfə ardıcıl olaraq seçə bilməməyimiz kimi əlavə qaydalar əlavə edə bilərik və ya növbəti nöqtəni nisbətdə ala bilərik başqa `§1/2` seqment boyunca. Bu işlərin bəzilərində nöqtələrin təsadüfi bir paylanmasını əldə edəcəyik, lakin digər hallarda daha çox fraktalları aşkar edirik: 

    include components/chaos-game

{.reveal(when="s1 s2 play")} [Sierpinski xalçasını](action:carpet()) və ya [__qızıl nisbətə__](gloss:golden-ratio) əsaslanan bu [beşbucaqlı qar](action:snowflake()) [uçqunu](action:carpet()) kəşf etmisinizmi? 

---
> id: cellular
> goals: sierpinski

### Hüceyrə avtomatı 

Bir __hüceyrə avtomatı__ çox sayda fərdi hüceyrədən ibarət olan bir şəbəkədir. Hər hüceyrə fərqli "vəziyyətlərdə" ola bilər (məsələn, fərqli rənglər) və hər hüceyrənin vəziyyəti ətrafdakı hüceyrələr tərəfindən müəyyən edilir. 

Bizim nümunəmizdə hər hüceyrə ya qara, ya da ağ ola bilər. Yalnız bir qara kvadrat olan bir sıra ilə başlayırıq. Sonrakı cərgələrdə hər hüceyrənin rəngi dərhal yuxarıdakı üç hüceyrə tərəfindən müəyyən edilir. Rənglərini dəyişdirmək üçün aşağıdakı səkkiz mümkün varianta vurun - Sierpinski üçbucağına bənzər bir nümunə yaradan qaydalar toplusunu tapa bilərsiniz? 

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Səkkiz variantın hər biri üçün iki seçim var, yəni var `2^8 =` Cəmi [[256]] mümkün qaydalar. Bəziləri, [126-cı Qayda](action:setRule('01111110')) kimi, Sierpinski üçbucağına bənzəyirlər. Digərləri, [30 Qayda](action:setRule('01111000')) kimi, tamamilə xaotik görünürlər. 1983-cü ildə [Stephen Wolfram](bio:wolfram) tərəfindən kəşf edildi və kompüterlər hətta təsadüfi ədəd yaratmaq üçün onlardan istifadə edə bilərlər! 

---
> id: cellular-1

::: column.grow

Hüceyrəvi avtomatika, çox sadə qaydalarla necə yüksək səviyyədə mürəkkəb nümunələrin yarandığını göstərir - eynilə fraktallar kimi. Təbiətdəki bir çox proses sadə qaydalara riayət etsə də, inanılmaz dərəcədə mürəkkəb sistemlər yaradır. 

Bəzi hallarda bu, hüceyrə avtomatına bənzəyən naxışların, məsələn, bu salyangozun qabığındakı rənglərin meydana gəlməsinə səbəb ola bilər. 

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0" alt="Shell of a sea snail")

{.caption} Konus toxuması, zəhərli dəniz ilbizi 

:::

---
> id: tetrahedra

### Sierpinski Tetrahedra 

Sierpinski üçbucağının bir çox variantı və oxşar xüsusiyyətləri və yaradılması prosesləri olan digər fraktallar var. Bəziləri yuxarıda gördüyünüz _Sierpinski Xalçası_ kimi iki ölçülü görünür. Digərləri bu nümunələr kimi üç ölçülü görünür: 

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra 

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Piramidası 

:::

---

## Mandelbrot dəsti 

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Əvvəlki fəsillərdə gördüyümüz bütün fraksiyalar __iterasiya__ prosesi istifadə edərək yaradıldı: müəyyən bir __naxışla__ başlayırsınız və sonra təkrar-təkrar təkrarlayırsınız. 

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Riyaziyyatda əvvəllər gördüyünüz başqa bir anlayışa bənzərdir: [rekursiv ardıcıllıqla](gloss:sequence-recursive) müəyyən bir nömrə ilə başlayırsınız və ardıcıllıqla növbəti nömrəni almaq üçün təkrar-təkrar eyni formul tətbiq edirsiniz. 

Rekursiv düsturu götürək `§x_n = x_(n-1)^2` nümunə kimi göstərin və şərtlərini bir sıra xəttinə çəkin. Dəyərini dəyişə bilərsiniz `pill(x_0,"yellow","x0")` : 

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---
> id: iteration-1

Yaranan ardıcıllığın başlanğıc dəyərindən asılı olaraq necə fərqli davranacağına diqqət yetirin `x_0` : 

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Əgər `x_0 > 1` , ardıcıllıq [[ayrılır | çevrilir]] : _{span.reveal(when="blank-0")} yalnız sonsuzadək böyüyür._ 

::: column.frame.f-blue.text-center(width=212)

Əgər `x_0` -1 ilə 1 arasındadır, ardıcıllıq [[birləşir | dalğalanır]] . 

::: column.frame.f-blue.text-center(width=212)

Əgər `x_0 < -1` , ardıcıllıq [[ayrılır | birləşir]] . 

:::

---
> id: iteration-2

İndiyə qədər yeni bir şey öyrənmədik. Ancaq təqribən bir əsr əvvəl riyaziyyatçılar, yalnız həqiqi ədəd xəttini deyil, [__mürəkkəb rəqəmlərdən__](gloss:complex-numbers) istifadə etsəniz, bu ardıcıllıqla nə baş verəcəyini araşdırmağa başladılar. Onların kəşfləri bütün riyaziyyatda ən təəccüblü və gözəl nəticələr idi. 

---
> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Dəstləri 

Əvvəlki kimi eyni ardıcıllığı istifadə edək, `§x_n = x_(n-1)^2` , lakin kompleks müstəvidə. Mövqeyini daşıya bilərsiniz `pill(x_0,"yellow","x0")` , aşağıdakı şərtlərlə nə baş verdiyini görmək. Ardıcıllıq birləşəcək kimi görünürsə, təyyarədəki müvafiq nöqtəni rəngləndirək _{span.pill.blue} mavi_ : 

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Gördüyünüz kimi, ardıcıllıq nə qədər uzunlaşır `pill(x_0,"yellow","x0")` [[bölmə dairəsinin içərisində]] yatır [[| bölmənin meydanından kənarda | _x_ -axisin üstündədir]] _{span.reveal(when="blank-0")} (radiusu 1 olan dairə, başlanğıcın mərkəzində)._ 

---
> id: julia-1

İndi işləri bir az daha çətinləşdirək. Əvvəlki nömrəni kvadratlaşdırmaq əvəzinə, sabit də əlavə edirik _{.pill.red} c_ hər dəfə (hər hansı bir kompleks sayı ola bilər). Başqa sözlə, `§x_n = x_(n-1)^2 + c` . Düşünürsən ki, hələ də bir dairə yığacağıq? Sizcə başqa hansı formaları görə bilərik? [Davam edin](btn:next) 

---
> id: julia-2

Bu diaqramda mövqeyini dəyişə bilərsiniz `pill(x_0,"yellow","x0")` habelə dəyəri `pill(c,"red","c")` : 

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

{div(slot="legend")} Nə olacağını artıq bilirik [`c = 0`](action:animate(0,0)) - yuxarıdakı nümunə ilə eynidir. Ardıcıllıqla yaxınlaşma `x_0` bölmə dairəsi daxilində yerləşir. 

{div(slot="legend")} _C_ dəyərini dəyişdikdən sonra gözəl bir şey baş verir. Dairə olduqca mürəkkəb, fraktal formaya çevrilir. 

{div(slot="legend")} Nə vaxt [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) , forma spiralda qurulmuş sonsuz sayda kiçik elementə bölünür. 

::: div(slot="legend")

Bəzi hallarda ardıcıllıq _bir nöqtəyə_ keçmir - bunun əvəzinə üçbucaq kimi çox nöqtələrin dövrünə çatır. Bu dövrlərə __orbit__ deyilir. 

Rəngli mavi olan nöqtələr, uyğun ardıcıllığın ya çevrildiyini və ya bir orbitə sahib olduğunu bildirir (deyirik ki, __bağlıdır__ ). Ağ rəngdə qalan nöqtələr müvafiq ardıcıllıqla __ayrılır__ deməkdir: __bağlanmır__ və nəticədə sonsuzluğa qədər əsir. 

:::

{div(slot="legend")} Başqa nə tapa bilərsiniz? Nə zaman nümunələrə baxın [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) ya da nə vaxt [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) . Hər _bir_ ardıcıllığın ayrıldığı _c-nin_ bəzi dəyərləri də var, buna görə də bütün kompleks müstəvi ağ rəngdə qalır. 

:::

---
> id: julia-3

Rəqəmlərin rənglənməsi ilə əmələ gələn müxtəlif formalara [__Julia dəstləri__](gloss:julia-set) deyilir. Onlar müstəqil olaraq 1918-ci ildə iki fransız riyaziyyatçısı [Gaston Julia](bio:julia) və [Pierre Fatou](bio:fatou) tərəfindən kəşf edildi. 

O dövrdə Julia dəstlərinin əslində necə göründüyünü görüntüləmək üçün heç bir kompüter yox idi. Julia və Fatou kimi riyaziyyatçılar, riyazi olaraq onlar haqqında düşünə bildilər, ancaq onlar yalnız görünə biləcəkləri kobud, əl ilə hazırlanmış eskizləri gördülər. 

Bu gün bu problemimiz yoxdur - aşağıda göstərilən şəkillər hamısı müxtəlif Julia dəstləridir. Fərqli rənglər o nöqtədəki ardıcıllığın _nə qədər tez_ ayrıldığını göstərir: 

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = 0.285 + 0.01"i"`

:::

[Davam edin](btn:next) 

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Mandelbrot dəsti 

Fərqli Julia dəstlərini yaratarkən, hər bir ardıcıllığın ayrıldığı və bütün kompleks müstəvinin ağ rəngdə qaldığı _c_ dəyərlərinin olduğunu gördünüz. Julia və Fatou'dan bir neçə on il sonra, yeni bir riyaziyyatçı nəsil bu ərazilərin necə göründüyünü xəritələndirməyə çalışdı. 

Əvvəlki nümunədə biz üçün sabit bir dəyər seçdik `pill(c,"red","c")` , sonra mövqeyini dəyişdirdi `pill(x_0,"yellow","x0")` təyyarəni rəngləndirmək. İndi dəyərini təyin edək `pill(x_0 = 0,"yellow","x0")` , əvəzinə dəyərini dəyişdirin `pill(c,"red","c")` . 

Bir daha, ardıcıllıqla bağlı qaldığı ərazini aşkar etmək üçün mürəkkəb təyyarənin üzərinə rəngləyin. Hansı formaların görünəcəyini gözləyirsiniz? 

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

Bu fraktal [__Mandelbrot dəsti__](gloss:mandelbrot-set) adlanır və 90° dönəndə demək olar ki, başı, bədəni və iki qolu olan bir insana bənzəyir. İlk dəfə 1978-ci ildə riyaziyyatçılar Robert Brooks və Peter Matelski tərəfindən bir tədqiqat sənədində tərtib edilmiş və tərtib edilmişdir: 

    figure: x-img(src="images/printout.jpg" width=360 height=290 credit="© Princeton University Press" alt="Mandelbrot set drawing")

Bir neçə il sonra [Benoit Mandelbrot](bio:mandelbrot) , daha sonra onun adını daşıyan fraktalın daha detallı vizual görüntüsü yaratmaq üçün IBM-dəki güclü kompüterlərdən istifadə etdi. İlk çaplar gözlədiklərindən fərqli oldu - printerlərdə işləyən texniki işçilərin toz hissəciklərinin və ya printer səhvlərindən qaynaqlandığını düşündüklərini və fraktalların müəyyən bir xarakteristikası olmadığını düşünənə qədər. ! [Davam edin](btn:next) 

---
> id: mandel-zoom

Bütün fraktallar kimi biz də hər ölçüdə yeni naxışlar tapan Mandelbrotu əbədi olaraq "böyütə" bilərik. Burada __Seahorse vadisi__ adlanan Mandelbrot dəstinin bir hissəsini böyütə bilərsiniz. Qara nöqtələr ardıcıllığın bağlandığı Mandelbrot dəsti _içərisindədir_ . Rəngli nöqtələr ardıcıllığın ayrıldığı Mandelbrot dəsti _xaricindədir_ və fərqli rənglər onun sonsuzluğa _necə sürətlə_ böyüdüyünü göstərir: 

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---
> id: mandel-zoom-1

Bu sürgüçəkmə, 14 kvadrilyondan bir böyümə səviyyəsinə qədər 27 fərdi görünüşdən ibarətdir `2^54` . Ümumilikdə, müasir bir noutbukda çıxış etmək üçün demək olar ki, 45 dəqiqə çəkdilər. Mandelbrot dəsti yalnız bir, sadə tənliklə, `§x_n = x_(n-1)^2 + c` , yenə də sonsuz mürəkkəb və heyrətamiz dərəcədə gözəldir. 

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

Dəyişdirdiyiniz zaman [{.pill.red} c](target:c) Mandelbrot dəsti ətrafında maraqlı bir əmlak görsənə bilər: 

* Mandelbrot set [[uyğunlaşma]] [əsas bədən](target:bulb0) daxilində Bütün ardıcıllığı [[| ayrılmaq | bir orbitə çatmaq]] _{span.reveal(when="blank-0")} tək nöqtəyə._ * {.reveal(when="blank-0")} [Üstündəki böyük ampulün](target:bulb1) içərisindəki ardıcıllıqlar [[bir orbitə çatır | bir nöqtədə cəmləşmək | ayrılmaq]] _{span.reveal(when="blank-1")} [[3]] nöqtədən ibarət._ * {.reveal(when="blank-2")} [Bu kiçik ampuldəki](target:bulb2) ardıcıllıqlar [[5]] uzunluqlu orbitə malikdir. 

:::

{.reveal(when="blank-3")} Hər bir ampul fərqli ölçülü bir orbitə sahibdir, kiçik ampüller öz orbitlərində daha çox nöqtəyə sahibdirlər. Bu orbitlərin ölçüsü [Chaos nəzəriyyəsində](/course/chaos) vacib bir anlayış olan __Logistik xəritə__ ilə sıx əlaqəlidir. 

---
> id: mandel-outro

::: column.grow

Bernoit Mandelbrot ömrünün çox hissəsini fraktalların, eləcə də _kobudluğun_ və _özünə bənzərliyin_ riyaziyyatını öyrənməyə həsr etmişdir. İşinin fizika, meteorologiya, nevrologiya, iqtisadiyyat, geologiya, mühəndislik, kompüter elmləri və bir çox digər sahələrdə tətbiqləri var. 

1985-ci ildə Mandelbrot dəsti _Scientific American_ jurnalının üz qabığında çıxdı və o vaxtdan bəri dünyanın ən tanınan riyazi formalarından birinə çevrildi. Bunu köynəklərdə, musiqi videolarında və ekran qoruyucuları kimi tapa bilərsiniz və bir çox məşhur kitab və filmlərdə istinad edilmişdir. 

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American" alt="Scientific American Magazine Cover")

:::

---

## Kosmik doldurma əyriləri 

> section: space-filling
> sectionStatus: dev

{.todo} Tezliklə!
