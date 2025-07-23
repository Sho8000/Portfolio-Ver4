import { StaticImageData } from "next/image";
import githubImg from "@/../public/FooterImages/github.png"
import emailImg from "@/../public/FooterImages/Email.png"
import linkedInImg from "@/../public/FooterImages/LinkedIn.png"
import instagramImg from "@/../public/FooterImages/instagramLogo.png"
import AkifPC from "@/../public/ProjectImages/AkifPC.png"
import AkifPCHover from "@/../public/ProjectImages/AkifPCHover.png"
import AkifPCFull from "@/../public/ProjectImages/AkifPCFull.png"
import AkifPCFullHover from "@/../public/ProjectImages/AkifPCFullHover.png"
import AkifPhone from "@/../public/ProjectImages/AkifPhone.png"
import HUHPC from "@/../public/ProjectImages/HUHPC.png"
import HUHPCHover from "@/../public/ProjectImages/HUHPCHover.png"
import HUHPCFull from "@/../public/ProjectImages/HUHPCFull.png"
import HUHPCFullHover from "@/../public/ProjectImages/HUHPCFullHover.png"
import HUHPhone from "@/../public/ProjectImages/HUHPhone.png"
import VanCastroPC from "@/../public/ProjectImages/VanCastroPC.png"
import VanCastroPCHover from "@/../public/ProjectImages/VanCastroPCHover.png"
import VanCastroPCFull from "@/../public/ProjectImages/VanCastroPCFull.png"
import VanCastroPCFullHover from "@/../public/ProjectImages/VanCastroPCFullHover.png"
import VanCastroPhone from "@/../public/ProjectImages/VanCastroPhone.png"
import RestaurantPC from "@/../public/ProjectImages/RestaurantPC.png"
import RestaurantPCHover from "@/../public/ProjectImages/RestaurantPCHover.png"
import RestaurantPCFull from "@/../public/ProjectImages/RestaurantPCFull.png"
import RestaurantPCFullHover from "@/../public/ProjectImages/RestaurantPCFullHover.png"
import RestaurantPhone from "@/../public/ProjectImages/RestaurantPhone.png"
import LINEPC from "@/../public/ProjectImages/LINEPC.png"
import LINEPCHover from "@/../public/ProjectImages/LINEPCHover.png"
import LINEPCFull from "@/../public/ProjectImages/LINEPCFull.png"
import LINEPCFullHover from "@/../public/ProjectImages/LINEPCFullHover.png"
import LINEPhone from "@/../public/ProjectImages/LINEPhone.png"
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
        technologies: string[];
        imagePC:StaticImageData,
        imagePCFull:StaticImageData,
        imagePCHover:StaticImageData,
        imagePCFullHover:StaticImageData,
        imagePhone:StaticImageData,
  }[];
    };
    personalProjects:{
      projectTypeName:string;
      projects:{
        projectName:string;
        projectType: string;
        myRole:string;
        technologies: string[];
        imagePC:StaticImageData,
        imagePCFull:StaticImageData,
        imagePCHover:StaticImageData,
        imagePCFullHover:StaticImageData,
        imagePhone:StaticImageData,
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
          contents:["I was working a production/service engineer for in total 13 years. I was usually improving factory process and changing systems, arrangement, and so on. For example, I have knowledge of", "stock management, quality control, automatize repeated works that using PC,,,", "so I can create systems deeper and tailored applications."],
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
          contents:"aking advantage of  my experiences,I'll provide not only just website, but also applications that help your job. I'm always thinking about efficiency!!"
        },
      ]
    },
    myProject:{
      filter:{
        filterTitle:"Filter",
        filterContents:["all pojects","client projects", "personal projects"],
      },
      contentTitles:["My Role","Teck-Stack"],
      clientProjects:{
        projectTypeName:"Client Projects",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"Booking management system",
            myRole:"Full-Stack Engineer",
            technologies:["Next.js","Redux","Zustand","Tailwind CSS","Radix UI","NextAuth","Prisma","MongoDB","Contentful CMS","Vercel"],
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
          },
          {
            projectName:"HUH",
            projectType:"Shopify",
            myRole:"Frontend Engineer",
            technologies:["React.js","Redux","Tailwind CSS"],
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"Business introduction",
            myRole:"Frontend Engineer",
            technologies:["JQuery","GSAP","Netlify"],
            imagePC:AkifPC,
            imagePCFull:AkifPCFull,
            imagePCHover:AkifPCHover,
            imagePCFullHover:AkifPCFullHover,
            imagePhone:AkifPhone,
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
            technologies:["Next.js","Zustand","Tailwind CSS","Framer Motion","NextAuth","Prisma","MongoDB","Contentful CMS","Vercel"],
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
          },
          {
            projectName:"Line Clone",
            projectType:"Products introduction",
            myRole:"Frontend Engineer",
            technologies:["Next.js","Tailwind CSS","GSAP","Vercel"],
            imagePC:LINEPC,
            imagePCFull:LINEPCFull,
            imagePCHover:LINEPCHover,
            imagePCFullHover:LINEPCFullHover,
            imagePhone:LINEPhone,
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
      aboutTitles:["スキル","経験","What I provide,,,"],
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
          contents:["I was working a production/service engineer for in total 13 years. I was usually improving factory process and changing systems, arrangement, and so on. For example, I have knowledge of", "stock management, quality control, automatize repeated works that using PC,,,", "so I can create systems deeper and tailored applications."],
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
          contents:"aking advantage of  my experiences,I'll provide not only just website, but also applications that help your job. I'm always thinking about efficiency!!"
        },
      ]
    },
    myProject:{
      filter:{
        filterTitle:"フィルター",
        filterContents:["全ての案件","顧客案件", "個人プロジェクト"],
      },
      contentTitles:["役割","テクノロジー"],
      clientProjects:{
        projectTypeName:"顧客案件",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"予約管理システム",
            myRole:"フルスタック・エンジニア",
            technologies:["Next.js","Redux","Zustand","Tailwind CSS","Radix UI","NextAuth","Prisma","MongoDB","Contentful CMS","Vercel"],
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
          },
          {
            projectName:"HUH",
            projectType:"ネットショップ",
            myRole:"フロントエンド・エンジニア",
            technologies:["React.js","Redux","Tailwind CSS"],
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"ビジネス紹介",
            myRole:"フロントエンド・エンジニア",
            technologies:["JQuery","GSAP","Netlify"],
            imagePC:AkifPC,
            imagePCFull:AkifPCFull,
            imagePCHover:AkifPCHover,
            imagePCFullHover:AkifPCFullHover,
            imagePhone:AkifPhone,
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
            technologies:["Next.js","Zustand","Tailwind CSS","Framer Motion","NextAuth","Prisma","MongoDB","Contentful CMS","Vercel"],
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
          },
          {
            projectName:"Lineサイトコピー",
            projectType:"製品紹介",

            myRole:"フロントエンド・エンジニア",
            technologies:["Next.js","Tailwind CSS","GSAP","Vercel"],
            imagePC:LINEPC,
            imagePCFull:LINEPCFull,
            imagePCHover:LINEPCHover,
            imagePCFullHover:LINEPCFullHover,
            imagePhone:LINEPhone,
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
