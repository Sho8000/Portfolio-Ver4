"use client"

import Image from "next/image";
import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";
import { useState } from "react";

export default function Skills() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;
  const [hoveredSkill,setHoveredSkill] = useState<string|null>(null);
  
  const handleActivate = (skillName:string) => {
    setHoveredSkill(skillName);
  };

  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center text-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`} style={{ fontFamily: "var(--font-caveat), cursive" }}>{aboutMe.aboutTitles[0]}</h2>

        <ul className={`list-disc text-left w-[90%] ml-[1rem]`}>
          {aboutMe.skills.map((item,index)=>{
            return <li key={index} className={`${Styles.skillTypeFont} mb-[2rem]`}>{item.skillType}

            <p className={`font-medium ${Styles.commentSize}`}>
              {item.skillList.map((skill,skillIndex)=>{
                if(item.skillList.length-1!==skillIndex){
                  return  <span key={`skillName_${skillIndex}`} className={hoveredSkill===skill.skillName?(`font-bold text-red-600`):(``)}>{skill.skillName}, </span>
                } else {
                  return <span key={`skillName_${skillIndex}`} className={hoveredSkill===skill.skillName?(`font-bold text-red-600`):(``)}>{skill.skillName}</span>
                }
              })}
            </p>

            <div className="flex w-[100%]">
                {item.skillList.map((image,imageIndex)=>{
                  return <Image
                  key={`img_${imageIndex}`}
                  onMouseEnter={() => setHoveredSkill(image.skillName)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onTouchStart={() => handleActivate(image.skillName)}                  className={`${imageIndex !== 0 ? Styles.imagePosition : ""} ${Styles.imageSize} ${hoveredSkill===image.skillName?("z-20 scale-[1.2] transition-transform duration-300"):("")} z-10`}
                  src={image.skillImage}
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