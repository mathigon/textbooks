# Lineare Funktionen

## Input und Output

> section: input-output
> sectionStatus: dev

TODO

---

## Graphing Functions

> section: graphing
> sectionStatus: dev

TODO

---

## Steigung und Achsenabschnitt

> section: slope-intercept
> sectionStatus: dev
> id: slope
> goals: make-point slide-point

::: .theorem
__Common Core Standard 8.EE.6__  
Verwende ähnliche Dreiecke, um zu erklären, warum die Steigung _k_ zwischen zwei
beliebigen Punkten auf einer nicht vertikalen Geraden in der Koordinatenebene immer gleich ist; leite die
Gleichung `y=kx` für eine Gerade durch den Ursprung und die Gleichung `y=kx+d` für eine
Gerade ab, die die vertikale Achse bei _d_ schneidet.
:::

Hier siehst du ein [Koordinatensystem](gloss:coordinate-system), mit einer Geraden,
die durch dessen [Ursprung](gloss:coordinate-system-origin) verläuft. Um zu
beginnen, wähle einen Punkt irgendwo auf der Geraden.

::: column(width=360 parent="padded-thin")

    x-coordinate-system.c-system(width=360 height=440 x-axis="-5,5,1" y-axis="-6,6,1" crosshairs="no" padding=5)
    x-gesture(target="#slope x-coordinate-system" offset="63,-107")

::: column.grow

{.reveal(when="make-point")} Wir können ein rechtwinkliges Dreieck zwischen diesem
Punkt und dem Ursprung des Koordinatensystems zeichnen.

{.reveal(when="make-point" delay=1500)} Versuche, den Punkt entlang der Geraden zu verschieben:
Beachte, wie verschiedene Punkte unterschiedlich große Dreiecke bilden, wobei alle diese Dreiecke
[[ähnlich|kongruent|gleichseitig]] sind. _{.lgrey.reveal(when="blank-0")} Am besten sieht
man das, wenn man die beiden Winkel entlang der x-Achse betrachtet. Sie sind immer
gleich groß, so dass alle Dreiecke nach dem [WWW-Satz](gloss:triangle-aa)
ähnlich sein müssen._

{.reveal(when="blank-0" delay=1500)} Nun können wir eines der Ergebnisse nutzen, die wir von ähnlichen Dreiecken kennen: Das Verhältnis von zwei der Seiten ist immer konstant. Verschiebe
den Punkt noch einmal und beobachte, was passiert:

    p.text-center.reveal(when="blank-0" delay=3000): span.math
      mfrac
        mrow: span.step-target.pill.var.green(data-to="dy") ${p.y}
        mrow: span.step-target.pill.var.blue(data-to="dx") ${p.x}
      mo(value="=") =
      mn.var ${p.y/p.x || '???'}

{.reveal(when="slide-point")} Aber auch das Gegenteil ist der Fall: Jeder Punkt (_x_, _y_)
, der diese Gleichung erfüllt, muss irgendwo auf der Geraden liegen. Daher haben wir jetzt
eine "Gleichung" für die Gerade:

    p.text-center.reveal(when="slide-point" delay=1000): span.math
      mfrac
        mrow: mi.step-target.pill.green(data-to="dy") y
        mrow: mi.step-target.pill.blue(data-to="dx") x
      mo(value="=") =
      mn 1.5
    
    p.r.text-center.reveal(when="slide-point" delay=2000)
      span.math
        mo(value="⇔") ⇔
        mi.step-target.pill.green(data-to="dy") y
        mo(value="=") =
        mn 1.5
        mi.step-target.pill.blue(data-to="dx") x
      button.next-step Weiter


:::

---
> id: questions-1

Es stellt sich heraus, dass _jede Gerade_, die durch den Ursprung eines Koordinatensystems
geht, eine Gleichung der Form `y = kx` hat, wobei _k_ als
[__Steigung__](gloss:line-slope) bezeichnet wird.

Wenn eine Gerade gegeben ist, kannst du den entsprechenden Wert von _k_ ermitteln, indem du einen
beliebigen Punkt auf der Geraden auswählst und einfach ihren _y_- und _x_ -Wert dividierst. Hier
sind einige Beispiele:

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _k_ = [[0.5]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _k_ = [[3]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _k_ = [[-1]]

:::

---
> id: intercept

Aber wie verhält sich das bei Geraden, die _nicht_ durch
den Ursprung des Koordinatensystems gehen? In diesem Fall benötigen wir noch eine weitere Komponente: Wir können eine Gerade mit gleicher Steigung nehmen, die aber durch den Ursprung geht, und sie entlang der _y_-Achse verschieben, indem wir eine Zahl addieren oder subtrahieren:

    svg(style="width: 0; height: 0; position: absolute;"): defs
      marker#blue-arrow(refX=2 refY=2 markerWidth=4 markerHeight=4 orient="auto")
        path(d="M 0 0 L 4 2 L 0 4 z" fill="#fd8c00")
      marker#blue-circle(refX="2" refY="2" markerWidth="4" markerHeight="4" orient="auto")
        circle( cx=2 cy=2 r=1.5 fill="#fd8c00")

    x-coordinate-system(width=400 height=320 x-axis="-8,8,1" y-axis="-6,6,1" crosshairs="no" padding=5)
    x-gesture(target="#intercept x-var" slide="100,0")

{.text-center} `y = 2/3 x` ${sign(a)} ${abs(a)}{a|0|-4,4,1}

{.reveal(when="var-0")} Wie du oben sehen kannst, ist die zum Wert von
_y_ hinzugefügte Zahl gleich dem Abstand zwischen dem Ursprung des Koordinatensystems und
dem Punkt, an dem die Gerade die [[_y_-Achse|_x_-Achse]] schneidet.

---
> id: equation

Wir haben jetzt eine Gleichung für _jede_ (nicht vertikale) Gerade in der Koordinatenebene:

    p.text-center: span.math
      mi y
      mo(value="=") =
      mtext.b.i.orange k
      mi x
      mo +
      mtext.b.i.cyan d
      mtext ,

{.r} wobei _{.b.orange}k_ und _{.b.cyan}d_ zwei Zahlen sind, die wir eintragen müssen.
Wie du zuvor gesehen hast, ist _{.b.orange}k_ die __{.orange}Steigung__ der Geraden und
_{.b.cyan}d_ der __{.cyan}*y*-Achsenabschnitt__.
_{button.next-step} Weiter_

---
> id: equation-1

::: column(width=360 parent="padded-thin")

    x-coordinate-system(width=360 height=360 x-axis="-5,5,1" y-axis="-4,6,1" no-crosshairs padding=5)

::: column.grow

Wenn eine beliebige Gerade gegeben ist, wie die auf der linken Seite, kannst du den Wert von
_{.b.cyan}d_ ermitteln, indem du den Punkt betrachtest, an dem die Gerade die _y_-Achse schneidet. In
diesem Beispiel ist _{.b.cyan}d_ = [[2]].

{.reveal(when="blank-0")} In ähnlicher Weise kannst du die Steigung _{.b.orange}k_ ermitteln, indem du irgendein rechtwinkliges Dreieck unter der Geraden
zeichnest und seine Höhe durch die Basis teilst. In diesem
Beispiel beträgt die Steigung _{.b.orange}k_ = [[0.75]].

{.reveal(when="blank-1")} Mit anderen Worten, die Gleichung dieser Geraden lautet

{.text-center.reveal(when="blank-1")} `y=` _{x-equation(solution="3/4 x+2")}_

:::

---
> id: questions-2

Hier sind noch ein paar weitere Übungen. Kannst die Steigungen und den _y_-Achsenabschnitte
bestimmen und die Gleichung der Geraden aufschreiben?

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="3/2 x-2")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="2x+1")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="-1/2 x+3")}_

:::

---

## Parallele und normale Geraden

> section: parallel-perpendicular
> sectionStatus: dev

TODO

---

## Lineare Funktionen

> section: linear
> sectionStatus: dev

TODO

---

## Piecewise Functions and Systems of Equations

> section: systems
> sectionStatus: dev

TODO
