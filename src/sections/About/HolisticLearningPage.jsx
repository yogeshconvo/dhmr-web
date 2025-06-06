import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../../assets/HolisticLearning/1.png";
import img2 from "../../assets/HolisticLearning/2.png";
import img3 from "../../assets/HolisticLearning/3.png";
import img4 from "../../assets/HolisticLearning/4.png";
import img5 from "../../assets/HolisticLearning/5.png";

const dimensions = [
  {
    id: 1,
    title: "Expert Faculty",
    desc: "Learn from leaders in medicine, research, and education.",
    image: img1,
  },
  {
    id: 2,
    title: "Inclusive Campus Life",
    desc: "A diverse, dynamic community that inspires growth and belonging.",
    image: img2,
  },
  {
    id: 3,
    title: "Advanced Infrastructure",
    desc: "World-class labs, smart classrooms, and modern learning spaces.",
    image: img3,
  },
  {
    id: 4,
    title: "Research-Driven Environment",
    desc: "Dive into discovery with strong mentorship and active projects.",
    image: img4,
  },
  {
    id: 5,
    title: "Career-Ready Curriculum",
    desc: "Industry-aligned programs designed for real-world success.",
    image: img5,
  },
];

function ArrowButton({ direction, onClick }) {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      className={`${
        isNext
          ? "border border-gray-600 hover:bg-gray-100"
          : "border border-gray-600 hover:bg-gray-100"
      } p-2 rounded-full`}
    >
      {isNext ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
    </button>
  );
}

export default function HolisticLearningPage() {
  let sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#E4C957] p-10 font-oswald-medium">
      <div className="max-w-7xl mx-auto">
        <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl font-oswald-medium font-medium text-gray-800 uppercase">
            Holistic Learning at DMIHER (DU)
          </h1>
          <div className="flex gap-2">
            <ArrowButton
              direction="prev"
              onClick={() => sliderRef?.current?.slickPrev()}
            />
            <ArrowButton
              direction="next"
              onClick={() => sliderRef?.current?.slickNext()}
            />
          </div>
        </div>

        <h2 className="text-2xl font-oswald-medium font-medium text-purple-800 mt-8">
          5 Dimensions of Holistic Learning
        </h2>

        <div className="relative mt-6">
          <Slider ref={sliderRef} {...settings}>
            {dimensions.map((item) => (
              <div key={item.id} className="px-2">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-50 object-cover rounded-xl"
                  />
                  <div className="flex pt-4">
                    <div className="text-white h-12 w-12 text-4xl rounded-full bg-gray-400 flex items-center justify-center">
                      {item.id}
                    </div>
                    <div className="w-3/4 pl-2">
                      <h3 className="text-md font-oswald-medium font-medium text-gray-700">
                        {item.title}
                      </h3>
                      <p className="text-sm font-oswald-medium font-light text-gray-600 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
