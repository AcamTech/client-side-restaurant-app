import React, {createClass, PropTypes} from 'react';
import {WaiterNewOrder} from 'containers/waiter';

const WaiterNewOrderPage = createClass({
  displayName: 'new-order-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <WaiterNewOrder restaurantId={this.props.params.id} />      
    );
  }
});

export default WaiterNewOrderPage;
