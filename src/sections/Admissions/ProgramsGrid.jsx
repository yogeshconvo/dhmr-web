import React from "react";
import Img1 from "../../assets/AdmissionGrid/1.png";
import Img2 from "../../assets/AdmissionGrid/2.png";
import Img3 from "../../assets/AdmissionGrid/3.png";
import Img4 from "../../assets/AdmissionGrid/4.png";
import Img5 from "../../assets/AdmissionGrid/5.png";

const cards = [
  {
    title: "DMIHER-CET",
    img: Img1,
  },
  {
    title: "Programs",
    img: Img2,
  },
  {
    title: "International Programs",
    img: Img3,
  },
  {
    title: "Online Programs",
    img: Img4,
  },
  {
    title: "FAQ’s",
    img: Img5,
  },
];

export default function ProgramsGrid() {
  return (
    <div className="flex m-10 justify-center items-center bg-white px-4 py-10 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              relative 
              w-full 
              aspect-[3/2] 
              sm:aspect-[4/3] 
              md:aspect-[5/3] 
              rounded-lg 
              overflow-hidden 
              shadow-lg
              cursor-pointer
              hover:shadow-xl
              transition-shadow duration-300
            "
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold text-center px-2">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
