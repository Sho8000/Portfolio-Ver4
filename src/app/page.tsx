import MenuCloseBtn from "./(components)/Btn/CloseBtn";
import LanguageBtn from "./(components)/Btn/LanguageBtn";
import MenuBtn from "./(components)/Btn/MenuBtn";

export default function Home() {
  return (
    <>
      <MenuBtn/>
      <MenuCloseBtn/>
      <LanguageBtn/>
      <section className="bg-pink-500 w-[100%] h-[100vh]">
      </section>
    </>
  );
}
