# Matrices

## Matrices as Transformations

> section: transformations
> sectionStatus: dev
> id: test

{.todo} COMING SOON

::: column.grow

We rotate point [P](target:p) by ${th + '°'}{th|60|10,350,10} around the origin.

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.move.green(name="p" x="point(2,3)" label="P" target="p")
      circle.green(name="q" x="p.rotate(th/180*pi)" label="P'")
      
      path.green(x="segment(point(0,0),p)")
      path.green(x="segment(point(0,0),q)")

:::

---

## Matrix Arithmetic

> section: arithmetic
> sectionStatus: dev

{.todo} COMING SOON

---

## Determinants

> section: determinants
> sectionStatus: dev

{.todo} COMING SOON

---

## Matrix Inverses

> section: inverses
> sectionStatus: dev

{.todo} COMING SOON

---

## Cramer’s Rule and Gaussian Elimination

> section: systems
> sectionStatus: dev

{.todo} COMING SOON

---

## Eigenvalues and Eigenvectors

> section: eigenvalues
> sectionStatus: dev

{.todo} COMING SOON
