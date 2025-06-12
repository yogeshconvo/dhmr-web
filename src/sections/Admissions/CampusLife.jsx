import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CE1Img from "../../assets/About/Gallery/Cultural Events/CE1.jpg";
import CE2Img from "../../assets/About/Gallery/Cultural Events/CE2.jpg";
import CE3Img from "../../assets/About/Gallery/Cultural Events/CE3.jpg";
import CE4Img from "../../assets/About/Gallery/Cultural Events/CE4.jpg";
import CE5Img from "../../assets/About/Gallery/Cultural Events/CE5.jpg";
import CE6Img from "../../assets/About/Gallery/Cultural Events/CE6.jpg";
import CE7Img from "../../assets/About/Gallery/Cultural Events/CE7.jpg";
import CE8Img from "../../assets/About/Gallery/Cultural Events/CE8.jpg";
import CE9Img from "../../assets/About/Gallery/Cultural Events/CE9.jpg";

import EventImg1 from "../../assets/About/Gallery/Events/Event1.jpg";
import EventImg2 from "../../assets/About/Gallery/Events/Event2.jpg";
import EventImg3 from "../../assets/About/Gallery/Events/Event3.jpg";
import EventImg4 from "../../assets/About/Gallery/Events/Event4.jpg";
import EventImg5 from "../../assets/About/Gallery/Events/Event5.jpg";
import EventImg6 from "../../assets/About/Gallery/Events/Event6.jpg";
import EventImg7 from "../../assets/About/Gallery/Events/Event7.jpg";
import EventImg8 from "../../assets/About/Gallery/Events/Event8.jpg";
import EventImg9 from "../../assets/About/Gallery/Events/Event9.jpg";

import SportsImg1 from "../../assets/About/Gallery/Sports/1.jpg";
import SportsImg2 from "../../assets/About/Gallery/Sports/2.jpg";
import SportsImg3 from "../../assets/About/Gallery/Sports/3.jpg";
import SportsImg4 from "../../assets/About/Gallery/Sports/4.jpg";
import SportsImg5 from "../../assets/About/Gallery/Sports/5.jpeg";
import SportsImg6 from "../../assets/About/Gallery/Sports/6.jpg";
import SportsImg7 from "../../assets/About/Gallery/Sports/7.jpg";
import SportsImg8 from "../../assets/About/Gallery/Sports/8.jpeg";
import SportsImg9 from "../../assets/About/Gallery/Sports/9.jpeg";

const imageData = {
  university: [
    CE1Img,
    CE2Img,
    CE3Img,
    CE4Img,
    CE5Img,
    CE6Img,
    CE7Img,
    CE8Img,
    CE9Img,
  ],
  research: [
    EventImg1,
    EventImg2,
    EventImg3,
    EventImg4,
    EventImg5,
    EventImg6,
    EventImg7,
    EventImg8,
    EventImg9,
  ],
  campus: [
    SportsImg1,
    SportsImg2,
    SportsImg3,
    SportsImg4,
    SportsImg5,
    SportsImg6,
    SportsImg7,
    SportsImg8,
    SportsImg9,
  ],
};

const sectionKeyMap = {
  events: "research",
  sportsevents: "campus",
  culturalevents: "university",
};

export default function CampusLife() {
  const [activeSection, setActiveSection] = useState("events");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* CAMPUS LIFE Section */}
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
            <div>
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              <h2 className="text-3xl tracking-wide font-[500] font-oswald-medium text-[#707070]">
                CAMPUS LIFE
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ArrowLeft size={18} />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ArrowRight size={18} />
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dmiher.edu.in/photoGallery/2"
                className="text-red-500 text-xs font-semibold ml-2"
              >
                VIEW ALL
              </a>
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
            {imageData[sectionKeyMap[activeSection]].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
            ))}
          </div>
        </section>

        {/* Important Details */}
        <section className="p-15">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 items-center">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
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
