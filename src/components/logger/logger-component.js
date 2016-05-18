import React, {createClass, PropTypes} from 'react';
import alertify from 'alertify.js';

const LoggerComponent = React.createClass({
  displayName: 'logger',
  getDefaultProps(){
    return {
      type: 'log',
      delay: 10000
    };
  },
  propTypes: {
    isOpen: PropTypes.bool,
    type: PropTypes.string,
    messages: PropTypes.string.isRequired,
    delay: PropTypes.number,
    closeLogger: PropTypes.func.isRequired
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
    alertify
      .delay(delay)
      .closeLogOnClick(true)[type](messages, () => {
      this.props.closeLogger();
    });
  },
  render () {
    return (
      <div />
    );
  }
});

export default LoggerComponent;
