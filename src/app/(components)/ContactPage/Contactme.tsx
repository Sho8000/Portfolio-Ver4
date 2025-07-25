"use client"

import Styles from "./Contactme.module.css";
import NormalBtn from "../Btn/NormalBtn";
import { useLangStore } from "@/store/useLangStore";
import Image from "next/image";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function Contactme() {
  const {data} = useLangStore();
  const contactData = data.contactMe;

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
      toast.error('Please Input All Information');
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
      toast.success("Message sent successfully!");
    } else {
      toast.error('Failed to send message. Please try again.');
    }
    return null;
  }

  return (
    <section className={`w-[100%] min-h-[70vh] flex items-center justify-center bg-[linear-gradient(to_bottom,_rgba(242,242,255,0)_0%,_#f2f2ff_2%,_#f2f2ff_100%)] ${Styles.sectionResponsive}`}>
      <div>
        <div className={`text-center ${Styles.titleContainer}`}>
          <h2 className={`${Styles.mainFont} ${Styles.titleArea}`}>{contactData.title}</h2>
          <p className={`${Styles.subFont}`}>{contactData.subTitle}</p>
        </div>
        <div className={`w-[90%] flex justify-center gap-x-[3rem] gap-y-[1rem] m-auto ${Styles.formContainer}`}>
          <div className={`flex justify-center items-center ${Styles.imageArea}`}>
            <Image
              src={data.landing.myPic}
              alt="Main Image"
              width={1200}
              height={1600}
              className={`w-[80%] h-auto aspect-square object-cover rounded-[50%] border-[4px] border-white`}
            />
          </div>
          <form className={`flex flex-col justify-center ${Styles.formArea}`} onSubmit={formDataSubmit}>
            <div className="flex justify-between">
              <input 
                className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`} 
                type="text" 
                placeholder={contactData.formText[0]}
                value={formData.firstName}
                onChange={(e)=> setformData({ ...formData,firstName:e.target.value})}
                required
              />
              <input 
                className={`w-[45%] ${Styles.inputBox} ${Styles.placeholder}`}
                type="text" 
                placeholder={contactData.formText[1]}
                value={formData.lastName}
                onChange={(e)=> setformData({ ...formData,lastName:e.target.value})}
                required
              />
            </div>
            <input
              className={`${Styles.inputBox} ${Styles.placeholder}`}
              type="email"
              placeholder={contactData.formText[2]}
              value={formData.email}
              onChange={(e)=> setformData({ ...formData,email:e.target.value})}
              required
            />
            <textarea
              className={`${Styles.messageBox} ${Styles.placeholder} pt-[0.5rem]`}
              rows={5}
              placeholder={contactData.formText[3]}
              value={formData.message}
              onChange={(e)=> setformData({ ...formData,message:e.target.value})}
              required
            />
            <NormalBtn text={contactData.formText[4]}/>
          </form>
        </div>
      </div>
    </section>
  );
}