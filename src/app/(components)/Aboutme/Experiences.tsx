"use client"

import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";
import Link from "next/link";

export default function Experiences() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;

  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center text-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`}>{aboutMe.aboutTitles[1]}</h2>

        <ul className={`list-disc text-left w-[90%] ml-[1rem]`}>
          {aboutMe.experiences.map((item,index)=>{
            return <li key={index} className={`${Styles.skillTypeFont} mb-[2rem]`}>{item.experiencesTitle}
              <p className={`font-medium ${Styles.commentSize}`}>
                {item.contents.map((content,contentIndex)=>{
                  if(content==="My Projects" || content==="プロジェクト"){
                    return <Link 
                      key={`content_${contentIndex}`}
                      href={"/myprojects"}
                      className={`
                      ${Styles.skillTypeFont}
                      underline text-blue-600`}
                    >{content} </Link>
                  } else {
                    return <span key={`content_${contentIndex}`} className={`
                      ${item.contentsStringType[contentIndex]==="normal"?(""):(Styles.skillTypeFont)}
                      `}
                    >{content} </span>
                  }
                })}
              </p>
            </li>
          })}
        </ul>

      </div>
    </section>
  );
}