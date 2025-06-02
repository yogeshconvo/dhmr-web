import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PlayCircle } from "lucide-react";

import OutcomeImg from "../../assets/Group 1749.png";
import OutcomeImg1 from "../../assets/LifeAtDMIHR.jpg";
import outcomeImg2 from "../../assets/Group628.png";
import video1 from "../../assets/dmiher_corporate_video.mp4";

const Outcome = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      {/* Carousel Section */}
      <div className="px-4 sm:px-6 md:px-10 py-10">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
        >
          {/* Slide 1 */}
          <div className="px-4 md:px-0">
            <div className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden rounded-md">
              <img
                src={OutcomeImg}
                alt="Campus"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute left-6 sm:left-10 top-1/4 text-white max-w-lg text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-balance font-oswald-medium">
                  OUTCOME BASED <br />
                  MULTIDISCIPLINARY <br />
                  EDUCATION
                </h1>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-4 md:px-0">
            <div className="bg-[#E1CD67] w-full h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center rounded-md">
              <img
                src={outcomeImg2}
                alt="Outcome Highlight"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </Carousel>
      </div>

      {/* Section 2: Life at DMIHER */}
      <div className="px-4 sm:px-6 md:px-10 py-10">
        <h3 className="text-gray-600 text-2xl sm:text-3xl md:text-4xl ml-52  mb-10 font-[500] font-oswald-light">
          <hr className="border-red-400 border-4 w-20 mb-2" />
          LIFE AT DMIHER (DU)
        </h3>

        {!playVideo ? (
          <div className="relative w-full max-w-5xl mx-auto">
            <img
              src={OutcomeImg1}
              alt="Life at DMIHER"
              className="w-full rounded-lg shadow-md"
            />
            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play Video"
            >
              <PlayCircle
                size={72}
                className="text-white drop-shadow-lg hover:scale-110 transition-transform duration-200"
              />
            </button>
          </div>
        ) : (
          <div className="w-full max-w-5xl mx-auto">
            <video className="w-full rounded-lg shadow-md" controls autoPlay>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  );
};

export default Outcome;
