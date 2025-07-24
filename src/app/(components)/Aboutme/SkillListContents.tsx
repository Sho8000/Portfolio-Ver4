"use client"

import Image from "next/image";
import Styles from "./AboutmePage.module.css"
import { useEffect, useState } from "react";
import { upDownAnimation } from "@/lib/upDownAnimation";
import { usePathname } from "next/navigation";
import { MainDBEntry } from "@/lib/db";

interface SkillListsProps {
  aboutMe?:MainDBEntry["aboutMe"];
  detailSkills?:MainDBEntry["myProject"]["clientProjects"]["projects"][number]["technologies"]|MainDBEntry["myProject"]["personalProjects"]["projects"][number]["technologies"];
}

export default function SkillLists({aboutMe,detailSkills}:SkillListsProps) {
  const [hoveredSkill,setHoveredSkill] = useState<string|null>(null);
  const pathname = usePathname();

  useEffect(() => {
    upDownAnimation(".floatAnimation");
  }, [pathname]);

  const handleActivate = (skillName:string) => {
    setHoveredSkill(skillName);
  };

  return (
    <>
      {aboutMe &&
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
              onTouchStart={() => handleActivate(image.skillName)}                  className={`floatAnimation ${imageIndex !== 0 ? Styles.imagePosition : ""} ${Styles.imageSize} ${hoveredSkill===image.skillName?("z-20 scale-[1.2] transition-transform duration-300"):("")} z-10`}
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
      }
      {detailSkills &&
        <>
          <p className={`font-medium ${Styles.commentSize}`}>
            {detailSkills.map((skill,skillIndex)=>{
              if(detailSkills.length-1!==skillIndex){
                return  <span key={`skillName_${skillIndex}`} className={hoveredSkill===skill.skillName?(`font-bold text-red-600`):(``)}>{skill.skillName}, </span>
              } else {
                return <span key={`skillName_${skillIndex}`} className={hoveredSkill===skill.skillName?(`font-bold text-red-600`):(``)}>{skill.skillName}</span>
              }
            })}
          </p>
    
          <div className="flex justify-center w-[100%]">
            {detailSkills.map((image,imageIndex)=>{
              return <Image
              key={`img_${imageIndex}`}
              onMouseEnter={() => setHoveredSkill(image.skillName)}
              onMouseLeave={() => setHoveredSkill(null)}
              onTouchStart={() => handleActivate(image.skillName)}                  className={`floatAnimation ${imageIndex !== 0 ? Styles.imagePosition : ""} ${Styles.imageSize} ${hoveredSkill===image.skillName?("z-20 scale-[1.2] transition-transform duration-300"):("")} z-10`}
              src={image.skillImage}
              alt="skillImage"
              loading="eager"
              width={100}
              height={100}
            />
            })}
          </div>
        </>
      }
    </>
  );
}
