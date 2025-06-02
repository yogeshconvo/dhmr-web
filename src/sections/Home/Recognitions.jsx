import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clinic1 from "../../assets/Clinik/clinik1.png";
import clinic2 from "../../assets/Clinik/clinik2.png";
import clinic3 from "../../assets/Clinik/clinik3.png";
import clinic4 from "../../assets/Clinik/clinik4.png";
import clinic5 from "../../assets/Clinik/clinik5.png";
import clinic6 from "../../assets/Clinik/clinik6.png";

import IndiaImg from "../../assets/india.png";
import GroupImage from "../../assets/Group.png";
import demo1 from "../../assets/Group-2.png";

const logos = [
  { name: "Times Higher Education", src: clinic1 },
  { name: "AMEE", src: clinic2 },
  { name: "World Federation for Medical Education", src: clinic3 },
  { name: "American Heart Association", src: clinic4 },
  { name: "The SDG Accord", src: clinic5 },
  { name: "McGraw Hill Access Medicine", src: clinic6 },
];

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
    adaptiveHeight: true, // Helps slider adjust height dynamically
  };

  return (
    <div className="px-4 md:px-8 py-6 md:py-12 max-w-screen-xl mx-auto overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1: International Partners */}
        <div className="bg-white p-6 md:p-10">
          <div className="flex justify-between items-center border-b pb-2 mb-6">
            <h2 className="text-xl text-gray-800 font-oswald-medium font-medium">
              International
            </h2>
            <a href="#" className="text-sm text-red-500 font-semibold">
              VIEW ALL
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center max-h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2: National Partners */}
        <div className="bg-white p-6 md:p-10">
          <div className="flex justify-between items-center border-b pb-2 mb-6">
            <h2 className="text-xl text-gray-800 font-oswald-medium font-medium">
              National
            </h2>
            <a href="#" className="text-sm text-red-500 font-semibold">
              VIEW ALL
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center max-h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide 3: NAAC & Ranks */}
        <div className="bg-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
            <div className="md:w-1/4 text-center md:text-left border-b md:border-b-0 md:border-r border-[#707070] pb-4 md:pb-0 pr-0 md:pr-4">
              <img
                src={IndiaImg}
                alt="India Map"
                className="mx-auto md:mx-0 w-28 h-auto"
              />
              <h3 className="mt-4 text-3xl md:text-4xl text-[#F04E30] font-oswald-medium font-bold">
                NAAC A++
                <span className="block text-[#122E5E] font-oswald-medium font-light text-lg">
                  CGPA: 3.78
                </span>
              </h3>
              <p className="text-md md:text-xl text-[#707070] font-oswald-medium font-light mt-2 leading-relaxed">
                Highest among Health <br /> Sciences University
              </p>
            </div>

            <div className="md:w-1/2 border-b md:border-b-0">
              <img
                src={GroupImage}
                alt="Group"
                className="w-full max-w-xs mx-auto"
              />
              <div className="flex flex-wrap justify-center md:justify-between pt-4">
                {[
                  { num: "23", suffix: "RD", label: "Medical" },
                  { num: "24", suffix: "TH", label: "Dental" },
                  { num: "42", suffix: "ND", label: "University in India" },
                  { num: "71", suffix: "ST", label: "Overall" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`text-center px-4 ${
                      i < 3 ? "border-r" : ""
                    } border-[#707070]`}
                  >
                    <em className="text-3xl md:text-4xl font-oswald-medium font-bold text-[#E60019] not-italic">
                      {item.num}
                      <sup className="text-sm align-super">{item.suffix}</sup>
                    </em>
                    <span className="block text-md md:text-xl font-oswald-medium font-light text-[#707070]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/5 flex items-center  pl-5 justify-start border-t md:border-t-0 md:border-l border-[#707070] pt-4 md:pt-0">
              <div className="">
                <em className="text-3xl md:text-5xl  font-oswald-medium font-bold text-[#E60019] not-italic leading-tight">
                  1001-
                  <br />
                  1200
                </em>
                <p className="text-md md:text-xl font-oswald-medium font-light text-[#707070] mt-2 leading-relaxed">
                  Times Higher <br /> Education <br /> 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: SDG Rankings */}
        <div className="bg-black text-white p-6 md:p-10 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="max-w-xl w-full">
              <img
                src={demo1}
                alt="Ranking Banner"
                className="w-full h-auto mb-6"
              />
              <p className="text-lg font-oswald-medium font-light text-amber-200">
                <span className="text-3xl font-oswald-medium font-bold block mb-2">
                  Ranked 7th amongst
                </span>
                Health Science Universities in India <br />
                under <span className="font-bold text-3xl">“Overall”</span>{" "}
                category
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              {[
                {
                  sdg: "SDG 3",
                  rank: "15th",
                  location: "In the world",
                  label: "Good Health and Wellbeing",
                  color: "bg-blue-500",
                  icon: "💊",
                },
                {
                  sdg: "SDG 3",
                  rank: "3rd",
                  location: "In India",
                  label: "Good Health and Wellbeing",
                  color: "bg-green-500",
                  icon: "💊",
                },
                {
                  sdg: "SDG 4",
                  rank: "7th",
                  location: "In India",
                  label: "Quality Education",
                  color: "bg-orange-400",
                  icon: "📚",
                },
                {
                  sdg: "SDG 5",
                  rank: "4th",
                  location: "In India",
                  label: "Gender Equality",
                  color: "bg-red-500",
                  icon: "⚥",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.color} p-4 text-center rounded`}
                >
                  <p className="text-sm font-oswald-medium font-medium">
                    {item.sdg}
                  </p>
                  <h2 className="text-3xl font-oswald-medium font-bold">
                    {item.rank}
                  </h2>
                  <p className="text-md font-oswald-medium font-light">
                    {item.location}
                  </p>
                  <p className="uppercase text-xs font-oswald-medium font-light mt-1">
                    {item.label}
                  </p>
                  <div className="mt-3 text-2xl">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Recognitions;
