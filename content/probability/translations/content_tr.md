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

## Olasılıklar Nelerdir

> id: prob-line
> section: what-are-probabilities

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

    // TODO However, the equation is not very helpful if the different outcomes
    // are not all equally likely, or if there are infinitely many possible outcomes.

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

    // TODO Notice that subjectivist probabilities may be different for
    // different people – often depending on how much they know.

Olasılıklar _tahmin etmek ve öngörmek_ için harika iken, _aslında_ ne olacağını hiçbir zaman söyleyemediğimizi hatırlayın.

Şimdi olasılığın bazı eğlenceli uygulamalarına bir göz atalım.

---

## Kumarhane Matematiği

> id: roulette
> sectionBackground: dark casino
> goals: rotate
> section: casino-mathematics

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

    x-media(src="images/cocktails.jpg" width=300 height=185)

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

    figure: x-media(src="images/las-vegas.jpg" width=760 height=345)

1961 yazında Thorp ve Shannon Las Vegas’ta bilgisayarlarını denediler. Fakat bir miktar para kazanırken, model uçakların bile parçalarını içeren bilgisayar, daha büyük ölçekte kullanılacak kadar sağlam değildi.

Thorp sonuçlar hakkında bilimsel bir makale yazdı ve sonra tabii ki bilgisayarlar kumarhanelerde yasaklandı. Thorp da Las Vegas’taki tüm kumarhanelerden yasaklandı fakat o andan itibaren daha karlı bir işe yöneldi: matematiği ve bilgisayarı borsa da kullanmak.

    // Shannon cryptography and code-breaking during World War II, and would go
    // on to become known as the father of information theory - and, indeed, the
    // information age. Shannon taught him to juggle three balls, and that he
    // rode a unicycle on a steel cable strung between two tree stumps. "He
    // later reached his goal," he wrote, "which was to juggle the balls while
    // riding the unicycle on the tightrope."

Bu kısa tarih yolculuğundan sonra, gerçek matematiğe geri dönelim...

---

## Venn Diyagramları ve Olasılık Ağaçları

> section: trees-venn
> sectionStatus: dev

    // TODO – Probability Trees
    // In real life, coins never have exactly a probability of 0.5. It might be 0.4932
    // or 0.500012, depending on their exact shape or physical properties. In
    // mathematics we don’t have to worry about these tiny inaccuracies: we can simply
    // assume that our “mathematical model” of a coin has exactly a 0.5 probability of
    // landing heads and is truly random. With this simplification, we can start
    // answering much more interesting questions.
    // Now let’s try a more difficult game: there is a bag that contains five
    // red and three blue marbles. When picking two marbles at random, what is
    // the probability that both of them are red?
    // We already know how to calculate the probability that the first marble is
    // red: it is 5/8 = 0.625.
    // However, once we have picked the first marble, the probabilities change:
    // now there are only 7 marbles left, and only four of them are red.
    // Therefore the probability that the second marble is red is 4/7 = 0.571.
    // To calculate the probability that #[em both] marbles are red, we simply
    // have to multiply these probabilities: the final answer is 0.625 × 0.571 = 0.357.
    // There are four possible outcomes in total: red-red, red-blue, blue-red
    // and blue-blue. We can represent all these possibilities in a single diagram:
    // slideshow
    // Now we can simply read off the probability of the different outcomes. The
    // probability that both marbles are blue is xxx, and the probability that
    // you get two marbles with different colours are xxx + xxx = xxx.
    // Probability trees can be used to solve many problems that consist of
    // multiple steps that happen one after the other.

    // TODO – VENN DIAGRAMS
    // Opposite probabilities always add up to 1. This means that you can
    // calculate the opposite of a probability by subtracting it from 1.
    // Venn Diagrams and set operations
    // Independent and Mutually Exclusive Events
    // There are 200 kids in a school. 140 students are taking Mathematics, and
    // 100 students are taking Biology. 80 students are studying both Maths and Biology.
    // The corresponding Venn Diagram corresponds to two overlapping circles for
    // Maths and Biology. We can write 80 in their interx-step.
    // There are 140 - 80 = 60 students studying just Mathematics, so we write
    // than in the remaining part of the Maths circle.  There are 100 - 80 = 20
    // students studying just Biology so we write that in the remaining part of
    // the Biology circle.
    // How many students at the school study neither Mathematics nor Biology?

---

## Geleceği Öngörmek

> id: future
> section: predicting-the-future

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

    .box
      .box-title: h3 Zar atmak
      .box-body
        .probTable.var ${ probTable(d) }
        p.md Aynı anda ${d}{d|2|1,6,1} tane zar atıyoruz ve gelen sayıların #[span.dice(style="width: auto; padding: 0 4px;") TOPLAMINI] not ediyoruz. #[strong.m-green yeşil çizgiler] olasılık teorisinin öngördüğü, her sonucun gelme olasılığını temsil ediyor ve  #[strong.m-blue mavi çizgiler] bu bilgisayar deneyinde her bir sonucun ne sıklıkla elde edildiğini gösteriyor
        p.btn-row
          button.btn Zar at
          button.btn Roll 100 defa zar at
          button.btn Roll 1000 defa zar at

{.reveal(when="roll")} Dikkat ederseniz, gittikçe daha fazla zar atarsak, gözlemlediğimiz frekanslar, olasılık teorisi kullanarak öngördüğümüz frekanslara gittikçe yaklaşıyor. Bu prensibi bütün olasılık deneylerine uygulanabilir, buna __Büyük Sayılar Yasası__ diyoruz.

{.reveal(when="roll")} Benzer şekilde, aynı anda attığımız zar sayısını arttırırsak, olasılıkların biz çizgiden (tek zar) bir üçgene (iki zar) ve sonra “çan eğrisine” dönüştüğünü görebiliriz. Bu sonuç __Merkezi Limit Teoremi__ olarak geçer, ve çan şeklindeki bu eğriye __Normal Dağılım__ denir.

---

## Monty Hall Problemi

> id: monty-hall
> sectionBackground: dark gameshow
> goals: game
> title: Monty Hall Problemi
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

## Esas Rastgelelik

> id: quantum
> section: true-randomness

::: column.grow
Bu ders çoğunlukla bozuk para, zar ya da rulet çarkı gibi nesnelerin tamamen rastgele davrandığı varsayımı üzerine kuruldu. Fakat bu doğru değil - örneğin Edward Thrope’un ruletin sonucunu nasıl kestirdiğini görmüştük.

Bir bozuk para atalım: Yazı gelme ihtimali 0,5. Tam parayı atmadan önce paranın hangi yüzünün yukarı baktığını bilirsek, biraz daha iyi bir tahminde bulunabiliriz, 0,58 ya da 0,41 gibi. Ayrıca paranın ağırlığını ve boyutunu, açısını, konumunu ve elimizden ayrılırkenki hızını bilseydik, fizik kanunlarını - yer çekimi, sürtünme, hava direnci - kullanarak paranın hareketini modelleyebilir ve sonucu öngörebilirdik. Nihayetinde paranın her atomunun ve onları çevreleyen hava moleküllerinin konumlarını tam olarak bilseydik, bir bilgisayar simülasyonu yaparak sonucu isabetli olarak öngörebilirdik.
::: column(width=240)

    x-media(src="images/coins.jpg" width=240 height=343)

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

    // TODO Possible probability distributions of the position of an electron in
    // a hydrogen atom. Lighter areas represent more likely locations of the electron.

---
> id: radioactive-1

[Radyoaktif bozunma](gloss:radioactive), atomlar seviyesinde, atomların içinde etki gösteren çok küçük ölçekli kuvvetlerin etkisi sebebiyle ortaya çıkar. Bu etkiler [Kuantum mekaniği](gloss:quantum) aracılığı ile anlaşılabilir. Geçtiğimiz yüzyılda [Max Planck](bio:planck) ve [Paul Dirac](bio:dirac) gibi fizikçiler, temel parçacıkların akla sığmaz bir özelliğe sahip olduğunu keşfettiler: bu parçacıklar _aynı anda_ birden çok konumda bulunabiliyorlar. Belirli bir konumları yoktur, onun yerine, bu parçacıkların hangi konumda bulunmasının ne kadar olası olduğunu bize söyleyen bir olasılık dağılımına(_dalga fonksiyonu_ da denir) sahiptirler.

Bu akıl almaz özellik Kuantum bilgisayarlarınca kullanılıyor. Bildiğimiz bilgisayarlar aynı anda sadece tek bir işlem yapabilirler. Kuantum bilgisayarları aynı anda pek çok işlem yapmak için atom altı parçacıkların özelliklerini kullanabilirler- ve bu onları çok daha hızlı yapıyor.

    figure: x-media(lightbox src="images/quantum.jpg" width=760 height=390)

---
> id: radioactive-2

Kuantum mekaniğini tam olarak _anlayamayız_ ya da _açıklayamayız_ - sadece matematik teorilerimizin bunu öngördüğünü ve fiziksel ölçümlerimizin bunu desteklediğini kabullenebiliriz. İlginç kuantum etkileri sadece çok bir kaç atom gibi çok küçük ölçeklerde gözlemlendi, bizi günlük hayatımızda nasıl etkiledikleri henüz çok açık değil. Ancak doğanın _esas rastgeleliği_ ortaya koyduğunu bildiğimiz tek etki de kuantum mekaniğinde karşımıza çıkıyor.
