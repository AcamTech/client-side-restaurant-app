import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

export default createClass({
  displayName: 'dishes-list',
  propTypes: {
    removeDish: PropTypes.func.isRequired,
    editDish: PropTypes.func.isRequired,
    dishes: PropTypes.array,
    fetchDishes: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  componentDidMount(){
    this.props.fetchDishes(this.props.restaurantId);
  },
  render(){
    var {dishes, restaurantId, removeDish, editDish} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {renderRows(dishes, restaurantId, ['name', 'price', 'description'], removeDish, editDish)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
