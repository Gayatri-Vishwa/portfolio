
import React from "react";
import { education } from "../../constants";
import './education.css'

const EducationCard = React.memo(({ edu, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full flex justify-center mb-16 mt-5">
      {/* Timeline circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-19 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#8245ec] bg-gray-400 z-10 flex items-center justify-center">
        <img
          src={edu.img}
          alt="logo"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Card */}
      <div
        className={`w-full sm:w-1/2 flex ${
          isLeft ? "justify-end ml-5" : "justify-start mr-5"
        }`}
      >
        <div className="w-full sm:w-80 p-4 sm:p-6 rounded-2xl shadow-md border border-white bg-gray-900 sm:backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-md overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {edu.school}
              </h3>
              <p className="text-xs text-gray-500">{edu.school2}</p>
              <h4 className="text-sm text-gray-300">
                {edu.degree}, {edu.date}
              </h4>
              <p className="text-xs text-gray-500">
                Grade: {edu.grade}
              </p>
            </div>
          </div>

          <p className="mt-3 text-gray-400 text-sm">{edu.desc}</p>
        </div>
      </div>
    </div>
  );
});

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 md:px-8 lg:px-16 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Background */}
      <div className="absolute inset-0 clip-path-custom-2 education-bg" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col items-center z-10">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2" />

        {education.map((edu, index) => (
          <EducationCard key={edu.id} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;