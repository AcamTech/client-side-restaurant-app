import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

export default createClass({
  displayName: 'categories-list',
  propTypes: {
    removeCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
    categories: PropTypes.array,
    fetchCategories: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  componentDidMount(){
    this.props.fetchCategories(this.props.restaurantId);
  },
  render(){
    var {categories, restaurantId, removeCategory, editCategory} = this.props;
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
              {renderRows(categories, restaurantId, ['name'], removeCategory, editCategory)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
