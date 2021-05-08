# Bölünebilme ve Asallar

## Çarpanlar ve Katlar

> section: factors-and-multiples
> id: divisibility1
> color: "#1AA845"
> level: Foundations

Şimdiye kadar tamsayılarda toplama, çıkarma ve çarpma işlemlerinde rahattınız. Bölme biraz daha farklıdır, çünkü herhangi bir tamsayıyı her zaman başka tamsayılar ile bölemezsiniz. Örneğin 17 bölü 3, bir tamsayı değildir - 5 ile 6 arasında bir yerdedir. Kalan olarak 2 verir veya cevabı ondalıklı sayı (5,66) olarak ifade ederiz.

    .row.padded
      .grow
        include svg/divisibility-1.svg
        p.caption 12, 3'e bölünür
      .grow
        include svg/divisibility-2.svg
        p.caption 10, 4'e bölünemez

__{.red}A__ sayısını bir __{.blue}B__ sayısına bölebilirseniz, kalansız olarak, __{.blue}B__'nin __{.red}A__ sayısının __faktörü__ (veya __böleni__) olduğunu ve __{.red}A__'nın __{.blue}B__'nin bir __katı__ olduğunu söyleriz. Genellikle __{.blue}B__|__{.red}A__ şeklinde yazarız, dikey çizgi _“böler”_ anlamına gelir.

Örneğin, __{.green}7__ × 3 = __{.orange}21__, yani __{.green}7__, __{.orange}21__'in bir
[[çarpanıdır|katıdır]]; __{.orange}21__, __{.green}7__'nin [[katıdır|çarpanıdır]]
ve __{.green}7__|__{.orange}21__.

---
> id: divisibility-game

Bu kısa oyunda hangi sayıların faktör veya kat olduğunu mümkün olduğunca hızlı bir şekilde belirlemelisiniz. Başlamak için [başlat butonuna](->#divisibility-game_.toggle) tıklayın.

::: .box.f-blue.no-padding
#### Çarpan ve Kat Yarışması

    x-gameplay
      .factors-row
        .factor-number ${x}
        | sayısı
        .factor-number ${y}
        |'nin
        .factor-value
          .factor-bubble: .btn.btn-blue çarpanı
          .factor-bubble: .btn.btn-blue katı
          .factor-bubble: .btn.btn-blue hiçbir şeyi
        | dir.

:::

---
> id: factors

Bir tamsayının _tüm_ bölenlerini bulmak genellikle yararlıdır. Örneğin, 60'ın bölenleri 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 ve 60'tır.

Tabii ki, 60'a kadar olan tüm numaraları bölen olup olmadıklarını kontrol etmek istemeyiz. Bunun yerine, bölenlerin gerçeğine dayanan basit bir teknik var. Bölenler her zaman [[ikili|üçlü|yarım]] olarak görünür.

---
> id: factors1

60 sayısını incelerken 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 = 6 × 10 eşitliklerine sahibiz. Veya farklı bir gösterimde,

    include mixins
    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

To find all divisors of a number we simply start at both ends of this list,
until we meet in the middle.

Bir sayının tüm bölenlerini bulmak için bu listenin iki ucundan ortada buluşana kadar ilerliyoruz.

---
> id: factors2

    include mixins
    x-slideshow
      .stage(slot="stage")
        +divisor-table([1, 2, 3, 6, 7, 14, 21, 42], [3, 2, 1, 0])
      .legend(slot="legend") Örneğin, 42 sayısının ilk bölen ikilisi açıkça 1 ve 42'dir ve arada bolca boşluk bırakarak yazalım.
      .legend(slot="legend") Baştaki 1'den sonra, 2'nin 42'yi bölüp bölmediğini kontrol edelim. 2, 42'yi böler 42 ÷ 2 = 21 ve böylece bir ikili daha elde ettik.
      .legend(slot="legend") Sonra, 3'ün 42'yi bölüp bölmediğine bakalım. Böler ve ona karşılık gelen ikili 42 ÷ 3 = 14.
      .legend(slot="legend") Şimdi de 4'ün 42'yi bölüp bölmediğine bakalım. Bölmez, devam ediyoruz.
      .legend(slot="legend") 5 de 42'yi bölmez, devam.
      .legend(slot="legend") 6, 42'yi böler. Karşılık gelen çift 42 ÷ 6 = 7. 7 ile 42 arasındaki tüm sayıları denemek zorunda kalmadan, sadece birkaç denemeden sonra ortasında nasıl buluştuğumuza dikkat edelim.

Bu yöntemle ilgili tek özel durum kare sayılar içindir: Bu durumda, ortada sadece 64 = 8 × 8 gibi yegane bir sayıda karşılaşacaksınız.


---

## Bölünebilme Kuralları

> id: divisibility2
> section: rules

Bir sayının başka sayılar tarafından bölünebilir olup olmadığını kontrol etmeyi şaşırtıcı bir şekilde kolaylaştıran birkaç farklı kural vardır. Bu bölümde bunlardan bazılarına bir göz atacağız...


### 2'ye ve 5'e bölünebilme

Her sayı 1 ile bölünür. Bir sayının 2 ile bölünülürlüğünü belirlemek için, basitçe şunu kontrol edebiliriz. sayının birler basamağı 0, 2, 4, 6 veya 8 ise 2'ye bölünür.

    include mixins
    +grid(30)

---
> id: divisibility5

Bir sayının 5'e bölünebilir olup olmadığını görmek için benzer şekilde sadece birler basamağının 0 veya 5 olduğunu kontrol etmeliyiz:

    include mixins
    +grid(30)

---
> id: divisibility5a

Bu kuralların 2 ve 5 için bu kadar basit olmasının nedeni, sayı sistemimizle ilgilidir. Sayı sistemimizin tabanı 10'dur, yani bir sayıdaki her basamaka bir sağındaki basamağa göre 10 kat daha değerlidir. Örnek olarak 6382 sayısını ele alalım,

    table.base-10.base-10-fixed
      tr.base-10-large
        td: strong 6
        td: strong 3
        td: strong 8
        td: strong 2
      tr.caption
        td: | =6000
        td: | =300
        td: | =80
        td: | =2

Böylece bir sayının son basamağını diğer tüm basamaklardan ayırabiliriz:

    table.table-tiny
      tr.base-10-large
        td #[strong.m-red abc]#[strong.m-green d]
        td: | =
        td #[strong.m-red abc × 10]
        td +
        td #[strong.m-green d]
      tr.caption
        td #[strong.m-red 638]#[strong.m-green 2]
        td: | =
        td #[strong.m-red 638 × 10]
        td +
        td #[strong.m-green 2]

Hem 2 hem de 5, 10'un çarpanıdır, yani __{.m-red}abc × 10__ sayısını __{.m-red}a__, __{.m-red}b__ ve __{.m-red}c__ sayılarının değerleri ne olursa olsun [[her zaman bölerler|asla bölmezler|bazen bölerler]]. Bu nedenle sadece son basamağı kontrol etmeliyiz: __{.m-green}d__ sayısı 2 ile bölünebilirse [[sayının tamamı da|abc de]] 2 ile bölünebilir. Eğer __{.m-green}d__, 5 ile bölünebilirse, o zaman sayının tamamı 5 ile bölünebilir.

---
> id: divisibility4b

En kolay olanı 10 için bölünebilirme kuralıdır: Sadece [[birler basamağının 0|ilk basamağın 1|birler basamağının çift]] olup olmadığını kontrol etmeliyiz.

---
> id: divisibility4

### 4'e ve 8'e Bölünebilme

Maalesef 4, 10'a bölünmüyor, bu yüzden sadece birler basamağına bakamayız – ama 4, 100'ü bölüyor, bu yüzden kuralımızı biraz değiştirmek zorundayız. Şimdi __{.m-red}ab__**{.m-green}cd** = __{.m-red}ab × 100__ + __{.m-green}cd__ yazıyoruz. 4'ün her zaman __{.m-red}ab × 100__'ü böleceğini biliyoruz, bu yüzden sayının 4'e bölünebilirliğini kontrol etmek için son [[2]] basamağa bakmalıyız.

Örneğin __{.m-green}24__ sayısı 4 ile bölünebilir, o halde __{.m-red}2735__**{.m-green}24** sayısı 4 ile [[bölünebilir|bölünemez]]. __{.m-green}18__ 4 ile bölünemez, yani __{.m-red}1947__**{.m-green}18** sayısı 4 ile [[bölünemez|bölünebilir]].

---
> id: divisibility4a

8 için bölünebilirlik kuralları biraz daha zorlaşıyor, çünkü 100 sayısı 8 ile bölünemez. Bunun yerine [[1000|800|108]]'e çıkmamız ve bir sayının son [[3]] basamağına bakmamız gerekiyor.

Örneğin, __{.m-green}120__, 8'e bölünür o halde
__{.m-red}271__**{.m-green}120** de 8'e bölünür.

---
> id: divisibility3a

### 3'e ve 9'a Bölünebilme

3 için bölünebilme kuralı daha zordur. 3, 10'u bölmez ve ayrıca 100 veya 1000'i veya 10'un herhangi bir daha büyük kuvvetini de bölmez. Sadece bir sayının son birkaç basamağına bakmak burada işe yaramıyor.

Bunun yerine bir sayının __basamak değerlerinin toplamını__  kullanmamız gerekiyor, ki bu sadece her basamağın değerlerinin toplamıdır. Örneğin, ${13×n+123}{n|3|0,20,1} sayısının basamak değerlerinin toplamı ${digitSumString(123+13×n)} = ${digitSum(123+13×n)}'dir ve 3524'ün basamak değerleri toplamı [[14]]'tür.

---
> id: divisibility3b

    include mixins
    +grid(40, function(n) { if (!(n % 3)) { var s = '' + n; return +s[0] + (+s[1] || 0); } })

Burada üçün katları olan tüm sayıları vurguladık. Rakam toplamlarının her zaman [[3'ün katı| 0 ya da 3|tek sayı]] olduğunu görebiliriz.

{.reveal(when="blank-0")} Bu nedenle, herhangi bir sayının 3'e bölünebilir olup olmadığını belirlemek için, sadece basamak değerleri toplamını hesaplamamız ve sonucun 3 ile bölünebilir olup olmadığını kontrol etmemiz gerekiyor.

---
> id: divisibility9

Şimdi, 9'un katlarına bakalım:

    .number-grid
      for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .number-cell.yellow= x*9
          .number-badge= (x == 11 ? 18 : 9)

9 ile bölünebilen tüm sayıların basamak değerleri toplamının 9 ile bölünebildiğini görüyoruz. _{span.reveal(when="blank-0")}Örneğin, 4752 sayısının basamak değerleri toplamı [[18]]'dir, o zaman 4752 sayısı 9 ile [[bölünür|bölünemez]]._

---
> id: divisibility9a


Tabii ki, 3 ve 9'a bölünebilen sayılar için bu merak uyandıran kalıpların bir nedeni olmalı - üstelik 10 sayı sistemimizle olması gerekiyor. Gördüğümüz gibi, __{.m-red}6__**{.m-blue}3**__{.m-green}8__**{.m-yellow}4** sayısını yazmak şu anlama geliyor

{.text-center} __{.m-red}6 × 1000__ + __{.m-blue}3 × 100__ + __{.m-green}8 × 10__ + __{.m-yellow}4__.

Bu terimlerin her birini ikiye ayırabiliriz:

{.text-center} __{.m-red}*{span.digit-sum-else}6 × 999* + *{span.digit-sum-is}6*__ +
__{.m-blue}*{span.digit-sum-else}3 × 99* + *{span.digit-sum-is}3*__ +
__{.m-green}*{span.digit-sum-else}8 × 9* + *{span.digit-sum-is}8*__ +
__{.m-yellow.digit-sum-is}4__.

Tabii ki, __{.m-green}9__, __{.m-blue}99__, __{.m-red}999__, ve devamı her zaman 3'e (veya  9'a) bölünebilir. Geriye kalan sadece kalanların da 3'e (veya 9'a) bölünebilir olduğunu kontrol etmektir:

{.text-center} __{.m-red}6__ + __{.m-blue}3__ + __{.m-green}8__ + __{.m-yellow}4__

Bu sadece basamak değerleri toplamı olur! Eğer [{.no-margins}basamak değerleri toplamı](->.digit-sum-is)
3'ün katıysa ve biz [{.no-margins}diğer her şeyin](->.digit-sum-else)
3'ün katı olduğunu biliyorsak, o zaman toplam da 3'ün katıdır.

---
> id: divisibility6
> goals: btn2 btn3

### 6'ya Bölünebilme

6 sayısını atladık - ancak bu zamana kadar çok sıkı bir çalışma yaptık.
6 = 2 × 3 olduğunu anımsayalım.

    include mixins
    +grid(40)
    p.btn-row.text-center(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") 2'nin katlarını göster
      button.btn.btn-small(data-display="visibility") 3'ün katlarını göster

Bir sayının 6 ile bölünebilir olup olmadığını kontrol etmek için 2 [[ve|veya]] 3 ile bölünebilir olduğunu kontrol etmeliyiz. Bunun 6 için işe yaradığını görüyoruz fakat bunun kesinlikle iki sayının çarpımı olan _herhangi_ bir sayı da işe yarayacağını düşünmeyin. Devamı daha sonra…


---

## Asal sayılar

> id: primes
> section: primes

Bölen çiftleri hesaplarken, bir sayı ilk bölen çifti hariç başka bölen çifte sahip olmayabilir. Örnek olarak 13'ü ele alalım – bölenleri sadece 1 ve kendisi (13). Bu özel sayılar __Asal sayılar__ olarak adlandırılır. Onları daha küçük sayıların çarpımı şeklinde yazamayız ki bu onları bir nevi “sayıların atomları” yapar.

1'in kendisi bir asal sayı _olmadığını_ unutmayın, bu yüzden ilk birkaç asal sayı şunlardır: 2, 3, 5, 7, 11, 13,…



---
> id: primes1

Asal olmayan herhangi bir sayı asal sayıların çarpımı olarak yazılabilir:
tüm çarpanları asal olana olana kadar sayıları daha fazla parçaya bölmeye devam edelim. Örneğin,

    table.table-tiny
      tr
        td(colspan=4)
        td: .number-ball.legs.b.a 84
      tr
        td(colspan=2)
        td: .number-ball.blue 2
        td(colspan=3) ×
        td: .number-ball.blue.legs.b 42
      tr
        td(colspan=4)
        td: .number-ball.green 2
        td(colspan=2) ×
        td: .number-ball.green.legs(style="margin: 0 -10px") 21
      tr.td-border-bottom
        td(colspan=6)
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7
      tr
        td: .number-ball 84
        td: | =
        td: .number-ball.blue 2
        td ×
        td: .number-ball.green 2
        td ×
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7

Şimdi 2, 3 ve 7 asal sayılardır ve daha fazla bölünemezler. 2 × 2 × 3 × 7 çarpımı, 84’ün __asal çarpanlarına ayrımı__ olarak adlandırılır ve 2, 3 ve 7 onun __asal çarpanlarıdır__. Asal çarpanlarına ayırma işleminde bazı asalların, bu örnekteki 2 gibi, birden çok defa görünebileceğini unutmayın.

Her tamsayı bir asal çarpan ayrımına sahiptir ve hiçbir farklı iki tamsayı aynı asal çarpan ayrımına sahip değildir. Ayrıca, herhangi bir sayıyı asal çarpanların çarpımı şeklinde yazmanın tek bir yolu vardır – tabi ki asal çarpanların çarpımdaki sıralamasını değiştirmeyi saymıyoruz. Buna __Aritmetiğin Temel Teoremi__ (ATT) denir.

ATT'ni kullanımı matematikteki birçok problemin çözümünü çok daha kolaylaştırır: Sayıyı, asal çarpanlarına ayırır, problemi her bir asal için çözeriz ki bu genellikle çok daha kolaydır ve bulduğumuz sonuçları birleştirirerek ana problemin sonucunu elde ederiz.


---
> id: eratosthenes

### Eratosthenes'in Kalburu

Bir sayının asal olup olmadığını belirlemek oldukça zor oldu: sayının her zaman _tüm_ asal çarpanları bulmak zorundayız, bu da sayı büyüdükçe daha da zorlaşıyor. Bunun yerine, Yunan matematikçi [Eratosthenes of Cyrene](bio:eratosthenes) 100'e kadar olan tüm asal sayıları bulmak için basit bir algoritma geliştirdi: __Eratosthenes'in Kalburu__.

    include mixins
    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") Önce 100 kadar tüm sayıları yazmalıyız.
      .legend(slot="legend") 1'in asal olmadığını biliyoruz, bu yüzden silelim.
      .legend(slot="legend") En küçük asal sayı #[strong.m-red 2]'dir. 2'nin katı olan herhangi bir sayı asal olamaz çünkü 2 o sayının bir çarpanıdır. Böylece 2'nin katı olan her sayının üzerini çizebiliriz.
      .legend(slot="legend") Listemizdeki bir sonraki sayı #[strong.m-blue 3]'tür – yine bir asal sayı. 3'ün katı olan hiçbir sayı asal olamaz çünkü 3 hepsinin bir çarpanıdır. Böylece 3'ün katı olanların tamamının üzerini çizebiliriz.
      .legend(slot="legend") Bir sonraki sayı 4, ki zaten üzerini çizmiştik, o halde #[strong.m-green 5]'e ilerleyelim: 5 asal bir sayıdır ve 5'in katlarının üzerini çizelim.
      .legend.md(slot="legend") Bir sonraki asal sayı [[7]] olmalı, 6'nin üzeri çizildiği için. Bir kez daha, bütün katlarının üzerini çizdik.
      .legend.md(slot="legend") Bir sonraki asal sayı [[11]] olmalı. Dikkat edelim, nasıl olduysa onun katları [[nın üzerini çizdik|3'ün katları]]. Aynı işlemler geriye kalan bütün sayılar için geçerli. Böylece kalan tüm sayılar asal olmalı.

Şimdi, toplamda 100'den küçük [[25]] asal sayı olduğunu söyleyebiliriz.

---
> id: primes3

### Kaç tane Asal Sayı var?

::: column.grow
Tabii ki Eratosthenes'in Kalburunu daha büyük asal sayıları bulmak için kullanabiliriz. 100 ile 200 arasında 21 asal sayı var, 200 ile 300 arasında 16 asal sayı var, 400 ile 500 arasında 17 ve yalnızca 10.000 ile 10.100 arasında sadece 11 asal var.

Asal sayılar gittikçe daha fazla yayılmaya devam ediyor gibi görünüyor, ama hiç duruyorlar mı?
Bir _en büyük_ veya bir _en küçük_ asal sayı var mı?

İlk olarak, Antik Yunan matematikçi [Öklid](bio:euclid) asal sayıların sonsuzluğunu aşağıdaki argümanı kullanarak kanıtladı:
::: column(width=220)

    x-img(lightbox width=220 height=300 src="images/euclid.jpg")

:::

    ol.proof
      li Sonlu sayıda asal olduğunu varsayalım.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li Bütün asalları çarpalım ve #[em N] olarak adlandıracağımız çok büyük bir sayı elde edelim.
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li #[em N] + 1 sayısını düşünelim. #[em N] sayısını bölen herhangi bir asal sayı #[em N] + 1 sayısını bölemez. Bu zamana bulduğumuz tüm asal sayılar #[em N]'i böldüğüne göre hiçbiri #[em N] + 1 sayısını bölemez.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md [Aritmetiğin Temel Teoremi](gloss:fta)'nden biliyoruz ki #[em N] + 1 sayısının asal çarpanları olmalı. Ya #[em N] + 1 sayısının kendisi asaldır ya da #[em N] + 1 sayısını bölen #[em P’] olarak adlandıracağımız yeni bir asal sayı vardır.
        .text-center #[em.number-ball.green P’] #[span.divides] #[em.number-ball N] + 1
      li İki durumda da baştaki listemizde olmayan yeni bir asal bulduk – fakat biz #[em bütün] asalların listemizde olduğunu kabul etmiştik.
      li Belli ki bir şeyler ters gitti! Ama #[span.proof-step 2]–#[span.proof-step 4] adımlar arası geçerli olduğunu gördüğümüze göre, yanlış olma ihtimali olan tek yer bizim #[span.proof-step 1]. adımdaki varsayımımız. Bu da bize asal sayıların sonsuz olduğunu söylüyor.


---
> id: primes4

Öklid’in açıklaması matematik tarihindeki ilk resmi __kanıt__ -  örneklerinden biridir.
matematiksel __proof__ - mantıksa bir argümanın mutlaka doğru olduğunu gösteren. Bu örnek genellikle __çelişki ile ispat__ olarak adlandırılır: Bir varsayımla başlarız, imkansız bir şeyi çıkarırız ve böylece bizim varsayımımızın yanlış olduğunu görürüz.

Euclid’s explanation is one of the first examples in history of a formal
mathematical __proof__ – a logical argument that shows a statement must
definitely be true. This example is often called __proof by contradiction__: we
start with an assumption, deduce something impossible, and thus know that our
assumption must be incorrect.

---

## Asalların Dağılımı

> id: prime-test
> goals: calculator
> section: distribution-of-primes

Bir sayının asal olup olmadığını kontrol etmenin en kolay yolu onu kendisinden küçük tüm tamsayılara bölmeye çalışmaktır. Bilgisayarlar bunu çok hızlı ve verimli bir şekilde yapabilir. _Çok büyük_ sayılar, yüzlerce basamaklı, için daha verimli algoritmalar da vardır. Bunlardan bazıları bir sayının _neredeyse kesinlikle_ asal olup olmadığını belirlemek için olasılığı kullanır.

İşte bir sayının asal olup olmadığını kontrol eden bir hesap makinesi:

    .calculator
      h3 Asal Kontrol Eder
      input(type="number" min="2")
      p.result.var ${result}

---
> id: prime-test-1

::: column.grow

Tarih boyunca insanlar büyük ve daha büyük asal sayıları bulmaya çalıştılar. 1460'ta, bilinen en büyük asal ayı 131,071'ti. 1772'te [Leonard Euler](bio:euler) 2,147,483,647 sayısının da asal olduğunu gösterdi.

Bilgisayarların da 20. yüzyılda gelişmesiyle büyük asal sayıları hesaplamak daha kolay hale geldi. Şu anda bilinen en büyük asal sayı Aralık 2018'de bulundu ve 24,862,048 basamaklı. Sayıyı yazmak için 800 sayfa kağıda ihtiyacımız var.

::: column(width=300)

    img(src="images/network.jpg" width=300 height=200)

{.caption} GIMPS (_Great Internet Mersenne Prime Search_) Mersenne asal sayılarını aramak için özgürce kullanılabilen bir yazılım kullanan gönüllülerin ortak bir projesidir.

:::

---
> id: prime-generator
> goals: calculator

Bu büyük asal sayıları hesaplamak zaman kaybı gibi görünebilir ancak daha sonra bu derste bilgisayarların büyük asal sayıları gerçek hayattaki çeşitli uygulamalarını öğreneceğiz.

Burada, girdiğiniz sayı kadar basamaklı kendi asal sayılarınızı oluşturabilirsiniz:

Here you can generate your own prime numbers with a given number of digits:

    .calculator
      h3 Asal Sayı Üretici
      p.md Basamak sayısı: ${d}{d|6|2,16,1}
      p(style="margin: 10px 0"): button.btn.btn-white Üret
      p.result.var ${result}

---
> id: ulam



### Ulam Spirali

Polonyalı matematikçi [Stanisław Ulam](bio:ulam), 1963'te uzun ve sıkıcı bir toplantı esnasında karalama yaparken büyük asal sayıların havalı bir dağılımını gösteren yöntem buldu.

    .number-grid.ulam-grid
      for x in [37, 36, 35, 34, 33, 32, 31]
        .number-cell(data-display="visibility")= x
      for x in [38, 17, 16, 15, 14, 13, 30]
        .number-cell(data-display="visibility")= x
      for x in [39, 18,  5,  4,  3, 12, 29]
        .number-cell(data-display="visibility")= x
      for x in [40, 19,  6,  1,  2, 11, 28]
        .number-cell(data-display="visibility")= x
      for x in [41, 20,  7,  8,  9, 10, 27]
        .number-cell(data-display="visibility")= x
      for x in [42, 21, 22, 23, 24, 25, 26]
        .number-cell(data-display="visibility")= x
      for x in [43, 44, 45, 46, 47, 48, 49]
        .number-cell(data-display="visibility")= x

Bütün tam sayıları 1'i ortaya yazacak şekilde dikdörtgen bir ızgaraya spiraller halinde dönerek yazıyoruz ve asal olanları vurguluyoruz.

---
> id: ulam1

Şu ana kadar Ulam Spirali çok heyecan verici görünmüyor. Eğer biraz uzaklaşırsak ilginç modeller ortaya çıkıyor. 160.000'e kadar olan asallar:

    figure: img(src="images/ulam.png" width=399 height=399)

::: column.grow
Rather than appearing randomly, as one might expect, it seems that certain
diagonals are much more popular with primes than others. This creates a curious
“plaid” pattern.

_{.lgrey}It turns out that these diagonals all correspond to certain quadratic
equations which seem to generate prime numbers more often than average. However
it is unknown why that would be the case…_
::: column(width=200)

    x-img(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg")

{.caption} Scientific American'ın Mart 1964 sayısının kapağı
:::

---
> id: goldbach1
> goals: calculator

### Goldbach Sanısı

1742'de Alman matematikçi [Christian Goldbach](bio:goldbach) merak uyandıran bir keşif yaptı: o 2 dışındaki tüm tam sayıların iki asal sayının toplamı olarak yazılabildiğini farketti. Mesela, 8 = 5 + 3 ve 24 = 13 + 11. Bu oldukça şaşırtıcıdır çünkü asal sayılar çarpma ve çarpanlarla tanımlanır – ve toplamayala pek ilgisi olmamalıdır.

    .calculator
      h3 Goldbach Hesap Makinesi
      p İki asal sayının toplamı olarak yazılmasını istediğiniz #[br]herhangi bir çift tam sayı seçin.
      input(type="number", min=4, step=2)
      p.result.var ${result}

Goldbach, gözlemini ünlü matematikçi [Leonhard Euler](bio:euler)'e ilgili yazmıştır fakat ikisi de bunu ispatlayamamıştır. Böylece __Goldbach Sanısı__ olarak bilinir hale geldi.

Bilgisayarlar Goldbach Sanısı'nın 4 × 10<sup>18</sup>'e kadar olan tüm çift sayılar için kontrol etti fakat matematikçiler hala _her_ çift sayı için geçerli olan bir kanıt bulamadı. Bu ikisi çok farklı çünkü sonsuz sayıda tam sayı vardır ve hepsini kontrol edemeyiz.

Goldbach Sanısı'nın sadeliği, onu matematikteki çözülemeyen problemlerden en ünlülerinden biri haline getirdi.

---
> id: twin-primes

### İkiz Asallar

Asal sayıların büyüdükçe daha fazla yayıldığını görmüştük. Ama onlar her zaman tamamen rastgele olarak ortaya çıkıyorlar ve şans eseri iki tanesini yan yana buluyoruz: bunlara __İkiz Asallar__ adını veriyoruz.

    p.text-center
      span.twin
        span.number-ball 3
        span.number-ball 5
      | ,
      span.twin
        span.number-ball.blue 11
        span.number-ball.blue 13
      | ,
      span.twin
        span.number-ball.green 41
        span.number-ball.green 43
      | ,
      span.twin
        span.number-ball.yellow 101
        span.number-ball.yellow 103
      | ,
      span.twin
        span.number-ball 2027
        span.number-ball 2029
      | ,
      span.twin
        span.number-ball.blue 108,377
        span.number-ball.blue 108,379
      | ,
      span.twin
        span.number-ball.green 1,523,651
        span.number-ball.green 1,523,653

Bilinen en büyük ikiz asal ikilisi tam 58.711 basamaklı! Sonsuz sayıda asal olduğu gibi sonsuz sayıda ikiz asal mı var? Kimse bilmiyor – _İkiz Asal Sanısı_ da asal sayılar üzerine çözülmemiş problemlerden birisidir.

---
> id: riemann
> goals: zoom
> title: Distribution of the Primes

### Riemann Hipotezi

Matematikçiler, asal sayılar arasındaki örüntüyü ve onların dağılımını araştırmak için yüzyıllar harcadılar. Asal sayılar tamamen rastgele görünmektedirler - bazen ardışık asallar arasında çok büyük boşluklar var ve bazen de [ikiz asallar](gloss:twin-primes) buluyoruz.

Alman matematikçi [Carl Friedrich Gauss](bio:gauss) sadece 15 yaşındayken çığır açan bir fikir ile geldi: Belli bir sayıya kadar asal sayıları saydı ve aşağıdaki grafikteki sonucu gösterdi:

When only 15 years old, the German mathematician [Carl Friedrich Gauss](bio:gauss)
had a groundbreaking new idea: he counted the number of primes up to a certain
point, and showed the results in a chart:

    figure(style="max-width:680px; position:relative;")
      svg(width=680 height=300 viewBox="0 0 680 300")
        line.axis(x1=0 y1=280 x2=680 y2=280)
        g.chart
          path.pi(fill="none" stroke="#0f82f2")
          path.log(fill="none" stroke="#cd0e66")
          g.small-primes
        g.numbers
      .zoom-icon: svg(viewBox="0 0 32 32" class="icon" width=32 height=32)
        use(xlink:href="/icons.svg#search")

x ekseni boyunca tüm tam sayıları görebilirsiniz. Ne zaman bir asala rastlarsak _{span.m-blue}Asal Sayan Fonksiyon_ (shown in __{.m-blue}blue__) bir artıyor. [Uzaklaştığımızda](->#riemann_.zoom-icon), mavi çizgi çok düz bir hale gelir. Gauss, bu fonksiyonun _{span.m-red}`x/(log(x))`_ (shown in __{.m-red}red__) fonksiyonuna çok benzediğini farketti. O bu iki fonksiyonun “yaklaşık olarak benzer” olduğunu öngördü ve bu 1896'da kanıtlandı.

---
> id: riemann1
> title: Riemann Hipotezi

Ancak, yukarıda göreceğiniz gibi, asalların sayısı ve Gauss'un yakınsaması arasında hala önemli bir fark var. 1859'da, [Bernhard Riemann](bio:riemann) daha iyi bir yakınsama keşfetti fakat kendisi geçerli bir kanıt sunamadı. Onun fikri bugün __Riemann Hipotezi__ olarak biliniyor.

Yüzlerce matematikçi Riemann'ın hipotezini kanıtlamaya çalıştı fakat hiçbiri başaramadı. Bu hipotezi genellikle en zor ve en önemli çözülemeyen problem olarak görülür. 2000'de, Clay Matematik Enstitüsü [__Milenyum Problemleri__](gloss:millennium-prize)nin 6 tanesinden biri olarak gösterdi ve çözen matematikçiye 1.000.000 dolar vaat etti.

---

## En Küçük Ortak Kat

> id: race
> goals: race
> section: lcm

İki koşucu dairesel bir yarış pistinde antreman yapıyor.
__{.m-blue}İlk koşucu__
bir turu __{.m-blue}60__ saniyede yapıyor. __{.m-green}İkinci koşucu__ ise sadece __{.m-green}40__ saniyede yapıyor. Eğer ikisi de aynı anda başlarsa ne zaman tekrar aynı noktada olacaklar?

    figure: include svg/race.svg

---
> id: race1

Bu soru aslında yarış pistinin geometrisiyle ya da hız ile alakalı değil - aslında katlar ve bölünebilmeyle alakalı.

İlk koşucu başlangıç çizgisinden 60., 120., 180., 240. ve bu şekilde devam eden saniyelerde geçiyor. Bunlar basitçe __{.m-blue}60__'ın [[katları|çarpanları]]. İkinci koşucu ise başlangıç çizgisinden 40., 80., 120., 160., ve bu şekilde devam eden saniyelerde geçiyor. Dolayısıyla ikisi de başlangıç çizgisinden ilk defa [[120]] saniye sonra geçiyor.

{.reveal(when="blank-0 blank-1")} By bulduğumuz sayı __{.m-green}40__'ın ve __{.m-blue}60__'ın ortak katlarının en küçüğü. Bu sayıya __en küçük ortak kat__ veya __ekok__ deriz.

---
> id: race2

İki sayının ekok'unu bulmak için __{.m-yellow}a__ sayısının __{.m-blue}b__'yi bölüp bölmediğini görmek önemlidir, o halde __{.m-blue}b__ sayısı __{.m-yellow}a__ sayısının asal çarpanlarının tamamını içeriyordur:

    table.table-tiny
      tr
        td.text-right: .number-ball.yellow 12
        td: .divides
        td.text-left: .number-ball.blue 60
      tr
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
        td
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
          | &nbsp;×&nbsp;
          .number-ball.l-blue 5

Bunu doğrulamak çok kolaydır: Eğer bir asal çarpan __{.m-yellow}a__ sayısını bölüyorsa ve __{.m-yellow}a__ da __{.m-green}b__'yi bölüyorsa, o zaman bu asal çarpan __{.m-green}b__ sayısını da  _mutlaka_ böler.

---
> id: race3

__{.m-green}40__ ve __{.m-blue}60__ sayılarının ekok'unu bulmak için, öncelikle ikisinin de [asal çarpanlarına](gloss:factorisation) ihtiyacımız var:

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

__{.m-red}X__ sayısının __{.m-green}40__ ve __{.m-blue}60__'ın en küçük ortak katı olduğunu varsayalım. O zaman __{.m-green}40__, __{.m-red}X__'i böler, böylece _{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}2_ ve
_{span.number-ball.small.l-blue}5_ sayıları __{.m-red}X__'in asal çarpanları olmalı. Ayrıca,
__{.m-blue}60__ da __{.m-red}X__'i böler, böylece __{span.number-ball.small.l-green}2__,
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ ve
_{span.number-ball.small.l-green}5_ sayıları da __{.m-red}X__'in asal çarpanları olmalı.

---
> id: race4

__{.m-red}X__'i bulmak için, __{.m-green}40__ ve __{.m-blue}60__'ın tüm asal çarpanlarını birleştirelim, fakat tekrar edenleri bir defa sayalım:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

Bu bize yukarıda gördüğümüz __{.m-red}X__'in 120 olduğunu verir. Bir asal çarpan birden çok defa görünüyorsa, 2 gibi, onu sadece hangi sayıda en çok tekrar ediyorsa o kadar defa saymalıyız. (__{.m-green}40__'ta 3 defa olması __{.m-blue}60__'ta 2 defa olmasından fazladır).

---
> id: race5

Artık iki sayının ekok'unu bulmak için basit bir yöntemimiz var:

    ol.proof
      li Her sayının asal çarpanlarını bul.
      li Tüm asal çarpanları tekrar edenleri bir defa sayarak bir araya getir.

Aynı yöntemi üç ya da daha fazla sayının ekok'unu tek seferde bulmak için de kullanabiliriz, mesela __{.m-blue}12__, __{.m-green}30__ ve __{.m-yellow}45__:

    table.table-tiny
      tr
        td: .number-ball.blue 12
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5
      tr
        td: .number-ball.yellow 45
        td: | =
        td(colspan=4)
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 5

Böylece __{.m-blue}12__, __{.m-green}30__ ve __{.m-yellow}45__'in ekoku
2 × [[2]] × 3 × 3 × [[5]] = 180'dir.

---
> id: race6

Asal sayılar için özel bir durum: İki asal sayının ekok'u direkt olarak iki sayının [[çarpımıdır|toplamıdır|farkıdır]] çünkü bu sayıların “sadeleştirilebilecek” ortak asal çarpanları yoktur.


---
> id: cicadas
> goals: bound-low bound-high

### Ağustos Böcekleri

::: column.grow

Kuzey Amerika, çeşitli ağustos böceklerine ev sahipliği yapıyor. Bunların birkaç senede bir yazın üremek için ortaya çıkmak gibi ilginç bir özellikleri var - Kalan zamanlarını yeraltında geçiriyorlar.

Örneğin, Florida ve Mississippi'deki ağustos böcekleri her 13 yılda bir ortaya çıkıyor. Illinois ve Iowa'daki ağustos böcekleri ise her 17 yılda bir ortaya çıkıyor. Ama 12, 14, 15 ve 16 yıllık döngülerde ağustost böcekleri ortaya çıkmıyorlar.

::: column(width=360)

    x-img(width=360 height=240 src="images/cicadas.jpg")

:::

Hem 13 hem de 17, asal sayıdır - ve bunun çok iyi bir nedeni var. Ortmanda ağustos böceklerini öldüren avcılar olduğunu hayal edin. By avcılar da düzenli aralıklarda ortaya çıkıyorlar - diyelim ki 6 yılda bir olsun.

Şimdi, ağustos böcekleri her ${n}{n|13|4,20,1} yılda (${isPrime(n) ? 'asal' : 'asal değil'}) bir ortaya çıkıyor olsun. Bu iki hayvan her ${lcm(n,6)} yılda bir aynı anda yeryüzüne çıkıyorlar, bu sayı 6 ve ${n} sayılarının [[ekok'udur|ebob'udur|çarpımıdır]].

    figure
      include svg/cicadas.svg
      p.caption Farklı ağustos böceği ortaya çıkış döngüsü süreleri için ağustosböcekleri ve avcıların buluşma süresi.

---
> id: cicadas1

Bu sayının, ağustos böceği ortaya çıkış süresi 13, 17 gibi asal bir sayıysa daha büyük olduğu görünüyor. Bunun sebebi asal sayıların 6 ile ortak çarpanları bulunmamasıdır, böylece en küçük ortak kat hesaplanırken tekrar eden asal çarpan olmayacağı için sadeleştiremeyiz.

Tabii ki, ağustos böcekleri asal sayılarla ilgili bir fikre sahip değil - fakat milyonlarca yıldır, evrim asal döngülerin en güvenilir olduğunu ortaya koydu. Avcı hayvanların zamanla soyu tükenmiş görünüyor fakat asal döngüler kalıyor.


---

## En Büyük Ortak Bölenler

> id: gcd
> section: gcf

Bir mimar bahçesinin uzunlukları 18m ve 30m olan bir kat planlıyor. Bu mimar bu bahçeyi kare fayanslarla boşluksuz veya üstüste gelmeden kaplamak istiyor. Kullanabileceği en büyük kare fayansın bir kenarının uzunluğu kaçtır?

    figure
      include svg/floorplan.svg
      p.text-center.md Fayansın bir kenarının uzunluğu ${x}{x|3|1,18,1} metredir.#[br]#[span.result.var]

---
> id: gcd1

Tıpkı daha önce olduğu gibi, bu soru da geometri sorusu değil - bölünebilmeyle ilgili bir soru. Kare fayansın bir kenarının uzunluğu 18 ve 30'u bölmeli ve bu koşulu sağlayan en büyük sayı [[6]]'dır. Bu sayıya 18 ve 30'un __En Büyük Ortak Böleni__ veya __ebob__ denir.

---
> id: gcd2

Bir kez daha, iki sayının ebob'unu hesaplamak için [asal çarpanlarına ayırma](gloss:factorisation)yı kullanıyoruz. Bir sayının herhangi bir böleninin o sayının asal çarpanlarından bazılarını içerdiğini

    table.table-tiny
      tr
        td: .number-ball.blue 18
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5

__{.m-red}X__ sayısının __{.m-green}18__ ve __{.m-blue}30__'un ebob'u olduğunu varsayalım. O zaman __{.m-red}X__ sayısı __{.m-green}18__'i böler o zaman __{.m-red}X__'in asal çarpanları _{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}3_
ve _{span.number-ball.small.l-blue}3_ arasından olmalı. Ayrıca, __{.m-red}X__ sayısı __{.m-blue}30__'u böler o zaman __{.m-red}X__'in asal çarpanları _{span.number-ball.small.l-green}2_,
_{span.number-ball.small.l-green}3_ ve _{span.number-ball.small.l-green}5_ arasından olmalı.

---
> id: gcd3

__{.m-red}X__'i bulmak için, basitçe __{.m-green}18__ ve __{.m-blue}30__ sayılarından [[ikisin de|birinin]] asal çarpanlarını çarpmamız yeterli olacaktır:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}3_ &nbsp;=&nbsp; 6.

---
> id: gcd4

Artık iki sayının ebob'unu bulmak için kolay bir yöntemimiz var:

    ol.proof
      li Her sayının asal çarpanlarını bul.
      li İki sayının da ortak asal çarpanlarını çarp.

Asal sayılar için yine bir özel durum: iki asalın ebob'u her zaman [[1]]'dir çünkü asalların ortak asal çarpanları yoktur.

---
> id: crypto

### Şifreleme

::: column.grow

Asal sayıların en önemli uygulamalarından birisi de matematiğini __Şifreleme__ alanıdır. Binlerce yıldır, insanlar mesajları sadece alıcının okuyabileceği şekilde şifrelemeyi denedirler - buna şifremele denir. Bu yöntemler generallerin savaş sırlarını paylaşmasından kişisel e-postalara veya çevrimiçi banka hizmetlerine kadar kullanıldı.

İnsanlar her zaman daha iyisini, daha güvenilir şifreleme yöntemlerini bulmaya çalıştı ancak öyle bir zaman geldi ki ileri algoritmalar sayesinde hepsi çözüldü. İkinci Dünya Savaşı sırasında, Alman ordusu Enigma'yı kullanıyordu: Klavye, döner tekerler ve fişleri kullanan karmaşık bir makine. Mesajları 158 milyon milyon milyon (158 ve 18 tane 0!) olasılıktan biriyle şifreliyordu. Bu kodun çözülemez olduğuna inanılıyordu ki İngiliz Gizli Servisi matematikçi Alan Turing önderliğinde Enigma'yı çözmeye yarayan ilk bilgisayarlardan birini üretmişti.

::: column(width=240)

    x-img(lightbox credit="Magnus Manske, via Wikipedia" width=240 height=344 src="images/enigma.jpg")
    p.caption 4 rotorlu Alman Enigma'sı

:::

Bugünün bilgisayarları çok daha gelişmiş, her saniye milyonlarla olasılığı deneyebilecek durumda. Daha iyi şifreleme algoritmaları geliştirmek için güçlü bilgisayarlar için bile zor olacak matematiksel işlemler bulmalıyız. Bilgisayalar toplama, çıkarma, çarpma ve bölmede inanılmaz hızlılar fakat, ortaya çıktığı gibi, büyük sayıları asal çarpanlarına ayırmada oldukça yavaşlar...

---
> id: crypto1

{.todo} YAKINDA – Alice ve Bob ile RSA örneği

Ron Rivest, Adi Shamir ve Leonard Adleman tarafından 1997'de yayınlanan algoritmanın adı __RSA Şifrelemesi__'dir. Bu, 1973'te İngiliz Gizli Servisi'ninkine çok benzeyen bir yöntemi ortaya çıkardı fakat çok geç olana kadar gizli kaldı.

Bugün, asal sayılar dünyanın her yerinde veri alışverişinde bilgisayarlar tarafından kullanılıyorlar. İnternette gezinirken veya mesajlaşırken, telefonunuz veya bilgisayarınız sessizce çok büyük asal sayılar oluşturuyor ve ortak anahtarlarla beraber diğer bilgisayarlarla değiş tokuş ediyor.
