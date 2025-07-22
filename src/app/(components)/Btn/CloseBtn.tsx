"use client"

import { useDetailContext } from "@/app/(context)/DetailPageContext";
import Styles from "./BTN.module.css"
import { useMenuContext } from "@/app/(context)/MenuBtnContext";

export default function MenuCloseBtn() {
  const {changeMenuStatus} = useMenuContext();
  const {changeDetailStatus} = useDetailContext();
  const closeBtnHandler = () => {
    changeMenuStatus(false);
    changeDetailStatus(false);
  }

  return (
    <>
      {/* Large */}
      <button className={`${Styles.hideLarge} cursor-pointer`} onClick={closeBtnHandler}>
        <svg width="100" height="100">
          <circle cx={50} cy={50} r={50} fill="black" opacity="80%"/>
          <line x1="23" y1="23" x2="77" y2="77" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
          <line x1="23" y1="77" x2="77" y2="23" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Middle */}
      <button className={`${Styles.hideMiddle} cursor-pointer`} onClick={closeBtnHandler}>
        <svg width="80" height="80">
          <circle cx={40} cy={40} r={40} fill="black" opacity="80%"/>
          <line x1="20" y1="20" x2="60" y2="60" style={{stroke:"white",strokeWidth:7,strokeLinecap: "round"}}/>
          <line x1="20" y1="60" x2="60" y2="20" style={{stroke:"white",strokeWidth:7,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Small */}
      <button className={`${Styles.hideSmall} cursor-pointer`} onClick={closeBtnHandler}>
        <svg width="60" height="60">
          <circle cx={30} cy={30} r={30} fill="black" opacity="80%"/>
          <line x1="17" y1="17" x2="43" y2="43" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
          <line x1="17" y1="43" x2="43" y2="17" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
        </svg>  
      </button>
    </>
  );
}