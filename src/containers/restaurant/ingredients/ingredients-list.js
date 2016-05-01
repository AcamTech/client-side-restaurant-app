import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IngredientsList } from 'components/restaurant';
import { fetchIngredients, removeIngredient } from 'actions/ingredients';
import { editIngredient } from 'actions/ingredients-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  return {
    restaurantId: props.restaurantId,
    ingredients: objectToArray(state.ingredients.list || {})
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchIngredients, removeIngredient, editIngredient}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsList);
