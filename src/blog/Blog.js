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
      description: "",
      current: ""
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

  blogSearch = event => {
    this.setState({ current: event.target.value.toLowerCase() });
  };

  componentDidMount = () => {
    axios
      .get("http://jerrydback.herokuapp.com/api/blogpost/?format=json")
      .then(res => {
        console.log(res);
        this.setState({ blogPosts: res.data });
      })
      .catch(e => console.log(e));
  };
  render() {
    // const blogs = this.state.blogPosts;
    // let blogBox = blogs.map((blog, i) => (
    //   <div
    //     key={i}
    //     onClick={() =>
    //       this.handleShowModal(blog.description, blog.title, blog.post_url)
    //     }
    //     className="blog-box"
    //   >
    //     <span>{blog.title}</span>
    //   </div>
    // ));
    return (
      <div className="blog-container">
        <h1>Blog</h1>
        <div>
          <input
            placeholder="search for a blog post"
            className="blog-input"
            type="text"
            name=""
            onChange={this.blogSearch}
          />
          <div className="search-box">
            {this.state.blogPosts.map((post, i) => {
              if (post.title !== undefined) {
                if (post.title.toLowerCase().includes(this.state.current)) {
                  return (
                    <div
                      key={i}
                      onClick={() =>
                        this.handleShowModal(
                          post.description,
                          post.title,
                          post.post_url
                        )
                      }
                      className="blog-box"
                    >
                      <span>{post.title}</span>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
        <ModalOverlay
          show={this.state.showModal}
          exit={this.handleShowModal}
          des={this.state.description}
          title={this.state.title}
          postLink={this.state.post_url}
        />
      </div>
    );
  }
}

export default Blog;
