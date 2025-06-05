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
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 md:py-12 max-w-screen-xl mx-auto overflow-hidden">
      <div>
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        <h2 className="text-4xl mb-6 font-bold text-[#707070]">
          ACCREDITATIONS, RANKINGS <br /> AND RECOGNITIONS
        </h2>
      </div>

      <Slider {...settings}>
        {/* Slide 1: International */}
        <div className="bg-white p-1 h-[520px] flex flex-col justify-between">
          <div className="flex items-center gap-4 border-gray-300 pb-4 mb-6">
            <h2 className="text-xl text-[#122E5E] font-oswald-medium">
              International
            </h2>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-24 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2: National */}
        <div className="bg-white p-1 h-[520px] flex flex-col justify-between">
          <div className="flex items-center gap-4 border-gray-300 pb-4 mb-6">
            <h2 className="text-xl text-[#122E5E] font-oswald-medium">
              National
            </h2>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
            {nationalLogos.map((src, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-36 w-36"
              >
                <img
                  src={src}
                  alt={`NL${idx + 1}`}
                  className="max-h-28 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 3: NAAC, NIRF, Times Higher */}
        <div className="bg-white px-6 mt-15 md:px-8 py-6 h-[520px] flex items-center font-sans">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-stretch gap-4 w-full font-sans">
            {/* NAAC Block */}
            <div className="md:w-1/4 text-center md:text-left border-b md:border-b-0 md:border-r-2 pb-3 md:pb-0 md:pr-6 flex flex-col justify-between">
              <div>
                <img
                  src={IndiaImg}
                  alt="NAAC Logo"
                  className="mx-auto md:mx-0 w-32 sm:w-36 h-auto"
                  loading="lazy"
                />
                <h3 className="mt-3">
                  <span className="text-[#E60019] font-bold text-4xl md:text-5xl">
                    NAAC A++
                  </span>
                  <span className="block text-[#122E5E] text-4xl md:text-5xl">
                    CGPA: 3.78
                  </span>
                </h3>
              </div>
              <p className="text-2xl text-gray-500 mt-1">
                Highest among Health Sciences University
              </p>
            </div>

            {/* NIRF Rankings Block */}
            <div className="md:w-1/2 md:border-r-2 border-b md:border-b-0 px-2 md:px-4 flex flex-col justify-between">
              <div className="flex flex-col items-start">
                <img
                  src={GroupImage}
                  alt="NIRF Logo"
                  className="w-40 max-w-xs"
                  loading="lazy"
                />
                <div className="flex flex-wrap justify-start pt-3 gap-1 w-full">
                  {[
                    { num: "23", suffix: "RD", label: "Medical" },
                    { num: "24", suffix: "TH", label: "Dental" },
                    {
                      num: "42",
                      suffix: "ND",
                      label: (
                        <>
                          University <br />
                          in India
                        </>
                      ),
                    },
                    { num: "71", suffix: "ST", label: "Overall" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`px-3 ${
                        i < 3 ? "border-r-2" : ""
                      } border-gray-300 flex-1 min-w-[20%]`}
                    >
                      <em className="text-4xl md:text-6xl font-bold text-[#E60019] not-italic">
                        {item.num}
                        <sup className="text-sm font-bold mt-0 align-super">
                          {item.suffix}
                        </sup>
                      </em>
                      <span className="block text-base md:text-2xl text-[#707070] mt-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Times Higher Education Block */}
            <div className="md:w-1/5  text-left border-t md:border-t-0 pt-3 md:pt-0 flex flex-col justify-between">
              <div>
                <em className="text-5xl md:text-6xl text-[#E60019] leading-tight font-[500] not-italic">
                  1001-
                  <br />
                  1200
                </em>
                <p className="text-4xl text-[#707070] mt-1  font-sans">
                  Times Higher <br /> Education <br /> 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: SDG Cards */}
        <div className="bg-black text-white py-6 md:py-10 h-[500px] flex items-center">
          <div className="w-full px-4 md:px-3 py-1">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:w-1/2">
                <img
                  src={TheImpact}
                  alt="Recognitions"
                  className="w-full h-auto mb-4"
                />
                <div className="text-[#E1CD67] text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Ranked{" "}
                    <span className="text-4xl md:text-5xl">
                      7<sup className="text-2xl align-super">th</sup>
                    </span>
                    amongst
                  </h3>
                  <p className="text-lg md:text-xl">
                    Health Science Universities in India <br />
                    under{" "}
                    <span className="font-bold text-2xl md:text-3xl">
                      "Overall"
                    </span>{" "}
                    category
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full lg:w-1/2">
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
                      className="p-5 shadow-lg flex flex-col"
                    >
                      <span className="text-sm text-black ml-auto font-bold">
                        SDG {data.sdg}
                      </span>
                      <div className="text-5xl text-black font-bold mb-1">
                        {data.rank}
                        <sup className="text-xl align-super">th</sup>
                      </div>
                      <div className="text-md text-black mb-1">
                        {data.label}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-light uppercase">
                          {data.tag.split("<br/>").map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              {idx !== data.tag.split("<br/>").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        <img src={img} alt="SDG" className="w-8 h-8" />
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
