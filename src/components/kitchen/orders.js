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
      <div key={item.name} index={item.name} className="kitchen-order__item">
        <p className="kitchen-order__item-title">
          <span className="kitchen-order__item-quantity">{item.quantity}</span>
          <span className="kitchen-order__item-name">{item.name}</span>
        </p>
        {item.comment ?
          (<p className="kitchen-order__item-comment">{item.comment}</p>)
        : ''}
      </div>
    );
  },
  renderOrder(order){
    const self = this;
    const {items, id} = order;

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
      if (order.state === 'QUEUED' || order.state === 'CHANGE_REQ') {
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

    return (
      <article className="grid__item medium--one-third" key={id} index={id}>
        <div className="kitchen-order">
          <div className="kitchen-order__items">
            {Object.keys(items).map((itemId) => (this.renderItem(items[itemId])))}
          </div>
          <div className="kitchen-order__buttons">
            {getButtons()}
          </div>
        </div>
      </article>
    );
  },
  render(){
    var visibleOrders = this.getVisibleOrders();

    return (
      <div className="full-height grid kitchen-order__container">
        {visibleOrders.length ? visibleOrders.map(this.renderOrder) : <div className="grid-tiles__empty-state">No hay órdenes para mostrar</div>}
      </div>
    );
  }
});
