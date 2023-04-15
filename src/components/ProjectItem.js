import React from "react";

function ProjectItem({ name, about, technologies }) {
  const newTechnologies = technologies.map(techObj=>{
    return <span key = {techObj.toString()}>{techObj}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {newTechnologies}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
