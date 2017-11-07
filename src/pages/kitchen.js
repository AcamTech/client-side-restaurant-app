import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import { KitchenOrders } from 'containers/kitchen';
import { Link } from 'react-router';

function KitchenOrdersPage({ params }) {
  return <KitchenOrders restaurantId={this.props.params.id} />;
}

KitchenOrdersPage.displayName = 'Kitchen-orders-page';
KitchenOrdersPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default KitchenOrdersPage;

// '<div className="kitchen-layout__body kitchen-order__container"><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div></div>'
