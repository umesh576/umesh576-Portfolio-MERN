import React from "react";

const ProjectName = ({ projects }) => {
  return (
    <div className="inline">
      <h1>{projects.name}</h1>
      <br />
    </div>
  );
};

export default ProjectName;
