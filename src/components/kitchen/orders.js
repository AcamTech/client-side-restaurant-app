import React, {createClass, PropTypes} from 'react';
import Select from 'react-select';
import { OrderItems } from 'components/order-items';
import FormatHelpers, {objectToArray} from 'helpers/format-helpers';
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
    this.props.stopListenningOrders(this.props.restaurantId);
  },
  isOrderVisible(order) {
    return order.state === 'QUEUED'||order.state==='IN_PROCESS'||order.state === 'CHANGE_REQ';
  },
  getVisibleOrders() {
    return this.props.orders.filter(this.isOrderVisible);
  },
  acceptOrder(order) {
    this.props.updateOrderState(order, 'accept');
  },
  rejectOrder(order) {
    this.props.updateOrderState(order, 'reject');
  },
  finishOrder(order) {
    this.props.updateOrderState(order, 'finish');
  },
  renderItem(item){
    return (
      <div key={item.name} index={item.name} className="order-items__item">
        <p className="order-items__item-title">
          <span className="order-items__item-quantity">{item.quantity}</span>
          <span className="order-items__item-name">{item.name}</span>
        </p>
        {item.comment ?
          (<p className="order-items__item-comment">{item.comment}</p>)
        : ''}
      </div>
    );
  },
  renderOrder(order){
    const self = this;
    var {items, id} = order;

    function onClickAccept() {
      self.acceptOrder(order);
    }

    function onClickReject() {
      self.rejectOrder(order);
    }

    function onClickFinish() {
      self.finishOrder(order);
    }

    function getButtons() {
      if (order.state === 'QUEUED'||order.state === 'CHANGE_REQ') {
        return (
          <div className="grid">
            <div className="grid__item one-half">
              <button onClick={onClickAccept} className="button button-border button-border--success button--block button--small">Aceptar</button>
            </div><div className="grid__item one-half">
              <button onClick={onClickReject} className="button button-border button-border--danger button--block button--small">Rechazar</button>
            </div>
          </div>
        );
      }
      if (order.state === 'IN_PROCESS') {
        return (
          <div className="grid">
            <div className="grid__item one-half">
              <button onClick={onClickFinish} className="button button-border button-border--success button--block button--small">Terminar</button>
            </div>
          </div>
        );
      }
      return '';
    }
    items = objectToArray(items || {});
    return (
        <article className="kitchen-order" key={id} index={id}>
          <div className="kitchen-order__head">
            <h1 className="delta kitchen-order__title">Orden #{order.orderNumber}</h1>
          </div>
          <OrderItems items={items} />
          <div className="kitchen-order__buttons">
            {getButtons()}
          </div>
        </article>
    );
  },
  render(){
    var visibleOrders = this.getVisibleOrders();

    return (
      <div className="kitchen-orders full-height">
        {visibleOrders.length ? visibleOrders.map(this.renderOrder) : <div className="grid-tiles__empty-state">No hay órdenes para mostrar</div>}
      </div>
    );
  }
});
