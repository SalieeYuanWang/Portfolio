/* Home.js */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Sally Yuan Wang's site</h1>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;
