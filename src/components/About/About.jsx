import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile2.jpg'

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32  "
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        {/*  left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* name */}
          <h2 className="w-full text-2xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Gayatri Vishwakarma
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold  mb-4 text-[#8245ec] leading-tight">
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
          {/* about me para */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8  leading-relaxed">
            I’m a passionate Full Stack Developer (MERN Developer) focused on learning,
            building, and improving every day. As a fresher, I love turning
            ideas into responsive, user-friendly web applications. I’m committed
            to writing clean code, exploring new technologies, and growing into
            a skilled developer with each project I build.
          </p>
          {/* resume button  */}
          <a
            // href="https://drive.google.com/file/d/1HEpgLnfLJKS9PAdMkHHEe6vkp0J39-iX/view?usp=drivesdk"
            // href="https://drive.google.com/file/d/1DM4gh5-V8ndUYKN0LlWeSsckkMzJQ_p5/view?usp=drivesdk"
            href="https://drive.google.com/file/d/1miPPwFuXg7b5qYWlRit0jGBkl-9vJCd0/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b1d8f, #7b2ff7)",
              // background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow:
                "0 0 2px #8245ec,  0 0 2px #8245ec,  0 0 40px #8245ec,  ",
            }}
          >
            Download CV
          </a>
        </div>

        {/* right */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
       <Tilt className=" w-48 h-48  sm:h-64 sm:w-64 md:w-120 md:h-120 border-4 border-purple-700 rounded-full"
       tiltMaxAngleX={20}
       tiltMaxAngleY={20}
       perspective={1000}
       scale={1.05}
       transitionSpeed={1000}
       gyroscope={true}
       >
         <img src={profileImage} alt="gayatri img" 
        className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
       </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
