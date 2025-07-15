import gsap from "gsap";

type Direction = "left" | "right";

export function translateAnimate(
  element: HTMLDivElement,
  direction: Direction,
) {
  const startPosition = direction === "right" ? "-100%" : "200%";
  const endPosition = direction === "right" ? "200%" : "-200%";

  gsap.fromTo(
    element,
    { x: startPosition},
    {
      x: endPosition,
      duration: 0.4,
    }
  );
}
