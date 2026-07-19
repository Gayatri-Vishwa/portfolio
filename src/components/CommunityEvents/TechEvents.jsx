import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
// import { Navigation, Autoplay } from "swiper/modules";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Event Images
import e1 from "../../assets/events/c1.jpeg";
import e2 from "../../assets/events/c2.jpg";
import e3 from "../../assets/events/c3.jpg";
import e4 from "../../assets/events/c4.jpeg";
import e5 from "../../assets/events/c5.jpg";
import e6 from "../../assets/events/c6.jpg";
import e7 from "../../assets/events/c7.jpg";
import e8 from "../../assets/events/c8.jpg";

function TechEvents() {
  const eventImages = [e1, e2, e3, e4, e5, e6, e7, e8];
  console.log(eventImages);
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
            <p className="text-gray-400 mt-6 leading-8">
              Attended Grafana & Friends Delhi Meetup hosted at Microsoft
              Office, where I learned about Observability, Monitoring,
              Dashboards, Grafana ecosystem, and interacted with software
              engineers from different companies.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
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

          {/* Right */}

          {/* <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 2500,
        }}
      > */}
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
              disableOnInteraction: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
              scale: 0.9,
            }}
          >
            {eventImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  className="w-full h-[430px] object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TechEvents;
