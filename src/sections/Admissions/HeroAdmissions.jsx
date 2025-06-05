import React, { useEffect, useState } from "react";
import Banner from "../../assets/AdmissionBanner.jpg";

export default function EducationEnquiryPage() {
  const [formTop, setFormTop] = useState("20%");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    function updateTop() {
      const viewportHeight = window.innerHeight;
      const halfFormHeight = 225;
      const centerTopPx = viewportHeight / 2;
      const minTopPx = 120 + halfFormHeight;

      const finalTop = centerTopPx < minTopPx ? minTopPx : centerTopPx;
      setFormTop(`${finalTop}px`);
    }

    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
      updateTop();
    }

    updateTop();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full bg-white flex flex-col lg:flex-row">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat bg-cover min-h-[80vh] lg:min-h-[80vh]"
        style={{ backgroundImage: `url(${Banner})` }}
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

        {/* Live Ticker */}
        <div className="absolute top-0 left-0 w-full sm:w-[75%] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
          <span className="mb-2 sm:mb-0 text-sm sm:ml-20">Live Ticker</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2">
              <span className="font-semibold text-sm">APPLY NOW</span>
            </div>
            <span className="text-base sm:text-sm text-gray-800">
              for Admission 2025-26
            </span>
          </div>
        </div>

        {/* Helpline Button */}
        <div className="absolute right-20 xl:right-[80px] z-20 hidden lg:block">
          <button className="bg-[#F04E30] text-white px-5 py-3 uppercase text-sm sm:text-xl font-sans whitespace-nowrap">
            Helpline: <span className="font-bold">+91 8888040999</span>
          </button>
        </div>

        {/* Centered Text */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center px-4 text-white z-30">
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
          w-full px-4 mt-6 lg:mt-0
          lg:w-auto lg:z-30
          h-auto 
          lg:absolute
          lg:right-[5%]
          lg:transform lg:-translate-y-1/2
        `}
        style={{
          maxWidth: 500,
          top: isLargeScreen ? formTop : "auto",
          position: isLargeScreen ? "absolute" : "relative",
        }}
      >
        <div
          className="w-full max-w-md bg-white rounded-t-lg shadow-2xl overflow-hidden"
          style={{ maxWidth: "500px" }}
        >
          <div className="bg-[#F04E30] text-white text-center py-8 text-lg sm:text-xl font-sans rounded-t-lg">
            ENQUIRE NOW
          </div>
          <form className="p-6 space-y-3 font-sans">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
              />
              <input
                type="tel"
                placeholder="Mobile No.*"
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
              />
            </div>
            <input
              type="text"
              placeholder="OTP"
              className="w-full border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]">
                <option>Select State*</option>
              </select>
              <input
                type="text"
                placeholder="Enter City*"
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value="Dental"
                readOnly
                className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl bg-gray-100 placeholder-[#707070]"
              />
              <select className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]">
                <option>Select Program Type*</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]">
                <option>Select Program*</option>
              </select>
              <select className="w-full sm:w-1/2 border border-[#707070] p-2 rounded-xl placeholder-[#707070]">
                <option>Select Institute*</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F04E30] text-white py-2 rounded-xl text-lg font-semibold"
            >
              SUBMIT
            </button>
            <p className="text-sm text-end pb-4">
              Already Registered?{" "}
              <a href="#" className="text-blue-600 underline">
                Login
              </a>
            </p>
          </form>

          <p className="text-xs px-6 pb-1 font-oswald-light">
            *By submitting this form, I agree to receive notifications from the
            University in the form of SMS/E-mail/Call.
          </p>
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
