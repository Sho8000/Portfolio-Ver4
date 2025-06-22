"use client"
import { MainDBEntry } from "@/lib/db";
import Styles from "./Cards.module.css"
import Image from "next/image";
import { useLangStore } from "@/store/useLangStore";

interface ProjectCardProps {
  textLeft: boolean;
  bgColor:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
  projectInfo:MainDBEntry["myProject"]["clientProjects"]/* |MainDBEntry["myProject"]["personalProjects"] */;
}

export default function ProjectCard({textLeft, bgColor}:ProjectCardProps) {
  const {data} = useLangStore();
  const projectInfo = data.myProject.clientProjects

  return (
    <div className={`w-[90%] m-auto shadow-[-10px_10px_10px_rgba(0,0,0,0.25)] rounded-[40px] p-[2rem] items-center ${textLeft?(Styles.containerLeftText):(Styles.containerRightText)} ${bgColor}`}>
      <div className="flex flex-col justify-center h-[100%] border-b-1 border-gray-500">
        <h2 className={`${Styles.projectName} font-bold`}>{projectInfo.projects[0].projectName}</h2>
        <p className={`${Styles.subTitle}`}>{projectInfo.projects[0].projectType}</p>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className={`${Styles.projectName} font-bold`}>Technologies</h2>
        <p className={`${Styles.subTitle}`}>{projectInfo.projects[0].technologies}</p>
      </div>
      
      {/* Images for PC layout */}
      <div className={`relative [grid-area:pic]  ${textLeft?("order-3"):("order-1")} ${Styles.ImageForPC}`}>
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={projectInfo.projects[0].imagePC}
          alt="projectImage"
          width={400}
          height={400}
        />
        <Image
          className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          src={projectInfo.projects[0].imagePCHover}
          alt="projectImage"
          width={400}
          height={400}
        />
        <div className="invisible">
          <Image
            src={projectInfo.projects[0].imagePCHover}
            alt="projectImage"
            width={400}
            height={400}
          />
        </div>
      </div>
      
    </div>
  );
}