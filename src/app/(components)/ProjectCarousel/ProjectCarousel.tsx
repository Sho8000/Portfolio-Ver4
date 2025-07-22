"use client"
import { useEffect, useRef, useState } from "react";
import { MainDBEntry } from "@/lib/db";
import ProjectCard from "../Cards/ProjectCard";
import LeftBtn from "../Btn/LeftBtn";
import RightBtn from "../Btn/RightBtn";
import Styles from "./ProjectCarousel.module.css"
import { animateCardIn, animateCardOut } from "@/lib/slideCards";

interface ProjectsProps {
  cardBG:"bg-[#f2f2ff]"|"bg-[#fdfdfd]"; 
  projectInfo:MainDBEntry["myProject"]["clientProjects"]["projects"]|MainDBEntry["myProject"]["personalProjects"]["projects"];
  roleTitle:string;
  textLeft:boolean;
  container?:"none";
}

export default function ProjectCarousel({cardBG,projectInfo,roleTitle,textLeft,container}:ProjectsProps) {
	const [currentPage,setCurrentPage] = useState<number>(1);
  const directionRef = useRef<"left" | "right">("right");
  
  const cardRef = useRef<HTMLDivElement>(null);
  const totalPage = projectInfo.length;

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
  
    animateCardIn(element, directionRef.current);
  }, [currentPage]);

	const handlePrevious = ()=>{
    const element = cardRef.current;
    if (!element) return;

    directionRef.current = "left";
    animateCardOut(element, "left", () => {
      setCurrentPage((prev)=>{
        if(prev===1){
          return totalPage
        } else {
          return prev-1
        }
      })
    })
	}
	const handleNext = ()=>{
    const element = cardRef.current;
    if (!element) return;

    directionRef.current = "right";
    animateCardOut(element, "right", () => {
      setCurrentPage((next)=>{
        if(next===totalPage){
          return 1
        } else {
          return next+1
        }
      })
    })
	}

  return (
    <div className={`relative w-[90%] m-auto`}>
      <div ref={cardRef}>
        <ProjectCard textLeft={textLeft} bgColor={cardBG} project={projectInfo[currentPage-1]} roleTitle={roleTitle} container={container}/>
      </div>
      <div className={`w-[90%] flex justify-between m-auto items-center ${Styles.arrowContainer}`}>
        <div onClick={handlePrevious} className={`${Styles.arrowPositionLeft}`}>
          <LeftBtn/>
        </div>
        <p className={`w-[100%] text-center`}>
          {projectInfo.map((_,index)=>{
            return <span key={index} className={`${index===currentPage-1?(""):("text-gray-300")} ${Styles.dotSize}`}>●</span>
          })}          
        </p>
        <div onClick={handleNext} className={`${Styles.arrowPositionRight}`}>
          <RightBtn/>
        </div>
      </div>
    </div>
  );
}
