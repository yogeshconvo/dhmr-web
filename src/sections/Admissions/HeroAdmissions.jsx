// import React, { useEffect, useState } from "react";
// import Banner from "../../assets/AdmissionBanner.jpg";
// import BannerMobile from "../../assets/AdmissionBannerMobile.png";

// export default function EducationEnquiryPage() {
//   const [height, setHeight] = useState("100vh");
//   const [bgImage, setBgImage] = useState(Banner);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // setTimeout(() => {
//     //   var s = document.createElement("script");
//     //   if (s) {
//     //     s.type = "text/javascript";
//     //     s.async = true;
//     //     s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//     //     document.body.appendChild(s);
//     //   }
//     //   console.log(s);
//     //   setLoading(false);
//     // }, 2500);
//     // Dynamically load the external script for the form widget
//     // const scriptId = "nopaperforms-widget-script";
//     // if (!document.getElementById(scriptId)) {
//     //   const script = document.createElement("script");
//     //   script.id = scriptId;
//     //   script.type = "text/javascript";
//     //   script.async = true;
//     //   script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//     //   document.body.appendChild(script);
//     //   script.onload = () => {
//     //     console.log("NoPaperForms widget script loaded");
//     //     // If the widget exposes a function to initialize after script load,
//     //     // call it here. (Check widget docs if needed)
//     //   };
//     // }
//   }, [height]);


//   useEffect(() => {
//     const updateHeight = () => {
//       const screenHeight = window.innerHeight;
//       const screenWidth = window.innerWidth;
//       // setScreenWidth(window.innerWidth);

//       // Example: apply custom height logic based on screen height
//       if (screenHeight < 500) {
//         setHeight("170vh");
//       } else if (screenHeight < 606) {
//         setHeight("120vh");
//       } else if (screenHeight < 800) {
//         setHeight("100vh");
//       } else if (screenHeight < 1000) {
//         setHeight("80vh");
//       } else {
//         setHeight("90vh");
//       }

//       if (screenWidth < 768) {
//         setBgImage(BannerMobile);
//       } else {
//         setBgImage(Banner);
//       }
//     };

//     updateHeight(); // set initially
//     window.addEventListener("resize", updateHeight); // update on resize

//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);
//   return (
//     <div className="relative w-full bg-white ">
//      <script type="text/javascript">var s=document.createElement("script"); 	s.type="text/javascript"; s.async=true; s.src="https://widgets.in6.nopaperforms.com/emwgts.js"; 	document.body.appendChild(s);</script>s://widgets.in6.nopaperforms.com/emwgts.js"
//       ></script>
//       {/* Banner Section */}
//       <div
//         className="relative w-full bg-no-repeat bg- md:bg-cover admissions-slider-hight"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           // height: height,
//           maxHeight: "1500px",
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

//         {/* Helpline Button final */}
//         {/* <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-424px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
//   <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>

//   <div className="flex items-center gap-x-5 gap-y-1">
//     <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
//       <span className="font-semibold text-xl">APPLY NOW</span>
//     <span className="text-base sm:text-sm text-gray-800">
//       for Admission 2025-26
//     </span>
//   </div>
// </div> */}

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

//         {/* Helpline Button final */}
//         {/* <div className="absolute right-20 xl:right-[126px] z-20 hidden lg:block">
//           <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
//             Helpline: <span>+91 8888040999</span>
//           </button>
//         </div> */}
//         <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
//           <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
//             Helpline: <span>+91 8888040999</span>
//           </button>
//         </div>

//         {/* Admissions open for 2025-26 */}
//         {/* <div className="relative bg-[#dcc760] w-3/4 h-12 flex items-center px-4">

//   <div className="flex-1 text-sm text-gray-800 font-medium">Admissions open for 2025-26</div>

//   <div className="absolute right-[10px] flex items-center gap-2">
//     <button className="bg-[#f24a2f] text-white text-xs font-bold px-3 py-1">APPLY NOW</button>
//     <span className="text-sm text-gray-800">for Admission 2025-26</span>
//   </div>

// </div>
//   <div className="absolute right-[-300px]">
//   <button className="bg-[#F04E30] text-white px-5 py-3 uppercase text-sm sm:text-xl font-sans whitespace-nowrap">
//             Helpline: <span className="font-bold">+91 8888040999</span>
//           </button>
//   </div> */}

//         {/* Centered Text */}
//         {/* <div className="absolute inset-0 bg-black/10 flex items-center justify-center lg:justify-start 2xl:justify-center px-4 text-white z-30"> */}
//         <div className="absolute insert-0 lg:left-[30vh] xl:left-[90vh] 2xl:left-[95vh] lg:-translate-x-1/2 inset-0 flex items-end md:items-center md:justify-center p-7 pb-20 md:p-0 md:px-4 text-white z-30">
//           <div>
//             <h1 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2">
//               WELCOME TO THE
//             </h1>
//             <h2 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2 text-[#E1CD67]">
//               DYNAMIC WORLD OF
//             </h2>
//             <h2 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider text-[#E1CD67]">
//               HIGHER EDUCATION
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`
//           w-full px-4 mt-6
//           lg:w-[500px]
//           mx-auto
//           h-auto
//           lg:absolute lg:right-[5%]
//           lg:top-4/7 lg:-translate-y-1/2
//           lg:mt-0
//           z-40
//         `}
//       >
//         <div
//           className="w-full max-w-lg bg-white rounded-t-[20px] shadow-2xl overflow-hidden mx-auto scale-90"
//           style={{ maxWidth: "500px" }}
//         >
//           <div className="bg-[#F04E30] text-white text-center py-4 lg:py-3 text-lg sm:text-2xl font-sans rounded-t-lg">
//             ENQUIRE NOW
//           </div>
//           {!loading && (
//             <div className="w-full flex justify-center ">
//              <div class="npf_wgts" data-height="400px" data-w="e07589d3e4cb30c4c23ee47924975ec8"></div>
//             </div>
//           )}
//           {loading && (
//             <div className="p-18 flex items-center justify-center">
//               <svg
//                 aria-hidden="true"
//                 class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//               <span class="sr-only">Loading...</span>
//             </div>
//           )}
//         </div>
//         {/* <p className="text-[10px] max-w-[90%] md:max-w-[70%] px-6 pb-3 sm:text-left font-oswald-light">
//           *By submitting this form, I agree to receive notifications from the
//           University in the form of SMS/E-mail/Call.
//         </p> */}
//       </div>

//       {/* Side Buttons */}
//       <div className="flex absolute top-1/4 right-[28px] font-[500] z-20 flex-col gap-30">
//         <div className="transform -rotate-90 origin-right">
//           <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
//             Announcements
//           </button>
//         </div>
//         <div className="transform -rotate-90 origin-right">
//           <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
//             Admission Enquiry
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Banner from "../../assets/AdmissionBanner.jpg";
import BannerMobile from "../../assets/AdmissionBannerMobile.png";

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Handle height and background image changes
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

  // Dynamically load NoPaperForms script
  useEffect(() => {
    const scriptId = "nopaperforms-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      script.onload = () => {
        console.log("NoPaperForms widget script loaded");
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true); // already loaded
    }
  }, []);

  return (
    <div className="relative w-full bg-white">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat md:bg-cover admissions-slider-hight"
        style={{
          backgroundImage: `url(${bgImage})`,
          maxHeight: "1500px",
        }}
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
          lg:absolute lg:right-[5%] 
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

          <div className="w-full flex justify-center">
            {scriptLoaded ? (
              <div
                className="npf_wgts"
            
                data-w="e07589d3e4cb30c4c23ee47924975ec8"
              ></div>
            ) : (
              <div className="p-18 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..."
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079..."
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="flex absolute top-1/4 right-[28px] font-[500] z-20 flex-col gap-30">
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Announcements
          </button>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button className="bg-[#122E5E] text-white text-sm px-6 py-4">
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

