# Dönüşümler ve Simetri

## Giriş

> id: intro
> section: introduction

Birçok geometrik kavram, [doğrular](gloss:line) ve [noktalar](gloss:point) gibi, matematikçiler tarafından “icat edilmiştir.” Simetri, diğer yandan, çevremizde her yerdedir. Hemen hemen her çiçek, hayvan ve hatta insanlar simetriktir.

::: column(width=200)
    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox)
::: column(width=200)
    x-img(src="images/lion.jpg" width=200 height=200 lightbox)
::: column(width=200)
    x-img(src="images/starfish.jpg" width=200 height=200 lightbox)
:::

Zamanla doğadaki simetriyi sanatta, mimaride, teknolojide ve tasarımda taklit ettik. Simetrik şekiller ve desenler simetrik olmayanlardan  _çok daha güzel_ görünür.

::: column(width=200)
    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox)
::: column(width=200)
    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox)
::: column(width=200)
    x-img(src="images/window.jpg" width=200 height=200 lightbox)
:::

Ama simetri _güzel görünmekten_ çok daha önemlidir. Evrenin temelinde yatar ve fiziğin en temel kurallarını bile açıklayabilir.

_{button.next-step} Devam_

---
> id: transformations
> goals: t1 t2 t3

Simetri çok sezgisel bir kavram iken, matematiksel bir şekilde tanımlamak
düşündüğünüzden daha zordur. Başlangıç olarak, _dönüşümleri_ öğrenmemiz
gerekiyor. [__Dönüşüm__](gloss:transformation) geometrik figürü başka bir
geometrik figüre çeviren özel bir kurallar kümesidir. İşte bir kaç örnek:

::: column.r(width=200)
    .animation#star
      include svg/transform-1.svg
      x-play-btn
::: column.r(width=200)
    .animation
      include svg/transform-2.svg
      x-play-btn
::: column.r(width=200)
    .animation
      include svg/transform-3.svg
      x-play-btn
:::

---
> id: transformations-1

{.reveal(when="t1 t2 t3")} Dönüşümün sonucunda elde edilen sonuç [__görüntü__](gloss:transformation-image) olarak adlandırılır.  `A`  figürünün görüntüsü genelde `A'` ( “A üssü” diye okunur) şeklinde gösterilir.

Yukarıdaki ilk örnek özeldir, çünkü yalnızca orijinal yıldızı hareket ettirir ve
döndürür, ancak boyutunu veya şekillerini değiştirmez. Bu özelliğe sahip
dönüşümlere [__katı dönüşümler__](gloss:rigid-transformation) denir.

---

## Katı dönüşümler

> id: rigid
> section: rigid

Sert bir dönüşüm, orijinal figürün boyutunu ve şeklini değiştirmeyen özel bir
dönüşüm türüdür. Tahta veya metal gibi katı bir maddeden yapılan bir nesne hayal
edin: hareket ettirebiliriz, döndürüp çevirebiliriz ama esnetemeyiz veya deforme
edemeyiz.

Dönüşümlerden hangisi katı dönüşümdür ?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Katı dönüşümlerde görüntü her zaman [[orijinaline denktir|orijinali ile aynıdır|orijinalin tersidir]]. Üç çeşit katı dönüşüm vardır:

::: column.grow.r(width=200)
    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Şekli basitçe _hareket ettiren_ dönüşüm [__öteleme__](gloss:translation) olarak adlandırılır.

::: column.grow.r(width=200)
    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center}Şekli _çeviren_ dönüşüm [__yansıma__](gloss:reflection) olarak adlandırılır.

::: column.grow.r(width=200)
    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Şekli belirli bir nokta etrafında  _döndüren_ dönüşüm [__döndürme__](gloss:rotation) olarak adlandırılır.
:::

---
> id: rigid-2

Daha karmaşık olanlarını elde etmek için dönüşümlerin birkaç çeşidini art arda uygulayabiliriz – örneğin, döndürmeyi takiben öteleme hareketi.

Ama önce her bir dönüşüm çeşidine daha detaylı bakalım.

---
> id: translations

### Ötelemeler

[__Öteleme__](gloss:translation) figürdeki her noktayı aynı uzaklıkta aynı yöne doğru hareket ettiren dönüşümdür.

 Ötelemeyi, şeklin koordinat düzleminde  _x_-doğrusu ve  _y_-doğrusu boyunca ne kadar hareket ettiğine bakarak belirtebiliriz. Örneğin, (3, 5) dönüşümü şekli  _x_-doğrusu boyunca 3 ve  _y_-doğrusu boyunca 5 birim hareket ettirir.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} ([[5]], [[1]]) ile ötelendi
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} ([[-4]], [[2]]) ile ötelendi
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} ([[4]], [[-2]]) ile ötelendi.
:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Şimdi sıra sizde – şekilleri belirtildiği şekilde öteleyin:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} (3, 1) ile öteleyin  _{span.check(when="drag-0")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} (–4 –2) ile öteleyin _{span.check(when="drag-1")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} (5, –1) ile öteleyin _{span.check(when="drag-2")}_
:::

---
> id: reflections
> goals: r0 r1 r2

### Yansımalar

[__Yansıma__](gloss:reflection) bir şekli bir doğru boyunca “çeviren” veya “ayna tutan” bir dönüşümdür. Bu doğruya __yansıma doğrusu__ denir.

Her bir örnekteki yansıma doğrularını çizin:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,1),point(1,2),point(2,3),point(8,2))" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)" name="from0")
      path(hidden name="line0" x="line(point(-1,4),point(11,4))")
      path(x="from0.reflect(line0)" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,1),point(1,5),point(3,5),point(2,3),point(4,1))" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)" name="from1")
      path(hidden name="line1" x="line(point(9,-1),point(-1,9))")
      path(x="from1.reflect(line1)" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/rorschach.jpg" width=220 height=180)
      svg
        path(hidden name="line2" x="line(point(5,-1),point(5,9))")

:::

---
> id: reflections-1
> goals: r0 r1 r2

Şimdi sıra sizde – her şeklin yansımasını çizin:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,2),point(3,1),point(4,3),point(4,5),point(2,6),point(1,4))" name="from0" style="fill: rgba(105,63,180,0.4)")
      path.red(x="line(point(5,0), point(5,1))" name="line0")
      path.finished(hidden x="from0.reflect(line0)" name="to0" style="fill: rgba(105,63,180,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,6),point(6,4),point(8,6),point(5,7))" name="from1" style="fill: rgba(80,83,205,0.4)")
      path.red(x="line(point(-1,4), point(11,4))" name="line1")
      path.finished(hidden x="from1.reflect(line1)" name="to1" style="fill: rgba(80,83,205,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,3),point(3,3),point(3,5),point(5,5),point(5,6),point(2,6))" name="from2" style="fill: rgba(56,102,230,0.4)")
      path.red(x="line(point(2,1), point(3,2))" name="line2")
      path.finished(hidden x="from2.reflect(line2)" name="to2" style="fill: rgba(56,102,230,0.4)")

:::

---
> id: reflections-2

Eğer bir nokta yansıma doğrusu üzerinde bulunuyorsa, görüntüsünün [[orijinali ile aynı|orijinalinden küçük|orijinalinin tersi]] olduğunu fark edelim.

---
> id: reflections-3

Yukarıdaki örneklerin hepsinde, yansıma doğrusu yatay, dik veya 45°’lik açıya sahipti – ki bunlar yansımaların çizimini kolaylaştırdı. Böyle olmadığı durumda görüntünün inşası için biraz daha fazla uğraşmak gerekiyor.

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="l1" cx="180" cy="30" target="refl")
      circle.move.pulsate(name="l2" cx="120" cy="270" target="refl")
      path(name="refl" x="line(l1,l2)" target="refl")

      circle.reveal(name="a" x="point(60,50)" when="next-0" animation="pop" target="circ")
      circle(name="b" x="point(120,100)" hidden)
      circle(name="c" x="point(110,170)" hidden)
      circle(name="d" x="point(65,200)" hidden)
      circle(name="e" x="point(30,120)" hidden)

      circle.reveal(name="p" x="refl.project(a)" when="next-0" animation="pop" delay=1500)
      path.reveal.fill.light(x="angle(a,p,l1)" size=16 when="next-0" delay=1500)

      circle.reveal(name="a1" x="a.reflect(refl)" when="next-1" animation="pop" target="circ")
      circle(name="b1" x="b.reflect(refl)" hidden)
      circle(name="c1" x="c.reflect(refl)" hidden)
      circle(name="d1" x="d.reflect(refl)" hidden)
      circle(name="e1" x="e.reflect(refl)" hidden)

      path.fill.blue(x="polygon(a,b,c,d,e)")
      path.fill.reveal.blue1(x="polygon(a1,b1,c1,d1,e1)" when="next-3")

      path.reveal(x="line(a,a1)" when="next-0" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(b,b1)" when="next-2" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(c,c1)" when="next-2" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(d,d1)" when="next-2" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(e,e1)" when="next-2" animation="draw" delay=700)

      circle.transparent(name="ax" x="refl.project(a)" target="circ")
      path.transparent(x="segment(a,ax)" target="d1 circ")
      path.transparent(x="segment(a1,ax)" target="d2 circ")
      path.transparent(x="circle(ax,distance(a,ax))" target="circ")

::: column.grow
{.r} Bu şekli [yansıma doğrusunun](target:refl) karşısına yansıtmak için, her [köşeyi](gloss:polygon-vertex) tek tek yansıtmamız ve sonra tekrar birleştirmemiz gerekiyor.
_{button.next-step} Devam_

{.r.reveal(when="next-0")} Köşelerden birini seçelim ve bu köşeye doğru yansıma doğrusuna dik bir doğru çizelim.
_{button.next-step} Devam_

{.r.reveal(when="next-1")} Şimdi köşeden yansıma doğrusuna olan [uzaklığı](target:d1) ölçebiliriz ve diğer tarafta [aynı uzaklığa](target:d2) sahip bir nokta oluşturabiliriz. _{span.lgrey}(Bunu yapmak için cetvel ya da  [pergel](target:circ) kullanabiliriz.)_
_{button.next-step} Devam_

{.r.reveal(when="next-2")} Şekildeki diğer köşeler için de aynısını yapabiliriz.
_{button.next-step} Devam_

{.r.reveal(when="next-3")} Şimdi yansıtılan köşeleri doğru sırayla bağlamamız gerek ve böylece yansımayı bulmuş oluyoruz!
:::

---
> id: rotations
> goals: r0 r1 r2

### Döndürmeler

[__Döndürme__](gloss:rotation) şekli belirli bir açı ile sabit bir nokta etrafında  “döndüren” dönüşümdür.  Bu noktaya  [__döndürme merkezi__](gloss:center-of-rotation) denir. Döndürmeler saat yönünde veya saat yönünün tersinde olabilir.

Aşağıdaki şekilleri kırmızı renkteki döndürme merkezi etrafında döndürmeyi deneyiniz:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Saat yönünde 90° döndürün.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} 180° döndürün.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Saat yönünün tersinde 90° döndürün.
:::

---
> id: rotations-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="rot" cx="150" cy="250" target="rot angle compass protractor")

      circle.reveal(name="a" x="point(270,190)" when="next-0" animation="pop" target="compass")
      circle(name="b" x="point(280,110)" hidden)
      circle(name="c" x="point(210,80)" hidden)
      circle(name="d" x="point(190,170)" hidden)
      circle(name="e" x="point(220,200)" hidden)

      circle.reveal(name="a1" x="a.rotate(-ang/18*pi,rot)" when="next-2" animation="pop" target="a1 compass")
      circle(name="b1" x="b.rotate(-ang/18*pi,rot)" hidden)
      circle(name="c1" x="c.rotate(-ang/18*pi,rot)" hidden)
      circle(name="d1" x="d.rotate(-ang/18*pi,rot)" hidden)
      circle(name="e1" x="e.rotate(-ang/18*pi,rot)" hidden)

      path.fill.green(x="polygon(a,b,c,d,e)")
      path.fill.reveal.green1(x="polygon(a1,b1,c1,d1,e1)" when="next-4")

      path.transparent.light.fill(x="arc(rot,a.rotate(pi,rot),pi)" target="protractor")
      path.reveal.light.fill(x="angle(a1,rot,a)" when="next-1" target="angle protractor")

      path.reveal(x="segment(a,rot)" when="next-0" animation="draw" delay=500 target="angle compass protractor")
      path.reveal.thin.light(x="segment(rot,b)" when="next-3" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(rot,c)" when="next-3" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(rot,d)" when="next-3" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(rot,e)" when="next-3" animation="draw" delay=700)

      path.reveal(x="ray(rot,a1)" when="next-1" animation="draw" delay=500 target="angle l2")
      path.reveal.thin.light(x="segment(rot,b1)" when="next-3" animation="draw" delay=800)
      path.reveal.thin.light(x="segment(rot,c1)" when="next-3" animation="draw" delay=900 )
      path.reveal.thin.light(x="segment(rot,d1)" when="next-3" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(rot,e1)" when="next-3" animation="draw" delay=1100)
      
      path.transparent(x="segment(rot,a1)" target="compass protractor")
      path.transparent(x="circle(rot,distance(rot,a))" target="compass")

::: column.grow
90° veya 180° olmayan döndürmeleri çizmek daha zordur. Şimdi bu şekli ${10*ang}{ang|6|-18,18,1}° ile [döndürme merkezi](target:rot) etrafında döndürmeyi deneyelim.


{.r} Yansımalarda olduğu gibi, şekildeki her noktayı tek tek döndürmeliyiz.
_{button.next-step} Devam_

{.r.reveal(when="next-0")} Bir köşeyi seçerek başlıyoruz ve döndürme merkezine bir doğru çiziyoruz.
_{button.next-step} Devam_

{.r.reveal(when="next-1")} [Açıölçer](target:protractor) kullanarak, döndürme merkezi etrafında [${ang*10}°’lik açı](target:angle) ölçebiliriz.
Şimdi bu açıdaki  [ikinci doğruyu](target:l2) çizelim.
_{button.next-step} Devam_


{.r.reveal(when="next-2")} [Pergel](target:compass) veya cetvel kullanarak,orijinal nokta gibi döndürme merkezine aynı uzaklıkta bulunan bir [nokta](target:a1) bulabiliriz.
_{button.next-step} Devam_

{.r.reveal(when="next-3")}Şimdi şekildeki her köşe için bu adımları tekrar etmeliyiz.
_{button.next-step} Devam_

{.reveal(when="next-4")} Son olarak, önceki gibi, orijinal şeklin döndürülen görüntüsünü elde etmek için her köşeyi birbirine bağlayabiliriz.
:::

---
> id: composition-1

Dönüşümler sadece geometride değil matematiğin bir çok alanında önemli olan kavramlardır. Örneğin, [_fonksiyonları_](gloss:function) kaydırarak veya [grafiklerini](gloss:function-graph) döndürerek dönüştürebilirsiniz. Diğer dönüşümlerin görsel bir temsilleri bile yoktur.

---

## Eşleşim

> section: congruence
> sectionStatus: dev

TODO

---

## Simetri

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__Simetri__](gloss:symmetry) her yerdedir ve sezgisel bir kavramdır: bir nesnenin farklı kısımları bir şekilde _aynı_ görünür. Fakat dönüşümleri kullanarak simetrinin _gerçekten_ ne anlama geldiğine dair çok daha kesin, matematiksel bir tanım verebiliriz:

{.definition} Bir nesne eğer bazı dönüşümler uygulandığında bile aynı görünüyorsa o nesne _simetriktir_ .

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Bu kelebeğin yansımasını alabiliriz ve sonrasında aynı şekilde görünür. Kelebek __yansıma simetrisine__ sahiptir deriz.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Bu çiçeği döndürebiliriz ve sonrasında aynı şekilde görünür. Çiçek __döndürme simerisine__ sahiptir deriz.
:::

---
> id: reflectional-symmetry

### Yansıma Simetrisi

Bir şekil yansıtıldıktan sonra aynı görünüyorsa [__yansıma simetrisine__](gloss:rotational-symmetry) sahiptir. Yansıma doğrusuna [__simetri doğrusu__](gloss:axis-of-symmetry) denir ve bu doğru, şekli iki [[denk|eşit|benzer]] yarıya ayırır. Bazı şekiller birden fazla simetri doğrusuna sahiptir.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Şekil ve resimlerdeki simetri doğrularını çiziniz:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/lake.jpg" width=220 height=180)
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/beijing.jpg" width=220 height=180)
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/blue-butterfly.jpg" width=220 height=180)
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption} Bu şekil [[2]] simetri doğrusuna sahiptir.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Kare [[4]] simetri doğrusuna sahiptir.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Bu şekil [[2]] simetri doğrusuna sahiptir.
:::

---
> id: alphabet

Alfabedeki çoğu şekil yansıma simetrisine sahiptir. Yansıma simetrisi olan harflerin hepsini seçiniz:

    x-picker.letters
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---
> id: reflectional-symmetry-2
> goals: r0 r1 r2

İşte birkaç şekil daha. Şekilleri yansıma simetrisine sahip olması için tamamlayınız:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(8,5),point(9,3),point(9,2),point(8,1),point(6,1),point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" style="fill: rgba(179,4,105,0.4)")
      path(x="polyline(point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" name="from0")
      path.red(x="line(point(5,-1),point(5,9))" name="line0")
      path(hidden x="from0.reflect(line0)" name="to0")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(1,5),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4),point(5,8),point(4,7),point(6,5))" style="fill: rgba(154,24,130,0.4)")
      path(x="polyline(point(1,4),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4))" name="from1")
      path.red(x="line(point(-1,4),point(11,4))" name="line1")
      path(hidden x="from1.reflect(line1)" name="to1")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(2,1),point(8,1),point(9,2),point(9,6),point(8,7),point(2,7),point(1,6),point(1,2))" style="fill: rgba(130,43,155,0.4)")
      path(x="polyline(point(5,1),point(8,1),point(9,2),point(9,4))")
      path.red(x="line(point(5,-1),point(5,9))")
      path.red(x="line(point(-1,4),point(11,4))")
      path(hidden x="polyline(point(5,1),point(2,1),point(1,2),point(1,6),point(2,7),point(8,7),point(9,6),point(9,4))" name="to2")

:::

---
> id: palindromes
> goals: p0 p1 p2

Şekiller, harfler ve resimler yansıma simetrisine sahip olabilirler fakat  tüm sayılar, kelimeler ve cümleler de buna sahip olabilir!

Örneğin “25352” ve “ANNA” , ikisi de baştan ve sondan aynı şekilde okunurlar. Bunu sağlayan sayılar ve kelimeler [__Palindrom__](gloss:palindrome) olarak adlandırılır. Başka bir Palindrom düşünebilir misiniz?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Eğer boşlukları ve noktalamayı görmezden gelirsek, bu harfler de yansıma simetrisine sahiptir. Kendi örneğinizi bulabilir misiniz?

{.text-center} İlaç iç Ali!
Pay ederek iki [[kerede]] yap.  
[[Rıza]], Haluk okula hazır!

{.reveal(when="blank-0 blank-1")} Fakat Palindromlar sadece eğlence için değildir, aslında pratik bir öneme sahiplerdir. Birkaç yıl önce, bilim insanları [DNA’nın](gloss:dna) bölümlerinin palindromik olduğunu keşfettiler. Bu, mutasyonlara ve hasarlara karşı daha dayanıklı olmasını sağlar – çünkü her parçanın ikinci bir yedek kopyası vardır.

---
> id: rotational-symmetry

### Döndürme Simetrisi

::: column.grow
Bir şekil döndürüldükten sonra aynı görünüyorsa, bu şekil [__döndürme simetrisine__](gloss:rotational-symmetry) sahiptir ( 360°’den küçük bir açıyla). [Döndürmenin merkezi](gloss:center-of-rotation) genellikle şeklin ortasıdır.

[__Simetri mertebesi__](gloss:order-of-symmetry) şeklin aynı göründüğü farklı yönlendirmelerin sayısıdır. Başlangıca gelene kadar yaptığımız _şekli döndürme sayısı_ olarak da düşünebilirsiniz. Örneğin, bu kar tanesinin mertebesi [[6’dır]].

{.reveal(when="blank-0")} Her bir döndürmenin mertebesi `"360°"/"mertebe"`dir. Kar tanesinin mertebesi `"360°"/6` = [[60]]°.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Her bir şekil için döndürmenin açısını ve mertebeyi bulunuz:

::: column(width=220)
    img(src="images/clover.jpg" width=200 height=200)

{.caption} Mertebe [[4]], açı [[90]]°
::: column(width=220)
    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Mertebe [[2]], açı [[180]]°
::: column(width=220)
    img(src="images/flower.jpg" width=200 height=200)

{.caption} Mertebe [[8]], açı [[45]]°
:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Şekilleri döndürme simetrisine sahip olması için tamamlayınız:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Mertebesi 4
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Mertebesi 2
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Mertebesi 4
:::

---

## Simetri Grupları ve Duvarkağıdı Grupları

> id: groups
> section: symmetry-groups

Bazı şekiller birden fazla simetriye sahiptir – basit bir örnek olarak [kareye](gloss:square) bir göz atalım.

::: column(width=400 parent="padded-thin")

    .cubes
      img.cube.reveal(src="images/cube-0.svg" width=80 height=80 when="blank-1 blank-2 blank-3" delay=1000 animation="pop")
      img.cube.reveal(src="images/cube-1.svg" width=80 height=80 when="blank-1" animation="pop")
      img.cube.reveal(src="images/cube-2.svg" width=80 height=80 when="blank-2" animation="pop")
      img.cube.reveal(src="images/cube-3.svg" width=80 height=80 when="blank-3" animation="pop")
      img.cube.reveal(src="images/cube-4.svg" width=80 height=80 when="blank-0" animation="pop")
      img.cube.reveal(src="images/cube-5.svg" width=80 height=80 when="blank-0" delay=200 animation="pop")
      img.cube.reveal(src="images/cube-6.svg" width=80 height=80 when="blank-0" delay=400 animation="pop")
      img.cube.reveal(src="images/cube-7.svg" width=80 height=80 when="blank-0" delay=600 animation="pop")

::: column.grow(width=200)
Yukarıda karenin [[4]] yansıma doğrusu olduğunu gösterdiniz.

{.reveal(when="blank-0")} Ayrıca [[90]]°, [[180]]° ve [[270]]°‘lik döndürme simetrisine de sahiptir.

{.reveal(when="blank-1 blank-2 blank-3")} Ve son olarak, “hiçbir şey yapmamayı”  başka bir özel simetri çeşidi olarak  düşünebiliriz – çünkü sonuç, öncekiyle (açıkça) aynı olacak. Bu bazen __etkisiz eleman__ olarak adlandırılır.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Toplamda, [[8]] farklı “kare simetrisi” bulduk.
:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Şimdi bu simetrilerle biraz aritmetik yapmaya başlayabiliriz. Örneğin, yeni bir simetri elde etmek için iki simetriyi _toplayabiliriz_.

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

Karenin iki simetrisini topladığınız zaman yeni bir tanesine ulaşırsınız. İşte kendiniz deneyebilmeniz için “simetri hesap makinesi”:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Simetri hesap makinesiyle biraz zaman harcayın ve her bir yönlendirmeyi bulmayı deneyin. Bu gözlemleri tamamlayabilir misiniz?

* İki döndürmeyi topladığınızda daima  [[bir döndürme|bir yansıma]] (veya etkisiz eleman).
* İki yansımayı topladığınızda daima [[bir döndürme|bir yansıma]] (veya etkisiz eleman).
* Aynı iki simetriyi ters sırayla topladığınızda
  [[bazen farklı bir sonuç|daima farklı bir sonuç|daima aynı sonucu]] verir.
* Etkisiz elemanını eklemek  [[hiçbir şeyi değiştirmez|bir yansıma verir|tersini verir]].

---
> id: group-axioms

Daha önce __{.orange}simetrileri__ toplamanın aslında  __{.green}tam sayıları__ toplamaya benzediğini fark etmiş olabilirsiniz:

    ol.proof
      
      li.r
        | #[strong.orange simetrileri]/#[strong.green tam sayıları] toplamak daima başka bir #[strong.orange simetri]/#[strong.green tam sayı] verir:
        .text-center.axiom 
          img.cube(src="images/cube-2.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-6.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-4.svg" width=32 height=32)
        .text-center.axiom 
          mn 12
          mo +
          mn 7
          mo =
          mn 19
        .next-step Devam
      
      li.r.reveal(when="next-0")
        span.md #[strong.orange simetrileri]/#[strong.green tam sayıları] toplama işlemi [birleşme](gloss:associative) özelliğine sahiptir:
        .text-center.axiom 
          mfenced
            img.cube(src="images/cube-1.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-4.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          mfenced
            img.cube(src="images/cube-4.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-3.svg" width=32 height=32)
        .text-center.axiom
          mfenced #[mn 4]#[mo +]#[mn 2]
          mo +
          mn 5
          mo =
          mn 4
          mo +
          mfenced #[mn 2]#[mo +]#[mn 5]
        .next-step Devam
      
      li.r.reveal(when="next-1")
        | Her #[strong.orange simetrinin]/#[strong.green tam sayının] , #[strong.orange simetri]/#[strong.green tam sayı] olan bir  #[strong tersi] vardır ve  toplandıklarında etkisiz elemanı verir:
        .text-center.axiom 
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-0.svg" width=32 height=32)
        .text-center.axiom 
          mn 4
          mo +
          mn –4
          mo(value="=") =
          mn 0
        .next-step Devam

---
> id: groups-1

Matematikte, bu özelliklere sahip her koleksiyon [__grup__](gloss:group) olarak adlandırılır. Bazı gruplar (karenin __{.orange}simetrileri__ gibi) sadece sonlu sayıda elemana sahiptir. Diğerleri  (__{.green}tam sayılar__ gibi) sonsuz elemana sahiptir.

Bu örnekte, karenin sekiz simetrisiyle başladık. Aslında, her geometrik şekil kendi __simetri grubuna__ sahiptir. Hepsinin farklı elemanları vardır fakat daima yukarıdaki üç kuralı sağlarlar.

Gruplar matematikte her zaman karşımıza çıkar. Elemanlar sayılar ya da simetriler olabilir, veya polinomlar, permütasyonlar, matrisler, fonksiyonlar… üç kuralı sağlayan _herhangi bir şey_ olabilir. _Grup Teori’nin_  kilit noktası tek tek elemanlarla değil _elemanların birbirlerini nasıl etkiledikleriyle_ ilgilenmektir.

::: column.grow
Örneğin, farklı moleküllerin simetri grubu bilim insanlarına ilgili materyallerin özelliklerini tahmin etme ve açıklama konusunda yardımcı olabilir.

Gruplar tahta oyunlarını kazanma stratejisinin, virüslerin davranışlarının, müzikteki farklı harmonilerin analizinde ve başka birçok alanda da kullanılır...
::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} CCl<sub>4</sub> molekülünün özellikleri (solda) ve Adenovirüs (sağda) simetrileriyle belirlenmiştir.
:::

---

### Duvarkağıdı Grupları

> id: wallpaper-groups

Önceki bölümlerde iki çeşit simetriyi ele aldık, bunlar iki farklı dönüşüme karşılık geliyordu: Döndürme ve yansıtma. Ancak üçüncü bir simetri türü daha var, bu da üçüncü çeşit bir dönüşüme karşılık gelir: [[öteleme|spin|takla]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Öteleme simetrisi__](gloss:translational-symmetry) çiçekler, kelebekler gibi tek başına ele alınan nesnelerde ortaya çıkmaz, ama her yöne devam eden düzenli örüntülerde ortaya çıkar:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Altıgen bal peteği
::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Seramik duvar kaplaması
:::

---
> id: footsteps

Yansıtma, döndürme ve öteleme simetrilerinin dışında dördüncü bir simetri çeşidi bile vardır:: [__kaydırıp yansıtma__](gloss:glide-reflection). Bu aslında yansıtma ve yansıtma doğrusu ile aynı yönde bir kaydırmanın birleşiminden oluşur.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Bir örüntü birden fazla simetri çeşidine sahip olabilir. Ve aynen kare için yaptığımız gibi, bir örüntünün de [simetri grubunu](gloss:symmetry-group)nu bulabiliriz. Bu grup örüntünün bütün simetrilerini içerir.

Böyle gruplar bir örüntünün nasıl _göründüğü_(örneğin renkleri ve şekilleri) hakkında pek bir şey söylemez, sadece nasıl _tekrar ettiğini_ söyler. Birden çok örüntü aynı simetri grubuna sahip olabilir, yalnızca aynı şekilde dizilip tekrar etmeleri yeterlidir.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption}Simetriler renklerle ya da yüzeysel şekillerle ilgili değildir. Farklı görüntülerine rağmen bu iki örüntü aynı simetrilere sahiptir.
::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Bu iki örüntü, birbirlerinden çok soldaki örüntülere benzemelerine rağmen, aslında aynı simetrilere sahiptirler.
:::

---
> id: wallpaper-groups-3

Sonsuz farklı örüntü düşünebilmemize rağmen, aslında toplamda sadece 17 tane simetri grubu olduğu keşfedildi. Bunlara  __Duvarkağıdı Grupları__ diyoruz.
Her duvarkağıdı grubu öteleme, döndürme, yansıtma ve kaydırarak yansıtmaların bir kombinasyonu ile tanımlanır. Bu örneklerdeki  [döndürme merkezlerini](gloss:center-of-rotation) ve  [yansıtma eksenlerini](gloss:axis-of-symmetry) görebiliyor musunuz?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>P1 tipi</strong><br>Sadece ötelemeler
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>P2 tipi</strong><br>2 dereceli döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>P3 tipi</strong><br>2 dereceli(180°) dört döndürme, ötelemeler
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>P4 tipi</strong><br>3 dereceli(120°) döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>P6 tipi</strong><br>2, 3 ve 6(60°) dereceli döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>PM tipi</strong><br>Paralel yansıtma eksenleri, ötelemeler
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>PMM tipi</strong><br>Dik yansımalar, 2 dereceli döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>P4M tipi</strong><br>(2 + 4 dereceli) Döndürmeler, yansımalar, kaydırıp yansımalar, ötelemeler
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>P6M tipi</strong><br>(2 + 6 dereceli) Döndürmeler, yansımalar, kaydırıp yansımalar, ötelemeler
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>P3M1 tipi</strong><br>3 dereceli döndürmeler, yansımalar, kaydırıp yansımalar, ötelemeler
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>P31M tipi</strong><br>3 dereceli döndürmeler, yansımalar, kaydırıp yansımalar, ötelemeler
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>P4G tipi</strong><br>(2 + 4 dereceli) Döndürmeler, yansımalar, kaydırıp yansımalar, ötelemeler
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>CMM tipi</strong><br>Dik yansıtmalar, 2 dereceli döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>PMG tipi</strong><br> Yansımalar, kaydırıp yansıtmalar, 2 dereceli döndürmeler, ötelemeler
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>PG tipi</strong><br>Paralel kaydırıp yansıtmalar, ötelemeler
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>CM tipi</strong><br>Yansımalar, kaydırıp yansıtmalar, ötelemeler 
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>PGG tipi</strong><br>Dik kaydırıp yansıtmalar, 2 dereceli döndürmeler, ötelemeler

Maalesef bu gruplardan neden _17_ tane olduğunun basit bir açıklaması yok. Bunun kanıtlanması da çok daha ileri seviyede matematik gerektiriyor...

Onun yerine, 17 duvarkağıdı grubuna karşılık gelen kendi örüntülerinizi çizmeyi deneyebilirsiniz.

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow
Duvarkağıdı grupları düzlemsel, iki boyutlu örüntüler ile ilgiliydi. Üç boyut için de benzer bir şey yapabiliriz: böyle gruplara kristal grupları denir, ve 219 tane kristal grubu var!

Kristal grupları öteleme, yansıtma, döndürme ve kaydırıp yansıtmaya ek olarak __kaydırma düzlemleri__ ve __burgu eksenleri__(şişe kapağını açarkenki hareketinizi düşünün) gibi simetriler de içerirler.
::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Boron-Nitrat molekülleri kristal kafes şeklinde dizilmiştir ve kendisi 3 boyutlu simetri grubuna sahiptir.
:::

---

## Fizikte Simetri

> id: planets
> sectionBackground: dark stars
> section: physics

Şimdiye kadar gördüğümüz simetrilerin hepsi bir anlamda _görsel_di: şekiller, resimler ya da örüntüler. Aslında simetri çok daha derin bir kavram: _değişime duyarsızlık_.

Örneğin, portakal suyu sevginiz elma suyu sevginiz kadarsa, o zaman tercihiniz elmalar ile prtakalları değiştiren dönüşüm altında ‘simetrik’tir.

1915 yılında Alman matematikçi [Emmy Noether](bio:noether), benzer bir durumun [doğa kanunları](gloss:laws-of-nature) için de geçerli olduğunu gözlemledi.

::: column.grow
Örneğin deneyimlerimiz bize fizik yasalarının evrenin her yerinde aynı olduğunu söylüyor. Bir deneyi Londra’da mı, New York’ta mı yoksa Mars’ta mı yaptığımız hiç fark etmez; fizik yasaları hep aynı şekilde işler. Bir bakıma, fizik yasalarının [[öteleme simetrisi|döndürme simetrisi]] vardır.

{.reveal(when="blank-0")} Benzer şeklide, bir deneyi yaparken kuzeye mi, güneye mi, doğuya mı yoksa batıya mı baktığımız fark etmez: doğa kanunlarının [[döndürme simetrisi|kaydırıp döndürme simetrisi]] vardır.

{.reveal(when="blank-1")} Son olarak bir deneyi bugün mü, yarın mı yoksa bir yıl sonra mı yapacağımız fark etmez. Doğa kanunlarının “zaman simetrisi” vardır.
::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Bu “simetriler” ilk bakışta anlamsız görünebilir, ancak aslında evrenimiz hakkında bize çok şey söylerler. Emmy Noether her simetrinin, belli bir fiziksel büyüklüğün _korunmasına_ karşılık geldiğini kanıtladı.

Örneğin zaman simetrisi, evrenimizde __enerji__nin korunmasını gerektirir: enerjiyi başka formlara dönüştürebilirsiniz(mesela ışık, ısı, elektrik), ancak asla yoktan var edip var olanı yok edemezsiniz. Evrendeki toplam enerji miktarı hep sabit kalır.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN")
      p.caption CERN dünyadaki en büyük parçacık hızlandırıcı. Bilim insanları temel parçacıkların özelliklerini daha iyi anlamak için bu parçacıkları çok yüksek hızlarda birbirleri ile çarpıştırıyorlar. Boyutunu karşılaştırmak açısından, alttaki insanı görebiliyor musunuz?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150)
    p.caption Bir çarpışmadan sonra parçacıklardan saçılanların izledikleri yol

::: column.grow
Sadece simetri hakkındaki bilgilerimizden yola çıkarak, fizikçiler, hiç bir deney ya da gözleme ihtiyaç duymadan, evrenimizi yöneten doğa kanunlarının büyük bir kısmını elde edebiliyorlar.

Simetri temel parçacıkların varlıklarını bile önceden kestirebiliyor. Bunun bir örneği meşhur __Higgs Bozonu__: 1960 yılında teorik fizikçiler tarafından öngörülmüştü, ancak 2012’ye kadar gerçek hayatta gözlemlenememişti.
:::

---

## Genişleme 

> id: dilations
> section: dilations

Şimdiye kadar, sadece [[katı|eşleşik|görsel]] dönüşümlere baktık. _{span.reveal(when="blank-0")} Şimdiyse öyle olmayan bir dönüşüm hakkında kafa yoralım: [__genleşme__](gloss:dilation) bir şekli büyüterek ya da küçülterek onun boyutunu değiştirir._

---
> id: dilations-1

::: column.grow
Bütün genleşmelerin bir [__merkezi__](target:center) ve bir [__genleşme katsayısı__](->.scale-target) vardır.  Merkez, genleşme için referans noktasıdır ve genleşme faktörü de bize şeklin ne kadar büyüdüğünü ya da büzüştüğünü söyler.

Eğer [genleşme katsayısı](gloss:scale-factor) 0 ile 1 arasındaysa, sonuç, başlangıçtaki şekilden daha [[küçüktür|büyüktür]]. Eğer genleşme katsayısı 1’den büyük ise, sonuç, başlangıçtaki şekilden daha [[büyüktür|küçüktür]].
::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="C" cx=40 cy=35 target="center")

      circle(hidden name="a" x="point(140,55)")
      circle(hidden name="b" x="point(160,115)")
      circle(hidden name="c" x="point(60,130)")

      circle(hidden name="a1" x="a.subtract(C).scale(s).add(C)")
      circle(hidden name="b1" x="b.subtract(C).scale(s).add(C)")
      circle(hidden name="c1" x="c.subtract(C).scale(s).add(C)")

      path.fill.green(x="polygon(a,b,c)" label="A" label-class="white")
      path.fill.blue(x="polygon(a1,b1,c1)" label="A’" label-class="white")

      path.light.thin(x="segment(C,s<1?a:a1)")
      path.light.thin(x="segment(C,s<1?b:b1)")
      path.light.thin(x="segment(C,s<1?c:c1)")
    
{.text-center.scale-target} Genleşme katsayısı: ${s}{s|2|0,3,0.1}
:::

{.todo} YAKINDA – BENZERLİK VE GENİŞLEME ÜZERİNE BİRAZ DAHA

---

## Benzerlik

> section: similarity
> sectionStatus: dev

TODO
