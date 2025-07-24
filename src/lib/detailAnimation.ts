import gsap from "gsap";

export function detailOpenAnimate(
  detail: HTMLDivElement | null
): GSAPTimeline {
  const tl = gsap.timeline();

  if (detail) {
    tl.fromTo(
      detail,
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: -50,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }
  return tl;
}