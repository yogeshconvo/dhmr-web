import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Gallery1 from "../../assets/AboutGallery/1.jpg";
import Gallery2 from "../../assets/AboutGallery/2.jpg";
import Gallery3 from "../../assets/AboutGallery/3.jpg";
import Gallery4 from "../../assets/AboutGallery/4.jpg";
import Gallery5 from "../../assets/AboutGallery/5.jpg";
import Gallery6 from "../../assets/AboutGallery/6.jpg";
import Gallery7 from "../../assets/AboutGallery/7.jpg";
import Gallery8 from "../../assets/AboutGallery/8.jpg";
import Gallery9 from "../../assets/AboutGallery/9.jpg";

const shuffle = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const imageData = {
  events: shuffle([Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9]),
  sportsevents: shuffle([
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery2,
    Gallery3,
    Gallery4,
  ]),
  culturalevents: shuffle([
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery1,
    Gallery4,
    Gallery5,
    Gallery2,
    Gallery3,
    Gallery4,
  ]),
};

export default function CampusLife() {
  const [activeSection, setActiveSection] = useState("culturalevents");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* CAMPUS LIFE Section */}
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
            <div>
              <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
              <h2 className="text-3xl font-bold text-[#707070]">CAMPUS LIFE</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ArrowRight size={20} />
              </button>
              <button className="text-red-500 font-semibold ml-2">
                VIEW ALL
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6 text-sm mb-6">
            {["events", "sportsevents", "culturalevents"].map((section) => (
              <React.Fragment key={section}>
                <button
                  className={`${
                    activeSection === section
                      ? "text-red-500 font-semibold underline"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section === "events"
                    ? "Events"
                    : section === "sportsevents"
                    ? "Sports Events"
                    : "Cultural Events"}
                </button>
                {section !== "culturalevents" && (
                  <div className="text-gray-500">|</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {imageData[activeSection].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
            ))}
          </div>
        </section>

        <section className="p-15">
          <h2 className="text-3xl font-bold text-gray-800 mb-6  items-center">
            <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
            IMPORTANT DETAILS
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-12 text-gray-700">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold">Office Address</h3>
              <p>
                Visit Us: Admission Cell, <br />
                ISHKRUPA Building, University Office, DMIHER (DU) <br />
                Sawangi (Meghe), Wardha, 442001
              </p>
            </div>
            <div className="md:border-l md:pl-8 border-gray-300">
              <h3 className="font-semibold">For any Enquiry:</h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:admissioncell@dmiher.edu.in"
                  className="text-blue-600 hover:underline"
                >
                  admissioncell@dmiher.edu.in
                </a>
                <br />
                Mob:{" "}
                <a
                  href="tel:+918888040999"
                  className="text-blue-600 hover:underline"
                >
                  +91 8888040999
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
