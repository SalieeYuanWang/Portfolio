/* AboutMe.js */
import React from 'react';

function AboutMe() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/profilepic.jpg" alt="profile" className="profile-pic" />
      <p>My name is Sally Wang, I'm currently a student in Software Engineering Technician program at Centennial College.</p>
      <a href="\Sally_Yuan_Wang_CV.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
    </div>
  );
}

export default AboutMe;
