import React from "react";
import program1 from "../../assets/ProgramSPDC/1.png";
import program2 from "../../assets/ProgramSPDC/2.png";
import program3 from "../../assets/ProgramSPDC/3.png";
import program4 from "../../assets/ProgramSPDC/4.png";

const programs = [
  {
    src: program1,
    alt: "Undergraduate",
  },
  {
    src: program2,
    alt: "Postgraduate",
  },
  {
    src: program3,
    alt: "Certificate program/ EDP",
  },
  {
    src: program4,
    alt: "PhD",
  },
];

const ProgramsSection = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16 text-[#666]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-oswaldedium mb-10 relative">
        <span className="block border-t-4 border-[#F25022] w-10 mb-2"></span>
        OUR PROGRAMS
      </h2>

      {/* Images & Button Side by Side */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-3xl w-full">
          {programs.map((program, index) => (
            <div
              key={index}
              className="w-[180px] h-[180px] mx-auto text-center"
            >
              <img
                src={program.src}
                alt={program.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-20">
          <button className="bg-[#F25022] text-white text-sm font-oswaldMedium px-10 py-2">
            EXPLORE PROGRAMS
          </button>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="flex flex-col justify-end sm:flex-row sm:items-center gap-4 ">
        <a href="#" className="text-xs text-blue-600 underline">
          Check all Mandatory Disclosures{" "}
          <span className="font-bold">Here</span>
        </a>
      </div>
    </div>
  );
};

export default ProgramsSection;
