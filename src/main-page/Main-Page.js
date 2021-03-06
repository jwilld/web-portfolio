import React from "react";
import { Route,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main-page.css";
import IconBar from "../icon-bar/Icon-Bar";
import Portfolio from "../portfolio/Portfolio";
import Blog from "../blog/Blog";
import MainNavBar from "../nav-bar/Nav-Bar";
import Home from "../home/Home"
import About from "../about/About"

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className='landing-redirect'>
        <Link to ='/'>
        <FontAwesomeIcon className='landing-icon'  icon='plane-arrival'/>
        </Link>
        </div>
        <div className="bottom-nav-container">
          <IconBar />
        </div>
        <MainNavBar className = "main-nav-bar" />
        <div className="nav-title">
          <span>Jerry Davidson</span>
        </div>
        <div className='bio-container-main'>
        <Route exact path='/main/about' component={About}/>
        </div>
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
