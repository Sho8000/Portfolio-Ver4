"use client"

import Image from "next/image";
//import Styles from "./TitlePage.module.css"
import MainImg from "@/../public/LandingpageImages/MainImg.jpg"
import { useLangStore } from "@/store/useLangStore";

export default function TitlePage() {
  const {data} = useLangStore();
  
  return (
    <section className="w-[100%] h-[100vh]">
      <div className="flex w-[100%] h-[100%]">
        <div className="h-[100%] flex-grow flex flex-col justify-center items-center bg-amber-400">
          <h1 className="text-[120px]">{data.landing.jobTitleUp}</h1>
          <h1 className="text-[120px]">{data.landing.jobTitleDown}</h1>
          <h2>{data.landing.subTitle}</h2>
        </div>
        <div className="max-w-[50%] h-[100%]">
          <Image
            className="object-cover ml-auto"
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