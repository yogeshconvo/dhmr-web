import React from "react";
import RI from "../../assets/RI.png";
import researchicon1 from "../../assets/RI/researchicon1.png";
import researchicon2 from "../../assets/RI/researchicon2.png";
import researchicon3 from "../../assets/RI/researchicon3.png";
import researchicon4 from "../../assets/RI/researchicon4.png";
import researchicon5 from "../../assets/RI/researchicon5.png";

const ResearchInnovation = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-16 font-oswald-medium">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-medium uppercase">
          <div className="w-20 h-1 bg-red-600 mb-2"></div>
          Research & Innovation
        </h2>

        {/* Main Content */}
        <div className="mt-10 flex flex-col lg:flex-row gap-7">
          {/* Left Image */}
          <div className="lg:w-2/5">
            <img
              src={RI}
              alt="Research"
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow"
            />
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center px-2 border-r border-gray-300">
              <img
                src={researchicon1}
                alt="Publications"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl font-bold text-orange-600">17500+</h3>
              <p className="text-gray-700 text-xl font-oswald-light">
                Publications
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-2 border-r border-gray-300">
              <img
                src={researchicon2}
                alt="Grants"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl font-bold text-orange-600">
                12500+ lakhs INR
              </h3>
              <p className="text-gray-700 text-xl font-oswald-light">
                in research grants
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <img
                src={researchicon3}
                alt="Patents"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl font-bold text-orange-600">130+</h3>
              <p className="text-gray-700 text-xl font-oswald-light">
                Patents granted
              </p>
            </div>

            <div className="col-span-full flex justify-center gap-5 mt-4">
              <div className="flex flex-col items-center text-center px-10 border-r border-gray-300">
                <img
                  src={researchicon4}
                  alt="Collaborations"
                  className="w-24 h-24 mb-2"
                />
                <h3 className="text-2xl font-bold text-orange-600">100+</h3>
                <p className="text-gray-700 text-xl font-oswald-light">
                  Research Collaborations
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-8">
                <img
                  src={researchicon5}
                  alt="Consortia"
                  className="w-24 h-24 mb-2"
                />
                <h3 className="text-2xl font-bold text-orange-600">15+</h3>
                <p className="text-gray-700 text-xl font-oswald-light">
                  Global consortia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-right">
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline font-oswald-light"
          >
            Know more about Research &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchInnovation;
