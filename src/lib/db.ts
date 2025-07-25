import { StaticImageData } from "next/image";
import githubImg from "@/../public/FooterImages/github.png"
import emailImg from "@/../public/FooterImages/Email.png"
import linkedInImg from "@/../public/FooterImages/LinkedIn.png"
import instagramImg from "@/../public/FooterImages/instagramLogo.png"
/* Project Images */
import AkifPC from "@/../public/ProjectImages/AkifPC.png"
import AkifPCHover from "@/../public/ProjectImages/AkifPCHover.png"
import AkifPCFull from "@/../public/ProjectImages/AkifPCFull.png"
import AkifPCFullHover from "@/../public/ProjectImages/AkifPCFullHover.png"
import AkifPhone from "@/../public/ProjectImages/AkifPhone.png"
import AkifPhoneHover from "@/../public/ProjectImages/AkifPhoneHover.png"
import HUHPC from "@/../public/ProjectImages/HUHPC.png"
import HUHPCHover from "@/../public/ProjectImages/HUHPCHover.png"
import HUHPCFull from "@/../public/ProjectImages/HUHPCFull.png"
import HUHPCFullHover from "@/../public/ProjectImages/HUHPCFullHover.png"
import HUHPhone from "@/../public/ProjectImages/HUHPhone.png"
import HUHPhoneHover from "@/../public/ProjectImages/HUHPhoneHover.png"
import VanCastroPC from "@/../public/ProjectImages/VanCastroPC.png"
import VanCastroPCHover from "@/../public/ProjectImages/VanCastroPCHover.png"
import VanCastroPCFull from "@/../public/ProjectImages/VanCastroPCFull.png"
import VanCastroPCFullHover from "@/../public/ProjectImages/VanCastroPCFullHover.png"
import VanCastroPhone from "@/../public/ProjectImages/VanCastroPhone.png"
import VanCastroPhoneHover from "@/../public/ProjectImages/VanCastroPhoneHover.png"
import RestaurantPC from "@/../public/ProjectImages/RestaurantPC.png"
import RestaurantPCHover from "@/../public/ProjectImages/RestaurantPCHover.png"
import RestaurantPCFull from "@/../public/ProjectImages/RestaurantPCFull.png"
import RestaurantPCFullHover from "@/../public/ProjectImages/RestaurantPCFullHover.png"
import RestaurantPhone from "@/../public/ProjectImages/RestaurantPhone.png"
import RestaurantPhoneHover from "@/../public/ProjectImages/RestaurantPhoneHover.png"
import LINEPC from "@/../public/ProjectImages/LINEPC.png"
import LINEPCHover from "@/../public/ProjectImages/LINEPCHover.png"
import LINEPCFull from "@/../public/ProjectImages/LINEPCFull.png"
import LINEPCFullHover from "@/../public/ProjectImages/LINEPCFullHover.png"
import LINEPhone from "@/../public/ProjectImages/LINEPhone.png"
import LINEPhoneHover from "@/../public/ProjectImages/LINEPhoneHover.png"
import MyPicture from "@/../public/LandingpageImages/MyPicture.png"
import MainImg from "@/../public/LandingpageImages/MainImg.jpg"
//skills
import ReactImg from "@/../public/About/Skills/React_Logo_90_90.png"
import NextJSImg from "@/../public/About/Skills/NextJS_Logo_90_90.png"
import JQueryImg from "@/../public/About/Skills/JQuery_Logo_90_90.png"
import ReduxImg from "@/../public/About/Skills/Redux_Logo_90_90.png"
import ZustandImg from "@/../public/About/Skills/Zustand_Logo_90_90.png"
import TailwindImg from "@/../public/About/Skills/Tailwind_Logo_90_90.png"
import BootstrapImg from "@/../public/About/Skills/Bootstrap_Logo_90_90.png"
import FramerMotionImg from "@/../public/About/Skills/FramerMotion_Logo_90_90.png"
import GSAPImg from "@/../public/About/Skills/GSAP_Logo_90_90.png"
import RadixImg from "@/../public/About/Skills/RadixUI_Logo_90_90.png"
import NodeJSImg from "@/../public/About/Skills/NodeJS_Logo_90_90.png"
import ExpressImg from "@/../public/About/Skills/Expless_Logo_90_90.png"
import NextAuthImg from "@/../public/About/Skills/NextAuth_Logo_90_90.png"
import PrismaImg from "@/../public/About/Skills/Prisma_Logo_90_90.png"
import MongooseImg from "@/../public/About/Skills/Mongoose_Logo_90_90.png"
import MongoDBImg from "@/../public/About/Skills/MongoDB_Logo_90_90.png"
import PostgreSQLImg from "@/../public/About/Skills/PostgreSQL_Logo_90_90.png"
import AmazonS3Img from "@/../public/About/Skills/AmazonS3_Logo_90_90.png"
import ContentfulCMSImg from "@/../public/About/Skills/CMS_Logo_90_90.png"
import VercelImg from "@/../public/About/Skills/Vercel_Logo_90_90.png"
import NetlifyImg from "@/../public/About/Skills/Netlify_90_90.png"

export interface MainDBEntry {
  language: string;
  menuItems:{
    title:string;
    link:string;
  }[]
  landing: {
    jobTitleUp: string;
    jobTitleDown: string;
    subTitle: string;
    lading_titles: string[];
    mainImage: StaticImageData;
    myPic: StaticImageData;
  };
  aboutMe: {
    myName: string;
    selfIntroduction: string[];
    selfIntroductionStringType: string[];
    aboutTitles: string[];
    skills: {
      skillType: string;
      skillList:{
          skillName:string,
          skillImage:StaticImageData,
        }[];
    }[];
    experiences: {
      experiencesTitle: string;
      contents: string[];
      contentsStringType: string[];
    }[];
    provide: {
      provideTitle: string[];
      titleStringType: string[];
      contents: string;
    }[];
  };
  myProject: {
    filter:{
      filterTitle:string;
      filterContents:string[];
    };
    contentTitles:string[];
    clientProjects:{
      projectTypeName:string;
      projects:{
        projectName:string;
        projectType: string;
        myRole:string;
        technologies: {
          skillName:string,
          skillImage:StaticImageData,
        }[];
        detail:string,
        imagePC:StaticImageData,
        imagePCFull:StaticImageData,
        imagePCHover:StaticImageData,
        imagePCFullHover:StaticImageData,
        imagePhone:StaticImageData,
        imagePhoneHover:StaticImageData,
        url:string,
      }[];
    };
    personalProjects:{
      projectTypeName:string;
      projects:{
        projectName:string;
        projectType: string;
        myRole:string;
        technologies: {
          skillName:string,
          skillImage:StaticImageData,
        }[];
        detail:string,
        imagePC:StaticImageData,
        imagePCFull:StaticImageData,
        imagePCHover:StaticImageData,
        imagePCFullHover:StaticImageData,
        imagePhone:StaticImageData,
        imagePhoneHover:StaticImageData,
        url:string,
      }[];
    };
    buttonText: string;
  };
  contactMe: {
    title: string;
    subTitle: string;
    formText: string[];
  };
  footer:{
    footerText: string;
    footerInfo:{
      footerImges:StaticImageData,
      footerImgNames:string,
      url:string,
    }[],
  }
}

export const MainDBEng:MainDBEntry[] = [
  {
    language:"English",
    menuItems:[
      {
        title:"Home",
        link:"/",
      },
      {
        title:"About Me",
        link:"/aboutme",
      },
      {
        title:"My Projects",
        link:"/myprojects",
      },
      {
        title:"Contact Me",
        link:"/contactme",
      },
    ],
    landing:{
      jobTitleUp:"Full-Stack",
      jobTitleDown:"Developer",
      subTitle:"Web Page/ Web Application",
      lading_titles:["I am,,,","Clients Projects", "Personal Projects"],
      mainImage:MainImg,
      myPic:MyPicture,
    },
    aboutMe:{
      myName:"Sho Yoshimura",
      selfIntroduction:["A", "full-stack developer", "with a strong focus on building fast, scalable web applications. I work mainly with", "React, TypeScript,", "and", "Next.js", "on the front end, and", "Node.js, Express, MongoDB,", "and", "PostgreSQL", "on the back end. I love turning ideas into clean, functional code and always aim for a great user experience."],
      selfIntroductionStringType:["normal","red","normal","bold","normal","bold","normal","bold","normal","bold","normal"],
      aboutTitles:["Skills","Experiences","What I provide,,,"],
      skills:[
        {
          skillType:"Frontend Frameworks & UI Libraries",
          skillList:[
            {
              skillName:"React.js",
              skillImage:ReactImg,
            },
            {
              skillName:"Next.js",
              skillImage:NextJSImg,
            },
            {
              skillName:"JQuery",
              skillImage:JQueryImg,
            },
            {
              skillName:"Redux",
              skillImage:ReduxImg,
            },
            {
              skillName:"Zustand",
              skillImage:ZustandImg,
            },
            {
              skillName:"Tailwind CSS",
              skillImage:TailwindImg,
            },
            {
              skillName:"Bootstrap",
              skillImage:BootstrapImg,
            },
            {
              skillName:"Framer Motion",
              skillImage:FramerMotionImg,
            },
            {
              skillName:"GSAP",
              skillImage:GSAPImg,
            },
            {
              skillName:"Radix UI",
              skillImage:RadixImg,
            },
          ]
        },
        {
          skillType:"Backend & Server Technologies",
          skillList:[
            {
              skillName:"Node.js",
              skillImage:NodeJSImg,
            },
            {
              skillName:"Express",
              skillImage:ExpressImg,
            },
            {
              skillName:"NextAuth(authentication on server-side)",
              skillImage:NextAuthImg,
            },
            {
              skillName:"Prisma",
              skillImage:PrismaImg,
            },
            {
              skillName:"mongoose",
              skillImage:MongooseImg,
            },
          ]
        },
        {
          skillType:"Databases & Data Storage",
          skillList:[
            {
              skillName:"MongoDB",
              skillImage:MongoDBImg,
            },
            {
              skillName:"PostgreSQL",
              skillImage:PostgreSQLImg,
            },
            {
              skillName:"AmazonS3",
              skillImage:AmazonS3Img,
            },
          ]
        },
        {
          skillType:"Deployment, CMS & Services",
          skillList:[
            {
              skillName:"Contentful CMS",
              skillImage:ContentfulCMSImg,
            },
            {
              skillName:"Vercel",
              skillImage:VercelImg,
            },
            {
              skillName:"Netlify",
              skillImage:NetlifyImg,
            },
          ]
        },
      ],
      experiences:[
        {
          experiencesTitle:"Web Developer",
          contents:["I built websites and web applications for my clients. You can see all of my big projects in", "My Projects", "page."],
          contentsStringType:["normal", "link", "normal"],
        },
        {
          experiencesTitle:"Production/ Service Engineering",
          contents:["I was working a production/service engineer in a semiconductor company for in total 13 years. I was usually improving factory process and changing systems, arrangement, and so on. For example, I have knowledge of", "stock management, quality control, automatize repeated works that using PC,,,", "so I can create systems deeper and tailored applications."],
          contentsStringType:["normal", "bold", "normal"],
        },
      ],
      provide:[
        {
          provideTitle:["Website to", "contribute your profit"],
          titleStringType:["normal", "red"],
          contents:"I provide the websites that simple, but easy to understand. I focus on ”What you are doing”. Let's talk a lot to create the best website together!!"
        },
        {
          provideTitle:["Application to", "save your time"],
          titleStringType:["normal", "red"],
          contents:"Taking advantage of my experiences,I'll provide not only just website, but also applications that help your job. If you are feeling troublesome, let's solve it together!"
        },
      ]
    },
    myProject:{
      filter:{
        filterTitle:"Filter",
        filterContents:["all pojects","client projects", "personal projects"],
      },
      contentTitles:["My Role","Teck-Stack","Explain"],
      clientProjects:{
        projectTypeName:"Client Projects",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"Booking management system",
            myRole:"Full-Stack Engineer",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Redux",
                skillImage:ReduxImg,
              },
              {
                skillName:"Zustand",
                skillImage:ZustandImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"Radix UI",
                skillImage:RadixImg,
              },
              {
                skillName:"NextAuth",
                skillImage:NextAuthImg,
              },
              {
                skillName:"Prisma",
                skillImage:PrismaImg,
              },
              {
                skillName:"MongoDB",
                skillImage:MongoDBImg,
              },
              {
                skillName:"Contentful CMS",
                skillImage:ContentfulCMSImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"This is a group project to make a efficient booking system for driving school. I built all carousels, reusable components for functional buttons, contentful CMS and authentication and password fix system(invisible). Unfortunately, I can't show the authentication page and booking details because those functions are for our client.",
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
            imagePhoneHover:VanCastroPhoneHover,
            url:"https://final-project-van-castro.vercel.app/",
          },
          {
            projectName:"HUH",
            projectType:"Shopify",
            myRole:"Frontend Engineer",
            technologies:[
              {
                skillName:"React.js",
                skillImage:ReactImg,
              },
              {
                skillName:"Redux",
                skillImage:ReduxImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
            ],
            detail:"My supervisor provided me with a valuable opportunity to develop a React project. As part of the project, I designed and implemented the initial landing animation, footer, dynamic navigation bar, and production pages (/desiretofly and /notforyou). One of the more challenging parts was building the dynamic navigation bar, but I successfully built it by using Redux in and the IntersectionObserver API.",
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
            imagePhoneHover:HUHPhoneHover,
            url:"https://pern-alpha.vercel.app/",
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"Business introduction",
            myRole:"Frontend Engineer",
            technologies:[
              {
                skillName:"JQuery",
                skillImage:JQueryImg,
              },
              {
                skillName:"GSAP",
                skillImage:GSAPImg,
              },  
              {
                skillName:"Netlify",
                skillImage:NetlifyImg,
              },
            ],
            detail:"This is my first client's website. I created this website based on my designer's Mockup. I used OOP for it and GSAP for the animation. My client was very satisfied with my work.",
            imagePC:AkifPC,
            imagePCFull:AkifPCFull,
            imagePCHover:AkifPCHover,
            imagePCFullHover:AkifPCFullHover,
            imagePhone:AkifPhone,
            imagePhoneHover:AkifPhoneHover,
            url:"https://akifairway-englishsite.netlify.app/",
          },
        ],  
      },
      personalProjects:{
        projectTypeName:"Personal Projects",
        projects:[
          {
            projectName:"Create Next App",
            projectType:"Restaurant menu & Order",
            myRole:"Full-Stack Engineer",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Zustand",
                skillImage:ZustandImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"Framer Motion",
                skillImage:FramerMotionImg,
              },
              {
                skillName:"NextAuth",
                skillImage:NextAuthImg,
              },
              {
                skillName:"Prisma",
                skillImage:PrismaImg,
              },
              {
                skillName:"MongoDB",
                skillImage:MongoDBImg,
              },
              {
                skillName:"Contentful CMS",
                skillImage:ContentfulCMSImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"I developed this project to show my skills to potential clients. And this would become a model case of full stack web applications for Shopify and restaurant website. This application was built using Next.js. During deployment, I faced several challenges, including TypeScript errors and issues connecting to the database. Working through these problems, I learned how to troubleshoot and resolve such issues. This is one of the biggest outcome for me.",
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
            imagePhoneHover:RestaurantPhoneHover,
            url:"https://sample-restaurant-tau.vercel.app/",
          },
          {
            projectName:"Line Clone",
            projectType:"Products introduction",
            myRole:"Frontend Engineer",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"GSAP",
                skillImage:GSAPImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"This is a Group project, and I created the Hero section, all animation and responsive. This is from a school project. It was a good practise to manage the team tasks.",
            imagePC:LINEPC,
            imagePCFull:LINEPCFull,
            imagePCHover:LINEPCHover,
            imagePCFullHover:LINEPCFullHover,
            imagePhone:LINEPhone,
            imagePhoneHover:LINEPhoneHover,
            url:"https://line-clone.vercel.app/",
          },  
        ]
      },
      buttonText:"Detail",
    },
    contactMe:{
      title:"Let's start conversation",
      subTitle:"Ask how I can help you",
      formText:["First Name", "Last Name", "Email", "Message,,,", "Send"],
    },
    footer:{
      footerText:"Contact Me",
      footerInfo:[
        {
          footerImges:instagramImg,
          footerImgNames:"instagram",
          url:"https://www.instagram.com/yoshi_kun_8000?igsh=MWMxOXhiaW1kdzZjdQ==",
        },
        {
          footerImges:linkedInImg,
          footerImgNames:"linkedIn",
          url:"https://www.linkedin.com/in/sho-yoshimura-885001261/",
        },
        {
          footerImges:githubImg,
          footerImgNames:"github",
          url:"https://github.com/Sho8000",
        },
        {
          footerImges:emailImg,
          footerImgNames:"email",
          url:"mailto:sho.website.appbuilder@gmail.com",
        },
      ]
    }
  }
]

export const MainDBJpn:MainDBEntry[] = [
  {
    language:"Japanese",
    menuItems:[
      {
        title:"ホーム",
        link:"/",
      },
      {
        title:"自己紹介",
        link:"/aboutme",
      },
      {
        title:"プロジェクト",
        link:"/myprojects",
      },
      {
        title:"問い合わせ",
        link:"/contactme",
      },
    ],
    landing:{
      jobTitleUp:"フルスタック",
      jobTitleDown:"エンジニア",
      subTitle:"Webページ作成/ Webアプリケーション作成",
      lading_titles:["I am,,,","Clients Projects", "Personal Projects"],
      mainImage:MainImg,
      myPic:MyPicture,
    },
    aboutMe:{
      myName:"Sho Yoshimura",
      selfIntroduction:["高速でスケーラブルなWebアプリケーションの構築に注力する", "フルスタック開発者", "です。フロントエンドでは主に", "React、TypeScript、Next.js", "を使用し、バックエンドでは", "Node.js、Express、MongoDB、PostgreSQL", "を扱えます。アイデアをクリーンで機能的なコードへと変えることが好きで、常に優れたユーザー体験を目指しています。"],
      selfIntroductionStringType:["normal","red","normal","bold","normal","bold","normal"],
      aboutTitles:["スキル","経験","ご提案"],
      skills:[
        {
          skillType:"フロントエンドツール",
          skillList:[
            {
              skillName:"React.js",
              skillImage:ReactImg,
            },
            {
              skillName:"Next.js",
              skillImage:NextJSImg,
            },
            {
              skillName:"JQuery",
              skillImage:JQueryImg,
            },
            {
              skillName:"Redux",
              skillImage:ReduxImg,
            },
            {
              skillName:"Zustand",
              skillImage:ZustandImg,
            },
            {
              skillName:"Tailwind CSS",
              skillImage:TailwindImg,
            },
            {
              skillName:"Bootstrap",
              skillImage:BootstrapImg,
            },
            {
              skillName:"Framer Motion",
              skillImage:FramerMotionImg,
            },
            {
              skillName:"GSAP",
              skillImage:GSAPImg,
            },
            {
              skillName:"Radix UI",
              skillImage:RadixImg,
            },
          ]
        },
        {
          skillType:"バックエンド/サーバーツール",
          skillList:[
            {
              skillName:"Node.js",
              skillImage:NodeJSImg,
            },
            {
              skillName:"Express",
              skillImage:ExpressImg,
            },
            {
              skillName:"NextAuth(authentication on server-side)",
              skillImage:NextAuthImg,
            },
            {
              skillName:"Prisma",
              skillImage:PrismaImg,
            },
            {
              skillName:"mongoose",
              skillImage:MongooseImg,
            },
          ]
        },
        {
          skillType:"データベース",
          skillList:[
            {
              skillName:"MongoDB",
              skillImage:MongoDBImg,
            },
            {
              skillName:"PostgreSQL",
              skillImage:PostgreSQLImg,
            },
            {
              skillName:"AmazonS3",
              skillImage:AmazonS3Img,
            },
          ]
        },
        {
          skillType:"公開/CMS・サービス",
          skillList:[
            {
              skillName:"Contentful CMS",
              skillImage:ContentfulCMSImg,
            },
            {
              skillName:"Vercel",
              skillImage:VercelImg,
            },
            {
              skillName:"Netlify",
              skillImage:NetlifyImg,
            },
          ]
        },
      ],
      experiences:[
        {
          experiencesTitle:"フルスタックエンジニア",
          contents:["フルスタックエンジニアとして、顧客用のウェブサイトやアプリケーションを作成し続けています。私のプロジェクトは、", "プロジェクト", "にて詳細/閲覧可能です。"],
          contentsStringType:["normal", "link", "normal"],
        },
        {
          experiencesTitle:"生産/サービスエンジニア",
          contents:["半導体企業の生産/サービスエンジニアとして13年働いていました。主に工程改善やシステム改善・調整などに携わっていたため、", "在庫管理、品質管理、単純業務の自動化(PC作業)", "などといった悩み事改善システム等もご提案できると考えています。"],
          contentsStringType:["normal", "bold", "normal"],
        },
      ],
      provide:[
        {
          provideTitle:["ウェブサイトで", "利益貢献"],
          titleStringType:["normal", "red"],
          contents:"常に「ウェブサイトを持つ目的は何か」ということに注目し、シンプルで、且つ顧客にも分かりやすい、目的に沿ったウェブサイトを提供します。最高のウェブサイト作成するために、先ずは話し合いませんか？"
        },
        {
          provideTitle:["ウェブアプリで", "時間節約"],
          titleStringType:["normal", "red"],
          contents:"私の経験を生かし、ウェブサイト作成だけでなく、業務効率を改善できるアプリケーション開発も承ります。あなたの「面倒くさい」を一緒に解消しませんか？"
        },
      ]
    },
    myProject:{
      filter:{
        filterTitle:"フィルター",
        filterContents:["全ての案件","顧客案件", "個人プロジェクト"],
      },
      contentTitles:["役割","テクノロジー","説明"],
      clientProjects:{
        projectTypeName:"顧客案件",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"予約管理システム",
            myRole:"フルスタック・エンジニア",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Redux",
                skillImage:ReduxImg,
              },
              {
                skillName:"Zustand",
                skillImage:ZustandImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"Radix UI",
                skillImage:RadixImg,
              },
              {
                skillName:"NextAuth",
                skillImage:NextAuthImg,
              },
              {
                skillName:"Prisma",
                skillImage:PrismaImg,
              },
              {
                skillName:"MongoDB",
                skillImage:MongoDBImg,
              },
              {
                skillName:"Contentful CMS",
                skillImage:ContentfulCMSImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"これは、自動車教習所向けの効率的な予約システムを構築するグループプロジェクトです。私は、すべてのカルーセル、機能ボタン用の再利用可能なコンポーネント、コンテントフルCMS、そして認証とパスワード修正システム（非表示）を構築しました。残念ながら、認証ページと予約詳細はクライアント向けの機能のため、公開できません。",
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
            imagePhoneHover:VanCastroPhoneHover,
            url:"https://final-project-van-castro.vercel.app/",
          },
          {
            projectName:"HUH",
            projectType:"ネットショップ",
            myRole:"フロントエンド・エンジニア",
            technologies:[
              {
                skillName:"React.js",
                skillImage:ReactImg,
              },
              {
                skillName:"Redux",
                skillImage:ReduxImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
            ],
            detail:"師匠から貴重な機会をいただき、Reactプロジェクトの開発を担当しました。プロジェクトでは、ランディングページのアニメーション、フッター、動的ナビゲーションバー、そして /desiretofly および /notforyou のプロダクションページの設計と実装を行いました。中でも特に難しかったのは動的ナビゲーションバーの構築でしたが、ReduxとIntersectionObserver APIを活用することで、無事に実装することができました。",
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
            imagePhoneHover:HUHPhoneHover,
            url:"https://pern-alpha.vercel.app/",
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"ビジネス紹介",
            myRole:"フロントエンド・エンジニア",
            technologies:[
              {
                skillName:"JQuery",
                skillImage:JQueryImg,
              },
              {
                skillName:"GSAP",
                skillImage:GSAPImg,
              },  
              {
                skillName:"Netlify",
                skillImage:NetlifyImg,
              },
            ],
            detail:"私の初めての顧客のWebsiteです。私の友人にデザインをお願いし、そのデザインを元にWebPageの作成を行いました。こちらのWebsiteは、ReactやNextJSではなく、OOPを使用して作成しています。アニメーションにはGSAPを使用しました。本Websiteの仕上がりに、お客様も大変喜んでおられました。",
            imagePC:AkifPC,
            imagePCFull:AkifPCFull,
            imagePCHover:AkifPCHover,
            imagePCFullHover:AkifPCFullHover,
            imagePhone:AkifPhone,
            imagePhoneHover:AkifPhoneHover,
            url:"https://akifairway-englishsite.netlify.app/",
          },
        ],  
      },
      personalProjects:{
        projectTypeName:"個人プロジェクト",
        projects:[
          {
            projectName:"Create Next App",
            projectType:"レストランメニュー＆注文",
            myRole:"フルスタック・エンジニア",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Zustand",
                skillImage:ZustandImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"Framer Motion",
                skillImage:FramerMotionImg,
              },
              {
                skillName:"NextAuth",
                skillImage:NextAuthImg,
              },
              {
                skillName:"Prisma",
                skillImage:PrismaImg,
              },
              {
                skillName:"MongoDB",
                skillImage:MongoDBImg,
              },
              {
                skillName:"Contentful CMS",
                skillImage:ContentfulCMSImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"このプロジェクトは、自分のスキルをクライアントに示すことを目的として開発しました。Shopifyやレストランのウェブサイトのような特定の用途に対応したモデルケースとなります。このアプリケーションはNext.jsを用いて構築されています。Deployの過程では、TypeScriptのエラーやデータベース接続の問題など、いくつかの課題に直面しましたが、このトラブルを通じて、トラブルシューティングや問題解決のスキルを実践的に身につけることができました。",
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
            imagePhoneHover:RestaurantPhoneHover,
            url:"https://sample-restaurant-tau.vercel.app/",
          },
          {
            projectName:"Lineサイトコピー",
            projectType:"製品紹介",

            myRole:"フロントエンド・エンジニア",
            technologies:[
              {
                skillName:"Next.js",
                skillImage:NextJSImg,
              },
              {
                skillName:"Tailwind CSS",
                skillImage:TailwindImg,
              },
              {
                skillName:"GSAP",
                skillImage:GSAPImg,
              },
              {
                skillName:"Vercel",
                skillImage:VercelImg,
              },
            ],
            detail:"グループプロジェクトとして、このページを作成しました。このプロジェクトでは、Heroセクション、全アニメーションとレスポンシブを担当しました。このプロジェクトは学校のプロジェクトですが、チームタスク管理を含めた実戦経験を積むことができました。",
            imagePC:LINEPC,
            imagePCFull:LINEPCFull,
            imagePCHover:LINEPCHover,
            imagePCFullHover:LINEPCFullHover,
            imagePhone:LINEPhone,
            imagePhoneHover:LINEPhoneHover,
            url:"https://line-clone.vercel.app/",
          },  
        ]
      },
      buttonText:"詳細",
    },
    contactMe:{
      title:"お気軽にご相談を",
      subTitle:"お力になれることがあれば教えてください。",
      formText:["姓", "名", "メール", "メッセージ,,,", "送信"],
    },
    footer:{
      footerText:"問い合わせ",
      footerInfo:[
        {
          footerImges:instagramImg,
          footerImgNames:"instagram",
          url:"https://www.instagram.com/yoshi_kun_8000?igsh=MWMxOXhiaW1kdzZjdQ==",
        },
        {
          footerImges:linkedInImg,
          footerImgNames:"linkedIn",
          url:"https://www.linkedin.com/in/sho-yoshimura-885001261/",
        },
        {
          footerImges:githubImg,
          footerImgNames:"github",
          url:"https://github.com/Sho8000",
        },
        {
          footerImges:emailImg,
          footerImgNames:"email",
          url:"mailto:sho.website.appbuilder@gmail.com",
        },
      ]
    }
  }
]
