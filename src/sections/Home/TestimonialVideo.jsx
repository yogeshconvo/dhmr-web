import React, { useState } from "react";
import PriyaShrivastav from "../../assets/TestimonialHome/PriyaShrivastav.png";
import Parents from "../../assets/TestimonialHome/Parents.png";
import Alumini from "../../assets/TestimonialHome/Alumini.png";
import { PlayCircle } from "lucide-react";

const testimonialsData = {
  Students: [
    {
      name: "Priyal Shrivastava",
      year: "Medical | 2017",
      video: PriyaShrivastav,
    },
  ],
  Parents: [
    {
      name: "Mr. Benhar Joseph & Mrs. Kanchan Joseph",
      year: "Nursing | 2017",
      video: Parents,
    },
  ],
  Alumni: [
    {
      name: "Dr. [Name Here]",
      year: "MBBS Batch: 2005 (JNMC)",
      video: Alumini,
    },
  ],
};

const TestimonialVideo = () => {
  const [activeTab, setActiveTab] = useState("Alumni");
  const current = testimonialsData[activeTab][0];

  const tabs = ["Alumni", "Parents", "Students"];

  return (
    <div className="px-4 md:px-8 py-12 bg-[#f4f4f4]">
      <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>

      {/* Tab Labels */}
      <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-3 py-1 text-base transition-all ${
              activeTab === tab
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${
              index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Testimonial Video with Play Button */}
      <div className="flex flex-col items-center">
        <div className="relative w-[380px] h-[220px] md:w-[470px] md:h-[280px] bg-gray-300 rounded-xl overflow-hidden shadow-lg mb-4">
          <img
            src={current.video}
            alt="Testimonial Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle
              size={60}
              className="text-white drop-shadow-lg hover:scale-100 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Name and Year */}
        <div className="w-[380px] md:w-[460px] text-left">
          <p className="text-lg font-semibold text-gray-800">{current.name}</p>
          <p className="text-sm text-gray-600">{current.year}</p>
        </div>

        {/* Dot Controls */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-3 h-3 rounded-full border border-black transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gray-400 scale-110"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideo;
