"use client"

import AboutmeIAm from "../(components)/Aboutme/Aboutme";
import Skills from "../(components)/Aboutme/Skills";

export default function AboutMe() {
  return (
    <>
      <section className="w-[100%] h-auto" style={{ fontFamily: "var(--font-caveat), cursive" }}>
        <AboutmeIAm/>
        <Skills/>
      </section>
    </>
  );
}
