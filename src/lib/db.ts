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
      skillName: string[];
      skillImage: string[];
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
    clientProjects:{
      projectTypeName:string;
      projects:{
        projectName:string;
        projectType: string;
        technologies: string;
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
        technologies: string;
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
      myName:"Sho Yoshimra",
      selfIntroduction:["A", "full-stack developer", "with a strong focus on building fast, scalable web applications. I work mainly with", "React, TypeScript,", "and", "Next.js", "on the front end, and", "Node.js, Express, MongoDB,", "and", "PostgreSQL", "on the back end. I love turning ideas into clean, functional code and always aim for a great user experience."],
      selfIntroductionStringType:["normal","red","normal","bold","normal","bold","normal","bold","normal","bold","normal"],
      aboutTitles:["Skills","Experiences","What I provide,,,"],
      skills:[
        {
          skillType:"Frontend Frameworks & UI Libraries",
          skillName:["React.js","Next.js","Redux","Zustand","Tailwind CSS","Bootstrap","Framer Motion","GSAP","Radix UI"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Backend & Server Technologies",
          skillName:["Node.js","Express","NextAuth(authentication on server-side)","Prisma","mongoose"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Databases & Data Storage",
          skillName:["MongoDB","PostgreSQL","Amazon S3"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Deployment, CMS & Services",
          skillName:["Contentful CMS", "Vercel","Netlify"],
          skillImage:["changeToImg","changeToImg"],
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
      clientProjects:{
        projectTypeName:"Client Projects",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"Booking management system",
            technologies:"something,,,",
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
          },
          {
            projectName:"HUH",
            projectType:"Shopify",
            technologies:"something,,,",
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"Business introduction",
            technologies:"something,,,",
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
            technologies:"something,,,",
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
          },
          {
            projectName:"Line Clone",
            projectType:"Products introduction",
            technologies:"something,,,",
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
      myName:"Sho Yoshimra",
      selfIntroduction:["A", "full-stack developer", "with a strong focus on building fast, scalable web applications. I work mainly with", "React, TypeScript,", "and", "Next.js", "on the front end, and", "Node.js, Express, MongoDB,", "and", "PostgreSQL", "on the back end. I love turning ideas into clean, functional code and always aim for a great user experience."],
      selfIntroductionStringType:["normal","red","normal","bold","normal","bold","normal","bold","normal","bold","normal"],
      aboutTitles:["Skills","Experiences","What I provide,,,"],
      skills:[
        {
          skillType:"Frontend Frameworks & UI Libraries",
          skillName:["React.js","Next.js","Redux","Zustand","Tailwind CSS","Bootstrap","Framer Motion","GSAP","Radix UI"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Backend & Server Technologies",
          skillName:["Node.js","Express","NextAuth(authentication on server-side)","Prisma","mongoose"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Databases & Data Storage",
          skillName:["MongoDB","PostgreSQL","Amazon S3"],
          skillImage:["changeToImg","changeToImg"],
        },
        {
          skillType:"Deployment, CMS & Services",
          skillName:["Contentful CMS", "Vercel","Netlify"],
          skillImage:["changeToImg","changeToImg"],
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
      clientProjects:{
        projectTypeName:"顧客案件",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"予約管理システム",
            technologies:"something,,,",
            imagePC:VanCastroPC,
            imagePCFull:VanCastroPCFull,
            imagePCHover:VanCastroPCHover,
            imagePCFullHover:VanCastroPCFullHover,
            imagePhone:VanCastroPhone,
          },
          {
            projectName:"HUH",
            projectType:"ネットショップ",
            technologies:"something,,,",
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:HUHPCFullHover,
            imagePhone:HUHPhone,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"ビジネス紹介",
            technologies:"something,,,",
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
            technologies:"something,,,",
            imagePC:RestaurantPC,
            imagePCFull:RestaurantPCFull,
            imagePCHover:RestaurantPCHover,
            imagePCFullHover:RestaurantPCFullHover,
            imagePhone:RestaurantPhone,
          },
          {
            projectName:"Lineサイトコピー",
            projectType:"製品紹介",
            technologies:"something,,,",
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
