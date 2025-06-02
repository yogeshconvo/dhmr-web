import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import purposeDrivenExcellence from "../../assets/Corevalues/Purpose.png";
import compassionWithCompetence from "../../assets/Corevalues/compassion.png";
import integrityInInnovation from "../../assets/Corevalues/innovation.png";
import collaborationForImpact from "../../assets/Corevalues/united.png";
import equityInAccessAndAction from "../../assets/Corevalues/scientific.png";

const coreValues = [
  {
    number: "1",
    title: "Purpose-Driven Excellence",
    description:
      "We pursue excellence with clarity of purpose—grounded in evidence, inspired by impact.",
    image: purposeDrivenExcellence,
  },
  {
    number: "2",
    title: "Compassion with Competence",
    description:
      "We nurture professionals who blend knowledge with empathy, serving humanity with heart and skill.",
    image: compassionWithCompetence,
  },
  {
    number: "3",
    title: "Integrity in Innovation",
    description:
      "We lead with curiosity and act with conscience—ensuring our innovations uphold ethics and elevate society.",
    image: integrityInInnovation,
  },
  {
    number: "4",
    title: "Collaboration for Impact",
    description:
      "We break silos and build bridges—across disciplines, communities, and borders—to multiply our contribution.",
    image: collaborationForImpact,
  },
  {
    number: "5",
    title: "Equity in Access and Action",
    description:
      "We believe progress must be inclusive. From rural healthcare to global research, we act where we are needed most.",
    image: equityInAccessAndAction,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16 font-['Oswald']">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <div className="w-24 h-1.5 bg-red-500 mb-2"></div>
          <h2 className="text-4xl font-medium text-gray-500 tracking-wide">
            CORE VALUES
          </h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {coreValues.map((value) => (
            <SwiperSlide key={value.number}>
              <div className="flex items-start p-4 h-full">
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14  md:h-14 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-xl md:text-3xl mr-4 md:mt-35">
                  {value.number}
                </div>

                {/* Content */}
                <div>
                  <img
                    src={value.image}
                    alt={value.title}
                    className="mb-4 max-h-24 md:max-h-28 w-auto object-contain"
                  />
                  <h3 className="text-lg md:text-xl font-medium text-red-600 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoreValues;
