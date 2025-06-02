import React, { useState } from "react";
import ROImg from "../../assets/ResearchGrid/RO.png";

const ResearchOpportunities = () => {
  const [activeTab, setActiveTab] = useState("external");

  const items = {
    dmiher: [],
    external: [
      "Internship opportunities",
      "Clinical mentorship support",
      "Incubation support @BIRAC BioNEST",
      "Community-based Field projects",
      "Clinical observership",
      "Liaisoning with Industry/ Startups",
      "Transdisciplinary research opportunities",
      "Co-Working space",
      "ICMR - Indian Clinical Trial and Education Network (INTENT) Centre",
      "Clinical trial network for integrative medicine (ICMR NITM) Centre",
      "Research career support",
      "Opportunity to work in ongoing funded projects",
      "One-on-One Mentorship",
    ],
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-12 bg-white font-sans text-gray-500">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
          <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4" />
          Research Opportunities
        </h2>
        <p className="text-2xl font-oswald-medium font-light mt-2">
          Collaborate And Innovate: <br />
          Join Our Dynamic Research Community
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Accordion Panel */}
        <div>
          <div className="border-t border-gray-300">
            <button
              onClick={() => setActiveTab("dmiher")}
              className="w-full text-left py-2 font-semibold text-gray-700 flex justify-between items-center"
            >
              DMIHER Researchers
              <span className="text-lg">+</span>
            </button>
          </div>

          <div className="border-t pb-2 border-gray-300">
            <button
              onClick={() => setActiveTab("external")}
              className="w-full text-left py-4 font-semibold text-blue-800 flex justify-between items-center"
            >
              External Researchers
              <span className="text-lg">-</span>
            </button>
            {activeTab === "external" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1">
                {items.external.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t  border-b border-gray-300">
            <button className="w-full text-left py-2 font-semibold text-gray-600 flex justify-between items-center">
              Advance Your Research
              <span className="text-lg">+</span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-sm">
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium block"
            >
              Know more about research opportunities
            </a>
            <p className="mt-1">
              <strong>Contact Us</strong> @{" "}
              <a
                href="mailto:rd@dmiher.edu.in"
                className="text-blue-700 hover:underline"
              >
                rd@dmiher.edu.in
              </a>
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="w-full">
          <img
            src={ROImg}
            alt="Research Discussion"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchOpportunities;
