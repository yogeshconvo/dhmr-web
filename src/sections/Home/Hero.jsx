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
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Slider Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[90vh]">
              <img
                src={slideImg}
                alt="Campus"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l to-transparent" />

              <div className="absolute right-5 md:right-10 top-[55%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                  WORLD-CLASS INFRASTRUCTURE,
                </h1>
                <p className="text-xl font-bold sm:text-2xl md:text-4xl mt-4">
                  OFFERING{" "}
                  <span className="text-[#E1CD67] font-bold">
                    15+ <br />
                    STREAMS
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row bg-gray-100 min-h-[90vh] py-6 sm:py-10 px-2 sm:px-4 lg:px-12">
              {/* Left */}
              <div className="w-full lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
                <div>
                  <h1 className="text-3xl sm:text-4xl xl:text-5xl text-[#122E5E] font-bold">
                    EXCELLENCE
                  </h1>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl text-yellow-400 mt-2 font-bold">
                    SHINES
                  </h2>
                </div>
              </div>

              {/* Right */}
              <div className="w-full lg:w-2/3 flex flex-col gap-y-6">
                {/* Row 1 */}
                <div className="w-full flex flex-wrap gap-4">
                  {/* NAAC */}
                  <div className="flex-1 min-w-[180px] bg-white flex justify-between items-center p-4 rounded">
                    <div>
                      <p className="leading-snug">
                        <span className="text-gray-500 text-lg lg:text-xl font-medium">
                          4th Cycle <br /> Re-Accreditation
                        </span>
                        <br />
                        <span className="text-red-600 font-bold text-2xl lg:text-3xl">
                          NAAC A++
                        </span>
                        <br />
                        <span className="text-orange-500 text-lg">
                          (CGPA 3.78)
                        </span>
                      </p>
                    </div>
                    <img src={IndiaImg} alt="India" className="w-16 lg:w-20" />
                  </div>

                  {/* NIRF */}
                  <div className="flex-[2] min-w-[260px] bg-white flex items-center gap-5 p-4 rounded">
                    <img
                      src={GroupImage}
                      alt="NIRF Logo"
                      className="w-20 lg:w-24"
                    />
                    <div className="flex gap-6 flex-wrap">
                      <div className="border-r border-gray-300 pr-4">
                        <p className="text-red-600 font-bold text-2xl lg:text-3xl leading-none">
                          42<sup className="text-sm align-super">ND</sup>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          University <br /> in India
                        </p>
                      </div>
                      <div className="border-r border-gray-300 pr-4">
                        <p className="text-yellow-600 font-bold text-2xl lg:text-3xl leading-none">
                          23<sup className="text-sm align-super">RD</sup>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">Medical</p>
                      </div>
                      <div>
                        <p className="text-blue-500 font-bold text-2xl lg:text-3xl leading-none">
                          24<sup className="text-sm align-super">TH</sup>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">Dental</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="w-full flex flex-wrap gap-4">
                  {/* Impact Rankings */}
                  <div className="basis-[36%] min-w-[200px] bg-white flex justify-between items-center p-4 rounded">
                    <div className="text-[#F7941D] font-bold text-4xl leading-tight">
                      15<sup className="text-sm align-super">TH</sup>
                      <p className="text-base text-[#707070] font-normal mt-1">
                        Global <br /> Ranking
                      </p>
                    </div>
                    <img
                      src={demo1}
                      alt="Impact"
                      className="h-10 sm:h-24 lg:h-28"
                    />
                  </div>

                  {/* THE */}
                  <div className="basis-[30%] min-w-[160px] bg-white flex justify-center items-center p-2 rounded">
                    <img src={demo3} alt="THE" className="w-40 lg:w-48" />
                  </div>

                  {/* World Rankings */}
                  <div className="basis-[30%] min-w-[160px] bg-white flex flex-col items-end justify-between p-2 rounded text-right">
                    <img
                      src={demo4}
                      alt="World Rankings"
                      className="w-40 lg:w-48"
                    />
                    <p className="text-red-600 font-bold text-xl mt-2">
                      Rank <br /> 1001–1200
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="w-full bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 p-4 rounded">
                  <p className="text-red-600 font-bold text-xl text-center sm:text-left">
                    Rank <br /> 600+
                  </p>
                  <img src={demo2} alt="WUR Asia" className="h-20" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Vertical Side Buttons */}
        <div className="flex absolute top-1/6 right-[22px] font-[500] z-20 flex-col gap-30">
          <div className="transform -rotate-90 origin-right">
            <a
              href="https://dmiher.edu.in/admissionform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#122E5E] text-white text-sm px-6 py-4 inline-block"
            >
              Announcements
            </a>
          </div>
          <div className="transform -rotate-90 origin-right">
            <button
              onClick={() => navigate("/admissions")}
              className="bg-[#122E5E] text-white text-sm px-6 py-4"
            >
              Admission Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Yellow Strip Moved Outside Slider */}
      <div className="w-full bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
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
    </>
  );
};

export default HeroSection;
