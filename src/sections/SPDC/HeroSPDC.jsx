import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SPDCBanner1 from "../../assets/SPDCBanner1.png";
import SPDCBanner2 from "../../assets/SPDCBanner2.png";
import SPDCBanner3 from "../../assets/SPDCBanner3.png";

// Simple parser using [[color]]text[[/color]]
const parseTitle = (title) => {
  const regex = /\[\[([^\]]+)\]\](.*?)\[\[\/\1\]\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) {
      parts.push(title.substring(lastIndex, match.index));
    }

    const color = match[1];
    const text = match[2];

    parts.push(
      <span key={match.index} className="font-semibold" style={{ color }}>
        {text}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < title.length) {
    parts.push(title.substring(lastIndex));
  }

  return parts;
};

const HeroSPDC = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: SPDCBanner2,
      title:
        "[[#E1CD67]]325+ DENTAL CHAIRS[[/#E1CD67]] with\n(Affiliated to 1,500+ Bedded Multi-Specialty Hospital)",
      highlight:
        "Sharad Pawar Dental College & Hospital —\nA Landmark of Dental Excellence",
      textPosition: "left",
    },
    {
      img: SPDCBanner3,
      title:
        "[[#E1CD67]]75% DOCTORAL[[/#E1CD67]] FACULTY,\n[[#E1CD67]]850+[[/#E1CD67]] YEARS OF TEACHING EXPERIENCE",
      highlight:
        "Learning by Doing — Hands-On Skill Training\nin a Simulated Environment",
      textPosition: "right",
    },
    {
      img: SPDCBanner1,
      title:
        "[[#E1CD67]]8 PG[[/#E1CD67]] PROGRAMS,\n[[#E1CD67]]2880+[[/#E1CD67]] GRADUATES",
      highlight:
        "Postgraduate Precision — Advanced\nClinical Exposure from Day One",
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

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top Strip */}
      <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
        <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
        <div className="flex items-center gap-x-5 gap-y-1">
          <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
            <span className="font-semibold text-xl">APPLY NOW</span>
          </div>
          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>

      {/* Helpline */}
      <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
        <a href="tel:+918888040999" className="block">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </a>
      </div>

      {/* Background image */}
      <img
        src={current.img}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40" />

      {/* Text Content */}
      <div
        className={`absolute px-4 sm:px-6 ${
          current.textPosition === "right"
            ? "right-0 text-left mr-10"
            : "left-0 text-left ml-10"
        } top-1/2 transform -translate-y-1/2 text-white w-full sm:w-1/2 max-w-xl`}
      >
        <h1 className="text-3xl md:text-4xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
          {parseTitle(current.title)}
        </h1>
        <p className="text-xl md:text-2xl mt-3 font-light whitespace-pre-line">
          {current.highlight}
        </p>
      </div>

      {/* Side Actions */}
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

export default HeroSPDC;
