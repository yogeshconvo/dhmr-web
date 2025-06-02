import React from "react";
import directorate from "../../assets/ResearchGrid/1.png";
import facilities from "../../assets/ResearchGrid/2.png";
import faculty from "../../assets/ResearchGrid/3.png";
import collaborations from "../../assets/ResearchGrid/4.png";
import funded from "../../assets/ResearchGrid/5.png";
import guiding from "../../assets/ResearchGrid/6.png";

// Reusable Card component
const ResearchCard = ({ image, title }) => {
  return (
    <div
      className="relative h-40 w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
        <h3 className="text-white text-center text-lg font-semibold px-4">
          {title}
        </h3>
      </div>
    </div>
  );
};

const ResearchGrid = () => {
  const researchData = [
    { image: directorate, title: "Directorate of Research" },
    { image: facilities, title: "Research Facilities" },
    { image: faculty, title: "Research Faculty Profile" },
    { image: collaborations, title: "National & International Collaborations" },
    { image: funded, title: "Funded Projects" },
    { image: guiding, title: "Guiding Principles" },
  ];

  const firstRow = researchData.slice(0, 4);
  const secondRow = researchData.slice(4);

  return (
    <div className="flex flex-col items-center py-20 bg-white space-y-8">
      {/* First Row: 4 items */}
      <div className="flex flex-wrap justify-center gap-6">
        {firstRow.map((item, index) => (
          <ResearchCard key={index} image={item.image} title={item.title} />
        ))}
      </div>

      {/* Second Row: 2 items */}
      <div className="flex flex-wrap justify-center gap-6">
        {secondRow.map((item, index) => (
          <ResearchCard key={index + 4} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ResearchGrid;
