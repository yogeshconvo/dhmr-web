import React from "react";

const ResearchPage = () => {
  return (
    <div className="px-6 md:px-20 py-20 bg-white text-gray-700 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-4xl text-gray-500 font-oswald-medium font-medium leading-tight">
          INNOVATING FOR IMPACT.
          <br />
          RESEARCHING FOR HUMANITY.
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
          At DMIHER’s Directorate of Research and Innovation, we envision a
          dynamic, adaptive, and sustainable research ecosystem guided by
          principles of autonomy, transparency, accountability, adaptability,
          diversity, inclusivity, and community-centric. We strive to address
          interconnected health challenges while aligning with the Sustainable
          Development Goals and the National Education Policy. Through
          collaborative efforts, measurable progress, and interdisciplinary
          innovation, we aim to achieve global leadership in research and
          innovation, ultimately benefiting humanity.
        </p>
        <a
          href="#"
          className="mt-6 inline-block text-blue-600 hover:underline text-base font-light"
        >
          Know More
        </a>
      </section>

      {/* Commitment Section */}
      <h2 className="text-2xl md:text-3xl font-medium font-oswald-medium uppercase inline-block pb-1 ml-4 md:ml-20">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4 h-2" />
        Our Commitment
      </h2>
      <section className="flex flex-col items-center px-4 py-10 md:py-16 relative max-w-5xl mx-auto">
        <div className="flex items-start justify-center gap-3 max-w-full">
          <span className="text-[#fbf7e6] text-6xl sm:text-8xl font-bold leading-none select-none">
            “
          </span>
          <p className="text-gray-700 text-lg sm:text-xl md:text-3xl font-oswald-medium leading-relaxed font-light max-w-4xl">
            Aiming for Global research excellence, to empower innovation,
            collaboration, and impactful research, for a Healthier, and
            Sustainable Future.
            <span className="text-[#faf3d2] text-5xl sm:text-6xl font-bold leading-none ml-2 select-none">
              ”
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
