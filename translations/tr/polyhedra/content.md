# Çokgenler ve Çokyüzlüler

## Çokgenler

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

[__Çokgen__](gloss:polygon) , yalnızca düz kenarları olan kapalı, düzlemsel bir şekildir. Çokgenlerin herhangi bir sayıda kenarı ve açısı olabilir, ancak kenarlar kavisli olamaz. Aşağıdaki şekillerden hangileri çokgendir?

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

    x-gesture(target="#item1")

---
> id: polygons-1

Kaç kenarı olduğuna bağlı olarak çokgenlere farklı isimler veriyoruz:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangle]#[br]3 sides
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilateral]#[br]4 sides
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 sides
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 sides
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 sides
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octagon]#[br]8 sides

---
> id: angles-0

### Çokgenlerde Açılar

_N_ kenarlı her çokgenin de _n_ [iç açısı vardır](gloss:internal-angle) . Üçgendeki iç açıların toplamının her zaman [[180]]° olduğunu biliyoruz, ama diğer çokgenler ne olacak?

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ + _{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ + _{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ = _{x-anibutton(text="???")}_

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ + _{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ + _{span.circled.yellow}${a2[3]}°_ + _{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ = _{x-anibutton(text="???")}_

:::

---
> id: angles-1

Dörtgen içindeki iç açıların toplamı her zaman [[360]]° 'dir - tam olarak [[iki kez | üç kere | Üçgendeki]] açıların toplamının [[yarısı]] . _{span.reveal(when="blank-0 blank-1")} Bu bir tesadüf değildir: her dörtgen iki üçgene ayrılabilir._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Aynı şey daha büyük çokgenler için de geçerlidir. Bir beşgeni [[3]] üçgene bölebiliriz, böylece iç açı toplamı `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Ve bir altıgeni [[4]] üçgene bölebiliriz, böylece iç açı toplamı `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

İle bir çokgen ${x}{x|7|3,15,1} kenarların iç açı toplamı 180° × ${x-2} = ${(x-2)*180}°. Daha genel olarak, _n_ kenarlı bir çokgen [[n - 2'ye]] bölünebilir [[| n - 1 | n]] üçgenler. Bu nedenle,

{.text-center.reveal(when="blank-0")} _N_ -gon içindeki iç açıların toplamı `= (n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Konveks ve Konkav Çokgenler

::: column.grow

Çokgenin “içe dönük” bir bölümü varsa [__içbükey__](gloss:concave) olduğunu söylüyoruz. Bu bölümün [“içine girmiş”](target:cave) olduğunu hayal edebilirsiniz. İçbükey _olmayan_ çokgenlere [__dışbükey__](gloss:convex) denir.

İçbükey çokgenleri kolayca tanımlamanın iki yolu vardır: [180° 'den daha büyük](target:angle) en az bir [iç açıya sahiptirler](target:angle) . Ayrıca [çokgenin _dışında_](target:diagonal) en az bir [köşegenleri vardır](target:diagonal) .

Dışbükey çokgenlerde, tüm iç açılar [[180]]° 'den daha azdır ve tüm köşegenler [[içeride bulunur |]] çokgen [[dışında]] .

::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")

:::

---
> id: concave-1

Bu çokgenlerden hangileri içbükeydir?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Düzgün Çokgenler

Tüm kenarları aynı uzunlukta ve tüm açıların aynı boyuta sahip olması durumunda bir çokgenin [__düzgün__](gloss:regular-polygon) olduğunu söylüyoruz. Bu şekillerin hangileri düzgün çokgenlerdir?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Düzgün çokgenler birçok farklı boyutta olabilir - ancak aynı sayıda tarafa sahip tüm normal çokgenler [[benzerdir | uyumlu | aynı alana sahip]] !

---
> id: regular-2

Çokgenlerdeki tüm [iç açıların](gloss:internal-angle) toplamını zaten biliyoruz. Normal çokgenler için tüm bu açılar [[aynı boyuta sahiptir | Alternatif açılardır]] , böylece tek bir iç açının boyutunu hesaplayabiliriz:

{.text-center.reveal(when="blank-0")} açı = <mfrac><mrow>[[tüm açıların toplamı | açı sayısı]]</mrow><mrow>[[açı sayısı | tüm açıların toplamı]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} Eğer `n=3` bir eşkenar üçgenin iç açılarının boyutunu elde ederiz - bunun [[60]]° olması gerektiğini zaten biliyoruz. _{span.reveal(when="blank-3")} İle düzenli bir çokgende ${x}{x|6|3,12,1} yanlar, her iç açı 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### Düzenli Çokgenlerin Alanı

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)

      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow

Burada [düzgün bir çokgen](gloss:regular-polygon) görebilirsiniz. ${n}{n|5|4,12,1} taraf. Her tarafın uzunluğu vardır [{.pill.green} 1m](target:base) . Alanını hesaplamaya çalışalım!

İlk olarak, çokgeni bölebiliriz ${toWord(n)} uyumlu, [[ikizkenar | eşkenar | dik açılı]] üçgenler.

{.reveal(when="blank-0")} [[Tabanı]] zaten biliyoruz [[| yükseklik |]] bu üçgenlerin [[alanı]] , ama aynı zamanda [[yüksekliğe]] ihtiyacımız var [[| bacaklar | ortanca]] alanını hesaplayabilme. _{span.reveal(when="blank-2")} Normal çokgenlerde, bu yüksekliğe bazen [{.pill.yellow} apothem](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} Apothem ve ikizkenar üçgenin yarısının tabanının oluşturduğu [dik açılı bir üçgen](target:right-triangle) olduğuna dikkat edin. Bu, trigonometri kullanabileceğimiz anlamına gelir!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.pill.blue}](target:base-angle) İkizkenar üçgenin [taban açıları](target:base-angle) [[yarısı]] (Onları a adlandıralım) [[| aynısı |]] çokgenin [iç açılarının](target:int-angle) [[iki katı]] büyüklüğünde:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Apothem'i bulmak için [[teğet]] tanımını kullanabiliriz [[| sinüs | kosinüs]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Şimdi, [ikizkenar üçgenin](target:isosceles-triangle) alanı

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Çokgen aşağıdakilerden oluşur ${toWord(n)} hepsi aynı alana sahip olan bu ikizkenar üçgenlerden. Bu nedenle, çokgenin toplam alanı

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Dörtgenler

> section: quadrilaterals
> id: quadrilaterals

Bir [önceki derste](/course/triangles) üçgenlerin birçok farklı özelliğini araştırdık. Şimdi dörtgenlere bakalım.

_Düzgün dörtgenlere_ [[kare | dikdörtgen | eşkenar dörtgen]] denir. Tüm kenarları aynı uzunlukta ve tüm açıları eşittir.

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} Bir __kare__ , [dört eşit kenar](target:side) ve [dört eşit açıya](target:angle) sahip bir dörtgendir.

:::

---
> id: quadrilaterals-1

Biraz daha az düzenli dörtgenler için iki seçeneğimiz var. Sadece _açıların_ eş olmasını istiyorsak, bir [__dikdörtgen__](gloss:rectangle) elde ederiz. Sadece _kenararın_ eş olmasını istiyorsak, bir [__eşkenar dörtgen__](gloss:rhombus) elde ederiz.

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} __Dikdörtgen__ , [dört eş açıya](target:angle) sahip bir dörtgendir.

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} __Eşkenar__ dörtgen [dört eş kenara](target:side) sahip bir dörtgendir.

:::

---
> id: quadrilaterals-2

Daha da az düzenli olan ancak yine de bazı önemli özelliklere sahip olan birkaç dörtgen daha var:

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption} Karşılıklı kenarları  [paralel ise](gloss:parallel) , bir __Paralelkenar__ elde ederiz.

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption} İki çift _bitişik_ kenar aynı uzunlukta ise, bir __Deltoid__ elde ederiz.

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption} En az bir çift karşılıklı kenar __paralelse__ , bir __Yamuk__ elde ederiz.

:::

---
> id: quadrilaterals-venn

Dörtgenler aynı anda bu kategorilerin çoğuna girebilir. Farklı dörtgenlerin hiyerarşisini bir [Venn diyagramı](gloss:venn-diagram) yardımıyla görselleştirebiliriz:

    figure: include svg/venn.svg

Örneğin, her dikdörtgen aynı zamanda bir [[paralelkenar | eşkenar dörtgen | kare]] ve her [[eşkenar dörtgen | yamuk | paralelkenar]] da bir deltoiddir. Bir eşkenar dörtgen [[bazen | her zaman | asla]] kare ve bir dikdörtgen [[her zaman | ara sıra | asla]] bir yamuktur.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Herhangi bir belirsizlikten kaçınmak için genellikle en spesifik adını kullanırız.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

Şimdi soldaki gri kutuda herhangi dört yere noktalar yerleştirin. _{span.reveal(when="points")} Bu dört noktayı dörtgen oluşturacak şekilde birleştirebiliriz._

{.reveal(when="points" delay=1000)} Dört kenarın her birinin orta noktasını bulalım. Orta noktaları birleştirirsek elde ederiz [[başka bir dörtgen | bir üçgen | bir dikdörtgen]] .

{.reveal(when="blank-0")} İlk dörtgenin köşelerini hareket ettirmeyi deneyin ve daha küçük olana ne olduğunu gözlemleyin. Sadece _herhangi bir_ dörtgen değil, her zaman bir [[paralelkenar | yamuk | dikdörtgen]] olduğunu görüyoruz!

{.reveal(when="blank-1")} Ama neden böyle? _Herhangi bir_ dörtgenin sonucu neden hep paralelkenar olur? Açıklamamıza yardımcı olmak için, orijinal dörtgenin [köşegenlerinden](gloss:polygon-diagonal) birini çizmemiz gerekiyor.

{.reveal(when="diagonal")} Bir köşegen, dörtgeni [iki üçgene](target:triangle) böler. Ve şimdi iç dörtgenin [iki kenarının](target:midsegment) aslında bu üçgenlerin [[orta tabanları | kenar ortayları | açı ortayları]] olduğunu görebilirsiniz.

{.reveal(when="blank-2")} [Önceki derste](/course/triangles/properties) , bir üçgenin [orta tabanlarının](gloss:triangle-midsegment)  her zaman üçgenin tabanına paralel olduğunu göstermiştik. Bu durum, [bu iki kenarın](target:parallel) da köşegene paralel olduğu anlamına gelir - bu nedenle de [[ birbirlerine paralel | aynı uzunluk | birbirine dik]] olmalıdırlar.

{.reveal(when="blank-3" delay=2000)} Karşılıklı kenarların paralel olduğunu göstermek için dörtgenin [ikinci köşegeniyle](target:other) de aynısını yapabiliriz. Ve bu, iç dörtgenin bir [paralelkenar](gloss:parallelogram) olduğunu kanıtlamamız için gereken tek şey. _{span.qed}_

:::

---
> id: parallelograms

### Paralelkenar

Paralelkenarların karşılıklı kenarlarının paralel olması dışında birçok başka ilginç özelliği olduğu ortaya çıktı. Aşağıdaki altı ifadeden hangileri doğrudur?

::: column.grow

    x-picker.list
      .item.md Karşılıklı kenarlar [eştir](gloss:congruent).
      .item(data-error="parall-error-1") İç açılar her zaman 90° den küçüktür.
      .item.md(data-error="parall-error-2") Köşegenler aynı zamanda [açıortaydır](gloss:angle-bisector)
      .item Karşılıklı açılar eştir.
      .item(data-error="parall-error-3") Köşegenler aynı uzunluktadır.
      .item(data-error="parall-error-4") Komşu kenarlar aynı uzunluktadır.
      .item Köşegenler birbirini ortalar.

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")

      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

Tabii ki, sadece bu özellikleri “gözlemlemek” yeterli değildir. Her _zaman_ doğru olduklarından emin olmak için, bunları _kanıtlamamız_ gerekir:

::: tab

#### Karşılıklı Kenarlar ve Açılar _{span.check(when="diagonal blank-0 blank-1")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")

      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")

      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow

{.task} Paralelkenarın karşıt kenarlarının ve açılarının her zaman eş olduğunu kanıtlamaya çalışalım.

Paralelkenarın köşegenlerinden birini çizerek başlayalım.

{.reveal(when="diagonal")} Köşegen, paralelkenarın kenarlarıyla dört yeni açı oluşturur. İki [kırmızı açı](target:red-angle) ve iki [mavi açı](target:blue-angle) [ters açılardır](gloss:alternate-angles) , bu yüzden her biri [[ eş | tümler | bütünler]] olmalıdır  .

{.reveal(when="blank-0")} Şimdi, köşegen tarafından oluşturulan [iki üçgene](target:triangles) bakarsak, iki eş açıya ve [bir eş kenara](target:diagonal) sahip olduklarını görürüz. [[AKA  | AAK | AA]] eşlik koşulu ile, her iki üçgen de eş olmalıdır.

{.reveal(when="blank-1")} Bu, üçgenlerin diğer karşılık gelen kısımlarının da eş olması gerektiği anlamına gelir: özellikle, her iki [karşıt kenar çifti](target:sides) de eştir ve her iki [karşı açı çifti](target:angles) de eştir. _{span.qed}_

:::

{.reveal(when="blank-1")} Bunun tersinin de geçerli olduğu ortaya çıkıyor: eğer bir dörtgende karşılıklı kenarlar ve açılar eş ise, o zaman bu dörtgen paralelkenardır.

::: tab

#### Köşegenler _{span.check(when="diagonal blank-2 blank-3")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")

      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")

      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")

      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")

      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow

{.task} Şimdi bir paralelkenardaki iki köşegeninin birbirini ortaladığını kanıtlayalım.

Köşegenlerin oluşturduğu iki sarı üçgeni düşünelim:

* [İki yeşil kenarın](target:side1) eş olduğunu kanıtladık. * [İki kırmızı açı](target:anglesR) ve [iki mavi açı](target:anglesB) da eştir, çünkü bunlar [[içters açılardır | zıt açılar | dik açılar]] .

{.reveal(when="blank-2")} [[AKA | KKK | AAK]] koşulu ile, her iki sarı üçgen de eştir.

{.reveal(when="blank-3")} Şimdi eş üçgenlerin karşılık gelen kısımlarının da eş olduğu gerçeğini kullanabiliriz, [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) ve [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . Başka bir deyişle, iki köşegen orta noktalarında kesişir. _{span.qed}_

:::

{.reveal(when="blank-3")} Daha önce olduğu gibi, bunun tersi de doğrudur: eğer bir dörtgenin köşegenleri birbirini ortalarsa, dörtgen bir paralelkenardır.

:::

---
> id: kites

### Deltoidler

::: column.grow

Yukarıda bir paralelkenarın iki çift [[ karşılıklı | bitişik ]] kenarlarının eş olduğunu gördük. Bir deltoidde, iki çift _bitişik_ taraf birbirine eştir.

_Deltoid_ adı açıkça şeklinden geliyor: gökyüzünde uçabileceğiniz uçurtmalara benziyor. Bununla birlikte, şimdiye kadar gördüğümüz tüm özel dörtgenler arasında, bir dart veya ok gibi şekillendirilirse, deltoid  [içbükey](gloss:concave) olabilen tek dörtgendir:

::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} Dışbükey bir deltoid

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} Ok gibi görünen içbükey bir deltoid

:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")

      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")

      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")

      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")

      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow

Tüm deltoidlerin [[simetrik | benzer]] olduğunu fark etmiş olabilirsiniz. _{span.reveal(when="blank-0")} [Simetri ekseni](gloss:axis-of-symmetry) [[köşegenlerden biridir | kenarlarından biri | bir orta taban]] ._

{.reveal.r(when="blank-1")} Köşegen, deltoid [iki eş üçgene](target:triangle1) böler. [KKK](gloss:triangle-sss) koşulu ile  her iki üçgenin de eş olduklarını biliyoruz.  (target:sss) (kırmızı, yeşil ve mavi). _{button.next-step} Devam et_

{.reveal.r(when="next-0")} [CPOCT](gloss:cpoct) kullanarak, [ilgili açıların](target:angles) aynı zamanda eş olması gerektiğini biliyoruz. _{button.next-step} Devam et_

{.reveal.r(when="next-1")} Bu, örneğin, [köşegenin](target:d1) bir [[açıortay | kenarortay | kenar orta dikme]] olduğu anlamına gelir. _{button.next-step} Devam et_

{.reveal.r(when="next-2")} Daha da ileri gidebiliriz: diğer köşegeni çizersek, [iki tane daha küçük üçgen](target:triangle2) elde ederiz. [KAK] kenar- açı-kenar (gloss:triangle-sss) koşulu nedeniyle bunlar da eş olmalıdır: aynı [iki kenara ve açıya sahiptirler](target:sas) . _{button.next-step} Devam et_

{.reveal(when="next-3")} Bu demektir ki bu [açı α](target:alpha) da [ß açısı](target:beta) ile aynı olmalıdır. Komşu ve bütünler olduklarından, hem α hem de ß [[90]]° olmalıdır.

{.reveal(when="blank-3")} Başka bir deyişle, bir deltoidin köşegenleri her zaman [[diktir | paralel]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Dörtgenlerin Alanları

Bir önceki derste üçgen alanını hesaplarken, onu bir [[dikdörtgene | kareye | beşgene]] dönüştürme hilesini kullandık . Bazı dörtgenler için de bunu yapabiliriz.

::: tab

#### Paralelkenar _{span.check(when="draw-1 blank-1")}_

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.red.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow

Solda, paralelkenar ile aynı alana sahip bir dikdörtgen çizmeye çalışın.

{.reveal(when="draw-1")} Soldaki [eksik üçgenin](target:triangle-1) , sağdaki [üst üste binen üçgenden](target:triangle-2)   _{span.reveal(when="blank-1")} [[tam olarak aynı | daha küçük | [daha büyük ]] olduğunu görebiliyor musunuz? Bu nedenle paralelkenarın alanı_

{.text-center.reveal(when="blank-1")} Alan = __{.i.m-green} taban__ × __{.i.m-yellow} yükseklik__

{.reveal(when="blank-1" delay=1000)} _Paralelkenarın yüksekliğini ölçerken dikkatli olun: farklı tabanlara ait farklı yükseklikleri vardır._

:::

::: tab

#### Yamuk _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Yamukların bir çift [paralel kenarı](target:bases) olan dörtgenler olduğunu hatırlayın. Bu paralel kenarlara yamuk __tabanları__ denir.

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow

Daha önce olduğu gibi, bu yamuk ile aynı alana sahip bir dikdörtgen çizmeye çalışın. _{span.reveal(when="draw-2")} Soldaki ve sağdaki [eksik ve eklenen üçgenlerin](target:triangles-3) nasıl iptal edildiğini görebiliyor musunuz?_

{.reveal(when="draw-2" delay=2000)} [{.pill.green}](target:t-height) Bu dikdörtgenin [yüksekliği](target:t-height) , yamuğun paralel kenarlarının(target:bases) [[arasındaki mesafedir | ortalamasıdır |uzunluğuna eşittir]].

{.reveal.r(when="blank-2")} [{.pill.yellow}](target:t-width) Dikdörtgenin [genişliği](target:t-width) yamuğun  iki paralel olmayan kenarının [[orta noktalar | uç noktaları]] arasındaki mesafedir. _{span.reveal(when="blank-3")} Buna yamuğun __orta__ tabanı denir._ _{button.next-step.reveal(when="blank-3")} Devam et_

{.reveal(when="next-0")} [Üçgenlerde olduğu](gloss:triangle-midsegment) gibi, bir yamuğun orta tabanı,  iki tabanı ile [[paraleldir | aynı uzunlukta | diktir]] . Orta tabanın uzunluğu, tabanların uzunluklarının ortalamasıdır: `(a+c)/2` .

{.reveal(when="blank-4")} Tüm bunları birleştirirsek, [_a_](target:base-2) ve [_c_](target:base-1) paralel kenarları ve yüksekliği [_h_](target:t-height) olan bir yamuk alanı için bir denklem elde ederiz:

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Deltoid _{span.check(when="blank-5")}_

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")

      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")

      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")

      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow

Bu deltoidde, [iki köşegen](target:diag3) onu çevreleyen büyük bir [dikdörtgenin](target:rect4) genişliğini ve yüksekliğini oluşturur.

Bu dikdörtgenin alanı,  deltoid alanının [[iki katıdır | aynıdır | üç katıdır]]. _{span.reveal(when="blank-5")} Deltoidi oluşturan [dört üçgenin](target:inside) her birinin, onun dışındaki [dört boşlukla nasıl](target:outside) aynı olduğunu görebiliyor musunuz?_

{.reveal(when="blank-5")} Köşegenleri  [{.i.pill.green} d1](target:d31) ve [{.i.pill.yellow} d2](target:d32) olan bir deltoidin alanı

{.text-center.reveal(when="blank-5")} _Alan_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### Eşkenar dörtgen _{span.check(when="blank-6 blank-7")}_

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")

      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")

      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")

      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow

[Eşkenar](gloss:rhombus) dörtgen, dört eş kenarı olan bir dörtgendir. Her eşkenar dörtgenin [[paralelkenar | dikdörtgen | kare]] olduğunu ve ayrıca bir [[deltoid | altıgen | içbükey çokgen]] hatırlayabilirsiniz  .

{.reveal(when="blank-6 blank-7")} Bu, bir eşkenar dörtgen alanını bulmak için, bir paralelkenar alanı veya bir deltoid alanı için kullanılan denklemleri kullanabileceğimiz anlamına gelir:

{.text-center.reveal(when="blank-6 blank-7")} _Alan_ = [{.i.pill.blue} taban](target:base) × [{.i.pill.red} yükseklik](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _Farklı durumlarda, bir eşkenar dörtgenin farklı kısımları (kenarlar, yükseklik, köşegenler) verilebilir vbu durumda hangi denklemin daha uygun olduğunu seçmelisiniz._

:::

:::



---

## Tessellations

> section: tessellations
> id: tessellations

[Çokgenler](gloss:polygon) doğanın her yerinde görülür. Geniş bir alanı döşemek istiyorsanız özellikle kullanışlıdır, çünkü çokgenleri boşluk veya çakışma olmadan birbirine sığdırabilirsiniz. Bunun gibi desenlere [__mozaikleme__](gloss:tessellation) denir.

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[altıgen şeklinde | Üçgensel | İkinci dereceden]] petek

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Milk Snake derisi

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Yaprakların hücresel yapısı

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Kuzey İrlanda'daki Giant's Causeway bazalt sütunları

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Ananas derisi

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Bir kaplumbağa kabuğu

:::

---
> id: tessellations-1

İnsanlar antik Roma'dan günümüze sanat, mimari ve teknolojideki bu doğal modellerin çoğunu kopyaladılar. İşte birkaç örnek:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[dikdörtgen biçiminde | ikinci dereceden | Altıgen]] kaldırım deseni

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} İngiltere'de Eden Projesi'nde Sera

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Alhambra şirketinde Mosaic

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Üçgensel | altıgen şeklinde |]] Londra'daki British Museum'da [[dikdörtgen]] çatı

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Sidney hücresel mozaik köşk

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} Uçağın _Sürüngenlerle Düzenli Bölünmesi_ , MC Escher

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Burada düzenli çokgenler kullanarak kendi mozaiklerinizi oluşturabilirsiniz. Yeni şekilleri kenar çubuğundan tuvale sürüklemeniz yeterlidir. Hangi şekiller iyi mozaik oluşturur? Hiç mozaik oluşturmayan şekiller var mı? İlginç desenler yaratmaya çalışın!

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn Clear
        button.btn Download
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Normal çokgenlerden mozaikler

Bazı [düzenli çokgenlerin](gloss:regular-polygon) ( [[kareler]] gibi) [[| beşgenler]] ) kolayca döşenirken, diğerleri ( [[beşgenler]] gibi) [[| üçgenler | altıgenler]] ) hiç mozaik görünmüyor.

---
> id: tessellation-regular-1

Bu, daha önce hesaplamayı öğrendiğimiz [iç açılarının](gloss:internal-angle) büyüklüğü ile ilgilidir. Mozaikleme işleminin her [köşesinde](gloss:polygon-vertex) , birden çok farklı çokgenin iç açıları birleşir. [[360]]° 'ye kadar eklemek için tüm bu açılara ihtiyacımız var, aksi takdirde bir boşluk veya bir çakışma olacaktır.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Üçgenler [[mozaik | mozaik yapma]] _{span.reveal(when="blank-0")} çünkü 6 × 60° = 360°._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Kareler [[mozaik | mozaik yapma]] _{span.reveal(when="blank-1")} çünkü 4 × 90° = 360°._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Beşgenler [[mozaik döşemez | mozaik döşemek]] _{span.reveal(when="blank-2")} çünkü 108° 'nin katları 360°' ye kadar eklemez._

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Altıgenler [[mozaik | mozaik yapma]] _{span.reveal(when="blank-3")} çünkü 3 × 120° = 360°._

:::

---
> id: tessellation-regular-3

Benzer şekilde, tıpkı beşgenler gibi, 7 veya daha fazla kenarı olan herhangi bir normal çokgenin mozaik oluşturmadığını kontrol edebilirsiniz. Bu, mozaikleyen tek normal çokgenlerin üçgenler, kareler ve altıgenler olduğu anlamına gelir!

Tabii ki, iç açılarının 360° 'ye kadar çıkabilmesi şartıyla, farklı türde düzenli çokgenleri mozaik içinde birleştirebilirsiniz:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagons, squares and triangles#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octagons and squares#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) and triangles#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, hexagons and squares#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Düzensiz poligonlardan mozaikler

Ayrıca, döndürürken ve düzenlerken dikkatli olduğumuz sürece [düzensiz çokgenlerden](gloss:irregular-polygon) mozaikler yapmayı deneyebiliriz.

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow

Sadece eşkenar üçgenleri değil, _herhangi bir üçgeni_ de döşeyebileceğiniz ortaya çıkıyor! Bu şemadaki [köşeleri](target:vertex) hareket ettirmeyi deneyin.

Üçgendeki iç açıların toplamı [[180]]° 'dir. Her açıyı [[iki kez kullanırsak | bir Zamanlar |]] mozaikte her tepe noktasında [[üç kez]] 360° elde ederiz:

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")

:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)

::: column.grow

Daha şaşırtıcı bir şekilde, _herhangi bir dörtgen_ ayrıca mozaikler! İç açı toplamları [[360]]°, yani her açıyı bir [[kez kullanırsak | iki defa |]] Mozaikleme işleminin her köşesinde [[üç kez]] 360° elde ederiz.

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")

:::

---
> id: tessellation-pentagons

Beşgenler biraz daha hileli. _Normal_ beşgenlerin [[mozaik yapmadığını]] zaten gördük [[| tessellate]] , ama normal olmayanlar ne olacak?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

İşte beşgenlerle üç farklı mozaik örneği. _Normal_ değildirler, ancak mükemmel şekilde geçerli 5 taraflı çokgenlerdir.

Şimdiye kadar, matematikçiler (dışbükey) beşgenlerle sadece 15 farklı mozaik türü buldular - en sonuncusu 2015 yılında keşfedildi. Kimse başka olup olmadığını bilmiyor ya da bu 15'in tek olup olmadığını bilmiyor…

---
> id: escher

### Sanatta Mozaikler

Mozaikler biz birçok sanatçı, mimar ve tasarımcı - en ünlü Hollandalı sanatçı [MC Escher](bio:escher) için bir araç ve ilham kaynağı. Escher'ın çalışması garip, mutasyona uğramış yaratıklar, desenler ve manzaralar içeriyor:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

Bu sanat eserleri genellikle eğlenceli ve zahmetsiz görünür, ancak altta yatan matematik ilkeleri öncekilerle aynıdır: açılar, rotasyonlar, çeviriler ve çokgenler. Matematik doğru değilse mozaikleme işe yaramaz!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

Şimdiye kadar gördüğümüz tüm mozaiklerin ortak bir yanı var: bunlar __periyodik__ . Bu, tekrar tekrar tekrarlanan düzenli bir kalıptan oluştuğu anlamına gelir. Sonsuza kadar her yöne devam edebilirler ve her yerde aynı görünürler.

1970'lerde İngiliz matematikçi ve fizikçi [Roger Penrose](bio:penrose) _periyodik olmayan_ mozaikleri keşfetti - hala her yönden sonsuzca devam ediyorlar, ama _asla_ aynı görünmüyorlar. Bunlara __Penrose eğimleri__ denir ve bir tane oluşturmak için sadece birkaç farklı çokgen __türüne__ ihtiyacınız vardır:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose, mozaikleri sadece eğlence için araştırıyordu, ancak bazı gerçek malzemelerin (alüminyum gibi) iç yapısının benzer bir desen izlediği ortaya çıktı. Desen tuvalet kağıdında bile kullanıldı, çünkü üreticiler periyodik olmayan bir desenin herhangi bir çıkıntı olmadan toplanabileceğini fark ettiler.

---

## çokyüzlüler

> section: polyhedra
> id: polyhedra

Şimdiye kadar, düz, iki boyutlu bir dünyada çokgenlerle neler yapabileceğimize baktık. Bir [__çokyüzlülük__](gloss:polyhedron) , çokgenlerden oluşan üç boyutlu bir nesnedir. İşte bazı örnekler:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Çok yüzlü kavisli yüzeyler içeremez - örneğin küreler ve silindirler çok yüzlü değildir.

Bir çokyüzlüyü oluşturan çokgenlere [__yüzleri__](gloss:polyhedron-face) denir. Kenarlar karşılaşacaktır iki yüz [__kenarları__](gloss:polyhedron-edge) denir bağlı hatlar ve köşeler [__köşe__](gloss:polyhedron-vertex) olarak adlandırılır.

---
> id: euler

Polihedra, sadece birkaç yüzlü basit küplerden veya piramitlerden, yukarıdaki yıldız gibi 60 üçgen yüzlü karmaşık nesnelere kadar birçok farklı şekil ve boyutta gelir. Bununla birlikte, _tüm_ polihedranın ortak bir önemli özelliği olduğu ortaya çıktı:

::: .theorem

__Euler Çokyüzlü Formülü__
Her polihedronda, yüz sayısı ( _F_ ) artı köşe sayısı ( _V_ ) kenar sayısından ( _E_ ) iki daha fazladır. Diğer bir deyişle,

{.text-center}`F + V = E + 2`

:::

Örneğin, bir çokyüzlünün 12 yüzü ve 18 köşesi varsa, [[28]] kenarı olması gerektiğini biliyoruz.

---
> id: euler-1

Bu denklem ünlü İsviçreli matematikçi [Leonard Euler](bio:euler) tarafından keşfedildi. Herhangi bir delik içermediği sürece herhangi bir polihedron için geçerlidir.

Yukarıdaki gibi farklı bir polihedra denerseniz, Euler formülünün her zaman işe yaradığını göreceksiniz. Daha [sonraki bir derste,](/course/graph-theory/planar-graphs) bunu matematiksel olarak nasıl kanıtlayacağınızı öğreneceksiniz.

---

## Ağlar ve Kesitler

> section: nets-cross-sections
> sectionStatus: dev

Tüm dünyamız üç boyutludur - ancak düz, iki boyutlu nesneleri çizmek veya görselleştirmek çok daha kolaydır. Üç boyutlu polihedra'yı iki boyutlu bir şekilde izlemenin birkaç farklı yolu vardır.

Bu ağlardan hangisi bir küp yapar Ağı nesneyle eşleştirin https://github.com/polymake/matchthenet Çizim Ağları

Düzlem ve katının kesişme noktasının oluşturduğu kesiti tanımlayın.

Enine kesit, bir düzlemin bir katı ile kesişmesidir. İki boyutlu bir düzlemde üç boyutlu bir figürü temsil etmenin bir başka yolu bir ağ kullanmaktır. Bir ağ, üç boyutlu bir şeklin kenarlarının katlanmamış, düz bir temsilidir.

altıgen bir kesit oluşturmak için bir küpü döndürün

---

## Prizmalar ve Piramitler

> section: prisms-pyramids
> sectionStatus: dev

YAPMAK

---

## Şekillendirme ve Katılar

> section: scaling
> sectionStatus: dev

YAPMAK

---

## Platonik Katılar

> section: platonic
> id: platonic

Bu dersin başlangıcında, [düzenli çokgenleri](gloss:regular-polygon) özellikle tüm kenarların ve açıların aynı olduğu “simetrik” çokgenler olarak tanımladık. Çokyüzlü için benzer bir şey yapabiliriz.

_Normal bir polihedronda_ tüm [yüzler](gloss:polyhedron-face) aynı türdeki çokgenlerdir ve aynı sayıda yüz her [tepe noktasında](gloss:polyhedron-vertex) toplanır. Bu iki özelliğe sahip olan [__polihedra__](gloss:platonic-solid) , Yunan filozofu [Platon'un](bio:plato) adını taşıyan [__Platonik katılar__](gloss:platonic-solid) olarak adlandırılır.

Peki Platonik katılar neye benziyor - ve kaç tanesi var? Üç boyutlu bir şekil yapmak için, her tepe noktasında buluşmak için en az [[3]] yüze ihtiyacımız var. Sistematik olarak en küçük düzenli çokgenle başlayalım: eşkenar üçgenler:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Her köşede üç [eşkenar üçgenin](gloss:equilateral-triangle) birleştiği bir çokyüzlü oluşturursak, soldaki şekli alırız. __Tetrahedron__ denir ve [[4]] yüzü vardır. _{.reveal(when="blank-0")} (“Tetra” Yunanca “dört” anlamına gelir)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Dört eşkenar üçgen her tepe noktasında toplanırsa, farklı bir Platonik katı elde ederiz. __Oktahedron__ denir ve [[8]] yüzü vardır. _{.reveal(when="blank-0")} (“Sekiz” Yunancada “sekiz” anlamına gelir. “Sekizgen” 8 taraflı şekil anlamına gelir gibi, “Oktahedron” 8 yüzlü katı anlamına gelir.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

Her köşede [[beş]] üçgen toplanırsa, __Icosahedron'u__ alırız. [[20]] yüzü vardır. _{.reveal(when="blank-1")} (“Icosa” Yunanca “yirmi” anlamına gelir.)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

Her köşede [[altı]] üçgen toplanırsa, farklı bir şey olur: sadece [[bir mozaik]] alırız [[| dörtgen | başka bir Icosahedron]] , _{span.reveal(when="blank-1")} üç boyutlu bir polihedron yerine._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Ve her tepe noktasında yedi veya daha fazla üçgen de yeni polihedra üretmez: bir tepe noktasında o kadar çok üçgene sığacak kadar yer yoktur.

:::

Bu, üçgenlerden oluşan [[üç]] Platonik katı bulduğumuz anlamına gelir. Bir sonraki normal çokgene geçelim: kareler.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

Her köşede [[üç]] kare toplanırsa, __küpü__ alırız. Tıpkı zar gibi [[6]] yüzü var. _{span.reveal(when="blank-1")} Küp bazen Yunanca "altı" için "hexa" kelimesinden sonra _Hexahedron_ olarak da adlandırılır._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Her köşede [[dört]] kare varsa, [[başka bir mozaik]] alırız [[| bir tetrahedron | başka bir küp]] . _{span.reveal(when="blank-1")} Ve daha önce olduğu gibi, beş veya daha fazla kare de çalışmaz._

:::

---
> id: platonic-dodecahedron

Sonra, düzenli beşgenleri deneyelim:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

Her köşede [[üç]] beşgen toplanırsa, __Dodecahedron'u__ alırız. [[12]] yüzü vardır. _{.reveal(when="blank-1")} (“Dodeca” Yunanca “on iki” anlamına gelir.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Daha önce olduğu gibi, dört veya daha fazla beşgen [[çalışmıyor | mümkün]] değil çünkü yeterli alan yok.

:::

---
> id: platonic-hexagons

Denenecek bir sonraki normal çokgen altıgenler:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Her köşede üç altıgen buluşuyorsa, hemen bir [[mozaikleme]] alırız [[| çok yüzlü cisim | altı yüzlü]] . _{span.reveal(when="blank-0")} Üçten fazla yer olmadığı için altıgenlerden oluşan hiçbir Platonik katı yoktur._

:::

---
> id: platonic-final

Aynı şey altıdan fazla kenarı olan tüm normal çokgenler için de geçerlidir. Mozaik vermezler ve kesinlikle üç boyutlu çokgenler almayız.

Bu, sadece [[beş]] Platonik katı olduğu anlamına gelir! Hepsine birlikte bakalım:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__dört yüzlü şekil__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] Yüz_
_{span.dual} [[4]] Nokta_
_{span.dual} [[6]] Kenar_

::: column.grow.text-center(width=120)

__Küp__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] Yüz_
_{span.dual(target="dual1")} [[8]] Tepe Noktaları_
_{span.dual} [[12]] Kenar_

::: column.grow.text-center(width=120)

__sekizyüzlü__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] Yüz_
_{span.dual(target="dual1")} [[6]] Köşebent_
_{span.dual} [[12]] Kenar_

::: column.grow.text-center(width=120)

__oniki yüzlü şekil__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] Yüz_
_{span.dual(target="dual2")} 20 Tepe Noktası_
_{span.dual} 30 Kenar_

::: column.grow.text-center(width=120)

__ikosahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] Yüz_
_{span.dual(target="dual2")} 12 Tepe Noktası_
_{span.dual} 30 Kenar_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Yüzlerin ve köşelerin sayısının nasıl [[değiştirildiğine]] dikkat edin [[|]] [küp ve oktahedronun](target:dual1) yanı sıra [dodecahedron ve icosahedron](target:dual2) için [[de aynı durum]] söz [konusudur](target:dual2) , kenar sayısı [[aynı kalır | farklı]] . Bu Platonik katı çiftlerine [__çift katı__](gloss:polyhedron-dual) denir.

---
> id: platonic-dual

Her yüzünü bir tepe noktasıyla ve her tepe noktasını bir yüzle “değiştirerek” bir çokyüzlüyü ikili haline getirebiliriz. Bu animasyonlar nasıl olduğunu gösterir:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tetrahedron kendisiyle ikili. Aynı sayıda yüze ve köşeye sahip olduğundan, onları değiştirmek hiçbir şeyi değiştirmez.

---
> id: platonic-elements

[Platon](bio:plato) , Evrendeki tüm maddelerin dört elementten oluştuğuna inanıyordu: Hava, Toprak, Su ve Ateş. Her elementin Platonik katılardan birine karşılık geldiğini, beşinci elementin ise bir bütün olarak evreni temsil edeceğini düşündü. Bugün biliyoruz ki, polihedra değil, küresel atomlardan oluşan 100'den fazla farklı element var.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Arşimet Katıları

> id: archimedean

Platonik katılar özellikle önemli polihedradır, ancak sayısız başkaları da vardır.

Örneğin [__Arşimet katılar__](gloss:archimedean-solid) hala [normal çokgenlerden oluşmalıdır](gloss:regular-polygon) , ancak birden fazla farklı tip kullanabilirsiniz. Başka bir Yunan matematikçi [olan Syracuse Arşimetlerinin](bio:archimedes) adını alıyorlar ve bunlardan 13 tane var:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Kesik Tetrahedron__
8 yüz, 12 köşe, 18 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__
14 yüz, 12 köşe, 24 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Kesik Küp__
14 yüz, 24 köşe, 36 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Kesik Oktahedron__
14 yüz, 24 köşe, 36 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__
26 yüz, 24 köşe, 48 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Kesik Cuboctahedron__
26 yüz, 48 köşe, 72 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 yüz, 24 köşe, 60 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 yüz, 30 köşe, 60 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Kesik Dodecahedron__
32 yüz, 60 köşe, 90 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Kesik İkosahedron__
32 yüz, 60 köşe, 90 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 yüz, 60 köşe, 120 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Kesik İkosidodekahedron__
62 yüz, 120 köşe, 180 kenar

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__
92 yüz, 60 köşe, 150 kenar

:::

---
> id: polyhedra-applications

### Uygulamalar

Platon, tüm elementlerin Platonik katılardan oluştuğuna inanmakta yanlıştı. Ancak düzenli polihedra, doğada başka yerlerde görünmelerini sağlayan birçok özel özelliğe sahiptir - ve bu özellikleri bilim ve mühendislikte kopyalayabiliriz.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Birçok __virüs__ , __bakteri__ ve diğer küçük __organizmalar__ [ikosahedra](gloss:icosahedron) şeklindedir. Örneğin virüsler, genetik materyallerini birçok özdeş protein ünitesinin bir kabuğunun içine koymalıdır. İkosahedron bunu yapmanın en etkili yoludur, çünkü birkaç düzenli elementten oluşur, ancak neredeyse bir küre gibi şekillendirilir.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Birçok __molekül__ düzenli polihedra şeklindedir. Bunun en ünlü örneği `C_60` bu, bir [Kesik İkosahedron](gloss:truncated-icosahedron) şeklinde düzenlenmiş 60 karbon atomundan oluşur.

Bilim adamları yıldızlararası tozu araştırdıkları 1985 yılında keşfedildi. Benzer görünüşlü binalar inşa etmesiyle ünlü mimar [Buckminster Fuller'ın](bio:fuller) ardından “Buckyball” (veya Buckminsterfullerene) adını verdiler.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

Çoğu __kristal__ atomlarını [tetrahedra](gloss:tetrahedron) , [küpler](gloss:cube) veya [oktahedradan](gloss:octahedron) oluşan düzenli bir ızgarada düzenler. Çatladıkları veya parçalandıklarında, bu şekilleri daha büyük ölçekte görebilirsiniz.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Tetrahedra ve oktahedra inanılmaz derecede sert ve kararlıdır, bu da onları __inşaatta__ çok yararlı kılar. _Uzay çerçeveleri_ , büyük çatıları ve ağır köprüleri destekleyebilen çokgen yapılardır.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Platonik katılar da __zar__ oluşturmak için kullanılır. simetrileri nedeniyle, her iki tarafın yukarı bakma [olasılığı](gloss:probability) vardır - bu yüzden zarlar adil.

[Kesik Icosahedron](gloss:truncated-icosahedron) muhtemelen dünyanın en ünlü polihedronudur: futbolun şekli.

:::
