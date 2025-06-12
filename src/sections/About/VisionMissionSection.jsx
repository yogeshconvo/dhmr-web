import React from "react";
import VisionImg from "../../assets/About/Vision.png";
import Mission from "../../assets/About/Mission.png";

const VisionMissionSection = () => {
  return (
    <div className="w-full px-0 sm:px-8  md:px-15 lg:px-35 sm:py-20">
      <div className="max-w-5xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-4 max-md:gap-0 text-white">
        {/* Vision */}
        <div className="bg-[#0b2d62] p-5 sm:p-8 md:p-10 shadow-md min-h-[360px]">
          {/* Heading + Icon Row */}
          <div className="flex justify-between items-start mb-2">
            <div className="pt-5 sm:pt-12">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide font-oswald-medium">
                Vision
              </h2>
            </div>
            <img
              src={VisionImg}
              className="h-29 object-cover  sm:block filter brightness-10"
              alt="Vision Icon"
            />
          </div>

          {/* Paragraphs */}
          {/* Mobile - no <br> */}
          <p className="block sm:hidden text-lg leading-relaxed  ">
            “To emerge as the global centre of excellence in the best evidence
            based higher education encompassing a quality centric, innovative
            and interdisciplinary approach, generating refutative research and
            offering effective and affordable health care for the benefit of
            mankind”
          </p>

          {/* Desktop - with <br> */}
          <p className="hidden sm:block text-lg leading-relaxed  ">
            “To emerge as the global centre of <br /> excellence in the best
            evidence based <br /> higher education encompassing a quality <br />
            centric, innovative and interdisciplinary <br />
            approach, generating refutative research <br /> and offering
            effective and affordable health <br /> care for the benefit of the
            mankind”
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#e5cf60] p-6 sm:p-8 text-[#58595B] shadow-md min-h-[360px]">
          {/* Heading + Icon Row */}
          <div className="flex justify-between items-start mb-2">
            <div className="pt-5 sm:pt-16">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gray-700 font-oswald-medium">
                Mission
              </h2>
            </div>
            <img
              src={Mission}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain  sm:block"
              alt="Mission Icon"
            />
          </div>

          {/* Paragraphs */}
          <div
            className="space-y-1 text-xs sm:text-sm leading-snug text-[#58595B]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <p>
              “DMIHER shall develop competent, confident, concerned,
              compassionate and globally relevant professionals by quality,
              learner, community and evidence centric ‘competency-based model’
              of higher education with a value orientation, through all its
              constituent units.
            </p>
            <br />
            <p>
              It shall foster a conducive milieu for interdisciplinary research
              practices generating consequential and meaningful outcomes for the
              nation in general and the region in particular.
            </p>
            <br />
            <p>
              It shall deliver comprehensive quality health care services to the
              rural, needy, marginalized and underprivileged populace.
            </p>
            <br />
            <p>
              This shall be achieved through appropriate collaborative linkages
              and a proactive, transparent and accountable decentralized
              governance system.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
