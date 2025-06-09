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
import slide2 from "../../assets/heroslide2.png";
import slide1 from "../../assets/heroslide1.png";
import { useNavigate } from "react-router-dom";
import garden from "../../assets/garden.jpg";
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Slider Section */}
      <div className="relative w-full hero-slider-hight overflow-hidden">
        <Swiper
          // modules={[Autoplay, Pagination]}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          // loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full hero-slider-hight">
              <img
                src={slideImg}
                alt="Campus"
                className="absolute inset-0 w-full h-full object-cover object-[42%]"
              />

              {/* Existing left to right gradient */}
              <div className="absolute inset-0 bg-gradient-to-l to-transparent" />

              {/* NEW: Bottom to top black gradient only on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />

              {/* Content */}
              <div className="absolute left-[0%] sm:left-auto sm:right-[40%] md:right-20 md:top-[55%] top-[80%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
                <h1 className="font-oswald-medium tracking-wider text-4xl md:text-5xl font-[500]">
                  WORLD-CLASS INFRASTRUCTURE,
                </h1>
                <p className="font-oswald-medium text-4xl md:text-5xl font-[500]">
                  OFFERING{" "}
                  <span className="text-[#E1CD67] tracking-wider font-bold">
                    15+ <br />
                    STREAMS
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* py-6 sm:py-10 px-2 sm:px-4 lg:px-12 */}
            <div
              className="flex flex-col-reverse items-center justify-between md:justify-center lg:flex-row   hero-slider-hight p-2 md:p-8 hero-slider-bg md:gap-10"
              // style={{
              //   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${garden})`,
              //   objectFit: "fill",
              //   backgroundPosition: "center ",
              // }}
            >
              {/* Left */}
              <div className="hidden md:flex w-full lg:w-2/7  items-center justify-start xl:justify-center  mt-2 lg:mt-0 excellence-wrod">
                <div className="">
                  <h1 className="text-3xl sm:text-4xl xl:text-5xl text-secondary md:text-primary font-bold ">
                    EXCELLENCE
                  </h1>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl text-white md:text-secondary mt-2 font-bold !m-0">
                    SHINES
                  </h2>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                <img src={slide2} alt="" className="w-[92%]" />
              </div>

              <div className="flex md:hidden items-center justify-center flex-1 w-full h-full">
                <img src={slide1} alt="" className="h-[100%]" />
              </div>

              {/* Right */}
              {/* <div className="md:hidden w-full lg:w-5/7 flex flex-col gap-y-2 2xl:gap-y-4 lg:my-12">
                {/* Row 1  
                <div className="w-full flex flex-wrap gap-2 2xl:gap-4 flex-col 2xl:flex-row ">
                  {/* NAAC 
                  <div className="flex-1 min-w-[180px] bg-white flex justify-between items-center px-6 py-2 lg:py-6 rounded 2xl:p-8">
                    <div>
                      <p className="leading-snug">
                        <span className="text-gray-500 text-xs lg:text-2xl font-medium block mb-2 ">
                          4th Cycle <br /> Re-Accreditation
                        </span>
                        <span className="text-orange font-bold text-xl  ">
                          NAAC A++
                        </span>
                        <br />
                        <span className="text-orange text-xl ">
                          (CGPA 3.78)
                        </span>
                      </p>
                    </div>
                    <img src={IndiaImg} alt="India" className="w-[100px]  " />
                  </div>

                  {/* NIRF  
                  <div className="flex-[2] min-w-[260px] bg-white flex items-center gap-5 p-4 rounded 2xl:p-8">
                    <img
                      src={GroupImage}
                      alt="NIRF Logo"
                      className="w-[80px] lg:w-[120px]"
                    />
                    <div className="flex gap-6  w-full justify-evenly">
                      <div className="border-r border-ligh-gray pr-4 xl:pr-8">
                        <p className="text-red-600 font-bold text-[28px] lg:text-[64px] leading-none">
                          42
                          <sup className="text-sm lg:text-[22px] align-super">
                            ND
                          </sup>
                        </p>
                        <p className="text-[16px] lg:text-[26px] text-gray mt-1">
                          University <br /> in India
                        </p>
                      </div>
                      <div className="border-r  border-ligh-gray pr-4 xl:pr-8">
                        <p className="text-yellow-600 font-bold text-[28px] lg:text-[64px] leading-none">
                          23
                          <sup className="text-sm lg:text-[22px] align-super">
                            RD
                          </sup>
                        </p>
                        <p className=" text-[16px] lg:text-[26px] text-gray mt-1">
                          Medical
                        </p>
                      </div>
                      <div>
                        <p className="text-blue-500 font-bold text-[28px] lg:text-[64px] leading-none">
                          24
                          <sup className="text-sm lg:text-[22px] align-super">
                            TH
                          </sup>
                        </p>
                        <p className="text-[16px] lg:text-[26px] text-gray mt-1">
                          Dental
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2  
                <div className="w-full flex   gap-2 xl:gap-4 flex-col xl:flex-row ">
                  {/* Impact Rankings  
                  <div className="xl:flex-1 min-w-[200px] bg-white flex justify-between  items-center p-2 rounded 2xl:p-8">
                    <div className="text-[#F7941D] font-bold text-4xl leading-tight ">
                      <span>
                        15<sup className="text-lg align-super">TH</sup>
                      </span>
                      <p className="text-base text-[#707070] font-normal mt-1 ml-1">
                        Global <br /> Ranking
                      </p>
                    </div>
                    <img src={demo1} alt="Impact" className="w-[200px]" />
                  </div>

                  <div className="flex w-full gap-2 xl:gap-4 xl:flex-1 ">
                    {/* THE  
                    <div className="flex-1  bg-white flex justify-center items-center p-2 rounded 2xl:p-8">
                      <img src={demo3} alt="THE" className="w-[150px]" />
                    </div>

                    {/* World Rankings  
                    <div className="flex-1   bg-white flex flex-col items-center justify-center p-2 rounded 2xl:p-8">
                      <img
                        src={demo4}
                        alt="World Rankings"
                        className="w-[150px]"
                      />
                      <p className="text-red-600 font-bold text-xl mt-2">
                        Rank <br className="hidden xl:block" /> 1001–1200
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3  
                <div className="w-fit ml-auto xl:w-full xl:ml-0 bg-white flex flex-col-reverse md:flex-row justify-center items-center gap-1 xl:gap-4  p-2 rounded 2xl:p-8">
                  <p className="text-red-600 font-bold text-xl ml-auto xl:ml-0 xl:font-bold xl:text-5xl">
                    Rank <br className="hidden xl:block" /> 600+
                  </p>
                  <img
                    src={demo2}
                    alt="WUR Asia"
                    className="w-[240px] xl:w-[400px]"
                  />
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Vertical Side Buttons */}
        <div className="flex absolute top-1/6 max-sm:top-1/5 right-[22px] font-[500] h-full z-20 flex-col gap-30">
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
      <div className=" w-full sm:h-[60px] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row  justify-between items-start sm:items-center z-20">
        <span className="mb-2 sm:mb-0 text-sm sm:ml-25">
          Admissions open for 2025-26
        </span>

        <div className="flex flex-row flex-wrap items-center mr-10 text-center sm:text-left gap-x-4 gap-y-1">
          <div className="hidden md:flex font-bold border-r-2 border-gray-600 pr-3 h-8 items-center">
            Admission Helpline: <span>+91 8888040999</span>
          </div>

          <a
            href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm bg-[#F04E30] text-white px-5 py-2 sm:px-5 sm:py-2 space-x-3"
          >
            <span className="font-semibold">APPLY NOW</span>
          </a>

          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
