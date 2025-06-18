"use client"
import { createContext, useContext, useState } from "react";
import { MainDBEng, MainDBEntry, MainDBJpn } from "../../lib/db";


type LangState = {
  data:MainDBEntry;
  changeLanguage:()=>void;
}

const LangContext = createContext<LangState | undefined>(undefined);

const LangContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [data,setData] = useState<MainDBEntry>(MainDBEng[0])

  const changeLanguage = () => {
    if(data === MainDBEng[0]){
      setData(MainDBJpn[0])
    } else {
      setData(MainDBEng[0])
    }
  }

  const value = {data,changeLanguage}

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}

const useLangContext = ():LangState => {
  const context = useContext(LangContext);
  if(!context){
    throw new Error("useLangContex must be used within a CounterContextProvider");
  }
  return context;
}

export {LangContextProvider, useLangContext}