import React from "react";
import "./Nav-Bar.css";

class MainNavBar extends React.Component {
  render() {
    return (
      <div className = 'main-nav-bar'>
        <div className ='nav-bar-container'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Blog</h1>
          <h1>Portfolio</h1>
        </div>
      </div>
    );
  }
}

export default MainNavBar;
