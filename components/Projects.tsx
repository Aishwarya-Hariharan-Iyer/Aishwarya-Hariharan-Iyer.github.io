import React from "react";
import { projectsData } from './data/projects-data';
import { ProjectCard } from "./ProjectCard";
import { Vortex } from "./ui/vortex";

const Projects = () => {
  return (
    <>
    <Vortex
    backgroundColor="transparent"
    particleCount={1000}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-2xl md:text-7xl font-bold text-white">
      <h1>
        Projects
      </h1>
    </Vortex>
    <div style={{
      width: '100%',
      overflowX: 'scroll',  // Always show the horizontal scrollbar
      padding: '20px 0',
      whiteSpace: 'nowrap', // Prevents cards from wrapping to a new line
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          desc={project.desc}
          details={project.details}
          skills={project.tools}
          imageSrc={project.imgSrc}
        />
      ))}
    </div>
    </>
  );
};

export default Projects;
