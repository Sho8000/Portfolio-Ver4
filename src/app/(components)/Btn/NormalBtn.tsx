"use client"

import Styles from "./BTN.module.css"

interface NormalBtnProps {
  text:string;
}

export default function NormalBtn({text = "detail"}:NormalBtnProps) {


  return (
    <>
      <button className={`w-full bg-[#4A5EE5] cursor-pointer ${Styles.btnSize} hover:bg-[#2F3FC4] active:scale-95`} >
        <p className={`text-white ${Styles.btnFont}`}>{text}</p>
      </button>
    </>
  );
}