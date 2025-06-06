import React from "react";
import AG1 from "../../assets/AboutGallery/AG1.png";
import AG2 from "../../assets/AboutGallery/AG2.png";
import AG3 from "../../assets/AboutGallery/AG3.png";
import AG4 from "../../assets/AboutGallery/AG4.png";
import AG5 from "../../assets/AboutGallery/AG5.png";
import AG6 from "../../assets/AboutGallery/AG6.png";
import AG7 from "../../assets/AboutGallery/AG7.png";
import AG8 from "../../assets/AboutGallery/AG8.png";

const aboutItems = [
  {
    title: "Chancellor’s\nMessage",
    image: AG1,
  },

  {
    title: "Sponsoring\nTrust",
    image: AG2,
  },
  {
    title: "Leadership",
    image: AG3,
  },
  {
    title: "Governance",
    image: AG4,
  },
  {
    title: "Centres of\nExcellence",
    image: AG5,
  },
  {
    title: "Institutional Social\nResponsibility",
    image: AG6,
  },
  {
    title: "Autonomous\nCells",
    image: AG7,
  },
  {
    title: "Mandatory\nDisclosure",
    image: AG8,
  },
];

const AboutGrid = () => {
  return (
    <section className="py-10 px-10 sm:px-8 md:px-20 mx-auto mt-10 mb-10 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {aboutItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative block h-40 rounded-xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
            <div className="relative z-10 h-full w-full flex items-center justify-center px-2">
              <h3
                className="text-white whitespace-pre-line  text-center text-2xl font-sans  leading-tight"
                // style={{ fontFamily: "Helvetica LT Std, Condensed" }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
