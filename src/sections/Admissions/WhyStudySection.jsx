import React from "react";
import IndianImg from "../../assets/india.png";
import RankingImg from "../../assets/Group.png";
import ImpactImg from "../../assets/Group-2.png";

const highlights = [
  {
    title: "NAAC A++",
    img: IndianImg,
    bg: "bg-white",
    footerText: "Join a top-ranked university trusted for excellence.",
    footerBg: "bg-green-600",
    textColor: "text-red-600",
  },
  {
    title: "42ND",
    img: RankingImg,
    bg: "bg-white",
    footerText: "",
    footerBg: "",
    textColor: "text-orange-500",
    extra: "",
    emphasize: true, // increase size
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
    fullTextMode: true, // fill whole card body
  },
  {
    title: "50%",
    img: "",
    bg: "bg-purple-800",
    footerText: "Up to 50% tuition waivers for meritorious students.",
    footerBg: "bg-orange-500",
    textColor: "text-white",
    extra: "Scholarships Available",
    fullTextMode: true,
  },
];

export default function WhyStudySection() {
  return (
    <div className="bg-[#fdf8e7] py-12 px-4 sm:px-6 font-oswald-medium">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-oswald-medium">
        <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4" />
        WHY STUDY AT DMIHER (DU)
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-xs sm:w-60 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col justify-between ${item.bg}`}
          >
            <div
              className={`${
                item.fullTextMode
                  ? "flex-1 flex flex-col justify-center items-center p-6 text-center"
                  : "p-4 text-center flex-1 flex flex-col justify-start"
              }`}
            >
              {item.title && (
                <h3
                  className={`${
                    item.emphasize || item.fullTextMode
                      ? "text-6xl"
                      : "text-2xl"
                  } font-oswald-medium mb-1 ${item.textColor}`}
                >
                  {item.title}
                </h3>
              )}
              {item.extra && (
                <p
                  className={`text-sm font-oswald-light ${item.textColor} ${
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
                    className={`mx-auto max-h-30 ${
                      item.cover ? "object-cover" : "object-contain"
                    }`}
                  />
                </div>
              )}
            </div>

            {item.footerText && (
              <div
                className={`h-20 ${item.footerBg} text-white text-sm font-normal p-3 text-center flex items-center justify-center`}
              >
                <p
                  className={`${
                    item.enlargeText ? "text-base" : ""
                  } leading-snug line-clamp-3`}
                >
                  {item.footerText}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
