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
      </div>
    );
  }
}

export default About;
