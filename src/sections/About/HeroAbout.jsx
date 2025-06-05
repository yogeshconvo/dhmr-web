import React, { useState, useEffect } from "react";
import AboutBanner1 from "../../assets/AboutBanner1.png";
import AboutBanner2 from "../../assets/AboutBanner2.png";
import AboutBanner3 from "../../assets/AboutBanner3.png";

const HeroAbout = () => {
  const slides = [
    {
      img: AboutBanner1,
      title: "EMPOWERING MINDS.",
      highlight: " TRANSFORMING FUTURES.",
      textPosition: "right",
    },
    {
      img: AboutBanner2,
      title: "EXPANDING HORIZONS.",
      highlight: " SHAPING TOMORROW.",
      textPosition: "left",
    },
    {
      img: AboutBanner3,
      title: "INNOVATING TODAY.",
      highlight: " ENGINEERING THE FUTURE.",
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={current.img}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-opacity-40" />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 ${
          current.textPosition === "right"
            ? "right-0 text-right mr-10"
            : "left-0 text-left ml-10"
        } top-1/2 transform -translate-y-1/2 text-white w-full sm:w-1/2 max-w-xl`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug">
          {current.title}
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl mt-3 font-oswald-medium font-light">
          <span className="text-yellow-400 font-medium">
            {current.highlight}
          </span>
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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

      <div className="flex absolute top-1/4 right-[28px] font-[500] z-20 flex-col gap-30">
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Announcements
          </button>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
