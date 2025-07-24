"use client"

import { MainDBEntry } from "@/lib/db";
import { createContext, useContext, useState } from "react";

type DetailInfo = {
  contentTitles:string[];
  project:MainDBEntry["myProject"]["clientProjects"]["projects"][number]|MainDBEntry["myProject"]["personalProjects"]["projects"][number];
  textLeft:boolean;
}

type DetailState = {
  isDetailOpen:boolean;
  detailInfo?:DetailInfo|null;
  changeDetailStatus:(value:boolean)=>void;
  updateDetailInfo:(info:DetailState["detailInfo"])=>void;
}

const DetailContext = createContext<DetailState | undefined>(undefined);

const DetailContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isDetailOpen,setIsDetailOpen] = useState(false);
  const [detailInfo,setDetailInfo] = useState<DetailState["detailInfo"]|null>(null);

  const changeDetailStatus = (value:boolean)=>{
    setIsDetailOpen(value)
  }

  const updateDetailInfo = (info:DetailState["detailInfo"]) => {
    setDetailInfo(info);
  }


  const value = {isDetailOpen,detailInfo,changeDetailStatus,updateDetailInfo}

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