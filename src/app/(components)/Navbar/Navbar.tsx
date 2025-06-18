import LanguageBtn from "../Btn/LanguageBtn";
import MenuBtn from "../Btn/MenuBtn";

interface NavProps {
  pageTitle?:string
}

export default function Navbar({pageTitle}:NavProps) {

  return (
    <nav>
      <h1>{pageTitle}</h1>
      <LanguageBtn/>
      <MenuBtn/>
    </nav>
  );
}