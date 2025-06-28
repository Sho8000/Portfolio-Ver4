import IAM from "./(components)/Home/IAmSection/IAmSection";
import TitlePage from "./(components)/Home/TitleSection/TitlePage";
import ProjectsSection from "./(components)/Home/Projects/ProjectsSection";

export default function Home() {

  return (
    <>
      <TitlePage/>
      <IAM/>
      
      <ProjectsSection type="client" bgColor="bg-[#fdfdfd]" textLeft={true}/>
      <ProjectsSection type="personal" bgColor="bg-[#f2f2ff]" textLeft={false}/>
    </>
  );
}
