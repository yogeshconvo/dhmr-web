import React from "react";
import EducationEnquiryPage from "../sections/Admissions/HeroAdmissions";
import ProgramsGrid from "../sections/Admissions/ProgramsGrid";
import HolisticLearning from "../sections/Admissions/HolisticLearning";
import WhyStudySection from "../sections/Admissions/WhyStudySection";
import CampusLife from "../sections/Admissions/CampusLife";
import FeatureCards from "../sections/Admissions/FeatureCards";
import InternationalCollaborations from "../sections/Admissions/InternationalCollaborations";
import StepsPage from "../sections/Admissions/StepsPage";
import DownloadBrochureButton from "../sections/Admissions/DownloadBrochureButton";

const Admissions = () => {
  return (
    <div>
      <EducationEnquiryPage />
      <ProgramsGrid />
      <WhyStudySection />
      <HolisticLearning />
      <InternationalCollaborations />
      <FeatureCards />
      <StepsPage />
      <DownloadBrochureButton />
      <CampusLife />
    </div>
  );
};

export default Admissions;
