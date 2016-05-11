import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';
import OrderItem from './order-item';

const WaiterOrder = React.createClass({
  propTypes: {
    removeFromOrder: PropTypes.func.isRequired,
    setCommentToItem: PropTypes.func.isRequired,
    setTable: PropTypes.func.isRequired,
    order: PropTypes.object,
    tables: PropTypes.array
  },
  onSaveClick() {
    console.log(this.props.order);
  },
  onTableSelected(e) {
    this.props.setTable(e.target.value);
  },
  renderOrder(itemKey){
    var item = this.props.order.items[itemKey];
    return (
      <OrderItem key={itemKey} index={itemKey} item={item} removeFromOrder={this.props.removeFromOrder} setCommentToItem={this.props.setCommentToItem} />
    );
  },
  renderTableOption(table) {
    return (
      <option value={table.number}>Mesa {table.number}</option>
    );
  },
  render(){
    var {order, tables} = this.props;

    return (
      <article>
        <h1 className="delta weight--light">Orden</h1>
        <select value={order.table} onChange={this.onTableSelected}>
          <option value="" disabled>Escoja una mesa</option>
          {tables.map(this.renderTableOption)}
        </select>
        <ul className="list-unstyled">
          {Object.keys(order.items).map(this.renderOrder)}
        </ul>
        <p className="epsilon text--end split">
        <span className="split__title">
          Total:
        </span>
        {FormatHelpers.formatPrice(order.total)}</p>
        <button onClick={this.onSaveClick}>Guardar</button>
      </article>
    );
  }
});

export default WaiterOrder;
