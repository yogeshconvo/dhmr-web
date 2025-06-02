import React from "react";
import outcomeImg from "../../assets/Group 1749.png";

const SecondHeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div>
        {/* Background Image */}
        <img
          src={outcomeImg}
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" />

        {/* Text Section */}
        <div className="absolute left-20 md:right-10 top-1/2 transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            BEGIN YOUR JOURNEY IN EVIDENCE-BASED,
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mt-2">
            OFFERING{" "}
            <span className="text-yellow-400 font-semibold">
              FUTURE-READY LEARNING
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
