import React from "react";

import OD1 from "../../assets/OurDepartmentGrid/1.png";
import OD2 from "../../assets/OurDepartmentGrid/2.png";
import OD3 from "../../assets/OurDepartmentGrid/3.png";
import OD4 from "../../assets/OurDepartmentGrid/4.png";
import OD5 from "../../assets/OurDepartmentGrid/5.png";
import OD6 from "../../assets/OurDepartmentGrid/6.png";
import OD7 from "../../assets/OurDepartmentGrid/7.png";
import OD8 from "../../assets/OurDepartmentGrid/8.png";

const departmentItems = [
  { title: "Orthodontics", image: OD1 },
  { title: "Conservative Dentistry\nand Endodontics", image: OD2 },
  { title: "Pedodontia and\nPreventive Dentistry", image: OD3 },
  { title: "Oral Pathology &\nMicrobiology", image: OD4 },
  { title: "Oral and Maxillofacial\nSurgery", image: OD5 },
  { title: "Periodontics and Oral\nImplantology", image: OD6 },
  { title: "Prosthodontics and\nCrown & Bridge", image: OD7 },
  { title: "Public Health\nDentistry", image: OD8 },
];

const OurDepartment = () => {
  return (
    <section className="py-20 px-20 sm:px-8 md:px-20 max-w-7xl mx-auto">
      <div className="mb-10">
        <hr className="w-16 sm:w-20 border-[#F25022] border-t-4 mb-2" />
        <h2 className="text-3xl sm:text-4xl text-gray-800 uppercase font-oswald font-medium">
          Our Departments
        </h2>
      </div>
      <div className="grid grid-cols-1 pl-20 pr-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {departmentItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative block h-40 rounded-xl overflow-hidden shadow"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="absolute inset-0 bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
            <div className="relative z-10 h-full w-full flex items-center justify-center px-2 text-center">
              <h3 className="text-white text-base sm:text-2xl  font-oswald font-light whitespace-pre-line leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDepartment;
