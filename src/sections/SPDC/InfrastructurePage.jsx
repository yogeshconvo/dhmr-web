import React from "react";
import Img from "../../assets/SPDC/cad-cam-lab.png";
import icon5 from "../../assets/SPDC/Icons/icon5.png";
import icon7 from "../../assets/SPDC/Icons/icon7.png";
import icon8 from "../../assets/SPDC/Icons/icon8.png";
import icon9 from "../../assets/SPDC/Icons/icon9.png";

export default function InfrastructurePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }} className="p-10">
      {/* Holistic Learning and Infrastructure Section */}
      <section className="max-w-6xl mx-auto">
        <div>
          <hr className="w-16 sm:w-20 border-red-600 border-t-4 mb-2" />
          <h1
            className="text-4xl font-medium text-gray-500"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 pr-10">
          <div className="space-y-3 text-gray-500">
            {/* Body Content */}
            <div>
              <h2 className="text-xl font-oswald-medium font-light">
                Teaching-Learning Facilities:
              </h2>
              <p className="text-sm font-light">
                12 classrooms and seminar room – ICT-enabled, WiFi campus,
                Learning Management System (LMS)
              </p>
            </div>
            <div className="border-t" />
            <div>
              <h2 className="text-xl font-oswald-medium  font-light">
                Laboratory/Hospital Facilities:
              </h2>
              <p className="text-sm font-light">
                325+ dental chairs, affiliated with 1500+ bedded hospital, 20
                dedicated beds for dental care with advanced diagnostics and
                treatment facilities. Oral Cancer Unit (SGM Cancer Hospital),
                Smile Train Center, CBCT, CAD-CAM with ceramic printing, mobile
                dental van, implant and laser unit, advanced micro-endodontic
                clinic.
              </p>
            </div>
            <div className="border-t" />
            <div>
              <h2 className="text-xl font-oswald-medium  font-light">
                Advanced Teaching, Museum & Skilllab:
              </h2>
              <p className="text-sm font-light">
                Anubhuti” – Special Dental Museum, Advanced Digital Skill Lab –
                Exo CAD Lab with state-of-the-art facilities, 3D theatre, 5
                preclinical labs including simulation lab
              </p>
            </div>
            <div className="border-t" />
            <div>
              <h2 className="text-xl font-oswald-medium  font-light">
                Library Facilities:
              </h2>
              <p className="text-sm font-light">
                Rich collection of books, journals, digital data, subscriptions;
                ICT-enabled, digital access with remote connectivity
              </p>
            </div>
            <div className="border-t" />
            <div>
              <h2 className="text-xl font-oswald-medium  font-bold text-blue-900">
                Technology-Enabled Digital Learning
              </h2>
              <p className="text-sm font-light">
                Anatomage, EXOCAD, Advanced Skill Lab, CBCT, Nemoceph, EXOCAD,
                CAD CAM, Endomicroscope
              </p>
            </div>
            <div className="border-t" />
            <div>
              <h2 className="text-xl font-oswald-medium  font-light">
                Other Facilities:
              </h2>
              <p className="text-sm font-light">
                Comprehensive dental clinics, satellite centers, tobacco
                cessation center, orofacial pain clinic, etc
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Img}
              alt="CAD CAM Lab"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Buttons and Collaborations */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-lg">
            Transcripts – UG & PG
          </button>
          <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded shadow-lg">
            Electives Offered
          </button>
          <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded shadow-lg">
            CHCP Program
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            src={icon5}
            alt="Johns Hopkins University"
            className="h-16 object-contain border-r pr-6 last:border-r-0"
          />
          <img
            src={icon7}
            alt="University of Pennsylvania"
            className="h-16 object-contain border-r pr-6 last:border-r-0"
          />
          <img
            src={icon8}
            alt="Stanford University"
            className="h-16 object-cover border-r pr-6 last:border-r-0"
          />
          <img
            src={icon9}
            alt="University of Hong Kong"
            className="h-13 object-contain pr-6"
          />
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-blue-500 underline text-sm">
            Know more
          </a>
        </div>
      </section>
    </div>
  );
}
