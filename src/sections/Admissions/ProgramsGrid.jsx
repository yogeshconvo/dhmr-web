// import React from "react";
// import Img1 from "../../assets/AdmissionGrid/1.png";
// import Img2 from "../../assets/AdmissionGrid/2.png";
// import Img3 from "../../assets/AdmissionGrid/3.png";
// import Img4 from "../../assets/AdmissionGrid/4.png";
// import Img5 from "../../assets/AdmissionGrid/5.png";
// import { useNavigate } from "react-router-dom";
// const cards = [
//   {
//     title: "DMIHER-CET",
//     img: Img1,
//     url: "https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER",
//   },
//   {
//     title: "Programs",
//     img: Img2,
//     internal: true,
//     url: "/programs",
//   },
//   {
//     title: "International Programs",
//     img: Img3,
//     url: "https://www.dmiher.edu.in/international-admission/",
//   },
//   {
//     title: "Online Programs",
//     img: Img4,
//     url: "https://www.dmiheronline.edu.in/",
//   },
//   {
//     title: "FAQ’s",
//     img: Img5,
//   },
// ];

// export default function ProgramsGrid() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex max-w-7xl mx-auto justify-center m-20 items-center bg-white px-4 py-10 sm:px-8 md:px-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="relative w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
//             onClick={() => {
//               if (card.internal) {
//                 navigate(card.url);
//               } else if (card.url) {
//                 window.open(card.url, "_blank");
//               }
//             }}
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
//               <h2 className="text-white text-lg sm:text-xl font-semibold text-center px-2">
//                 {card.title}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import Img1 from "../../assets/AdmissionGrid/1.png";
import Img2 from "../../assets/AdmissionGrid/2.png";
import Img3 from "../../assets/AdmissionGrid/3.png";
import Img4 from "../../assets/AdmissionGrid/4.png";
import Img5 from "../../assets/AdmissionGrid/5.png";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "DMIHER-CET",
    img: Img1,
    url: "https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER",
  },
  {
    title: "Programs",
    img: Img2,
    internal: true,
    url: "/programs",
  },
  {
    title: "International Programs",
    img: Img3,
    url: "https://www.dmiher.edu.in/international-admission/",
  },
  {
    title: "Online Programs",
    img: Img4,
    url: "https://www.dmiheronline.edu.in/",
  },
  {
    title: "FAQ’s",
    img: Img5,
  },
];

export default function ProgramsGrid() {
  const navigate = useNavigate();

  return (
    <div className="flex max-w-7xl mx-auto justify-center m-20 items-center bg-white px-4 py-10 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
            onClick={() => {
              if (card.internal) {
                navigate(card.url);
              } else if (card.url) {
                window.open(card.url, "_blank");
              }
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover opacity-90 group-hover:brightness-110 transition-all duration-300"
            />
            <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold text-center px-2 transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
