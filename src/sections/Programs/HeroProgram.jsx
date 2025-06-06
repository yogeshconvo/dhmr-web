import React from "react";
import { useNavigate } from "react-router-dom";
import outcomeImg from "../../assets/Group 1749.png";

const SecondHeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] sm:h-[85vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10" />

      {/* Text Section */}
      <div className="absolute left-6 sm:left-10 md:left-20 right-6 sm:right-10 top-1/2 transform -translate-y-1/2 text-white max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg px-2 sm:px-4 z-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          BEGIN YOUR JOURNEY IN EVIDENCE-BASED,
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-bold">
          <span className="text-[#E1CD67] font-bold">
            FUTURE-READY LEARNING
          </span>
        </p>
      </div>

      {/* Side Buttons (rotated) */}
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

export default SecondHeroSection;
