# İstatistikler ve Veriler

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

## Kumarhane Matematiği

> id: roulette
> sectionBackground: dark casino
> goals: rotate
> section: casino

    .roulette-wheel
      .layer-2.wheel
      .layer-3
      .layer-4.wheel
      .layer-5
      .ball
      svg(width=380 height=380): circle(cx=190 cy=190 r=190)
    x-gesture(target=".roulette-wheel" offset="-90,-100" slide="0,200")

Keşfedildiği ilk andan kısa bir süre sonra matematikçiler olasılığın kurallarını kumarhane oyunlarının da dahil olduğu bir çok alana uygulamaya başladılar.

Bu matematikçilerden biri olan [Karl Pearson](bio:pearson) _Le Monaco_ adlı Fransız gazetesinde rulet oyunun sonuçlarını analiz ettiği bir makale yayınladı.

Rulet 1’den 36’ya kadar __{.red}kırmızı__ ve __{.black}siyah__ renkli sayılardan ve yeşil 0’dan oluşan bir çark ile oynanır. Bir top atılır ve sayılardan birinin üzerinde rastgele durur. Oyuncular sadece bir sayıya, birden çok sayı kümesine veya sadece bir renge oynayabilirler. Oyuncuların kazanma potansiyeli bu seçeneklerin gerçekleşme olasılığına bağlıdır.

---
> id: roulette-1

İşte Pearson’ın incelediklerinin yüzlercesinden biri. İlk bakışta oldukça rastgele görünüyor:

    .newspaper
      p 19 Ağustos 1823 tarihli rulet sonuçları, 5. masa:
      div
        for x in [13, 12, 30, 33, 3, 12, 29, 5, 8, 22, 23, 13, 5, 18, 14, 31, 36, 15, 18, 28, 32, 29, 11, 34, 23, 36, 8, 16, 2, 3, 9, 20, 16, 14, 15, 26, 31, 21, 15, 3, 33, 22, 12, 14, 9, 6, 30, 13, 33, 5, 28, 17, 27, 6, 5, 34, 11, 18, 32, 6, 9, 31, 29, 2, 18, 35, 6, 1, 34, 28, 1, 10]
          span(class=colour(x))= x

Bir rulet çarkında aynı sayıda kırmızı ve siyah sayı bulunur. Eğer yeşil 0’ı (kumarhanenin kazandığı durum) gözardı edersek [[neredeyse aynı|tamamen eşit]] sayıda kırmızı ve siyah top gelmesini bekleriz. Bunu yukarıdaki sonuçları inceleyerek kontrol edelim:

    +barchart([['Kırmızı', 37, 'r'], ['Siyah', 35, 'b']])

---
> id: roulette-2

Bu kırmızı ve siyah sayılar arasındaki az bir farkla oldukça eşit dağılmış görünüyor ancak bu zaten olasılıktan beklediğimiz bir sonuç.

Ancak Pearson burada durmadı. O, eğer bu sonuçlar tamamen rastgele dağılıyorsa o halde ikililerin olası dağılımlarının yaklaşık aynı olacağını farketti. Örneğimizde gerçekleşenleri sayalım:

    +barchart([['KK', 14, 'r'], ['KS', 24, 'rb'], ['SK', 24, 'rb'], ['SS', 9, 'b']])

---
> id: roulette-3

Bazı nedenlerde dolayı, aynı olasılıkta olsalar da __{.red}KK__ ve __{.black}SS__; __{.red}K__**{.black}S** ve __{.red}S__**{.black}K**’ya göre [[daha az|daha çok]] sıklıkta meydana geldiği görünüyor. Tabi ki, biz sadece bu belirli dizi için _şanssız_ olabiliriz fakat Pearson bunu defalarca test etti ve hep aynı sonucu buldu.

---
> id: roulette-4

Üçlülere baktığımızda iş daha da kötüleşiyor. 8 olası durum için gerçekleşme sayılarının yine yakın çıkmasını bekliyoruz ancak gerçekte durum böyle değil:

    +barchart([['KKK', 3, 'r'], ['KKS', 10, 'rrb'], ['SKK', 10, 'rrb'], ['KSK', 15, 'rrb'], ['SKS', 14, 'bbr'], ['KSS', 8, 'bbr'], ['SSK', 8, 'bbr'], ['SSS', 2, 'b']])

Görünüşe göre bu kumarhanede renkler beklenenden çok daha sık değişiyor. Aynı renkte üçlülerin gelmesi neredeyse imkansız (__{.red}KKK__ or __{.black}SSS__).

Pearson’ın bu çarpık sonuçları görme ihtimali 100 milyonda 1’den azdı! Kumarhaneye daha yüksek bir kar elde ettirmek için rulet tekerlerinde hile yapıldığını varsaydı ve bu hileyi ortaya çıkarmak için öfkeli birçok mektup yazdı.

---
> id: roulette-5

::: column(width=300)

    x-img(src="images/cocktails.jpg" width=300 height=185)

::: column.grow
Monte Carlo'ya gittiğinde, nihayet çarpık sonuçların nedeninin çok farklı bir nitelikte olduğunu keşfetti: Sonuçları kaydetmesi için gönderilen gazeteciler kumarhanenin barında oturuyorlardı, bir şeyler içiyor ve öylesine renklere oynuyorlardı...
:::

---
> id: random-sequence
> goals: random

Bu hikaye, insanların rastgele görünen verilerle uğraşmakta oldukça kötü olma eğiliminde olduğunu gösteriyor: genellikle olası olayları (aynı renkten uzun diziler) hafife alıyoruz ve muhtemel olayları (farklı renklerden oluşan diziler) fazla tahmin ediyoruz. Bu bankacılık ve sigortacılık alanlarında sahtekarlığı tespit etmek için etkin bir şekilde kullanılabilir.

Gazetecilerden daha iyiyseniz burada kendiniz deneyebilirsiniz: K ve S’lerden oluşan bir dizi yazın ve onun gerçekten ne kadar rastgele olduğunu öğrenin:

    label.newspaper: input(type="text", placeholder="KSSKKSSSKKKSKSKKS")
    p.text-center(style="margin-top: -1em; font-family: monospace") Rastgelelik puanı: #[span.score 100]/100

---
> id: dealer

::: column.grow
Pearson yalnızca önceki ruletin sonuçlarını incelerken, diğerleri kumarhanelerdeki kazanma olasılığını arttırmak için matematiği kullanmayı denedi. Bu kişilerden biri [Blackjack](gloss:blackjack) oyununda kumarhaneyi yenmeyi sağlayan _kart sayma_ tekniğini icat eden [Edward Thorp](bio:thorp)’tu.

O daha sonra odağını rulete çevirdi: eğer bir rulet çarkındaki topun konumunu ve hızını biliyorsanız, fiziği kullanarak sonucu yaklaşık olarak tahmin edebileceğimize inanıyordu. Dağıtıcı rulet çarkını çevirdikten sonra yeni bir bahis koymak için sadece birkaç saniyeniz var. Maalesef bu süre insanların kafalarındaki sonucu hesaplamak için çok kısa.
::: column(width=150)

    .book: img(src="images/beat-the-dealer.jpg" width=150 height=250)

:::

---
> id: dealer-1

    img.computer(src="images/wearable-computer.png" width=275 height=364)

Massachusetts Institute of Technology’de Thorp fikirlerini [bilgi teorisinin](gloss:information) de babası olarak bilinen bir başka matematikçi [Claude Shannon](bio:shannon) ile paylaştı. Onlar birlikte Apple Watch veya Google Glass’dan yüzyıllar önce ilk _giyilebilir bilgisayarı_ yapmaya karar verdiler.

Bilgisayar bir paket sigara büyüklüğündeydi ve bellerine sarılmıştı. Rulet çarkında top belirli bir işareti ne zaman geçse bir insanın ayakkabısına kadar uzanan kablolar hafifçe çekiştirilirdi. Bu bilgisayarın hızı hesaplamasına ve nerede duracağını tahmin etmesini sağlıyordu. Başka bir kablo seti farklı sonuçlara dayanarak farklı tonlar üreten bir bilgisayardan bir kulaklığa yönlendirirdi.

---
> id: dealer-2

    figure: x-img(src="images/las-vegas.jpg" width=760 height=345)

1961 yazında Thorp ve Shannon Las Vegas’ta bilgisayarlarını denediler. Fakat bir miktar para kazanırken, model uçakların bile parçalarını içeren bilgisayar, daha büyük ölçekte kullanılacak kadar sağlam değildi.

Thorp sonuçlar hakkında bilimsel bir makale yazdı ve sonra tabii ki bilgisayarlar kumarhanelerde yasaklandı. Thorp da Las Vegas’taki tüm kumarhanelerden yasaklandı fakat o andan itibaren daha karlı bir işe yöneldi: matematiği ve bilgisayarı borsa da kullanmak.




--------------------------------------------------------------------------------



## Veri Görselleştirme

> section: visualisation
> sectionStatus: dev

TODO

---

## Veri Merkezi ve Yayılımı

> section: center-and-spread
> sectionStatus: dev

TODO

---

## Örnekleme ve Tahmin

> section: sampling
> sectionStatus: dev

TODO

---

## Elektronik Tablolar ve Frekans Tabloları

> section: spreadsheets
> sectionStatus: dev

TODO

---

## Doğrusal Modeller

> section: linear-models
> sectionStatus: dev

TODO

---

## Nedensellik - Korelasyon

> section: causation-correlation
> sectionStatus: dev

TODO
