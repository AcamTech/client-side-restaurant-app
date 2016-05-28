import React, {PropTypes, createClass} from 'react';
import ReactModal from 'react-modal';

var modalStyle = {
  overlay : {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(48, 50, 52, 0.5)',
    zIndex: '9999'
  },
  content : {
    position : 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '0px'
  }
};

const Modal = createClass({
  displayName: 'modal',
  propTypes: {
    isOpen: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  },
  getDefaultProps(){
    return {
      className: ''
    };
  },
  closeModal() {
    this.props.onCloseHandler();
  },
  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        style={modalStyle}>
        <div className={`modal-container ${this.props.className}`} onClick={this.closeModal}>
          <div onClick={(e) => e.stopPropagation()} className="modal-window">
            <span onClick={this.closeModal} className="modal-window__close-btn">&times;</span>
            {this.props.children}
          </div>
        </div>
      </ReactModal>
    );
  }
});

export default Modal;
