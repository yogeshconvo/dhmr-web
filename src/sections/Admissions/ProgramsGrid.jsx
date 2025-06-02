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
    <div className=" flex justify-center items-center bg-white m-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-60 h-40 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-90 transition duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold text-center">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
