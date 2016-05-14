import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DishesList } from 'components/restaurant';
import { fetchDishes, removeDish } from 'actions/dishes';
import { fetchCategories } from 'actions/categories';
import { editDish } from 'actions/dishes-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  var dishes = state.dishes.list.map(dish => state.entities.dishes[dish]);
  return {
    restaurantId: props.restaurantId,
    dishes,
    categories: objectToArray(state.categories.list || {})
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchDishes, fetchCategories, removeDish, editDish}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesList);
