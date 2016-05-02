import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DishesList } from 'components/restaurant';
import { fetchDishes, removeDish } from 'actions/dishes';
import { editDish } from 'actions/dishes-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  return {
    restaurantId: props.restaurantId,
    dishes: objectToArray(state.dishes.list || {})
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchDishes, removeDish, editDish}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesList);
