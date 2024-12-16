import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-item">
        <img src="/image1.png" alt="Project 1" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
        <p>Project 1 description goes here.</p>
      </div>
      <div className="project-item">
        <img src="/image2.png" alt="Project 2" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
        <p>Project 2 description goes here.</p>
      </div>
      <div className="project-item">
        <img src="/image3.jpg" alt="Project 3" style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
        <p>Project 3 description goes here.</p>
      </div>
    </div>
  );
}

export default Projects;
