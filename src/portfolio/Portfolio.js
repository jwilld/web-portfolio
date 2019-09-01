import React from "react";
import "./portfolio.css";
import ModalOverlay from "../modals/modal";

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
    let portfolioBox = portfolios.map((portfolio, i) => (
      <div key={i} onClick={this.handleShowModal} className="portfolio-box">
        {portfolio}
      </div>
    ));
    return (
      <div className="portfolio">
        <div>Projects</div>
        <div className="portfolio-grid">{portfolioBox}</div>
        <ModalOverlay show={this.state.showModal} 
                       exit={this.handleShowModal} />
      </div>
    );
  }
}
export default Portfolio;
