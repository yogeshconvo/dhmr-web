import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../assets/nav-logo-tran.png";

const Footer = () => {
  return (
    <footer className="bg-[#132F5C] text-white px-6 py-10 text-sm relative">
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 md:right-6 top-[-40px] md:top-[-50px] bg-green-500 text-white p-3 sm:p-4 rounded-full hover:bg-green-600 transition-colors z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl" />
      </a>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <img src={logo} alt="Logo" className="mb-4 w-32" />
          <p className="mb-4">
            Registrar,
            <br />
            Datta Meghe Institute of Higher Education & Research,
            <br />
            (Deemed to be University), Sawangi (Meghe),
            <br />
            Wardha - 442107 Maharashtra
          </p>
          <p className="text-yellow-400 font-oswald-medium text-base sm:text-lg mt-4">
            CONTACT
          </p>
          <p>
            Contact No : (07152) - 287701, 287702, 287703, 287704, 287705,
            287706, (07152) - 304000
          </p>
          <p className="text-yellow-400 font-oswald-medium text-base sm:text-lg mt-4">
            E MAIL
          </p>
          <p>registrar@dmiher.edu.in</p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mb-2 pb-2 border-b border-gray-500">
            Programs
          </h3>
          {[
            "Medicine",
            "Dental",
            "Ayurvedic",
            "Nursing",
            "Physiotherapy",
            "Pharmacy",
            "Simulation & experiential",
            "Allied health Sciences",
            "Online & Distance learning",
            "Engineering & Technology",
            "Management",
            "Liberal Arts",
            "Commerce",
          ].map((program) => (
            <p key={program} className="mt-1">
              {program}
            </p>
          ))}

          <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mt-4 pb-2 border-b border-gray-500">
            Terms & Conditions
          </h3>
          {[
            "Disclaimer",
            "Privacy Policy for Students",
            "Apply for Tender",
            "Apply for Transcript",
            "e-Tender",
            "Terms and Conditions for Online Payments",
          ].map((item) => (
            <p key={item} className="mt-1">
              {item}
            </p>
          ))}
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mb-2 pb-2 border-b border-gray-500">
            Colleges
          </h3>
          <p className="font-medium">Main Campus Wardha</p>
          <ul className="list-disc pl-5">
            {[
              "Jawaharlal Nehru Medical College",
              "Sharad Pawar Dental College And Hospital",
              "Mahatma Gandhi Ayurvedic College Hospital And Research Centre",
              "Smt Radhikabai Meghe Memorial College Of Nursing",
              "Ravi Nair Physiotherapy College",
              "Datta Meghe College Of Pharmacy",
              "Faculty Of Engineering And Technology",
              "School Of Allied Sciences",
              "Centre For Distance And Online Education",
              "School Of Allied Health Sciences",
              "Shalinitai Meghe College Of Nursing",
            ].map((college) => (
              <li key={college} className="mt-1">
                {college}
              </li>
            ))}
          </ul>

          <p className="font-medium mt-4">Off Campus - Wanadongri, Nagpur</p>
          <ul className="list-disc pl-5">
            {[
              "Datta Meghe Medical College",
              "School Of Allied Health Sciences",
              "Shalinitai Meghe College Of Nursing",
              "Shalinitai Meghe Homeopathy Hospital College And Research Centre",
            ].map((college) => (
              <li key={college} className="mt-1">
                {college}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 text-sm sm:text-base mt-4 text-yellow-400 font-oswald-medium">
            {[
              "Hospitals",
              "Admissions",
              "Research",
              "Announcements",
              "Global",
              "Blog",
              "Campus Life",
              "Contact Us",
              "About",
            ].map((link) => (
              <span key={link} className="mt-1">
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mb-2 pb-2 border-b border-gray-500">
            Important Links
          </h3>
          {[
            "NAAC",
            "Staff Mental Health and Wellness Centre (SMHWC)",
            "Stakeholder's Curriculum Feedback Form",
            "Grievance Redressal",
            "Sexual Harassment Complaint Portal",
            "Caste discrimination Complaint Portal",
            "Measures undertaken for anti-ragging",
            "Expression of Interest",
            "Code of Conduct",
            "SOP for local purchase",
            "Bylaw governing Defining the conditions of service of the employees of the University",
            "SGU",
            "Freeship/Scholarship",
            "Academic Bank of Credits",
            "Digilocker NAD Protal",
            "National Scholarship portal",
            "e-samadhaan",
            "Declaration under RTI Act, 2005",
            "MoE",
            "UGC",
          ].map((link) => (
            <p key={link} className="mt-1">
              {link}
            </p>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-10">
        Copyright © 2025, Datta Meghe Institute of Higher Education & Research,
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
