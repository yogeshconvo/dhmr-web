import { useState } from "react";

const tabs = [
  {
    name: "Educational Research",
    content: "",
  },
  {
    name: "Teaching–Learning",
    content: `
    - Learning Resource Materials, Academic Books, and Notebooks uploaded to LMS every semester.
    - 240 Electronic Question Banks developed per subject with 10% yearly updates.
    - Additional publication support for advanced learners; remedial and review classes for slow learners.
    `,
  },
  {
    name: "Assessment & Evaluation",
    content: "",
  },
  {
    name: "Curriculum Design and Updation",
    content: "",
  },
  {
    name: "Faculty Development & Capacity Building",
    content: "",
  },
];

export default function EducationUnitTabs() {
  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <div className="p-8 bg-[#f9f9f9] font-[Oswald]">
      {/* Title and Description */}
      <div className="border-l-8 border-[#eb4a2d] pl-4 mb-4">
        <h1 className="text-4xl font-medium text-gray-900">EDUCATION UNIT</h1>
      </div>
      <p className="text-gray-600 text-sm font-light max-w-4xl mb-6">
        Part of the School of Higher Educational Research (SHER), the
        Educational Unit advances teaching excellence and academic best
        practices through regular sensitization and orientation workshops,
        ensuring continuous improvement in pedagogy and curriculum delivery.
      </p>

      {/* Tabs */}
      <div className="border-b border-gray-300 flex flex-wrap gap-6 text-lg font-light text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition-all duration-300 relative ${
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

      {/* Tab Content */}
      <div className="mt-6 text-gray-800 text-base font-light whitespace-pre-line">
        {activeTab.content || "Content will be available soon."}
      </div>

      {/* Footer Link */}
      {activeTab.name === "Teaching–Learning" && (
        <div className="mt-6 text-[#0a2c61] font-semibold text-sm underline">
          <a href="#" className="hover:text-blue-900">
            Unique teaching learning assessment initiatives
          </a>
        </div>
      )}
    </div>
  );
}
