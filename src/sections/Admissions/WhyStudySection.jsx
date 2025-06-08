import React from "react";
import Slider from "react-slick";
import IndianImg from "../../assets/india.png";
import RankingImg from "../../assets/Group.png";
import ImpactImg from "../../assets/Group-2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  {
    title: "NAAC A++",
    img: IndianImg,
    bg: "bg-white",
    footerText: "Join a top-ranked university trusted for excellence.",
    footerBg: "bg-green-600",
    textColor: "text-[#F04E30]",
    customTitleStyle: "text-4xl font-bold",
  },
  {
    title: "42",
    img: RankingImg,
    bg: "bg-white",
    footerText: "",
    footerBg: "",
    textColor: "text-[#F7941D]",
    emphasize: true,
    superscript: "ND",
  },
  {
    img: ImpactImg,
    bg: "bg-black",
    footerText:
      "Recognized in THE Impact Rankings for Sustainability with Global Collaborations",
    footerBg: "bg-blue-500",
    textColor: "text-white",
    enlargeText: true,
  },
  {
    title: "100%",
    img: null,
    bg: "bg-gradient-to-br from-yellow-200 to-yellow-400",
    footerText: "Secure your future with top career opportunities.",
    footerBg: "bg-blue-900",
    textColor: "text-red-600",
    extra: "Placement rate",
    fullTextMode: true,
  },
  {
    title: "50%",
    img: "",
    bg: "bg-purple-800",
    footerText: "Up to 50% tuition waivers for meritorious students.",
    footerBg: "bg-orange-500",
    textColor: "text-white",
    extra: "Scholarships\nAvailable",
    fullTextMode: true,
    customTitleStyle: "text-5xl font-bold",
  },
];

const HighlightCard = ({ item }) => (
  <div
    className={`rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col justify-between ${item.bg} w-full sm:w-64 md:w-60 min-h-[380px] sm:min-h-[320px]`}
  >
    <div
      className={`${
        item.fullTextMode
          ? "flex-3 flex flex-col justify-center items-center p-6 text-center"
          : "p-4 text-center flex-3 flex flex-col justify-start"
      }`}
    >
      {item.title && (
        <h3
          className={`mb-1 ${item.textColor} ${
            item.customTitleStyle
              ? item.customTitleStyle
              : item.emphasize || item.fullTextMode
              ? "text-6xl font-bold font-HelveticaLTStd-BoldCond"
              : "text-2xl"
          }`}
        >
          {item.title}
          {item.superscript && (
            <sup className="align-super text-xl font-bold">
              {item.superscript}
            </sup>
          )}
        </h3>
      )}
      {item.extra && (
        <p
          className={`text-sm whitespace-pre-line ${item.textColor} ${
            item.fullTextMode ? "mt-1" : ""
          }`}
        >
          {item.extra}
        </p>
      )}
      {!item.fullTextMode && item.img && (
        <div className="flex-grow flex items-center justify-center mt-2">
          <img
            src={item.img}
            alt={item.title || "highlight"}
            className="mx-auto max-h-24 object-contain"
          />
        </div>
      )}
    </div>

    {item.footerText && (
      <div
        className={`h-24  ${item.footerBg} text-white text-lg font-normal p-2 text-center flex items-center justify-center`}
      >
        <p
          className={`${
            item.enlargeText ? "text-lg" : ""
          } leading-snug line-clamp-3`}
        >
          {item.footerText}
        </p>
      </div>
    )}
  </div>
);

export default function WhyStudySection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fdf8e7] py-12 px-4 sm:px-6 why-study-with-du">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-[#707070] mb-8"
          style={{ fontFamily: '"Helvetica LT Std", "Condensed", sans-serif' }}
        >
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
          WHY STUDY AT <br /> DMIHER (DU)
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...sliderSettings} className="-mx-1">
            {highlights.map((item, index) => (
              <div key={index} className="px-1">
                <HighlightCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
