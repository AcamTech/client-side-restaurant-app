import React, {createClass} from 'react';
import ReactDOM, {render, findDOMNode} from 'react-dom';
import 'magnific-popup';
import '../../node_modules/magnific-popup/src/css/main.scss';

var Modal = createClass({
  componentDidMount: function(){
    this.node = findDOMNode(this);
    this.renderDialogContent();
  },
  componentWillReceiveProps: function(newProps) {
    this.renderDialogContent(newProps);
  },
  render: function() {
    return <div className={`mfp-hide ${this.props.className || ''}`} style={{position: 'relative'}} />;
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
  }
});

export default Modal;
