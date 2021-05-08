# التحولات والتماثل

## مقدمة

> id: intro
> section: introduction
> color: "#2274E8"
> level: Intermediate
> next: triangles

تم اختراع العديد من المفاهيم الهندسية ، مثل [خطوط](gloss:line) و [نقاط](gloss:point) ، من قبل علماء الرياضيات. التماثل ، من ناحية أخرى ، في كل مكان حولنا. تقريبا جميع النباتات والحيوانات وحتى البشر متناظرة.

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

بمرور الوقت ، قمنا بتقليد تناظر الطبيعة في الفن والهندسة المعمارية والتكنولوجيا والتصميم. يبدو أن الأشكال والأنماط المتماثلة تبدو _أكثر جمالًا_ من الأشكال غير المتماثلة.

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

لكن التناظر أكثر أهمية من مجرد _المظهر الجميل_. إنه يكمن في أسس كوننا ، ويمكن أن يفسر حتى أهم قوانين الفيزياء الأساسية.

_{button.next-step} متابعة_

---
> id: transformations
> goals: t1 t2 t3

في حين أن التناظر هو مفهوم بديهي للغاية ، فإن وصفه رياضيًا أكثر صعوبة مما قد تعتقد. أولاً ، يجب أن نتعرف على [__التحويلات__](gloss:transformation) ، وهي طرق لتحويل شكل هندسي إلى آخر. وفيما يلي بعض الأمثلة على ذلك:

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

نتيجة التحول تسمى [__الصورة__](gloss:transformation-image). عادة ما يرمز إلى صورة الرقم `A` بالرقم `A'` (يُنطق باسم "A prime").

[المثال الأول](->#star) أعلاه خاص ، لأنه لا يتحرك سوى النجم الأصلي وتدويره ، ولكنه لا يغير حجمه أو أشكاله. تسمى التحولات بهذه الخاصية __التحولات الجامدة__.

---

## التحولات الجامدة

> id: rigid
> section: rigid

[__التحول الجامد__](gloss:rigid-transformation) هو نوع خاص من التحول لا يغير حجم الشكل الأصلي وشكله. تخيل أنها مصنوعة من مادة صلبة مثل الخشب أو المعدن: يمكننا تحريكها ، وتحويلها وقلبها ، ولكن لا يمكننا التمدد أو تشويهها.

أي من هذه التحولات جامدة؟

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

بالنسبة للتحويلات الصلبة ، تكون الصورة دائمًا [[تتطابق مع|كمثل|مقابل]] الصورة الأصلية. هناك ثلاثة أنواع مختلفة من التحولات الجامدة:

::: column.grow.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} التحول الذيي _ينقل_ الشكل ببساطة يسمى [__إنتقال__](gloss:translation).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} التحول الذي _ينقلب_ فوق الشكل يسمى [__الانعكاس__](gloss:reflection).

::: column.grow.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} التحول الذي _يدور_ الشكل يسمى [__الدوران__](gloss:rotation).

:::

---
> id: rigid-2

يمكننا أيضًا الجمع بين أنواع متعددة من التحويل لإنشاء أنواع أكثر تعقيدًا - على سبيل المثال ، ترجمة يتبعها دوران.

ولكن أولاً ، فلنلقِ نظرة على كل نوع من أنواع التحولات هذه بمزيد من التفصيل.

---
> id: translations

### الإنتقالاث

[__الإنتقالات__](gloss:translation) هي تحول ينقل كل نقطة من الشكل بنفس المسافة في نفس الاتجاه.

في مستوى الإحداثيات ، يمكننا تحديد ترجمة بمدى تحرك الشكل على طول المحور _x_ والمحور _y_. على سبيل المثال ، يؤدي التحويل بمقدار (3 ، 5) إلى تحريك شكل بمقدار 3 على طول المحور _x_ و 5 على طول المحور _y_.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} إنتقلت ([[5]] ، [[1]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} إنتقلت ([[-4]] ، [[2]])

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} إتتقلت ([[4]] ، [[-2]])

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

الآن حان دورك - إنقل الأشكال التالية كما هو موضح:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} إنتقلت (3 ، 1) _{span.check(when="drag-0")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} إنتقلت (–4 ، –2) _{span.check(when="drag-1")}_

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} إنتقلت (5، –1) _{span.check(when="drag-2")}_

:::

---
> id: reflections
> goals: r0 r1 r2

### الإنعكاس

[__الإبعكاس__](gloss:reflection) "يقلب" أو "يعكس" شكلاً عبر خط. يُسمى هذا _جط الإنعكاس_

ارسم خط الانعكاس في كل من هذه الأمثلة:

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

الآن حان دورك - ارسم انعكاس كل من هذه الأشكال:

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

لاحظ أنه إذا كانت نقطة ما تقع على خط الانعكاس ، فستكون صورتها [[مثل|أصغر من|مقابل]] النقطة الأصلية.

---
> id: reflections-3

في جميع الأمثلة أعلاه ، كان خط الانعكاس أفقيًا أو رأسيًا أو بزاوية 45 درجة - مما سهل رسم الانعكاسات. إذا لم يكن الأمر كذلك ، فإن البناء يتطلب المزيد من العمل:

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

{.r} لعكس هذا الشكل عبر [خط الانعكاس](target:refl) ، علينا أن نعكس كل [رؤوس](gloss:polygon-vertex) بشكل فردي ثم نربطها مرة أخرى. _{button.next-step} متابعة_

{.r.reveal(when="next-0")} دعنا نختار أحد القمم ونرسم الخط من خلال هذا الرأس المتعامد مع خط الانعكاس. _{button.next-step} متابعة_

{.r.reveal(when="next-1")} الآن يمكننا قياس [المسافة](target:d1) من قمة الرأس إلى خط الانعكاس ، وجعل النقطة التي لها [نفس المسافة](target:d2) على الجانب الآخر. _{span.lgrey} (يمكننا إما استخدام مسطرة أو [بوصلة](target:circ) للقيام بذلك.)_ _{button.next-step} متابعة_

{.r.reveal(when="next-2")} يمكننا أن نفعل الشيء نفسه مع جميع القمم الأخرى لشكلنا. _{button.next-step} متابعة_

{.r.reveal(when="next-3")} علينا الآن فقط توصيل القمم المنعكسة بالترتيب الصحيح ، ووجدنا الانعكاس!

:::

---
> id: rotations
> goals: r0 r1 r2

### التدوير

[__الدوران__](gloss:rotation) عبارة عن تحول "يحول" الشكل بزاوية معينة حول نقطة ثابتة. تسمى هذه النقطة [__مركز التدوير__](gloss:center-of-rotation). يمكن أن تكون الدورات في اتجاه عقارب الساعة أو عكس اتجاه عقارب الساعة.

حاول تدوير الأشكال أدناه حول مركز الدوران الأحمر:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} استدارة بمقدار 90 درجة باتجاه عقارب الساعة.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} استدارة بمقدار 180 درجة.

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} استدارة بمقدار 90 درجة عكس اتجاه عقارب الساعة.

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

من الأصعب رسم تناوب ليس بالضبط 90 درجة أو 180 درجة. لنحاول تدوير هذا الشكل بمقدار ${10*ang}{ang|6|-18,18,1} ° حول [مركز التدوير](target:rot).

{.r} مثل الانعكاسات ، علينا تدوير كل نقطة بشكل بشكل فردي. _{button.next-step} متابعة_

{.r.reveal(when="next-0")} نبدأ باختيار إحدى القمم ورسم خط إلى مركز الدوران. _{button.next-step} متابعة_

{.r.reveal(when="next-1")} باستخدام [منقلة](target:protractor) ، يمكننا قياس [زاوية ${ang*10} °](target:angle) حول مركز الدوران. فلنرسم [خط ثاني](target:l2) عند تلك الزاوية. _{button.next-step} متابعة_

{.r.reveal(when="next-2")} باستخدام [بوصلة](target:compass) أو مسطرة ، يمكننا العثور على [نقطة](target:a1) على هذا الخط والتي لها نفس المسافة من مركز التدوير كنقطة أصلية. _{button.next-step} متابعة_

{.r.reveal(when="next-3")} علينا الآن أن نكرر هذه الخطوات لجميع القمم الأخرى من شكلنا. _{button.next-step} متابعة_

{.reveal(when="next-4")} وأخيرًا ، كما كان من قبل ، يمكننا ربط القمم الفردية للحصول على الصورة المدورة لشكلنا الأصلي.

:::

---
> id: composition-1

تعتبر التحولات مفهومًا مهمًا في العديد من أجزاء الرياضيات ، وليس الهندسة فقط. على سبيل المثال ، يمكنك تحويل [_وظائف_](gloss:function) عن طريق تحويل أو تدوير [الرسوم البيانية](gloss:function-graph). يمكنك أيضًا استخدام التحويلات لتحديد ما إذا كان الشكلان متطابقان [مطابق](gloss:congruent).

---

## التطابق

> section: congruence
> sectionStatus: dev

{.todo} قريبًا

---

### تكوين التحولات

بالطبع ، يمكننا الجمع بين عدة ترجمات وانعكاسات وتناوب لإنشاء تحويلات أكثر تعقيدًا.

{.todo} قريبًا

ومع ذلك ، كما اتضح ، لا يهم عدد التحويلات المختلفة التي تجمعها: يمكنك دائمًا العثور على تحويل آخر يفعل نفس الشيء دفعة واحدة!

{.todo} قريبًا

الجمع بين انعكاسين مثير للاهتمام بشكل خاص. هناك حالتان مختلفتان نحتاج إلى النظر فيهما:

::: column.grow

إذا كان خطا الانعكاس متوازيين ، تكون النتيجة ترجمة واحدة. اتجاه الترجمة متعامد مع خطوط الانعكاس ، والمسافة ضعف المسافة بين خطوط الانعكاس.

{.todo} قريبًا

::: column.grow

إذا تقاطع خطي الانعكاس ، تكون النتيجة دوران واحد. مركز الدوران هو التقاطع بين خطوط الانعكاس ، والزاوية ضعف الزاوية بين خطوط الانعكاس.

{.todo} قريبًا

:::

---

## التماثل

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__التماثل__](gloss:symmetry) في كل مكان حولنا ، ومفهوم بديهي: تبدو الأجزاء المختلفة من الكائن _متشابهة_ بطريقة ما. ولكن باستخدام التحولات ، يمكننا تقديم تعريف رياضي أكثر دقة لما يعنيه التماثل _حقًا_:

{.definition} الكائن _متماثل_ إذا كان متشابهًا ، حتى بعد تطبيق تحويل معين.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} يمكننا أن نعكس هذه الفراشة ، وتبدو كما هي بعد ذلك. نقول أنه يحتوي على __تماثل إنعكاسي__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} يمكننا تدوير هذه الزهرة ، وتبدو كما هي بعد ذلك. نقول أنه يحتوي على __تماثل دوراني__.

:::

---
> id: reflectional-symmetry

### التماثل الانعكاسي

الشكل له [__تماثل انعكاسي__](gloss:rotational-symmetry) إذا كان نفس الشكل بعد الانعكاس. ويسمى خط الانعكاس [__محور التماثل__](gloss:axis-of-symmetry) ، ويقسم الشكل إلى نصفين [[متطابقين|متساويين|مماثلين]]. يمكن أن يكون لبعض الأشكال أيضًا أكثر من محور واحد للتماثل.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

ارسم جميع محاور التماثل في هذه الصور والأشكال الستة:

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

{.caption} يحتوي هذا الشكل على [[2]] محور تماثل.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} يحتوي المربع على [[4]] محاور تماثل.

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} يحتوي هذا الشكل على [[2]] محور تماثل.

:::

---
> id: alphabet

العديد من الحروف في الأبجدية لها تناظر انعكاسي. حدد كل ما يفعل:

    x-picker.letters(dir="ltr")
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---
> id: reflectional-symmetry-2
> goals: r0 r1 r2

إليك بعض الأشكال الأخرى. أكملها بحيث يكون لها تماثل انعكاسي:

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

يمكن أن يكون للأشكال والحروف والصور تماثل انعكاسي ، ولكن يمكن أن يكون للأرقام والكلمات والجمل بأكملها!

على سبيل المثال ، قرأ كل من "25352" و "ANNA" نفس الشيء من الخلف إلى الأمام. تسمى الأرقام أو الكلمات مثل هذه [__Palindromes__](gloss:palindrome). هل يمكنك التفكير في أي متلازمة أخرى؟

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

إذا تجاهلنا المسافات وعلامات الترقيم ، فإن الجمل القصيرة أدناه أيضًا لها تماثل انعكاسي. هل يمكنك الخروج بنفسك؟

{.text-center} Never odd or even.
A [[nut]] for a jar of tuna.
Yo, banana [[boy]]!

{.reveal(when="blank-0 blank-1")} لكن Palindromes ليست ممتعة فحسب ، بل لها في الواقع أهمية عملية. اكتشف العلماء قبل بضع سنوات أن أجزاء من [DNA](gloss:dna) لدينا متناظرة. وهذا يجعل ذلك أكثر مرونة للطفرات أو التلف - لأن هناك نسخة احتياطية ثانية لكل قطعة.

---
> id: rotational-symmetry

### التماثل الدوراني

::: column.grow

للشكل [__تماثل دوراني__](gloss:rotational-symmetry) إذا كان متشابهًا بعد التدوير (بأقل من 360 درجة). عادةً ما يكون مركز الدوران [مركز الدوران](gloss:center-of-rotation) في منتصف الشكل فقط. [__ترتيب التماثل__](gloss:order-of-symmetry) هو عدد الاتجاهات المتميزة التي يبدو الشكل فيها متشابهًا. يمكنك أيضًا التفكير في الأمر باعتباره _عدد المرات التي يمكننا فيها تدوير الشكل_ ، قبل أن نعود إلى البداية. على سبيل المثال ، يحتوي هذا الثلج على ترتيب [[6]].

{.reveal(when="blank-0")} زاوية كل دوران هي `"360°"/"order"`. في ندفة الثلج ، هذه `"360°"/6` = [[60]] °.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

ابحث عن الترتيب وزاوية التدوير لكل من هذه الأشكال:

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} الترتيب [[4]] ، الزاوية [[90]] °

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} ترتيب [[2]] ، زاوية [[180]] °

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} ترتيب [[8]] ، الزاوية [[45]] °

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

الآن أكمل هذه الأشكال ، بحيث يكون لها تماثل دوراني:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} الترتيب 4

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} الترتيب 2

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} الترتيب 4

:::

---

## مجموعات التماثل والخلفيات

> id: groups
> section: symmetry-groups

>بعض الأشكال لها أكثر من تماثل واحد - فلنلق نظرة على [مربع](gloss:square) كمثال بسيط.

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

لقد سبق ووضحت أعلاه أن المربع به [[4]] محاور انعكاس.

{.reveal(when="blank-0")} كما أن لديها تماثل دوراني بمقدار [[90]] ° و [[180]] ° و [[270]] °.

{.reveal(when="blank-1 blank-2 blank-3")} وأخيرًا ، يمكننا التفكير في "عدم فعل أي شيء" كنوع خاص آخر من تماثل - لأن النتيجة (من الواضح) هي نفسها كما كانت من قبل. يُسمى هذا أحيانًا __الهوية__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} في المجموع ، وجدنا [[8]] "تماثلات مربعة" مختلفة.

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

الآن يمكننا بالفعل البدء في إجراء بعض العمليات الحسابية باستخدام هذه التماثلات. على سبيل المثال ، يمكننا _إضافة_ تماثلين للحصول على تماثل جديد:

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

عندما تضيف تماثلين من مربع ، الحصول على واحدة جديدة. إليك "الآلة الحاسبة للتماثل" حيث يمكنك تجربتها بنفسك:

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

اقض بعض الوقت في اللعب باستخدام الآلة الحاسبة للتماثل ، وحاول العثور على أي أنماط. هل يمكنك إكمال هذه الملاحظات؟ * تؤدي إضافة دورتين إلى منح [[دورانًا|إنعكاس]] (أو الهوية). * ستؤدي إضافة انعكاسين دائمًا إلى [[دوران|إنعكاس]] (أو الهوية). * تؤدي إضافة نفس التماثلات بالترتيب المعاكس [[أحيانًا إلى نتيجة|يعطي دائما مجتلفة|دائما نفس السيء]] مختلفة. * لا تؤدي إضافة الهوية [[إلى فعل أي شيء|إرجاع ابعكاس|إرجاع العكس]].

---
> id: group-axioms

ربما أدركت بالفعل أن إضافة __{.orange} تحولات__ تشبه إلى حد كبير إضافة __{.green} أعداد صحيحة__:

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

في الرياضيات ، أي مجموعة لها هذه الخصائص تسمى [__مجموعة__](gloss:group). تحتوي بعض المجموعات (مثل التماثلات __{.orange}__ لمربع) على عدد محدود من العناصر فقط. البعض الآخر (مثل __{.green} أعداد صحيحة__) لانهائية. في هذا المثال ، بدأنا بالتماثلات الثمانية للمربع. في الواقع ، كل شكل هندسي له __مجموعة تناظر__ خاصة به. تحتوي جميعها على عناصر مختلفة ، ولكنها تفي دائمًا بالقواعد الثلاثة المذكورة أعلاه. تظهر المجموعات في كل مكان في الرياضيات. يمكن أن تكون العناصر أرقامًا أو تناظرات ، ولكن أيضًا العديد من الحدود ، والتبديلات ، والمصفوفات ، والوظائف ... _أي شيء_ يطيع القواعد الثلاثة. الفكرة الرئيسية لـ _نظرية المجموعة_ هي أننا لسنا مهتمين بالعناصر الفردية ، فقط في _كيفية تفاعلهم مع بعضهم البعض_.

::: column.grow

على سبيل المثال ، يمكن لمجموعات التماثل للجزيئات المختلفة مساعدة العلماء على التنبؤ بخصائص المواد المقابلة وتفسيرها. يمكن أيضًا استخدام المجموعات لتحليل الإستراتيجية الفائزة في ألعاب الطاولة وسلوك الفيروسات في الطب والتوافقيات المختلفة في الموسيقى والعديد من المفاهيم الأخرى ...

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} خصائص جزيء CCl <sub>4</sub> (يسار) والفيروسات الغدية (اليمنى) يحددها تناظرهما.

:::

---
### مجموعات ورق الحائط
> id: wallpaper-groups

في [الأقسام السابقة](/course/transformations/symmetry) شاهدنا نوعين مختلفين من تلتماثل يتوافقان مع تحولين مختلفين: التدوير والانعكاسات. ولكن هناك أيضًا تناظر للنوع الثالث من التحول الجامد: [[الترجماتإنتقاليات|يدور|تقالب]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__التماثل الانتقالي__](gloss:translational-symmetry) لا يعمل للكائنات المعزولة مثل الزهور أو الفراشات ، ولكنه يعمل للأنماط العادية التي تمتد في كل اتجاه:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} قرد هوني سداسي

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} بلاط سيراميك للحوائط

:::

---
> id: footsteps

بالإضافة إلى التناظر الانعكاسي والتناوب والانتقالي ، هناك نوع رابع: [__انعكاسات الانزلاق__](gloss:glide-reflection). هذا مزيج من انعكاس وترجمة في نفس اتجاه محور الانعكاس.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

يمكن أن يحتوي النمط على أكثر من نوع واحد من التناظر. ومثلما هو الحال بالنسبة للمربعات ، يمكننا العثور على [مجموعة تماثل](gloss:symmetry-group) لنمط يحتوي على جميع أوجه التماثل المختلفة.

تخبرك هذه المجموعات كثيرًا عن كيفية ظهور النمط _لا_ (مثل ألوانه وأشكاله) ، فقط كيف _يتكرر_. يمكن أن يكون للعديد من الأنماط المختلفة نفس مجموعة التماثل - طالما يتم ترتيبها وتكرارها بنفس الطريقة.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} لهذين النمطين نفس التماثلات ، على الرغم من أنهما مختلفان تمامًا. لكن التماثلات لا تتعلق بالألوان أو الأشكال السطحية.

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} يتمتع هذان النمطان أيضًا بنفس التماثلات - على الرغم من أنهما يبدوان أكثر تشابهًا مع الأنماط المقابلة على اليسار ، مقارنة ببعضهما البعض.

:::

---
> id: wallpaper-groups-3

اتضح أنه ، في حين أن هناك العديد من الأنماط الممكنة بشكل لا نهائي ، إلا أنها تحتوي جميعها على واحدة من 17 مجموعة تماثل مختلفة. تسمى هذه __مجموعات ورق الحائط__. يتم تعريف كل مجموعة ورق حائط من خلال مجموعة من الترجمات والتناوب والانعكاسات وانعكاسات الانزلاق. هل يمكنك مشاهدة [مراكز الدوران](gloss:center-of-rotation) و [محاور الانعكاس](gloss:axis-of-symmetry) في هذه الأمثلة؟

    x-gallery(slide-width="320" dir="ltr")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Type P1</strong><br>إنتقالات فقط
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Type P2</strong><br>Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Type P3</strong><br>Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Type P4</strong><br>Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Type P6</strong><br>Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Type PM</strong><br>Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Type PMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Type P4M</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Type P6M</strong><br>Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Type P3M1</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Type P31M</strong><br>Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Type P4G</strong><br>Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Type CMM</strong><br>Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Type PMG</strong><br>Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Type PG</strong><br>Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Type CM</strong><br>Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Type PGG</strong><br>Perpendicular glide reflections, rotations of order 2, translations

للأسف ليس هناك سبب بسيط لوجود _17_ من هذه المجموعات. إثبات ذلك يتطلب رياضيات أكثر تقدمًا ...

بدلاً من ذلك ، يمكنك محاولة رسم الأنماط المتكررة الخاصة بك لكل مجموعة من خلفيات الشاشة الـ 17:

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

    figure: x-wallpaper(dir="ltr")
    .other-students.reveal(when="draw-1 switch")
      h4 مثال على رسومات الطلاب الآخرين
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

كانت مجموعات ورق الحائط تدور حول أنماط مسطحة وثنائية الأبعاد. يمكننا أن نفعل شيئًا مشابهًا للأنماط ثلاثية الأبعاد: تسمى هذه المجموعات البلورية ، وهناك 219 منهم!

بالإضافة إلى الترجمات والانعكاسات والتدوير وانعكاسات الانزلاق ، تتضمن هذه المجموعات تناظرًا مثل __مستويات انزلاق__ و __محاور لولبية__ (فكر في الحركة عند فك الزجاجة).

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} يحتوي Boron-Nitride على جزيئاته مرتبة في هذه الشبكة البلورية ، التي تحتوي على مجموعة تناظر ثلاثية الأبعاد.

:::

---

## التماثل في الفيزياء

> id: planets
> sectionBackground: dark stars
> section: physics

حتى الآن ، كانت جميع التماثلات التي نظرنا إليها _مرئية_ إلى حد ما: أشكال أو صور أو أنماط مرئية. في الواقع ، يمكن أن يكون التماثل مفهومًا أوسع بكثير: _مناعة للتغيير_.

على سبيل المثال ، إذا كنت تحب عصير التفاح مثلما تحب عصير البرتقال ، فإن تفضيلاتك هي "متناظرة" في ظل التحول الذي يبدل التفاح والبرتقال.

في عام 1915 ، لاحظ عالم الرياضيات الألماني [إيمي نويثر](bio:noether) أن شيئًا مشابهًا ينطبق على [قوانين الطبيعة](gloss:laws-of-nature).

::: column.grow

على سبيل المثال ، تخبرنا تجربتنا أن قوانين الفيزياء هي نفسها في كل مكان في الكون. لا يهم إذا أجريت تجربة في لندن ، أو في نيويورك ، أو على كوكب المريخ - يجب أن تكون قوانين الفيزياء هي نفسها دائمًا. بطريقة ما ، لديهم [[التناظر الإنتقالي|التناظر الإنعكاسي]].

{.reveal(when="blank-0")} وبالمثل ، لا يهم إذا أجرينا تجربة أثناء مواجهة الشمال أو الجنوب أو الشرق أو الغرب: قوانين الطبيعة لها [[تناظر دوراني|تناظر إنعكاس الإنزلاق]].

{.reveal(when="blank-1")} وأخيرًا ، لا يهم إذا أجرينا تجربة اليوم أو غدًا أو بعد عام. قوانين الطبيعة "متناظرة مع الزمن".

::: column(width=300 dir="ltr")

    include svg/planets.svg

:::

---
> id: planets-1

قد تبدو هذه "التماثلات" في البداية عديمة المعنى تمامًا ، لكنها يمكن أن تخبرنا كثيرًا عن كوننا. تمكنت إيمي نويثر من إثبات أن كل تناظر يتوافق مع كمية مادية معينة _محفوظة_.

على سبيل المثال ، يشير التناظر الزمني إلى ضرورة الحفاظ على __الطاقة__ في عالمنا: يمكنك تحويل الطاقة من نوع إلى آخر (مثل الضوء أو الحرارة أو الكهرباء) ، ولكن لا يمكنك أبدًا إنشاء الطاقة أو تدميرها. سيبقى إجمالي كمية الطاقة في الكون ثابتًا دائمًا.

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN هو أكبر مسرع جسيمات في العلم. يقوم العلماء بتحطيم الجسيمات الأساسية بسرعات هائلة، لمعرفة المزيد عن خصائصها. ّل يمكنك رؤية الشخص في الأسفل لمقارنة الحجم؟

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption المسارات التي تتخذها شظايا الجسيمات بعد التصادم.

::: column.grow

اتضح أنه ، من خلال معرفة التماثل فقط ، يمكن للفيزيائيين استخلاص معظم قوانين الطبيعة التي تحكم كوننا - دون الحاجة إلى إجراء تجربة أو ملاحظة.

يمكن للتناظر حتى التنبؤ بوجود الجسيمات الأساسية. أحد الأمثلة هو __هيجز بوسون__ الشهير: تم توقعه في الستينيات من قبل علماء الفيزياء النظرية ، ولكن لم تتم ملاحظته في العالم الحقيقي حتى عام 2012.

:::

---

## التوسعات

> id: dilations
> section: dilations

لقد نظرنا حتى الآن للتو على تحويلات [[جامدة|تتطابق|مرئية]]. _{span.reveal(when="blank-0")} دعنا نفكر الآن في واحد غير: [__التوسيع__](gloss:dilation) يغير حجم الشكل بجعله أكبر أو أصغر._

---
> id: dilations-1

::: column.grow

جميع التوسعات لها [__مركز__](target:center) و [__عامل مقياس__](->.scale-target). المركز هو النقطة المرجعية لعامل التمدد والقياس يخبرنا كم يمتد الشكل أو يتقلص. إذا كان [عامل المقياس](gloss:scale-factor) بين 0 و 1 ، فإن الصورة [[أصغر|أكبر]] من الصورة الأصلية. إذا كان عامل المقياس أكبر من 1 ، فإن الصورة [[أكبر|أصغر]] من الصورة الأصلية.

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

{.text-center.scale-target} عامل المقياس: ${s}{s|2|0,3,0.1}

:::

{.todo} قريبًا

---

## التشابه

> section: similarity
> sectionStatus: dev
> id: similarity

{.todo} قريبًا
