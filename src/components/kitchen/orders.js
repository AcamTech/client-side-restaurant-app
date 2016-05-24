import React, {createClass, PropTypes} from 'react';
import Select from 'react-select';
import FormatHelpers from 'helpers/format-helpers';
import stateMappings, * as states from 'constants/states';

export default createClass({
  displayName: 'orders-list',
  propTypes: {
    waiterId: PropTypes.string.isRequired,
    orders: PropTypes.array,
    fetchOrders: PropTypes.func.isRequired,
    listenOrders: PropTypes.func.isRequired,
    stopListenningOrders: PropTypes.func.isRequired,
    updateOrderState: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  componentDidMount(){
    const {fetchOrders, restaurantId, listenOrders} = this.props;

    fetchOrders(restaurantId);
    listenOrders(restaurantId);
  },
  componentWillUnmount(){
    stopListenningOrders(this.props.restaurantId);
  },
  isOrderVisible(order) {
    return order.state === 'QUEUED';
  },
  getVisibleOrders() {
    return this.props.orders.filter(this.isOrderVisible);
  },
  renderOrder(order){
    const self = this;

    return (
      <article className="kitchen-order" key={order.id} index={order.id}>
        Orden: {order.id}
      </article>
    );
  },
  render(){
    var visibleOrders = this.getVisibleOrders();

    return (
      <div className="kitchen-layout__body kitchen-order__container">
        {visibleOrders.length ? visibleOrders.map(this.renderOrder) : <div className="grid-tiles__empty-state">No hay órdenes para mostrar</div>}
      </div>
    );
  }
});
