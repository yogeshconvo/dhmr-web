import React from "react";
import Slider from "react-slick";

import RI from "../../assets/RI.png";
import researchicon1 from "../../assets/RI/researchicon1.png";
import researchicon2 from "../../assets/RI/researchicon2.png";
import researchicon3 from "../../assets/RI/researchicon3.png";
import researchicon4 from "../../assets/RI/researchicon4.png";
import researchicon5 from "../../assets/RI/researchicon5.png";

const ResearchInnovation = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide slider arrows on mobile
  };

  const stats = [
    {
      icon: researchicon1,
      alt: "Publications",
      number: "17500+",
      text: "Publications",
    },
    {
      icon: researchicon2,
      alt: "Grants",
      number: "12500+ lakhs INR",
      text: "in research grants",
    },
    {
      icon: researchicon3,
      alt: "Patents",
      number: "130+",
      text: "Patents granted",
    },
    {
      icon: researchicon4,
      alt: "Collaborations",
      number: "100+",
      text: "Research Collaborations",
    },
    {
      icon: researchicon5,
      alt: "Consortia",
      number: "15+",
      text: "Global consortia",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-oswald-medium text-[#707070] text-2xl sm:text-3xl md:text-4xl uppercase font-[500]">
          <div className="w-20 h-1 bg-[#F04E30] mb-2"></div>
          Research & Innovation
        </h2>

        {/* Main Content */}
        <div className="mt-10 flex flex-col lg:flex-row gap-7">
          {/* Left Image */}
          <div className="lg:w-2/5">
            <img
              src={RI}
              alt="Research"
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow"
            />
          </div>

          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden lg:grid lg:w-3/5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center px-2 border-r border-gray-300">
              <img
                src={researchicon1}
                alt="Publications"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl font-bold text-orange-600">17500+</h3>
              <p className="text-gray-700 text-xl">Publications</p>
            </div>

            <div className="flex flex-col items-center text-center px-2 border-r border-gray-300">
              <img
                src={researchicon2}
                alt="Grants"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl text-gray-700">
                <span className="font-bold text-orange-600 "> 12500+</span>{" "}
                <span className="text-gray-700 text-xl">
                  lakhs INR in research grants
                </span>
              </h3>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <img
                src={researchicon3}
                alt="Patents"
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-2xl  text-orange-600">
                <span className="font-bold">130+</span>{" "}
                <span className="text-gray-700 text-xl">
                  Patents <br /> granted
                </span>
              </h3>
            </div>

            <div className="col-span-full flex justify-center gap-5 mt-4">
              <div className="flex flex-col items-center text-center px-10 border-r border-gray-300">
                <img
                  src={researchicon4}
                  alt="Collaborations"
                  className="w-24 h-24 mb-2"
                />
                <h3 className="text-2xl  text-orange-600">
                  <span className="font-bold">100+</span>
                  <span className="text-gray-700 text-xl">
                    Research <br /> Collaborations
                  </span>
                </h3>
              </div>

              <div className="flex flex-col items-center text-center px-8">
                <img
                  src={researchicon5}
                  alt="Consortia"
                  className="w-24 h-24 mb-2"
                />
                <h3 className="text-2xl  text-orange-600">
                  <span className="font-bold">15+</span>{" "}
                  <span className="text-gray-700 text-xl">
                    Global <br /> consortia
                  </span>
                </h3>
              </div>
            </div>
          </div>

          {/* Mobile Slider: show only below lg */}
          <div className="lg:hidden w-full">
            <Slider {...sliderSettings}>
              {stats.map(({ icon, alt, number, text }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4"
                >
                  <img
                    src={icon}
                    alt={alt}
                    className="w-24 h-24 mb-2 mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-orange-600">
                    {number}
                  </h3>
                  <p className="text-gray-700 text-xl">{text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-right">
          <a
            href="https://www.dmiher.edu.in/about-research-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-700 hover:underline"
          >
            Know more about Research &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchInnovation;
