import React, { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Img1 from "../../assets/AdmissionGrid/Admissions/1.png";
import Img2 from "../../assets/AdmissionGrid/Admissions/2.png";
import Img3 from "../../assets/AdmissionGrid/Admissions/3.png";
import Img4 from "../../assets/AdmissionGrid/Admissions/4.png";
import Img5 from "../../assets/AdmissionGrid/Admissions/5.png";
import Img6 from "../../assets/AdmissionGrid/Admissions/6.jpg";
import Img7 from "../../assets/AdmissionGrid/Admissions/7.png";
import Img8 from "../../assets/AdmissionGrid/Admissions/8.png";
import Img9 from "../../assets/AdmissionGrid/Admissions/9.jpg";
import Img10 from "../../assets/AdmissionGrid/Admissions/10.png";

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

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setCurrentFeatureIndex(index);
  };

  const handleNext = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentFeatureIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white pb-20 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-[500] font-oswald-medium text-[#707070] mb-8">
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
          HOLISTIC LEARNING
        </h2>

        {/* Centered content container with slight left shift */}
        <div className="flex justify-center items-center ml-3 sm:-ml-5">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Feature List */}
            <div
              className="space-y-1 mt-10 max-w-full lg:max-w-[460px] px-2"
              style={{ fontFamily: '"Helvetica LT Std", sans-serif' }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`border-b border-gray-400 px-2 py-1 font-[500] cursor-pointer ${
                    index === currentFeatureIndex
                      ? "text-blue-900 font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="relative pr-0 lg:pr-10">
              {images[currentFeatureIndex] ? (
                <img
                  src={images[currentFeatureIndex]}
                  alt={features[currentFeatureIndex]}
                  className="rounded-xl shadow-lg w-[600px] object-cover h-[450px]"
                />
              ) : (
                <div className="h-[450px] w-[600px] flex items-center justify-center text-gray-500 border border-dashed rounded-xl p-6 text-center">
                  No image available
                </div>
              )}
              {/* Navigation Buttons */}
              <div className="absolute top-5 right-5 flex gap-4 lg:static lg:mt-4 lg:justify-start">
                <button
                  onClick={handlePrev}
                  className="text-gray-600 hover:text-black"
                >
                  <ArrowLeftCircle size={32} />
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-600 hover:text-black"
                >
                  <ArrowRightCircle size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolisticLearning;
