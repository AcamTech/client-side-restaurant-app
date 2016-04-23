import React, {createClass, PropTypes} from 'react';
import ReactDOM, {render, findDOMNode} from 'react-dom';
import 'magnific-popup';
import '../../node_modules/magnific-popup/src/css/main.scss';

var Modal = createClass({
  propTypes: {
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string
  },
  componentDidMount: function(){
    this.node = findDOMNode(this);
    this.renderDialogContent();
  },
  componentWillReceiveProps: function(newProps) {
    this.renderDialogContent(newProps);
  },
  renderDialogContent: function(props) {
    props = props || this.props;

    render(<div>{props.children}</div>, this.node);

    if (props.open) {
      $.magnificPopup.open({
        items: {
          src: $(this.node),
          type: 'inline'
        },
        callbacks: {
          close: function(){
            this.props.onClose();
          }.bind(this)
        }
      });
    } else {
      $.magnificPopup.close();
    }
  },
  render: function() {
    return <div className={`mfp-hide ${this.props.className || ''}`} style={{position: 'relative'}} />;
  }
});

export default Modal;
