import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutBanner1 from "../../assets/AboutBanner1.png";
import AboutBanner2 from "../../assets/AboutBanner2.png";
import AboutBanner3 from "../../assets/AboutBanner3.png";

const HeroAbout = () => {
  const navigate = useNavigate();
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden admissions-slider-hight">
      {/* Background Image */}
      <img
        src={current.img}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute top-auto md:top-0 bottom-0  w-full  h-1/2 md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent ${
          current.textPosition === "right"
            ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
            : "left-0 md:bg-gradient-to-r md:from-black/70 md:to-transparent"
        }`}
      />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 ${
          current.textPosition === "right"
            ? "right-0 text-right mr-6 sm:mr-10 lg:mr-20"
            : "left-0 text-left ml-6 sm:ml-10"
        } 
  top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
  text-white sm:w-1/2 w-[60%] lg:w-[50%] max-w-none z-20`}
      >
        <h1
          className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full ${
            current.textPosition === "right" ? "lg:ml-30" : ""
          } `}
        >
          {current.title}
          <br />
          <span className="text-[#E1CD67]">{current.highlight}</span>
        </h1>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? "bg-yellow-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Vertical Buttons */}
      <div className="fixed top-1/3 right-[22px] z-20 flex flex-col gap-26 font-[500]">
        <div className="transform -rotate-90 origin-right mb-6">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-7 py-4 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button
            onClick={() => navigate("/admissions")}
            className="bg-[#122E5E] text-white text-sm px-7 py-4"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
