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
    <>
      {/* Web Footer */}
      <footer className="hidden md:block bg-[#132F5C] text-white px-6 py-10 text-sm relative">
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 md:right-6 top-[-30px] md:top-[-40px] bg-green-500 text-white p-3 sm:p-4 rounded-full hover:bg-green-600 transition-colors z-1"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl" />
        </a>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <img src={logo} alt="Logo" className="mb-4 w-40" />
            <div className="ml-0 md:ml-14">
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
              <div className="flex mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/dmiheruniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400"
                >
                  <FaInstagram className="h-6 w-full" />
                </a>
                <a
                  href="https://www.facebook.com/dmiherduwardha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500"
                >
                  <FaFacebookF className="h-6 w-full" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dmimsu/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300"
                >
                  <FaLinkedinIn className="h-6 w-full" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCDVjybdsfkn6e5UtaSA8-Dw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500"
                >
                  <FaYoutube className="h-6 w-full" />
                </a>
              </div>
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
            <ul className="list-disc pl-5">
              {[
                {
                  name: "Disclaimers",
                  url: "https://www.dmiher.edu.in/disclaimer",
                },
                {
                  name: "Privacy policies for students",
                  url: "https://www.dmiher.edu.in/privacy-policy-for-students",
                },
                {
                  name: "Apply for tender and EOI",
                  url: "http://137.97.64.12:8997/tender/frmOnGoingContract.aspx?url=http://dmimsu.edu.in/frmTender.aspx",
                },
                {
                  name: "Apply for Transcript",
                  url: "https://alumni.dmimsu.edu.in/home.dz",
                },
                { name: "e-Tender", url: "https://www.dmiher.edu.in/e-tender" },
                {
                  name: "Terms and conditions for online payments",
                  url: "https://www.dmiher.edu.in/Terms-and-Conditions-for-online-payments",
                },
              ].map((link) => (
                <li key={link.name} className="mt-1">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mb-2 pb-2 border-b border-gray-500">
              Colleges
            </h3>
            <p className="font-medium">Main Campus Wardha</p>
            <ul className="list-disc pl-5">
              {[
                {
                  name: "Jawaharlal Nehru Medical College",
                  url: "https://www.dmiher.edu.in/about-jnmc",
                },
                {
                  name: "Sharad Pawar Dental College And Hospital",
                  url: "https://www.dmiher.edu.in/about-spdc",
                },
                {
                  name: "Mahatma Gandhi Ayurvedic College Hospital And Research Centre",
                  url: "https://www.mgachrc.org/",
                },
                {
                  name: "Smt Radhikabai Meghe Memorial College Of Nursing",
                  url: "https://www.dmiher.edu.in/about-srmmcon",
                },
                {
                  name: "Ravi Nair Physiotherapy College",
                  url: "https://www.dmiher.edu.in/about-rnpc",
                },
                {
                  name: "Datta Meghe College Of Pharmacy",
                  url: "https://www.dmcopwardha.com/",
                },
                {
                  name: "Faculty Of Engineering And Technology",
                  url: "https://www.dmiher.edu.in/faculty-of-engineering-and-technology-fet",
                },
                {
                  name: "School Of Allied Sciences",
                  url: "https://www.dmiher.edu.in/about-sas",
                },
                {
                  name: "Centre For Distance And Online Education",
                  url: "https://www.dmiheronline.edu.in/",
                },
                {
                  name: "School Of Allied Health Sciences",
                  url: "https://www.dmiher.edu.in/about-sahes",
                },
                {
                  name: "Shalinitai Meghe College Of Nursing",
                  url: "https://www.dmiher.edu.in/About-SMCON-Wardha",
                },
              ].map((college) => (
                <li key={college.name} className="mt-1">
                  <a
                    href={college.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {college.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-medium mt-4">Off Campus - Wanadongri, Nagpur</p>
            <ul className="list-disc pl-5">
              {[
                {
                  name: "Datta Meghe Medical College",
                  url: "https://www.dmmcnagpur.com/",
                },
                {
                  name: "School Of Allied Health Sciences",
                  url: "https://www.dmiher.edu.in/school-of-allied-health-sciences-nagpur-a-constituent-unit-of-dmiher",
                },
                {
                  name: "Shalinitai Meghe College Of Nursing",
                  url: "https://www.dmiher.edu.in/about-smcon-nagpur",
                },
                {
                  name: "Shalinitai Meghe Homeopathy Hospital College And Research Centre",
                  url: "https://smhhcrc.com/",
                },
              ].map((college) => (
                <li key={college.name} className="mt-1">
                  <a
                    href={college.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {college.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 text-sm sm:text-base mt-4 text-yellow-400 font-oswald-medium gap-y-2">
              {[
                {
                  name: "Hospitals",
                  href: "https://www.avbrhsawangimeghe.com/",
                },
                { name: "Admissions", href: "/admissions" },
                { name: "Research", href: "/research" },
                { name: "Announcements", href: "/announcements" },
                {
                  name: "Global",
                  href: "https://www.dmiher.edu.in/international-cell",
                },
                { name: "Blog", href: "/blog" },
                { name: "Campus Life", href: "/campus-life" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mt-1 hover:underline hover:text-yellow-300 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mb-2 pb-2 border-b border-gray-500">
              Important Links
            </h3>
            <ul className="list-disc pl-5">
              {[
                { name: "NAAC", url: "https://naac.dmiher.edu.in/" },
                {
                  name: "Staff Mental Health and Wellness Centre (SMHWC)",
                  url: "https://www.dmiher.edu.in/staff-mental-health-and-wellness-centre",
                },
                {
                  name: "Stakeholder curriculum feedback form",
                  url: "https://www.dmiher.edu.in/stakeholders-curriculum-feedback-form",
                },
                {
                  name: "Greivance Redressal",
                  url: "https://www.dmiher.edu.in/students-grievance-redressal-cell",
                },
                {
                  name: "Sexual Harassment Complaint Portal",
                  url: "https://www.dmiher.edu.in/sexual-harassment-complaint-portal",
                },
                {
                  name: "Caste discrimination Complaint Portal",
                  url: "https://www.dmiher.edu.in/complaint-portal-caste-discrimination",
                },
                {
                  name: "Measures undertaken for anti-ragging",
                  url: "https://www.dmiher.edu.in/anti-ragging-cell",
                },
                {
                  name: "Expression of Interest",
                  url: "https://www.dmiher.edu.in/expression-of-interest",
                },
                {
                  name: "Code of Conduct",
                  url: "https://www.dmiher.edu.in/code-of-conduct",
                },
                {
                  name: "SOP for local purchase",
                  url: "https://www.dmiher.edu.in/frontEnd/pages/page/images/pdf/SOP-for-Local-purchase.PDF",
                },
                {
                  name: "Bylaw governing Defining the conditions of service of the employees of the University",
                  url: "https://www.dmiher.edu.in/uploads/topics/Bylaw%20governing%20Defining%20the%20conditions%20of%20service%20of%20the%20employees%20of%20the%20University.pdf",
                },
                {
                  name: "SGU",
                  url: "https://www.dmiher.edu.in/student-guidance-unitsgu",
                },
                {
                  name: "Freeship/Scholarship",
                  url: "https://www.dmiher.edu.in/freeships-scholarships",
                },
                {
                  name: "Academic Bank of Credits",
                  url: "https://www.abc.gov.in/",
                },
                {
                  name: "Digilocker NAD Portal",
                  url: "https://www.digilocker.gov.in/",
                },
                {
                  name: "National Scholarship portal",
                  url: "https://scholarships.gov.in/home",
                },
                { name: "e-samadhaan", url: "https://samadhaan.ugc.ac.in/" },
                {
                  name: "Declaration under RTI Act, 2005",
                  url: "https://www.dmiher.edu.in/declaration-under-rti-act-2005",
                },
                { name: "MoE", url: "https://www.education.gov.in/" },
                { name: "UGC", url: "https://www.ugc.gov.in/" },
              ].map((link) => (
                <li key={link.name} className="mt-1">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-10">
          Copyright © 2025, Datta Meghe Institute of Higher Education &
          Research, All rights reserved.
        </p>
      </footer>
      {/* Mobile Footer */}
      <footer className="md:hidden bg-[#132F5C] text-white px-6 py-10 text-sm relative">
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 md:right-6 top-[-30px] md:top-[-40px] bg-green-500 text-white p-3 sm:p-4 rounded-full hover:bg-green-600 transition-colors z-50"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl" />
        </a>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <img src={logo} alt="Logo" className="mb-2 w-52" />

          <div className="flex justify-between items-start">
            <div className="flex-1 flex flex-col gap-4 text-sm sm:text-base  text-yellow-400 font-oswald-medium">
              <div className="flex flex-col">
                {["Hospitals", "Research", "Global", "Campus Life"].map(
                  (link) => (
                    <span key={link} className="mt-1 text-xl">
                      {link}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col ">
                {[
                  "Admissions",
                  "About",
                  "Announcements",
                  "Blog",
                  "Contact Us",
                ].map((link) => (
                  <span key={link} className="mt-1 text-xl">
                    {link}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-yellow-400 font-oswald-medium text-xl sm:text-lg -ml-2 ">
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
            </div>
          </div>

          {/* Column 2 */}
          {/* <h3 className="text-yellow-400 font-oswald-medium text-base sm:text-lg mt-4 pb-2 border-b border-gray-500">
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
          ))} */}

          {/* Column 2 */}
          <div className="">
            <h3 className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mb-0 pb-2 border-t border-gray-500 pt-4">
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
                <li key={college} className="mt-0 text-lg ">
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
                <li key={college} className="mt-0 text-lg ">
                  {college}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mb-0 pb-2 border-t border-gray-500 pt-4">
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
              <li key={link} className="mt-0 text-lg ">
                {link}
              </li>
            ))}
          </div>
        </div>

        {/* Column 5 */}
        <h3 className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mb-0 mt-6 pb-2 border-t border-gray-500 pt-4">
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
          <p key={item} className="text-lg">
            {item}
          </p>
        ))}

        {/* Column 6 */}
        <div className="border-t border-gray-500  mt-6">
          <div className="flex gap-8 mt-6 text-xl pb-4">
            <FaInstagram size={50} />
            <FaFacebookF size={50} />
            <FaLinkedinIn size={50} />
            <FaYoutube size={50} />
          </div>
          <p className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mt-4">
            ADDRESS
          </p>
          <p className="mb-4 text-lg leading-[24px]">
            Registrar,
            <br />
            Datta Meghe Institute of Higher Education & Research,
            <br />
            (Deemed to be University), Sawangi (Meghe),
            <br />
            Wardha - 442107 Maharashtra
          </p>
          <p className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mt-4">
            CONTACT
          </p>
          <p className="text-lg leading-[24px]">
            Contact No : (07152) - 287701, 287702, 287703, 287704, 287705,
            287706, (07152) - 304000
          </p>
          <p className="text-yellow-400 font-oswald-medium text-2xl sm:text-lg mt-4">
            E MAIL
          </p>
          <p className="text-lg leading-[24px]">registrar@dmiher.edu.in</p>
        </div>

        <p className="text-center text-gray-400 text-xs  max-w-[280px] mx-auto mt-10">
          Copyright © 2025, Datta Meghe Institute of Higher Education &
          Research, All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
