import React, {createClass, PropTypes} from 'react';
import {KitchenOrders} from 'containers/kitchen';
import {Link} from 'react-router';

const KitchenOrdersPage = createClass({
  displayName: 'Kitchen-orders-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <KitchenOrders restaurantId={this.props.params.id} />
    );
  }
});

export default KitchenOrdersPage;

// '<div className="kitchen-layout__body kitchen-order__container"><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div><div className="kitchen-order">item</div></div>'
