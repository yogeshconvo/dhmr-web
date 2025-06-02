import React from "react";
import buildingImage from "../../assets/SPDC/SPDC-Building.png"; // replace with your image path

const SPDCSection = () => {
  return (
    <div className="bg-[#fefaf3] px-6 md:px-35 py-20 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      {/* Left Content */}
      <div className="lg:w-1/2 pb-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-gray-500 font-oswald font-medium leading-tight mb-4">
          <span className="block border-t-4 border-[#F25022] w-10 mb-3"></span>
          SHARAD PAWAR DENTAL <br /> COLLEGE & HOSPITAL
        </h2>

        {/* Subheading Paragraph */}
        <p className="text-gray-500 text-base font-oswald font-[400] leading-relaxed mb-6">
          One of Central India’s largest and most reputed teaching hospitals,
          SPDC is committed to promotive, preventive, and therapeutic dental
          care of the highest quality. Continuously evolving to meet the growing
          needs of Vidarbha and neighboring states, the hospital stands as a
          pillar of accessible oral healthcare. Notably, it remained fully
          operational during the COVID-19 pandemic, ensuring uninterrupted
          service to the community—guided by its vision of “Optimal Oral Health
          through Quality Care.”
        </p>

        {/* Stats */}
        <ul className="text-sm text-gray-500 space-y-2 mb-6">
          <li>
            <span className="text-[#F25022] font-semibold">34+ years</span> of
            legacy in dental care
          </li>
          <li>
            <span className="text-blue-600 font-semibold">400+ patients</span>{" "}
            served daily
          </li>
          <li>
            <span className="text-yellow-500 font-semibold">
              325+ dental chairs
            </span>
          </li>
          <li>
            Attached{" "}
            <span className="text-[#F25022] font-semibold">
              1,500+ bed hospital, multi-specialty and cancer
            </span>{" "}
            hospital
          </li>
          <li>
            <span className="text-[#F25022] font-semibold">
              20 dedicated beds
            </span>{" "}
            for dental care with advanced diagnostics and treatment facilities
          </li>
        </ul>

        {/* Know More Link */}
        <a href="#" className="text-blue-300 text-[10px] underline">
          Know more about SPDC
        </a>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            src={buildingImage}
            alt="SPDC Building"
            className="w-full h-auto object-cover"
          />
          {/* Optional slider dots and arrow for mock effect */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            <svg
              className="w-4 h-4 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7.05 4.55a1 1 0 0 0 0 1.4L10.1 9.1 7.05 12.15a1 1 0 1 0 1.4 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPDCSection;
