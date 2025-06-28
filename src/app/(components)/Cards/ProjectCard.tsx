import { MainDBEntry } from "@/lib/db";
import Styles from "./Cards.module.css"
import Image from "next/image";
import NormalBtn from "../Btn/NormalBtn";

interface ProjectCardProps {
  textLeft: boolean;
  bgColor:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
  project:MainDBEntry["myProject"]["clientProjects"]["projects"][number]|MainDBEntry["myProject"]["personalProjects"]["projects"][number];
  container?:"none";
  btn?:true;
}

export default function ProjectCard({textLeft, bgColor,project,container,btn}:ProjectCardProps) {
  
  return (
    <div className={`group w-[90%] m-auto rounded-[40px] p-[2rem] items-center 
    ${textLeft?(Styles.containerLeftText):(Styles.containerRightText)}
    ${bgColor}
    ${container==="none"?("bg-transparent "):(`${bgColor} shadow-[-10px_10px_10px_rgba(0,0,0,0.25)] hover:bg-[#e5e5ff]`)}
    transition-colors duration-300`}>
      {/* Image for phone */}
      <div className={`${Styles.phoneImg}`}>
        <Image
          src={project.imagePhone}
          alt="Phone Image"
          width={120}
          height={240}
        />
      </div>

      {/* Text Area */}
      <div className="flex flex-col justify-center h-[100%] border-b-1 border-gray-500">
        <h2 className={`${Styles.projectName} font-bold`}>{project.projectName}</h2>
        <p className={`${Styles.subTitle}`}>{project.projectType}</p>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className={`${Styles.projectName} font-bold`}>Technologies</h2>
        <p className={`${Styles.subTitle}`}>{project.technologies}</p>
      </div>
      
      {/* Images for PC layout */}
      <div className={`relative [grid-area:pic]  ${textLeft?("order-3"):("order-1")} ${Styles.ImageForPC}`}>
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={project.imagePC}
          alt="projectImage"
          width={400}
          height={400}
        />
        <Image
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          src={project.imagePCHover}
          alt="projectImage"
          width={400}
          height={400}
        />
        <div className="invisible">
          <Image
            src={project.imagePCHover}
            alt="projectImage"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* btn */}
      {btn && 
        <div className={`[grid-area:btn] justify-self-center ${Styles.btnArea}`}>
          <NormalBtn text="detail"/>
        </div>
      }
    </div>
  );
}