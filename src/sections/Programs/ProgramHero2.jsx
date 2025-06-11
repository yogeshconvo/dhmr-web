import React, { useEffect } from "react";
import outcomeImg from "../../assets/PH2.jpg";
import { Link } from "react-router-dom";

const SecondHPage = () => {
  useEffect(() => {
    const scriptId = "npfwpopup-script";

    const existingScript = document.getElementById(scriptId);

    if (!existingScript && !window.NpfWidgetsInit) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.NpfWidgetsInit === "function") {
          window.NpfWidgetsInit({
            widgetId: "e07589d3e4cb30c4c23ee47924975ec8",
            baseurl: "widgets.in6.nopaperforms.com",
            formTitle: "Enquiry Form",
            titleColor: "#FF0033",
            backgroundColor: "#ddd",
            iframeHeight: "500px",
            buttonbgColor: "#4c79dc",
            buttonTextColor: "#FFF",
          });
          setTimeout(() => {
            const popupWrapper = document.querySelector(".npf-popup-wrapper");
            if (popupWrapper) {
              popupWrapper.style.zIndex = "999999";
              popupWrapper.style.position = "fixed";
            }
          }, 500);
        }
      };
      document.body.appendChild(script);
    } else if (typeof window.NpfWidgetsInit === "function") {
      // Already loaded
      window.NpfWidgetsInit({
        widgetId: "e07589d3e4cb30c4c23ee47924975ec8",
        baseurl: "widgets.in6.nopaperforms.com",
        formTitle: "Enquiry Form",
        titleColor: "#FF0033",
        backgroundColor: "#ddd",
        iframeHeight: "500px",
        buttonbgColor: "#4c79dc",
        buttonTextColor: "#FFF",
      });
      setTimeout(() => {
        const popupWrapper = document.querySelector(".npf-popup-wrapper");
        if (popupWrapper) {
          popupWrapper.style.zIndex = "999999";
          popupWrapper.style.position = "fixed";
        }
      }, 500);
    }
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-t from-black/90 text-white" />

      {/* Text Section */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-35">
        <div className="text-white max-w-2xl max-sm:relative max-sm:top-[25%] max-sm:flex max-sm:flex-col max-sm:m-auto">
          <p className="text-xl md:text-3xl lg:text-3xl leading-snug">
            Because the right course isn’t <br />
            just about what you learn— it’s <br /> about who you become, and the{" "}
            <br />
            difference you’re ready to make <br /> in the world.
          </p>
          {/* Button will trigger NPF popup */}
          <Link
            to="/admissions"
            type="button"
            className="npfWidgetButton block w-fit npfWidget-e07589d3e4cb30c4c23ee47924975ec8 mt-6 bg-[#F04E30] hover:bg-red-700 text-white font-bold py-3 px-6 text-sm"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHPage;
