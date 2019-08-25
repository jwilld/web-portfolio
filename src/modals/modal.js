import React from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";

Modal.setAppElement('#root')

class ModalOverlay extends React.Component {
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
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="box overlay example"
        >
          <button onClick={this.handleShowModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default ModalOverlay;
