import { MainDBEntry } from "@/lib/db";
import Styles from "./Cards.module.css"
import Image from "next/image";
import NormalBtn from "../Btn/NormalBtn";
import { usePathname, useRouter } from "next/navigation";
import { useDetailContext } from "@/app/(context)/DetailPageContext";
import SkillLists from "../Aboutme/SkillListContents";

interface ProjectCardProps {
  textLeft: boolean;
  bgColor?:"bg-[#f2f2ff]"|"bg-[#fdfdfd]";
  project:MainDBEntry["myProject"]["clientProjects"]["projects"][number]|MainDBEntry["myProject"]["personalProjects"]["projects"][number];
  contentTitles:string[];
  container?:"none";
  btnText?:string;
  detail?:boolean;
}

export default function ProjectCard({textLeft, bgColor,project,contentTitles,container,btnText,detail=false}:ProjectCardProps) {
  const router = useRouter(); 
  const pathName = usePathname  ();
  const {detailInfo,changeDetailStatus,updateDetailInfo} = useDetailContext()

  const detailBtnHandler = (project:ProjectCardProps["project"],contentTitles:ProjectCardProps["contentTitles"]) => {
    changeDetailStatus(true);
    updateDetailInfo({project,contentTitles,textLeft})    
  }

  const cardClickHandler = (project:ProjectCardProps["project"],contentTitles:ProjectCardProps["contentTitles"]) => {
    if(!container && !detail){
      changeDetailStatus(true);
      updateDetailInfo({project,contentTitles,textLeft})
    }
  }

  const moveToLinkHandler = (link:string) => {
    if(link==="/myprojects"){
      changeDetailStatus(false);
      router.push(link);
    } else {
      window.location.href = link;
    }
  }

  return (
    <div className={`group w-[90%] m-auto rounded-[40px] p-[2rem] items-center 
      ${textLeft?(Styles.containerLeftText):(Styles.containerRightText)}
      ${container==="none"?("bg-transparent "):(`${bgColor} shadow-[-10px_10px_10px_rgba(0,0,0,0.25)] hover:bg-[#e5e5ff]`)}
      transition-colors duration-300
      ${(!container && !detail) && "cursor-pointer"}
    `} onClick={()=>{cardClickHandler(project,contentTitles)}}>
      {/* Image for phone */}
      <div className={`${Styles.forPhone} ${pathName==="/myprojects"&&(Styles.orderProjectPhone2)}`}>
        <Image
          src={project.imagePhone}
          alt="Phone Image"
          width={120}
          height={240}
          priority
          loading="eager"
        />
      </div>

      {/* Text Area */}
      <div className={`w-[100%] flex flex-col justify-center h-[100%] border-b-1 border-gray-500 ${pathName==="/myprojects"&&(Styles.orderProjectPhone1)}`}>
        <h2 className={`${Styles.projectName} font-bold`}>{project.projectName}</h2>
        <p className={`${Styles.subTitle}`}>{project.projectType}</p>
      </div>
      <div className={`flex flex-col justify-center ${pathName==="/myprojects"&&(Styles.orderProjectPhone3)}`}>
        <h2 className={`${Styles.projectName} font-bold`}>{contentTitles[0]}</h2>
        <p className={`${Styles.subTitle}`}>{project.myRole}</p>
      </div>

      {detail && 
        <>
          {/* Teck Stack for PC*/}
          <div className={`w-full m-auto text-center [grid-area:teckStack] ${Styles.forPC} border-t-1 border-gray-500`}>
            <h2 className={`${Styles.projectName} font-bold mt-[1rem]`}>{contentTitles[1]}
            </h2>
            <SkillLists detailSkills={detailInfo?.project.technologies}/>
          </div>

          {/* Teck Stack for Phone*/}
          <div className={`${Styles.orderProjectPhone3} ${Styles.forPhone}`}>
            <h2 className={`${Styles.projectName} font-bold mt-[1rem]`}>{contentTitles[1]}</h2>
            <SkillLists detailSkills={detailInfo?.project.technologies}/>
          </div>

          {/* Detail */}
          <div className={`w-full m-auto text-center [grid-area:detail] ${Styles.orderProjectPhone4}`}>
            <h2 className={`${Styles.projectName} font-bold mt-[1rem]`}>{contentTitles[2]}
            </h2>
            <p className={`${Styles.subTitle}`}>{detailInfo?.project.detail}</p>
          </div>

          {/* Links */}
          <div className={`w-full flex justify-between [grid-area:links] ${Styles.subTitle} ${Styles.orderProjectPhone5} text-blue-700 underline`}>
            <p className={`cursor-pointer`} onClick={()=>moveToLinkHandler("/myprojects")}>All Projects</p>
            <p className={`cursor-pointer`} onClick={()=>moveToLinkHandler(detailInfo!.project.url)}>Open</p>
          </div>
        </>
    }
      
      {/* Images for PC layout */}
      <div className={`relative [grid-area:pic]  ${textLeft?("order-3"):("order-1")} ${Styles.forPC}`}>
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={pathName==="/myprojects"? project.imagePCFull : project.imagePC}
          alt="projectImage"
          width={400}
          height={400}
          priority
          loading="eager"
        />
        <Image
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          src={pathName==="/myprojects"? project.imagePCFullHover : project.imagePCHover}
          alt="projectImage"
          width={400}
          height={400}
          priority
          loading="eager"
        />
        <div className="invisible">
          <Image
            src={pathName==="/myprojects"? project.imagePCFullHover : project.imagePCHover}
            alt="projectImage"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* btn */}
      {btnText && 
        <div className={`[grid-area:btn] justify-self-center ${Styles.btnArea} ${pathName==="/myprojects"&&(Styles.orderProjectPhone4)}`} onClick={()=>{detailBtnHandler(project,contentTitles)}}>
          <NormalBtn text={btnText}/>
        </div>
      }
    </div>
  );
}