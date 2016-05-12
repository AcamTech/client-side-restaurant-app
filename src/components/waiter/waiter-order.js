import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';
import OrderItem from './order-item';

const WaiterOrder = React.createClass({
  propTypes: {
    removeFromOrder: PropTypes.func.isRequired,
    setCommentToItem: PropTypes.func.isRequired,
    createOrder: PropTypes.func.isRequired,
    setTable: PropTypes.func.isRequired,
    order: PropTypes.object,
    tables: PropTypes.array
  },
  onSaveClick() {
    this.props.createOrder();
  },
  onTableSelected(e) {
    this.props.setTable(e.target.value);
  },
  renderOrder(itemKey){
    var item = this.props.order.items[itemKey];
    return (
      <OrderItem key={item.dishId} index={item.dishId} item={item} removeFromOrder={this.props.removeFromOrder} setCommentToItem={this.props.setCommentToItem} />
    );
  },
  renderTableOption(table) {
    return (
      <option key={table.number} value={table.number}>Mesa {table.number}</option>
    );
  },
  render(){
    var {order, tables} = this.props;

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
          <button className="button button--large button-border button-border--success" onClick={this.onSaveClick}>Despachar Orden</button>
        </div>
      </article>
    );
  }
});

export default WaiterOrder;
