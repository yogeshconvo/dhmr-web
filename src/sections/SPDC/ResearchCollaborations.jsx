import React from "react";
import researchicon1 from "../../assets/SPDC/logo1.png";
import researchicon2 from "../../assets/SPDC/logo2.png";
import researchicon3 from "../../assets/SPDC/logo3.png";
import researchicon4 from "../../assets/SPDC/logo4.png";

const ResearchCollaborations = () => {
  return (
    <div className="bg-[#f2f2f2] px-6 py-12 md:px-16 md:py-20 text-gray-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <div className="h-1 w-10 bg-[#e8502e] mb-4"></div>
          <h2 className="text-3xl md:text-4xl uppercase font-oswald-medium">
            Research & <br /> Collaborations
          </h2>
          <p className="mt-4 text-base md:text-lg  text-[#444]">
            <span className="font-[500] text-gray-600">
              Advancing Knowledge, Impacting Lives
            </span>
            <br />
            With numerous funded projects, patents, and high-impact
            publications, our research and innovation fosters a robust culture
            of inquiry. Strategic collaborations with leading institutions
            further amplify its research footprint, both nationally and
            globally.
            <br />
            <br />A respected center for dental research, we are actively
            advancing innovation across multiple clinical and academic domains.
          </p>
          <a
            href="#"
            className="text-[#007bff] underline mt-20 inline-block text-xs"
          >
            Know more about Research & Collaborations
          </a>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {/* Top 3 Items */}
          <div className="flex flex-col items-center px-2 border-r border-gray-300">
            <img src={researchicon1} alt="Patents" className="w-24 h-24 mb-2" />
            <h3 className="text-2xl font-bold text-orange-600 font-oswald-medium">
              30+
            </h3>
            <p className="text-xl text-gray-700 font-oswald-light">Patents</p>
          </div>

          <div className="flex flex-col items-center px-2 border-r border-gray-300">
            <img
              src={researchicon2}
              alt="Copyrights"
              className="w-24 h-24 mb-2"
            />
            <h3 className="text-2xl font-bold text-orange-600 font-oswald-medium">
              490+
            </h3>
            <p className="text-xl text-gray-700 font-oswald-light">
              Copyrights
            </p>
          </div>

          <div className="flex flex-col items-center px-2 sm:border-r-0 border-r border-gray-300">
            <img
              src={researchicon3}
              alt="Publications"
              className="w-24 h-24 mb-2"
            />
            <h3 className="text-2xl font-bold text-orange-600 font-oswald-medium">
              2000+
            </h3>
            <p className="text-xl text-gray-700 font-oswald-light">
              Research & Publications
            </p>
          </div>

          {/* Bottom 2 Items Centered */}
          <div className="col-span-2 sm:col-span-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex flex-col items-center px-6 sm:border-r border-gray-300">
              <img
                src={researchicon4}
                alt="Projects Funded"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl font-bold text-orange-600 font-oswald-medium">
                10+ cr
              </h3>
              <p className="text-xl text-gray-700 font-oswald-light text-center">
                Projects Funded
              </p>
            </div>

            <div className="sm:pl-2 pt-6 sm:pt-0 max-w-md">
              <p className="text-[#f28c28] text-start text-lg md:text-xl font-bold font-oswald-medium mb-1">
                Thrust areas:
              </p>
              <p className="text-gray-500  text-sm md:text-xl font-[400] text-left">
                Oral Cancer, Cleft Lip & Palate, Oral <br />
                Care, Orthodontic Appliances, <br />
                Medical Devices, Regenerative <br />
                Dentistry, Maxillofacial Prosthesis, <br />
                Herbal Dentistry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCollaborations;
