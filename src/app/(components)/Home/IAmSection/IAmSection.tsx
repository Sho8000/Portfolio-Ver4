"use client"

import Image from "next/image";
import Styles from "./IAmSection.module.css"
import { useLangStore } from "@/store/useLangStore";
import { useEffect, useRef, useState } from "react";
import { letterRevealAnimate } from "@/lib/textAnimation";

export default function IAM() {
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
  }, [aboutMe, data.language]);
    
  return (
    <section className="w-[100%] bg-[linear-gradient(to_bottom,_#f2f2ff_0%,_#f2f2ff_98%,_rgba(242,242,255,0)_100%)]">
      <div className={`flex w-[100%] ${Styles.container}`}>
        <h1 className={`${Styles.titleForPhone} ${Styles.titleFont}`}>{data.landing.lading_titles[0]}</h1>
        <div className={`relative ${Styles.imageArea}`}>
          <Image
            src={data.landing.myPic}
            alt="Main Image"
            fill
            className={`object-cover ${Styles.objectProps}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={`${Styles.textArea}`}>
          <h1 className={`${Styles.titleForPC} ${Styles.titleFont}`}>{data.landing.lading_titles[0]}</h1>
          <div className={`${Styles.paperBG}`}>
            <h2 className={`mb-[1.5rem] ${Styles.myName}`} style={{ fontFamily: aboutMeFont }}>{data.aboutMe.myName}</h2>
            <h2 style={{ fontFamily: aboutMeFont }}>
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
        </div>
      </div>
    </section>
  );
}