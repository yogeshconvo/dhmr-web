import React from "react";
import HeroSection from "../sections/Programs/HeroProgram";
import ImportantContacts from "../sections/Programs/ImportantContacts";
import LearningEcosystem from "../sections/Programs/LearningEcosystem";
import ProgramsComponent from "../sections/Programs/Programs";
import SecondHeroSection from "../sections/Programs/HeroProgram";

import SecondHPage from "../sections/Programs/ProgramHero2";
const Program = () => {
  return (
    <div>
      <SecondHeroSection />
      <LearningEcosystem />
      <ProgramsComponent />
      <ImportantContacts />
      <SecondHPage />
    </div>
  );
};

export default Program;
