"use client"
import Link from "next/link";
import MenuCloseBtn from "../Btn/CloseBtn";
import Styles from "./Menu.module.css"
import { usePathname } from "next/navigation";
import { useMenuContext } from "@/app/(context)/MenuBtnContext";

export default function Menu() {
  const pathName = usePathname();
  const {changeMenuStatus} = useMenuContext();

  return (
    <div className="fixed z-40 w-[100%] h-[100vh] top-0 left-0 bg-[#f2f2ff]/60 backdrop-blur-[7px]">
      <div className="fixed flex z-50 justify-end w-[90%] mt-[1rem] left-[50%] translate-x-[-50%]">
        <MenuCloseBtn/>
      </div>
      <div className="absolute z-40 w-full h-full max-w-[660px] max-h-[840px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#2E3A59]/80">
        <div className={`w-[100%] h-[100%] flex flex-col justify-center items-center text-white ${Styles.fontSize} gap-[2rem]`}>
          <Link href={"/"} className={(pathName === "/") ? Styles.isActive : ""}>
            <h2 onClick={()=>{changeMenuStatus(false)}}>Home</h2></Link>
          <Link href={"/aboutme"} className={(pathName === "/aboutme") ? Styles.isActive : ""}>
            <h2 onClick={()=>{changeMenuStatus(false)}}>About Me</h2></Link>
          <Link href={"/myprojects"} className={(pathName === "/myprojects") ? Styles.isActive : ""}>
            <h2 onClick={()=>{changeMenuStatus(false)}}>My Projects</h2></Link>
          <Link href={"/contactme"} className={(pathName === "/contactme") ? Styles.isActive : ""}>
            <h2 onClick={()=>{changeMenuStatus(false)}}>Contact Me</h2></Link>
        </div>
      </div>
    </div>
  );
}