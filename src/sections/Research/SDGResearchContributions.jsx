import React from "react";
import SDGResearchContributionsImg from "../../assets/SDGResearchContributions.png";

export default function SDGResearchContributions() {
  return (
    <section className="bg-[#e9f4fc] py-6 px-4 md:px-12 font-oswald-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-10 items-center md:items-start">
        {/* Left Side Text - 20% width on md+ */}
        <div className="w-full md:w-1/5 py-6 md:py-10">
          <h2 className="text-4xl font-semibold">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            SDG'S
          </h2>
          <h1 className="text-xl md:text-2xl text-gray-800 font-light leading-snug mt-4">
            DMIHER - <br />
            Research <br />
            Contributions <br />
            To Sustainable <br />
            Development <br />
            Goals
          </h1>
          <a
            href="#"
            className="text-blue-600 mt-10 inline-block underline hover:text-blue-800 transition"
          >
            Visit SDG to Know More
          </a>
        </div>

        {/* Right Side Image - 80% width on md+ */}
        <div className="w-full md:w-4/5">
          <img
            src={SDGResearchContributionsImg}
            alt="SDG Research Contributions"
            className="w-full h-auto object-contain object-center rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
