import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/0dd58be9-4091-4d07-91e4-02ba38814f19.png";
import Banner2 from "../../assets/a11996ea-b283-4290-81c4-28b794f4e82b.png";
import Banner3 from "../../assets/b826ac2b-7013-4f95-a735-83f2a492a2e3.png";

const HeroFEAT = () => {
  const slides = [
    {
      img: Banner1,
      title: "WHERE TOMORROW’S ENGINEERS",
      highlight: "BEGIN THEIR JOURNEY",
      subtitle:
        "Global exposure. Interdisciplinary learning.\nA campus built for innovation.",
      textPosition: "left",
    },
    {
      img: Banner2,
      title: "FROM CONCEPT TO CREATION —",
      highlight: "INNOVATION IN MOTION",
      subtitle:
        "Hands-on learning with AI, IoT, UAV tech and\nreal-world problem solving.",
      textPosition: "left",
    },
    {
      img: Banner3,
      title: "AT THE CORE OF GLOBAL DIALOGUE ON",
      highlight: "AI & TECH FUTURES",
      subtitle:
        "Thought leadership, research excellence,\nand high-impact collaborations.",
      textPosition: "left",
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
        alt="Slide Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 z-20 ${
          current.textPosition === "right"
            ? "right-0 text-right mr-10"
            : "left-0 text-left ml-10"
        } top-1/2 transform -translate-y-1/2 text-white w-full sm:w-1/2 max-w-xl`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
          {current.title}
        </h1>
        <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-medium mt-2 whitespace-pre-line">
          {current.highlight}
        </p>
        <p className="text-sm sm:text-base md:text-lg font-light mt-2 whitespace-pre-line">
          {current.subtitle}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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

export default HeroFEAT;
