import React from "react";
import { useNavigate } from "react-router-dom";
import outcomeImg from "../../assets/Group 1749.png";

const SecondHeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Outcome Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text Section */}
      <div
        className="absolute top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
    left-0 right-0
    px-4 sm:px-6
    text-white
    max-w-full
    w-auto
    sm:w-1/2
    lg:w-1/2
    mx-auto
    text-left
    z-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-bold leading-tight max-w-full">
          BEGIN YOUR JOURNEY IN EVIDENCE-BASED,
          <br />
          <span className="text-[#E1CD67]">FUTURE-READY LEARNING</span>
        </h1>
      </div>

      {/* Floating Vertical Buttons */}
      <div className="fixed top-1/3 right-[20px] z-20 flex flex-col gap-26 font-[500]">
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

export default SecondHeroSection;
