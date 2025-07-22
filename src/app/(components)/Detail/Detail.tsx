"use client"
//import Link from "next/link";
import MenuCloseBtn from "../Btn/CloseBtn";
//import Styles from "./Menu.module.css"
//import { usePathname } from "next/navigation";
//import { useMenuContext } from "@/app/(context)/MenuBtnContext";
import { useLangStore } from "@/store/useLangStore";
import { useEffect, useRef } from "react";
import { menuOpenAnimate } from "@/lib/menuAnimation";
import ProjectCard from "../Cards/ProjectCard";

export default function Detail() {
//  const pathName = usePathname();
//  const {changeMenuStatus} = useMenuContext();
  const {data} = useLangStore();

  const panelRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const tl = menuOpenAnimate(panelRef.current, menuItemsRef.current);
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed z-40 w-[100%] h-[100vh] top-0 left-0 bg-[#2E3A59]/80 backdrop-blur-[7px]">
      <div className="fixed flex z-50 justify-end w-[90%] mt-[1rem] left-[50%] translate-x-[-50%]">
        <MenuCloseBtn/>
      </div>
      <div ref={panelRef} className="fixed z-40 w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <ProjectCard textLeft={true} bgColor={"bg-[#f2f2ff]"} project={data.myProject.personalProjects.projects[0]} roleTitle={data.myProject.roleTitle} detail={true}/>
      </div>
    </div>
  );
}