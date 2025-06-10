import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../../assets/HolisticLearning/1.jpeg";
import img2 from "../../assets/HolisticLearning/2.png";
import img3 from "../../assets/HolisticLearning/3.png";
import img4 from "../../assets/HolisticLearning/4.png";
import img5 from "../../assets/HolisticLearning/5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      className={`border border-gray-600 hover:bg-gray-100 p-2 rounded-full`}
    >
      {isNext ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
    </button>
  );
}

export default function HolisticLearningPage() {
  let sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        className="block lg:hidden" // Show dots only on mobile/tablet
        style={{ marginTop: "20px" }}
      >
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full border border-black bg-white slick-active:bg-gray-500"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, dots: true },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, dots: true },
      },
      {
        breakpoint: 30000, // Large screens
        settings: { dots: false },
      },
    ],
  };

  return (
    <div className="bg-[#E4C957] p-10 font-oswald-medium">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl font-oswald-medium font-medium text-[#58595B] uppercase">
            <hr className="w-20 border-3  border-[#F04E30] mb-4 border-t-4" />
            Holistic Learning <br className="hidden md:block" /> at DMIHER (DU)
          </h1>
          {/* Hide Arrows on mobile: "hidden sm:flex" */}
        </div>
        <div className="flex justify-between mt-8 ">
          <h2 className="text-3xl font-oswald-medium font-medium text-[#300986] ">
            5 Dimensions of Holistic Learning
          </h2>
          <div className="hidden sm:flex  gap-2">
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
                    <div className="h-12 w-12 aspect-square flex-shrink-0 text-xl font-[300] rounded-full flex items-center justify-center relative overflow-hidden">
                      <span className="absolute inset-0 rounded-full bg-black opacity-40 z-0"></span>
                      <span className="relative z-10 text-2xl text-white">
                        {item.id}
                      </span>
                    </div>
                    <div className="w-4/4 pl-2">
                      <h3 className="text-md font-oswald-medium font-medium text-[#58595B]">
                        {item.title}
                      </h3>
                      <p
                        className="text-sm text-[#58595B] mt-1"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
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
