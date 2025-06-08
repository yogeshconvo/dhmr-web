import React from "react";
import InternationalCollaborationsImg from "../../assets/InternationalCollaborations.png";

const data = [
  {
    number: "51",
    label: "Collaborations\nall across the\nglobe",
    color: "text-[#F7941D]",
    position: "top",
  },
  {
    number: "37",
    label: "Student-Faculty\nExchanges",
    color: "text-[#269BFF]",
    position: "bottom",
  },
  {
    number: "73",
    label: "Major\nCollaborative\nProjects",
    color: "text-[#E1CD67]",
    position: "top",
  },
  {
    number: "11\u00A0Cr",
    label: "Collaborative\nFunding",
    color: "text-[#F04E30]",
    position: "bottom",
  },
];

export default function InternationalCollaborations() {
  return (
    <div
      className="relative bg-[#122E5E] text-white px-4 py-10 md:py-20"
      style={{
        backgroundImage: `url(${InternationalCollaborationsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "70%",
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl ml-0 sm:ml-20 md:ml-40 mb-10 font-oswald-medium text-center sm:text-left">
        <hr className="w-12 border-[#F04E30] mb-3 border-t-4 mx-auto sm:mx-0" />
        INTERNATIONAL <br className="hidden sm:block" />
        COLLABORATIONS
      </h2>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto relative">
        {/* Desktop Version */}
        <div className="relative h-[400px] hidden md:block">
          <div className="absolute top-1/2 left-0 w-[105%] border-t border-gray-400 z-0"></div>

          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 gap-0">
            {data.map((item, idx) => (
              <div key={idx} className="relative flex justify-center">
                {/* Connecting Line */}
                <>
                  {item.position === "top" ? (
                    <div
                      className={`absolute top-0 ${
                        idx === data.length - 1 ? "right-[8px]" : "right-0"
                      } h-1/2 border-r border-gray-400`}
                    ></div>
                  ) : (
                    <div
                      className={`absolute top-1/2 ${
                        idx === data.length - 1 ? "right-[8px]" : "right-0"
                      } h-1/2 border-r border-gray-400`}
                    ></div>
                  )}
                </>

                {/* Data Block */}
                <div
                  className={`absolute ${
                    item.position === "top"
                      ? "top-[8%] translate-y-[-10%]"
                      : "bottom-[8%] translate-y-[10%]"
                  } w-full mx-auto text-center`}
                >
                  <div className={`text-7xl font-bold ${item.color}`}>
                    {item.number}
                  </div>
                  <div className="whitespace-pre-line text-xl font mt-2">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex flex-col items-center gap-10 mt-10">
          {data.map((item, idx) => (
            <div key={idx} className="text-center max-w-xs">
              <div
                className={`text-4xl max-sm:text-7xl font-bold ${item.color}`}
              >
                {item.number}
              </div>
              <div className="whitespace-pre-line text-lg mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
