"use client"

import Styles from "./Contactme.module.css";
import NormalBtn from "../Btn/NormalBtn";

import { useLangStore } from "@/store/useLangStore";
import Image from "next/image";

export default function Contactme() {
  const {data} = useLangStore();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

};
  return (
    <section className="w-[100%] bg-[#f2f2ff] pb-[5rem]">
      <div className="text-center mb-[3rem]">
        <h2 className={`${Styles.mainFont} ${Styles.titleArea}`}>Let&apos;s Start Conversation</h2>
        <p className={`${Styles.subFont}`}>Ask how I can help you</p>
      </div>
      <div className={`w-[90%] flex justify-center gap-[3rem] m-auto`}>
        <div className={`w-[40%] flex justify-center items-center`}>
          <Image
            src={data.landing.myPic}
            alt="Main Image"
            width={1200}
            height={1600}
            className={`w-[80%] h-auto aspect-square object-cover rounded-[50%] border-[4px] border-white`}
          />
        </div>
        <form className="w-[40%] flex flex-col justify-center gap-[2rem]" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <input className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`} type="text" placeholder="First Name" required/>
            <input className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`} type="text" placeholder="Last Name"/>
          </div>
          <input className={`${Styles.inputBox} ${Styles.placeholder}`} type="email" placeholder="email"/>
          <textarea className={`${Styles.messageBox} ${Styles.placeholder} pt-[0.5rem]`} name="" rows={5} id="" placeholder="message,,,"/>
          <NormalBtn text="detail"/>
        </form>
      </div>
    </section>
  );
}