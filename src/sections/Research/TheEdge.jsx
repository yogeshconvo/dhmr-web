import React from "react";
import Slider from "react-slick";
import TheEdge1 from "../../assets/ResearchGrid/TheEdge1.png";
import TheEdge2 from "../../assets/ResearchGrid/TheEdge2.png";
import TheEdge3 from "../../assets/ResearchGrid/TheEdge3.png";
import TheEdge4 from "../../assets/ResearchGrid/TheEdge4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    title: "Top Performer in Research Grants",
    description:
      "Consistently ranks among top universities for UG & PG grants from ICMR, CCRAS, RNTCP, and more.",
    image: TheEdge1,
  },
  {
    title: "DST-Funded TIFAC Centre",
    description:
      "Hosts a Department of Science & Technology-backed TIFAC Centre in Interventional Radiology.",
    image: TheEdge2,
  },
  {
    title: "Pioneers in Herbal Medicine Research",
    description:
      "Equipped with Rasashala for herbal formulation and an authentic Herbal Garden for medicinal plant studies.",
    image: TheEdge3,
  },
  {
    title: "Robust Clinical Research",
    description:
      "Includes an Institutional Clinical Research Unit and participation in national health programs.",
    image: TheEdge4,
  },
  {
    title: "AICTE-Supported IDEA Lab",
    description:
      "A space for innovation, prototyping, and interdisciplinary design thinking.",
    image: TheEdge1,
  },
  {
    title: "State-of-the-Art Preclinical Facility",
    description:
      "Centralized infrastructure for early-stage biomedical and drug research.",
    image: TheEdge2,
  },
  {
    title: "Govt-Recognized Evidence Resource Hub",
    description:
      "Approved by the Ministry of Health as a national centre for evidence-based clinical guidelines.",
    image: TheEdge3,
  },
  {
    title: "BIRAC-Supported BioNEST Incubator",
    description:
      "A Bioincubator that nurtures biotech startups and scalable innovations.",
    image: TheEdge4,
  },
  {
    title: "ICMR-Linked Integrative Medicine Network",
    description:
      "Part of ICMR-NITM’s nationwide Clinical Trial Network for Integrative Medicine.",
    image: TheEdge3,
  },
];

const TheEdge = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4 gap-2">{dots.slice(0, 4)}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
    ),
  };

  return (
    <section className="bg-white py-16 px-6 md:px-30 text-gray-600 font-sans">
      {/* Heading */}
      <div className="mb-12 ">
        <h2 className="text-2xl ml-2 md:text-3xl font-[500] font-oswald-medium uppercase inline-block  pb-1">
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4 h-2" />
          The Edge
        </h2>
        <p className="text-2xl font-[400]  ml-2 font-oswald-medium mt-2">
          Experience The Edge In Research, <br /> Trials & Innovation
        </p>
        <p className="text-sm text-gray-600 ml-2  font-oswald-light mt-1">
          Evolving as one of India’s Most Distinctive Research Ecosystems
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-2">
            <div className="relative rounded-lg overflow-hidden shadow-md group h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full  object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-white font-oswald-medium text-sm md:text-base">
                  {card.title}
                </h3>
                <p className="text-white font-oswald-light text-xs md:text-sm mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TheEdge;
