import project1 from "../assets/projects/p2p.png";
import project2 from "../assets/projects/rp.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I like to build products that solve problems and create values.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Apr 2024",
    role: "Software Engineer Intern",
    company: "DBS Bank",
    description: `Worked closely with the internal developers team, and spearheaded the development of PagerDuty events V2 API integrations from V1 which includes new functionalities. Implemented UI automation regression testing into the system with 
    continuous delievery (CD) pipeline which improve overall software product quality, enhancing the end-to-end experience and increased code delivery speed.`,
    technologies: ["Java", "Kotlin", "Postman", "OpenShift", "Jenkins", "SerenityBDD", "Cucumber", "Selenium"],
    link: "https://www.dbs.com/",
  },
  {
    year: "May 2022 - Aug 2022",
    role: "Software Engineer Intern",
    company: "DBS Bank",
    description: `Wrote a script to mass automate the SQL queries using Node.js, under OpenShift platform which greatly improves their work efficiency. Created 
    a non-technical brief on the operations and workflow to facilitate non-coding team to function with minimum disruptions.`,
    technologies: ["JavaScript", "TypeScript", "Node.js", "Postman", "MongoDB", "OpenShift", "Swagger"],
    link: "https://www.dbs.com/",
  },
  {
    year: "Sep 2018 - Feb 2019",
    role: "Multimedia Developer Intern",
    company: "FULIFE Pte. Ltd.",
    description: `Developed and maintained code for in-house website using HTML, CSS, JavaScript and Bootstrap. Designed a low and high-fidelity UI/UX prototyping 
    for the company's flagship mobile cashless payment system, eco-Fulife.`,
    technologies: ["HTML & CSS", "JavaScript", "Bootstrap"],
    link: "https://www.instagram.com/fulifesg/",
  },
];

export const PROJECTS = [
  {
    title: "Binance P2P Tracker",
    image: project1,
    description:
      "A tool used to track crypto prices against fiat currencies on Binance P2P exchange. Pyppeteer is used to automate the process and retrieve the results.",
    technologies: ["Python", "Pyppeteer"],
    link: "https://github.com/jfengg3/binance-p2p-tracker",
  },
  {
    title: "RP Exam Downloader",
    image: project2,
    description:
      "Lightweight GUI app to ease the process of download exam papers from the university intranet. BeautifulSoup to scrape all the exam papers data.",
    technologies: ["Python", "BeautifulSoup"],
    link: "https://github.com/jfengg3/rp-exam-downloader",
  },
];

export const FOOTER = `Coded in Visual Studio Code. Built with React.js, Tailwind CSS, and Framer Motion for transitions, deployed with Vercel. Font is set to Inter typeface.`;