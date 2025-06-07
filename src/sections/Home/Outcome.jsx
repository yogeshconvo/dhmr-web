import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PlayCircle } from "lucide-react";

import OutcomeImg from "../../assets/Group 1749.png";
import OutcomeImg1 from "../../assets/LifeAtDMIHR.jpg";
import video1 from "../../assets/dmiher_corporate_video.mp4";

import icon1 from "../../assets/Outcome/clinic-1.png";
import icon2 from "../../assets/Outcome/clinic-2.png";
import icon3 from "../../assets/Outcome/clinic-3.png";
import icon4 from "../../assets/Outcome/clinic-4.png";
import icon5 from "../../assets/Outcome/clinic-5.png";
import icon6 from "../../assets/Outcome/clinic-6.png";
import icon7 from "../../assets/Outcome/clinic-7.png";
import icon8 from "../../assets/Outcome/clinic-8.png";
import icon9 from "../../assets/Outcome/clinic-9.png";
import icon10 from "../../assets/Outcome/clinic-10.png";
import icon11 from "../../assets/Outcome/clinic-11.png";
import icon12 from "../../assets/Outcome/clinic-12.png";
import icon13 from "../../assets/Outcome/clinic-13.png";
import icon14 from "../../assets/Outcome/clinic-14.png";
import icon15 from "../../assets/Outcome/clinic-15.png";
import icon16 from "../../assets/Outcome/clinic-16.png";
import icon17 from "../../assets/Outcome/clinic-17.png";
import icon18 from "../../assets/Outcome/clinic-18.png";

const Outcome = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
  ];

  return (
    <>
      <div className="px-0 sm:px-16 rounded-3xl md:px-32 lg:px-40 xl:px-48">
        <div className="py-4 sm:py-6 md:py-8 lg:py-10 sm:px-6 md:px-8 lg:px-20">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            // autoPlay
            interval={4000}
          >
            {/* Slide 1: Image Banner */}
            <div>
              <div className="relative lg:rounded-xl h-[95vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[85vh] overflow-hidden swipper-height">
                <img
                  src={OutcomeImg}
                  alt="Campus"
                  className="absolute inset-0 w-full h-full object-cover "
                />
                <div className="absolute inset-0 max-md:bg-gradient-to-t bg-gradient-to-r from-black/60 max-md:from-black/90 to-transparent" />
                <div className="absolute left-6 sm:left-6 md:left-8 lg:left-2 top-8/10 lg:top-2/12 text-white max-w-lg text-left">
                  <h1 className="text-[32px] sm:text-2xl md:text-3xl lg:text-4xl font-oswald-medium tracking-wider leading-10 lg:ml-20">
                    OUTCOME BASED <br />
                    MULTIDISCIPLINARY <br />
                    EDUCATION
                  </h1>
                </div>
              </div>
            </div>

            {/* Slide 2: Icon Grid + Text */}
            <div>
              <div className="bg-[#E1CD67] lg:rounded-xl h-[95vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[50] swipper-height flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 py-2 sm:py-8 md:py-10 lg:py-16">
                {/* Mobile View */}
                <div className=" lg:hidden w-full h-full flex flex-col gap-2 ">
                  <div className="grid grid-cols-2 gap-x-1 gap-y-1">
                    {icons.map((icon, index) => (
                      <img
                        key={index}
                        src={icon}
                        alt={`Icon ${index + 1}`}
                        className="w-full h-[55px] object-cover overflow-hidden"
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-start font-sans font-bold text-[#707070] text-[clamp(1.5rem,1.6vw,1.75rem)] leading-snug">
                      LEARN FROM THE GLOBAL <br />
                      LEADERS, LEAD AS THE BEST
                    </p>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-3 w-full items-center">
                  {icons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt={`Icon ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  ))}
                  {/* Text Block */}
                  <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 flex items-center">
                    <p className="text-start lg:ml-5 font-sans font-bold text-[#707070] text-[clamp(1rem,1.6vw,1.75rem)] leading-snug max-w-full lg:max-w-[100%]">
                      LEARN FROM THE GLOBAL <br />
                      LEADERS, LEAD AS THE BEST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Video Section */}
        <div className="py-10">
          <h3 className="text-[#707070] text-2xl sm:text-3xl md:text-4xl ml-5 sm:ml-0 mb-10 font-[500] font-oswald-light leading-tight">
            <hr className="border-red-400 border-4 w-20 mb-1 sm:mb-2" />
            LIFE AT
            <br className="sm:hidden" />
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
