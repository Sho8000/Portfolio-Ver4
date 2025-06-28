"use client"

import ProjectCarousel from "../../ProjectCarousel/ProjectCarousel";
import Styles from "./ProjectsSection.module.css"
import { useLangStore } from "@/store/useLangStore";

interface ProjectsProps {
  type:"client"|"personal";
  bgColor:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
  textLeft:boolean;
}

export default function ProjectsSection({type, bgColor,textLeft}:ProjectsProps) {
  const {data} = useLangStore();
  const projectInfo = type==="client"?data.myProject.clientProjects:data.myProject.personalProjects
  const CardBG = bgColor==="bg-[#f2f2ff]"?("bg-[#fdfdfd]"):("bg-[#f2f2ff]")
  
  return (
    <section className={`w-[100%] h-auto ${bgColor} py-[2rem]`}>
      <h1 className={`${Styles.projectTitle} text-center py-[2rem]`}>{projectInfo.projectTypeName}</h1>

      <ProjectCarousel cardBG={CardBG} projectInfo={projectInfo.projects} textLeft={textLeft}/>
    </section>
  );
}