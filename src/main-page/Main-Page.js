import React from "react";
import LandingPage from "../landing-page/Landing-Page";
import "./main-page.css";
import IconBar from "../icon-bar/Icon-Bar";

class MainPage extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <div className="bottom-nav-container">
          <IconBar className="nav-icon-bar" />
        </div>
          <h1>Main Page</h1>
      </div>
    );
  }
}

export default MainPage;
