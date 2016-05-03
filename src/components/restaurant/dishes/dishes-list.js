import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

export default createClass({
  displayName: 'dishes-list',
  propTypes: {
    removeDish: PropTypes.func.isRequired,
    editDish: PropTypes.func.isRequired,
    dishes: PropTypes.array,
    fetchDishes: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    categories: PropTypes.array
  },
  componentDidMount(){
    this.props.fetchCategories(this.props.restaurantId);
    this.props.fetchDishes(this.props.restaurantId);
  },
  parseDishes(dishes){
    return dishes.map((dish) => {
      var category = this.props.categories.find((category) => {
        return category.id === dish.category;
      });
      dish.categoryName = (category && category.name) || '';
      return dish;
    });
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
                <th>Categoría</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {renderRows(this.parseDishes(dishes), restaurantId, ['name', 'price', 'description', 'categoryName'], removeDish, editDish)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
