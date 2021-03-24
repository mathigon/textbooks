# रूपांतरण और समरूपता

## परिचय

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles
> translated: auto

गणितज्ञों द्वारा कई ज्यामितीय अवधारणाएँ जैसे [रेखाएँ](gloss:line) या [बहुभुज](gloss:polygon) "आविष्कार" किए गए थे। दूसरी ओर, समरूपता हमारे चारों ओर है। लगभग सभी पौधे, जानवर और यहां तक कि हम इंसान भी सममित हैं।

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

समय के साथ, हमने कला, वास्तुकला, प्रौद्योगिकी और डिजाइन में प्रकृति की समरूपता की नकल की है। सममित आकार और पैटर्न केवल गैर-सममित वाले लोगों की तुलना में _अधिक सुंदर_ लगते हैं।

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

लेकिन बस _सुंदर दिखने की_ तुलना में समरूपता बहुत अधिक महत्वपूर्ण है। यह हमारे ब्रह्मांड की बहुत नींव पर स्थित है, और यहां तक कि भौतिकी के सबसे मौलिक नियमों की व्याख्या भी कर सकता है।

_{button.next-step} जारी रखें_

---
> id: transformations
> goals: t1 t2 t3

जबकि समरूपता एक बहुत ही सहज अवधारणा है, इसका वर्णन करना गणितीय रूप से अधिक कठिन है जितना आप सोच सकते हैं। सबसे पहले, हमें [__परिवर्तनों के__](gloss:transformation) बारे में सीखना होगा, जो कि एक ज्यामितीय आकृति को दूसरे में बदलने के तरीके हैं। कुछ उदाहरण निम्नलिखित हैं:

::: column.r(width=200 parent="padded-thin")

    .animation
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

एक परिवर्तन के परिणाम को [__छवि__](gloss:transformation-image) कहा जाता है। हम अक्सर किसी आकृति की छवि को निरूपित करते हैं `A` जैसा `A'` , "ए प्राइम" का उच्चारण किया। कई अलग-अलग प्रकार के परिवर्तन हैं, जिन्हें हम इस पूरे पाठ्यक्रम में अधिक विस्तार से देखेंगे।

---

## कठोर रूपांतरण

> id: rigid
> section: rigid
> translated: auto

एक [__कठोर परिवर्तन__](gloss:rigid-transformation) एक विशेष प्रकार का परिवर्तन है जो किसी आकृति के आकार या आकार को नहीं बदलता है। हम सोच सकते हैं कि यह लकड़ी या धातु जैसी ठोस सामग्री से बना है: हम इसे स्थानांतरित कर सकते हैं, इसे मोड़ सकते हैं, या इसे पलट सकते हैं, लेकिन हम इसे खींच नहीं सकते हैं, न ही मोड़ सकते हैं, न ही इसे विकृत कर सकते हैं।

इन पांच परिवर्तनों में से कौन सा कठोर हैं?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

यह पता चला है कि कठोर परिवर्तन के केवल तीन अलग-अलग प्रकार हैं:

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} एक परिवर्तन जो बस एक आकृति को _स्थानांतरित_ करता है, एक [__अनुवाद__](gloss:translation) कहलाता है।

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} एक परिवर्तन जो एक आकृति पर _फ़्लिप_ [__करता__](gloss:reflection) है, [__प्रतिबिंब__](gloss:reflection) कहलाता है।

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} एक परिवर्तन है कि एक आकार _spins_ एक [__रोटेशन__](gloss:rotation) कहा जाता है।

:::

---
> id: rigid-2

हम और अधिक जटिल बनाने के लिए कई प्रकार के परिवर्तन को जोड़ सकते हैं - उदाहरण के लिए, एक अनुवाद जिसके बाद एक रोटेशन होता है।

लेकिन पहले, आइए इनमें से प्रत्येक प्रकार के परिवर्तनों को अधिक विस्तार से देखें।

---
> id: translations

### अनुवाद

एक [__अनुवाद__](gloss:translation) एक परिवर्तन है जो किसी आकृति के प्रत्येक बिंदु को उसी दिशा में समान दूरी से स्थानांतरित करता है।

समन्वित समतल में, हम एक अनुवाद को निर्दिष्ट कर सकते हैं कि आकार को _x_ -axis और _y_ -axis के साथ कितनी दूर ले जाया गया है। उदाहरण के लिए, एक परिवर्तन (3, 5) _x_ -axis के साथ 3 और _y_ -axis के साथ 5 द्वारा एक आकृति ले जाता है।

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} ( [[5]] , [[1]] ) द्वारा अनुवादित

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} ( [[-4]] , [[2]] ) द्वारा अनुवादित

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} ( [[4]] , [[-2]] ) द्वारा अनुवादित

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

अब आपकी बारी है - दिखाए गए अनुसार निम्न आकृतियों का अनुवाद करें:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} द्वारा अनुवाद (3, 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} (-4, –2) द्वारा अनुवाद करें _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} द्वारा अनुवाद (5, -1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### कुछ विचार

एक [__परावर्तन__](gloss:reflection) एक परिवर्तन है जो "फ़्लिप" या "मिरर" एक रेखा के पार आकार देता है। इस रेखा को __परावर्तन__ की __रेखा__ कहा जाता है।

इनमें से प्रत्येक उदाहरण में प्रतिबिंब की रेखा खींचिए:

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
      x-img.background(src="images/rorschach.jpg" width=220 height=180 alt="Rorschach Test")
      svg
        path(hidden name="line2" x="line(point(5,-1),point(5,9))")

:::

---
> id: reflections-1
> goals: r0 r1 r2

अब आपकी बारी है - इनमें से प्रत्येक आकृति का प्रतिबिंब बनाएं:

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

ध्यान दें कि यदि कोई बिंदु प्रतिबिंब की रेखा पर स्थित है, तो [[वह गति नहीं करता है | घूमता है |]] परिलक्षित होने [[पर पलट जाता है]] : _{span.reveal(when="blank-0")} इसकी छवि मूल के समान बिंदु है।_

---
> id: reflections-3

उपरोक्त सभी उदाहरणों में, प्रतिबिंब की रेखा क्षैतिज, ऊर्ध्वाधर या 45° कोण पर थी - जिससे प्रतिबिंबों को खींचना आसान हो गया। अगर ऐसा नहीं है, तो निर्माण के लिए थोड़ा और काम करना होगा:

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

{.r} प्रतिबिंब की [रेखा के](target:refl) पार इस आकृति को प्रतिबिंबित करने के लिए, हमें प्रत्येक [शीर्ष को](gloss:polygon-vertex) व्यक्तिगत रूप से प्रतिबिंबित करना होगा और फिर उन्हें फिर से जोड़ना होगा। _{button.next-step} जारी रखें_

{.r.reveal(when="next-0")} चलो एक कोने को उठाते हैं और इस शीर्ष रेखा के माध्यम से रेखा खींचते हैं जो प्रतिबिंब की रेखा के लंबवत है। _{button.next-step} जारी रखें_

{.r.reveal(when="next-1")} अब हम शीर्ष से [दूरी](target:d1) को प्रतिबिंब की रेखा तक माप सकते हैं, और उस बिंदु को बना सकते हैं जिसकी दूसरी तरफ [समान दूरी है](target:d2) । _{span.lgrey} (हम ऐसा करने के लिए शासक या [कम्पास](target:circ) का उपयोग कर सकते हैं।)_ _{button.next-step} जारी रखें_

{.r.reveal(when="next-2")} हम अपने आकार के अन्य सभी शीर्षों के लिए भी ऐसा ही कर सकते हैं। _{button.next-step} जारी रखें_

{.r.reveal(when="next-3")} अब हमें केवल सही क्रम में परावर्तित जोड़ को जोड़ना है, और हमने प्रतिबिंब को खोज लिया है!

:::

---
> id: rotations
> goals: r0 r1 r2

### रोटेशन

[__रोटेशन__](gloss:rotation) एक परिवर्तन है जो एक निश्चित बिंदु के चारों ओर एक निश्चित कोण द्वारा एक आकृति को "बदल" देता है। उस बिंदु को [__घूर्णन__](gloss:center-of-rotation) का [__केंद्र__](gloss:center-of-rotation) कहा जाता है। रोटेशन दक्षिणावर्त या वामावर्त हो सकते हैं।

रोटेशन के लाल केंद्र के नीचे आकृतियों को घुमाने की कोशिश करें:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} 90° दक्षिणावर्त घुमाएँ।

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} 180° से घुमाएँ।

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} 90° विरोधी दक्षिणावर्त घुमाएँ।

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

उन घुमावों को खींचना अधिक कठिन है जो बिल्कुल 90° या 180° नहीं हैं। आइए इस आकृति को घुमाकर देखें ${10*ang}{ang|6|-18,18,1} [रोटेशन](target:rot) के [केंद्र](target:rot) के आसपास°।

{.r} प्रतिबिंबों की तरह, हमें व्यक्तिगत रूप से हर बिंदु को एक आकार में घुमाना होगा। _{button.next-step} जारी रखें_

{.r.reveal(when="next-0")} हम एक कोने को उठाकर और रोटेशन के केंद्र में एक रेखा खींचकर शुरू करते हैं। _{button.next-step} जारी रखें_

{.r.reveal(when="next-1")} एक [प्रोट्रेक्टर](target:protractor) का उपयोग करके, हम [कोण को](target:angle) माप सकते हैं [${ang*10}](target:angle) रोटेशन के केंद्र [के](target:angle) आसपास [°](target:angle) । चलो उस कोण पर एक [दूसरी रेखा](target:l2) खींचते हैं। _{button.next-step} जारी रखें_

{.r.reveal(when="next-2")} [कम्पास](target:compass) या शासक का उपयोग करके, हम इस रेखा पर एक [बिंदु](target:a1) पा सकते हैं, जो मूल बिंदु के रूप में रोटेशन के केंद्र से समान दूरी है। _{button.next-step} जारी रखें_

{.r.reveal(when="next-3")} अब हमें अपने आकार के अन्य सभी शीर्षों के लिए इन चरणों को दोहराना होगा। _{button.next-step} जारी रखें_

{.reveal(when="next-4")} और अंत में, पहले की तरह, हम अपने मूल आकार की घुमाई गई छवि को प्राप्त करने के लिए अलग-अलग कोने जोड़ सकते हैं।

:::

---
> id: composition-1

केवल ज्यामिति ही नहीं, बल्कि गणित के कई हिस्सों में रूपांतरण एक महत्वपूर्ण अवधारणा है। उदाहरण के लिए, आप उनके [ग्राफ़ को](gloss:function-graph) स्थानांतरित या घुमाकर [_कार्यों_](gloss:function) को बदल सकते [हैं](gloss:function-graph) । आप यह निर्धारित करने के लिए परिवर्तनों का उपयोग भी कर सकते हैं कि क्या दो आकृतियाँ [अनुरूप हैं](gloss:congruent) ।

---

## अनुरूपता

> section: congruence
> sectionStatus: dev

TODO

---

## समरूपता

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__समरूपता__](gloss:symmetry) हमारे चारों ओर हर जगह है, और एक सहज ज्ञान युक्त अवधारणा: किसी वस्तु के अलग-अलग हिस्से किसी तरह _से समान_ दिखते हैं। लेकिन परिवर्तनों का उपयोग करके, हम बहुत अधिक सटीक, गणितीय परिभाषा दे सकते हैं कि _वास्तव में_ समरूपता का क्या अर्थ है:

{.definition} एक वस्तु _सममित होती है_ यदि वह एक समान परिवर्तन को लागू करने के बाद भी समान दिखती है।

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} हम इस तितली को प्रतिबिंबित कर सकते हैं, और यह बाद में भी ऐसा ही दिखता है। हम कहते हैं कि इसमें __चिंतनशील समरूपता है__ ।

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} हम इस फूल को घुमा सकते हैं, और यह बाद में भी ऐसा ही दिखता है। हम कहते हैं कि इसमें __घूर्णी समरूपता है__ ।

:::

---
> id: reflectional-symmetry

### चिंतनशील समरूपता

एक आकृति में [__परावर्तित समरूपता होती है__](gloss:reflectional-symmetry) यदि वह परावर्तित होने के बाद समान दिखती है। प्रतिबिंब की रेखा को [__समरूपता__](gloss:axis-of-symmetry) की [__धुरी__](gloss:axis-of-symmetry) कहा जाता [__है__](gloss:axis-of-symmetry) , और यह आकृति को दो [[अनुरूप]] में विभाजित करता [[है | बराबरी का | इसी तरह से]] आधा। कुछ आंकड़ों में समरूपता के एक से अधिक अक्ष भी हो सकते हैं।

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

इन छह छवियों और आकारों में समरूपता के सभी अक्षों को ड्रा करें:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/lake.jpg" width=220 height=180 alt="Lake")
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/beijing.jpg" width=220 height=180 alt="Forbidden City in Beijing")
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/blue-butterfly.jpg" width=220 height=180 alt="Butterfly")
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption} इस आकृति में समरूपता के [[2]] अक्ष हैं।

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} एक वर्ग में समरूपता के [[4]] अक्ष होते हैं।

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} इस आकृति में समरूपता के [[2]] अक्ष हैं।

:::

---
> id: alphabet

वर्णमाला के कई अक्षरों में परावर्तित समरूपता होती है। उन सभी का चयन करें जो करते हैं:

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

यहाँ कुछ और आकृतियाँ हैं। उन्हें पूरा करें ताकि उनके पास चिंतनशील समरूपता हो:

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

आकृतियाँ, अक्षर और चित्र परावर्तक समरूपता हो सकते हैं, लेकिन इतनी संख्या, शब्द और वाक्य पूरे कर सकते हैं!

उदाहरण के लिए "25352" और "एएनए" दोनों ही आगे से पीछे तक समान हैं। इस तरह के संख्या या शब्दों को [__पलिंड्रोम__](gloss:palindrome) कहा जाता है। क्या आप किसी अन्य palindromes के बारे में सोच सकते हैं?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

यदि हम रिक्त स्थान और विराम चिह्न को अनदेखा करते हैं, तो नीचे दिए गए छोटे वाक्यों में भी चिंतनशील समरूपता होती है। क्या आप अपने साथ आ सकते हैं?

{.text-center} कभी विषम या कभी नहीं।
टूना के एक जार के लिए एक [[अखरोट]] ।
यो, केला [[लड़का]] !

{.reveal(when="blank-0 blank-1")} लेकिन पालिंड्रोम्स केवल मज़ेदार नहीं हैं, उनका वास्तव में व्यावहारिक महत्व है। कुछ साल पहले, वैज्ञानिकों ने पता लगाया था कि हमारे [डीएनए के](gloss:dna) कुछ भाग पैलंड्रोमिक हैं। यह उन्हें उत्परिवर्तन या क्षति के लिए अधिक लचीला बनाता है - क्योंकि हर टुकड़े की एक दूसरी बैकअप प्रतिलिपि होती है।

---
> id: rotational-symmetry

### घूर्णी समरूपता

::: column.grow

एक आकृति में [__घूर्णी समरूपता होती है__](gloss:rotational-symmetry) यदि यह घुमाए जाने के बाद समान दिखाई देती है (360° से कम)। [रोटेशन](gloss:center-of-rotation) का [केंद्र](gloss:center-of-rotation) आमतौर पर आकार के बीच में ही होता है।

[__समरूपता__](gloss:order-of-symmetry) का [__क्रम__](gloss:order-of-symmetry) अलग-अलग [__झुकावों__](gloss:order-of-symmetry) की संख्या है जिसमें आकार समान दिखता है। आप इसके बारे में भी सोच सकते हैं कि _कितनी बार हम आकृति को घुमा सकते हैं_ , इससे पहले कि हम शुरुआत में वापस आएँ। उदाहरण के लिए, इस बर्फ के टुकड़े में [[6]] ऑर्डर हैं।

{.reveal(when="blank-0")} प्रत्येक घुमाव का कोण है `"360°"/"order"` । बर्फ के टुकड़े में, यह है `"360°"/6 = input(60)°` ।

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

इन आकृतियों में से प्रत्येक के लिए क्रम और रोटेशन के कोण का पता लगाएं:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} क्रम [[4]] , कोण [[90]]°

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} क्रम [[2]] , कोण [[180]]°

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} आदेश [[8]] , कोण [[45]]°

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

अब इन आकृतियों को पूरा करें, ताकि उनमें घूर्णी समरूपता हो:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} आदेश 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} आदेश २

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} आदेश 4

:::

---

## समरूपता समूह और वॉलपेपर

> id: groups
> section: symmetry-groups
> translated: auto

 कुछ आकृतियों में एक से अधिक समरूपता होती है - चलो एक सरल उदाहरण के रूप में [वर्ग](gloss:square) पर एक नज़र डालते हैं।

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

आपने पहले ही ऊपर दिखाया है कि एक वर्ग में प्रतिबिंब के [[4]] अक्ष हैं।

{.reveal(when="blank-0")} इसमें [[90]]°, [[180]]° और [[270]]° तक घूर्णी समरूपता भी है।

{.reveal(when="blank-1 blank-2 blank-3")} और अंत में, हम एक और विशेष प्रकार की समरूपता के रूप में "कुछ नहीं करने" के बारे में सोच सकते हैं - क्योंकि परिणाम (स्पष्ट रूप से) पहले जैसा ही है। इसे कभी-कभी __पहचान__ भी कहा जाता है।

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} कुल मिलाकर, हमने [[8]] अलग-अलग "वर्ग के समरूप" पाए हैं।

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

अब हम वास्तव में इन समरूपताओं के साथ कुछ अंकगणित करना शुरू कर सकते हैं। उदाहरण के लिए, हम नया पाने के _लिए_ दो समरूपता _जोड़_ सकते हैं:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

जब भी आप एक वर्ग के दो समरूपता जोड़ते हैं, तो आपको एक नया मिलता है। यहाँ एक "समरूपता कैलकुलेटर" है जहाँ आप इसे स्वयं आज़मा सकते हैं:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button(tabindex=0) + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

समरूपता कैलकुलेटर के साथ खेलने के लिए कुछ समय बिताएं, और किसी भी पैटर्न को खोजने की कोशिश करें। क्या आप इन टिप्पणियों को पूरा कर सकते हैं?

* दो घुमाव जोड़ने से हमेशा [[एक रोटेशन होगा | एक प्रतिबिंब]] (या पहचान)। * दो प्रतिबिंबों को जोड़ना हमेशा [[एक रोटेशन देगा | एक प्रतिबिंब]] (या पहचान)। * विपरीत क्रम में एक ही दो समरूपता जोड़ना [[कभी-कभी एक अलग देता है | हमेशा एक अलग देता है | हमेशा एक ही]] परिणाम [[देता है]] । * पहचान जोड़ने से [[कुछ नहीं होता है | एक प्रतिबिंब देता है | विपरीत लौटाता है]] ।

---
> id: group-axioms

आप पहले से ही महसूस कर रहे होंगे कि जोड़ना __{.orange} समरूपता__ वास्तव में जोड़ने के समान है __{.green} पूर्णांक__ :

    ol.proof

      li.r
        | Adding two #[strong.orange symmetries]/#[strong.green integers] always gives another #[strong.orange symmetry]/#[strong.green integer]:
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
        .next-step Continue

      li.r.reveal(when="next-0")
        span.md Adding #[strong.orange symmetries]/#[strong.green integers] is [associative](gloss:associative):
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
        .next-step Continue

      li.r.reveal(when="next-1")
        | Every #[strong.orange symmetry]/#[strong.green integer] has an #[strong inverse], another #[strong.orange symmetry]/#[strong.green integer] which, when added, gives the identity:
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
        .next-step Continue

---
> id: groups-1

गणित में, किसी भी संग्रह में, जिसमें ये गुण हैं, एक [__समूह__](gloss:group) कहलाता है। कुछ समूह (जैसे) __{.orange}__ एक वर्ग के __सममिति__ ) में केवल तत्वों की सीमित संख्या होती है। अन्य (जैसे) __{.green} पूर्णांक__ ) अनंत हैं।

इस उदाहरण में, हमने वर्ग के आठ समरूपों के साथ शुरुआत की। वास्तव में, हर ज्यामितीय आकार का अपना __समरूप समूह होता है__ । उन सभी में अलग-अलग तत्व हैं, लेकिन वे हमेशा उपरोक्त तीन नियमों को पूरा करते हैं।

गणित में हर जगह समूह दिखाई देते हैं। तत्व संख्या या समरूपता हो सकते हैं, लेकिन साथ ही बहुपद, क्रमपरिवर्तन, मेट्रिसेस, फ़ंक्शंस ... _कुछ भी_ जो तीन नियमों का पालन करते हैं। _समूह सिद्धांत_ का मुख्य विचार यह है कि हम व्यक्तिगत तत्वों में रुचि नहीं रखते हैं, बस इस _तरह से वे एक दूसरे के साथ बातचीत करते हैं_ ।

::: column.grow

उदाहरण के लिए, विभिन्न अणुओं के समरूपता समूह वैज्ञानिकों को संबंधित सामग्रियों के गुणों की भविष्यवाणी और व्याख्या करने में मदद कर सकते हैं।

समूह का उपयोग बोर्ड गेम में जीतने की रणनीति, चिकित्सा में वायरस के व्यवहार, संगीत में विभिन्न सामंजस्य और अन्य अन्य कार्यों के विश्लेषण के लिए भी किया जा सकता है ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} CCl <sub>4</sub> अणु (बाएं) और एडेनोवायरस (दाएं) के गुण उनके समरूपता से निर्धारित होते हैं।

:::

---

### वॉलपेपर समूह

> id: wallpaper-groups

[पिछले खंडों में](/course/transformations/symmetry) हमने दो अलग-अलग परिवर्तनों के अनुरूप दो अलग-अलग प्रकार की समरूपता देखी: घुमाव और प्रतिबिंब। लेकिन तीसरे प्रकार के कठोर परिवर्तन के लिए एक समरूपता भी है: [[अनुवाद | स्पिन | झड़ जाता है]] ।

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__अनुवादक समरूपता__](gloss:translational-symmetry) अलग-अलग वस्तुओं जैसे फूल या तितलियों के लिए काम नहीं करता है, लेकिन यह नियमित पैटर्न के लिए करता है जो हर दिशा में विस्तारित होता है:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} हेक्सागोनल होनीकोम्ब

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} सिरेमिक दीवार टाइलिंग

:::

---
> id: footsteps

रिफ्लेक्शनल, रोटेशनल और ट्रांसलेशनल सिमेट्री के अलावा, यहां तक कि चौथा प्रकार है: [__ग्लाइड रिफ्लेक्शन__](gloss:glide-reflection) । यह प्रतिबिंब के अक्ष के रूप में एक प्रतिबिंब और उसी दिशा में अनुवाद का संयोजन है।

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

एक पैटर्न में एक से अधिक प्रकार की समरूपता हो सकती है। और वर्गों के लिए की तरह, हम एक पैटर्न के [समरूपता समूह](gloss:symmetry-group) को पा सकते हैं, जिसमें इसके सभी अलग-अलग समरूपताएं हैं।

ये समूह आपको इस बारे में ज़्यादा नहीं बताते कि पैटर्न _कैसा दिखता_ है (जैसे इसके रंग और आकार), बस इसे कैसे _दोहराया जाता है_ । कई अलग-अलग पैटर्न में समान समरूपता समूह हो सकता है - जब तक कि एक ही तरीके से व्यवस्थित और दोहराया नहीं जाता है।

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} इन दोनों पैटर्न में समान समरूपताएं हैं, भले ही वे बहुत अलग दिखें। लेकिन समरूपता रंगों, या सतही आकृतियों के बारे में नहीं है।

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} इन दो पैटर्न में समान समरूपताएं हैं - भले ही वे एक दूसरे की तुलना में बाईं ओर इसी पैटर्न के समान दिखते हैं।

:::

---
> id: wallpaper-groups-3
> goals: gallery

यह पता चला है कि, जबकि असीम रूप से कई संभावित पैटर्न हैं, उन सभी में सिर्फ 17 अलग-अलग समरूपता समूह हैं। इन्हें __वॉलपेपर समूह__ कहा जाता है। हर वॉलपेपर समूह अनुवाद, घुमाव, प्रतिबिंब और ग्लाइड प्रतिबिंब के संयोजन से परिभाषित होता है। क्या आप इन उदाहरणों में [रोटेशन](gloss:center-of-rotation) के [केंद्र](gloss:center-of-rotation) और [प्रतिबिंब](gloss:axis-of-symmetry) की [कुल्हाड़ियों को](gloss:axis-of-symmetry) देख सकते हैं?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Group 1 – P1</strong>
Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Group 2 – P2</strong>
Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Group 3 – P3</strong>
Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Group 4 – P4</strong>
Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Group 5 – P6</strong>
Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Group 6 – PM</strong>
Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Group 7 – PMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Group 8 – P4M</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Group 9 – P6M</strong>
Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Group 10 – P3M1</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Group 11 – P31M</strong>
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Group 12 – P4G</strong>
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Group 13 – CMM</strong>
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Group 14 – PMG</strong>
Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Group 15 – PG</strong>
Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Group 16 – CM</strong>
Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Group 17 – PGG</strong>
Perpendicular glide reflections, rotations of order 2, translations

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

दुर्भाग्य से कोई सरल कारण नहीं है कि इनमें से _17_ समूह क्यों हैं, और यह साबित करने के लिए अधिक उन्नत गणित की आवश्यकता है। इसके बजाय, आप 17 वॉलपेपर समूहों में से प्रत्येक के लिए अपने खुद के दोहराया पैटर्न खींचने की कोशिश कर सकते हैं:


    figure: x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

वॉलपेपर समूह सभी फ्लैट, द्वि-आयामी पैटर्न के बारे में थे। हम त्रि-आयामी पैटर्न के लिए कुछ समान कर सकते हैं: इन्हें क्रिस्टलोग्राफिक समूह कहा जाता है, और इनमें से 219 हैं!

अनुवाद, प्रतिबिंब, घुमाव और ग्लाइड प्रतिबिंब के अलावा, इन समूहों में __ग्लाइड विमानों__ और __स्क्रू कुल्हाड़ियों__ जैसे समरूपता शामिल हैं (बोतल को हटाते समय गति के बारे में सोचें)।

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} बोरॉन-नाइट्राइड में इस क्रिस्टल जाली में अपने अणुओं की व्यवस्था है, जिसमें तीन आयामी समरूपता समूह है।

:::

---

## भौतिकी में समरूपता

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

अब तक, हमने जिन सभी समरूपताओं को देखा, वे कुछ अर्थों में _दृश्य_ थे: दृश्य आकार, चित्र या पैटर्न। वास्तव में, समरूपता एक बहुत व्यापक अवधारणा हो सकती है: _परिवर्तन के लिए प्रतिरक्षा_ ।

उदाहरण के लिए, यदि आप संतरे के रस की तरह ही सेब के रस को पसंद करते हैं, तो आपकी प्राथमिकता सेब और संतरे को बदलने वाले परिवर्तन के तहत "सममित" है।

1915 में, जर्मन गणितज्ञ [एमी नूथर](bio:noether) ने पाया कि [प्रकृति](gloss:laws-of-nature) के [नियमों के](gloss:laws-of-nature) लिए भी कुछ ऐसा ही है।

::: column.grow

उदाहरण के लिए, हमारा अनुभव बताता है कि ब्रह्मांड में हर जगह भौतिकी के नियम समान हैं। इससे कोई फर्क नहीं पड़ता कि आप लंदन में या न्यूयॉर्क में या मंगल पर कोई प्रयोग करते हैं - भौतिकी के नियम हमेशा एक जैसे होने चाहिए। एक तरह से, उनके पास [[अनुवाद संबंधी समरूपता है | चिंतनशील समरूपता]] ।

{.reveal(when="blank-0")} इसी तरह, इससे कोई फर्क नहीं पड़ता कि हम उत्तर, या दक्षिण, या पूर्व या पश्चिम का सामना करते हुए एक प्रयोग करते हैं: प्रकृति के नियमों में [[घूर्णी समरूपता है | ग्लाइड प्रतिबिंब समरूपता]] ।

{.reveal(when="blank-1")} और अंत में, इससे कोई फर्क नहीं पड़ता कि हम आज या कल, या एक साल में एक प्रयोग करते हैं। प्रकृति के नियम "समय-सममित" हैं।

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

ये "समरूपता" शुरू में काफी अर्थहीन लग सकती हैं, लेकिन ये वास्तव में हमें हमारे ब्रह्मांड के बारे में बहुत कुछ बता सकती हैं। एमी नोथेर यह साबित करने में कामयाब रही कि प्रत्येक समरूपता एक निश्चित भौतिक मात्रा से मेल खाती है जो _संरक्षित है_ ।

उदाहरण के लिए, समय-समरूपता का अर्थ है कि __ऊर्जा__ को हमारे ब्रह्मांड में संरक्षित किया जाना चाहिए: आप ऊर्जा को एक प्रकार से दूसरे में परिवर्तित कर सकते हैं (जैसे प्रकाश से बिजली), लेकिन आप कभी भी ऊर्जा बना या नष्ट नहीं कर सकते। ब्रह्मांड में ऊर्जा की कुल मात्रा हमेशा स्थिर रहेगी।

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

यह पता चला है कि, केवल समरूपता के बारे में जानने से, भौतिक विज्ञानी प्रकृति के अधिकांश नियमों को प्राप्त कर सकते हैं जो हमारे ब्रह्मांड को नियंत्रित करते हैं - बिना किसी प्रयोग या अवलोकन के।

समरूपता भी मौलिक कणों के अस्तित्व की भविष्यवाणी कर सकती है। एक उदाहरण प्रसिद्ध __हिग्स बोसोन है__ : यह 1960 में सैद्धांतिक भौतिकविदों द्वारा भविष्यवाणी की गई थी, लेकिन 2012 तक वास्तविक दुनिया में नहीं देखा गया था।

:::

---

## dilations

> id: dilations
> section: dilations
> translated: auto

अब तक, हमने केवल [[कठोर]] देखा है [[| अनुकूल | दृश्य]] परिवर्तन। _{span.reveal(when="blank-0")} अब चलो एक के बारे में सोचते हैं जो नहीं है: एक [__फैलाव__](gloss:dilation) आकार के आकार को बड़ा या छोटा करके बदल देता है।_

---
> id: dilations-1

::: column.grow

सभी फैलाव का एक [__केंद्र__](target:center) और एक [__पैमाना कारक होता है__](->.scale-target) । केंद्र फैलाव के लिए संदर्भ बिंदु है और स्केल फैक्टर हमें बताता है कि यह आंकड़ा कितना बढ़ा या सिकुड़ता है।

यदि [स्केल फैक्टर](gloss:scale-factor) 0 और 1 के बीच है, तो छवि [[छोटी है |]] मूल से [[बड़ा]] । यदि स्केल फैक्टर 1 से बड़ा है, तो छवि [[बड़ी है |]] मूल से [[छोटा]] ।

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

{.text-center.scale-target} पैमाने के कारक: ${s}{s|2|0,3,0.1}

:::

{.todo} जल्द आ रहा है - दिल पर अधिक

---

## समानता

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
