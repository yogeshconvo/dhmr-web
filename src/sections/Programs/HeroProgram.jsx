import React from "react";
import { useNavigate } from "react-router-dom";
import outcomeImg from "../../assets/Group 1749.png";

const SecondHeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full programmes-slider-hight overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay from Left */}
      <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t lg:from-black/50 from-black/90 via-black/30 to-transparent z-10" />

      {/* Text Section */}
      <div className="absolute left-2 sm:left-10 md:left-20 right-6 sm:right-10 top-[85%] lg:top-1/2 transform -translate-y-1/2 text-white max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-[700px] px-2 sm:px-4 z-20">
        <h1 className="text-3xl  md:text-3xl lg:text-[58px] font-bold leading-snug m-0">
          BEGIN YOUR JOURNEY IN EVIDENCE-BASED,
        </h1>
        <p className="text-3xl  md:text-3xl lg:text-[52px] mt-2 font-bold ">
          <span className="text-[#E1CD67] font-bold">
            FUTURE-READY LEARNING
          </span>
        </p>
      </div>

      {/* Side Buttons (rotated) */}
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

export default SecondHeroSection;
