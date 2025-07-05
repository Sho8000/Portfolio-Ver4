"use client"

import AboutmeIAm from "../(components)/Aboutme/Aboutme";
import Experiences from "../(components)/Aboutme/Experiences";
import Skills from "../(components)/Aboutme/Skills";
import WhatIProvide from "../(components)/Aboutme/WhatIProvide";

export default function AboutMe() {

  return (
    <>
      <section className="w-[100%] h-auto" style={{ fontFamily: "var(--font-caveat), cursive" }}>
        <AboutmeIAm/>
        <Skills/>
        <Experiences/>
        <WhatIProvide/>
      </section>
    </>
  );
}
