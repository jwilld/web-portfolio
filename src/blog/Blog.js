import React from "react";
import "./blog.css";
import axios from "axios";
import ModalOverlay from "../modals/modal";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      blogPosts: [
        {
          description: "",
          photos: [],
          post_url: "",
          title: ""
        }
      ],
      description: ""
    };
  }

  handleShowModal = description => {
    this.setState(this.toggleShowModal);
    if (this.state.showModal === false) {
      this.setState({
        description: description
      });
    }
  };

  toggleShowModal = state => {
    return {
      showModal: !state.showModal
    };
  };
  componentDidMount = () => {
    axios.get("http://127.0.0.1:8000/api/blogpost/").then(res => {
      this.setState({ blogPosts: res.data });
    });
  };
  render() {
    const blogs = this.state.blogPosts;
    let blogBox = blogs.map((blog, i) => (
      <div
        key={i}
        onClick={() => this.handleShowModal(blog.description)}
        className="blog-box"
      >
        <span>{blog.title}</span>
      </div>
    ));
    return (
      <div className="blog-container">
        <h1>Blog</h1>
        <div>
          <input
            placeholder="search for a blog post"
            className="blog-input"
            type="text"
            name=""
          />
          <div className="search-box">{blogBox}</div>
        </div>
        <ModalOverlay
          show={this.state.showModal}
          exit={this.handleShowModal}
          des={this.state.description}
        />
      </div>
    );
  }
}

export default Blog;
