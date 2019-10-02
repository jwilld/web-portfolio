import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./landing-page.css";
import JwillHover from "./jwill-hover/Jwill-Hover";
import DesignedHover from "./designed-hover/Designed-Hover";
import IconBar from '../icon-bar/Icon-Bar'
import IconLoop from '../text-loop/icon-loop.js'


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
        <div className='title-container'>
          <div className='welcome-message'>
            Hey I'm
          </div>
          <div className="jwill-designed-title">
            {/* {JwillDesignedTitle} */}
            <div className='landing-name-title'>
              <span
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                className="jwill-text"
              >
                Jerry
          </span>
              <span
                className="designed-text"
                onMouseEnter={this.handleMouseHoverTwo}
                onMouseLeave={this.handleMouseHoverTwo}
              >
                &nbsp;Davidson
          </span>
            </div>
          </div>
          <div className='web-developer'>
            a web developer!
          </div>
        </div>
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
            <DesignedHover />
          </CSSTransition>

        </div>

        <div className='landing-enter-container'>

            <Link className='landing-enter' to="/main/about" >Enter</Link>

        </div>

        <IconBar />
        <IconLoop />
      </div>
    );
  }
}

export default LandingPage;
