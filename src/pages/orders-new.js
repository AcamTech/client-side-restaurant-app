import React, {createClass, PropTypes} from 'react';

const OrdersNew = createClass({
  displayName: 'Order',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>New Order</h1>
      </div>
    );
  }
});

export default OrdersNew;