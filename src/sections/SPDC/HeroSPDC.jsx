import React, { useState, useEffect } from "react";
import SPDCBanner1 from "../../assets/SPDCBanner1.png";
import SPDCBanner2 from "../../assets/SPDCBanner2.png";
import SPDCBanner3 from "../../assets/SPDCBanner3.png";

const HeroSPDC = () => {
  const slides = [
    {
      img: SPDCBanner1,
      title:
        "325+ DENTAL CHAIRS with\n(Affiliated to 1,500+ Bedded Multi-Specialty Hospital)",
      highlight:
        "Sharad Pawar Dental College & Hospital —\nA Landmark of Dental Excellence",
      textPosition: "left",
    },
    {
      img: SPDCBanner2,
      title: "75% DOCTORAL FACULTY,\n850+ YEARS OF TEACHING EXPERIENCE",
      highlight:
        "Learning by Doing — Hands-On Skill Training\nin a Simulated Environment",
      textPosition: "left",
    },
    {
      img: SPDCBanner3,
      title: "8 PG PROGRAMS,\n2880+ GRADUATES",
      highlight:
        "Postgraduate Precision — Advanced\nClinical Exposure from Day One",
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
      <div className="absolute inset-0 bg-opacity-40" />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 ${
          current.textPosition === "right"
            ? "right-0 text-right mr-10"
            : "left-0 text-left ml-10"
        } top-1/2 transform -translate-y-1/2 text-white w-full sm:w-1/2 max-w-xl`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
          {current.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-3 font-oswald-light font-light whitespace-pre-line">
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

export default HeroSPDC;
