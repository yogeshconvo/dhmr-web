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
      <div className="px-0 sm:px-16 rounded-3xl md:px-32 lg:px-40 xl:px-48">
        <div className="py-10 px-15">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
          >
            <div>
              <div className="relative rounded-xl h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
                <img
                  src={OutcomeImg}
                  alt="Campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r to-transparent" />
                <div className="absolute left-4 sm:left-10 top-1/4 text-white max-w-lg text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-3xl text-balance gap-5 font-oswald-medium tracking-wider">
                    OUTCOME BASED <br />
                    MULTIDISCIPLINARY <br />
                    EDUCATION
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#E1CD67] rounded-xl p-15 pt-5 w-full h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center">
                <img
                  src={outcomeImg2}
                  alt="Outcome Highlight"
                  className="max-w-full max-h-full  object-contain"
                />
              </div>
            </div>
          </Carousel>
        </div>

        <div className="py-10">
          <h3 className="text-[#707070] text-2xl sm:text-3xl md:text-4xl mb-10 font-[500] font-oswald-light">
            <hr className="border-red-400 border-4 w-20 mb-2" />
            LIFE AT
            <span className="block sm:hidden">
              <br />
            </span>
            <span className="sm:inline"> DMIHER (DU)</span>
          </h3>

          {!playVideo ? (
            <div className="relative w-full">
              <img
                src={OutcomeImg1}
                alt="Life at DMIHER"
                className="w-full sm:shadow-md"
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
            <div className="w-full">
              <video
                className="w-full sm:rounded-lg sm:shadow-md"
                controls
                autoPlay
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Outcome;
