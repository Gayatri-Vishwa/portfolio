import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div
        className="absolute inset-0 clip-path-custom-2"
        style={{
          backgroundImage: `
        linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
        linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
      `,
        }}
      />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical line in middle */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2"></div>
        {/* <div className="absolute left-1/2 top-0 w-1 h-full bg-white -translate-x-1/2 hidden sm:block"></div> */}

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative w-full flex justify-center mb-16 mt-5"
          >
            {/* Circle on line */}
            <div className="absolute left-1/2  transform -translate-x-1/2 -translate-y-19 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#8245ec] bg-gray-400 z-10 flex items-center justify-center">
              <img
                src={edu.img}
                alt={"logo"}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Left Box */}
            {index % 2 === 0 && (
              <div className="w-full sm:w-1/2 flex justify-end ml-5">
                <div className="w-full sm:w-80  p-4 sm:p-6 rounded-2xl shadow-lg border border-white bg-gray-900 backdrop-blur-md">
                  {/* <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 justify-end"> */}
                  <div className="flex  items-center space-x-4 justify-end">
                    <div className="w-29 h-20 bg-white rounded-md overflow-hidden mb-3 sm:mb-0">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {edu.school}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {edu.school2}
                      </p>
                      <h4 className="text-sm sm:text-md text-gray-300">
                        {edu.degree} {edu.date}
                      </h4>
                      {/* <p className="text-xs text-gray-500 mt-1">{edu.date}</p> */}
                      <p className="text-xs text-gray-500 mt-1">
                        Grade:{edu.grade}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{edu.desc}</p>
                </div>
              </div>
            )}

            {/* Right Box */}
            {index % 2 !== 0 && (
              <div className="w-full sm:w-1/2  flex justify-start mr-5">
                <div className="w-full sm:w-80 p-4 sm:p-6 rounded-2xl shadow-lg border border-white bg-gray-900 backdrop-blur-md">
                  {/* <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4"> */}
                  <div className="flex  items-center space-x-4 justify-end">
                    <div className="w-20 h-20 bg-white rounded-md overflow-hidden mb-3 sm:mb-0">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {edu.school}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {edu.school2}
                      </p>
                      <h4 className="text-sm sm:text-md text-gray-300">
                        {edu.degree}
                        {" ,"}
                        {edu.date}
                      </h4>
                      {/* <p className="text-xs text-gray-500 mt-1">{edu.date}</p> */}
                      <p className="text-xs text-gray-500 mt-1">
                        Grade:{edu.grade}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{edu.desc}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
