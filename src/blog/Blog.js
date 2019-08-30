import React from "react";
import "./blog.css";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import axios from 'axios'


Modal.setAppElement('#root')

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            blogPosts: [
              {
                description:'',
                photos:[],
                post_url:'',
                title:''

              }
            ],
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
    componentDidMount = () =>{
        axios.get("http://127.0.0.1:8000/api/blogpost/").then(res => {
          this.setState({blogPosts:res.data})
        });
      }
  render() {
    console.log(this.state.blogPosts[0].photos[0])
    const blogs = this.state.blogPosts
    let blogBox = blogs.map((blog,i ) => (
      
      <div key = {i}onClick={this.handleShowModal} className="blog-box">
        <span>
          {blog.title}
        </span>
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
