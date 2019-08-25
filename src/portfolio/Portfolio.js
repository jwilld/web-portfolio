import React from "react";
import './portfolio.css'

class Portfolio extends React.Component {
  render() {
    const portfolios = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    let portfolioBox = portfolios.map(portfolio => (
      <div className="portfolio-box">{portfolio}</div>
    ));
    return (
      <div className="portfolio">
        <div>Projects</div>
        <div className="portfolio-grid">{portfolioBox}</div>
      </div>
    );
  }
}
export default Portfolio;
