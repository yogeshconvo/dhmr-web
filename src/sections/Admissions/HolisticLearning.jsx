import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Img from "../../assets/H-Img-Admission.png";

const HolisticLearning = () => {
  const features = [
    "270+ Acre Self Sustained Campus",
    "700+ Full Time Teaching Faculty",
    "Infrastructure Augmented Facilities",
    "Diverse Cultural Milieu",
    "Research Intensive Focus",
    "Simulation Based Learning",
    "150+ Multidisciplinary Courses",
    "9+ Hospitals on & Off Campus",
    "High-tech Museum for Self Directed Learning",
    "Centre for Career Enhancement",
  ];

  return (
    <div className="bg-white pb-20 py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2
        className="text-2xl sm:text-3xl text-gray-500 mb-8 font-[500]"
        style={{ fontFamily: "Oswald" }}
      >
        <hr className="w-12 sm:w-16 md:w-20 border-red-600 mb-3 border-t-4" />
        HOLISTIC LEARNING
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Feature List */}
        <div
          className="flex-1 space-y-2 mt-10 max-w-full lg:max-w-[350px] px-4 sm:px-6 lg:px-0"
          style={{ fontFamily: "Oswald" }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border-b border-gray-300 px-2 py-1 font-[300] ${
                index === 0 ? "text-blue-800 font-[500]" : "text-gray-700"
              }`}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Image and Arrows */}
        <div className="flex-1 relative pr-0 lg:pr-10">
          <img
            src={Img}
            alt="Campus View"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <div className="absolute top-5 right-5 flex gap-4 lg:static lg:mt-4 lg:justify-start">
            <button className="text-gray-600 hover:text-black">
              <ArrowLeftCircle size={32} />
            </button>
            <button className="text-gray-600 hover:text-black">
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolisticLearning;
