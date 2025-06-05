import React from "react";
import Slider from "react-slick";

import FeatureCard1 from "../../assets/AdmissionGrid/FeatureCards1.png";
import FeatureCard2 from "../../assets/AdmissionGrid/FeatureCards2.png";
import FeatureCard3 from "../../assets/AdmissionGrid/FeatureCards3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    title: "Campus Infrastructure",
    description:
      "250+ acre campus, featuring the modern teaching hospital, lush green pathways, and students engaged in medical training or research activities",
    image: FeatureCard1,
  },
  {
    title: "Innovate the Future of Healthcare",
    description:
      "Our Medical Innovation Incubator provides mentorship, funding, and access to advanced labs, empowering you to develop solutions like new diagnostics or patient care technologies",
    image: FeatureCard2,
  },
  {
    title: "Clinical Excellence: Learn in Action",
    description:
      "At DMIHER, gain unparalleled hands-on experience by treating diverse patients across nine on-campus hospitals and conducting groundbreaking research in the state-of-the-art SVL lab",
    image: FeatureCard3,
  },
];

// Slick settings for mobile
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: (dots) => (
    <div>
      <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="h-3 w-3 rounded-full border border-black bg-transparent" />
  ),
};

export default function FeatureCards() {
  return (
    <div className="bg-white mx-auto max-w-7xl py-12 px-4 sm:px-10 lg:px-[72px]">
      <h2 className="text-3xl font-bold text-blue-900 font-oswald-medium mb-8 text-start">
        Dynamic. Future-Ready. Engaged.
      </h2>

      {/* Mobile View with Slider */}
      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {cards.map((card, idx) => (
            <div key={idx}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View - Left-Aligned Cards */}
      <div className="hidden md:flex flex-wrap gap-4">
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}

// Card Component
function Card({ card }) {
  return (
    <div className="relative w-full sm:w-[300px] md:w-[360px] h-[500px] rounded-xl overflow-hidden shadow-lg group">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 text-white p-4 h-44 flex flex-col">
        <h3
          className="text-[18px] font-bold leading-tight"
          style={{
            fontFamily: '"Helvetica LT Std", "Helvetica Neue", sans-serif',
            fontStretch: "condensed",
          }}
        >
          {card.title}
        </h3>
        <p
          className="text-sm mt-1 leading-snug overflow-hidden text-ellipsis line-clamp-4"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "400",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}
