import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Syahril Ramdani",
  title: "Hi all, I'm Syahril",
  description:
    "I'm a passionate Backend developer with experience developing Backend web applications with Python, Django, Flask, Fastapi, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "grimm04",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:syahrilr51@gmail.com",
  linkedin: "https://www.linkedin.com/in/syahril-r/",
  github: "https://github.com/grimm04",
  instagram: "https://www.instagram.com/gggr1mm",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};
     // emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        // emoji("⚡ Building responsive static websites using Next.js"),
export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "BACK END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "BACK END DEVELOPER",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [ 
        emoji("⚡ Building RESTful APIs in Fastapi & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "Fastapi",
          iconifyTag: "logos:fastapi",
        },
        {
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "Graphql",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Elastic",
          iconifyTag: "logos:elasticsearch",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        }, 
        // {
        //   skillName: "AWS",
        //   iconifyTag: "logos:aws",
        // },
        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },
        {
          skillName: "Kafka",
          iconifyTag: "logos:kafka",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        // {
        //   skillName: "Machine Learning",
        //   iconifyTag: "logos:machine-learning",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "65", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Univeritas Nasional Pasim",
    subHeader: "Teknik Informatika",
    duration: "September 2020",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Data Engineer",
    company: "PT Ebdesk Teknologi",
    companyLogo: "/img/icons/common/ebdesk.webp",
    date: "March 2024 - Present",
    desc: "I crafted backends for diverse web apps, APIs . Managed server upkeep, deployments on Linux using Docker.",
  },
  {
    role: "Backend Developer",
    company: "PT Quadran Inovasi Karya Bersama",
    companyLogo: "/img/icons/common/quadran.png",
    date: "Nov 2021 - Sept 2022",
    desc: "I crafted backends using Laravel Framework form APIs.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Fullstack Developer",
    company: "CV 101LabIt",
    companyLogo: "/img/icons/common/labit.jpg",
    date: "Apr 2017 - Mar 2018",
    desc: "Team Leader for those development, handle lot of web apps. Laravel framework for the core of developments",
  },
  {
    role: "Programmer",
    company: "EzyIT Pte Ltd",
    companyLogo: "/img/icons/common/ezyit.jpg",
    date: "Jul 2016 - Mar 2017",
    desc: "Hired as Junior programmer, I usually work according to tasks.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Pilkada.id APIs",
    desc: "Backend Developer for this web, Fastapi as the main services for APIs. this web APPs usually for mini transactions and there have some products.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://pilkada2024.id",
    projectImg:"/img/projects/pilkada.png",
  },
  {
    name: "Cms Pilkada.id APIs",
    desc: "This Web APPs is the cms for pilkada.id noting special there is only have CRUD and some summarize and report the transactions.",
    // link: "https://pilkada2024.id",
    projectImg:"/img/projects/cms-pilkada.png",
  },
  {
    name: "Debat Web ",
    desc: "Debate is Web APPs for visualization data election of PEMILU 2024 in Indonesia.",
    projectImg:"/img/projects/debate.png",
  },
  {
    name: "Kafiarchitec APPs",
    desc: "Kafi is Portofolio Web APPs, in this Web we can see loot of design of home, decoration, and more. For the APIs using Flask Graphql.",
    link: "https://kafiarchitect.com",
    // projectImg:"/img/projects/kafiarchitec.png",
  },
  {
    name: "Outage PLN Kalimantan",
    desc: "This Web APPs is using by PLN Kalimantan and this one is private web APPs",
  },
  {
    name: "SIAP PLN Kalimantan",
    desc: "This Web APPs is using by PLN Kalimantan for incoming and outgoing goods management.",
    projectImg:"/img/projects/siap.png",
  },
  {
    name: "Info PDM PLN Kalimantan",
    desc: "This Web APPs is using by PLN Kalimantan for field maintenance management, such as substations and others",
    projectImg:"/img/projects/infopdm.png",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Backend Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];
export const feedbacks: FeedbackType[] = [ 
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Syahril Ramdani",
  description: greetings.description,
  author: "Syahril Ramdani",
  image: "https://avatars.githubusercontent.com/u/16585631?v=4",
  url: "https://syahril-ramdani.vercel.app",
  keywords: [
    "Syahril",
    "Syahril Ramdani", 
    "grimm04",
    "ggr1mm",
    "Portfolio",
    "Syahril Portfolio ",
    "Syahril Ramdani Portfolio",
  ],
};
