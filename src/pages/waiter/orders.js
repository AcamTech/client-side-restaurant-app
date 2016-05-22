import React, {createClass, PropTypes} from 'react';
import {WaiterOrders} from 'containers/waiter';
import {Link} from 'react-router';

const WaiterOrdersPage = createClass({
  displayName: 'Waiters-orders-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <WaiterOrders restaurantId={this.props.params.id} />
    );
  }
});

export default WaiterOrdersPage;
