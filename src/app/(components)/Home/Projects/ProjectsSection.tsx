"use client"

import ProjectCarousel from "../../ProjectCarousel/ProjectCarousel";
import Styles from "./ProjectsSection.module.css"
import { useLangStore } from "@/store/useLangStore";

interface ProjectsProps {
  type:"client"|"personal";
  bgColor:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
  textLeft:boolean;
  container?:"none";
}

export default function ProjectsSection({type, bgColor,textLeft,container}:ProjectsProps) {
  const {data} = useLangStore();
  const projectInfo = type==="client"?data.myProject.clientProjects:data.myProject.personalProjects
  const pageBG = bgColor==="bg-[#f2f2ff]"?("bg-[linear-gradient(to_bottom,_rgba(242,242,255,0)_0%,_#f2f2ff_10%,_#f2f2ff_90%,_rgba(242,242,255,0)_100%)] pt-[8vh] pb-[10vh] -mt-[8vh] -mb-[10vh]"):("bg-[linear-gradient(to_bottom,_rgba(242,242,255,0)_0%,_#fdfdfd_10%,_#fdfdfd_90%,_rgba(242,242,255,0)_100%)] pt-[8vh] pb-[10vh] -mt-[8vh] -mb-[10vh]");
  const CardBG = bgColor==="bg-[#f2f2ff]"?("bg-[#fdfdfd]"):("bg-[#f2f2ff]")
  
  return (
    <section className={`w-[100%] h-auto ${pageBG} py-[2rem]`}>
      <h1 className={`${Styles.projectTitle} text-center py-[2rem]`}>{projectInfo.projectTypeName}</h1>

      <ProjectCarousel cardBG={CardBG} projectInfo={projectInfo.projects} roleTitle={data.myProject.roleTitle} textLeft={textLeft} container={container}/>
    </section>
  );
}