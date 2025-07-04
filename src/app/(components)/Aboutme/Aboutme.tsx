"use client"

import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";

export default function AboutmeIAm() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;

  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center m-auto ${Styles.container}`}>
          <h2 className={`${Styles.titleFont}`} style={{ fontFamily: "var(--font-caveat), cursive" }}>{aboutMe.myName}</h2>
          <h2 className="mx-[1rem]" style={{ fontFamily: "var(--font-caveat), cursive" }}>
              {aboutMe.selfIntroduction.map((item,index)=>{
                if(aboutMe.selfIntroductionStringType[index] === "red"){
                  return <span key={index} className={`text-red-600 ${Styles.commentSizeBold}`}>{item} </span>
                }
                if(aboutMe.selfIntroductionStringType[index] === "bold"){
                  return <span key={index} className={`font-bold ${Styles.commentSizeBold}`}>{item} </span>
                }
                return <span key={index} className={`${Styles.commentSize}`}>{item} </span>
                }
              )}
            </h2>
      </div>
    </section>
  );
}