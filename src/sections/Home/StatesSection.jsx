import React from "react";
import group240 from "../../assets/Group 302.png";

const StatsSection = () => {
  const stats = [
    { number: "2", label: "Campuses" },
    { number: "270+", label: "Acres" },
    { number: "275+", label: "Programs" },
    { number: "1000+", label: "Faculty members" },
    {
      number: "3200+",
      label: (
        <>
          Hospital <br /> Beds
        </>
      ),
    },
    {
      number: "75+",
      label: (
        <>
          Research & <br /> Innovation Labs
        </>
      ),
    },
  ];

  return (
    <div
      className="bg-white bg-no-repeat bg-center bg-contain text-center px-4 md:px-12 pt-15 py-12 mx-4 md:mx-20"
      style={{
        backgroundImage: `url(${group240})`,
      }}
    >
      <h2 className="text-2xl md:text-5xl font-[500] font-oswald-medium p-6 md:p-10 text-[#707070] mb-4 leading-snug">
        STEP INTO THE WORLD OF <br />
        <span className="font-oswald-medium">
          EVIDENCE-DRIVEN, <br />
          COMPETENCY-BASED LEARNING.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-6 md:mt-10">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <div className="bg-[#E1CD67] rounded-full w-32 h-32  md:w-35 md:h-35 flex items-center justify-center shadow-md">
              <span className="text-4xl  md:text-4xl font-[500] text-[#122E5E] font-oswald-medium leading-tight">
                {item.number}
              </span>
            </div>
            <p
              className={`mt-2 text-2xl md:text-2xl text-[#122E5E] font-oswald-medium text-center font-[600] leading-snug ${
                index === stats.length - 1
                  ? "max-w-[12rem] sm:max-w-[12rem] md:max-w-[14rem] leading-normal"
                  : "max-w-[7rem] sm:max-w-[7rem] md:max-w-[9rem]"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p
        className="mt-8 md:mt-10 text-[#58595B] max-w-3xl mx-auto px-2 md:px-4  text-base "
        style={{ fontFamily: "Arial, sans-serif", fontWeight: "500" }}
      >
        Founded in 1990 and recognized as a Deemed-to-be-University in 2005,
        DMIHER is a dynamic hub of multidisciplinary learning. With exceptional
        faculty, state-of-the-art facilities, and an industry-aligned
        curriculum, it fuels innovation, research, and a vibrant campus life—
        shaping future leaders ready to make an impact.
      </p>
    </div>
  );
};

export default StatsSection;
