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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                WORLD-CLASS INFRASTRUCTURE,
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl mt-4">
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
          <div className="flex flex-col lg:flex-row bg-gray-100 font-oswald-medium pb-10 h-[90vh] overflow-y-auto lg:items-center lg:justify-center">
            {/* Left section */}
            <div className="w-full  lg:w-1/3 flex items-center justify-center">
              <div>
                <h1 className="text-5xl font-oswald-medium text-[#122E5E]">
                  EXCELLENCE
                </h1>
                <h2 className="text-5xl text-yellow-400 mt-2">SHINES</h2>
              </div>
            </div>

            {/* Right section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-5">
                <div className="flex-1 min-w-[250px] bg-white flex justify-between items-center p-2">
                  <div>
                    <p className="text-sm leading-snug">
                      <span className="text-gray-500 text-xl">
                        4th Cycle <br /> Re-Accreditation
                      </span>
                      <br />
                      <span className="text-red-600 font-bold text-4xl">
                        NAAC A++
                      </span>
                      <br />
                      <span className="text-orange-500 text-2xl">
                        (CGPA 3.78)
                      </span>
                    </p>
                  </div>
                  <img src={IndiaImg} alt="India" className="w-20 md:w-30" />
                </div>

                {/* NIRF Box */}
                <div className="flex-[2] min-w-[250px] bg-white flex flex-wrap md:flex-nowrap items-center gap-4 p-2">
                  <img
                    src={GroupImage}
                    alt="NIRF Logo"
                    className="w-20 md:w-28"
                  />
                  <div className="flex gap-4 pl-10 md:gap-6 mt-2">
                    <div className="pr-4 border-r border-gray-300">
                      <p className="text-red-600 font-bold text-5xl leading-none">
                        42<span className="text-base align-super">ND</span>
                      </p>
                      <p className="text-xl text-gray-700 mt-1">
                        University in India
                      </p>
                    </div>
                    <div className="pr-4 border-r border-gray-300">
                      <p className="text-yellow-600 font-bold text-5xl leading-none">
                        23<span className="text-base align-super">RD</span>
                      </p>
                      <p className="text-xl text-gray-700 mt-1">Medical</p>
                    </div>
                    <div>
                      <p className="text-blue-500 font-bold text-5xl leading-none">
                        24<span className="text-base align-super">TH</span>
                      </p>
                      <p className="text-xl text-gray-700 mt-1">Dental</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:w-2/5 bg-white flex items-center justify-between p-2">
                  <div className="text-orange-600 font-bold text-5xl leading-tight">
                    15<sup className="text-base align-super">TH</sup>
                    <p className="text-xl text-black font-normal">
                      Global <br /> Ranking
                    </p>
                  </div>
                  <img
                    src={demo1}
                    alt="Impact Rankings"
                    className="h-24 md:h-38"
                  />
                </div>
                <div className="w-full md:w-3/10 bg-white flex justify-center items-center p-2">
                  <img
                    src={demo3}
                    alt="THE Logo"
                    className="w-40 md:w-52 h-auto"
                  />
                </div>
                <div className="w-full md:w-3/10 bg-white flex flex-col justify-between items-start p-2">
                  <img
                    src={demo4}
                    alt="World Rankings"
                    className="w-36 md:w-44 h-auto"
                  />
                  <p className="text-red-600 font-bold text-3xl mt-4">
                    Rank <br /> 1001–1200
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white flex flex-col md:flex-row justify-center items-center gap-6 p-2">
                <p className="text-red-600 font-bold text-3xl text-center">
                  Rank <br /> 600+
                </p>
                <img src={demo2} alt="WUR Asia" className="h-16 md:h-20" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
        <span className="mb-2 sm:mb-0 text-sm sm:ml-25">Live Ticker</span>

        <div className="flex flex-row flex-wrap items-center mr-10 text-center sm:text-left gap-x-4 gap-y-1">
          <div className="font-bold border-r-2 border-gray-600 pr-3 h-8 flex items-center">
            Admission Helpline: <span>+91 8888040999</span>
          </div>

          <div className="flex items-center text-sm bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 space-x-3">
            <span className="font-semibold">APPLY NOW</span>
          </div>
          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>
      <div className="flex absolute top-1/4 right-[28px] font-[500] z-20 flex-col gap-30">
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
