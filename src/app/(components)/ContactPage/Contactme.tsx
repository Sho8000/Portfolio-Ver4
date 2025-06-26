"use client"

import NormalBtn from "../Btn/NormalBtn";

//import { useLangStore } from "@/store/useLangStore";

export default function Contactme() {
//  const {data} = useLangStore();
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

};
  return (
    <section className="w-[100%] h-[100vh] bg-[#f2f2ff]">
      <h1>Let&apos;s Start Conversation</h1>
      <p>Ask how I can help you</p>
      <div>
        <h1>area Image</h1>
        <h1>area form</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">send</button>
        </form>
        <NormalBtn text="detail"/>
      </div>
    </section>
  );
}