import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import { WaiterNewOrder } from 'containers/waiter';

function WaiterNewOrderPage({ params }) {
  return <WaiterNewOrder restaurantId={this.props.params.id} />;
}

WaiterNewOrderPage.displayName = 'new-order-page';
WaiterNewOrderPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default WaiterNewOrderPage;
