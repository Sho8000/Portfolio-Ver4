"use client"

import { createContext, useContext, useState } from "react";

type DetailState = {
  isDetailOpen:boolean;
  changeDetailStatus:(value:boolean)=>void;
}

const DetailContext = createContext<DetailState | undefined>(undefined);

const DetailContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isDetailOpen,setIsDetailOpen] = useState(false);

  const changeDetailStatus = (value:boolean)=>{
    setIsDetailOpen(value)
  }

  const value = {isDetailOpen,changeDetailStatus}

  return (
    <DetailContext.Provider value={value}>
      {children}
    </DetailContext.Provider>
  )
}

const useDetailContext = ():DetailState => {
  const context = useContext(DetailContext);
  if(!context){
    throw new Error("useDetailContex must be used within a DetailContextProvider");
  }
  return context;
}

export {DetailContextProvider, useDetailContext}