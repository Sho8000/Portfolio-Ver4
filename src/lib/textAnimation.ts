import gsap from "gsap";

export function letterRevealAnimate(
  letters: HTMLElement[],
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
    delay?: number;
    onComplete?: () => void;
  }
): GSAPTimeline {
  const {
    duration = 0.5,
    stagger = 0.04,
    y = 10,
    delay = 0,
    onComplete,
  } = options || {};

  const tl = gsap.timeline({ delay, onComplete });

  tl.fromTo(
    letters,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power2.out",
    }
  );

  return tl;
}
