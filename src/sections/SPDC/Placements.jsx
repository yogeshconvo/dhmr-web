import React from "react";
import icon1 from "../../assets/SPDC/Icons/icon1.png";
import icon2 from "../../assets/SPDC/Icons/icon2.png";
import icon3 from "../../assets/SPDC/Icons/icon3.png";
import icon4 from "../../assets/SPDC/Icons/icon4.png";
import icon5 from "../../assets/SPDC/Icons/icon5.png";
import icon6 from "../../assets/SPDC/Icons/icon6.png";

export default function Placements() {
  return (
    <div className="bg-white px-6 py-12 text-gray-500 font-[Arial]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-[500] font-oswald-medium mb-4">
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
          PLACEMENTS
        </h1>
        <p className="text-base font-light max-w-3xl">
          On an average, 40% of SPDCH graduates pursue higher education in
          renowned institutions, while 60% are successfully placed in reputed
          national and International healthcare organizations or establish
          private practices.
        </p>

        <div className="mt-10 flex w-full max-w-4xl text-white rounded overflow-hidden text-center text-xl">
          <div className="w-[40%] bg-[#0A2B61] py-4">
            <div className="font-medium text-2xl">40%</div>
            <div className="text-base mt-2">Higher Studies</div>
          </div>
          <div className="w-[60%] bg-[#2EADFF] py-4">
            <div className="font-medium text-3xl">60%</div>
            <div className="text-base mt-2">Placement self-employed</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-12 text-sm">
          <div>
            <p>
              74 students currently pursuing higher education across the globe
            </p>
          </div>
          <div>
            <p>100% students benefitted guidance for</p>
            <ul className=" ml-6">
              <li>- Competitive examinations</li>
              <li>- Career advancement</li>
              <li>- Entrepreneurial chip skill</li>
              <li>- Overseas opportunities</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex p-4 flex-wrap items-center justify-center">
          {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`University logo ${index + 1}`}
              className={`h-15 pr-4 pl-4  ${
                index !== 5 ? "border-r border-gray-300" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
