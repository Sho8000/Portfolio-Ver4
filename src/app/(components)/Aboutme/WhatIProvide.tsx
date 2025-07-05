"use client"

import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";

export default function WhatIProvide() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;


  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center text-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`}>{aboutMe.aboutTitles[2]}</h2>

        <ul className={`list-disc text-left w-[90%] ml-[1rem]`}>
          {aboutMe.provide.map((item,index)=>{
            return <li key={index} className={`${Styles.skillTypeFont} mb-[2rem]`}>
              {item.provideTitle.map((title,titleIndex)=>{
                return <span key={`provideTitle_${titleIndex}`} className={`${item.titleStringType[titleIndex]==="red"?("text-red-600"):("")}`}>{title} </span>
              })}
              <p className={`font-medium ${Styles.commentSize}`}>{item.contents}</p>
            </li>
          })}
        </ul>
      </div>
    </section>
  );
}