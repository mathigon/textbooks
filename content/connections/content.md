# How Mathematics Connects Us

## MoMath Workshop

> id: bridges
> title: The Bridges of Königsberg
> section: momath

Can you draw a path that crosses every bridge once, but _not more than once_, without entering the
water? You can start and end on any area of land.

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include ../graph-theory/svg/bridges-1.svg
        button.btn Clear
        button.btn.right(hidden) Skip
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include ../graph-theory/svg/bridges-2.svg
        button.btn Clear
        button.btn.right(hidden) Skip
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include ../graph-theory/svg/bridges-3.svg
        button.btn Clear
        button.btn.right(hidden) Skip
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include ../graph-theory/svg/bridges-4.svg
        button.btn Clear
        button.btn.right(hidden) Skip

---
> id: utilities
> title: Three Utilities Puzzle

Can you connect each of these utility companies to each of the houses, without any of the lines
intersecting?

    .frame.fill
      include ../graph-theory/svg/utilities.svg
      button.btn Clear

---
> id: planarity
> title: Planarity Game

    .box.problem-box
      .box-title: h3 Planarity
      .box-body
        x-solved
        svg#planarity.frame(viewBox="0 0 640 320")
        p.md This is a planar graph, but the ${n}{n|7|5,20,1} vertices have been scrambled up. Rearrange the vertices so that none of the edges overlap.
        button.btn New Random Graph

---
> id: maps-1
> title: Map Colouring

How many colours do you need for these maps, if adjacent countries or states cannot have the same
colour?

    p.text-center
      span.four-colour-icon.on
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon
      span.four-colour-icon

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        include ../graph-theory/svg/colours-1.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve(hidden) Solution
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        include ../graph-theory/svg/colours-2.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve(hidden) Solution
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        include ../graph-theory/svg/colours-3.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve(hidden) Solution
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        include ../graph-theory/svg/colours-4.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve(hidden) Solution

---
> id: salesman-4
> title: Travelling Salesperson Map

Try rearranging the cities on this map, and watch how the shortest path between them changes. You
can remove cities by tapping them, and you can add cities by clicking anywhere on the map (up to 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")
