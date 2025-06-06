import React from "react";
import ResearchEco from "../../assets/RECO.png";

export default function ResearchEcosystem() {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-12 mx-auto ">
      <div className="grid md:grid-cols-10 gap-8 items-start w-full p-4 md:p-20">
        {/* Image for desktop */}
        <div className="md:col-span-7 flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={ResearchEco}
            alt="Research Ecosystem"
            className="max-w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-3 mt-6 md:mt-0 order-1 md:order-2">
          <h2 className="text-3xl font-bold  text-[#58595B]  mb-2">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
            RESEARCH <br /> ECOSYSTEM
          </h2>
          <h3 className="text-xl font-semibold text-[#58595B] mb-3">
            A Research Ecosystem <br />
            That Delivers Impact
          </h3>
          <p className="text-[#58595B] mb-3">
            <strong>Empowering Research at Every Level</strong>
            <br />
            From undergraduate students to PhD scholars and faculty, DMIHER
            nurtures a thriving research culture through:
          </p>
          <ul className="list-disc list-inside text-[#58595B] space-y-1">
            <li>Dedicated seed funding</li>
            <li>114+ advanced research labs</li>
            <li>49 specialized departments</li>
            <li>
              Facilities spanning AI, molecular epidemiology, tissue
              engineering, herbal medicine, gait & motion analysis, and more
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
