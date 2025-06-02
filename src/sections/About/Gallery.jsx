import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Gallery1 from "../../assets/AboutGallery/1.jpg";
import Gallery2 from "../../assets/AboutGallery/2.jpg";
import Gallery3 from "../../assets/AboutGallery/3.jpg";
import Gallery4 from "../../assets/AboutGallery/4.jpg";
import Gallery5 from "../../assets/AboutGallery/5.jpg";
import Gallery6 from "../../assets/AboutGallery/6.jpg";
import Gallery7 from "../../assets/AboutGallery/7.jpg";
import Gallery8 from "../../assets/AboutGallery/8.jpg";
import Gallery9 from "../../assets/AboutGallery/9.jpg";

const shuffle = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const imageData = {
  university: shuffle([
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
  ]),
  research: shuffle([
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery1,
    Gallery4,
    Gallery5,
    Gallery2,
    Gallery3,
    Gallery4,
  ]),
  campus: shuffle([
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery1,
    Gallery4,
    Gallery5,
    Gallery2,
    Gallery3,
    Gallery4,
  ]),
};

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("campus");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Arrows */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-4">
          <div>
            <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4" />
            <h2 className="text-3xl font-bold text-gray-800">GALLERY</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowLeft size={20} />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowRight size={20} />
            </button>
            <button className="text-red-500 font-semibold ml-2">
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Centered Navigation Row */}
        <div className="flex justify-center items-center space-x-6 text-sm mb-6">
          <button
            className={`${
              activeSection === "university"
                ? "text-red-500 font-semibold underline"
                : "text-gray-500"
            }`}
            onClick={() => handleSectionClick("university")}
          >
            University events
          </button>
          <div className="text-gray-500">|</div>
          <button
            className={`${
              activeSection === "research"
                ? "text-red-500 font-semibold underline"
                : "text-gray-500"
            }`}
            onClick={() => handleSectionClick("research")}
          >
            Research
          </button>
          <div className="text-gray-500">|</div>
          <button
            className={`${
              activeSection === "campus"
                ? "text-red-500 font-semibold underline"
                : "text-gray-500"
            }`}
            onClick={() => handleSectionClick("campus")}
          >
            Campus
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imageData[activeSection].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
