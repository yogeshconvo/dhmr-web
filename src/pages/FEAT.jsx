import React from "react";
// import HeroFEAT from "../sections/FEAT/HeroFEAT";
import FEATInfoSection from "../sections/FEAT/FEATInfoSection";
import EducationUnitTabs from "../sections/FEAT/EducationUnit";
import InfrastructurePageFEAT from "../sections/FEAT/InfrastructurePage";
import DeansMessageFEAT from "../sections/FEAT/DeanMessage";
import WhyChooseFEAT from "../sections/FEAT/WhyChooseFEAT";

const FEAT = () => {
  return (
    <div>
      {/* <HeroFEAT /> */}
      <FEATInfoSection />
      <WhyChooseFEAT />
      <EducationUnitTabs />
      <InfrastructurePageFEAT />
      <DeansMessageFEAT />
    </div>
  );
};

export default FEAT;
