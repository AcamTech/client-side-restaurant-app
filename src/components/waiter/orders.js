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
                <th>Fecha de Creación</th>
                <th>Estado</th>
                <th>Mesa</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
