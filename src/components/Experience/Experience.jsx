


// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//             style={{
//         backgroundImage: `
//           linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
//           linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
//         `,
//       }}
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE </h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           {/* A collection of my work experience and the roles I have taken in
//           various organizations */}
        
// Self-Taught MERN Stack Developer (2025 – Present)

//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-26 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

      
//     </section>
//   );
// };

// export default Experience;









import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 font-sans bg-skills-gradient clip-path-custom-2"
      style={{
        backgroundImage: `
          linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
          linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
        `,
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Self-Taught MERN Stack Developer (2025 – Present)
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical line in middle */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2"></div>
{/* <div className="absolute left-1/2 top-0 w-1 h-full bg-white -translate-x-1/2 hidden sm:block"></div> */}

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative w-full flex justify-center mb-16 mt-5">
            {/* Circle on line */}
            <div className="absolute left-1/2  transform -translate-x-1/2 -translate-y-19 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#8245ec] bg-gray-400 z-10 flex items-center justify-center">
              

              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Left Box */}
            {index % 2 === 0 && (
              <div className="w-full sm:w-1/2  flex justify-end ml-5">
                <div className="w-full sm:w-80  p-4 sm:p-6 rounded-2xl shadow-lg border border-white bg-gray-900 backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 justify-end">
                    <div className="w-20 h-12 bg-white rounded-md overflow-hidden mb-3 sm:mb-0">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                      <h4 className="text-sm sm:text-md text-gray-300">{exp.company}</h4>
                      <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{exp.desc}</p>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Right Box */}
            {index % 2 !== 0 && (
              <div className="w-full sm:w-1/2 flex justify-start mr-5">
                <div className="w-full sm:w-80 p-4 sm:p-6 rounded-2xl shadow-lg border border-white bg-gray-900 backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <div className="w-20 h-12 bg-white rounded-md overflow-hidden mb-3 sm:mb-0">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                      <h4 className="text-sm sm:text-md text-gray-300">{exp.company}</h4>
                      <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{exp.desc}</p>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;











