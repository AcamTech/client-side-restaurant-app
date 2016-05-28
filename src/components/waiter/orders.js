import React, {createClass, PropTypes} from 'react';
import Select from 'react-select';
import FormatHelpers from 'helpers/format-helpers';
import stateMappings, * as states from 'constants/states';

export default createClass({
  displayName: 'orders-list',
  propTypes: {
    waiterId: PropTypes.string.isRequired,
    orders: PropTypes.array,
    newOrder: PropTypes.func.isRequired,
    editOrder: PropTypes.func.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    listenOrders: PropTypes.func.isRequired,
    updateOrderState: PropTypes.func.isRequired,
    stopListenningOrders: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  getInitialState(){
    return { ownerFilter: 'mine', stateFilter: 'active' };
  },
  componentDidMount(){
    const {fetchOrders, restaurantId, listenOrders} = this.props;

    fetchOrders(restaurantId);
    listenOrders(restaurantId);
  },
  componentWillUnmount(){
    this.props.stopListenningOrders(this.props.restaurantId);
  },
  ownerVisibility(order){
    var {ownerFilter} = this.state;

    if (ownerFilter === 'mine') {
      return order.waiter === this.props.waiterId;
    }

    if (ownerFilter === 'others') {
      return order.waiter !== this.props.waiterId;
    }

    return true;
  },
  isOrderActive(order) {
    return order.state !== states.CANCELED && order.state !== states.DELIVERED;
  },
  stateVisibility(order) {
    var {stateFilter} = this.state;

    if (stateFilter === 'active') {
      return this.isOrderActive(order);
    } else {
      return order.state === stateFilter.toUpperCase();
    }
  },
  isOrderVisible(order) {
    return this.ownerVisibility(order) && this.stateVisibility(order);
  },
  newOrder() {
    const {restaurantId} = this.props;
    this.props.newOrder(restaurantId);
  },
  editOrder(id){
    const {waiterId, restaurantId} = this.props;
    this.props.editOrder(id, restaurantId, waiterId);
  },
  cancelOrder(order){
    this.props.updateOrderState(order, 'cancel');
  },
  deliverOrder(order){
    this.props.updateOrderState(order, 'deliver');
  },
  rejectOrder(order){
    this.props.updateOrderState(order, 'client_reject');
  },
  restartOrder(order){
    this.props.updateOrderState(order, 'restart');
  },
  getVisibleOrders() {
    return this.props.orders.filter(this.isOrderVisible);
  },
  renderOrder(order){
    const self = this;

    function onEdit() {
      self.editOrder(order.id);
    }

    function onCancel() {
      self.cancelOrder(order);
    }

    function onDeliver() {
      self.deliverOrder(order);
    }

    function onRejected() {
      self.rejectOrder(order);
    }

    function onRestart() {
      self.restartOrder(order);
    }

    function getButtons() {
      if (order.state === 'QUEUED' || order.state === 'IN_PROCESS' || order.state === 'REJECTED') {
        return (
          <div className="grid grid--narrow">
            <div className="grid__item medium--one-half">
              <button onClick={onEdit} className="button button-border button--block button--small">Editar</button>
            </div><div className="grid__item medium--one-half">
              <button onClick={onCancel} className="button button-border button--block button--small">Anular</button>
            </div>
          </div>
        );
      }

      if (order.state === 'READY') {
        return (
          <div className="grid grid--narrow">
            <div className="grid__item medium--one-half">
              <button onClick={onDeliver} className="button button-border button--block button--small">Entregada</button>
            </div><div className="grid__item medium--one-half">
              <button onClick={onRejected} className="button button-border button--block button--small">Rechazada</button>
            </div>
          </div>
        );
      }

      if (order.state === 'CLIENT_REJECTED') {
        return (
          <div className="grid grid--narrow">
            <div className="grid__item medium--one-half">
              <button onClick={onRestart} className="button button-border button--block button--small">Reiniciar</button>
            </div><div className="grid__item medium--one-half">
              <button onClick={onCancel} className="button button-border button--block button--small">Anular</button>
            </div>
          </div>
        );
      }

      return ('');
    }

    function getDishes() {
      return Object.keys(order.items).map(id => {
        return (
          <div key={id} index={id}>{order.items[id].name}</div>
        );
      });
    }

    return (
        <article className="tile" key={order.id} index={order.id}>
          <h1 className="order__title">{getDishes()}</h1>
          <dl className="order__details push--bottom clearfix">
            <dt className="order__detail-name">Mesa #</dt><dd className="order__detail-value">{order.table}</dd>
            <dt className="order__detail-name">Estado</dt><dd className="order__detail-value">{stateMappings[order.state]}</dd>
          </dl>
          {getButtons()}
        </article>
      );
  },
  onOwnerFilterChange(filter){
    this.setState({ownerFilter: filter.value});
  },
  onStateFilterChange(filter){
    this.setState({stateFilter: filter.value});
  },
  render(){
    var {orders} = this.props;
    var ownerFilterOptions = [
      {label: 'Mías', value: 'mine'},
      {label: 'De otros', value: 'others'},
      {label: 'De Todos', value: ''}
    ];
    var stateFilterOptions = [
      {label: 'Activas', value: 'active'},
      {label: 'Entregadas', value: 'delivered'},
      {label: 'Anuladas', value: 'canceled'}
    ];
    var visibleOrders = this.getVisibleOrders();

    return (
      <div>
        <div className="grid push--bottom">
          <div className="grid__item medium--one-eighth">
            <button onClick={this.newOrder} className="button button--success button--block pull-right">Crear Orden</button>
          </div><div className="grid__item medium--one-eighth">
            <Select onChange={this.onOwnerFilterChange} clearable={false} searchable={false} name="ownerFilter" value={this.state.ownerFilter} options={ownerFilterOptions} />
          </div>
          <div className="grid__item medium--one-eighth">
            <Select onChange={this.onStateFilterChange} clearable={false} searchable={false} name="stateFilter" value={this.state.stateFilter} options={stateFilterOptions} />
          </div>
        </div>
        <div className="grid-tiles">
          {visibleOrders.length ? visibleOrders.map(this.renderOrder) : <div className="grid-tiles__empty-state">No hay órdenes para mostrar</div>}
        </div>
      </div>
    );
  }
});
