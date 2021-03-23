# फ्रैक्टल्स

## परिचय

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

जब प्रकृति के चारों ओर देखते हैं, तो आपने इन जैसे जटिल पौधों पर ध्यान दिया होगा:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} यह {११} फर्न {११ ९} में कई छोटे पत्ते होते हैं जो एक बड़ी शाखा से निकलते हैं।

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} यह {१२१} रोमनस्को ब्रोकोली {१२२} में छोटे {१२३} शंकु {१२४} होते हैं, जो बड़े आकार के होते हैं।

:::

{.reveal(when="blank-0")} प्रारंभ में, ये अत्यधिक जटिल आकृतियों की तरह दिखाई देते हैं - लेकिन जब आप करीब देखते हैं, तो आप देख सकते हैं कि वे दोनों एक अपेक्षाकृत सरल पैटर्न का पालन करते हैं: सभी {१२५} व्यक्तिगत हिस्से {१२६} पौधों के बिल्कुल समान दिखते हैं पौधा, बस छोटा। एक ही पैटर्न को छोटे पैमाने पर बार-बार दोहराया जाता है। [जारी रखें](btn:next)

---

> id: fern

गणित में, हम इस संपत्ति को __आत्म-समानता__ कहते हैं, और इसके आकार को [__भग्न__](gloss:fractal) कहा जाता है। वे सभी गणित में सबसे सुंदर और सबसे विचित्र वस्तुओं में से कुछ हैं।

अपने स्वयं के भग्न बनाने के लिए, हमें एक साधारण पैटर्न के साथ शुरू करना होगा और फिर इसे छोटे पैमाने पर बार-बार दोहराना होगा।

::: column.grow

सबसे सरल पैटर्नों में से एक [{.pill.red} लाइन सेगमेंट](target:s1) हो सकता है, [{.pill.blue} दो और सेगमेंट](target:s2) एक सिरे से बंटकर। यदि हम इस पैटर्न को दोहराते हैं, तो इन दोनों नीले खंडों की दो और शाखाएँ होंगी।

आप सभी शाखाओं की लंबाई और कोण को बदलने के लिए [नीले डॉट्स](target:dot) को स्थानांतरित कर सकते हैं। फिर [स्लाइडर](->#fern-slider) का उपयोग करके पुनरावृत्तियों की संख्या बढ़ाएं।

{.reveal(when="slider-0")} शाखाओं की स्थिति के आधार पर, आप पूरी तरह से अलग पैटर्न बना सकते हैं - ऊपर [फर्न](action:set(130,228,197,184)) जैसा लग रहा है, एक [पेड़](action:set(160,186,200,186)), या [नेस्टेड पेंटागन](action:set(113,235,232,238))। और क्या मिल सकता है? [जारी रखें](btn:next)

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

एक और प्रसिद्ध भग्न [__सीरपिन्स्की त्रिकोण__](gloss:sierpinski-triangle) है। इस मामले में, हम एक बड़े, समबाहु त्रिभुज के साथ शुरू करते हैं, और फिर शेष भागों में से छोटे त्रिकोणों को बार-बार काटते हैं।

{.reveal(when="slider=0")} ध्यान दें कि अंतिम आकृति [से बनी है, जो स्वयं की तीन समान प्रतियाँ](target:x) हैं, और इनमें से प्रत्येक पूरी त्रिभुज की छोटी प्रतियों से बनी है! आप त्रिकोण में हमेशा के लिए ज़ूम कर सकते हैं, और पैटर्न और आकार हमेशा दोहराते रहेंगे।

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

इस अध्याय _के आरंभ में पौधे भग्न की तरह_ लगते हैं, लेकिन वास्तविक जीवन में _सच_ भग्न बनाना स्पष्ट रूप से असंभव है। यदि हम एक ही पैटर्न को बार-बार, छोटे और छोटे से दोहराते रहें, तो हम अंततः कोशिकाओं, अणुओं या परमाणुओं को प्राप्त कर लेंगे जिन्हें अब विभाजित नहीं किया जा सकता है।

हालांकि, गणित का उपयोग करते हुए, हम उन गुणों के बारे में सोच सकते हैं जो वास्तविक भग्न "होंगे" - और ये बहुत ही आश्चर्यजनक हैं ... [{:::}

---
> id: dimension

### भग्न आयाम

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

पहले, आइए भग्न के आयाम के बारे में सोचते हैं। एक रेखा का आयाम [[1]] है। _{span.reveal(when="blank-0")} जब इसे 2 के कारक से स्केल किया जाता है, तो इसकी लंबाई `2^1 = 2` के कारक से बढ़ जाती है। जाहिर है!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

एक वर्ग का आयाम [[2]] है। {१ {२} {}०६}} इसे २ के कारक से स्केल करने पर, इसका क्षेत्रफल {१6१} {१ 18६} ४ {१}}} {१ }३} के कारक से बढ़ जाता है।

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

एक घन का आयाम [[3]] है। {१ ९ १} {}०}}} इसे २ के कारक से स्केल करते हुए, इसकी मात्रा {१ ९ ०} {१ ९ 8} {{१ ९।}} के कारक से बढ़ जाती है। {१ ९ २} {१ ९ ३} {}०}} ध्यान दें कि छवि में बड़ा घन। छोटी एक की 8 प्रतियां शामिल हैं!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

अब चलो Sierpinski त्रिकोण पर एक नजर डालते हैं। यदि हम इसे 2 के कारक से मापते हैं, तो आप देख सकते हैं कि यह "201} 3]] के कारक से" क्षेत्र "बढ़ जाता है।

{.reveal(when="blank-0")} बता दें कि _d_ Sierpinski त्रिकोण का आयाम है। ऊपर के समान पैटर्न का उपयोग करके, हमें `2^d = 3` मिलता है। दूसरे शब्दों में, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} 21 1.585…_

:::

---
> id: dimension-4

लेकिन रुकिए ... किसी चीज़ का एक आयाम कैसे हो सकता है जो पूर्णांक नहीं है? यह असंभव लगता है, लेकिन यह भग्न के अजीब गुणों में से एक है। वास्तव में, यह वही है जो भग्न को अपना नाम देता है: उनके पास एक __आंशिक आयाम__ है।

प्रत्येक पुनरावृत्ति के साथ, हम Sierpinski त्रिकोण के कुछ क्षेत्र को हटा देते हैं। यदि हम इसे कई बार कर सकते हैं, तो वास्तव में कोई क्षेत्र नहीं छोड़ा जाएगा: यही कारण है कि सियरपिंस्की त्रिकोण 2-आयामी क्षेत्र और 1-आयामी लाइन के बीच में कुछ है।

::: .theorem

जबकि कई फ्रैक्टल्स _स्व-समान_ हैं, एक बेहतर परिभाषा यह है कि __फ्रैक्टल्स__ आकार हैं, जिनमें __गैर-पूर्णांक आयाम__ हैं।

:::

[जारी रखें](btn:next)

---

> id: snowflake

### कोच हिमफल

प्रकृति में कई आकृतियाँ हैं जो भग्न की तरह दिखती हैं। हमने पहले ही इस अध्याय की शुरुआत में कुछ पौधों को देखा है। अन्य महान उदाहरण बर्फ के टुकड़े और बर्फ के क्रिस्टल हैं:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---
> id: koch

अपनी खुद की फ्रैक्टल स्नोफ्लेक बनाने के लिए, हमें एक बार फिर एक सरल प्रक्रिया ढूंढनी होगी जिसे हम बार-बार लागू कर सकते हैं।

::: column.grow

Sierpinski त्रिकोण की तरह, एक एकल, एकतरफा त्रिकोण के साथ शुरू करते हैं। हालांकि, _हर चरण पर_ छोटे त्रिकोणों को हटाने के बजाय, हम _किनारे के साथ_ छोटे त्रिकोणों को जोड़ते हैं। हर त्रिभुज की भुजा-लंबाई पिछले चरण में त्रिभुजों की [[`1/3`|`1/4`|`1/2`]] है।

{.reveal(when="blank-0")} परिणामी आकृति को {२४६} {२४४} कोच स्नोफ्लेक {२४५} {२४ after}, स्वीडिश गणितज्ञ {२४}} हेलज वॉन कोच {२४ ९} के नाम पर रखा गया है। ध्यान दें, एक बार फिर, कि {२५०} छोटे खंड {२५१}, हिमखंड के किनारे {२५२} बड़े खंड {२५३} के समान दिखते हैं।

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

जब हम कोच स्नोफ्लेक के एक किनारे खंड को 3 के कारक से मापते हैं, तो इसकी लंबाई [[चौगुनी|triples|doubles]] हो जाती है।

{.reveal(when="blank-0")} आयामों और पैमाने कारकों के बीच समान संबंध का उपयोग करते हुए, हमें समीकरण [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]] मिलता है। {२६५} {}१३} इसका मतलब है कि कोच स्नोफ्लेक का आयाम {२६४} है। {२६६}

:::

---

> id: koch-size

::: tab

#### क्षेत्र _{span.check(when="blank-6")}_

कोच स्नोफ्लेक्स बनाना लगभग एक [पुनरावर्ती अनुक्रम](gloss:sequence-recursive) की तरह है: हम शुरुआती आकार (एक त्रिकोण) को जानते हैं, और हम जानते हैं कि एक शब्द से अगले तक (हर किनारे पर अधिक त्रिभुज जोड़कर) कैसे प्राप्त किया जाए।

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] नए त्रिकोण

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] नए त्रिकोण

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] नए त्रिकोण

:::

{.reveal(when="blank-0 blank-1 blank-2")} पहली पुनरावृत्ति के बाद, हर चरण में [[4]] के एक कारक द्वारा नई त्रिकोण की संख्या बढ़ जाती है। इसी समय, इन नए त्रिभुजों का क्षेत्रफल हर चरण में [[9]] के एक कारक से घट जाता है।

{.reveal(when="blank-3 blank-4")} बता दें कि [पहले त्रिकोण](->#koch-0) का क्षेत्रफल 1 है। फिर [का कुल क्षेत्रफल अगले तीन त्रिकोण](->#koch-1) है `3 × 1/9 = 1/3`। निम्नलिखित चरण सभी एक [[ज्यामितीय श्रृंखला|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} के साथ सामान्य अनुपात [[`4/9`|`9/4`|`4/3`]]_ बनाते हैं।

{.reveal(when="blank-6")} अनंत [ज्यामितीय श्रृंखला के योग के लिए सूत्र का उपयोग](gloss:geometric-series), हम गणना कर सकते हैं कि कोख हिमपात का कुल क्षेत्र है

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`।

::: tab

#### परिधि _{span.check(when="blank-9")}_

::: column.grow

हम कोच बर्फ के टुकड़े की परिधि की गणना करने का भी प्रयास कर सकते हैं। जैसा कि हमने पहले ही देखा है, परिधि की लंबाई हर कदम पर [[`4/3`|`3/4`|`1/4`]] के कारक से बदलती है।

{.reveal(when="blank-8")} इसका मतलब है कि, एक बार फिर, हमारे पास एक ज्यामितीय श्रृंखला है - लेकिन इस मामले में, यह {३१ ९} नहीं है {३२०}। {३१ {} {}२५} इसका मतलब है कि कोच हिमखंड की परिधि वास्तव में {३१५} अनंत रूप से लंबी {३१६} है! {३१}}

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _यदि यह प्रतिवाद प्रतीत होता है, तो बस याद रखें कि हम हर चरण में `§4/3` से परिधि को गुणा करते हैं, और हम इसे अनंत बार करते हैं_

:::

---

> id: frozen

::: column.grow

यह लगभग अकल्पनीय है कि आपके पास _परिमित_ क्षेत्र के साथ एक आकार हो सकता है और एक _अनंत_ परिधि - लेकिन यह भग्न के कई अप्रत्याशित गुणों में से एक है।

क्या आप अपने स्वयं के भग्न बनाने के लिए किसी अन्य तरीके के साथ आ सकते हैं? [जारी रखें](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "मेरी आत्मा चारों ओर जमे हुए भग्न पर घूम रही है ..."

:::

---

> id: menger-sponge

### मेन्जर स्पंज

ऊपर दिए गए कई उदाहरणों की तरह, भग्न को "सपाट" नहीं होना चाहिए। 3-आयामी दिखने वाले सबसे प्रसिद्ध भग्नों में से एक __मैसेंजर स्पंज__ है, जिसका नाम गणितज्ञ [कार्ल मेन्जर](bio:menger) के नाम पर है जिन्होंने पहली बार 1926 में इसका वर्णन किया था।

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

हम एक ठोस घन के साथ शुरू करते हैं, और बार-बार छोटे और छोटे छेद को अपने पक्षों में ड्रिल करते हैं। छिद्रों के प्रत्येक नए पुनरावृत्ति में [[`1/3`|`1/2`|`1/4`]] छिद्रों के पिछले पुनरावृत्ति की चौड़ाई होती है।

{.reveal(when="blank-0")} A `3×3×3` क्यूब में 27 छोटे क्यूब्स होते हैं, लेकिन यहां हमने इनमें से कुछ को हटा दिया है। मेन्जर स्पंज में स्वयं की [[20]] प्रतियां हैं, जो 3 गुना छोटी हैं।

{.reveal(when="blank-1")} अब हम मेन्जर स्पंज के आयाम _d_ की गणना करने का प्रयास कर सकते हैं, जैसे हमने ऊपर कोख के बर्फ के टुकड़े के लिए किया था। इस स्थिति में हमें `3^d = 20`, या `§d = log_3(20) ≈ 2.727` मिलता है।

:::

{.reveal(when="blank-1")} यदि आप अधिक से अधिक छेदों को काटने की कल्पना करते हैं, तो असीम रूप से कई बार, कोई वास्तविक मात्रा नहीं बचती है। इसीलिए क्यूब "3-आयामी" नहीं है! [जारी रखें](btn:next)

---

> id: coastlines

### फ्रैक्टल कोस्टलाइन्स

हमने अब तक जो भी फ्रैक्टल्स देखे हैं उनमें से एक प्रमुख विशेषता यह है कि आप हमेशा के लिए "ज़ूम इन" कर सकते हैं और हमेशा नए पैटर्न पा सकते हैं। 1920 के आसपास, ब्रिटिश गणितज्ञ [लुईस फ्राई रिचर्डसन](bio:richardson) ने महसूस किया कि कई देशों की सीमा या समुद्र तट के लिए भी यही सच है।

आप देश के मूल आकार के साथ शुरू करते हैं, और, जैसे ही आप ज़ूम इन करते हैं, आप नदी के इनलेट्स, बे और इस्ट्यूरीज़ जोड़ते हैं, फिर व्यक्तिगत चट्टानें, चट्टानें, कंकड़-पत्थर इत्यादि:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[जारी रखें](btn:next)

---

> id: coastlines-1

::: column.grow

किसी देश की सीमा की लंबाई की गणना करने की कोशिश करते समय यह एक महत्वपूर्ण समस्या है - आप कैसे तय करते हैं कि कितनी दूर तक ज़ूम करना है, और किन नुक्कड़ और सारस को शामिल करना है?

एक तरीका है कि हम ब्रिटेन की समुद्र तट की लंबाई को माप सकते हैं, उदाहरण के लिए, एक लंबा शासक लेना है, इसके समुद्र तटों के चारों ओर चलना है, और फिर सभी दूरियों को जोड़ना है।

यदि शासक ${rulers[index]}{index|0|0,8,1} किमी लंबा है, तो हमें इसे ${count} बार उपयोग करना होगा, इसलिए हमें ${count} × ${rulers[index]} = ${count * rulers[index]} किमी की कुल तट रेखा मिलती है।

{.reveal(when="var-0")} हम छोटे और छोटे शासकों के साथ बस जा सकते हैं, और हर बार समुद्र तट की लंबाई के लिए हमारा परिणाम थोड़ा लंबा होगा। पहले की तरह कोच्च स्नोफ्लेक, ऐसा लगता है कि ब्रिटेन का समुद्र तट असीम रूप से लंबा है! इसे अक्सर __तट रेखा विरोधाभास__ कहा जाता है। [जारी रखें](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

कुछ दशकों बाद, गणितज्ञ [बेनोइट मैंडलब्रॉट](bio:mandelbrot) ने आईबीएम में काम करते हुए रिचर्डसन की एक त्याग दी हुई लाइब्रेरी बुक में काम किया। उन्होंने इसके महत्व को पहचाना, और यह भी कि यह भग्न और आयामों पर अधिक हाल के शोध से कैसे संबंधित है।

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

ब्रिटेन की तटरेखा निश्चित रूप से "भग्न" दिखती है, लेकिन यह _स्व-समान_ नहीं है, अन्य भग्नों की तरह, जिन्हें हमने पहले देखा था। इसके आकार को खोजने के लिए, हम इसे एक ग्रिड पर खींच सकते हैं और उन कोशिकाओं की संख्या की गणना कर सकते हैं जिनके साथ यह अंतर करता है।

{.r.reveal(when="slider-0")} प्रारंभ में, __{.pill.yellow} 88__ कोशिकाओं को काटना है। यदि हम 2 के कारक द्वारा तटरेखा को मापते हैं, तो __{.pill.yellow} 197__ प्रतिच्छेद करने वाली कोशिकाएँ हैं - दो बार से अधिक! [जारी रखें](btn:next)

{.r.reveal(when="next-0")} के कारक से समुद्र तट का आकार बढ़ गया है। पहले की तरह, इसका मतलब है कि तटरेखा का आयाम है

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

यदि हम इसे बड़े ग्रिड के साथ दोहराते हैं, तो हम पाते हैं कि ब्रिटेन के समुद्र तट का आयाम वास्तव में लगभग 1.21 है। मैंडलब्रॉट ने महसूस किया कि यह फ्रैक्टल आयाम भी एक आकार की __खुरदरापन__ का एक उपाय है - एक नई अवधारणा, जिसके लिए उन्हें गणित और विज्ञान के कई अन्य क्षेत्रों में महत्वपूर्ण अनुप्रयोग मिले।

---

> id: nature

### नेचर एंड टेक्नोलॉजी में अधिक भिन्न

जबकि सच्चा भग्न कभी प्रकृति में प्रकट नहीं हो सकता है, कई वस्तुएं हैं जो भग्न की तरह _लगभग_ दिखती हैं। हमने पहले से ही पौधे, बर्फ के टुकड़े और समुद्र तट देखे हैं, और यहाँ कुछ और उदाहरण हैं:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} मध्य एशिया में पर्वत श्रृंखला

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} भारत में गंगा नदी का डेल्टा

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} बिजली के बोल्ट

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} रेटिना में रक्त वाहिकाएं

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} यूएसए में ग्रांड कैन्यन

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} बादल

:::

ये सभी ऑब्जेक्ट पूरी तरह से यादृच्छिक दिखाई दे सकते हैं, लेकिन, भग्न की तरह, एक अंतर्निहित पैटर्न है जो निर्धारित करता है कि वे कैसे बनते हैं। गणित हमें आकृतियों को बेहतर ढंग से समझने में मदद कर सकता है, और फ्रैक्टल्स में चिकित्सा, जीव विज्ञान, भूविज्ञान और मौसम विज्ञान जैसे क्षेत्रों में अनुप्रयोग हैं। [जारी रखें](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} कंप्यूटर जनित भग्न इलाका

::: column.grow

उदाहरण के लिए, वीडियो गेम या कंप्यूटर-जनरेटेड फिल्मों में उपयोग किए जाने वाले परिदृश्य और बनावट के रूप में, हम वास्तविक "प्रतियां" बनाने के लिए भग्न का उपयोग कर सकते हैं। इस छवि में पानी, पहाड़ और बादल पूरी तरह से एक कंप्यूटर द्वारा बनाए गए हैं, जिसमें भग्न की मदद से!

और हम डिजिटल छवियों को संपीड़ित करने के लिए, उनके फ़ाइल आकार को कम करने के लिए इस प्रक्रिया को उल्टा भी कर सकते हैं। पहला एल्गोरिदम माइकल बार्न्सले और एलन स्लोन द्वारा 1980 के दशक में विकसित किया गया था, और नए लोगों पर अभी भी शोध किया जा रहा है।

:::

---

## सीरपिन्स्की ट्रायंगल

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

पिछले अध्याय में हमने जो फ्रैक्टल्स देखे उनमें से एक [__सीरपिन्स्की त्रिकोण__](gloss:sierpinski-triangle) था, जिसका नाम पोलिश गणितज्ञ [वाक्लाव सीरपैंस्की](bio:sierpinski) के नाम पर रखा गया है। इसे एक बड़े, समबाहु त्रिभुज से शुरू करके बनाया जा सकता है, और फिर इसके केंद्र से छोटे त्रिभुजों को बार-बार काटकर बनाया जा सकता है।

{.r.reveal(when="slider-0")} वक्लाव सीरपीस्की इस त्रिकोण के गुणों के बारे में सोचने वाले पहले गणितज्ञ थे, लेकिन यह कई सदियों पहले कलाकृति, पैटर्न और मोज़ाइक में दिखाई दिया है।

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

यहाँ रोम में विभिन्न चर्चों से फर्श के झुकाव के कुछ उदाहरण दिए गए हैं:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

जैसा कि यह पता चला है, Sierpinski त्रिकोण गणित के अन्य क्षेत्रों की एक विस्तृत श्रृंखला में दिखाई देता है, और इसे उत्पन्न करने के कई अलग-अलग तरीके हैं। इस अध्याय में, हम उनमें से कुछ का पता लगाएंगे! [जारी रखें](btn:next)

---

> id: pascal
> goals: select

### पास्कल का त्रिकोण

आपको पहले से ही [__पास्कल के त्रिकोण__](gloss:pascals-triangle) पर हमारे अध्याय से Sierpinski त्रिकोण याद हो सकता है। यह एक संख्या पिरामिड है जिसमें प्रत्येक संख्या ऊपर की दो संख्याओं का योग है। नीचे दिए गए त्रिकोण में सभी _यहां तक कि_ संख्याओं पर टैप करें, उन्हें हाइलाइट करने के लिए - और देखें कि क्या आप एक पैटर्न देखते हैं:

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

पास्कल के त्रिकोण को हमेशा के लिए नीचे की ओर जारी रखा जा सकता है, और सीरपिन्स्की पैटर्न बड़े और बड़े त्रिकोणों के साथ जारी रहेगा। आप पहले से ही एक भी बड़े त्रिभुज की शुरुआत देख सकते हैं, पंक्ति 16 में शुरू कर सकते हैं।

यदि दो आसन्न कोशिकाएँ 2 से विभाज्य हैं, तो नीचे दिए गए सेल में उनकी राशि भी 2 से विभाज्य होनी चाहिए - यही कारण है कि हम केवल रंगीन त्रिकोण (या एकल कोशिका) प्राप्त कर सकते हैं। बेशक, हम 2_ के अलावा अन्य संख्या _द्वारा विभाज्य सभी रंगों को रंगने की कोशिश कर सकते हैं। आपको क्या लगता है उन मामलों में क्या होगा? [जारी रखें](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

यहां आप पास्कल के त्रिकोण की पहली 128 पंक्तियों का एक छोटा संस्करण देख सकते हैं। हमने ${n}{n|2|2,40,1} द्वारा विभाज्य सभी कोशिकाओं पर प्रकाश डाला है - आप क्या देखते हैं?

{.reveal(when="var-0")} हर संख्या के लिए, हम Sierpinski त्रिकोण के समान एक अलग त्रिकोणीय पैटर्न है। यदि हम [[प्राइम नंबर|triangle number|Fibonacci number]] चुनते हैं तो पैटर्न विशेष रूप से नियमित है। _{span.reveal(when="blank-0")} यदि संख्या में _कई अलग-अलग_ प्रमुख कारक हैं, तो पैटर्न अधिक यादृच्छिक दिखता है।_

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### कैओस गेम

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

यहां आप एक समबाहु त्रिभुज के तीन कोने देख सकते हैं। चौथा बिंदु बनाने के लिए ग्रे क्षेत्र में कहीं भी टैप करें।

{.r.reveal(when="point")} चलो एक साधारण खेल खेलते हैं: हम त्रिकोण के शीर्ष में से एक को यादृच्छिक पर चुनते हैं, हमारे बिंदु और शीर्ष के बीच एक रेखा खंड खींचते हैं, और फिर उस खंड का [{.pill.red} मध्यबिंदु](target:p1) पाते हैं। [जारी रखें](btn:next)

{.r.reveal(when="next-0")} अब हम इस प्रक्रिया को दोहराते हैं: हम एक और यादृच्छिक शीर्ष चुनते हैं, खंड को हमारे अंतिम बिंदु से खींचते हैं, और फिर [{.pill.green} मिडपॉइंट](target:p2) पाते हैं। ध्यान दें कि हम इन नए बिंदुओं को उस त्रिकोण के शीर्ष के रंग के आधार पर रंगते हैं जो हमने उठाया था। [जारी रखें](btn:next)

{.reveal(when="next-1")} अब तक, कुछ भी आश्चर्यजनक नहीं हुआ है - लेकिन जैसा कि हम एक ही प्रक्रिया को कई बार दोहराते हैं:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} 1000 कदम जोड़ें_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

इस प्रक्रिया को __कैओस गेम__ कहा जाता है। शुरुआत में कुछ आवारा बिंदु हो सकते हैं, लेकिन यदि आप एक ही चरण को कई बार दोहराते हैं, तो डॉट्स का वितरण बिल्कुल सियरपिन्स्की त्रिकोण जैसा दिखता है!

इसके कई अन्य संस्करण हैं - उदाहरण के लिए, हम एक वर्ग या एक पेंटागन के साथ शुरू कर सकते हैं, हम अतिरिक्त नियम जोड़ सकते हैं जैसे एक पंक्ति में दो बार एक ही शीर्ष का चयन करने में सक्षम नहीं होना, या हम एक अनुपात में अगला बिंदु चुन सकते हैं। खंड के साथ `§1/2` के अलावा। इनमें से कुछ मामलों में, हमें बस डॉट्स का एक यादृच्छिक वितरण मिलता है, लेकिन अन्य मामलों में, हम और भी अधिक भग्न प्रकट करते हैं:

    include components/chaos-game

{.reveal(when="s1 s2 play")} क्या आपने [____स्वर्ण अनुपात__ / 488} के आधार पर [सीरपिन्स्की कालीन](action:carpet()) या यह [पेंटागोनल स्नोफ्लेक](action:snowflake()) की खोज की?

---

> id: cellular
> goals: sierpinski

### सेलुलर ऑटोमेटा

एक __सेल्यूलर ऑटोमेटन__ एक ग्रिड है जिसमें कई अलग-अलग सेल होते हैं। प्रत्येक कोशिका अलग-अलग "अवस्थाओं" (जैसे अलग-अलग रंगों) में हो सकती है, और हर कोशिका की स्थिति उसके आसपास की कोशिकाओं द्वारा निर्धारित होती है।

हमारे उदाहरण में, प्रत्येक कोशिका काला या सफेद हो सकती है। हम एक पंक्ति से शुरू करते हैं जिसमें सिर्फ एक काला वर्ग होता है। प्रत्येक निम्नलिखित पंक्ति में, प्रत्येक कोशिका का रंग तीन कोशिकाओं द्वारा तुरंत ऊपर निर्धारित किया जाता है। उनके रंग को फ्लिप करने के लिए नीचे दिए गए आठ संभावित विकल्पों पर टैप करें - क्या आप नियमों का एक सेट पा सकते हैं जो Sierpinski त्रिकोण के समान एक पैटर्न बनाता है?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} आठ विकल्पों में से प्रत्येक के लिए दो विकल्प हैं, जिसका अर्थ है कि कुल ४ ९ ५ `2^8 =` [[256]] संभव नियम हैं। कुछ, जैसे [नियम 126](action:setRule('01111110')), सियरपिंस्की त्रिकोण जैसा दिखता है। अन्य, जैसे [नियम 30](action:setRule('01111000')), पूरी तरह से अराजक लगते हैं। यह 1983 में [स्टीफन वोल्फ्राम](bio:wolfram) द्वारा खोजा गया था, और कंप्यूटर भी उन्हें यादृच्छिक संख्या उत्पन्न करने के लिए उपयोग कर सकते हैं!

---

> id: cellular-1

::: column.grow

सेलुलर ऑटोमेटा दिखाते हैं कि बहुत सरल नियमों द्वारा कैसे अत्यधिक जटिल पैटर्न बनाए जा सकते हैं - जैसे भग्न। प्रकृति में कई प्रक्रियाएं भी सरल नियमों का पालन करती हैं, फिर भी अविश्वसनीय रूप से जटिल प्रणालियों का उत्पादन करती हैं।

कुछ मामलों में, यह उन पैटर्न की उपस्थिति का कारण बन सकता है जो सेलुलर ऑटोमेटा की तरह दिखते हैं, उदाहरण के लिए इस घोंघे के खोल पर रंग।

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} कोनस टेक्सटाइल, एक विषैला समुद्री घोंघा

:::

---

> id: tetrahedra

### सीरपिन्स्की टेट्राहेड्रा

Sierpinski त्रिकोण के कई प्रकार हैं, और समान गुणों और निर्माण प्रक्रियाओं के साथ अन्य भग्न हैं। कुछ 2-आयामी दिखते हैं, जैसे _सीरपिन्स्की कालीन_ जैसा आपने ऊपर देखा। अन्य 3-आयामी दिखते हैं, इन उदाहरणों की तरह:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} सीरपिन्स्की टेट्राहेड्रा

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} सीरपिन्स्की पिरामिड

:::

---

## मंडेलब्रोट सेट

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

पिछले अध्यायों में हमने जो भी भग्न देखे, वे __पुनरावृत्ति__ की एक प्रक्रिया का उपयोग करके बनाए गए थे: आप एक विशिष्ट पैटर्न के साथ शुरू करते हैं, और फिर आप इसे बार-बार दोहराते हैं।

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

यह गणित में एक और अवधारणा के समान है जिसे आपने पहले देखा था: [पुनरावर्ती अनुक्रम](gloss:sequence-recursive) के साथ, आप एक विशिष्ट संख्या के साथ शुरू करते हैं, और फिर आप एक ही पुनरावर्ती सूत्र को लागू करते हैं, फिर से और फिर अगला नंबर पाने के लिए। अनुक्रम।

उदाहरण के रूप में पुनरावर्ती सूत्र `§x_n = x_(n-1)^2` को लें, और संख्या रेखा पर इसकी शर्तों को प्लॉट करें। आप `pill(x_0,"yellow","x0")` का मान बदल सकते हैं:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

ध्यान दें कि परिणामी अनुक्रम कैसे अलग तरह से व्यवहार कर सकता है, जो शुरुआती मूल्य `x_0` पर निर्भर करता है:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

यदि `x_0 > 1`, अनुक्रम [[का विचलन|converges]]: _{span.reveal(when="blank-0")} तो यह अनंत तक बढ़ता रहता है,_।

::: column.frame.f-blue.text-center(width=212)

यदि `x_0` -1 और के बीच है, तो अनुक्रम [[1|diverges]] में परिवर्तित हो जाता है।

::: column.frame.f-blue.text-center(width=212)

यदि `x_0 < -1`, अनुक्[[रम|converges]] को विचलन करता है।

:::

---

> id: iteration-2

अब तक, हमने कुछ नया नहीं सीखा है। हालाँकि, लगभग एक शताब्दी पहले, गणितज्ञों ने यह पता लगाना शुरू कर दिया था कि यदि आप वास्तविक संख्या रेखा के बजाय [__जटिल संख्या__](gloss:complex-numbers) का उपयोग करते हैं तो इन अनुक्रमों का क्या होगा। उनकी खोज गणित के सभी में सबसे आश्चर्यजनक और सुंदर परिणाम थे।

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### जूलिया सेट्स

आज्ञा दें, पहले वाले क्रम का उपयोग करें, `§x_n = x_(n-1)^2`, लेकिन जटिल विमान पर। आप निम्न शर्तों का क्या होता है, यह देखने के लिए आप `pill(x_0,"yellow","x0")` की स्थिति को आगे बढ़ा सकते हैं। यदि अनुक्रम ऐसा लगता है कि यह रूपांतरित हो जाएगा, तो विमान पर स्थित बिंदु को _{span.pill.blue} नीले {{::: column(width=360) में सम्‍मिलित करें:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} कि आप देख सकते हैं, यह क्रम इकाई के सर्कल {जैसा| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (त्रिज्या के साथ वृत्त, मूल में केंद्रित)_ के अंदर `pill(x_0,"yellow","x0")` झूठ [[है।

---

> id: julia-1

अब चीजों को थोड़ा और कठिन बनाते हैं। पिछली संख्या को चुकाने के बजाय, हम हर बार एक निरंतर _{.pill.red} c_ जोड़ते हैं (जो कि कोई भी जटिल संख्या हो सकती है)। दूसरे शब्दों में, `§x_n = x_(n-1)^2 + c`। क्या आपको लगता है कि हम अभी भी अभिसरण का एक चक्र प्राप्त करेंगे? आपको क्या लगता है कि अन्य आकार हम देख सकते हैं? [जारी रखें](btn:next)

---

> id: julia-2

इस आरेख में, आप `pill(x_0,"yellow","x0")` की स्थिति और साथ ही `pill(c,"red","c")` के मूल्य को स्थानांतरित कर सकते हैं:

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

{div(slot="legend")} हम पहले से ही जानते हैं कि क्या होता है अगर [`c = 0`](action:animate(0,0)) - जो ऊपर दिए गए उदाहरण के समान है। जब तक `x_0` का अनुक्रम अभिसरण इकाई वृत्त के भीतर होता है।

{div(slot="legend")} जैसे ही हम _c_ का मान बदलते हैं, कुछ अद्भुत होता है। सर्कल एक अत्यधिक जटिल, भग्न आकार में बदल जाता है।

{div(slot="legend")} जब [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), आकार सर्पिल में व्यवस्थित कई छोटे तत्वों में विभाजित हो जाता है।

::: div(slot="legend")

कुछ मामलों में, अनुक्रम _एकल बिंदु_ पर नहीं होता है - इसके बजाय यह एक त्रिकोण की तरह कई बिंदुओं के चक्र तक पहुंचता है। इन चक्रों को __कक्षा__ कहा जाता है।

नीले रंग के बिंदुओं का अर्थ है कि संबंधित अनुक्रम या तो अभिसरण करता है या उसकी एक कक्षा है (हम कहते हैं कि यह __है__)। सफेद छोड़ दिए गए बिंदुओं का अर्थ है कि इसी क्रम __विचलन__: यह बाध्य नहीं है, और अंत में अनंत तक चल रहा है।

:::

{div(slot="legend")} और क्या मिल सकता है? [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) या जब [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) पैटर्न पर एक नजर है। _c_ के कुछ मान भी हैं जहाँ _हर_ अनुक्रम डाइवर्ज होते हैं, इसलिए पूरा परिसर सादा सफेद रहता है।

:::

---

> id: julia-3

संख्याओं में रंग करके बनाई गई विभिन्न आकृतियों को [__जूलिया सेट्स__](gloss:julia-set) कहा जाता है। उन्हें स्वतंत्र रूप से दो फ्रांसीसी गणितज्ञों, [गैस्टन जूलिया](bio:julia) और [पियरे फतौ](bio:fatou) द्वारा, 1918 के आसपास स्वतंत्र रूप से खोजा गया था।

उस समय, जूलिया सेट वास्तव में कैसा दिखता था, यह कल्पना करने में मदद करने के लिए कोई कंप्यूटर नहीं थे। जूलिया और फ़तौ जैसे गणितज्ञ उनके बारे में गणितीय रूप से तर्क करने में सक्षम थे, लेकिन वे केवल कभी-कभी किसी न किसी, हाथ से खींचे गए रेखाचित्रों को देखते थे कि वे कैसा दिखते हैं।

आज हमारे पास यह समस्या नहीं है - नीचे दी गई छवियां विभिन्न जूलिया सेटों की हैं। विभिन्न रंग _को इंगित करते हैं कि कितनी जल्दी_ उस बिंदु पर अनुक्रम होता है:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[जारी रखें](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### मंडेलब्रोट सेट

अलग-अलग जूलिया सेट बनाते समय, आपने देखा होगा कि _c_ के कुछ मूल्य थे, जिनके लिए प्रत्येक अनुक्रम डायवर्ज होता है, और संपूर्ण जटिल विमान सफेद रहता है। जूलिया और फतौ के कुछ दशकों बाद, गणितज्ञों की एक नई पीढ़ी ने उन क्षेत्रों को देखने की कोशिश की, जो इन क्षेत्रों में दिखते थे।

पिछले उदाहरण में, हमने `pill(c,"red","c")` के लिए एक निश्चित मान चुना, और फिर विमान को रंगने के लिए `pill(x_0,"yellow","x0")` की स्थिति बदल दी। अब `pill(x_0 = 0,"yellow","x0")` का मान ठीक करें, और इसके बजाय `pill(c,"red","c")` का मान बदलें।

एक बार फिर, उस क्षेत्र को प्रकट करने के लिए जटिल विमान पर पेंट करें जिसमें अनुक्रम बंधे हुए हैं। आप किस आकार के दिखने की उम्मीद करते हैं?

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

इस भग्न को [__मैंडलब्रॉट सेट__](gloss:mandelbrot-set) कहा जाता है, और जब 90 ° घुमाया जाता है, तो यह लगभग एक व्यक्ति की तरह दिखता है, जिसमें सिर, शरीर और दो भुजाएँ होती हैं। इसे 1978 में गणितज्ञ रॉबर्ट ब्रूक्स और पीटर मैटेस्की द्वारा एक शोध पत्र में पहली बार परिभाषित और तैयार किया गया था:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

कुछ साल बाद, [बेनोइट मैंडलब्रॉट](bio:mandelbrot) ने आईबीएम के शक्तिशाली कंप्यूटरों का उपयोग फ्रैक्टल के बहुत अधिक विस्तृत दृश्य बनाने के लिए किया, जिसे बाद में उनके नाम पर रखा गया। पहला प्रिंटआउट उसकी अपेक्षा से भिन्न था - जब तक कि उसने महसूस किया कि प्रिंटर पर काम करने वाले तकनीशियन उसके किनारे के चारों ओर "फ़िज़नेस" की सफाई कर रहे थे, यह मानते हुए कि यह धूल के कणों या प्रिंटर त्रुटियों के कारण हुआ था, न कि भग्न की एक विशिष्ट विशेषता। ! [जारी रखें](btn:next)

---

> id: mandel-zoom

सभी फ्रैक्टल्स की तरह, हम "जूम इन" मेंडलब्रॉट को हमेशा के लिए सेट कर सकते हैं, हर पैमाने पर नए पैटर्न ढूंढ रहे हैं। यहां आप मंडेलब्रोट सेट के एक हिस्से को ज़ूम कर सकते हैं जिसे __सीहोरस घाटी__ कहा जाता है। ब्लैक पॉइंट_ के अंदर_ मैंडलब्रॉट सेट हैं, जहां अनुक्रम बाउंड है। रंगीन अंक _के बाहर_ मैंडलब्रॉट सेट हैं, जहां अनुक्रम डायवर्ज होता है, और अलग-अलग रंग _इंगित करते हैं कि कितनी जल्दी_ यह अनंत तक बढ़ता है:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

इस स्लाइडर में 27 व्यक्तिगत छवियां शामिल हैं, 14 क्वाड्रिलियन से अधिक ज़ूम स्तर तक, या `2^54`। कुल मिलाकर, आधुनिक लैपटॉप पर रेंडर करने में उन्हें लगभग 45 मिनट लगे। मैंडलब्रॉट सेट को एक एकल, सरल समीकरण `§x_n = x_(n-1)^2 + c` के साथ बनाया जा सकता है, फिर भी यह असीम रूप से जटिल और आश्चर्यजनक सुंदर है।

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

जैसे ही आप Mandelbrot सेट के चारों ओर [{.pill.red} c](target:c) का मान बढ़ाते हैं, आपको एक जिज्ञासु संपत्ति दिखाई दे सकती है:

* मैंडेलब्रॉट सेट के [मुख्य शरीर](target:bulb0) के भीतर सभी [[अनुक्रम|diverge|reach an orbit]] _{span.reveal(when="blank-0")} को एक बिंदु पर परिवर्तित करते हैं।_
* {.reveal(when="blank-0")} [बड़े बल्ब](target:bulb1) शीर्ष [[पर अनुक्रम [[3]] अंक_ से मिलकर|converge|diverge]] _{span.reveal(when="blank-1")} एक कक्षा में पहुंचते हैं।
* {.reveal(when="blank-2")} क्रम में [इस छोटे बल्ब](target:bulb2) की लंबाई [[5]] की परिक्रमा है।

:::

{.reveal(when="blank-3")} २४प्रत्येक बल्ब की एक अलग आकार की कक्षा होती है, जिसमें छोटे बल्ब अपनी कक्षाओं में अधिक से अधिक अंक रखते हैं। इन कक्षाओं का आकार __लॉजिस्टिक मैप__ से संबंधित है, [कैओस सिद्धांत](/course/chaos) में एक महत्वपूर्ण अवधारणा है।

---

> id: mandel-outro

::: column.grow

बर्नोइट मैंडलब्रॉट ने अपने जीवन का अधिकांश भाग भग्न के अध्ययन के लिए और साथ ही _खुरदरापन_ और _आत्म-समानता_ के गणित के लिए समर्पित किया। उनके काम में भौतिकी, मौसम विज्ञान, न्यूरोलॉजी, अर्थशास्त्र, भूविज्ञान, इंजीनियरिंग, कंप्यूटर विज्ञान और कई अन्य क्षेत्रों में आवेदन थे।

1985 में, मैंडेलब्रॉट सेट _वैज्ञानिक अमेरिकी_ पत्रिका के कवर पर दिखाई दिया, और तब से यह दुनिया में सबसे अधिक पहचाने जाने वाले गणितीय आकारों में से एक बन गया है। आप इसे टी-शर्ट पर, संगीत वीडियो में और स्क्रीन सेवर के रूप में पा सकते हैं, और इसे कई लोकप्रिय पुस्तकों और फिल्मों में संदर्भित किया गया है।

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## स्पेस फिलिंग कर्व्स

> section: space-filling
> sectionStatus: dev

{.todo} जल्द ही आ रहा है!
