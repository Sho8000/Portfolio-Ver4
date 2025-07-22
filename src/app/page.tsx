import IAM from "./(components)/Home/IAmSection/IAmSection";
import TitlePage from "./(components)/Home/TitleSection/TitlePage";
import ProjectsSection from "./(components)/Home/Projects/ProjectsSection";
import Detail from "./(components)/Detail/Detail";

export default function Home() {

  return (
    <>
      <main className="overflow-hidden">
        <TitlePage/>
        <IAM/>
        
        <ProjectsSection type="client" bgColor="bg-[#fdfdfd]" textLeft={true}/>
        <ProjectsSection type="personal" bgColor="bg-[#f2f2ff]" textLeft={false}/>
      </main>
    </>
  );
}
