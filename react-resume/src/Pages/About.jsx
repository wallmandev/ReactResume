//About.jsx

import React from 'react';
import './About.scss'

const About = (props) => {

  return (
    <div className="about-container">
      <h1 className="about-header">{props.header}</h1>

      <img className="about-image" src={props.img}/>
        
        <p className="about-paragraph">{props.paragraph}</p>
    </div>
  )
};

export default About;