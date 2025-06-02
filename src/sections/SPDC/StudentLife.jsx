import React, { useEffect, useState } from "react";
import Img1 from "../../assets/SPDC/img1.png";
import Img2 from "../../assets/SPDC/img2.png";
import Img3 from "../../assets/SPDC/img3.png";
import Img4 from "../../assets/SPDC/img4.png";
import Img5 from "../../assets/SPDC/img5.png";
import Img6 from "../../assets/SPDC/img6.png";

const allClubs = [
  { title: "Academic Club", image: Img1 },
  { title: "Arts Club", image: Img2 },
  { title: "Dance Club", image: Img3 },
  { title: "Music Club", image: Img4 },
  { title: "NSS", image: Img5 },
  { title: "Social Welfare", image: Img6 },
  { title: "Demo1", image: "" },
  { title: "Demo2", image: "" },
  { title: "Demo3", image: "" },
  { title: "Demo4", image: "" },
  { title: "Demo5", image: "" },
  { title: "Demo6", image: "" },
];

const StudentLife = () => {
  const [slide, setSlide] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(allClubs.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentItems = allClubs.slice(
    slide * itemsPerSlide,
    slide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="bg-[#e3f2fe] py-10 px-4 sm:px-8 md:px-30">
      {/* Header */}
      <div className="mb-6">
        <div className="border-t-4 border-[#EE4B2B] w-10 mb-2"></div>
        <h2 className="text-3xl font-medium font-['Oswald'] text-gray-500 uppercase leading-snug">
          Student Life <br /> at SPDC&H
        </h2>
        <p className="mt-4 text-gray-600 max-w-4xl">
          Student life at Sharad Pawar Dental College & Hospital is dynamic and
          enriching, offering a perfect balance of academics, creativity, and
          community engagement. From the Academic Club and Quiz Club to vibrant
          platforms like the Music, Dance, Theatre, and Arts Clubs, students
          actively explore their passions beyond the classroom. Social impact is
          driven through initiatives under the NSS, Social Welfare Club, and
          Youth Red Cross. Sports and cultural celebrations thrive, with the
          annual signature fest—Spectrum—bringing together talent, energy, and
          camaraderie. Hostel life, student councils, and cross-disciplinary
          interactions further foster a well-rounded, spirited campus
          environment.
        </p>
      </div>

      {/* Grid Cards (6 at a time) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {currentItems.map((club, index) => (
          <div
            key={index}
            className="relative h-65 rounded-xl overflow-hidden shadow-md bg-gray-200"
          >
            {club.image ? (
              <img
                src={club.image}
                alt={club.title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                Image Placeholder
              </div>
            )}
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-opacity-30 flex items-end">
              <p className="text-white text-sm sm:text-base font-medium p-3">
                {club.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === slide ? "bg-[#EE4B2B]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default StudentLife;
