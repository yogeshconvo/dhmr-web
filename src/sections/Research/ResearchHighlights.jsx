import React from "react";
import researchicon1 from "../../assets/RI/researchicon1.png";
import researchicon2 from "../../assets/RI/researchicon2.png";
import researchicon3 from "../../assets/RI/researchicon3.png";

const ResearchHighlights = () => {
  return (
    <div className="bg-[#fbf7e6] py-16 px-6 md:px-20 text-gray-800 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-oswald-medium uppercase font-medium relative text-gray-600 inline-block">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-1 border-t-4 h-2 mx-auto md:mx-0" />
          Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-gray-600 px-4 md:px-0">
        {/* Column 1 */}
        <div className="space-y-4 md:border-r md:border-gray-300 md:pr-6">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon1}
              alt="researchicon1"
              className="w-28 h-28"
            />
          </div>
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">17,500+</span> publications
            in top-tier journals (Scopus, WoS, PubMed) like The Lancet, NEJM,
            BMJ, Nature, etc.
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">50,000+</span> citations
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">500+</span> High Impact
            publications
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 md:border-r md:border-gray-300 md:px-6">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon3}
              alt="researchicon3"
              className="w-28 h-28"
            />
          </div>
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">130+</span> patents granted
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">180+</span> patents
            published
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">1500+</span> copyrights
            registered
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">185+</span> ICMR Short-Term
            Studentships
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">85+</span> ICMR PG thesis
            support grants
          </p>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 md:px-6">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon2}
              alt="researchicon2"
              className="w-28 h-28"
            />
          </div>
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">12,500+</span> lakhs INR in
            research <br /> grants
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">100+</span> Research
            Collaborations
          </p>
          <hr />
          <p className="text-sm md:text-base font-normal">
            <span className="text-red-600 font-bold">15+</span> Global Consortia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchHighlights;
