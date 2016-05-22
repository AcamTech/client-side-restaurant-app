import React, {createClass, PropTypes} from 'react';
import Select from 'react-select';
import FormatHelpers from 'helpers/format-helpers';

const STATES = {
  'QUEUED': 'En Cola',
  'CANCELED': 'Cancelada'
};

export default createClass({
  displayName: 'orders-list',
  propTypes: {
    waiterId: PropTypes.string.isRequired,
    orders: PropTypes.array,
    newOrder: PropTypes.func.isRequired,
    editOrder: PropTypes.func.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  getInitialState(){
    return { ownerFilter: 'mine', stateFilter: 'active' };
  },
  componentDidMount(){
    this.props.fetchOrders(this.props.restaurantId);
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
    return order.state !== "ARCHIVED" && order.state !== "CANCELED" && order.state !== "DELIVERED";
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
  cancelOrder(id){
    const {waiterId, restaurantId} = this.props;
    this.props.cancelOrder(id, restaurantId, waiterId);
  },
  getVisibleOrders() {
    return this.props.orders.filter(this.isOrderVisible);
  },
  renderOrder(order){
    const self = this;

    function onEdit(e) {
      e.preventDefault();

      self.editOrder(order.id);
    }

    function onCancel(e) {
      e.preventDefault();

      self.cancelOrder(order.id);
    }

    return (
        <article className="tile" key={order.id} index={order.id}>
          <dl className="order__details push--bottom clearfix">
            <dt className="order__detail-name">Mesa #</dt><dd className="order__detail-value">{order.table}</dd>
            <dt className="order__detail-name">Estado</dt><dd className="order__detail-value">{STATES[order.state]}</dd>
            <dt className="order__detail-name">Total</dt><dd className="order__detail-value">{FormatHelpers.formatPrice(order.total)}</dd>
          </dl>
          <div className="grid grid--narrow">
            <div className="grid__item medium--one-half">
              <button onClick={onEdit} className="button button--success button--block button--small">Editar</button>
            </div><div className="grid__item medium--one-half">
              <button onClick={onCancel} className="button button-border button--block button--small">Cancelar</button>
            </div>
          </div>
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
      {label: 'Archivadas', value: 'archived'},
      {label: 'Canceladas', value: 'canceled'}
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
