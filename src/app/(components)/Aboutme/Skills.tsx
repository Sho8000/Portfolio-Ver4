"use client"

import Styles from "./AboutmePage.module.css"
import { useLangStore } from "@/store/useLangStore";
import SkillLists from "./SkillListContents";

export default function Skills() {
  const {data} = useLangStore();
  const aboutMe = data.aboutMe;

  return (
    <section className="w-[100%]">
      <div className={`flex flex-col items-center text-center m-auto ${Styles.container}`}>
        <h2 className={`${Styles.titleFont}`}>{aboutMe.aboutTitles[0]}</h2>

        <SkillLists aboutMe={aboutMe}/>
      </div>
    </section>
  );
}