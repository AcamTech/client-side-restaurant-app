import React, {createClass, PropTypes} from 'react';
import {WaiterOrders} from 'containers/waiter';

const WaiterOrdersPage = createClass({
  displayName: 'Tables-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <div>
        <div className="grid push--bottom">
          <div className="grid__item medium--one-half">
            <h1 className="delta flush weight--light">Mis Órdenes</h1>
          </div>
        </div>
        <WaiterOrders restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default WaiterOrdersPage;
