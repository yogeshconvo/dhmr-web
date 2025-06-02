import React from "react";
import HeroSPDC from "../sections/SPDC/HeroSPDC";
import SPDCHInfoSection from "../sections/SPDC/SPDCHInfoSection";
import WhyChooseSpdch from "../sections/SPDC/WhyChooseSpdch";
import DeansMessage from "../sections/SPDC/DeansMessage";
import ProgramsSection from "../sections/SPDC/ProgramsSection";
import SPDCSection from "../sections/SPDC/SPDCSection";
import InfrastructurePage from "../sections/SPDC/InfrastructurePage";
import DentalEducationTabs from "../sections/SPDC/DentalEducationTabs";
import OurDepartment from "../sections/SPDC/OurDepartments";
import StudentLife from "../sections/SPDC/StudentLife";
import ResearchCollaborations from "../sections/SPDC/ResearchCollaborations";
import Placements from "../sections/SPDC/Placements";
import TestimonialSPDC from "../sections/SPDC/TestimonialSPDC";

const SPDC = () => {
  return (
    <div>
      <HeroSPDC />
      <SPDCHInfoSection />
      <WhyChooseSpdch />
      <DeansMessage />
      <ProgramsSection />
      <SPDCSection />
      <InfrastructurePage />
      <DentalEducationTabs />
      <OurDepartment />
      <ResearchCollaborations />
      <Placements />
      <StudentLife />
      <TestimonialSPDC />
    </div>
  );
};

export default SPDC;
