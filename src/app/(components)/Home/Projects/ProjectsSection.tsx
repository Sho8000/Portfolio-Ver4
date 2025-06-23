"use client"

import ProjectCard from "../../Cards/ProjectCard";
/* import Styles from "./ProjectsSection.module.css" */
import { useLangStore } from "@/store/useLangStore";

interface ProjectsProps {
  type:"client"|"personal";
  bgColor:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
}

export default function ProjectsSection({type, bgColor}:ProjectsProps) {
  const {data} = useLangStore();
  const projectInfo = type==="client"?data.myProject.clientProjects:data.myProject.personalProjects
  const CardBG = bgColor==="bg-[#f2f2ff]"?("bg-[#fdfdfd]"):("bg-[#f2f2ff]")
  
  return (
    <section className={`w-[100%] min-h-[100vh] ${bgColor}`}>
      <h1>{projectInfo.projectTypeName}</h1>
        {projectInfo.projects.map((item,index)=>{
          return <ProjectCard key={index} textLeft={true} bgColor={CardBG} project={item}/>
        })}

    </section>
  );
}