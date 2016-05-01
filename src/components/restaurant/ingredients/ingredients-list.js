import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

export default createClass({
  displayName: 'ingredients-list',
  propTypes: {
    removeIngredient: PropTypes.func.isRequired,
    editIngredient: PropTypes.func.isRequired,
    ingredients: PropTypes.array,
    fetchIngredients: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  componentDidMount(){
    this.props.fetchIngredients(this.props.restaurantId);
  },
  render(){
    var {ingredients, restaurantId, removeIngredient, editIngredient} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {renderRows(ingredients, restaurantId, ['name'], removeIngredient, editIngredient)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
