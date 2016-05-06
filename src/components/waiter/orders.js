import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

export default createClass({
  displayName: 'orders-list',
  propTypes: {
    orders: PropTypes.array,
    fetchOrders: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  componentDidMount(){
    this.props.fetchOrders(this.props.restaurantId);
  },
  renderOrder(order){
    return (
      <tr key={order.id} index={order.id}>
        <td>{order.number}</td>
        <td>Fecha de Creación</td>
        <td>{order.state}</td>
        <td>Mesa</td>
        <td><button className="button button--small button--secondary">Detalles</button></td>
      </tr>
    );
  },
  render(){
    var {orders, restaurantId} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Número</th>
                <th>Fecha de Atención</th>
                <th>Estado</th>
                <th>Mesa</th>
                <th></th>
              </tr>
              {this.props.orders.map(this.renderOrder)}
            </thead>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
