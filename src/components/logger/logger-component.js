import PropTypes from 'prop-types';
import React from 'react';
import alertify from 'alertify.js';
import createClass from 'create-react-class';

const LoggerComponent = createClass({
  displayName: 'logger',
  propTypes: {
    isOpen: PropTypes.bool,
    type: PropTypes.string,
    messages: PropTypes.string.isRequired,
    delay: PropTypes.number,
    closeLogger: PropTypes.func.isRequired
  },
  getDefaultProps(){
    return {
      type: 'log',
      delay: 10000
    };
  },
  componentDidMount(){
    var {messages, type, delay} = this.props;
    this.showAlert(delay, type, messages);
  },
  componentWillUpdate(nextProps){
    var {messages, type, delay} = this.props;
    this.props.closeLogger();
    console.warn(nextProps.messages);
    this.showAlert(delay, type, nextProps.messages);
  },
  showAlert(delay, type, messages){
    setTimeout(() => {
      this.props.closeLogger();
    }, 10);
    alertify
      .delay(delay)
      .closeLogOnClick(true)[type](messages);
  },
  render () {
    return (
      <div />
    );
  }
});

export default LoggerComponent;
