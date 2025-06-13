import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { SectionHeader } from "./CampusFacilities";
import InternationalFootprints from "../../assets/IF.png";

// Logos
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
import logo17 from "../../assets/logo/26.png";
import logo18 from "../../assets/logo/27.png";
import logo19 from "../../assets/logo/28.png";
import logo20 from "../../assets/logo/29.png";
import logo21 from "../../assets/logo/30.png";
import logo22 from "../../assets/logo/31.png";
import logo23 from "../../assets/logo/32.png";
import logo24 from "../../assets/logo/33.png";
import logo25 from "../../assets/logo/34.png";
import logo26 from "../../assets/logo/35.png";
import logo27 from "../../assets/logo/36.png";
import logo28 from "../../assets/logo/37.png";
import logo29 from "../../assets/logo/38.png";
import logo30 from "../../assets/logo/39.png";
import logo31 from "../../assets/logo/40.png";
import logo32 from "../../assets/logo/41.png";
import logo33 from "../../assets/logo/42.png";
import logo34 from "../../assets/logo/43.png";
import logo35 from "../../assets/logo/44.png";
import logo36 from "../../assets/logo/45.png";
import logo37 from "../../assets/logo/46.png";
import logo38 from "../../assets/logo/47.png";
import logo39 from "../../assets/logo/48.png";
import logo40 from "../../assets/logo/49.png";
import logo41 from "../../assets/logo/50.png";

const FootprintSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1375);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showTab = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
    logo28,
    logo29,
    logo30,
    logo31,
    logo32,
    logo33,
    logo34,
    logo35,
    logo36,
    logo37,
    logo38,
    logo39,
    logo40,
    logo41,
  ];

  const tab1Blocks = [
    {
      id: 1,
      text: "Internationalization in University – Collaborations/ Academic Programs/ Learners Mobility/ Faculty Mobility/ Clinical Researches / Services/ Admission/ Placements.",
      minWidth: "190px",
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
      minWidth: "180px",
    },
    {
      id: 3,
      text: (
        <>
          <strong className="font-medium">Students from 35+ countries</strong>{" "}
          across multiple Programs.
        </>
      ),
      minWidth: "150px",
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
      minWidth: "180px",
    },
    {
      id: 5,
      text: (
        <>
          <p className="mb-2">
            <strong className="font-medium">100+ international</strong>
            <br /> Adjunct faculty.
          </p>
          <p>
            Opportunities for{" "}
            <strong className="font-medium">International Placements</strong>
          </p>
        </>
      ),
      minWidth: "180px",
    },
  ];

  return (
    <div className="py-8 sm:py-12 px-0 max-w-full overflow-x-hidden">
      <div className="container mx-auto px-0 max-w-full">
        <div className="tab-container">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-10 w-full px-4 sm:px-0">
            {["tab1", "tab2"].map((tab) => (
              <button
                key={tab}
                className={`w-full sm:w-auto text-center relative pb-2 transition-all duration-300 ${
                  activeTab === tab
                    ? "text-gray-800 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] "
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={(e) => showTab(e, tab)}
              >
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl ${
                    activeTab === tab ? "font-medium" : "font-light"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {/* {tab === "tab1"
                    ? "INTERNATIONAL FOOTPRINTS"
                    : "OUR TALENT ACROSS INDUSTRIES"} */}
                </h3>
                <>
                  {activeTab === tab ? (
                    <div className="h-1 w-20 bg-red-500 mt-1" />
                  ) : (
                    <div className="h-1 w-20  mt-1" />
                  )}
                  <h2
                    className={`text-2xl sm:text-3xl mt-3 ${
                      activeTab === tab
                        ? "text-[#707070]"
                        : "text-[rgba(112,112,112,0.30)]"
                    } uppercase`}
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {tab === "tab1"
                      ? "INTERNATIONAL FOOTPRINTS"
                      : "OUR TALENT ACROSS INDUSTRIES"}
                  </h2>
                </>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === "tab1" && (
        <div className="bg-[#122E5E] mt-6 sm:mt-8 p-0 rounded-none sm:rounded-2xl mx-[5%] sm:mx-[10%] px-0 sm:px-6">
          <div className="flex flex-col gap-6 items-center w-full">
            <img
              src={InternationalFootprints}
              alt="International Footprints"
              className="w-full object-contain p-4"
              style={{ maxHeight: "700px" }}
            />
            {isMobile ? (
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full"
              >
                {tab1Blocks.map((block) => (
                  <SwiperSlide key={block.id}>
                    <div className="px-4 py-6 pb-8 text-white text-sm sm:text-base font-sans max-w-[350px] sm:max-w-[600px] m-auto md:text-center">
                      {block.text}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full flex gap-6 mb-10 px-8 overflow-x-auto flex-wrap  justify-center">
                {tab1Blocks.map((block) => (
                  <div
                    key={block.id}
                    className="px-2  py-6 border-r last:border-r-0 text-white text-sm  w-14"
                    style={{ minWidth: block.minWidth }}
                  >
                    {block.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="bg-red-50 mt-6 mx-[5%] sm:mx-[15%] sm:mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            allowTouchMove
            className="!pb-10"
          >
            {[0, 20].map((startIndex, idx) => (
              <SwiperSlide key={idx}>
                <div className="block lg:hidden">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{
                      clickable: true,
                      el: `.custom-pagination-${idx}`,
                      bulletClass: "swiper-pagination-bullet",
                      bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    className="!pb-12"
                  >
                    {logos
                      .slice(startIndex, startIndex + 20)
                      .map((logo, index) => (
                        <SwiperSlide key={index}>
                          <div className="flex items-center justify-center min-h-[100px]">
                            <img
                              src={logo}
                              alt={`Logo ${startIndex + index + 1}`}
                              className="w-[150px]  object-contain hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <div
                    className={`hidden sm:flex custom-pagination custom-pagination-${idx} justify-center flex-nowrap gap-1 mt-2 max-w-[200px] mx-auto overflow-x-auto`}
                  />
                </div>

                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 rounded-lg overflow-hidden">
                  {logos
                    .slice(startIndex, startIndex + 20)
                    .map((logo, index) => (
                      <div
                        key={index}
                        className={`p-3 sm:p-4 flex items-center justify-center transition-colors duration-200
                            ${
                              (index + 1) % 5 !== 0
                                ? "border-r border-gray-300"
                                : ""
                            }
                            ${index < 15 ? "border-b border-gray-300" : ""}`}
                        style={{ minHeight: "80px" }}
                      >
                        <img
                          src={logo}
                          alt={`Logo ${startIndex + index + 1}`}
                          className="w-full h-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] max-h-[60px] sm:max-h-[80px] lg:max-h-[100px] object-contain hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 sm:mt-8 text-center">
            <p
              className="hidden text-gray-600 font-light text-sm sm:text-base"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Our graduates excel across diverse industries, contributing to
              healthcare, technology, research, and innovation worldwide.
            </p>
          </div>

          <style jsx>{`
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #ccc;
              border-radius: 9999px;
              opacity: 0.5;
              transition: all 0.3s ease;
              flex-shrink: 0;
            }
            .swiper-pagination-bullet-active {
              background: #f04e30;
              opacity: 1;
            }
            .custom-pagination {
              flex-wrap: nowrap !important;
              overflow-x: auto;
              scrollbar-width: none;
            }
            .custom-pagination::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default FootprintSection;
