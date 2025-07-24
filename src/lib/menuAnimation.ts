import gsap from "gsap";

export function menuOpenAnimate(
  panel: HTMLDivElement | null,
  menuItems: HTMLElement[]
): GSAPTimeline {
  const tl = gsap.timeline();

  if (panel) {
    tl.fromTo(
      panel,
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

  if (menuItems.length > 0) {
    tl.fromTo(
      menuItems,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }

  return tl;
}