import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AboutBanner1 from "../../assets/About/AboutBanner1.png";
import AboutBanner2 from "../../assets/About/AboutBanner2.png";
import AboutBanner3 from "../../assets/About/AboutBanner3.png";

const slides = [
  {
    img: AboutBanner1,
    title: "EMPOWERING MINDS.",
    highlight: "TRANSFORMING FUTURES.",
    textPosition: "right",
  },
  {
    img: AboutBanner2,
    title: "EXPANDING HORIZONS.",
    highlight: "SHAPING TOMORROW.",
    textPosition: "left",
  },
  {
    img: AboutBanner3,
    title: "INNOVATING TODAY.",
    highlight: "ENGINEERING THE FUTURE.",
    textPosition: "right",
  },
];

const HeroAbout = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // pagination={{ clickable: fsld }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Background Image */}
            <img
              src={slide.img}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className={` absolute top-auto md:top-0 bottom-0  w-full  h-1/2 md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent ${
                slide.textPosition === "right"
                  ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
                  : "hidden lg:block left-0 md:bg-gradient-to-r md:from-black/70 md:to-transparent"
              }`}
            />

            {/* Text Content */}
            {!(slide.textPosition === "right") && (
              <div className="lg:hidden absolute inset-0  bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
            )}
            <div
              className={`absolute px-4 sm:px-6 ${
                slide.textPosition === "right"
                  ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
                  : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[65%]"
              } 
      top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
      text-white sm:w-1/2 w-[60%] lg:w-[50%] max-w-none z-20`}
            >
              <h1
                className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full ${
                  slide.textPosition === "right" ? "lg:ml-30" : ""
                } `}
              >
                {slide.title}
                <br />
                <span className="text-[#E1CD67]">{slide.highlight}</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Vertical Buttons */}
      <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] z-20">
        <div className="transform -rotate-90 origin-right">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button
            type="button"
            onClick={() => navigate("/admissions")}
            className="bg-[#122E5E] text-white text-sm px-6 py-3"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
