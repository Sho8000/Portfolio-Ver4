"use client"
import Styles from "./BTN.module.css"
import { useMenuContext } from "@/app/(context)/MenuBtnContext";

export default function MenuBtn() {
  const {changeMenuStatus} = useMenuContext();
  const hbgBtnHandler = () => {
    changeMenuStatus(true);
  }

  return (
    <>
      {/* Large */}
      <button className={`${Styles.hideLarge} cursor-pointer`} onClick={hbgBtnHandler}>
        <svg width="100" height="100">
          <circle cx={50} cy={50} r={50} fill="black" opacity="80%"/>
          <rect x="25" y="27" rx="1" ry="1" width="50" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:6}} />
          <rect x="25" y="47" rx="1" ry="1" width="50" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:6}} />
          <rect x="25" y="67" rx="1" ry="1" width="50" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:6}} />
        </svg>
      </button>

      {/* Middle */}
      <button className={`${Styles.hideMiddle} cursor-pointer`} onClick={hbgBtnHandler}>
        <svg width="80" height="80">
          <circle cx={40} cy={40} r={40} fill="black" opacity="80%"/>
          <rect x="20" y="22" rx="1" ry="1" width="40" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:5}} />
          <rect x="20" y="38" rx="1" ry="1" width="40" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:5}} />
          <rect x="20" y="54" rx="1" ry="1" width="40" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:5}} />
        </svg>  
      </button>

      {/* Small */}
      <button className={`${Styles.hideSmall} cursor-pointer`} onClick={hbgBtnHandler}>
        <svg width="60" height="60">
          <circle cx={30} cy={30} r={30} fill="black" opacity="80%"/>
          <rect x="14" y="15" rx="1" ry="1" width="32" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:4}} />
          <rect x="14" y="28" rx="1" ry="1" width="32" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:4}} />
          <rect x="14" y="41" rx="1" ry="1" width="32" height="2"
          style={{fill:"white",stroke:"white",strokeWidth:4}} />
        </svg>  
      </button>
    </>
  );
}