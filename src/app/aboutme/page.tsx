"use client"
import { usePathname } from "next/navigation";

export default function AboutMe() {
  return (
    <>
      <section className="bg-pink-500 w-[100%] h-[100vh]">
        <h1>This is {usePathname()}</h1>
      </section>
    </>
  );
}
