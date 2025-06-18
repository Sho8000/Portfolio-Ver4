import MenuCloseBtn from "./(components)/Btn/CloseBtn";
import LanguageBtn from "./(components)/Btn/LanguageBtn";
import MenuBtn from "./(components)/Btn/MenuBtn";
//import Menu from "./(components)/Menu/Menu";

export default function Home() {
  return (
    <>
      <MenuBtn/>
      <MenuCloseBtn/>
      <LanguageBtn/>
      <section className="bg-pink-500 w-[100%] h-[100vh]">
        <h1 className="text-8xl">This is Main</h1>
      </section>
{/*       <Menu/> */}
    </>
  );
}
