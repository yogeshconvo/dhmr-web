import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import InternationalFootprints from "../../assets/IF.png";
import logo1 from "../../assets/logo/1.png";
import logo2 from "../../assets/logo/2.png";
import logo3 from "../../assets/logo/3.png";
import logo4 from "../../assets/logo/4.png";
import logo5 from "../../assets/logo/5.png";
import logo6 from "../../assets/logo/6.png";
import logo7 from "../../assets/logo/7.png";
import logo8 from "../../assets/logo/8.png";
import logo9 from "../../assets/logo/9.png";
import logo10 from "../../assets/logo/10.png";
import logo11 from "../../assets/logo/11.png";
import logo12 from "../../assets/logo/12.png";
import logo13 from "../../assets/logo/13.png";
import logo14 from "../../assets/logo/14.png";
import logo15 from "../../assets/logo/15.png";
import logo16 from "../../assets/logo/16.png";

const FootprintSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 6, src: logo6, alt: "Logo 6" },
    { id: 7, src: logo7, alt: "Logo 7" },
    { id: 8, src: logo8, alt: "Logo 8" },
    { id: 9, src: logo9, alt: "Logo 9" },
    { id: 10, src: logo10, alt: "Logo 10" },
    { id: 11, src: logo11, alt: "Logo 11" },
    { id: 12, src: logo12, alt: "Logo 12" },
    { id: 13, src: logo13, alt: "Logo 13" },
    { id: 14, src: logo14, alt: "Logo 14" },
    { id: 15, src: logo15, alt: "Logo 15" },
    { id: 16, src: logo16, alt: "Logo 16" },
    { id: 17, src: logo14, alt: "Logo 14" },
    { id: 18, src: logo15, alt: "Logo 15" },
    { id: 19, src: logo16, alt: "Logo 16" },
    { id: 20, src: logo16, alt: "Logo 20" },
  ];

  const showTab = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  // Tab 1 blocks data
  const tab1Blocks = [
    {
      id: 1,
      text: "Internationalization in University – Collaborations/ Academic Programs/ Learners Mobility/ Faculty Mobility/ Clinical Researches / Services/ Admission/ Placements.",
      minWidth: "250px",
    },
    {
      id: 2,
      text: (
        <>
          <strong className="font-medium">12 International centers</strong>
          <br />
          providing comprehensive international educational experience across
          University
        </>
      ),
      minWidth: "250px",
    },
    {
      id: 3,
      text: (
        <>
          <strong className="font-medium">Students from 35+ countries</strong>
     
          across multiple Programs.
        </>
      ),
      minWidth: "200px",
    },
    {
      id: 4,
      text: (
        <>
          International{" "}
          <strong className="font-medium">immersive opportunities</strong> for
          both Inward and Outward Learners for Electives/ Observerships /
          Fellowships.
        </>
      ),
      minWidth: "200px",
    },
    {
      id: 5,
      text: (
        <>
          <p className="mb-2">
            <strong className="font-medium">100+ international</strong>
            <br />
            Adjunct faculty.
          </p>
          <p>
            Opportunities for{" "}
            <strong className="font-medium">International Placements</strong>
          </p>
        </>
      ),
      minWidth: "200px",
    },
  ];

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
      `}</style>

      <div className="py-8 sm:py-12 px-0 max-w-full overflow-x-hidden">
        <div className="container mx-auto px-0 max-w-full">
          <div className="tab-container">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-8 xl:gap-10 justify-center">
              <button
                className={`relative pb-2 transition-all duration-300 text-center xl:text-left ${
                  activeTab === "tab1"
                    ? "text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-500"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={(e) => showTab(e, "tab1")}
              >
                <h3
                  className={`text-2xl xl:text-4xl ${
                    activeTab === "tab1" ? "font-medium" : "font-light"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  INTERNATIONAL FOOTPRINTS
                </h3>
              </button>
              <button
                className={`relative pb-2 transition-all duration-300 text-center xl:text-left ${
                  activeTab === "tab2"
                    ? "text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-500"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={(e) => showTab(e, "tab2")}
              >
                <h3
                  className={`text-2xl xl:text-4xl ${
                    activeTab === "tab2" ? "font-medium" : "font-light"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  OUR TALENT ACROSS INDUSTRIES
                </h3>
              </button>
            </div>

            {/* Mobile Tabs */}
            <div className="lg:hidden space-y-4 px-4">
              <button
                className={`w-full text-left relative pb-2 transition-all duration-300 ${
                  activeTab === "tab1"
                    ? "text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-500"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={(e) => showTab(e, "tab1")}
              >
                <h3
                  className={`text-lg sm:text-xl ${
                    activeTab === "tab1" ? "font-medium" : "font-light"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  INTERNATIONAL FOOTPRINTS
                </h3>
              </button>
              <button
                className={`w-full text-left relative pb-2 transition-all duration-300 ${
                  activeTab === "tab2"
                    ? "text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-500"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={(e) => showTab(e, "tab2")}
              >
                <h3
                  className={`text-lg sm:text-xl ${
                    activeTab === "tab2" ? "font-medium" : "font-light"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  OUR TALENT ACROSS INDUSTRIES
                </h3>
              </button>
            </div>

            {/* Tab Content 1 */}
            <div
              id="tab1"
              className={`bg-[#122E5E] mt-6 sm:mt-8 p-0 rounded-none sm:rounded-2xl mx-[10%] transition-all duration-300 ${
                activeTab === "tab1" ? "block" : "hidden"
              } px-0 sm:px-6`}
            >
              <div className="flex flex-col gap-6 items-center w-full">
                <div className="w-full flex justify-center">
                  <img
                    src={InternationalFootprints}
                    alt="International Footprints"
                    className="w-full max-w-full object-contain rounded-none p-4"
                    style={{ maxHeight: "700px" }}
                  />
                </div>

                {/* The blocks container */}
                {isMobile ? (
                  // Mobile: swiper slider without arrows or pagination
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    allowTouchMove={true}
                    className="w-full max-w-full"
                  >
                    {tab1Blocks.map((block) => (
                      <SwiperSlide key={block.id}>
                        <div
                          className="px-4 py-6 text-white text-sm sm:text-base"
                          style={{
                            fontFamily: "Helvetica, sans-serif",
                            minWidth: "auto",
                          }}
                        >
                          {block.text}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full flex gap-2  max-w-full mb-10 px-8 ">
                    {tab1Blocks.map((block) => (
                      <div
                        key={block.id}
                        className="px-4 py-6 border-r last:border-r-0 text-white text-sm sm:text-base"
                        style={{
                          fontFamily: "Helvetica, sans-serif",
                          minWidth: block.minWidth,
                        }}
                      >
                        {block.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tab Content 2 */}
            <div
              id="tab2"
              className={`bg-red-50 mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                activeTab === "tab2" ? "block" : "hidden"
              }`}
            >
              {isMobile ? (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={10}
                  slidesPerView={2}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  allowTouchMove={true}
                  className="w-full"
                  // No navigation or pagination
                >
                  {logos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                      <div className="flex items-center justify-center">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-auto max-w-[120px] max-h-[80px] object-contain transition-transform duration-200 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Desktop grid layout without borders and side margins
                <div className="grid grid-cols-5 gap-4 rounded-lg overflow-hidden">
                  {logos.map((logo) => (
                    <div
                      key={logo.id}
                      className="p-3 sm:p-4 flex items-center justify-center"
                      style={{ minHeight: "80px" }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-auto max-w-[150px] max-h-[100px] object-contain transition-transform duration-200 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 sm:mt-8 text-center">
                <p
                  className="text-gray-600 font-light text-sm sm:text-base"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Our graduates excel across diverse industries, contributing to
                  healthcare, technology, research, and innovation worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootprintSection;
