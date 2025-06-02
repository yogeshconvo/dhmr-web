import React, { useState, useEffect } from "react";
import ResearchBanner1 from "../../assets/ResearchBanner1.png";
import ResearchBanner2 from "../../assets/ResearchBanner2.png";
import ResearchBanner3 from "../../assets/ResearchBanner3.png";

const HeroResearch = () => {
  const slides = [
    {
      img: ResearchBanner2,
      title: "A BEACON OF RESEARCH,",
      highlight: "  INNOVATION & ENTREPRENEURSHIP",
      textPosition: "right",
    },
    {
      img: ResearchBanner3,
      title: "ADVANCING EVIDENCE-CENTRIC,",
      highlight: "  OUTCOME-ORIENTED INQUIRY.",
      textPosition: "left",
    },
    {
      img: ResearchBanner1,
      title: "PROMOTING PATIENT-CENTRIC,",
      highlight: "  PRACTICE-LED RESEARCH.",
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={current.img}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-opacity-40" />

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
        <p className="text-2xl sm:text-3xl md:text-4xl mt-3 font-oswald-medium font-light">
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
    </div>
  );
};

export default HeroResearch;
