import React, { useEffect, useState } from "react";
import Banner from "../../assets/AdmissionBanner.jpg";
import BannerMobile from "../../assets/AdmissionBannerMobile.png";

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

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

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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

  return (
    <div className="relative w-full bg-white">
      <div
        className="relative w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: height,
          maxHeight: "1500px",
        }}
      >
     

        {/* Widget container aligned right */}
        <div className="flex justify-end w-full">
          <div
            className="npf_wgts bg-white rounded shadow-lg"
            data-height="500px"
            data-w="0615c1812ea64fa9c301f9db4e34bd73"
            style={{ width: 500, maxWidth: "100%" }}
          ></div>
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
