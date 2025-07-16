"use client"

import { useEffect, useRef, useState } from "react";
import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";
import { letterRevealAnimate } from "@/lib/textAnimation";

export default function AboutmeIAm() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;

  const [aboutMeFont, setAboutMeFont] = useState("var(--font-caveat), cursive");

  const lettersRef = useRef<HTMLSpanElement[]>([]);
  let letterIndex = 0;

  useEffect(()=>{
    if(data.language==="English"){
      setAboutMeFont("var(--font-caveat), cursive")
    } else {
      setAboutMeFont("var(--font-sawarabi-mincho), cursive")
    }
  },[data])

  useEffect(() => {
    if (lettersRef.current.length === 0) return;
    if (data.language==="English"){
      const animation = letterRevealAnimate(lettersRef.current, {
        duration: 0.01,
        stagger: 0.02,
        y: 10,
      });

      return () => {
        animation?.kill();
      };
  
    } else {
      const animation = letterRevealAnimate(lettersRef.current, {
        duration: 0.01,
        stagger: 0.04,
        y: 10,
      });  

      return () => {
        animation?.kill();
      };  
    }
  }, [aboutMe,data.language]);

  return (
    <section className="w-[100%]" style={{ fontFamily: aboutMeFont }}>
      <div className={`flex flex-col items-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`} >{aboutMe.myName}</h2>
        <h2 className="mx-[1rem]">
          {aboutMe.selfIntroduction.map((word,wordIndex)=>{
              const wordType = aboutMe.selfIntroductionStringType[wordIndex]

              const baseClass = Styles.commentSize;
              const boldClass = `font-bold ${Styles.commentSizeBold}`;
              const redClass = `text-red-600 ${Styles.commentSizeBold}`;
            
              const className = wordType === "red" 
                ? redClass
                : wordType === "bold"
                ? boldClass
                : baseClass;
           
              return <span key={wordIndex} className="mr-[0.3rem]">
                {word.split("").map((letter, letterIdx) => {
                  const refCallback = (el: HTMLSpanElement | null) => {
                    if (el) lettersRef.current[letterIndex++] = el;
                  };
                  return (
                    <span
                      key={letterIdx}
                      ref={refCallback}
                      className={`${className}`}
                    >
                      {letter}
                    </span>
                  );
                })}
                <span
                  ref={(el) => {
                    if (el) lettersRef.current[letterIndex++] = el;
                  }}
                  className={`${className} inline-block`}
                >
                  &nbsp;
                </span> 
              </span>


            }
          )}
        </h2>
      </div>
    </section>
  );
}