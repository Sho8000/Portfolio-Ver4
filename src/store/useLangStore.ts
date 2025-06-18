  "use client";

import { MainDBEng, MainDBEntry, MainDBJpn } from "@/lib/db";
import { create } from "zustand";

type LangState = {
  data: MainDBEntry;
  changeLanguage: () => void;
};

export const useLangStore = create<LangState>((set, get) => ({
  data: MainDBEng[0],
  
  changeLanguage: () => {
    const currentData = get().data;
    const newData = currentData === MainDBEng[0] ? MainDBJpn[0] : MainDBEng[0];
    set({ data: newData });
  },
}));
