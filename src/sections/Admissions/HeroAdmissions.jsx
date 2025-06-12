// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Banner from "../../assets/AdmissionBanner.jpg";
// import BannerMobile from "../../assets/AdmissionBannerMobile.png";

// export default function EducationEnquiryPage() {
//   const [height, setHeight] = useState("100vh");
//   const [bgImage, setBgImage] = useState(Banner);
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   const navigate = useNavigate();

//   // Handle height and background image changes
//   useEffect(() => {
//     const updateHeight = () => {
//       const screenHeight = window.innerHeight;
//       const screenWidth = window.innerWidth;

//       if (screenHeight < 500) setHeight("170vh");
//       else if (screenHeight < 606) setHeight("120vh");
//       else if (screenHeight < 800) setHeight("100vh");
//       else if (screenHeight < 1000) setHeight("80vh");
//       else setHeight("90vh");

//       if (screenWidth < 768) setBgImage(BannerMobile);
//       else setBgImage(Banner);
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // Dynamically load NoPaperForms script
//   useEffect(() => {
//     const scriptId = "nopaperforms-widget-script";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.type = "text/javascript";
//       script.async = true;
//       script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//       script.onload = () => {
//         console.log("NoPaperForms widget script loaded");
//         setScriptLoaded(true);
//       };
//       document.body.appendChild(script);
//     } else {
//       setScriptLoaded(true); // already loaded
//     }
//   }, []);

//   return (
//     <div className="relative w-full bg-white">
//       {/* Banner Section */}
//       <div
//         className="relative w-full bg-no-repeat md:bg-cover admissions-slider-hight"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           maxHeight: "[90vh]",
//         }}
//       >
//         <style>
//           {`
//             .banner-bg {
//               background-position: center center;
//               background-size: cover;
//             }
//             @media (max-width: 1023px) {
//               .banner-bg {
//                 background-position: left center !important;
//                 background-size: 150% !important;
//               }
//             }
//           `}
//         </style>

//         <div className="banner-bg absolute inset-0" />

//         {/* Top Strip */}
//         <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
//           <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
//           <div className="flex items-center gap-x-5 gap-y-1">
//             <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
//               <span className="font-semibold text-xl">APPLY NOW</span>
//             </div>
//             <span className="text-base sm:text-sm text-gray-800">
//               for Admission 2025-26
//             </span>
//           </div>
//         </div>

//         {/* Helpline */}
//         <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
//           <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
//             Helpline: <span>+91 8888040999</span>
//           </button>
//         </div>

//         {/* Centered Heading */}
//         <div className="absolute insert-0 lg:left-[30vh] xl:left-[90vh] 2xl:left-[95vh] lg:-translate-x-1/2 inset-0 flex items-end md:items-center md:justify-center p-7 pb-20 md:p-0 md:px-4 text-white z-30">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2">
//               WELCOME TO THE
//             </h1>
//             <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2 text-[#E1CD67]">
//               DYNAMIC WORLD OF
//             </h2>
//             <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider text-[#E1CD67]">
//               HIGHER EDUCATION
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Enquiry Form Section */}
//       <div
//         className={`
//           w-full px-4 mt-6
//           lg:w-[500px]
//           mx-auto
//           h-auto
//           lg:absolute lg:right-[4%]
//           lg:top-4/7 lg:-translate-y-1/2
//           lg:mt-0
//           z-40
//         `}
//       >
//         <div
//           className="w-full max-w-lg bg-white rounded-t-[20px] shadow-2xl overflow-hidden mx-auto scale-90"
//           style={{ maxWidth: "400px" }}
//         >
//           <div className="bg-[#F04E30] text-white text-center py-4 lg:py-3 text-lg sm:text-2xl font-sans rounded-t-lg">
//             ENQUIRE NOW
//           </div>

//           <div className="w-full flex justify-center">
//             {scriptLoaded ? (
//               <div
//                 className="npf_wgts"
//                 data-height="512px"
//                 style={{ width: "100%" }}
//                 data-w="e07589d3e4cb30c4c23ee47924975ec8"
//               ></div>
//             ) : (
//               <div className="p-18 flex items-center justify-center">
//                 <svg
//                   aria-hidden="true"
//                   className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//                   viewBox="0 0 100 101"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..."
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079..."
//                     fill="currentFill"
//                   />
//                 </svg>
//                 <span className="sr-only">Loading...</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Side Buttons */}
//       <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%]right-[22px] font-[500] z-20">
//         <div className="transform -rotate-90 origin-right">
//           <a
//             href="https://dmiher.edu.in/admissionform"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
//           >
//             Announcements
//           </a>
//         </div>
//         <div className="transform -rotate-90 origin-right">
//           <button
//             type="button"
//             onClick={() => navigate("/admissions")}
//             className="bg-[#122E5E] text-white text-sm px-6 py-3"
//           >
//             Admission Enquiry
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/AdmissionBanner.jpg";
import BannerMobile from "../../assets/AdmissionBannerMobile.png";

// Inline component for widget
const NoPaperFormWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="400px"
      data-w="e07589d3e4cb30c4c23ee47924975ec8"
      style={{ minHeight: "400px" }}
    ></div>
  );
};

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      if (screenHeight < 500) setHeight("170vh");
      else if (screenHeight < 606) setHeight("120vh");
      else if (screenHeight < 800) setHeight("100vh");
      else if (screenHeight < 1000) setHeight("80vh");
      else setHeight("90vh");

      if (screenWidth < 768) setBgImage(BannerMobile);
      else setBgImage(Banner);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative w-full bg-white">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat md:bg-cover admissions-slider-hight"
        style={{ backgroundImage: `url(${bgImage})`, maxHeight: "[90vh]" }}
      >
        <style>
          {`
            .banner-bg {
              background-position: center center;
              background-size: cover;
            }
            @media (max-width: 1023px) {
              .banner-bg {
                background-position: left center !important;
                background-size: 150% !important;
              }
            }
          `}
        </style>

        <div className="banner-bg absolute inset-0" />

        {/* Top Strip */}
        <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
          <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
          <div className="flex items-center gap-x-5 gap-y-1">
            <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
              <span className="font-semibold text-xl">APPLY NOW</span>
            </div>
            <span className="text-base sm:text-sm text-gray-800">
              for Admission 2025-26
            </span>
          </div>
        </div>

        {/* Helpline */}
        <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </div>

        {/* Centered Heading */}
        <div className="absolute insert-0 lg:left-[30vh] xl:left-[90vh] 2xl:left-[95vh] lg:-translate-x-1/2 inset-0 flex items-end md:items-center md:justify-center p-7 pb-20 md:p-0 md:px-4 text-white z-30">
          <div>
            <h1 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2">
              WELCOME TO THE
            </h1>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2 text-[#E1CD67]">
              DYNAMIC WORLD OF
            </h2>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-wider text-[#E1CD67]">
              HIGHER EDUCATION
            </h2>
          </div>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div
        className={`
          w-full px-4 mt-6
          lg:w-[500px]
          mx-auto
          h-auto
          lg:absolute lg:right-[4%] 
          lg:top-4/7 lg:-translate-y-1/2
          lg:mt-0
          z-40
        `}
      >
        <div
          className="w-full max-w-lg bg-white rounded-t-[20px] shadow-2xl overflow-hidden mx-auto scale-90"
          style={{ maxWidth: "400px" }}
        >
          <div className="bg-[#F04E30] text-white text-center py-4 lg:py-3 text-lg sm:text-2xl font-sans rounded-t-lg">
            ENQUIRE NOW
          </div>

          <div className="w-full flex justify-center p-4">
            <NoPaperFormWidget />
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] z-20">
        <div className="transform -rotate-90 origin-right">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button
            type="button"
            onClick={() => navigate("/admissions")}
            className="bg-[#122E5E] text-white text-sm px-6 py-3"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
