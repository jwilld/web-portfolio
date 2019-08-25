import React, { Component } from "react";
import { Route,Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./landing-page.css";
import JwillHover from "./jwill-hover/Jwill-Hover";
import DesignedHover from "./designed-hover/Designed-Hover";
import IconBar from '../icon-bar/Icon-Bar'
import MainPage from '../main-page/Main-Page'

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
      hoveringTwo: false
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState(state) {
    return {
      hovering: !state.hovering
    };
  }
  handleMouseHoverTwo = () => {
    this.setState(this.toggleHoverStateTwo);
  };

  toggleHoverStateTwo(state) {
    return {
      hoveringTwo: !state.hoveringTwo
    };
  }
  render() {
//     const landingTitleParts = ['JWill','Designed']
//     const handlers = [this.handleMouseHover,this.state.handleMouseHoverTwo]

//     let JwillDesignedTitle =
//     landingTitleParts.map((part,i)  => { 
//       return(
//       <span onMouseEnter = {handlers[i]}
//             onMouseLeave = {handlers[i]}
//             className = { `${part.toLowerCase()}-text`}
//       >{part}</span>
//       )
//     }
// )

    return (
      <div className="landing-container">
        <Link to="/" className="jwill-designed-title">
        {/* {JwillDesignedTitle} */}
          <span
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            className="jwill-text"
          >
            JWill
          </span>
          <span
            className="designed-text"
            onMouseEnter={this.handleMouseHoverTwo}
            onMouseLeave={this.handleMouseHoverTwo}
          >
            Designed
          </span>
        </Link>
        <IconBar/>
        <div className="background-container">
          <CSSTransition
            in={this.state.hovering}
            timeout={750}
            classNames="display"
            unmountOnExit
            appear
          >
            <JwillHover />
          </CSSTransition>
          <CSSTransition
            in={this.state.hoveringTwo}
            timeout={750}
            classNames="display"
            unmountOnExit
            appear
          >
            <DesignedHover/>
          </CSSTransition>
          
        </div>


      </div>
    );
  }
}

export default LandingPage;
