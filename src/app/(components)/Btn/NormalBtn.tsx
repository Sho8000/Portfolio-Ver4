"use client"
/* 
import Styles from "./BTN.module.css"
 */
interface NormalBtnProps {
  text:string;
}

export default function NormalBtn({text = "detail"}:NormalBtnProps) {


  return (
    <>
      <button className={`bg-blue-300`} >
        <p>{text}</p>
      </button>
    </>
  );
}