import React from "react";
import SDGImg from "../../assets/SDGs.png";
import SDGLogo from "../../assets/SG.png";
// import "./SDGSection.css"; // CSS file for hex-pill

export default function SDGSection() {
  return (
    <div className="bg-[#E6E8EB] px-4 sm:px-6 md:px-12 py-10 md:py-16 font-[Arial]">
      <h2 className="text-gray-800 text-2xl sm:text-3xl font-[Helvetica] font-bold">
        <hr className="w-16 border-[#F04E30] border-t-4 mb-2" />
        SDG
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-8">
        {/* SDG Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img
            src={SDGImg}
            alt="SDG Wheel"
            className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
          />
        </div>

        {/* SDG Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="w-full flex justify-center lg:justify-start">
            <img src={SDGLogo} alt="SDG Logo" className="h-10 md:h-12 w-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-green-600 font-[Helvetica] font-bold">
                SDZG 3:{" "}
                <span className="font-normal">Good health & well being</span>
              </h3>
              <hr className="w-full border-green-600 border-t-2 my-1" />
              <p className="text-gray-700">
                3rd amongst the Indian Universities and at 15th position in the
                world
              </p>
            </div>

            <div>
              <h3 className="text-[#F04E30] font-[Helvetica] font-bold">
                SDZG 4:{" "}
                <span className="font-normal">
                  Quality education: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-[#F04E30] border-t-2 my-1" />
              <p className="text-gray-700">
                4th amongst the Indian universities in the medicine and
                dentistry and 7th amongst the Indian universities
              </p>
            </div>

            <div>
              <h3 className="text-[#F04E30] font-[Helvetica] font-bold">
                SDZG 5:{" "}
                <span className="font-normal">
                  Gender equality: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-[#F04E30] border-t-2 my-1" />
              <p className="text-gray-700">
                4th amongst the Indian universities in the medicine and
                dentistry and 4th amongst the Indian universities
              </p>
            </div>

            <div>
              <h3 className="text-blue-900 font-[Helvetica] font-bold">
                Over all impact:{" "}
                <span className="font-normal">Band 401-600</span>
              </h3>
              <hr className="w-full border-blue-900 border-t-2 my-1" />
              <p className="text-gray-700">
                6th amongst the Indian universities in the medicine and
                dentistry and 15th amongst the Indian universities
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-sm">
            Datta Meghe Institute of Higher Education & Research (Deemed to be
            university) India.
          </p>

          {/* Hex Pill Stats */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <HexPill color="bg-green-600" label="3" value="90.6" />
            <HexPill color="bg-[#F04E30]" label="5" value="63.1-68.2" />
            <HexPill color="bg-red-700" label="4" value="69.3-74.7" />
            <HexPill color="bg-blue-900" label="17" value="36.9-52.8" />
            <span className="text-gray-700 text-sm">69.9-75.7</span>
          </div>

          <p className="text-gray-600 text-sm pt-1">SDG Descriptions</p>

          <a href="#" className="text-blue-600 text-sm underline pt-2">
            Visit SDG to <span className="font-medium">Know More</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function HexPill({ color, label, value }) {
  return (
    <div className="hex-pill-container">
      <div className={`hex-left ${color}`}>{label}</div>
      <div className="hex-right">{value}</div>
    </div>
  );
}
