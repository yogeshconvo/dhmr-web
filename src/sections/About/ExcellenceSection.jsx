import React from "react";

const ExcellenceSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-20 pt-12 text-center bg-white text-[#707070]">
      <h1 className="text-3xl md:text-3xl text-[#707070] font-[600] font-oswald-medium p-2 uppercase leading-tight">
        A Legacy of Excellence. <br />A Vision for the Future.
      </h1>

      <p
        className="mt-4 text-md md:text-xs font-[500] max-w-2xl mx-auto text-gray-600"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        The Datta Meghe Institute of Higher Education and Research (DMIHER),
        formerly Datta Meghe Institute of Medical Sciences (DMIMS), is an
        institution on a dynamic growth path. Recognized as a Deemed University
        by the University Grants Commission (UGC) in 2005, DMIHER has expanded
        beyond its foundational roots in medical education, emerging as a
        thriving center for multidisciplinary learning.
      </p>

      <div className="mt-4 border-t-2 border-b-2 pt-5 pb-5 border-blue-900 md:border-t-0 md:border-b-0 ">
        <h2 className="text-2xl md:text-3xl font-bold font-oswald-medium text-[#122E5E]">
          Evidence Based Education
        </h2>
        <p className="text-[15px] text-[#122E5E] mt-1  font-[500]">
          (Substantiated With Educational Theories And Principles)
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
       w-4/5 mx-auto md:w-full
       overflow-hidden
       md:border-b-0 md:border-1 md:border-[#58595B]"
      >
        {[
          {
            title: "Integrated",
            color: "text-orange-500",
            desc: "Sharing, Nesting, Co-relation, Integrated, Museum SISA, IDCD",
          },
          {
            title: "Value Based",
            color: "text-blue-500",
            desc: "AETCOM, Value education, Yoga",
          },
          {
            title: "Self-directed",
            color: "text-[#58595B]",
            desc: "Structured SDL, PBL, mPBL, Flipped classrooms, Student portfolios",
          },
          {
            title: "Technology Driven",
            color: "text-red-500",
            desc: "Simulations,Standardised LRMs, LMS, E-portfolios, e Learning resources and MOOCs-RSM, Coursera, SWAYAM, Up to date",
          },
          {
            title: "Patient Centric",
            color: "text-purple-700",
            desc: "ECE, Student clerkship method of clinical training, Evidence based journal club",
          },
          {
            title: "Community/ Industry Oriented",
            color: "text-orange-500",
            desc: "Comprehensive health care program, Industry integrated programs",
          },
        ].map((item, index, array) => (
          <div
            key={index}
            className={`
        p-4 h-full flex flex-col justify-start items-center 
        md:border md:border-[#58595B] md:border-t-0 md:border-l-0
        ${
          index !== array.length - 1
            ? "border-b border-[#58595B]"
            : "border-b-0"
        }
        md:border-b-0
        ${index === array.length - 1 ? "md:border-r-0" : ""}
      `}
          >
            <div className="w-4/5 mx-auto md:w-full">
              <h3
                className={`font-bold mb-2 font-oswald-medium ${item.color} ${
                  item.title === "Community/ Industry Oriented"
                    ? "text-lg leading-snug"
                    : "text-xl"
                }`}
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {item.title}
              </h3>
              <p className="text-xs text-[#58595B] text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;
