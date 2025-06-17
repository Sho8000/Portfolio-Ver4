"use client"

export default function CloseBtn() {
  const hbgBtnHandler = () => {
  }
  return (
    <>
      <button onClick={hbgBtnHandler}>
        <svg width="50" height="50">
          <line x1="10" y1="10" x2="40" y2="40" stroke="white" strokeWidth="3px"/>
          <line x1="10" y1="40" x2="40" y2="10" stroke="white" strokeWidth="3px" />
        </svg>  
      </button> 
   </>
  );
}

<button>
</button>  
