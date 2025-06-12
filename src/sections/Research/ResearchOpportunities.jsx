// import React, { useState } from "react";
// import ROImg from "../../assets/ResearchGrid/RO.png";

// const ResearchOpportunities = () => {
//   const [activeTab, setActiveTab] = useState("external");

//   const items = {
//     dmiher: [],
//     external: [
//       "Internship opportunities",
//       "Clinical mentorship support",
//       "Incubation support @BIRAC BioNEST",
//       "Community-based Field projects",
//       "Clinical observership",
//       "Liaisoning with Industry/ Startups",
//       "Transdisciplinary research opportunities",
//       "Co-Working space",
//       "ICMR - Indian Clinical Trial and Education Network (INTENT) Centre",
//       "Clinical trial network for integrative medicine (ICMR NITM) Centre",
//       "Research career support",
//       "Opportunity to work in ongoing funded projects",
//       "One-on-One Mentorship",
//     ],
//   };

//   return (
//     <section className="px-4 sm:px-10 md:px-20 py-12 bg-white font-sans text-gray-700 max-w-screen-xl mx-auto">
//       {/* Section Heading */}
//       <div className="mb-6">
//         <h2 className="text-2xl md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//           Research Opportunities
//         </h2>
//         <p className="text-2xl font-oswald-medium font-light mt-2">
//           Collaborate And Innovate: <br />
//           Join Our Dynamic Research Community
//         </p>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Accordion Panel */}
//         <div>
//           <div className="border-t border-gray-300">
//             <button
//               onClick={() => setActiveTab("dmiher")}
//               className={`w-full text-left py-2 font-semibold flex justify-between items-center ${
//                 activeTab === "dmiher" ? "text-blue-800" : "text-gray-700"
//               }`}
//             >
//               DMIHER Researchers
//               <span className="text-lg">
//                 {activeTab === "dmiher" ? "-" : "+"}
//               </span>
//             </button>
//             {activeTab === "dmiher" && (
//               <div className="flex flex-col items-center justify-center py-8">
//                 {/* <div className="w-60 h-40 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300"> */}
//                 <span className="text-gray-500 text-base">
//                   No Contant available
//                 </span>
//               </div>
//             )}
//           </div>

//           <div className="border-t border-gray-300">
//             <button
//               onClick={() => setActiveTab("external")}
//               className={`w-full text-left py-4 font-semibold flex justify-between items-center ${
//                 activeTab === "external" ? "text-blue-800" : "text-gray-700"
//               }`}
//             >
//               External Researchers
//               <span className="text-lg">
//                 {activeTab === "external" ? "-" : "+"}
//               </span>
//             </button>
//             {activeTab === "external" && (
//               <div className="pl-4 text-sm text-gray-700 space-y-1">
//                 {items.external.map((item, idx) => (
//                   <div key={idx}>- {item}</div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="border-t border-b border-gray-300">
//             <button
//               onClick={() => setActiveTab("advance")}
//               className={`w-full text-left py-2 font-semibold flex justify-between items-center ${
//                 activeTab === "advance" ? "text-blue-800" : "text-gray-600"
//               }`}
//             >
//               Advance Your Research
//               <span className="text-lg">
//                 {activeTab === "advance" ? "-" : "+"}
//               </span>
//             </button>
//             {activeTab === "advance" && (
//               <div className="flex flex-col items-center justify-center py-8">
//                 {/* <div className="w-60 h-40 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300"> */}
//                 <span className="text-gray-500 text-base">
//                   No Contant available
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Footer Links */}
//           <div className="mt-6 text-sm">
//             <a
//               href="#"
//               className="text-blue-600 hover:underline font-medium block"
//             >
//               Know more about research opportunities
//             </a>
//             <p className="mt-1">
//               <strong>Contact Us</strong> @{" "}
//               <a
//                 href="mailto:rd@dmiher.edu.in"
//                 className="text-blue-700 hover:underline"
//               >
//                 rd@dmiher.edu.in
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Image Panel */}
//         <div className="w-full">
//           {activeTab === "external" ? (
//             <img
//               src={ROImg}
//               alt="Research Discussion"
//               className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
//             />
//           ) : (
//             <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-xl border border-gray-300">
//               <span className="text-gray-500 text-lg">No image available</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResearchOpportunities;



import React, { useState } from "react";
import ROImg from "../../assets/ResearchGrid/RO.png";

const ResearchOpportunities = () => {
  const [activeTab, setActiveTab] = useState("dmiher");

  const items = {
    dmiher: [
      "Intramural Seed Grant for UG, PG, PhD & Faculty",
      "Research Incentive",
      "Research Guidance Clinic",
      "Publication support",
      "IPR & Innovation support",
      "Networking opportunities with national & international collaborators",
      "Incubation support",
      "Grant writing support",
      "Community based Field Live projects",
      "Research career support",
      "One-on-One Mentorship",
    ],
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
    advance: [
      "Molecular Diagnostics Laboratory",
      "Genomic",
      "Molecular expression",
      "Immunogenetics",
      "Molecular oncology",
      "Infectious diseases",
      "Molecular - metabolic syndrome",
      "Regenerative Medicine",
      "Cell & Tissue Engineering Lab",
      "Bone tissue Engineering",
      "Advances in Wound Healing",
      "3D & 4D Bioprinting",
      "Organoids",
      "Therapeutic Drug Monitoring Lab",
      "Animal House (Pre-Clinical) Research Facility",
      "Formulation and Development Research Laboratory (Rasashala)",
      "Gait and Motion Lab",
      "And many more…..",
    ],
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-12 bg-white font-sans text-gray-700 max-w-screen-xl mx-auto">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
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
              className={`w-full text-left py-2 font-semibold flex justify-between items-center ${
                activeTab === "dmiher" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              DMIHER Researchers
              <span className="text-lg">
                {activeTab === "dmiher" ? "-" : "+"}
              </span>
            </button>
            {activeTab === "dmiher" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1 py-4">
                {items.dmiher.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-300">
            <button
              onClick={() => setActiveTab("external")}
              className={`w-full text-left py-4 font-semibold flex justify-between items-center ${
                activeTab === "external" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              External Researchers
              <span className="text-lg">
                {activeTab === "external" ? "-" : "+"}
              </span>
            </button>
            {activeTab === "external" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1">
                {items.external.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-b border-gray-300">
            <button
              onClick={() => setActiveTab("advance")}
              className={`w-full text-left py-2 font-semibold flex justify-between items-center ${
                activeTab === "advance" ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Advance Your Research
              <span className="text-lg">
                {activeTab === "advance" ? "-" : "+"}
              </span>
            </button>
            {activeTab === "advance" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1 py-4">
                {items.advance.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
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
          {activeTab === "external" ? (
            <img
              src={ROImg}
              alt="Research Discussion"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-xl border border-gray-300">
              <span className="text-gray-500 text-lg">No image available</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchOpportunities;
