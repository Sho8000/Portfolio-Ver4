import { gsap } from "gsap";

export const upDownAnimation = (selector: string) => {  
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el, index) => {
    gsap.to(el, {
      y: -5,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: -index * 0.5,
    });
  });
}