import React from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

Modal.setAppElement("#root");

class ModalOverlay extends React.Component {
  render() {
    return (
      <div className='modal-grid'>
        <CSSTransition
          in={this.props.show}
          timeout={750}
          classNames="modal-box"
          unmountOnExit
          appear
        >

          <Modal className='modal-overlay' isOpen={true} contentLabel="test-modal">
            <div className='modal-grid'>
              <div className='title-link-container'>
                <div className='exit-container'>
                <button className="modal-exit-button" onClick={this.props.exit}>
                  {" "}
                  Exit View
            </button>

                </div>
                <h2>{this.props.title}</h2>
                <a className='production-link'
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.postLink}
                >
                  View {this.props.title}
                </a>

              </div>
              <div className='description-container'>

                <article>{this.props.des}</article>
              </div>
              <div className='github-link-container'>
                <a className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.github_url}
                >
                  View Github Repository
              </a>
              </div>
              <div className='image-container'>
                <img className='modal-image' alt='' src={this.props.photo} />
              </div>

            </div>
          </Modal>
        </CSSTransition>
      </div>
    );
  }
}

export default ModalOverlay;
