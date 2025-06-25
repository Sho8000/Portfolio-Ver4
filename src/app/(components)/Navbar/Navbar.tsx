"use client"

import { useMenuContext } from "@/app/(context)/MenuBtnContext";
import LanguageBtn from "../Btn/LanguageBtn";
import MenuBtn from "../Btn/MenuBtn";
import Menu from "../Menu/Menu";
import Styles from "./Nav.module.css"
import { usePathname } from "next/navigation";
import { useLangStore } from "@/store/useLangStore";

export default function Navbar() {
  const {data} = useLangStore();
  const {isMenuOpen} = useMenuContext();
  const pathName = usePathname();
  const haveHeight = pathName==="/"?true:false;
  

  return (
    <>
      <nav className={`fixed z-40 w-[90%] flex items-center gap-[2rem] mt-[1rem] left-[50%] translate-x-[-50%] ${Styles.btnLocation}`}>
        <LanguageBtn/>
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