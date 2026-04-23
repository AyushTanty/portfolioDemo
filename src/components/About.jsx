import React from 'react';
import profile from '/profile.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        
        <img src={profile} alt="profile" className="profile-img" />

        <div className="about-text">
          <h2>Ayush Tanty</h2>
          <p>
            I am a B.Tech student specializing in AI & ML, passionate about 
            web development, problem solving, and building modern UI experiences.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;