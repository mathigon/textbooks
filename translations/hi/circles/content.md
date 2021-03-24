# मंडलियां और पाई

## परिचय

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

जब तक मनुष्य का अस्तित्व है, हमने आकाश की ओर देखा है और पृथ्वी पर सितारों, ग्रहों और चंद्रमा की गति का उपयोग करके जीवन को समझाने की कोशिश की है।

प्राचीन ग्रीक खगोलविदों ने पहली बार पता लगाया था कि सभी आकाशीय पिंड नियमित पथों पर चलते हैं, जिन्हें __कक्षा__ कहा जाता __है__ । उनका मानना था कि ये परिक्रमाएं हमेशा गोलाकार होती हैं। आखिरकार, मंडलियां सभी आकृतियों के "सबसे उत्तम" हैं: हर दिशा में सममित, और इस प्रकार हमारे ब्रह्मांड के अंतर्निहित क्रम के लिए एक उपयुक्त विकल्प।

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} पृथ्वी _टॉलेमिक ब्रह्मांड_ के केंद्र में _है_ ।

:::

---
> id: radius
> goals: compass

एक [__वृत्त__](gloss:circle) पर प्रत्येक बिंदु अपने केंद्र से समान दूरी पर है। इसका मतलब है कि उन्हें [कम्पास](gloss:compass) का उपयोग करके तैयार किया जा सकता है:

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

{.reveal(when="compass")} मंडलियों से संबंधित तीन महत्वपूर्ण माप हैं जिन्हें आपको जानना आवश्यक है:

* {.reveal(when="compass" delay="1000")} [{.pill.red.b} त्रिज्या](target:r) एक वृत्त के केंद्र से उसके बाहरी रिम तक की दूरी है।
* {.reveal(when="compass" delay="4000")} [{.pill.blue.b} व्यास](target:d) एक वृत्त पर दो विपरीत बिंदुओं के बीच की दूरी है। यह अपने केंद्र से गुजरता है, और इसकी लंबाई [[दो बार है | आधा |]] त्रिज्या [[के समान]] ।
* {.reveal(when="blank-0")} [{.pill.green.b} परिधि](target:c) (या परिधि) एक वृत्त के चारों ओर की दूरी है।

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

मंडलियों की एक महत्वपूर्ण संपत्ति यह है कि सभी मंडल [समान हैं](gloss:similar) । आप यह साबित कर सकते हैं कि कैसे सभी हलकों का मिलान और [अनुवादों के](gloss:translation) उपयोग से मिलान किया जा सकता [है](gloss:dilation) :

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

आपको याद हो सकता है कि, समान बहुभुजों के लिए, संबंधित पक्षों के बीच का अनुपात हमेशा स्थिर होता है। सर्कल के लिए कुछ समान काम करता है: [परिधि](gloss:circle-circumference) और [व्यास के](gloss:circle-diameter) बीच का अनुपात _सभी सर्कल के_ लिए समान है। एक रहस्यमय संख्या [__पाई__](gloss:pi) कहा जाता है, जो अक्सर "पी" के लिए ग्रीक अक्षर _π_ रूप में लिखा है - यह हमेशा 3.14159 है ...। पाई में अनंत रूप से कई दशमलव अंक हैं जो बिना किसी विशिष्ट पैटर्न के हमेशा के लिए चलते हैं:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

यहां व्यास 1 के साथ एक पहिया है। जैसा कि आप परिधि को "अनियंत्रित" करते हैं, आप देख सकते हैं कि इसकी लंबाई बिल्कुल है [[`pi`|`2 * pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

व्यास _d के_ साथ एक वृत्त के लिए, परिधि है `C = π × d` । इसी तरह, [त्रिज्या](gloss:circle-radius) _आर के_ साथ एक सर्कल के लिए, परिधि है

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] ।

---
> id: nature

मंडल पूरी तरह से सममित हैं, और उनके पास बहुभुज के कोनों की तरह कोई "कमजोर बिंदु" नहीं है। यह एक कारण है कि वे प्रकृति में हर जगह क्यों पाए जा सकते हैं:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} पुष्प

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} ग्रह

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} पेड़

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} फल

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} साबुन के बुलबुले

:::

{.r} और ऐसे कई अन्य उदाहरण हैं: इंद्रधनुष से लेकर पानी की लहर तक। क्या आप कुछ और सोच सकते हैं? [जारी रखें](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

यह भी पता चला है कि किसी परिधि के लिए सबसे बड़े क्षेत्र के साथ एक चक्र आकार है। उदाहरण के लिए, यदि आपके पास लंबाई 100 \ मीटर की रस्सी है, तो आप इसका उपयोग सबसे बड़ा स्थान घेरने के लिए कर सकते हैं यदि आप एक सर्कल बनाते हैं (आयत या त्रिकोण जैसे अन्य आकृतियों के बजाय)।

प्रकृति में, पानी की बूंदें या हवा के बुलबुले जैसी वस्तुएं गोलाकार या गोलाकार बनकर और उनके सतह क्षेत्र को कम करके _ऊर्जा बचा_ सकती हैं।

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _परिधि_ = __{.m-green} 100__ , _क्षेत्र_ = __${area}__

:::

---
> id: area
> goals: slider

### एक वृत्त का क्षेत्र

लेकिन हम वास्तव में एक सर्कल के क्षेत्र की गणना कैसे करते हैं? आइए हम उसी तकनीक का प्रयास करें जिसका उपयोग हमने [चतुर्भुज के क्षेत्र को खोजने के](/course/polyhedra/quadrilaterals) लिए किया था: हम आकृति को कई अलग-अलग हिस्सों में काटते हैं, और फिर उन्हें एक अलग आकार में पुनर्व्यवस्थित करते हैं जिसे हम पहले से ही (जैसे एक आयत या एक त्रिकोण) के क्षेत्र को जानते हैं।

एकमात्र अंतर यह है कि, क्योंकि वृत्त घुमावदार हैं, हमें कुछ अनुमानों का उपयोग करना होगा:

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

यहाँ आप एक वृत्त को विभाजित में देख सकते हैं ${toWord(n1)} wedges। स्लाइडर को एक पंक्ति में पंक्तिबद्ध करने के लिए ले जाएँ।

{.reveal(when="slider")} अगर हम वेजेस की संख्या बढ़ाते हैं ${n1}{n1|6|6,30,2} , यह आकृति एक [[आयत की]] तरह अधिक से अधिक दिखने लगती है [[| वृत्त | वर्ग]] ।

{.reveal(when="blank-0")} आयत की ऊंचाई [[त्रिज्या के]] बराबर है [[| परिधि |]] वृत्त का [[व्यास]] । _{span.reveal(when="blank-1")} आयत की चौड़ाई [[आधे परिधि के]] बराबर है [[| परिधि |]] वृत्त [[की त्रिज्या]] का [[दोगुना]] ।_ _{span.reveal(when="blank-2")} (ध्यान दें कि कैसे आधे वेजेज का सामना करना पड़ता है और उनमें से आधे का सामना करना पड़ता है।)_

{.reveal(when="blank-2" delay=1000)} इसलिए आयत का कुल क्षेत्रफल लगभग है `A = π r^2` ।

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

यहाँ आप एक वृत्त को विभाजित में देख सकते हैं ${toWord(n)} के छल्ले। पहले की तरह, आप रिंग को स्लाइडर को "अनर्गल" कर सकते हैं।

{.reveal(when="slider")} अगर हम छल्ले की संख्या में वृद्धि करते हैं ${n2}{n2|4|2,12,1} , यह आकृति [[त्रिभुज की]] तरह अधिक से अधिक दिखने लगती है [[| आयत | ट्रेपेज़ियम]]

{.reveal(when="blank-0")} त्रिकोण की ऊंचाई [[त्रिज्या के]] बराबर है [[| व्यास |]] वृत्त की [[परिधि]] । _{span.reveal(when="blank-1")} त्रिकोण का आधार [[परिधि के]] बराबर है [[|]] वृत्त [[का व्यास दोगुना]] ।_ _{span.reveal(when="blank-2")} इसलिए त्रिभुज का कुल क्षेत्रफल लगभग है_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` ।

:::

---
> id: area-2

यदि हम असीम रूप से कई रिंग्स या वेजेज का उपयोग कर सकते हैं, तो ऊपर दिए गए अनुमान सही होंगे - और वे दोनों हमें एक सर्कल के क्षेत्र के लिए एक ही फॉर्मूला देते हैं:

{.text-center.r}`A = π r^2` । [जारी रखें](btn:next)

---
> id: pi-approximations

### पाई की गणना

जैसा कि आपने ऊपर देखा, `π = 3.1415926…` एक साधारण पूर्णांक नहीं है, और इसके दशमलव अंक बिना किसी दोहराए पैटर्न के हमेशा के लिए चलते हैं। इस गुण वाली [__संख्या__](gloss:irrational-numbers) को [__अपरिमेय संख्या__](gloss:irrational-numbers) कहा जाता है, और इसका अर्थ है कि `π` एक साधारण अंश के रूप में व्यक्त नहीं किया जा सकता है `a/b` ।

इसका यह भी अर्थ है कि हम पाई के _सभी_ अंकों को कभी नहीं लिख सकते हैं - आखिरकार, असीम रूप से कई हैं। प्राचीन ग्रीक और चीनी गणितज्ञों ने नियमित बहुभुज का उपयोग करते हुए मंडलियों को लगाकर पाई के पहले चार दशमलव अंकों की गणना की। ध्यान दें कि जब आप अधिक पक्ष जोड़ते हैं, तो बहुभुज [[अधिक से अधिक]] दिखने लगता है [[| कम से | बिल्कुल]] एक सर्कल की तरह:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665 में, [आइजैक न्यूटन](bio:newton) 15 अंकों की गणना करने में कामयाब रहे। आज, हम बहुत अधिक सटीकता से पाई के मूल्य की गणना करने के लिए शक्तिशाली कंप्यूटर का उपयोग कर सकते हैं।

वर्तमान रिकॉर्ड 31.4 ट्रिलियन अंकों का है। इन सभी अंकों वाली एक मुद्रित पुस्तक लगभग 400 \ किमी मोटी होगी - वह ऊँचाई जिस पर [अंतर्राष्ट्रीय अंतरिक्ष स्टेशन](gloss:iss) पृथ्वी की परिक्रमा करता है!

बेशक, आपको याद रखने की ज़रूरत नहीं है कि पाई के कई अंक। वास्तव में, अंश `22/7 = 3.142…` एक महान सन्निकटन है।

:::

---
> id: pi-sequence

पाई की गणना के लिए एक दृष्टिकोण संख्याओं के अनंत अनुक्रमों का उपयोग कर रहा है। यहाँ एक उदाहरण है जो 1676 में [गॉटफ्राइड विल्हेम लीबनिज़](bio:leibniz) द्वारा खोजा गया था:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} जैसा कि हम इस श्रृंखला के अधिक से अधिक शब्दों की गणना करते हैं, हमेशा उसी पैटर्न का अनुसरण करते हुए, परिणाम करीब और पाई के करीब पहुंच जाएगा।

---
> id: pi-colours
> goals: hover

::: column.grow

कई गणितज्ञों का मानना है कि पाई के पास और भी अधिक उत्सुक संपत्ति है: कि यह एक __सामान्य संख्या है__ । इसका मतलब यह है कि 0 से 9 तक के अंक पूरी तरह से यादृच्छिक पर दिखाई देते हैं, जैसे कि प्रकृति ने पाई के मूल्य को निर्धारित करने के लिए, कई बार 10-पक्षीय पासा को असीम रूप से लुढ़काया था।

यहां आप पाई के पहले 100 अंक देख सकते हैं। कुछ कोशिकाओं को स्थानांतरित करें, यह देखने के लिए कि अंक कैसे वितरित किए जाते हैं।

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

यदि पाई सामान्य है, तो इसका मतलब है कि आप अंकों के _किसी भी_ स्ट्रिंग के बारे में सोच सकते हैं, और यह इसके अंकों में कहीं दिखाई देगा। यहां आप पाई के पहले दस लाख अंकों की खोज कर सकते हैं - क्या उनमें आपका जन्मदिन है?

::: .box.f-red.pi-box

#### पाई के एक लाख अंक

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

हम हैरी पॉटर की तरह एक पूरी किताब को भी अंकों के बहुत लंबे स्ट्रिंग में बदल सकते हैं (a = 01, b = 02, और इसी तरह)। यदि पाई सामान्य है, तो यह स्ट्रिंग अपने अंकों में कहीं दिखाई देगी - लेकिन इसे खोजने के लिए पर्याप्त अंकों की गणना करने में लाखों साल लगेंगे।

पाई को समझना आसान है, लेकिन विज्ञान और गणित में मौलिक महत्व है। यही कारण है कि हमारी संस्कृति में पाई असामान्य रूप से लोकप्रिय हो गई है (कम से कम, गणित के अन्य विषयों की तुलना में):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

यहां तक कि हर साल एक _पाई दिन_ है, जो या तो 14 मार्च को पड़ता है, क्योंकि `pi ≈ 3.14` , या 22 जुलाई को, क्योंकि `pi ≈ 22/7` ।

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## डिग्री और रेडियन

> section: radians
> id: degrees
> translated: auto

अब तक ज्यामिति में, हमने हमेशा कोणों को [डिग्री](gloss:degrees) में मापा है। ए __{.m-red} पूर्ण चक्र__ घूर्णन [[360]]°, a है __{.m-green} आधा वृत्त__ [[180]]°, a है __{.m-yellow} क्वार्टर सर्कल__ [[90]]° है, और इसी तरह।

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

{.r} संख्या 360 बहुत सुविधाजनक है क्योंकि यह कई अन्य संख्याओं से विभाज्य है: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, और इसी तरह। इसका मतलब है कि एक सर्कल के कई अंश भी पूरी संख्या में हैं। लेकिन क्या आपने कभी सोचा है कि 360 नंबर कहां से आता है? [जारी रखें](btn:next)

---
> id: babylon

::: column.grow

जैसा कि होता है, 360 डिग्री गणित की सबसे पुरानी अवधारणाओं में से एक है जिसका उपयोग हम आज भी करते हैं। वे 5000 साल से अधिक पुराने बाबुल में विकसित किए गए थे!

उस समय, गणित के सबसे महत्वपूर्ण अनुप्रयोगों में से एक खगोल विज्ञान में था। _सूरज_ चार मौसमों को निर्धारित करता है, जिसे किसानों को फसल उगाने के बारे में जानना होता है। इसी तरह, _चंद्रमा_ ज्वार का निर्धारण करता है, जो मछुआरों के लिए महत्वपूर्ण था। लोगों ने भविष्य का अनुमान लगाने, या देवताओं के साथ संवाद करने के लिए सितारों का भी अध्ययन किया।

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} गणना के लिए एक बेबीलोन की गोली `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

खगोलविदों ने देखा कि रात के दौरान एक विशिष्ट समय पर दिखाई देने वाले नक्षत्र हर दिन एक छोटे से स्थान पर स्थानांतरित हो जाते हैं - जब तक कि लगभग 360 दिनों के बाद, वे अपने प्रारंभिक बिंदु पर वापस आ गए थे। और यही कारण हो सकता है कि उन्होंने सर्कल को 360 डिग्री में विभाजित किया।

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

बेशक, एक वर्ष में वास्तव में 365 दिन हैं (ठीक है, 365.242199 सटीक होने के लिए), लेकिन बेबीलोन के गणितज्ञों ने सरल सूंडियों के साथ काम किया, और यह सन्निकटन पूरी तरह से पर्याप्त था।

इसने उनके मौजूदा बेस -60 नंबर सिस्टम (तब से) के साथ भी अच्छा काम किया `6 xx 60 = 360` )। यह प्रणाली यही कारण है कि हमारे पास अभी भी एक मिनट में 60 सेकंड और एक घंटे में 60 मिनट हैं - भले ही अधिकांश अन्य इकाइयों को [आधार 10](gloss:base-10) (जैसे एक दशक में 10 साल, या एक सदी में 100 साल) में मापा जाता है।

::: column.grow

हम में से कई के लिए, डिग्री में कोणों को मापना दूसरी प्रकृति है: 360° वीडियो है, स्केटबोर्डर्स 540s खींच सकते हैं, और कोई व्यक्ति अपना निर्णय बदलकर 180° मोड़ सकता है।

लेकिन गणितीय दृष्टिकोण से, 360 का चुनाव पूरी तरह से मनमाना है। यदि हम मंगल ग्रह पर रह रहे थे, तो एक चक्र में 670° और बृहस्पति पर एक वर्ष में 10,475 दिन हो सकते हैं।

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 मैकफ़्लिप, एक 540° रोटेशन

:::

---
> id: radians

### रेडियंस

सर्कल को कुछ संख्याओं (जैसे 360 डिग्री) में विभाजित करने के बजाय, गणितज्ञ अक्सर एक [__इकाई सर्कल__](gloss:unit-circle) (त्रिज्या 1 के साथ एक सर्कल) की [परिधि](gloss:circle-circumference) का उपयोग करके कोणों को मापना पसंद करते हैं।

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

ए [पूर्ण वृत्त](action:setState(0)) की परिधि है _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ ।

{.reveal(when="eqn-0")} के लिए [आधा चक्र रोटेशन](action:setState(1)), परिधि के साथ संबंधित दूरी है _{x-equation.small(solution="π" keys="+ × π" numeric)}_ ।

{.reveal(when="eqn-1")} के लिए [क्वार्टर सर्कल रोटेशन](action:setState(2)), परिधि के साथ दूरी है _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ ।

{.reveal(when="eqn-2")} और इसी तरह: कोणों को मापने के इस तरीके को [__रेडियन__](gloss:radians) कहा जाता है (आप इसे "त्रिज्या इकाइयों" के रूप में याद कर सकते हैं)।

:::

---
> id: radians-conversion

डिग्रियों में हर कोण का रेडियन में एक बराबर आकार होता है। दोनों के बीच परिवर्तित करना बहुत आसान है - जैसे आप मीटर और किलोमीटर, या सेल्सियस और फाहेहाइट जैसी अन्य इकाइयों के बीच परिवर्तित कर सकते हैं:

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} 2 _π_ रेड__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} रेड__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 रेड__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

आप रेडियंस _π_ की एक बहु के रूप में या तो महत्व देते हैं, या केवल एक दशमलव संख्या के रूप में लिख सकते हैं। क्या आप डिग्री और रेडियन में समकक्ष कोण आकार की इस तालिका को भर सकते हैं?

| __{.m-red} डिग्री__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} रेडियन__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### यात्रा की दूरी

आप रेडियन के बारे में सोच सकते हैं कि यूनिट सर्कल की परिधि के साथ "दूरी की दूरी" है। यह उन वस्तुओं के साथ काम करते समय विशेष रूप से उपयोगी है जो एक गोलाकार रास्ते पर बढ़ रहे हैं।

::: column.grow

उदाहरण के लिए, [अंतर्राष्ट्रीय अंतरिक्ष स्टेशन](gloss:iss) हर 1.5 घंटे में एक बार पृथ्वी की परिक्रमा करता है। इसका मतलब है कि इसके __घूमने की गति__ है [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] प्रति घंटे रेडियन।

{.reveal(when="blank-0")} एक [यूनिट सर्कल में](gloss:unit-circle) , रोटेशन की गति _वास्तविक_ गति के समान होती है, क्योंकि परिधि की लंबाई रेडियन में एक पूर्ण रोटेशन के समान होती है (दोनों हैं) `2pi` )।

{.reveal(when="blank-0" delay=1000)} आईएसएस कक्षा की त्रिज्या 6800 \ किमी है, जिसका अर्थ है कि आईएसएस की _वास्तविक_ गति होनी चाहिए [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 किमी प्रति घंटा।_

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

क्या आप देख सकते हैं कि, इस उदाहरण में, रेडियन डिग्री की तुलना में बहुत अधिक सुविधाजनक इकाई हैं? एक बार जब हम रोटेशन की गति जानते हैं, तो हमें वास्तविक गति प्राप्त करने के लिए बस त्रिज्या से गुणा करना होगा।

यहां एक और उदाहरण दिया गया है: आपकी कार में 0.25 \ मी त्रिज्या वाले पहिये हैं। यदि आप 20 \ m / s की गति से गाड़ी चला रहे हैं, तो आपकी कार के पहिए घूमते हैं [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] रेडियन प्रति सेकंड _{span.reveal(when="blank-0")} (या `80/(2pi) = 13` रोटेशन प्रति सेकंड)।_

---
> id: radians-trig

### त्रिकोणमिति

अधिकांश सरल ज्यामिति समस्याओं के लिए, डिग्री और रेडिएंस पूरी तरह से विनिमेय हैं - आप या तो जो चाहें उसे चुन सकते हैं, या एक प्रश्न आपको बता सकता है कि आपका उत्तर देने के लिए कौन सी इकाई है। हालांकि, एक बार जब आप अधिक उन्नत [त्रिकोणमिति](gloss:trigonometry) या [पथरी का](gloss:calculus) अध्ययन करते हैं, तो यह पता चला है। रेडियन डिग्री की तुलना में बहुत अधिक सुविधाजनक हैं।

::: column.grow

अधिकांश कैलकुलेटर में डिग्री और रेडियन के बीच स्विच करने के लिए एक [विशेष बटन](->.button.mode) होता है। ट्रिगोनोमेट्रिक फ़ंक्शंस जैसे [__पाप__](gloss:sin) , [__कॉस__](gloss:cos) और __टैन__ एंगल्स को इनपुट के रूप में लेते हैं, और उनके उलटा फ़ंक्शन __आर्क्सिन__ , __आर्कोस__ और __आर्कटन__ रिटर्न एंगल्स को आउटपुट के रूप में पेश करते हैं। वर्तमान कैलकुलेटर सेटिंग यह निर्धारित करती है कि इन कोणों के लिए कौन सी इकाइयों का उपयोग किया जाता है।

गणना करने के लिए इस कैलकुलेटर का उपयोग करने का प्रयास करें

{.text-center} पाप (30°) = [[0.5]] _{span.eqn-gap}_ cos (1°) = [[0.999]]
sin (30 रेड) = [[-0.988]] _{span.eqn-gap}_ cos (1 रेड) = [[0.54]]

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

साइन फ़ंक्शन का उपयोग करते समय रेडियन का उपयोग करना एक विशेष रूप से दिलचस्प लाभ है। अगर `θ` एक बहुत छोटा कोण है (20° या 0.3 रेड से कम), तब `sin(θ) ≈ θ` । उदाहरण के लिए,

{.text-center} पाप ( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} ...

{.reveal(when="var-0")} इसे __छोटा कोण सन्निकटन__ कहा जाता है, और यह त्रिकोणमितीय कार्यों वाले कुछ समीकरणों को सरल बना सकता है। आप भविष्य में इसके बारे में अधिक जानेंगे।

---

## स्पर्शरेखाएँ, तार और आर्क

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

पिछले अनुभागों में, आपने एक सर्कल के कई अलग-अलग हिस्सों में दिए गए नामों को सीखा - जैसे केंद्र, त्रिज्या, व्यास और परिधि। हालांकि, एक सर्कल से संबंधित कई ज्यामितीय तत्व हैं, जिन्हें हमें अधिक जटिल समस्याओं को हल करने की आवश्यकता होगी:

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

* {.r} ए [{.red} secant](target:secant) एक ऐसी रेखा है जो दो बिंदुओं पर एक वृत्त को काटती है। [जारी रखें](btn:next)
* {.r.reveal(when="next-0")} ए [{.green} कॉर्ड](target:chord) एक लाइन सेगमेंट है जिसका एंडपॉइंट एक सर्कल की परिधि पर स्थित है। [जारी रखें](btn:next)
* {.r.reveal(when="next-1")} ए [{.blue} स्पर्शरेखा](target:tangent) वह रेखा है जो किसी वृत्त को बिल्कुल एक बिंदु पर [स्पर्श करती](target:tangent) है। इसे __स्पर्शरेखा__ का __बिंदु__ कहा जाता है। [जारी रखें](btn:next)
* {.r.reveal(when="next-2")} एक [{.yellow} चाप](target:arc) एक वृत्त की परिधि का एक खंड है। [जारी रखें](btn:next)
* {.r.reveal(when="next-3")} ए [{.teal} सेक्टर](target:sector) एक सर्कल के इंटीरियर का एक हिस्सा है, जो एक _चाप_ और _दो रेडी_ द्वारा घिरा हुआ है। [जारी रखें](btn:next)
* {.r.reveal(when="next-4")} अंत में, ए [{.purple} सेगमेंट](target:segment) एक सर्कल के इंटीरियर का एक हिस्सा है, जो एक _चाप_ और _एक कॉर्ड_ द्वारा घिरा हुआ है। [जारी रखें](btn:next)

:::

---
> id: circle-parts-1

इस खंड में, हम इन सभी तत्वों के बीच संबंध को देखेंगे, और उनके गुणों के बारे में प्रमेय साबित करेंगे। अब के लिए सभी परिभाषाओं को याद रखने के बारे में चिंता न करें - आप हमेशा [शब्दावली का](->.footer-link[data-modal=glossarym]) उपयोग कर सकते हैं।

---

### स्पर्शरेखा

{.todo} जल्द आ रहा है!



---

### कॉर्ड्स

{.todo} जल्द आ रहा है!



---
> id: earth-arc

### आर्क और सेक्टर

::: column.grow

प्राचीन ग्रीस के अधिकांश वैज्ञानिक सहमत थे कि पृथ्वी एक गोला है। वहाँ बहुत सारे सबूत थे: समुद्र में क्षितिज के पीछे गायब होने वाले जहाजों से, रात के दौरान सितारों की परिपत्र गति तक।

दुर्भाग्य से, कोई नहीं जानता था कि पृथ्वी _कितनी बड़ी_ थी - लगभग 200 ईसा पूर्व तक, जब गणितज्ञ [एराटोस्थनीज](bio:eratosthenes) ने बुनियादी ज्यामिति का उपयोग करके पृथ्वी की त्रिज्या को मापने का एक सरल तरीका पाया। सभी की जरूरत है हम एक सर्कल के आर्क्स और सेक्टरों के बारे में थोड़ा और ज्ञान रखते हैं।

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

जैसा कि आप आरेख में देख सकते हैं, ए [{.red} चाप](target:arc) [[परिधि]] का एक हिस्सा है [[| व्यास |]] एक वृत्त की [[स्पर्शरेखा]] , और a [{.yellow} सेक्टर](target:sector) [[इंटीरियर]] का एक हिस्सा है [[| त्रिज्या |]] एक वृत्त की [[परिधि]] ।

::: .reveal(when="blank-0 blank-1")

दो बिंदुओं _A_ और _B के_ बीच के आर्क को अक्सर लिखा जाता है `arc(AB)` । यह परिभाषा थोड़ी अस्पष्ट है: एक है [{.purple} दूसरा चाप](target:major) जो _ए_ और _बी को_ जोड़ता है लेकिन सर्कल के चारों ओर दूसरा रास्ता जाता है।

दो चापों में से __छोटे__ को __लघु चाप__ कहा जाता है, और बड़े को __प्रमुख चाप__ कहा जाता है। यदि अंक _A_ और _B_ एक दूसरे के बिल्कुल विपरीत हैं, तो दोनों चापों की लंबाई समान है और [[अर्धवृत्त हैं | व्यास | परिधि]] ।

:::

:::

---
> id: arcs-1

::: column.grow

एक चाप की लंबाई या किसी सेक्टर के क्षेत्र को खोजने के लिए, हमें सर्कल के केंद्र में संबंधित कोण के बारे में जानना होगा: इसे सेक्टर कहा जाता है। [{.blue} केंद्रीय कोण](target:angle) ।

ध्यान दें कि चाप, क्षेत्र और कोण सभी एक पूर्ण वृत्त के _समान अनुपात_ को कैसे लेते हैं। उदाहरण के लिए, यदि [{.blue} केंद्रीय कोण](target:angle) है [90°](action:set90Deg()) , यह [[एक चौथाई]] लेता है [[| एक आधा | एक तिहाई]] [{.teal} पूरा घेरा](target:fangle) ।

::: .reveal(when="blank-0")

इसका मतलब यह है कि [{.red} चाप की लंबाई](target:arc) भी है `1/4` का [{.purple}](target:circ) सर्कल की [पूरी परिधि](target:circ) , और [{.yellow} क्षेत्र का क्षेत्र](target:sector) है `1/4` का [{.orange}](target:area) सर्कल के [पूरे क्षेत्र](target:area) ।

हम इस रिश्ते को एक समीकरण में व्यक्त कर सकते हैं:

{.text-center}`"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

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

अब हम इन समीकरणों को फिर से व्यवस्थित कर सकते हैं।

::: column(width=320 parent="padded-thin")

| [ चाप की लंबाई](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ सेक्टर क्षेत्र](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

जहाँ _r_ वृत्त की त्रिज्या है, और _c_ केंद्रीय कोण का आकार है।



---
> id: arcs-rad

यदि केंद्रीय कोण को [डिग्री के](gloss:degrees) बजाय [रेडियन](gloss:radians) में मापा जाता है, तो हम समान समीकरणों का उपयोग कर सकते हैं, लेकिन 360° के साथ प्रतिस्थापित करना होगा [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ चाप की लंबाई](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ सेक्टर क्षेत्र](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

ध्यान दें कि कैसे समीकरण बहुत सरल हो जाते हैं, और हर जगह _els_ रद्द हो जाते हैं। इसका कारण यह है, जैसा कि आप याद कर सकते हैं, [रेडियंस](/course/circles/radians#radians) की [परिभाषा](/course/circles/radians#radians) मूल रूप से त्रिज्या 1 के साथ एक सर्कल में एक चाप की लंबाई है।

अब देखते हैं कि हम पृथ्वी की परिधि की गणना करने के लिए आर्क्स और सेक्टरों का उपयोग कैसे कर सकते हैं। [जारी रखें](btn:next)

:::

---
> id: eratosthenes

प्राचीन मिस्र में, _स्वेनेट_ शहर नील नदी के किनारे स्थित था। स्वेनेट एक जिज्ञासु संपत्ति के साथ एक कुएं के लिए प्रसिद्ध था: हर साल एक पल था जब सूरज की रोशनी कुएं के बहुत नीचे तक पहुंच गई थी - 21 जून को दोपहर में, _गर्मियों में संक्रांति_ के दिन। उस सटीक समय में, कुएं का तल रोशन था, लेकिन इसके किनारे नहीं, जिसका अर्थ है कि सूर्य सीधे कुएं के ऊपर खड़ा था।

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} प्राचीन मिस्रियों ने चलने के लिए उठाए गए कदमों की संख्या की गिनती करके लंबी दूरी को मापा।

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} कुछ सूत्रों का कहना है कि नील नदी पर स्थित _एलिफेंटाइन द्वीप_ पर "वेल ऑफ़ एराटोस्थनीज" था।

:::

गणितज्ञ [एरेटोस्थेनेज](bio:eratosthenes) _अलेक्जेंड्रिया_ में रहते थे, के बारे में 800 \ किमी Swenet, जहां वह महान लाइब्रेरी के निदेशक थे के उत्तर में। अलेक्जेंड्रिया के शहर के केंद्र में एक ओबिलिस्क खड़ा था, एक पिरामिड आकार के शीर्ष के साथ एक लंबा, संकीर्ण स्मारक।

एराटोस्थनीज़ ने देखा कि गर्मियों में संक्रांति के दिन दोपहर में, ओबिलिस्क ने एक छाया फेंक दी - जिसका अर्थ है कि सूरज सीधे इसके ऊपर _नहीं_ था। उन्होंने कहा कि यह पृथ्वी की वक्रता के कारण था, और यह महसूस किया कि इसका उपयोग हमारे ग्रह की परिधि की गणना करने के लिए किया जा सकता है।

---
> id: eratosthenes-1

::: column.grow

{.r} यहां आप स्वेनेट में कुएं और साथ ही अलेक्जेंड्रिया में ओबिलिस्क देख सकते हैं। सूरज की किरणें सीधे कुएँ में गिरती हैं, लेकिन एक कोण पर ओबिलिस्क से टकराती हैं और छाया डालती हैं। [जारी रखें](btn:next)

::: .reveal(when="next-0")

एराटोस्थनीज ने मापा कि द [{.teal}](target:angle1) छाया का [कोण](target:angle1) 7.2° था। यह भी वैसा ही है [{.purple} का केंद्रीय कोण](target:angle2) [{.red}](target:arc) अलेक्जेंड्रिया से स्वेनेट तक [आर्क](target:arc) , क्योंकि वे [[बारी]] - [[बारी से हैं | खड़ा | संगत]] कोण।

:::

::: .reveal(when="blank-0")

अब हम आर्क लंबाई के लिए समीकरण का उपयोग कर सकते हैं जिसे हमने ऊपर प्राप्त किया है:

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

यदि हम इसे पुनर्व्यवस्थित करते हैं, तो हम पाते हैं कि पृथ्वी की परिधि है

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

अंत में, हम जानते हैं कि एक वृत्त की परिधि है `C = 2 pi r` , इसलिए पृथ्वी की त्रिज्या है

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` ।

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

एराटोस्थनीज का माप पुरातनता में सबसे महत्वपूर्ण प्रयोगों में से एक था। पृथ्वी के आकार का उनका अनुमान आश्चर्यजनक रूप से सटीक था, खासकर जब यह विचार करते हुए कि उनके पास केवल बहुत ही बुनियादी मापने के उपकरण थे।

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

बेशक, किलोमीटर जैसी आधुनिक इकाइयों में अपने मूल परिणामों का अनुवाद करना मुश्किल हो सकता है। प्राचीन ग्रीस में, दूरी को _स्टेडिया_ (लगभग 160 मीटर) में मापा गया था, लेकिन कोई सार्वभौमिक मानक नहीं था। हर क्षेत्र में थोड़ा अलग संस्करण था, और हम यह नहीं जानते कि कौन से एराटोस्थनीज़ ने उपयोग किया।

निम्नलिखित शताब्दियों में, वैज्ञानिकों ने पृथ्वी की त्रिज्या की गणना करने के लिए अन्य तरीकों का उपयोग करने की कोशिश की - कभी-कभी बहुत अलग और गलत परिणामों के साथ।

यह इन गलत मापों में से एक था जिसने क्रिस्टोफर कोलंबस को पुर्तगाल से पश्चिम की ओर जाने के लिए प्रेरित किया। उन्होंने मान लिया कि पृथ्वी वास्तव में इससे बहुत छोटी है, और भारत पहुंचने की उम्मीद है। वास्तव में, वह बीच में एक अलग महाद्वीप में पहुंचे: अमेरिका।

:::

---

### सेगमेंट

{.todo} जल्द आ रहा है!

---

## सर्कल सिद्धांत

> section: circle-theorems
> sectionStatus: dev

TODO

---

## चक्रीय बहुभुज

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## क्षेत्रों, शंकु और सिलिन्डरों

> section: spheres-cones-cylinders
> id: solids
> translated: auto

पिछले खंडों में, हमने एक सपाट सतह पर हलकों के गुणों का अध्ययन किया। लेकिन हमारी दुनिया वास्तव में त्रि-आयामी है, इसलिए कुछ 3 डी ठोसों पर एक नज़र डालते हैं जो हलकों पर आधारित हैं:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} एक [__सिलेंडर__](gloss:cylinder) में दो सर्वांगसम होते हैं, एक घुमावदार सतह से जुड़ने वाले समानांतर वृत्त।

::: column(width=220)

    x-solid(size=220)

{.text-center} एक [__शंकु__](gloss:cone) में एक गोलाकार आधार होता है जो एक बिंदु पर जाता है (जिसे शीर्ष कहा जाता है)।

::: column(width=220)

    x-solid(size=220 static)

{.text-center} एक [__गोले__](gloss:sphere) की सतह पर प्रत्येक बिंदु अपने केंद्र से समान दूरी पर है।

:::

गौर करें कि एक गोले की परिभाषा लगभग एक [[सर्कल]] की परिभाषा के समान कैसे है [[| त्रिज्या | घन]] - तीन आयामों को छोड़कर!

---
> id: gasometer

### सिलेंडर

::: column.grow

यहां आप जर्मनी के _ओबरहॉसन_ में बेलनाकार _गैसोमीटर_ देख सकते हैं। यह प्राकृतिक गैस का भंडारण करता था जिसका उपयोग आस-पास के कारखानों और बिजली संयंत्रों में ईंधन के रूप में किया जाता था। गैसोमीटर 120 मीटर लंबा है, और इसका आधार और छत त्रिज्या 35 मीटर के साथ दो बड़े वृत्त हैं। दो महत्वपूर्ण प्रश्न हैं जिनका जवाब इंजीनियर देना चाहते हैं:

* कितनी प्राकृतिक गैस संग्रहित की जा सकती है? यह [[आयतन है | क्षेत्र |]] सिलेंडर का [[व्यास]] ।
* {.reveal(when="blank-0")} गैसोमीटर के निर्माण के लिए कितना स्टील चाहिए? यह (लगभग) [[सतह क्षेत्र है | परिधि |]] सिलेंडर का [[विकर्ण]] ।

{.reveal(when="blank-0 blank-1")} आइए इन दोनों परिणामों के लिए सूत्र खोजने का प्रयास करें!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} गैसोमीटर ओबरहाउज़ेन

:::

---
> id: cylinder-prism

#### एक सिलेंडर की मात्रा

एक सिलेंडर के ऊपर और नीचे दो सर्वांगसम वृत्त होते हैं, जिन्हें __आधार__ कहते __हैं__ । __{.m-blue}__ एक बेलन की __ऊँचाई _h___ इन ठिकानों के बीच की दूरी है, और __{.m-red}__ एक बेलन का __त्रिज्या _r___ केवल वृताकार आधारों की त्रिज्या है।

हम एक का उपयोग कर एक सिलेंडर अनुमानित कर सकते हैं ${n}{n|5|3,20,1} -सूखे [__प्रिज्म__](gloss:prism) जैसे-जैसे पक्षों की संख्या बढ़ती है, प्रिज्म सिलेंडर की तरह अधिक से अधिक दिखाई देने लगता है:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

भले ही एक सिलेंडर तकनीकी रूप से एक प्रिज्म नहीं है, लेकिन वे कई गुणों को साझा करते हैं। दोनों स्थितियों में, हम उनके क्षेत्रफल को गुणा करके आयतन ज्ञात कर सकते हैं __{.m-red}__ उनके साथ __आधार__ __{.m-blue} ऊंचाई__ । इसका मतलब है कि त्रिज्या वाला सिलेंडर _{.b.m-red} आर_ और ऊंचाई _{.b.m-blue} ज_ में आयतन है

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} याद रखें कि त्रिज्या और ऊंचाई समान इकाइयों का उपयोग करना चाहिए। उदाहरण के लिए, यदि _आर_ और _एच_ दोनों सेमी में हैं, तो वॉल्यूम में होगा [[`"cm"^3`|`"cm"^2`| सेमी]] ।

---
> id: oblique-cylinder
> goals: slide

::: column.grow

ऊपर के उदाहरणों में, सिलेंडर के दो आधार हमेशा _एक दूसरे के ऊपर होते_ थे: इसे एक __सही सिलेंडर__ कहा जाता है। यदि कुर्सियां सीधे एक दूसरे के ऊपर नहीं हैं, तो हमारे पास एक __तिरछा सिलेंडर है__ । आधार अभी भी समानांतर हैं, लेकिन दोनों तरफ एक कोण पर "झुक" लगते हैं जो 90° नहीं है।

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} इटली में _पीसा_ का _लीनिंग टॉवर_ एक तिरछा सिलेंडर नहीं है।

:::

---
> id: cavalieri
> goals: slide

एक तिरछे सिलिंडर का आयतन बिलकुल वैसा ही होता है जैसा कि एक ही त्रिज्या और ऊँचाई के साथ एक दायें सिलिंडर का होता है। यह [__कैवलियरी के सिद्धांत के__](gloss:cavalieri) कारण है, जिसका नाम इतालवी गणितज्ञ [बोनावेंटुरा कैवेलियरी के](bio:cavalieri) नाम पर रखा गया है: यदि दो ठोसों में प्रत्येक ऊंचाई पर समान पार-अनुभागीय क्षेत्र होता है, तो उनके पास समान मात्रा होगी।

एक सिलेंडर को पतली डिस्क के बहुत से टुकड़े करने की कल्पना करें। हम तब तिरछे सिलेंडर प्राप्त करने के लिए इन डिस्क को क्षैतिज रूप से स्लाइड कर सकते हैं। व्यक्तिगत डिस्क का आयतन नहीं बदलता क्योंकि आप इसे तिरछा बनाते हैं, इसलिए कुल आयतन भी स्थिर रहता है:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### एक सिलेंडर की सतह क्षेत्र

::: column.grow

एक सिलेंडर के सतह क्षेत्र को खोजने के लिए, हमें इसे अपने फ्लैट [नेट](gloss:net) में "अनरोल" करना होगा। आप इसे स्वयं आजमा सकते हैं, उदाहरण के लिए खाने की कैन पर लेबल को छीलकर।

दो [[वृत्त हैं | क्षेत्रों | वर्गों]] , एक शीर्ष पर और एक सिलेंडर के नीचे स्थित है। घुमावदार पक्ष वास्तव में एक बड़ी [[आयत है | वर्ग | दीर्घवृत्त]] ।

* {.reveal(when="blank-0 blank-1")} प्रत्येक क्षेत्र में दो वृत्त हैं _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ ।
* {.reveal(when="eqn-0")} आयत की ऊंचाई है _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} और आयत की चौड़ाई [[परिधि]] के समान है [[| व्यास |]] मंडलियों की [[स्पर्शरेखा]] :_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ ।

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

इसका मतलब है कि त्रिज्या _आर_ और ऊंचाई _एच के_ साथ एक सिलेंडर का कुल सतह क्षेत्र द्वारा दिया गया है

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ ।

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

हमारी दुनिया में हर जगह सिलेंडर मिल सकते हैं - सोडा के डिब्बे से लेकर टॉयलेट पेपर या पानी के पाइप तक। क्या आप किसी अन्य उदाहरण के बारे में सोच सकते हैं?

ऊपर स्थित _गैसमीटर का_ दायरा 35 मीटर और ऊंचाई 120 मीटर थी। अब हम गणना कर सकते हैं कि इसकी मात्रा लगभग [[461,000 its 1000 है]] `"m"^3` और इसका सतह क्षेत्र लगभग [[34,080]] approximately [[100 है]] `"m"^2` ।

---
> id: cone

### कोन

::: column.grow

[__शंकु__](gloss:cone) एक त्रि-आयामी ठोस होता है जिसमें एक गोलाकार होता है __{.m-red} आधार__ । आरेख में दिखाए गए अनुसार इसका पक्ष "ऊपर की ओर", और एकल बिंदु में समाप्त होता है जिसे कहा जाता है __{.m-green} वर्टेक्स__ ।

__{.m-red}__ शंकु की __त्रिज्या__ परिपत्र आधार की त्रिज्या है, और __{.m-blue}__ शंकु की __ऊंचाई__ आधार से शिखर तक लंबवत दूरी है।

पहले जो अन्य आकृतियाँ हमें मिलीं, जैसे शंकु हमारे चारों ओर हैं: आइसक्रीम कोन, ट्रैफिक शंकु, कुछ छतें और यहां तक कि क्रिसमस ट्री भी। आप और क्या सोच सकते हैं?

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

#### एक शंकु का आयतन

::: column.grow

हमने पहले एक सिलेंडर का आयतन प्रिज्म का उपयोग करके इसे अनुमानित किया था। इसी तरह, हम एक [__पिरामिड__](gloss:pyramid) का उपयोग करके एक शंकु की मात्रा पा सकते हैं।

यहाँ आप देख सकते हैं a ${n}{n|5|3,18,1} -साथ पिरामिड। जैसे-जैसे पक्षों की संख्या बढ़ती है, पिरामिड शंकु की तरह अधिक से अधिक दिखाई देने लगता है। वास्तव में, हम शंकु को पिरामिड के _रूप में असीम रूप से कई_ पक्षों के बारे में सोच सकते हैं!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

इसका मतलब यह भी है कि हम वॉल्यूम के लिए समीकरण का उपयोग कर सकते हैं: `V = 1/3 "base" × "height"` । शंकु का आधार एक चक्र है, इसलिए त्रिज्या _आर_ और ऊंचाई _एच के_ साथ एक शंकु की मात्रा है

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

एक सिलेंडर की मात्रा के लिए समीकरण के साथ समानता को नोटिस करें। एक ही आधार और ऊंचाई के साथ, शंकु के _चारों ओर_ एक सिलेंडर खींचने की कल्पना करें - इसे __परिचालित सिलेंडर__ कहा जाता है। अब, शंकु ठीक [[एक तिहाई]] ऊपर ले जाएगा [[| आधा |]] सिलेंडर की मात्रा का [[एक चौथाई]] :

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} नोट: आप सोच सकते हैं कि एक सन्निकटन के रूप में असीम रूप से कई छोटे पक्ष थोड़ा "अभेद्य" है। गणितज्ञों ने शंकु की मात्रा की गणना करने के लिए एक अधिक सीधा रास्ता खोजने की कोशिश में लंबा समय बिताया। 1900 में, महान गणितज्ञ [डेविड हिल्बर्ट](bio:hilbert) ने इसे गणित में 23 सबसे महत्वपूर्ण अनसुलझी समस्याओं में से एक के रूप में नामित किया! आज हम जानते हैं कि यह वास्तव में असंभव है।

---
> id: oblique-cone
> goals: slide

::: column.grow

सिलेंडर की तरह, एक शंकु को "सीधा" होना जरूरी नहीं है। यदि शीर्ष सीधे आधार के केंद्र पर है, तो हमारे पास एक __सही शंकु है__ । अन्यथा, हम इसे __तिरछा शंकु कहते हैं__ ।

एक बार फिर, हम कैवलियरी के सिद्धांत का उपयोग करके दिखा सकते हैं कि सभी तिरछे शंकु में समान मात्रा है, जब तक कि उनके पास एक ही आधार और ऊंचाई है।

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### एक शंकु का भूतल क्षेत्र

::: column.grow

शंकु के सतह क्षेत्र को खोजना थोड़ा अधिक मुश्किल है। पहले की तरह, हम एक शंकु को इसके जाल में खोल सकते हैं। स्लाइडर देखें कि क्या होता है: इस स्थिति में, हमें एक सर्कल और एक [[सर्कल सेक्टर मिलता है | वृत्त खंड | वृत्त चाप]] ।

{.reveal(when="blank-0")} अब हमें बस इन दोनों घटकों के क्षेत्र को जोड़ना है। __{.m-yellow} आधार__ त्रिज्या _आर के_ साथ एक चक्र है, इसलिए इसका क्षेत्र है

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ ।

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

की त्रिज्या __{.m-green} सेक्टर__ एक शंकु के रिम से उसके शीर्ष तक की दूरी के समान है। इसे कहते हैं [{.pill.green.b} तिरछी ऊंचाई](target:s) नहीं शंकु के [_है,_](target:s) और सामान्य रूप में एक ही [{.pill.blue.b} ऊंचाई _एच_](target:h) । [पाइथागोरस](gloss:pythagoras-theorem) का उपयोग करके हम तिरछी ऊँचाई पा सकते हैं:

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
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

[{.pill.red}](target:arc) सेक्टर की [चाप की लंबाई](target:arc) [[परिधि]] के समान है [[| व्यास | का चाप]] [{.pill.yellow} आधार](target:base) : _{span.reveal(when="blank-0")}`2 π r` । अब हम [सूत्र](gloss:circle-sector) हम एक पिछले अनुभाग में व्युत्पन्न का उपयोग कर क्षेत्र का क्षेत्रफल ज्ञात कर सकते हैं:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

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

अंत में, हमें बस के क्षेत्र को जोड़ना होगा __{.m-yellow} आधार__ और का क्षेत्र __{.m-green} क्षेत्र__ , कुल सतह को प्राप्त करने के लिए शंकु हैं:

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### क्षेत्रों

::: column.grow

एक [__गोला__](gloss:sphere) एक तीन आयामी ठोस होता है जिसमें सभी बिंदु होते हैं जो किसी दिए गए से समान दूरी पर होते हैं __{.m-green} केंद्र _सी___ । इस दूरी को कहा जाता है __{.m-red}__ क्षेत्र के __त्रिज्या _आर___ ।

आप एक क्षेत्र को "तीन-आयामी [सर्कल](gloss:circle) " के रूप में सोच सकते हैं। एक वृत्त की तरह, एक गोले में भी एक होता है __{.m-blue} व्यास _d___ , जो [[दो बार है |]] त्रिज्या की [[आधी]] लंबाई, साथ ही जीवा और धर्मनिरपेक्ष।

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} एक [पिछले अनुभाग](/course/circles/tangets-chords-arcs#eratosthenes-1) में आपने सीखा यूनानी गणितज्ञ [एरेटोस्थेनेज](bio:eratosthenes) एक पोल की छाया का उपयोग कर पृथ्वी की त्रिज्या गणना कैसे की जाती है - यह 6371 किलोमीटर था। अब, आइए पृथ्वी के कुल आयतन और सतह क्षेत्र को खोजने का प्रयास करें। [जारी रखें](btn:next)

---
> id: sphere-volume

#### एक क्षेत्र का आयतन

एक गोले का आयतन ज्ञात करने के लिए, हमें एक बार फिर कैवलियरी के सिद्धांत का उपयोग करना होगा। चलो गोलार्ध से शुरू करते हैं - भूमध्य रेखा के साथ आधे में एक गोला काटा। हमें गोलार्ध के समान त्रिज्या और ऊंचाई वाले सिलेंडर की भी आवश्यकता होती है, लेकिन बीच में एक उल्टे शंकु "कट आउट" के साथ।

जैसे ही आप नीचे स्लाइडर ले जाते हैं, आप आधार के ऊपर एक विशिष्ट ऊंचाई पर इन दोनों आकृतियों के क्रॉस-सेक्शन को देख सकते हैं:

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

{.reveal(when="slider-0")} आइए हम इन दोनों ठोस पदार्थों के अंतर-अनुभागीय क्षेत्र को कुछ दूरी पर खोजने का प्रयास करें [{.pill.blue}](target:h) आधार के ऊपर [ऊँचाई _h_](target:h) ।

::: column.grow

{.reveal(when="slider-0")} गोलार्ध का क्रॉस-सेक्शन हमेशा एक [[चक्र होता है | अंगूठी | सिलेंडर]] ।

{.reveal(when="blank-0")} [{.pill.red}](target:x) क्रॉस-सेक्शन का [त्रिज्या _x_](target:x) एक का हिस्सा है [{.pill.yellow} समकोण त्रिभुज](target:tri) , इसलिए हम [पाइथागोरस का](gloss:pythagoras-theorem) उपयोग कर सकते हैं:

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` ।

अब, क्रॉस सेक्शन का क्षेत्र है

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

कट-आउट सिलेंडर का क्रॉस-सेक्शन हमेशा एक [[रिंग होता है | वृत्त | शंकु]] ।

::: .reveal(when="blank-1")

छेद का त्रिज्या _h है_ । हम छेद के क्षेत्र को बड़े सर्कल के क्षेत्र से घटाकर रिंग का क्षेत्र पा सकते हैं:

| _ए_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

ऐसा लगता है कि दोनों ठोसों का हर स्तर पर समान पार-अनुभागीय क्षेत्र है। कैवलियरी के सिद्धांत के अनुसार, दोनों ठोस पदार्थों की [[मात्रा]] समान होनी चाहिए [[| सतह क्षेत्र | परिधि]] ! _{span.reveal(when="blank-0")} हम [सिलेंडर](gloss:cylinder-volume) के आयतन और [शंकु](gloss:cone-volume) की मात्रा को घटाकर गोलार्ध का आयतन ज्ञात कर सकते हैं:_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

एक गोले में [[दो]] गोलार्ध होते हैं, _{span.reveal(when="blank-0")} जिसका अर्थ है कि इसकी मात्रा होनी चाहिए_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` ।

---
> id: earth-volume
> goals: numbers

::: column.grow

पृथ्वी 6,371 \ किमी के त्रिज्या के साथ (लगभग) एक गोला है। इसलिए इसकी मात्रा है

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
| | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} पृथ्वी का औसत घनत्व है `5510 "kg/m"^3` । इसका मतलब है कि इसका कुल द्रव्यमान है

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} यह एक 6 के बाद 24 शून्य है!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

यदि आप एक सिलेंडर, शंकु और गोले के आयतन के समीकरणों की तुलना करते हैं, तो आप ज्यामिति में सबसे संतोषजनक संबंधों में से एक को नोटिस कर सकते हैं। कल्पना कीजिए कि हमारे पास आधार के व्यास के समान ऊंचाई वाला एक सिलेंडर है। हम अब एक शंकु और एक गोले को इसके अंदर पूरी तरह से फिट कर सकते हैं:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} इस शंकु में त्रिज्या है `r` और ऊंचाई `2r` । इसकी मात्रा है _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} इस क्षेत्र में त्रिज्या है `r` । इसकी मात्रा है _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} इस सिलेंडर में त्रिज्या है `r` और ऊंचाई `2r` । इसकी मात्रा है _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} अगर हम [[जोड़ते हैं]] तो नोटिस कैसे करें [[| घटाना |]] शंकु और गोले की मात्रा को [[गुणा]] करें, हमें सिलेंडर का आयतन बिल्कुल मिलता है!

---
> id: sphere-maps
> goals: move projection

#### सतह क्षेत्र का एक क्षेत्र

एक गोले की सतह क्षेत्र के लिए एक सूत्र खोजना बहुत मुश्किल है। एक कारण यह है कि हम एक गोले की सतह को खोल और "समतल" नहीं कर सकते हैं, जैसे हमने पहले शंकु और सिलेंडर के लिए किया था।

नक्शे बनाने की कोशिश करते समय यह एक विशेष मुद्दा है। पृथ्वी की एक घुमावदार, तीन आयामी सतह है, लेकिन हर मुद्रित नक्शे को सपाट और द्वि-आयामी होना चाहिए। इसका मतलब यह है कि भूगोलकारों को धोखा देना पड़ता है: कुछ क्षेत्रों को बढ़ाकर या निचोड़कर।

यहां आप कुछ अलग प्रकार के नक्शे देख सकते हैं, जिन्हें __अनुमान__ कहा जाता __है__ । लाल वर्ग को स्थानांतरित करने का प्रयास करें, और देखें कि यह क्षेत्र _वास्तव_ में ग्लोब पर कैसा दिखता है:

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

एक गोले के सतह क्षेत्र को खोजने के लिए, हम एक बार फिर इसे एक अलग आकार का उपयोग करके अनुमानित कर सकते हैं - उदाहरण के लिए बहुत सारे चेहरे के साथ एक पॉलीहेड्रॉन। जैसे-जैसे चेहरों की संख्या बढ़ती है, पॉलीहेड्रोन एक गोले की तरह अधिक से अधिक दिखना शुरू हो जाता है।

{.todo} आ रहा है SOON: क्षेत्र का सतही क्षेत्र प्रमाण

---

## शंकुधारी खंड

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

सर्कल चार अलग-अलग आकृतियों में से एक है जिसे एक [शंकु के](gloss:cone) माध्यम से "स्लाइस" का उपयोग करके बनाया जा सकता है। यह एक मशाल के प्रकाश शंकु का उपयोग करके दिखाया जा सकता है:

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

यदि आप टॉर्च को नीचे की ओर इंगित करते हैं, तो आपको एक [[चक्र]] दिखाई देता है [[| अंडाकार |]] प्रकाश का [[अंडाकार]] । _{span.reveal(when="blank-0")} यदि आप शंकु को झुकाते हैं, तो आपको एक [__दीर्घवृत्त__](gloss:ellipse) मिलता [__है__](gloss:ellipse) । यदि आप इसे आगे भी झुकाते हैं, तो आपको एक [__पेराबोला__](gloss:parabola) या एक [__हाइपरबोला मिलता है__](gloss:hyperbola) ।_

---
> id: conics-2

::: column.grow

सामूहिक रूप से, इन चार आकृतियों को [__शंकुधारी खंड__](gloss:conic-section) कहा जाता [__है__](gloss:conic-section) । भले ही वे सभी बहुत अलग दिखते हैं, वे बारीकी से संबंधित हैं: वास्तव में, वे सभी एक ही समीकरण का उपयोग करके उत्पन्न हो सकते हैं!

शंकु वर्गों का अध्ययन सबसे पहले पेरगा के प्राचीन ग्रीक गणितज्ञ [एपोलोनियस](bio:apollonius) द्वारा किया गया था, जिन्होंने उन्हें अपने असामान्य नाम भी दिए थे।

बाद के पाठ्यक्रमों में, आप परवल और हाइपरबोलस के बारे में अधिक जानेंगे। अभी के लिए, आइए दीर्घवृत्त पर एक करीब से नजर डालें।

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### अनेक बिंदु

एक दीर्घवृत्त लगभग एक "लम्बी वृत्त" जैसा दिखता है। वास्तव में, आप इसके बारे में _दो केंद्रों के_ साथ एक सर्कल के रूप में सोच सकते _हैं_ - इन्हें __फोकल पॉइंट__ कहा जाता है। जैसे किसी वृत्त के प्रत्येक बिंदु की उसके केंद्र से समान दूरी होती है, वैसे ही एक दीर्घवृत्त के प्रत्येक बिंदु _की दूरी_ उसके दो केंद्र बिंदुओं के समान _होती है_ ।

यदि आपके पास दो निश्चित बिंदुओं से जुड़ी एक लंबी स्ट्रिंग है, तो आप तारों की अधिकतम पहुंच का पता लगाकर एक सही दीर्घवृत्त खींच सकते हैं:

{.todo} जल्द ही आ रहा है: एलीपेस इंटरेक्टिव ड्राइंग

---
> id: ellipses-2
> goals: v0 v1 v2 v3

कई अन्य भौतिक निरूपण हैं कि आप कैसे एक दीर्घवृत्त आकर्षित कर सकते हैं:

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

### ग्रहों की परिक्रमा

::: column.grow

आप इस पाठ्यक्रम की शुरुआत से याद कर सकते हैं, कि प्राचीन ग्रीक खगोलविदों का मानना था कि पृथ्वी ब्रह्मांड के केंद्र में है और सूर्य, चंद्रमा और ग्रह पृथ्वी के चारों ओर गोलाकार कक्षाओं में घूमते हैं।

दुर्भाग्य से, आकाश के खगोलीय अवलोकन ने इसका समर्थन नहीं किया। उदाहरण के लिए, सूर्य वर्ष के कुछ हिस्सों के दौरान बड़ा और दूसरों के दौरान छोटा दिखाई दिया। एक वृत्त पर, प्रत्येक बिंदु पर [[समान]] होना चाहिए [[| और बढ़ता हुआ |]] इसके केंद्र से [[कम]] दूरी।

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Nica के ग्रीक खगोलशास्त्री हिप्पार्कस

:::

---
> id: epicycles
> goals: play

इसे ठीक करने के लिए, खगोलविदों ने सौर मंडल के अपने मॉडल में __एपिकसाइकल__ को जोड़ा: ग्रह पृथ्वी के चारों ओर एक बड़े वृत्त पर चलते हैं, जबकि एक साथ एक छोटे वृत्त पर घूमते हैं। बहुत जटिल होते हुए, यह 1000 वर्षों से अधिक समय तक हमारे ब्रह्मांड का सबसे व्यापक रूप से स्वीकृत मॉडल था:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} यह ग्रह बनाता है ${n}{n|6|2,12,1} बड़े सर्कल ( __deferent__ ) के चारों ओर एक रोटेशन के दौरान छोटे सर्कल ( __एपिसायकल__ ) के आसपास घुमाव।

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} __जियुस्ट्रिक मॉडल__ में __एपिक चक्रों__ की एक 16-शताब्दी की ड्राइंग। ग्रीक शब्द "प्लैनेट्स" का अर्थ है "घूमना"।

:::

---
> id: kepler
> goals: play

::: column.grow

समय के साथ, लोगों ने महसूस किया कि पृथ्वी सूर्य ( __परिकल्पना मॉडल__ ) की परिक्रमा करने वाले कई ग्रहों में से एक है, लेकिन यह 1609 तक नहीं था, खगोलविज्ञानी [जोहान केप्लर](bio:kepler) ने पाया कि ग्रह वास्तव में _अण्डाकार कक्षाओं_ पर चलते हैं।

सूर्य इन दीर्घवृत्त के दो केंद्र बिंदुओं में से एक में है। जैसे-जैसे वे आगे बढ़ते जाते हैं, वैसे-वैसे वे सूर्य के करीब आते जाते हैं, और उनकी गति धीमी होती जाती है।

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

कुछ दशकों बाद, [आइजैक न्यूटन](bio:newton) [__गुरुत्वाकर्षण के__](gloss:gravity) अपने नए विकसित कानूनों का उपयोग करते हुए केपलर की टिप्पणियों को साबित करने में सक्षम थे। न्यूटन ने महसूस किया कि ब्रह्मांड में किसी भी दो द्रव्यमान के बीच एक बल है - दो चुम्बकों के बीच आकर्षण के समान।

गुरुत्वाकर्षण वह है जो सब कुछ जमीन पर गिरा देता है और गुरुत्वाकर्षण वह भी है जो ग्रहों को सूर्य के चारों ओर ले जाता है। यह केवल महान गति है जिस पर ग्रह चलते हैं, जो उन्हें सीधे सूर्य में गिरने से रोकता है।

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

न्यूटन के नियमों का उपयोग करते हुए, आप उस रास्ते को प्राप्त कर सकते हैं जो गुरुत्वाकर्षण बल के तहत चलते समय वस्तुओं को ले जाता है। यह पता चला है कि ग्रह दीर्घवृत्त पर चलते हैं, लेकिन धूमकेतु जैसी अन्य वस्तुएं [परवलयिक](gloss:parabola) या [अतिशयोक्तिपूर्ण](gloss:hyperbola) पथ पर यात्रा कर सकती हैं: वे सूर्य के करीब उड़ते हैं और ब्रह्मांड में शूटिंग करने से पहले कभी वापस नहीं आते हैं।

किंवदंती के अनुसार, एक गिरते सेब ने गुरुत्वाकर्षण के बारे में सोचने के लिए न्यूटन को प्रेरित किया। वह सभी समय के सबसे प्रभावशाली वैज्ञानिकों में से एक थे, और उनके विचारों ने लगभग 300 वर्षों तक दुनिया के बारे में हमारी समझ को आकार दिया - जब तक कि अल्बर्ट आइंस्टीन ने 1905 में सापेक्षता की खोज नहीं की।

:::
