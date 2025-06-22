"use client"
import { useLangStore } from "@/store/useLangStore";
import ProjectCard from "./(components)/Cards/ProjectCard";
import Footer from "./(components)/Footer/Footer";
import IAM from "./(components)/Home/IAmSection/IAmSection";
import TitlePage from "./(components)/Home/TitleSection/TitlePage";

export default function Home() {
  const {data} = useLangStore();
  const projectInfo = data.myProject

  return (
    <>
      <TitlePage/>
      <IAM/>
      <section className="w-[100%] h-[100vh] bg-amber-200">
        <ProjectCard textLeft={true} bgColor="bg-[#f2f2ff]" projectInfo={projectInfo.clientProjects}/>
        <ProjectCard textLeft={false} bgColor="bg-[#fdfdfd]" projectInfo={projectInfo.clientProjects}/>
      </section>
      <Footer/>
    </>
  );
}
