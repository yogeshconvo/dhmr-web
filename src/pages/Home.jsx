import React from "react";
import HeroSection from "../sections/Home/Hero";
import StatsSection from "../sections/Home/StatesSection";
import Outcome from "../sections/Home/Outcome";
import ProgramsComponent from "../sections/Home/Programs";
import Testimonials from "../sections/Home/Testimonials";

import ImportantAnnouncements from "../sections/Home/ImportantAnnouncement";
import TheBulletin from "../sections/Home/TheBulletin";
import ResearchInnovation from "../sections/Home/ResearchInnovation";
import CampusFacilities from "../sections/Home/CampusFacilities";
import FootprintSection from "../sections/Home/Footprints";
import Recognitions from "../sections/Home/Recognitions";
import TestimonialVideo from "../sections/Home/TestimonialVideo";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <Outcome />
      <ProgramsComponent />
      <Recognitions />
      <ResearchInnovation />
      <FootprintSection />
      <CampusFacilities />
      <TheBulletin />
      <ImportantAnnouncements />
      <Testimonials />
      <TestimonialVideo />
    </div>
  );
};

export default Home;
