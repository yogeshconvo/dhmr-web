import { useState } from "react";
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

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
      `}</style>

      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto">
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
            <div className="lg:hidden space-y-4">
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

            {/* Tab Content 1 - International Footprints */}
            <div
              id="tab1"
              className={`bg-[#122E5E] mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                activeTab === "tab1" ? "block" : "hidden"
              }`}
            >
              <div className="mt-4 sm:mt-6">
                <div className="mb-6 sm:mb-8">
                  <div className="w-full h-48 sm:h-64 lg:h-80 xl:h-96">
                    <img
                      src={InternationalFootprints}
                      alt="International Footprints"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
                  <div className="p-4 border-b sm:border-b-0 lg:border-r border-gray-400 lg:pr-6">
                    <p
                      className="text-white font-light text-sm sm:text-base"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Internationalization in University- Collaborations/
                      Academic Programs/ Learners Mobility/ Faculty Mobility/
                      Clinical Researches / Services/Admission/Placements.
                    </p>
                  </div>
                  <div className="p-4 border-b sm:border-b-0 lg:border-r border-gray-400 lg:pr-6">
                    <p
                      className="text-white font-light text-sm sm:text-base"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      <strong className="font-medium">
                        12 International centers
                      </strong>
                      <br />
                      providing comprehensive international educational
                      experience across University
                    </p>
                  </div>
                  <div className="p-4 border-b sm:border-b-0 lg:border-r border-gray-400 lg:pr-6">
                    <p
                      className="text-white font-light text-sm sm:text-base"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      <strong className="font-medium">
                        Students from 35+ countries
                      </strong>
                      <br />
                      across multiple Programs.
                    </p>
                  </div>
                  <div className="p-4 border-b sm:border-b-0 lg:border-r border-gray-400 lg:pr-6">
                    <p
                      className="text-white font-light text-sm sm:text-base"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      International{" "}
                      <strong className="font-medium">
                        immersive opportunities
                      </strong>{" "}
                      for both Inward and Outward Learners for Electives/
                      Observerships /Fellowships.
                    </p>
                  </div>
                  <div className="p-4">
                    <p
                      className="text-white font-light text-sm sm:text-base mb-2"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      <strong className="font-medium">
                        100+ international
                      </strong>
                      <br />
                      Adjunct faculty.
                    </p>
                    <p
                      className="text-white font-light text-sm sm:text-base"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Opportunities for{" "}
                      <strong className="font-medium">
                        International Placements
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content 2 - Our Talent Across Industries */}
            <div
              id="tab2"
              className={`bg-red-50 mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                activeTab === "tab2" ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 rounded-lg overflow-hidden">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className={`p-3 sm:p-4 flex items-center justify-center transition-colors duration-200
        ${(index + 1) % 5 !== 0 ? "border-r border-gray-300" : ""}
        ${index < 15 ? "border-b border-gray-300" : ""}`}
                    style={{
                      minHeight: "80px",
                    }}
                  >
                    {logos[index] ? (
                      <img
                        src={logos[index].src}
                        alt={logos[index].alt}
                        className="w-full h-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] max-h-[60px] sm:max-h-[80px] lg:max-h-[100px] object-contain transition-transform duration-200 hover:scale-105"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Additional content for industries section */}
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
