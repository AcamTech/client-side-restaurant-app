import PropTypes from 'prop-types';
import React from 'react';
import { WaiterOrders } from 'containers/waiter';
import { Link } from 'react-router';

function WaiterOrdersPage({ params }) {
  return <WaiterOrders restaurantId={this.props.params.id} />;
}

WaiterOrdersPage.displayName = 'Waiters-orders-page';
WaiterOrdersPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default WaiterOrdersPage;
