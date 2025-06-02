import React from "react";
import group240 from "../../assets/Group 302.png"; // Make sure the path is correct

const StatsSection = () => {
  const stats = [
    { number: "2", label: "Campuses" },
    { number: "270+", label: "Acres" },
    { number: "275+", label: "Programs" },
    { number: "1000+", label: "Faculty members" },
    { number: "3200+", label: "Hospital Beds" },
    { number: "75+", label: "Research & Innovation Labs" },
  ];

  return (
    <div
      className="bg-white bg-no-repeat bg-center bg-contain text-center px-4 md:px-12 py-12 mx-4 md:mx-20"
      style={{
        backgroundImage: `url(${group240})`,
      }}
    >
      <h2 className="text-2xl md:text-4xl font-[500] font-oswald-medium p-6 md:p-10 text-gray-500 mb-4 leading-snug">
        STEP INTO THE WORLD OF <br />
        <span className="font-oswald-medium">
          EVIDENCE-DRIVEN, <br />
          COMPETENCY-BASED LEARNING.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-6 md:mt-10">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#E1CD67] rounded-full w-25 h-25 sm:w-25 sm:h-25 md:w-35 md:h-35 flex items-center justify-center shadow-md">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 font-oswald-medium leading-tight">
                {item.number}
              </span>
            </div>
            <p className="mt-2 text-[15px] sm:text-sm md:text-2xl text-blue-900 font-oswald-medium text-center font-bold leading-snug max-w-[6rem] sm:max-w-[7rem] md:max-w-[9rem]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 md:mt-10 text-gray-700 max-w-4xl mx-auto px-2 md:px-4 text-base md:text-lg font-oswald-light">
        Founded in 1990 and recognized as a Deemed-to-be-University in 2005,
        DMIHER is a dynamic hub of multidisciplinary learning. With exceptional
        faculty, state-of-the-art facilities, and an industry-aligned
        curriculum, it fuels innovation, research, and a vibrant campus life—
        shaping future leaders ready to make an impact.
      </p>
    </div>
  );
};

export default StatsSection;
