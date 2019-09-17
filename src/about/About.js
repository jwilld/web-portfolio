import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="bio-container">
          <div className="bio-photo"></div>
        </div>
        <div className='bio-text'>
          <p>
            My creative mind, constant need for progression and ability to handle challenges are necessary to traverse the world of software engineering. Any problem can be solved, the question is “how?”.
            </p>
        </div>
        <div>
          <a  className='resume-link' 
          href='https://docs.google.com/document/d/1ec650FAwyhkrB83kmnincVdIz2GTJxGt7NvCIliYgjk/edit?usp=sharing'
          target='_blank'>
            <span className='read-more'>Resume</span></a>
        </div>
      </div>
    );
  }
}

export default About;
