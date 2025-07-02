"use client"

import Image from "next/image";
import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";

export default function Skills() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;
  
  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center text-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`} style={{ fontFamily: "var(--font-caveat), cursive" }}>{aboutMe.aboutTitles[0]}</h2>

        <ul className={`list-decimal text-left w-[90%] m-auto`}>
          {aboutMe.skills.map((item,index)=>{
            return <li key={index} className={`${Styles.skillTypeFont}`}>{item.skillType}

            <p className={`${Styles.commentSize} font-medium`}>{item.skillName.join(", ")}</p>
            <div className="flex w-[100%]">
              {item.skillImage.map((image,imageIndex)=>{return <Image
                key={`img_${imageIndex}`}
                className={imageIndex !== 0 ? "-ml-[50px]" : ""}
                src={image}
                alt="skillImage"
                loading="eager"
                width={100}
                height={100}
              />
              })}
            </div>
            </li>
          })}
        </ul>
      </div>
    </section>
  );
}