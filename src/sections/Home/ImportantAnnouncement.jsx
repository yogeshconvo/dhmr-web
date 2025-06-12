// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useState } from "react";

// const ImportantAnnouncements = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("admissions");
//   const itemsPerPage = 5;

//   const admissionsAnnouncements = [
//     "Admission Notification for M.Sc JNMC (2025-2026)",
//     "Hostel Fees Notice - PG MS, MD 1st Year 2024-25",
//     "Admission Notification For B.Pharm And Pharm D. Entrance Test Dmiher-Cet-2025-26",
//     "Fee structure 2025-26 (Engineering)",
//     "Admission Notification For M.Pharm Entrance Test Dmiher-Cet-2025-26",
//     "Scholarship Applications for Merit Students",
//     "Convocation Ceremony 2025 Announcement",
//   ];

//   const universityAnnouncements = [
//     "Final Year Project Submission Guidelines 2024-25",
//     "Summer Internship Program Registration Open",
//     "Library Extended Hours During Exam Period",
//     "New Academic Calendar 2025-26 Released",
//     "Campus Placement Drive Schedule 2025",
//     "Research Paper Publication Guidelines Updated",
//     "International Student Exchange Program 2025",
//     "Annual Sports Meet Registration Notice",
//   ];

//   const announcements =
//     activeTab === "admissions"
//       ? admissionsAnnouncements
//       : universityAnnouncements;

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0
//         ? Math.max(0, announcements.length - itemsPerPage)
//         : Math.max(0, prev - itemsPerPage)
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerPage >= announcements.length ? 0 : prev + itemsPerPage
//     );
//   };

//   const visibleAnnouncements = announcements.slice(
//     currentIndex,
//     currentIndex + itemsPerPage
//   );

//   return (
//     <>
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
//       `}</style>

//       <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white text-gray-500">
//         <h2
//           className="text-2xl sm:text-3xl lg:text-4xl font-medium ml-2"
//           style={{ fontFamily: "Oswald, sans-serif" }}
//         >
//           <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
//           <br />
//           IMPORTANT ANNOUNCEMENTS
//         </h2>

//         <div className="flex flex-col sm:flex-row items-center ml-[5%] justify-between mt-6 text-sm text-gray-600 gap-4">
//           <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto">
//             <span
//               onClick={() => {
//                 setActiveTab("admissions");
//                 setCurrentIndex(0);
//               }}
//               className={`cursor-pointer text-base sm:text-lg transition-colors ${
//                 activeTab === "admissions"
//                   ? "underline text-gray-800 font-semibold"
//                   : "hover:text-gray-500"
//               }`}
//             >
//               Admissions 2025-26
//             </span>
//             <span className="text-base sm:text-lg mx-2"> | </span>
//             <span
//               onClick={() => {
//                 setActiveTab("university");
//                 setCurrentIndex(0);
//               }}
//               className={`cursor-pointer text-base sm:text-lg transition-colors ${
//                 activeTab === "university"
//                   ? "underline text-gray-800 font-semibold"
//                   : "hover:text-gray-500"
//               }`}
//             >
//               University
//             </span>
//           </div>

//           <div className="hidden items-center space-x-3 order-1 sm:order-2 sm:flex">
//             <button
//               onClick={handlePrev}
//               className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
//               disabled={currentIndex === 0}
//             >
//               <ArrowLeft
//                 size={16}
//                 className={`${
//                   currentIndex === 0 ? "text-gray-300" : "text-gray-400"
//                 }`}
//               />
//             </button>
//             <button
//               onClick={handleNext}
//               className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
//               disabled={currentIndex + itemsPerPage >= announcements.length}
//             >
//               <ArrowRight
//                 size={16}
//                 className={`${
//                   currentIndex + itemsPerPage >= announcements.length
//                     ? "text-gray-300"
//                     : "text-gray-500"
//                 }`}
//               />
//             </button>

//             <a
//               className="text-[#F04E30] ml-2 font-[600] sm:text-base cursor-pointer hover:underline whitespace-nowrap"
//               href="https://dmiher.edu.in/admissionform"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
//                 fontSize: "12px",
//               }}
//             >
//               VIEW ALL
//             </a>
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8">
//           {visibleAnnouncements.map((text, i) => (
//             <div
//               key={currentIndex + i}
//               className="text-[#707070] border-b sm:border-b-0 sm:border-r border-gray-300 last:border-b-0 sm:last:border-r-0 pr-6 pl-6 pb-4 sm:pb-0 transition-opacity duration-300"
//             >
//               <p className="text-base sm:text-sm leading-relaxed hover:text-gray-900 transition-colors cursor-pointer">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImportantAnnouncements;
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImportantAnnouncements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("admissions");
  const itemsPerPage = 5;

  const admissionsAnnouncements = [
    {
      text: "Notification for DMIHER-Common Entrance Test (CET-2) 2025",
      url: "https://www.dmiher.edu.in/uploads/topics/admission-25/Notification-DMIHER-CET-2-new.pdf",
    },
    {
      text: "SOP for NBEMS Candidate Registration Procedure",
      url: "https://www.dmiher.edu.in/uploads/topics/admission-24/SOP%20for%20NBEMS%20candidate%20registration%20procedure.pdf",
    },
    {
      text: "Registering for the Skill Based Courses for NBEMS",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSejtMI9lKD767XeZpsMPpMITSymISgP9oCF5JGup2sdpxSpNw/viewform",
    },
  ];

  const universityAnnouncements = [
    {
      text: "Final Year Project Submission Guidelines 2024-25",
      url: "#",
    },
    {
      text: "Summer Internship Program Registration Open",
      url: "#",
    },
    {
      text: "Library Extended Hours During Exam Period",
      url: "#",
    },
    {
      text: "New Academic Calendar 2025-26 Released",
      url: "#",
    },
    {
      text: "Campus Placement Drive Schedule 2025",
      url: "#",
    },
    {
      text: "Research Paper Publication Guidelines Updated",
      url: "#",
    },
    {
      text: "International Student Exchange Program 2025",
      url: "#",
    },
    {
      text: "Annual Sports Meet Registration Notice",
      url: "#",
    },
  ];

  const announcements =
    activeTab === "admissions"
      ? admissionsAnnouncements
      : universityAnnouncements;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, announcements.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= announcements.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleAnnouncements = announcements.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
      `}</style>

      <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white text-gray-500">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-medium ml-2"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
          <br />
          IMPORTANT ANNOUNCEMENTS
        </h2>

        <div className="flex flex-col sm:flex-row items-center ml-[10%] justify-between mt-6 text-sm text-gray-600 gap-4">
          <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto">
            <span
              onClick={() => {
                setActiveTab("admissions");
                setCurrentIndex(0);
              }}
              className={`cursor-pointer text-base sm:text-lg transition-colors ${
                activeTab === "admissions"
                  ? "underline text-gray-800 font-semibold"
                  : "hover:text-gray-500"
              }`}
            >
              Admissions 2025-26
            </span>
            <span className="text-base sm:text-lg mx-2"> | </span>
            <span
              onClick={() => {
                setActiveTab("university");
                setCurrentIndex(0);
              }}
              className={`cursor-pointer text-base sm:text-lg transition-colors ${
                activeTab === "university"
                  ? "underline text-gray-800 font-semibold"
                  : "hover:text-gray-500"
              }`}
            >
              University
            </span>
          </div>

          <div className="hidden items-center space-x-3 order-1 sm:order-2 sm:flex">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex === 0}
            >
              <ArrowLeft
                size={16}
                className={`${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex + itemsPerPage >= announcements.length}
            >
              <ArrowRight
                size={16}
                className={`${
                  currentIndex + itemsPerPage >= announcements.length
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </button>

            <a
              className="text-[#F04E30] ml-2 font-[600] sm:text-base cursor-pointer hover:underline whitespace-nowrap"
              href="https://dmiher.edu.in/admissionform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                fontSize: "12px",
              }}
            >
              VIEW ALL
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {visibleAnnouncements.map((item, i) => (
            <div
              key={currentIndex + i}
              className="text-[#707070] border-b sm:border-b-0 sm:border-r border-gray-300 last:border-b-0 sm:last:border-r-0 pr-6 pl-6 pb-4 sm:pb-0 transition-opacity duration-300"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-sm leading-relaxed hover:text-gray-900 hover:underline transition-colors cursor-pointer block"
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportantAnnouncements;
