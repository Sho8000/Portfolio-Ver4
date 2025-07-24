import gsap from "gsap";

export function detailOpenAnimate(
  detail: HTMLDivElement | null
): GSAPTimeline {
  const tl = gsap.timeline();

  if (detail) {
    tl.fromTo(
      detail,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }
  return tl;
}