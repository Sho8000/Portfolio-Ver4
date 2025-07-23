"use client"
import { useLangStore } from "@/store/useLangStore";
import ProjectCard from "../(components)/Cards/ProjectCard";
import { useEffect, useState } from "react";
import { useDetailContext } from "../(context)/DetailPageContext";
import Detail from "../(components)/Detail/Detail";

export default function MyProject() {
  const {data} = useLangStore();
  const [filter, setFilter] = useState("all projects")
  const {isDetailOpen} = useDetailContext();
  const projects = data.myProject

  useEffect(()=>{
    if(data.myProject.clientProjects.projectTypeName === "client projects"){
      setFilter("all project")      
    } else {
      setFilter("全ての案件")
    }
  },[data]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <section className="w-[100%] h-auto">
        <div className="w-[90%] m-auto">
          <div className="text-center mt-[2rem] mb-[2rem]">
            <p className="inline">{projects.filter.filterTitle}：</p>
            <select className="border-2 border-black rounded-sm p-[5px]" name="filter" id="filter" value={filter} onChange={handleFilterChange}>
              {projects.filter.filterContents.map((item,index)=>{
                return <option key={index} value={item}>{item}</option>
              })}
            </select>
          </div>

          {(filter==="personal projects" || filter === "個人プロジェクト") ||
            <>
              {projects.clientProjects.projects.map((item,index)=>{
                if(index%2===0){
                  return <div key={`client_${index}`} className="border-t-2 border-gray-300">
                      <ProjectCard textLeft={true} project={item} contentTitles={projects.contentTitles} container="none" btnText={projects.buttonText}/>
                    </div>
                }
                return <div key={`client_${index}`} className="border-t-2 border-gray-300">
                  <ProjectCard textLeft={false} project={item} contentTitles={projects.contentTitles} container="none" btnText={projects.buttonText}/>
                </div>
              })}
            </>
          }
          {(filter==="client projects" || filter==="顧客案件") ||
            <>
            {projects.personalProjects.projects.map((item,index)=>{
              if(index%2===1){
                return <div key={`personal_${index}`} className="border-t-2 border-gray-300">
                    <ProjectCard textLeft={true} project={item} contentTitles={projects.contentTitles} container="none" btnText={projects.buttonText}/>
                  </div>
              }
              return <div key={`personal_${index}`} className="border-t-2 border-gray-300">
                  <ProjectCard textLeft={false} project={item} contentTitles={projects.contentTitles} container="none" btnText={projects.buttonText}/>
                </div>
              })}
            </>
          }
        </div>
        {isDetailOpen && 
          <Detail/>
        }
      </section>
    </>
  );
}
