"use client"

import { useMenuContext } from "@/app/(context)/MenuBtnContext";
import LanguageBtn from "../Btn/LanguageBtn";
import MenuBtn from "../Btn/MenuBtn";
import Menu from "../Menu/Menu";
import Styles from "./Nav.module.css"
import { usePathname } from "next/navigation";
import { useLangStore } from "@/store/useLangStore";
import { useEffect, useRef } from "react";
import { translateAnimateIn, translateAnimateOut } from "@/lib/translateAnimation";

export default function Navbar() {
  const {data, changeLanguage} = useLangStore();
  const {isMenuOpen} = useMenuContext();
  const pathName = usePathname();
  const haveHeight = pathName==="/"?true:false;
  const translateAnimateWallRef = useRef<HTMLDivElement>(null)
  const translateAnimeteRef = useRef<"left" | "right">("right");
  useEffect(()=>{
    if(!translateAnimateWallRef.current) return;

    translateAnimateOut(translateAnimateWallRef.current,translateAnimeteRef.current)
    translateAnimeteRef.current =
    translateAnimeteRef.current === "right" ? "left":"right";
  },[data])

  const langBtnClickHandler = () => {
    if(!translateAnimateWallRef.current) return;
    translateAnimateIn(translateAnimateWallRef.current,translateAnimeteRef.current,changeLanguage)
  }

  return (
    <>
      <div ref={translateAnimateWallRef} className="fixed w-[100vw] h-[100vh] z-50 bg-[#2E3A59]/80 backdrop-blur-sm left-[100%] top-0"></div>
      <nav className={`fixed z-40 w-[90%] flex items-center gap-[2rem] mt-[1rem] left-[50%] translate-x-[-50%] ${Styles.btnLocation}`}>
        <LanguageBtn onClick={langBtnClickHandler}/>
        <MenuBtn/>
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