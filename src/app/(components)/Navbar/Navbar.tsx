"use client"

import { useMenuContext } from "@/app/(context)/MenuBtnContext";
import LanguageBtn from "../Btn/LanguageBtn";
import MenuBtn from "../Btn/MenuBtn";
import Menu from "../Menu/Menu";
import Styles from "./Nav.module.css"

export default function Navbar() {
  const {isMenuOpen} = useMenuContext();
  
  return (
    <>
      <nav className={`fixed w-[90%] flex items-center gap-[2rem] mt-[1rem] left-[50%] translate-x-[-50%] ${Styles.btnLocation}`}>
        <LanguageBtn/>
        <MenuBtn/>
      </nav>
      {isMenuOpen && <Menu/>}
    </>
  );
}