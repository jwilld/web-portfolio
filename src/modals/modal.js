import React from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import './modal.css'

Modal.setAppElement("#root");

class ModalOverlay extends React.Component {
  render() {
    return (
      <div>
        <CSSTransition
          in={this.props.show}
          timeout={750}
          classNames="modal-box"
          unmountOnExit
          appear
        >
          <Modal isOpen={true} contentLabel="test-modal">
            <button
              className="modal-exit-button"
              onClick={this.props.exit}
            >
              {" "}
              Exit View
            </button>
            <p>{this.props.des}</p>
          </Modal>
        </CSSTransition>
      </div>
    );
  }
}

export default ModalOverlay;
