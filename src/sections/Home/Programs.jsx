import React from "react";
import program1 from "../../assets/Programs/program1.jpg";
import program2 from "../../assets/Programs/program2.jpg";
import program3 from "../../assets/Programs/program3.jpg";
import program4 from "../../assets/Programs/program4.jpg";
import program5 from "../../assets/Programs/program5.jpg";
import program6 from "../../assets/Programs/program6.jpg";
import program7 from "../../assets/Programs/program7.jpg";
import program8 from "../../assets/Programs/program8.jpg";
import program9 from "../../assets/Programs/program9.jpg";
import program10 from "../../assets/Programs/program10.jpg";
import program11 from "../../assets/Programs/program11.jpg";
import program12 from "../../assets/Programs/program12.jpg";
import program13 from "../../assets/Programs/program13.jpg";
import program14 from "../../assets/Programs/program14.jpg";
import program15 from "../../assets/Programs/program15.jpg";
import program16 from "../../assets/Programs/program16.jpg";
import programicon from "../../assets/Programs/programicon.png";

const ProgramsComponent = () => {
  const programs = [
    { name: "Medicine", img: program1 },
    { name: "Dentistry", img: program2 },
    { name: "Ayurveda", img: program3 },
    { name: "Physiotherapy", img: program4 },
    { name: "Nursing", img: program5 },
    { name: "Pharmacy", img: program6 },
    { name: "Allied health Sciences", img: program7 },
    { name: "Homeopathy", img: program8 },
    { name: "Engineering", img: program9 },
    { name: "Commerce & Management", img: program10 },
    { name: "Science and Technology", img: program11 },
    { name: "Social Sciences, Humanities & Liberal Arts", img: program12 },
    { name: "Advanced Studies", img: program13 },
    { name: "Public Health", img: program14 },
    { name: "Hospital Administration", img: program15 },
    { name: "Online Programs", img: program16 },
  ];

  return (
    <div className="bg-[#0a2b5a] px-4 sm:px-10 md:px-20 py-12">
      <div className="text-white mb-6">
        <div className="w-24 h-1.5 bg-red-500 mb-2"></div>
        <h2 className="text-3xl font-oswald-medium font-medium tracking-wide">
          PROGRAMS
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={program.img}
              alt={program.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex-grow flex flex-col justify-between">
              <h6 className="text-3xl p-5 font-oswald-medium font-light text-[#0a2b5a]">
                {program.name}
              </h6>
              <div className="flex justify-start p-4">
                <img
                  src={programicon}
                  alt="Program Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsComponent;
