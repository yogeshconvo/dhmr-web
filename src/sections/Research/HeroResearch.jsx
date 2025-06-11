// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ResearchBanner1 from "../../assets/ResearchBanner1.png";
// import ResearchBanner2 from "../../assets/ResearchBanner2.png";
// import ResearchBanner3 from "../../assets/ResearchBanner3.png";
// import ResearchBannerMB1 from "../../assets/ResearchGrid/Banner1MB.jpg";
// import ResearchBannerMB2 from "../../assets/ResearchGrid/Banner2MB.jpg";
// import ResearchBannerMB3 from "../../assets/ResearchGrid/Banner3MB.jpg";

// const HeroResearch = () => {
//   const navigate = useNavigate();

//   const slides = [
//     {
//       img: ResearchBanner2,
//       title: "A BEACON OF RESEARCH,",
//       highlight: "INNOVATION & ENTREPRENEURSHIP",
//       textPosition: "right",
//     },
//     {
//       img: ResearchBanner3,
//       title: "ADVANCING EVIDENCE-CENTRIC,",
//       highlight: "OUTCOME-ORIENTED INQUIRY.",
//       textPosition: "left",
//     },
//     {
//       img: ResearchBanner1,
//       title: "PROMOTING PATIENT-CENTRIC,",
//       highlight: "PRACTICE-LED RESEARCH.",
//       textPosition: "right",
//       customClass: "lg:left-10 left-2 text-left",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => setCurrentSlide(index);
//   const current = slides[currentSlide];

//   return (
//     <div className="relative w-full  h-[90vh] md:mt-[-5px] overflow-hidden">
//       {/* Background Image */}
//       <picture className=" inset-0 w-full h-full">
//         <source
//           srcSet={
//             currentSlide === 0
//               ? ResearchBannerMB1
//               : currentSlide === 1
//               ? ResearchBannerMB2
//               : ResearchBannerMB3
//           }
//           media="(max-width: 768px)"
//         />
//         <img
//           src={current.img}
//           alt="Research Banner"
//           className="w-full h-full object-cover"
//         />
//       </picture>

//       <div
//         className={`absolute top-0 bottom-0 w-full md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent ${
//           current.textPosition === "right"
//             ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
//             : "hidden lg:block left-0 md:bg-gradient-to-r md:from-black/70 md:to-transparent"
//         }`}
//       />

//       {/* Text Content */}
//       {!(current.textPosition === "right") && (
//         <div className="lg:hidden absolute inset-0  bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
//       )}
//       <div
//         className={`absolute px-4 sm:px-6
//     ${
//       current.textPosition === "right"
//         ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
//         : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[50%]"
//     }
//     top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
//     text-white sm:w-1/2 max-lg:w-[85%] w-[60%] lg:w-[50%] max-w-none z-20
//     ${current.customClass ? current.customClass : ""}
//   `}
//       >
//         <h1
//           className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full  ${
//             current.textPosition === "right" ? "lg:ml-30" : ""
//           }`}
//         >
//           {current.title}
//           <br />
//           <span className="text-[#E1CD67]">{current.highlight}</span>
//         </h1>
//       </div>

//       {/* Slide Indicators */}
//       {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition duration-300 ${
//               index === currentSlide ? "bg-yellow-400" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div> */}

//       {/* Floating Vertical Buttons */}
//       <div className="flex absolute top-1/8 right-[22px] font-[500] h-full z-20 flex-col gap-30">
//         <div className="transform -rotate-90 origin-right">
//           <a
//             href="https://dmiher.edu.in/admissionform"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#122E5E] text-white text-sm px-6 py-4 inline-block"
//           >
//             Announcements
//           </a>
//         </div>
//         <div className="transform -rotate-90 origin-right">
//           <button
//             onClick={() => navigate("/admissions")}
//             className="bg-[#122E5E] text-white text-sm px-6 py-4"
//           >
//             Admission Enquiry
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroResearch;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ResearchBanner1 from "../../assets/ResearchBanner1.png";
import ResearchBanner2 from "../../assets/ResearchBanner2.png";
import ResearchBanner3 from "../../assets/ResearchBanner3.png";
import ResearchBannerMB1 from "../../assets/ResearchGrid/Banner1MB.jpg";
import ResearchBannerMB2 from "../../assets/ResearchGrid/Banner2MB.jpg";
import ResearchBannerMB3 from "../../assets/ResearchGrid/Banner3MB.jpg";

const slides = [
  {
    img: ResearchBanner2,
    imgMB: ResearchBannerMB2,
    title: "A BEACON OF RESEARCH,",
    highlight: "INNOVATION & ENTREPRENEURSHIP",
    textPosition: "right",
  },
  {
    img: ResearchBanner3,
    imgMB: ResearchBannerMB3,
    title: "ADVANCING EVIDENCE-CENTRIC,",
    highlight: "OUTCOME-ORIENTED INQUIRY.",
    textPosition: "left",
  },
  {
    img: ResearchBanner1,
    imgMB: ResearchBannerMB1,
    title: "PROMOTING PATIENT-CENTRIC,",
    highlight: "PRACTICE-LED RESEARCH.",
    textPosition: "right",
    customClass: "!lg:right-8 text-left md:!m-0 md:!w-[49vw]",
  },
];

const HeroResearch = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] md:mt-[-5px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Responsive Image */}
            <picture className="inset-0 w-full h-full">
              <source srcSet={slide.imgMB} media="(max-width: 768px)" />
              <img
                src={slide.img}
                alt="Research Banner"
                className="w-full h-full object-cover"
              />
            </picture>

            {/* Gradient Overlay */}
            <div
              className={`absolute top-0 bottom-0 w-full md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent ${
                slide.textPosition === "right"
                  ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
                  : "hidden lg:block left-0 md:bg-gradient-to-r md:from-black/70 md:to-transparent"
              }`}
            />

            {/* Text Content */}
            {!(slide.textPosition === "right") && (
              <div className="lg:hidden absolute inset-0 bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
            )}
            <div
              className={`absolute px-4 sm:px-6
                ${
                  slide.textPosition === "right"
                    ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
                    : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[50%]"
                }
                top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
                text-white sm:w-1/2 max-lg:w-[85%] w-[60%] lg:w-[50%] max-w-none z-20
                ${slide.customClass ? slide.customClass : ""}
              `}
            >
              <h1
                className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full ${
                  slide.textPosition === "right" ? "lg:ml-30" : ""
                }`}
              >
                {slide.title}
                <br />
                <span className="text-[#E1CD67]">{slide.highlight}</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Vertical Buttons */}
      <div className="flex absolute top-1/8 right-[22px] font-[500] h-full z-20 flex-col gap-30">
        <div className="transform -rotate-90 origin-right">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-4 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right">
          <button
            onClick={() => navigate("/admissions")}
            className="bg-[#122E5E] text-white text-sm px-6 py-4"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroResearch;
