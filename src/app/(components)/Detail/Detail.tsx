"use client"
import MenuCloseBtn from "../Btn/CloseBtn";
import { useEffect, useRef } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { useDetailContext } from "@/app/(context)/DetailPageContext";
import { detailOpenAnimate } from "@/lib/detailAnimation";

export default function Detail() {
  const {detailInfo} = useDetailContext();

  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = detailOpenAnimate(detailRef.current);
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {detailInfo && 
        <div className="fixed z-40 w-[100%] h-[100vh] top-0 left-0 bg-[#2E3A59]/80 backdrop-blur-[7px]">
          <div className="fixed flex z-50 justify-end w-[90%] mt-[1rem] left-[50%] translate-x-[-50%]">
            <MenuCloseBtn/>
          </div>
          <div ref={detailRef} className="fixed z-40 w-[90%] max-h-[80vh] top-[50%] left-[50%] translate-x-[-50%] overflow-y-scroll">
            <ProjectCard textLeft={detailInfo.textLeft} bgColor={"bg-[#f2f2ff]"} project={detailInfo.project} contentTitles={detailInfo.contentTitles} detail={true}/>
          </div>
        </div>
      }
    </>
  );
}