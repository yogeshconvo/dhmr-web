import React from "react";

const SPDCHInfoSection = () => {
  return (
    <>
      <div className="py-14">
        <h2 className="flex items-center text-[#F04E30] font-[500] font-oswald-medium text-3xl tracking-wide uppercase mb-6">
          <hr className="flex-grow border-t border-[#F04E30] " />
          <span className="px-4 whitespace-nowrap">
            SHARAD PAWAR DENTAL COLLEGE & HOSPITAL (SPDCH)
          </span>
          <hr className="flex-grow border-t border-[#F04E30] " />
        </h2>
        <section className="bg-white text-center px-4 sm:px-8 md:px-16 py-12  mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium text-[#707070] font-[500] leading-snug mb-6">
            REDEFINING DENTAL LEARNING WITH <br />
            PRECISION, PURPOSE, AND PROGRESS
          </h1>

          {/* Body Text */}
          <div className="text-[#58595B] text-base sm:text-sm font-oswald-light leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              Established in 1991, SPDCH is a national benchmark in dental
              education, research, and clinical care. Ranked among India's top
              25 dental institutions (NIRF), it is powered by a faculty with
              850+ years of experience—75% holding additional or doctoral
              qualifications. Since 2022–23, SPDCH has adopted Competency-Based
              Dental Education (CBDE), a patient-focused, tech-enabled
              curriculum. With UG, 8 PG, and 5 Executive Development Programs,
              it equips students for competitive exams, career growth, and
              entrepreneurship.
            </p>
            <p className="mb-4">
              Immersive, hands-on learning and clinical readiness — our students
              work with CBCT, CAD-CAM, simulation labs, and 3D theaters, gaining
              hands-on experience in real-world settings, backed by a 1,500+
              bedded multi-specialty hospital. This enables immersive learning
              across advanced procedures, from cancer therapies to full-mouth
              rehabilitations. A robust research ecosystem—with 2,000+
              publications, 30+ patents, and ₹10+ crore in funded
              projects—shapes students into contributors and changemakers in
              dental science.
            </p>
            <p className="italic mt-6">
              With a legacy of excellence, cutting-edge infrastructure, and
              global collaborations, SPDCH continues to lead the future of
              dental education and healthcare—both in India and beyond.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SPDCHInfoSection;
