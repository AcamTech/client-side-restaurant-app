import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

var modalStyle = {
  overlay: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1042',
    overflow: 'hidden',
    position: 'fixed',
    background: 'rgba(48, 50, 52, 0.5)'
  },
  content: {
    background: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1043,
    position: 'fixed',
    padding: 0,
    outline: 0,
    WebkitBackfaceVisibility: 'hidden'
  }
};

class Modal extends Component {
  static displayName = 'modal';
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };
  getDefaultProps() {
    return {
      className: ''
    };
  }
  closeModal() {
    this.props.onCloseHandler();
  }
  render() {
    var close = (
      <span
        key="modal-close"
        onClick={this.closeModal}
        className="modal-window__close-btn"
      >
        &times;
      </span>
    );
    var child = React.Children.only(this.props.children);
    var childrenOfChild = React.Children.toArray(child);
    var childrenWithClose = childrenOfChild.concat([close]);
    var clonedElement = React.cloneElement(
      child,
      {
        onClick(e) {
          e.stopPropagation();
        }
      },
      childrenWithClose
    );
    return (
      <ReactModal isOpen={this.props.isOpen} style={modalStyle}>
        <div
          className={`modal-container ${this.props.className}`}
          onClick={e => {
            e.stopPropagation();
            this.closeModal();
          }}
        >
          <div
            onClick={e => {
              e.stopPropagation();
            }}
            className="modal-window"
          >
            {clonedElement}
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
