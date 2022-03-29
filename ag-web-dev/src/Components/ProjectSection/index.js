import React from "react";
import { ProjectWrapper } from "./ProjectElements";
import { ProjectCard } from "./ProjectCard.js";
import { cardOneInfo } from "./data";
export const ProjectSection = () => {
  return (
    <ProjectWrapper>
      <ProjectCard {...cardOneInfo}/>
    </ProjectWrapper>
  );
};
