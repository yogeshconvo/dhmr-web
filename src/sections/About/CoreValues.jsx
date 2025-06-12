// import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { ArrowLeft, ArrowRight } from "lucide-react";

// import purposeDrivenExcellence from "../../assets/About/CoreValues/Purpose.png";
// import compassionWithCompetence from "../../assets/About/CoreValues/compassion.png";
// import integrityInInnovation from "../../assets/About/CoreValues/innovation.png";
// import collaborationForImpact from "../../assets/About/CoreValues/united.png";
// import equityInAccessAndAction from "../../assets/About/CoreValues/scientific.png";

// const coreValues = [
//   {
//     number: "1",
//     title: "Purpose-Driven Excellence",
//     description:
//       "We pursue excellence with clarity of purpose—grounded in evidence, inspired by impact.",
//     image: purposeDrivenExcellence,
//   },
//   {
//     number: "2",
//     title: "Compassion with Competence",
//     description:
//       "We nurture professionals who blend knowledge with empathy, serving humanity with heart and skill.",
//     image: compassionWithCompetence,
//   },
//   {
//     number: "3",
//     title: "Integrity in <br/> Innovation",
//     description:
//       "We lead with curiosity and act with conscience—ensuring our innovations uphold ethics and elevate society.",
//     image: integrityInInnovation,
//   },
//   {
//     number: "4",
//     title: "Collaboration for Impact",
//     description:
//       "We break silos and build bridges—across disciplines, communities, and borders—to multiply our contribution.",
//     image: collaborationForImpact,
//   },
//   {
//     number: "5",
//     title: "Equity in Access and Action",
//     description:
//       "We believe progress must be inclusive. From rural healthcare to global research, we act where we are needed most.",
//     image: equityInAccessAndAction,
//   },
// ];

// const CoreValues = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const renderSlide = (value) => (
//     <div className="flex max-w-5xl items-start w-full p-4 h-full">
//       <div
//         className="flex-shrink-0 mt-30 font-[300] w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#58595B] opacity-40 text-white flex items-center justify-center text-xl md:text-4xl mr-4 font-['Oswald']"
//         style={{
//           font: "normal normal normal 62px/32px",
//           fontFamily:
//             "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
//         }}
//       >
//         {value.number}
//       </div>
//       <div>
//         <img
//           src={value.image}
//           alt={value.title}
//           className="mb-4 max-h-24 md:max-h-28 w-auto object-contain"
//         />
//         <h3
//           className="text-lg md:text-xl text-[#F04E30] mb-2"
//           style={{
//             fontFamily: "'Helvetica LT Std', sans-serif",
//             fontWeight: "700",
//             fontStretch: "condensed",
//           }}
//           dangerouslySetInnerHTML={{ __html: value.title }}
//         ></h3>

//         <p className=" text-xs leading-relaxed">{value.description}</p>
//       </div>
//     </div>
//   );

//   const slickSettings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-gray-100 py-12 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header row */}
//         <div className="flex justify-between mb-8">
//           <div className="flex-grow">
//             <h2 className="text-3xl font-[500]  text-[#707070] font-oswald-medium  tracking-wide">
//               <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
//               CORE VALUES
//             </h2>
//           </div>

//           {/* Hide arrows in mobile */}
//           {!isMobile && (
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={() => {
//                   sliderRef.current?.slickPrev();
//                 }}
//                 className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
//               >
//                 <ArrowLeft size={20} />
//               </button>
//               <button
//                 onClick={() => {
//                   sliderRef.current?.slickNext();
//                 }}
//                 className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
//               >
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Slider or Column view */}
//         {isMobile ? (
//           // Column layout on mobile
//           <div className="flex flex-col space-y-6">
//             {coreValues.map((value) => (
//               <div key={value.number}>{renderSlide(value)}</div>
//             ))}
//           </div>
//         ) : (
//           // Slider on desktop
//           <Slider ref={sliderRef} {...slickSettings}>
//             {coreValues.map((value) => (
//               <div key={value.number}>{renderSlide(value)}</div>
//             ))}
//           </Slider>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CoreValues;
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowLeft, ArrowRight } from "lucide-react";

import purposeDrivenExcellence from "../../assets/About/CoreValues/Purpose.png";
import compassionWithCompetence from "../../assets/About/CoreValues/compassion.png";
import integrityInInnovation from "../../assets/About/CoreValues/innovation.png";
import collaborationForImpact from "../../assets/About/CoreValues/united.png";
import equityInAccessAndAction from "../../assets/About/CoreValues/scientific.png";

const coreValues = [
  {
    number: "1",
    title: "Purpose-Driven Excellence",
    description:
      "We pursue excellence with clarity of purpose—grounded in evidence, inspired by impact.",
    image: purposeDrivenExcellence,
  },
  {
    number: "2",
    title: "Compassion with Competence",
    description:
      "We nurture professionals who blend knowledge with empathy, serving humanity with heart and skill.",
    image: compassionWithCompetence,
  },
  {
    number: "3",
    title: "Integrity in <br/> Innovation",
    description:
      "We lead with curiosity and act with conscience—ensuring our innovations uphold ethics and elevate society.",
    image: integrityInInnovation,
  },
  {
    number: "4",
    title: "Collaboration for Impact",
    description:
      "We break silos and build bridges—across disciplines, communities, and borders—to multiply our contribution.",
    image: collaborationForImpact,
  },
  {
    number: "5",
    title: "Equity in Access and Action",
    description:
      "We believe progress must be inclusive. From rural healthcare to global research, we act where we are needed most.",
    image: equityInAccessAndAction,
  },
];

const CoreValues = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fix: Ensure first slide shows
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    });

    return () => clearTimeout(timer);
  }, []);

  const renderSlide = (value) => (
    <div className="flex max-w-5xl items-start w-full p-4 h-full">
      <div
        className="flex-shrink-0 mt-30 font-[300] w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#58595B] opacity-40 text-white flex items-center justify-center text-xl md:text-4xl mr-4 font-['Oswald']"
        style={{
          font: "normal normal normal 62px/32px",
          fontFamily:
            "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        {value.number}
      </div>
      <div>
        <img
          src={value.image}
          alt={value.title}
          className="mb-4 max-h-24 md:max-h-28 w-auto object-contain"
        />
        <h3
          className="text-lg md:text-xl text-[#F04E30] mb-2"
          style={{
            fontFamily: "'Helvetica LT Std', sans-serif",
            fontWeight: "700",
            fontStretch: "condensed",
          }}
          dangerouslySetInnerHTML={{ __html: value.title }}
        ></h3>

        <p className=" text-xs leading-relaxed">{value.description}</p>
      </div>
    </div>
  );

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between mb-8">
          <div className="flex-grow">
            <h2 className="text-3xl font-[500]  text-[#707070] font-oswald-medium  tracking-wide">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              CORE VALUES
            </h2>
          </div>

          {/* Hide arrows in mobile */}
          {!isMobile && (
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  sliderRef.current?.slickPrev();
                }}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => {
                  sliderRef.current?.slickNext();
                }}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Slider or Column view */}
        {isMobile ? (
          // Column layout on mobile
          <div className="flex flex-col space-y-6">
            {coreValues.map((value) => (
              <div key={value.number}>{renderSlide(value)}</div>
            ))}
          </div>
        ) : (
          // Slider on desktop
          <Slider ref={sliderRef} {...slickSettings}>
            {coreValues.map((value) => (
              <div key={value.number}>{renderSlide(value)}</div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default CoreValues;
