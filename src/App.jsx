


import { Suspense, lazy } from "react";
import BlurBlob from "./BlurBlob";

// Normal imports
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

//  Lazy imports (below-the-fold)
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Work = lazy(() => import("./components/Work/Work"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {

  return (
      <div className="bg-[#050414]">

      <BlurBlob position={{top:'35%', left:"20%"}} size={{width: "30%", height: "40%"}}/>

      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
             {/* Lazy loaded sections */}
        <Suspense
          fallback={
            <div className="text-white text-center py-20">
              Loading sections...
            </div>
          }
        >
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
         </Suspense>
      </div>
    </div>
  );
}





export default App;
