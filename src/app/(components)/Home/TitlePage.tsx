"use client"

import Image from "next/image";
import Styles from "./TitlePage.module.css"
import MainImg from "@/../public/LandingpageImages/MainImg.jpg"
import { useLangStore } from "@/store/useLangStore";

export default function TitlePage() {
  const {data} = useLangStore();
  
  return (
    <section className="w-[100%] h-[100vh] bg-[#fdfdfd]">
      <div className={`${Styles.container} w-[100%] h-[100%]`}>
        <div className={`${Styles.textArea}`}>
          <div className={`${Styles.titleFont}`}>
            <h1>{data.landing.jobTitleUp}</h1>
            <h1>{data.landing.jobTitleDown}</h1>
          </div>
          <h2 className={`${Styles.subTitleFont}`}>{data.landing.subTitle}</h2>
        </div>
        <div className={`${Styles.imageArea}`}>
          <Image
            className={`object-cover ml-auto ${Styles.objectPosition}`}
            src={MainImg}
            alt="Main Image"
            width={1200}
            height={1600}
            style={{width:"auto", height:"100%"}}
          />
        </div>
      </div>
    </section>
  );
}