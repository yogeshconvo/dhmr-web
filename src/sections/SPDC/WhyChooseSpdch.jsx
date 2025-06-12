import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Img1 from "../../assets/Group.png";

const cards = [
  {
    bg: "bg-[#F5F0D6]",
    content: (
      <>
        <img src={Img1} alt="NIRF Logo" className="h-30 p-10" />
        <p className="text-2xl text-gray-700">
          Ranked among{" "}
          <span className="text-[#D3411E] font-bold">
            India’s Top 25 dental institutions (NIRF)
          </span>{" "}
          for 5 consecutive years – 24th rank in NIRF 2024
        </p>
      </>
    ),
  },
  {
    bg: "bg-white",
    content: (
      <>
        <img src={Img1} alt="NABH Logo" className="h-10 mb-2" />
        <p>
          <span className="text-[#007BFF] font-bold">
            First NABH-accredited
          </span>
          <br /> Dental hospital in Maharashtra
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#092C5C]",
    content: (
      <>
        <p className="text-[#F7D13D] font-bold">
          Advanced Simulation & Digital Skill Lab:
        </p>
        <p className="text-white text-sm">
          high-fidelity mannequins, CAD-CAM, 3D theater, skill labs,
          self-learning museums
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFA726]",
    content: (
      <>
        <p className="text-black font-bold text-lg">
          ₹10+ crore
          <br />
          Research funding
        </p>
        <p className="text-xs text-black mt-1">
          from ICMR, SERB, DST, Erasmus EU, Smile Train, NewGen IEDC, NSTEDB –
          100+ International Adjunct Faculty
        </p>
        <p className="text-sm font-semibold mt-2">Research collaborations:</p>
        <p className="text-sm">IISC Bengaluru, IITs</p>
      </>
    ),
  },
  {
    bg: "bg-[#DCEEFF]",
    content: (
      <>
        <p className="text-[#F25022] font-bold text-lg">
          Academic partnerships
        </p>
        <p className="text-sm">
          Johns Hopkins University
          <br />
          University of Adelaide, and others
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FBE7C1]",
    content: (
      <>
        <p className="text-[#F25022] font-bold">
          Multiple national and international student awards:
        </p>
        <p className="text-sm mt-2">
          ICMR CNMC STS, Pierre Fauchard Academy (5 years, consecutively)
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#007BFF]/90 text-white",
    content: (
      <>
        <p className="font-bold">
          Comprehensive Oral Cancer Therapy Unit experience –
        </p>
        <ul className="text-sm list-disc list-inside mt-2 space-y-1">
          <li>Smile Train for cleft care</li>
          <li>Head & neck cancer surgeries, microvascular surgeries</li>
          <li>
            Pioneers in Micro-Endodontics, Lingual Orthodontics, Full Mouth
            Implants, Maxillofacial Prosthesis, Orthognathic Surgery
          </li>
          <li>Aesthetic Surgeries</li>
        </ul>
      </>
    ),
  },
];

const WhyChooseSpdch = () => {
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

export default WhyChooseSpdch;
