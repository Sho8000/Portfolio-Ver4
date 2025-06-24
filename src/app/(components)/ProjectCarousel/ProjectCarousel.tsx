"use client"
import { useState } from "react";
import { MainDBEntry } from "@/lib/db";
import ProjectCard from "../Cards/ProjectCard";
import LeftBtn from "../Btn/LeftBtn";
import RightBtn from "../Btn/RightBtn";

interface ProjectsProps {
  cardBG:"bg-[#f2f2ff]"|"bg-[#fdfdfd]"; 
  projectInfo:MainDBEntry["myProject"]["clientProjects"]["projects"]|MainDBEntry["myProject"]["personalProjects"]["projects"];
  
}

export default function ProjectCarousel({cardBG,projectInfo}:ProjectsProps) {
	const [currentPage,setCurrentPage] = useState<number>(1);
	const totalPage = projectInfo.length;

	const handlePrevious = ()=>{
		setCurrentPage((prev)=>{
      if(prev===1){
        return totalPage
      } else {
        return prev-1
      }
    })
	}
	const handleNext = ()=>{
		setCurrentPage((next)=>{
      if(next===totalPage){
        return 1
      } else {
        return next+1
      }
    })
	}

  return (
    <div className="w-[90%] m-auto">
      <ProjectCard textLeft={true} bgColor={cardBG} project={projectInfo[currentPage-1]}/>
      <div className="w-[90%] flex justify-between m-auto items-center py-[2rem]">
        <div onClick={handlePrevious}>
          <LeftBtn/>
        </div>
        <p>{currentPage}/{totalPage}</p>
        <div onClick={handleNext}>
          <RightBtn/>
        </div>
      </div>
    </div>
  );
}
