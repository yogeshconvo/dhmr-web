import React from "react";
import SDGResearchContributionsImg from "../../assets/SDGResearchContributions.png";

export default function SDGResearchContributions() {
  return (
    <section className="bg-[#e9f4fc] py-6 px-4 md:px-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-10">
        {/* Left Side Text - 20% width on md+ */}
        <div className="w-full md:ml-20 md:w-1/5 py-6 md:py-10 order-1 md:order-1 relative">
          <h2 className="text-4xl text-[#58595B] font-semibold">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            SDG'S
          </h2>
          <h1
            className="text-xl md:text-2xl text-[#58595B] leading-snug mt-4"
            style={{ fontFamily: '"Helvetica LT Std", Arial, sans-serif' }}
          >
            <span>DMIHER -</span> <br className="hidden md:block" />
            <span>Research</span> <br />
            <span>Contributions</span> <br className="hidden md:block" />
            <span>To Sustainable</span> <br />
            <span>Development</span> <br className="hidden md:block" />
            <span>Goals</span>
          </h1>
          <a
            href="#"
            className="text-blue-600 text-xs underline hover:text-blue-800 transition block md:static md:mt-10 absolute left-0 bottom-0 ml-2 md:ml-0"
            style={{
              // On mobile, position absolute at left bottom; on md+, static
              position: "absolute",
              left: 0,
              bottom: 0,
              marginLeft: "0.5rem",
            }}
          >
            Visit SDG to Know More
          </a>
        </div>

        {/* Right Side Image and Link - 80% width on md+ */}
        <div className="w-full md:w-4/5 p-0 order-2 md:order-2 flex flex-col items-center">
          <img
            src={SDGResearchContributionsImg}
            alt="SDG Research Contributions"
            className="w-[90%] object-contain object-center rounded-md"
            style={{ padding: 0, margin: 0 }}
          />
          {/* Single link visible on all screen sizes */}
          {/* <a
            href="#"
            className="text-blue-600 mt-6 underline hover:text-blue-800  transition block "
          >
            Visit SDG to Know More
          </a> */}
        </div>
      </div>
    </section>
  );
}
