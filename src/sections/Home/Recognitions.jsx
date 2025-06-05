import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clinic4 from "../../assets/Clinik/clinik1.png";
import clinic2 from "../../assets/Clinik/clinik2.png";
import clinic1 from "../../assets/Clinik/clinik3.png";
import clinic3 from "../../assets/Clinik/clinik4.png";
import clinic5 from "../../assets/Clinik/clinik5.png";
import clinic6 from "../../assets/Clinik/clinik6.png";

import NL1 from "../../assets/Clinik/National/NL1.png";
import NL2 from "../../assets/Clinik/National/NL2.png";
import NL3 from "../../assets/Clinik/National/NL3.png";
import NL4 from "../../assets/Clinik/National/NL4.png";
import NL5 from "../../assets/Clinik/National/NL5.png";
import NL6 from "../../assets/Clinik/National/NL6.png";
import NL7 from "../../assets/Clinik/National/NL7.png";
import NL8 from "../../assets/Clinik/National/NL8.png";
import NL9 from "../../assets/Clinik/National/NL9.png";

import IM1 from "../../assets/IM1.png";
import IM2 from "../../assets/IM2.png";
import IM3 from "../../assets/IM3.png";
import IM4 from "../../assets/IM4.png";
import TheImpact from "../../assets/TheImpact2.png";
import IndiaImg from "../../assets/india.png";
import GroupImage from "../../assets/Group.png";

const logos = [
  { name: "Times Higher Education", src: clinic1 },
  { name: "AMEE", src: clinic2 },
  { name: "World Federation for Medical Education", src: clinic3 },
  { name: "American Heart Association", src: clinic4 },
  { name: "The SDG Accord", src: clinic5 },
  { name: "McGraw Hill Access Medicine", src: clinic6 },
];

const nationalLogos = [NL1, NL2, NL3, NL4, NL5, NL6, NL7, NL8, NL9];

const Recognitions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="md:py-12 px-3 sm:px-6 md:px-45 py-15  mx-auto overflow-hidden">
      <div>
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold text-[#707070] leading-tight">
          ACCREDITATIONS, RANKINGS <br className="hidden sm:block" />
          <span className="sm:hidden">& </span>AND RECOGNITIONS
        </h2>
      </div>

      <Slider {...settings}>
        {/* Slide 1: International */}
        <div className="bg-white p-2 sm:p-4 lg:p-1 min-h-[400px] sm:min-h-[450px] lg:h-[520px] flex flex-col justify-between">
          <div className="flex items-center gap-4 border-gray-300 pb-4 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl text-[#122E5E] font-oswald-medium">
              International
            </h2>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center p-2 sm:p-3 lg:p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-20 sm:max-h-24 lg:max-h-28 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2: National */}
        <div className="bg-white p-2 sm:p-4 lg:p-1 min-h-[400px] sm:min-h-[450px] lg:h-[520px] flex flex-col justify-between">
          <div className="flex items-center gap-4 border-gray-300 pb-4 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl text-[#122E5E] font-oswald-medium">
              National
            </h2>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
            {nationalLogos.map((src, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-24 sm:h-28 lg:h-36 w-full"
              >
                <img
                  src={src}
                  alt={`NL${idx + 1}`}
                  className="max-h-20 sm:max-h-24 lg:max-h-28 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 3: NAAC, NIRF, Times Higher */}
        <div className="bg-white px-4 mr-2 sm:px-6 lg:px-8 py-4 sm:py-6 min-h-[400px] sm:min-h-[450px] lg:h-[520px] flex items-center font-sans">
          <div className="flex flex-col lg:flex-row flex-wrap justify-between items-stretch gap-4 sm:gap-6 lg:gap-4 w-full font-sans">
            {/* NAAC Block - Mobile view will be flex row */}
            <div className="w-full flex flex-col lg:flex-row lg:w-1/4 text-center lg:text-left border-b lg:border-b-0 lg:border-r-2 pb-4 lg:pb-0 lg:pr-6">
              <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start w-full lg:w-auto">
                <img
                  src={IndiaImg}
                  alt="NAAC Logo"
                  className="lg:mx-0 w-24 sm:w-28 lg:w-32 xl:w-36 h-auto"
                  loading="lazy"
                />
                <div className="lg:mt-0 ml-4 lg:ml-0 text-left lg:text-left">
                  <h3 className="mt-0 sm:mt-3">
                    <span className="text-[#E60019] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                      NAAC A++
                    </span>
                    <span className="block text-[#122E5E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                      CGPA: 3.78
                    </span>
                  </h3>
                  <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-500 mt-1 lg:block">
                    Highest among Health Sciences University
                  </p>
                </div>
              </div>
            </div>

            {/* NIRF Rankings Block */}
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r-2 px-0 lg:px-2 xl:px-4 pb-4 lg:pb-0 flex flex-col justify-between">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src={GroupImage}
                  alt="NIRF Logo"
                  className="w-28 sm:w-32 lg:w-36 xl:w-40 max-w-xs"
                  loading="lazy"
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap justify-center lg:justify-start pt-2 sm:pt-3 gap-2 sm:gap-1 w-full">
                  {[
                    { num: "23", suffix: "RD", label: "Medical" },
                    { num: "24", suffix: "TH", label: "Dental" },
                    {
                      num: "42",
                      suffix: "ND",
                      label: (
                        <>
                          University <br className="hidden sm:block" />
                          <span className="sm:hidden">in </span> India
                        </>
                      ),
                    },
                    { num: "71", suffix: "ST", label: "Overall" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`px-2 sm:px-3 ${
                        i < 3 ? "lg:border-r-2" : ""
                      } ${i === 0 || i === 2 ? "border-r-2 sm:border-r-0" : ""}
                    border-gray-300 flex-1 text-center lg:text-left min-w-0`}
                    >
                      <em className="text-4xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-[#E60019] not-italic block">
                        {item.num}
                        <sup className="text-xs sm:text-sm font-bold mt-0 align-super">
                          {item.suffix}
                        </sup>
                      </em>
                      <span className="block text-sm sm:text-sm lg:text-base xl:text-2xl text-[#707070] mt-1 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Times Higher Education Block - unchanged */}
            <div className="w-full lg:w-1/5 text-center lg:text-left pt-4 lg:pt-0 flex flex-col justify-between">
              <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start">
                <em className="text-5xl text-start  sm:text-4xl lg:text-5xl xl:text-6xl text-[#E60019] leading-tight font-[500] not-italic block">
                  1001-
                  <br className="hidden lg:block" />
                  1200
                </em>
                <p className="text-3xl text-start sm:text-3xl lg:text-3xl xl:text-4xl text-[#707070] mt-1 lg:mt-1 font-sans leading-tight">
                  Times Higher <br className="hidden lg:block" /> Education{" "}
                  <br className="hidden lg:block" /> 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: SDG Cards */}
        <div className="bg-black text-white py-4 sm:py-6 lg:py-4 min-h-[400px] sm:min-h-[450px] lg:h-[450px] flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-3 py-1">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <img
                  src={TheImpact}
                  alt="Recognitions"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto mb-3 sm:mb-4 mx-auto lg:mx-0"
                />
                <div className="text-[#E1CD67]">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold">
                    Ranked{" "}
                    <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                      7
                      <sup className="text-lg sm:text-xl lg:text-2xl align-super">
                        th
                      </sup>
                    </span>{" "}
                    amongst
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl">
                    Health Science Universities in India <br />
                    under{" "}
                    <span className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                      "Overall"
                    </span>{" "}
                    category
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-full mx-auto lg:mx-0">
                {[IM1, IM2, IM3, IM4].map((img, i) => {
                  const data = [
                    {
                      rank: "15",
                      sdg: "3",
                      label: "In the world",
                      tag: "GOOD HEALTH <br/> AND WELLBEING",
                    },
                    {
                      rank: "3",
                      sdg: "3",
                      label: "In India",
                      tag: "GOOD HEALTH <br/> AND WELLBEING",
                    },
                    {
                      rank: "7",
                      sdg: "4",
                      label: "In India",
                      tag: "QUALITY <br/> EDUCATION",
                    },
                    {
                      rank: "4",
                      sdg: "5",
                      label: "In India",
                      tag: "GENDER <br/>EQUALITY",
                    },
                  ][i];

                  const colors = ["#1E90FF", "#3CB371", "#FFA500", "#FF6347"];

                  return (
                    <div
                      key={i}
                      style={{ backgroundColor: colors[i] }}
                      className="p-3 sm:p-4 lg:p-5 shadow-lg flex flex-col justify-between min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]"
                    >
                      <span className="text-xs sm:text-sm text-black ml-auto font-bold">
                        SDG {data.sdg}
                      </span>
                      <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black font-bold mb-1">
                        {data.rank}
                        <sup className="text-sm sm:text-base lg:text-xl align-super">
                          th
                        </sup>
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-black mb-1">
                        {data.label}
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="text-xs sm:text-xs lg:text-xs font-light uppercase leading-tight">
                          {data.tag.split("<br/>").map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              {idx !== data.tag.split("<br/>").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        <img
                          src={img}
                          alt="SDG"
                          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Recognitions;
