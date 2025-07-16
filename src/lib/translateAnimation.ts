import gsap from "gsap";

type Direction = "left" | "right" | null;

export function translateAnimateIn(
  element: HTMLDivElement,
  direction: Direction,
  onComplete: ()=>void,
) {
  const startPosition = direction === "left" ? "0" : "-200%";
  const endPosition = direction === "left" ? "-100%" : "-100%";

  gsap.fromTo(
    element,
    {
      x: startPosition,
      scale: 1.1,
      opacity: 0.8,
    },
    {
      x: endPosition,
      duration: 0.6,
      ease: "power3.inOut",
      scale: 1,
      opacity: 1,
      onComplete,
    }
  );
}

export function translateAnimateOut(
  element: HTMLDivElement,
  direction: Direction,
) {
  const startPosition = direction === "left" ? "-100%" : "-100%";
  const endPosition = direction === "left" ? "-200%" : "0%";

  gsap.fromTo(
    element,
    {
      x: startPosition,
      scale: 1.1,
      opacity: 1,
    },
    {
      x: endPosition,
      duration: 0.6,
      ease: "power3.inOut",
      scale: 1,
      opacity: 0.8,
    }
  );
}
