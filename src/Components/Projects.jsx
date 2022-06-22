import React from "react";
import ProjectList from "../ProjectList";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
      <h3 id="projects-link" className="sm-section-header">
        See My Work
      </h3>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-map">
        {ProjectList.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              image={project.image}
              alt={project.alt}
              projectTitle={project.title}
              stack={project.stackUsed}
              description={project.description}
              demoHref={project.demo}
              codeHref={project.repo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
