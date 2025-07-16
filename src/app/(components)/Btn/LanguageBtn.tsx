"use client"
import Styles from "./BTN.module.css"
import Image from "next/image";
import LangBtn from "@/../public/NavImages/LanguageBtnImg.png"
import { useLangStore } from "@/store/useLangStore";

export default function LanguageBtn({ onClick }: { onClick: () => void }) {
  const { data } = useLangStore();
  
  return (
    <>
      {/* Large */}
      <div className={`relative w-[155px] h-[52px] ${Styles.hideLarge} cursor-pointer`} onClick={onClick}>
        <Image
          className="absolute"
          src={LangBtn}
          alt="Language Button"
          width={155}
          height={52}
        />
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-30%] text-xl text-gray-600">{data.language}</p>
      </div>

      {/* Middle */}
      <div className={`relative w-[120px] h-[41px] ${Styles.hideMiddle} cursor-pointer`} onClick={onClick}>
        <Image
          className="absolute"
          src={LangBtn}
          alt="Language Button"
          width={120}
          height={41}
        />
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-30%] text-gray-600">{data.language}</p>
      </div>

      {/* Small */}
      <div className={`relative w-[85px] h-[30px] ${Styles.hideSmall} cursor-pointer`} onClick={onClick}>
        <Image
          className="absolute"
          src={LangBtn}
          alt="Language Button"
          width={85}
          height={30}
        />
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-30%] text-[12px] text-gray-600">{data.language}</p>
      </div>
    </>
  );
}