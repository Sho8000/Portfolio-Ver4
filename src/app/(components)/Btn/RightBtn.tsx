import Styles from "./BTN.module.css"

export default function RightBtn() {

  return (
    <>
      {/* Large */}
      <button className={`${Styles.hideLarge}`}>
        <svg width="100" height="100">
          <circle cx={50} cy={50} r={50} fill="black" opacity="80%"/>
          <line x1="33" y1="23" x2="77" y2="50" style={{stroke:"white",strokeWidth:10,strokeLinecap: "round"}}/>
          <line x1="33" y1="77" x2="77" y2="50" style={{stroke:"white",strokeWidth:10,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Middle */}
      <button className={`${Styles.hideMiddle}`}>
        <svg width="80" height="80">
          <circle cx={40} cy={40} r={40} fill="black" opacity="80%"/>
          <line x1="27" y1="20" x2="60" y2="40" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
          <line x1="27" y1="60" x2="60" y2="40" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Small */}
      <button className={`${Styles.hideSmall}`}>
        <svg width="60" height="60">
          <circle cx={30} cy={30} r={30} fill="black" opacity="80%"/>
          <line x1="20" y1="17" x2="43" y2="30" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
          <line x1="20" y1="43" x2="43" y2="30" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
        </svg>  
      </button>
    </>
  );
}