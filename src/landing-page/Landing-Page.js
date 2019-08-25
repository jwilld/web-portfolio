import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./landing-page.css";
import JwillHover from "./jwill-hover/Jwill-Hover";
import DesignedHover from "./designed-hover/Designed-Hover";
import IconBar from '../icon-bar/Icon-Bar'

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
    return (
      <div className="landing-container">
        <Link to="/" className="jwill-designed-title">
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
