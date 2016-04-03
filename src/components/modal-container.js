import React, {createClass, PropTypes} from 'react';
import Modal from 'react-modal';

const ModalContainer = createClass({
  propTypes:{
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired
  },
  render(){
    return (
      <div className="modal-container">
        <button onClick={this.props.closeModal} className="modal-container__close">Close</button>
        {this.props.children}
      </div>
    );
  }
});

export default ModalContainer;
