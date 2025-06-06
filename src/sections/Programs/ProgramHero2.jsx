import React from "react";
import outcomeImg from "../../assets/PH2.jpg";

const SecondHPage = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay (optional for readability) */}
      <div className="absolute inset-0  bg-opacity-60 bg-gradient-to-t from-black/90 text-white" />

      {/* Text Section */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-35">
        <div className="text-white max-w-2xl max-sm:relative max-sm:top-[25%] max-sm:flex max-sm:flex-col max-sm:m-auto">
          <p className="text-xl md:text-3xl lg:text-3xl leading-snug">
            Because the right course isn’t <br />
            just about what you learn— it’s <br /> about who you become, and the{" "}
            <br />
            difference you’re ready to make <br /> in the world.
          </p>
          <button className="mt-6 bg-[#F04E30] hover:bg-red-700 text-white font-bold py-3 px-6 text-sm ">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondHPage;
