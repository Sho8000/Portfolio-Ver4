import Styles from "./BTN.module.css"

export default function LeftBtn() {

  return (
    <>
      {/* Large */}
      <button className={`${Styles.hideLarge}`}>
        <svg width="100" height="100">
          <circle cx={50} cy={50} r={50} fill="black" opacity="80%"/>
          <line x1="23" y1="50" x2="67" y2="23" style={{stroke:"white",strokeWidth:10,strokeLinecap: "round"}}/>
          <line x1="23" y1="50" x2="67" y2="77" style={{stroke:"white",strokeWidth:10,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Middle */}
      <button className={`${Styles.hideMiddle}`}>
        <svg width="80" height="80">
          <circle cx={40} cy={40} r={40} fill="black" opacity="80%"/>
          <line x1="20" y1="40" x2="53" y2="20" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
          <line x1="20" y1="40" x2="53" y2="60" style={{stroke:"white",strokeWidth:8,strokeLinecap: "round"}}/>
        </svg>  
      </button>

      {/* Small */}
      <button className={`${Styles.hideSmall}`}>
        <svg width="60" height="60">
          <circle cx={30} cy={30} r={30} fill="black" opacity="80%"/>
          <line x1="17" y1="30" x2="40" y2="17" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
          <line x1="17" y1="30" x2="40" y2="43" style={{stroke:"white",strokeWidth:6,strokeLinecap: "round"}}/>
        </svg>  
      </button>
    </>
  );
}