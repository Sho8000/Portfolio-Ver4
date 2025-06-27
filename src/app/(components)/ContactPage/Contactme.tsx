"use client"

import Styles from "./Contactme.module.css";
import NormalBtn from "../Btn/NormalBtn";

import { useLangStore } from "@/store/useLangStore";
import Image from "next/image";
import { useState } from "react";

export default function Contactme() {
  const {data} = useLangStore();
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    message:"",
  });

  const formDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    /*if no data then quit submitting */
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.message){
      alert("Please Input Information")
      return null;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName:formData.firstName, lastName:formData.lastName, email:formData.email, message:formData.message }),
    });

    if(response.ok) {
      setformData({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
      })
    } else {
      alert("couldn't send your message,,,")
    }
    return null;
  }

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
        <form className="w-[40%] flex flex-col justify-center gap-[2rem]" onSubmit={formDataSubmit}>
          <div className="flex justify-between">
            <input 
              className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`} 
              type="text" 
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e)=> setformData({ ...formData,firstName:e.target.value})}
              required
            />
            <input 
              className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`}
              type="text" 
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e)=> setformData({ ...formData,lastName:e.target.value})}
              required
            />
          </div>
          <input
            className={`${Styles.inputBox} ${Styles.placeholder}`}
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e)=> setformData({ ...formData,email:e.target.value})}
            required
          />
          <textarea
            className={`${Styles.messageBox} ${Styles.placeholder} pt-[0.5rem]`}
            rows={5}
            placeholder="message,,,"
            value={formData.message}
            onChange={(e)=> setformData({ ...formData,message:e.target.value})}
            required
          />
          <NormalBtn text="detail"/>
        </form>
      </div>
    </section>
  );
}