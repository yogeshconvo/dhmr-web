import React from "react";

const ExcellenceSection = () => {
  return (
    <div className="px-4 md:px-20 py-12 text-center justify-center bg-white text-[#707070] flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-[#707070] font-[500] font-oswald-medium p-2 uppercase leading-tight">
        A Legacy of Excellence. <br />A Vision for the Future.
      </h1>

      <p
        className="mt-4 text-md md:text-sm font-[500] max-w-3xl mx-auto text-gray-600 text-center"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        The Datta Meghe Institute of Higher Education and Research (DMIHER),
        formerly Datta Meghe Institute of Medical Sciences (DMIMS), is an
        institution on a dynamic growth path. Recognized as a Deemed University
        by the University Grants Commission (UGC) in 2005, DMIHER has expanded
        beyond its foundational roots in medical education, emerging as a
        thriving center for multidisciplinary learning.
      </p>

      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold font-oswald-medium text-blue-900 text-center">
          Evidence Based Education
        </h2>
        <p className="text-lg text-blue-900 mt-1 font-oswald-light text-center">
          (Substantiated With Educational Theories And Principles)
        </p>
      </div>
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden border-2 border-gray-500 border-b-0">
        {[
          {
            title: "Integrated",
            color: "text-[#F7941D]",
            desc: "Sharing, Nesting, Co-relation, Integrated, Museum SISA, IDCD",
          },
          {
            title: "Value Based",
            color: "text-[#269BFF]",
            desc: "AETCOM, Value education, Yoga",
          },
          {
            title: "Self-directed",
            color: "text-[#707070]",
            desc: "Structured SDL, PBL, mPBL, Flipped classrooms, Student portfolios",
          },
          {
            title: "Technology Driven",
            color: "text-[#F04E30]",
            desc: "Simulations, Standardised LRMs, LMS, E-portfolios, e Learning resources and MOOCs-RSM, Coursera, SWAYAM, Up to date",
          },
          {
            title: "Patient Centric",
            color: "text-purple-700",
            desc: "ECE, Student clerkship method of clinical training, Evidence based journal club",
          },
          {
            title: "Community/ Industry Oriented",
            color: "text-[#F7941D]",
            desc: "Comprehensive health care program, Industry integrated programs",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-2 h-full flex flex-col justify-start items-center border-t border-r border-l border-gray-700 
      ${index % 6 === 0 ? "border-l-0" : ""}
      ${index < 6 ? "border-t-0" : ""}`}
          >
            <h3
              className={`font-bold text-2xl p-1 mb-2 font-oswald-medium ${item.color} text-center`}
            >
              {item.title}
            </h3>
            <p className="text-xm text-gray-700 text-center font-oswald-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;
