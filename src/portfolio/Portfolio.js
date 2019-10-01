import React from "react";
import "./portfolio.css";
import ModalOverlay from "../modals/modal";
import axios from "axios";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      showModal: false,
      projectPosts: [
        {
          description: "Loading...",
          photos: [],
          post_url: "Loading...",
          title: "Loading...",
          github_url: "Loading..."
        }
      ],
      description: "Loading...",
      title:"Loading...",
      post_url:"Loading...",
      url:"loading...",
      github_url:'loading...',
      photo:'loading...',


    };
  }
  handleShowModal = (description,title,post_url,github,photo) => {
    this.setState(this.toggleShowModal);
    if (this.state.showModal === false) {
      this.setState({
        description: description,
        title: title,
        post_url:post_url,
        github_url:github,
        photo: photo
      });
    }
  };
  toggleShowModal = state => {
    return {
      showModal: !state.showModal
    };
  };
  componentDidMount = () => {
    axios
      .get("https://jerrydback.herokuapp.com/api/projectpost/?format=json")
      .then(res => {
        this.setState({ projectPosts: res.data,loading:false });

      })
      .catch(e => console.log(e));
    };

  render() {
    let portfolios = this.state.projectPosts;
    let portfolioBox = portfolios.map((portfolio, i) => (
      <div key={i} onClick={() => this.handleShowModal(
      portfolio.description,
      portfolio.title,
      portfolio.post_url,
      portfolio.github_url,
      portfolio.photo)} className="portfolio-box">
        {portfolio.title}
      </div>
    ));
    return (
      <div className="portfolio">
        <h1>Projects</h1>
        { this.state.loading === true ?
        <div className="portfolio-grid grid-animate">{portfolioBox}</div>
        :
        <div className="portfolio-grid">{portfolioBox}</div>
        }
        <ModalOverlay 
          show={this.state.showModal}
          exit={this.handleShowModal}
          des={this.state.description}
          title={this.state.title}
          postLink={this.state.post_url}
          photo={this.state.photo}
          github_url={this.state.github_url}
        />
      </div>
    );
  }
}
export default Portfolio;
