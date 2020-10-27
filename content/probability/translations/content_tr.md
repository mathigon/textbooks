# Olasılık

## Giriş

    mixin barchart(data)
      - var max = 100/Math.max.apply(none, data.map(function(d) { return d[1] }))
      .barchart(style="width: " + data.length*50 + "px")
        for d in data
          .bar-wrap
            div(class="bar "+d[2], style="height: " + d[1]*max + "%")
        .axis
        for d in data
          .label= d[0]

    - var reds = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3]
    - var colour = function(x) { return reds.indexOf(x) >= 0 ? 'r' : 'b'; }

    mixin dice(n)
      svg(width=20, height=20)
        if n==1 || n==3 || n==5
          circle(r=2, cx=10, cy=10)
        if n==2 || n==3 || n==4 || n==5
          circle(r=2, cx=5, cy=5)
        if n==4 || n == 5
          circle(r=2, cx=5, cy=15)
        if n==4 || n == 5
          circle(r=2, cx=15, cy=5)
        if n==2 || n==3 || n==4 || n == 5
          circle(r=2, cx=15, cy=15)
        if n == 6
          circle(r=2, cx=5, cy=4)
          circle(r=2, cx=5, cy=10)
          circle(r=2, cx=5, cy=16)
          circle(r=2, cx=15, cy=4)
          circle(r=2, cx=15, cy=10)
          circle(r=2, cx=15, cy=16)

> id: intro
> section: introduction

Olasılıklar ve yatkınlıklar, hava durumu tahmininden oyunlara, sigortadan seçimlere, her yerde karşımıza çıkar. Fakat matematik tarihinde olasılık oldukça yeni bir fikir. Geometri ve cebir antik Yunan matematikçiler tarafından 2500 yıl öncesinden beri çalışılmasına karşılık, olasılık konsepti yalnızca 17. ve 18. Yüzyılda ortaya çıkmıştır.

::: column.grow
Bir hikayeye göre, zamanın iki büyük matematikçisi, [Blaise Pascal](bio:pascal) ve [Pierre de Fermat](bio:fermat) Paris’teki küçük bir kafede düzenli olarak buluşurlar.

Tartıştıkları zor matematik teorilerinden biraz uzaklaşmak için basit bir oyun oynarlarmış: Ardarda yazı tura atarlarmış - her _yazı_ Pascal için bir puan, her _tura_ da Fermat için bir puan. Üç yazı-tura atışından sonra daha az puanı olan hesabı ödermiş.
::: column(width=360)

    img(src="/resources/probability/images/paris.jpg" width=360 height=254)

:::

Bir gün ilk para atışından sonra Fermat’nın acilen gitmesi gerekmiş. Bu durumda hangisinin hesabı ödemesi gerektiğini ya da hesabı adil bölüşmenin bir yolu olup olmadığını düşünmüşler. Para _yazı_ gelmişmiş (Pascal için bir puan), o zaman belki de Fermat hesabın hepsini ödemeli diyebiliriz. Ancak küçük bir ihtimalle de olsa, eğer [[sıradaki iki atışta|sıradaki atışta]] _tura_ gelirse Fermat’nın hala kazanma şansı da varmış. 

---
> id: intro-1

Pascal ve Fermat oyunun devam edebileceği bütün durumları yazmaya karar vermişler:

::: column.grow(width=120)

    img(src="images/tr/coins-1.png" width=136 height=48 alt="YYY")

{.caption} Pascal kazanır
::: column.grow(width=120)

    img(src="images/tr/coins-2.png" width=136 height=48 alt="YYT")

{.caption} Pascal kazanır
::: column.grow(width=120)

    img(src="images/tr/coins-3.png" width=136 height=48 alt="YTY")

{.caption} Pascal kazanır
::: column.grow(width=120)

    img(src="images/tr/coins-4.png" width=136 height=48 alt="YTT")

{.caption} Fermat kazanır
:::

Dört olası durumun da ortaya çıkma ihtimali eşittir, ve Pascal bunlardan [[üç|dört|iki]] tanesinde kazanır._{span.reveal(when="blank-0")} Dolayısıyla Fermat hesabın 3/4ünü ve Pascal 1/4ünü ödemelidir._

---
> id: intro-2

Pascal ve Fermat olasılığın ilk önemli eşitliğini keşfetmişlerdir: Eğer bir deneyin eşit ihtimalli pek çok sonucu varsa, o zaman 

{.text-center} Bir olayın olasılığı =
`"Olayın oluşabilme sayısı"/"Olası tüm sonuçların sayısı"`.

Bizim örneğimizde, Pascal’ın oyunu kazanma olasılığı `3/4 = 0,75` ve Fermat’nın kazanma olasılığı `1/4 = 0,25`.

---

### Olasılıklar Nelerdir

> id: prob-line

__Olasılık__ belirli bir __olayın__ gerçekleşme ihtimalini tanımlayan 0 ile 1 arasında bir sayıdır. 0 olasılığı, bir şeyin _imkansız_ olduğu anlamına gelir; 1 olasılığı, bir şeyin _kesin_ olduğu anlamına gelir.

Örneğin, gerçek hayatta bir ejderha ile karşılaşmanız [[imkansızdır|kesindir]] ve güneşin yarın doğacağı [[kesindir|imkansızdır]]. Madeni bir paranın _tura_ gelme olasılığı tam olarak [[ortadadır|aynıdır]].

{.reveal(when="blank-0 blank-1 blank-2")} Atılan bir zarın 6 gelme olasılığı veya bir kart destesinden belirli bir simgenin çekilme olasılığı 0.5’ten daha [[azdır|fazladır]] –ki bu da muhtemel olmadığı anlamına gelir. İyi bir futbol takımının bir maçı kazanma veya bir trenin vaktinde varması olasılığı 0.5’ten daha [[fazladır|azdır]] –ki bu da muhtemel olduğu anlamına gelir.

    .p-line.clearfix
      img.reveal(src="images/line-1.png" width=140 height=140 style="width: 18.42%" when="blank-0" animation="pop" alt="dragon")
      img.reveal(src="images/line-2.png" width=140 height=140 style="width: 10.53%" when="blank-3" animation="pop" alt="dice")
      img.reveal(src="images/line-3.png" width=140 height=140 style="width: 15.79%" when="blank-3" animation="pop" delay="300" alt="cards")
      img.reveal(src="images/tr/line-4.png" width=140 height=140 style="width: 11.84%" when="blank-2" animation="pop" alt="coins")
      img.reveal(src="images/line-5.png" width=140 height=140 style="width: 11.84%" when="blank-4" animation="pop" alt="football")
      img.reveal(src="images/line-6.png" width=140 height=140 style="width: 17.11%" when="blank-4" animation="pop" delay="300" alt="train")
      img.reveal(src="images/line-7.png" width=140 height=140 style="width: 14.47%" when="blank-1" animation="pop" alt="sun")
      img(src="images/line-8.png" width=760 height=40 style="width: 100%")

---
> id: prob-line-1

İşte bazı olaylar: gerçekleşme ihtimali yüksek olandan az olana doğru sıralayın:

    x-sortable
      .item.md(data-index="3") Bir zar atıyorsunuz :game_die: ve 6 geliyor.
      .item.md(data-index="5") Penguenler :penguin: Kuzey Kutbu’nda yaşar.
      .item.md(data-index="1") Kasım ayında yağmur yağacak. :rain_cloud:
      .item.md(data-index="0") Bugün Çin’de bir bebek doğacak. :baby_bottle:
      .item.md(data-index="4") Bir piyango bileti alıyorsun ve büyük ikramiyeyi kazanıyorsun :tada:.
      .item.md(data-index="2") Yeni doğmuş bir bebek kız olacak. :girl:

Olasılıkları genelde üzerinde çok düşünmeden günlük hayatta sıklıkla kullanıyoruz.  Yarının yağmurlu olma olasılığı nedir? Otobüsü kaçırmam ne kadar muhtemeldir? Bu oyunu kazanma olasılığım nedir?

---
> id: prob-line-2

(Hilesiz) Madeni bir para atmanın iki muhtemel sonucu vardır; eşit olasılığa sahip olan _tura_ ve _yazı_. Yukarıdaki denkleme göre, atılan bir madeni paranın _tura_ gelme olasılığı `1/2` = 0,5 veya %50 olmalıdır.


Sadece sonuçlardan biri gerçekleşebilir olsa bile bu olasılığın  0 ile 1 _arasında_ olduğunu not edelim. Fakat olasılıkların gerçek sonuçlarla çok az ilgisi vardır: eğer madeni bir parayı çok kez atarsak sonuçların [[yaklaşık olarak yarısının|tam olarak yarısının|hepsinin|hiçbirinin]] tura olacağını biliyoruz – ama _tam olarak hangi_ atışların tura geleceğini tahmin etmemizin hiçbir yolu yok.

Çok az olasılıklı olaylar bile (örneğin  piyangoyu kazanma :tada:) _yine de gerçekleşebilir_ – ve gerçekten de her zaman _gerçekleşir_ (fakat katılan insanların çok küçük bir bölümü için).

---
> id: prob-line-3

Olasılıklar aynı zamanda her birimizin olayın ne kadarını bildiğine de bağlıdır. Örneğin, detaylı hava durumu verilerine sahip bir meteoroloj uzmanı, bugün yağmur yağma olasılığının %64.2 olduğunu söylerken, siz bu olasılığı %70 olarak tahmin edebilirsiniz.

Veya bir madeni para attığımı ve üstünü ellerimle kapattığımı varsayalım – yazı gelme olasılığı %50’dir. Şimdi sonuca bakıyorum ama size söylemiyorum. Ne olduğunu kesin olarak biliyorum ama sizin için olasılık [[hala %50|%100|%50 değil]].

---
> id: prob-line-4

Olasılıkları düşünmenin çok farklı yolları vardır ancak pratikte sıklıkla aynı sonucu verirler:

::: column(width=230 parent="padded-thin")

    img(src="images/tr/classical.png" width=240 height=75 alt="classical probability")

{.text-center} Tura atmanın __klasik__ olasılığı tura gelen _olası sonuçların_ oranıdır.
::: column(width=230)

    img(src="images/tr/frequentist.png" width=240 height=75 alt="frequentist probability")

{.text-center} __Sıklık__ olasılığı madeni parayı  _çok kez_ atarsak elde ettiğimiz tura sonuçlarının oranıdır.
::: column(width=230)


    img(src="images/tr/subjectivist.png" width=240 height=75 alt="subjectivist probability")

{.text-center} __Öznel__ olasılık bize paranın tura geleceğine ne kadar _inandığımızı_ söyler.
:::


Olasılıklar _tahmin etmek ve öngörmek_ için harika iken, _aslında_ ne olacağını hiçbir zaman söyleyemediğimizi hatırlayın.

Şimdi olasılığın bazı eğlenceli uygulamalarına bir göz atalım.

---

### Geleceği Öngörmek

> id: future

    p.md Aynı anda iki zar atıp gelen sayıları toplarsak [[2]] ile [[12]] arasında bir sayı elde ederiz. Ancak bu aralıktaki her sayıyı elde etme ihtimalimiz eşit değildir. Bazı sonuçları tek bir şekilde elde edebiliriz(#[span.dice.outline 12] elde etmek için #[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]] atmamız gerek), bazılarını ise bir çok şekilde elde edebiliriz (#[span.dice.outline 5] elde etmek için #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] ya da #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]] atabiliriz).

---
> id: future-1

Bu çizelge olası bütün sonuçları gösteriyor:

    table.dice-table
      tr
        td #[.dice.outline 2]
        td #[.dice.outline 3]
        td #[.dice.outline 4]
        td #[.dice.outline 5]
        td #[.dice.outline 6]
        td #[.dice.outline 7]
        td #[.dice.outline 8]
        td #[.dice.outline 9]
        td #[.dice.outline 10]
        td #[.dice.outline 11]
        td #[.dice.outline 12]
      tr
        td #[.dice #[+dice(1)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(6)]]
      tr
        td
        td #[.dice #[+dice(2)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(5)]]
        td
      tr
        td(colspan=2)
        td #[.dice #[+dice(3)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(4)]]
        td(colspan=2)
      tr
        td(colspan=3)
        td #[.dice #[+dice(4)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(3)]]
        td(colspan=3)
      tr
        td(colspan=4)
        td #[.dice #[+dice(5)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(2)]]
        td(colspan=4)
      tr
        td(colspan=5)
        td #[.dice #[+dice(6)]] #[.dice #[+dice(1)]]
        td(colspan=5)

İki zar attığımızda en çok gelebilen sonuç _{span.dice.outline}7_. Toplamın 7 ettiği [[6]] tane durum var, ve toplamda [[36]] durum var, _{span.reveal(when="blank-0 blank-1")}dolayısıyla toplamın 7 gelme ihtimali `6/36 = 0,1666`._

---
> id: future-2

En az bekleyebileceğimiz sonuçlar ise _{span.dice.outline}2_ ve _{span.dice.outline}12_,
Her birinin gelme ihtimali `1/36 = 0,0277`.

Tek bir yazı tura ya da zar atımının sonucunu önceden söylemek imkansızdır. Ancak olasılık teorisini kullanarak _pek çok_ zar atımının sonucunu çok isabetli bir şekilde öngörebiliriz.

Eğer 30 defa zar atarsak, yaklaşık `1/6 × 30 = 5` defa altı geleceğini biliyoruz. Eğer 300 defa atarsak, yaklaşık `1/6 × 300 = 50` defa altı gelir. Bu öngörüler deneyi tekrarladıkça daha isabetli hale gelirler.

---
> id: dice-simulation
> goals: roll
> title: Zar atmak

Bu animasyonda aynı anda bir çok defa “sanal” zar atabilir ve gelen sonuçları öngördüğümüz olasılıklarla karşılaştırabilirsiniz:

::: .box.f-red

#### Zar atmak

    .probTable.var(:html="probTable(d)")

Aynı anda ${d}{d|2|1,6,1} tane zar atıyoruz ve gelen sayıların _{span.dice(style="width: auto; padding: 0 4px;")} TOPLAMINI_ not ediyoruz. __{.m-green} yeşil çizgiler__ olasılık teorisinin öngördüğü, her sonucun gelme olasılığını temsil ediyor ve  __{.m-blue} mavi çizgiler__ bu bilgisayar deneyinde her bir sonucun ne sıklıkla elde edildiğini gösteriyor

    p.btn-row.no-voice
      button.btn Zar at
      button.btn Roll 100 defa zar at
      button.btn Roll 1000 defa zar at

:::

{.reveal(when="roll")} Dikkat ederseniz, gittikçe daha fazla zar atarsak, gözlemlediğimiz frekanslar, olasılık teorisi kullanarak öngördüğümüz frekanslara gittikçe yaklaşıyor. Bu prensibi bütün olasılık deneylerine uygulanabilir, buna __Büyük Sayılar Yasası__ diyoruz.

{.reveal(when="roll")} Benzer şekilde, aynı anda attığımız zar sayısını arttırırsak, olasılıkların biz çizgiden (tek zar) bir üçgene (iki zar) ve sonra “çan eğrisine” dönüştüğünü görebiliriz. Bu sonuç __Merkezi Limit Teoremi__ olarak geçer, ve çan şeklindeki bu eğriye __Normal Dağılım__ denir.


---


## Olasılık Ağaçları

> section: trees
> sectionStatus: dev

TODO


---


## Venn Diyagramları

> section: venn-diagrams
> sectionStatus: dev

TODO


---

## Şartlı olasılık

> section: conditional
> sectionStatus: dev

TODO


---


## Monty Hall Problemi

> id: monty-hall
> sectionBackground: dark gameshow
> goals: game
> section: monty-hall

Yeryüzündeki en müthiş oyun programına hoş geldiniz! Hayatınızda elinize bir kez geçecek bir fırsat ile karşı karşıyasınız: şu üç kapıdan birinin arkasında gizli duran muhteşem bir spor araba kazanma şansınız var. Ancaaaak, diğer iki kapının arkasında keçiler var. Seçiminizi yapın!

    .monty-hall.selectable
      .door-box: .door
      .door-box: .door
      .door-box: .door
      .floor

{.monty-reveal} Kararınızdan emin misiniz? Hala fikrinizi değiştirip başka bir kapı seçebilirsiniz...

    p.text-center.monty-reveal: button.btn.sure Eminim!
  
{.monty-reveal} Çok iyi bir seçim, ben de sizin için durumu biraz kolaylaştırayım. Arkasında keçi olan bir kapıyı sizin için açacağım, böylece kalan iki kapı arasından seçim yapabilirsiniz. Önceki tercihinizde ısrarcı mısınız, yoksa değiştirmek istiyor musunuz?

    p.text-center.monty-reveal
      button.btn.swap Israrcıyım!
      button.btn.swap Değiştirmek istiyorum!

{.monty-reveal} Tamam – bakalım ne durumdayız…

    p.text-center.monty-reveal: button.btn.show Kapıları açalım…

{.monty-reveal} _{span.monty-option}Görünüşe göre doğru tercihi yaptınız.
Tebrik ederim, harika bir spor araba kazandınız!_
_{span.monty-option.hidden} Üzgünüm– bu sefer sadece bir keçi kazanabildiniz. Ama sorun değil, yeniden oynayabilirsiniz!_


    p.text-center.monty-reveal: button.btn.reset Yeniden oyna

---
> id: monty-hall-1

Bu oyunu bir kaç defa oynarsanız, _{.reveal(when="blank-0")}ilk kapı açıldıktan sonra_ tercihinizi [[değiştirirseniz|değiştirmezseniz]] daha çok kazandığınızı göreceksiniz.

{.reveal(when="blank-0")} Ancak bu nasıl mümkün olabilir – arabanın iki kapının arkasında olması ihtimali eşit olmalı, değil mi?

---
> id: monty-hall-2

Bu durumun açıklaması hassas bir ayrıntıya dayanıyor. İlk kapı seçiminizin doğru olma ihtimali `1/3` ve yanlış olma ihtimali `2/3`.

    p.text-center: include svg/tr/monty-1.svg

---
> id: monty-hall-3

Programın sunucusu bir kapıyı açtığı zaman, yanılmış olma ihtimalimiz _hala_ `2/3`, ancak bu sefer bu ihtimal tek bir kapı üzerinde toplanıyor.
Demek ki seçimimizi değiştirirsek kazanma ihtimalimiz [[iki|üç|yarım]] katı olur.

    p.text-center: include svg/tr/monty-2.svg

---
> id: monty-hall-4

Bu durum içgüdülerimiz ile tam olarak örtüşmese de, doğru olduğunu kanıtlayabiliriz – bunun için olası bütün durumları listeleyelim:

    figure: img(src="images/tr/monty.png" width=694 height=468)

9 durumdan [[6]] tanesinde kazanmak için kapıyı değiştirmeliyiz. Bu da daha önce hesapladığımız gibi f `6/9 = 2/3` ihtimal verir.


---


## Doğum Günü Sorunu

> section: birthdays
> sectionStatus: dev

TODO


---


## Esas Rastgelelik

> id: quantum
> section: randomness

::: column.grow
Bu ders çoğunlukla bozuk para, zar ya da rulet çarkı gibi nesnelerin tamamen rastgele davrandığı varsayımı üzerine kuruldu. Fakat bu doğru değil - örneğin Edward Thrope’un ruletin sonucunu nasıl kestirdiğini görmüştük.

Bir bozuk para atalım: Yazı gelme ihtimali 0,5. Tam parayı atmadan önce paranın hangi yüzünün yukarı baktığını bilirsek, biraz daha iyi bir tahminde bulunabiliriz, 0,58 ya da 0,41 gibi. Ayrıca paranın ağırlığını ve boyutunu, açısını, konumunu ve elimizden ayrılırkenki hızını bilseydik, fizik kanunlarını - yer çekimi, sürtünme, hava direnci - kullanarak paranın hareketini modelleyebilir ve sonucu öngörebilirdik. Nihayetinde paranın her atomunun ve onları çevreleyen hava moleküllerinin konumlarını tam olarak bilseydik, bir bilgisayar simülasyonu yaparak sonucu isabetli olarak öngörebilirdik.
::: column(width=240)

    x-img(src="images/coins.jpg" width=240 height=343)

:::

---
> id: quantum1

Aslında şunu iddia edebiliriz: Yazı tura atmak hiç de rastgele değildir, _kaotiktir_. Yani etki eden fizik kanunları o kadar karmaşık ki, başlangıç koşullarındaki(hız, açı) en ufak bir değişiklik bile sonucu dramatik bir şekilde değiştirebilir. Para atmayı oyunlarda ve kumarda kullanmamızın sebebi rastgele olması değil, sonucunu tahmin etmesi inanılmaz derecede zor(pratikte imkansız) olduğu içindir. 

Aynı prensip, hayatta “rastgele” dediğimiz çoğu olay için geçerlidir, zar atma ve rulet çarkı dahil. Bunlar aslında _rastgele_ değil, sadece sonuçlarını isabetli olarak hesaplayabilmek için gerekli matematiksel araçlara sahip değiliz.

---
> id: radioactive
> goals: decay

Ancak _esas rastgelelik_ vardır - örneğin maddenin temellerinde. Bir parça radyoaktif madde, zamanla bozunan milyonlarca atomdan oluşur. Bunlar tehlikeli radyasyon ışınları yayarken daha küçük atomlara ayrışırlar.

::: column.grow

Fizikçiler bir atomun belli bir zaman aralığında bozunma olasılığını hesaplayabiliyorlar, ancak sıradaki bozunacak atomun _hangisi_ olacağını bilmek, atomun her özelliğini bilsek bile, imkansızdır.

Diğer bir yandan, bütün bir parçanın zaman içinde bozunma oranı o kadar düzenlidir ki, bunu binlerce yıl önce oluşmuş fosillerin yaşını hesaplamak için kullanabiliyoruz. Bu yöntemin adı _Karbon yaş tayini_ dir.

::: column(width=300)

    p: svg.radioactive(width=300 height=200 viewBox="0 0 300 200")
    p.text-center.btn-row: button.btn Bozunmayı başlat

:::


---
> id: radioactive-1

[Radyoaktif bozunma](gloss:radioactive), atomlar seviyesinde, atomların içinde etki gösteren çok küçük ölçekli kuvvetlerin etkisi sebebiyle ortaya çıkar. Bu etkiler [Kuantum mekaniği](gloss:quantum) aracılığı ile anlaşılabilir. Geçtiğimiz yüzyılda [Max Planck](bio:planck) ve [Paul Dirac](bio:dirac) gibi fizikçiler, temel parçacıkların akla sığmaz bir özelliğe sahip olduğunu keşfettiler: bu parçacıklar _aynı anda_ birden çok konumda bulunabiliyorlar. Belirli bir konumları yoktur, onun yerine, bu parçacıkların hangi konumda bulunmasının ne kadar olası olduğunu bize söyleyen bir olasılık dağılımına(_dalga fonksiyonu_ da denir) sahiptirler.

Bu akıl almaz özellik Kuantum bilgisayarlarınca kullanılıyor. Bildiğimiz bilgisayarlar aynı anda sadece tek bir işlem yapabilirler. Kuantum bilgisayarları aynı anda pek çok işlem yapmak için atom altı parçacıkların özelliklerini kullanabilirler- ve bu onları çok daha hızlı yapıyor.

    figure: x-img(lightbox src="images/quantum.jpg" width=760 height=390)

---
> id: radioactive-2

Kuantum mekaniğini tam olarak _anlayamayız_ ya da _açıklayamayız_ - sadece matematik teorilerimizin bunu öngördüğünü ve fiziksel ölçümlerimizin bunu desteklediğini kabullenebiliriz. İlginç kuantum etkileri sadece çok bir kaç atom gibi çok küçük ölçeklerde gözlemlendi, bizi günlük hayatımızda nasıl etkiledikleri henüz çok açık değil. Ancak doğanın _esas rastgeleliği_ ortaya koyduğunu bildiğimiz tek etki de kuantum mekaniğinde karşımıza çıkıyor.
