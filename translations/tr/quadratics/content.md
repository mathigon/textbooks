# İkinci dereceden denklemler

## Giriş

> id: intro
> section: introduction
> color: "#F6700F"
> level: Intermediate
> next: graph-theory

    img.text-wrap(src="images/skater-1.jpg" style="shape-outside: url(images/skater-1-mask.png)" width=300 height=393)

Kaykay üreten küçük bir şirket olan SkateSum’a hoş geldiniz. Mühendisler bir süredir yepyeni bir model olan SquareBoard üzerinde çalışıyordu. Nihayet bu model üretime hazır. Siz de kaykayların en ideal perakende satış fiyatını bulmak üzere görevlendirildiniz – görünüşe bakılırsa üretimin maliyeti ucuz değil:

* Kaykayların üretimi için gerekli olan aletler ve makinelerin maliyeti 5,000$. Buna genelde  __sabit gider__ denir.
* Buna ek olarak kaykay başına tahta, diğer materyaller ve çalışanların maaşı için 30$ harcanır. Bu da genelde __değişken gider__ olarak adlandırılır.


Diğer bir değişle, _n_  kaykay üretmenin __maliyet__i

{.text-center.no-voice} [maliyet](pill:orange) = _{x-equation(solution="5000+30×n")}_.

---
> id: demand

Yeni kaykayı bekleyen birçok insan var; ama eğer fiyatı çok yüksek olursa, o zaman daha az sayıda insan alır. Bu durumu, kaykayın fiyatını _x_-ekseninde ve kaykayı belirtilen fiyata göre almak isteyen insan sayısını (__talep__) da _y_-ekseninde gösterdiğimiz bir grafikle anlatabiliriz.

Aşağıdaki grafiklerin hangisi fiyat ve talep arasındaki ilişkiyi en iyi şekilde gösterir?

    x-picker.wrap
      .item(data-error="wrong-chart-1" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="fiyat,talep" crosshairs="no" labels="no" fn="0.6x + 2")
      .item(style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="fiyat,talep" crosshairs="no" labels="no" fn="8 - 0.6x")
      .item(data-error="wrong-chart-2" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="fiyat,talep" crosshairs="no" labels="no" fn="2.5 * sqrt(x)")

---
> id: demand-1

Yüksek fiyat daha az insanın kaykay alması demektir. Bu yüzden, fiyat yükseldikçe fonksiyonun grafiği aşağı doğru iner. İktisatçılar, biraz pazar araştırması yaptıktan sonra şu denklemi bulmuşlar:

{.text-center} [talep](pill:teal) = 2800 – 15 × [fiyat](pill:purple)

Mesela, eğer bir kaykayın fiyatı 80$ olursa, talep de [[1600]] tane olacaktır.

---
> id: intro4

    //- img.text-wrap.s-hide(src="images/skater-3.jpg" style="shape-outside: url(images/skater-3-mask.png)" width=280 height=480)

Şirketimizin  __ciro__su toplamda elde edilen geliri ifade eder. Ciroyu, sattığımız kaykay sayısı (_talep_) ile bir kaykayın fiyatını çarptığımızda elde ederiz:

{.text-center} [ciro](pill:green) = [talep](pill:teal) × [fiyat](pill:purple)

Fakat bizim asıl ilgilendiğimiz şey __kâr__; kaykayları satarak elde ettiğimiz toplam gelirden maliyeti çıkardığımızda kalan miktar. Sadece kaykayın [fiyat](pill:purple)ını kullanarak
şirketin [kâr](pill:yellow)ını gösteren bir denklem elde edebilir misiniz?


    x-equation-system(steps="talep*fiyat-(5000 + 30*talep) | (2800-15*fiyat)*fiyat-5000-30*(2800-15*fiyat)" hints="intro-1|intro-2|intro-3")
      table
        tr
          td: em.pill.yellow kâr
          td= '='
          td #[em.pill.green ciro] − #[em.pill.orange maliyet]
        tr
          td
          td= '='
          td: x-equation(solution="-15 × fiyat^2 + 3250 × fiyat - 89000" substitutions="maliyet: 89000 - 450 fiyat | talep: 2800 - 15 fiyat | ciro: 2800 fiyat - 15 fiyat^2")

---
> id: intro-table

Dikkatle bakarsanız bu denklemde [fiyat](pill:purple) ile birlikte [`fiyat^2`](pill:purple) ifadesini de görüyoruz. Bu tarz denklemlere [__İkinci Dereceden Denklemler__](gloss:quadratic-equation),  denir. (Bu denklemlerin ingilizce ismi olan “quadratic equations” latincede ‘kare’ anlamına gelen “quadratus” kelimesinden gelir.)

En yüksek kârı nasıl elde edeceğimizi bulmak için birkaç farklı fiyat kullanarak kârımızı hesaplayalım:

::: .overflow-wrap.overflow-table

|     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [fiyat/\$](pill:purple) | 20   | 40   | 60  | 80  | 100 | 120 | 140 | 160 | 180 |
| [kâr/\$](pill:yellow)   | –30k | 17k | [[52]]k | [[75]]k | [[86]]k | [[85]]k | _{span.reveal(when="blank-3")}72k_ | _{span.reveal(when="blank-3" delay=400)}47k_ | _{span.reveal(when="blank-3" delay=800)}10k_ |
{.grid}

:::

---
> id: intro-chart

Bu noktaların hepsini koordinat sisteminde gösterebiliriz ve bir doğru ile bunları birleştirebiliriz:

    x-coordinate-system(width=640 height=400 x-axis="-20,200,20" y-axis="-100000,100000,20000" axis-names="fiyat/$,kâr/$" padding=10 animate)
      .region.r1(style="top: 48%; height: 46%; left: 6%; width: 6%;")
      .region.r2(style="top: 26%; height: 40%; left: 79%; width: 21%;")

Hatırlarsanız [lineer fonksiyon](gloss:linear-function) un grafiği her zaman bir doğru şeklindedir.
Ama yukarıda gördüğünüz gibi, [ikinci dereceden fonksiyon](gloss:quadratic-function)un grafiği eğriseldir. Bu fonksiyonların özel bir ismi bile vardır: [__Parabol__](gloss:parabola).


Eğer [fiyat 0](->.r1) ise, o zaman kârımız negatif olur çünkü pahalı kaykayları ücretsiz veriyoruz. Fiyat arttıkça kârımız da artar. Fakat, eğer kaykaylar  [çok pahalı](->.r2) olursa,
o zaman da insanlar artık onları satın almak istemez ve kârımız tekrar düşer.


En fazla kârı, kaykayları yaklaşık olarak
\[[108 ± 10]]$ a satarak elde edebiliriz.


---
> id: intro-final

    figure: x-img(src="images/skater-2.jpg" alt="Skateboarder" width=400 height=352)

Gerçek hayatta şirketlerin kârları için belli bir denklem bulmaları oldukça zordur. Ayrıca, böyle bir denklem bulmak, bu örnekten çok daha karmaşık olabilir.

Yine de ikinci dereceden denklemler, doğanın her yerinde, mühendislik ve iktisadın her alanında karşımıza çıkar. Bu derste ikinci dereceden denklemleri çözmek ve ikinci dereceden fonksiyonların grafiklerini anlamak için farklı yöntemler öğreneceksiniz.


--------------------------------------------------------------------------------


## Binomial Expressions

> section: binomials
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Solving Quadratic Equations

> section: solving
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## The Quadratic Formula

> section: formula
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Graphing Quadratics

> sectionStatus: dev
> section: graphs

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Projectile Motion

> section: projectiles
> sectionStatus: dev
> sectionBackground: projectiles

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## More Applications

> section: applications
> sectionStatus: dev

{.todo} Coming Soon!
