import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slideImg from "../../assets/Datta-Megh.png";
import IndiaImg from "../../assets/india.png";
import GroupImage from "../../assets/Group.png";
import demo1 from "../../assets/Group-2.png";
import demo2 from "../../assets/WURA.png";
import demo3 from "../../assets/THE.png";
import demo4 from "../../assets/WUR.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1: Section 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh]">
            <img
              src={slideImg}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l to-transparent" />

            <div className="absolute right-5 md:right-10 top-1/2 transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
                WORLD-CLASS INFRASTRUCTURE,
              </h1>
              <p className="text-2xl sm:text-3xl md:text-5xl mt-4">
                OFFERING{" "}
                <span className="text-yellow-400 font-semibold">
                  15+ <br />
                  STREAMS
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Section 2 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row bg-gray-100 h-[90vh] font-oswald-medium pb-6 pt-2 sm:pt-4 lg:pt-2 sm:pb-8 lg:pb-4 overflow-y-auto lg:items-center lg:justify-center px-2 sm:px-4">
            {/* Left section */}
            <div className="w-full lg:w-1/3 flex items-center justify-center mt-4 lg:mt-0">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-oswald-medium text-[#122E5E]">
                  EXCELLENCE
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-yellow-400 mt-1 sm:mt-2">
                  SHINES
                </h2>
              </div>
            </div>

            {/* Right section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <div className="flex-1 min-w-[160px] lg:min-w-[200px] bg-white flex justify-between items-center p-2 lg:p-4">
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base leading-snug">
                      <span className="text-gray-500 text-base lg:text-lg xl:text-xl">
                        4th Cycle <br /> Re-Accreditation
                      </span>
                      <br />
                      <span className="text-red-600 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        NAAC A++
                      </span>
                      <br />
                      <span className="text-orange-500 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                        (CGPA 3.78)
                      </span>
                    </p>
                  </div>
                  <img
                    src={IndiaImg}
                    alt="India"
                    className="w-14 sm:w-16 lg:w-20 xl:w-24"
                  />
                </div>

                {/* NIRF Box */}
                <div className="flex-[2] min-w-[160px] lg:min-w-[300px] bg-white flex flex-wrap md:flex-nowrap items-center gap-3 lg:gap-4 p-2 lg:p-4">
                  <img
                    src={GroupImage}
                    alt="NIRF Logo"
                    className="w-14 sm:w-16 md:w-24 lg:w-28 xl:w-32"
                  />
                  <div className="flex gap-3 lg:gap-4 pl-3 sm:pl-5 lg:pl-6 flex-wrap">
                    <div className="pr-3 lg:pr-4 border-r border-gray-300">
                      <p className="text-red-600 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none">
                        42
                        <sup className="text-xs lg:text-sm align-super">ND</sup>
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
                        University in India
                      </p>
                    </div>
                    <div className="pr-3 lg:pr-4 border-r border-gray-300">
                      <p className="text-yellow-600 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none">
                        23
                        <sup className="text-xs lg:text-sm align-super">RD</sup>
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
                        Medical
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-500 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none">
                        24
                        <sup className="text-xs lg:text-sm align-super">TH</sup>
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
                        Dental
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap md:flex-nowrap gap-3 lg:gap-4">
                <div className="w-full md:w-2/5 bg-white flex items-center justify-between p-2 lg:p-4">
                  <div className="text-orange-600 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                    15<sup className="text-xs lg:text-sm align-super">TH</sup>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black font-normal">
                      Global <br /> Ranking
                    </p>
                  </div>
                  <img
                    src={demo1}
                    alt="Impact Rankings"
                    className="h-12 sm:h-20 md:h-28 lg:h-32 xl:h-36"
                  />
                </div>
                <div className="w-full md:w-3/10 bg-white flex justify-center items-center p-2 lg:p-4">
                  <img
                    src={demo3}
                    alt="THE Logo"
                    className="w-24 sm:w-32 md:w-40 lg:w-44 xl:w-48 h-auto"
                  />
                </div>
                <div className="w-full md:w-3/10 bg-white flex flex-col justify-between items-start p-2 lg:p-4">
                  <img
                    src={demo4}
                    alt="World Rankings"
                    className="w-20 sm:w-28 md:w-36 lg:w-40 xl:w-44 h-auto"
                  />
                  <p className="text-red-600 font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4">
                    Rank <br /> 1001–1200
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white flex md:flex-row justify-center items-center gap-3 lg:gap-4 p-2 lg:p-4 text-center md:text-left">
                <p className="text-red-600 font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                  Rank <br /> 600+
                </p>
                <img
                  src={demo2}
                  alt="WUR Asia"
                  className="h-10 sm:h-14 md:h-20 lg:h-24 xl:h-28"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
        <span className="mb-2 sm:mb-0 text-sm sm:ml-25"></span>

        <div className="flex flex-row flex-wrap items-center mr-10 text-center sm:text-left gap-x-4 gap-y-1">
          <div className="hidden md:flex font-bold border-r-2 border-gray-600 pr-3 h-8 items-center">
            Admission Helpline: <span>+91 8888040999</span>
          </div>

          <a
            href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 space-x-3"
          >
            <span className="font-semibold">APPLY NOW</span>
          </a>

          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>
      <div className="flex absolute top-1/6 right-[22px] font-[500] z-20 flex-col gap-30">
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Announcements
          </button>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
