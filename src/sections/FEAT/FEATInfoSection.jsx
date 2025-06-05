import React from "react";

const FEATInfoSection = () => {
  return (
    <section className="bg-white text-center px-4 sm:px-8 md:px-16 py-12  mx-auto">
      {/* Top Label */}
      <h2 className="flex items-center text-red-600 font-oswald-medium text-3xl tracking-wider uppercase mb-6">
        <hr className="flex-grow border-t border-[#F04E30] " />
        <span className="px-4 whitespace-nowrap">
          FACULTY OF ENGINEERING AND TECHNOLOGY (FEAT)
        </span>
        <hr className="flex-grow border-t border-[#F04E30] " />
      </h2>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium text-gray-800 leading-snug mb-6">
        FUTURE-FOCUSED. TECHNOLOGY-LED.
      </h1>

      {/* Body Text */}
      <div className="text-gray-700 text-base sm:text-lg font-oswald-light leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          FEAT delivers student-centric learning with a strong research
          backbone—specializing in Techno-health and Clinical Engineering
          through AI-driven healthcare solutions, biomedical engineering, and
          medical technology. We offer cutting-edge UG and PG programs covering
          AI, Data Science, Machine Learning, Computer Science, Design, Medical
          and Biomedical Engineering. Our Ph.D. programs span Computer Science,
          Electronics, Wireless Communication, UAV Technology, and Clinical
          Engineering—building deep, interdisciplinary expertise in AI, IoT,
          cybersecurity, and health informatics. FEAT empowers students to lead
          in tomorrow’s most transformative fields—software, healthcare, and
          biotechnology.
        </p>
      </div>
    </section>
  );
};

export default FEATInfoSection;
