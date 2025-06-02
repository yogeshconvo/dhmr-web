import React from "react";
import affiliatedImg from "../../assets/0c0fda6a-ea70-4b89-95fc-70b964befbc5.png"; // Replace with actual path if different

const FEATSection = () => {
  return (
    <div className="bg-[#fefaf3] px-6 md:px-16 py-14 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      {/* Left Content */}
      <div className="lg:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#333] font-oswald font-medium leading-tight mb-4">
          <span className="block border-t-4 border-[#F25022] w-10 mb-3"></span>
          AFFILIATED HOSPITALS
        </h2>

        {/* Subheading Paragraph */}
        <p className="text-[#555] text-base font-oswald font-light leading-relaxed mb-6">
          “At FEAT, students gain hands-on experience at the forefront of
          healthcare. Strategic partnerships with AVBRH, RNPC, SPDC, and MGAC
          Techno Health provide exceptional clinical exposure through
          internships, collaborative projects, and immersive learning programs.”
        </p>

        {/* Bullet Points */}
        <ul className="text-sm text-[#333] space-y-2 mb-6">
          <li>
            <span className="text-[#F25022] font-semibold">
              Hands-on Learning:
            </span>{" "}
            A 1500+ bedded teaching hospital enables real life-based research in
            diagnostics, precision medicine, and AI-powered care.
          </li>
          <li>
            Electives in Clinical Engineering.{" "}
            <span className="text-blue-600 font-semibold">
              Techno-health research. Access to live data.
            </span>
          </li>
          <li>
            <span className="text-[#F25022] font-semibold">
              Students Immersion Program:
            </span>{" "}
            Internship at Hospital (AVBRH, Nelson, DMMC)
          </li>
          <li>
            Life Saving Skills:
            <ul className="ml-4 list-disc list-inside">
              <li>SEL</li>
              <li>
                Medical Device Development – Neck Posture Monitoring Device
              </li>
              <li>
                Assistive Wearable Device to suppress hand tremor in Parkinson’s
              </li>
            </ul>
          </li>
        </ul>

        <a href="#" className="text-blue-600 text-sm underline">
          Know more about clinical exposure
        </a>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            src={affiliatedImg}
            alt="Affiliated Hospital"
            className="w-full h-auto object-cover"
          />
          {/* Slider dots (static) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
          </div>
          {/* Arrow Icon */}
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

export default FEATSection;
