import React from "react";

const DMHRSTimeline = () => {
  const timelineItems = [
    {
      id: 1,
      left: "35%",
      top: "92%",
      color: "orange",
      year: "1988",
      content:
        "Registered under Bombay Public Trust Act, Reg. No. 1269 (N), dated 17.08.1988.",
    },
    {
      id: 2,
      left: "55%",
      top: "92%",
      color: "red",
      year: "1990",
      content:
        "Jawaharlal Nehru Medical College, Wardha - foundation of DMHRS's legacy in medical education.",
    },
    {
      id: 3,
      left: "75%",
      top: "92%",
      color: "green",
      year: "1991",
      content:
        "Sharad Pawar Dental College established, expanding into dental sciences.",
    },
    {
      id: 4,
      left: "88%",
      top: "75%",
      color: "yellow",
      year: "2005",
      content:
        "Declared a Deemed to be University by the Ministry of HRD, Govt. of India (Notification No. F.9-48.2004-U.3, dated 24th May 2005).",
    },
    {
      id: 5,
      left: "88%",
      top: "55%",
      color: "blue",
      year: "2007",
      content:
        "Completed NAAC 1st Cycle Accreditation. Mahatma Gandhi Ayurvedic College added as a constituent unit.",
    },
    {
      id: 6,
      left: "68%",
      top: "55%",
      color: "orange",
      year: "2008-2012",
      content:
        "Further expansion with: - SRMMCON Nursing College - Ravi Nair Physiotherapy College",
    },
    {
      id: 7,
      left: "56%",
      top: "55%",
      color: "red",
      year: "2013",
      content: "Awarded 'A' Grade by Ministry of HRD. Completed NAAC 2nd",
    },
    {
      id: 8,
      left: "44%",
      top: "55%",
      color: "green",
      year: "2017",
      content:
        "Achieved NAAC 3rd Cycle with A+ Grade and CGPA of 3.51/4. Allied Health Sciences College established.",
    },
    {
      id: 9,
      left: "32%",
      top: "55%",
      color: "yellow",
      year: "2019",
      content:
        "Datta Meghe College of Pharmacy added to further research in pharmaceutical sciences.",
    },
    {
      id: 10,
      left: "20%",
      top: "55%",
      color: "blue",
      year: "2020",
      content:
        "Datta Meghe Medical College established as an off-campus center.",
    },
    {
      id: 11,
      left: "8%",
      top: "35%",
      color: "orange",
      year: "2021-2022",
      content:
        "- FEAT Engineering College launched. - Centre for Distance and Online Education established.",
      alwaysVisible: true,
    },
    {
      id: 12,
      left: "15%",
      top: "15%",
      color: "red",
      year: "2023-2024",
      content:
        "Achieved NAAC 4th Cycle A++ Accreditation - CGPA: 3.78/4 - Highest among Health Science Universities in India.",
      alwaysVisible: true,
    },
  ];

  const colorClasses = {
    orange: {
      bg: "bg-orange-500",
      text: "text-orange-400",
      border: "border-orange-500",
    },
    red: {
      bg: "bg-red-500",
      text: "text-red-300",
      border: "border-red-500",
    },
    yellow: {
      bg: "bg-yellow-500",
      text: "text-yellow-400",
      border: "border-yellow-500",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-400",
      border: "border-blue-500",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-400",
      border: "border-green-500",
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Title */}
        <div className="absolute top-8 left-8 text-white z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
            DMHRS Timeline
          </h1>
          <p className="text-blue-200 text-sm">
            Hover over the dots to see detailed information
          </p>
        </div>

        {/* SVG Timeline Path */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 35 92 L 55 92 L 75 92 L 88 92 Q 92 92 92 88 L 92 75 Q 92 70 90 68 L 88 55 L 68 55 L 56 55 L 44 55 L 32 55 L 20 55 Q 15 55 12 50 Q 8 45 8 35 Q 8 25 15 15"
            stroke="white"
            strokeWidth="0.3"
            fill="none"
            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          />
        </svg>

        {/* Timeline Items */}
        {timelineItems.map((item) => (
          <div
            key={item.id}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: item.left, top: item.top }}
          >
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg ${
                colorClasses[item.color].bg
              }`}
            ></div>

            {/* Year Label */}
            <div
              className={`absolute top-6 left-1/2 transform -translate-x-1/2 font-bold text-lg whitespace-nowrap drop-shadow-md ${
                colorClasses[item.color].text
              }`}
            >
              {item.year}
            </div>

            {/* Content Box */}
            <div
              className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-85 text-white p-4 rounded-lg max-w-xs shadow-xl border border-white border-opacity-20 transition-all duration-300 ${
                item.alwaysVisible
                  ? "opacity-100 visible"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              }`}
            >
              <h3 className={`font-bold mb-2 ${colorClasses[item.color].text}`}>
                {item.year}
              </h3>
              <p className="text-xs leading-snug">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMHRSTimeline;
