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
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
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

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

// ---- experience mern logo
import mernlogo from  './assets/company_logo/mern.png'

// ====education logo
import educationlogo from './assets/education_logo/education.jpeg';

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
import translator from "./assets/projects/translator.png";
import bmi from "./assets/projects/bmi.png";
import food from "./assets/projects/food.png";
import todoredux from "./assets/projects/todoredux.png";
import simplebg from "./assets/projects/simplebg.png";
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
      // { name: 'Material UI', logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
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
    role: "MERN Stack Developer- Self Learning",
    // company: "Webverse Digital   Hands-On Experience,",
    date: "– Self Learning 2025 – Present ",
    desc:" Self-learned full-stack web development using MongoDB, Express.js, React.js, and Node.js . Gained hands-on experience by building and deploying multiple MERN applications .Developed and consumed RESTful APIs .Implemented JWT authentication and role-based authorizationFocused on clean code, scalability, and best practicesWorked with Git & GitHub for version control and collaboration Deployed applications on Vercel, Netlify, and Render"
    
    
    // "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment."
    ,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      // "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MUI",
      "MongoDb",
      "Redux",
      // " Next Js",
    ],
  },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  // },
];

export const education = [
  {
    id: 0,
    img: educationlogo,
    school:
      "S.D College of Management Studies, affiliated to M.S University, Sahranpur",
    date: "Sept 2024 - July 2026",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from AKTU University, Lucknow. During MCA, I gained a strong foundation in programming, Web development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at  college has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - (MCA)",
  },
  {
    id: 1,
    img: educationlogo,
    school:
      "S.D College of Management Studies, affiliated to DR. APJ A.K.T.U , Lucknow",
    date: "Sept 2021 - Aug 2024",
    grade: "77.6%",
    desc: "I completed my Bachelor's degree in Computer Application (B.C.A) from S.D  College, Muzaffarnagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of web development. My time at SD College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - (BCA)",
  },
  {
    id: 2,
    img: educationlogo,
    school: "S.D Girls Inter College , Muzaffarnagar",
    date: "Apr 2020 - March 2021",
    grade: "78.2%",
    desc: "I completed my class 12 education from S>D Girls Inter College, Muzaffarnagar, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "(XII) - Intermediate",
  },
  {
    id: 3,
    img: educationlogo,
    school: "J.K inter College, Muzaffarnagar",
    date: "Apr 2018 - March 2019",
    grade: "90%",
    desc: "I completed my class 10 education from J.K inter College, Muzaffarnagar, under the UP board, where I studied Science with Computer.",
    degree: "(X) - High school (District Topper)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Virtual-Assistant",
    description:
      "An AI Virtual Assistant ,Full Stack project designed to provide instant, AI-generated responses to user queries. The application features a user-friendly interface and a secure backend architecture, showcasing practical implementation of AI in web applications.",
    image: assistant,
    tags: [
      "React JS",
      "tailwindcss",
      "REST Api",
      "Gemini 2.5",
      "External Api",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A Full-Stack E-Commerce Web Application that allows users to browse products, add items to cart, and place orders securely. Built using modern frontend and backend technologies with authentication, database integration, and responsive design.",

    image: ecommerce,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "REST API",
      "tailwindcss",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Developed a Full-Stack Todo App implementing complete CRUD operations. Users can add, edit, mark, and delete tasks, with data stored and managed through a backend server.",
    image: todo,
    tags: [
      "React JS",
      "REST API",
      "tailwindcss",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },

  {
    id: 3,
    title: "Background Changer",
    description:
      "A React-based language translator application that allows users to translate text into multiple languages The app uses a translation API to provide fast and accurate results in real time. It features a clean, user-friendly interface for seamless language conversion",

    image: hexbg,
    tags: ["React JS", "tailwindcss", "Translation API", "JavaScript (ES6+)"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/06RandomColor_HAXorRGB",
    webapp: "https://react-projects-tl9o.vercel.app/",
  },
  {
    id: 4,
    title: "Dice Game",
    description:
      "A simple dice game developed using React.js in which users select a number and roll the dice to test their luck, with dynamic score updates based on correct or incorrect selections.An interactive dice game where users can view the game rules, select a number, roll the dice, and earn or lose points based on their prediction.",

    image: dice,
    tags: ["React JS", "Styled Components", "HTML", "CSS", "JavaScript (ES6+)"],
    github:
      "dice https://github.com/Gayatri-Vishwa/React-Projects/tree/main/03Dice",
    webapp: "https://react-projects-wpbc.vercel.app/",
  },
  {
    id: 5,
    title: "Firebase Contact App ",
    description:
      "A React-based contact application integrated with Firebase Firestore for real-time data handling, allowing users to manage members efficiently.A Firebase-powered contact management app that allows users to add, search, and delete members with real-time data synchronization.",

    image: fire,
    tags: ["React JS", "Firebase Firestore", "tailwindCss", "Javascript(ES6+)"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/05fireBaseContactApp",
    webapp: "https://react-projects-zfgr.vercel.app/",
  },
  {
    id: 6,
    title: "Tick Tack toe",
    description:
      "A classic Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game allows two players to take turns and checks for winning or draw conditions in real time.It features a responsive design and smooth user interaction.",

    image: tick,
    tags: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/tick%20tack%20toe",
    webapp: "https://js-projects-up8h.vercel.app/",
  },
  {
    id: 7,
    title: "Rock paper scissor",
    description:
      "A classic Rock Paper Scissors game built using HTML, CSS, and JavaScript.The game allows users to play against the computer with real-time result display.It includes score tracking and dynamic UI updates for an engaging experience.",
    image: rock,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/rock%20paper%20seasor",
    webapp: "https://js-projects-fekb.vercel.app/",
  },
  {
    id: 8,
    title: "BMI Calculator",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: bmi,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/BMI%20calculator",
    webapp: "https://js-projects-kappa-silk.vercel.app/",
  },
  {
    id: 9,
    title: "todo with redux",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: todoredux,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/10TodoWithRedux",
    webapp: "https://react-projects2-ixeu.vercel.app/",
  },
  {
    id: 10,
    title: "random simple color generator",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: simplebg,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/08BackgroundColorChanger",
    webapp: "https://bgchanger-beta.vercel.app/",
  },
  {
    id: 11,
    title: "currency converter",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: currency,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/11CurrencyConverter",
    webapp: "https://react-projects2-fyhm.vercel.app/",
  },
  {
    id: 12,
    title: " Random password generator",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: password,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/reactProjects2/tree/main/09RandomPasswordGenerator",
    webapp: "https://react-projects2-nine.vercel.app/",
  },
  {
    id: 13,
    title: "Food Zone",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: food,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/React-Projects/tree/main/04FoodZone",
    webapp: "https://react-projects-dyqt.vercel.app",
  },
  {
    id: 14,
    title: "Text to Speech",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: textto,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github:
      "https://github.com/Gayatri-Vishwa/JS-Projects/tree/main/ConvertTextToSpeech",
    webapp: "https://js-projects-ee58.vercel.app/",
  },
  {
    id: 15,
    title: "Translator",
    description:
      "A React-based language translator application that allows users to translate text into multiple languages The app uses a translation API to provide fast and accurate results in real time. It features a clean, user-friendly interface for seamless language conversion",

    image: translator,
    tags: ["React JS", "tailwindcss", "Translation API", "JavaScript (ES6+)"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 16,
    title: "Video Script Generator",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];
