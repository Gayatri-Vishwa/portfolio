import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
// import { Navigation, Autoplay } from "swiper/modules";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Event Images
import e1 from "../../assets/events/c1.jpeg";
import e2 from "../../assets/events/c2.jpg";
import e3 from "../../assets/events/c3.jpeg";
import e4 from "../../assets/events/c4.jpeg";
import e5 from "../../assets/events/c5.jpeg";
import e6 from "../../assets/events/c6.jpg";
import e7 from "../../assets/events/c7.jpeg";
import e8 from "../../assets/events/c8.jpeg";

function TechEvents() {
  const eventImages = [e1, e2, e3, e4, e5, e6, e7, e8];

  const [readMore, setReadMore] = useState(false);
 
  return (
    <section
      id="events"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[18vw] relative overflow-hidden"
      style={{
        backgroundImage: `
      linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
    `,
      }}
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">TECH EVENTS</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          Participating in developer communities helps me stay updated with
          industry trends, learn from experienced engineers, and connect with
          professionals.
        </p>
      </div>

      {/* Event Card */}

      <div
        className="
      border border-white
      bg-gray-900
      rounded-2xl
      shadow-2xl
      hover:shadow-purple-500/50
      transition
      overflow-hidden
    "
      >
        <div className="grid lg:grid-cols-2 gap-10 p-8">
          {/* Left */}

          <div>
            <span className="inline-block bg-purple-600 px-4 py-2 rounded-full font-semibold">
              July 2026
            </span>

            <h3 className="text-3xl font-bold text-white mt-6">
              Grafana & Friends Delhi Meetup
            </h3>

            <p className="flex items-center gap-2 text-purple-400 mt-2">
              <FaLocationDot className="text-purple-500 text-lg" />
              <span>
                <span className="font-semibold text-white">Microsoft</span>{" "}
                Office, Noida
              </span>
            </p>

            <p
              className={`text-sm md:text-base text-gray-400 mt-5 leading-6 md:leading-8 ${
                readMore ? "" : "line-clamp-3"
              } md:line-clamp-none`}
            >
              Attended Grafana & Friends Delhi Meetup hosted at Microsoft
              Office, where I learned about Observability, Monitoring,
              Dashboards, Grafana ecosystem, and interacted with software
              engineers from different companies.
            </p>

            <button
              onClick={() => setReadMore(!readMore)}
              className="md:hidden mt-2 text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right */}

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {eventImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  // className="w-full h-[430px] object-contain rounded-xl"
                  className="w-full h-[250px] md:h-[350px] lg:h-[430px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-wrap md:gap-3 gap-1 mt-2">
            <span className="bg-[#251f38] text-purple-400 rounded-full px-3 py-2 text-sm">
              Grafana
            </span>

            <span className="bg-[#251f38] text-purple-400 rounded-full px-3 py-2 text-sm">
              Observability
            </span>

            <span className="bg-[#251f38] text-purple-400 rounded-full px-3 py-2 text-sm">
              Networking
            </span>

            <span className="bg-[#251f38] text-purple-400 rounded-full px-3 py-2 text-sm">
              Microsoft
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechEvents;
