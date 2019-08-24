import React, { Component } from "react";
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import "./landing-page.css";
import JwillHover from "./jwill-hover/Jwill-Hover";
import DesignedHover from "./designed-hover/Designed-Hover"

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false
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
          <span className="designed-text"
          onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >Designed</span>
        </Link>
        <div className='background-container'>
          <CSSTransition in={this.state.hovering}
          timeout={750}
          classNames='display'
          unmountOnExit
          appear
          >
          <JwillHover/>
          </CSSTransition>
          <CSSTransition in={this.state.hovering}
          timeout={750}
          classNames='display'
          unmountOnExit
          appear
          >
          <DesignedHover className ='move-designed'/>
          </CSSTransition>

        </div>
 
          
      </div>
    );
  }
}

export default LandingPage;
