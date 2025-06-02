import React from "react";
import SDGImg from "../../assets/SDGs.png";
import SG from "../../assets/SG.png";

export default function SDGSection() {
  return (
    <div className="bg-gray-200 px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <h2 className="text-gray-800 text-2xl sm:text-3xl ml-25 font-bold pl-2">
        <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4" />
        SDG
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={SDGImg}
            alt="Sustainable Development Goals Wheel"
            className="object-contain w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          <div>
            <img
              src={SG}
              alt="SDG Logo"
              className="h-12 sm:h-14 md:h-16 w-auto ml-4"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-5 px-4 sm:px-6 md:px-10">
            <div>
              <h3 className="text-green-600 font-bold text-lg sm:text-xl">
                SDZG 3:{" "}
                <span className="font-normal text-green-600">
                  Good health & well being
                </span>
              </h3>
              <hr className="w-full border-green-600 border-t-4" />
              <p className="text-gray-600 text-xs sm:text-sm">
                3rd amongst the Indian Universities and at 15th position in the
                world
              </p>
            </div>

            <div>
              <h3 className="text-red-600 font-bold text-lg sm:text-xl">
                SDZG 4:{" "}
                <span className="font-normal">
                  Quality education: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-red-600 border-t-4" />
              <p className="text-gray-600 text-xs sm:text-sm">
                4th amongst the Indian universities in the medicine and
                dentistry and 7th amongst the Indian universities
              </p>
            </div>

            <div>
              <h3 className="text-red-600 font-bold text-lg sm:text-xl">
                SDZG 5:{" "}
                <span className="font-normal">
                  Gender equality: Band 101-200
                </span>
              </h3>
              <hr className="w-full border-red-600 border-t-4" />
              <p className="text-gray-600 text-xs sm:text-sm">
                4th amongst the Indian universities in the medicine and
                dentistry and 4th amongst the Indian universities
              </p>
            </div>

            <div>
              <h3 className="text-blue-900 font-bold pt-7 text-lg sm:text-xl">
                Over all impact:{" "}
                <span className="font-normal">Band 401-600</span>
              </h3>
              <hr className="w-full border-blue-900 border-t-4" />
              <p className="text-gray-600 text-xs sm:text-sm">
                6th amongst the Indian universities in the medicine and
                dentistry and 15th amongst the Indian universities
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm mt-4 md:mt-6 px-4 sm:px-6 md:px-10">
            Datta Meghe Institute of Higher Education & Research (Deemed to be
            university) India.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-10">
            <div className="flex items-center gap-1">
              <div className="bg-green-600 text-white px-2 py-1 text-xs rounded">
                3
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">90.6</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                5
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">
                63.1-68.2
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-red-700 text-white px-2 py-1 text-xs rounded">
                4
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">
                69.3-74.7
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-blue-900 text-white px-2 py-1 text-xs rounded">
                17
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">
                36.9-52.8
              </span>
            </div>
            <span className="text-gray-600 text-xs sm:text-sm">69.9-75.7</span>
          </div>

          <a
            href="#"
            className="text-blue-600 text-xs sm:text-sm underline mt-2 sm:mt-4 inline-block px-4 sm:px-6 md:px-10"
          >
            Visit SDG to Know More
          </a>
        </div>
      </div>
    </div>
  );
}
