import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import icon1 from "../../assets/Research_Projects_Icons/1.png";
import icon2 from "../../assets/Research_Projects_Icons/2.png";
import icon3 from "../../assets/Research_Projects_Icons/3.png";
import icon4 from "../../assets/Research_Projects_Icons/4.png";
import icon5 from "../../assets/Research_Projects_Icons/5.png";
import icon6 from "../../assets/Research_Projects_Icons/6.png";
import icon7 from "../../assets/Research_Projects_Icons/7.png";
import icon8 from "../../assets/Research_Projects_Icons/8.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    amount: "1822",
    label: "Lakhs",
    title: "TIFAC CORE",
    subtitle: "Interventional Radiology",
    icon: icon1,
    color: "text-orange-600",
  },
  {
    amount: "801",
    label: "Lakhs",
    title: "Bone Tissue Engineering",
    subtitle: "",
    icon: icon2,
    color: "text-sky-600",
  },
  {
    amount: "893",
    label: "Lakhs",
    title: "Health Technology Innovation",
    subtitle: "",
    icon: icon3,
    color: "text-yellow-500",
  },
  {
    amount: "805",
    label: "Lakhs",
    title: "Early Childhood Development",
    subtitle: "",
    icon: icon4,
    color: "text-blue-900",
  },
  {
    amount: "317",
    label: "Lakhs",
    title: "Systematic Review/ Nutrition",
    subtitle: "",
    icon: icon5,
    color: "text-orange-500",
  },
  {
    amount: "1028",
    label: "Lakhs",
    title: "AYUSH/Trans/ Interdisciplinary Research",
    subtitle: "",
    icon: icon6,
    color: "text-blue-600",
  },
  {
    amount: "200",
    label: "Lakhs",
    title: "AI in healthcare",
    subtitle: "",
    icon: icon7,
    color: "text-yellow-400",
  },
  {
    amount: "450",
    label: "Lakhs",
    title: "Wound healing",
    subtitle: "",
    icon: icon8,
    color: "text-red-500",
  },
];

export default function FundedProjects() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const sliderSettingsMain = {
    asNavFor: nav2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderSettingsNav = {
    asNavFor: nav1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Funded Research Projects
      </h2>
      <p className="text-gray-600 mb-4 max-w-3xl">
        Our funded projects support visionary innovators developing disruptive
        technologies through high-quality proposals that introduce novel
        hypotheses, challenge existing ones, and offer unconventional solutions.
      </p>
      <p className="text-sm text-gray-700 mb-6">
        Thematic areas of Major Funded Projects
      </p>
      <p className="text-blue-900 font-medium text-lg mb-6">
        Approved, sanctioned or received across multiple areas:
      </p>

      <div className="bg-white">
        {/* Mobile Sliders */}
        <div className="block md:hidden">
          {/* Amount and Label slider */}
          <Slider
            {...sliderSettingsMain}
            ref={slider1}
            className="border-2 border-gray-300 border-b-0"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border-r-2 border-b-2 border-gray-300 p-4 text-center"
                style={{
                  borderRight: idx === projects.length - 1 ? "none" : undefined,
                }}
              >
                <p className={`${project.color} text-xl font-bold`}>
                  {project.amount}
                </p>
                <p className="text-gray-400 mb-1">{project.label}</p>
              </div>
            ))}
          </Slider>

          {/* Title, Subtitle and Icon slider */}
          <Slider
            {...sliderSettingsNav}
            ref={slider2}
            className="border-x-2 border-gray-300"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border-r-2 border-gray-300 p-4 flex flex-col items-center justify-between h-44 text-center"
                style={{
                  borderRight: idx === projects.length - 1 ? "none" : undefined,
                }}
              >
                <p className="font-semibold text-sm text-gray-800">
                  {project.title}
                </p>
                {project.subtitle && (
                  <p className="text-gray-500 text-xs">{project.subtitle}</p>
                )}
                <img
                  src={project.icon}
                  alt={project.title}
                  className="mt-2 w-12 h-12 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-8 border-2 border-gray-300 border-b-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-r-2 border-b-2 border-gray-300 p-4 text-center"
              style={{
                borderRight: idx === projects.length - 1 ? "none" : undefined,
              }}
            >
              <p className={`${project.color} text-xl font-bold`}>
                {project.amount}
              </p>
              <p className="text-gray-400 mb-1">{project.label}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-8 border-x-2 border-gray-300">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-r-2 border-gray-300 p-4 flex flex-col items-center justify-between h-44 text-center"
              style={{
                borderRight: idx === projects.length - 1 ? "none" : undefined,
              }}
            >
              <p className="font-semibold text-sm text-gray-800">
                {project.title}
              </p>
              {project.subtitle && (
                <p className="text-gray-500 text-xs">{project.subtitle}</p>
              )}
              <img
                src={project.icon}
                alt={project.title}
                className="mt-2  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
