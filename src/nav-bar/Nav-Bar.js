import React from "react";
import "./Nav-Bar.css";
import { Link } from "react-router-dom";

class MainNavBar extends React.Component {
  render() {
    const menuItems = [ "About", "Portfolio", "Blog"];
    let menuBar = menuItems.map((item, key) => (
      <Link key={key} to={`/main/${item}`} className="nav-menu-item">
        <span key={key}>{item}</span>
      </Link>
    ));
    return (
      <div className="main-nav-bar">
        <div className="nav-bar-container">{menuBar}</div>
      </div>
    );
  }
}

export default MainNavBar;
