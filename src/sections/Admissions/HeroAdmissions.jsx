import React, { useEffect, useState } from "react";
import Banner from "../../assets/AdmissionBanner.jpg";
import BannerMobile from "../../assets/AdmissionBannerMobile.png";

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);
  useEffect(() => {
    // Dynamically load the external script for the form widget
    const scriptId = "nopaperforms-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";

      document.body.appendChild(script);

      script.onload = () => {
        console.log("NoPaperForms widget script loaded");
        // If the widget exposes a function to initialize after script load,
        // call it here. (Check widget docs if needed)
      };
    }
  }, []);
  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      // Example: apply custom height logic based on screen height
      if (screenHeight < 500) {
        setHeight("170vh");
      } else if (screenHeight < 606) {
        setHeight("120vh");
      } else if (screenHeight < 800) {
        setHeight("100vh");
      } else if (screenHeight < 1000) {
        setHeight("80vh");
      } else {
        setHeight("90vh");
      }

      if (screenWidth < 768) {
        setBgImage(BannerMobile);
      } else {
        setBgImage(Banner);
      }
    };

    updateHeight(); // set initially
    window.addEventListener("resize", updateHeight); // update on resize

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div className="relative w-full bg-white">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat bg- md:bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: height,
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

        {/* Helpline Button final */}
        {/* <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-424px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
  <span className="text-sm sm:ml-20">Live Ticker</span>

  <div className="flex items-center gap-x-5 gap-y-1">
    <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
      <span className="font-semibold text-xl">APPLY NOW</span>
    <span className="text-base sm:text-sm text-gray-800">
      for Admission 2025-26
    </span>
  </div>
</div> */}

        <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
          <span className="text-sm sm:ml-20">Live Ticker</span>

          <div className="flex items-center gap-x-5 gap-y-1">
            <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
              <span className="font-semibold text-xl">APPLY NOW</span>
            </div>
            <span className="text-base sm:text-sm text-gray-800">
              for Admission 2025-26
            </span>
          </div>
        </div>

        {/* Helpline Button final */}
        {/* <div className="absolute right-20 xl:right-[126px] z-20 hidden lg:block">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </div> */}
        <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </div>

        {/* Live Ticker */}
        {/* <div className="relative bg-[#dcc760] w-3/4 h-12 flex items-center px-4">

  <div className="flex-1 text-sm text-gray-800 font-medium">Live Ticker</div>

  <div className="absolute right-[10px] flex items-center gap-2">
    <button className="bg-[#f24a2f] text-white text-xs font-bold px-3 py-1">APPLY NOW</button>
    <span className="text-sm text-gray-800">for Admission 2025-26</span>
  </div>

</div>
  <div className="absolute right-[-300px]">
  <button className="bg-[#F04E30] text-white px-5 py-3 uppercase text-sm sm:text-xl font-sans whitespace-nowrap">
            Helpline: <span className="font-bold">+91 8888040999</span>
          </button>
  </div> */}

        {/* Centered Text */}
        {/* <div className="absolute inset-0 bg-black/10 flex items-center justify-center lg:justify-start 2xl:justify-center px-4 text-white z-30"> */}
        <div className="absolute insert-0 lg:left-[30%] xl:left-[40%] 2xl:left-[50%] lg:-translate-x-1/2 inset-0 flex items-end md:items-center md:justify-center p-7 pb-20 md:p-0 md:px-4 text-white z-30">
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2">
              WELCOME TO THE
            </h1>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider mb-2 text-[#E1CD67]">
              DYNAMIC WORLD OF
            </h2>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-wider text-[#E1CD67]">
              HIGHER EDUCATION
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`
          w-full px-4 mt-6
          lg:w-[500px]
          mx-auto
          h-auto
          lg:absolute lg:right-[5%] 
          lg:top-1/2 lg:-translate-y-1/2
          lg:mt-0
          z-40
        `}
      >
        <div
          className="w-full max-w-lg bg-white rounded-t-[20px] shadow-2xl overflow-hidden mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <div className="bg-[#F04E30] text-white text-center py-4 lg:py-3 text-lg sm:text-2xl font-sans rounded-t-lg">
            ENQUIRE NOW
          </div>
          <div className="w-full flex justify-center ">
            <div
              className="npf_wgts bg-white rounded shadow-lg "
              data-height="512px"
              data-w="0615c1812ea64fa9c301f9db4e34bd73"
              style={{ width: 500, maxWidth: "100%" }}
            ></div>
          </div>
        </div>
        <p className="text-[10px] max-w-[90%] md:max-w-[70%] px-6 pb-3 sm:text-left font-oswald-light">
          *By submitting this form, I agree to receive notifications from the
          University in the form of SMS/E-mail/Call.
        </p>
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
