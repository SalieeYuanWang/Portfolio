/* AboutMe.js */
import React from 'react';

function AboutMe() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/profilepic.jpg" alt="Sally Yuan Wang" className="profile-pic" />
      <p>My name is Sally Wang, I'm currently a student in the Software Engineering Technician program at Centennial College. I am from China.</p>
      <a href="/Sally Wang CV.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
    </div>
  );
}

export default AboutMe;
