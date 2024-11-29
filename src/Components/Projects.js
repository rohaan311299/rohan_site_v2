import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";
import projectsData from "../Data/Projects.json"; // Your JSON file with project data

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); // Load project data from JSON
  }, []);

  return (
    <section className="image-gallery" id = "projects">
      <h2 className="section-title">Projects</h2>
      <div className="gallery-container">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
