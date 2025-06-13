import React from "react";

const ResearchPage = () => {
  return (
    <div className="px-6 md:px-20 pt-20 bg-white text-[#707070] max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <h2 className="text-2xl md:text-3xl font-medium font-oswald-medium uppercase inline-block pb-1 ml-4 md:ml-20">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4 h-2" />
        Our Commitment
      </h2>
      <section className="flex flex-col items-center px-2 sm:px-4 py-8 md:py-16 relative max-w-5xl mx-auto">
        <div className="flex  sm:flex-row items-start sm:items-start justify-start gap-2 sm:gap-3 max-w-full">
          <span className="text-[#faf3d2] text-8xl sm:text-8xl md:text-9xl ml-2 -mt-4 select-none  font-oswald-medium">
            “
          </span>
          <p
            className="text-[#58595B] text-2xl "
            style={{
              fontFamily:
                '"Helvetica LT Std", "Helvetica LT Std Condensed", sans-serif',
            }}
          >
            Aiming for Global Research Excellence to Empower Innovation,
            Collaboration, and Impactful Research for a Healthier and
            Sustainable Future
            <span className="text-[#faf3d2] text-7xl sm:text-7xl md:text-8xl font-bold leading-none ml-2 select-none align-middle h-12 inline-flex rotate-x-180 relative bottom-2">
              ”
            </span>
          </p>
        </div>
      </section>
      <section className="text-center mb-16 px-4">
        <h1 className="text-[30px] mt-12 lg:mt-8 lg:text-[39px] text-[#707070] font-oswald-medium font-medium leading-tight">
          INNOVATING FOR IMPACT.
          <br />
          RESEARCHING FOR HUMANITY.
        </h1>
        <p
          className="mt-6 text-[12px] text-[#58595B] max-w-3xl tracking-wider mx-auto"
          style={{ fontFamily: "Arial, Regular, sans-serif" }}
        >
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
          className="mt-6 inline-block text-[#269BFF] underline hover:underline text-base font-light"
        >
          Know More
        </a>
      </section>

      {/* Commitment Section */}
    </div>
  );
};

export default ResearchPage;
