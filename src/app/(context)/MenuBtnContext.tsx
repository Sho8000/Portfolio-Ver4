"use client"

import { createContext, useContext, useState } from "react";

type MenuState = {
  isMenuOpen:boolean;
  changeMenuStatus:(value:boolean)=>void;
}

const MenuContext = createContext<MenuState | undefined>(undefined);

const MenuContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const changeMenuStatus = (value:boolean)=>{
    setIsMenuOpen(value)
  }

  const value = {isMenuOpen,changeMenuStatus}

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}

const useMenuContext = ():MenuState => {
  const context = useContext(MenuContext);
  if(!context){
    throw new Error("useMenuContex must be used within a CounterContextProvider");
  }
  return context;
}

export {MenuContextProvider, useMenuContext}