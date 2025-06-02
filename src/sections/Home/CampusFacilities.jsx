import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import campusimg1 from "../../assets/Facilties/campusimg1.png";
import campusimg2 from "../../assets/Facilties/campusimg2.png";
import campusimg3 from "../../assets/Facilties/campusimg3.png";
import campusimg4 from "../../assets/Facilties/campusimg4.png";
import AcedemicFacilitesImg1 from "../../assets/Facilties/facilitiesimg1.png";
import AcedemicFacilitesImg2 from "../../assets/Facilties/facilitiesimg2.png";
import AcedemicFacilitesImg3 from "../../assets/Facilties/facilitiesimg3.png";
import AcedemicFacilitesImg4 from "../../assets/Facilties/facilitiesimg4.png";

// Academic and Campus Facilities Data
const academicFacilities = [
  {
    title: "School of Experiential Learning & Simulation Centre",
    image: AcedemicFacilitesImg1,
  },
  { title: "Museum", image: AcedemicFacilitesImg2 },
  { title: "Clinical Training", image: AcedemicFacilitesImg3 },
  { title: "Hi-Tech Classrooms", image: AcedemicFacilitesImg4 },
];

const campusAmenities = [
  { title: "Cafeteria", image: campusimg1 },
  { title: "Basketball", image: campusimg2 },
  { title: "Guest House", image: campusimg3 },
  { title: "Gym", image: campusimg4 },
];

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    {title && (
      <>
        <div className="h-1 w-20 bg-red-500 mt-1" />
        <h2
          className="text-2xl sm:text-3xl mt-3 text-gray-700 uppercase"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 500, // Medium
          }}
        >
          {title}
        </h2>
      </>
    )}

    {/* Subtitle and controls */}
    <div className="flex items-center justify-between mt-4">
      {/* Left: Subtitle */}
      <p
        className="text-lg sm:text-xl text-red-600"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300, // Light
        }}
      >
        {subtitle}
      </p>

      {/* Center: HR line */}
      <div className="flex-1 h-px bg-gray-300 mx-4" />

      {/* Right: Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 border rounded-full text-gray-600 hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 border rounded-full text-gray-600 hover:bg-gray-100">
          <ChevronRight size={20} />
        </button>
        <span
          className="text-sm sm:text-base text-red-600 ml-2"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 300, // Light
          }}
        >
          VIEW ALL
        </span>
      </div>
    </div>
  </div>
);

// Grid Display Component
const FacilityGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {items.map((item, index) => (
      <div
        key={index}
        className="overflow-hidden transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover rounded-md"
        />
        <p
          className="mt-2 text-gray-600 text-base sm:text-lg"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 300,
          }}
        >
          {item.title}
        </p>
      </div>
    ))}
  </div>
);

// Main Component
const CampusFacilities = () => {
  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Academic Facilities */}
        <SectionHeader
          title="Campus Life and Facilities"
          subtitle="Academic Facilities"
        />
        <FacilityGrid items={academicFacilities} />

        {/* Campus Amenities */}
        <div className="mt-16">
          <SectionHeader title="" subtitle="Campus Amenities" />
          <FacilityGrid items={campusAmenities} />
        </div>
      </div>
    </section>
  );
};

export default CampusFacilities;
