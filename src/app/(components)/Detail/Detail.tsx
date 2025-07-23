"use client"
import MenuCloseBtn from "../Btn/CloseBtn";
import { useEffect, useRef } from "react";
import { menuOpenAnimate } from "@/lib/menuAnimation";
import ProjectCard from "../Cards/ProjectCard";
import { useDetailContext } from "@/app/(context)/DetailPageContext";

export default function Detail() {
  const {detailInfo} = useDetailContext();

  const panelRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const tl = menuOpenAnimate(panelRef.current, menuItemsRef.current);
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
          <div ref={panelRef} className="fixed z-40 w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <ProjectCard textLeft={true} bgColor={"bg-[#f2f2ff]"} project={detailInfo.project} contentTitles={detailInfo.contentTitles} detail={true}/>
          </div>
        </div>
      }
    </>
  );
}