

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32  "
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Gayatri Vishwakarma
          </h2>
          {/* Skills with Typewriter */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["Fullstack Developer", "MERN Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I’m a passionate Full Stack MERN Developer and MCA student who
            enjoys building responsive and user-friendly web applications. As a
            fresher, I focus on learning by building real-world projects,
            writing clean and maintainable code, and continuously improving my
            development skills. I’m eager to grow as a developer and contribute
            to meaningful products.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1miPPwFuXg7b5qYWlRit0jGBkl-9vJCd0/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
          
              background: "linear-gradient(90deg, #3b1d8f, #7b2ff7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Gayatri img"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
