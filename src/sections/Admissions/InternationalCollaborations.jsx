import React from "react";
import InternationalCollaborationsImg from "../../assets/InternationalCollaborations.png";

const data = [
  {
    number: "51",
    label: "Collaborations\nall across the\nglobe",
    color: "text-orange-500",
    position: "top",
  },
  {
    number: "37",
    label: "Student-Faculty\nExchanges",
    color: "text-sky-400",
    position: "bottom",
  },
  {
    number: "73",
    label: "Major\nCollaborative\nProjects",
    color: "text-yellow-300",
    position: "top",
  },
  {
    number: "11 Cr",
    label: "Collaborative\nFunding",
    color: "text-red-500",
    position: "bottom",
  },
];

export default function InternationalCollaborations() {
  return (
    <div
      className="relative bg-[#122E5E] min-h-screen text-white px-10 py-16"
      style={{
        backgroundImage: `url(${InternationalCollaborationsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-oswald-medium">
            <hr className="w-12 border-red-600 mb-3 border-t-4" />
            INTERNATIONAL <br /> COLLABORATIONS
          </h2>
        </div>

        {/* Middle Line + Data Points */}
        <div className="relative h-[300px]">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full border-t border-white z-0"></div>

          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4">
            {data.map((item, idx) => (
              <div key={idx} className="relative flex justify-center">
                {/* Right border (not for last item) */}
                {idx < data.length - 1 && (
                  <>
                    {item.position === "top" ? (
                      // Border from top to center line (50%)
                      <div className="absolute top-0 right-0 h-1/2 border-r border-white"></div>
                    ) : (
                      // Border from center line (50%) to bottom
                      <div className="absolute top-1/2 right-0 h-1/2 border-r border-white"></div>
                    )}
                  </>
                )}

                {/* Number and label */}
                <div
                  className={`absolute ${
                    item.position === "top" ? "top-[10%]" : "bottom-[10%]"
                  } text-center`}
                >
                  <div className={`text-5xl font-bold ${item.color}`}>
                    {item.number}
                  </div>
                  <div className="whitespace-pre-line text-sm mt-2">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
