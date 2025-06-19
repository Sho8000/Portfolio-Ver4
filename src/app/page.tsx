import TitlePage from "./(components)/Home/TitlePage";

export default function Home() {
  return (
    <>
      <TitlePage/>
      <section className="bg-pink-500 w-[100%] h-[100vh]">
        <h1 className="text-8xl">This is Main</h1>
      </section>
    </>
  );
}
