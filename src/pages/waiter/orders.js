import React, {createClass, PropTypes} from 'react';
import {WaiterOrders} from 'containers/waiter';
import {Link} from 'react-router';

const WaiterOrdersPage = createClass({
  displayName: 'Tables-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <div className="main-area">
        <WaiterOrders restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default WaiterOrdersPage;
