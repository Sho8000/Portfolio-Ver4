import gsap from "gsap";

type Direction = "left" | "right";

export function animateCardOut(
  element: HTMLDivElement,
  direction: Direction,
  onComplete: () => void
) {
  const distance = direction === "right" ? 300 : -300;

  gsap.fromTo(
    element,
    { x: 0, opacity: 1 },
    {
      x: -distance,
      opacity: 0,
      duration: 0.4,
      onComplete,
    }
  );
}

export function animateCardIn(element: HTMLDivElement, direction: Direction) {
  const distance = direction === "right" ? 300 : -300;

  gsap.fromTo(
    element,
    { x: distance, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    }
  );
}
