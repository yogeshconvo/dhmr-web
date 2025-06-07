import React from "react";
import Slider from "react-slick";
import {
  ActivitySquare,
  Bone,
  HeartPulse,
  Baby,
  Apple,
  Atom,
  BrainCircuit,
  Bandage,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    amount: "1822",
    label: "Lakhs",
    title: "TIFAC CORE",
    subtitle: "Interventional Radiology",
    icon: <ActivitySquare className="w-10 h-10" />,
    color: "text-orange-600",
  },
  {
    amount: "801",
    label: "Lakhs",
    title: "Bone Tissue Engineering",
    subtitle: "",
    icon: <Bone className="w-10 h-10" />,
    color: "text-sky-600",
  },
  {
    amount: "893",
    label: "Lakhs",
    title: "Health Technology Innovation",
    subtitle: "",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "text-yellow-500",
  },
  {
    amount: "805",
    label: "Lakhs",
    title: "Early Childhood Development",
    subtitle: "",
    icon: <Baby className="w-10 h-10" />,
    color: "text-blue-900",
  },
  {
    amount: "317",
    label: "Lakhs",
    title: "Systematic Review/ Nutrition",
    subtitle: "",
    icon: <Apple className="w-10 h-10" />,
    color: "text-orange-500",
  },
  {
    amount: "1028",
    label: "Lakhs",
    title: "AYUSH/Trans/ Interdisciplinary Research",
    subtitle: "",
    icon: <Atom className="w-10 h-10" />,
    color: "text-blue-600",
  },
  {
    amount: "200",
    label: "Lakhs",
    title: "AI in healthcare",
    subtitle: "",
    icon: <BrainCircuit className="w-10 h-10" />,
    color: "text-yellow-400",
  },
  {
    amount: "450",
    label: "Lakhs",
    title: "Wound healing",
    subtitle: "",
    icon: <Bandage className="w-10 h-10" />,
    color: "text-red-500",
  },
];

export default function FundedProjects() {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Large screen breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screen breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screen breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-10 max-w-screen-xl mx-auto">
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
        {/* Amount and Label slider */}
        <Slider
          {...sliderSettings}
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
        <Slider {...sliderSettings} className="border-x-2 border-gray-300">
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
              <div className="mt-2">{project.icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
