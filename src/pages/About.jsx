import React from "react";
import HeroAbout from "../sections/About/HeroAbout";
import DMIHERJourney from "../sections/About/DMIHERJourney";
import VisionMissionSection from "../sections/About/VisionMissionSection";
import ExcellenceSection from "../sections/About/ExcellenceSection";
import HolisticLearningPage from "../sections/About/HolisticLearningPage";
import CoreValues from "../sections/About/CoreValues";
import AboutGrid from "../sections/About/AboutGrid";
import OneHealth from "../sections/About/OneHealth";
import Gallery from "../sections/About/Gallery";
import SDGSection from "../sections/About/SDGSection";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <ExcellenceSection />
      <VisionMissionSection />
      <CoreValues />
      <AboutGrid />
      <DMIHERJourney />
      <OneHealth />
      <HolisticLearningPage />
      <SDGSection />
      <Gallery />
    </div>
  );
};

export default About;
