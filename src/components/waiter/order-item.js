import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';

const OrderItem = React.createClass({
  propTypes: {
    removeFromOrder: PropTypes.func.isRequired,
    setCommentToItem: PropTypes.func.isRequired,
    index: PropTypes.string,
    item: PropTypes.object
  },
  onButtonClick(){
    this.props.removeFromOrder(this.props.index);
  },
  onCommentChange(e){
    this.props.setCommentToItem(this.props.index, e.target.value);
  },
  render(){
    var item = this.props.item;
    return (
      <li>
        <div className="split">
          <span className="split__title">
            {item.name} <span>x{item.quantity}</span> <button style={{border: 'none', background: 'transparent'}} onClick={this.onButtonClick}>&times;</button>
          </span>
           {FormatHelpers.formatPrice(item.price * item.quantity)}
        </div>
        <textarea value={item.comment} onChange={this.onCommentChange} />
      </li>
    );
  }
});

export default OrderItem;
