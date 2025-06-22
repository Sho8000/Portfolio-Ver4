import { StaticImageData } from "next/image";
import githubImg from "@/../public/FooterImages/github.png"
import emailImg from "@/../public/FooterImages/Email.png"
import linkedInImg from "@/../public/FooterImages/LinkedIn.png"
import instagramImg from "@/../public/FooterImages/instagramLogo.png"
import AkifPC from "@/../public/ProjectImages/AkifPC.png"
import AkifPCHover from "@/../public/ProjectImages/AkifPCHover.png"
import AkifPCFull from "@/../public/ProjectImages/AkifPCFull.png"
import HUHPC from "@/../public/ProjectImages/HUHPC.png"
import HUHPCHover from "@/../public/ProjectImages/HUHPCHover.png"
import HUHPCFull from "@/../public/ProjectImages/HUHPCFull.png"
import VanCastroPC from "@/../public/ProjectImages/VanCastroPC.png"
import VanCastroPCHover from "@/../public/ProjectImages/VanCastroPCHover.png"
import VanCastroPCFull from "@/../public/ProjectImages/VanCastroPCFull.png"
import VanCastroPCFullHover from "@/../public/ProjectImages/VanCastroPCFullHover.png"
/* import RestaurantPCFull from "@/../public/ProjectImages/RestaurantPCFull.png"
import LINEPCFull from "@/../public/ProjectImages/LINEPCFull.png"
 */

export interface MainDBEntry {
  language: string;
  menu: string[];
  menuLink: string[];
  landing: {
    jobTitleUp: string;
    jobTitleDown: string;
    subTitle: string;
    lading_titles: string[];
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
  }[];
    };
    personalProjects:{
      projectTypeName:string;
      projects:{
        projectName:string;
        projectType: string;
        technologies: string;
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
    menu:["Home","About Me","My Projects","Contact Me",],
    menuLink:["/","/aboutme","/myprojects","/contactme"],
    landing:{
      jobTitleUp:"Full-Stack",
      jobTitleDown:"Developer",
      subTitle:"Web Page/ Web Application",
      lading_titles:["I am,,,","Clients Projects", "Personal Projects"],
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
          },
          {
            projectName:"HUH",
            projectType:"Shopify",
            technologies:"something,,,",
            imagePC:HUHPC,
            imagePCFull:HUHPCFull,
            imagePCHover:HUHPCHover,
            imagePCFullHover:instagramImg,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"Business introduction",
            technologies:"something,,,",
            imagePC:AkifPC,
            imagePCFull:AkifPCFull,
            imagePCHover:AkifPCHover,
            imagePCFullHover:instagramImg,
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
          },
          {
            projectName:"Line Clone",
            projectType:"Products introduction",
            technologies:"something,,,",
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
    menu:["ホーム","自己紹介","プロジェクト","問い合わせ",],
    menuLink:["/","/aboutme","/myprojects","/contactme"],
    landing:{
      jobTitleUp:"フルスタック",
      jobTitleDown:"エンジニア",
      subTitle:"Webページ作成/ Webアプリケーション作成",
      lading_titles:["I am,,,","Clients Projects", "Personal Projects"],
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
      clientProjects:{
        projectTypeName:"顧客案件",
        projects:[
          {
            projectName:"VanCastro Driving School",
            projectType:"予約管理システム",
            technologies:"something,,,",
            imagePC:instagramImg,
            imagePCFull:instagramImg,
            imagePCHover:instagramImg,
            imagePCFullHover:instagramImg,
          },
          {
            projectName:"HUH",
            projectType:"ネットショップ",
            technologies:"something,,,",
            imagePC:instagramImg,
            imagePCFull:instagramImg,
            imagePCHover:instagramImg,
            imagePCFullHover:instagramImg,
          },
          {
            projectName:"AKiF AiRWAY",
            projectType:"ビジネス紹介",
            technologies:"something,,,",
            imagePC:instagramImg,
            imagePCFull:instagramImg,
            imagePCHover:instagramImg,
            imagePCFullHover:instagramImg,
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
          },
          {
            projectName:"Lineサイトコピー",
            projectType:"製品紹介",
            technologies:"something,,,",
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
