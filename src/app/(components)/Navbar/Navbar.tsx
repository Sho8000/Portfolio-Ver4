"use client"

import { useMenuContext } from "@/app/(context)/MenuBtnContext";
import LanguageBtn from "../Btn/LanguageBtn";
import MenuBtn from "../Btn/MenuBtn";
import Menu from "../Menu/Menu";
import Styles from "./Nav.module.css"
import { usePathname } from "next/navigation";
import { useLangStore } from "@/store/useLangStore";
import { useEffect, useRef } from "react";
import { translateAnimate } from "@/lib/translateAnimation";

export default function Navbar() {
  const {data} = useLangStore();
  const {isMenuOpen} = useMenuContext();
  const pathName = usePathname();
  const haveHeight = pathName==="/"?true:false;
  const translateAnimateWallRef = useRef<HTMLDivElement>(null)
  const translateAnimeteRef = useRef<"left" | "right">("right");

  useEffect(()=>{
    if(!translateAnimateWallRef.current) return;

    translateAnimate(translateAnimateWallRef.current,translateAnimeteRef.current)
    translateAnimeteRef.current =
    translateAnimeteRef.current === "right" ? "left":"right";
  },[data])

  return (
    <>
      <nav className={`fixed z-40 w-[90%] flex items-center gap-[2rem] mt-[1rem] left-[50%] translate-x-[-50%] ${Styles.btnLocation}`}>
        <LanguageBtn/>
        <MenuBtn/>
        <div ref={translateAnimateWallRef} className="absolute w-[80vw] h-[100vh] bg-[#2E3A59] left-[-10%] top-[-20%]"></div>
      </nav>
      {haveHeight ||
        <h1 className={`box-content text-center ${Styles.titleArea} ${Styles.titleFont}`}>
          {data.menuItems.find(item => item.link === pathName)?.title || "unknownPage"}
        </h1>
      }
      {isMenuOpen && <Menu/>}
    </>
  );
}