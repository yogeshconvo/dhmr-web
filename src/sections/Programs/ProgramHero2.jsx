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
      <div className="absolute inset-0  bg-opacity-40" />

      {/* Text Section */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-35">
        <div className="text-white max-w-2xl">
          <p className="text-xl md:text-xl lg:text-3xl font-oswald-medium font-light leading-snug">
            Because the right course isn’t <br />
            just about what you learn— it’s <br /> about who you become, and the{" "}
            <br />
            difference you’re ready to make <br/> in the world.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 text-sm ">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondHPage;
