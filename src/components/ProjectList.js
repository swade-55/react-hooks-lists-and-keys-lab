import React from "react";
import ProjectItem from "./ProjectItem";
import About from "./About";

function ProjectList({ projects }) {
  const newProjects = projects.map(projectObj=>{
    return <ProjectItem 
              key = {projectObj.id} 
              about={projectObj.about}
              name = {projectObj.name}
              technologies = {projectObj.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {newProjects}
        </div>
    </div>
  );
}

export default ProjectList;
