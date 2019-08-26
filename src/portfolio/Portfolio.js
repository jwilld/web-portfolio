import React from "react";
import "./portfolio.css";import { statement } from "@babel/template";

import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

Modal.setAppElement('#root')

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }
    handleShowModal = () => {
        this.setState(this.toggleShowModal);
    };
    toggleShowModal = state => {
        return {
            showModal: !state.showModal
        };
    };
    render() {
        const portfolios = ["", "", "", "", "", ""];
        let portfolioBox = portfolios.map(portfolio => (
            <div onClick={this.handleShowModal} className="portfolio-box">
        {portfolio}
      </div>
    ));
    return (
        <div className="portfolio">
        <div>Projects</div>
        <div className="portfolio-grid">{portfolioBox}</div>

        <CSSTransition
        in={this.state.showModal}
        timeout={750}
        classNames='modal-box'
        unmountOnExit
        appear

        >
        <Modal isOpen={true} contentLabel="test-modal">
          <button onClick={this.handleShowModal}> Exit View</button>
        </Modal>

        </CSSTransition>

      </div>
    );
}
}
export default Portfolio;