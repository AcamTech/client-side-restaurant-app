import PropTypes from 'prop-types';
import React from 'react';
import FormatHelpers from 'helpers/format-helpers';
import OrderItem from './order-item';
import {Link} from 'react-router';

class WaiterOrder extends React.Component {
  static propTypes = {
    removeFromOrder: PropTypes.func.isRequired,
    setCommentToItem: PropTypes.func.isRequired,
    saveOrder: PropTypes.func.isRequired,
    setTable: PropTypes.func.isRequired,
    order: PropTypes.object,
    tables: PropTypes.array,
    restaurantId: PropTypes.string
  };

  onSaveClick = () => {
    this.props.saveOrder();
  };

  onTableSelected = (e) => {
    this.props.setTable(e.target.value);
  };

  renderOrder = (itemKey) => {
    var item = this.props.order.items[itemKey];
    return (
      <OrderItem key={itemKey} index={itemKey} item={item} removeFromOrder={this.props.removeFromOrder} setCommentToItem={this.props.setCommentToItem} />
    );
  };

  renderTableOption = (table) => {
    return (
      <option key={table.number} value={table.number}>Mesa {table.number}</option>
    );
  };

  render() {
    var {order, tables} = this.props;
    var saveText = (order.id) ? 'Actualizar' : 'Crear';

    return (
      <article>
        <h1 className="delta weight--light">Orden</h1>
        <div className="form-group">
          <div className="select">
            <select className="form-control input--small" value={order.table} onChange={this.onTableSelected}>
              <option value="" disabled>Escoja una mesa</option>
              {tables.map(this.renderTableOption)}
            </select>
          </div>
        </div>
        <ul className="list-unstyled">
          {Object.keys(order.items).map(this.renderOrder)}
        </ul>
        <p className="epsilon text--end split">
        <span className="split__title">
          Total:
        </span>
        {FormatHelpers.formatPrice(order.total)}</p>
        <div className="text--end">
          <div className="grid">
            <div className="grid__item medium--one-half">
              <button className="button button--block button-border button-border--success" onClick={this.onSaveClick}>{saveText}</button>
            </div><div className="grid__item medium--one-half">
              <Link className="button button--block button-border button-border--danger" to={`/restaurante/${this.props.restaurantId}/ordenes/lista`}>Cancelar</Link>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default WaiterOrder;
