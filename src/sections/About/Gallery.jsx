import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const sectionOrder = ["university", "research", "campus"];

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("campus");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const visibleImages = imageData[activeSection];

  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-4">
          <div>
            <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
            <h2 className="text-4xl font-[500] font-oswald-medium tracking-wider text-[#707070]">
              GALLERY
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                document.querySelector(".gallery-slider").slickPrev()
              }
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() =>
                document.querySelector(".gallery-slider").slickNext()
              }
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
            <button className="text-red-500 font-semibold ml-2">
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center space-x-6 text-sm mb-6">
          {sectionOrder.map((section, idx) => (
            <React.Fragment key={section}>
              <button
                className={`${
                  activeSection === section
                    ? "text-red-500 font-semibold underline"
                    : "text-gray-500"
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section === "university"
                  ? "University events"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              {idx < sectionOrder.length - 1 && (
                <div className="text-gray-500">|</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Gallery Grid 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleImages.slice(0, 9).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover rounded"
            />
          ))}
        </div>
        {/* Dots below grid */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(visibleImages.length / 9) }).map(
            (_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                  i === 0 ? "bg-red-500" : "bg-gray-300"
                }`}
                // For now, only first page is active; add logic for pagination if needed
                aria-label={`Go to page ${i + 1}`}
                disabled
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
