// import React from "react";
// import AG1 from "../../assets/About/AG1.png";
// import AG2 from "../../assets/About/AG2.png";
// import AG3 from "../../assets/About/AG3.png";
// import AG4 from "../../assets/About/AG4.png";
// import AG5 from "../../assets/About/AG5.png";
// import AG6 from "../../assets/About/AG6.png";
// import AG7 from "../../assets/About/AG7.png";
// import AG8 from "../../assets/About/AG8.png";

// const aboutItems = [
//   {
//     title: "Chancellor’s\nMessage",
//     image: AG1,
//   },

//   {
//     title: "Sponsoring\nTrust",
//     image: AG2,
//   },
//   {
//     title: "Leadership",
//     image: AG3,
//   },
//   {
//     title: "Governance",
//     image: AG4,
//   },
//   {
//     title: "Centres of\nExcellence",
//     image: AG5,
//   },
//   {
//     title: "Institutional Social\nResponsibility",
//     image: AG6,
//   },
//   {
//     title: "Autonomous\nCells",
//     image: AG7,
//   },
//   {
//     title: "Mandatory\nDisclosure",
//     image: AG8,
//   },
// ];

// const AboutGrid = () => {
//   return (
//     <section className="py-10 px-4 sm:px-6 md:px-20 mx-auto mt-10 mb-10 max-w-5xl">
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
//         {aboutItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="group relative block h-30 sm:h-30 md:h-35 rounded-xl overflow-hidden"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
//               style={{ backgroundImage: `url(${item.image})` }}
//             ></div>
//             {/* Transparent overlay */}
//             <div className="absolute inset-0  bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
//             <div className="relative z-10 h-full w-full flex items-center justify-center px-2">
//               <h3
//                 className="text-white whitespace-pre-line text-center text-base sm:text-base md:text-lg lg:text-xl  leading-tight"
//                 style={{
//                   fontFamily: "Helvetica LT Std Condensed, Arial, sans-serif",
//                 }}
//               >
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutGrid;
import React from "react";
import AG1 from "../../assets/About/AG1.png";
import AG2 from "../../assets/About/AG2.png";
import AG3 from "../../assets/About/AG3.png";
import AG4 from "../../assets/About/AG4.png";
import AG5 from "../../assets/About/AG5.png";
import AG6 from "../../assets/About/AG6.png";
import AG7 from "../../assets/About/AG7.png";
import AG8 from "../../assets/About/AG8.png";

const aboutItems = [
  { title: "Chancellor’s\nMessage", image: AG1 },
  { title: "Sponsoring\nTrust", image: AG2 },
  { title: "Leadership", image: AG3 },
  { title: "Governance", image: AG4 },
  { title: "Centres of\nExcellence", image: AG5 },
  { title: "Institutional Social\nResponsibility", image: AG6 },
  { title: "Autonomous\nCells", image: AG7 },
  { title: "Mandatory\nDisclosure", image: AG8 },
];

const AboutGrid = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-20 mx-auto mt-10 mb-10 max-w-5xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {aboutItems.map((item, idx) => (
          <div
            key={idx}
            className="relative h-28 md:h-35 w-full rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  flex items-center justify-center px-2 text-center">
              <h3
                className="text-white whitespace-pre-line text-sm sm:text-base md:text-lg font-medium leading-tight"
                style={{
                  fontFamily: "Helvetica LT Std Condensed, Arial, sans-serif",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
