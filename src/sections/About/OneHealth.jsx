import React, { useRef, useEffect, useState } from "react";

const OneHealth = () => {
  const headers = [
    "Core Medicine",
    "Paramedics",
    "Indian System",
    "One Health",
  ];
  const rows = [
    "Engineering",
    "Management",
    "Arts & Humanity",
    "Skill Development",
  ];
  const colors = {
    technoHealth: "bg-green-600",
    apprenticeship: "bg-lime-400",
    healthMgmt: "bg-sky-400",
    valueSystem: "bg-blue-800",
  };

  const matrix = [
    [colors.technoHealth, null, null, colors.apprenticeship],
    [
      colors.apprenticeship,
      colors.apprenticeship,
      colors.technoHealth,
      colors.apprenticeship,
    ],
    [colors.healthMgmt, null, colors.healthMgmt, colors.apprenticeship],
    [colors.valueSystem, null, null, colors.apprenticeship],
  ];

  const blockRefs = useRef([]);
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const positions = blockRefs.current.filter(Boolean).map((el, idx) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
        row: Math.floor(idx / headers.length),
        col: idx % headers.length,
      };
    });

    // Define the order of traversal to match the image's pattern with straight lines
    const traversalOrder = [
      { row: 0, col: 0 }, // Engineering - Core Medicine (technoHealth)
      { row: 0, col: 3 }, // Engineering - One Health (apprenticeship)
      { row: 1, col: 3 }, // Management - One Health (apprenticeship)
      { row: 1, col: 2 }, // Management - Indian System (technoHealth)
      { row: 1, col: 1 }, // Management - Paramedics (apprenticeship)
      { row: 1, col: 0 }, // Management - Core Medicine (apprenticeship)
      { row: 2, col: 0 }, // Arts & Humanity - Core Medicine (healthMgmt)
      { row: 2, col: 2 }, // Arts & Humanity - Indian System (healthMgmt)
      { row: 2, col: 3 }, // Arts & Humanity - One Health (apprenticeship)
      { row: 3, col: 3 }, // Skill Development - One Health (apprenticeship)
      { row: 3, col: 0 }, // Skill Development - Core Medicine (valueSystem)
    ];

    const newLines = [];
    for (let i = 0; i < traversalOrder.length - 1; i++) {
      const current = traversalOrder[i];
      const next = traversalOrder[i + 1];

      const currentPos = positions.find(
        (pos) => pos.row === current.row && pos.col === current.col
      );
      const nextPos = positions.find(
        (pos) => pos.row === next.row && pos.col === next.col
      );

      if (currentPos && nextPos) {
        // Check if the line is straight (either row or col should change, not both)
        if (currentPos.row === nextPos.row || currentPos.col === nextPos.col) {
          newLines.push({
            x1: currentPos.x,
            y1: currentPos.y,
            x2: nextPos.x,
            y2: nextPos.y,
          });
        } else {
          // If diagonal, break into two straight lines (horizontal then vertical)
          const midPointX = currentPos.x;
          const midPointY = nextPos.y;
          newLines.push({
            x1: currentPos.x,
            y1: currentPos.y,
            x2: midPointX,
            y2: midPointY,
          });
          newLines.push({
            x1: midPointX,
            y1: midPointY,
            x2: nextPos.x,
            y2: nextPos.y,
          });
        }
      }
    }

    setLines(newLines);
  }, []);

  return (
    <div className="p-20 bg-gray-100 flex flex-col ">
      <h2 className="text-3xl font-bold mb-10 ml-10">
        <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
        ONE HEALTH
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {/* Legend */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rotate-45 ${colors.technoHealth}`}></div>
            <span className="text-sm font-medium">
              Techno Health - Clinical Engineering, AI, Biotechnology
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rotate-45 ${colors.apprenticeship}`}></div>
            <span className="text-sm font-medium">
              Apprenticeship Embedded, Work Integrated, B Voc
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rotate-45 ${colors.healthMgmt}`}></div>
            <span className="text-sm font-medium">
              Health Management, ODL Online
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rotate-45 ${colors.valueSystem}`}></div>
            <span className="text-sm font-medium">Value System</span>
          </div>
        </div>

        {/* Matrix + SVG overlay */}
        <div ref={containerRef} className="relative overflow-auto">
          <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            {lines.map((line, idx) => (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="gray"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          <table className="table-fixed border-separate border-spacing-4 relative z-10">
            <thead>
              <tr>
                <th className="w-32"></th>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="text-sm font-semibold text-gray-700 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((rowLabel, rowIndex) => (
                <tr key={rowLabel}>
                  <td className="text-sm font-semibold text-gray-700">
                    {rowLabel}
                  </td>
                  {matrix[rowIndex].map((color, colIndex) => {
                    const cellIndex = rowIndex * headers.length + colIndex;
                    return (
                      <td key={colIndex} className="text-center">
                        {color && (
                          <div
                            ref={(el) => (blockRefs.current[cellIndex] = el)}
                            className={`w-5 h-5 rotate-45 mx-auto ${color}`}
                          ></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OneHealth;
