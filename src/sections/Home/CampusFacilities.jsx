import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import campusimg1 from "../../assets/Facilties/campusimg1.png";
import campusimg2 from "../../assets/Facilties/campusimg2.png";
import campusimg3 from "../../assets/Facilties/campusimg3.png";
import campusimg4 from "../../assets/Facilties/campusimg4.png";
import AcedemicFacilitesImg1 from "../../assets/Facilties/facilitiesimg1.png";
import AcedemicFacilitesImg2 from "../../assets/Facilties/facilitiesimg2.png";
import AcedemicFacilitesImg3 from "../../assets/Facilties/facilitiesimg3.png";
import AcedemicFacilitesImg4 from "../../assets/Facilties/facilitiesimg4.png";

const academicFacilities = [
  {
    title: "School of Experiential Learning & Simulation Centre",
    image: AcedemicFacilitesImg1,
  },
  { title: "Museum", image: AcedemicFacilitesImg2 },
  { title: "Clinical Training", image: AcedemicFacilitesImg3 },
  { title: "Hi-Tech Classrooms", image: AcedemicFacilitesImg4 },
  { title: "Research Laboratory", image: AcedemicFacilitesImg1 },
  { title: "Digital Library", image: AcedemicFacilitesImg2 },
  { title: "Anatomy Department", image: AcedemicFacilitesImg3 },
  { title: "Physiology Lab", image: AcedemicFacilitesImg4 },
  { title: "Pathology Lab", image: AcedemicFacilitesImg1 },
  { title: "Microbiology Lab", image: AcedemicFacilitesImg2 },
  { title: "Pharmacology Department", image: AcedemicFacilitesImg3 },
  { title: "Biochemistry Lab", image: AcedemicFacilitesImg4 },
];

const campusAmenities = [
  { title: "Cafeteria", image: campusimg1 },
  { title: "Basketball", image: campusimg2 },
  { title: "Guest House", image: campusimg3 },
  { title: "Gym", image: campusimg4 },
  { title: "Swimming Pool", image: campusimg1 },
  { title: "Tennis Court", image: campusimg2 },
  { title: "Auditorium", image: campusimg3 },
  { title: "Medical Store", image: campusimg4 },
  { title: "ATM Center", image: campusimg1 },
  { title: "Parking Area", image: campusimg2 },
  { title: "Recreation Center", image: campusimg3 },
  { title: "Student Lounge", image: campusimg4 },
];

export const SectionHeader = ({
  title,
  subtitle,
  onPrev,
  onNext,
  showViewAll = true,
  viewAllLink = "#",
}) => (
  <div className="mb-8">
    {title && (
      <>
        <div className="h-1 w-20 bg-red-500 mt-1" />
        <h2
          className="text-2xl sm:text-3xl mt-3 text-[#707070] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          {title}
        </h2>
      </>
    )}
    <div className="flex flex-row items-center justify-between mt-4 gap-2 flex-wrap">
      <p className="text-sm sm:text-lg text-[#F04E30] font-[500]">{subtitle}</p>
      <div className="flex-1 h-px bg-gray-300 mx-2 min-w-[40px]" />
      <div className="hidden md:flex items-center gap-2 flex-wrap">
        <button
          onClick={onPrev}
          className="p-2 border rounded-full text-gray-600 hover:bg-gray-100 hover:opacity-85 transition"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="p-2 border rounded-full text-gray-600 hover:bg-gray-100  hover:opacity-85 transition "
        >
          <ArrowRight size={20} />
        </button>
        {showViewAll && (
          <a
            href={viewAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F04E30] ml-2 font-[600] sm:text-base text-sm cursor-pointer hover:underline whitespace-nowrap"
            style={{
              fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
            }}
          >
            VIEW ALL
          </a>
        )}
      </div>
    </div>

    {showViewAll && (
      <div className="md:hidden mt-4 text-end">
        <a
          href={viewAllLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-[600] text-sm cursor-pointer hover:underline"
          style={{ fontFamily: '"Helvetica LT Std", "Condensed", sans-serif' }}
        >
          VIEW ALL
        </a>
      </div>
    )}
  </div>
);

const CampusFacilities = () => {
  const academicSliderRef = useRef(null);
  const amenitiesSliderRef = useRef(null);

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Academic Facilities */}
        <div className="relative">
          <SectionHeader
            title="Campus Life and Facilities"
            subtitle="Academic Facilities"
            onPrev={() => academicSliderRef.current?.slickPrev()}
            onNext={() => academicSliderRef.current?.slickNext()}
            viewAllLink="https://www.dmiher.edu.in/campus1"
          />
          <Slider ref={academicSliderRef} {...settings}>
            {academicFacilities.map((item, index) => (
              <div key={index} className="px-2">
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
          </Slider>
          {/* Mobile Navigation Buttons */}
          <div className="md:hidden">
            <button
              onClick={() => academicSliderRef.current?.slickPrev()}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "4rem" }}
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => academicSliderRef.current?.slickNext()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "4rem" }}
            >
              <ArrowRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {console.log(academicSliderRef)}
        {/* Campus Amenities */}
        <div className="mt-16 relative">
          <SectionHeader
            title=""
            subtitle="Campus Amenities"
            onPrev={() => amenitiesSliderRef.current?.slickPrev()}
            onNext={() => amenitiesSliderRef.current?.slickNext()}
            viewAllLink="https://www.dmiher.edu.in/campus1"
          />
          <Slider ref={amenitiesSliderRef} {...settings}>
            {campusAmenities.map((item, index) => (
              <div key={index} className="px-2">
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
          </Slider>
          {/* Mobile Navigation Buttons */}
          <div className="md:hidden">
            <button
              onClick={() => amenitiesSliderRef.current?.slickPrev()}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "2rem" }}
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => amenitiesSliderRef.current?.slickNext()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "2rem" }}
            >
              <ArrowRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusFacilities;
