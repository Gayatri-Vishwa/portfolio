// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from "./assets/tech_logo/redux.png";
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from "./assets/tech_logo/materialui.png";
// import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
// import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
// import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// ---- experience mern logo
import mernlogo from "./assets/company_logo/mern.png";

// ====education logo
import educationlogo from "./assets/education_logo/education.jpeg";

// projects image
import assistant from "./assets/projects/assistant.png";
import ecommerce from "./assets/projects/ECOMMERCE.png";
import dice from "./assets/projects/dice.png";
import currency from "./assets/projects/currency.png";
import fire from "./assets/projects/fire.png";
import rock from "./assets/projects/rock.png";
import textto from "./assets/projects/texttospeech.png";
import tick from "./assets/projects/tick.png";
import todo from "./assets/projects/TODO.png";
// import translator from "./assets/projects/translator.png";
import portfolio from "./assets/projects/portfolio.png";
import bmi from "./assets/projects/bmi.png";
import food from "./assets/projects/food.png";
import todoredux from "./assets/projects/todoredux.png";
// import simplebg from "./assets/projects/simplebg.png";
import password from "./assets/projects/password.png";
import hexbg from "./assets/projects/hexbg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      // { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: mernlogo,
    role: "MERN Stack Developer",
    role2: "(Hands-on Training)",
    date: "Aug 2025 – Present",
    desc: [
      "Built and deployed full-stack MERN applications.",
      "Designed RESTful APIs using MVC architecture.",
      "Implemented JWT authentication and role-based access control.",
      "Developed complete CRUD features for real-world use cases.",
      "Integrated third-party APIs including Gemini AI.",
      "Focused on clean, reusable, and scalable code.",
      "Used Git & GitHub for version control.",
      "Deployed apps on Vercel, Netlify, and Render.",
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "MVC Architecture",
      "CRUD Operations",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Virtual-Assistant",
    description:
      "AI-powered voice assistant providing real-time responses using Gemini AI. Built with MERN stack and secure REST APIs."
   ,
    image: assistant,
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Gemini AI",
    ],
    github:
      "https://github.com/Gayatri-Vishwa/ai-assistant-frontend",
    webapp: "https://ai-assistant-frontend-ashen.vercel.app/",
  },
  {
    id: 1,
    title: "E-Commerce Website",

    description:
        "Full-stack e-commerce app with product browsing, cart management, and secure checkout using MERN stack.",
    image: ecommerce,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "REST API",
     "Tailwind CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/BMI%20calculator",
    webapp: "https://csprep.kappa.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description:

    "Full-stack task management app with CRUD operations, persistent storage, and responsive UI using MERN stack.",
    image: todo,
    tags: [
      "React JS",
      "REST API",
     "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/BMI%20calculator",
    webapp: "https://movie-kappa-app-jet.vercel.app/",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "I built a responsive React portfolio using Tailwind CSS, optimized with lazy loading, and deployed on Vercel to showcase my projects and skills efficiently.",
    image: portfolio,
    tags: ["React JS", "Tailwind CSS", "javascript/JSX", "emailjs"],
    github: "https://github.com/Gayatri-Vishwa/portfolio",
    webapp: "https://portfolio-azure-ten-jnem45fqrb.vercel.app/",
  },
  {
    id: 4,
    title: "Firebase Contact App ",
    description:
  "Real-time contact manager using React and Firebase Firestore for add, search, and delete operations."
    , image: fire,
    tags: ["React JS", "Firebase (Firestore)", "Tailwind CSS"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/05fireBaseContactApp",
    webapp: "https://react-projects-zfgr.vercel.app/",
  },
  {
    id: 5,
    title: "Todo with redux",
    description:
 "Frontend-only task manager with React + Redux, enabling centralized state management and responsive UI."
      ,image: todoredux,
    tags: ["React JS", "Tailwind CSS", "Redux-toolkit"],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/10TodoWithRedux",
    webapp: "https://react-projects2-ixeu.vercel.app/",
  },
    {
    id: 6,
    title: "Dice Game",
    description:
    "Interactive dice game with dynamic scoring and rules display, built with React and Styled Components."
      ,image: dice,
    tags: ["React JS(Hooks,State)", "Styled Component", "JavaScript (ES6+)"],
    github: "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/03Dice",
    webapp: "https://react-projects-wpbc.vercel.app/",
  },
    {
    id: 7,
    title: "Currency converter",
    description:
   "Real-time currency conversion web app with live exchange rates and simple, intuitive interface."
   ,image: currency,
    tags: ["React.JS", "Tailwind CSS","JavaScript(ES6+)", "ExchangeRate-API "],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/11CurrencyConverter",
    webapp: "https://react-projects2-fyhm.vercel.app/",
  },
    {
    id: 8,
    title: " Random password generator",
    description:
      "A tool that generates strong, secure, and customizable passwords instantly to enhance online security.",
    image: password,
    tags: ["React JS (Hooks,State)", "Tailwind CSS", ""],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/09RandomPasswordGenerator",
    webapp: "https://react-projects2-nine.vercel.app/",
  },
  {
    id: 9,
    title: "Food Zone",
    description:
      "FoodZoe is a food discovery app that lets users search for dishes or restaurants, providing quick and easy access to meal options.",
    image: food,
    tags: ["React JS (Hooks,State)", "Tailwind CSS", ""],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/04FoodZone",
    webapp: "https://react-projects-dyqt.vercel.app",
  },
  {
    id: 10,
    title: "Text to Speech",
    description:
      "A web app that converts typed text into spoken audio using the Web Speech API’s SpeechSynthesis. Built with HTML, CSS, and JavaScript, it allows users to listen to text in real-time.",
    image: textto,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Text-To-Speech API (Web Speech API)",
    ],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/ConvertTextToSpeech",
    webapp: "https://js-projects-ee58.vercel.app/",
  },


  {
    id: 11,
    title: "Random Background Changer",
    description:
      "A React-based application that dynamically changes the background color using state and event handling, showcasing core React concepts.",

    image: hexbg,
    tags: ["Tailwind CSS", "JavaScript(ES6+)", "React JS"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/06RandomColor_HAXorRGB",
    webapp: "https://react-projects-tl9o.vercel.app/",
  },


  {
    id: 12,
    title: "Tick Tack toe",
    description:
      "A classic Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game allows two players to take turns and checks for winning or draw conditions in real time.It features a responsive design and smooth user interaction.",

    image: tick,
    tags: ["JavaScript(ES6+)", "HTML5", "CSS3"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/tick%20tack%20toe",
    webapp: "https://js-projects-up8h.vercel.app/",
  },
  {
    id: 13,
    title: "Rock paper scissor",
    description:
      "A classic Rock Paper Scissors game built using HTML, CSS, and JavaScript.The game allows users to play against the computer with real-time result display.It includes score tracking and dynamic UI updates for an engaging experience.",
    image: rock,
    tags: ["JavaScript(ES6+)", "HTML5", "CSS3"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/rock%20paper%20seasor",
    webapp: "https://js-projects-fekb.vercel.app/",
  },
  {
    id: 14,
    title: "BMI Calculator",
    description:
      "A simple web application that calculates Body Mass Index (BMI) based on user input, providing instant results using JavaScript logic and DOM manipulation.",
    image: bmi,
    tags: ["JavaScript(ES6+)", "HTML5", "CSS3"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/BMI%20calculator",
    webapp: "https://js-projects-kappa-silk.vercel.app/",
  },


  //   {
  //   id: 12,
  //   title: " Background Changer",
  //   description:
  //     "A React-based UI utility that dynamically changes background colors using state management and event handling, demonstrating core React concepts and clean component design.",

  //   image: simplebg,
  //   tags: ["React JS(Hooks,State)", "Tailwind Css"],
  //   github:
  //     "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/08BackgroundColorChanger",
  //   webapp: "https://bgchanger-beta.vercel.app/",
  // },

  // {
  //   id: 15,
  //   title: "Translator",
  //   description:
  //     "A React-based language translator application that allows users to translate text into multiple languages The app uses a translation API to provide fast and accurate results in real time. It features a clean, user-friendly interface for seamless language conversion",

  //   image: translator,
  //   tags: ["React JS", "tailwindcss", "Translation API", "JavaScript (ES6+)"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 16,
  //   title: "Video Script Generator",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
];

export const education = [
  {
    id: 0,
    img: educationlogo,
    school: "S.D College of Management Studies, MZN",
    school2: "Affiliated to DR. APJ A.K.T.U ,Lucknow",
    date: "Sept 2024 - July 2026",
    grade: "7.81 CGPA",
    degree: "(MCA)",
    desc: "Master's in Computer Applications focusing on Web Development, Data Structures, OOP, and Software Engineering. Gained practical skills in building responsive applications.",
  },
  {
    id: 1,
    img: educationlogo,
    school: "S.D College of Management Studies, MZN",
    school2: "Affiliated to M.S University",
    date: "Sept 2021 - Aug 2024",
    grade: "77.6%",
    degree: "(BCA)",
    desc: "Bachelor's in Computer Applications with hands-on experience in Web Development, Databases, and Programming. Built projects applying core computing concepts.",
  },
  {
    id: 2,
    img: educationlogo,
    school: "S.D Girls Inter College, Muzaffarnagar",
    date: "Apr 2020 - Mar 2021",
    grade: "76.6%",
    degree: "(XII) - Intermediate",
    desc: "Completed Class 12 with PCM (Physics, Chemistry, Maths), building strong foundation for programming and logical thinking.",
  },
  {
    id: 3,
    img: educationlogo,
    school: "J.K Inter College, Muzaffarnagar",
    date: "Apr 2018 - Mar 2019",
    grade: "90%",
    degree: "(X) - District Topper",
    desc: "Completed Class 10 with Science & Computers, achieved district topper rank, showcasing early academic excellence.",
  },
];
