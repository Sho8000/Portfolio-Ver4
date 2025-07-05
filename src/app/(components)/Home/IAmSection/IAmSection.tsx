"use client"

import Image from "next/image";
import Styles from "./IAmSection.module.css"
import { useLangStore } from "@/store/useLangStore";

export default function IAM() {
  const {data} = useLangStore();
  
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
          <h2 className={`${Styles.myName}`} style={{ fontFamily: "var(--font-caveat), cursive" }}>{data.aboutMe.myName}</h2>
          <h2 style={{ fontFamily: "var(--font-caveat), cursive" }}>
              {data.aboutMe.selfIntroduction.map((item,index)=>{
                if(data.aboutMe.selfIntroductionStringType[index] === "red"){
                  return <span key={index} className={`text-red-600 ${Styles.commentSizeBold}`}>{item} </span>
                }
                if(data.aboutMe.selfIntroductionStringType[index] === "bold"){
                  return <span key={index} className={`font-bold ${Styles.commentSizeBold}`}>{item} </span>
                }
                return <span key={index} className={`${Styles.commentSize}`}>{item} </span>
                }
              )}
            </h2>
        </div>
      </div>
    </section>
  );
}