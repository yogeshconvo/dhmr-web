import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResearchBanner1 from "../../assets/ResearchBanner1.png";
import ResearchBanner2 from "../../assets/ResearchBanner2.png";
import ResearchBanner3 from "../../assets/ResearchBanner3.png";
const HeroResearch = () => {
  const navigate = useNavigate();
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

  const goToSlide = (index) => setCurrentSlide(index);

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[90vh] sm:h-[90vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={current.img}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className={`hidden sm:block absolute top-0 bottom-0 w-1/2 z-10 ${
          current.textPosition === "right"
            ? "left-0 bg-gradient-to-r from-black/40 to-transparent"
            : "right-0 bg-gradient-to-l from-black/40 to-transparent"
        }`}
      />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 ${
          current.textPosition === "right"
            ? "right-0 text-right mr-4 sm:mr-10"
            : "left-0 text-left ml-4 sm:ml-10"
        } top-1/2 transform -translate-y-1/2 text-white w-full sm:w-1/2 max-w-xl z-20`}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-oswald-medium font-medium leading-snug">
          {current.title}
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl mt-3 font-oswald-medium font-light">
          <span className="text-yellow-400 font-medium">
            {current.highlight}
          </span>
        </p>
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

      {/* Side Buttons */}
      <div className="flex absolute top-1/6 right-[22px] font-[500] z-20 flex-col gap-30">
        <div className="transform -rotate-90 origin-right">
          {/* Use anchor tag for external link */}
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-4 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right">
          {/* Use a button or div with onClick for internal navigation */}
          <button
            onClick={() => navigate("/admissions")}
            className="bg-[#122E5E] text-white text-sm px-6 py-4"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroResearch;
