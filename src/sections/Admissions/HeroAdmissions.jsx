import React, { useEffect, useState } from "react";
import Banner from "../../assets/AdmissionBanner.jpg";
import BannerMobile from "../../assets/AdmissionBanner.jpg";

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      setScreenWidth(window.innerWidth);

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

  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);
  return (
    <div className="relative w-full bg-white">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat md:bg-cover admissions-slider-hight"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "20%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "fill",

          // backgroundSize: "fill",
          // height: height,
          // maxHeight: "1500px",
        }}
      >
        {/* <style>
          {`
            .banner-bg {
              background-position: center center;
              background-size: contain;
            }
            @media (max-width: 1023px) {
              .banner-bg {
                background-position: left center !important;
                background-size: 150% !important;
              }
            }
          `}
        </style> */}

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
        <div className="absolute insert-0 lg:left-[30%] xl:left-[40%] 2xl:left-[50%] lg:-translate-x-1/2 inset-0 flex items-center justify-center px-4 text-white z-30">
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-sans font-bold tracking-wider mb-2 max-lg:text-[#E1CD67] ">
              WELCOME TO THE
            </h1>
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-sans font-semibold tracking-wider mb-2 lg:text-[#E1CD67]">
              DYNAMIC WORLD OF
            </h2>
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-sans font-semibold tracking-wider lg:text-[#E1CD67]">
              HIGHER EDUCATION
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`
          w-full px-4 mt-6
          2xl:w-[500px]
          mx-auto
          h-auto
          lg:absolute lg:right-[5%] 
          lg:top-[calc(10px+50%)] lg:-translate-y-1/2
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
          <form className="px-4 py-3 space-y-3 font-sans">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
              />
              <input
                type="tel"
                placeholder="Mobile No.*"
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
              />
            </div>
            <input
              type="text"
              placeholder="OTP"
              className="w-full border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left text-gray-500">
                <option>Select State*</option>
              </select>
              <input
                type="text"
                placeholder="Enter City*"
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value="Dental"
                readOnly
                className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl bg-gray-100 placeholder-[#707070] text-left"
              />
              <select className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left text-gray-500">
                <option>Select Program Type*</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left text-gray-500">
                <option>Select Program*</option>
              </select>
              <select className="w-full sm:w-1/2 border border-[#707070] py-4 sm:py-4 lg:py-2 3xl:py-4 px-4 rounded-xl placeholder-[#707070] text-left text-gray-500">
                <option>Select Institute*</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F04E30] text-white py-4 sm:py-2 lg:py-1 rounded-xl text-lg sm:text-xl"
            >
              SUBMIT
            </button>
            <p className="text-sm text-right pb-4">
              Already Registered ? Click to&nbsp;
              <a href="#" className="text-[#269BFF] underline">
                Login
              </a>
            </p>
          </form>

          <p className="text-[10px] max-w-[90%] md:max-w-[70%] px-6 pb-3 sm:text-left font-oswald-light">
            *By submitting this form, I agree to receive notifications from the
            University in the form of SMS/E-mail/Call.
          </p>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="flex absolute top-1/2 right-[28px] font-[500] z-20 flex-col gap-30">
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
