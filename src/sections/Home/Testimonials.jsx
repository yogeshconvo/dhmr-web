import React, { useState, useEffect } from "react";
import PriyaShrivastav from "../../assets/TestimonialHome/PriyaShrivastav.png";
import Parents from "../../assets/TestimonialHome/Parents.png";
import Alumini from "../../assets/TestimonialHome/Alumini.png";

const testimonialsData = {
  Students: [
    {
      name: "Priyal Shrivastava",
      year: " Medical | 2017",
      img: PriyaShrivastav,
      text: "It always feels special being a part of DMIHER University. It’s amazing to see how the university has excelled in deepening its academic offerings and research focus over a period and how it strives to sharpen the skills of the budding doctors towards competency building. I am very proud that it is one of the renowned NAAC accredited multi-disciplinary deemed to be University in India. I believe our faculties are truly a prized asset of our institution. My institution goes an extra mile to provide its students with varied opportunities in academics, research and co-curriculars making the journey at DMIHER a holistic treat!",
    },
  ],
  Parents: [
    {
      name: "Mr. Benhar Joseph & Mrs. Kanchan Joseph ",
      year: "Nursing | 2017",
      img: Parents,
      text: "It has always been our dream to get the best possible education for our child from a well renowned institution, and we were able to fulfill this dream through Smt. Radhikabai Meghe Memorial College of Nursing, Datta Meghe Institute of Higher Education & Research (Deemed to be University). It has always been proved as the best Institute for education and also for intellectual, physical and moral development of students. We express our deep sense of gratitude to all the teaching staffs, the non-teaching staffs and also the management for helping and guiding our child in best possible way throughout the sessions. The best thing we found about this Institute was that our child was able to stay connected even after graduation which helped her to grow even more was through the alumni meets. The alumni has been found the best way of staying in touch to explore more and to stay connected with her teachers and batchmates. This institute has given much more than education to our daughter and it’s a great privilege for us to be a part of this institute.",
    },
  ],
  Alumni: [
    {
      mbbsBatch: "MBBS Batch: 2005 (JNMC)",
      currentAffiliation:
        "Staff Physician, Neurological Institute, Cleveland Clinic Abu Dhabi. Former Movement Disorders Specialist, Columbia Asia Hospital and Vikram Hospital, Bangalore.",
      img: Alumini,
      text: "The pursuit of excellence in neurology began at JNMC. The rigorous training and patient-centered approach instilled in me during my MBBS years shaped my passion for Movement Disorders. Today, I strive to offer the best possible care for patients worldwide, but my roots remain deeply connected to where it all started—JNMC.",
      name: "",
    },
  ],
};

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState("Alumni");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabLabels = ["Alumni", "Parents", "Students"];

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
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <div className="mb-6">
        <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
          <hr className="border-red-500 border-2 w-12 mb-2" />
          TESTIMONIALS
        </h2>
        <div className="text-center flex justify-center gap-4 flex-wrap">
          {tabLabels.map((tab, index) => (
            <button
              key={tab}
              className={`px-3 py-1 text-base transition-all ${
                activeTab === tab
                  ? "underline text-black"
                  : "text-gray-500 hover:text-gray-700"
              } ${index < 2 ? "border-r border-gray-300 pr-4" : ""}`}
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

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={currentTestimonial.img}
          alt={currentTestimonial.name || "testimonial"}
          className="w-32 h-32 md:w-50 md:h-50 rounded-full object-cover shadow-lg transition duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
          }}
        />
        <div className="max-w-xl text-center md:text-left">
          <p className="text-[#707070] text-sm mb-2 leading-relaxed">
            "{currentTestimonial.text}"
          </p>

          {currentTestimonial.name && (
            <p className="text-lg text-[#707070] font-medium">
              {currentTestimonial.name}
            </p>
          )}

          {activeTab === "Alumni" && currentTestimonial.mbbsBatch && (
            <p className="text-sm text-[#707070]">
              {currentTestimonial.mbbsBatch}
            </p>
          )}

          {activeTab === "Alumni" && currentTestimonial.currentAffiliation && (
            <p className="text-sm text-[#707070] italic mt-1">
              {currentTestimonial.currentAffiliation}
            </p>
          )}

          {activeTab !== "Alumni" && currentTestimonial.year && (
            <p className="text-sm text-[#707070]">{currentTestimonial.year}</p>
          )}
        </div>
      </div>

      {/* Dots for Tabs */}
      <div className="flex justify-center mt-6 space-x-2">
        {tabLabels.map((tab, index) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentIndex(0);
            }}
            className={`w-3 h-3 rounded-full border border-black transition-all duration-300 ${
              activeTab === tab
                ? "bg-gray-400 scale-110"
                : "bg-gray-100 hover:bg-gray-100"
            }`}
          />
        ))}
      </div>

      {/* <p className="mt-8 text-sm text-blue-600 text-center">
        Check all {activeTab.toLowerCase()} testimonials{" "}
        <a
          href="#"
          className="underline hover:text-blue-800 transition-colors duration-300"
        >
          here
        </a>
      </p> */}
    </div>
  );
};

export default Testimonial;
