import React from "react";

const ExcellenceSection = () => {
  return (
    <div className="px-4 md:px-20 py-12 text-center bg-white text-gray-500">
      <h1 className="text-3xl md:text-3xl font-oswald-medium p-2 font-bold uppercase leading-tight">
        A Legacy of Excellence. <br />A Vision for the Future.
      </h1>

      <p className="mt-6 text-md md:text-lg max-w-4xl mx-auto text-gray-600 font-oswald-light">
        The Datta Meghe Institute of Higher Education and Research (DMIHER),
        formerly Datta Meghe Institute of Medical Sciences (DMIMS), is an
        institution on a dynamic growth path. Recognized as a Deemed University
        by the University Grants Commission (UGC) in 2005, DMIHER has expanded
        beyond its foundational roots in medical education, emerging as a
        thriving center for multidisciplinary learning.
      </p>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold font-oswald-medium text-blue-900">
          Evidence Based Education
        </h2>
        <p className="text-lg text-blue-900 mt-1 font-oswald-light">
          (Substantiated With Educational Theories And Principles)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10 overflow-hidden border border-gray-300 border-b-0">
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
            color: "text-gray-700",
            desc: "Structured SDL, PBL, mPBL, Flipped classrooms, Student portfolios",
          },
          {
            title: "Technology Driven",
            color: "text-red-500",
            desc: "Simulations, Standardised LRMs, LMS, E-portfolios, e Learning resources and MOOCs-RSM, Coursera, SWAYAM, Up to date",
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
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 h-full flex flex-col justify-start items-center border-l border-t border-gray-300 first:border-l-0 md:first:border-t-0"
          >
            <h3
              className={`font-bold text-xl mb-2 font-oswald-medium ${item.color}`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 text-center font-oswald-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;
