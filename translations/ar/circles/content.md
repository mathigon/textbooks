# الدوائر و Pi

## المقدمة

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory

::: column.grow

لطالما وجد البشر ، نظرنا إلى السماء وحاولنا شرح الحياة على الأرض باستخدام حركة النجوم والكواكب والقمر.

كان علماء الفلك اليونانيون القدماء أول من اكتشف أن جميع الأجرام السماوية تتحرك في مسارات منتظمة تسمى __المدارات__ . كانوا يعتقدون أن هذه المدارات دائرية دائمًا. بعد كل شيء ، الدوائر هي "الأكثر مثالية" من جميع الأشكال: متماثل في كل اتجاه ، وبالتالي خيار مناسب للنظام الأساسي لكوننا.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} تقع الأرض في مركز _الكون البطلمى_ .

:::

---
> id: radius
> goals: compass

كل نقطة على [__دائرة__](gloss:circle) لها نفس المسافة من وسطها. هذا يعني أنه يمكن رسمها باستخدام [البوصلة](gloss:compass) :

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

{.reveal(when="compass")} هناك ثلاثة قياسات مهمة تتعلق بالدوائر تحتاج إلى معرفتها:

* {.reveal(when="compass" delay="1000")} [{.pill.red.b} النسف القطر](target:r) هو المسافة من وسط الدائرة إلى حافتها الخارجية.
* {.reveal(when="compass" delay="4000")} [{.pill.blue.b} القطر](target:d) هو المسافة بين نقطتين متقابلتين على دائرة. يمر وسها ، وطوله [[مرتين | نصف | نفس]] نصف القطر.
* {.reveal(when="blank-0")} [{.pill.green.b} المحيت](target:c) (أو المحيط الدائرة) هو المسافة حول دائرة.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

إحدى الخصائص المهمة للدوائر هي أن جميع الدوائر [متشابهة](gloss:similar) . يمكنك إثبات ذلك من خلال إظهار كيفية مطابقة جميع الدوائر باستخدام [الترجمات](gloss:translation) [والتوسعات](gloss:dilation) ببساطة:

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

قد تتذكر أنه بالنسبة للمضلعات المماثلة ، تكون النسبة بين الأضلاع المقابلة ثابتة دائمًا. شيء مشابه يعمل في الدوائر: النسبة بين [المحيط الدائرة](gloss:circle-circumference) [والقطر](gloss:circle-diameter) متساوية _لجميع الدوائر_ . إنه دائمًا 3.14159 ... - رقم غامض يسمى [__Pi__](gloss:pi) ، والذي غالبًا ما يتم كتابته بالحرف اليوناني _π_ لـ "p". يحتوي Pi على عدد لا نهائي من الأرقام العشرية التي تستمر إلى الأبد بدون أي نمط محدد:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

هنا عجلة بقطر 1. عندما "تطيل" المحيط الدائرة ، يمكنك أن ترى أن طوله بالضبط [[`pi`|`2 pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

بالنسبة لدائرة قطرها _d_ ، يكون المحيط `C = π × d` . وبالمثل ، بالنسبة لدائرة [نصف قطرها](gloss:circle-radius) _r_ ، يكون المحيط

{.text-center(dir="ltr")} `C =` [[`2 π r`|`π r`|`π r^2`]] .

---
> id: nature

الدوائر متناظرة تمامًا ، وليس لديها أي "نقاط ضعف" مثل زوايا المضلع. هذا هو أحد الأسباب التي تجعل من الممكن العثور عليها في كل مكان في الطبيعة:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} زهور

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} الكواكب

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} الأشجار

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} فاكهة

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} فقاعات الصابون

:::

{.r} وهناك العديد من الأمثلة الأخرى: من أقواس قزح إلى تموجات الماء. هل يمكنك أن تفكر في أي شي آخر؟ [استمر](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

يتبين أيضًا أن الدائرة هي الشكل الذي يحتوي على أكبر مساحة لمحيط الدائرة معين. على سبيل المثال ، إذا كان لديك حبل بطول 100 \ م ، يمكنك استخدامه لإحاطة أكبر مساحة إذا قمت بتشكيل دائرة (بدلاً من الأشكال الأخرى مثل المستطيل أو المثلث).

في الطبيعة ، يمكن لأشياء مثل قطرات الماء أو فقاعات الهواء _توفير الطاقة من_ خلال أن تصبح دائرية أو كروية ، وتقليل مساحة سطحها.

::: column(width=320)

    x-select.segmented
      div(data-value="0") مثلث
      div(data-value="1") مربع
      div(data-value="2") مخمس
      div(data-value="3") دائرة
    svg(width=320 height=200)

{.caption} _المحيط_ = __{.m-green} 100__ ، _المساحة_ = __${area}__

:::

---
> id: area
> goals: slider

### مساحة الدائرة

ولكن كيف نحسب بالفعل مساحة الدائرة؟ دعنا نجرب نفس التقنية التي استخدمناها [لإيجاد مساحة الرباعي](/course/polyhedra/quadrilaterals) : نقطع الشكل إلى أجزاء مختلفة متعددة ، ثم نعيد ترتيبها إلى شكل مختلف نعرف بالفعل منطقة (مثل مستطيل أو مثلث).

الاختلاف الوحيد هو أنه ، نظرًا لأن الدوائر منحنية ، يتعين علينا استخدام بعض التقديرات:

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

هنا يمكنك أن ترى دائرة مقسمة إلى ${toWord(n1)} أسافين. حرّك شريط التمرير ، لتحاذي الأوتاد في صف واحد.

{.reveal(when="slider")} إذا قمنا بزيادة عدد الأوتاد إلى ${n1}{n1|6|6,30,2} ، يبدأ هذا الشكل في الظهور أكثر فأكثر مثل [[مستطيل | دائرة | مربع]] .

{.reveal(when="blank-0")} ارتفاع المستطيل يساوي [[نصف القطر | محيط | قطر]] الدائرة. _{span.reveal(when="blank-1")} عرض المستطيل يساوي [[نصف المحيط | محيط | ضعف نصف قطر]] الدائرة._ _{span.reveal(when="blank-2")} (لاحظ كيف أن نصف الأوتاد لأسفل ونصفها لأعلى.)_

{.reveal(when="blank-2" delay=1000)} وبالتالي فإن المساحة الإجمالية للمستطيل تكون تقريبًا `A = π r^2`

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

هنا يمكنك أن ترى دائرة مقسمة إلى ${toWord(n)} خواتم. كما كان من قبل ، يمكنك تحريك شريط التمرير "لفك" الحلقات.

{.reveal(when="slider")} إذا قمنا بزيادة عدد الحلقات إلى ${n2}{n2|4|2,12,1} ، يبدأ هذا الشكل في الظهور أكثر وأكثر مثل [[المثلث | مستطيل | شبه منحرف]] .

{.reveal(when="blank-0")} ارتفاع المثلث يساوي [[نصف القطر | قطر الدائرة | محيط]] الدائرة. _{span.reveal(when="blank-1")} قاعدة المثلث تساوي [محيط | ضعف قطر]] الدائرة._ _{span.reveal(when="blank-2")} وبالتالي فإن المساحة الإجمالية للمثلث تقارب_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`

:::

---
> id: area-2

إذا تمكنا من استخدام العديد من الحلقات أو الأوتاد بشكل لا نهائي ، فسيكون التقريب أعلاه مثاليًا - وكلاهما يعطينا نفس الصيغة لمنطقة الدائرة:

{.text-center.r} `A = π r^2` [استمر](btn:next)

---
> id: pi-approximations

### حساب Pi

كما رأيت أعلاه ، `π = 3.1415926…` ليس عددًا صحيحًا بسيطًا ، وأرقامه العشرية تستمر إلى الأبد ، دون أي نمط متكرر. تسمى الأرقام التي تحتوي على هذه الخاصية [__أرقامًا غير منطقية__](gloss:irrational-numbers) ، وهذا يعني ذلك `π` لا يمكن التعبير عنه على أنه كسر بسيط `a/b` .

هذا يعني أيضًا أنه لا يمكننا أبدًا تدوين _جميع_ أرقام Pi - بعد كل شيء ، هناك الكثير بلا حدود. قام علماء الرياضيات اليونانيون والصينيون القدماء بحساب الأرقام الأربعة العشرية الأولى لـ Pi عن طريق تقريب الدوائر باستخدام المضلعات العادية. لاحظ كيف أنه ، عندما تضيف المزيد من الجوانب ، يبدأ المضلع في الظهور [[أكثر و أكثر | أقل | تمامًا]] مثل الدائرة:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

في عام 1665 ، تمكن [إسحاق نيوتن](bio:newton) من حساب 15 رقمًا. اليوم ، يمكننا استخدام أجهزة كمبيوتر قوية لحساب قيمة Pi إلى دقة أعلى بكثير.

الرقم القياسي الحالي هو 31.4 تريليون رقم. يبلغ سمك الكتاب المطبوع الذي يحتوي على جميع هذه الأرقام حوالي 400 \ كم - وهو الارتفاع الذي تدور فيه [محطة الفضاء الدولية](gloss:iss) حول الأرض!

بالطبع ، لا تحتاج إلى تذكر أن العديد من أرقام Pi. في الواقع ، الكسر `22/7 = 3.142…` هو تقريب كبير.

:::

---
> id: pi-sequence

أحد الطرق لحساب Pi هو استخدام تسلسل لا نهائي من الأرقام. في ما يلي مثال تم اكتشافه بواسطة [جوتفريد فيلهلم ليبنيز](bio:leibniz) عام 1676:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} بينما نقوم بحساب المزيد والمزيد من شروط هذه السلسلة ، باتباع نفس النمط دائمًا ، ستقترب النتيجة من Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

يعتقد العديد من علماء الرياضيات أن Pi لديها خاصية أكثر فضولًا: إنها __رقم طبيعي__ . هذا يعني أن الأرقام من 0 إلى 9 تظهر بشكل عشوائي تمامًا ، كما لو أن الطبيعة قد دحرجت نردًا من 10 جوانب بشكل لا نهائي عدة مرات ، لتحديد قيمة Pi.

هنا يمكنك رؤية أول 100 رقم من Pi. تحرك فوق بعض الخلايا ، لمعرفة كيفية توزيع الأرقام.

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

إذا كانت Pi طبيعية ، فهذا يعني أنه يمكنك التفكير في _أي_ سلسلة من الأرقام ، وستظهر في مكان ما في أرقامها. هنا يمكنك البحث في أول مليون رقم من Pi - هل تحتوي على عيد ميلادك؟

::: .box.f-red.pi-box

#### مليون رقم من Pi

    .pi-controls
      | ابحث عن سلسلة من الأرقام:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

يمكننا حتى تحويل كتاب كامل ، مثل هاري بوتر ، إلى سلسلة طويلة جدًا من الأرقام (أ = 01 ، ب = 02 ، وما إلى ذلك). إذا كانت Pi طبيعية ، فستظهر هذه السلسلة في مكان ما في أرقامها - ولكن سيستغرق ملايين السنين لحساب أرقام كافية للعثور عليها.

Pi سهلة الفهم ، لكنها ذات أهمية أساسية في العلوم والرياضيات. قد يكون هذا هو السبب في أن Pi أصبحت شائعة بشكل غير معتاد في ثقافتنا (على الأقل ، مقارنة بمواضيع الرياضيات الأخرى):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi هو المزيج السري للكمبيوتر اللوحي في "Night at the Museum 2".

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption يقوم البروفيسور فرينك ("سمبسنز") بإسكات غرفة من العلماء بقولهم إن Pi تساوي 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption يعطل Spock ("Star Trek") جهاز كمبيوتر شرير من خلال مطالبته بحساب الرقم الأخير من Pi.

:::

---
> id: pi-day

هناك حتى _يوم بي_ كل عام ، والذي يقع إما في 14 مارس ، لأنه `pi ≈ 3.14` ، أو في 22 يوليو ، لأنه `pi ≈ 22/7` .

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## الدرجات والراديان

> section: radians
> id: degrees

حتى الآن في الهندسة ، قمنا دائمًا بقياس الزوايا [بالدرجات](gloss:degrees) . أ __{.m-red}__ دوران __الدائرة الكاملة__ هو [[360]] درجة ، أ __{.m-green} نصف الدائرة__ [[180]] درجة ، أ __{.m-yellow} ربع الدائرة__ [[90]] درجة ، وهكذا.

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

{.r} الرقم 360 مناسب للغاية لأنه قابل للقسمة على العديد من الأرقام الأخرى: 2 ، 3 ، 4 ، 5 ، 6 ، 8 ، 9 ، 10 ، 12 ، 15 ، وما إلى ذلك. هذا يعني أن العديد من الكسور في دائرة واحدة هي أيضًا أعداد صحيحة. ولكن هل تساءلت يومًا من أين يأتي الرقم 360؟ [استمر](btn:next)

---
> id: babylon

::: column.grow

كما يحدث ، 360 درجة هي واحدة من أقدم المفاهيم في الرياضيات التي ما زلنا نستخدمها اليوم. لقد تم تطويرها في بابل القديمة ، منذ أكثر من 5000 عام!

في ذلك الوقت ، كان أحد أهم تطبيقات الرياضيات في علم الفلك. تحدد _الشمس_ الفصول الأربعة ، والتي يجب على المزارعين معرفتها عند زراعة المحاصيل. وبالمثل ، يحدد _القمر_ المد والجزر ، وهو أمر مهم للصيادين. درس الناس أيضًا النجوم للتنبؤ بالمستقبل أو للتواصل مع الآلهة.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} قرص بابلي للحساب `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

لاحظ علماء الفلك أن الأبراج المرئية في وقت محدد أثناء الليل تتغير قليلاً كل يوم - حتى بعد 360 يومًا تقريبًا ، تعود إلى نقطة البداية. وربما كان هذا هو السبب في تقسيم الدائرة إلى 360 درجة.

    figure: .constellations
      .label.md منتصف الليل في النهار ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

بالطبع ، هناك بالفعل 365 يومًا في عام واحد (حسنًا ، 365.242199 على وجه الدقة) ، لكن علماء الرياضيات البابليين عملوا مع ساعات شمسية بسيطة ، وكان هذا التقريب مناسبًا تمامًا.

كما عملت بشكل جيد مع نظامهم الأساسي الأساسي 60 (منذ ذلك الحين `6 xx 60 = 360` ). هذا النظام هو السبب في أنه لا يزال لدينا 60 ثانية في الدقيقة و 60 دقيقة في الساعة - على الرغم من أن معظم الوحدات الأخرى تقاس في [القاعدة 10](gloss:base-10) (على سبيل المثال 10 سنوات في العقد ، أو 100 سنة في القرن).

::: column.grow

بالنسبة للكثيرين منا ، فإن قياس الزوايا بالدرجات هو طبيعة ثانية: يوجد فيديو 360 درجة ، ويمكن لألواح التزلج على الجليد سحب 540s ، وقد يقوم شخص يغير قراره بتحويل 180 درجة.

ولكن من وجهة نظر رياضية ، فإن اختيار 360 أمر تعسفي تمامًا. إذا كنا نعيش على كوكب المريخ ، فقد يكون لدائرة 670 درجة ، ولسنة على المشتري حتى 10475 يومًا.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 مكفليب ، دوران 540 درجة

:::

---
> id: radians

### راديان

بدلاً من تقسيم دائرة إلى عدد من الأجزاء (مثل 360 درجة) ، يفضل علماء الرياضيات غالبًا قياس الزوايا باستخدام [محيط](gloss:circle-circumference) [__دائرة الوحدة__](gloss:unit-circle) (دائرة نصف قطرها 1).

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

[ دائرة كاملة](action:setState(0)) لديها محيط _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-0")} [ دوران نصف دائرة](action:setState(1)) ، المسافة المقابلة على طول المحيط _{x-equation.small(solution="π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-1")} [ دوران ربع الدائرة](action:setState(2)) ، المسافة على طول المحيط _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ .

{.reveal(when="eqn-2")} وهكذا: تسمى طريقة قياس الزوايا [__الراديان__](gloss:radians) (يمكنك أن تتذكر هذا على أنه "وحدات نصف قطر").

:::

---
> id: radians-conversion

لكل زاوية بالدرجات حجم مكافئ بوحدات الراديان. التحويل بين الاثنين سهل للغاية - تمامًا كما يمكنك التحويل بين وحدات أخرى مثل الأمتار والكيلومترات ، أو مئوية وفهرنهايت:

{.text-center} __{.m-red} 360 درجة__ _{span.space} =_ __{.m-green} 2 _π_ راديان__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1 درجة__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} راديان__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 راديان__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

يمكنك كتابة قيمة الراديان إما كمضاعف _π_ ، أو كرقم عشري واحد فقط. هل يمكنك ملء هذا الجدول بأحجام الزاوية المتساوية بالدرجات والراديان؟

| __{.m-red}درجات__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-green}راديار__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### المسافة المقطوعة

يمكنك التفكير في الراديان على أنها "المسافة المقطوعة" على طول محيط دائرة الوحدة. هذا مفيد بشكل خاص عند العمل مع الكائنات التي تتحرك على مسار دائري.

::: column.grow

على سبيل المثال ، تدور [محطة الفضاء الدولية](gloss:iss) حول الأرض مرة كل 1.5 ساعة. هذا يعني __سرعة دورانها__ [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] راديان في الساعة.

{.reveal(when="blank-0")} في [دائرة الوحدة](gloss:unit-circle) ، تكون سرعة الدوران هي نفس السرعة _الفعلية_ ، لأن طول المحيط هو نفس الدوران الكامل بالراديان (كلاهما `2pi` ).

{.reveal(when="blank-0" delay=1000)} يبلغ نصف قطر مدار المحطة الفضائية الدولية 6800 \ كم ، مما يعني أن السرعة _الفعلية_ لمحطة الفضاء الدولية يجب أن تكون [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 كم / ساعة._

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

هل يمكنك أن ترى ، في هذا المثال ، وحدات الراديان هي وحدة أكثر ملاءمة من الدرجات؟ بمجرد أن نعرف سرعة الدوران ، علينا ببساطة أن نضرب في نصف القطر للحصول على السرعة الفعلية.

إليك مثال آخر: تحتوي سيارتك على عجلات نصف قطرها 0.25 \ م. إذا كنت تقود بسرعة 20 \ م / ث ، فإن عجلات سيارتك تدور [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] راديان في الثانية _{span.reveal(when="blank-0")} (أو `80/(2pi) = 13` تناوب في الثانية)._

---
> id: radians-trig

### علم المثلثات

بالنسبة إلى معظم المشاكل الهندسية البسيطة ، فإن الدرجات والراديان قابلة للتبادل تمامًا - يمكنك إما اختيار أيهما تفضل ، أو سؤال قد يخبرك بالوحدة التي تريد إجابتك فيها. ومع ذلك ، بمجرد دراسة [علم المثلثات](gloss:trigonometry) أو [حساب التفاضل والتكامل](gloss:calculus) الأكثر تقدمًا ، اتضح أن الراديان أكثر راحة من الدرجات.

::: column.grow

تحتوي معظم الآلات الحاسبة على [زر خاص](->.button.mode) للتبديل بين الدرجات والراديان. الدوال المثلثية مثل [__الخطيئة__](gloss:sin) ، [__cos__](gloss:cos) و __tan__ تأخذ الزوايا كمدخل ، __ودوالها__ العكسية __arcsin__ ، __arccos__ و __arctan__ زوايا العودة كمخرجات. يحدد إعداد الحاسبة الحالي الوحدات المستخدمة لهذه الزوايا.

حاول استخدام هذه الآلة الحاسبة لحساب ذلك

{.text-center(dir="ltr")} sin (30°) = [[0.5]] _{span.eqn-gap}_ cos (1°) = [[0.999]]
sin (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0.54]]

::: column(width=300)

    .calculator(dir="ltr")
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

استخدام الراديان لديه ميزة واحدة مثيرة للاهتمام بشكل خاص عند استخدام الدالة Sine. إذا `θ` هي زاوية صغيرة جدًا (أقل من 20 درجة أو 0.3 راد) ، ثم `sin(θ) ≈ θ` . فمثلا،

{.text-center} خطيئة ( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} ...

{.reveal(when="var-0")} وهذا ما يسمى __تقريب الزاوية الصغيرة__ ، ويمكن أن يبسط إلى حد كبير معادلات معينة تحتوي على دالات مثلثية. ستتعلم المزيد عن هذا في المستقبل.

---

## المماس ، الحبال والأقواس

> section: tangets-chords-arcs
> id: circle-parts

لقد تعلمت في الأقسام السابقة الأسماء المعطاة لعدة أجزاء مختلفة من الدائرة - مثل المركز ونصف القطر والقطر والمحيط. ومع ذلك ، هناك العديد من العناصر الهندسية المتعلقة بالدائرة ، والتي سنحتاجها لحل المشكلات المعقدة:

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

* {.r} [{.red} القاطع](target:secant) هو خط يتقاطع مع دائرة عند نقطتين. [تواصل](btn:next)
* {.r.reveal(when="next-0")} [{.green} الكورد](target:chord) هو جزء من الخط تقع نقاط نهايته على محيط الدائرة. [تواصل](btn:next)
* {.r.reveal(when="next-1")} [{.blue} الظل](target:tangent) هو خط يلمس دائرة عند نقطة واحدة بالضبط. وهذا ما يسمى __نقطة التماس__ . [تواصل](btn:next)
* {.r.reveal(when="next-2")} [{.yellow} القوس](target:arc) هو جزء من محيط الدائرة. [تواصل](btn:next)
* {.r.reveal(when="next-3")} [{.teal} القطاع](target:sector) هو جزء من الجزء الداخلي من الدائرة ، ويحده _قوس_ ونصف _قطري_ . [تواصل](btn:next)
* {.r.reveal(when="next-4")} أخيرا [{.purple} الجزء](target:segment) هو جزء من الجزء الداخلي من دائرة ، يحده _قوس_ _وتر_ . [استمر](btn:next)

:::

---
> id: circle-parts-1

في هذا القسم ، سنلقي نظرة على العلاقة بين كل هذه العناصر ، ونثبت النظريات حول خصائصها. لا تقلق بشأن حفظ جميع التعريفات في الوقت الحالي - يمكنك دائمًا استخدام [قائمة كلمات
](->.footer-link[data-modal=glossarym]) .

---

### المماس

{.todo} قريبا!

---

### الحبال

{.todo} قريبا!

---
> id: earth-arc

### الأقواس والقطاعات

::: column.grow

اتفق معظم العلماء في اليونان القديمة على أن الأرض عبارة عن كرة. كان هناك الكثير من الأدلة: من اختفاء السفن وراء الأفق في البحر ، إلى الحركة الدائرية للنجوم أثناء الليل.

لسوء الحظ ، لم يكن أحد يعرف بالضبط _كم_ كانت الأرض _كبيرة_ - حتى حوالي 200 قبل الميلاد ، عندما وجد عالم الرياضيات [إراتوستينس](bio:eratosthenes) طريقة بارعة لقياس نصف قطر الأرض ، باستخدام الهندسة الأساسية. كل ما نحتاجه هو المزيد من المعرفة حول الأقواس وقطاعات الدائرة.

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

كما ترون في الرسم البياني ، [{.red} القوس](target:arc) هو جزء من [[محيط الدائرة | قطر الدائرة | المماس]] دائرة ، و [{.yellow} القطاع](target:sector) هو جزء من [[داخل | نصف القطر | محيط]] الدائرة.

::: .reveal(when="blank-0 blank-1")

غالباً ما يكتب القوس بين نقطتين _A_ و _B_ `arc(AB)` . هذا التعريف غامض بعض الشيء: هناك [{.purple} القوس الثاني](target:major) الذي يربط _A_ و _B_ ولكنه يذهب في الاتجاه الآخر حول الدائرة.

يسمى أصغر القوسين __القوس الصغير__ ، ويسمى __القوس الأكبر القوس الرئيسي__ . إذا كانت النقطتان _A_ و _B_ متقابلتين تمامًا تمامًا ، فإن كلا القوسين لهما نفس الطول وهما [[نصف دائرة | أقطار | محيطات]] .

:::

:::

---
> id: arcs-1

::: column.grow

لإيجاد طول القوس أو مساحة القطاع ، نحتاج إلى معرفة الزاوية المقابلة في مركز الدائرة: وهذا ما يسمى [{.blue} الزاوية المركزية](target:angle) .

لاحظ كيف يأخذ القوس والقطاع والزاوية _نفس النسبة_ من الدائرة الكاملة. على سبيل المثال ، إذا كان [{.blue} الزاوية المركزية](target:angle) [90°](action:set90Deg())، يستغرق [[ربعه | نصف | ثلث]] أ [{.teal} دائرة كاملة](target:fangle) .

::: .reveal(when="blank-0")

وهذا يعني أن [{.red} طول القوس](target:arc) أيضا `1/4` من [{.purple} محيط الدائرة كلة](target:circ)
 [{.yellow} مجال القطاع](target:sector) `1/4` من [{.orange} كامل مساحة](target:area) الدائرة.

يمكننا التعبير عن هذه العلاقة في معادلة:

{.text-center}`pill("طول القوس","red","arc") / pill("محيط الدائرة","blue","circ") = blank("مجال القطاع","نصف القطر","منطقة القوس") / pill("الزاوية المركزية","blue","circ") = pill("الزاوية المركزية","blue","circ") / blank("360°","180°","90°") `

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

يمكننا الآن إعادة ترتيب هذه المعادلات للعثور على أي متغير يهمنا. على سبيل المثال ،

::: column(width=320 parent="padded-thin")

| [طول القوس](pill:red) | = | `"محيط الدائرة" × c/360` |
|                        | = | `2 π r × c/360`       |
{.eqn-system}

::: column(width=320)

| [منطقة القطاع](pill:yellow) | = | `"منطقة الدائرة" × c/360` |
|                            | = | `π r^2 × c/360`      |
{.eqn-system}

:::

حيث _r_ هو نصف قطر الدائرة ، و _c_ هو حجم الزاوية المركزية.

---
> id: arcs-rad

إذا تم قياس الزاوية المركزية [بالتقدير الدائري](gloss:radians) بدلاً من [الدرجات](gloss:degrees) ، فيمكننا استخدام نفس المعادلات ، ولكن يجب استبدال 360° بـ [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [طول القوس](pill:red) | = | `2 π r × c/(2π)` |
|                          | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [منطقة القطاع](pill:yellow) | = | `π r^2 × c/(2π)` |
|                              | = | `1/2 r^2 c`      |
{.eqn-system}

:::

لاحظ كيف تصبح المعادلات أبسط بكثير ، و _π_ تلغي في كل مكان. هذا لأنه ، كما قد تتذكر ، [تعريف الراديان](/course/circles/radians#radians) هو في الأساس طول القوس في دائرة نصف قطرها 1.

الآن دعونا نرى كيف يمكننا استخدام الأقواس والقطاعات لحساب محيط الأرض. [استمر](btn:next)

:::

---
> id: eratosthenes

في مصر القديمة ، كانت مدينة _Swenet_ تقع على طول نهر النيل. اشتهر Swenet ببئر ذات خاصية غريبة: كانت هناك لحظة واحدة كل عام عندما وصل ضوء الشمس إلى قاع البئر - ظهرًا في 21 يونيو ، يوم _الانقلاب الصيفي_ . في ذلك الوقت الدقيق ، كان الجزء السفلي من البئر مضاءًا ، ولكن ليس جوانبها ، مما يعني أن الشمس كانت تقف فوق البئر مباشرة.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} قام قدماء المصريين بقياس مسافات طويلة من خلال حساب عدد الخطوات التي اتخذتها للمشي.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} تقول بعض المصادر أن بئر إراتوستينس كان على _جزيرة الفنتين_ على نهر النيل.

:::

عاش عالم الرياضيات [إراتوستينس](bio:eratosthenes) في _الإسكندرية_ ، على بعد حوالي 800 كم شمال سوينت ، حيث كان مديرًا للمكتبة الكبرى. في وسط مدينة الإسكندرية كانت هناك مسلة ، نصب تذكاري طويل وضيق مع قمة على شكل هرم.

لاحظ إراتوستينس أنه في ظهر يوم الانقلاب الصيفي ، ألقت المسلة ظلًا - مما يعني أن الشمس لم _تكن_ فوقها مباشرة. استنتج أن هذا كان بسبب انحناء الأرض ، وأدرك أنه يمكن استخدامه لحساب محيط كوكبنا.

---
> id: eratosthenes-1

::: column.grow

{.r} هنا يمكنك رؤية البئر في سوينت وكذلك المسلة في الإسكندرية. تسقط أشعة الشمس مباشرة في البئر ، لكنها تضرب المسلة بزاوية وتلقي بظلالها. [استمر](btn:next)

::: .reveal(when="next-0")

قياس إراتوستينس أن كانت [{.teal} زاوية](target:angle1) الظل 7.2 درجة. هذا هو نفس [{.purple} الزاوية المركزية](target:angle2) لل [{.red} قوس](target:arc) من الإسكندرية إلى سوينت ، لأنهم [[يتناوبون | عمودي |المقابلة]] الزوايا .

:::

::: .reveal(when="blank-0")

يمكننا الآن استخدام معادلة طول القوس الذي استخلصناه أعلاه:

{.text-center}`pill("طول القوس","red","arc") / pill("محيط الدائرة","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

إذا أعدنا ترتيب ذلك ، نجد أن محيط الأرض هو

{.text-center}`pill("محيط الدائرة","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

أخيرًا ، نعلم أن محيط الدائرة هو `C = 2 pi r` ، لذلك نصف قطر الأرض

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` .

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

كان قياس إراتوستينس أحد أهم التجارب في العصور القديمة. كان تقديره لحجم الأرض دقيقًا بشكل مدهش ، خاصة عند النظر إلى أنه لم يكن لديه سوى إمكانية الوصول إلى أدوات القياس الأساسية جدًا.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

بالطبع ، قد يكون من الصعب ترجمة نتائجه الأصلية إلى وحدات حديثة مثل الكيلومترات. في اليونان القديمة ، تم قياس المسافة في _الملاعب_ (حوالي 160 م) ، ولكن لم يكن هناك معيار عالمي. كان لكل منطقة نسخة مختلفة قليلاً ، ولا نعرف أي واحدة استخدمها إراتوستينس.

في القرون التالية ، حاول العلماء استخدام طرق أخرى لحساب نصف قطر الأرض - أحيانًا بنتائج مختلفة تمامًا وغير صحيحة.

كان أحد هذه القياسات غير الصحيحة هو الذي دفع كريستوفر كولومبوس للإبحار غربًا من البرتغال. وافترض أن الأرض كانت أصغر بكثير مما هي عليه في الواقع ، وأعرب عن أمله في الوصول إلى الهند. في الواقع ، وصل إلى قارة مختلفة بينهما: الأمريكتين.

:::

---

### شرائح

{.todo} قريبا!

---

## نظريات الدائرة

> section: circle-theorems
> sectionStatus: dev

TODO

---

## مضلعات دورية

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## المجالات والأقماع والأسطوانات

> section: spheres-cones-cylinders
> id: solids

في الأقسام السابقة درسنا خصائص الدوائر على سطح مستو. لكن عالمنا في الواقع ثلاثي الأبعاد ، لذلك دعونا نلقي نظرة على بعض المواد الصلبة ثلاثية الأبعاد القائمة على الدوائر:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} تتكون [__الأسطوانة__](gloss:cylinder) من دائرتين متوازيتين متطابقتين متصلين بسطح منحني.

::: column(width=220)

    x-solid(size=220)

{.text-center} [__المخروط__](gloss:cone) له قاعدة دائرية مرتبطة بنقطة واحدة (تسمى قمة الرأس).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} كل نقطة على سطح [__الكرة__](gloss:sphere) لها نفس المسافة من مركزها.

:::

لاحظ كيف أن تعريف المجال هو تقريبًا نفس تعريف [[الدائرة | نصف القطر | المكعب]] - باستثناء ثلاثة أبعاد!

---
> id: gasometer

### الاسطوانات

::: column.grow

هنا يمكنك رؤية _مقياس الغاز_ الأسطواني في أوبرهاوزن بألمانيا. كانت تستخدم لتخزين الغاز الطبيعي الذي كان يستخدم كوقود في المصانع القريبة ومحطات الطاقة. يبلغ طول جهاز قياس الغاز 120 م ، وقاعدة وسقف دائرتين كبيرتين بنصف قطر 35 م. هناك سؤالان مهمان قد يرغب المهندسون في الإجابة عليهم:

* كم يمكن تخزين الغاز الطبيعي؟ هذا هو [[الحجم | المنطقة | القطر]] الاسطوانة.
* {.reveal(when="blank-0")} ما مقدار الفولاذ المطلوب لبناء مقياس الغاز؟ هذه (تقريبًا) [[مساحة السطح | محيط | قطر]] الاسطوانة.

{.reveal(when="blank-0 blank-1")} دعونا نحاول العثور على صيغ لكل من هذه النتائج!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} مقياس غاز أوبرهاوزن

:::

---
> id: cylinder-prism

#### حجم الاسطوانة

الجزء العلوي والسفلي من الأسطوانة دائرتان متطابقتان تسمى __القواعد__ . ال __{.m-blue} ارتفاع _h___ الاسطوانة هي المسافة العمودية بين هذه القواعد ، و __{.m-red} دائرة نصف قطرها _ص___ من اسطوانة هو مجرد دائرة نصف قطرها من قواعد دائرية.

يمكننا تقريب الاسطوانة باستخدام ${n}{n|5|3,20,1} [__المنشور ذو__](gloss:prism) الجوانب. مع زيادة عدد الجوانب ، يبدأ المنشور في الظهور أكثر فأكثر مثل الأسطوانة:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

على الرغم من أن الأسطوانة ليست من منظورًا تقنيًا ، إلا أنها تشترك في العديد من الخصائص. في كلتا الحالتين ، يمكننا العثور على الحجم بضرب مساحة __{.m-red} قاعدة__ مع __{.m-blue} الارتفاع__ . هذا يعني أن اسطوانة نصف قطرها _{.b.m-red} ص_ والارتفاع _{.b.m-blue} ح_ لديه حجم

{.text-center(dir="ltr")}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} تذكر أن الشعاع والارتفاع يجب أن يستخدموا نفس الوحدات. على سبيل المثال ، إذا كان _r_ و _h_ كلاهما بالسنتيمتر ، فسيكون الحجم [[`"cm"^3`|`"cm"^2`| cm ]] .

---
> id: oblique-cylinder
> goals: slide

::: column.grow

في الأمثلة أعلاه ، كانت قاعدتا الأسطوانة دائمًا _فوق بعضهما البعض مباشرة_ : ويسمى هذا __بالأسطوانة اليمنى__ . إذا لم تكن القواعد فوق بعضها البعض مباشرة ، فلدينا __أسطوانة مائلة__ . لا تزال القواعد متوازية ، ولكن يبدو أن الجانبين "يميلان" بزاوية ليست 90 درجة.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} _برج بيزا المائل_ في إيطاليا ليس أسطوانة مائلة تمامًا.

:::

---
> id: cavalieri
> goals: slide

يتضح أن حجم الأسطوانة المائلة هو نفس حجم الأسطوانة اليمنى بنفس نصف القطر والارتفاع. هذا يرجع إلى [__مبدأ كافاليري__](gloss:cavalieri) ، الذي سمي على اسم عالم الرياضيات الإيطالي [بونافينتورا كافاليري](bio:cavalieri) : إذا كانت هناك مادتان صلبتان لهما نفس المنطقة المستعرضة في كل ارتفاع ، فسيكون لديهم نفس الحجم.

تخيل تشريح أسطوانة إلى الكثير من الأقراص الرقيقة. يمكننا بعد ذلك تمرير هذه الأقراص أفقيًا للحصول على أسطوانة مائلة. لا يتغير حجم الأقراص الفردية أثناء جعلها مائلة ، وبالتالي يبقى الحجم الإجمالي ثابتًا أيضًا:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### مساحة الاسطوانة

::: column.grow

العثور على المساحة السطحية للاسطوانة، علينا أن "انبسط" هو داخل [شبكتها](gloss:net) شقة. يمكنك تجربة ذلك بنفسك ، على سبيل المثال عن طريق تقشير الملصق على علبة طعام.

هناك [[دائرتان | المجالات | مربعات]] ، واحدة في الأعلى والأخرى في أسفل الأسطوانة. الجانب المنحني هو في الواقع [[مستطيل]] كبير [[| ميدان | القطع الناقص]] .

* {.reveal(when="blank-0 blank-1")} تحتوي كلتا الدائرتين على مساحة _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} ارتفاع المستطيل _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} وعرض المستطيل هو نفسه [[المحيط | قطر الدائرة | تماس]] الدوائر:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

هذا يعني أن إجمالي مساحة الاسطوانة التي يبلغ نصف قطرها _r_ والارتفاع _h_ معطاة بواسطة

{.text-center(dir="ltr")}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

يمكن العثور على الأسطوانات في كل مكان في عالمنا - من علب الصودا إلى ورق التواليت أو أنابيب المياه. هل يمكنك التفكير في أي أمثلة أخرى؟

يبلغ قطر جهاز _قياس الغازات_ أعلاه 35 م وارتفاعه 120 م. يمكننا الآن حساب أن حجمه يبلغ تقريبًا [[461000 ± 1000]] `"m"^3` ومساحتها تقارب [[34.080 ± 100]] `"m"^2` .

---
> id: cone

### المخاريط

::: column.grow

[__المخروط__](gloss:cone) هو مادة صلبة ثلاثية الأبعاد لها دائري __{.m-red} القاعدة__ . جانبها "ينحسر لأعلى" كما هو موضح في الرسم البياني ، وينتهي بنقطة واحدة تسمى __{.m-green} قمة الرأس__ .

ال __{.m-red} نصف قطر__ المخروط هو نصف قطر القاعدة الدائرية و __{.m-blue} ارتفاع__ المخروط هو المسافة المتعامدة من القاعدة إلى القمة.

تمامًا مثل الأشكال الأخرى التي التقيناها من قبل ، المخاريط موجودة في كل مكان حولنا: مخاريط الآيس كريم ، والأقماع المرورية ، وأسقف معينة ، وحتى أشجار عيد الميلاد. ماذا يمكن ان يخطر لك؟

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

#### حجم المخروط

::: column.grow

وجدنا في السابق حجم الأسطوانة عن طريق تقريبها باستخدام منشور. وبالمثل ، يمكننا العثور على حجم المخروط عن طريق تقريبه باستخدام [__هرم__](gloss:pyramid) .

هنا يمكنك ان ترى ${n}{n|5|3,18,1} هرم ذو وجهين. كلما زاد عدد الأضلاع ، بدأ الهرم يبدو أكثر فأكثر كمخروط. في الواقع ، يمكن أن نفكر في المخروط على أنه هرم _له_ جوانب _عديدة بلا حدود_ !

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

هذا يعني أيضًا أنه يمكننا أيضًا استخدام معادلة الحجم: `V = 1/3 "base" × "height"` . قاعدة المخروط هي دائرة ، لذا فإن حجم المخروط الذي يبلغ نصف قطره _r_ والارتفاع _h_ هو

{.text-center(dir="ltr")}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

لاحظ التشابه مع معادلة حجم الاسطوانة. تخيل رسم أسطوانة _حول_ المخروط ، بنفس القاعدة والارتفاع - وهذا ما يسمى __بالأسطوانة المحدودة__ . الآن ، سيشغل المخروط بالضبط [[ثلث| نصف | ربع]] حجم الاسطوانة:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} ملاحظة: قد تعتقد أن العديد من الجوانب الصغيرة بشكل غير محدود كتقريب هو "غير دقيق" بعض الشيء. قضى علماء الرياضيات وقتًا طويلاً في محاولة لإيجاد طريقة أكثر وضوحًا لحساب حجم المخروط. في عام 1900 ، وصفها عالم الرياضيات العظيم [ديفيد هيلبرت](bio:hilbert) بأنها واحدة من أهم 23 مشكلة لم يتم حلها في الرياضيات! اليوم نعلم أنه مستحيل في الواقع.

---
> id: oblique-cone
> goals: slide

::: column.grow

تمامًا مثل الأسطوانة ، لا يجب أن يكون المخروط "مستقيمًا". إذا كان الرأس مباشرة فوق مركز القاعدة ، فلدينا __مخروط صحيح__ . خلاف ذلك ، نسميها __مخروط مائل__ .

مرة أخرى ، يمكننا استخدام مبدأ كافالييري لإظهار أن جميع المخاريط المائلة لها نفس الحجم ، طالما أن لها نفس القاعدة والارتفاع.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### مساحة سطح المخروط

::: column.grow

العثور على مساحة سطح المخروط هو أكثر صعوبة. كما كان من قبل ، يمكننا أن نكشف المخروط في شبكته. حرك شريط التمرير لمعرفة ما يحدث: في هذه الحالة ، نحصل على دائرة واحدة واحدة [[قطاع الدائرة| قطعة الدائرة | قوس الدائرة]] .

{.reveal(when="blank-0")} الآن علينا فقط إضافة مساحة كل من هذه المكونات. ال __{.m-yellow} القاعدة__ عبارة عن دائرة نصف قطرها _r_ ، لذا تكون مساحتها

{.text-center.reveal(when="blank-0" dir="ltr")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

نصف قطر __{.m-green} القطاع__ هو نفس المسافة من حافة المخروط إلى قمته. هذا يسمى [{.pill.green.b} ارتفاع الميل _ق_](target:s) المخروط، وليس نفس وضعها الطبيعي [{.pill.blue.b} ارتفاع ](target:h) . يمكننا إيجاد الارتفاع المائل باستخدام [فيثاغورس](gloss:pythagoras-theorem) :

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system(dir="ltr")}

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

 [{.pill.red} طول القوس](target:arc) للقطاع هو نفس [[المحيط | قطر الدائرة | قوس]] [{.pill.yellow} القاعدة](target:base) : _{span.reveal(when="blank-0")}`2 π r` . الآن يمكننا العثور على مساحة القطاع باستخدام [الصيغة](gloss:circle-sector) التي استخلصناها في قسم سابق:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

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

أخيرا ، علينا فقط أن نضيف مساحة __{.m-yellow} قاعدة__ ومساحة __{.m-green} القطاع__ ، للحصول على السطح الكلي للمخروط:

{.text-center(dir="ltr")}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### المجالات

::: column.grow

[__الكرة__](gloss:sphere) عبارة عن مادة صلبة ثلاثية الأبعاد تتكون من جميع النقاط التي لها نفس المسافة من نقطة معينة __{.m-green} المركز _ج___ . هذه المسافة تسمى __{.m-red} نصف القطر _r___ للكرة.

يمكنك التفكير في المجال على أنه " [دائرة](gloss:circle) ثلاثية الأبعاد". تمامًا مثل الدائرة ، فإن الكرة لها أيضًا __{.m-blue} قطر _د___ ، وهو [[مرتين | نصف]] طول نصف القطر ، وكذلك الحبال والقطوع.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} في [مقطع سابق](/course/circles/tangets-chords-arcs#eratosthenes-1) ، تعلمت كيف قام عالم الرياضيات اليوناني [إراتوستينس](bio:eratosthenes) بحساب نصف قطر الأرض باستخدام ظل القطب - كان 6،371 كم. الآن ، دعنا نحاول العثور على إجمالي حجم الأرض ومساحتها السطحية. [استمر](btn:next)

---
> id: sphere-volume

#### حجم الكرة

للعثور على حجم الكرة ، علينا مرة أخرى استخدام مبدأ كافالييري. لنبدأ بنصف الكرة الأرضية - كرة مقطوعة إلى النصف على طول خط الاستواء. نحتاج أيضًا إلى أسطوانة بنفس نصف القطر والارتفاع مثل نصف الكرة الأرضية ، ولكن مع مخروط مقلوب "مقطوع" في المنتصف.

أثناء تحريك شريط التمرير أدناه ، يمكنك رؤية المقطع العرضي لكلا هذين الشكلين على ارتفاع محدد فوق القاعدة:

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

{.reveal(when="slider-0")} دعونا نحاول العثور على مساحة المقطع العرضي لكل من هذه المواد الصلبة ، على مسافة [{.pill.blue} الارتفاع](target:h) فوق القاعدة.

::: column.grow

{.reveal(when="slider-0")} المقطع العرضي من نصف الكرة الأرضية دائمًا [[دائرة | حلقة | اسطوانة]] .

{.reveal(when="blank-0")} ال [{.pill.red} نصف القطر _x_](target:x) للمقطع العرضي جزء من أ [{.pill.yellow} مثلث قائم الزاوية](target:tri) ، حتى نتمكن من استخدام [فيثاغورس](gloss:pythagoras-theorem) :

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` .

الآن ، مساحة المقطع العرضي هي

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

يكون المقطع العرضي للأسطوانة المقطوعة دائمًا [[حلقة | دائرة | مخروط]] .

::: .reveal(when="blank-1")

نصف قطر الثقب _h_ . يمكننا إيجاد مساحة الحلقة بطرح مساحة الحفرة من مساحة الدائرة الأكبر:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

يبدو أن كلا النوعين من المواد الصلبة لهما نفس المنطقة المستعرضة على كل مستوى. حسب مبدأ كافالييري ، يجب أن يكون لكل من المواد الصلبة نفس [[الحجم | مساحة السطح | محيط]] ! _{span.reveal(when="blank-0")} يمكننا العثور على حجم نصف الكرة بطرح حجم [الاسطوانة](gloss:cylinder-volume) وحجم [المخروط](gloss:cone-volume) :_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

يتكون مجال [[نصفين،]] _{span.reveal(when="blank-0")} مما يعني أن حجمه يجب أن يكون_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` .

---
> id: earth-volume
> goals: numbers

::: column.grow

الأرض (تقريبًا) كرة نصف قطرها 6،371 \ كم. لذلك حجمه

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} متوسط كثافة الأرض `5510 "kg/m"^3` . هذا يعني أن كتلته الكلية

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} هذا 6 متبوع بـ 24 أصفار!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

إذا قارنت معادلات حجم الأسطوانة والمخروط والكرة ، فقد تلاحظ واحدة من أكثر العلاقات مرضية في الهندسة. تخيل أن لدينا أسطوانة بنفس ارتفاع قطر قاعدتها. يمكننا الآن وضع كل من المخروط والكرة في الداخل تمامًا:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} هذا المخروط له نصف قطر `r` والطول `2r` . حجمه _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} هذا المجال له نصف قطر `r` . حجمه _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} هذه الاسطوانة نصف قطرها `r` والطول `2r` . حجمه _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} لاحظ كيف ، إذا [[أضفنا | طرح او خصم | مضاعفة]] حجم المخروط والكرة ، نحصل بالضبط على حجم الاسطوانة!

---
> id: sphere-maps
> goals: move projection

#### مساحة سطح الكرة

من الصعب جدًا العثور على صيغة لمساحة سطح الكرة. أحد الأسباب هو أنه لا يمكننا فتح و "تسطيح" سطح الكرة ، كما فعلنا من أجل المخاريط والأسطوانات من قبل.

هذه مشكلة خاصة عند محاولة إنشاء الخرائط. تتمتع الأرض بسطح منحني ثلاثي الأبعاد ، ولكن يجب أن تكون كل خريطة مطبوعة مسطحة وثنائية الأبعاد. وهذا يعني أنه يجب على الجغرافيين الغش: عن طريق تمديد أو عصر مناطق معينة.

يمكنك هنا رؤية أنواع مختلفة من الخرائط تسمى __الإسقاطات__ . حاول تحريك المربع الأحمر ، وشاهد كيف تبدو هذه المنطقة _بالفعل_ على الكرة الأرضية:

    figure
      x-select.tabs
        .projection(data-name="mercator") ميركاتور
        .projection(data-name="cylindrical") إسطواني
        .projection(data-name="robinson") روبنسون
        .projection(data-name="mollweide") مولويدي
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
          p.caption أثناء تحريك المربع على الخريطة ، لاحظ كيف يتغير حجم وشكل المنطقة الفعلية على الكرة الأرضية ثلاثية الأبعاد.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

للعثور على مساحة سطح الكرة ، يمكننا مرة أخرى تقريبها باستخدام شكل مختلف - على سبيل المثال متعدد الوجوه مع الكثير من الوجوه. مع زيادة عدد الوجوه ، يبدأ متعدد الوجوه في الظهور أكثر فأكثر مثل الكرة.

{.todo} قريبًا: إثبات مساحة سطح الكرة

---

## المقاطع المخروطية

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

الدائرة هي واحدة من أربعة أشكال مختلفة يمكن إنشاؤها باستخدام "شرائح" من خلال [مخروط](gloss:cone) . يمكن إثبات ذلك باستخدام مخروط ضوء الشعلة:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p.no-voice: strong دائرة
          include svg/circle.svg
        .hide
          p.no-voice: strong الشكل البيضاوي
          include svg/ellipse.svg
        .hide
          p.no-voice: strong القطع المكافئ
          include svg/parabola.svg
        .hide
          p.no-voice: strong القطع الزائد
          include svg/hyperbola.svg

---
> id: conics-1

إذا وجهت الشعلة عموديا إلى أسفل ، سترى [[دائرة | الشكل البيضاوي | بيضاوي]] للضوء. _{span.reveal(when="blank-0")} إذا قمت بإمالة المخروط ، فستحصل على [__القطع الناقص__](gloss:ellipse) . إذا مالت إلى أبعد من ذلك ، ستحصل على [__القطع المكافئ__](gloss:parabola) أو [__القطع__](gloss:parabola) [__الزائد__](gloss:hyperbola) ._

---
> id: conics-2

::: column.grow

مجتمعة ، تسمى هذه الأشكال الأربعة [__المقاطع المخروطية__](gloss:conic-section) . على الرغم من أنها تبدو مختلفة تمامًا ، إلا أنها مرتبطة ارتباطًا وثيقًا: في الواقع ، يمكن إنشاؤها جميعًا باستخدام نفس المعادلة!

تمت دراسة المقاطع المخروطية لأول مرة من قبل عالم الرياضيات اليوناني القديم [Apollonius of Perga](bio:apollonius) ، الذي أعطاهم أيضًا أسماءهم غير العادية.

في الدورات اللاحقة ، ستتعلم المزيد عن القطع المكافئ والقطع الزائد. الآن ، دعونا نلقي نظرة فاحصة على القطع الناقص.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### الحذف

يبدو الشكل البيضاوي وكأنه "دائرة طويلة". في الواقع ، يمكنك التفكير في الأمر على أنه دائرة ذات _مركزين_ - تسمى هذه __نقاط اتصال__ . تمامًا مثل كل نقطة على دائرة لها نفس المسافة من مركزها ، فإن كل نقطة على القطع الناقص لها نفس _مجموع المسافات_ إلى نقطتيها البؤريتين.

إذا كان لديك سلسلة طويلة متصلة بنقطتين ثابتتين ، يمكنك رسم قطع ناقص مثالي من خلال تتبع أقصى مدى للوصول إلى السلاسل:

{.todo} قريبا: الحذف الرسم التفاعلي

---
> id: ellipses-2
> goals: v0 v1 v2 v3

هناك العديد من التوضيحات المادية الأخرى لكيفية رسم القطع الناقص:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption التروس

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption تراميل

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption أسطوانة

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption أرجوحة

:::

---
> id: orbits

### المدارات الكوكبية

::: column.grow

قد تتذكر منذ بداية هذه الدورة ، أن علماء الفلك اليونانيين القدماء اعتقدوا أن الأرض في مركز الكون وأن الشمس والقمر والكواكب تتحرك حول الأرض في مدارات دائرية.

لسوء الحظ ، لم تدعم الملاحظة الفلكية للسماء هذا الأمر تمامًا. على سبيل المثال ، بدت الشمس أكبر خلال بعض أجزاء السنة وأصغر خلال أجزاء أخرى. في الدائرة ، يجب أن يكون لكل نقطة [[نفس|زيادة
|تناقص]] من المسافة وسطة.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} عالم الفلك اليوناني هيبارخوس من نيقية

:::

---
> id: epicycles
> goals: play

لإصلاح ذلك ، أضاف علماء الفلك __فلك التدوير__ إلى نموذجهم من النظام الشمسي: تتحرك الكواكب على دائرة كبيرة حول الأرض ، بينما تدور في نفس الوقت على دائرة أصغر. على الرغم من كونه معقدًا للغاية ، إلا أن هذا كان النموذج الأكثر قبولًا في عالمنا لأكثر من 1000 عام:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} يجعل هذا الكوكب ${n}{n|6|2,12,1} يدور حول الدائرة الصغيرة ( __فلك التدوير__ ) خلال دورة واحدة حول الدائرة الكبيرة ( __المحمية__ ).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} رسم من القرن السادس عشر فلك التدوير في __نموذج مركزية الأرض__ . الكلمة اليونانية "Planetes" تعني "المتجولين".

:::

---
> id: kepler
> goals: play

::: column.grow

بمرور الوقت ، أدرك الناس أن الأرض كانت مجرد واحدة من العديد من الكواكب التي تدور حول الشمس ( __نموذج هيليوسنتريك__ ) ، ولكن حتى عام 1609 ، اكتشف الفلكي [يوهانس كيبلر](bio:kepler) أن الكواكب تتحرك فعليًا في _مدارات إهليلجية_ .

تقع الشمس في إحدى نقطتي التركيز لهذه الحذف. تسرع الكواكب كلما اقتربت من الشمس وتبطئ كلما ابتعدت أكثر.

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

بعد بضعة عقود ، تمكن [إسحاق نيوتن](bio:newton) من إثبات ملاحظات كيبلر ، باستخدام قوانين [__الجاذبية__](gloss:gravity) التي طورها حديثًا. أدرك نيوتن أن هناك قوة بين أي كتلتين في الكون - على غرار الجذب بين مغناطيسين.

الجاذبية هي ما يجعل كل شيء يسقط على الأرض والجاذبية هي أيضًا ما يجعل الكواكب تتحرك حول الشمس. إن السرعة الكبيرة التي تتحرك بها الكواكب هي التي تمنعها من السقوط مباشرة في الشمس.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

باستخدام قوانين نيوتن ، يمكنك اشتقاق المسار الذي تسلكه الأجسام عندما تتحرك تحت قوة الجاذبية. اتضح أن الكواكب تتحرك على الحذف ، لكن الأجسام الأخرى مثل المذنبات يمكن أن تسافر على مسارات [مكافئة](gloss:parabola) أو [زائدية](gloss:hyperbola) : فهي تطير بالقرب من الشمس قبل الالتفاف وتطلق النار في الكون ، ولا تعود أبدًا.

وفقًا للأسطورة ، ألهمت التفاح المتساقطة نيوتن بالتفكير في الجاذبية. كان أحد أكثر العلماء تأثيرًا في كل العصور ، وشكلت أفكاره فهمنا للعالم لما يقرب من 300 عام - حتى اكتشف ألبرت أينشتاين النسبية في عام 1905.

:::
