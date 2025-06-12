

import React from "react";
import Slider from "react-slick";
import IndianImg from "../../assets/india.png";
import RankingImg from "../../assets/Group.png";
import ImpactImg from "../../assets/Group-2.png";
import placementrate from "../../assets/placementrate.png";
import scholarships from "../../assets/scholarships.png";
import CourseraImg from "../../assets/AdmissionGrid/logo.png";
import UGCImg from "../../assets/AdmissionGrid/UGC.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courseraLogo from "../../assets/coursera.png";
import { Autoplay } from "swiper/modules";

const highlights = [
  {
    // fullImage: "",
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
    footerText: "Ranked University in India – NIRF",
    footerBg: "bg-[#122E5E]",
    textColor: "text-[#F7941D]",
    emphasize: true,
    superscript: "ND",
    customTitleStyle: "text-6xl font-bold font-HelveticaLTStd-BoldCond",
  },
  {
    title: "23",
    superscript: "RD",
    img: RankingImg,
    bg: "bg-white",
    footerText: "Ranked Medical College in India – NIRF",
    footerBg: "bg-[#122E5E]",
    textColor: "text-[#F04E30]",
    customTitleStyle: "text-6xl font-bold font-HelveticaLTStd-BoldCond",
  },
  {
    title: "24",
    superscript: "TH",
    img: RankingImg,
    bg: "bg-white",
    footerText: "Ranked Dental College in India – NIRF",
    footerBg: "bg-[#122E5E]",
    textColor: "text-[#F04E30]",
    customTitleStyle: "text-6xl font-bold font-HelveticaLTStd-BoldCond",
  },
  {
    img: ImpactImg,
    bg: "bg-black",
    footerText:
      "Recognized in THE Impact Rankings for Sustainability with Global Collaborations",
    footerBg: "bg-blue-500",
    textColor: "text-white",
    enlargeText: true,
    onlyImage: true,
  },
  {
    img: placementrate,
    // title: "100%",
    // img: null,
    bg: "bg-[#e0cc67]",
    footerText: "Secure your future with top career opportunities.",
    footerBg: "bg-blue-900",
    textColor: "text-red-600",
    // extra: "Placement rate",
    // fullTextMode: true,
    onlyImage: true,
  },
  {
    // title: "50%",
    img: scholarships,
    bg: "bg-[#300986]",
    footerText: "Up to 50% tuition waivers for meritorious students.",
    footerBg: "bg-orange-500",
    textColor: "text-white",
    // extra: "Scholarships\nAvailable",
    // fullTextMode: true,
    // customTitleStyle: "text-5xl font-bold",
    onlyImage: true,
  },
  {
    title: "Category 1",
    img: UGCImg,
    bg: "bg-white",
    footerText: "Approved Category 1 University by UGC",
    footerBg: "bg-green-700",
    textColor: "text-[#122E5E]",
    customTitleStyle: "text-3xl font-bold",
  },
  {
    img: CourseraImg,
    bg: "bg-[#0056d2]",
    footerText: "Access to 5000+ courses",
    footerBg: "bg-[#122e5e]",
    textColor: "text-[#122E5E]",
    // enlargeText: true,
    onlyImage: true,
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
            className={`mx-auto object-contain ${
              item.onlyImage
                ? item.footerText.includes("5000+")
                  ? "max-h-30"
                  : "max-h-full shadow-none"
                : "max-h-24"
            }`}
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
  const totalDots = 4;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => <div className="w-2 h-2 bg-gray-400 rounded-full" />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">
          {dots.slice(0, totalDots)}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
