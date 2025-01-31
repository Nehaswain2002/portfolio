import React from 'react';
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Projects_Data from '../../assets/Project.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Project = () => {
  return (
    <div id='projects' className="projects">
      <div className="project-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="project-container">
        {Projects_Data.map((project, index) => (
          <div key={index} className="project-format">
            <h1>{project.s_no}</h1>
            <h3>{project. s_name}</h3>
            <p>{project.s_desc}</p>
            <div className="project-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
