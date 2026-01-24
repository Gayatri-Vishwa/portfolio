import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
         style={{
        backgroundImage: `
          linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
          linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
        `,
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* skills category  */}

      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between ">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* skills item 3 per row  on large screen */}
            <Tilt
              className=" "
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full  ">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl text-center px-2 py-2"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 "
                    />
                    <span className="text-gray-300 text-xs sm:text-sm ">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div> */}



            {/* <div className="grid gap-3 
     [grid-template-columns:repeat(auto-fit,minmax(90px,1fr))]"> */}
     <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full  ">


                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row items-center justify-center
             gap-1 sm:gap-2
             border border-gray-700 rounded-2xl
             px-3 py-2
             text-center
             min-w-0"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-7 sm:h-7"
                    />

                    <span className="text-gray-300 text-xs sm:text-sm break-words">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>





            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;





// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-16 sm:py-20 lg:py-24 
//                  px-5 sm:px-[7vw] lg:px-[20vw] 
//                  font-sans bg-skills-gradient clip-path-custom"
//       style={{
//         backgroundImage: `
//           linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
//           linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
//         `,
//       }}
//     >
//       {/* Section Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
//           SKILLS
//         </h2>

//         <div className="w-20 sm:w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>

//         <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto">
//           A collection of my technical skills and expertise honed through
//           various projects and experiences
//         </p>
//       </div>

//       {/* Skills Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
//         {SkillsInfo.map((category) => (
//           <div
//             key={category.title}
//             className="bg-gray-900 backdrop-blur-md 
//                        px-5 sm:px-8 py-6 
//                        rounded-2xl border border-white
//                        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//           >
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
//               {category.title}
//             </h3>

//             <Tilt
//               tiltMaxAngleX={15}
//               tiltMaxAngleY={15}
//               perspective={1000}
//               scale={1.03}
//               transitionSpeed={800}
//               gyroscope
//             >
//               {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3"> */}
// <div className="grid gap-3 
//      [grid-template-columns:repeat(auto-fit,minmax(90px,1fr))]">


//                 {category.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="flex flex-col sm:flex-row items-center justify-center
//              gap-1 sm:gap-2
//              border border-gray-700 rounded-2xl
//              px-3 py-2
//              text-center
//              min-w-0"
//                   >
//                     <img
//                       src={skill.logo}
//                       alt={skill.name}
//                       className="w-5 h-5 sm:w-7 sm:h-7"
//                     />

//                     <span className="text-gray-300 text-xs sm:text-sm break-words">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </Tilt>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;
