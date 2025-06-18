import MenuCloseBtn from "../Btn/CloseBtn";

export default function Menu() {

  return (
    <div className="fixed z-40 w-[100%] h-[100vh] top-0 left-0 bg-[#f2f2ff]/60 backdrop-blur-[7px]">
      <div className="fixed flex z-50 justify-end w-[90%] mt-[1rem] left-[50%] translate-x-[-50%]">
        <MenuCloseBtn/>
      </div>
      <div className="absolute z-40 w-full h-full max-w-[660px] max-h-[840px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#2E3A59]/80">

      </div>
    </div>
  );
}