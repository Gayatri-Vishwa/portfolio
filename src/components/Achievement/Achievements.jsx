import React, { useState } from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleOpenModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
          linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
        `,
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlights of my academic and technical achievements
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.slice(0, visibleCount).map((achievement) => (
          <div
            key={achievement.id}
            onClick={() => handleOpenModal(achievement)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6 relative">
              <h3 className="text-2xl font-semibold text-white mb-2 ">
                {achievement.title}
              </h3>

              <p className="text-gray-500  mb-4 pt-4 line-clamp-3">
                {achievement.description}
              </p>

              {achievement.tags && (
                <div className="mb-4">
                  {achievement.tags.map((tag, index) => (
                    // <span
                    //   key={index}
                    //   className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    // >
                    //   {tag}
                    // </span>
                    <span  key={index}
                    className="absolute top-0 right-3 bg-purple-800 text-white text-xs px-2 py-1  rounded">
                    {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {achievements.length > 6 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() =>
              setVisibleCount(visibleCount === 6 ? achievements.length : 6)
            }
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b1d8f, #2e1d4d)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            {visibleCount === 6 ? "Show More" : "Show Less"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedAchievement && (
        // <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-y-auto max-h-[90vh] relative">

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-xl">
                  {/* <div className="relative">
                
                  </div> */}
                  {/* Main Image */}
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="relative max-h-full object-contain rounded-xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedAchievement.title}
                </h3>

                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedAchievement.description}
                </p>

                {selectedAchievement.certificate && (
                  <div className="flex justify-center">
                    <a
                      href={selectedAchievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-lg font-semibold"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
