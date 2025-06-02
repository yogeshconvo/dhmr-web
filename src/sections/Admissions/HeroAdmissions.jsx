import React from "react";
import Banner from "../../assets/AdmissionBanner.jpg";

export default function EducationEnquiryPage() {
  return (
    <div className="relative w-full h-auto lg:h-[90vh] bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Banner with Ticker, Welcome Text, and Helpline Button */}
      <div
        className="flex-1 min-h-[400px] bg-left lg:bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Live Ticker */}
        <div className="absolute top-0 left-0 w-full sm:w-[80%] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center font-oswald-medium font-light z-20">
          {/* Live Ticker Label */}
          <span className="mb-2 sm:mb-0 text-sm sm:ml-4">Live Ticker</span>

          <div className="flex flex-row flex-wrap items-center text-center sm:text-left gap-x-4 gap-y-1">
            <div className="flex items-center text-sm bg-red-600 text-white px-4 py-1 sm:px-5 sm:py-2 space-x-3">
              <span className="font-semibold">APPLY NOW</span>
            </div>
            <span className="text-base sm:text-sm text-gray-800 font-oswald-light">
              {/* Changed to light font */}
              for Admission 2025-26
            </span>
          </div>
        </div>

        {/* Helpline Button: visible only on lg+ */}
        <div className="absolute right-16 z-20 hidden lg:block">
          <button className="bg-red-600 text-white px-10 py-5 uppercase text-sm sm:text-sm font-oswald-medium">
            Helpline: <span className="font-bold">+91 8888040999</span>
          </button>
        </div>

        {/* Welcome Text */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center text-white px-4 py-6">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium font-medium mb-2">
              WELCOME TO THE
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium font-medium text-yellow-400">
              DYNAMIC WORLD OF
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium font-medium text-yellow-400">
              HIGHER EDUCATION
            </h2>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="w-full md:mt-15 lg:absolute lg:top-0 lg:bottom-0 lg:right-13 lg:left-auto flex justify-center lg:justify-end items-center p-4 z-10">
        <div className="w-full max-w-[450px] bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-red-600 text-white text-center py-4  text-lg sm:text-xl font-oswald-medium font-medium rounded-t">
            ENQUIRE NOW
          </div>
          <form className="p-6 space-y-3 font-oswald-medium font-light">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full sm:w-1/2 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full sm:w-1/2 border p-2 rounded"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full sm:w-1/2 border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile No.*"
                className="w-full sm:w-1/2 border p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="OTP"
              className="w-full border p-2 rounded"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border p-2 rounded">
                <option>Select State*</option>
              </select>
              <input
                type="text"
                placeholder="Enter City*"
                className="w-full sm:w-1/2 border p-2 rounded"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value="Dental"
                readOnly
                className="w-full sm:w-1/2 border p-2 rounded bg-gray-100"
              />
              <select className="w-full sm:w-1/2 border p-2 rounded">
                <option>Select Program Type*</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="w-full sm:w-1/2 border p-2 rounded">
                <option>Select Program*</option>
              </select>
              <select className="w-full sm:w-1/2 border p-2 rounded">
                <option>Select Institute*</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded text-lg font-semibold"
            >
              SUBMIT
            </button>
          </form>
          <p className="text-xs text-center px-6 pb-1 font-oswald-light">
            {/* Changed to light font */}
            *By submitting this form, I agree to receive notifications from the
            University in the form of SMS/E-mail/Call.
          </p>
          <p className="text-sm text-center pb-4 font-oswald-light">
            {/* Changed to light font */}
            Already Registered? Click to{" "}
            <a href="#" className="text-blue-600 underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Vertical Floating Buttons */}
      <div className="hidden lg:flex absolute top-1/3 right-0 z-20 flex-col gap-3 mr-4">
        <button
          className="bg-blue-900 text-white text-xl px-4 py-2 origin-right rounded-l"
          style={{ transform: "rotate(-90deg) translateY(10px)" }}
        >
          Announcements
        </button>
        <button
          className="bg-blue-900 text-white text-xl px-3 py-2 origin-right rounded-l"
          style={{ transform: "rotate(-90deg) translateY(60px)" }}
        >
          Admission enquiry
        </button>
      </div>
    </div>
  );
}
