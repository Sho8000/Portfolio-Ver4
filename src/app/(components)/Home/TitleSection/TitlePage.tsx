"use client"

import Image from "next/image";
import Styles from "./TitlePage.module.css"
import { useLangStore } from "@/store/useLangStore";

export default function TitlePage() {
  const {data} = useLangStore();
  
  return (
    <section className="w-[100%] h-[100vh] bg-[#fdfdfd]">
      <div className={`${Styles.container} w-[100%] h-[100%]`}>
        <div className={`${Styles.textArea} w-[80%]`}>
          <div className={`${Styles.titleFont}`}>
            <h1>{data.landing.jobTitleUp}</h1>
            <h1>{data.landing.jobTitleDown}</h1>
          </div>
          <h2 className={`${Styles.subTitleFont}`}>{data.landing.subTitle}</h2>
        </div>
        <div className={`${Styles.imageArea}`}>
          <Image
            className={`object-cover ${Styles.objectPosition}`}
            src={data.landing.mainImage}
            alt="Main Image"
            width={1200}
            height={1600}
            priority
            loading="eager"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              willChange: "transform",
              backgroundColor: "#fff",
            }}
          />
        </div>
      </div>
    </section>
  );
}