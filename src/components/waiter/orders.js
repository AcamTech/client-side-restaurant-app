import React, {createClass, PropTypes} from 'react';

export default createClass({
  displayName: 'orders-list',
  propTypes: {
    waiterId: PropTypes.string.isRequired,
    orders: PropTypes.array,
    fetchOrders: PropTypes.func.isRequired,
    fetchOrdersForWaiter: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    listenForWaiterOrders: PropTypes.func.isRequired,
    stopListenningForWaiterOrders: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchOrdersForWaiter(this.props.waiterId, this.props.restaurantId);
    this.props.listenForWaiterOrders(this.props.restaurantId);
  },
  componentWillUnmount(){
    this.props.stopListenningForWaiterOrders(this.props.restaurantId);
  },
  renderOrder(order){
    return (
      <article className="tile" key={order.id} index={order.id}>
        <p>{order.state}</p>
        <div className="tile__footer">
          <h1 className="zeta flush--top tile__title">Orden # {order.number}</h1>
          <p className="tile__text">Fecha de Creación</p>
          <p className="tile__text">Mesa</p>
        </div>
      </article>
    );
  },
  render(){
    var {orders, restaurantId} = this.props;
    return (
      <div className="grid-tiles">
        {this.props.orders.map(this.renderOrder)}
      </div>
    );
  }
});
