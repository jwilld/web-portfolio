import React from "react";
import "./blog.css";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";


Modal.setAppElement('#root')

class Blog extends React.Component {
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
    const blogs = ["", "", "", "", "", ""];
    let blogBox = blogs.map((blog,i ) => (
      <div key = {i}onClick={this.handleShowModal} className="blog-box">
        {blog}
      </div>
    ));
    return (
      <div className='blog-container'>
        <h1>Blog</h1>
        <div>
          <input placeholder='search for a blog post' className='blog-input' type="text" name="" />
          <div className="search-box">{blogBox}</div>
          <CSSTransition
        in={this.state.showModal}
        timeout={750}
        classNames='modal-box'
        unmountOnExit
        appear

        >
        <Modal isOpen={true} contentLabel="test-modal">
          <button className='modal-exit-button' onClick={this.handleShowModal}> Exit View</button>
        </Modal>

        </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Blog;
