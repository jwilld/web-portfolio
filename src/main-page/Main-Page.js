import React from "react";
import { Route } from 'react-router-dom'
import LandingPage from "../landing-page/Landing-Page";
import "./main-page.css";
import IconBar from "../icon-bar/Icon-Bar";
import Portfolio from "../portfolio/Portfolio"

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="bottom-nav-container">
          <IconBar/>
        </div>
        <div className='nav-title
        '>
        </div>
        <div className='portfolio-container'>
        <Route exact path='/main/portfolio' component={Portfolio}/>

        </div>
      </div>
    );
  }
}

export default MainPage;
