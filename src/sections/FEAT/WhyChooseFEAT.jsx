import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const cards = [
  {
    bg: "bg-[#FF6F00]/90 text-white",
    content: (
      <>
        <p className="font-bold text-lg">
          Faculties from IITs, NITs and top medical institutions
        </p>
        <p className="text-sm mt-2">
          <span className="font-semibold">Internship:</span> ISRO, IITs, VNIT,
          leading Med-Tech firms
        </p>
        <p className="text-sm mt-2">
          <span className="font-semibold">
            International exchange programs:
          </span>{" "}
          UC Berkeley, University of Sydney & more
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#D32F2F] font-bold text-lg">
          AI-driven Healthcare projects, Telemedicine, Wearables & IoT
          applications
        </p>
        <p className="text-sm mt-2">
          Advanced Technical Courses via School of Experiential Learning (SEL) &
          Simulation Centre (SC)
        </p>
        <p className="text-sm mt-2">High-tech skill labs</p>
      </>
    ),
  },
  {
    bg: "bg-[#0D47A1] text-white",
    content: (
      <>
        <p className="font-bold text-lg">1500+ Bedded</p>
        <p className="text-sm mt-2">
          Largest teaching hospital in central India for real-time patient data
          research
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFF3E0]",
    content: (
      <>
        <p className="text-[#F57C00] font-bold text-lg">
          Government-funded research
        </p>
        <p className="text-sm mt-2">DST-TIDE, ICMR, DRDO & others</p>
        <p className="text-sm mt-2">
          <span className="font-semibold">Memberships:</span> IEEE, IETE, CSI,
          ISTE, IE(I), GDG, C4GT, GeeksforGeeks
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#0D47A1] font-bold text-lg">Faculty-led projects</p>
        <p className="text-sm mt-2">
          supported by DST-TIDE, DRDO and ICMR, published in Q1 journals
          (Springer Nature & more)
        </p>
      </>
    ),
  },
];

const WhyChooseFEAT = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-[#FAFAF6]">
      <h2 className="text-3xl text-gray-800 font-oswald-medium mb-10">
        <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
        WHY CHOOSE SPDCH
      </h2>
      <Swiper
        dots={true}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-[300px] h-[350px] p-6 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
            >
              {card.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyChooseFEAT;
