import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import researchicon1 from "../../assets/RI/researchicon1.png";
import researchicon2 from "../../assets/RI/researchicon2.png";
import researchicon3 from "../../assets/RI/researchicon3.png";

const mobileHighlights = [
  {
    icon: researchicon1,
    content: [
      {
        label: "17,500+",
        text: "publications in top-tier journals (indexed in Scopus, WoS, PubMed) like The Lancet, NEJM, BMJ, Nature, Frontiers, JAMA, etc..",
      },
      { label: "50,000+", text: "citations" },
      { label: "500+", text: "High Impact publications" },
    ],
  },
  {
    icon: researchicon3,
    content: [
      { label: "130+", text: "patents granted" },
      { label: "180+", text: "patents published" },
      { label: "1500+", text: "copyrights registered" },
      {
        label: "185+",
        text: "ICMR Short-Term Studentships (among the highest in India)",
      },
      { label: "85+", text: "ICMR PG thesis support grants" },
    ],
  },
  {
    icon: researchicon2,
    content: [
      { label: "12,500+", text: "lakhs INR in research grants" },
      { label: "100+", text: "Research Collaborations" },
      { label: "15+", text: "Global Consortia" },
    ],
  },
];

const CustomDots = ({ dots }) => (
  <div className="flex justify-center mt-6 space-x-2">
    {Array.isArray(dots)
      ? dots.map((dot, index) => (
          <div key={index} className="w-3 h-3">
            {dot.props.className &&
            dot.props.className.includes("slick-active") ? (
              <div className="w-3 h-3 rounded-full bg-[#bbbbbb]"></div>
            ) : (
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            )}
          </div>
        ))
      : null}
  </div>
);

const ResearchHighlights = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <CustomDots dots={dots} />,
    customPaging: () => <></>, // override default dot styles
  };

  return (
    <div className="bg-[#fbf7e6] py-16 px-6 md:px-20 text-gray-800 mx-auto">
      {/* Heading */}
      <div className="mb-8 md:ml-12 text-left">
        <h2 className="text-3xl font-oswald-medium uppercase font-medium relative text-gray-600 inline-block">
          <hr className="w-20 border-[#F04E30] mb-1 border-t-4 h-2 " />
          Highlights
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto justify-center text-left text-gray-600 place-items-stretch gap-5">
        {/* Column 1 */}
        <div className="space-y-4 md:border-r md:border-gray-300 md:pr-4 w-full max-w-xs mx-auto">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon1}
              alt="researchicon1"
              className="w-28 h-28"
            />
          </div>
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">17,500+</span> publications
            in top-tier journals (indexed in Scopus, WoS, PubMed) like The
            Lancet, NEJM, BMJ, Nature, Frontiers, JAMA, etc..
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">50,000+</span> citations
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">500+</span> High Impact
            publications
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 md:border-r md:border-gray-300 md:px-4 w-full max-w-xs mx-auto">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon3}
              alt="researchicon3"
              className="w-28 h-28"
            />
          </div>
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">130+</span> patents granted
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">180+</span> patents
            published
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">1500+</span> copyrights
            registered
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">185+</span> ICMR Short-Term
            Studentships (among the highest in India)
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">85+</span> ICMR PG thesis
            support grants
          </p>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 md:pl-4 w-full max-w-xs mx-auto">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={researchicon2}
              alt="researchicon2"
              className="w-28 h-28"
            />
          </div>
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">12,500+</span> lakhs INR in
            research grants
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">100+</span> Research
            Collaborations
          </p>
          <hr />
          <p className="text-base font-normal">
            <span className="text-red-600 font-bold">15+</span> Global Consortia
          </p>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden max-w-md mx-auto mt-8">
        <Slider {...sliderSettings}>
          {mobileHighlights.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center mb-4">
                <img
                  src={item.icon}
                  alt={`highlight-${index}`}
                  className="w-28 h-28 mx-auto"
                />
              </div>
              <div className="space-y-3 text-base font-normal text-gray-700 text-left">
                {item.content.map((entry, i) => (
                  <div key={i}>
                    <p>
                      <span className="text-red-600 font-bold">
                        {entry.label}
                      </span>{" "}
                      {entry.text}
                    </p>
                    {i < item.content.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResearchHighlights;
