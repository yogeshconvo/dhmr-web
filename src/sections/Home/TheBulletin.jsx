import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const TheBulletin = () => {
  const [activeTab, setActiveTab] = useState("News");
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const bulletinItems = {
    Events: [
      {
        title: "Admission Notification for M.Sc JNMC (2025-2026)",
        date: "Published on 15th January 2025",
      },
      {
        title: "Hostel Fees Notice - PG MS, MD 1st Year 2024-25",
        date: "Updated on 10th February 2025",
      },
      {
        title: "University Ranked Among Top 10 Medical Institutions",
        date: "20th January 2025",
      },
      {
        title: "New Research Grant Awarded to DMIHER",
        date: "5th February 2025",
      },
      {
        title: "International Conference on Medical Education",
        date: "25th February 2025",
      },
      { title: "Alumni Meet 2025 Registration Open", date: "1st March 2025" },
    ],
    News: [
      {
        title:
          "ALLIEDCON 25 Allied Health Science Professional National Conference 2025",
        date: "28th Feb to 1st March 2025",
      },
      {
        title:
          "SPDC-SYMBIOSIS 2025, 6th National Symbiotic Interdisciplinary Conference and Competition",
        date: "29th & 30th January 2025",
      },
      {
        title: "TECHNOVENT - SAS Wardha (Innovation Meets Creativity)",
        date: "27th- 28th March 2025",
      },
      {
        title:
          "Medicon-DMIHER 2025 Advancing Frontiers: Bridging Gaps & Transforming Healthcare Through Innovations, JNMC, Wardha and DMMC, Nagpur",
        date: "16th, 17th & 18th Feb 2025",
      },
      {
        title: "New Medical Research Facility Inauguration",
        date: "5th March 2025",
      },
      {
        title: "Student Exchange Program with International Universities",
        date: "10th March 2025",
      },
    ],
    Career: ["https://www.dmiher.edu.in/careers"],
  };

  const currentItems = bulletinItems[activeTab];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, currentItems.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= currentItems.length ? 0 : prev + itemsPerPage
    );
  };

  const handleTabChange = (tab) => {
    if (tab === "Career") {
      // If Career tab clicked, redirect to the URL immediately
      window.open(bulletinItems["Career"][0], "_blank"); // open in new tab
      return;
    }
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const visibleItems = currentItems.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-12 bg-gray-200 text-gray-500 mx-auto">
      <h2
        className="text-2xl font-[500] sm:text-3xl lg:text-4xl"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
        <br />
        THE BULLETIN
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4 flex-wrap justify-center max-w-full overflow-x-auto">
            {["News", "Events", "Career"].map((tab, index) => (
              <button
                key={tab}
                className={`text-base sm:text-lg whitespace-nowrap ${
                  activeTab === tab ? "underline" : "hover:text-gray-400"
                } ${index < 2 ? "border-r-2 border-gray-500 pr-4 " : ""}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab !== "Career" && (
          <div className="flex justify-center sm:justify-end hidden md:block items-center space-x-3">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <ArrowLeft
                size={14}
                className={`${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex + itemsPerPage >= currentItems.length}
              aria-label="Next"
            >
              <ArrowRight
                size={14}
                className={`${
                  currentIndex + itemsPerPage >= currentItems.length
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {activeTab !== "Career" && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-full overflow-x-auto">
          {visibleItems.map((item, index) => (
            <div
              key={currentIndex + index}
              className="text-gray-700 pr-4 pb-4 sm:pb-0 whitespace-normal min-w-[250px] sm:border-r sm:border-gray-400 sm:last:border-r-0"
            >
              <h3
                className="text-xl text-[#707070] sm:text-xl lg:text-2xl leading-tight"
                style={{
                  fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                }}
              >
                {item.title}
              </h3>
              <p className="text-base text-[#269BFF] sm:text-base">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TheBulletin;
