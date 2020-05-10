// =============================================================================
// Introduction to Probability
// (c) Mathigon
// =============================================================================

import { Sector, Point, Rectangle } from "@mathigon/fermat";
import { SVGView, $N } from "@mathigon/boost";
import { rotateDisk } from "../shared/components/disk";
import { Step } from "../shared/types";

export function intro($step: Step) {
  const $svg = $step.$(".spinner") as SVGView;

  // Draw Spinner
  let sections: { share: number; end: Point }[] = [
    {
      share: 1 / 3,
      end: new Point(0, 0),
    },
    {
      share: 1 / 3,
      end: new Point(0, 0),
    },
    {
      share: 1 / 6,
      end: new Point(0, 0),
    },
    {
      share: 1 / 6,
      end: new Point(0, 0),
    },
  ];

  sections.forEach((section, count) => {
    let sector = new Sector(
      new Point(150, 150),
      count === 0 ? new Point(250, 150) : sections[count - 1].end,
      section.share * (2 * Math.PI)
    );
    $N("path", { class: `sector-${count}`, path: sector }, $svg);
    sections[count].end = sector.end;
  });

  // Draw Pointer, and add spinning logic
  let pointer = new Rectangle(new Point(145, 50), 10, 200);
  let $spinner = $N("path", { class: `pointer`, path: pointer }, $svg);

  rotateDisk($spinner, {
    clicky: true,
    start() {
      $step.score("spin");
    },
    draw(angle) {
      $spinner.setTransform(undefined, angle);
    },
    final(angle: number) {
      console.log(angle);
    },
    resistance: 0.99,
  });
}
