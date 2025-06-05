import React, { useState, useEffect } from "react";

const testimonialsData = {
  Students: [
    {
      name: "Rohan Khetan ",
      year: "BDS | 2019",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "It is of immense pleasure to be a part of DMIHER University. I am very proud that it is one of the renowned NAAC-accredited multi-Disciplinary deemed to be University in India. It’s amazing to see how the university has excelled in deepening its academic offerings and research focus over a period and how it strives to sharpen the skills of budding doctors towards competency building. I believe our faculties are truly a prized asset of our institution. My institution goes the extra mile to provide its students with varied opportunities in academics, research and co- curricular making the journey at DMIHER a holistic treat!.",
    },
    {
      name: "Rahul Joshi",
      year: "Student | 2021",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      text: "I found the faculty at SPDC to be extremely supportive. They always guided me in the right direction.",
    },
  ],
  Parents: [
    {
      name: "Mrs. Alka Singh",
      year: "Parent of 2022 batch",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=150&h=150&fit=crop&crop=face",
      text: "I am thankful to SPDC for giving my daughter the right exposure and academic discipline.",
    },
    {
      name: "Mr. Vijay Patil",
      year: "Parent of 2021 batch",
      img: "https://images.unsplash.com/photo-1589571894960-20bbe2828cdd?w=150&h=150&fit=crop&crop=face",
      text: "My son has become more confident and skilled after joining SPDC. The environment is great for learning.",
    },
  ],
  Alumni: [
    {
      name: "Dr Nitin Bhola",
      year: "(PG 2005) MDS (OMFS), PhD. FIBOMS, FAOCMF - Director, Siddharth Gupta Cancer Hospital",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      text: "The Director of Central India’s Largest Cancer Hospital and a passionate Maxillofacial Surgeon with a blend of fine surgical skills and knowledge. Dr. Nitin Bhola is a PG Alumnus of SPDC. He is a widely acclaimed teacher and a versatile surgeon.",
    },
    {
      name: "Dr. Abhishek More",
      year: "Alumni | 2019",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "SPDC prepared me not just academically but also professionally. Proud to be an alumnus!",
    },
  ],
  Faculty: [
    {
      name: "Prof. Meera Shinde",
      year: "Faculty | Department of Physics",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
      text: "Teaching at SPDC is a fulfilling experience. We focus on hands-on learning and student development.",
    },
    {
      name: "Dr. Nikhil Bansode",
      year: "Faculty | Department of Chemistry",
      img: "https://images.unsplash.com/photo-1545992336-0e3c9e8c7558?w=150&h=150&fit=crop&crop=face",
      text: "SPDC fosters a culture of research and innovation. It's an ideal place for both teaching and learning.",
    },
  ],
};

const TestimonialSPDC = () => {
  const [activeTab, setActiveTab] = useState("Students");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabLabels = ["Students", "Parents", "Alumni", "Faculty"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData[activeTab].length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const currentTestimonial = testimonialsData[activeTab][currentIndex];

  return (
    <div className="px-4 md:px-8 py-10 bg-gray-50">
      <div className="mb-6">
        <hr className="border-red-500 border-2 ml-10 w-12 mb-2" />
        <h2 className="text-4xl ml-10 font-medium text-gray-500 font-oswald-medium mb-4">
          TESTIMONIALS
        </h2>
        <div className="text-center flex justify-center flex-wrap">
          {tabLabels.map((tab, index) => (
            <button
              key={tab}
              className={`px-3  font-[500] text-base transition-all 
      ${
        activeTab === tab
          ? "underline text-black"
          : "text-gray-500 hover:text-gray-700"
      } 
      ${index !== tabLabels.length - 1 ? "border-r border-gray-300" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(0);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center  font-[500] justify-center gap-6">
        <img
          src={currentTestimonial.img}
          alt={currentTestimonial.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg transition duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
          }}
        />
        <div className="max-w-xl text-center md:text-left  font-[500]">
          <p className="text-gray-700 text-lg mb-2 leading-relaxed font-light">
            "{currentTestimonial.text}"
          </p>
          <p className="text-lg text-gray-900 font-medium">
            {currentTestimonial.name}
          </p>
          <p className="text-sm text-gray-600 font-light">
            {currentTestimonial.year}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonialsData[activeTab].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <p className="mt-8 text-sm text-blue-600 text-center font-light">
        Check all {activeTab.toLowerCase()} testimonials{" "}
        <a
          href="#"
          className="underline hover:text-blue-800 transition-colors duration-300"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default TestimonialSPDC;
