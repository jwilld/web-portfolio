import React from "react";
import { Route } from "react-router-dom";
import "./main-page.css";
import IconBar from "../icon-bar/Icon-Bar";
import Portfolio from "../portfolio/Portfolio";
import Blog from "../blog/Blog";
import MainNavBar from "../nav-bar/Nav-Bar";
import Home from "../home/Home"

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="bottom-nav-container">
          <IconBar />
        </div>
        <MainNavBar />
        <div
          className="nav-title
        "
        ></div>
        <div className="portfolio-container">
          <Route exact path="/main/portfolio" component={Portfolio} />
          <Route exact path="/main/blog" component={Blog} />
          <Route exact path="/main/home" component={Home}/>
        </div>
      </div>
    );
  }
}

export default MainPage;
