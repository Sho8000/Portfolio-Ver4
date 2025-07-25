"use client"
import { useLangStore } from "@/store/useLangStore";
import Image from "next/image";
import Styles from "./Footer.module.css"
import { usePathname } from "next/navigation";
import { upDownAnimation } from "@/lib/upDownAnimation";
import { useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const pathName = usePathname();
  const {data} = useLangStore();
  const footer = data.footer;

    useEffect(() => {
      upDownAnimation(".floatAnimationFT");
    }, [pathName]);
  
  const openLink = (url:string) => {
    window.location.href = url
  }

  return (
    <>
      {pathName!=="/contactme" &&
        <footer className={`relative w-[100%] ${Styles.footerSize} overflow-hidden`}>
          <div className={`absolute z-10 w-[100%] ${Styles.titleFont} top-[50%] translate-y-[-50%]`}>
            <Link href={"/contactme"}>
              <h1 className={`text-white text-center mb-[1rem]`}>{footer.footerText}</h1>
            </Link>
            <div className="flex justify-center gap-[2rem]">
              { footer.footerInfo.map((item,index)=>{
                return <Image
                  key={index}
                  className={`${Styles.iconStyle} floatAnimationFT`}
                  onClick={()=>{openLink(item.url)}}
                  src={item.footerImges}
                  alt={item.footerImgNames}
                  width={100}
                  height={100}
                  priority
                />
                })
              }
            </div>
          </div>
          <div className={`absolute ${Styles.bg} bg-[#2E3A59] rounded-[50%] top-0 left-[50%] translate-x-[-50%]`}></div>  
        </footer>
      }
      {pathName==="/contactme" &&
        <footer className={`relative w-[100%] ${Styles.footerSize} bg-[#f2f2ff] overflow-hidden`}>
          <div className="w-[90%] h-[100%] m-auto border-t-2 border-gray-600">
            <div className={`absolute z-10 w-[90%] ${Styles.titleFont} top-[50%] translate-y-[-50%]`}>
              <div className="flex justify-center gap-[2rem]">
                { footer.footerInfo.map((item,index)=>{
                  return <Image
                      key={index}
                      className={`${Styles.iconStyleForContact} floatAnimationFT`}
                      onClick={()=>{openLink(item.url)}}
                      src={item.footerImges}
                      alt={item.footerImgNames}
                      width={100}
                      height={100}
                      priority
                    />
                  })
                }
              </div>
            </div>
          </div>
        </footer>
      }
    </>
  );
}