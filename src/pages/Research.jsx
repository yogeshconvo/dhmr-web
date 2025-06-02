import React from "react";
import HeroResearch from "../sections/Research/HeroResearch";
import ResearchPage from "../sections/Research/ResearchPage";
import ResearchHighlights from "../sections/Research/ResearchHighlights";
import TheEdge from "../sections/Research/TheEdge";
import ResearchOpportunities from "../sections/Research/ResearchOpportunities";

import ResearchGrid from "../sections/Research/ResearchGrid";
import FundedProjects from "../sections/Research/FundedProjects";
import ResearchEcosystem from "../sections/Research/ResearchEcosystem";
import SDGResearchContributions from "../sections/Research/SDGResearchContributions";

const Research = () => {
  return (
    <div>
      <HeroResearch />
      <ResearchPage />
      <ResearchHighlights />
      <ResearchGrid />
      <ResearchEcosystem />
      <TheEdge />
      <SDGResearchContributions />
      <ResearchOpportunities />
      <FundedProjects />
    </div>
  );
};

export default Research;
