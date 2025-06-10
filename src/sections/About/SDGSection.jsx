import React from "react";
import SDGImg from "../../assets/SDGs.png";
import SDGLogo from "../../assets/SG.png";
import sdgfooter from "../../assets/sdgfooter.png";

export default function SDGSection() {
  return (
    <div className="bg-[#f0f2f5] relative px-4 sm:px-6 md:px-12 py-10 md:py-16 font-[Arial]">
      <div
        className="max-w-6xl mx-auto"
        style={{
          fontFamily:
            "Helvetica LT Std Bold Condensed, Helvetica LT Std, Helvetica, Arial, sans-serif",
          fontWeight: 700,
        }}
      >
        <div className="font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
          <h2 className="text-4xl font-bold font-sans text-[#707070]">SDG</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap- pt-10">
        {/* SDG Image */}
        <div className="flex-shrink-0 w-full lg:w-[45%] flex justify-center">
          <img
            src={SDGImg}
            alt="SDG Wheel"
            className="max-w-full w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px]"
          />
        </div>

        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[55%] max-w-[600px] pr-0 sm:pr-4 md:pr-6 lg:pr-10 flex flex-col gap-5">
          {/* SDG Logo */}
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={SDGLogo}
              alt="SDG Logo"
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
            />
          </div>

          {/* SDG Info Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 text-sm sm:text-base md:text-base">
            <div>
              <h3
                className="text-green-600 font-bold text-xl"
                style={{
                  fontFamily:
                    "Helvetica LT Std Bold Condensed, Helvetica LT Std, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                SDG 3:{" "}
                <span className="font-normal">
                  Good <br className="hidden md:block" /> health & well being
                </span>
              </h3>
              <hr className="w-full border-green-600 border-2 border-t-3 my-2" />
              <p className="text-[#707070] text-xm">
                3rd amongst the Indian Universities and at 15th position in the
                world
              </p>
            </div>

            <div>
              <h3
                className="text-[#F04E30] font-bold text-xl"
                style={{
                  fontFamily:
                    "Helvetica LT Std Bold Condensed, Helvetica LT Std, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                SDG 4:{" "}
                <span className="font-normal">
                  Quality education: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-[#F04E30] border-2  border-t-3 my-2" />
              <p className="text-[#707070] text-xm">
                4th amongst the Indian universities in the medicine and
                dentistry and 7th amongst the Indian universities
              </p>
            </div>

            <div>
              <h3
                className="text-[#F04E30] font-bold text-xl"
                style={{
                  fontFamily:
                    "Helvetica LT Std Bold Condensed, Helvetica LT Std, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                SDG 5:{" "}
                <span className="font-normal">
                  Gender equality: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-[#F04E30] border-2  border-t-3 my-2" />
              <p className="text-[#707070] text-xm">
                4th amongst the Indian universities in the medicine and
                dentistry and 4th amongst the Indian universities
              </p>
            </div>

            <div className="">
              <h3
                className="text-blue-900 font-bold text-xl"
                style={{
                  fontFamily:
                    "Helvetica LT Std Bold Condensed, Helvetica LT Std, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                Over all impact:{" "}
                <span className="font-normal">Band 401-600</span>
              </h3>
              <hr className="w-full border-blue-900 border-2  border-t-3 my-2" />
              <p className="text-[#707070] text-xm">
                6th amongst the Indian universities in the medicine and
                dentistry and 15th amongst the Indian universities
              </p>
            </div>
          </div>

          {/* University Description */}
          {/* <p className="text-[#707070] text-sm sm:text-base leading-snug mt-2 md:mt-4">
            Datta Meghe Institute of Higher Education & Research (Deemed to be
            university) India.
          </p> */}

          {/* Hex Pill Stats
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
            <HexPill color="bg-green-600" label="3" value="90.6" />
            <HexPill color="bg-[#F04E30]" label="5" value="63.1-68.2" />
            <HexPill color="bg-red-700" label="4" value="69.3-74.7" />
            <HexPill color="bg-blue-900" label="17" value="36.9-52.8" />
            <span className="text-[#707070] text-sm sm:text-base">
              69.9-75.7
            </span>
          </div> */}

          {/* Footer Texts */}
          {/* <p className="text-gray-600 text-sm sm:text-base pt-1">
            SDG Descriptions
          </p> */}
          <img
            src={sdgfooter}
            alt=""
            className="w-[55%] max-w-[800px] scale-y-[100%] absolute right-[14%] -bottom-[0.1vh] hidden md:block"
          />
        </div>
      </div>
      <a href="#" className="text-[#269BFF] ml-10 text-xs  underline pt-1">
        Visit SDG to <span className="font-medium">Know More</span>
      </a>
    </div>
  );
}

function HexPill({ color, label, value }) {
  return (
    <div className="flex items-center rounded-full overflow-hidden bg-white shadow text-sm sm:text-base font-semibold">
      <div className={`text-white ${color} px-3 py-1`}>{label}</div>
      <div className="bg-gray-100 px-3 py-1 text-[#707070]">{value}</div>
    </div>
  );
}
