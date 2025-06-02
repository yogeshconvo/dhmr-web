import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const TheBulletin = () => {
  const [activeTab, setActiveTab] = useState("News");

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
    ],
    Career: [
      {
        title: "Coming Soon",
        date: "Career opportunities will be listed here",
      },
    ],
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
      `}</style>

      <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gray-200 text-gray-500">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-medium"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
          <br />
          THE BULLETIN
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm font-light text-gray-600 gap-4">
          <div className="flex space-x-4 order-2 sm:order-1 sm:ml-auto sm:mr-auto">
            <button
              className={`text-base sm:text-lg ${
                activeTab === "News"
                  ? "underline font-medium"
                  : "hover:text-gray-500"
              }`}
              style={{ fontFamily: "Oswald, sans-serif" }}
              onClick={() => setActiveTab("News")}
            >
              News
            </button>
            <button
              className={`text-base sm:text-lg ${
                activeTab === "Events"
                  ? "underline font-medium"
                  : "hover:text-gray-500"
              }`}
              style={{ fontFamily: "Oswald, sans-serif" }}
              onClick={() => setActiveTab("Events")}
            >
              Events
            </button>
            <button
              className={`text-base sm:text-lg ${
                activeTab === "Career"
                  ? "underline font-medium"
                  : "hover:text-gray-500"
              }`}
              style={{ fontFamily: "Oswald, sans-serif" }}
              onClick={() => setActiveTab("Career")}
            >
              Career
            </button>
          </div>

          <div className="flex items-center space-x-3 order-1 sm:order-2">
            <button className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors">
              <ArrowLeft size={16} className="text-gray-400" />
            </button>
            <button className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors">
              <ArrowRight size={16} className="text-gray-500" />
            </button>
            <span
              className="text-red-600 font-medium ml-2 text-sm sm:text-base"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              VIEW ALL
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {bulletinItems[activeTab].map((item, index) => (
            <div
              key={index}
              className="text-gray-700 border-r border-gray-400 last:border-r-0 pr-4 pb-4 sm:pb-0"
            >
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 leading-tight"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-base sm:text-lg font-light"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TheBulletin;
