import React from "react";
import FeatureCard1 from "../../assets/AdmissionGrid/FeatureCards1.png";
import FeatureCard2 from "../../assets/AdmissionGrid/FeatureCards2.png";
import FeatureCard3 from "../../assets/AdmissionGrid/FeatureCards3.png";

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

export default function FeatureCards() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl  ml-25 font-bold text-blue-900 font-oswald-medium mb-8">
        {/* <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4" /> */}
        Dynamic. Future-Ready. Engaged.
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="
        relative 
        w-full 
        sm:w-[300px] 
        md:w-[400px] 
        h-[400px] 
        md:h-[500px] 
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        group
      "
          >
            <img
              src={card.image}
              alt={card.title}
              className="
          w-full 
          h-full 
          object-cover 
          transition-transform 
          group-hover:scale-105
        "
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/30 text-white p-4 text-left">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full ${
              idx === 0 ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
