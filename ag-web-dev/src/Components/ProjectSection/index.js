import React from "react";
import { ProjectWrapper } from "./ProjectElements";
import { ProjectCard } from "./ProjectCard.js";
import { cardOneInfo, cardTwoInfo, cardThreeInfo, cardFourInfo } from "./data";
export const ProjectSection = () => {
  return (
    <ProjectWrapper>
      <ProjectCard {...cardOneInfo}/>
      <ProjectCard {...cardTwoInfo}/>
      <ProjectCard {...cardThreeInfo}/>
      <ProjectCard {...cardFourInfo}/>

    </ProjectWrapper>
  );
};
