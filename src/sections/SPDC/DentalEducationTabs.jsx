import { useState } from "react";

const tabs = [
  {
    name: "Enhanced Teaching-Learning",
    content: "Content for Enhanced Teaching-Learning.",
  },
  {
    name: "Faculty Development",
    content:
      "Support continuous faculty development in pedagogy, assessment, and research.",
  },
  {
    name: "Curriculum Innovation",
    content: "Content for Curriculum Innovation.",
  },
  {
    name: "Assessment & Evaluation",
    content: "Content for Assessment & Evaluation.",
  },
  {
    name: "Educational Research",
    content: "Content for Educational Research.",
  },
  {
    name: "Student Support & Mentoring",
    content: "Content for Student Support & Mentoring.",
  },
];

export default function DentalEducationTabs() {
  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <div className="bg-[#f0efef] p-25 font-[Arial]">
      <h1 className="text-3xl font-[500] mb-3 text-gray-500 font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30]  mb-3 border-t-4" />
        DENTAL EDUCATION UNIT
      </h1>

      <p className="text-gray-600 text-sm font-light max-w-4xl">
        Competency-Based Dental Education (CBDE): patient-centered, technology-{" "}
        <br />
        driven curriculum aimed at enhancing professional competency.
      </p>
      <div className="border-b border-gray-400 flex flex-wrap gap-20 text-lg justify-start font-[300] font-oswald-medium text-gray-600 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition-all duration-300 relative max-w-[7rem] ml-5 text-left break-words ${
              activeTab.name === tab.name ? "text-[#0a2c61] font-bold" : ""
            }`}
          >
            {tab.name}
            {activeTab.name === tab.name && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0a2c61]" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 text-gray-800 text-base font-light">
        {activeTab.content}
      </div>
    </div>
  );
}
