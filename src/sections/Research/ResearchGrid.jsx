import React from "react";
import directorate from "../../assets/ResearchGrid/1.png";
import facilities from "../../assets/ResearchGrid/2.png";
import faculty from "../../assets/ResearchGrid/3.png";
import collaborations from "../../assets/ResearchGrid/4.png";
import funded from "../../assets/ResearchGrid/5.png";
import guiding from "../../assets/ResearchGrid/6.png";
const ResearchCard = ({ image, title }) => {
  const lines = title.split("\n");

  return (
    <div
      className="relative  h-24 md:h-40 w-36 sm:w-48 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-center px-2"
        style={{
          fontFamily: '"Helvetica Neue", sans-serif',
          fontStretch: "condensed",
        }}
      >
        <h3 className="text-white text-xl">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
      </div>
    </div>
  );
};

const ResearchGrid = () => {
  const researchData = [
    { image: directorate, title: "Directorate of\nResearch" },
    { image: facilities, title: "Research Facilities" },
    { image: faculty, title: "Research Faculty\nProfile" },
    {
      image: collaborations,
      title: "National &\nInternational\nCollaborations",
    },
    { image: funded, title: "Funded Projects" },
    { image: guiding, title: "Guiding Principles" },
  ];

  const firstRow = researchData.slice(0, 4);
  const secondRow = researchData.slice(4);

  return (
    <div className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* First row: 4 items */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          {firstRow.map((item, index) => (
            <ResearchCard key={index} image={item.image} title={item.title} />
          ))}
        </div>

        {/* Second row: 2 items centered */}
        <div className="flex justify-center gap-4">
          {secondRow.map((item, index) => (
            <ResearchCard
              key={index + 4}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchGrid;
