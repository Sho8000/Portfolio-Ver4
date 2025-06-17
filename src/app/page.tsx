import MenuCloseBtn from "./(components)/Btn/CloseBtn";
import MenuBtn from "./(components)/Btn/MenuBtn";

export default function Home() {
  return (
    <>
      <MenuBtn size="Large"/>
      <MenuBtn size="Medium"/>
      <MenuBtn size="Small"/>
      <MenuCloseBtn size="Large"/>
      <MenuCloseBtn size="Medium"/>
      <MenuCloseBtn size="Small"/>
      <section className="bg-pink-500 w-[100%] h-[100vh]">
      </section>
    </>
  );
}
