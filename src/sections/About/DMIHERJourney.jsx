import React, { useEffect, useState } from "react";
import DMSaheb from "../../assets/DMSaheb.png";

const DMHRSTimeline = () => {
  const colorClasses = {
    orange: {
      bg: "bg-[#F7941D]",
      text: "text-[#F7941D]",
      border: "border-[#F7941D]",
    },
    red: {
      bg: "bg-[#F04E30]",
      text: "text-[#F04E30]",
      border: "border-[#F04E30]",
    },
    yellow: {
      bg: "bg-[#E1CD67]",
      text: "text-[#E1CD67]",
      border: "border-yellow-500",
    },
    blue: {
      bg: "bg-[#269BFF]",
      text: "text-[#269BFF]",
      border: "border-[#269BFF]",
    },
    green: {
      bg: "bg-[#39B54A]",
      text: "text-[#39B54A]",
      border: "border-[#39B54A]",
    },
  };
  const timelineItems = [
    {
      id: 1,
      left: "48%",
      top: "88%",
      color: "orange",
      paracolor: "white",
      year: "1988",
      parapositionleft: "50%",
      alltextAlignmen: "center",
      alltextAlignmen: "center",
      parapositiontop: "3rem",
      content:
        "Registered under Bombay Public Trust Act, Reg. No. 1260 (N), dated 17.06.1988.",
      alwaysVisible: true,
    },
    {
      id: 2,
      left: "66%",
      top: "88%",
      color: "red",
      paracolor: "white",
      year: "1990",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Jawaharlal Nehru Medical College established — the foundation of DMIHER’s legacy in medical education.",
      alwaysVisible: true,
    },
    {
      id: 3,
      left: "85%",
      top: "88%",
      color: "green",
      paracolor: "white",
      year: "1991",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Sharad Pawar Dental College established, expanding into dental sciences.",
      alwaysVisible: true,
    },
    {
      id: 4,
      left: "95%",
      top: "78%",
      color: "yellow",
      contentColor: "#E1CD67",
      paracolor: "white",
      year: "2005",
      yearalignmentleft: "200%",
      yearalignmenttop: "-10%",
      parapositionleft: "500%",
      parapositiontop: "2rem",
      alltextAlignmen: "center",
      content:
        "Declared a Deemed to be University by the Ministry of HRD, Govt. of India (Notification No. F.9-48.2004-U.3, dated 24th May 2005).",
      alwaysVisible: true,
    },
    {
      id: 5,
      left: "93%",
      top: "61%",
      color: "blue",
      contentColor: "#269BFF",
      paracolor: "white",
      year: "2007",
      yearalignmentleft: "300%",
      yearalignmenttop: "-150%",
      parapositionleft: "600%",
      parapositiontop: "0rem",
      alltextAlignmen: "center",
      content:
        "Completed NAAC 1st Cycle Accreditation. Mahatma Gandhi Ayurvedic College added as a constituent unit.",
      alwaysVisible: true,
    },
    {
      id: 6,
      left: "79%",
      top: "55%",
      color: "orange",
      paracolor: "white",
      year: "2008-2012",
      yearalignmentleft: "-142%",
      yearalignmenttop: "100%",
      parapositionleft: "120%",
      parapositiontop: "3.2rem",
      alltextAlignmen: "center",
      content:
        "Further expansion with:– SRMMCON Nursing College– Ravi Nair Physiotherapy College",
      alwaysVisible: true,
    },
    {
      id: 7,
      left: "64%",
      top: "55%",
      color: "red",
      contentColor: "#F04E30",
      paracolor: "white",
      year: "2013",
      yearalignmentleft: "-31%",
      yearalignmenttop: "100%",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Awarded ‘A’ Grade by Ministry of HRD. Completed NAAC 2nd Cycle Accreditation.",
      alwaysVisible: true,
    },
    {
      id: 8,
      left: "47%",
      top: "55%",
      color: "green",
      contentColor: "#39B54A",
      paracolor: "white",
      year: "2017",
      yearalignmentleft: "-30%",
      yearalignmenttop: "100%",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Achieved NAAC 3rd Cycle with A+ Grade and CGPA of 3.53/4. Allied Health Sciences College established.",
      alwaysVisible: true,
    },
    {
      id: 9,
      left: "32%",
      top: "55%",
      color: "yellow",
      paracolor: "white",
      year: "2019",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Datta Meghe College of Pharmacy added to further research in pharmaceutical sciences.",
      alwaysVisible: true,
    },
    {
      id: 10,
      left: "15%",
      top: "54%",
      color: "blue",
      paracolor: "white",
      year: "2020",
      yearalignmentleft: "-100%",
      parapositionleft: "50%",
      parapositiontop: "3rem",
      alltextAlignmen: "center",
      content:
        "Datta Meghe Medical College established as an off-campus center.",
      alwaysVisible: true,
    },
    {
      id: 11,
      left: "7%",
      top: "46%",
      color: "orange",
      paracolor: "white",
      year: "2021-2022",
      yearalignmentleft: "-500%",
      parapositionleft: "-200%",
      parapositiontop: "3.1rem",
      alltextAlignmen: "center",
      content:
        "– FEAT Engineering College launched.– Centre for Distance and Online Education established.",
      alwaysVisible: true,
    },
    {
      id: 12,
      left: "10%",
      top: "26.2%",
      color: "red",
      contentColor: "#F04E30",
      paracolor: "white",
      year: "2023-2024",
      yearalignmentleft: "100%",
      parapositionleft: "400%",
      parapositiontop: "3.1rem",
      alltextAlignmen: "left",
      content:
        "Achieved NAAC 4th Cycle A++ Accreditation- CGPA: 3.78/4 — Highest among Health Science Universities in India.",
      alwaysVisible: true,
    },
    {
      id: 13,
      left: "30%",
      top: "22%",
      color: "yellow",
      paracolor: "white",
      year: "2025",
      yearalignmentleft: "0%",
      parapositionleft: "310%",
      parapositiontop: "3.1rem",
      alltextAlignmen: "center",
      content:
        "Started “Shalinitai Meghe Homeopathy Hospital College and Research Centre",
      alwaysVisible: true,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 968px)");

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Handler to update state on resize
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    // Listen to changes
    mediaQuery.addEventListener("change", handleResize);

    // Clean up
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return !isMobile ? (
    <>
      <div className="min-h-[1000px] border border-yellow-500 overflow-x-hidden relative bg-gradient-to-br bg-[#122E5E]">
        <div
          className="relative w-full h-screen min-h-[1200px] max-h-[1500px] max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-32"
          style={{
            backgroundImage: `url(${DMSaheb})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          {/* Title */}
          <div className="absolute top-8 left-8 text-white z-10">
            <h2 className="text-3xl font-bold">
              <hr className="w-16 sm:w-20 text- border-[#F04E30] mb-4 border-t-8" />
              DMIHER'S <br />
              TRANSFORMATIVE JOURNEY
            </h2>
          </div>

          {/* SVG Timeline Path */}
          <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 48 88 L 60 88 L 72 88 L 82 88 C 101 88 101 55 81 55 L 68 55 L 56 55 L 44 55 L 32 55 L 21 55 c -21 0 -21 -33 0 -33 L 35 22"
              stroke="white"
              strokeWidth="0.9"
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
                className={`w-6 h-6 rounded-full shadow-md cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg ${
                  colorClasses[item.color].bg
                }`}
              ></div>

              {/* Year Label */}
              <div
                className={`absolute transform font-bold text-lg whitespace-nowrap drop-shadow-md ${
                  colorClasses[item.color].text
                }`}
                style={{
                  top: item.yearalignmenttop ? item.yearalignmenttop : "24px",
                  left: item.yearalignmentleft
                    ? item.yearalignmentleft
                    : item.parapositionleft,
                }}
              >
                {item.year}
              </div>

              {/* Content Box */}
              <div
                className={`absolute transform w-[150px] -translate-x-1/2 text-white ${
                  item.alwaysVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                }`}
                style={{
                  top: item.parapositiontop,
                  left: item.parapositionleft,
                }}
              >
                {/* <h3 className={`font-bold mb-2 ${colorClasses[item.color].text}`}>
                {item.year}
              </h3> */}
                <p
                  className="text-xs leading-snug"
                  style={{
                    color: item.contentColor ? item.contentColor : undefined,
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="relative px-4 py-12 bg-[#001F48] text-white">
        <h2 className="text-3xl font-bold mb-10">
          <hr className="w-16 sm:w-20 text- border-[#F04E30] mb-4 border-t-8" />
          DMIHER'S <br />
          TRANSFORMATIVE JOURNEY
        </h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>

        {timelineItems.reverse().map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="mb-10 flex items-center justify-between relative w-full"
            >
              {isEven ? (
                <>
                  {/* Left side content */}
                  <div className="w-1/2 pr-6 text-right">
                    <h3
                      className={`text-2xl font-bold ${
                        colorClasses[item.color].text
                      }`}
                    >
                      {item.year}
                    </h3>
                    <p className="mt-2 text-white text-sm">{item.content}</p>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`w-8 h-8 ${
                      colorClasses[item.color].bg
                    } rounded-full z-10`}
                  ></div>

                  {/* Empty right side */}
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  {/* Empty left side */}
                  <div className="w-1/2"></div>

                  {/* Center dot */}
                  <div
                    className={`w-8 h-8 ${
                      colorClasses[item.color].bg
                    } rounded-full z-10`}
                  ></div>

                  {/* Right side content */}
                  <div className="w-1/2 pl-6 text-left">
                    <h3
                      className={`text-2xl font-bold ${
                        colorClasses[item.color].text
                      }`}
                    >
                      {item.year}
                    </h3>
                    <p className="mt-2 text-white text-sm">{item.content}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DMHRSTimeline;
