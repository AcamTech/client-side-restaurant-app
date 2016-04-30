import React, {createClass, PropTypes} from 'react';
import Row from 'components/generic-row';
import {keys, map, compose} from 'ramda';

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
  renderCategories(categories, restaurantId){
    const removeFn = this.props.removeCategory;
    const editFn = this.props.editCategory;
    return categories.map( (item) => {
      var oldItem = {...item};
      var {id} = item;
      return (
        <Row
          key={id}
          id={id}
          data={item}
          restaurantId={restaurantId}
          onClickRemoveHandler={removeCategoryFactory(removeFn, oldItem, restaurantId)}
          onClickEditHandler={editCategoryFactory(editFn, oldItem)} />
      );
    });
  },
  render(){
    var {categories, restaurantId} = this.props;
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
              {this.renderCategories(categories, restaurantId)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});

function removeCategoryFactory(removeFn, category, restaurantId){
  return function removeCategoryFactoryThunk(){
    return removeFn(category, restaurantId);
  };
}

function editCategoryFactory(editFn, category){
  return function editCategoryFactoryThunk(){
    return editFn(category);
  };
}
