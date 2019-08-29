import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="bio-container">
          <div className="bio-photo"></div>
        </div>
        <div className="bio-name">
          <p>Jerry Davidson</p>
        </div>
          <div clasName='.bio-text'>
            <p>
              bio Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore nisi perspiciatis optio, architecto, cum at ex asperiores
              quidem autem provident, voluptas dolorem? Cupiditate fugit velit
              rem sint iure nesciunt et.
            </p>
          </div>
      </div>
    );
  }
}

export default About;
