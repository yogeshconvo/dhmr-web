// import React, { useRef, useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const OneHealth = () => {
//   const headers = [
//     "Core Medicine",
//     "Paramedics",
//     "Indian System",
//     "One Health",
//   ];
//   const rows = [
//     "Engineering",
//     "Management",
//     "Arts & Humanity",
//     "Skill Development",
//   ];
//   const colors = {
//     technoHealth: "bg-green-600",
//     apprenticeship: "bg-lime-400",
//     healthMgmt: "bg-sky-400",
//     valueSystem: "bg-blue-800",
//   };

//   const matrix = [
//     [colors.technoHealth, null, null, colors.apprenticeship],
//     [
//       colors.apprenticeship,
//       colors.apprenticeship,
//       colors.technoHealth,
//       colors.apprenticeship,
//     ],
//     [colors.healthMgmt, null, colors.healthMgmt, colors.apprenticeship],
//     [colors.valueSystem, null, null, colors.apprenticeship],
//   ];

//   const blockRefs = useRef([]);
//   const containerRef = useRef(null);
//   const [lines, setLines] = useState([]);

//   useEffect(() => {
//     const containerRect = containerRef.current?.getBoundingClientRect();
//     const positions = blockRefs.current.filter(Boolean).map((el, idx) => {
//       const rect = el.getBoundingClientRect();
//       return {
//         x: rect.left + rect.width / 2 - containerRect.left,
//         y: rect.top + rect.height / 2 - containerRect.top,
//         row: Math.floor(idx / headers.length),
//         col: idx % headers.length,
//       };
//     });

//     // Define the order of traversal to match the image's pattern with straight lines
//     const traversalOrder = [
//       { row: 0, col: 0 }, // Engineering - Core Medicine (technoHealth)
//       { row: 0, col: 3 }, // Engineering - One Health (apprenticeship)
//       { row: 1, col: 3 }, // Management - One Health (apprenticeship)
//       { row: 1, col: 2 }, // Management - Indian System (technoHealth)
//       { row: 1, col: 1 }, // Management - Paramedics (apprenticeship)
//       { row: 1, col: 0 }, // Management - Core Medicine (apprenticeship)
//       { row: 2, col: 0 }, // Arts & Humanity - Core Medicine (healthMgmt)
//       { row: 2, col: 2 }, // Arts & Humanity - Indian System (healthMgmt)
//       { row: 2, col: 3 }, // Arts & Humanity - One Health (apprenticeship)
//       { row: 3, col: 3 }, // Skill Development - One Health (apprenticeship)
//       { row: 3, col: 0 }, // Skill Development - Core Medicine (valueSystem)
//     ];

//     const newLines = [];
//     for (let i = 0; i < traversalOrder.length - 1; i++) {
//       const current = traversalOrder[i];
//       const next = traversalOrder[i + 1];

//       const currentPos = positions.find(
//         (pos) => pos.row === current.row && pos.col === current.col
//       );
//       const nextPos = positions.find(
//         (pos) => pos.row === next.row && pos.col === next.col
//       );

//       if (currentPos && nextPos) {
//         // Check if the line is straight (either row or col should change, not both)
//         if (currentPos.row === nextPos.row || currentPos.col === nextPos.col) {
//           newLines.push({
//             x1: currentPos.x,
//             y1: currentPos.y,
//             x2: nextPos.x,
//             y2: nextPos.y,
//           });
//         } else {
//           // If diagonal, break into two straight lines (horizontal then vertical)
//           const midPointX = currentPos.x;
//           const midPointY = nextPos.y;
//           newLines.push({
//             x1: currentPos.x,
//             y1: currentPos.y,
//             x2: midPointX,
//             y2: midPointY,
//           });
//           newLines.push({
//             x1: midPointX,
//             y1: midPointY,
//             x2: nextPos.x,
//             y2: nextPos.y,
//           });
//         }
//       }
//     }

//     setLines(newLines);
//   }, []);

//   return (
//     <div className="p-20 bg-gray-100 flex flex-col ">
//       <h2 className="text-3xl font-bold mb-10 ml-10">
//         <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
//         ONE HEALTH
//       </h2>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-16">
//         {/* Legend */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-3">
//             <div className={`w-4 h-4 rotate-45 ${colors.technoHealth}`}></div>
//             <span className="text-sm font-medium">
//               Techno Health - Clinical Engineering, AI, Biotechnology
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className={`w-4 h-4 rotate-45 ${colors.apprenticeship}`}></div>
//             <span className="text-sm font-medium">
//               Apprenticeship Embedded, Work Integrated, B Voc
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className={`w-4 h-4 rotate-45 ${colors.healthMgmt}`}></div>
//             <span className="text-sm font-medium">
//               Health Management, ODL Online
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className={`w-4 h-4 rotate-45 ${colors.valueSystem}`}></div>
//             <span className="text-sm font-medium">Value System</span>
//           </div>
//         </div>

//         {/* Matrix + SVG overlay */}
//         <div ref={containerRef} className="relative overflow-auto">
//           <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
//             {lines.map((line, idx) => (
//               <line
//                 key={idx}
//                 x1={line.x1}
//                 y1={line.y1}
//                 x2={line.x2}
//                 y2={line.y2}
//                 stroke="gray"
//                 strokeWidth="1.5"
//               />
//             ))}
//           </svg>

//           <table className="table-fixed border-separate border-spacing-4 relative z-10">
//             <thead>
//               <tr>
//                 <th className="w-32"></th>
//                 {headers.map((header) => (
//                   <th
//                     key={header}
//                     className="text-sm font-semibold text-gray-700 text-center"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((rowLabel, rowIndex) => (
//                 <tr key={rowLabel}>
//                   <td className="text-sm font-semibold text-gray-700">
//                     {rowLabel}
//                   </td>
//                   {matrix[rowIndex].map((color, colIndex) => {
//                     const cellIndex = rowIndex * headers.length + colIndex;
//                     return (
//                       <td key={colIndex} className="text-center">
//                         {color && (
//                           <div
//                             ref={(el) => (blockRefs.current[cellIndex] = el)}
//                             className={`w-5 h-5 rotate-45 mx-auto ${color}`}
//                           ></div>
//                         )}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OneHealth;

// export default function OneHealth() {
//   const legend = [
//     { color: "bg-green-600", label: "Techno Health - Clinical Engineering, AI, Biotechnology" },
//     { color: "bg-lime-500", label: "Apprenticeship Embedded, Work Integrated, B Voc" },
//     { color: "bg-sky-400", label: "Health Management, ODL Online" },
//     { color: "bg-blue-800", label: "Value System" },
//   ];

//   const rows = ["Engineering", "Management", "Arts & Humanity", "Skill Development"];
//   const cols = ["Core Medicine", "Paramedics", "Indian System", "One Health"];

//   const grid = [
//     ["bg-green-600", null, "bg-lime-500", "bg-lime-500"],
//     ["bg-lime-500", "bg-lime-500", "bg-green-600", "bg-lime-500"],
//     ["bg-sky-400", null, "bg-sky-400", "bg-lime-500"],
//     [null, "bg-blue-800", null, "bg-lime-500"],
//   ];

//   const cellSize = 100; // px

//   return (
//     <div className="p-10 flex flex-col md:flex-row gap-10 items-start">
//       {/* Legend */}
//       <div className="space-y-4">
//         {legend.map((item, i) => (
//           <div key={i} className="flex items-center gap-3">
//             <div className={`w-4 h-4 transform rotate-45 ${item.color}`} />
//             <span className="text-gray-700 font-medium">{item.label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Grid Container */}
//       <div className="relative" style={{ width: cellSize * cols.length, height: cellSize * rows.length }}>
//         {/* Lines */}
//         {/* Vertical lines */}
//         {cols.map((_, colIdx) => (
//           <div
//             key={`v-${colIdx}`}
//             className="absolute top-0 h-full w-px bg-black"
//             style={{ left: `${colIdx * cellSize}px` }}
//           />
//         ))}
//         {/* Horizontal lines */}
//         {rows.map((_, rowIdx) => (
//           <div
//             key={`h-${rowIdx}`}
//             className="absolute left-0 w-full h-px bg-black"
//             style={{ top: `${rowIdx * cellSize}px` }}
//           />
//         ))}

//         {/* Diamonds at intersections */}
//         {grid.map((row, rowIdx) =>
//           row.map((cell, colIdx) => {
//             if (!cell) return null;
//             return (
//               <div
//                 key={`${rowIdx}-${colIdx}`}
//                 className={`absolute w-4 h-4 transform rotate-45 ${cell}`}
//                 style={{
//                   top: `${rowIdx * cellSize - 8}px`,
//                   left: `${colIdx * cellSize - 8}px`,
//                 }}
//               />
//             );
//           })
//         )}

//         {/* Column Labels */}
//         {/* Column Labels */}
// <div
//   className="absolute left-0 flex justify-between w-full"
//   style={{ top: `-28px` }}
// >
//   {cols.map((col, idx) => (
//     <div
//       key={idx}
//       className="w-[100px] text-center text-sm font-semibold"
//       style={{ transform: "translateX(-8px)" }} // shift left to center
//     >
//       {col}
//     </div>
//   ))}
// </div>

// {/* Row Labels */}
// <div className="absolute top-0 flex flex-col justify-between h-full" style={{ left: "-140px" }}>
//   {rows.map((row, idx) => (
//     <div
//       key={idx}
//       className="h-[100px] flex items-center justify-end text-sm font-semibold pr-2"
//       style={{ transform: "translateY(-8px)" }} // shift up to center
//     >
//       {row}
//     </div>
//   ))}
// </div>

//       </div>
//     </div>
//   );
// }

export default function AlignedDiamondGrid() {
  const legend = [
    {
      color: "bg-green-600",
      label: "Techno Health - Clinical Engineering, AI, Biotechnology",
    },
    {
      color: "bg-lime-500",
      label: "Apprenticeship Embedded, Work Integrated, B Voc",
    },
    { color: "bg-sky-400", label: "Health Management, ODL Online" },
    { color: "bg-blue-800", label: "Value System" },
  ];

  const rows = [
    "Engineering",
    "Management",
    "Arts & Humanity",
    "Skill Development",
  ];
  const cols = ["Core Medicine", "Paramedics", "Indian System", "One Health"];

  const grid = [
    ["bg-[#39B54A]", null, "bg-[#96BF58]", "bg-[#96BF58]"],
    ["bg-[#96BF58]", "bg-[#96BF58]", "bg-[#39B54A]", "bg-[#96BF58]"],
    ["bg-[#5CADCA]", null, "bg-[#5CADCA]", "bg-[#96BF58]"],
    [null, "bg-[#366DA4]", null, "bg-[#96BF58]"],
  ];

  // const cellSize = 70;
  // const cellSize = 40;

  const [cellSize, setCellSize] = useState(70); // Default size

  useEffect(() => {
    const updateCellSize = () => {
      const width = window.innerWidth;

      // Adjust cellSize based on breakpoints
      let size = 70;
      if (width < 350) size = 30; // sm
      else if (width < 640) size = 40; // md
      else if (width < 768) size = 55; // md
      else if (width < 1024) size = 55; // lg
      else size = 70; // xl and above

      setCellSize(Math.max(20, size));
    };

    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, []);

  return (
    <div className="p-10 my-10 flex flex-col items-start gap-32 max-w-7xl mx-auto">
      {/* Heading on the left */}
      <h2 className="text-3xl font-oswald-medium font-[500] text-[#58595B]">
        <hr className="w-16 sm:w-20 text- border-[#F04E30] mb-4 border-t-8" />
        ONE HEALTH
      </h2>

      {/* Legend + Grid centered */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly lg:items-start gap-10 lg:gap-20">
        {/* Legend */}
        <div className="space-y-4 order-2 lg:order-1 mx-auto">
          {legend.map((item, i) => (
            <div
              key={i}
              className="flex font-[600] items-center gap-3 relative left-0"
              style={{ top: `${i * 10}px` }}
            >
              <div className={`w-5 h-5 transform rotate-45 ${item.color}`} />
              <span className="text-[#58595B] text-sm sm:text-base md:text-lg lg:text-[18px] max-w-2xs relative left-0">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div
          className="relative order-1 lg:order-2 ml-auto md:mx-auto mt-5"
          style={{
            width: cellSize * cols.length,
            height: cellSize * rows.length,
          }}
        >
          {/* Vertical lines */}
          {cols.map((_, colIdx) => (
            <div
              key={`v-${colIdx}`}
              className="absolute top-[-40px] w-px bg-[#707070]"
              style={{ left: `${colIdx * cellSize}px`, height: `${cellSize === 40 ? 100 : 90}%` }}
            />
          ))}
          {/* Horizontal lines */}
          {rows.map((_, rowIdx) => (
            <div
              key={`h-${rowIdx}`}
              className="absolute left-[-40px] h-px bg-[#707070]"
              style={{ top: `${rowIdx * cellSize}px`, width: `${cellSize === 40 ? 100 : 90}%` }}
            />
          ))}

          {/* Diamonds */}
          {grid.map((row, rowIdx) =>
            row.map((cell, colIdx) => {
              if (!cell) return null;
              return (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className={`absolute w-5 h-5 transform rotate-45 ${cell}`}
                  style={{
                    top: `${rowIdx * cellSize - 8}px`,
                    left: `${colIdx * cellSize - 8}px`,
                  }}
                />
              );
            })
          )}

          {/* Top Rotated Column Headers */}
          {cols.map((col, idx) => (
            <div
              key={idx}
              className="absolute text-sm text-[#58595B]"
              style={{
                left: `${idx * cellSize + 60}px`,
                top: `-70px`,
                transform: "translateX(-50%) rotate(-90deg)",
                transformOrigin: "left bottom",
                width: "100px",
                whiteSpace: "nowrap",
              }}
            >
              {col}
            </div>
          ))}

          {/* Left Row Labels */}
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="absolute text-sm text-[#58595B] text-left "
              style={{
                top: `${idx * cellSize}px`,
                left: `-160px`,
                height: `${cellSize}px`,
                display: "flex",
                alignItems: "center",
                width: "120px",
                transform: "translateY(-50%)",
              }}
            >
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
