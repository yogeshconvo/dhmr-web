import React from "react";
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
        <div className="grid grid-cols-8 border-2 border-gray-300 border-b-0 text-center text-sm">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-r-2 border-b-2 border-gray-300 last:border-r-0 p-2"
            >
              <p className={`${project.color} text-xl font-bold`}>
                {project.amount}
              </p>
              <p className="text-gray-400 mb-1">Lakhs</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8 border-x-2 border-gray-300 text-center text-sm">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-r-2 border-gray-300 last:border-r-0 p-4 flex flex-col items-center justify-between h-44"
            >
              <p className="font-semibold text-sm text-gray-800 text-center">
                {project.title}
              </p>
              {project.subtitle && (
                <p className="text-gray-500 text-xs text-center">
                  {project.subtitle}
                </p>
              )}
              <div className="mt-2">{project.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
